import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * B2 vocabulary, part two.
 *
 * The step from B1 to B2 is not "more nouns" - it is COLLOCATION. A B2 speaker
 * knows that Turkish says `karar vermek` not "karar yapmak", `dikkat çekmek`
 * not "dikkat almak". Those pairings are collected here explicitly, alongside
 * the compound expressions, the informal register Turks actually speak in, and
 * the finance/professional vocabulary of working life.
 */

const collocations = pack('collocations', 'b2', 'phrase', [
  w('dikkat çekmek', 'dik-KAT çek-mek', 'يلفت الانتباه', 'سەرنجڕاکێشان', ['Bu konu dikkat çekiyor.', 'BU ko-NU dik-KAT çe-ki-YOR', 'هذا الموضوع يلفت الانتباه.', 'ئەم بابەتە سەرنج ڕادەکێشێت.']),
  w('dikkat etmek', 'dik-KAT et-mek', 'ينتبه إلى', 'ئاگاداربوون', ['Yazım kurallarına dikkat et.', 'ya-ZIM ku-ral-la-rı-NA dik-KAT ET', 'انتبه لقواعد الإملاء.', 'ئاگاداری یاساکانی ڕێنووس بە.']),
  w('rol oynamak', 'ROL oy-na-mak', 'يلعب دوراً', 'ڕۆڵ گێڕان', ['Eğitim burada büyük rol oynuyor.', 'e-i-TİM bu-ra-DA bü-YÜK ROL oy-nu-YOR', 'يلعب التعليم دوراً كبيراً هنا.', 'پەروەردە لێرەدا ڕۆڵێکی گەورە دەگێڕێت.']),
  w('yer almak', 'YER al-mak', 'يرد / يحتلّ مكاناً', 'جێگیربوون', ['Raporda bu bilgi yer almıyor.', 'ra-por-DA BU bil-Gİ YER al-mı-YOR', 'لا ترد هذه المعلومة في التقرير.', 'ئەم زانیارییە لە ڕاپۆرتەکەدا نییە.']),
  w('göz önünde bulundurmak', 'GÖZ ö-nün-DE bu-lun-dur-mak', 'يأخذ بعين الاعتبار', 'لەبەرچاوگرتن', ['Bütçeyi göz önünde bulundurmalıyız.', 'büt-çe-Yİ GÖZ ö-nün-DE bu-lun-dur-ma-lı-YIZ', 'يجب أن نأخذ الميزانية بعين الاعتبار.', 'دەبێت بودجەکە لەبەرچاو بگرین.']),
  w('önem vermek', 'ö-NEM ver-mek', 'يولي أهمية', 'گرنگیدان', ['Kaliteye çok önem veriyoruz.', 'ka-li-te-YE ÇOK ö-NEM ve-ri-YO-ruz', 'نولي الجودة أهمية كبيرة.', 'گرنگییەکی زۆر بە کوالیتی دەدەین.']),
  w('sorun çıkarmak', 'so-RUN çı-kar-mak', 'يفتعل مشكلة', 'کێشە دروستکردن', ['Lütfen sorun çıkarma.', 'lüt-FEN so-RUN çı-kar-MA', 'من فضلك لا تفتعل مشكلة.', 'تکایە کێشە دروست مەکە.']),
  w('sorun yaşamak', 'so-RUN ya-şa-mak', 'يواجه مشكلة', 'تووشی کێشە بوون', ['Bağlantıda sorun yaşıyoruz.', 'ba-lan-tı-DA so-RUN ya-şı-YO-ruz', 'نواجه مشكلة في الاتصال.', 'لە پەیوەندیدا تووشی کێشە دەبین.']),
  w('hayata geçirmek', 'ha-ya-TA ge-çir-mek', 'ينفّذ / يضع موضع التنفيذ', 'جێبەجێکردن', ['Projeyi gelecek yıl hayata geçireceğiz.', 'pro-je-Yİ ge-le-DJEK YIL ha-ya-TA ge-çi-re-dje-İZ', 'سننفّذ المشروع العام القادم.', 'ساڵی داهاتوو پڕۆژەکە جێبەجێ دەکەین.']),
  w('göze almak', 'gö-ZE al-mak', 'يجازف بـ / يتقبّل المخاطرة', 'ڕازیبوون بە مەترسی', ['Bu riski göze alamam.', 'BU ris-Kİ gö-ZE a-la-MAM', 'لا أستطيع تقبّل هذه المخاطرة.', 'ناتوانم ڕازی بم بەم مەترسییە.']),
  w('etki etmek', 'et-Kİ et-mek', 'يؤثّر في', 'کاریگەری کردن', ['Hava durumu satışlara etki etti.', 'ha-VA du-ru-MU sa-tış-la-RA et-Kİ et-ti', 'أثّر الطقس في المبيعات.', 'کەشوهەوا کاریگەری لەسەر فرۆشتن کرد.']),
  w('katkı sağlamak', 'kat-KI sa-la-mak', 'يسهم / يقدّم إسهاماً', 'بەشداری کردن', ['Ekonomiye büyük katkı sağlıyor.', 'e-ko-no-mi-YE bü-YÜK kat-KI sa-lı-YOR', 'يسهم إسهاماً كبيراً في الاقتصاد.', 'بەشدارییەکی گەورە لە ئابووریدا دەکات.']),
  w('yola çıkmak', 'yo-LA çık-mak', 'ينطلق / يشرع', 'بەڕێکەوتن', ['Sabah erkenden yola çıktık.', 'sa-BAH er-ken-DEN yo-LA çık-TIK', 'انطلقنا باكراً في الصباح.', 'بەیانی زوو بەڕێکەوتین.']),
  w('söz vermek', 'SÖZ ver-mek', 'يَعِد', 'بەڵێندان', ['Bana söz verdi.', 'ba-NA SÖZ ver-Dİ', 'وعدني.', 'بەڵێنی پێدام.']),
  w('söz konusu olmak', 'SÖZ ko-nu-SU ol-mak', 'يكون موضع البحث / معنيّاً', 'باسی لێوە دەکرێت', ['Güvenlik söz konusu olduğunda taviz vermeyiz.', 'gü-ven-LİK SÖZ ko-nu-SU ol-du-ĞUN-da ta-VİZ ver-me-YİZ', 'حين يتعلق الأمر بالأمن لا نساوم.', 'کاتێک باسی ئاسایش دەکرێت مل نادەین.']),
  w('yerine getirmek', 'ye-ri-NE ge-tir-mek', 'ينجز / يفي بـ', 'جێبەجێکردنی بەڵێن', ['Sözünü yerine getirdi.', 'sö-zü-NÜ ye-ri-NE ge-tir-Dİ', 'أوفى بوعده.', 'بەڵێنەکەی جێبەجێ کرد.']),
  w('ele almak', 'e-LE al-mak', 'يتناول / يعالج (موضوعاً)', 'دەستپێکردنی بابەت', ['Makale konuyu derinlemesine ele alıyor.', 'ma-ka-LE ko-nu-YU de-rin-le-me-si-NE e-LE a-lı-YOR', 'تتناول المقالة الموضوع بعمق.', 'وتارەکە بە قووڵی بابەتەکە دەخاتە بەرباس.']),
  w('kaygı duymak', 'kay-GI duy-mak', 'يشعر بالقلق', 'هەست بە دڵەڕاوکێ کردن', ['Geleceği için kaygı duyuyor.', 'ge-le-ce-Ğİ i-ÇİN kay-GI du-yu-YOR', 'يشعر بالقلق على مستقبله.', 'بۆ داهاتووی هەست بە دڵەڕاوکێ دەکات.']),
  w('fark yaratmak', 'FARK ya-rat-mak', 'يُحدث فرقاً', 'جیاوازی دروستکردن', ['Küçük adımlar fark yaratır.', 'kü-ÇÜK a-dım-LAR FARK ya-ra-TIR', 'الخطوات الصغيرة تُحدث فرقاً.', 'هەنگاوە بچووکەکان جیاوازی دروست دەکەن.']),
  w('hesaba katmak', 'he-sa-BA kat-mak', 'يحسب حساباً لـ', 'لەبەرچاوگرتن', ['Gecikmeyi de hesaba katmalıyız.', 'ge-djik-me-Yİ de he-sa-BA kat-ma-lı-YIZ', 'علينا أن نحسب حساب التأخير أيضاً.', 'دەبێت دواکەوتنیش لەبەرچاو بگرین.']),
  w('önlem almak', 'ön-LEM al-mak', 'يتّخذ إجراءً وقائياً', 'ڕێوشوێن گرتن', ['Gerekli önlemleri aldık.', 'ge-rek-Lİ ön-lem-le-Rİ al-DIK', 'اتخذنا الإجراءات اللازمة.', 'ڕێوشوێنە پێویستەکانمان گرتەبەر.']),
  w('yola koymak', 'yo-LA koy-mak', 'يضبط الأمور / يصلح', 'ڕێکخستن', ['İşleri yoluna koydu.', 'iş-le-Rİ yo-lu-NA koy-DU', 'أصلح الأمور.', 'کارەکانی ڕێکخست.']),
  w('göz ardı etmek', 'GÖZ ar-DI et-mek', 'يتجاهل', 'پشتگوێخستن', ['Bu detayı göz ardı edemeyiz.', 'BU de-ta-YI GÖZ ar-DI e-de-me-YİZ', 'لا يمكننا تجاهل هذه التفصيلة.', 'ناتوانین ئەم وردەکارییە پشتگوێ بخەین.']),
  w('yerini almak', 'ye-ri-Nİ al-mak', 'يحلّ محلّ', 'جێی گرتنەوە', ['Dijital arşiv kâğıdın yerini aldı.', 'di-ji-TAL ar-ŞİV kâ-ı-DIN ye-ri-Nİ al-DI', 'حلّ الأرشيف الرقمي محلّ الورق.', 'ئەرشیفی دیجیتاڵ جێی کاغەزی گرتەوە.']),
]);

