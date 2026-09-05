import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * B1 vocabulary, part two.
 *
 * Where `vocabulary.ts` covers the concrete domains (work, tech, university,
 * nature), this file adds what a B1 learner needs to *reason and narrate*:
 * media literacy, health and feelings beyond "good/bad", and the abstract
 * verbs and adjectives that hold an opinion together.
 */

const media = pack('media', 'b1', 'noun', [
  w('haber', 'ha-BER', 'خبر', 'هەواڵ', ['Akşam haberlerini izliyorum.', 'ak-ŞAM ha-ber-le-ri-Nİ iz-li-YO-rum', 'أشاهد نشرة أخبار المساء.', 'سەیری هەواڵی ئێوارە دەکەم.']),
  w('gazete', 'ga-ze-TE', 'صحيفة', 'ڕۆژنامە', ['Her sabah gazete okurum.', 'her sa-BAH ga-ze-TE o-ku-rum', 'أقرأ الصحيفة كل صباح.', 'هەموو بەیانییەک ڕۆژنامە دەخوێنمەوە.']),
  w('dergi', 'der-Gİ', 'مجلة', 'گۆڤار', ['Bu dergi aylık yayımlanıyor.', 'BU der-Gİ ay-LIK ya-yım-la-nı-YOR', 'تصدر هذه المجلة شهرياً.', 'ئەم گۆڤارە مانگانە بڵاو دەکرێتەوە.']),
  w('kanal', 'ka-NAL', 'قناة', 'کەناڵ', ['Hangi kanalı izliyorsun?', 'han-Gİ ka-na-LI iz-li-yor-sun', 'أي قناة تشاهد؟', 'سەیری کام کەناڵ دەکەیت؟']),
  w('yayın', 'ya-YIN', 'بثّ / نشر', 'بڵاوکردنەوە', ['Canlı yayın saat sekizde.', 'djan-LI ya-YIN sa-AT se-kiz-DE', 'البثّ المباشر الساعة الثامنة.', 'بڵاوکردنەوەی ڕاستەوخۆ کاتژمێر هەشتە.']),
  w('röportaj', 'rö-por-TAJ', 'مقابلة صحفية', 'چاوپێکەوتنی ڕۆژنامەوانی', ['Yazarla uzun bir röportaj yaptılar.', 'ya-zar-LA u-ZUN bir rö-por-TAJ yap-tı-lar', 'أجروا مقابلة طويلة مع الكاتب.', 'چاوپێکەوتنێکی درێژیان لەگەڵ نووسەرەکە کرد.']),
  w('muhabir', 'mu-ha-BİR', 'مراسل', 'ڕاپۆرتەر', ['Muhabir olay yerinden bildiriyor.', 'mu-ha-BİR o-LAY ye-rin-DEN bil-di-ri-YOR', 'المراسل ينقل من مكان الحادث.', 'ڕاپۆرتەرەکە لە شوێنی ڕووداوەکەوە ڕاپۆرت دەدات.']),
  w('manşet', 'man-ŞET', 'عنوان رئيسي', 'سەردێڕی سەرەکی', ['Haber bütün gazetelerde manşet oldu.', 'ha-BER bü-TÜN ga-ze-te-ler-DE man-ŞET ol-du', 'صار الخبر عنواناً رئيسياً في كل الصحف.', 'هەواڵەکە لە هەموو ڕۆژنامەکاندا بوو بە سەردێڕی سەرەکی.']),
  w('reklam', 'rek-LAM', 'إعلان', 'ڕیکلام', ['Reklamlar filmi böldü.', 'rek-lam-LAR fil-Mİ böl-DÜ', 'قطعت الإعلانات الفيلم.', 'ڕیکلامەکان فیلمەکەیان پچڕاند.']),
  w('izleyici', 'iz-le-yi-DJİ', 'مشاهد', 'بینەر', ['Program milyonlarca izleyiciye ulaştı.', 'prog-RAM mil-yon-lar-DJA iz-le-yi-dji-YE u-laş-TI', 'وصل البرنامج إلى ملايين المشاهدين.', 'بەرنامەکە گەیشتە ملیۆنان بینەر.']),
  w('okuyucu', 'o-ku-yu-DJU', 'قارئ', 'خوێنەر', ['Okuyucuların yorumlarını okudum.', 'o-ku-yu-dju-la-RIN yo-rum-la-rı-NI o-ku-DUM', 'قرأت تعليقات القرّاء.', 'لێدوانەکانی خوێنەرانم خوێندەوە.']),
  w('yorum', 'yo-RUM', 'تعليق / تفسير', 'لێدوان', ['Bu konuda yorum yapmak istemiyorum.', 'BU ko-nu-DA yo-RUM yap-MAK is-te-mi-YO-rum', 'لا أريد التعليق على هذا الموضوع.', 'ناموێت لەم بابەتەدا لێدوان بدەم.']),
  w('kaynak', 'kay-NAK', 'مصدر', 'سەرچاوە', ['Haberin kaynağı güvenilir mi?', 'ha-be-RİN kay-na-I gü-ve-ni-LİR mi', 'هل مصدر الخبر موثوق؟', 'سەرچاوەی هەواڵەکە متمانەپێکراوە؟']),
  w('duyuru', 'du-yu-RU', 'إعلان / إشعار', 'ڕاگەیاندن', ['Okul duyurusunu panoda gördüm.', 'o-KUL du-yu-ru-su-NU pa-no-DA gör-DÜM', 'رأيت إعلان المدرسة على اللوحة.', 'ڕاگەیاندنی قوتابخانەم لەسەر تابلۆکە بینی.']),
  w('yayımlamak', 'ya-yım-la-MAK', 'ينشر', 'بڵاوکردنەوە', ['Makaleyi geçen hafta yayımladılar.', 'ma-ka-le-Yİ ge-ÇEN haf-TA ya-yım-la-dı-lar', 'نشروا المقالة الأسبوع الماضي.', 'وتارەکەیان هەفتەی ڕابردوو بڵاوکردەوە.'], 'verb'),
  w('abone olmak', 'a-bo-NE ol-mak', 'يشترك', 'بەشداربوون', ['Bu kanala abone oldum.', 'BU ka-na-LA a-bo-NE ol-dum', 'اشتركت في هذه القناة.', 'بەشداری ئەم کەناڵەم کرد.'], 'verb'),
  w('güncel', 'günd-JEL', 'راهن / محدَّث', 'ڕۆژەڤ', ['Güncel olayları takip ediyorum.', 'günd-JEL o-lay-la-RI ta-KİP e-di-yo-rum', 'أتابع الأحداث الراهنة.', 'ڕووداوەکانی ڕۆژەڤ شوێن دەکەوم.'], 'adjective'),
  w('tarafsız', 'ta-raf-SIZ', 'محايد', 'بێلایەن', ['Tarafsız bir haber sitesi arıyorum.', 'ta-raf-SIZ bir ha-BER si-te-Sİ a-rı-YO-rum', 'أبحث عن موقع أخبار محايد.', 'بەدوای ماڵپەڕێکی هەواڵی بێلایەندا دەگەڕێم.'], 'adjective'),
]);

