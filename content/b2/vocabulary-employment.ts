import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * B2 vocabulary: the employment relationship.
 *
 * The curriculum had `maaş`, `mesai` and `sözleşme` but not the words that
 * decide what those mean: `işveren`, `çalışan`, `kadro`, `kıdem`, `fesih`,
 * `tazminat`'s neighbours. This is the vocabulary of a contract, a payslip and
 * a dismissal — the three documents a working adult actually has to read.
 *
 * `işveren` / `çalışan` are worth a note of their own: both are *participles
 * used as nouns* (`iş veren` = "the one who gives work"), which is one of the
 * commonest ways Turkish coins a job title, and a pattern a student can then
 * read everywhere: `yazan`, `okuyan`, `bilen`, `gelen`.
 */

/* ---------------- the two sides ---------------- */

const PARTIES: VocabItem[] = pack('work', 'b2', 'noun', [
  {
    ...w('işveren', 'iş-ve-REN', 'صاحب العمل، رب العمل', 'خاوەنکار',
      ['İşveren sözleşmeyi imzaladı.', 'iş-ve-REN söz-leş-me-Yİ im-za-la-DI', 'وقّع صاحب العمل العقد.', 'خاوەنکار گرێبەستەکەی واژوو کرد.']),
    opposite: ['çalışan'],
    note: b(
      'مركّبة شفّافة: «iş» عمل + «veren» المُعطي — أي «مُعطي العمل». نفس البناء في «çalışan» = «العامل».',
      'لێکدراوێکی ڕوون: «iş» + «veren».',
    ),
  },
  {
    ...w('çalışan', 'ça-lı-ŞAN', 'موظّف، عامل', 'کارمەند',
      ['Şirkette iki yüz çalışan var.', 'şir-ket-TE i-Kİ YÜZ ça-lı-ŞAN var', 'في الشركة مئتا موظّف.', 'دوو سەد کارمەند لە کۆمپانیاکەدان.']),
    opposite: ['işveren'],
    related: ['çalışmak'],
  },
  {
    ...w('personel', 'per-so-NEL', 'الطاقم، الموظّفون', 'ستاف',
      ['Personel eğitimi verildi.', 'per-so-NEL e-ği-ti-Mİ ve-ril-Dİ', 'قُدّم تدريب للموظّفين.', 'ڕاهێنانی ستاف پێدرا.']),
    note: b(
      '⚠️ اسم جمع لا يُجمع: «personel» تعني الطاقم كله. الفرد هو «çalışan».',
      '⚠️ ناوێکی کۆیە: هەموو ستافەکە دەگرێتەوە.',
    ),
  },
  {
    ...w('kadro', 'kad-RO', 'ملاك وظيفي، كادر', 'کادر',
      ['Kadroya alındı.', 'kad-ro-YA a-lın-DI', 'عُيّن في الملاك.', 'خرایە ناو کادرەوە.']),
    collocations: ['kadroya alınmak', 'kadrolu çalışan'],
    note: b(
      'مهمّ عملياً في تركيا: «kadrolu» موظّف دائم، وغيره متعاقد أو مؤقّت.',
      'گرنگە: «kadrolu» کارمەندی هەمیشەییە.',
    ),
  },
  {
    ...w('pozisyon', 'po-zis-YON', 'منصب، وظيفة', 'پۆست',
      ['Açık bir pozisyon var mı?', 'a-ÇIK bir po-zis-YON VAR mı', 'هل توجد وظيفة شاغرة؟', 'پۆستێکی بەتاڵ هەیە؟']),
    related: ['konum'],
  },
  {
    ...w('unvan', 'un-VAN', 'لقب وظيفي', 'نازناو',
      ['Unvanı ne olacak?', 'un-va-NI NE o-la-CAK', 'ما سيكون لقبه الوظيفي؟', 'نازناوەکەی چی دەبێت؟']),
  },
]);

/* ---------------- pay ---------------- */

