import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Advanced sentence patterns (B2 -> C1+).
 *
 * These packs are organised by SENTENCE PATTERN rather than by topic, because
 * that is what a B2+ learner is missing: not more words, but the ready-made
 * frames Turks slot words into. Learn the frame, swap the content.
 */
export const ADVANCED_SENTENCES: SentencePack[] = [
  {
    id: 'b2-sent-hedging',
    level: 'b2',
    order: 3,
    title: 'Temkinli Konuşma Kalıpları',
    titleI18n: b('صيغ التحفّظ والحذر', 'قاڵبەکانی وریایی لە قسەدا'),
    focus: b(
      'كيف تقول رأياً دون أن تلتزم به تماماً — مهارة أساسية في العمل والأكاديميا.',
      'چۆن ڕایەک بڵێیت بەبێ ئەوەی بە تەواوی پابەندی بیت — کارامەیییەکی بنەڕەتی لە کار و ئەکادیمیادا.',
    ),
    sentences: [
      p('Yanılmıyorsam toplantı salı günüydü.', 'ya-nıl-mı-YOR-sam top-lan-TI sa-LI gü-nüy-DÜ', 'إن لم أكن مخطئاً فالاجتماع كان يوم الثلاثاء.', 'ئەگەر هەڵە نەبم کۆبوونەوەکە ڕۆژی سێشەممە بوو.'),
      p('Bildiğim kadarıyla henüz bir karar alınmadı.', 'bil-di-İM ka-da-rıy-LA he-NÜZ bir ka-RAR a-lın-ma-DI', 'على حدّ علمي لم يُتّخذ قرار بعد.', 'بەو ڕادەیەی دەیزانم هێشتا بڕیارێک نەدراوە.'),
      p('Kesin konuşmak istemem ama sonuç olumlu görünüyor.', 'ke-SİN ko-nuş-MAK is-te-MEM a-MA so-NUÇ o-lum-LU gö-rü-nü-YOR', 'لا أريد الجزم لكن النتيجة تبدو إيجابية.', 'ناموێت بە دڵنیاییەوە قسە بکەم بەڵام ئەنجامەکە ئەرێنی دیارە.'),
      p('Bana kalırsa bu yaklaşım daha güvenli.', 'ba-NA ka-lır-SA BU yak-la-ŞIM da-HA gü-ven-Lİ', 'في اعتقادي هذه المقاربة أكثر أماناً.', 'بە بۆچوونی من ئەم ڕوانگەیە دڵنیاترە.'),
      p('Bir yanılgı payı olabilir, yine de rakamlar bunu gösteriyor.', 'bir ya-nıl-GI pa-YI o-la-bi-LİR yi-NE de ra-kam-LAR bu-NU gös-te-ri-YOR', 'قد يكون هناك هامش خطأ، ومع ذلك الأرقام تشير إلى هذا.', 'لەوانەیە ماوەی هەڵە هەبێت، لەگەڵ ئەوەشدا ژمارەکان ئەمە نیشان دەدەن.'),
      p('Şu aşamada net bir şey söylemek zor.', 'ŞU a-şa-ma-DA NET bir ŞEY söy-le-MEK ZOR', 'من الصعب قول شيء محدّد في هذه المرحلة.', 'لەم قۆناغەدا قورسە شتێکی ڕوون بڵێیت.'),
      p('Genel eğilim bu yönde, ancak istisnalar var.', 'ge-NEL e-i-LİM BU yön-DE an-DJAK is-tis-na-LAR VAR', 'الاتجاه العام في هذا الاتجاه، غير أن هناك استثناءات.', 'ئاڕاستەی گشتی بەم لایەدایە، بەڵام دەرچوون هەن.'),
      p('Sanırım bir yanlış anlaşılma oldu.', 'sa-nı-RIM bir yan-LIŞ an-la-şıl-MA ol-DU', 'أظنّ أنه حدث سوء تفاهم.', 'وابزانم تێنەگەیشتنێک ڕوویدا.'),
      p('Elimizdeki verilere dayanarak şunu söyleyebiliriz.', 'e-li-miz-de-Kİ ve-ri-le-RE da-ya-na-RAK şu-NU söy-le-ye-bi-li-RİZ', 'استناداً إلى البيانات التي لدينا يمكننا قول ما يلي.', 'بە پشتبەستن بەو داتایانەی لەبەردەستمانە دەتوانین ئەمە بڵێین.'),
    ],
  },
  {
    id: 'b2-sent-cause-effect',
    level: 'b2',
    order: 4,
    title: 'Neden-Sonuç Kalıpları',
    titleI18n: b('صيغ السبب والنتيجة', 'قاڵبەکانی هۆکار و ئەنجام'),
    focus: b(
      'ربط الأحداث بعلاقة سببية واضحة — أساس أي شرح أو تقرير.',
      'بەستنەوەی ڕووداوەکان بە پەیوەندییەکی هۆکاری ڕوون — بنەمای هەر ڕوونکردنەوە یان ڕاپۆرتێک.',
    ),
    sentences: [
      p('Yağmur yağdığı için maç ertelendi.', 'YAA-mur ya-dı-I i-ÇİN MAÇ er-te-len-Dİ', 'أُجّلت المباراة بسبب هطول المطر.', 'بەهۆی بارینی بارانەوە یارییەکە دواخرا.'),
      p('Trafik yoğun olduğundan toplantıya geç kaldım.', 'tra-FİK yo-UN ol-du-ĞUN-dan top-lan-tı-YA GEÇ kal-DIM', 'تأخّرت عن الاجتماع لأن حركة السير كانت مزدحمة.', 'بەهۆی قەرەباڵغی هاتوچۆوە درەنگ گەیشتمە کۆبوونەوەکە.'),
      p('Bütçe kesildi; dolayısıyla proje askıya alındı.', 'büt-ÇE ke-sil-Dİ do-la-yı-sıy-LA pro-JE as-kı-YA a-lın-DI', 'قُطعت الميزانية؛ وبالتالي عُلّق المشروع.', 'بودجە بڕدرا؛ کەواتە پڕۆژەکە ڕاگیرا.'),
      p('Yeterince hazırlanmadığı için sınavdan düşük aldı.', 'ye-te-rin-DJE ha-zır-lan-ma-dı-I i-ÇİN sı-nav-DAN dü-ŞÜK al-DI', 'حصل على درجة منخفضة لأنه لم يستعد بما فيه الكفاية.', 'نمرەی نزمی هێنا چونکە بەقەدەر پێویست ئامادە نەببوو.'),
      p('Bu karar, uzun vadede maliyetleri artıracaktır.', 'BU ka-RAR u-ZUN va-de-DE ma-li-yet-le-Rİ ar-tı-ra-djak-TIR', 'سيرفع هذا القرار التكاليف على المدى الطويل.', 'ئەم بڕیارە لە درێژخایەندا تێچووەکان زیاد دەکات.'),
      p('Talep arttıkça fiyatlar da yükseldi.', 'ta-LEP art-tık-ÇA fi-yat-LAR da yük-sel-Dİ', 'كلما ازداد الطلب ارتفعت الأسعار.', 'هەرچی داواکاری زیادی کرد نرخەکانیش بەرز بوونەوە.'),
      p('Sonuç olarak yöntemi tamamen değiştirmek zorunda kaldık.', 'so-NUÇ o-la-RAK yön-te-Mİ ta-ma-MEN de-ğiş-tir-MEK zo-run-DA kal-DIK', 'ونتيجةً لذلك اضطررنا إلى تغيير المنهج كلياً.', 'وەک ئەنجام ناچار بووین ڕێبازەکە بە تەواوی بگۆڕین.'),
      p('Bu sayede zamandan büyük tasarruf sağladık.', 'BU sa-ye-DE za-man-DAN bü-YÜK ta-sar-RUF sa-la-DIK', 'وبفضل هذا وفّرنا وقتاً كبيراً.', 'بەهۆی ئەمەوە کاتێکی زۆرمان پاشەکەوت کرد.'),
    ],
  },
  {
    id: 'c1-sent-presenting',
    level: 'c1',
    order: 3,
    title: 'Sunum ve Rapor Kalıpları',
    titleI18n: b('صيغ العرض والتقرير', 'قاڵبەکانی پێشکەشکردن و ڕاپۆرت'),
    focus: b(
      'الجمل الجاهزة التي تفتح وتنظّم وتغلق أي عرض أو تقرير رسمي.',
      'ئەو ڕستە ئامادانەی هەر پێشکەشکردن یان ڕاپۆرتێکی فەرمی دەکەنەوە و ڕێکیان دەخەن.',
    ),
    sentences: [
      p('Bugünkü sunumumda üç ana başlığa değineceğim.', 'bu-gün-KÜ su-nu-mum-DA ÜÇ a-NA baş-lı-A de-i-ne-dje-İM', 'سأتطرّق في عرضي اليوم إلى ثلاثة عناوين رئيسية.', 'لە پێشکەشکردنی ئەمڕۆمدا ئاماژە بە سێ سەردێڕی سەرەکی دەکەم.'),
      p('Öncelikle mevcut durumu özetlemek istiyorum.', 'ön-dje-lik-LE mev-DJUT du-ru-MU ö-zet-le-MEK is-ti-YO-rum', 'أودّ أولاً تلخيص الوضع الراهن.', 'سەرەتا دەمەوێت دۆخی ئێستا کورت بکەمەوە.'),
      p('Grafikte de görüldüğü üzere eğilim yukarı yönlüdür.', 'gra-fik-TE de gö-rül-dü-Ğ ü-ze-RE e-i-LİM yu-ka-RI yön-lü-DÜR', 'كما هو ملاحَظ في الرسم البياني، الاتجاه صاعد.', 'وەک لە هێڵکارییەکەشدا دەردەکەوێت، ئاڕاستەکە بەرەو سەرەوەیە.'),
      p('Bu noktada bir hususa dikkat çekmek isterim.', 'BU nok-ta-DA bir hu-su-SA dik-KAT çek-MEK is-te-rim', 'أودّ لفت الانتباه إلى أمر عند هذه النقطة.', 'لەم خاڵەدا دەمەوێت سەرنج بۆ لایەنێک ڕابکێشم.'),
      p('Bulgularımızı üç başlık altında topladık.', 'bul-gu-la-rı-mı-ZI ÜÇ baş-LIK al-tın-DA top-la-DIK', 'جمعنا نتائجنا تحت ثلاثة عناوين.', 'دۆزینەوەکانمان لەژێر سێ سەردێڕدا کۆکردەوە.'),
      p('Sonuç bölümüne geçmeden önce sınırlılıklara değinmeliyim.', 'so-NUÇ bö-lü-mü-NE geç-me-DEN ön-DJE sı-nır-lı-lık-la-RA de-in-me-li-YİM', 'قبل الانتقال إلى قسم الخاتمة عليّ التطرّق إلى المحدّدات.', 'پێش ئەوەی بچمە بەشی دەرئەنجام دەبێت ئاماژە بە سنوورداری بکەم.'),
      p('Özetle, veriler hipotezimizi desteklemektedir.', 'ö-zet-LE ve-ri-LER hi-po-te-zi-mi-Zİ des-tek-le-mek-te-DİR', 'خلاصةً، تدعم البيانات فرضيتنا.', 'بە کورتی، داتاکان پشتگیری گریمانەکەمان دەکەن.'),
      p('Sorularınız için şimdiden teşekkür ederim.', 'so-ru-la-rı-NIZ i-ÇİN şim-di-DEN te-şek-KÜR e-de-rim', 'أشكركم مسبقاً على أسئلتكم.', 'پێشوەخت سوپاستان دەکەم بۆ پرسیارەکانتان.'),
      p('İzninizle bir sonraki slayda geçiyorum.', 'iz-ni-niz-LE bir son-ra-Kİ slay-DA ge-çi-YO-rum', 'بإذنكم أنتقل إلى الشريحة التالية.', 'بە مۆڵەتتان دەچمە بۆ سلایدی دواتر.'),
    ],
  },
  {
    id: 'c1plus-sent-nuance',
    level: 'c1plus',
    order: 3,
    title: 'İnce Anlam Kalıpları',
    titleI18n: b('صيغ الدلالات الدقيقة', 'قاڵبەکانی واتای ناسک'),
    focus: b(
      'الجمل التي تنقل موقفاً ضمنياً — سخرية، تحفّظ، امتعاض — دون قوله صراحة.',
      'ئەو ڕستانەی هەڵوێستێکی نێوانخوێن دەگوازنەوە — گاڵتەجاڕی، تێبینی، ناڕەزایی — بەبێ گوتنی بە ئاشکرا.',
    ),
    sentences: [
      p('Doğrusunu söylemek gerekirse pek ikna olmadım.', 'do-ru-su-NU söy-le-MEK ge-re-kir-SE PEK ik-NA ol-ma-DIM', 'إن أردنا الصدق، لم أقتنع كثيراً.', 'ئەگەر ڕاستییەکەی بڵێین، زۆر قەناعەتم پێنەهات.'),
      p('Olmadı demiyorum ama beklediğim bu değildi.', 'ol-ma-DI de-mi-YO-rum a-MA bek-le-di-İM BU de-il-Dİ', 'لا أقول إنه لم ينجح، لكن هذا ليس ما توقّعته.', 'ناڵێم سەرکەوتوو نەبوو، بەڵام ئەمە ئەوە نەبوو چاوەڕێم دەکرد.'),
      p('Nasıl söylesem… biraz erken bir karar oldu.', 'na-SIL söy-le-SEM bi-RAZ er-KEN bir ka-RAR ol-DU', 'كيف أقولها… كان قراراً متسرّعاً بعض الشيء.', 'چۆن بیڵێم… بڕیارێکی کەمێک پەلەکێش بوو.'),
      p('Haksız da sayılmaz, ama meselenin başka bir yüzü var.', 'hak-SIZ da sa-yıl-MAZ a-MA me-se-le-NİN baş-KA bir yü-ZÜ VAR', 'لا يمكن اعتباره مخطئاً، لكن للمسألة وجه آخر.', 'ناتوانرێت بە هەڵە دابنرێت، بەڵام مەسەلەکە ڕوویەکی تری هەیە.'),
      p('Bu kadarını da beklemiyordum açıkçası.', 'BU ka-da-rı-NI da bek-le-mi-YOR-dum a-çık-ça-SI', 'بصراحة لم أكن أتوقّع كل هذا.', 'ڕاستییەکەی چاوەڕێی ئەوەندەم نەدەکرد.'),
      p('İyi niyetinden şüphem yok, yalnız yöntem tartışmalı.', 'i-Yİ ni-ye-tin-DEN şüp-HEM YOK yal-NIZ yön-TEM tar-tış-ma-LI', 'لا أشكّ في حسن نيته، غير أن الأسلوب محلّ نقاش.', 'گومانم لە نیازی باشی نییە، بەڵام ڕێبازەکە جێی گفتوگۆیە.'),
      p('Bir bakıma öyle, bir bakıma değil.', 'bir ba-kı-MA öy-LE bir ba-kı-MA de-İL', 'من وجه نعم، ومن وجه لا.', 'لە ڕوویەکەوە بەڵێ، لە ڕوویەکی ترەوە نەخێر.'),
      p('Şimdilik yorum yapmayı tercih ederim.', 'şim-di-LİK yo-RUM yap-ma-MA-yı ter-DJİH e-de-rim', 'أفضّل عدم التعليق في الوقت الحالي.', 'بۆ ئێستا پەسەند دەکەم لێدوان نەدەم.'),
      p('Söylemesi ayıp ama ben de aynısını düşünmüştüm.', 'söy-le-me-Sİ a-YIP a-MA BEN de ay-nı-sı-NI dü-şün-müş-TÜM', 'العيب أن أقولها، لكنني كنت أفكّر بالشيء نفسه.', 'شەرمە بیڵێم، بەڵام منیش هەمان شتم بیرکردبووەوە.'),
      p('Vakti gelince konuşuruz, şimdi sırası değil.', 'vak-Tİ ge-lin-DJE ko-nu-şu-RUZ şim-Dİ sı-ra-SI de-İL', 'سنتحدّث حين يحين الوقت، الآن ليس أوانه.', 'کاتی خۆی قسە دەکەین، ئێستا کاتی نییە.'),
    ],
  },
];