const healthB1 = pack('health', 'b1', 'noun', [
  w('bağışıklık', 'ba-ı-şık-LIK', 'مناعة', 'بەرگری لەش', ['Bağışıklık sistemini güçlendirmelisin.', 'ba-ı-şık-LIK sis-te-mi-Nİ güç-len-dir-me-li-SİN', 'يجب أن تقوّي جهاز مناعتك.', 'دەبێت سیستەمی بەرگری لەشت بەهێز بکەیت.']),
  w('tedavi', 'te-da-Vİ', 'علاج', 'چارەسەر', ['Tedavi altı hafta sürdü.', 'te-da-Vİ al-TI haf-TA sür-DÜ', 'استمر العلاج ستة أسابيع.', 'چارەسەرەکە شەش هەفتەی خایاند.']),
  w('teşhis', 'teş-HİS', 'تشخيص', 'دەستنیشانکردن', ['Doktor doğru teşhis koydu.', 'dok-TOR do-RU teş-HİS koy-DU', 'وضع الطبيب تشخيصاً صحيحاً.', 'پزیشکەکە دەستنیشانکردنێکی دروستی کرد.']),
  w('belirti', 'be-lir-Tİ', 'عَرَض (طبي)', 'نیشانە', ['İlk belirtiler üç gün önce başladı.', 'İLK be-lir-ti-LER ÜÇ GÜN ön-DJE baş-la-DI', 'بدأت الأعراض الأولى قبل ثلاثة أيام.', 'یەکەم نیشانەکان سێ ڕۆژ لەمەوپێش دەستیان پێکرد.']),
  w('ameliyat', 'a-me-li-YAT', 'عملية جراحية', 'نەشتەرگەری', ['Ameliyat iyi geçti.', 'a-me-li-YAT i-Yİ geç-Tİ', 'مرّت العملية بخير.', 'نەشتەرگەرییەکە باش تێپەڕی.']),
  w('aşı', 'a-ŞI', 'لقاح', 'ڤاکسین', ['Çocuklara aşı yapıldı.', 'ço-djuk-la-RA a-ŞI ya-pıl-DI', 'تم تلقيح الأطفال.', 'ڤاکسین بۆ منداڵەکان کرا.']),
  w('beslenme', 'bes-len-ME', 'تغذية', 'خۆراک', ['Dengeli beslenme çok önemli.', 'den-ge-Lİ bes-len-ME ÇOK ö-nem-Lİ', 'التغذية المتوازنة مهمة جداً.', 'خۆراکی هاوسەنگ زۆر گرنگە.']),
  w('bağımlılık', 'ba-ım-lı-LIK', 'إدمان', 'ئالوودەبوون', ['Sigara bağımlılığından kurtuldu.', 'si-ga-RA ba-ım-lı-lı-ın-DAN kur-tul-DU', 'تخلّص من إدمان التدخين.', 'لە ئالوودەبوونی جگەرە ڕزگاری بوو.']),
  w('stres', 'ST-RES', 'توتّر / ضغط نفسي', 'ستریس', ['İş yerinde çok stres var.', 'İŞ ye-rin-DE ÇOK ST-RES VAR', 'يوجد توتر كثير في مكان العمل.', 'لە شوێنی کاردا ستریسی زۆر هەیە.']),
  w('iyileşme', 'i-yi-leş-ME', 'تعافٍ / تحسّن', 'چاکبوونەوە', ['İyileşme süreci uzun sürdü.', 'i-yi-leş-ME sü-re-DJİ u-ZUN sür-DÜ', 'استغرقت عملية التعافي وقتاً طويلاً.', 'پرۆسەی چاکبوونەوە ماوەیەکی درێژی خایاند.']),
  w('nefes almak', 'ne-FES al-mak', 'يتنفّس', 'هەناسەدان', ['Derin nefes al ve sakinleş.', 'de-RİN ne-FES AL ve sa-kin-LEŞ', 'خذ نفساً عميقاً واهدأ.', 'هەناسەیەکی قووڵ هەڵمژە و ئارام ببە.'], 'verb'),
  w('zayıflamak', 'za-yıf-la-MAK', 'ينحف / يفقد وزناً', 'لاوازبوون', ['Üç ayda beş kilo zayıfladı.', 'ÜÇ ay-DA BEŞ ki-LO za-yıf-la-DI', 'فقد خمسة كيلوغرامات في ثلاثة أشهر.', 'لە سێ مانگدا پێنج کیلۆ لاواز بوو.'], 'verb'),
  {
    ...w('dayanmak', 'da-yan-MAK', 'يتحمّل / يصمد', 'بەرگەگرتن', ['Bu ağrıya daha fazla dayanamam.', 'BU a-rı-YA da-HA faz-LA da-ya-na-MAM', 'لا أستطيع تحمّل هذا الألم أكثر.', 'چیتر ناتوانم بەرگەی ئەم ئازارە بگرم.'], 'verb'),
    // The second sense, restored: the two readings take different cases,
    // which is exactly why they need teaching together.
    senses: [
      sense('يستند إلى / يتّكئ على', 'پشتبەستن بە',
        ['Duvara dayandı ve bekledi.', 'du-va-RA da-yan-DI ve bek-le-Dİ', 'استند إلى الجدار وانتظر.', 'پشتی بە دیوارەکە بەست و چاوەڕێی کرد.'],
        {
          usage: b(
            'بحرف الجرّ -e: duvara dayanmak. أمّا معنى التحمّل فيأتي مع -e أيضاً لكن مع أسماء المعاناة: ağrıya dayanmak.',
            'لەگەڵ -e: duvara dayanmak. واتای بەرگەگرتنیش لەگەڵ -e دێت بەڵام لەگەڵ ناوی ئازار: ağrıya dayanmak.',
          ),
        }),
    ],
  },
  w('yorucu', 'yo-ru-DJU', 'مُتعِب', 'ماندووکەر', ['Çok yorucu bir gündü.', 'ÇOK yo-ru-DJU bir gün-DÜ', 'كان يوماً متعباً جداً.', 'ڕۆژێکی زۆر ماندووکەر بوو.'], 'adjective'),
]);