const compounds = pack('compounds', 'b2', 'phrase', [
  w('bakış açısı', 'ba-KIŞ a-çı-sı', 'وجهة نظر', 'ڕوانگە', ['Farklı bir bakış açısı sundu.', 'fark-LI bir ba-KIŞ a-çı-SI sun-DU', 'قدّم وجهة نظر مختلفة.', 'ڕوانگەیەکی جیاوازی پێشکەش کرد.']),
  w('iş birliği', 'İŞ bir-li-i', 'تعاون', 'هاوکاری', ['İki üniversite iş birliği yapıyor.', 'i-Kİ ü-ni-ver-si-TE İŞ bir-li-İ ya-pı-YOR', 'تتعاون الجامعتان.', 'هەردوو زانکۆ هاوکاری دەکەن.']),
  w('söz hakkı', 'SÖZ hak-kı', 'حق الكلام', 'مافی قسەکردن', ['Herkesin söz hakkı var.', 'her-ke-SİN SÖZ hak-KI VAR', 'لكل شخص حق الكلام.', 'هەموو کەسێک مافی قسەکردنی هەیە.']),
  w('el yazısı', 'EL ya-zı-sı', 'خط اليد', 'دەستنووس', ['El yazısını okuyamıyorum.', 'EL ya-zı-sı-NI o-ku-ya-mı-YO-rum', 'لا أستطيع قراءة خط يده.', 'ناتوانم دەستنووسەکەی بخوێنمەوە.']),
  w('göz alıcı', 'GÖZ a-lı-DJI', 'خلّاب / لافت', 'چاوڕاکێش', ['Göz alıcı bir manzara.', 'GÖZ a-lı-DJI bir man-za-RA', 'منظر خلّاب.', 'دیمەنێکی چاوڕاکێش.'], 'adjective'),
  w('iyi niyet', 'i-Yİ ni-yet', 'حسن نية', 'نیازی باش', ['Her şeyi iyi niyetle yaptı.', 'her şe-Yİ i-Yİ ni-yet-LE yap-TI', 'فعل كل شيء بحسن نية.', 'هەموو شتێکی بە نیازی باش کرد.']),
  w('ön yargı', 'ÖN yar-gı', 'حكم مسبق / تحيّز', 'پێشداوەری', ['Ön yargılarımızı sorgulamalıyız.', 'ÖN yar-gı-la-rı-mı-ZI sor-gu-la-ma-lı-YIZ', 'علينا مساءلة أحكامنا المسبقة.', 'دەبێت پێشداوەرییەکانمان بخەینە ژێر پرسیار.']),
  w('iş yükü', 'İŞ yü-kü', 'عبء العمل', 'باری کار', ['Bu dönem iş yüküm çok ağır.', 'BU dö-NEM İŞ yü-KÜM ÇOK a-IR', 'عبء عملي ثقيل جداً هذا الفصل.', 'ئەم وەرزە باری کارم زۆر قورسە.']),
  w('yaşam tarzı', 'ya-ŞAM tar-zı', 'نمط حياة', 'شێوازی ژیان', ['Sağlıklı bir yaşam tarzı benimsedi.', 'sa-lık-LI bir ya-ŞAM tar-zı be-nim-se-Dİ', 'تبنّى نمط حياة صحياً.', 'شێوازی ژیانێکی تەندروستی گرتەبەر.']),
  w('kişisel gelişim', 'ki-şi-SEL ge-li-şim', 'تطوير الذات', 'گەشەی کەسی', ['Kişisel gelişim kitapları okuyor.', 'ki-şi-SEL ge-li-ŞİM ki-tap-la-RI o-ku-YOR', 'يقرأ كتب تطوير الذات.', 'کتێبی گەشەی کەسی دەخوێنێتەوە.']),
  w('zaman yönetimi', 'za-MAN yö-ne-ti-mi', 'إدارة الوقت', 'بەڕێوەبردنی کات', ['Zaman yönetimi konusunda zorlanıyorum.', 'za-MAN yö-ne-ti-Mİ ko-nu-sun-DA zor-la-nı-YO-rum', 'أجد صعوبة في إدارة الوقت.', 'لە بەڕێوەبردنی کاتدا دووچاری قورسایی دەبم.']),
  w('halk sağlığı', 'HALK sa-lı-ı', 'الصحة العامة', 'تەندروستی گشتی', ['Bu bir halk sağlığı meselesi.', 'BU bir HALK sa-lı-I me-se-le-Sİ', 'هذه قضية صحة عامة.', 'ئەمە مەسەلەیەکی تەندروستی گشتییە.']),
  w('ana dil', 'a-NA DİL', 'اللغة الأم', 'زمانی دایک', ['Ana dilim Kürtçe.', 'a-NA di-LİM kürt-ÇE', 'لغتي الأم الكردية.', 'زمانی دایکم کوردییە.']),
  w('göz teması', 'GÖZ te-ma-sı', 'تواصل بصري', 'پەیوەندی چاو', ['Konuşurken göz teması kur.', 'ko-nu-şur-KEN GÖZ te-ma-SI KUR', 'أقم تواصلاً بصرياً أثناء الكلام.', 'لە کاتی قسەکردندا پەیوەندی چاو دروست بکە.']),
  w('el emeği', 'EL e-me-i', 'صنع يدوي / جهد يدوي', 'دەسکردی', ['Bu halı tamamen el emeği.', 'BU ha-LI ta-ma-MEN EL e-me-İ', 'هذه السجادة صنع يدوي بالكامل.', 'ئەم فەرشە بە تەواوی دەسکردییە.']),
  w('gönüllü çalışma', 'gö-nül-LÜ ça-lış-ma', 'عمل تطوّعي', 'کاری خۆبەخشی', ['Hafta sonları gönüllü çalışma yapıyor.', 'haf-TA son-la-RI gö-nül-LÜ ça-lış-MA ya-pı-YOR', 'يقوم بعمل تطوّعي في العطل.', 'کۆتایی هەفتەکان کاری خۆبەخشی دەکات.']),
  w('kısa vadeli', 'kı-SA va-de-li', 'قصير الأمد', 'کورتخایەن', ['Bu kısa vadeli bir çözüm.', 'BU kı-SA va-de-Lİ bir çö-ZÜM', 'هذا حلّ قصير الأمد.', 'ئەمە چارەسەرێکی کورتخایەنە.'], 'adjective'),
  w('uzun vadeli', 'u-ZUN va-de-li', 'طويل الأمد', 'درێژخایەن', ['Uzun vadeli düşünmeliyiz.', 'u-ZUN va-de-Lİ dü-şün-me-li-YİZ', 'علينا التفكير على المدى الطويل.', 'دەبێت درێژخایەن بیر بکەینەوە.'], 'adjective'),
]);

