import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, w } from '../shared/helpers';

/**
 * C1 vocabulary: the adjectives that qualify a claim.
 *
 * At C1 the difficulty stops being "what does this word mean" and becomes
 * "how strongly am I committing myself". `mutlak` and `görece` are opposites;
 * `dolaylı` and `dolaysız` change who is responsible; `-ebilir` adjectives
 * (`ölçülebilir`, `yinelenebilir`) are the vocabulary of scientific method and
 * form a productive pattern worth learning as a set rather than one by one.
 *
 * Most of these are native Turkish derivations, which makes them harder for
 * this platform's students than the Arabic-derived C1+ register — there is no
 * bridge, only the suffix pattern.
 */

const KU_TECHNICAL = 'Analytical Sorani terminology — needs a native academic reader.';

/* ---------------- absolute vs relative ---------------- */

const DEGREE: VocabItem[] = pack('academic', 'c1', 'adjective', [
  {
    ...w('mutlak', 'mut-LAK', 'مطلق', 'ڕەها',
      ['Mutlak bir doğru yok.', 'mut-LAK bir doğ-RU yok', 'لا يوجد صواب مطلق.', 'ڕاستییەکی ڕەها نییە.']),
    collocations: ['mutlak doğru', 'mutlak çoğunluk'],
    opposite: ['görece'],
  },
  {
    ...w('görece', 'gö-re-CE', 'نسبي', 'ڕێژەیی',
      ['Bu görece yeni bir yaklaşım.', 'BU gö-re-CE ye-Nİ bir yak-la-ŞIM', 'هذه مقاربة جديدة نسبياً.', 'ئەمە ڕوانگەیەکی نسبەتەن نوێیە.']),
    opposite: ['mutlak'],
    related: ['göreceli'],
  },
  {
    ...w('salt', 'SALT', 'محض، خالص', 'ڕەق',
      ['Salt teorik bir tartışma.', 'SALT te-o-RİK bir tar-tış-MA', 'نقاش نظري محض.', 'گفتوگۆیەکی تیۆری ڕەق.']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('dolaylı', 'do-lay-LI', 'غير مباشر', 'ناڕاستەوخۆ',
      ['Dolaylı bir eleştiri yaptı.', 'do-lay-LI bir e-leş-ti-Rİ yap-TI', 'وجّه نقداً غير مباشر.', 'ڕەخنەیەکی ناڕاستەوخۆی گرت.']),
    collocations: ['dolaylı olarak', 'dolaylı anlatım'],
    opposite: ['dolaysız'],
  },
  {
    ...w('dolaysız', 'do-lay-SIZ', 'مباشر', 'ڕاستەوخۆ',
      ['Dolaysız bir cevap istiyorum.', 'do-lay-SIZ bir ce-VAP is-ti-yo-RUM', 'أريد جواباً مباشراً.', 'وەڵامێکی ڕاستەوخۆم دەوێت.']),
    opposite: ['dolaylı'],
  },
  {
    ...w('köklü', 'kök-LÜ', 'جذري، عريق', 'ڕەگدار',
      ['Köklü bir değişiklik gerekiyor.', 'kök-LÜ bir de-ği-şik-LİK ge-re-ki-YOR', 'يلزم تغيير جذري.', 'گۆڕانکارییەکی ڕەگدار پێویستە.']),
    collocations: ['köklü değişiklik', 'köklü bir kurum'],
    note: b(
      'تحمل معنيين إيجابيين: «جذري» للتغيير، و«عريق» للمؤسسة.',
      'دوو واتای ئەرێنی هەیە: «ڕەگدار» بۆ گۆڕانکاری، و «کۆن و بەڕێز» بۆ دامەزراوە.',
    ),
  },
  {
    ...w('ayrıntılı', 'ay-rın-tı-LI', 'مفصّل', 'وردەکاری',
      ['Ayrıntılı bir rapor hazırladı.', 'ay-rın-tı-LI bir ra-POR ha-zır-la-DI', 'أعدّ تقريراً مفصّلاً.', 'ڕاپۆرتێکی وردی ئامادە کرد.']),
    opposite: ['yüzeysel'],
  },
  {
    ...w('özlü', 'öz-LÜ', 'موجز، مركّز', 'کورت و پڕواتا',
      ['Özlü bir açıklama yaptı.', 'öz-LÜ bir a-çık-la-MA yap-TI', 'قدّم شرحاً موجزاً.', 'ڕوونکردنەوەیەکی کورت و پڕواتای کرد.']),
    related: ['veciz'],
  },
]);

/* ---------------- the -ebilir pattern: scientific method ---------------- */

const TESTABLE: VocabItem[] = pack('science', 'c1', 'adjective', [
  {
    ...w('ölçülebilir', 'öl-çü-le-bi-LİR', 'قابل للقياس', 'پێوانەکراو',
      ['Hedefler ölçülebilir olmalı.', 'he-def-LER öl-çü-le-bi-LİR ol-ma-LI', 'ينبغي أن تكون الأهداف قابلة للقياس.', 'دەبێت ئامانجەکان پێوانەکراو بن.']),
    note: b(
      'نمط منتج: الفعل + -ebilir يعطي «قابل لـ». تعلّمه مرّة واستعمله مع أي فعل.',
      'شێوازێکی بەرهەمدارە: کردار + -ebilir واتای «توانای» دەدات.',
    ),
  },
  {
    ...w('gözlemlenebilir', 'göz-lem-le-ne-bi-LİR', 'قابل للملاحظة', 'بینراو',
      ['Gözlemlenebilir bir etki yok.', 'göz-lem-le-ne-bi-LİR bir et-Kİ yok', 'لا يوجد أثر قابل للملاحظة.', 'کاریگەرییەکی بینراو نییە.']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('yinelenebilir', 'yi-ne-le-ne-bi-LİR', 'قابل للتكرار', 'دووبارەکراو',
      ['Deney yinelenebilir olmalı.', 'de-NEY yi-ne-le-ne-bi-LİR ol-ma-LI', 'ينبغي أن تكون التجربة قابلة للتكرار.', 'دەبێت تاقیکردنەوەکە دووبارەکراو بێت.']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('öngörülebilir', 'ön-gö-rü-le-bi-LİR', 'قابل للتنبّؤ', 'پێشبینیکراو',
      ['Sonuç öngörülebilirdi.', 'so-NUÇ ön-gö-rü-le-bi-lir-Dİ', 'كانت النتيجة قابلة للتنبّؤ.', 'ئەنجامەکە پێشبینیکراو بوو.']),
  },
  {
    ...w('uygulanabilir', 'uy-gu-la-na-bi-LİR', 'قابل للتطبيق', 'جێبەجێکراو',
      ['Öneri uygulanabilir değil.', 'ö-ne-Rİ uy-gu-la-na-bi-LİR de-ĞİL', 'الاقتراح غير قابل للتطبيق.', 'پێشنیارەکە جێبەجێکراو نییە.']),
  },
]);

/* ---------------- what a factor does ---------------- */

const CAUSAL: VocabItem[] = pack('academic', 'c1', 'adjective', [
  {
    ...w('belirleyici', 'be-lir-le-yi-Cİ', 'حاسم، محدِّد', 'دیاریکەر',
      ['Belirleyici faktör eğitimdi.', 'be-lir-le-yi-Cİ fak-TÖR e-ği-tim-Dİ', 'كان العامل الحاسم هو التعليم.', 'فاکتەری دیاریکەر خوێندن بوو.']),
    collocations: ['belirleyici faktör', 'belirleyici rol'],
  },
  {
    ...w('tetikleyici', 'te-tik-le-yi-Cİ', 'مُحفِّز، مُطلِق', 'هاندەر',
      ['Krizin tetikleyici sebebi neydi?', 'kri-ZİN te-tik-le-yi-Cİ se-be-Bİ ney-Dİ', 'ما السبب الذي أطلق الأزمة؟', 'هۆکاری هاندەری قەیرانەکە چی بوو؟']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('sınırlayıcı', 'sı-nır-la-yı-CI', 'مقيِّد', 'سنووردارکەر',
      ['Sınırlayıcı bir koşul eklendi.', 'sı-nır-la-yı-CI bir ko-ŞUL ek-len-Dİ', 'أُضيف شرط مقيِّد.', 'مەرجێکی سنووردارکەر زیادکرا.']),
    opposite: ['kolaylaştırıcı'],
  },
  {
    ...w('kapsayıcı', 'kap-sa-yı-CI', 'شامل، جامع', 'گشتگیر',
      ['Kapsayıcı bir politika izliyorlar.', 'kap-sa-yı-CI bir po-li-ti-KA iz-li-yor-LAR', 'يتّبعون سياسة شاملة.', 'سیاسەتێکی گشتگیر پەیڕەو دەکەن.']),
    opposite: ['dışlayıcı'],
  },
  {
    ...w('dışlayıcı', 'dış-la-yı-CI', 'إقصائي', 'دوورخەرەوە',
      ['Dışlayıcı bir dil kullanmamalıyız.', 'dış-la-yı-CI bir DİL kul-lan-ma-ma-lı-YIZ', 'علينا ألّا نستعمل لغة إقصائية.', 'نابێت زمانێکی دوورخەرەوە بەکاربهێنین.']),
    opposite: ['kapsayıcı'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('indirgemeci', 'in-dir-ge-me-Cİ', 'اختزالي', 'کورتکەرەوە',
      ['Bu indirgemeci bir okuma.', 'BU in-dir-ge-me-Cİ bir o-ku-MA', 'هذه قراءة اختزالية.', 'ئەمە خوێندنەوەیەکی کورتکەرەوەیە.']),
    opposite: ['bütüncül'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('bütüncül', 'bü-tün-CÜL', 'كلّي، شمولي', 'گشتگیرانە',
      ['Bütüncül bir bakış gerekiyor.', 'bü-tün-CÜL bir ba-KIŞ ge-re-ki-YOR', 'يلزم نظر كلّي.', 'ڕوانینێکی گشتگیرانە پێویستە.']),
    opposite: ['indirgemeci'],
    review: needsReview(KU_TECHNICAL),
  },
]);

const NOUNS: VocabItem[] = pack('academic', 'c1', 'noun', [
  {
    ...w('ivme', 'iv-ME', 'زخم، تسارع', 'خێرایی',
      ['Reformlar ivme kazandı.', 're-form-LAR iv-ME ka-zan-DI', 'اكتسبت الإصلاحات زخماً.', 'چاکسازییەکان خێراییان وەرگرت.']),
    collocations: ['ivme kazanmak', 'ivme kaybetmek'],
  },
  {
    ...w('dinamik', 'di-na-MİK', 'ديناميكية، حركية', 'دینامیک',
      ['Grubun kendine özgü bir dinamiği var.', 'gru-BUN ken-di-NE öz-GÜ bir di-na-mi-Ğİ var', 'للمجموعة ديناميكية خاصّة.', 'گروپەکە دینامیکی تایبەت بە خۆی هەیە.']),
  },
]);

export const C1_VOCABULARY_QUALIFIERS: VocabItem[] = [
  ...DEGREE,
  ...TESTABLE,
  ...CAUSAL,
  ...NOUNS,
];
