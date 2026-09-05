import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * C1 vocabulary, part two.
 *
 * At C1 the vocabulary problem changes shape: the student can already say
 * everything, but says it in the wrong REGISTER. These words are the ones that
 * mark a text as academic, legal, administrative or journalistic rather than
 * conversational.
 *
 * Arabic speakers have a real advantage in this file - a large share of these
 * are Ottoman borrowings from Arabic (`istihdam`, `teşebbüs`, `mütalaa`), so
 * the Arabic gloss is often the same root. Where the meaning has DRIFTED in
 * Turkish, the note says so.
 */

const academicExtra = pack('academic', 'c1', 'noun', [
  w('literatür', 'li-te-ra-TÜR', 'الأدبيات (العلمية)', 'ئەدەبیاتی زانستی', ['İlgili literatürü taradım.', 'il-gi-Lİ li-te-ra-tü-RÜ ta-ra-DIM', 'راجعت الأدبيات ذات الصلة.', 'ئەدەبیاتی پەیوەندیدارم پێداچووەوە.']),
  w('yöntembilim', 'yön-tem-bi-LİM', 'منهجية', 'ڕێبازناسی', ['Yöntembilim bölümü çok kısa.', 'yön-tem-bi-LİM bö-lü-MÜ ÇOK kı-SA', 'قسم المنهجية قصير جداً.', 'بەشی ڕێبازناسی زۆر کورتە.']),
  w('örneklem', 'ör-nek-LEM', 'عيّنة (بحثية)', 'نموونە (توێژینەوە)', ['Örneklem yeterince büyük değil.', 'ör-nek-LEM ye-te-rin-DJE bü-YÜK de-İL', 'العيّنة ليست كبيرة بما يكفي.', 'نموونەکە بەقەدەر پێویست گەورە نییە.']),
  w('değişken', 'de-ğiş-KEN', 'متغيّر', 'گۆڕاو', ['Bağımsız değişkeni tanımladık.', 'ba-ım-SIZ de-ğiş-ke-Nİ ta-nım-la-DIK', 'عرّفنا المتغيّر المستقل.', 'گۆڕاوە سەربەخۆکەمان پێناسە کرد.']),
  w('korelasyon', 'ko-re-las-YON', 'ارتباط (إحصائي)', 'پەیوەندی ئاماری', ['İki değişken arasında güçlü bir korelasyon var.', 'i-Kİ de-ğiş-KEN a-ra-sın-DA güç-LÜ bir ko-re-las-YON VAR', 'هناك ارتباط قوي بين المتغيرين.', 'پەیوەندییەکی بەهێز لە نێوان دوو گۆڕاوەکەدا هەیە.']),
  w('geçerlilik', 'ge-çer-li-LİK', 'صدق (المقياس)', 'ڕەوایی', ['Ölçeğin geçerliliği test edildi.', 'öl-çe-İN ge-çer-li-li-İ TEST e-dil-Dİ', 'اختُبر صدق المقياس.', 'ڕەوایی پێوەرەکە تاقی کرایەوە.']),
  w('güvenilirlik', 'gü-ve-ni-lir-LİK', 'ثبات / موثوقية', 'متمانەپێکراوی', ['Güvenilirlik katsayısı yüksek.', 'gü-ve-ni-lir-LİK kat-sa-yı-SI yük-SEK', 'معامل الثبات مرتفع.', 'هاوکۆڵکەی متمانەپێکراوی بەرزە.']),
  w('betimlemek', 'be-tim-le-MEK', 'يصف (وصفاً علمياً)', 'وەسفکردن', ['Çalışma olguyu ayrıntılı biçimde betimliyor.', 'ça-lış-MA ol-gu-YU ay-rın-tı-LI bi-çim-DE be-tim-li-YOR', 'تصف الدراسة الظاهرة بالتفصيل.', 'توێژینەوەکە بە وردی دیاردەکە وەسف دەکات.'], 'verb'),
  w('olgu', 'ol-GU', 'ظاهرة / واقعة', 'دیاردە', ['Bu olgu henüz açıklanamadı.', 'BU ol-GU he-NÜZ a-çık-la-na-ma-DI', 'لم تُفسَّر هذه الظاهرة بعد.', 'ئەم دیاردەیە هێشتا ڕوون نەکراوەتەوە.']),
  w('yorumlamak', 'yo-rum-la-MAK', 'يفسّر / يؤوّل', 'لێکدانەوە', ['Verileri dikkatle yorumlamalıyız.', 've-ri-le-Rİ dik-kat-LE yo-rum-la-ma-lı-YIZ', 'علينا تفسير البيانات بعناية.', 'دەبێت بە وردی داتاکان لێکبدەینەوە.'], 'verb'),
  w('sınırlılık', 'sı-nır-lı-LIK', 'محدّد / قيد بحثي', 'سنووردارێتی', ['Çalışmanın sınırlılıkları tartışıldı.', 'ça-lış-ma-NIN sı-nır-lı-lık-la-RI tar-tı-şıl-DI', 'نوقشت محدّدات الدراسة.', 'سنوورداری توێژینەوەکە باسکرا.']),
  w('bulgu', 'bul-GU', 'نتيجة بحثية', 'دۆزینەوە', ['Bulgular hipotezi destekliyor.', 'bul-gu-LAR hi-po-te-Zİ des-tek-li-YOR', 'تدعم النتائج الفرضية.', 'دۆزینەوەکان پشتگیری گریمانەکە دەکەن.']),
  w('atıf', 'a-TIF', 'استشهاد / إحالة', 'ئاماژە', ['Makaleye yüzden fazla atıf yapılmış.', 'ma-ka-le-YE yüz-DEN faz-LA a-TIF ya-pıl-MIŞ', 'استُشهد بالمقالة أكثر من مئة مرة.', 'زیاتر لە سەد جار ئاماژە بە وتارەکە کراوە.']),
  w('özgün', 'öz-GÜN', 'أصيل / مبتكَر', 'ڕەسەن', ['Tez özgün bir katkı sunuyor.', 'TEZ öz-GÜN bir kat-KI su-nu-YOR', 'تقدّم الأطروحة إسهاماً أصيلاً.', 'نامەکە بەشدارییەکی ڕەسەن پێشکەش دەکات.'], 'adjective'),
  w('intihal', 'in-ti-HAL', 'انتحال / سرقة علمية', 'دزینی زانستی', ['İntihal ciddi bir etik ihlaldir.', 'in-ti-HAL djid-Dİ bir e-TİK ih-lal-DİR', 'الانتحال انتهاك أخلاقي خطير.', 'دزینی زانستی پێشێلکارییەکی ئەخلاقی گرنگە.']),
  w('hakem', 'ha-KEM', 'محكّم (علمي)', 'هەڵسەنگێنەر', ['Makale iki hakem tarafından değerlendirildi.', 'ma-ka-LE i-Kİ ha-KEM ta-ra-fın-DAN de-er-len-di-ril-Dİ', 'قُيّمت المقالة من قِبَل محكّمَين.', 'وتارەکە لەلایەن دوو هەڵسەنگێنەرەوە هەڵسەنگێنرا.']),
  w('derleme', 'der-le-ME', 'مراجعة / تجميع', 'کۆکردنەوە', ['Bu bir derleme makalesidir.', 'BU bir der-le-ME ma-ka-le-si-DİR', 'هذه مقالة مراجعة.', 'ئەمە وتارێکی کۆکردنەوەیە.']),
  w('kuramsal', 'ku-ram-SAL', 'نظري', 'تیۆری', ['Kuramsal çerçeve ikinci bölümde.', 'ku-ram-SAL çer-çe-VE i-kin-DJİ bö-lüm-DE', 'الإطار النظري في الفصل الثاني.', 'چوارچێوەی تیۆری لە بەشی دووەمدایە.'], 'adjective'),
  w('uygulamalı', 'uy-gu-la-ma-LI', 'تطبيقي', 'پراکتیکی', ['Uygulamalı bir araştırma yürüttük.', 'uy-gu-la-ma-LI bir a-raş-tır-MA yü-rüt-TÜK', 'أجرينا بحثاً تطبيقياً.', 'توێژینەوەیەکی پراکتیکیمان ئەنجام دا.'], 'adjective'),
  w('nicel', 'ni-DJEL', 'كمّي', 'چەندایەتی', ['Nicel veriler tabloda sunuldu.', 'ni-DJEL ve-ri-LER tab-lo-DA su-nul-DU', 'عُرضت البيانات الكمّية في الجدول.', 'داتا چەندایەتییەکان لە خشتەکەدا پێشکەش کران.'], 'adjective'),
  w('nitel', 'ni-TEL', 'نوعي / كيفي', 'چۆنایەتی', ['Nitel yöntem tercih edildi.', 'ni-TEL yön-TEM ter-DJİH e-dil-Dİ', 'فُضّل المنهج النوعي.', 'ڕێبازی چۆنایەتی پەسەند کرا.'], 'adjective'),
]);

