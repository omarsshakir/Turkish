import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * B1 vocabulary - work, study, technology and the natural world, plus the
 * abstract verbs and adjectives needed to express opinions and reasoning.
 */

const work = pack('work', 'b1', 'noun', [
  w('iş hayatı', 'İŞ ha-ya-tı', 'الحياة المهنية', 'ژیانی کار', ['İş hayatı çok yoğun.', 'İŞ ha-ya-TI ÇOK yo-UN', 'الحياة المهنية مزدحمة جداً.', 'ژیانی کار زۆر قەرەباڵغە.']),
  w('şirket', 'şir-KET', 'شركة', 'کۆمپانیا', ['Büyük bir şirkette çalışıyorum.', 'bü-YÜK bir şir-ket-TE ça-lı-şı-YO-rum', 'أعمل في شركة كبيرة.', 'لە کۆمپانیایەکی گەورەدا کار دەکەم.']),
  w('maaş', 'ma-AŞ', 'راتب', 'مووچە', ['Maaşım ayın başında yatıyor.', 'ma-a-ŞIM a-YIN ba-şın-DA ya-tı-YOR', 'راتبي يُصرف في بداية الشهر.', 'مووچەکەم لە سەرەتای مانگدا دەدرێت.']),
  w('toplantı', 'top-lan-TI', 'اجتماع', 'کۆبوونەوە', ['Toplantı saat onda.', 'top-lan-TI sa-AT on-DA', 'الاجتماع الساعة العاشرة.', 'کۆبوونەوەکە کاتژمێر دەیە.']),
  w('proje', 'pro-JE', 'مشروع', 'پڕۆژە', ['Yeni projeye başladık.', 'ye-Nİ pro-je-YE baş-la-DIK', 'بدأنا مشروعاً جديداً.', 'دەستمان بە پڕۆژەیەکی نوێ کرد.']),
  w('görev', 'gö-REV', 'مهمّة / وظيفة', 'ئەرک', ['Bu benim görevim değil.', 'BU be-NİM gö-re-VİM de-İL', 'هذه ليست مهمتي.', 'ئەمە ئەرکی من نییە.']),
  w('sorumluluk', 'so-rum-lu-LUK', 'مسؤولية', 'بەرپرسیارێتی', ['Büyük bir sorumluluk aldım.', 'bü-YÜK bir so-rum-lu-LUK al-DIM', 'تحمّلت مسؤولية كبيرة.', 'بەرپرسیارێتییەکی گەورەم وەرگرت.']),
  w('deneyim', 'de-ne-YİM', 'خبرة', 'ئەزموون', ['Beş yıllık deneyimim var.', 'BEŞ yıl-LIK de-ne-yi-MİM VAR', 'لديّ خبرة خمس سنوات.', 'ئەزموونی پێنج ساڵم هەیە.']),
  w('başvuru', 'baş-vu-RU', 'طلب / تقديم', 'داواکاری', ['İş başvurusu yaptım.', 'İŞ baş-vu-ru-SU yap-TIM', 'قدّمت طلب عمل.', 'داواکاری کارم پێشکەش کرد.']),
  w('mülakat', 'mü-la-KAT', 'مقابلة عمل', 'چاوپێکەوتن', ['Yarın mülakatım var.', 'ya-RIN mü-la-ka-TIM VAR', 'لديّ مقابلة غداً.', 'سبەینێ چاوپێکەوتنم هەیە.']),
  w('mesai', 'me-sa-İ', 'دوام / ساعات عمل', 'کاتی کار', ['Mesai saat altıda bitiyor.', 'me-sa-İ sa-AT al-tı-DA bi-ti-YOR', 'ينتهي الدوام الساعة السادسة.', 'کاتی کار کاتژمێر شەش تەواو دەبێت.']),
  w('izin', 'i-ZİN', 'إجازة / إذن', 'مۆڵەت', ['Bir hafta izin aldım.', 'bir haf-TA i-ZİN al-DIM', 'أخذت إجازة أسبوع.', 'مۆڵەتی هەفتەیەکم وەرگرت.']),
  w('emekli', 'e-mek-Lİ', 'متقاعد', 'خانەنشین', ['Babam geçen yıl emekli oldu.', 'ba-BAM ge-ÇEN YIL e-mek-Lİ ol-du', 'تقاعد أبي العام الماضي.', 'باوکم ساڵی ڕابردوو خانەنشین بوو.'], 'adjective'),
  w('kazanç', 'ka-ZANÇ', 'ربح / كسب', 'قازانج', ['Bu işin kazancı iyi.', 'BU i-ŞİN ka-zan-DJI i-Yİ', 'ربح هذا العمل جيد.', 'قازانجی ئەم کارە باشە.']),
]);

