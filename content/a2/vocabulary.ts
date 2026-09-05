import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A2 vocabulary - everyday life: school, shopping, getting around, weather,
 * health, feelings, and the fixed social expressions Turks use constantly.
 */

const school = pack('school', 'a2', 'noun', [
  w('sınıf', 'sı-NIF', 'صفّ / فصل دراسي', 'پۆل', ['Sınıfımızda yirmi öğrenci var.', 'sı-nı-fı-mız-DA yir-Mİ öö-ren-DJİ VAR', 'في صفنا عشرون طالباً.', 'لە پۆلەکەماندا بیست قوتابی هەیە.']),
  w('sınav', 'sı-NAV', 'امتحان', 'تاقیکردنەوە', ['Yarın matematik sınavı var.', 'ya-RIN ma-te-ma-TİK sı-na-VI VAR', 'غداً امتحان رياضيات.', 'سبەینێ تاقیکردنەوەی بیرکاری هەیە.']),
  w('not', 'NOT', 'درجة / ملاحظة', 'نمرە / تێبینی', ['Sınavdan iyi not aldım.', 'sı-nav-DAN i-Yİ NOT al-DIM', 'حصلت على درجة جيدة في الامتحان.', 'لە تاقیکردنەوەکە نمرەی باشم هێنا.']),
  w('ödev', 'ö-DEV', 'واجب منزلي', 'ئەرکی ماڵەوە', ['Ödevimi bitirmedim.', 'ö-de-vi-Mİ bi-tir-me-DİM', 'لم أنهِ واجبي.', 'ئەرکەکەمم تەواو نەکرد.']),
  w('tahta', 'tah-TA', 'سبّورة', 'تەختە', ['Öğretmen tahtaya yazdı.', 'öö-ret-MEN tah-ta-YA yaz-DI', 'كتب المعلّم على السبورة.', 'مامۆستا لەسەر تەختەکە نووسی.']),
  w('teneffüs', 'te-nef-FÜS', 'استراحة بين الحصص', 'پشووی نێوان وانە', ['Teneffüste çay içtik.', 'te-nef-füs-TE ÇAY iç-TİK', 'شربنا الشاي في الاستراحة.', 'لە پشوودا چامان خواردەوە.']),
  w('müdür', 'mü-DÜR', 'مدير', 'بەڕێوەبەر', ['Müdür beni çağırdı.', 'mü-DÜR be-Nİ ça-ır-DI', 'استدعاني المدير.', 'بەڕێوەبەر بانگی کردم.']),
  w('kütüphane', 'kü-tüp-ha-NE', 'مكتبة', 'کتێبخانە', ['Kütüphanede ders çalıştım.', 'kü-tüp-ha-ne-DE DERS ça-lış-TIM', 'درست في المكتبة.', 'لە کتێبخانەکە وانەم خوێند.']),
  w('sözlük', 'söz-LÜK', 'قاموس', 'فەرهەنگ', ['Sözlükten kelimeye baktım.', 'söz-lük-TEN ke-li-me-YE bak-TIM', 'بحثت عن الكلمة في القاموس.', 'لە فەرهەنگەکە سەیری وشەکەم کرد.']),
  w('silgi', 'sil-Gİ', 'ممحاة', 'سڕەوە', ['Silgini alabilir miyim?', 'sil-gi-Nİ a-la-bi-LİR mi-yim', 'هل يمكنني أخذ ممحاتك؟', 'دەتوانم سڕەوەکەت وەربگرم؟']),
  w('mezun olmak', 'me-ZUN ol-mak', 'يتخرّج', 'دەرچوون', ['Geçen yıl mezun oldum.', 'ge-ÇEN YIL me-ZUN ol-dum', 'تخرجت العام الماضي.', 'ساڵی ڕابردوو دەرچووم.'], 'verb'),
  w('başarılı', 'ba-şa-rı-LI', 'ناجح / متفوّق', 'سەرکەوتوو', ['Çok başarılı bir öğrenci.', 'ÇOK ba-şa-rı-LI bir öö-ren-DJİ', 'طالب ناجح جداً.', 'قوتابییەکی زۆر سەرکەوتووە.'], 'adjective'),
  w('diploma', 'dip-lo-MA', 'شهادة', 'بڕوانامە', ['Diplomamı aldım.', 'dip-lo-ma-MI al-DIM', 'استلمت شهادتي.', 'بڕوانامەکەمم وەرگرت.']),
  w('konu', 'ko-NU', 'موضوع', 'بابەت', ['Bugünkü konu zor.', 'bu-gün-KÜ ko-NU ZOR', 'موضوع اليوم صعب.', 'بابەتی ئەمڕۆ قورسە.']),
]);

