import type { NumberSection } from '@/types/content';
import { b, numbers, p } from './shared/helpers';

/**
 * Numbers, second pass: the ways numbers actually appear in life.
 *
 * The first numbers file taught counting. This one teaches usage — because a
 * student who can recite `yüz elli` still cannot say how old they are, read a
 * percentage off a news chart, or ask for half a kilo of cheese.
 *
 * Two Turkish habits are worth flagging and both are covered below:
 *   - the decimal separator is a COMMA (3,5), and the thousands separator is
 *     a full stop (1.000) — exactly the opposite of English;
 *   - a counted noun stays singular: `beş kitap`, never `beş kitaplar`.
 */

const PERCENT: NumberSection = {
  id: 'percent',
  title: 'Yüzdeler ve ondalıklar',
  subtitle: b('النسب المئوية والكسور العشرية', 'ڕێژەی سەدی و کەرتی دەیی'),
  explain: b(
    'انتبه لأمرين. أولاً: علامة النسبة تُقرأ وتُكتب قبل الرقم في التركية: %20 = yüzde yirmi (أي «من مئة، عشرون»). ثانياً: الفاصلة العشرية في التركية فاصلة (3,5) والفاصل بين الألوف نقطة (1.000) — أي عكس الإنجليزية تماماً.',
    'ئاگاداری دوو شت بە. یەکەم: نیشانەی ڕێژە پێش ژمارە دەخوێنرێتەوە: %20 = yüzde yirmi. دووەم: نیشانەی کەرتی دەیی کۆمایە (3,5) و جیاکەری هەزار خاڵە (1.000) — پێچەوانەی ئینگلیزی.',
  ),
  entries: numbers('percent', [
    ['%1', 'yüzde bir', 'yüz-DE bir', 'واحد بالمئة', 'یەک لە سەد'],
    ['%10', 'yüzde on', 'yüz-DE on', 'عشرة بالمئة', 'دە لە سەد'],
    ['%25', 'yüzde yirmi beş', 'yüz-DE yir-mi beş', 'خمسة وعشرون بالمئة', 'بیست و پێنج لە سەد'],
    ['%50', 'yüzde elli', 'yüz-DE el-li', 'خمسون بالمئة', 'پەنجا لە سەد'],
    ['%75', 'yüzde yetmiş beş', 'yüz-DE yet-miş beş', 'خمسة وسبعون بالمئة', 'حەفتا و پێنج لە سەد'],
    ['%100', 'yüzde yüz', 'yüz-DE yüz', 'مئة بالمئة', 'سەد لە سەد'],
    ['0,5', 'sıfır virgül beş', 'sı-FIR vir-gül BEŞ', 'صفر فاصلة خمسة', 'سفر کۆما پێنج'],
    ['3,14', 'üç virgül on dört', 'ÜÇ vir-gül on DÖRT', 'ثلاثة فاصلة أربعة عشر', 'سێ کۆما چواردە'],
    ['1,5', 'bir buçuk', 'BİR bu-ÇUK', 'واحد ونصف', 'یەک و نیو'],
    ['2,5', 'iki buçuk', 'i-Kİ bu-ÇUK', 'اثنان ونصف', 'دوو و نیو'],
    ['—', 'virgül', 'vir-GÜL', 'فاصلة (عشرية)', 'کۆما'],
    ['—', 'artış', 'ar-TIŞ', 'ارتفاع، زيادة', 'زیادبوون'],
    ['—', 'düşüş', 'dü-ŞÜŞ', 'انخفاض', 'کەمبوونەوە'],
    ['—', 'oran', 'o-RAN', 'نسبة', 'ڕێژە'],
  ]),
  examples: [
    p('Fiyatlar yüzde yirmi arttı.', 'fi-yat-LAR yüz-DE yir-Mİ art-TI',
      'ارتفعت الأسعار بنسبة عشرين بالمئة.', 'نرخەکان بە ڕێژەی بیست لە سەد زیادیان کرد.'),
    p('Öğrencilerin yüzde altmışı sınavı geçti.', 'öğ-ren-ci-le-RİN yüz-DE alt-mı-ŞI sı-na-VI geç-Tİ',
      'نجح ستون بالمئة من الطلاب في الامتحان.', 'شەست لە سەدی قوتابیان لە تاقیکردنەوەکە دەرچوون.'),
    p('Bir buçuk saat sürdü.', 'BİR bu-ÇUK sa-AT sür-DÜ',
      'استغرق ساعة ونصفاً.', 'یەک کاتژمێر و نیوی خایاند.'),
    p('İndirim yüzde elliye kadar.', 'in-di-RİM yüz-DE el-li-YE ka-dar',
      'الخصم يصل إلى خمسين بالمئة.', 'داشکاندن دەگاتە پەنجا لە سەد.'),
  ],
};

