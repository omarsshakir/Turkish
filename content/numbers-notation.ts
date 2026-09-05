import type { NumberSection } from '@/types/content';
import { b, numbers, p } from './shared/helpers';

/**
 * Numbers, fourth pass: notation, and being deliberately vague.
 *
 * Two things the earlier number files never taught.
 *
 * **Notation.** Turkish swaps the two separators an Arabic or English reader
 * expects: the decimal mark is a **comma** and the thousands separator is a
 * **period**. `1.500,75` is one thousand five hundred and seventy-five
 * hundredths. A student who reads that as one point five is not making a
 * language mistake — they are making a *reading* mistake, and it costs money
 * at a counter.
 *
 * **Vagueness.** Real speech is full of `yaklaşık`, `civarında`, `kadar`,
 * `aşağı yukarı`. A learner who can only produce exact numbers sounds like a
 * form. These are the hedges, plus ranges, currency and rankings.
 *
 * Adding sections here also extends the generated number exercises: the
 * `context` question kind draws from `NUMBER_SECTIONS`, so these become
 * practice material without a second exercise engine.
 */

/* ------------------------------------------------------------------ */

const DECIMALS: NumberSection = {
  id: 'decimals',
  title: 'Virgül ve nokta',
  subtitle: b('الفاصلة والنقطة', 'کۆما و خاڵ'),
  explain: b(
    '⚠️ التركية تعكس ما تتوقّعه: الفاصلة (virgül) هي العلامة العشرية، والنقطة (nokta) تفصل الآلاف. «1.500,75» = ألف وخمسمئة وخمسة وسبعون من مئة. تُقرأ العشرية بكلمة «virgül» بين الجزأين: «üç virgül beş» = ٣٫٥. وفي الكلام اليومي يُقال «üç buçuk» إذا كان النصف بالضبط.',
    '⚠️ تورکی پێچەوانەیە: کۆما نیشانەی دەیییە و خاڵ هەزارەکان جیا دەکاتەوە.',
  ),
  entries: numbers('decimals', [
    ['3,5', 'üç virgül beş', 'ÜÇ vir-GÜL beş', 'ثلاثة فاصلة خمسة', 'سێ کۆما پێنج'],
    ['0,5', 'sıfır virgül beş', 'sı-FIR vir-GÜL beş', 'نصف', 'سفر کۆما پێنج'],
    ['2,25', 'iki virgül yirmi beş', 'i-Kİ vir-GÜL yir-mi BEŞ', 'اثنان فاصلة خمسة وعشرين', 'دوو کۆما بیست و پێنج'],
    ['1.000', 'bin', 'BİN', 'ألف — النقطة تفصل الآلاف', 'هەزار'],
    ['1.500', 'bin beş yüz', 'BİN beş YÜZ', 'ألف وخمسمئة', 'هەزار و پێنج سەد'],
    ['1.500,75', 'bin beş yüz virgül yetmiş beş', 'BİN beş YÜZ vir-GÜL yet-miş BEŞ', 'ألف وخمسمئة وخمسة وسبعون من مئة', 'هەزار و پێنج سەد کۆما حەفتا و پێنج'],
    ['12.345', 'on iki bin üç yüz kırk beş', 'on i-Kİ BİN üç YÜZ kırk BEŞ', 'اثنا عشر ألفاً وثلاثمئة وخمسة وأربعون', 'دوانزە هەزار و سێ سەد و چل و پێنج'],
    ['%3,5', 'yüzde üç virgül beş', 'yüz-DE ÜÇ vir-GÜL beş', 'ثلاثة ونصف بالمئة', 'سێ کۆما پێنج لە سەد'],
    ['1,5 kg', 'bir buçuk kilo', 'bir bu-ÇUK ki-LO', 'كيلو ونصف', 'کیلۆیەک و نیو'],
    ['2,5 saat', 'iki buçuk saat', 'i-Kİ bu-ÇUK sa-at', 'ساعتان ونصف', 'دوو کاتژمێر و نیو'],
  ]),
  examples: [
    p('Fiyat bin beş yüz virgül yetmiş beş lira.', 'fi-YAT BİN beş YÜZ vir-GÜL yet-miş BEŞ li-RA',
      'السعر ألف وخمسمئة وخمسة وسبعون من مئة ليرة.', 'نرخەکە هەزار و پێنج سەد کۆما حەفتا و پێنج لیرەیە.'),
    p('Sıcaklık otuz altı virgül beş derece.', 'sı-cak-LIK o-TUZ al-TI vir-GÜL beş de-re-CE',
      'الحرارة ستّ وثلاثون ونصف درجة.', 'پلەی گەرمی سی و شەش کۆما پێنجە.'),
    p('Yarım kilo mu, bir buçuk kilo mu?', 'ya-RIM ki-LO MU bir bu-ÇUK ki-LO MU',
      'نصف كيلو أم كيلو ونصف؟', 'نیو کیلۆ یان کیلۆیەک و نیو؟'),
  ],
};