const technology = pack('technology', 'b1', 'noun', [
  w('teknoloji', 'tek-no-lo-Jİ', 'تكنولوجيا', 'تەکنەلۆژیا', ['Teknoloji hızla gelişiyor.', 'tek-no-lo-Jİ hız-LA ge-li-şi-YOR', 'تتطور التكنولوجيا بسرعة.', 'تەکنەلۆژیا بە خێرایی پەرە دەسەنێت.']),
  w('bilgisayar', 'bil-gi-sa-YAR', 'حاسوب', 'کۆمپیوتەر', ['Bilgisayarım bozuldu.', 'bil-gi-sa-ya-RIM bo-zul-DU', 'تعطّل حاسوبي.', 'کۆمپیوتەرەکەم خراپ بوو.']),
  w('internet', 'in-ter-NET', 'إنترنت', 'ئینتەرنێت', ['İnternet çok yavaş.', 'in-ter-NET ÇOK ya-VAŞ', 'الإنترنت بطيء جداً.', 'ئینتەرنێت زۆر هێواشە.']),
  w('uygulama', 'uy-gu-la-MA', 'تطبيق', 'ئەپ', ['Yeni bir uygulama indirdim.', 'ye-Nİ bir uy-gu-la-MA in-dir-DİM', 'حمّلت تطبيقاً جديداً.', 'ئەپێکی نوێم دابەزاند.']),
  w('yazılım', 'ya-zı-LIM', 'برمجيات', 'نەرمەکاڵا', ['Yazılım güncellemesi geldi.', 'ya-zı-LIM gün-djel-le-me-Sİ gel-Dİ', 'وصل تحديث للبرنامج.', 'نوێکردنەوەی نەرمەکاڵا هات.']),
  w('şifre', 'şif-RE', 'كلمة سر', 'وشەی نهێنی', ['Şifremi unuttum.', 'şif-re-Mİ u-nut-TUM', 'نسيت كلمة السر.', 'وشە نهێنییەکەم لەبیر کرد.']),
  w('dosya', 'dos-YA', 'ملف', 'فایل', ['Dosyayı gönderdim.', 'dos-ya-YI gön-der-DİM', 'أرسلت الملف.', 'فایلەکەم نارد.']),
  w('ekran', 'ek-RAN', 'شاشة', 'شاشە', ['Ekran çatladı.', 'ek-RAN çat-la-DI', 'تشققت الشاشة.', 'شاشەکە شکا.']),
  w('paylaşmak', 'pay-laş-MAK', 'يشارك', 'هاوبەشکردن', ['Fotoğrafı paylaştım.', 'fo-to-ra-FI pay-laş-TIM', 'شاركت الصورة.', 'وێنەکەم هاوبەش کرد.'], 'verb'),
  w('indirmek', 'in-dir-MEK', 'ينزّل / يحمّل', 'دابەزاندن', ['Dosyayı indirdin mi?', 'dos-ya-YI in-dir-DİN mi', 'هل حمّلت الملف؟', 'فایلەکەت دابەزاند؟'], 'verb'),
  w('yapay zekâ', 'ya-PAY ze-KÂ', 'ذكاء اصطناعي', 'ژیریی دەستکرد', ['Yapay zekâ her yerde.', 'ya-PAY ze-KÂ her yer-DE', 'الذكاء الاصطناعي في كل مكان.', 'ژیریی دەستکرد لە هەموو شوێنێکە.']),
  w('sosyal medya', 'sos-YAL med-YA', 'وسائل التواصل الاجتماعي', 'سۆشیاڵ میدیا', ['Sosyal medyada çok vakit geçiriyorum.', 'sos-YAL med-ya-DA ÇOK va-KİT ge-çi-ri-YO-rum', 'أقضي وقتاً طويلاً على وسائل التواصل.', 'کاتێکی زۆر لە سۆشیاڵ میدیا بەسەر دەبەم.']),
]);