const MEASURES: NumberSection = {
  id: 'measures',
  title: 'Ölçüler ve miktarlar',
  subtitle: b('المقاييس والكمّيات', 'پێوانە و بڕەکان'),
  explain: b(
    'قاعدة مهمّة: الاسم المعدود يبقى مفرداً في التركية. تقول beş kilo (خمسة كيلو) ولا تقول beş kilolar. هذا يختلف عن العربية والكردية معاً. وللسؤال عن الكمّية: Ne kadar? للمعدود بالوزن، و Kaç tane? للمعدود بالعدد.',
    'یاسایەکی گرنگ: ناوی ژماردراو لە تورکیدا تاک دەمێنێتەوە. دەڵێیت beş kilo نەک beş kilolar. بۆ پرسیاری بڕ: Ne kadar? بۆ کێش، و Kaç tane? بۆ دانە.',
  ),
  entries: numbers('measures', [
    ['1 kg', 'bir kilo', 'BİR ki-lo', 'كيلوغرام واحد', 'یەک کیلۆ'],
    ['½ kg', 'yarım kilo', 'ya-RIM ki-lo', 'نصف كيلو', 'نیو کیلۆ'],
    ['250 g', 'iki yüz elli gram', 'i-Kİ yüz el-li GRAM', 'مئتان وخمسون غراماً', 'دوو سەد و پەنجا گرام'],
    ['1 L', 'bir litre', 'BİR lit-re', 'لتر واحد', 'یەک لیتر'],
    ['1 m', 'bir metre', 'BİR met-re', 'متر واحد', 'یەک مەتر'],
    ['1 km', 'bir kilometre', 'BİR ki-lo-met-re', 'كيلومتر واحد', 'یەک کیلۆمەتر'],
    ['1 cm', 'bir santimetre', 'BİR san-ti-met-re', 'سنتيمتر واحد', 'یەک سانتیمەتر'],
    ['—', 'tane', 'ta-NE', 'حبّة، قطعة (للعدّ)', 'دانە'],
    ['—', 'çift', 'ÇİFT', 'زوج', 'جووت'],
    ['—', 'düzine', 'dü-zi-NE', 'دزّينة', 'دوجینە'],
    ['—', 'paket', 'pa-KET', 'علبة، رزمة', 'پاکەت'],
    ['—', 'şişe', 'şi-ŞE', 'زجاجة', 'شووشە'],
    ['—', 'dilim', 'di-LİM', 'شريحة', 'پارچە'],
    ['—', 'bardak', 'bar-DAK', 'كوب (ككمّية)', 'پەرداخ'],
    ['—', 'kaşık', 'ka-ŞIK', 'ملعقة (ككمّية)', 'کەوچک'],
    ['—', 'derece', 'de-re-CE', 'درجة (حرارة)', 'پلە'],
  ]),
  examples: [
    p('Yarım kilo peynir alabilir miyim?', 'ya-RIM ki-LO pey-NİR a-la-bi-LİR mi-yim',
      'هل يمكنني أخذ نصف كيلو جبن؟', 'دەتوانم نیو کیلۆ پەنیر وەربگرم؟'),
    p('İki tane ekmek lütfen.', 'i-Kİ ta-NE ek-MEK lüt-FEN',
      'رغيفَي خبز من فضلك.', 'دوو دانە نان تکایە.'),
    p('Buradan okula üç kilometre var.', 'bu-ra-DAN o-ku-LA ÜÇ ki-lo-met-RE var',
      'من هنا إلى المدرسة ثلاثة كيلومترات.', 'لێرەوە بۆ قوتابخانە سێ کیلۆمەترە.'),
    p('Hava bugün otuz derece.', 'ha-VA bu-GÜN o-TUZ de-re-CE',
      'الحرارة اليوم ثلاثون درجة.', 'ئەمڕۆ کەشوهەوا سی پلەیە.'),
  ],
};

