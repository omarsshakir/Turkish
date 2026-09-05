import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, sense, w } from '../shared/helpers';

/**
 * C1 vocabulary: position, framing and the degree of certainty.
 *
 * At C1 the useful nouns stop describing the world and start describing what
 * someone *said about* the world: `söylem`, `anlatı`, `çerçeve`, `duruş`,
 * `önyargı`. These are the nouns an editorial is built from, and they are the
 * ones a student needs in order to disagree precisely rather than flatly.
 *
 * The second half is the vocabulary of hedging — `belirsizlik`, `muğlaklık`,
 * `kesinlik`, `netlik`. Turkish academic writing hedges heavily, and a student
 * who cannot read the hedge misreads the claim.
 */

/* ---------------- how a thing is framed ---------------- */

const FRAMING: VocabItem[] = pack('academic', 'c1', 'noun', [
  {
    ...w('çerçeve', 'çer-çe-VE', 'إطار', 'چوارچێوە',
      ['Tartışmanın çerçevesi dar.', 'tar-tış-ma-NIN çer-çe-ve-Sİ dar', 'إطار النقاش ضيّق.', 'چوارچێوەی گفتوگۆکە تەنگە.']),
    collocations: ['çerçeve çizmek', 'yasal çerçeve', 'çerçevesinde'],
    note: b(
      'حسّي ومجازي معاً: إطار الصورة، وإطار النقاش. نفس الازدواج في العربية.',
      'هەم واقعی هەم مەجازی.',
    ),
  },
  {
    ...w('anlatı', 'an-la-TI', 'سردية، رواية للأحداث', 'گێڕانەوە',
      ['İki taraf farklı bir anlatı sunuyor.', 'i-Kİ ta-RAF fark-LI bir an-la-TI su-nu-YOR', 'يقدّم الطرفان سردية مختلفة.', 'دوو لایەن گێڕانەوەی جیاواز پێشکەش دەکەن.']),
    related: ['anlatmak'],
    review: needsReview('Sorani term for “narrative” in the analytical sense — needs a native reader.'),
  },
  {
    ...w('bakış', 'ba-KIŞ', 'نظرة، منظور', 'ڕوانین',
      ['Bakış açımız farklı.', 'ba-KIŞ a-çı-MIZ fark-LI', 'منظورنا مختلف.', 'ڕوانگەمان جیاوازە.']),
    related: ['bakmak'],
    collocations: ['bakış açısı', 'ilk bakışta'],
  },
  {
    ...w('duruş', 'du-RUŞ', 'موقف، وقفة', 'هەڵوێست',
      ['Net bir duruş sergiledi.', 'NET bir du-RUŞ ser-gi-le-Dİ', 'أبدى موقفاً واضحاً.', 'هەڵوێستێکی ڕوونی نواند.']),
    related: ['durmak', 'tutum'],
  },
  {
    ...w('tutum', 'tu-TUM', 'موقف، سلوك', 'هەڵوێست، ڕەفتار',
      ['Bu tutumu anlamıyorum.', 'BU tu-tu-MU an-la-mı-yo-RUM', 'لا أفهم هذا الموقف.', 'لەم هەڵوێستە تێناگەم.']),
    related: ['tutmak', 'duruş'],
    collocations: ['tutum sergilemek', 'olumlu tutum'],
  },
  {
    ...w('konum', 'ko-NUM', 'موقع، مكانة', 'شوێن، پێگە',
      ['Şirketin piyasadaki konumu güçlü.', 'şir-ke-TİN pi-ya-sa-da-Kİ ko-nu-MU güç-LÜ', 'موقع الشركة في السوق قوي.', 'پێگەی کۆمپانیاکە لە بازاڕدا بەهێزە.']),
    related: ['koymak'],
    senses: [
      sense('الموقع الجغرافي', 'شوێنی جوگرافی',
        ['Konumunu paylaşır mısın?', 'ko-nu-mu-NU pay-la-ŞIR mı-SIN', 'هل تشارك موقعك؟', 'شوێنەکەت هاوبەش دەکەیت؟']),
    ],
  },
  {
    ...w('kalıp', 'ka-LIP', 'قالب؛ صيغة جاهزة', 'قاڵب',
      ['Hazır kalıplarla konuşuyor.', 'ha-ZIR ka-lıp-lar-LA ko-nu-şu-YOR', 'يتكلّم بصيغ جاهزة.', 'بە قاڵبی ئامادە قسە دەکات.']),
    collocations: ['kalıp yargı', 'söz kalıbı'],
    note: b(
      '«kalıp yargı» = حكم مسبق نمطي (stereotype) — تركيب أساسي في اللغة الاجتماعية.',
      '«kalıp yargı» = پێشوەخت حوکمدان.',
    ),
  },
  {
    ...w('ima', 'i-MA', 'تلميح', 'ئاماژە، هێما',
      ['Sözlerinde bir ima vardı.', 'söz-le-rin-DE bir i-MA var-DI', 'كان في كلامه تلميح.', 'لە قسەکانیدا ئاماژەیەک هەبوو.']),
    collocations: ['ima etmek', 'imada bulunmak'],
  },
  {
    ...w('nüans', 'nü-ANS', 'فارق دقيق', 'جیاوازی ورد',
      ['İki kelime arasında ince bir nüans var.', 'i-Kİ ke-li-ME a-ra-sın-DA in-CE bir nü-ANS var', 'بين الكلمتين فارق دقيق.', 'لە نێوان دوو وشەکەدا جیاوازییەکی ورد هەیە.']),
  },
]);