const informal = pack('informal', 'b2', 'phrase', [
  w('yani', 'ya-Nİ', 'يعني (حشو كلامي شائع جداً)', 'واتە (زۆر باو لە قسەدا)', ['Yani ne demek istiyorsun?', 'ya-Nİ NE de-MEK is-ti-yor-sun', 'يعني ماذا تقصد؟', 'واتە مەبەستت چییە؟']),
  w('valla', 'val-LA', 'والله (تأكيد عامّي)', 'وەڵا (جەختکردنی ناڕەسمی)', ['Valla bilmiyorum.', 'val-LA bil-mi-YO-rum', 'والله لا أعرف.', 'وەڵا نازانم.']),
  w('hadi ya', 'ha-Dİ YA', 'حقاً؟! (تعجّب)', 'ڕاستی؟! (سەرسوڕمان)', ['Hadi ya, inanamıyorum!', 'ha-Dİ YA i-na-na-mı-YO-rum', 'حقاً؟! لا أصدّق!', 'ڕاستی؟! باوەڕ ناکەم!']),
  w('bak şimdi', 'BAK şim-di', 'انظر الآن (لبدء شرح)', 'ئێستا سەیرکە (بۆ دەستپێکردنی ڕوونکردنەوە)', ['Bak şimdi, olay şöyle oldu.', 'BAK şim-Dİ o-LAY şöy-LE ol-du', 'انظر الآن، هكذا حدث الأمر.', 'ئێستا سەیرکە، ڕووداوەکە بەم شێوەیە بوو.']),
  w('ne bileyim', 'NE bi-le-yim', 'ما أدري / لا أعرف بالضبط', 'چ بزانم', ['Ne bileyim, belki gelir.', 'NE bi-le-YİM bel-Kİ ge-LİR', 'ما أدري، ربما يأتي.', 'چ بزانم، لەوانەیە بێت.']),
  w('bir dakika ya', 'bir da-ki-KA YA', 'لحظة يا رجل (اعتراض ودّي)', 'خولەکێک (ناڕەزایی دۆستانە)', ['Bir dakika ya, öyle demedim.', 'bir da-ki-KA YA öy-LE de-me-DİM', 'لحظة، لم أقل ذلك.', 'خولەکێک، من ئاوام نەگوت.']),
  w('süper', 'sü-PER', 'ممتاز / رائع', 'زۆر باش', ['Fikir süper, hemen başlayalım.', 'fi-KİR sü-PER he-MEN baş-la-ya-LIM', 'الفكرة رائعة، لنبدأ فوراً.', 'بیرۆکەکە زۆر باشە، با دەستبەجێ دەست پێبکەین.'], 'adjective'),
  w('berbat', 'ber-BAT', 'سيّئ جداً / فظيع', 'زۆر خراپ', ['Hava bugün berbat.', 'ha-VA bu-GÜN ber-BAT', 'الطقس فظيع اليوم.', 'کەشوهەوا ئەمڕۆ زۆر خراپە.'], 'adjective'),
  w('sıkıntı yok', 'sı-kın-TI YOK', 'ما في مشكلة', 'کێشە نییە', ['Geç kaldın ama sıkıntı yok.', 'GEÇ kal-DIN a-MA sı-kın-TI YOK', 'تأخرت لكن ما في مشكلة.', 'درەنگ کەوتیت بەڵام کێشە نییە.']),
  w('kafayı takmak', 'ka-fa-YI tak-mak', 'يشغل باله بـ / يهوس بـ', 'مێشک تێکردن', ['Küçük detaylara kafayı takma.', 'kü-ÇÜK de-tay-la-RA ka-fa-YI tak-MA', 'لا تشغل بالك بالتفاصيل الصغيرة.', 'مێشکت بە وردەکارییە بچووکەکانەوە مەخە.'], 'verb'),
  w('takılmak', 'ta-kıl-MAK', 'يتسكّع / يقضي وقتاً', 'کات بەسەربردن', ['Akşamları arkadaşlarla takılıyoruz.', 'ak-şam-la-RI ar-ka-daş-lar-LA ta-kı-lı-YO-ruz', 'نقضي الأمسيات مع الأصدقاء.', 'ئێوارەکان لەگەڵ هاوڕێکان کات بەسەر دەبەین.'], 'verb'),
  w('abartmak', 'a-bart-MAK', 'يبالغ', 'زیادەڕەوی کردن', ['Biraz abartıyorsun bence.', 'bi-RAZ a-bar-tı-YOR-sun ben-DJE', 'برأيي أنت تبالغ قليلاً.', 'بە بۆچوونی من کەمێک زیادەڕەوی دەکەیت.'], 'verb'),
  w('uğraşmak', 'u-raş-MAK', 'ينشغل بـ / يتعب في', 'خەریکبوون', ['Sabahtan beri bu işle uğraşıyorum.', 'sa-bah-TAN be-Rİ BU iş-LE u-ra-şı-YO-rum', 'أنا منشغل بهذا العمل منذ الصباح.', 'لە بەیانییەوە خەریکی ئەم کارەم.'], 'verb'),
  w('idare etmek', 'i-da-RE et-mek', 'يدبّر أمره / يكفي بالكاد', 'گوزەران کردن', ['Maaş az ama idare ediyoruz.', 'ma-AŞ AZ a-MA i-da-RE e-di-yo-ruz', 'الراتب قليل لكننا ندبّر أمرنا.', 'مووچە کەمە بەڵام گوزەران دەکەین.'], 'verb'),
  w('eyvallah', 'ey-val-LAH', 'شكراً / تمام (ودّي)', 'سوپاس / باشە (دۆستانە)', ['Eyvallah kardeşim, görüşürüz.', 'ey-val-LAH kar-de-ŞİM gö-rü-şü-RÜZ', 'شكراً يا أخي، نلتقي.', 'سوپاس برام، دەبینینەوە.']),
  w('yok artık', 'YOK ar-tık', 'مستحيل! (تعجّب)', 'نەخێر ئیتر! (سەرسوڕمان)', ['Yok artık, gerçekten mi?', 'YOK ar-TIK ger-çek-TEN mi', 'مستحيل، حقاً؟', 'نەخێر ئیتر، بەڕاستی؟']),
  w('canım', 'dja-NIM', 'عزيزي / روحي (تحبّب)', 'گیانم (خۆشەویستی)', ['Merak etme canım, hallolur.', 'me-RAK et-ME dja-NIM hal-lo-LUR', 'لا تقلق يا عزيزي، ستُحلّ.', 'نیگەران مەبە گیانم، چارەسەر دەبێت.']),
  w('kesinlikle', 'ke-sin-lik-LE', 'بالتأكيد المطلق', 'بە دڵنیاییەوە', ['Kesinlikle katılıyorum.', 'ke-sin-lik-LE ka-tı-lı-YO-rum', 'أوافق تماماً.', 'بە دڵنیاییەوە هاوڕام.'], 'adverb'),
  w('galiba', 'ga-li-BA', 'على الأرجح', 'وا دیارە', ['Galiba yağmur yağacak.', 'ga-li-BA YAA-mur ya-a-DJAK', 'على الأرجح ستمطر.', 'وا دیارە باران دەبارێت.'], 'adverb'),
]);

