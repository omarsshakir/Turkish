import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * A2 vocabulary: physical properties.
 *
 * The curriculum held `boş`, `dolu`, `temiz`, `kirli` and little else. A
 * student could say a bag was empty but not that it was heavy, a road wide, a
 * knife sharp, or bread stale — the ordinary adjectives of describing an
 * object, all missing.
 *
 * They are written as opposite pairs because that is how they are learned and
 * how they are asked about in a shop: `ağır / hafif`, `sert / yumuşak`,
 * `ince / kalın`, `taze / bayat`.
 *
 * Several also carry a second, figurative sense about people or situations —
 * `ağır` for slow traffic, `sert` for a harsh answer, `keskin` for a sharp
 * mind. Those are in the senses overlay rather than repeated here.
 */

/* ---------------- weight and force ---------------- */

const FORCE: VocabItem[] = pack('adjectives', 'a2', 'adjective', [
  {
    ...w('ağır', 'a-ĞIR', 'ثقيل', 'قورس',
      ['Bu çanta çok ağır.', 'BU çan-TA ÇOK a-ĞIR', 'هذه الحقيبة ثقيلة جداً.', 'ئەم جانتایە زۆر قورسە.']),
    opposite: ['hafif'],
    collocations: ['ağır yük', 'ağır hasta', 'ağır ceza'],
  },
  {
    ...w('hafif', 'ha-FİF', 'خفيف', 'سووک',
      ['Hafif bir yemek istiyorum.', 'ha-FİF bir ye-MEK is-ti-yo-RUM', 'أريد طعاماً خفيفاً.', 'خواردنێکی سووکم دەوێت.']),
    opposite: ['ağır'],
    collocations: ['hafif müzik', 'hafif yağmur'],
  },
  {
    ...w('sert', 'SERT', 'قاسٍ، صلب؛ حادّ (طبع)', 'ڕەق؛ توند',
      ['Ekmek sertleşmiş.', 'ek-MEK sert-leş-MİŞ', 'صار الخبز قاسياً.', 'نانەکە ڕەق بووە.']),
    opposite: ['yumuşak'],
    collocations: ['sert rüzgâr', 'sert tepki', 'sert bakmak'],
    note: b(
      'تُستعمل كثيراً للطبع والردّ: «sert bir cevap» = ردّ حادّ.',
      'زۆر بۆ ڕەفتار و وەڵام بەکاردێت: «sert bir cevap».',
    ),
  },
  {
    ...w('yumuşak', 'yu-mu-ŞAK', 'ناعم، ليّن', 'نەرم',
      ['Yastığım çok yumuşak.', 'yas-tı-ĞIM ÇOK yu-mu-ŞAK', 'وسادتي ناعمة جداً.', 'سەرینەکەم زۆر نەرمە.']),
    opposite: ['sert'],
    collocations: ['yumuşak huylu', 'yumuşak geçiş'],
  },
  {
    ...w('sıkı', 'sı-KI', 'مشدود، ضيّق؛ صارم', 'توند',
      ['Kemeri biraz sıkı bağladım.', 'ke-me-Rİ bi-RAZ sı-KI bağ-la-DIM', 'شددت الحزام قليلاً.', 'پشتێنەکەم کەمێک توند بەست.']),
    opposite: ['gevşek'],
    collocations: ['sıkı çalışmak', 'sıkı kural', 'sıkı dost'],
  },
  {
    ...w('gevşek', 'gev-ŞEK', 'مرتخٍ، غير محكم', 'شل',
      ['Vida gevşek kalmış.', 'vi-DA gev-ŞEK kal-MIŞ', 'بقي البرغي مرتخياً.', 'بورغییەکە شل ماوەتەوە.']),
    opposite: ['sıkı'],
  },
]);

/* ---------------- dimension ---------------- */