const shopping = pack('shopping', 'a2', 'noun', [
  w('alışveriş', 'a-lış-ve-RİŞ', 'تسوّق', 'بازاڕکردن', ['Alışverişe çıkalım.', 'a-lış-ve-ri-ŞE çı-ka-LIM', 'لنخرج للتسوّق.', 'با بچینە بازاڕکردن.']),
  w('mağaza', 'ma-a-ZA', 'متجر', 'فرۆشگا', ['Bu mağaza çok pahalı.', 'BU ma-a-ZA ÇOK pa-ha-LI', 'هذا المتجر غالٍ جداً.', 'ئەم فرۆشگایە زۆر گرانە.']),
  w('dükkân', 'dük-KÂN', 'محلّ', 'دوکان', ['Köşedeki dükkândan aldım.', 'kö-şe-de-Kİ dük-kân-DAN al-DIM', 'اشتريته من المحل الذي في الزاوية.', 'لە دوکانی سەر گۆشەکە کڕیم.']),
  w('fiyat', 'fi-YAT', 'سعر', 'نرخ', ['Fiyatlar çok arttı.', 'fi-yat-LAR ÇOK art-TI', 'ارتفعت الأسعار كثيراً.', 'نرخەکان زۆر بەرزبوونەوە.']),
  w('indirim', 'in-di-RİM', 'خصم / تنزيلات', 'داشکاندن', ['Yüzde elli indirim var.', 'yüz-DE el-Lİ in-di-RİM VAR', 'يوجد خصم خمسين بالمئة.', 'پەنجا لە سەد داشکاندن هەیە.']),
  w('kasa', 'ka-SA', 'صندوق الدفع', 'قاسە', ['Kasada sıra çok uzun.', 'ka-sa-DA sı-RA ÇOK u-ZUN', 'الطابور طويل عند الصندوق.', 'لە قاسەکە ڕیزەکە زۆر درێژە.']),
  w('fiş', 'FİŞ', 'إيصال', 'پسووڵە', ['Fişi saklayın lütfen.', 'fi-Şİ sak-la-YIN lüt-FEN', 'احتفظ بالإيصال من فضلك.', 'تکایە پسووڵەکە بپارێزە.']),
  w('poşet', 'po-ŞET', 'كيس', 'کیسە', ['Bir poşet alabilir miyim?', 'bir po-ŞET a-la-bi-LİR mi-yim', 'هل يمكنني أخذ كيس؟', 'دەتوانم کیسەیەک وەربگرم؟']),
  w('beden', 'be-DEN', 'مقاس', 'قەبارە', ['Bir büyük beden var mı?', 'bir bü-YÜK be-DEN var MI', 'هل يوجد مقاس أكبر؟', 'قەبارەیەکی گەورەتر هەیە؟']),
  w('denemek', 'de-ne-MEK', 'يجرّب / يقيس', 'تاقیکردنەوە', ['Bunu deneyebilir miyim?', 'bu-NU de-ne-ye-bi-LİR mi-yim', 'هل يمكنني تجربة هذا؟', 'دەتوانم ئەمە تاقی بکەمەوە؟'], 'verb'),
  w('satmak', 'sat-MAK', 'يبيع', 'فرۆشتن', ['Arabasını sattı.', 'a-ra-ba-sı-NI sat-TI', 'باع سيارته.', 'ئۆتۆمبێلەکەی فرۆشت.'], 'verb'),
  w('müşteri', 'müş-te-Rİ', 'زبون', 'کڕیار', ['Müşteri her zaman haklıdır.', 'müş-te-Rİ her za-MAN hak-lı-DIR', 'الزبون دائماً على حق.', 'کڕیار هەمیشە ڕاستە.']),
  w('nakit', 'na-KİT', 'نقداً', 'نەقد', ['Nakit mi kart mı?', 'na-KİT mi KART mı', 'نقداً أم بالبطاقة؟', 'نەقد یان کارت؟']),
  w('kredi kartı', 'kre-Dİ kar-tı', 'بطاقة ائتمان', 'کارتی قەرز', ['Kredi kartı geçiyor mu?', 'kre-Dİ kar-TI ge-çi-YOR mu', 'هل تُقبل بطاقة الائتمان؟', 'کارتی قەرز دەگونجێت؟']),
  w('para üstü', 'pa-RA üs-tü', 'الباقي من النقود', 'پارەی گەڕاوە', ['Para üstünüz burada.', 'pa-RA üs-tü-NÜZ bu-ra-DA', 'باقي نقودك هنا.', 'پارەی گەڕاوەکەت لێرەیە.']),
]);

