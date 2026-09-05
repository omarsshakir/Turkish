import type { NumberSection } from '@/types/content';
import { b, numbers, p } from './shared/helpers';

/**
 * Numbers, third pass: the situations where a number has to be produced
 * out loud under pressure.
 *
 * The first file taught counting, the second taught usage categories. These
 * cover what is left and what is hardest: reading an address to a taxi driver,
 * giving a phone number, understanding a statistic in the news, and saying how
 * long something took.
 */

const ADDRESS: NumberSection = {
  id: 'address',
  title: 'Adresler',
  subtitle: b('العناوين', 'ناونیشانەکان'),
  explain: b(
    'العنوان التركي يُقرأ من العامّ إلى الخاصّ: المحافظة، ثم الحيّ، ثم الشارع، ثم رقم المبنى، ثم رقم الشقّة. الرقم يُقال بعد الاسم لا قبله: «Atatürk Caddesi No 45». وكلمة daire أو kat تُضاف للشقّة والطابق.',
    'ناونیشانی تورکی لە گشتییەوە بۆ تایبەتی دەخوێنرێتەوە: پارێزگا، گەڕەک، شەقام، ژمارەی بینا، پاشان ژمارەی شوقە.',
  ),
  entries: numbers('address', [
    ['No 45', 'numara kırk beş', 'nu-ma-RA kırk BEŞ', 'رقم خمسة وأربعين', 'ژمارە چل و پێنج'],
    ['Kat 3', 'üçüncü kat', 'ü-çün-CÜ KAT', 'الطابق الثالث', 'نهۆمی سێیەم'],
    ['Daire 7', 'yedi numaralı daire', 'ye-Dİ nu-ma-ra-LI da-i-RE', 'الشقة رقم سبعة', 'شوقەی ژمارە حەوت'],
    ['Zemin', 'zemin kat', 'ze-MİN kat', 'الطابق الأرضي', 'نهۆمی خوارەوە'],
    ['Bodrum', 'bodrum kat', 'bod-RUM kat', 'القبو', 'ژێرزەمین'],
    ['34000', 'posta kodu', 'pos-TA ko-DU', 'الرمز البريدي', 'کۆدی پۆستە'],
    ['—', 'cadde', 'cad-DE', 'شارع رئيسي', 'شەقام'],
    ['—', 'sokak', 'so-KAK', 'شارع فرعي', 'کۆڵان'],
    ['—', 'mahalle', 'ma-hal-LE', 'حيّ', 'گەڕەک'],
    ['—', 'apartman', 'a-part-MAN', 'عمارة سكنية', 'ئەپارتمان'],
    ['—', 'blok', 'BLOK', 'بلوك', 'بلۆک'],
  ]),
  examples: [
    p('Atatürk Caddesi, No 45, Kat 3, Daire 7.', 'a-ta-TÜRK cad-de-Sİ nu-ma-RA kırk BEŞ KAT ÜÇ da-i-RE ye-Dİ',
      'شارع أتاتورك، رقم 45، الطابق الثالث، الشقة 7.', 'شەقامی ئاتاتورک، ژمارە ٤٥، نهۆمی سێ، شوقەی ٧.'),
    p('Hangi katta oturuyorsunuz?', 'han-Gİ kat-TA o-tu-ru-yor-su-NUZ',
      'في أيّ طابق تسكنون؟', 'لە کام نهۆمدا دەژین؟'),
    p('Beşinci katta, asansör var.', 'be-şin-Cİ kat-TA a-san-SÖR var',
      'في الطابق الخامس، يوجد مصعد.', 'لە نهۆمی پێنجەم، ئاسانسێر هەیە.'),
    p('Posta kodunuz kaç?', 'pos-TA ko-du-NUZ KAÇ',
      'ما رمزكم البريدي؟', 'کۆدی پۆستەتان چەندە؟'),
  ],
};