const AGE: NumberSection = {
  id: 'age',
  title: 'Yaş ve yıllar',
  subtitle: b('العمر والسنوات', 'تەمەن و ساڵەکان'),
  explain: b(
    'للسؤال عن العمر: Kaç yaşındasın? حرفياً «في كم سنة أنت؟». والجواب يُبنى باللاحقة -yaşındayım. أمّا السنوات فتُقرأ كعدد كامل لا كرقمين: 1999 = bin dokuz yüz doksan dokuz، وليس «تسعة عشر تسعة وتسعين» كما في الإنجليزية.',
    'بۆ پرسیاری تەمەن: Kaç yaşındasın? وەڵامەکە بە پاشگری -yaşındayım دروست دەبێت. ساڵەکانیش وەک ژمارەیەکی تەواو دەخوێنرێنەوە: 1999 = bin dokuz yüz doksan dokuz.',
  ),
  entries: numbers('age', [
    ['?', 'Kaç yaşındasın?', 'KAÇ ya-şın-da-sın', 'كم عمرك؟', 'تەمەنت چەندە؟'],
    ['7', 'yedi yaşında', 'ye-Dİ ya-şın-da', 'في السابعة', 'حەوت ساڵان'],
    ['18', 'on sekiz yaşında', 'on se-KİZ ya-şın-da', 'في الثامنة عشرة', 'هەژدە ساڵان'],
    ['25', 'yirmi beş yaşındayım', 'yir-mi BEŞ ya-şın-da-yım', 'عمري خمسة وعشرون', 'بیست و پێنج ساڵانم'],
    ['40', 'kırk yaşında', 'KIRK ya-şın-da', 'في الأربعين', 'چل ساڵان'],
    ['1999', 'bin dokuz yüz doksan dokuz', 'BİN do-kuz YÜZ dok-san do-KUZ', 'ألف وتسعمئة وتسعة وتسعون', 'هەزار و نۆ سەد و نەوەد و نۆ'],
    ['2015', 'iki bin on beş', 'i-Kİ bin on BEŞ', 'ألفان وخمسة عشر', 'دوو هەزار و پازدە'],
    ['2024', 'iki bin yirmi dört', 'i-Kİ bin yir-mi DÖRT', 'ألفان وأربعة وعشرون', 'دوو هەزار و بیست و چوار'],
    ['—', 'doğum günü', 'do-ĞUM gü-nü', 'عيد ميلاد', 'ڕۆژی لەدایکبوون'],
    ['—', 'yaş günü', 'YAŞ gü-nü', 'عيد ميلاد (شائع)', 'ڕۆژی تەمەن'],
    ['—', 'yaşında', 'ya-şın-DA', 'في سنّ الـ…', 'لە تەمەنی…'],
    ['—', 'yaşlarında', 'yaş-la-rın-DA', 'في حدود سنّ…', 'نزیکەی تەمەنی…'],
  ]),
  examples: [
    p('Kaç yaşındasın? — Yirmi üç yaşındayım.', 'KAÇ ya-şın-da-sın yir-mi ÜÇ ya-şın-da-yım',
      'كم عمرك؟ — عمري ثلاثة وعشرون.', 'تەمەنت چەندە؟ — بیست و سێ ساڵانم.'),
    p('1998 yılında doğdum.', 'BİN do-kuz YÜZ dok-san se-KİZ yı-lın-DA doğ-DUM',
      'وُلدت عام 1998.', 'لە ساڵی ١٩٩٨ لەدایک بووم.'),
    p('Kardeşim benden iki yaş küçük.', 'kar-de-ŞİM ben-DEN i-Kİ YAŞ kü-ÇÜK',
      'أخي أصغر منّي بسنتين.', 'برام دوو ساڵ لە من بچووکترە.'),
    p('Otuz yaşlarında bir adamdı.', 'o-TUZ yaş-la-rın-DA bir a-dam-DI',
      'كان رجلاً في حدود الثلاثين.', 'پیاوێک بوو نزیکەی تەمەنی سی.'),
  ],
};

