import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, w } from '../shared/helpers';

/**
 * C1+ vocabulary: the language of written argument.
 *
 * C1+ was the thinnest level in the curriculum, and the gap was in exactly the
 * register that defines it — the verbs and adjectives a Turkish essayist,
 * journalist or judge uses to grade a claim. `bariz` and `aşikâr` both mean
 * obvious; `yadsınamaz` means undeniable; `beyhude` means futile in a way
 * `boşuna` is not. This is where the level lives.
 *
 * Most of it is Arabic-derived, which makes it unusually approachable for
 * this platform's students even though it is the hardest register — a point
 * the Arabic-origin section makes concrete.
 *
 * The Sorani for the most specialist terms is flagged for native review.
 */

const KU_LITERARY = 'High-register literary Sorani — needs a native reader.';

/* ---------------- verbs of analysis ---------------- */

const ANALYSIS: VocabItem[] = pack('academic', 'c1plus', 'verb', [
  {
    ...w('nitelemek', 'ni-te-le-MEK', 'يصف، ينعت', 'وەسفکردن',
      ['Bu yaklaşımı indirgemeci olarak niteliyor.', 'BU yak-la-şı-MI in-dir-ge-me-Cİ o-la-RAK ni-te-li-YOR', 'ينعت هذه المقاربة بالاختزالية.', 'ئەم ڕوانگەیە بە کورتکەرەوە وەسف دەکات.']),
    collocations: ['olarak nitelemek', 'yanlış nitelemek'],
  },
  {
    ...w('bağdaşmak', 'bağ-daş-MAK', 'يتّسق مع، يتوافق', 'گونجان',
      ['Bu iddia verilerle bağdaşmıyor.', 'BU id-di-A ve-ri-ler-LE bağ-daş-mı-YOR', 'هذه الدعوى لا تتّسق مع البيانات.', 'ئەم بانگەشەیە لەگەڵ داتاکان ناگونجێت.']),
    collocations: ['ile bağdaşmak', 'bağdaşmayan'],
    opposite: ['çelişmek'],
  },
  {
    ...w('örtüşmek', 'ör-tüş-MEK', 'يتطابق، يتقاطع', 'یەکگرتنەوە',
      ['Bulgular önceki çalışmayla örtüşüyor.', 'bul-gu-LAR ön-ce-Kİ ça-lış-may-LA ör-tü-şü-YOR', 'تتطابق النتائج مع الدراسة السابقة.', 'دۆزینەوەکان لەگەڵ توێژینەوەی پێشوو یەکدەگرنەوە.']),
    collocations: ['ile örtüşmek', 'kısmen örtüşmek'],
  },
  {
    ...w('ihtiva etmek', 'ih-ti-VA et-MEK', 'يتضمّن، يحتوي', 'لەخۆگرتن',
      ['Rapor ciddi çelişkiler ihtiva ediyor.', 'ra-POR cid-Dİ çe-liş-ki-LER ih-ti-VA e-di-YOR', 'يتضمّن التقرير تناقضات جدّية.', 'ڕاپۆرتەکە دژایەتی جددی لەخۆدەگرێت.'], 'phrase'),
    note: b(
      'رسمية جداً؛ الشائع في الكلام içermek.',
      'زۆر فەرمییە؛ ئەوەی لە قسەدا باوە içermekـە.',
    ),
    review: needsReview(KU_LITERARY),
  },
  {
    ...w('teşkil etmek', 'teş-KİL et-MEK', 'يشكّل، يمثّل', 'پێکهێنان',
      ['Bu, açık bir ihlal teşkil eder.', 'BU a-ÇIK bir ih-LAL teş-KİL e-DER', 'هذا يشكّل انتهاكاً واضحاً.', 'ئەمە پێشێلکارییەکی ئاشکرا پێکدەهێنێت.'], 'phrase'),
    review: needsReview(KU_LITERARY),
  },
  {
    ...w('tatbik etmek', 'tat-BİK et-MEK', 'يطبّق', 'جێبەجێکردن',
      ['Kural istisnasız tatbik edildi.', 'ku-RAL is-tis-na-SIZ tat-BİK e-dil-Dİ', 'طُبّقت القاعدة بلا استثناء.', 'یاساکە بێ ئیستیسنا جێبەجێ کرا.'], 'phrase'),
    note: b(
      'رسمية/قانونية؛ الشائع اليوم uygulamak.',
      'فەرمی/یاسایییە؛ ئەوەی باوە ئەمڕۆ uygulamakـە.',
    ),
  },
]);

/* ---------------- nouns of argument ---------------- */