const transportation = pack('transportation', 'a2', 'noun', [
  w('ulaşım', 'u-la-ŞIM', 'مواصلات', 'گواستنەوە', ['Şehirde ulaşım çok kolay.', 'şe-hir-DE u-la-ŞIM ÇOK ko-LAY', 'المواصلات سهلة جداً في المدينة.', 'لە شاردا گواستنەوە زۆر ئاسانە.']),
  w('otobüs', 'o-to-BÜS', 'حافلة', 'پاس', ['Otobüs geç kaldı.', 'o-to-BÜS GEÇ kal-DI', 'تأخرت الحافلة.', 'پاسەکە درەنگ کەوت.']),
  w('metro', 'met-RO', 'مترو', 'مێترۆ', ['Metroyla gidelim.', 'met-roy-LA gi-de-LİM', 'لنذهب بالمترو.', 'با بە مێترۆ بڕۆین.']),
  w('tramvay', 'tram-VAY', 'ترام', 'ترامڤای', ['Tramvay durağı nerede?', 'tram-VAY du-ra-I ne-re-DE', 'أين محطة الترام؟', 'وێستگەی ترامڤای لە کوێیە؟']),
  w('taksi', 'tak-Sİ', 'سيارة أجرة', 'تاکسی', ['Taksi çağıralım.', 'tak-Sİ ça-ı-ra-LIM', 'لنطلب سيارة أجرة.', 'با تاکسییەک بانگ بکەین.']),
  w('tren', 'TREN', 'قطار', 'شەمەندەفەر', ['Tren saat dokuzda kalkıyor.', 'TREN sa-AT do-kuz-DA kal-kı-YOR', 'ينطلق القطار الساعة التاسعة.', 'شەمەندەفەرەکە کاتژمێر نۆ دەڕوات.']),
  w('uçak', 'u-ÇAK', 'طائرة', 'فڕۆکە', ['Uçak rötar yaptı.', 'u-ÇAK rö-TAR yap-TI', 'تأخرت الطائرة.', 'فڕۆکەکە دواکەوت.']),
  w('vapur', 'va-PUR', 'عبّارة', 'کەشتی', ['Vapurla karşıya geçtik.', 'va-pur-LA kar-şı-YA geç-TİK', 'عبرنا إلى الضفة الأخرى بالعبّارة.', 'بە کەشتی پەڕینەوە ئەوبەر.']),
  w('bisiklet', 'bi-sik-LET', 'دراجة هوائية', 'دووچەرخە', ['Bisikletle işe gidiyorum.', 'bi-sik-let-LE i-ŞE gi-di-YO-rum', 'أذهب إلى العمل بالدراجة.', 'بە دووچەرخە دەچمە سەر کار.']),
  w('durak', 'du-RAK', 'موقف / محطة', 'وێستگە', ['Sonraki durakta ineceğim.', 'son-ra-Kİ du-rak-TA i-ne-dje-İM', 'سأنزل في الموقف التالي.', 'لە وێستگەی داهاتوو دادەبەزم.']),
  w('bilet', 'bi-LET', 'تذكرة', 'بلیت', ['İki bilet lütfen.', 'i-Kİ bi-LET lüt-FEN', 'تذكرتان من فضلك.', 'دوو بلیت تکایە.']),
  w('yolcu', 'yol-DJU', 'راكب / مسافر', 'گەشتیار', ['Yolcular otobüse bindi.', 'yol-dju-LAR o-to-bü-SE bin-Dİ', 'ركب المسافرون الحافلة.', 'گەشتیارەکان سواری پاسەکە بوون.']),
  w('şoför', 'şo-FÖR', 'سائق', 'شۆفێر', ['Şoför çok dikkatli.', 'şo-FÖR ÇOK dik-kat-LI', 'السائق حذر جداً.', 'شۆفێرەکە زۆر وریایە.']),
  w('trafik', 'tra-FİK', 'زحمة سير', 'هاتوچۆ', ['Trafik çok yoğun.', 'tra-FİK ÇOK yo-UN', 'حركة السير مزدحمة جداً.', 'هاتوچۆ زۆر قەرەباڵغە.']),
  w('benzin', 'ben-ZİN', 'بنزين', 'بەنزین', ['Benzin bitti.', 'ben-ZİN bit-Tİ', 'نفد البنزين.', 'بەنزین تەواو بوو.']),
  w('binmek', 'bin-MEK', 'يركب', 'سوارببوون', ['Otobüse bindim.', 'o-to-bü-SE bin-DİM', 'ركبت الحافلة.', 'سواری پاسەکە بووم.'], 'verb'),
  w('inmek', 'in-MEK', 'ينزل', 'دابەزین', ['Burada iniyorum.', 'bu-ra-DA i-ni-YO-rum', 'سأنزل هنا.', 'لێرە دادەبەزم.'], 'verb'),
]);