/* ---------------- how certain the claim is ---------------- */

const CERTAINTY: VocabItem[] = pack('academic', 'c1', 'noun', [
  {
    ...w('kesinlik', 'ke-sin-LİK', 'قطعية، يقين', 'دڵنیایی',
      ['Bunu kesinlikle söyleyemeyiz.', 'bu-NU ke-sin-lik-LE söy-le-ye-me-YİZ', 'لا يمكننا قول هذا بشكل قاطع.', 'ناتوانین بە دڵنیاییەوە ئەمە بڵێین.']),
    opposite: ['belirsizlik'],
    related: ['kesin'],
  },
  {
    ...w('belirsizlik', 'be-lir-siz-LİK', 'غموض، عدم يقين', 'نادیاری',
      ['Ekonomide belirsizlik sürüyor.', 'e-ko-no-mi-DE be-lir-siz-LİK sü-rü-YOR', 'يستمرّ عدم اليقين في الاقتصاد.', 'نادیاری لە ئابووریدا بەردەوامە.']),
    opposite: ['kesinlik'],
    related: ['belirsiz'],
  },
  {
    ...w('muğlaklık', 'muğ-lak-LIK', 'إبهام، التباس', 'ئاڵۆزی',
      ['Metindeki muğlaklık sorun yaratıyor.', 'me-tin-de-Kİ muğ-lak-LIK so-RUN ya-ra-tı-YOR', 'يخلق الإبهام في النص مشكلة.', 'ئاڵۆزی ناو دەقەکە کێشە دروست دەکات.']),
    related: ['muğlak'],
    review: needsReview('Sorani term for analytic “ambiguity” — needs a native reader.'),
    note: b(
      'أقوى من «belirsizlik»: هذه غموض في اللغة نفسها، تلك عدم يقين في الواقع.',
      'بەهێزترە لە «belirsizlik».',
    ),
  },
  {
    ...w('netlik', 'net-LİK', 'وضوح', 'ڕوونی',
      ['Açıklamada netlik yok.', 'a-çık-la-ma-DA net-LİK yok', 'لا وضوح في التصريح.', 'ڕوونی لە ڕوونکردنەوەکەدا نییە.']),
    related: ['net', 'netleştirmek'],
  },
  {
    ...w('tutarsızlık', 'tu-tar-sız-LIK', 'عدم اتّساق، تناقض', 'ناکۆکی',
      ['İfadeler arasında tutarsızlık var.', 'i-fa-de-LER a-ra-sın-DA tu-tar-sız-LIK var', 'بين الإفادات عدم اتّساق.', 'ناکۆکی لە نێوان لێدوانەکاندا هەیە.']),
    opposite: ['tutarlılık'],
  },
  {
    ...w('bütünlük', 'bü-tün-LÜK', 'تكامل، وحدة', 'تەواوەتی',
      ['Metnin bütünlüğü korunmalı.', 'met-NİN bü-tün-lü-ĞÜ ko-run-ma-LI', 'ينبغي الحفاظ على وحدة النص.', 'دەبێت تەواوەتی دەقەکە بپارێزرێت.']),
    related: ['bütün'],
  },
  {
    ...w('gerçeklik', 'ger-çek-LİK', 'الواقع، الواقعية', 'ڕاستی',
      ['Anlatı gerçeklikten uzaklaşıyor.', 'an-la-TI ger-çek-lik-TEN u-zak-la-şı-YOR', 'تبتعد السردية عن الواقع.', 'گێڕانەوەکە لە ڕاستییەوە دوور دەکەوێتەوە.']),
    related: ['gerçek'],
  },
  {
    ...w('derinlik', 'de-rin-LİK', 'عمق', 'قووڵی',
      ['Analizde derinlik eksik.', 'a-na-liz-DE de-rin-LİK ek-SİK', 'العمق ناقص في التحليل.', 'قووڵی لە شیکارییەکەدا کەمە.']),
    opposite: ['yüzeysellik'],
    related: ['derin'],
  },
  {
    ...w('yüzeysellik', 'yü-zey-sel-LİK', 'سطحية', 'ڕووکەشی',
      ['Yüzeysellik en büyük kusuru.', 'yü-zey-sel-LİK EN bü-YÜK ku-su-RU', 'السطحية أكبر عيوبه.', 'ڕووکەشی گەورەترین کەموکوڕییەتی.']),
    opposite: ['derinlik'],
    related: ['yüzeysel'],
  },
  {
    ...w('sentez', 'sen-TEZ', 'تركيب، توليف', 'سەنتەز',
      ['İki yaklaşımın sentezini yaptı.', 'i-Kİ yak-la-şı-MIN sen-te-zi-Nİ yap-TI', 'قدّم توليفاً بين المقاربتين.', 'سەنتەزی دوو ڕوانگەکەی کرد.']),
    opposite: ['analiz'],
  },
  {
    ...w('değerlendirme', 'de-ğer-len-dir-ME', 'تقييم', 'هەڵسەنگاندن',
      ['Değerlendirme raporu hazır.', 'de-ğer-len-dir-ME ra-po-RU ha-ZIR', 'تقرير التقييم جاهز.', 'ڕاپۆرتی هەڵسەنگاندن ئامادەیە.']),
    related: ['değerlendirmek', 'değer'],
  },
]);

export const C1_VOCABULARY_STANCE: VocabItem[] = [
  ...FRAMING,
  ...CERTAINTY,
];