const emotionsB1 = pack('emotions', 'b1', 'noun', [
  w('umut', 'u-MUT', 'أمل', 'هیوا', ['Hâlâ umudumu kaybetmedim.', 'hâ-LÂ u-mu-du-MU kay-bet-me-DİM', 'ما زلت لم أفقد أملي.', 'هێشتا هیوام لەدەست نەداوە.']),
  w('hayal kırıklığı', 'ha-YAL kı-rık-lı-ı', 'خيبة أمل', 'دڵشکاندن', ['Sonuç büyük bir hayal kırıklığı oldu.', 'so-NUÇ bü-YÜK bir ha-YAL kı-rık-lı-I ol-du', 'كانت النتيجة خيبة أمل كبيرة.', 'ئەنجامەکە دڵشکاندنێکی گەورە بوو.']),
  w('pişmanlık', 'piş-man-LIK', 'ندم', 'پەشیمانی', ['Hiçbir pişmanlığım yok.', 'hiç-BİR piş-man-lı-IM YOK', 'ليس لديّ أي ندم.', 'هیچ پەشیمانییەکم نییە.']),
  w('güvensizlik', 'gü-ven-siz-LİK', 'انعدام ثقة', 'بێمتمانەیی', ['Aralarında bir güvensizlik var.', 'a-ra-la-rın-DA bir gü-ven-siz-LİK VAR', 'هناك انعدام ثقة بينهما.', 'بێمتمانەییەک لە نێوانیاندا هەیە.']),
  w('kaygı', 'kay-GI', 'قلق', 'دڵەڕاوکێ', ['Gelecek kaygısı beni yoruyor.', 'ge-le-DJEK kay-gı-SI be-Nİ yo-ru-YOR', 'قلق المستقبل يرهقني.', 'دڵەڕاوکێی داهاتوو ماندووم دەکات.']),
  w('rahatlama', 'ra-hat-la-MA', 'ارتياح', 'ئاسوودەبوون', ['Sınav bitince büyük bir rahatlama hissettim.', 'sı-NAV bi-tin-DJE bü-YÜK bir ra-hat-la-MA his-set-TİM', 'شعرت بارتياح كبير حين انتهى الامتحان.', 'کە تاقیکردنەوەکە تەواو بوو هەستم بە ئاسوودەیی گەورە کرد.']),
  w('minnettar', 'min-net-TAR', 'ممتنّ', 'سوپاسگوزار', ['Yardımınız için minnettarım.', 'yar-dı-mı-NIZ i-ÇİN min-net-ta-RIM', 'أنا ممتنّ لمساعدتكم.', 'سوپاسگوزارم بۆ یارمەتیتان.'], 'adjective'),
  w('kararsız', 'ka-rar-SIZ', 'متردّد', 'دوودڵ', ['Bu konuda hâlâ kararsızım.', 'BU ko-nu-DA hâ-LÂ ka-rar-sı-ZIM', 'ما زلت متردداً في هذا الأمر.', 'لەم بابەتەدا هێشتا دوودڵم.'], 'adjective'),
  w('umutsuz', 'u-mut-SUZ', 'يائس', 'بێهیوا', ['Umutsuz olma, çözüm var.', 'u-mut-SUZ ol-MA çö-ZÜM VAR', 'لا تيأس، هناك حلّ.', 'بێهیوا مەبە، چارەسەر هەیە.'], 'adjective'),
  w('şaşırmak', 'şa-şır-MAK', 'يندهش', 'سەرسامبوون', ['Haberi duyunca çok şaşırdım.', 'ha-be-Rİ du-yun-DJA ÇOK şa-şır-DIM', 'اندهشت كثيراً حين سمعت الخبر.', 'کە هەواڵەکەم بیست زۆر سەرسام بووم.'], 'verb'),
  w('utanmak', 'u-tan-MAK', 'يخجل', 'شەرمکردن', ['Hata yaptığım için utandım.', 'ha-TA yap-tı-IM i-ÇİN u-tan-DIM', 'خجلت لأنني أخطأت.', 'شەرمم کرد چونکە هەڵەم کرد.'], 'verb'),
  w('güvenmek', 'gü-ven-MEK', 'يثق بـ', 'متمانەکردن', ['Sana tamamen güveniyorum.', 'sa-NA ta-ma-MEN gü-ve-ni-YO-rum', 'أثق بك تماماً.', 'بە تەواوی متمانەت پێدەکەم.'], 'verb'),
]);