const university = pack('university', 'b1', 'noun', [
  w('üniversite', 'ü-ni-ver-si-TE', 'جامعة', 'زانکۆ', ['Ankara Üniversitesinde okuyorum.', 'an-ka-RA ü-ni-ver-si-te-sin-DE o-ku-YO-rum', 'أدرس في جامعة أنقرة.', 'لە زانکۆی ئەنقەرە دەخوێنم.']),
  w('bölüm', 'bö-LÜM', 'قسم / تخصص', 'بەش', ['Hangi bölümde okuyorsun?', 'han-Gİ bö-lüm-DE o-ku-yor-sun', 'في أي قسم تدرس؟', 'لە کام بەشدا دەخوێنیت؟']),
  w('fakülte', 'fa-kül-TE', 'كلية', 'کۆلێژ', ['Tıp fakültesini kazandı.', 'TIP fa-kül-te-si-Nİ ka-zan-DI', 'قُبل في كلية الطب.', 'کۆلێژی پزیشکی بردەوە.']),
  w('lisans', 'li-SANS', 'بكالوريوس', 'بەکالۆریۆس', ['Lisans eğitimimi bitirdim.', 'li-SANS e-i-ti-mi-Mİ bi-tir-DİM', 'أنهيت دراسة البكالوريوس.', 'خوێندنی بەکالۆریۆسم تەواو کرد.']),
  w('yüksek lisans', 'yük-SEK li-sans', 'ماجستير', 'ماستەر', ['Yüksek lisans yapıyorum.', 'yük-SEK li-SANS ya-pı-YO-rum', 'أدرس الماجستير.', 'ماستەر دەخوێنم.']),
  w('doktora', 'dok-to-RA', 'دكتوراه', 'دکتۆرا', ['Doktoraya başvurdu.', 'dok-to-ra-YA baş-vur-DU', 'تقدّم للدكتوراه.', 'داوای دکتۆرای کرد.']),
  w('araştırma', 'a-raş-tır-MA', 'بحث', 'توێژینەوە', ['Araştırmam bir yıl sürdü.', 'a-raş-tır-MAM bir YIL sür-DÜ', 'استغرق بحثي سنة.', 'توێژینەوەکەم ساڵێکی خایاند.']),
  w('tez', 'TEZ', 'أطروحة / رسالة', 'نامە (ئەکادیمی)', ['Tezimi yazıyorum.', 'te-zi-Mİ ya-zı-YO-rum', 'أكتب أطروحتي.', 'نامەکەم دەنووسم.']),
  w('burs', 'BURS', 'منحة دراسية', 'بورس', ['Burs kazandım.', 'BURS ka-zan-DIM', 'حصلت على منحة.', 'بورسم بەدەست هێنا.']),
  w('kayıt', 'ka-YIT', 'تسجيل', 'تۆمارکردن', ['Kayıtlar eylülde başlıyor.', 'ka-yıt-LAR ey-lül-DE baş-lı-YOR', 'يبدأ التسجيل في أيلول.', 'تۆمارکردن لە ئەیلووڵدا دەست پێدەکات.']),
  w('dönem', 'dö-NEM', 'فصل دراسي', 'وەرزی خوێندن', ['Bu dönem beş ders alıyorum.', 'BU dö-NEM BEŞ DERS a-lı-YO-rum', 'آخذ خمس مواد هذا الفصل.', 'ئەم وەرزە پێنج وانە دەخوێنم.']),
  w('yurt', 'YURT', 'سكن طلابي', 'خوابەخشی زانکۆ', ['Yurtta kalıyorum.', 'yurt-TA ka-lı-YO-rum', 'أقيم في السكن الجامعي.', 'لە خوابەخشی زانکۆ دەمێنمەوە.']),
]);