const travel = pack('travel', 'a2', 'noun', [
  w('seyahat', 'se-ya-HAT', 'سفر', 'گەشت', ['Seyahat etmeyi seviyorum.', 'se-ya-HAT et-me-Yİ se-vi-YO-rum', 'أحب السفر.', 'گەشتکردنم خۆشدەوێت.']),
  w('tatil', 'ta-TİL', 'عطلة / إجازة', 'پشوو', ['Tatile çıkıyoruz.', 'ta-ti-LE çı-kı-YO-ruz', 'سنخرج في إجازة.', 'دەچینە پشوو.']),
  w('pasaport', 'pa-sa-PORT', 'جواز سفر', 'پاسپۆرت', ['Pasaportunuz lütfen.', 'pa-sa-por-tu-NUZ lüt-FEN', 'جواز سفرك من فضلك.', 'پاسپۆرتەکەت تکایە.']),
  {
    ...w('vize', 'vi-ZE', 'تأشيرة', 'ڤیزە', ['Vize başvurusu yaptım.', 'vi-ZE baş-vu-ru-SU yap-TIM', 'قدّمت طلب تأشيرة.', 'داواکاری ڤیزەم کرد.']),
    // One word, two unrelated meanings a student WILL meet both of.
    senses: [
      sense('امتحان نصفي', 'تاقیکردنەوەی ناوەڕاست',
        ['Vize notlarım açıklandı.', 'vi-ZE not-la-RIM a-çık-lan-DI', 'أُعلنت درجات الامتحان النصفي.', 'نمرەکانی تاقیکردنەوەی ناوەڕاستم ڕاگەیەندران.'],
        {
          category: 'university',
          usage: b('في سياق الجامعة فقط.', 'تەنها لە دۆخی زانکۆدا.'),
        }),
    ],
  },
  w('bavul', 'ba-VUL', 'حقيبة سفر', 'جانتای گەشت', ['Bavulumu hazırladım.', 'ba-vu-lu-MU ha-zır-la-DIM', 'حضّرت حقيبتي.', 'جانتاکەمم ئامادە کرد.']),
  w('rezervasyon', 're-zer-vas-YON', 'حجز', 'حجزکردن', ['Otelde rezervasyonum var.', 'o-tel-DE re-zer-vas-yo-NUM VAR', 'لديّ حجز في الفندق.', 'لە هوتێلەکە حجزم هەیە.']),
  w('harita', 'ha-ri-TA', 'خريطة', 'نەخشە', ['Haritaya bakalım.', 'ha-ri-ta-YA ba-ka-LIM', 'لننظر إلى الخريطة.', 'با سەیری نەخشەکە بکەین.']),
  w('rehber', 'reh-BER', 'مرشد سياحي', 'ڕێبەر', ['Rehber bize şehri anlattı.', 'reh-BER bi-ZE şeh-Rİ an-lat-TI', 'شرح لنا المرشد المدينة.', 'ڕێبەرەکە شارەکەی بۆ ڕوونکردینەوە.']),
  w('turist', 'tu-RİST', 'سائح', 'گەشتیار', ['Şehirde çok turist var.', 'şe-hir-DE ÇOK tu-RİST VAR', 'يوجد سياح كثيرون في المدينة.', 'لە شاردا گەشتیاری زۆر هەیە.']),
  w('müze', 'mü-ZE', 'متحف', 'مۆزەخانە', ['Müze pazartesi kapalı.', 'mü-ZE pa-zar-te-Sİ ka-pa-LI', 'المتحف مغلق يوم الاثنين.', 'مۆزەخانەکە دووشەممە داخراوە.']),
  w('plaj', 'PLAJ', 'شاطئ', 'کەنارە', ['Plajda yüzdük.', 'plaj-DA yüz-DÜK', 'سبحنا في الشاطئ.', 'لە کەنارەکە مەلەمان کرد.']),
  w('yurt dışı', 'yurt dı-ŞI', 'الخارج (خارج البلاد)', 'دەرەوەی وڵات', ['Yurt dışına gitmek istiyorum.', 'yurt dı-şı-NA git-MEK is-ti-YO-rum', 'أريد السفر إلى الخارج.', 'دەمەوێت بچمە دەرەوەی وڵات.']),
  w('gezmek', 'gez-MEK', 'يتجوّل / يتنزّه', 'گەڕان', ['Bütün şehri gezdik.', 'bü-TÜN şeh-Rİ gez-DİK', 'تجولنا في المدينة كلها.', 'بە هەموو شارەکەدا گەڕاین.'], 'verb'),
]);