const verbsB1Extra = pack('verbs', 'b1', 'verb', [
  w('sağlamak', 'sa-la-MAK', 'يوفّر / يؤمّن', 'دابینکردن', ['Şirket ulaşım sağlıyor.', 'şir-KET u-la-ŞIM sa-lı-YOR', 'الشركة توفّر المواصلات.', 'کۆمپانیاکە گواستنەوە دابین دەکات.']),
  w('artmak', 'art-MAK', 'يزداد', 'زیادبوون', ['Fiyatlar hızla arttı.', 'fi-yat-LAR hız-LA art-TI', 'ارتفعت الأسعار بسرعة.', 'نرخەکان بە خێرایی زیادیان کرد.']),
  w('azalmak', 'a-zal-MAK', 'يقلّ', 'کەمبوونەوە', ['İşsizlik biraz azaldı.', 'iş-siz-LİK bi-RAZ a-zal-DI', 'انخفضت البطالة قليلاً.', 'بێکاری کەمێک کەمی کردەوە.']),
  w('gerçekleşmek', 'ger-çek-leş-MEK', 'يتحقّق', 'هاتنەدی', ['Hayalim sonunda gerçekleşti.', 'ha-ya-LİM so-nun-DA ger-çek-leş-Tİ', 'تحقّق حلمي أخيراً.', 'لە کۆتاییدا خەونەکەم هاتە دی.']),
  w('kurmak', 'kur-MAK', 'يؤسّس / ينصب', 'دامەزراندن', ['Küçük bir şirket kurdu.', 'kü-ÇÜK bir şir-KET kur-DU', 'أسّس شركة صغيرة.', 'کۆمپانیایەکی بچووکی دامەزراند.']),
  w('korumak', 'ko-ru-MAK', 'يحمي', 'پاراستن', ['Çevremizi korumalıyız.', 'çev-re-mi-Zİ ko-ru-ma-lı-YIZ', 'يجب أن نحمي بيئتنا.', 'دەبێت ژینگەمان بپارێزین.']),
  w('karşılaştırmak', 'kar-şı-laş-tır-MAK', 'يقارن', 'بەراوردکردن', ['İki teklifi karşılaştırdım.', 'i-Kİ tek-li-Fİ kar-şı-laş-tır-DIM', 'قارنت بين العرضين.', 'دوو پێشنیارەکەم بەراورد کرد.']),
  w('vazgeçmek', 'vaz-geç-MEK', 'يتخلّى عن', 'وازهێنان', ['Bu fikirden vazgeçtim.', 'BU fi-kir-DEN vaz-geç-TİM', 'تخلّيت عن هذه الفكرة.', 'وازم لەم بیرۆکەیە هێنا.']),
  w('alışmak', 'a-lış-MAK', 'يعتاد على', 'ڕاهاتن', ['Yeni işime alıştım.', 'ye-Nİ i-şi-ME a-lış-TIM', 'اعتدت على عملي الجديد.', 'ڕاهاتم بە کارە نوێیەکەم.']),
  w('davranmak', 'dav-ran-MAK', 'يتصرّف', 'ڕەفتارکردن', ['Herkese saygılı davranıyor.', 'her-ke-SE say-gı-LI dav-ra-nı-YOR', 'يتصرّف باحترام مع الجميع.', 'بە ڕێزەوە لەگەڵ هەموان ڕەفتار دەکات.']),
  w('sürmek', 'sür-MEK', 'يستمرّ / يقود', 'خایاندن / لێخوڕین', ['Toplantı iki saat sürdü.', 'top-lan-TI i-Kİ sa-AT sür-DÜ', 'استمر الاجتماع ساعتين.', 'کۆبوونەوەکە دوو کاتژمێری خایاند.']),
  w('engellemek', 'en-gel-le-MEK', 'يمنع / يعرقل', 'ڕێگریکردن', ['Yağmur maçı engelledi.', 'YAA-mur ma-ÇI en-gel-le-Dİ', 'عرقل المطر المباراة.', 'باران ڕێگری لە یارییەکە کرد.']),
  w('teşekkür etmek', 'te-şek-KÜR et-mek', 'يشكر', 'سوپاسکردن', ['Herkese ayrı ayrı teşekkür etti.', 'her-ke-SE ay-RI ay-RI te-şek-KÜR et-ti', 'شكر الجميع واحداً واحداً.', 'یەک بە یەک سوپاسی هەموانی کرد.']),
  w('ilgilenmek', 'il-gi-len-MEK', 'يهتم بـ', 'گرنگیدان', ['Tarihle çok ilgileniyorum.', 'ta-rih-LE ÇOK il-gi-le-ni-YO-rum', 'أهتم كثيراً بالتاريخ.', 'زۆر گرنگی بە مێژوو دەدەم.']),
  w('şikâyet etmek', 'şi-kâ-YET et-mek', 'يشتكي', 'سکاڵاکردن', ['Gürültüden şikâyet ettiler.', 'gü-rül-tü-DEN şi-kâ-YET et-ti-ler', 'اشتكوا من الضجيج.', 'سکاڵایان لە دەنگەدەنگ کرد.']),
  w('önermek', 'ö-ner-MEK', 'يقترح', 'پێشنیارکردن', ['Sana bu kitabı öneririm.', 'sa-NA BU ki-ta-BI ö-ne-ri-rim', 'أقترح عليك هذا الكتاب.', 'ئەم کتێبەت پێشنیار دەکەم.']),
  w('kabul etmek', 'ka-BUL et-mek', 'يقبل', 'قبووڵکردن', ['Teklifi kabul ettim.', 'tek-li-Fİ ka-BUL et-tim', 'قبلت العرض.', 'پێشنیارەکەم قبووڵ کرد.']),
  w('reddetmek', 'red-det-MEK', 'يرفض', 'ڕەتکردنەوە', ['Nazikçe reddetti.', 'na-zik-ÇE red-det-Tİ', 'رفض بلطف.', 'بە نەرمی ڕەتی کردەوە.']),
  w('fark etmek', 'FARK et-mek', 'يلاحظ', 'تێبینیکردن', ['Değişikliği hemen fark ettim.', 'de-i-şik-li-İ he-MEN FARK et-tim', 'لاحظت التغيير فوراً.', 'دەستبەجێ گۆڕانکارییەکەم بەدیکرد.']),
]);