const society = pack('society', 'c1', 'noun', [
  w('toplum', 'top-LUM', 'مجتمع', 'کۆمەڵگا', ['Toplum hızla değişiyor.', 'top-LUM hız-LA de-i-şi-YOR', 'المجتمع يتغيّر بسرعة.', 'کۆمەڵگا بە خێرایی دەگۆڕێت.']),
  w('kamuoyu', 'ka-mu-o-YU', 'الرأي العام', 'ڕای گشتی', ['Kamuoyu bu karara tepki gösterdi.', 'ka-mu-o-YU BU ka-ra-RA tep-Kİ gös-ter-Dİ', 'أبدى الرأي العام رد فعل على هذا القرار.', 'ڕای گشتی بەرامبەر بەم بڕیارە کاردانەوەی نیشان دا.']),
  w('yurttaşlık', 'yurt-taş-LIK', 'مواطَنة', 'هاوڵاتیبوون', ['Yurttaşlık hakları anayasada tanımlı.', 'yurt-taş-LIK hak-la-RI a-na-ya-sa-DA ta-nım-LI', 'حقوق المواطنة معرّفة في الدستور.', 'مافەکانی هاوڵاتیبوون لە دەستوردا پێناسە کراون.']),
  w('eşitsizlik', 'e-şit-siz-LİK', 'لا مساواة', 'نایەکسانی', ['Gelir eşitsizliği artıyor.', 'ge-LİR e-şit-siz-li-İ ar-tı-YOR', 'تتزايد اللامساواة في الدخل.', 'نایەکسانی داهات زیاد دەکات.']),
  w('göç', 'GÖÇ', 'هجرة', 'کۆچ', ['Kırdan kente göç sürüyor.', 'kır-DAN ken-TE GÖÇ sü-rü-YOR', 'تستمر الهجرة من الريف إلى المدينة.', 'کۆچ لە گوندەوە بۆ شار بەردەوامە.']),
  w('kentleşme', 'kent-leş-ME', 'تمدّن / تحضّر', 'شارنشینی', ['Hızlı kentleşme sorunlar yarattı.', 'hız-LI kent-leş-ME so-run-LAR ya-rat-TI', 'خلق التحضّر السريع مشكلات.', 'شارنشینی خێرا کێشەی دروست کرد.']),
  w('kültürel çeşitlilik', 'kül-tü-REL çe-şit-li-lik', 'تنوّع ثقافي', 'فرەچەشنی کولتووری', ['Kültürel çeşitlilik bir zenginliktir.', 'kül-tü-REL çe-şit-li-LİK bir zen-gin-lik-TİR', 'التنوّع الثقافي ثراء.', 'فرەچەشنی کولتووری دەوڵەمەندییەکە.']),
  w('demokrasi', 'de-mok-ra-Sİ', 'ديمقراطية', 'دیموکراسی', ['Demokrasi katılım gerektirir.', 'de-mok-ra-Sİ ka-tı-LIM ge-rek-ti-RİR', 'الديمقراطية تتطلب المشاركة.', 'دیموکراسی بەشداری دەخوازێت.']),
  w('seçim', 'se-ÇİM', 'انتخابات', 'هەڵبژاردن', ['Seçim gelecek yıl yapılacak.', 'se-ÇİM ge-le-DJEK YIL ya-pı-la-DJAK', 'ستُجرى الانتخابات العام القادم.', 'هەڵبژاردن ساڵی داهاتوو ئەنجام دەدرێت.']),
  w('siyaset', 'si-ya-SET', 'سياسة', 'سیاسەت', ['Siyasete hiç ilgim yok.', 'si-ya-se-TE HİÇ il-GİM YOK', 'ليس لديّ أي اهتمام بالسياسة.', 'هیچ گرنگیم بە سیاسەت نییە.']),
  w('sivil toplum', 'si-VİL top-lum', 'مجتمع مدني', 'کۆمەڵگای مەدەنی', ['Sivil toplum kuruluşları rapor yayımladı.', 'si-VİL top-LUM ku-ru-luş-la-RI ra-POR ya-yım-la-DI', 'أصدرت منظمات المجتمع المدني تقريراً.', 'ڕێکخراوەکانی کۆمەڵگای مەدەنی ڕاپۆرتێکیان بڵاوکردەوە.']),
  w('kalkınma', 'kal-kın-MA', 'تنمية', 'گەشەپێدان', ['Sürdürülebilir kalkınma hedefleri belirlendi.', 'sür-dü-rü-le-bi-LİR kal-kın-MA he-def-le-Rİ be-lir-len-Dİ', 'حُدّدت أهداف التنمية المستدامة.', 'ئامانجەکانی گەشەپێدانی بەردەوام دیاری کران.']),
  w('yoksulluk', 'yok-sul-LUK', 'فقر', 'هەژاری', ['Yoksullukla mücadele önceliğimiz.', 'yok-sul-luk-LA mü-dja-de-LE ön-dje-li-i-MİZ', 'مكافحة الفقر أولويتنا.', 'خەبات دژی هەژاری ئەولەویەتمانە.']),
  w('istihdam', 'is-tih-DAM', 'تشغيل / توظيف', 'خستنەسەرکار', ['Yeni fabrika istihdam yaratacak.', 'ye-Nİ fab-ri-KA is-tih-DAM ya-ra-ta-DJAK', 'سيخلق المصنع الجديد فرص عمل.', 'کارگە نوێیەکە هەلی کار دروست دەکات.']),
  w('dayanışma', 'da-ya-nış-MA', 'تضامن', 'پشتیوانی یەکتر', ['Kriz anında dayanışma arttı.', 'KRİZ a-nın-DA da-ya-nış-MA art-TI', 'ازداد التضامن وقت الأزمة.', 'لە کاتی قەیراندا پشتیوانی یەکتر زیادی کرد.']),
  w('ayrımcılık', 'ay-rım-dji-LIK', 'تمييز', 'جیاکاری', ['Her türlü ayrımcılığa karşıyız.', 'her tür-LÜ ay-rım-dji-lı-A kar-şı-YIZ', 'نحن ضد كل أشكال التمييز.', 'دژی هەموو جۆرە جیاکارییەکین.']),
  w('kuşak', 'ku-ŞAK', 'جيل', 'نەوە', ['Genç kuşak farklı düşünüyor.', 'GENÇ ku-ŞAK fark-LI dü-şü-nü-YOR', 'الجيل الشاب يفكّر بشكل مختلف.', 'نەوەی گەنج بە جیاوازی بیر دەکاتەوە.']),
  w('kimlik', 'kim-LİK', 'هوية', 'ناسنامە', ['Dil kimliğin bir parçasıdır.', 'DİL kim-li-İN bir par-ça-sı-DIR', 'اللغة جزء من الهوية.', 'زمان بەشێکە لە ناسنامە.']),
]);