const finance = pack('finance', 'b2', 'noun', [
  w('ekonomi', 'e-ko-no-Mİ', 'اقتصاد', 'ئابووری', ['Ekonomi geçen yıl büyüdü.', 'e-ko-no-Mİ ge-ÇEN YIL bü-yü-DÜ', 'نما الاقتصاد العام الماضي.', 'ئابووری ساڵی ڕابردوو گەشەی کرد.']),
  w('enflasyon', 'enf-las-YON', 'تضخّم', 'هەڵاوسان', ['Enflasyon yüzde on beşe çıktı.', 'enf-las-YON yüz-DE ON be-ŞE çık-TI', 'ارتفع التضخم إلى خمسة عشر بالمئة.', 'هەڵاوسان گەیشتە پازدە لە سەد.']),
  w('faiz', 'fa-İZ', 'فائدة (مصرفية)', 'سوو', ['Faiz oranları düştü.', 'fa-İZ o-ran-la-RI düş-TÜ', 'انخفضت أسعار الفائدة.', 'ڕێژەکانی سوو دابەزین.']),
  w('bütçe açığı', 'büt-ÇE a-çı-ı', 'عجز الميزانية', 'کەمایەسی بودجە', ['Bütçe açığı büyüyor.', 'büt-ÇE a-çı-I bü-yü-YOR', 'عجز الميزانية يتزايد.', 'کەمایەسی بودجە گەورە دەبێت.']),
  w('gelir', 'ge-LİR', 'دخل', 'داهات', ['Aylık gelirim sabit.', 'ay-LIK ge-li-RİM sa-BİT', 'دخلي الشهري ثابت.', 'داهاتی مانگانەم جێگیرە.']),
  w('gider', 'gi-DER', 'مصروف / نفقة', 'خەرجی', ['Giderlerimizi azaltmalıyız.', 'gi-der-le-ri-mi-Zİ a-zalt-ma-lı-YIZ', 'يجب أن نقلّل نفقاتنا.', 'دەبێت خەرجییەکانمان کەم بکەینەوە.']),
  w('kâr', 'KÂR', 'ربح', 'قازانج', ['Şirket bu çeyrekte kâr etti.', 'şir-KET BU çey-rek-TE KÂR et-Tİ', 'حققت الشركة ربحاً هذا الربع.', 'کۆمپانیاکە لەم چارەگەدا قازانجی کرد.']),
  w('zarar', 'za-RAR', 'خسارة / ضرر', 'زیان', ['Yatırım zarar etti.', 'ya-tı-RIM za-RAR et-Tİ', 'خسر الاستثمار.', 'وەبەرهێنانەکە زیانی کرد.']),
  w('vergi', 'ver-Gİ', 'ضريبة', 'باج', ['Vergileri zamanında ödedim.', 'ver-gi-le-Rİ za-ma-nın-DA ö-de-DİM', 'دفعت الضرائب في وقتها.', 'باجەکانم لە کاتی خۆیدا دا.']),
  w('borç', 'BORÇ', 'دَين', 'قەرز', ['Bütün borçlarını kapattı.', 'bü-TÜN borç-la-rı-NI ka-pat-TI', 'سدّد كل ديونه.', 'هەموو قەرزەکانی دایەوە.']),
  w('kredi çekmek', 'kre-Dİ çek-mek', 'يأخذ قرضاً', 'قەرز وەرگرتن', ['Ev için kredi çektik.', 'EV i-ÇİN kre-Dİ çek-TİK', 'أخذنا قرضاً لشراء بيت.', 'بۆ ماڵ قەرزمان وەرگرت.'], 'verb'),
  w('yatırımcı', 'ya-tı-rım-DJI', 'مستثمر', 'وەبەرهێنەر', ['Yabancı yatırımcılar ilgi gösteriyor.', 'ya-ban-DJI ya-tı-rım-dji-LAR il-Gİ gös-te-ri-YOR', 'يبدي المستثمرون الأجانب اهتماماً.', 'وەبەرهێنەرە بیانییەکان گرنگی نیشان دەدەن.']),
  w('piyasa', 'pi-ya-SA', 'سوق (مالي)', 'بازاڕ', ['Piyasa bugün dalgalı.', 'pi-ya-SA bu-GÜN dal-ga-LI', 'السوق متقلّب اليوم.', 'بازاڕ ئەمڕۆ ناجێگیرە.']),
  w('arz ve talep', 'ARZ ve ta-LEP', 'العرض والطلب', 'پێشکەش و داواکاری', ['Fiyat arz ve talebe göre değişir.', 'fi-YAT ARZ ve ta-le-BE gö-RE de-i-ŞİR', 'يتغير السعر حسب العرض والطلب.', 'نرخ بەپێی پێشکەش و داواکاری دەگۆڕێت.']),
  w('bütçe planlaması', 'büt-ÇE plan-la-ma-sı', 'تخطيط الميزانية', 'پلاندانانی بودجە', ['Bütçe planlaması yaptık.', 'büt-ÇE plan-la-ma-SI yap-TIK', 'قمنا بتخطيط الميزانية.', 'پلاندانانی بودجەمان کرد.']),
  w('maliyet', 'ma-li-YET', 'تكلفة', 'تێچوو', ['Maliyeti düşürmemiz gerekiyor.', 'ma-li-ye-Tİ dü-şür-me-MİZ ge-re-ki-YOR', 'يلزمنا خفض التكلفة.', 'پێویستە تێچووەکە کەم بکەینەوە.']),
]);