const nature = pack('nature', 'b1', 'noun', [
  w('doğa', 'do-A', 'طبيعة', 'سروشت', ['Doğayı korumalıyız.', 'do-a-YI ko-ru-ma-lı-YIZ', 'يجب أن نحمي الطبيعة.', 'دەبێت سروشت بپارێزین.']),
  w('orman', 'or-MAN', 'غابة', 'دارستان', ['Ormanda yürüyüş yaptık.', 'or-man-DA yü-rü-YÜŞ yap-TIK', 'تمشّينا في الغابة.', 'لە دارستانەکە پیاسەمان کرد.']),
  w('nehir', 'ne-HİR', 'نهر', 'ڕووبار', ['Nehir çok derin.', 'ne-HİR ÇOK de-RİN', 'النهر عميق جداً.', 'ڕووبارەکە زۆر قووڵە.']),
  w('göl', 'GÖL', 'بحيرة', 'دەریاچە', ['Van Gölü Türkiye’nin en büyük gölü.', 'VAN gö-LÜ tür-ki-YE-nin EN bü-YÜK gö-LÜ', 'بحيرة وان أكبر بحيرة في تركيا.', 'دەریاچەی وان گەورەترین دەریاچەی تورکیایە.']),
  w('ağaç', 'a-AÇ', 'شجرة', 'دار', ['Bahçeye ağaç diktik.', 'bah-çe-YE a-AÇ dik-TİK', 'زرعنا شجرة في الحديقة.', 'دارێکمان لە باخچەکە چاند.']),
  w('çiçek', 'çi-ÇEK', 'زهرة', 'گوڵ', ['Bahara çiçekler açtı.', 'ba-ha-RA çi-çek-LER aç-TI', 'تفتحت الأزهار في الربيع.', 'لە بەهاردا گوڵەکان کرانەوە.']),
  w('toprak', 'top-RAK', 'تربة / أرض', 'خاک', ['Toprak çok verimli.', 'top-RAK ÇOK ve-rim-Lİ', 'التربة خصبة جداً.', 'خاکەکە زۆر بەپیتە.']),
  w('çevre', 'çev-RE', 'بيئة / محيط', 'ژینگە', ['Çevre kirliliği büyük bir sorun.', 'çev-RE kir-li-li-İ bü-YÜK bir so-RUN', 'التلوث البيئي مشكلة كبيرة.', 'پیسبوونی ژینگە کێشەیەکی گەورەیە.']),
  w('iklim', 'ik-LİM', 'مناخ', 'کەشوهەوا (ئاووهەوا)', ['İklim değişikliği hepimizi etkiliyor.', 'ik-LİM de-i-şik-li-İ he-pi-mi-Zİ et-ki-li-YOR', 'تغير المناخ يؤثر علينا جميعاً.', 'گۆڕانی ئاووهەوا کاریگەری لەسەر هەموومان هەیە.']),
  w('deprem', 'dep-REM', 'زلزال', 'بوومەلەرزە', ['Deprem çok büyük hasara yol açtı.', 'dep-REM ÇOK bü-YÜK ha-sa-RA YOL aç-TI', 'تسبّب الزلزال بأضرار كبيرة.', 'بوومەلەرزەکە زیانی زۆری لێکەوتەوە.']),
  w('gökyüzü', 'gök-yü-ZÜ', 'السماء', 'ئاسمان', ['Gökyüzü bugün masmavi.', 'gök-yü-ZÜ bu-GÜN mas-ma-Vİ', 'السماء زرقاء صافية اليوم.', 'ئاسمان ئەمڕۆ شینی ڕەسەنە.']),
]);

