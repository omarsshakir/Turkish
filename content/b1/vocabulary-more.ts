import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * B1 vocabulary, expansion pass.
 *
 * Three areas the curriculum had no home for: describing what someone is LIKE
 * (personality), describing how people stand in relation to each other
 * (relationships), and the vocabulary of the internet, which is where most
 * B1 students actually encounter Turkish every day.
 */

/* ---------------- personality ---------------- */

const PERSONALITY: VocabItem[] = pack('personality', 'b1', 'adjective', [
  w('cömert', 'cö-MERT', 'كريم، سخيّ', 'بەخشندە',
    ['Çok cömert bir insandır.', 'ÇOK cö-MERT bir in-san-DIR', 'إنه إنسان كريم جداً.', 'مرۆڤێکی زۆر بەخشندەیە.']),
  w('cimri', 'cim-Rİ', 'بخيل', 'ڕژد',
    ['Cimri olmakla tutumlu olmak farklıdır.', 'cim-Rİ ol-mak-LA tu-tum-LU ol-MAK fark-lı-DIR', 'البخل غير الاقتصاد.', 'ڕژدی و کەمخەرجی جیاوازن.']),
  w('kibar', 'ki-BAR', 'مهذّب، لطيف', 'بەڕێز',
    ['Garson çok kibardı.', 'gar-SON ÇOK ki-bar-DI', 'كان النادل مهذّباً جداً.', 'گارسۆنەکە زۆر بەڕێز بوو.']),
  w('kaba', 'ka-BA', 'فظّ، وقح', 'دڕندە',
    ['Kaba konuşmasına kızdım.', 'ka-BA ko-nuş-ma-sı-NA kız-DIM', 'غضبت من كلامه الفظّ.', 'لە قسە دڕندانەکەی توڕە بووم.']),
  w('utangaç', 'u-tan-GAÇ', 'خجول', 'شەرمن',
    ['Çocuk çok utangaç.', 'ço-CUK ÇOK u-tan-GAÇ', 'الطفل خجول جداً.', 'منداڵەکە زۆر شەرمنە.']),
  w('sabırsız', 'sa-bır-SIZ', 'نافد الصبر', 'بێئارام',
    ['Sabırsız davranma.', 'sa-bır-SIZ dav-ran-MA', 'لا تتصرّف بنفاد صبر.', 'بێئارامانە ڕەفتار مەکە.']),
  w('çalışkan', 'ça-lış-KAN', 'مجتهد', 'کۆششکەر',
    ['Sınıfın en çalışkan öğrencisi.', 'sı-nı-FIN EN ça-lış-KAN öğ-ren-ci-Sİ', 'أكثر طلاب الصفّ اجتهاداً.', 'کۆششکەرترین قوتابی پۆلەکە.']),
  w('tembel', 'tem-BEL', 'كسول', 'تەمبەڵ',
    ['Bugün biraz tembelim.', 'bu-GÜN bi-RAZ tem-be-LİM', 'أنا كسول قليلاً اليوم.', 'ئەمڕۆ کەمێک تەمبەڵم.']),
  w('neşeli', 'ne-şe-Lİ', 'مرح', 'دڵخۆش',
    ['Neşeli bir arkadaşım var.', 'ne-şe-Lİ bir ar-ka-da-ŞIM var', 'لديّ صديق مرح.', 'هاوڕێیەکی دڵخۆشم هەیە.']),
  w('bencil', 'ben-CİL', 'أناني', 'خۆپەرست',
    ['Bencil davranmayı sevmem.', 'ben-CİL dav-ran-ma-YI sev-MEM', 'لا أحبّ التصرّف بأنانية.', 'حەز ناکەم خۆپەرستانە ڕەفتار بکەم.']),
  w('alçakgönüllü', 'al-çak-gö-nül-LÜ', 'متواضع', 'خۆنەویست',
    ['Başarılı ama alçakgönüllü.', 'ba-şa-rı-LI a-MA al-çak-gö-nül-LÜ', 'ناجح لكنه متواضع.', 'سەرکەوتووە بەڵام خۆنەویستە.']),
  w('kibirli', 'ki-bir-Lİ', 'متكبّر', 'لووتبەرز',
    ['Kibirli insanlardan hoşlanmam.', 'ki-bir-Lİ in-san-lar-DAN hoş-lan-MAM', 'لا أحبّ المتكبّرين.', 'حەز لە کەسانی لووتبەرز ناکەم.']),
  w('hırslı', 'hırs-LI', 'طموح، شَرِه', 'بەئاواتەوە',
    ['Hırslı bir sporcu.', 'hırs-LI bir spor-CU', 'رياضي طموح.', 'وەرزشوانێکی بەئاواتەوە.']),
  w('inatçı', 'i-nat-ÇI', 'عنيد', 'کەللەڕەق',
    ['İnatçı olma, dinle biraz.', 'i-nat-ÇI ol-MA din-LE bi-RAZ', 'لا تكن عنيداً، اسمع قليلاً.', 'کەللەڕەق مەبە، کەمێک گوێ بگرە.']),
  w('düşünceli', 'dü-şün-ce-Lİ', 'مراعٍ لشعور الآخرين', 'ڕەچاوکەر',
    ['Çok düşünceli bir hareketti.', 'ÇOK dü-şün-ce-Lİ bir ha-re-ket-Tİ', 'كان تصرّفاً مراعياً جداً.', 'ڕەفتارێکی زۆر ڕەچاوکەرانە بوو.']),
  w('samimi', 'sa-mi-Mİ', 'صادق، حميم', 'دڵسۆز',
    ['Samimi bir özür diledi.', 'sa-mi-Mİ bir ö-ZÜR di-le-Dİ', 'اعتذر اعتذاراً صادقاً.', 'داوای لێبوردنێکی دڵسۆزانەی کرد.']),
  w('mütevazı', 'mü-te-va-ZI', 'متواضع', 'خۆنەویست',
    ['Mütevazı bir evde yaşıyor.', 'mü-te-va-ZI bir ev-DE ya-şı-YOR', 'يعيش في بيت متواضع.', 'لە ماڵێکی سادەدا دەژی.']),
  w('duyarlı', 'du-yar-LI', 'حسّاس، مبالٍ', 'هەستیار',
    ['Çevreye duyarlı bir kurum.', 'çev-re-YE du-yar-LI bir ku-RUM', 'مؤسّسة مبالية بالبيئة.', 'دامەزراوەیەکی هەستیار بەرامبەر ژینگە.']),
]);

