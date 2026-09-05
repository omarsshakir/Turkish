/**
 * "What should I study today?"
 *
 * Turns the student's progress state into a short, ordered list of concrete
 * next actions. The ordering is opinionated and deliberate:
 *
 *   1. Due reviews        — decay is the only thing with a deadline
 *   2. Unfinished lesson  — resuming beats starting something new
 *   3. Weak vocabulary    — words the SRS says are actively slipping
 *   4. Next lesson        — forward progress
 *   5. Skill gaps         — a skill (listening / speaking) not practised lately
 *
 * Everything returned is derived from real state. When there is genuinely
 * nothing pressing, the list says so rather than inventing busywork.
 */
import type { Lesson, LevelId, VocabItem } from '@/types/content';
import type { ReviewCard } from './srs';

export type RecommendationKind =
  | 'review' | 'resume' | 'weak-words' | 'next-lesson'
  | 'listening' | 'speaking' | 'new-words' | 'all-clear';

export interface Recommendation {
  kind: RecommendationKind;
  /** Turkish headline. */
  title: string;
  /** One-line reason, in both support languages. */
  reason: { ar: string; ku: string };
  href: string;
  /** Call-to-action label, Turkish. */
  cta: string;
  /** Rough minutes, so the student can pick by the time they have. */
  minutes: number;
  /** Higher sorts first. */
  priority: number;
  /** Optional count badge — cards due, words weak, etc. */
  count?: number;
  /** Lucide icon name resolved by the dashboard. */
  icon: string;
  tone: 'brand' | 'accent' | 'green' | 'amber' | 'rose' | 'violet';
}

export interface RecommendInput {
  dueCount: number;
  cards: ReviewCard[];
  lessons: Lesson[];
  completedLessons: string[];
  lastLessonId: string | null;
  vocabulary: VocabItem[];
  learnedWords: string[];
  currentLevel: LevelId;
  /** Days since the last listening session, or null if never. */
  daysSinceListening: number | null;
  /** Days since the last speaking session, or null if never. */
  daysSinceSpeaking: number | null;
  reviewsToday: number;
}

/** Cards the scheduler is struggling with: low ease or repeated lapses. */
export function weakCards(cards: ReviewCard[]): ReviewCard[] {
  return cards
    .filter((c) => (c.state === 'review' || c.state === 'relearning')
      && (c.ease <= 2.0 || c.lapses >= 2))
    .sort((a, b) => (a.ease - b.ease) || (b.lapses - a.lapses));
}