const weather = pack('weather', 'a2', 'noun', [
  w('hava durumu', 'ha-VA du-ru-mu', 'حالة الطقس', 'دۆخی کەشوهەوا', ['Hava durumuna baktın mı?', 'ha-VA du-ru-mu-NA bak-TIN mı', 'هل نظرت إلى حالة الطقس؟', 'سەیری دۆخی کەشوهەوات کرد؟']),
  w('güneş', 'gü-NEŞ', 'شمس', 'خۆر', ['Güneş çok parlak.', 'gü-NEŞ ÇOK par-LAK', 'الشمس ساطعة جداً.', 'خۆر زۆر ڕووناکە.']),
  w('güneşli', 'gü-neş-Lİ', 'مشمس', 'خۆرەتاو', ['Bugün hava güneşli.', 'bu-GÜN ha-VA gü-neş-Lİ', 'الجو مشمس اليوم.', 'ئەمڕۆ کەشوهەوا خۆرەتاوە.'], 'adjective'),
  w('yağmur', 'ya-MUR', 'مطر', 'باران', ['Yağmur yağıyor.', 'ya-MUR ya-ı-YOR', 'إنها تمطر.', 'باران دەبارێت.']),
  w('kar', 'KAR', 'ثلج', 'بەفر', ['Dün gece kar yağdı.', 'DÜN ge-DJE KAR ya-DI', 'تساقط الثلج ليلة أمس.', 'دوێنێ شەو بەفر باری.']),
  w('rüzgâr', 'rüz-GÂR', 'رياح', 'با', ['Rüzgâr çok kuvvetli.', 'rüz-GÂR ÇOK kuv-vet-Lİ', 'الرياح قوية جداً.', 'با زۆر بەهێزە.']),
  w('bulut', 'bu-LUT', 'سحابة', 'هەور', ['Gökyüzü bulutlu.', 'gök-yü-ZÜ bu-lut-LU', 'السماء غائمة.', 'ئاسمان هەوراوییە.']),
  w('sıcaklık', 'sı-djak-LIK', 'درجة الحرارة', 'پلەی گەرمی', ['Sıcaklık otuz derece.', 'sı-djak-LIK o-TUZ de-re-DJE', 'درجة الحرارة ثلاثون.', 'پلەی گەرمی سی پلەیە.']),
  w('derece', 'de-re-DJE', 'درجة', 'پلە', ['Bugün beş derece.', 'bu-GÜN BEŞ de-re-DJE', 'اليوم خمس درجات.', 'ئەمڕۆ پێنج پلەیە.']),
  w('fırtına', 'fır-tı-NA', 'عاصفة', 'ڕەشەبا', ['Fırtına çıktı.', 'fır-tı-NA çık-TI', 'هبّت عاصفة.', 'ڕەشەبا هەستا.']),
  w('sis', 'SİS', 'ضباب', 'تەم', ['Sabah sis vardı.', 'sa-BAH SİS var-DI', 'كان هناك ضباب صباحاً.', 'بەیانی تەم هەبوو.']),
  w('nem', 'NEM', 'رطوبة', 'شێ', ['Nem çok yüksek.', 'NEM ÇOK yük-SEK', 'الرطوبة عالية جداً.', 'شێ زۆر بەرزە.']),
  w('serin', 'se-RİN', 'منعش / بارد قليلاً', 'فێنک', ['Akşamları hava serin oluyor.', 'ak-şam-la-RI ha-VA se-RİN o-lu-YOR', 'يصبح الجو منعشاً في المساء.', 'ئێوارەکان کەشوهەوا فێنک دەبێت.'], 'adjective'),
]);