/* ---------------- relationships ---------------- */

const RELATIONSHIPS: VocabItem[] = [
  ...pack('relationships', 'b1', 'noun', [
    w('arkadaşlık', 'ar-ka-daş-LIK', 'صداقة', 'هاوڕێیەتی',
      ['Arkadaşlığımız on yıllık.', 'ar-ka-daş-lı-ğı-MIZ ON yıl-LIK', 'صداقتنا عمرها عشر سنوات.', 'هاوڕێیەتیمان دە ساڵە.']),
    w('dostluk', 'dost-LUK', 'صداقة عميقة', 'دۆستایەتی',
      ['Gerçek dostluk zor bulunur.', 'ger-ÇEK dost-LUK ZOR bu-lu-NUR', 'الصداقة الحقيقية نادرة.', 'دۆستایەتی ڕاستەقینە بە دەگمەن دەدۆزرێتەوە.']),
    w('komşuluk', 'kom-şu-LUK', 'الجيرة', 'دراوسێیەتی',
      ['Komşuluk ilişkilerimiz iyi.', 'kom-şu-LUK i-liş-ki-le-ri-MİZ i-Yİ', 'علاقات الجيرة عندنا جيدة.', 'پەیوەندییە دراوسێیەتییەکانمان باشە.']),
    w('nişan', 'ni-ŞAN', 'خطوبة', 'نیشان',
      ['Nişan yüzüğünü taktı.', 'ni-ŞAN yü-zü-ğü-NÜ tak-TI', 'لبست خاتم الخطوبة.', 'ئەنگوستیلەی نیشانی کرد بە دەستی.']),
    w('düğün', 'dü-ĞÜN', 'عرس، زفاف', 'زەماوەند',
      ['Düğün gelecek ay.', 'dü-ĞÜN ge-le-CEK AY', 'العرس الشهر القادم.', 'زەماوەندەکە مانگی داهاتوو.']),
    w('evlilik', 'ev-li-LİK', 'زواج', 'هاوسەرگیری',
      ['Evlilik sabır ister.', 'ev-li-LİK sa-BIR is-TER', 'الزواج يحتاج صبراً.', 'هاوسەرگیری ئارام دەوێت.']),
    w('boşanma', 'bo-şan-MA', 'طلاق', 'جیابوونەوە',
      ['Boşanma oranları arttı.', 'bo-şan-MA o-ran-la-RI art-TI', 'ارتفعت نسب الطلاق.', 'ڕێژەی جیابوونەوە زیادی کرد.']),
    w('ayrılık', 'ay-rı-LIK', 'فراق', 'جیابوونەوە',
      ['Ayrılık zor bir duygu.', 'ay-rı-LIK ZOR bir duy-GU', 'الفراق شعور صعب.', 'جیابوونەوە هەستێکی سەختە.']),
    w('sevgili', 'sev-gi-Lİ', 'حبيب، صديق حميم', 'دڵدار',
      ['Sevgilisiyle tanıştım.', 'sev-gi-li-siy-LE ta-nış-TIM', 'تعرّفت على حبيبته.', 'لەگەڵ دڵدارەکەی ئاشنا بووم.']),
  ]),
  ...pack('relationships', 'b1', 'verb', [
    w('tanışmak', 'ta-nış-MAK', 'يتعارف', 'ئاشنابوون',
      ['Üniversitede tanıştık.', 'ü-ni-ver-si-te-DE ta-nış-TIK', 'تعارفنا في الجامعة.', 'لە زانکۆ ئاشنا بووین.']),
    w('görüşmek', 'gö-rüş-MEK', 'يلتقي، يتقابل', 'یەکتربینین',
      ['Yarın görüşelim mi?', 'ya-RIN gö-rü-şe-LİM mi', 'هل نلتقي غداً؟', 'سبەینێ یەکتر ببینین؟']),
    w('vedalaşmak', 've-da-laş-MAK', 'يودّع', 'ماڵئاوایی کردن',
      ['Havaalanında vedalaştık.', 'ha-va-a-la-nın-DA ve-da-laş-TIK', 'ودّعنا بعضنا في المطار.', 'لە فڕۆکەخانە ماڵئاواییمان لێک کرد.']),
    w('evlenmek', 'ev-len-MEK', 'يتزوّج', 'هاوسەرگیری کردن',
      ['Geçen yıl evlendiler.', 'ge-ÇEN YIL ev-len-di-LER', 'تزوّجا العام الماضي.', 'ساڵی پار هاوسەرگیرییان کرد.']),
    w('nişanlanmak', 'ni-şan-lan-MAK', 'يخطب، يُخطب', 'نیشان کردن',
      ['Kuzenim nişanlandı.', 'ku-ze-NİM ni-şan-lan-DI', 'ابن عمّي خُطب.', 'ئامۆزام نیشانی کرد.']),
    w('boşanmak', 'bo-şan-MAK', 'يُطلَّق، ينفصل', 'جیابوونەوە',
      ['İki yıl sonra boşandılar.', 'i-Kİ YIL son-RA bo-şan-dı-LAR', 'انفصلا بعد سنتين.', 'دوای دوو ساڵ جیا بوونەوە.']),
    w('kıskanmak', 'kıs-kan-MAK', 'يغار', 'ئیرەیی بردن',
      ['Kardeşini kıskanıyor.', 'kar-de-şi-Nİ kıs-ka-nı-YOR', 'يغار من أخيه.', 'ئیرەیی بە براکەی دەبات.']),
    w('küsmek', 'küs-MEK', 'يقاطع، يزعل', 'قین لێبوون',
      ['Bana küstü, konuşmuyor.', 'ba-NA küs-TÜ ko-nuş-mu-YOR', 'زعل منّي ولا يكلّمني.', 'قینی لێم بوو، قسەم لەگەڵ ناکات.']),
    w('barışmak', 'ba-rış-MAK', 'يتصالح', 'ئاشتبوونەوە',
      ['Sonunda barıştılar.', 'so-nun-DA ba-rış-tı-LAR', 'تصالحا في النهاية.', 'لە کۆتاییدا ئاشت بوونەوە.']),
    w('darılmak', 'da-rıl-MAK', 'يعتب، يزعل', 'دڵگرانبوون',
      ['Şakaya darılma.', 'şa-ka-YA da-rıl-MA', 'لا تزعل من المزحة.', 'لە گاڵتەکە دڵگران مەبە.']),
  ]),
];