const science = pack('science', 'c1', 'noun', [
  w('deney', 'de-NEY', 'تجربة (علمية)', 'تاقیکردنەوە', ['Deney üç kez tekrarlandı.', 'de-NEY ÜÇ KEZ tek-rar-lan-DI', 'كُرّرت التجربة ثلاث مرات.', 'تاقیکردنەوەکە سێ جار دووبارە کرایەوە.']),
  w('gözlem', 'göz-LEM', 'ملاحظة (علمية)', 'چاودێری', ['Gözlemlerimizi kaydettik.', 'göz-lem-le-ri-mi-Zİ kay-det-TİK', 'سجّلنا ملاحظاتنا.', 'چاودێرییەکانمان تۆمار کرد.']),
  w('hücre', 'hüc-RE', 'خلية', 'خانە', ['Hücre bölünmesi hızlandı.', 'hüc-RE bö-lün-me-Sİ hız-lan-DI', 'تسارع انقسام الخلايا.', 'دابەشبوونی خانەکان خێرا بوو.']),
  w('genetik', 'ge-ne-TİK', 'وراثة / جيني', 'بۆماوەیی', ['Genetik faktörler etkili.', 'ge-ne-TİK fak-tör-LER et-ki-Lİ', 'العوامل الوراثية مؤثرة.', 'فاکتەرە بۆماوەییەکان کاریگەرن.']),
  w('evrim', 'ev-RİM', 'تطوّر (بيولوجي)', 'ئیڤۆلوسیۆن', ['Evrim kuramı biyolojinin temelidir.', 'ev-RİM ku-ra-MI bi-yo-lo-ji-NİN te-me-li-DİR', 'نظرية التطور أساس علم الأحياء.', 'تیۆری ئیڤۆلوسیۆن بنەمای زیندەزانییە.']),
  w('yerçekimi', 'yer-çe-ki-Mİ', 'جاذبية', 'کێشکەری زەوی', ['Yerçekimi kuvveti hesaplandı.', 'yer-çe-ki-Mİ kuv-ve-Tİ he-sap-lan-DI', 'حُسبت قوة الجاذبية.', 'هێزی کێشکەری زەوی حیساب کرا.']),
  w('enerji dönüşümü', 'e-ner-Jİ dö-nü-şü-mü', 'تحويل الطاقة', 'گۆڕینی وزە', ['Enerji dönüşümü verimli değil.', 'e-ner-Jİ dö-nü-şü-MÜ ve-rim-Lİ de-İL', 'تحويل الطاقة غير كفء.', 'گۆڕینی وزە بەرهەمدار نییە.']),
  w('molekül', 'mo-le-KÜL', 'جزيء', 'گەردیلە', ['Su molekülü iki hidrojen içerir.', 'SU mo-le-kü-LÜ i-Kİ hid-ro-JEN i-çe-RİR', 'يحتوي جزيء الماء على ذرتَي هيدروجين.', 'گەردیلەی ئاو دوو هایدرۆجینی تێدایە.']),
  w('iklim değişikliği', 'ik-LİM de-i-şik-li-ği', 'تغيّر المناخ', 'گۆڕانی ئاووهەوا', ['İklim değişikliği acil bir sorun.', 'ik-LİM de-i-şik-li-İ a-DJİL bir so-RUN', 'تغيّر المناخ مشكلة عاجلة.', 'گۆڕانی ئاووهەوا کێشەیەکی بەپەلەیە.']),
  w('salgın', 'sal-GIN', 'وباء', 'پەتا', ['Salgın küresel ölçekte yayıldı.', 'sal-GIN kü-re-SEL öl-çek-TE ya-yıl-DI', 'انتشر الوباء على نطاق عالمي.', 'پەتاکە لە ئاستی جیهانیدا بڵاو بووەوە.']),
  w('kuvvet', 'kuv-VET', 'قوة (فيزيائية)', 'هێز', ['Uygulanan kuvvet yetersizdi.', 'uy-gu-la-NAN kuv-VET ye-ter-siz-Dİ', 'كانت القوة المطبّقة غير كافية.', 'ئەو هێزەی جێبەجێ کرا بەس نەبوو.']),
  w('ölçüm', 'öl-ÇÜM', 'قياس', 'پێوان', ['Ölçüm hatası yüzde ikiydi.', 'öl-ÇÜM ha-ta-SI yüz-DE i-kiy-Dİ', 'كان خطأ القياس اثنين بالمئة.', 'هەڵەی پێوان دوو لە سەد بوو.']),
  w('varsayılan', 'var-sa-yı-LAN', 'افتراضي (قيمة)', 'بنەڕەتی', ['Varsayılan ayarları değiştirmedik.', 'var-sa-yı-LAN a-yar-la-RI de-ğiş-tir-me-DİK', 'لم نغيّر الإعدادات الافتراضية.', 'ڕێکخستنە بنەڕەتییەکانمان نەگۆڕی.'], 'adjective'),
  w('kanıta dayalı', 'ka-nı-TA da-ya-lı', 'قائم على الأدلّة', 'پشتبەستوو بە بەڵگە', ['Kanıta dayalı bir yaklaşım benimsedik.', 'ka-nı-TA da-ya-LI bir yak-la-ŞIM be-nim-se-DİK', 'تبنّينا مقاربة قائمة على الأدلّة.', 'ڕوانگەیەکی پشتبەستوو بە بەڵگەمان گرتەبەر.'], 'adjective'),
]);