const verbsB1 = pack('verbs', 'b1', 'verb', [
  w('düşünmek', 'dü-şün-MEK', 'يفكّر', 'بیرکردنەوە', ['Ne düşünüyorsun?', 'NE dü-şü-nü-yor-sun', 'بماذا تفكر؟', 'بیر لە چی دەکەیتەوە؟']),
  w('inanmak', 'i-nan-MAK', 'يصدّق / يؤمن', 'باوەڕکردن', ['Sana inanıyorum.', 'sa-NA i-na-nı-YO-rum', 'أنا أصدقك.', 'باوەڕت پێدەکەم.']),
  w('unutmak', 'u-nut-MAK', 'ينسى', 'لەبیرکردن', ['Şemsiyemi unuttum.', 'şem-si-ye-Mİ u-nut-TUM', 'نسيت مظلتي.', 'چەترەکەم لەبیر کرد.']),
  w('hatırlamak', 'ha-tır-la-MAK', 'يتذكّر', 'بەبیرهێنانەوە', ['Adını hatırlamıyorum.', 'a-dı-NI ha-tır-la-mı-YO-rum', 'لا أتذكر اسمه.', 'ناوی بیرم نایەت.']),
  w('anlatmak', 'an-lat-MAK', 'يشرح / يحكي', 'ڕوونکردنەوە / گێڕانەوە', ['Bana hikâyeyi anlat.', 'ba-NA hi-kâ-ye-Yİ an-LAT', 'احكِ لي القصة.', 'چیرۆکەکەم بۆ بگێڕەوە.']),
  w('açıklamak', 'a-çık-la-MAK', 'يوضّح', 'ڕوونکردنەوە', ['Öğretmen konuyu açıkladı.', 'öö-ret-MEN ko-nu-YU a-çık-la-DI', 'وضّح المعلّم الموضوع.', 'مامۆستا بابەتەکەی ڕوونکردەوە.']),
  w('değişmek', 'de-ğiş-MEK', 'يتغيّر', 'گۆڕان', ['Her şey değişti.', 'her ŞEY de-ğiş-Tİ', 'تغير كل شيء.', 'هەموو شتێک گۆڕا.']),
  w('gelişmek', 'ge-liş-MEK', 'يتطوّر', 'پەرەسەندن', ['Türkçem çok gelişti.', 'türk-ÇEM ÇOK ge-liş-Tİ', 'تحسنت تركيتي كثيراً.', 'تورکییەکەم زۆر پەرەی سەند.']),
  w('karar vermek', 'ka-RAR ver-mek', 'يقرّر', 'بڕیاردان', ['Gitmeye karar verdim.', 'git-me-YE ka-RAR ver-dim', 'قررت الذهاب.', 'بڕیارم دا بڕۆم.']),
  w('başarmak', 'ba-şar-MAK', 'ينجح في / يُنجز', 'سەرکەوتن', ['Sonunda başardım!', 'so-nun-DA ba-şar-DIM', 'نجحت في النهاية!', 'لە کۆتاییدا سەرکەوتم!']),
  w('kaybetmek', 'kay-bet-MEK', 'يخسر / يفقد', 'دۆڕان / ونکردن', ['Maçı kaybettik.', 'ma-ÇI kay-bet-TİK', 'خسرنا المباراة.', 'یارییەکەمان دۆڕاند.']),
  w('tercih etmek', 'ter-DJİH et-mek', 'يفضّل', 'پەسەندکردن', ['Çayı kahveye tercih ederim.', 'ça-YI kah-ve-YE ter-DJİH e-de-rim', 'أفضّل الشاي على القهوة.', 'چا بەسەر قاوەدا پەسەند دەکەم.']),
  w('katılmak', 'ka-tıl-MAK', 'يشارك / يوافق', 'بەشداریکردن', ['Toplantıya katılacağım.', 'top-lan-tı-YA ka-tı-la-dja-IM', 'سأشارك في الاجتماع.', 'بەشداری کۆبوونەوەکە دەکەم.']),
]);