const adjectivesB1Extra = pack('adjectives', 'b1', 'adjective', [
  w('etkili', 'et-ki-Lİ', 'مؤثّر / فعّال', 'کاریگەر', ['Çok etkili bir konuşma yaptı.', 'ÇOK et-ki-Lİ bir ko-nuş-MA yap-TI', 'ألقى خطاباً مؤثراً جداً.', 'وتارێکی زۆر کاریگەری پێشکەش کرد.']),
  w('verimli', 've-rim-Lİ', 'منتِج / مثمر', 'بەرهەمدار', ['Bugün çok verimli bir gün geçirdim.', 'bu-GÜN ÇOK ve-rim-Lİ bir GÜN ge-çir-DİM', 'قضيت اليوم يوماً مثمراً جداً.', 'ئەمڕۆ ڕۆژێکی زۆر بەرهەمدارم بەسەربرد.']),
  w('dikkatli', 'dik-kat-Lİ', 'حذر / منتبه', 'وریا', ['Dikkatli ol, yol kaygan.', 'dik-kat-LI OL YOL kay-GAN', 'كن حذراً، الطريق زلق.', 'وریابە، ڕێگاکە لووسە.']),
  w('dikkatsiz', 'dik-kat-SIZ', 'غير مبالٍ / مهمل', 'بێوریا', ['Dikkatsiz bir hata yaptı.', 'dik-kat-SIZ bir ha-TA yap-TI', 'ارتكب خطأ ناتجاً عن الإهمال.', 'هەڵەیەکی بێوریایانەی کرد.']),
  w('sabırlı', 'sa-bır-LI', 'صبور', 'ئارام', ['Öğretmenimiz çok sabırlı.', 'öö-ret-me-ni-MİZ ÇOK sa-bır-LI', 'معلّمنا صبور جداً.', 'مامۆستاکەمان زۆر ئارامە.']),
  w('cesur', 'dje-SUR', 'شجاع', 'ئازا', ['Cesur bir karar verdi.', 'dje-SUR bir ka-RAR ver-Dİ', 'اتخذ قراراً شجاعاً.', 'بڕیارێکی ئازایانەی دا.']),
  w('dürüst', 'dü-RÜST', 'صادق / نزيه', 'ڕاستگۆ', ['Her zaman dürüst olmaya çalışırım.', 'her za-MAN dü-RÜST ol-ma-YA ça-lı-şı-rım', 'أحاول دائماً أن أكون صادقاً.', 'هەمیشە هەوڵ دەدەم ڕاستگۆ بم.']),
  w('kararlı', 'ka-rar-LI', 'حازم / عازم', 'بڕیاردەر', ['Hedefine ulaşmakta çok kararlı.', 'he-de-fi-NE u-laş-mak-TA ÇOK ka-rar-LI', 'هو عازم جداً على بلوغ هدفه.', 'زۆر بڕیاردەرە لە گەیشتن بە ئامانجەکەی.']),
  w('esnek', 'es-NEK', 'مرن', 'نەرم', ['Çalışma saatlerimiz esnek.', 'ça-lış-MA sa-at-le-ri-MİZ es-NEK', 'ساعات عملنا مرنة.', 'کاتەکانی کارمان نەرمن.']),
  w('katı', 'ka-TI', 'صارم / صلب', 'توند', ['Kurallar çok katı.', 'ku-ral-LAR ÇOK ka-TI', 'القواعد صارمة جداً.', 'یاساکان زۆر توندن.']),
  w('anlamlı', 'an-lam-LI', 'ذو معنى', 'واتادار', ['Bu bana çok anlamlı geldi.', 'BU ba-NA ÇOK an-lam-LI gel-Dİ', 'بدا لي هذا ذا معنى كبير.', 'ئەمە بۆ من زۆر واتادار بوو.']),
  w('anlamsız', 'an-lam-SIZ', 'بلا معنى / عبثي', 'بێواتا', ['Anlamsız bir tartışmaydı.', 'an-lam-SIZ bir tar-tış-may-DI', 'كان نقاشاً بلا معنى.', 'گفتوگۆیەکی بێواتا بوو.']),
  w('yeterince', 'ye-te-rin-DJE', 'بما فيه الكفاية', 'بەپێی پێویست', ['Yeterince dinlenmedin.', 'ye-te-rin-DJE din-len-me-DİN', 'لم ترتح بما فيه الكفاية.', 'بەپێی پێویست پشووت نەدا.'], 'adverb'),
  w('özellikle', 'ö-zel-lik-LE', 'خصوصاً', 'بەتایبەتی', ['Özellikle sabahları çalışırım.', 'ö-zel-lik-LE sa-bah-la-RI ça-lı-şı-rım', 'أعمل خصوصاً في الصباح.', 'بەتایبەتی بەیانیان کار دەکەم.'], 'adverb'),
  w('genellikle', 'ge-nel-lik-LE', 'عادةً', 'بەگشتی', ['Genellikle erken yatarım.', 'ge-nel-lik-LE er-KEN ya-ta-rım', 'عادةً أنام مبكراً.', 'بەگشتی زوو دەنووم.'], 'adverb'),
  w('nadiren', 'na-di-REN', 'نادراً', 'بەدەگمەن', ['Nadiren sinemaya giderim.', 'na-di-REN si-ne-ma-YA gi-de-rim', 'نادراً ما أذهب إلى السينما.', 'بەدەگمەن دەچمە سینەما.'], 'adverb'),
  w('hemen hemen', 'he-MEN he-MEN', 'تقريباً', 'نزیکەی', ['Hemen hemen bitirdim.', 'he-MEN he-MEN bi-tir-DİM', 'أنهيته تقريباً.', 'نزیکەی تەواوم کرد.'], 'adverb'),
  w('aslında', 'as-lın-DA', 'في الحقيقة', 'لە ڕاستیدا', ['Aslında haklısın.', 'as-lın-DA hak-lı-SIN', 'في الحقيقة أنت على حق.', 'لە ڕاستیدا ڕاست دەکەیت.'], 'adverb'),
]);