/* ------------------------------------------------------------------ */

const RANGES: NumberSection = {
  id: 'ranges',
  title: 'Aralıklar',
  subtitle: b('المجالات: من … إلى', 'ماوەکان: لە … بۆ'),
  explain: b(
    'المجال يُبنى بلاحقتَي الابتداء والاتّجاه معاً: «-den … -e kadar». وللفئات العمرية والأسعار تُستعمل «arası» بعد الرقمين: «yirmi otuz arası». وتصلح «ile» أيضاً: «üç ile beş arasında».',
    'ماوە بە پاشگری «-den … -e kadar» دروست دەکرێت.',
  ),
  entries: numbers('ranges', [
    ['1-10', 'birden ona kadar', 'bir-DEN o-NA ka-DAR', 'من واحد إلى عشرة', 'لە یەکەوە بۆ دە'],
    ['9-17', 'dokuzdan on yediye kadar', 'do-kuz-DAN on ye-di-YE ka-DAR', 'من التاسعة إلى الخامسة', 'لە نۆیەوە بۆ حەڤدە'],
    ['20-30', 'yirmi otuz arası', 'yir-Mİ o-TUZ a-ra-SI', 'بين العشرين والثلاثين', 'نێوان بیست و سی'],
    ['3-5', 'üç ile beş arasında', 'ÜÇ i-LE BEŞ a-ra-sın-DA', 'بين ثلاثة وخمسة', 'لە نێوان سێ و پێنجدا'],
    ['—', 'en az', 'EN az', 'على الأقلّ', 'لانی کەم'],
    ['—', 'en fazla', 'EN faz-LA', 'على الأكثر', 'لانی زۆر'],
    ['—', 'en erken', 'EN er-KEN', 'في أقرب موعد', 'زووترین کات'],
    ['—', 'en geç', 'EN geç', 'في موعد أقصاه', 'دواترین کات'],
    ['18+', 'on sekiz ve üzeri', 'on se-KİZ ve ü-ze-Rİ', 'ثمانية عشر وما فوق', 'هەژدە و سەرەوە'],
    ['6-', 'altı ve altı', 'al-TI ve al-TI', 'ستّة وما دون', 'شەش و خوارەوە'],
  ]),
  examples: [
    p('Mesai dokuzdan altıya kadar.', 'me-sa-Yİ do-kuz-DAN al-tı-YA ka-DAR',
      'الدوام من التاسعة إلى السادسة.', 'کارکردن لە نۆیەوە بۆ شەش.'),
    p('On sekiz yaş ve üzeri katılabilir.', 'on se-KİZ YAŞ ve ü-ze-Rİ ka-tı-la-bi-LİR',
      'يمكن لمن بلغ الثامنة عشرة فما فوق المشاركة.', 'تەمەنی هەژدە و سەرەوە دەتوانن بەشدار بن.'),
    p('En geç cuma günü teslim edin.', 'EN GEÇ cu-MA gü-NÜ tes-LİM e-DİN',
      'سلّموا يوم الجمعة على أقصى تقدير.', 'دواترین کات ڕۆژی هەینی ڕادەستی بکەن.'),
  ],
};

/* ------------------------------------------------------------------ */