const professionalExtra = pack('professional', 'b2', 'noun', [
  w('tedarik zinciri', 'te-da-RİK zin-dji-ri', 'سلسلة التوريد', 'زنجیرەی دابینکردن', ['Tedarik zincirinde aksama var.', 'te-da-RİK zin-dji-rin-DE ak-sa-MA VAR', 'هناك خلل في سلسلة التوريد.', 'کێشەیەک لە زنجیرەی دابینکردندا هەیە.']),
  w('kalite kontrol', 'ka-li-TE kon-trol', 'ضبط الجودة', 'کۆنترۆڵی کوالیتی', ['Kalite kontrol ekibi inceledi.', 'ka-li-TE kon-TROL e-ki-Bİ in-dje-le-Dİ', 'فحص فريق ضبط الجودة.', 'تیمی کۆنترۆڵی کوالیتی پشکنینی کرد.']),
  w('teslim tarihi', 'tes-LİM ta-ri-hi', 'موعد التسليم', 'بەرواری ڕادەستکردن', ['Teslim tarihini kaçırdık.', 'tes-LİM ta-ri-hi-Nİ ka-çır-DIK', 'فاتنا موعد التسليم.', 'بەرواری ڕادەستکردنمان لەدەست چوو.']),
  w('iş akışı', 'İŞ a-kı-şı', 'سير العمل', 'ڕەوتی کار', ['İş akışını yeniden tasarladık.', 'İŞ a-kı-şı-NI ye-ni-DEN ta-sar-la-DIK', 'أعدنا تصميم سير العمل.', 'ڕەوتی کارمان لە نوێوە دیزاین کردەوە.']),
  w('geri bildirim', 'ge-Rİ bil-di-rim', 'تغذية راجعة', 'ڕاگەیاندنەوە', ['Ekipten geri bildirim aldım.', 'e-kip-TEN ge-Rİ bil-di-RİM al-DIM', 'تلقيت تغذية راجعة من الفريق.', 'لە تیمەکەوە ڕاگەیاندنەوەم وەرگرت.']),
  w('hedef kitle', 'he-DEF kit-le', 'الفئة المستهدفة', 'گروپی ئامانج', ['Hedef kitlemiz genç profesyoneller.', 'he-DEF kit-le-MİZ GENÇ pro-fes-yo-nel-LER', 'فئتنا المستهدفة هم المهنيون الشباب.', 'گروپی ئامانجمان پیشەگەرە گەنجەکانن.']),
  w('sunum yapmak', 'su-NUM yap-mak', 'يقدّم عرضاً', 'پێشکەشکردن', ['Yarın müşteriye sunum yapacağım.', 'ya-RIN müş-te-ri-YE su-NUM ya-pa-dja-IM', 'سأقدّم عرضاً للعميل غداً.', 'سبەینێ پێشکەشکردنێک بۆ کڕیار دەکەم.'], 'verb'),
  w('görev dağılımı', 'gö-REV da-ı-lı-mı', 'توزيع المهام', 'دابەشکردنی ئەرک', ['Görev dağılımını netleştirelim.', 'gö-REV da-ı-lı-mı-NI net-leş-ti-re-LİM', 'لنوضّح توزيع المهام.', 'با دابەشکردنی ئەرکەکان ڕوون بکەینەوە.']),
  w('kriz yönetimi', 'KRİZ yö-ne-ti-mi', 'إدارة الأزمات', 'بەڕێوەبردنی قەیران', ['Kriz yönetimi eğitimi aldık.', 'KRİZ yö-ne-ti-Mİ e-i-ti-Mİ al-DIK', 'تلقّينا تدريباً على إدارة الأزمات.', 'ڕاهێنانی بەڕێوەبردنی قەیرانمان وەرگرت.']),
  w('kurumsal', 'ku-rum-SAL', 'مؤسّسي', 'دامەزراوەیی', ['Kurumsal kimliğimizi yeniledik.', 'ku-rum-SAL kim-li-i-mi-Zİ ye-ni-le-DİK', 'جدّدنا هويتنا المؤسسية.', 'ناسنامەی دامەزراوەییمان نوێ کردەوە.'], 'adjective'),
  w('sürdürülebilir büyüme', 'sür-dü-rü-le-bi-LİR bü-yü-me', 'نمو مستدام', 'گەشەی بەردەوام', ['Amacımız sürdürülebilir büyüme.', 'a-ma-djı-MIZ sür-dü-rü-le-bi-LİR bü-yü-ME', 'هدفنا نمو مستدام.', 'ئامانجمان گەشەی بەردەوامە.']),
  w('paydaş', 'pay-DAŞ', 'صاحب مصلحة', 'بەرژەوەندیدار', ['Tüm paydaşlarla görüştük.', 'TÜM pay-daş-lar-LA gö-rüş-TÜK', 'اجتمعنا بكل أصحاب المصلحة.', 'لەگەڵ هەموو بەرژەوەندیدارەکان کۆبووینەوە.']),
  w('yetkilendirmek', 'yet-ki-len-dir-MEK', 'يفوّض / يمنح صلاحية', 'دەسەڵاتدان', ['Beni bu konuda yetkilendirdiler.', 'be-Nİ BU ko-nu-DA yet-ki-len-dir-di-ler', 'فوّضوني في هذا الأمر.', 'لەم بابەتەدا دەسەڵاتیان پێدام.'], 'verb'),
  w('denetlemek', 'de-net-le-MEK', 'يدقّق / يراقب', 'چاودێری کردن', ['Süreci düzenli olarak denetliyoruz.', 'sü-re-DJİ dü-zen-Lİ o-la-RAK de-net-li-YO-ruz', 'نراقب العملية بانتظام.', 'بە ڕێکی چاودێری پرۆسەکە دەکەین.'], 'verb'),
]);