const nounsB1 = pack('nouns', 'b1', 'noun', [
  w('durum', 'du-RUM', 'وضع / حالة', 'دۆخ', ['Durum şu anda kontrol altında.', 'du-RUM ŞU an-DA kon-TROL al-tın-DA', 'الوضع الآن تحت السيطرة.', 'دۆخەکە ئێستا لەژێر کۆنترۆڵدایە.']),
  w('olay', 'o-LAY', 'حدث / واقعة', 'ڕووداو', ['Olay dün gece yaşandı.', 'o-LAY DÜN ge-DJE ya-şan-DI', 'وقع الحادث ليلة أمس.', 'ڕووداوەکە دوێنێ شەو ڕوویدا.']),
  w('ihtiyaç', 'ih-ti-YAÇ', 'حاجة', 'پێویستی', ['Yardıma ihtiyacım var.', 'yar-dı-MA ih-ti-ya-DJIM VAR', 'أحتاج إلى مساعدة.', 'پێویستم بە یارمەتییە.']),
  w('avantaj', 'a-van-TAJ', 'ميزة', 'سوود', ['Bu yöntemin büyük bir avantajı var.', 'BU yön-te-MİN bü-YÜK bir a-van-ta-JI VAR', 'لهذه الطريقة ميزة كبيرة.', 'ئەم ڕێبازە سوودێکی گەورەی هەیە.']),
  w('dezavantaj', 'de-za-van-TAJ', 'عيب / سلبية', 'زیان', ['Tek dezavantajı fiyatı.', 'TEK de-za-van-ta-JI fi-ya-TI', 'عيبها الوحيد سعرها.', 'تاکە زیانی نرخەکەیەتی.']),
  w('seçenek', 'se-çe-NEK', 'خيار / بديل', 'هەڵبژاردە', ['Üç seçeneğimiz var.', 'ÜÇ se-çe-ne-i-MİZ VAR', 'لدينا ثلاثة خيارات.', 'سێ هەڵبژاردەمان هەیە.']),
  w('kural', 'ku-RAL', 'قاعدة', 'یاسا', ['Kurallara uymak zorundayız.', 'ku-ral-la-RA uy-MAK zo-run-da-YIZ', 'علينا الالتزام بالقواعد.', 'دەبێت پابەندی یاساکان بین.']),
  w('gelişme', 'ge-liş-ME', 'تطوّر', 'پەرەسەندن', ['Son gelişmeleri takip ediyorum.', 'SON ge-liş-me-le-Rİ ta-KİP e-di-yo-rum', 'أتابع آخر التطورات.', 'دوایین پەرەسەندنەکان شوێن دەکەوم.']),
  w('değişiklik', 'de-i-şik-LİK', 'تغيير', 'گۆڕانکاری', ['Programda küçük bir değişiklik oldu.', 'prog-ram-DA kü-ÇÜK bir de-i-şik-LİK ol-du', 'حدث تغيير صغير في البرنامج.', 'گۆڕانکارییەکی بچووک لە بەرنامەکەدا ڕوویدا.']),
  w('kalite', 'ka-li-TE', 'جودة', 'کوالیتی', ['Kalite fiyattan önemlidir.', 'ka-li-TE fi-yat-TAN ö-nem-li-DİR', 'الجودة أهم من السعر.', 'کوالیتی لە نرخ گرنگترە.']),
  w('miktar', 'mik-TAR', 'كمية', 'بڕ', ['Yeterli miktarda malzeme var.', 'ye-ter-Lİ mik-tar-DA mal-ze-ME VAR', 'توجد كمية كافية من المواد.', 'بڕێکی پێویست لە کەرەستە هەیە.']),
  w('süre', 'sü-RE', 'مدة', 'ماوە', ['Başvuru süresi bir hafta.', 'baş-vu-RU sü-re-Sİ bir haf-TA', 'مدة التقديم أسبوع واحد.', 'ماوەی داواکاری هەفتەیەکە.']),
  w('amaç', 'a-MAÇ', 'هدف', 'ئامانج', ['Bu dersin amacı nedir?', 'BU der-SİN a-ma-DJI ne-DİR', 'ما هدف هذا الدرس؟', 'ئامانجی ئەم وانەیە چییە؟']),
  w('yöntem', 'yön-TEM', 'أسلوب / طريقة', 'ڕێباز', ['Bu yöntem daha hızlı.', 'BU yön-TEM da-HA hız-LI', 'هذه الطريقة أسرع.', 'ئەم ڕێبازە خێراترە.']),
  w('ilişki', 'i-liş-Kİ', 'علاقة', 'پەیوەندی', ['İkisi arasında yakın bir ilişki var.', 'i-ki-Sİ a-ra-sın-DA ya-KIN bir i-liş-Kİ VAR', 'بينهما علاقة وثيقة.', 'پەیوەندییەکی نزیک لە نێوانیاندا هەیە.']),
]);

const workB1Extra = pack('work', 'b1', 'noun', [
  w('kariyer', 'ka-ri-YER', 'مسار مهني', 'کاریەر', ['Kariyerine yeni başladı.', 'ka-ri-ye-ri-NE ye-Nİ baş-la-DI', 'بدأ مساره المهني حديثاً.', 'تازە دەستی بە کاریەرەکەی کردووە.']),
  w('terfi', 'ter-Fİ', 'ترقية', 'بەرزکردنەوەی پلە', ['Geçen ay terfi aldı.', 'ge-ÇEN AY ter-Fİ al-DI', 'حصل على ترقية الشهر الماضي.', 'مانگی ڕابردوو پلەی بەرز بووەوە.']),
  w('ekip', 'e-KİP', 'فريق', 'تیم', ['Ekibimiz beş kişiden oluşuyor.', 'e-ki-bi-MİZ BEŞ ki-şi-DEN o-lu-şu-YOR', 'يتكوّن فريقنا من خمسة أشخاص.', 'تیمەکەمان لە پێنج کەس پێکدێت.']),
  w('meslektaş', 'mes-lek-TAŞ', 'زميل مهنة', 'هاوپیشە', ['Meslektaşlarımla iyi anlaşıyorum.', 'mes-lek-taş-la-rım-LA i-Yİ an-la-şı-YO-rum', 'أنسجم جيداً مع زملائي.', 'باش لەگەڵ هاوپیشەکانم دەگونجێم.']),
  w('sözleşmeli', 'söz-leş-me-Lİ', 'بعقد / متعاقد', 'گرێبەستی', ['Sözleşmeli olarak çalışıyorum.', 'söz-leş-me-Lİ o-la-RAK ça-lı-şı-YO-rum', 'أعمل بعقد.', 'بە گرێبەست کار دەکەم.'], 'adjective'),
  w('mesai arkadaşı', 'me-sa-İ ar-ka-da-şı', 'زميل عمل', 'هاوکاری کار', ['Mesai arkadaşım bugün izinli.', 'me-sa-İ ar-ka-da-ŞIM bu-GÜN i-zin-Lİ', 'زميلي في العمل في إجازة اليوم.', 'هاوکارەکەم ئەمڕۆ لە مۆڵەتدایە.']),
  w('yetenek', 'ye-te-NEK', 'موهبة / مهارة', 'بەهرە', ['Dil öğrenmede yeteneği var.', 'DİL öö-ren-me-DE ye-te-ne-İ VAR', 'لديه موهبة في تعلّم اللغات.', 'بەهرەی فێربوونی زمانی هەیە.']),
  w('beceri', 'be-dje-Rİ', 'مهارة', 'شارەزایی', ['İletişim becerileri çok güçlü.', 'i-le-ti-ŞİM be-dje-ri-le-Rİ ÇOK güç-LÜ', 'مهاراته في التواصل قوية جداً.', 'شارەزایی پەیوەندیکردنی زۆر بەهێزە.']),
  w('emek', 'e-MEK', 'جهد / كدّ', 'ماندووبوون', ['Bu projeye çok emek verdim.', 'BU pro-je-YE ÇOK e-MEK ver-DİM', 'بذلت جهداً كبيراً في هذا المشروع.', 'زۆر ماندووبوونم لەم پڕۆژەیەدا خستە گەڕ.']),
  w('işe alım', 'i-ŞE a-lım', 'توظيف', 'وەرگرتنی کارمەند', ['İşe alım süreci bir ay sürdü.', 'i-ŞE a-LIM sü-re-DJİ bir AY sür-DÜ', 'استغرقت عملية التوظيف شهراً.', 'پرۆسەی وەرگرتنی کارمەند مانگێکی خایاند.']),
  w('istifa etmek', 'is-ti-FA et-mek', 'يستقيل', 'دەستلەکارکێشانەوە', ['Geçen hafta istifa etti.', 'ge-ÇEN haf-TA is-ti-FA et-ti', 'استقال الأسبوع الماضي.', 'هەفتەی ڕابردوو دەستی لە کار کێشایەوە.'], 'verb'),
  w('işten çıkarmak', 'iş-TEN çı-kar-mak', 'يفصل من العمل', 'دەرکردن لە کار', ['Şirket yirmi kişiyi işten çıkardı.', 'şir-KET yir-Mİ ki-şi-Yİ iş-TEN çı-kar-DI', 'فصلت الشركة عشرين شخصاً.', 'کۆمپانیاکە بیست کەسی لە کار دەرکرد.'], 'verb'),
]);