const formal = pack('formal', 'c1', 'phrase', [
  w('arz ederim', 'ARZ e-de-rim', 'أرفع إلى علمكم (ختام رسمي)', 'پێشکەشی دەکەم (کۆتایی فەرمی)', ['Gereğini bilgilerinize arz ederim.', 'ge-re-i-Nİ bil-gi-le-ri-ni-ZE ARZ e-de-rim', 'أرفع إلى علمكم لاتخاذ اللازم.', 'پێویست پێشکەشی زانیارییەکانتان دەکەم.']),
  w('rica olunur', 'ri-DJA o-lu-nur', 'يُرجى (صيغة رسمية مبنية للمجهول)', 'داوا دەکرێت', ['Belgelerin eksiksiz teslimi rica olunur.', 'bel-ge-le-RİN ek-sik-SİZ tes-li-Mİ ri-DJA o-lu-NUR', 'يُرجى تسليم الوثائق كاملة.', 'داوا دەکرێت بەڵگەنامەکان بە تەواوی ڕادەست بکرێن.']),
  w('tarafımıza', 'ta-ra-fı-mı-ZA', 'إلينا (رسمي)', 'بۆ لای ئێمە', ['Başvurunuz tarafımıza ulaşmıştır.', 'baş-vu-ru-NUZ ta-ra-fı-mı-ZA u-laş-mış-TIR', 'وصلنا طلبكم.', 'داواکارییەکەتان پێمان گەیشتووە.']),
  w('ilişikte', 'i-li-şik-TE', 'طيّه / مرفق', 'لە پاشکۆدا', ['İlişikte sunulan belgeleri inceleyiniz.', 'i-li-şik-TE su-nu-LAN bel-ge-le-Rİ in-dje-le-yi-NİZ', 'يُرجى فحص الوثائق المرفقة طيّه.', 'تکایە ئەو بەڵگەنامانەی لە پاشکۆدان بپشکنن.']),
  w('mezkûr', 'mez-KÛR', 'المذكور (رسمي/قديم)', 'باسکراو', ['Mezkûr talep değerlendirilmiştir.', 'mez-KÛR ta-LEP de-er-len-di-ril-miş-TİR', 'جرى تقييم الطلب المذكور.', 'داواکاری باسکراو هەڵسەنگێنرا.'], 'adjective'),
  w('işbu', 'iş-BU', 'هذا (في المستندات القانونية)', 'ئەم (لە بەڵگەنامەی یاسایی)', ['İşbu sözleşme iki nüsha düzenlenmiştir.', 'iş-BU söz-leş-ME i-Kİ nüs-HA dü-zen-len-miş-TİR', 'حُرّر هذا العقد من نسختين.', 'ئەم گرێبەستە لە دوو وێنەدا ڕێکخراوە.'], 'adjective'),
  w('nezdinde', 'nez-din-DE', 'لدى (رسمي)', 'لای', ['Kurum nezdinde girişimde bulunduk.', 'ku-RUM nez-din-DE gi-ri-şim-DE bu-lun-DUK', 'قمنا بمسعى لدى المؤسسة.', 'لای دامەزراوەکە هەوڵمان دا.']),
  w('itibarıyla', 'i-ti-ba-rıy-LA', 'اعتباراً من / من حيث', 'لە ڕووی', ['Bugün itibarıyla kayıtlar kapanmıştır.', 'bu-GÜN i-ti-ba-rıy-LA ka-yıt-LAR ka-pan-mış-TIR', 'اعتباراً من اليوم أُغلق التسجيل.', 'لە ئەمڕۆوە تۆمارکردن داخراوە.']),
  w('gereği', 'ge-re-İ', 'مقتضى / اللازم', 'پێویست', ['Kanun gereği bildirim zorunludur.', 'ka-NUN ge-re-İ bil-di-RİM zo-run-lu-DUR', 'التبليغ إلزامي بمقتضى القانون.', 'بەپێی یاسا ئاگادارکردنەوە پێویستە.']),
  w('tebliğ etmek', 'teb-Lİ et-mek', 'يُبلّغ رسمياً', 'ڕاگەیاندنی فەرمی', ['Karar taraflara tebliğ edildi.', 'ka-RAR ta-raf-la-RA teb-Lİ e-dil-Dİ', 'بُلّغ القرار للأطراف.', 'بڕیارەکە بە لایەنەکان ڕاگەیەندرا.'], 'verb'),
  w('yürürlükte', 'yü-rür-lük-TE', 'ساري المفعول', 'لە کاردایە', ['Yönetmelik hâlen yürürlüktedir.', 'yö-net-me-LİK hâ-LEN yü-rür-lük-te-DİR', 'اللائحة ما زالت سارية.', 'ڕێنماییەکە هێشتا لە کاردایە.'], 'adverb'),
  w('münhasıran', 'mün-ha-sı-RAN', 'حصرياً', 'بە تایبەتی', ['Bu hak münhasıran üyelere aittir.', 'BU HAK mün-ha-sı-RAN ü-ye-le-RE a-it-TİR', 'هذا الحق حصري للأعضاء.', 'ئەم مافە بە تایبەتی هی ئەندامانە.'], 'adverb'),
  w('bilumum', 'bi-lu-MUM', 'جميع / كافة (رسمي)', 'هەموو (فەرمی)', ['Bilumum masraflar başvurana aittir.', 'bi-lu-MUM mas-raf-LAR baş-vu-ra-NA a-it-TİR', 'كافة المصاريف على مقدّم الطلب.', 'هەموو خەرجییەکان لەسەر داواکارە.'], 'adjective'),
]);

