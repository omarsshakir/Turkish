import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, sense, w } from '../shared/helpers';

/**
 * B2 vocabulary: production, shelter, and public health.
 *
 * The environment and economy sections were already strong, so this fills the
 * specific holes a coverage audit found: what a country *makes* (`üretim`,
 * `tarım`, `sanayi` was there but not its neighbours), where people *live*
 * (`barınma`, `mülteci`, `yoğunluk`), and the language of a health story in
 * the news (`salgın` existed; `karantina`, `hijyen`, `önlem` did not).
 *
 * The `-sal/-sel` adjectives at the end are a set, not three separate words:
 * once a student sees `zihin → zihinsel`, they can read half the abstract
 * adjectives in a Turkish newspaper.
 */

/* ---------------- making things ---------------- */

const PRODUCTION: VocabItem[] = pack('finance', 'b2', 'noun', [
  {
    ...w('üretim', 'ü-re-TİM', 'إنتاج', 'بەرهەمهێنان',
      ['Üretim geçen yıl arttı.', 'ü-re-TİM ge-ÇEN YIL art-TI', 'ازداد الإنتاج العام الماضي.', 'بەرهەمهێنان ساڵی ڕابردوو زیادی کرد.']),
    collocations: ['üretim yapmak', 'üretim maliyeti'],
    opposite: ['tüketim'],
    related: ['üretmek'],
  },
  {
    ...w('tüketim', 'tü-ke-TİM', 'استهلاك', 'خەرجکردن',
      ['Enerji tüketimi düştü.', 'e-ner-Jİ tü-ke-ti-Mİ düş-TÜ', 'انخفض استهلاك الطاقة.', 'خەرجکردنی وزە کەمی کرد.']),
    opposite: ['üretim'],
    collocations: ['tüketim toplumu', 'su tüketimi'],
  },
  {
    ...w('tarım', 'ta-RIM', 'زراعة', 'کشتوکاڵ',
      ['Bölge tarımla geçiniyor.', 'böl-GE ta-rım-LA ge-çi-ni-YOR', 'تعيش المنطقة من الزراعة.', 'ناوچەکە بە کشتوکاڵ بژێو دەکات.']),
    collocations: ['tarım ürünü', 'organik tarım'],
  },
  {
    ...w('hayvancılık', 'hay-van-cı-LIK', 'تربية المواشي', 'ئاژەڵداری',
      ['Köyde hayvancılık yaygın.', 'köy-DE hay-van-cı-LIK yay-GIN', 'تربية المواشي شائعة في القرية.', 'لە گوندەکەدا ئاژەڵداری باوە.']),
    related: ['hayvan'],
  },
  {
    ...w('altyapı', 'alt-ya-PI', 'بنية تحتية', 'ژێرخان',
      ['Altyapı yatırımı gerekiyor.', 'alt-ya-PI ya-tı-rı-MI ge-re-ki-YOR', 'يلزم استثمار في البنية التحتية.', 'وەبەرهێنان لە ژێرخان پێویستە.']),
    note: b(
      'مركّبة شفّافة: «alt» تحت + «yapı» بنية.',
      'لێکدراوێکی ڕوون: «alt» ژێر + «yapı» بینا.',
    ),
  },
  {
    ...w('kesinti', 'ke-sin-Tİ', 'انقطاع؛ اقتطاع من الراتب', 'پچڕان؛ بڕین',
      ['Üç saat elektrik kesintisi oldu.', 'ÜÇ sa-AT e-lek-TRİK ke-sin-ti-Sİ ol-DU', 'حصل انقطاع كهرباء لثلاث ساعات.', 'سێ کاتژمێر پچڕانی کارەبا ڕوویدا.']),
    senses: [
      sense('اقتطاع من الراتب', 'بڕین لە مووچە',
        ['Maaştan vergi kesintisi yapıldı.', 'ma-aş-TAN ver-Gİ ke-sin-ti-Sİ ya-pıl-DI', 'اقتُطعت ضريبة من الراتب.', 'باج لە مووچەکە بڕدرا.']),
    ],
    related: ['kesmek'],
  },
]);

/* ---------------- climate and energy ---------------- */