const ARGUMENT: VocabItem[] = pack('literary', 'c1plus', 'noun', [
  {
    ...w('sav', 'SAV', 'دعوى، أطروحة', 'بانگەشە',
      ['Yazarın savı ikna edici değil.', 'ya-za-RIN sa-VI ik-NA e-di-Cİ de-ĞİL', 'أطروحة الكاتب غير مقنعة.', 'بانگەشەی نووسەر قەناعەتپێکەر نییە.']),
    collocations: ['sav ileri sürmek', 'savı çürütmek'],
    related: ['iddia', 'tez'],
  },
  {
    ...w('önerme', 'ö-ner-ME', 'قضية منطقية', 'پێشنیارە',
      ['Bu önerme doğrulanabilir değil.', 'BU ö-ner-ME doğ-ru-la-na-bi-LİR de-ĞİL', 'هذه القضية غير قابلة للتحقّق.', 'ئەم پێشنیارە پشتڕاستکردنەوەی بۆ ناکرێت.']),
    review: needsReview(KU_LITERARY),
  },
  {
    ...w('çekince', 'çe-kin-CE', 'تحفّظ', 'پارێزکاری',
      ['Rapora çekince koydu.', 'ra-po-RA çe-kin-CE koy-DU', 'أبدى تحفّظاً على التقرير.', 'پارێزکاری لەسەر ڕاپۆرتەکە دانا.']),
    collocations: ['çekince koymak', 'çekince belirtmek'],
  },
  {
    ...w('dayatma', 'da-yat-MA', 'فرض، إملاء', 'سەپاندن',
      ['Bu bir çözüm değil, dayatmadır.', 'BU bir çö-ZÜM de-ĞİL da-yat-ma-DIR', 'هذا ليس حلاً بل فرضاً.', 'ئەمە چارەسەر نییە، سەپاندنە.']),
  },
  {
    ...w('mutabakat', 'mu-ta-ba-KAT', 'توافق، اتّفاق', 'ڕێککەوتن',
      ['Taraflar mutabakata vardı.', 'ta-raf-LAR mu-ta-ba-ka-TA var-DI', 'توصّل الطرفان إلى توافق.', 'هەردوو لا گەیشتنە ڕێککەوتن.']),
    collocations: ['mutabakata varmak', 'mutabakat sağlamak'],
    opposite: ['ihtilaf'],
  },
  {
    ...w('ihtilaf', 'ih-ti-LAF', 'خلاف، نزاع', 'ناکۆکی',
      ['İki taraf arasında ihtilaf sürüyor.', 'i-Kİ ta-RAF a-ra-sın-DA ih-ti-LAF sü-rü-YOR', 'الخلاف مستمرّ بين الطرفين.', 'ناکۆکی لە نێوان دوو لادا بەردەوامە.']),
    opposite: ['mutabakat'],
  },
  {
    ...w('tenkit', 'ten-KİT', 'نقد (أدبي/رسمي)', 'ڕەخنە',
      ['Sert bir tenkit yazısı kaleme aldı.', 'SERT bir ten-KİT ya-zı-SI ka-le-ME al-DI', 'كتب مقالة نقدية حادّة.', 'وتارێکی ڕەخنەیی توندی نووسی.']),
    note: b(
      'قديمة الطابع؛ الشائع اليوم eleştiri التركية الأصل.',
      'کۆنە؛ ئەوەی باوە ئەمڕۆ eleştiriـە.',
    ),
  },
  {
    ...w('irdeleme', 'ir-de-le-ME', 'تمحيص، فحص دقيق', 'وردبوونەوە',
      ['Metnin irdelenmesi uzun sürdü.', 'met-NİN ir-de-len-me-Sİ u-ZUN sür-DÜ', 'استغرق تمحيص النصّ وقتاً طويلاً.', 'وردبوونەوە لە دەقەکە درێژەی کێشا.']),
  },
  {
    ...w('çözümleme', 'çö-züm-le-ME', 'تحليل (منهجي)', 'شیکاری',
      ['Söylem çözümlemesi yaptı.', 'söy-LEM çö-züm-le-me-Sİ yap-TI', 'أجرى تحليلاً للخطاب.', 'شیکاری گوتاری ئەنجام دا.']),
    collocations: ['çözümleme yapmak', 'söylem çözümlemesi'],
  },
]);

/* ---------------- adjectives that grade a claim ---------------- */