const law = pack('law', 'c1', 'noun', [
  w('anayasa', 'a-na-ya-SA', 'دستور', 'دەستوور', ['Anayasa temel hakları güvence altına alır.', 'a-na-ya-SA te-MEL hak-la-RI gü-ven-DJE al-tı-NA a-LIR', 'يضمن الدستور الحقوق الأساسية.', 'دەستوور مافە بنەڕەتییەکان دەپارێزێت.']),
  w('yasa', 'ya-SA', 'قانون', 'یاسا', ['Yeni yasa mecliste kabul edildi.', 'ye-Nİ ya-SA medj-lis-TE ka-BUL e-dil-Dİ', 'أُقرّ القانون الجديد في البرلمان.', 'یاسا نوێیەکە لە پەرلەماندا پەسەند کرا.']),
  w('yönetmelik', 'yö-net-me-LİK', 'لائحة تنفيذية', 'ڕێنمایی', ['Yönetmelik ayrıntıları düzenler.', 'yö-net-me-LİK ay-rın-tı-la-RI dü-zen-LER', 'تنظّم اللائحة التفاصيل.', 'ڕێنماییەکە وردەکارییەکان ڕێکدەخات.']),
  w('dava', 'da-VA', 'دعوى قضائية', 'داوا', ['Dava üç yıl sürdü.', 'da-VA ÜÇ YIL sür-DÜ', 'استمرت الدعوى ثلاث سنوات.', 'داواکەی سێ ساڵی خایاند.']),
  w('mahkeme', 'mah-ke-ME', 'محكمة', 'دادگا', ['Mahkeme kararını açıkladı.', 'mah-ke-ME ka-ra-rı-NI a-çık-la-DI', 'أعلنت المحكمة قرارها.', 'دادگا بڕیارەکەی ڕاگەیاند.']),
  w('avukat', 'a-vu-KAT', 'محامٍ', 'پارێزەر', ['Avukatımla görüşmek istiyorum.', 'a-vu-ka-tım-LA gö-rüş-MEK is-ti-YO-rum', 'أريد مقابلة محاميّ.', 'دەمەوێت پارێزەرەکەم ببینم.']),
  w('hüküm', 'hü-KÜM', 'حكم', 'حوکم', ['Hüküm kesinleşti.', 'hü-KÜM ke-sin-leş-Tİ', 'أصبح الحكم نهائياً.', 'حوکمەکە کۆتایی بوو.']),
  w('temyiz', 'tem-YİZ', 'استئناف / نقض', 'تێهەڵچوونەوە', ['Karara temyiz başvurusu yaptık.', 'ka-ra-RA tem-YİZ baş-vu-ru-SU yap-TIK', 'قدّمنا طعناً بالنقض على القرار.', 'داوای تێهەڵچوونەوەمان لە بڕیارەکە کرد.']),
  w('yükümlülük', 'yü-küm-lü-LÜK', 'التزام', 'ئەرک', ['Tarafların yükümlülükleri açıktır.', 'ta-raf-la-RIN yü-küm-lü-lük-le-Rİ a-çık-TIR', 'التزامات الأطراف واضحة.', 'ئەرکەکانی لایەنەکان ڕوونن.']),
  w('ihlal', 'ih-LAL', 'انتهاك / مخالفة', 'پێشێلکاری', ['Bu bir sözleşme ihlalidir.', 'BU bir söz-leş-ME ih-la-li-DİR', 'هذا انتهاك للعقد.', 'ئەمە پێشێلکاری گرێبەستە.']),
  w('tazminat', 'taz-mi-NAT', 'تعويض', 'قەرەبوو', ['Mahkeme tazminata hükmetti.', 'mah-ke-ME taz-mi-na-TA hük-met-Tİ', 'قضت المحكمة بالتعويض.', 'دادگا بڕیاری قەرەبووی دا.']),
  w('yetki', 'yet-Kİ', 'صلاحية', 'دەسەڵات', ['Bu konuda yetkimiz yok.', 'BU ko-nu-DA yet-ki-MİZ YOK', 'ليس لدينا صلاحية في هذا الأمر.', 'لەم بابەتەدا دەسەڵاتمان نییە.']),
  w('itiraz', 'i-ti-RAZ', 'اعتراض', 'ناڕەزایی', ['İtiraz süresi otuz gündür.', 'i-ti-RAZ sü-re-Sİ o-TUZ gün-DÜR', 'مدة الاعتراض ثلاثون يوماً.', 'ماوەی ناڕەزایی سی ڕۆژە.']),
  w('kanıt yükü', 'ka-NIT yü-kü', 'عبء الإثبات', 'باری بەڵگە', ['Kanıt yükü davacıdadır.', 'ka-NIT yü-KÜ da-va-djı-da-DIR', 'عبء الإثبات على المدّعي.', 'باری بەڵگە لەسەر داواکارە.']),
  w('resmî belge', 'res-Mİ bel-ge', 'وثيقة رسمية', 'بەڵگەنامەی فەرمی', ['Resmî belgeyi noterde onaylattık.', 'res-Mİ bel-ge-Yİ no-ter-DE o-nay-lat-TIK', 'صدّقنا الوثيقة الرسمية لدى الكاتب بالعدل.', 'بەڵگەنامە فەرمییەکەمان لای نۆتەر پەسەند کرد.']),
]);