const CLIMATE: VocabItem[] = [
  ...pack('nature', 'b2', 'noun', [
    {
      ...w('emisyon', 'e-mis-YON', 'انبعاثات', 'دەردانی گاز',
        ['Karbon emisyonu azaltılmalı.', 'kar-BON e-mis-yo-NU a-zal-tıl-ma-LI', 'ينبغي خفض انبعاثات الكربون.', 'دەبێت دەردانی کاربۆن کەم بکرێتەوە.']),
      collocations: ['karbon emisyonu', 'emisyonu azaltmak'],
    },
    {
      ...w('sera', 'se-RA', 'دفيئة', 'گەرمخانە',
        ['Sera gazları ısınmaya yol açıyor.', 'se-RA gaz-la-RI ı-sın-ma-YA YOL a-çı-YOR', 'غازات الدفيئة تسبّب الاحترار.', 'گازەکانی گەرمخانە دەبنە هۆی گەرمبوونەوە.']),
      collocations: ['sera gazı', 'sera etkisi'],
    },
  ]),
  ...pack('nature', 'b2', 'adjective', [
    {
      ...w('yenilenebilir', 'ye-ni-le-ne-bi-LİR', 'متجدّد', 'نوێبووەوە',
        ['Yenilenebilir enerjiye geçiyorlar.', 'ye-ni-le-ne-bi-LİR e-ner-ji-YE ge-çi-yor-LAR', 'ينتقلون إلى الطاقة المتجدّدة.', 'دەگوازنەوە بۆ وزەی نوێبووەوە.']),
      collocations: ['yenilenebilir enerji'],
      note: b(
        'نفس نمط «-ebilir» الذي في «ölçülebilir»: «yenilenmek» + قابلية.',
        'هەمان شێوازی «-ebilir»ی «ölçülebilir».',
      ),
    },
  ]),
];

/* ---------------- where people live ---------------- */

const SHELTER: VocabItem[] = pack('society', 'b2', 'noun', [
  {
    ...w('mülteci', 'mül-te-Cİ', 'لاجئ', 'پەنابەر',
      ['Kamplarda binlerce mülteci yaşıyor.', 'kamp-lar-DA bin-ler-CE mül-te-Cİ ya-şı-YOR', 'يعيش آلاف اللاجئين في المخيّمات.', 'هەزاران پەنابەر لە کەمپەکاندا دەژین.']),
    related: ['göç', 'sığınmacı'],
    note: b(
      'مصطلحان مختلفان قانونياً: «mülteci» لاجئ معترف به، و«sığınmacı» طالب لجوء.',
      'دوو زاراوەی جیاواز لە یاسادا: «mülteci» پەنابەری ناسراو، «sığınmacı» داواکاری پەنابەری.',
    ),
  },
  {
    ...w('barınma', 'ba-rın-MA', 'إيواء، سكن', 'حەوانەوە',
      ['Barınma sorunu büyüyor.', 'ba-rın-MA so-ru-NU bü-yü-YOR', 'تتفاقم مشكلة السكن.', 'کێشەی حەوانەوە گەورە دەبێت.']),
    collocations: ['barınma sorunu', 'barınma hakkı'],
    review: needsReview('Sorani term for institutional housing/shelter — needs a native reader.'),
  },
  {
    ...w('yoğunluk', 'yo-ğun-LUK', 'كثافة؛ ازدحام', 'چڕی؛ قەرەباڵغی',
      ['Nüfus yoğunluğu çok yüksek.', 'nü-FUS yo-ğun-lu-ĞU ÇOK yük-SEK', 'الكثافة السكّانية عالية جداً.', 'چڕی دانیشتووان زۆر بەرزە.']),
    senses: [
      sense('ازدحام مروري', 'قەرەباڵغی هاتوچۆ',
        ['Sabahları trafikte yoğunluk oluyor.', 'sa-bah-la-RI tra-fik-TE yo-ğun-LUK o-lu-YOR', 'يحدث ازدحام في المرور صباحاً.', 'بەیانیان لە هاتوچۆدا قەرەباڵغی دەبێت.']),
    ],
    related: ['yoğun'],
  },
]);

/* ---------------- public health ---------------- */