const STATISTICS: NumberSection = {
  id: 'statistics',
  title: 'İstatistik ve oranlar',
  subtitle: b('الإحصاء والنِّسب', 'ئامار و ڕێژەکان'),
  explain: b(
    'لغة الأخبار التركية مليئة بالأرقام. ثلاث صيغ تتكرّر باستمرار: «yüzde X» للنسبة، و«X kat» للمضاعفة، و«her X kişiden Y» للنسبة التقريبية. من يتقنها يقرأ صفحة الاقتصاد.',
    'زمانی هەواڵی تورکی پڕە لە ژمارە. سێ شێوە دووبارە دەبنەوە: «yüzde X»، «X kat»، و «her X kişiden Y».',
  ),
  entries: numbers('statistics', [
    ['×2', 'iki kat', 'i-Kİ KAT', 'الضعف، مرّتان', 'دوو قات'],
    ['×3', 'üç kat', 'ÜÇ KAT', 'ثلاثة أضعاف', 'سێ قات'],
    ['½', 'yarısı', 'ya-rı-SI', 'نصفه', 'نیوەی'],
    ['⅓', 'üçte biri', 'üç-TE bi-Rİ', 'ثلثه', 'سێیەکی'],
    ['¼', 'dörtte biri', 'dört-TE bi-Rİ', 'ربعه', 'چارەکی'],
    ['—', 'ortalama', 'or-ta-la-MA', 'المتوسّط', 'تێکڕا'],
    ['—', 'toplam', 'top-LAM', 'المجموع', 'کۆی گشتی'],
    ['—', 'oran', 'o-RAN', 'نسبة', 'ڕێژە'],
    ['—', 'artış', 'ar-TIŞ', 'ارتفاع', 'زیادبوون'],
    ['—', 'azalış', 'a-za-LIŞ', 'انخفاض', 'کەمبوونەوە'],
    ['—', 'en az', 'EN az', 'الحدّ الأدنى', 'لانیکەم'],
    ['—', 'en çok', 'EN çok', 'الحدّ الأقصى', 'زۆرترین'],
    ['—', 'yaklaşık', 'yak-la-ŞIK', 'تقريباً', 'نزیکەی'],
    ['—', 'kişi başına', 'ki-Şİ ba-şı-NA', 'للفرد', 'بۆ هەر کەسێک'],
  ]),
  examples: [
    p('Nüfus geçen yıla göre yüzde iki arttı.', 'nü-FUS ge-ÇEN yı-LA gö-RE yüz-DE i-Kİ art-TI',
      'ازداد عدد السكان اثنين بالمئة عن العام الماضي.', 'دانیشتوان بەراورد بە پار دوو لە سەد زیادی کرد.'),
    p('Fiyatlar iki katına çıktı.', 'fi-yat-LAR i-Kİ ka-tı-NA çık-TI',
      'تضاعفت الأسعار.', 'نرخەکان بوونە دوو قات.'),
    p('Her üç kişiden biri şehirde yaşıyor.', 'HER ÜÇ ki-şi-DEN bi-Rİ şe-hir-DE ya-şı-YOR',
      'واحد من كل ثلاثة يعيش في المدينة.', 'یەک لە هەر سێ کەس لە شار دەژی.'),
    p('Ortalama sıcaklık yirmi iki derece.', 'or-ta-la-MA sı-cak-LIK yir-mi i-Kİ de-re-CE',
      'متوسّط الحرارة اثنتان وعشرون درجة.', 'تێکڕای پلەی گەرمی بیست و دوو پلەیە.'),
  ],
};

const DURATION: NumberSection = {
  id: 'duration',
  title: 'Süre ve program',
  subtitle: b('المدّة والجدول', 'ماوە و خشتە'),
  explain: b(
    'فرق مهمّ: «saat üçte» تعني في الساعة الثالثة (وقت)، و«üç saat» تعني ثلاث ساعات (مدّة). الترتيب وحده هو ما يفرّق بينهما، ولا توجد كلمة إضافية تساعدك.',
    'جیاوازییەکی گرنگ: «saat üçte» واتە کاتژمێر سێ (کات)، «üç saat» واتە سێ کاتژمێر (ماوە). تەنها ڕیزبەندی جیایان دەکاتەوە.',
  ),
  entries: numbers('duration', [
    ['3:00', 'saat üçte', 'sa-AT üç-TE', 'في الساعة الثالثة', 'کاتژمێر سێ'],
    ['3 h', 'üç saat', 'ÜÇ sa-at', 'ثلاث ساعات (مدّة)', 'سێ کاتژمێر'],
    ['30 dk', 'yarım saat', 'ya-RIM sa-at', 'نصف ساعة', 'نیو کاتژمێر'],
    ['1.5 h', 'bir buçuk saat', 'BİR bu-ÇUK sa-at', 'ساعة ونصف', 'یەک کاتژمێر و نیو'],
    ['15 dk', 'çeyrek saat', 'çey-REK sa-at', 'ربع ساعة', 'چارەکە کاتژمێر'],
    ['—', 'boyunca', 'bo-yun-CA', 'طوال', 'بە درێژایی'],
    ['—', 'süresince', 'sü-re-sin-CE', 'خلال', 'لە ماوەی'],
    ['—', 'kadar', 'ka-DAR', 'حتى', 'تاوەکو'],
    ['—', 'itibaren', 'i-ti-ba-REN', 'اعتباراً من', 'لە...ـەوە'],
    ['—', 'her gün', 'HER gün', 'كل يوم', 'هەموو ڕۆژێک'],
    ['—', 'haftada bir', 'haf-ta-DA bir', 'مرة في الأسبوع', 'هەفتەی جارێک'],
    ['—', 'ayda iki kez', 'ay-DA i-Kİ kez', 'مرّتين في الشهر', 'مانگی دوو جار'],
  ]),
  examples: [
    p('Ders saat dokuzda başlıyor ve iki saat sürüyor.', 'DERS sa-AT do-kuz-DA baş-lı-YOR ve i-Kİ sa-AT sü-rü-YOR',
      'يبدأ الدرس التاسعة ويستمرّ ساعتين.', 'وانەکە کاتژمێر نۆ دەست پێدەکات و دوو کاتژمێر دەخایەنێت.'),
    p('Toplantı yarım saat sürdü.', 'top-lan-TI ya-RIM sa-AT sür-DÜ',
      'استغرق الاجتماع نصف ساعة.', 'کۆبوونەوەکە نیو کاتژمێری خایاند.'),
    p('Pazartesiden itibaren tatildeyim.', 'pa-zar-te-si-DEN i-ti-ba-REN ta-til-de-YİM',
      'أنا في إجازة اعتباراً من الاثنين.', 'لە دووشەممەوە لە پشوودام.'),
    p('Haftada üç kez spor yapıyorum.', 'haf-ta-DA ÜÇ kez SPOR ya-pı-yo-RUM',
      'أمارس الرياضة ثلاث مرات أسبوعياً.', 'هەفتەی سێ جار وەرزش دەکەم.'),
  ],
};