const verbsB2Extra = pack('verbs', 'b2', 'verb', [
  w('varsaymak', 'var-say-MAK', 'يفترض', 'گریمانەکردن', ['Herkesin bildiğini varsaydım.', 'her-ke-SİN bil-di-i-Nİ var-say-DIM', 'افترضت أن الجميع يعرف.', 'گریمانەم کرد کە هەموو دەزانن.']),
  w('ileri sürmek', 'i-le-Rİ sür-mek', 'يطرح / يدّعي', 'پێشکەشکردنی بۆچوون', ['İlginç bir tez ileri sürdü.', 'il-GİNÇ bir TEZ i-le-Rİ sür-DÜ', 'طرح أطروحة مثيرة للاهتمام.', 'تێزێکی سەرنجڕاکێشی خستە ڕوو.']),
  w('çürütmek', 'çü-rüt-MEK', 'يدحض / يفنّد', 'پووچەڵکردنەوە', ['Bu bulgu iddiayı çürütüyor.', 'BU bul-GU id-di-a-YI çü-rü-tü-YOR', 'تدحض هذه النتيجة الادّعاء.', 'ئەم دۆزینەوەیە بانگەشەکە پووچەڵ دەکاتەوە.']),
  w('sınırlamak', 'sı-nır-la-MAK', 'يحدّ من', 'سنووردارکردن', ['Kullanımı iki saatle sınırladık.', 'kul-la-nı-MI i-Kİ sa-at-LE sı-nır-la-DIK', 'حدّدنا الاستخدام بساعتين.', 'بەکارهێنانمان بە دوو کاتژمێر سنووردار کرد.']),
  w('genişletmek', 'ge-niş-let-MEK', 'يوسّع', 'فراوانکردن', ['Araştırmanın kapsamını genişlettik.', 'a-raş-tır-ma-NIN kap-sa-mı-NI ge-niş-let-TİK', 'وسّعنا نطاق البحث.', 'بواری توێژینەوەکەمان فراوان کرد.']),
  w('yansıtmak', 'yan-sıt-MAK', 'يعكس', 'ڕەنگدانەوە', ['Bu rakamlar gerçeği yansıtmıyor.', 'BU ra-kam-LAR ger-çe-İ yan-sıt-mı-YOR', 'لا تعكس هذه الأرقام الحقيقة.', 'ئەم ژمارانە ڕاستییەکە ڕەنگ نادەنەوە.']),
  w('kaçınmak', 'ka-çın-MAK', 'يتجنّب', 'خۆدوورخستنەوە', ['Genellemelerden kaçınmalıyız.', 'ge-nel-le-me-ler-DEN ka-çın-ma-lı-YIZ', 'علينا تجنّب التعميمات.', 'دەبێت خۆمان لە گشتاندن دووربخەینەوە.']),
  w('yol açmak', 'YOL aç-mak', 'يؤدّي إلى / يتسبّب في', 'بوونەهۆی', ['Karar büyük tartışmaya yol açtı.', 'ka-RAR bü-YÜK tar-tış-ma-YA YOL aç-TI', 'أدّى القرار إلى جدل كبير.', 'بڕیارەکە بووە هۆی گفتوگۆیەکی گەورە.']),
  w('göz yummak', 'GÖZ yum-mak', 'يتغاضى عن', 'چاوپۆشین', ['Bu hataya göz yumamayız.', 'BU ha-ta-YA GÖZ yu-ma-ma-YIZ', 'لا يمكننا التغاضي عن هذا الخطأ.', 'ناتوانین چاوپۆشی لەم هەڵەیە بکەین.']),
  w('üstesinden gelmek', 'üs-te-sin-DEN gel-mek', 'يتغلّب على', 'زاڵبوون بەسەر', ['Zorlukların üstesinden geldi.', 'zor-luk-la-RIN üs-te-sin-DEN gel-Dİ', 'تغلّب على الصعوبات.', 'بەسەر قورساییەکاندا زاڵ بوو.']),
  w('yürürlüğe girmek', 'yü-rür-lü-Ğ girmek', 'يدخل حيّز التنفيذ', 'خستنەبواری کارکردن', ['Yasa ocakta yürürlüğe giriyor.', 'ya-SA o-djak-TA yü-rür-lü-ĞE gi-ri-YOR', 'يدخل القانون حيّز التنفيذ في يناير.', 'یاساکە لە کانوونی دووەمدا دەچێتە بواری کارکردنەوە.']),
  w('kanıtlamak', 'ka-nıt-la-MAK', 'يثبت', 'سەلماندن', ['Bunu kanıtlayabilir misin?', 'bu-NU ka-nıt-la-ya-bi-LİR mi-sin', 'هل تستطيع إثبات هذا؟', 'دەتوانیت ئەمە بسەلمێنیت؟']),
  w('sürdürmek', 'sür-dür-MEK', 'يواصل', 'بەردەوامبوون', ['Çalışmalarımızı sürdürüyoruz.', 'ça-lış-ma-la-rı-mı-ZI sür-dü-rü-YO-ruz', 'نواصل أعمالنا.', 'بەردەوامین لە کارەکانمان.']),
  w('teşvik etmek', 'teş-VİK et-mek', 'يشجّع / يحفّز', 'هاندان', ['Öğrencileri okumaya teşvik ediyoruz.', 'öö-ren-dji-le-Rİ o-ku-ma-YA teş-VİK e-di-yo-ruz', 'نشجّع الطلاب على القراءة.', 'قوتابییەکان بۆ خوێندنەوە هان دەدەین.']),
  w('yönlendirmek', 'yön-len-dir-MEK', 'يوجّه', 'ئاراستەکردن', ['Sizi ilgili birime yönlendireyim.', 'si-Zİ il-gi-Lİ bi-ri-ME yön-len-di-re-YİM', 'دعني أوجّهك إلى القسم المختص.', 'با ئاراستەی بەشی پەیوەندیدارت بکەم.']),
  w('tahmin etmek', 'tah-MİN et-mek', 'يتوقّع / يخمّن', 'پێشبینیکردن', ['Sonucu tahmin edememiştim.', 'so-nu-DJU tah-MİN e-de-me-miş-TİM', 'لم أكن قد توقّعت النتيجة.', 'نەمتوانیبوو ئەنجامەکە پێشبینی بکەم.']),
]);

