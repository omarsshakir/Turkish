import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, w } from '../shared/helpers';

/**
 * C1+ vocabulary: power, method, and figure of speech.
 *
 * Three registers a reader of Turkish non-fiction needs and a speaker almost
 * never produces:
 *
 *   **Power.** `egemenlik`, `meşruiyet`, `özerklik` — the vocabulary of a
 *   constitutional argument. Most are Arabic- or Turkish-coined abstractions
 *   in `-lik`, so the pattern is worth as much as the words.
 *
 *   **Method.** `paradigma`, `epistemoloji`, `diyalektik`. These are
 *   international borrowings and therefore *easier* than the native
 *   equivalents — a rare case where a C1+ set costs a student almost nothing.
 *
 *   **Figures.** `imge`, `simge`, `eğretileme`, `hiciv`. The literary file
 *   already covers `istiare`, `mecaz` and `kinaye`; these are their modern
 *   Turkish counterparts, and the pairing (`istiare` / `eğretileme`) is itself
 *   the lesson about the language reform.
 *
 * Several Kurdish equivalents here are genuinely uncertain and are flagged
 * rather than guessed.
 */

const KU_THEORY = 'Theoretical Sorani terminology — needs a native academic reader.';

/* ---------------- power and legitimacy ---------------- */

const POWER: VocabItem[] = pack('society', 'c1plus', 'noun', [
  {
    ...w('egemenlik', 'e-ge-men-LİK', 'سيادة', 'دەسەڵاتداری',
      ['Egemenlik kayıtsız şartsız milletindir.', 'e-ge-men-LİK ka-yıt-SIZ şart-SIZ mil-le-tin-DİR', 'السيادة للأمّة بلا قيد ولا شرط.', 'دەسەڵاتداری بێ مەرج هی نەتەوەیە.']),
    related: ['egemen'],
    note: b(
      'الجملة في المثال هي المبدأ المكتوب في البرلمان التركي — يعرفها كل تركي.',
      'ڕستەی نموونەکە لە پەرلەمانی تورکیا نووسراوە.',
    ),
  },
  {
    ...w('meşruiyet', 'meş-ru-i-YET', 'شرعية', 'یاسایی بوون',
      ['Kararın meşruiyeti tartışılıyor.', 'ka-ra-RIN meş-ru-i-ye-Tİ tar-tı-şı-lı-YOR', 'تُناقَش شرعية القرار.', 'یاسایی بوونی بڕیارەکە تاوتوێ دەکرێت.']),
    related: ['meşru'],
  },
  {
    ...w('özerklik', 'ö-zerk-LİK', 'استقلال ذاتي', 'خۆسەری',
      ['Üniversitelerin özerkliği önemlidir.', 'ü-ni-ver-si-te-le-RİN ö-zerk-li-Ğİ ö-nem-li-DİR', 'استقلالية الجامعات مهمّة.', 'خۆسەری زانکۆکان گرنگە.']),
    related: ['özerk'],
    note: b(
      'من «öz» (ذات) — «özerk» = ذاتي الحكم. عائلة اشتقاق تركية خالصة: öz, özel, özerk, özgür.',
      'لە «öz»ەوە: öz, özel, özerk, özgür.',
    ),
  },
  {
    ...w('bağımsızlık', 'ba-ğım-sız-LIK', 'استقلال', 'سەربەخۆیی',
      ['Yargı bağımsızlığı esastır.', 'yar-GI ba-ğım-sız-lı-ĞI e-sas-TIR', 'استقلال القضاء أساسي.', 'سەربەخۆیی دادوەری بنەڕەتییە.']),
    related: ['bağımsız'],
    opposite: ['bağımlılık'],
  },
  {
    ...w('hegemonya', 'he-ge-mon-YA', 'هيمنة', 'هێژمۆنی',
      ['Kültürel hegemonya kavramı Gramsci’ye ait.', 'kül-tü-REL he-ge-mon-YA kav-ra-MI gram-şi-YE a-İT', 'مفهوم الهيمنة الثقافية لغرامشي.', 'چەمکی هێژمۆنی کولتووری هی گرامشییە.']),
    related: ['tahakküm'],
    review: needsReview(KU_THEORY),
  },
  {
    ...w('tahakküm', 'ta-hak-KÜM', 'تسلّط', 'زاڵبوون',
      ['Ekonomik tahakküm eleştiriliyor.', 'e-ko-no-MİK ta-hak-KÜM e-leş-ti-ri-li-YOR', 'يُنتقَد التسلّط الاقتصادي.', 'زاڵبوونی ئابووری ڕەخنەی لێدەگیرێت.']),
    related: ['hegemonya'],
    review: needsReview(KU_THEORY),
  },
  {
    ...w('uyruk', 'uy-RUK', 'جنسية، تابعية', 'ڕەگەزنامە',
      ['Uyruğunuz nedir?', 'uy-ru-ĞU-nuz ne-DİR', 'ما جنسيتكم؟', 'ڕەگەزنامەتان چییە؟']),
    related: ['vatandaşlık'],
    note: b(
      '«uyruk» في الاستمارات الرسمية، و«vatandaşlık» في الكلام العادي.',
      '«uyruk» لە فۆڕمە فەرمییەکاندا، «vatandaşlık» لە قسەدا.',
    ),
  },
  {
    ...w('ideoloji', 'i-de-o-lo-Jİ', 'أيديولوجيا', 'ئایدیۆلۆژیا',
      ['Metnin arkasında bir ideoloji var.', 'met-NİN ar-ka-sın-DA bir i-de-o-lo-Jİ var', 'خلف النص أيديولوجيا.', 'لە پشتی دەقەکەوە ئایدیۆلۆژیایەک هەیە.']),
  },
]);