const health = pack('health', 'a2', 'noun', [
  w('sağlık', 'sa-LIK', 'صحّة', 'تەندروستی', ['Sağlık her şeyden önemli.', 'sa-LIK her şey-DEN ö-nem-Lİ', 'الصحة أهم من كل شيء.', 'تەندروستی لە هەموو شتێک گرنگترە.']),
  w('hastalık', 'has-ta-LIK', 'مرض', 'نەخۆشی', ['Bu hastalık bulaşıcı.', 'BU has-ta-LIK bu-la-şı-DJI', 'هذا المرض معدٍ.', 'ئەم نەخۆشییە گوازراوەیە.']),
  w('ağrı', 'a-RI', 'ألم', 'ئازار', ['Şiddetli bir ağrım var.', 'şid-det-Lİ bir a-RIM VAR', 'لديّ ألم شديد.', 'ئازارێکی توندم هەیە.']),
  w('ateş', 'a-TEŞ', 'حرارة / حمّى', 'تا', ['Çocuğun ateşi var.', 'ço-dju-UN a-te-Şİ VAR', 'الطفل لديه حرارة.', 'منداڵەکە تای هەیە.']),
  w('grip', 'GRİP', 'إنفلونزا', 'هەڵامەت', ['Grip oldum.', 'GRİP ol-DUM', 'أصبت بالإنفلونزا.', 'تووشی هەڵامەت بووم.']),
  w('öksürük', 'ök-sü-RÜK', 'سعال', 'کۆکە', ['Öksürüğüm geçmiyor.', 'ök-sü-rü-ÜM geç-mi-YOR', 'سعالي لا يزول.', 'کۆکەکەم نەوەستاوە.']),
  w('ilaç', 'i-LAÇ', 'دواء', 'دەرمان', ['İlacını içtin mi?', 'i-la-djı-NI iç-TİN mi', 'هل تناولت دواءك؟', 'دەرمانەکەت خواردەوە؟']),
  w('reçete', 're-çe-TE', 'وصفة طبية', 'ڕەچەتە', ['Doktor reçete yazdı.', 'dok-TOR re-çe-TE yaz-DI', 'كتب الطبيب وصفة.', 'پزیشکەکە ڕەچەتەی نووسی.']),
  w('muayene', 'mu-a-ye-NE', 'فحص طبي', 'پشکنین', ['Muayene için randevu aldım.', 'mu-a-ye-NE i-ÇİN ran-de-VU al-DIM', 'أخذت موعداً للفحص.', 'بۆ پشکنین کاتم وەرگرت.']),
  w('hemşire', 'hem-şi-RE', 'ممرّضة', 'پەرستار', ['Hemşire iğne yaptı.', 'hem-şi-RE i-NE yap-TI', 'أعطتني الممرضة حقنة.', 'پەرستارەکە دەرزی لێدام.']),
  w('ambulans', 'am-bu-LANS', 'إسعاف', 'ئەمبوڵانس', ['Hemen ambulans çağırın!', 'he-MEN am-bu-LANS ça-ı-rın', 'اطلبوا الإسعاف فوراً!', 'دەستبەجێ ئەمبوڵانس بانگ بکەن!']),
  w('iyileşmek', 'i-yi-leş-MEK', 'يُشفى / يتحسّن', 'چاکبوونەوە', ['Çabuk iyileş!', 'ça-BUK i-yi-LEŞ', 'اشفَ سريعاً!', 'بە زوویی چاک ببەوە!'], 'verb'),
  w('dinlenmek', 'din-len-MEK', 'يستريح', 'پشوودان', ['Biraz dinlenmelisin.', 'bi-RAZ din-len-me-li-SİN', 'يجب أن تستريح قليلاً.', 'دەبێت کەمێک پشوو بدەیت.'], 'verb'),
  w('sağlıklı', 'sa-lık-LI', 'صحّي / سليم', 'تەندروست', ['Sağlıklı beslenmeliyiz.', 'sa-lık-LI bes-len-me-li-YİZ', 'يجب أن نتغذى بشكل صحي.', 'دەبێت بە تەندروستی بخۆین.'], 'adjective'),
]);