const APPROXIMATE: NumberSection = {
  id: 'approximate',
  title: 'Yaklaşık sayılar',
  subtitle: b('الأعداد التقريبية', 'ژمارەی نزیکەیی'),
  explain: b(
    'أربع طرق شائعة للتقريب: «yaklaşık» (تقريباً) تسبق الرقم، و«civarında» (في حدود) و«kadar» (نحو) تتبعانه، و«aşağı yukarı» عامّية وتسبق. الفرق بينها في الرسمية أكثر منه في المعنى. ولمضاعفات غير محدّدة: onlarca, yüzlerce, binlerce.',
    'چوار ڕێگای باوی نزیککردنەوە: yaklaşık، civarında، kadar، aşağı yukarı.',
  ),
  entries: numbers('approximate', [
    ['~50', 'yaklaşık elli', 'yak-la-ŞIK el-Lİ', 'خمسون تقريباً', 'نزیکەی پەنجا'],
    ['~50', 'elli civarında', 'el-Lİ ci-va-rın-DA', 'في حدود الخمسين', 'لە دەوروبەری پەنجا'],
    ['~50', 'elli kadar', 'el-Lİ ka-DAR', 'نحو خمسين', 'نزیکەی پەنجا'],
    ['~50', 'aşağı yukarı elli', 'a-şa-ĞI yu-ka-RI el-Lİ', 'خمسون تقريباً (عامّية)', 'کەم و زۆر پەنجا'],
    ['1/2', 'yarım', 'ya-RIM', 'نصف — تسبق الاسم', 'نیو'],
    ['+1/2', 'buçuk', 'bu-ÇUK', 'ونصف — تتبع الرقم', 'و نیو'],
    ['1/4', 'çeyrek', 'çey-REK', 'ربع', 'چارەک'],
    ['—', 'birkaç', 'bir-KAÇ', 'بضعة', 'چەند'],
    ['—', 'onlarca', 'on-lar-CA', 'عشرات', 'دەیان'],
    ['—', 'yüzlerce', 'yüz-ler-CE', 'مئات', 'سەدان'],
    ['—', 'binlerce', 'bin-ler-CE', 'آلاف', 'هەزاران'],
    ['—', 'milyonlarca', 'mil-yon-lar-CA', 'ملايين', 'ملیۆنان'],
  ]),
  examples: [
    p('Toplantıda yaklaşık kırk kişi vardı.', 'top-lan-tı-DA yak-la-ŞIK KIRK ki-Şİ var-DI',
      'كان في الاجتماع أربعون شخصاً تقريباً.', 'لە کۆبوونەوەکەدا نزیکەی چل کەس هەبوو.'),
    p('Binlerce insan sokağa çıktı.', 'bin-ler-CE in-SAN so-ka-ĞA çık-TI',
      'خرج آلاف الناس إلى الشارع.', 'هەزاران کەس هاتنە سەر شەقام.'),
    p('Yarım ekmek aldım, bir buçuk değil.', 'ya-RIM ek-MEK al-DIM bir bu-ÇUK de-ĞİL',
      'أخذت نصف رغيف لا رغيفاً ونصفاً.', 'نیو نانم کڕی، نەک یەک و نیو.'),
  ],
};

/* ------------------------------------------------------------------ */