const technologyB1Extra = pack('technology', 'b1', 'noun', [
  w('veri', 've-Rİ', 'بيانات', 'داتا', ['Verilerimizi yedeklemeliyiz.', 've-ri-le-ri-mi-Zİ ye-dek-le-me-li-YİZ', 'يجب أن ننسخ بياناتنا احتياطياً.', 'دەبێت داتاکانمان پاڵپشت بکەین.']),
  w('yedeklemek', 'ye-dek-le-MEK', 'ينسخ احتياطياً', 'پاڵپشتکردن', ['Dosyaları buluta yedekledim.', 'dos-ya-la-RI bu-lu-TA ye-dek-le-DİM', 'نسخت الملفات احتياطياً إلى السحابة.', 'فایلەکانم بۆ هەور پاڵپشت کرد.'], 'verb'),
  w('güncelleme', 'günd-jel-le-ME', 'تحديث', 'نوێکردنەوە', ['Güncellemeyi yükledin mi?', 'günd-jel-le-me-Yİ yük-le-DİN mi', 'هل ثبّت التحديث؟', 'نوێکردنەوەکەت دامەزراند؟']),
  w('bağlantı', 'ba-lan-TI', 'اتصال / رابط', 'پەیوەندی / بەستەر', ['İnternet bağlantısı koptu.', 'in-ter-NET ba-lan-tı-SI kop-TU', 'انقطع اتصال الإنترنت.', 'پەیوەندی ئینتەرنێت پچڕا.']),
  w('güvenlik', 'gü-ven-LİK', 'أمان / حماية', 'ئاسایش', ['Hesap güvenliği çok önemli.', 'he-SAP gü-ven-li-İ ÇOK ö-nem-Lİ', 'أمان الحساب مهم جداً.', 'ئاسایشی هەژمار زۆر گرنگە.']),
  w('gizlilik', 'giz-li-LİK', 'خصوصية', 'نهێنیپارێزی', ['Gizlilik ayarlarını değiştirdim.', 'giz-li-LİK a-yar-la-rı-NI de-iş-tir-DİM', 'غيّرت إعدادات الخصوصية.', 'ڕێکخستنەکانی نهێنیپارێزیم گۆڕی.']),
  w('kullanıcı', 'kul-la-nı-DJI', 'مستخدم', 'بەکارهێنەر', ['Uygulamanın bir milyon kullanıcısı var.', 'uy-gu-la-ma-NIN bir mil-YON kul-la-nı-dji-SI VAR', 'للتطبيق مليون مستخدم.', 'ئەپەکە یەک ملیۆن بەکارهێنەری هەیە.']),
  w('arayüz', 'a-ra-YÜZ', 'واجهة', 'ڕووکار', ['Arayüz çok sade ve anlaşılır.', 'a-ra-YÜZ ÇOK sa-DE ve an-la-şı-LIR', 'الواجهة بسيطة ومفهومة جداً.', 'ڕووکارەکە زۆر سادە و تێگەیشتنپێکراوە.']),
  w('cihaz', 'dji-HAZ', 'جهاز', 'ئامێر', ['Bu cihaz çok hızlı.', 'BU dji-HAZ ÇOK hız-LI', 'هذا الجهاز سريع جداً.', 'ئەم ئامێرە زۆر خێرایە.']),
  w('şarj', 'ŞARJ', 'شحن', 'چارج', ['Telefonun şarjı bitti.', 'te-le-fo-NUN şar-JI bit-Tİ', 'نفد شحن الهاتف.', 'چارجی تەلەفۆنەکە تەواو بوو.']),
  w('kablosuz', 'kab-lo-SUZ', 'لاسلكي', 'بێوایەر', ['Kablosuz ağ şifresi nedir?', 'kab-lo-SUZ A şif-re-Sİ ne-DİR', 'ما كلمة سر الشبكة اللاسلكية؟', 'وشەی نهێنی تۆڕی بێوایەر چییە؟'], 'adjective'),
  w('çevrim içi', 'çev-RİM i-çi', 'متصل / أونلاين', 'سەرهێڵ', ['Çevrim içi ders alıyorum.', 'çev-RİM i-Çİ DERS a-lı-YO-rum', 'أتلقّى دروساً عبر الإنترنت.', 'وانەی سەرهێڵ وەردەگرم.'], 'adjective'),
]);