/* ---------------- method ---------------- */

const METHOD: VocabItem[] = pack('academic', 'c1plus', 'noun', [
  {
    ...w('paradigma', 'pa-ra-dig-MA', 'نموذج إرشادي، براديم', 'پارادایم',
      ['Alanda paradigma değişimi yaşandı.', 'a-lan-DA pa-ra-dig-MA de-ği-şi-Mİ ya-şan-DI', 'حدث تحوّل في النموذج داخل المجال.', 'گۆڕانی پارادایم لە بوارەکەدا ڕوویدا.']),
    collocations: ['paradigma değişimi'],
  },
  {
    ...w('metodoloji', 'me-to-do-lo-Jİ', 'منهجية', 'میتۆدۆلۆژیا',
      ['Metodoloji bölümü zayıf.', 'me-to-do-lo-Jİ bö-lü-MÜ za-YIF', 'قسم المنهجية ضعيف.', 'بەشی میتۆدۆلۆژیا لاوازە.']),
    related: ['yöntem', 'usul'],
    note: b(
      'ثلاث كلمات متدرّجة: «usul» عثمانية · «yöntem» تركية حديثة · «metodoloji» دولية وأوسع.',
      'سێ وشە: usul · yöntem · metodoloji.',
    ),
  },
  {
    ...w('epistemoloji', 'e-pis-te-mo-lo-Jİ', 'نظرية المعرفة', 'ئێپیستمۆلۆژیا',
      ['Epistemoloji bilginin doğasını sorar.', 'e-pis-te-mo-lo-Jİ bil-gi-NİN do-ğa-sı-NI so-RAR', 'تسأل نظرية المعرفة عن طبيعة المعرفة.', 'ئێپیستمۆلۆژیا پرسیار لە سروشتی زانین دەکات.']),
    review: needsReview(KU_THEORY),
  },
  {
    ...w('ontoloji', 'on-to-lo-Jİ', 'الأنطولوجيا، علم الوجود', 'ئۆنتۆلۆژیا',
      ['Ontoloji varlığı konu edinir.', 'on-to-lo-Jİ var-lı-ĞI ko-NU e-di-NİR', 'تتناول الأنطولوجيا الوجود.', 'ئۆنتۆلۆژیا بابەتی بوونە.']),
    related: ['varlık'],
    review: needsReview(KU_THEORY),
  },
  {
    ...w('diyalektik', 'di-ya-lek-TİK', 'جدلية', 'دیالەکتیک',
      ['Diyalektik bir yöntem izliyor.', 'di-ya-lek-TİK bir yön-TEM iz-li-YOR', 'يتّبع منهجاً جدلياً.', 'میتۆدێکی دیالەکتیکی پەیڕەو دەکات.']),
    review: needsReview(KU_THEORY),
  },
  {
    ...w('dogma', 'dog-MA', 'عقيدة جامدة', 'دۆگما',
      ['Bilim dogmayı reddeder.', 'bi-LİM dog-ma-YI red-de-DER', 'العلم يرفض الجمود العقائدي.', 'زانست دۆگما ڕەت دەکاتەوە.']),
  },
  {
    ...w('antitez', 'an-ti-TEZ', 'نقيض الأطروحة', 'دژتێز',
      ['Her teze bir antitez düşer.', 'HER te-ZE bir an-ti-TEZ dü-ŞER', 'لكل أطروحة نقيض.', 'بۆ هەر تێزێک دژتێزێک هەیە.']),
    opposite: ['tez'],
  },
  {
    ...w('yanılgı', 'ya-nıl-GI', 'مغالطة، وهم', 'هەڵە',
      ['Bu yaygın bir yanılgı.', 'BU yay-GIN bir ya-nıl-GI', 'هذه مغالطة شائعة.', 'ئەمە هەڵەیەکی باوە.']),
    related: ['yanılmak'],
  },
  {
    ...w('safsata', 'saf-sa-TA', 'سفسطة', 'سەفسەتە',
      ['Bu bir mantık safsatası.', 'BU bir man-TIK saf-sa-ta-SI', 'هذه سفسطة منطقية.', 'ئەمە سەفسەتەیەکی لۆژیکییە.']),
    related: ['yanılgı'],
  },
  {
    ...w('kıyas', 'kı-YAS', 'قياس (منطقي)', 'قیاس',
      ['Kıyas yoluyla sonuca vardı.', 'kı-YAS yo-luy-LA so-nu-CA var-DI', 'وصل إلى النتيجة بالقياس.', 'بە ڕێگای قیاس گەیشتە ئەنجام.']),
    collocations: ['kıyas yapmak', 'kıyaslamak'],
  },
  {
    ...w('polemik', 'po-le-MİK', 'سجال', 'دەمەقاڵێ',
      ['Konu polemiğe dönüştü.', 'ko-NU po-le-mi-ĞE dö-nüş-TÜ', 'تحوّل الموضوع إلى سجال.', 'بابەتەکە بووە دەمەقاڵێ.']),
  },
]);