const adjectivesB2Extra = pack('adjectives', 'b2', 'adjective', [
  w('belirsiz', 'be-lir-SİZ', 'غامض / غير محدّد', 'نادیار', ['Durum hâlâ belirsiz.', 'du-RUM hâ-LÂ be-lir-SİZ', 'الوضع ما زال غامضاً.', 'دۆخەکە هێشتا نادیارە.']),
  w('kesin', 'ke-SİN', 'قطعي / أكيد', 'دڵنیا', ['Henüz kesin bir şey yok.', 'he-NÜZ ke-SİN bir ŞEY YOK', 'لا شيء أكيد بعد.', 'هێشتا هیچ شتێکی دڵنیا نییە.']),
  w('geçerli', 'ge-çer-Lİ', 'ساري المفعول / صالح', 'کارا', ['Biletiniz hâlâ geçerli.', 'bi-le-ti-NİZ hâ-LÂ ge-çer-Lİ', 'تذكرتك ما زالت صالحة.', 'بلیتەکەت هێشتا کارایە.']),
  w('geçersiz', 'ge-çer-SİZ', 'لاغٍ / غير صالح', 'ناکارا', ['Bu argüman geçersiz.', 'BU ar-gü-MAN ge-çer-SİZ', 'هذه الحجّة غير صالحة.', 'ئەم بەڵگەیە ناکارایە.']),
  w('tutarlı', 'tu-tar-LI', 'متّسق / منسجم', 'یەکگرتوو', ['Argümanın tutarlı değil.', 'ar-gü-ma-NIN tu-tar-LI de-İL', 'حجّتك غير متّسقة.', 'بەڵگەکەت یەکگرتوو نییە.']),
  w('çelişkili', 'çe-liş-ki-Lİ', 'متناقض', 'دژبەیەک', ['Açıklamaları çelişkili.', 'a-çık-la-ma-la-RI çe-liş-ki-Lİ', 'تصريحاته متناقضة.', 'ڕوونکردنەوەکانی دژبەیەکن.']),
  w('kapsamlı', 'kap-sam-LI', 'شامل', 'بەرفراوان', ['Kapsamlı bir rapor hazırladı.', 'kap-sam-LI bir ra-POR ha-zır-la-DI', 'أعدّ تقريراً شاملاً.', 'ڕاپۆرتێکی بەرفراوانی ئامادە کرد.']),
  w('yüzeysel', 'yü-zey-SEL', 'سطحي', 'ڕووکەشانە', ['Analiz biraz yüzeysel kalmış.', 'a-na-LİZ bi-RAZ yü-zey-SEL kal-MIŞ', 'بدا التحليل سطحياً بعض الشيء.', 'شیکارییەکە کەمێک ڕووکەشانە مابووەوە.']),
  w('nesnel', 'nes-NEL', 'موضوعي', 'بابەتی', ['Nesnel bir değerlendirme bekliyoruz.', 'nes-NEL bir de-er-len-dir-ME bek-li-YO-ruz', 'نتوقّع تقييماً موضوعياً.', 'چاوەڕێی هەڵسەنگاندنێکی بابەتی دەکەین.']),
  w('öznel', 'öz-NEL', 'ذاتي', 'کەسی', ['Bu tamamen öznel bir görüş.', 'BU ta-ma-MEN öz-NEL bir gö-RÜŞ', 'هذا رأي ذاتي تماماً.', 'ئەمە بە تەواوی بۆچوونێکی کەسییە.']),
  w('vazgeçilmez', 'vaz-ge-çil-MEZ', 'لا غنى عنه', 'گرنگی بنەڕەتی', ['Su hayat için vazgeçilmezdir.', 'SU ha-YAT i-ÇİN vaz-ge-çil-mez-DİR', 'الماء لا غنى عنه للحياة.', 'ئاو بۆ ژیان گرنگی بنەڕەتی هەیە.']),
  w('dikkat çekici', 'dik-KAT çe-ki-dji', 'لافت للنظر', 'سەرنجڕاکێش', ['Dikkat çekici bir artış var.', 'dik-KAT çe-ki-DJİ bir ar-TIŞ VAR', 'هناك ارتفاع لافت.', 'زیادبوونێکی سەرنجڕاکێش هەیە.']),
  w('makul', 'ma-KUL', 'معقول', 'گونجاو', ['Makul bir fiyat teklif etti.', 'ma-KUL bir fi-YAT tek-LİF et-ti', 'عرض سعراً معقولاً.', 'نرخێکی گونجاوی پێشنیار کرد.']),
  w('sıradan', 'sı-ra-DAN', 'عادي / مألوف', 'ئاسایی', ['Sıradan bir gün değildi.', 'sı-ra-DAN bir GÜN de-il-Dİ', 'لم يكن يوماً عادياً.', 'ڕۆژێکی ئاسایی نەبوو.']),
  w('olağanüstü', 'o-la-a-nüs-TÜ', 'استثنائي / خارق', 'نائاسایی', ['Olağanüstü bir performans sergiledi.', 'o-la-a-nüs-TÜ bir per-for-MANS ser-gi-le-Dİ', 'قدّم أداءً استثنائياً.', 'کارایەکی نائاساییی نواند.']),
  w('titiz', 'ti-TİZ', 'دقيق / مدقّق', 'وردبین', ['Titiz bir çalışma yapmış.', 'ti-TİZ bir ça-lış-MA yap-MIŞ', 'يبدو أنه أنجز عملاً دقيقاً.', 'وا دیارە کارێکی وردبینانەی کردووە.']),
]);