const universityB1Extra = pack('university', 'b1', 'noun', [
  w('danışman', 'da-nış-MAN', 'مشرف / مرشد', 'ڕاوێژکار', ['Tez danışmanımla görüştüm.', 'TEZ da-nış-ma-nım-LA gö-rüş-TÜM', 'التقيت بمشرف رسالتي.', 'لەگەڵ ڕاوێژکاری نامەکەم کۆبوومەوە.']),
  w('final', 'fi-NAL', 'امتحان نهائي', 'تاقیکردنەوەی کۆتایی', ['Finaller ocakta başlıyor.', 'fi-nal-LER o-djak-TA baş-lı-YOR', 'تبدأ الامتحانات النهائية في يناير.', 'تاقیکردنەوە کۆتاییەکان لە کانوونی دووەم دەست پێدەکەن.']),
  w('devamsızlık', 'de-vam-sız-LIK', 'غياب', 'ئامادەنەبوون', ['Devamsızlıktan kaldı.', 'de-vam-sız-lık-TAN kal-DI', 'رسب بسبب الغياب.', 'بەهۆی ئامادەنەبوونەوە دەرنەچوو.']),
  w('bölüm başkanı', 'bö-LÜM baş-ka-nı', 'رئيس القسم', 'سەرۆکی بەش', ['Bölüm başkanıyla konuştum.', 'bö-LÜM baş-ka-nıy-LA ko-nuş-TUM', 'تحدثت مع رئيس القسم.', 'لەگەڵ سەرۆکی بەش قسەم کرد.']),
  w('staj', 'STAJ', 'تدريب عملي', 'ڕاهێنانی پیشەیی', ['Yazın bir şirkette staj yaptım.', 'ya-ZIN bir şir-ket-TE STAJ yap-TIM', 'تدربت في شركة خلال الصيف.', 'لە هاویندا لە کۆمپانیایەکدا ڕاهێنانم کرد.']),
  w('sunum', 'su-NUM', 'عرض تقديمي', 'پێشکەشکردن', ['Yarın sunum yapacağım.', 'ya-RIN su-NUM ya-pa-dja-IM', 'سأقدّم عرضاً غداً.', 'سبەینێ پێشکەشکردنێک دەکەم.']),
  w('ödev teslimi', 'ö-DEV tes-li-mi', 'تسليم الواجب', 'ڕادەستکردنی ئەرک', ['Ödev teslimi cuma günü.', 'ö-DEV tes-li-Mİ dju-MA gü-nü', 'تسليم الواجب يوم الجمعة.', 'ڕادەستکردنی ئەرک ڕۆژی هەینییە.']),
  w('kredi', 'kre-Dİ', 'ساعة معتمدة', 'کریدیت', ['Bu ders üç kredi.', 'BU DERS ÜÇ kre-Dİ', 'هذه المادة ثلاث ساعات معتمدة.', 'ئەم وانەیە سێ کریدیتە.']),
  w('mezuniyet', 'me-zu-ni-YET', 'تخرّج', 'دەرچوون', ['Mezuniyet töreni haziranda.', 'me-zu-ni-YET tö-re-Nİ ha-zi-ran-DA', 'حفل التخرج في يونيو.', 'ئاهەنگی دەرچوون لە حوزەیراندایە.']),
]);

const natureB1Extra = pack('nature', 'b1', 'noun', [
  w('geri dönüşüm', 'ge-Rİ dö-nü-şüm', 'إعادة تدوير', 'پیتاندنەوە', ['Geri dönüşüme önem veriyoruz.', 'ge-Rİ dö-nü-şü-ME ö-NEM ve-ri-YO-ruz', 'نولي إعادة التدوير أهمية.', 'گرنگی بە پیتاندنەوە دەدەین.']),
  w('kirlilik', 'kir-li-LİK', 'تلوّث', 'پیسبوون', ['Hava kirliliği arttı.', 'ha-VA kir-li-li-İ art-TI', 'ازداد تلوث الهواء.', 'پیسبوونی هەوا زیادی کرد.']),
  w('doğal kaynak', 'do-AL kay-nak', 'مورد طبيعي', 'سەرچاوەی سروشتی', ['Doğal kaynaklar sınırlıdır.', 'do-AL kay-nak-LAR sı-nır-lı-DIR', 'الموارد الطبيعية محدودة.', 'سەرچاوە سروشتییەکان سنووردارن.']),
  w('sel', 'SEL', 'فيضان', 'لافاو', ['Sel yolları kapattı.', 'SEL yol-la-RI ka-pat-TI', 'أغلق الفيضان الطرق.', 'لافاو ڕێگاکانی داخست.']),
  w('kuraklık', 'ku-rak-LIK', 'جفاف', 'وشکەساڵی', ['Bölgede uzun bir kuraklık yaşandı.', 'böl-ge-DE u-ZUN bir ku-rak-LIK ya-şan-DI', 'شهدت المنطقة جفافاً طويلاً.', 'ناوچەکە وشکەساڵییەکی درێژی بەخۆوە بینی.']),
  w('tür', 'TÜR', 'نوع / فصيلة', 'جۆر', ['Bu kuş türü yok olma tehlikesinde.', 'BU KUŞ tü-RÜ YOK ol-MA teh-li-ke-sin-DE', 'هذا النوع من الطيور مهدد بالانقراض.', 'ئەم جۆرە باڵندەیە لە مەترسی لەناوچووندایە.']),
  w('sürdürülebilirlik', 'sür-dü-rü-le-bi-lir-LİK', 'استدامة', 'بەردەوامی', ['Sürdürülebilirlik artık bir zorunluluk.', 'sür-dü-rü-le-bi-lir-LİK ar-TIK bir zo-run-lu-LUK', 'الاستدامة صارت ضرورة.', 'بەردەوامی ئێستا پێویستییەکە.']),
  w('enerji', 'e-ner-Jİ', 'طاقة', 'وزە', ['Güneş enerjisi kullanıyoruz.', 'gü-NEŞ e-ner-ji-Sİ kul-la-nı-YO-ruz', 'نستخدم الطاقة الشمسية.', 'وزەی خۆر بەکاردەهێنین.']),
  w('atık', 'a-TIK', 'نفايات', 'پاشەڕۆ', ['Atıkları ayrıştırmalıyız.', 'a-tık-la-RI ay-rış-tır-ma-lı-YIZ', 'يجب أن نفرز النفايات.', 'دەبێت پاشەڕۆکان جیا بکەینەوە.']),
  w('koruma alanı', 'ko-ru-MA a-la-nı', 'محمية طبيعية', 'ناوچەی پارێزراو', ['Burası bir doğa koruma alanı.', 'bu-ra-SI bir do-A ko-ru-MA a-la-NI', 'هذا مكان محمية طبيعية.', 'ئێرە ناوچەیەکی پارێزراوی سروشتییە.']),
]);

export const B1_VOCABULARY_EXTRA: VocabItem[] = [
  ...media, ...healthB1, ...emotionsB1, ...verbsB1Extra, ...adjectivesB1Extra,
  ...nounsB1, ...workB1Extra, ...technologyB1Extra, ...universityB1Extra,
  ...natureB1Extra,
];