const emotions = pack('emotions', 'a2', 'noun', [
  w('duygu', 'duy-GU', 'شعور / عاطفة', 'هەست', ['Duygularımı anlatamıyorum.', 'duy-gu-la-rı-MI an-la-ta-mı-YO-rum', 'لا أستطيع التعبير عن مشاعري.', 'ناتوانم هەستەکانم دەرببڕم.']),
  w('mutluluk', 'mut-lu-LUK', 'سعادة', 'دڵخۆشی', ['Mutluluk küçük şeylerde.', 'mut-lu-LUK kü-ÇÜK şey-ler-DE', 'السعادة في الأشياء الصغيرة.', 'دڵخۆشی لە شتە بچووکەکاندایە.']),
  w('üzüntü', 'ü-zün-TÜ', 'حزن', 'خەم', ['Üzüntüsünü gizledi.', 'ü-zün-tü-SÜ-nü giz-le-Dİ', 'أخفى حزنه.', 'خەمەکەی شاردەوە.']),
  w('korku', 'kor-KU', 'خوف', 'ترس', ['Korkularımı yendim.', 'kor-ku-la-rı-MI yen-DİM', 'تغلبت على مخاوفي.', 'زاڵ بووم بەسەر ترسەکانمدا.']),
  w('kızgın', 'kız-GIN', 'غاضب', 'تووڕە', ['Bana kızgın mısın?', 'ba-NA kız-GIN mı-sın', 'هل أنت غاضب مني؟', 'لە من تووڕەیت؟'], 'adjective'),
  w('sinirli', 'si-nir-Lİ', 'متوتّر / عصبي', 'ئەعسابی', ['Bugün çok sinirliyim.', 'bu-GÜN ÇOK si-nir-li-YİM', 'أنا عصبي جداً اليوم.', 'ئەمڕۆ زۆر ئەعسابیم.'], 'adjective'),
  w('heyecanlı', 'he-ye-djan-LI', 'متحمّس', 'دڵگەرم', ['Sınav için heyecanlıyım.', 'sı-NAV i-ÇİN he-ye-djan-lı-YIM', 'أنا متحمس للامتحان.', 'بۆ تاقیکردنەوەکە دڵگەرمم.'], 'adjective'),
  w('endişeli', 'en-di-şe-Lİ', 'قلق', 'نیگەران', ['Annem çok endişeli.', 'an-NEM ÇOK en-di-şe-Lİ', 'أمي قلقة جداً.', 'دایکم زۆر نیگەرانە.'], 'adjective'),
  w('şaşkın', 'şaş-KIN', 'مندهش / متفاجئ', 'سەرسام', ['Haberi duyunca şaşkın kaldım.', 'ha-be-Rİ du-yun-DJA şaş-KIN kal-DIM', 'ذُهلت عندما سمعت الخبر.', 'کاتێک هەواڵەکەم بیست سەرسام بووم.'], 'adjective'),
  w('gurur', 'gu-RUR', 'فخر', 'شانازی', ['Seninle gurur duyuyorum.', 'se-nin-LE gu-RUR du-yu-YO-rum', 'أنا فخور بك.', 'شانازیت پێوە دەکەم.']),
  w('özlemek', 'öz-le-MEK', 'يشتاق', 'بیرکردن', ['Ailemi çok özledim.', 'a-i-le-Mİ ÇOK öz-le-DİM', 'اشتقت لعائلتي كثيراً.', 'زۆر بیری خێزانەکەمم کرد.'], 'verb'),
  w('sıkılmak', 'sı-kıl-MAK', 'يشعر بالملل', 'بێزاربوون', ['Evde çok sıkıldım.', 'ev-DE ÇOK sı-kıl-DIM', 'مللت كثيراً في البيت.', 'لە ماڵەوە زۆر بێزار بووم.'], 'verb'),
  w('rahat', 'ra-HAT', 'مرتاح / مريح', 'ئاسوودە', ['Burada kendimi rahat hissediyorum.', 'bu-ra-DA ken-di-Mİ ra-HAT his-se-di-YO-rum', 'أشعر بالراحة هنا.', 'لێرە هەست بە ئاسوودەیی دەکەم.'], 'adjective'),
  w('sevinç', 'se-VİNÇ', 'فرح', 'خۆشی', ['Gözlerinde sevinç vardı.', 'göz-le-rin-DE se-VİNÇ var-DI', 'كان الفرح في عينيه.', 'لە چاوەکانیدا خۆشی هەبوو.']),
]);