/* ---------------- figures of speech ---------------- */

const FIGURES: VocabItem[] = pack('literary', 'c1plus', 'noun', [
  {
    ...w('simge', 'sim-GE', 'رمز', 'هێما',
      ['Güvercin barışın simgesidir.', 'gü-ver-CİN ba-rı-ŞIN sim-ge-si-DİR', 'الحمامة رمز السلام.', 'کۆتر هێمای ئاشتییە.']),
    related: ['sembol', 'imge'],
    note: b(
      '⚠️ لا تخلط «imge» بـ «simge»: الأولى صورة ذهنية، الثانية رمز متّفق عليه.',
      '⚠️ تێکەڵی «imge» و «simge» مەکە.',
    ),
  },
  {
    ...w('sembol', 'sem-BOL', 'رمز (دولية)', 'سیمبۆل',
      ['Bu renk bir sembol hâline geldi.', 'BU RENK bir sem-BOL hâ-li-NE gel-Dİ', 'صار هذا اللون رمزاً.', 'ئەم ڕەنگە بووە بە سیمبۆل.']),
    related: ['simge'],
  },
  {
    ...w('eğretileme', 'eğ-re-ti-le-ME', 'استعارة', 'خواستنەوە',
      ['Metin baştan sona eğretileme.', 'me-TİN baş-TAN so-NA eğ-re-ti-le-ME', 'النص استعارة من أوّله لآخره.', 'دەقەکە لە سەرەتاوە تا کۆتایی خواستنەوەیە.']),
    related: ['istiare'],
    note: b(
      'المقابل التركي الحديث لـ «istiare» العربية — نفس المفهوم، وجيلان مختلفان من القرّاء.',
      'هاوتای تورکی نوێی «istiare».',
    ),
    review: needsReview(KU_THEORY),
  },
  {
    ...w('hiciv', 'hi-CİV', 'هجاء، سخرية لاذعة', 'گاڵتەجاڕی',
      ['Yazının dili hiciv yüklü.', 'ya-zı-NIN di-Lİ hi-CİV yük-LÜ', 'لغة المقال محمّلة بالهجاء.', 'زمانی نووسینەکە پڕ لە گاڵتەجاڕییە.']),
    note: b(
      '⚠️ تسقط الحركة عند الإضافة: hiciv → hicvi.',
      '⚠️ دەنگدار دەکەوێت: hiciv → hicvi.',
    ),
  },
  {
    ...w('retorik', 're-to-RİK', 'بلاغة؛ خطاب منمّق', 'ڕیتۆریک',
      ['Bu sadece bir retorik.', 'BU sa-DE-ce bir re-to-RİK', 'هذه مجرّد بلاغة جوفاء.', 'ئەمە تەنها ڕیتۆریکێکە.']),
    note: b(
      'محايدة في السياق الأكاديمي (علم البلاغة) وسلبية في السياسة (كلام بلا مضمون).',
      'لە ئەکادیمیدا بێلایەنە، لە سیاسەتدا نەرێنییە.',
    ),
  },
  {
    ...w('tümce', 'tüm-CE', 'جملة (مصطلح لغوي)', 'ڕستە',
      ['Tümce yapısı karmaşık.', 'tüm-CE ya-pı-SI kar-ma-ŞIK', 'بنية الجملة معقّدة.', 'پێکهاتەی ڕستەکە ئاڵۆزە.']),
    related: ['cümle'],
    note: b(
      '«tümce» تركية حديثة و«cümle» عربية — الثانية هي المستعملة في المدارس، والأولى في اللسانيات.',
      '«tümce» تورکی نوێیە، «cümle» عەرەبییە.',
    ),
  },
]);

export const C1PLUS_VOCABULARY_INTELLECT: VocabItem[] = [
  ...POWER,
  ...METHOD,
  ...FIGURES,
];