export function recommend(input: RecommendInput): Recommendation[] {
  const out: Recommendation[] = [];

  /* 1. Due reviews — the only thing with a real deadline. */
  if (input.dueCount > 0) {
    out.push({
      kind: 'review',
      title: `${input.dueCount} kart tekrar bekliyor`,
      reason: {
        ar: 'هذه الكلمات على وشك أن تُنسى. مراجعتها الآن أرخص من إعادة تعلّمها لاحقاً.',
        ku: 'ئەم وشانە خەریکە لەبیر بکرێن. ئێستا پێداچوونەوەیان هەرزانترە لە دووبارە فێربوونیان.',
      },
      href: '/review',
      cta: 'Tekrara başla',
      minutes: Math.min(25, Math.max(3, Math.round(input.dueCount * 0.4))),
      priority: 100,
      count: input.dueCount,
      icon: 'Brain',
      tone: 'rose',
    });
  }

  /* 2. A lesson that was started but never finished. */
  const lastLesson = input.lastLessonId
    ? input.lessons.find((l) => l.id === input.lastLessonId)
    : undefined;
  if (lastLesson && !input.completedLessons.includes(lastLesson.id)) {
    out.push({
      kind: 'resume',
      title: `Yarım kalan ders: ${lastLesson.title}`,
      reason: {
        ar: 'بدأت هذا الدرس ولم تُنهه. إنهاء ما بدأته أفضل من فتح درس جديد.',
        ku: 'دەستت بەم وانەیە کردووە و تەواوت نەکردووە. تەواوکردنی ئەوەی دەستت پێکردووە باشترە.',
      },
      href: `/lesson/${lastLesson.id}`,
      cta: 'Derse dön',
      minutes: lastLesson.minutes,
      priority: 90,
      icon: 'PlayCircle',
      tone: 'brand',
    });
  }

  /* 3. Vocabulary the scheduler says is slipping. */
  const weak = weakCards(input.cards);
  if (weak.length >= 3) {
    out.push({
      kind: 'weak-words',
      title: `${weak.length} zorlandığın kelime`,
      reason: {
        ar: 'هذه الكلمات تسقط منك مراراً. تدرّب عليها وحدها بدل خلطها بالسهل.',
        ku: 'ئەم وشانە بەردەوام لەبیرت دەچن. بە تەنها ڕاهێنانیان لەسەر بکە.',
      },
      href: '/practice/vocabulary',
      cta: 'Zayıf kelimeleri çalış',
      minutes: 10,
      priority: 70,
      count: weak.length,
      icon: 'AlertTriangle',
      tone: 'amber',
    });
  }

  /* 4. The next unstarted lesson in the current level. */
  const nextLesson = input.lessons
    .filter((l) => l.level === input.currentLevel)
    .find((l) => !input.completedLessons.includes(l.id) && l.id !== lastLesson?.id);
  if (nextLesson) {
    out.push({
      kind: 'next-lesson',
      title: `Sıradaki ders: ${nextLesson.title}`,
      reason: {
        ar: 'الخطوة التالية في مسارك. درس واحد في اليوم يكفي للتقدّم الثابت.',
        ku: 'هەنگاوی داهاتوو لە ڕێگاکەتدا. ڕۆژی یەک وانە بەسە بۆ پێشکەوتنی جێگیر.',
      },
      href: `/lesson/${nextLesson.id}`,
      cta: 'Derse başla',
      minutes: nextLesson.minutes,
      priority: 60,
      icon: 'GraduationCap',
      tone: 'violet',
    });
  }

  /* 5. A skill that has gone quiet. */
  if (input.daysSinceListening === null || input.daysSinceListening >= 3) {
    out.push({
      kind: 'listening',
      title: input.daysSinceListening === null
        ? 'Dinleme alıştırmasını hiç denemedin'
        : `${input.daysSinceListening} gündür dinleme yapmadın`,
      reason: {
        ar: 'الاستماع أسرع مهارة تضمر. عشر دقائق تكفي لإبقاء أذنك حادّة.',
        ku: 'گوێگرتن خێراترین کارامەییە کە لاواز دەبێت. دە خولەک بەسە.',
      },
      href: '/practice/listening',
      cta: 'Dinlemeye git',
      minutes: 10,
      priority: 50,
      icon: 'Headphones',
      tone: 'green',
    });
  }

  if (input.daysSinceSpeaking === null || input.daysSinceSpeaking >= 5) {
    out.push({
      kind: 'speaking',
      title: input.daysSinceSpeaking === null
        ? 'Konuşma alıştırmasını hiç denemedin'
        : `${input.daysSinceSpeaking} gündür sesli tekrar yapmadın`,
      reason: {
        ar: 'النطق لا يتحسّن بالقراءة الصامتة. كرّر بصوت عالٍ ولو خمس دقائق.',
        ku: 'دەربڕین بە خوێندنەوەی بێدەنگ باش نابێت. با پێنج خولەکیش بێت بە دەنگی بەرز دووبارە بکەوە.',
      },
      href: '/practice/speaking',
      cta: 'Konuşmaya git',
      minutes: 8,
      priority: 40,
      icon: 'Mic',
      tone: 'accent',
    });
  }

  /* 6. Nothing scheduled at all — offer to grow the deck. */
  const unlearnedInLevel = input.vocabulary.filter(
    (w) => w.level === input.currentLevel && !input.learnedWords.includes(w.id),
  ).length;
  if (input.cards.length === 0 && unlearnedInLevel > 0) {
    out.push({
      kind: 'new-words',
      title: 'Tekrar destesi henüz boş',
      reason: {
        ar: 'أضف كلمات إلى مجموعة المراجعة ليبدأ نظام التكرار المتباعد بالعمل.',
        ku: 'وشە بۆ کۆمەڵەی پێداچوونەوە زیاد بکە تا سیستەمی دووبارەکردنەوە دەست بکات.',
      },
      href: '/review',
      cta: 'Kelime ekle',
      minutes: 5,
      priority: 95,
      count: unlearnedInLevel,
      icon: 'Plus',
      tone: 'brand',
    });
  }

  /* Nothing pressing — say so honestly. */
  if (out.length === 0) {
    out.push({
      kind: 'all-clear',
      title: 'Bugünlük her şey tamam',
      reason: {
        ar: 'لا مراجعات مستحقّة ولا دروس معلّقة. استرح، أو تصفّح مفرداتك المفضّلة.',
        ku: 'نە پێداچوونەوەی کاتی هاتووە نە وانەی ماوە. پشوو بدە، یان سەیری دڵخوازەکانت بکە.',
      },
      href: '/favorites',
      cta: 'Favorilere göz at',
      minutes: 5,
      priority: 1,
      icon: 'CheckCircle2',
      tone: 'green',
    });
  }

  return out.sort((a, b) => b.priority - a.priority);
}

/** Whole days between an ISO timestamp and now, or null if the input is empty. */
export function daysSince(iso: string | undefined): number | null {
  if (!iso) return null;
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return null;
  return Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
}