const PAY: VocabItem[] = pack('finance', 'b2', 'noun', [
  {
    ...w('prim', 'PRİM', 'علاوة أداء', 'پاداشت',
      ['Satış primi aldık.', 'sa-TIŞ pri-Mİ al-DIK', 'حصلنا على علاوة مبيعات.', 'پاداشتی فرۆشمان وەرگرت.']),
    related: ['ikramiye'],
  },
  {
    ...w('ikramiye', 'ik-ra-mi-YE', 'مكافأة، منحة', 'پاداشت',
      ['Bayram ikramiyesi yattı.', 'bay-RAM ik-ra-mi-ye-Sİ yat-TI', 'أُودعت منحة العيد.', 'پاداشتی جەژن دانرا.']),
    related: ['prim'],
    note: b(
      '«prim» مرتبطة بالأداء، و«ikramiye» منحة دورية أو موسمية.',
      '«prim» بە کارایی بەستراوە، «ikramiye» پاداشتی وەرزییە.',
    ),
  },
  {
    ...w('kıdem', 'kı-DEM', 'أقدمية', 'کۆنی خزمەت',
      ['Kıdem tazminatı ödendi.', 'kı-DEM taz-mi-na-TI ö-den-Dİ', 'دُفع تعويض الأقدمية.', 'قەرەبووی کۆنی خزمەت درا.']),
    collocations: ['kıdem tazminatı', 'kıdemli çalışan'],
  },
  {
    ...w('deneme süresi', 'de-ne-ME sü-re-Sİ', 'فترة تجربة', 'ماوەی تاقیکردنەوە',
      ['Deneme süresi iki ay.', 'de-ne-ME sü-re-Sİ i-Kİ ay', 'فترة التجربة شهران.', 'ماوەی تاقیکردنەوە دوو مانگە.']),
    related: ['denemek'],
  },
]);

/* ---------------- ending it ---------------- */

const ENDING: VocabItem[] = pack('law', 'b2', 'noun', [
  {
    ...w('fesih', 'fe-SİH', 'فسخ، إنهاء (عقد)', 'هەڵوەشاندنەوە',
      ['Sözleşmenin feshi bildirildi.', 'söz-leş-me-NİN fes-Hİ bil-di-ril-Dİ', 'أُبلغ بفسخ العقد.', 'هەڵوەشاندنەوەی گرێبەستەکە ڕاگەیەنرا.']),
    collocations: ['fesih bildirimi', 'tek taraflı fesih'],
    note: b(
      '⚠️ تسقط الحركة عند الإضافة: fesih → feshi. نمط شائع في الكلمات العربية الأصل: şehir→şehri, fikir→fikri.',
      '⚠️ دەنگدار دەکەوێت: fesih → feshi.',
    ),
  },
  {
    ...w('organizasyon', 'or-ga-ni-zas-YON', 'تنظيم؛ منظّمة', 'ڕێکخستن',
      ['Organizasyon çok başarılıydı.', 'or-ga-ni-zas-YON ÇOK ba-şa-rı-lıy-DI', 'كان التنظيم ناجحاً جداً.', 'ڕێکخستنەکە زۆر سەرکەوتوو بوو.']),
    senses: [
      sense('الهيكل التنظيمي للشركة', 'پێکهاتەی ڕێکخراوەیی',
        ['Organizasyon şeması güncellendi.', 'or-ga-ni-zas-YON şe-ma-SI gün-cel-len-Dİ', 'حُدّث الهيكل التنظيمي.', 'خشتەی پێکهاتەکە نوێ کرایەوە.']),
    ],
  },
  {
    ...w('hiyerarşi', 'hi-ye-rar-Şİ', 'تسلسل هرمي', 'پلەبەندی',
      ['Kurumda katı bir hiyerarşi var.', 'ku-rum-DA ka-TI bir hi-ye-rar-Şİ var', 'في المؤسسة تسلسل هرمي صارم.', 'لە دامەزراوەکەدا پلەبەندییەکی توند هەیە.']),
  },
  {
    ...w('şema', 'şe-MA', 'مخطّط، رسم بياني', 'خشتە',
      ['Süreci bir şemayla anlattı.', 'sü-re-Cİ bir şe-may-LA an-lat-TI', 'شرح العملية بمخطّط.', 'پڕۆسەکەی بە خشتەیەک ڕوونکردەوە.']),
  },
  {
    ...w('görev tanımı', 'gö-REV ta-nı-MI', 'وصف وظيفي', 'پێناسەی ئەرک',
      ['Görev tanımım net değil.', 'gö-REV ta-nı-MIM NET de-ĞİL', 'وصفي الوظيفي غير واضح.', 'پێناسەی ئەرکەکەم ڕوون نییە.']),
    related: ['görev', 'tanım'],
  },
]);

export const B2_VOCABULARY_EMPLOYMENT: VocabItem[] = [
  ...PARTIES,
  ...PAY,
  ...ENDING,
];