const adjectivesB1 = pack('adjectives', 'b1', 'adjective', [
  w('önemli', 'ö-nem-Lİ', 'مهمّ', 'گرنگ', ['Bu çok önemli bir konu.', 'BU ÇOK ö-nem-Lİ bir ko-NU', 'هذا موضوع مهم جداً.', 'ئەمە بابەتێکی زۆر گرنگە.']),
  w('gerekli', 'ge-rek-Lİ', 'ضروري / لازم', 'پێویست', ['Bu belge gerekli mi?', 'BU bel-GE ge-rek-Lİ mi', 'هل هذه الوثيقة ضرورية؟', 'ئەم بەڵگەنامەیە پێویستە؟']),
  w('mümkün', 'müm-KÜN', 'ممكن', 'گونجاو / لەوانەیە', ['Mümkün olduğunca çabuk gel.', 'müm-KÜN ol-du-ĞUN-dja ça-BUK GEL', 'تعال بأسرع ما يمكن.', 'بەو خێراییەی دەکرێت وەرە.']),
  w('imkânsız', 'im-kân-SIZ', 'مستحيل', 'مەحاڵ', ['Bu imkânsız değil.', 'BU im-kân-SIZ de-İL', 'هذا ليس مستحيلاً.', 'ئەمە مەحاڵ نییە.']),
  w('ilginç', 'il-GİNÇ', 'مثير للاهتمام', 'سەرنجڕاکێش', ['Çok ilginç bir kitap.', 'ÇOK il-GİNÇ bir ki-TAP', 'كتاب مثير للاهتمام جداً.', 'کتێبێکی زۆر سەرنجڕاکێشە.']),
  w('karmaşık', 'kar-ma-ŞIK', 'معقّد', 'ئاڵۆز', ['Durum çok karmaşık.', 'du-RUM ÇOK kar-ma-ŞIK', 'الوضع معقّد جداً.', 'دۆخەکە زۆر ئاڵۆزە.']),
  w('yeterli', 'ye-ter-Lİ', 'كافٍ', 'بەس', ['Bu para yeterli değil.', 'BU pa-RA ye-ter-Lİ de-İL', 'هذا المال غير كافٍ.', 'ئەم پارەیە بەس نییە.']),
  w('güvenilir', 'gü-ve-ni-LİR', 'موثوق', 'متمانەپێکراو', ['Çok güvenilir bir insan.', 'ÇOK gü-ve-ni-LİR bir in-SAN', 'إنسان موثوق جداً.', 'مرۆڤێکی زۆر متمانەپێکراوە.']),
  w('sorumlu', 'so-rum-LU', 'مسؤول', 'بەرپرس', ['Bu işten ben sorumluyum.', 'BU iş-TEN BEN so-rum-lu-YUM', 'أنا مسؤول عن هذا العمل.', 'من بەرپرسی ئەم کارەم.']),
  w('yaygın', 'yay-GIN', 'شائع / منتشر', 'باو', ['Bu çok yaygın bir hata.', 'BU ÇOK yay-GIN bir ha-TA', 'هذا خطأ شائع جداً.', 'ئەمە هەڵەیەکی زۆر باوە.']),
]);

export const B1_VOCABULARY: VocabItem[] = [
  ...work, ...technology, ...university, ...nature, ...verbsB1, ...adjectivesB1,
];