const QUANTITY: NumberSection = {
  id: 'quantity',
  title: 'Belirsiz miktarlar',
  subtitle: b('الكمّيات غير المحدّدة', 'بڕی نادیاریکراو'),
  explain: b(
    'ليست كل كمّية رقماً. هذه الكلمات تصف المقدار دون عدّ، وهي أكثر ما يُستعمل في الحديث اليومي. انتبه للفرق بين az (قليل) و biraz (قليلاً/بعض): الأولى صفة والثانية ظرف كمّية.',
    'هەموو بڕێک ژمارە نییە. ئەم وشانە بڕ دەستنیشان دەکەن بەبێ ژماردن. سەرنج بدە جیاوازی نێوان az (کەم) و biraz (کەمێک).',
  ),
  entries: numbers('quantity', [
    ['—', 'çok', 'ÇOK', 'كثير، جدّاً', 'زۆر'],
    ['—', 'az', 'AZ', 'قليل', 'کەم'],
    ['—', 'biraz', 'bi-RAZ', 'قليلاً، بعض', 'کەمێک'],
    ['—', 'birkaç', 'bir-KAÇ', 'بضعة', 'چەند'],
    ['—', 'bazı', 'ba-ZI', 'بعض', 'هەندێک'],
    ['—', 'hepsi', 'hep-Sİ', 'كلّها', 'هەموویان'],
    ['—', 'hiç', 'HİÇ', 'ولا شيء، إطلاقاً', 'هیچ'],
    ['—', 'yeterli', 'ye-ter-Lİ', 'كافٍ', 'بەس'],
    ['—', 'fazla', 'faz-LA', 'زائد، أكثر من اللازم', 'زیاد'],
    ['—', 'yarısı', 'ya-rı-SI', 'نصفه', 'نیوەی'],
    ['—', 'çoğu', 'ço-ĞU', 'معظمه', 'زۆربەی'],
    ['—', 'tamamı', 'ta-ma-MI', 'كامله', 'هەمووی'],
    ['—', 'hemen hemen', 'he-MEN he-men', 'تقريباً', 'نزیکەی'],
    ['—', 'en az', 'EN az', 'على الأقلّ', 'لانیکەم'],
    ['—', 'en fazla', 'EN faz-la', 'على الأكثر', 'زۆرترین'],
  ]),
  examples: [
    p('Biraz su içmek istiyorum.', 'bi-RAZ SU iç-MEK is-ti-yo-RUM',
      'أريد أن أشرب قليلاً من الماء.', 'دەمەوێت کەمێک ئاو بخۆمەوە.'),
    p('Öğrencilerin çoğu geldi.', 'öğ-ren-ci-le-RİN ço-ĞU gel-Dİ',
      'جاء معظم الطلاب.', 'زۆربەی قوتابیان هاتن.'),
    p('Hiç param yok.', 'HİÇ pa-RAM yok',
      'ليس معي أيّ مال.', 'هیچ پارەم نییە.'),
    p('En az iki saat lazım.', 'EN AZ i-Kİ sa-AT la-ZIM',
      'نحتاج ساعتين على الأقلّ.', 'لانیکەم دوو کاتژمێر پێویستە.'),
  ],
};

export const NUMBER_SECTIONS_EXTRA: NumberSection[] = [
  PERCENT, MEASURES, AGE, QUANTITY,
];