const advancedExtra = pack('advanced', 'c1', 'noun', [
  w('teşebbüs', 'te-şeb-BÜS', 'مسعى / مبادرة', 'هەوڵ', ['Bu teşebbüs sonuçsuz kaldı.', 'BU te-şeb-BÜS so-nuç-SUZ kal-DI', 'بقي هذا المسعى دون نتيجة.', 'ئەم هەوڵە بێ ئەنجام مایەوە.']),
  w('mütalaa', 'mü-ta-la-A', 'رأي / مطالعة (رسمي)', 'بۆچوون (فەرمی)', ['Hukuk birimi mütalaa hazırladı.', 'hu-KUK bi-ri-Mİ mü-ta-la-A ha-zır-la-DI', 'أعدّت الدائرة القانونية رأياً.', 'بەشی یاسایی بۆچوونێکی ئامادە کرد.']),
  w('mevcut', 'mev-DJUT', 'قائم / موجود حالياً', 'ئێستا هەیە', ['Mevcut sistem yetersiz.', 'mev-DJUT sis-TEM ye-ter-SİZ', 'النظام القائم غير كافٍ.', 'سیستەمی ئێستا بەس نییە.'], 'adjective'),
  w('müdahale', 'mü-da-ha-LE', 'تدخّل', 'دەستێوەردان', ['Erken müdahale hayat kurtardı.', 'er-KEN mü-da-ha-LE ha-YAT kur-tar-DI', 'أنقذ التدخل المبكر حياة.', 'دەستێوەردانی زوو ژیانی ڕزگار کرد.']),
  w('istikrar', 'is-tik-RAR', 'استقرار', 'جێگیری', ['Ekonomik istikrar sağlandı.', 'e-ko-no-MİK is-tik-RAR sa-lan-DI', 'تحقّق الاستقرار الاقتصادي.', 'جێگیری ئابووری دابین کرا.']),
  w('teşvik', 'teş-VİK', 'حافز / تشجيع', 'هاندان', ['Devlet üreticilere teşvik veriyor.', 'dev-LET ü-re-ti-dji-le-RE teş-VİK ve-ri-YOR', 'تقدّم الدولة حوافز للمنتجين.', 'دەوڵەت هاندان بە بەرهەمهێنەران دەدات.']),
  w('kısıtlama', 'kı-sıt-la-MA', 'تقييد', 'سنووردارکردن', ['Yeni kısıtlamalar getirildi.', 'ye-Nİ kı-sıt-la-ma-LAR ge-ti-ril-Dİ', 'فُرضت قيود جديدة.', 'سنووردارکردنی نوێ سەپێندرا.']),
  w('öncelik', 'ön-dje-LİK', 'أولوية', 'ئەولەویەت', ['Bu bizim önceliğimiz.', 'BU bi-ZİM ön-dje-li-i-MİZ', 'هذه أولويتنا.', 'ئەمە ئەولەویەتی ئێمەیە.']),
  w('gerekçelendirmek', 'ge-rek-çe-len-dir-MEK', 'يبرّر / يعلّل', 'هۆکاردانان', ['Kararını iyi gerekçelendirdi.', 'ka-ra-rı-NI i-Yİ ge-rek-çe-len-dir-Dİ', 'برّر قراره جيداً.', 'بە باشی هۆکاری بڕیارەکەی دانا.'], 'verb'),
  w('somutlaştırmak', 'so-mut-laş-tır-MAK', 'يُجسّد / يجعله ملموساً', 'بەرجەستەکردن', ['Fikri örneklerle somutlaştırdı.', 'fik-Rİ ör-nek-ler-LE so-mut-laş-tır-DI', 'جسّد الفكرة بالأمثلة.', 'بیرۆکەکەی بە نموونە بەرجەستە کرد.'], 'verb'),
  w('ivedilikle', 'i-ve-di-lik-LE', 'على وجه السرعة', 'بە پەلە', ['Konu ivedilikle ele alınmalıdır.', 'ko-NU i-ve-di-lik-LE e-LE a-lın-ma-lı-DIR', 'يجب تناول الموضوع على وجه السرعة.', 'دەبێت بابەتەکە بە پەلە بخرێتە بەرباس.'], 'adverb'),
  w('nispeten', 'nis-pe-TEN', 'نسبياً', 'بە بەراورد', ['Sonuçlar nispeten olumlu.', 'so-nuç-LAR nis-pe-TEN o-lum-LU', 'النتائج إيجابية نسبياً.', 'ئەنجامەکان بە بەراورد ئەرێنین.'], 'adverb'),
  w('dolayısıyla', 'do-la-yı-sıy-LA', 'وبالتالي', 'کەواتە', ['Bütçe azaldı, dolayısıyla proje ertelendi.', 'büt-ÇE a-zal-DI do-la-yı-sıy-LA pro-JE er-te-len-Dİ', 'قلّت الميزانية وبالتالي أُجّل المشروع.', 'بودجە کەم بووەوە، کەواتە پڕۆژەکە دواخرا.'], 'conjunction'),
]);

export const C1_VOCABULARY_EXTRA: VocabItem[] = [
  ...academicExtra, ...society, ...science, ...formal, ...law, ...advancedExtra,
];
