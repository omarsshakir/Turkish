import type { SentencePack } from '@/types/content';
import { b, p } from '../shared/helpers';

export const B1_SENTENCES: SentencePack[] = [
  {
    id: 'b1-sent-requests',
    level: 'b1',
    order: 1,
    title: 'Rica ve İstekler',
    titleI18n: b('الطلبات والرجاء', 'داواکاری و تکا'),
    focus: b('اطلب بلطف من الغريب ومن الصديق.', 'بە نەرمی داوا بکە لە نەناسیاو و لە هاوڕێ.'),
    sentences: [
      p('Bir dakikanızı alabilir miyim?', 'bir da-ki-ka-nı-ZI a-la-bi-LİR mi-yim', 'هل يمكنني أخذ دقيقة من وقتك؟', 'دەتوانم خولەکێک لە کاتت وەربگرم؟'),
      p('Rica etsem şunu tutar mısınız?', 'ri-DJA et-SEM şu-NU tu-TAR mı-sı-nız', 'لو سمحت، هل تمسك هذا؟', 'تکایە ئەمە دەگریت؟'),
      p('Mümkünse yarına kadar bekleyelim.', 'müm-kün-SE ya-rı-NA ka-DAR bek-le-ye-LİM', 'إن أمكن فلننتظر حتى الغد.', 'ئەگەر دەکرێت با تا سبەینێ چاوەڕێ بکەین.'),
      p('Zahmet olmazsa kapıyı kapatır mısınız?', 'zah-MET ol-maz-SA ka-pı-YI ka-pa-TIR mı-sı-nız', 'إن لم يكن في ذلك مشقّة، هل تغلق الباب؟', 'ئەگەر ماندووبوون نەبێت دەرگاکە دادەخەیت؟'),
      p('Size bir şey sorabilir miyim?', 'si-ZE bir ŞEY so-ra-bi-LİR mi-yim', 'هل يمكنني أن أسألك شيئاً؟', 'دەتوانم شتێکت لێبپرسم؟'),
      p('Acaba bana yardımcı olabilir misiniz?', 'a-DJA-ba ba-NA yar-dım-DJI o-la-bi-LİR mi-si-niz', 'هل يمكنك مساعدتي يا ترى؟', 'ئایا دەتوانیت یارمەتیدەرم بیت؟'),
      p('Kusura bakmayın, rahatsız ettim.', 'ku-su-RA bak-ma-YIN ra-hat-SIZ et-TİM', 'اعذرني، لقد أزعجتك.', 'ببوورە، بێزارم کردیت.'),
      p('Ne zaman müsait olursunuz?', 'ne za-MAN mü-sa-İT o-lur-su-nuz', 'متى تكون متفرّغاً؟', 'کەی کاتت هەیە؟'),
    ],
  },
  {
    id: 'b1-sent-storytelling',
    level: 'b1',
    order: 2,
    title: 'Hikâye Anlatmak',
    titleI18n: b('سرد القصص والتجارب', 'گێڕانەوەی چیرۆک و ئەزموون'),
    focus: b('اربط الأحداث بترتيب زمني واضح.', 'ڕووداوەکان بە ڕیزبەندی کاتی ڕوون ببەستەوە.'),
    sentences: [
      p('Size başımdan geçen bir olayı anlatayım.', 'si-ZE ba-şım-DAN ge-ÇEN bir o-la-YI an-la-ta-YIM', 'دعوني أحكي لكم حادثة مرّت بي.', 'با ڕووداوێکتان بۆ بگێڕمەوە کە بەسەرم هات.'),
      p('Geçen sene, tam da bu günlerde...', 'ge-ÇEN se-NE TAM da BU gün-ler-DE', 'العام الماضي، في مثل هذه الأيام تماماً...', 'ساڵی ڕابردوو، هەر لەم ڕۆژانەدا...'),
      p('Her şey çok normal başlamıştı.', 'her ŞEY ÇOK nor-MAL baş-la-mış-TI', 'كان كل شيء قد بدأ عادياً جداً.', 'هەموو شتێک زۆر ئاسایی دەستی پێکردبوو.'),
      p('Tam o sırada telefonum çaldı.', 'TAM O sı-ra-DA te-le-fo-NUM çal-DI', 'في تلك اللحظة بالضبط رنّ هاتفي.', 'هەر لەو کاتەدا تەلەفۆنەکەم لێیدا.'),
      p('Önce ne olduğunu anlamadım.', 'ön-DJE NE ol-du-u-NU an-la-ma-DIM', 'في البداية لم أفهم ما حدث.', 'سەرەتا تێنەگەیشتم چی ڕوویدا.'),
      p('Sonradan öğrendim ki her şey bir yanlış anlaşılmaymış.', 'son-ra-DAN öö-ren-DİM Kİ her ŞEY bir yan-LIŞ an-la-şıl-may-MIŞ', 'عرفت لاحقاً أن كل شيء كان سوء تفاهم.', 'دواتر زانیم کە هەموو شتێک تێنەگەیشتنێک بووە.'),
      p('Sonunda her şey yoluna girdi.', 'so-nun-DA her ŞEY yo-lu-NA gir-Dİ', 'في النهاية عاد كل شيء إلى مساره.', 'لە کۆتاییدا هەموو شتێک ڕێک بووەوە.'),
      p('O günden beri daha dikkatliyim.', 'O gün-DEN be-Rİ da-HA dik-kat-li-YİM', 'منذ ذلك اليوم أصبحت أكثر حذراً.', 'لەو ڕۆژەوە زیاتر وریام.'),
    ],
  },
  {
    id: 'b1-sent-work',
    level: 'b1',
    order: 3,
    title: 'İş Yerinde',
    titleI18n: b('في مكان العمل', 'لە شوێنی کار'),
    focus: b('تواصل مع زملائك ومديرك.', 'پەیوەندی لەگەڵ هاوکار و بەڕێوەبەرەکەت بکە.'),
    sentences: [
      p('Toplantı kaçta başlıyor?', 'top-lan-TI kaç-TA baş-lı-YOR', 'في أي ساعة يبدأ الاجتماع؟', 'کۆبوونەوەکە کاتژمێر چەند دەست پێدەکات؟'),
      p('Raporu yarına kadar teslim edeceğim.', 'ra-po-RU ya-rı-NA ka-DAR tes-LİM e-de-dje-im', 'سأسلّم التقرير بحلول الغد.', 'ڕاپۆرتەکە تا سبەینێ ڕادەستی دەکەم.'),
      p('Bu konuda biraz daha zamana ihtiyacım var.', 'BU ko-nu-DA bi-RAZ da-HA za-ma-NA ih-ti-ya-DJIM VAR', 'أحتاج بعض الوقت الإضافي في هذا الأمر.', 'لەم بابەتەدا پێویستم بە کاتێکی زیاترە.'),
      p('Bir sorunla karşılaştık.', 'bir so-run-LA kar-şı-laş-TIK', 'واجهتنا مشكلة.', 'تووشی کێشەیەک بووین.'),
      p('Size bir öneride bulunabilir miyim?', 'si-ZE bir ö-ne-ri-DE bu-lu-na-bi-LİR mi-yim', 'هل يمكنني تقديم اقتراح لكم؟', 'دەتوانم پێشنیارێکتان پێشکەش بکەم؟'),
      p('Bu görevi ben üstlenebilirim.', 'BU gö-re-Vİ BEN üst-le-ne-bi-li-RİM', 'يمكنني تولّي هذه المهمة.', 'دەتوانم ئەم ئەرکە بگرمە ئەستۆ.'),
      p('İzin almam gerekiyor.', 'i-ZİN al-MAM ge-re-ki-YOR', 'يلزمني أخذ إجازة.', 'پێویستە مۆڵەت وەربگرم.'),
      p('Kolay gelsin arkadaşlar.', 'ko-LAY gel-SİN ar-ka-daş-LAR', 'الله يعينكم يا زملاء.', 'ئاسان بێت هاوڕێیان.'),
    ],
  },
];