const nounsB2Extra = pack('nouns', 'b2', 'noun', [
  w('varsayım', 'var-sa-YIM', 'افتراض', 'گریمانە', ['Bu sadece bir varsayım.', 'BU sa-de-DJE bir var-sa-YIM', 'هذا مجرّد افتراض.', 'ئەمە تەنها گریمانەیەکە.']),
  w('kanıt', 'ka-NIT', 'دليل', 'بەڵگە', ['Elimizde yeterli kanıt yok.', 'e-li-miz-DE ye-ter-Lİ ka-NIT YOK', 'ليس لدينا دليل كافٍ.', 'بەڵگەی پێویستمان لەبەردەست نییە.']),
  w('gerekçe', 'ge-rek-ÇE', 'مبرّر / حيثية', 'هۆکار', ['Kararın gerekçesini açıkladı.', 'ka-ra-RIN ge-rek-çe-si-Nİ a-çık-la-DI', 'شرح مبرّرات القرار.', 'هۆکارەکانی بڕیارەکەی ڕوونکردەوە.']),
  w('eğilim', 'e-i-LİM', 'ميل / اتّجاه', 'ئاڕاستە', ['Genel eğilim yukarı yönlü.', 'ge-NEL e-i-LİM yu-ka-RI yön-LÜ', 'الاتجاه العام صاعد.', 'ئاڕاستەی گشتی بەرەو سەرەوەیە.']),
  w('istisna', 'is-tis-NA', 'استثناء', 'دەرچوون', ['Her kuralın bir istisnası vardır.', 'her ku-ra-LIN bir is-tis-na-SI var-DIR', 'لكل قاعدة استثناء.', 'هەموو یاسایەک دەرچوونێکی هەیە.']),
  w('ayrıntı', 'ay-rın-TI', 'تفصيل', 'وردەکاری', ['Ayrıntılara sonra bakarız.', 'ay-rın-tı-la-RA son-RA ba-ka-RIZ', 'سننظر في التفاصيل لاحقاً.', 'دواتر سەیری وردەکارییەکان دەکەین.']),
  w('katkı', 'kat-KI', 'إسهام', 'بەشداری', ['Katkınız için teşekkürler.', 'kat-kı-NIZ i-ÇİN te-şek-kür-LER', 'شكراً على إسهامكم.', 'سوپاس بۆ بەشدارییەکەتان.']),
  w('kapsam', 'kap-SAM', 'نطاق', 'بوار', ['Bu konu çalışmanın kapsamı dışında.', 'BU ko-NU ça-lış-ma-NIN kap-sa-MI dı-şın-DA', 'هذا الموضوع خارج نطاق الدراسة.', 'ئەم بابەتە لە دەرەوەی بواری توێژینەوەکەیە.']),
  w('ölçüt', 'öl-ÇÜT', 'معيار', 'پێوەر', ['Değerlendirme ölçütleri belli.', 'de-er-len-dir-ME öl-çüt-le-Rİ bel-Lİ', 'معايير التقييم واضحة.', 'پێوەرەکانی هەڵسەنگاندن دیارن.']),
  w('süreç', 'sü-REÇ', 'عملية / مسار', 'پرۆسە', ['Başvuru süreci uzun.', 'baş-vu-RU sü-re-DJİ u-ZUN', 'عملية التقديم طويلة.', 'پرۆسەی داواکاری درێژە.']),
  w('yaklaşım', 'yak-la-ŞIM', 'مقاربة / نهج', 'ڕوانگە', ['Yeni bir yaklaşım deneyelim.', 'ye-Nİ bir yak-la-ŞIM de-ne-ye-LİM', 'لنجرّب مقاربة جديدة.', 'با ڕوانگەیەکی نوێ تاقی بکەینەوە.']),
  w('kapasite', 'ka-pa-si-TE', 'طاقة استيعابية', 'توانا', ['Salonun kapasitesi beş yüz kişi.', 'sa-lo-NUN ka-pa-si-te-Sİ beş YÜZ ki-Şİ', 'طاقة القاعة خمسمئة شخص.', 'توانای هۆڵەکە پێنج سەد کەسە.']),
  w('bakım', 'ba-KIM', 'صيانة / رعاية', 'چاودێری', ['Makinenin bakımı yapıldı.', 'ma-ki-ne-NİN ba-kı-MI ya-pıl-DI', 'أُجريت صيانة الآلة.', 'چاودێری ئامێرەکە کرا.']),
  w('denge', 'den-GE', 'توازن', 'هاوسەنگی', ['İş ve özel hayat dengesi önemli.', 'İŞ ve ö-ZEL ha-YAT den-ge-Sİ ö-nem-Lİ', 'التوازن بين العمل والحياة مهم.', 'هاوسەنگی نێوان کار و ژیانی تایبەت گرنگە.']),
  w('baskı', 'bas-KI', 'ضغط / طبعة', 'فشار / چاپ', ['Zaman baskısı altındayız.', 'za-MAN bas-kı-SI al-tın-da-YIZ', 'نحن تحت ضغط الوقت.', 'لەژێر فشاری کاتداین.']),
  w('güvence', 'gü-ven-DJE', 'ضمان', 'دڵنیایی', ['Bize hiçbir güvence vermediler.', 'bi-ZE hiç-BİR gü-ven-DJE ver-me-di-ler', 'لم يعطونا أي ضمان.', 'هیچ دڵنیاییەکیان پێنەداین.']),
]);

export const B2_VOCABULARY_EXTRA: VocabItem[] = [
  ...collocations, ...compounds, ...informal, ...finance,
  ...professionalExtra, ...verbsB2Extra, ...adjectivesB2Extra, ...nounsB2Extra,
];