const DIMENSION: VocabItem[] = pack('adjectives', 'a2', 'adjective', [
  {
    ...w('geniş', 'ge-NİŞ', 'واسع', 'فراوان',
      ['Geniş bir odaya taşındık.', 'ge-NİŞ bir o-da-YA ta-şın-DIK', 'انتقلنا إلى غرفة واسعة.', 'گواستمانەوە بۆ ژوورێکی فراوان.']),
    opposite: ['dar'],
    collocations: ['geniş aile', 'geniş zaman', 'geniş çaplı'],
  },
  {
    ...w('dar', 'DAR', 'ضيّق', 'تەنگ',
      ['Bu pantolon bana dar.', 'BU pan-to-LON ba-NA dar', 'هذا البنطال ضيّق عليّ.', 'ئەم پانتۆڵە بۆ من تەنگە.']),
    opposite: ['geniş'],
    collocations: ['dar sokak', 'dar gelirli', 'dar zaman'],
  },
  {
    ...w('derin', 'de-RİN', 'عميق', 'قووڵ',
      ['Havuz burada çok derin.', 'ha-VUZ bu-ra-DA ÇOK de-RİN', 'المسبح عميق جداً هنا.', 'مەلەوانگەکە لێرە زۆر قووڵە.']),
    opposite: ['sığ'],
    collocations: ['derin nefes', 'derin uyku', 'derin bilgi'],
  },
  {
    ...w('ince', 'in-CE', 'رقيق، نحيف؛ لطيف', 'باریک؛ نازک',
      ['Ekmeği ince kes.', 'ek-me-Ğİ in-CE kes', 'اقطع الخبز رقيقاً.', 'نانەکە باریک ببڕە.']),
    opposite: ['kalın'],
    collocations: ['ince ayrıntı', 'ince düşünmek'],
    note: b(
      'مجازاً «ince bir insan» = شخص مرهف ولطيف — مدح لا وصف جسدي.',
      'بە مەجازی «ince bir insan» = کەسێکی نازک و بەڕێز.',
    ),
  },
  {
    ...w('kalın', 'ka-LIN', 'سميك، غليظ', 'ئەستوور',
      ['Kalın bir battaniye getir.', 'ka-LIN bir bat-ta-ni-YE ge-TİR', 'أحضر بطّانية سميكة.', 'بەتانییەکی ئەستوور بهێنە.']),
    opposite: ['ince'],
    collocations: ['kalın kitap', 'kalın ses'],
  },
  {
    ...w('düz', 'DÜZ', 'مستقيم، مستوٍ؛ سادة', 'ڕاست؛ سادە',
      ['Düz devam edin.', 'DÜZ de-VAM e-DİN', 'واصل مستقيماً.', 'ڕاست بەردەوام بە.']),
    opposite: ['eğri'],
    collocations: ['düz yol', 'düz gömlek', 'dümdüz'],
  },
  {
    ...w('eğri', 'eğ-Rİ', 'معوجّ، مائل', 'خوار',
      ['Tablo biraz eğri asılmış.', 'tab-LO bi-RAZ eğ-Rİ a-sıl-MIŞ', 'عُلّقت اللوحة مائلة قليلاً.', 'تابلۆکە کەمێک خوار هەڵواسراوە.']),
    opposite: ['düz'],
  },
  {
    ...w('sivri', 'siv-Rİ', 'مدبّب، حادّ الطرف', 'تیژ',
      ['Sivri uçlu bir alet.', 'siv-Rİ uç-LU bir a-LET', 'أداة مدبّبة الطرف.', 'ئامێرێکی سەرتیژ.']),
    collocations: ['sivri biber', 'sivri dilli'],
  },
]);

/* ---------------- condition ---------------- */

const CONDITION: VocabItem[] = pack('adjectives', 'a2', 'adjective', [
  {
    ...w('taze', 'ta-ZE', 'طازج', 'تازە',
      ['Bu ekmek taze mi?', 'BU ek-MEK ta-ZE mi', 'هل هذا الخبز طازج؟', 'ئەم نانە تازەیە؟']),
    opposite: ['bayat'],
    collocations: ['taze sebze', 'taze haber'],
  },
  {
    ...w('bayat', 'ba-YAT', 'قديم، غير طازج', 'کۆن (نان)',
      ['Ekmek bayatlamış.', 'ek-MEK ba-yat-la-MIŞ', 'صار الخبز قديماً.', 'نانەکە کۆن بووە.']),
    opposite: ['taze'],
  },
  {
    ...w('çiğ', 'ÇİĞ', 'نيّئ', 'خاو',
      ['Et hâlâ çiğ.', 'ET ha-LÂ ÇİĞ', 'اللحم ما زال نيّئاً.', 'گۆشتەکە هێشتا خاوە.']),
    opposite: ['pişmiş'],
    note: b(
      '⚠️ لا تخلطها بـ «çiy» = الندى. النطق متقارب والكتابة مختلفة.',
      '⚠️ تێکەڵی «çiy» = خونچە مەکە.',
    ),
  },
  {
    ...w('pişmiş', 'piş-MİŞ', 'مطبوخ، ناضج', 'پێگەیشتوو',
      ['Yemek pişmiş, buyurun.', 'ye-MEK piş-MİŞ bu-yu-RUN', 'الطعام جاهز، تفضّلوا.', 'خواردنەکە پێگەیشتووە، فەرموون.']),
    opposite: ['çiğ'],
    related: ['pişmek'],
  },
  {
    ...w('olgun', 'ol-GUN', 'ناضج (ثمرة، شخص)', 'پێگەیشتوو',
      ['Domatesler olgunlaşmış.', 'do-ma-tes-LER ol-gun-laş-MIŞ', 'نضجت الطماطم.', 'تەماتەکان پێگەیشتوون.']),
    opposite: ['ham'],
    collocations: ['olgun davranmak'],
    note: b(
      'تُستعمل للأشخاص أيضاً: «olgun bir insan» = شخص ناضج.',
      'بۆ کەسانیش بەکاردێت: «olgun bir insan».',
    ),
  },
  {
    ...w('ham', 'HAM', 'فجّ، غير ناضج؛ خام', 'خاو',
      ['Meyve daha ham.', 'mey-VE da-HA ham', 'الثمرة ما زالت فجّة.', 'میوەکە هێشتا خاوە.']),
    opposite: ['olgun'],
    collocations: ['ham madde', 'ham petrol'],
  },
  {
    ...w('sağlam', 'sağ-LAM', 'متين، سليم', 'ساغ، بەهێز',
      ['Masa hâlâ sağlam.', 'ma-SA ha-LÂ sağ-LAM', 'الطاولة ما زالت متينة.', 'مێزەکە هێشتا ساغە.']),
    opposite: ['çürük'],
    collocations: ['sağlam kanıt', 'sağlam durmak'],
  },
  {
    ...w('çürük', 'çü-RÜK', 'متعفّن؛ نخر', 'ڕزیو',
      ['Çürük dişimi çektirdim.', 'çü-RÜK di-şi-Mİ çek-tir-DİM', 'خلعت سنّي النخر.', 'ددانە ڕزیوەکەمم دەرهێنا.']),
    opposite: ['sağlam'],
    collocations: ['çürük diş', 'çürük meyve'],
  },
]);

