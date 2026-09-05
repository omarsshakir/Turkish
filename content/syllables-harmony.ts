import type { SyllableSection } from '@/types/content';
import { b, p, syl } from './shared/helpers';

/**
 * Vowel harmony, tested against real words — including the ones that break it.
 *
 * The grammar lesson states the rule. This section does the opposite: it hands
 * a student forty actual words and asks them to *hear* whether the vowels
 * agree, because harmony is something a fluent speaker feels rather than
 * computes. A learner who has to derive `-ler` vs `-lar` each time is still
 * translating.
 *
 * The second half is the part textbooks skip: **harmony is not a law of
 * nature, it is a tendency of native words.** Loanwords routinely break it —
 * `kitap`, `saat`, `otobüs`, `televizyon` — and so do a handful of native
 * words like `anne`, `kardeş` and `hangi`. A student told that harmony is
 * absolute will conclude they misheard. They did not.
 */

/* ------------------------------------------------------------------ */
/* Two-way harmony: does the suffix take -e or -a?                     */
/* ------------------------------------------------------------------ */

const TWO_WAY: SyllableSection = {
  id: 'harmony-two',
  title: 'e mi, a mı?',
  subtitle: b('الانسجام الثنائي في كلمات حقيقية', 'هارمۆنی دوانی لە وشەی ڕاستەقینەدا'),
  explain: b(
    'القاعدة سطر واحد: إن كانت آخر حركة في الكلمة أمامية (e i ö ü) فاللاحقة تأخذ e؛ وإن كانت خلفية (a ı o u) فتأخذ a. اقرأ كل كلمة بصوت عالٍ ولاحظ أن اللاحقة «تُكمل» صوت الكلمة بدل أن تصطدم به. الهدف أن تسمع الانسجام لا أن تحسبه.',
    'یاساکە یەک دێڕە: ئەگەر دوایین دەنگدار پێشەوە بێت (e i ö ü) پاشگرەکە e وەردەگرێت؛ ئەگەر دواوە بێت (a ı o u) ئەوا a.',
  ),
  entries: [
    syl('evler', 'ev|ler', 'ev-LER', 'بيوت — e أمامية ⇒ -ler', 'ماڵەکان'),
    syl('kitaplar', 'ki|tap|lar', 'ki-tap-LAR', 'كتب — a خلفية ⇒ -lar', 'کتێبەکان'),
    syl('gözler', 'göz|ler', 'göz-LER', 'عيون — ö أمامية ⇒ -ler', 'چاوەکان'),
    syl('okullar', 'o|kul|lar', 'o-kul-LAR', 'مدارس — u خلفية ⇒ -lar', 'قوتابخانەکان'),
    syl('günler', 'gün|ler', 'gün-LER', 'أيام — ü أمامية ⇒ -ler', 'ڕۆژەکان'),
    syl('kızlar', 'kız|lar', 'kız-LAR', 'بنات — ı خلفية ⇒ -lar', 'کچەکان'),
    syl('şehirler', 'şe|hir|ler', 'şe-hir-LER', 'مدن — i أمامية ⇒ -ler', 'شارەکان'),
    syl('sorular', 'so|ru|lar', 'so-ru-LAR', 'أسئلة — u خلفية ⇒ -lar', 'پرسیارەکان'),
    syl('eve', 'e|ve', 'e-VE', 'إلى البيت — -e', 'بۆ ماڵ'),
    syl('okula', 'o|ku|la', 'o-ku-LA', 'إلى المدرسة — -a', 'بۆ قوتابخانە'),
    syl('gözde', 'göz|de', 'göz-DE', 'في العين — -de', 'لە چاودا'),
    syl('yolda', 'yol|da', 'yol-DA', 'في الطريق — -da', 'لە ڕێگادا'),
    syl('evden', 'ev|den', 'ev-DEN', 'من البيت — -den', 'لە ماڵەوە'),
    syl('sınıftan', 'sı|nıf|tan', 'sı-nıf-TAN', 'من الصفّ — -tan', 'لە پۆلەوە'),
  ],
  pairs: [
    {
      a: p('evler', 'ev-LER', 'بيوت', 'ماڵەکان'),
      b: p('kitaplar', 'ki-tap-LAR', 'كتب', 'کتێبەکان'),
      contrast: b(
        'نفس اللاحقة بصوتين: e بعد الحركات الأمامية، a بعد الخلفية. جرّب أن تقول «evlar» — ستشعر بالاصطدام.',
        'هەمان پاشگر بە دوو دەنگ: e دوای پێشەوە، a دوای دواوە.',
      ),
    },
    {
      a: p('evden', 'ev-DEN', 'من البيت', 'لە ماڵەوە'),
      b: p('sınıftan', 'sı-nıf-TAN', 'من الصفّ', 'لە پۆلەوە'),
      contrast: b(
        'هنا انسجامان في وقت واحد: الحركة (e/a) والحرف الساكن (d/t بعد f المهموسة).',
        'لێرەدا دوو هارمۆنی: دەنگدار و بێدەنگ.',
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Four-way harmony: ı i u ü                                           */
/* ------------------------------------------------------------------ */

const FOUR_WAY: SyllableSection = {
  id: 'harmony-four',
  title: 'ı · i · u · ü',
  subtitle: b('الانسجام الرباعي', 'هارمۆنی چواری'),
  explain: b(
    'لواحق أخرى تختار من أربع حركات لا من اثنتين، فتراعي الاستدارة أيضاً: بعد a/ı تأتي ı، وبعد e/i تأتي i، وبعد o/u تأتي u، وبعد ö/ü تأتي ü. اللاحقة الأشهر هنا هي المفعول به (-ı/-i/-u/-ü) واللاحقة الملكية (-ım/-im/-um/-üm).',
    'هەندێک پاشگر لە چوار دەنگداردا هەڵدەبژێرن: ı دوای a/ı، i دوای e/i، u دوای o/u، ü دوای ö/ü.',
  ),
  entries: [
    syl('kızı', 'kı|zı', 'kı-ZI', 'البنتَ — بعد ı تأتي ı', 'کچەکە'),
    syl('evi', 'e|vi', 'e-Vİ', 'البيتَ — بعد e تأتي i', 'ماڵەکە'),
    syl('okulu', 'o|ku|lu', 'o-ku-LU', 'المدرسةَ — بعد u تأتي u', 'قوتابخانەکە'),
    syl('gözü', 'gö|zü', 'gö-ZÜ', 'العينَ — بعد ö تأتي ü', 'چاوەکە'),
    syl('kitabım', 'ki|ta|bım', 'ki-ta-BIM', 'كتابي — a ⇒ ı، و p صارت b', 'کتێبەکەم'),
    syl('evim', 'e|vim', 'e-VİM', 'بيتي — e ⇒ i', 'ماڵەکەم'),
    syl('okulum', 'o|ku|lum', 'o-ku-LUM', 'مدرستي — u ⇒ u', 'قوتابخانەکەم'),
    syl('sözüm', 'sö|züm', 'sö-ZÜM', 'كلمتي — ö ⇒ ü', 'قسەکەم'),
    syl('yazdım', 'yaz|dım', 'yaz-DIM', 'كتبتُ — a ⇒ ı', 'نووسیم'),
    syl('geldim', 'gel|dim', 'gel-DİM', 'جئتُ — e ⇒ i', 'هاتم'),
    syl('okudum', 'o|ku|dum', 'o-ku-DUM', 'قرأتُ — u ⇒ u', 'خوێندمەوە'),
    syl('gördüm', 'gör|düm', 'gör-DÜM', 'رأيتُ — ö ⇒ ü', 'بینیم'),
    syl('çalışkanlık', 'ça|lış|kan|lık', 'ça-lış-kan-LIK', 'الاجتهاد — a ⇒ ı', 'کۆششکاری'),
    syl('güzellik', 'gü|zel|lik', 'gü-zel-LİK', 'الجمال — e ⇒ i', 'جوانی'),
    syl('yorgunluk', 'yor|gun|luk', 'yor-gun-LUK', 'الإرهاق — u ⇒ u', 'ماندووبوون'),
    syl('özgürlük', 'öz|gür|lük', 'öz-gür-LÜK', 'الحرّية — ü ⇒ ü', 'ئازادی'),
  ],
  pairs: [
    {
      a: p('yazdım', 'yaz-DIM', 'كتبتُ', 'نووسیم'),
      b: p('gördüm', 'gör-DÜM', 'رأيتُ', 'بینیم'),
      contrast: b(
        'نفس اللاحقة الماضية بأربعة أشكال. ما يقرّر الشكل هو آخر حركة في الجذر، لا معنى الفعل.',
        'هەمان پاشگری ڕابردوو بە چوار شێوە.',
      ),
    },
    {
      a: p('çalışkanlık', 'ça-lış-kan-LIK', 'الاجتهاد', 'کۆششکاری'),
      b: p('özgürlük', 'öz-gür-LÜK', 'الحرّية', 'ئازادی'),
      contrast: b(
        'لاحقة الاسم المجرّد -lık/-lik/-luk/-lük: أربع صور لمعنى واحد.',
        'پاشگری -lık بە چوار شێوە.',
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Words that break the rule                                           */
/* ------------------------------------------------------------------ */

const EXCEPTIONS: SyllableSection = {
  id: 'harmony-exceptions',
  title: 'Uyuma uymayanlar',
  subtitle: b('كلمات تكسر الانسجام', 'وشەکانی هارمۆنی ناشکێنن'),
  explain: b(
    '⚠️ الانسجام قاعدة الكلمات التركية الأصيلة، لا قانوناً للغة كلها. الدخيل يحتفظ بحركاته: «kitap» فيها i أمامية ثم a خلفية، و«otobüs» فيها o ثم ü. والمهمّ عملياً: اللواحق تنسجم مع **آخر** حركة في الكلمة مهما كان أوّلها — «kitabı» لا «kitabi». وهناك كلمات تركية أصيلة قليلة تكسر القاعدة أيضاً، أشهرها «anne» و«kardeş» و«hangi»؛ تُحفظ ولا تُشتقّ.',
    '⚠️ هارمۆنی یاسای وشە تورکییە ڕەسەنەکانە نەک هەموو زمانەکە. وشەی داخراو دەنگدارەکانی خۆی دەپارێزێت.',
  ),
  entries: [
    syl('kitap', 'ki|tap', 'ki-TAP', 'كتاب — i ثم a: دخيلة عربية', 'کتێب'),
    syl('kitabı', 'ki|ta|bı', 'ki-ta-BI', 'الكتابَ — اللاحقة تتبع a الأخيرة', 'کتێبەکە'),
    syl('saat', 'sa|at', 'sa-AT', 'ساعة — حركتان متجاورتان، دخيلة', 'کاتژمێر'),
    syl('saati', 'sa|a|ti', 'sa-a-Tİ', 'الساعةَ — تأخذ i استثناءً', 'کاتژمێرەکە'),
    syl('otobüs', 'o|to|büs', 'o-to-BÜS', 'حافلة — o ثم ü: دخيلة فرنسية', 'پاس'),
    syl('otobüsü', 'o|to|bü|sü', 'o-to-bü-SÜ', 'الحافلةَ — اللاحقة تتبع ü', 'پاسەکە'),
    syl('televizyon', 'te|le|viz|yon', 'te-le-viz-YON', 'تلفاز — دخيلة', 'تەلەڤزیۆن'),
    syl('doktor', 'dok|tor', 'dok-TOR', 'طبيب — دخيلة فرنسية', 'دکتۆر'),
    syl('anne', 'an|ne', 'an-NE', 'أمّ — تركية أصيلة تكسر القاعدة', 'دایک'),
    syl('kardeş', 'kar|deş', 'kar-DEŞ', 'أخ — تركية أصيلة تكسر القاعدة', 'برا'),
    syl('hangi', 'han|gi', 'HAN-gi', 'أي — تركية أصيلة تكسر القاعدة', 'کام'),
    syl('elma', 'el|ma', 'el-MA', 'تفّاح — e ثم a', 'سێو'),
    syl('kâğıt', 'kâ|ğıt', 'kâ-ĞIT', 'ورقة — â ممدودة ثم ı', 'کاغەز'),
    syl('mühendis', 'mü|hen|dis', 'mü-hen-DİS', 'مهندس — ü ثم e ثم i', 'ئەندازیار'),
  ],
  pairs: [
    {
      a: p('kitap', 'ki-TAP', 'كتاب', 'کتێب'),
      b: p('kitabı', 'ki-ta-BI', 'الكتابَ', 'کتێبەکە'),
      contrast: b(
        'الكلمة تكسر الانسجام داخلياً، لكن اللاحقة تنسجم مع آخر حركة (a) فتأتي ı. هذا هو ما يهمّ عملياً.',
        'وشەکە هارمۆنی دەشکێنێت بەڵام پاشگرەکە لەگەڵ دوایین دەنگداردا دەگونجێت.',
      ),
    },
    {
      a: p('otobüs', 'o-to-BÜS', 'حافلة', 'پاس'),
      b: p('otobüsü', 'o-to-bü-SÜ', 'الحافلةَ', 'پاسەکە'),
      contrast: b(
        'أوّلها o خلفية وآخرها ü أمامية — واللاحقة تتبع الأخيرة دائماً.',
        'سەرەتا o و کۆتایی ü — پاشگر بەدوای کۆتاییدا دەچێت.',
      ),
    },
    {
      a: p('anne', 'an-NE', 'أمّ', 'دایک'),
      b: p('kardeş', 'kar-DEŞ', 'أخ', 'برا'),
      contrast: b(
        'كلمتان تركيتان أصيلتان تكسران القاعدة. لا تفسير — تُحفظان كما هما، ولحسن الحظ عددهما صغير جداً.',
        'دوو وشەی تورکی ڕەسەن کە یاساکە دەشکێنن — لەبەربکرێن.',
      ),
    },
  ],
};

export const HARMONY_SECTIONS: SyllableSection[] = [TWO_WAY, FOUR_WAY, EXCEPTIONS];