const HEALTH: VocabItem[] = [
  ...pack('health', 'b2', 'noun', [
    {
      ...w('önlem', 'ön-LEM', 'إجراء وقائي، تدبير', 'ڕێوشوێن',
        ['Gerekli önlemler alındı.', 'ge-rek-Lİ ön-lem-LER a-lın-DI', 'اتُّخذت الإجراءات اللازمة.', 'ڕێوشوێنە پێویستەکان گیرانەبەر.']),
      collocations: ['önlem almak', 'güvenlik önlemi'],
      note: b(
        'الفعل معها «almak» لا «yapmak»: «önlem almak» = يتّخذ إجراءً.',
        'کرداری لەگەڵدا «almak»ە نەک «yapmak»: «önlem almak».',
      ),
    },
    {
      ...w('risk', 'RİSK', 'خطر، مجازفة', 'مەترسی',
        ['Bu ilacın bilinen riskleri var.', 'BU i-la-CIN bi-li-NEN risk-le-Rİ var', 'لهذا الدواء مخاطر معروفة.', 'ئەم دەرمانە مەترسی ناسراوی هەیە.']),
      collocations: ['risk almak', 'risk altında', 'risk taşımak'],
    },
    {
      ...w('karantina', 'ka-ran-ti-NA', 'حجر صحّي', 'قەرەنتینە',
        ['On gün karantinada kaldı.', 'ON GÜN ka-ran-ti-na-DA kal-DI', 'بقي عشرة أيام في الحجر.', 'دە ڕۆژ لە قەرەنتینەدا مایەوە.']),
    },
    {
      ...w('hijyen', 'hij-YEN', 'نظافة، صحّة عامّة', 'پاکوخاوێنی',
        ['Mutfak hijyeni çok önemli.', 'mut-FAK hij-ye-Nİ ÇOK ö-nem-Lİ', 'نظافة المطبخ مهمّة جداً.', 'پاکوخاوێنی چێشتخانە زۆر گرنگە.']),
    },
    {
      ...w('obezite', 'o-be-zi-TE', 'السمنة', 'قەڵەوی',
        ['Obezite ciddi bir sağlık sorunu.', 'o-be-zi-TE cid-Dİ bir sağ-LIK so-ru-NU', 'السمنة مشكلة صحّية خطيرة.', 'قەڵەوی کێشەیەکی تەندروستی جدییە.']),
    },
    {
      ...w('hareketsizlik', 'ha-re-ket-siz-LİK', 'قلّة الحركة، الخمول', 'بێجووڵەیی',
        ['Hareketsizlik kalbe zarar veriyor.', 'ha-re-ket-siz-LİK kal-BE za-RAR ve-ri-YOR', 'قلّة الحركة تضرّ بالقلب.', 'بێجووڵەیی زیان بە دڵ دەگەیەنێت.']),
      related: ['hareket'],
      note: b(
        'ثلاث لواحق متراكمة: hareket + -siz (بلا) + -lik (اسم حالة). نمط شائع جداً.',
        'سێ پاشگری لەسەریەک: hareket + -siz + -lik. شێوازێکی زۆر باو.',
      ),
    },
    {
      ...w('terapi', 'te-ra-Pİ', 'علاج نفسي', 'تیراپی',
        ['Altı aydır terapiye gidiyor.', 'al-TI ay-DIR te-ra-pi-YE gi-di-YOR', 'يذهب إلى العلاج منذ ستة أشهر.', 'شەش مانگە دەچێتە تیراپی.']),
    },
    {
      ...w('depresyon', 'dep-res-YON', 'اكتئاب', 'خەمۆکی',
        ['Depresyon tedavi edilebilir.', 'dep-res-YON te-da-Vİ e-di-le-bi-LİR', 'الاكتئاب قابل للعلاج.', 'خەمۆکی چارەسەرکراوە.']),
    },
    {
      ...w('alışkanlık', 'a-lış-kan-LIK', 'عادة', 'خووگرتن',
        ['Kötü alışkanlıklarından kurtuldu.', 'kö-TÜ a-lış-kan-lık-la-rın-DAN kur-tul-DU', 'تخلّص من عاداته السيّئة.', 'لە خووە خراپەکانی ڕزگاری بوو.']),
      collocations: ['alışkanlık edinmek', 'kötü alışkanlık'],
      related: ['alışmak'],
    },
    {
      ...w('ömür', 'ö-MÜR', 'عمر، مدّة الحياة', 'تەمەن',
        ['Ortalama ömür uzadı.', 'or-ta-la-MA ö-MÜR u-za-DI', 'طال متوسّط العمر.', 'تەمەنی ناوەند درێژ بووەوە.']),
      collocations: ['ömür boyu', 'ortalama ömür'],
      note: b(
        '⚠️ «ömür» مدّة الحياة كلّها؛ عمر الشخص الحالي هو «yaş»: «Kaç yaşındasın?»',
        '⚠️ «ömür» درێژایی ژیانە؛ تەمەنی ئێستای کەس «yaş»ە.',
      ),
    },
    {
      ...w('yaşlanma', 'yaş-lan-MA', 'الشيخوخة، التقدّم في السنّ', 'پیربوون',
        ['Nüfusun yaşlanması tartışılıyor.', 'nü-fu-SUN yaş-lan-ma-SI tar-tı-şı-lı-YOR', 'تُناقَش شيخوخة السكّان.', 'پیربوونی دانیشتووان تاوتوێ دەکرێت.']),
      related: ['yaşlı'],
    },
  ]),
  ...pack('health', 'b2', 'adjective', [
    {
      ...w('koruyucu', 'ko-ru-yu-CU', 'وقائي', 'پارێزەر',
        ['Koruyucu sağlık hizmetleri arttı.', 'ko-ru-yu-CU sağ-LIK hiz-met-le-Rİ art-TI', 'ازدادت خدمات الصحّة الوقائية.', 'خزمەتگوزاری تەندروستی پارێزەر زیادی کرد.']),
      related: ['korumak'],
    },
  ]),
];

