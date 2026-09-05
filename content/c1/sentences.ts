import type { SentencePack } from '@/types/content';
import { b, p } from '../shared/helpers';

export const C1_SENTENCES: SentencePack[] = [
  {
    id: 'c1-sent-academic',
    level: 'c1',
    order: 1,
    title: 'Akademik Sunum ve Tartışma',
    titleI18n: b('العرض والنقاش الأكاديمي', 'پێشکەشکردن و گفتوگۆی ئەکادیمی'),
    focus: b('قدّم بحثك وأجب عن أسئلة اللجنة.', 'توێژینەوەکەت پێشکەش بکە و وەڵامی پرسیاری لیژنە بدەوە.'),
    sentences: [
      p('Bugün sizlere çalışmamın bulgularını sunacağım.', 'bu-GÜN siz-le-RE ça-lış-ma-MIN bul-gu-la-rı-NI su-na-dja-IM', 'سأعرض عليكم اليوم نتائج دراستي.', 'ئەمڕۆ دۆزینەوەکانی توێژینەوەکەمتان بۆ پێشکەش دەکەم.'),
      p('Öncelikle araştırmanın kavramsal çerçevesine değinmek istiyorum.', 'ön-dje-lik-LE a-raş-tır-ma-NIN kav-ram-SAL çer-çe-ve-si-NE de-in-MEK is-ti-yo-rum', 'أودّ أولاً التطرّق إلى الإطار المفاهيمي للبحث.', 'سەرەتا دەمەوێت ئاماژە بە چوارچێوەی چەمکی توێژینەوەکە بکەم.'),
      p('Bu bulgular, alanyazındaki mevcut kabullerle örtüşmemektedir.', 'BU bul-gu-LAR a-lan-ya-zın-da-Kİ mev-DJUT ka-bul-ler-LE ör-tüş-me-mek-te-DİR', 'لا تتطابق هذه النتائج مع المسلّمات القائمة في الأدبيات.', 'ئەم دۆزینەوانە لەگەڵ ئەو پێشوەختانەی لە ئەدەبیاتدا هەن ناگونجێن.'),
      p('Sorunuz için teşekkür ederim; kısaca şöyle açıklayabilirim.', 'so-ru-NUZ i-ÇİN te-şek-KÜR e-de-rim kı-sa-DJA şöy-LE a-çık-la-ya-bi-li-RİM', 'شكراً على سؤالكم؛ يمكنني أن أوضّح باختصار هكذا.', 'سوپاس بۆ پرسیارەکەتان؛ بە کورتی دەتوانم بەم شێوەیە ڕوونی بکەمەوە.'),
      p('Bu, çalışmanın sınırlılıklarından biri olarak değerlendirilebilir.', 'BU ça-lış-ma-NIN sı-nır-lı-lık-la-rın-DAN bi-Rİ o-la-RAK de-er-len-di-ri-le-bi-LİR', 'يمكن اعتبار هذا أحد محدّدات الدراسة.', 'ئەمە دەکرێت وەک یەکێک لە سنووردارییەکانی توێژینەوەکە هەڵبسەنگێنرێت.'),
      p('İleride yapılacak çalışmalarda örneklemin genişletilmesi önerilmektedir.', 'i-le-ri-DE ya-pı-la-DJAK ça-lış-ma-lar-DA ör-nek-le-MİN ge-niş-le-til-me-Sİ ö-ne-ril-mek-te-DİR', 'يُوصى بتوسيع العينة في الدراسات المستقبلية.', 'پێشنیار دەکرێت لە توێژینەوەی داهاتوودا نموونەکە فراوان بکرێت.'),
      p('İlginiz için teşekkür eder, saygılar sunarım.', 'il-gi-NİZ i-ÇİN te-şek-KÜR e-DER say-gı-LAR su-na-RIM', 'أشكركم على اهتمامكم وأقدّم لكم تحياتي.', 'سوپاستان دەکەم بۆ سەرنجتان و ڕێزم پێشکەش دەکەم.'),
    ],
  },
  {
    id: 'c1-sent-media',
    level: 'c1',
    order: 2,
    title: 'Haber ve Medya Dili',
    titleI18n: b('لغة الأخبار والإعلام', 'زمانی هەواڵ و ڕاگەیاندن'),
    focus: b('افهم نشرة الأخبار التركية دون ترجمة.', 'بەبێ وەرگێڕان لە هەواڵی تورکی تێبگە.'),
    sentences: [
      p('Cumhurbaşkanı bugün yaptığı açıklamada konuya değindi.', 'djum-hur-baş-ka-NI bu-GÜN yap-tı-I a-çık-la-ma-DA ko-nu-YA de-in-Dİ', 'تطرّق الرئيس إلى الموضوع في تصريحه اليوم.', 'سەرۆک کۆمار لە لێدوانەکەی ئەمڕۆیدا ئاماژەی بە بابەتەکە کرد.'),
      p('Meclis, yeni yasa teklifini oy çokluğuyla kabul etti.', 'medj-LİS ye-Nİ ya-SA tek-li-fi-Nİ OY çok-lu-uy-LA ka-BUL et-ti', 'أقرّ البرلمان مشروع القانون الجديد بأغلبية الأصوات.', 'پەرلەمان پێشنیاری یاسا نوێیەکەی بە زۆرینەی دەنگ پەسەند کرد.'),
      p('Ekonomik göstergeler son çeyrekte iyileşme kaydetti.', 'e-ko-no-MİK gös-ter-ge-LER SON çey-rek-TE i-yi-leş-ME kay-det-Tİ', 'سجّلت المؤشرات الاقتصادية تحسّناً في الربع الأخير.', 'پێوەرە ئابوورییەکان لە چارەگی کۆتاییدا باشبوونیان تۆمار کرد.'),
      p('Yetkililer, soruşturmanın sürdüğünü bildirdi.', 'yet-ki-li-LER so-ruş-tur-ma-NIN sür-dü-ü-NÜ bil-dir-Dİ', 'أفاد المسؤولون بأن التحقيق مستمرّ.', 'بەرپرسان ڕایانگەیاند کە لێکۆڵینەوەکە بەردەوامە.'),
      p('Deprem bölgesinde yardım çalışmaları aralıksız devam ediyor.', 'dep-REM böl-ge-sin-DE yar-DIM ça-lış-ma-la-RI a-ra-lık-SIZ de-VAM e-di-yor', 'تتواصل أعمال الإغاثة دون انقطاع في منطقة الزلزال.', 'کاری یارمەتیدان لە ناوچەی بوومەلەرزەکەدا بەبێ پسانەوە بەردەوامە.'),
      p('Uzmanlara göre bu eğilimin önümüzdeki yıllarda da sürmesi bekleniyor.', 'uz-man-la-RA gö-RE BU e-i-li-MİN ö-nü-müz-de-Kİ yıl-lar-DA da sür-me-Sİ bek-le-ni-YOR', 'وفقاً للخبراء، يُتوقّع أن يستمر هذا الاتجاه في السنوات القادمة أيضاً.', 'بەپێی پسپۆڕان، چاوەڕوان دەکرێت ئەم ئاڕاستەیە لە ساڵانی داهاتوودا بەردەوام بێت.'),
    ],
  },
];