const GRADING: VocabItem[] = pack('literary', 'c1plus', 'adjective', [
  {
    ...w('bariz', 'ba-RİZ', 'بارز، جليّ', 'ئاشکرا',
      ['Bariz bir çelişki söz konusu.', 'ba-RİZ bir çe-liş-Kİ SÖZ ko-nu-SU', 'ثمّة تناقض بارز.', 'دژایەتییەکی ئاشکرا هەیە.']),
    related: ['aşikâr', 'açık'],
  },
  {
    ...w('aşikâr', 'a-şi-KÂR', 'واضح، ظاهر للعيان', 'ڕوون',
      ['Niyeti aşikârdı.', 'ni-ye-Tİ a-şi-kâr-DI', 'كانت نيّته واضحة.', 'مەبەستی ڕوون بوو.']),
  },
  {
    ...w('yadsınamaz', 'yad-sı-na-MAZ', 'لا يمكن إنكاره', 'نکۆڵی لێناکرێت',
      ['Katkısı yadsınamaz.', 'kat-kı-SI yad-sı-na-MAZ', 'إسهامه لا يُنكر.', 'بەشدارییەکەی نکۆڵی لێناکرێت.']),
    collocations: ['yadsınamaz bir gerçek'],
  },
  {
    ...w('tartışmasız', 'tar-tış-ma-SIZ', 'بلا جدال', 'بێ گفتوگۆ',
      ['Tartışmasız en iyi çözüm bu.', 'tar-tış-ma-SIZ EN i-Yİ çö-ZÜM BU', 'هذا بلا جدال أفضل حلّ.', 'بێ گفتوگۆ ئەمە باشترین چارەسەرە.']),
  },
  {
    ...w('müstesna', 'müs-tes-NA', 'استثنائي', 'ئیستیسنایی',
      ['Müstesna bir yetenek.', 'müs-tes-NA bir ye-te-NEK', 'موهبة استثنائية.', 'بەهرەیەکی ئیستیسنایی.']),
    review: needsReview(KU_LITERARY),
  },
  {
    ...w('seçkin', 'seç-KİN', 'نخبوي، مختار', 'هەڵبژێردراو',
      ['Seçkin bir okur kitlesi var.', 'seç-KİN bir o-KUR kit-le-Sİ var', 'له جمهور قرّاء نخبوي.', 'خوێنەرێکی هەڵبژێردراوی هەیە.']),
  },
  {
    ...w('beyhude', 'bey-hu-DE', 'عبثي، بلا جدوى', 'بێهوودە',
      ['Beyhude bir çaba oldu.', 'bey-hu-DE bir ça-BA ol-DU', 'كان جهداً بلا جدوى.', 'هەوڵێکی بێهوودە بوو.']),
    related: ['nafile', 'boşuna'],
    note: b(
      'فارسية الأصل رغم مظهرها العربي.',
      'ڕەگی فارسییە سەرەڕای دیمەنە عەرەبییەکەی.',
    ),
  },
  {
    ...w('nafile', 'na-fi-LE', 'بلا طائل', 'بێسوود',
      ['Nafile uğraşma, olmayacak.', 'na-fi-LE uğ-raş-MA ol-ma-ya-CAK', 'لا تتعب نفسك، لن ينجح.', 'خۆت ماندوو مەکە، نابێت.']),
  },
  {
    ...w('abes', 'a-BES', 'عبثي، غير معقول', 'پووچ',
      ['Bu itiraz abes kaçtı.', 'BU i-ti-RAZ a-BES kaç-TI', 'جاء هذا الاعتراض عبثياً.', 'ئەم ناڕەزاییە پووچ دەرچوو.']),
    review: needsReview(KU_LITERARY),
  },
  {
    ...w('münferit', 'mün-fe-RİT', 'منفرد، معزول', 'تاکە',
      ['Bu münferit bir olay değil.', 'BU mün-fe-RİT bir o-LAY de-ĞİL', 'ليست هذه حادثة معزولة.', 'ئەمە ڕووداوێکی تاکە نییە.']),
    collocations: ['münferit olay'],
    opposite: ['müşterek'],
    review: needsReview(KU_LITERARY),
  },
  {
    ...w('müşterek', 'müş-te-REK', 'مشترك', 'هاوبەش',
      ['Müşterek bir bildiri yayımladılar.', 'müş-te-REK bir bil-di-Rİ ya-yım-la-dı-LAR', 'أصدروا بياناً مشتركاً.', 'ڕاگەیەندراوێکی هاوبەشیان بڵاوکردەوە.']),
    opposite: ['münferit'],
  },
  {
    ...w('kifayetsiz', 'ki-fa-yet-SİZ', 'غير كافٍ', 'نەبەس',
      ['Gerekçe kifayetsiz bulundu.', 'ge-rek-ÇE ki-fa-yet-SİZ bu-lun-DU', 'وُجد التعليل غير كافٍ.', 'هۆکارەکە نەبەس بینرا.']),
    review: needsReview(KU_LITERARY),
  },
]);

export const C1PLUS_VOCABULARY_RHETORIC: VocabItem[] = [
  ...ANALYSIS,
  ...ARGUMENT,
  ...GRADING,
];