const BIG: NumberSection = {
  id: 'billion',
  title: 'Çok büyük sayılar',
  subtitle: b('الأعداد الكبيرة جداً', 'ژمارە زۆر گەورەکان'),
  explain: b(
    'انتبه لفخّ خطير: «milyar» التركية تعني ألف مليون (billion الإنجليزية)، لا ما يُسمّى أحياناً «مليار» في بعض الاستعمالات. والأهمّ: التركية تفصل الألوف بنقطة والكسور العشرية بفاصلة — أي عكس الإنجليزية تماماً. قراءة 1.500.000 بوصفها مليوناً ونصفاً تحتاج انتباهاً في البداية.',
    'ئاگاداری تەڵەیەکی گرنگ بە: تورکی هەزارەکان بە خاڵ جیا دەکاتەوە و کەرتی دەیی بە کۆما — پێچەوانەی ئینگلیزی.',
  ),
  entries: numbers('billion', [
    ['1.000.000', 'bir milyon', 'BİR mil-YON', 'مليون واحد', 'یەک ملیۆن'],
    ['2.500.000', 'iki buçuk milyon', 'i-Kİ bu-ÇUK mil-YON', 'مليونان ونصف', 'دوو ملیۆن و نیو'],
    ['10.000.000', 'on milyon', 'ON mil-YON', 'عشرة ملايين', 'دە ملیۆن'],
    ['1.000.000.000', 'bir milyar', 'BİR mil-YAR', 'مليار واحد', 'یەک ملیار'],
    ['85.000.000', 'seksen beş milyon', 'sek-SEN BEŞ mil-YON', 'خمسة وثمانون مليوناً', 'هەشتا و پێنج ملیۆن'],
    ['—', 'milyonlarca', 'mil-yon-lar-CA', 'ملايين من', 'ملیۆنان'],
    ['—', 'milyarlarca', 'mil-yar-lar-CA', 'مليارات من', 'ملیارەها'],
    ['—', 'trilyon', 'tril-YON', 'تريليون', 'تریلیۆن'],
  ]),
  examples: [
    p('Türkiye’nin nüfusu seksen beş milyon civarında.', 'tür-ki-YE-nin nü-fu-SU sek-SEN BEŞ mil-YON ci-va-rın-DA',
      'عدد سكان تركيا نحو خمسة وثمانين مليوناً.', 'دانیشتوانی تورکیا نزیکەی هەشتا و پێنج ملیۆنە.'),
    p('Projenin bütçesi iki milyar lira.', 'pro-je-NİN büt-çe-Sİ i-Kİ mil-YAR li-RA',
      'ميزانية المشروع ملياران من الليرات.', 'بودجەی پڕۆژەکە دوو ملیار لیرەیە.'),
    p('Bu rakam 1.500.000 olarak yazılır.', 'BU ra-KAM BİR mil-YON BEŞ yüz BİN o-la-RAK ya-zı-LIR',
      'يُكتب هذا الرقم 1.500.000.', 'ئەم ژمارەیە وەک 1.500.000 دەنووسرێت.'),
  ],
};

export const NUMBER_SECTIONS_USAGE: NumberSection[] = [
  ADDRESS, STATISTICS, DURATION, BIG,
];