const CURRENCY: NumberSection = {
  id: 'currency',
  title: 'Para birimleri',
  subtitle: b('العملات', 'دراوەکان'),
  explain: b(
    'الليرة التركية تُختصر «TL» وتُقرأ «Türk lirası» أو «lira» فقط. جزؤها «kuruş» (مئة للّيرة) وهو نادر عملياً اليوم. ⚠️ اسم العملة يبقى مفرداً بعد الرقم: «beş lira» لا «beş liralar» — نفس قاعدة كل اسم يقع بعد عدد في التركية.',
    'لیرەی تورکی بە «TL» کورت دەکرێتەوە. ناوی دراو دوای ژمارە تاک دەمێنێتەوە.',
  ),
  entries: numbers('currency', [
    ['5 TL', 'beş lira', 'BEŞ li-RA', 'خمس ليرات', 'پێنج لیرە'],
    ['50 kr', 'elli kuruş', 'el-Lİ ku-RUŞ', 'خمسون قرشاً', 'پەنجا قروش'],
    ['1,50 TL', 'bir lira elli kuruş', 'bir li-RA el-Lİ ku-RUŞ', 'ليرة ونصف', 'یەک لیرە و پەنجا قروش'],
    ['100 TL', 'yüz lira', 'YÜZ li-RA', 'مئة ليرة', 'سەد لیرە'],
    ['EUR', 'avro', 'av-RO', 'يورو', 'یۆرۆ'],
    ['USD', 'dolar', 'do-LAR', 'دولار', 'دۆلار'],
    ['—', 'döviz', 'dö-VİZ', 'عملة أجنبية', 'دراوی بیانی'],
    ['—', 'kur', 'KUR', 'سعر الصرف', 'نرخی ئاڵوگۆڕ'],
    ['—', 'bozuk para', 'bo-ZUK pa-RA', 'فكّة', 'پارەی ورد'],
    ['—', 'nakit', 'na-KİT', 'نقداً', 'نەقد'],
  ]),
  examples: [
    p('Hepsi yüz yirmi lira tuttu.', 'hep-Sİ YÜZ yir-Mİ li-RA tut-TU',
      'صار المجموع مئة وعشرين ليرة.', 'هەموویان سەد و بیست لیرە بوو.'),
    p('Kur bugün kaç?', 'KUR bu-GÜN kaç',
      'كم سعر الصرف اليوم؟', 'نرخی ئاڵوگۆڕ ئەمڕۆ چەندە؟'),
    p('Nakit mi, kartla mı ödeyeceksiniz?', 'na-KİT Mİ kart-LA MI ö-de-ye-cek-si-NİZ',
      'ستدفعون نقداً أم بالبطاقة؟', 'بە نەقد دەدەن یان بە کارت؟'),
  ],
};

/* ------------------------------------------------------------------ */

const RANKING: NumberSection = {
  id: 'ranking',
  title: 'Sıralama',
  subtitle: b('الترتيب والمراتب', 'ڕیزبەندی'),
  explain: b(
    'الترتيب يُبنى بلاحقة «-inci» على الرقم، وله استعمال خاصّ في المسابقات والنتائج: «birinci oldu» = جاء أولاً. ولاحظ الصيغ الجاهزة: «ilk» (الأول) و«son» (الأخير) و«sonuncu» (الأخير ترتيباً).',
    'ڕیزبەندی بە پاشگری «-inci» دروست دەکرێت.',
  ),
  entries: numbers('ranking', [
    ['1.', 'birinci', 'bi-rin-Cİ', 'الأول', 'یەکەم'],
    ['2.', 'ikinci', 'i-kin-Cİ', 'الثاني', 'دووەم'],
    ['3.', 'üçüncü', 'ü-çün-CÜ', 'الثالث', 'سێیەم'],
    ['10.', 'onuncu', 'o-nun-CU', 'العاشر', 'دەیەم'],
    ['21.', 'yirmi birinci', 'yir-Mİ bi-rin-Cİ', 'الحادي والعشرون', 'بیست و یەکەم'],
    ['—', 'ilk', 'İLK', 'الأول، الأولى', 'یەکەم'],
    ['—', 'son', 'SON', 'الأخير', 'کۆتایی'],
    ['—', 'sonuncu', 'so-nun-CU', 'الأخير ترتيباً', 'دواهەمین'],
    ['—', 'ortanca', 'or-tan-CA', 'الأوسط', 'ناوەڕاست'],
    ['—', 'yarı final', 'ya-RI fi-NAL', 'نصف النهائي', 'نیوە کۆتایی'],
  ]),
  examples: [
    p('Yarışmada birinci oldu.', 'ya-rış-ma-DA bi-rin-Cİ ol-DU',
      'جاء أولاً في المسابقة.', 'لە پێشبڕکێکەدا یەکەم بوو.'),
    p('İlk üçe girdik.', 'İLK ü-ÇE gir-DİK',
      'دخلنا الثلاثة الأوائل.', 'چووینە ناو سێ یەکەمەوە.'),
    p('Sonuncu sırada kaldı.', 'so-nun-CU sı-ra-DA kal-DI',
      'بقي في المرتبة الأخيرة.', 'لە دوایین پلەدا مایەوە.'),
  ],
};

export const NOTATION_SECTIONS: NumberSection[] = [
  DECIMALS,
  RANGES,
  APPROXIMATE,
  CURRENCY,
  RANKING,
];