/* ---------------- surface and light ---------------- */

const SURFACE: VocabItem[] = pack('adjectives', 'a2', 'adjective', [
  {
    ...w('keskin', 'kes-KİN', 'حادّ', 'تیژ',
      ['Bıçak çok keskin.', 'bı-ÇAK ÇOK kes-KİN', 'السكّين حادّة جداً.', 'چەقۆکە زۆر تیژە.']),
    opposite: ['kör'],
    collocations: ['keskin bıçak', 'keskin zekâ', 'keskin koku'],
    related: ['kesmek'],
  },
  {
    ...w('kör', 'KÖR', 'غير حادّ؛ أعمى', 'کول؛ کوێر',
      ['Bu bıçak kör.', 'BU bı-ÇAK kör', 'هذه السكّين غير حادّة.', 'ئەم چەقۆیە کولە.']),
    opposite: ['keskin'],
    note: b(
      'نفس الكلمة للسكّين غير الحادّة وللإنسان الأعمى — والسياق يفصل تماماً.',
      'هەمان وشە بۆ چەقۆی کول و مرۆڤی کوێر.',
    ),
  },
  {
    ...w('parlak', 'par-LAK', 'لامع، ساطع', 'درەوشاوە',
      ['Parlak bir gelecek.', 'par-LAK bir ge-le-CEK', 'مستقبل مشرق.', 'داهاتوویەکی درەوشاوە.']),
    opposite: ['mat'],
    collocations: ['parlak fikir', 'parlak öğrenci'],
  },
  {
    ...w('mat', 'MAT', 'غير لامع، مطفأ اللمعان', 'بێ درەوشانەوە',
      ['Mat bir boya seçtik.', 'MAT bir bo-YA seç-TİK', 'اخترنا طلاءً غير لامع.', 'ڕەنگێکی بێ درەوشانەوەمان هەڵبژارد.']),
    opposite: ['parlak'],
  },
  {
    ...w('şeffaf', 'şef-FAF', 'شفّاف', 'ڕوون، شەفاف',
      ['Şeffaf bir süreç istiyoruz.', 'şef-FAF bir sü-REÇ is-ti-yo-RUZ', 'نريد عملية شفّافة.', 'پڕۆسەیەکی شەفافمان دەوێت.']),
    collocations: ['şeffaf yönetim', 'şeffaf poşet'],
    note: b(
      'تُستعمل مجازاً كثيراً في الإدارة والسياسة، تماماً كالعربية.',
      'بە مەجازی زۆر لە کارگێڕی و سیاسەتدا بەکاردێت.',
    ),
  },
  {
    ...w('pürüzsüz', 'pü-rüz-SÜZ', 'أملس، بلا نتوءات', 'لووس',
      ['Yüzeyi pürüzsüz.', 'yü-ze-Yİ pü-rüz-SÜZ', 'سطحه أملس.', 'ڕووەکەی لووسە.']),
  },
]);

export const A2_VOCABULARY_PROPERTIES: VocabItem[] = [
  ...FORCE,
  ...DIMENSION,
  ...CONDITION,
  ...SURFACE,
];