/* ---------------- the -sal / -sel family ---------------- */

const DERIVED: VocabItem[] = pack('adjectives', 'b2', 'adjective', [
  {
    ...w('zihinsel', 'zi-hin-SEL', 'ذهني، عقلي', 'مێشکی',
      ['Zihinsel yorgunluk da gerçektir.', 'zi-hin-SEL yor-gun-LUK DA ger-çek-TİR', 'الإرهاق الذهني حقيقي أيضاً.', 'ماندووبوونی مێشکیش ڕاستەقینەیە.']),
    related: ['zihin'],
    note: b(
      'اللاحقة «-sal/-sel» تصنع صفة من اسم: zihin → zihinsel، beden → bedensel، ruh → ruhsal. تعلّم النمط تقرأ نصف صفات الصحيفة.',
      'پاشگری «-sal/-sel» لە ناوەوە ئاوەڵناو دروست دەکات: zihin → zihinsel.',
    ),
  },
  {
    ...w('bedensel', 'be-den-SEL', 'جسدي', 'جەستەیی',
      ['Bedensel aktivite şart.', 'be-den-SEL ak-ti-vi-TE şart', 'النشاط الجسدي ضروري.', 'چالاکی جەستەیی پێویستە.']),
    related: ['beden', 'zihinsel'],
  },
  {
    ...w('ruhsal', 'ruh-SAL', 'نفسي، روحي', 'دەروونی',
      ['Ruhsal sağlık ihmal ediliyor.', 'ruh-SAL sağ-LIK ih-MAL e-di-li-YOR', 'الصحّة النفسية مهمَلة.', 'تەندروستی دەروونی پشتگوێ دەخرێت.']),
    related: ['ruh', 'zihinsel'],
  },
  {
    ...w('dayanıklılık', 'da-ya-nık-lı-LIK', 'متانة، قدرة على التحمّل', 'بەرگری',
      ['Malzemenin dayanıklılığı test edildi.', 'mal-ze-me-NİN da-ya-nık-lı-lı-ĞI TEST e-dil-Dİ', 'اختُبرت متانة المادّة.', 'بەرگری کەرەستەکە تاقیکرایەوە.']),
    related: ['dayanmak'],
    pos: 'noun',
  },
  {
    ...w('esneklik', 'es-nek-LİK', 'مرونة', 'نەرمی',
      ['Çalışma saatlerinde esneklik var.', 'ça-lış-MA sa-at-le-rin-DE es-nek-LİK var', 'هناك مرونة في ساعات العمل.', 'لە کاتەکانی کاردا نەرمی هەیە.']),
    pos: 'noun',
    opposite: ['katılık'],
  },
]);

export const B2_VOCABULARY_SOCIETY: VocabItem[] = [
  ...PRODUCTION,
  ...CLIMATE,
  ...SHELTER,
  ...HEALTH,
  ...DERIVED,
];