/* ---------------- internet and social media ---------------- */

const INTERNET: VocabItem[] = [
  ...pack('technology', 'b1', 'noun', [
    w('gönderi', 'gön-de-Rİ', 'منشور', 'پۆست',
      ['Yeni bir gönderi paylaştı.', 'ye-Nİ bir gön-de-Rİ pay-laş-TI', 'شارك منشوراً جديداً.', 'پۆستێکی نوێی بڵاوکردەوە.']),
    w('beğeni', 'be-ğe-Nİ', 'إعجاب، لايك', 'بەدڵبوون',
      ['Fotoğrafı çok beğeni aldı.', 'fo-toğ-ra-FI ÇOK be-ğe-Nİ al-DI', 'حازت الصورة إعجابات كثيرة.', 'وێنەکە زۆر بەدڵبوونی وەرگرت.']),
    w('takipçi', 'ta-kip-Çİ', 'متابِع', 'شوێنکەوتوو',
      ['Binlerce takipçisi var.', 'bin-ler-CE ta-kip-çi-Sİ var', 'لديه آلاف المتابعين.', 'هەزاران شوێنکەوتووی هەیە.']),
    w('paylaşım', 'pay-la-ŞIM', 'مشاركة، منشور', 'بڵاوکردنەوە',
      ['Paylaşımını sildi.', 'pay-la-şı-mı-NI sil-Dİ', 'حذف منشوره.', 'بڵاوکراوەکەی سڕییەوە.']),
    w('bildirim', 'bil-di-RİM', 'إشعار', 'ئاگادارکردنەوە',
      ['Bildirimleri kapattım.', 'bil-di-rim-le-Rİ ka-pat-TIM', 'أغلقت الإشعارات.', 'ئاگادارکردنەوەکانم داخست.']),
    w('içerik', 'i-çe-RİK', 'محتوى', 'ناوەڕۆک',
      ['Kaliteli içerik üretiyor.', 'ka-li-te-Lİ i-çe-RİK ü-re-ti-YOR', 'ينتج محتوى جيّداً.', 'ناوەڕۆکی باش بەرهەم دەهێنێت.']),
    w('abone', 'a-bo-NE', 'مشترك', 'بەشداربوو',
      ['Kanala abone oldum.', 'ka-na-LA a-bo-NE ol-DUM', 'اشتركت في القناة.', 'بەشداری کەناڵەکە بووم.']),
    w('tarayıcı', 'ta-ra-yı-CI', 'متصفّح', 'وێبگەڕ',
      ['Tarayıcıyı güncelle.', 'ta-ra-yı-cı-YI gün-cel-LE', 'حدّث المتصفّح.', 'وێبگەڕەکە نوێ بکەرەوە.']),
    w('sunucu', 'su-nu-CU', 'خادم (سيرفر)', 'ڕاژە',
      ['Sunucu şu an çalışmıyor.', 'su-nu-CU ŞU an ça-lış-mı-YOR', 'الخادم لا يعمل الآن.', 'ڕاژەکە ئێستا کار ناکات.']),
    w('etkileşim', 'et-ki-le-ŞİM', 'تفاعل', 'کارلێک',
      ['Gönderi yüksek etkileşim aldı.', 'gön-de-Rİ yük-SEK et-ki-le-ŞİM al-DI', 'حاز المنشور تفاعلاً عالياً.', 'پۆستەکە کارلێکێکی بەرزی وەرگرت.']),
  ]),
  ...pack('technology', 'b1', 'verb', [
    w('yüklemek', 'yük-le-MEK', 'يرفع، يحمّل', 'بارکردن',
      ['Videoyu yükledim.', 'vi-de-o-YU yük-le-DİM', 'رفعت الفيديو.', 'ڤیدیۆکەم بارکرد.']),
    w('tıklamak', 'tık-la-MAK', 'ينقر', 'کلیک کردن',
      ['Linke tıkla.', 'lin-KE tık-LA', 'انقر على الرابط.', 'کلیک لە بەستەرەکە بکە.']),
    w('kaydetmek', 'kay-det-MEK', 'يحفظ', 'پاشەکەوتکردن',
      ['Dosyayı kaydetmeyi unutma.', 'dos-ya-YI kay-det-me-Yİ u-nut-MA', 'لا تنسَ حفظ الملفّ.', 'لەبیرت نەچێت فایلەکە پاشەکەوت بکەیت.']),
    w('silmek', 'sil-MEK', 'يحذف، يمسح', 'سڕینەوە',
      ['Yanlışlıkla sildim.', 'yan-lış-lık-LA sil-DİM', 'حذفته بالخطأ.', 'بە هەڵە سڕیمەوە.']),
    w('güncellemek', 'gün-cel-le-MEK', 'يُحدّث', 'نوێکردنەوە',
      ['Uygulamayı güncelledin mi?', 'uy-gu-la-ma-YI gün-cel-le-DİN mi', 'هل حدّثت التطبيق؟', 'ئەپەکەت نوێ کردەوە؟']),
  ]),
];

export const B1_VOCABULARY_MORE: VocabItem[] = [
  ...PERSONALITY,
  ...RELATIONSHIPS,
  ...INTERNET,
];
