import type { SentencePack } from '@/types/content';
import { b, p } from '../shared/helpers';

export const C1PLUS_SENTENCES: SentencePack[] = [
  {
    id: 'c1plus-sent-idiomatic',
    level: 'c1plus',
    order: 1,
    title: 'Deyimli Konuşma',
    titleI18n: b('الحديث بالاصطلاحات', 'قسەکردن بە ئیدیۆم'),
    focus: b('استخدم الاصطلاح في سياقه الحيّ لا في قائمة.', 'ئیدیۆم لە چوارچێوەی زیندووی خۆیدا بەکاربهێنە نەک لە لیستێکدا.'),
    sentences: [
      p('Ağzımdan kaçırdım, kusura bakma.', 'a-zım-DAN ka-çır-DIM ku-su-RA bak-MA', 'أفلتت منّي الكلمة، اعذرني.', 'لە دەمم دەرچوو، ببوورە.'),
      p('Bu iş bana çok göz korkuttu.', 'BU İŞ ba-NA ÇOK GÖZ kor-kut-TU', 'أرهبني هذا العمل كثيراً.', 'ئەم کارە زۆر ترسی خستە دڵم.'),
      p('Elimden geleni yaptım, gerisi kader.', 'e-lim-DEN ge-le-Nİ yap-TIM ge-ri-Sİ ka-DER', 'فعلت ما بوسعي، والباقي قدر.', 'ئەوەم کرد کە لە دەستم دەهات، ئەوی تر چارەنووسە.'),
      p('İşler tıkırında gidiyor.', 'iş-LER tı-kı-rın-DA gi-di-YOR', 'الأمور تسير على ما يرام.', 'کارەکان بە باشی دەڕۆن.'),
      p('Havanda su dövmekten başka bir şey değil.', 'ha-van-DA SU döv-mek-TEN baş-KA bir ŞEY de-İL', 'ليس هذا إلا نفخاً في قربة مقطوعة.', 'ئەمە جگە لە ئاو کوتان لە هاوەندا هیچی تر نییە.'),
      p('Bu konuda eli kolu bağlı kaldı.', 'BU ko-nu-DA e-Lİ ko-LU ba-LI kal-DI', 'بقي مكتوف اليدين في هذا الأمر.', 'لەم بابەتەدا دەست و پێی بەستراوە مایەوە.'),
      p('Söz konusu vatan olunca gerisi teferruattır.', 'SÖZ ko-nu-SU va-TAN o-lun-DJA ge-ri-Sİ te-fer-ru-at-TIR', 'حين يكون الأمر متعلقاً بالوطن، فما عداه تفاصيل.', 'کاتێک باسی نیشتمان بێت، ئەوی تر وردەکارییە.'),
      p('Ateş olmayan yerden duman çıkmaz.', 'a-TEŞ ol-ma-YAN yer-DEN du-MAN çık-MAZ', 'لا دخان بلا نار.', 'دووکەڵ لەو شوێنە دەرناچێت کە ئاگری تێدا نەبێت.'),
    ],
  },
  {
    id: 'c1plus-sent-professional',
    level: 'c1plus',
    order: 2,
    title: 'Profesyonel İletişim',
    titleI18n: b('التواصل المهني الراقي', 'پەیوەندی پیشەیی ئاست بەرز'),
    focus: b('تفاوض واعتذر وارفض بلباقة مهنية.', 'دانوستان بکە و داوای لێبوردن بکە و بە شێوەیەکی پیشەیی ڕەت بکەرەوە.'),
    sentences: [
      p('Teklifinizi dikkatle inceledik ve olumlu bulduk.', 'tek-li-fi-ni-Zİ dik-kat-LE in-dje-le-DİK ve o-lum-LU bul-DUK', 'درسنا عرضكم بعناية ووجدناه إيجابياً.', 'پێشنیارەکەتان بە وردی پێداچووینەوە و بە ئەرێنی بینیمان.'),
      p('Ne yazık ki bu şartlarda ilerlememiz mümkün görünmüyor.', 'NE ya-ZIK Kİ BU şart-lar-DA i-ler-le-me-MİZ müm-KÜN gö-rün-mü-YOR', 'للأسف لا يبدو ممكناً أن نمضي بهذه الشروط.', 'بەداخەوە لەم مەرجانەدا بەرەوپێشچوونمان گونجاو دەرناکەوێت.'),
      p('Konuyu yönetim kuruluna taşımamız gerekecek.', 'ko-nu-YU yö-ne-TİM ku-ru-lu-NA ta-şı-ma-MIZ ge-re-ke-DJEK', 'سيلزمنا رفع الموضوع إلى مجلس الإدارة.', 'پێویست دەکات بابەتەکە ببەینە ئەنجومەنی بەڕێوەبردن.'),
      p('Gecikme için özür diler, anlayışınız için teşekkür ederiz.', 'ge-djik-ME i-ÇİN ö-ZÜR di-LER an-la-yı-şı-NIZ i-ÇİN te-şek-KÜR e-de-riz', 'نعتذر عن التأخير ونشكركم على تفهّمكم.', 'داوای لێبوردن دەکەین بۆ دواکەوتن و سوپاستان دەکەین بۆ تێگەیشتنتان.'),
      p('Karşılıklı fayda sağlayacak bir orta yol bulabiliriz.', 'kar-şı-lık-LI fay-DA sa-la-ya-DJAK bir or-TA YOL bu-la-bi-li-RİZ', 'يمكننا إيجاد حلّ وسط يحقّق منفعة متبادلة.', 'دەتوانین ڕێگایەکی ناوەند بدۆزینەوە کە سوودی هاوبەش دابین بکات.'),
      p('Bu konudaki hassasiyetinizi anlıyor ve paylaşıyoruz.', 'BU ko-nu-da-Kİ has-sa-si-ye-ti-ni-Zİ an-lı-YOR ve pay-la-şı-YO-ruz', 'نتفهّم حساسيتكم في هذا الشأن ونشاركها.', 'هەستیاریتان لەم بابەتەدا تێدەگەین و هاوبەشین لەگەڵتان.'),
      p('İş birliğimizin uzun soluklu olmasını temenni ederiz.', 'İŞ bir-li-i-mi-ZİN u-ZUN so-luk-LU ol-ma-sı-NI te-men-Nİ e-de-riz', 'نتمنّى أن يكون تعاوننا طويل الأمد.', 'هیوادارین هاوکارییەکەمان درێژخایەن بێت.'),
    ],
  },
];