const expressions = pack('expressions', 'a2', 'phrase', [
  w('Ne var ne yok?', 'NE VAR ne YOK', 'ما الأخبار؟ / ما الجديد؟', 'چ هەیە چ نییە؟', ['Selam, ne var ne yok?', 'se-LAM NE VAR ne YOK', 'أهلاً، ما الأخبار؟', 'سڵاو، چ هەیە چ نییە؟']),
  w('Kolay gelsin', 'ko-LAY gel-sin', 'عساه يهون (تُقال لمن يعمل)', 'ئاسان بێت (بۆ ئەوەی کار دەکات)', ['Kolay gelsin ustam!', 'ko-LAY gel-SİN us-TAM', 'الله يعينك يا معلّم!', 'ئاسان بێت ئوستا!']),
  w('Geçmiş olsun', 'geç-MİŞ ol-sun', 'سلامتك / شفاك الله', 'چاک ببیتەوە', ['Hasta olmuşsun, geçmiş olsun.', 'has-TA ol-muş-sun geç-MİŞ ol-sun', 'سمعت أنك مريض، سلامتك.', 'بیستم نەخۆش بوویت، چاک ببیتەوە.']),
  w('Afiyet olsun', 'a-fi-YET ol-sun', 'بالهناء والشفاء / صحتين', 'نۆشی گیانت', ['Afiyet olsun, yemek nasıl?', 'a-fi-YET ol-SUN ye-MEK na-SIL', 'بالهناء والشفاء، كيف الطعام؟', 'نۆشی گیانت، خواردنەکە چۆنە؟']),
  w('Elinize sağlık', 'e-li-ni-ZE sa-lık', 'سلمت يداكِ (لمن طبخ)', 'دەستت خۆش بێت', ['Çok lezzetli, elinize sağlık.', 'ÇOK lez-zet-Lİ e-li-ni-ZE sa-LIK', 'لذيذ جداً، سلمت يداك.', 'زۆر خۆشە، دەستت خۆش بێت.']),
  w('İnşallah', 'in-şal-LAH', 'إن شاء الله', 'ئینشاڵا', ['İnşallah yarın görüşürüz.', 'in-şal-LAH ya-RIN gö-rü-şü-RÜZ', 'إن شاء الله نلتقي غداً.', 'ئینشاڵا سبەینێ دەبینینەوە.']),
  w('Maşallah', 'ma-şal-LAH', 'ما شاء الله', 'ماشاڵا', ['Maşallah, çok büyümüş!', 'ma-şal-LAH ÇOK bü-yü-MÜŞ', 'ما شاء الله، كم كبر!', 'ماشاڵا، زۆر گەورە بووە!']),
  w('Estağfurullah', 'es-ta-fu-rul-LAH', 'لا داعي للشكر / العفو', 'شایانی نییە', ['Estağfurullah, ne demek.', 'es-ta-fu-rul-LAH NE de-mek', 'العفو، لا داعي.', 'شایانی نییە، چی واتا.']),
  w('Şerefe', 'şe-re-FE', 'نخبك / في صحتك', 'بۆ سەلامەتیت', ['Şerefe, dostlar!', 'şe-re-FE dost-LAR', 'نخبكم يا أصدقاء!', 'بۆ سەلامەتیتان، هاوڕێیان!']),
  w('Kendine iyi bak', 'ken-di-NE i-Yİ BAK', 'اعتنِ بنفسك', 'ئاگات لە خۆت بێت', ['Görüşürüz, kendine iyi bak.', 'gö-rü-şü-RÜZ ken-di-NE i-Yİ BAK', 'إلى اللقاء، اعتنِ بنفسك.', 'دیدارمان، ئاگات لە خۆت بێت.']),
  w('Bir dakika', 'bir da-ki-KA', 'لحظة واحدة', 'خولەکێک', ['Bir dakika, hemen geliyorum.', 'bir da-ki-KA he-MEN ge-li-YO-rum', 'لحظة، سآتي حالاً.', 'خولەکێک، دەستبەجێ دێم.']),
  w('Tabii ki', 'ta-Bİ-i ki', 'بالتأكيد / طبعاً', 'بێگومان', ['Tabii ki yardım ederim.', 'ta-Bİ-i Kİ yar-DIM e-de-rim', 'بالتأكيد سأساعد.', 'بێگومان یارمەتی دەدەم.']),
  w('Maalesef', 'ma-a-le-SEF', 'للأسف', 'بەداخەوە', ['Maalesef gelemeyeceğim.', 'ma-a-le-SEF ge-le-me-ye-dje-İM', 'للأسف لن أستطيع القدوم.', 'بەداخەوە ناتوانم بێم.']),
  w('Bence', 'ben-DJE', 'برأيي', 'بە بۆچوونی من', ['Bence bu doğru değil.', 'ben-DJE BU do-RU de-İL', 'برأيي هذا ليس صحيحاً.', 'بە بۆچوونی من ئەمە ڕاست نییە.']),
  w('Haklısın', 'hak-lı-SIN', 'أنت على حق', 'ڕاست دەکەیت', ['Evet, haklısın.', 'e-VET hak-lı-SIN', 'نعم، أنت على حق.', 'بەڵێ، ڕاست دەکەیت.']),
  w('Boş ver', 'BOŞ VER', 'دعك من ذلك / لا يهم', 'وازی لێبهێنە', ['Boş ver, önemli değil.', 'BOŞ VER ö-nem-Lİ de-İL', 'دعك منه، ليس مهماً.', 'وازی لێبهێنە، گرنگ نییە.']),
  w('Başın sağ olsun', 'ba-ŞIN SA ol-sun', 'البقية في حياتك (تعزية)', 'سەرت سەلامەت بێت (سەرەخۆشی)', ['Başın sağ olsun, çok üzüldüm.', 'ba-ŞIN SA ol-SUN ÇOK ü-zül-DÜM', 'البقية في حياتك، حزنت كثيراً.', 'سەرت سەلامەت بێت، زۆر خەمبار بووم.']),
  w('Hayırlı olsun', 'ha-yır-LI ol-sun', 'مبارك (لعمل أو شراء جديد)', 'پیرۆز بێت', ['Yeni işin hayırlı olsun.', 'ye-Nİ i-ŞİN ha-yır-LI ol-sun', 'مبارك عملك الجديد.', 'کارە نوێیەکەت پیرۆز بێت.']),
]);

export const A2_VOCABULARY: VocabItem[] = [
  ...school, ...shopping, ...transportation, ...travel,
  ...weather, ...health, ...emotions, ...expressions,
];
