import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * A third set of situational packs, filling the gaps the first two left.
 *
 * Between them, the existing packs cover the classroom situations and the
 * administrative ones. Missing were the everyday encounters that carry the
 * most social risk for a learner: apologising, complaining, being interviewed,
 * describing a person, and handling numbers out loud — prices, dates, times
 * and quantities, which are where confident speakers still stumble.
 *
 * The numbers pack in particular is deliberately spoken-form: it writes the
 * numerals the way they are *said*, so it pairs with the generated number
 * drills rather than repeating them.
 */
export const SITUATION_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 'q-a1-greetings',
    level: 'a1',
    order: 100,
    title: 'Tanışma ve Nezaket',
    titleI18n: b('التعارف والمجاملة', 'ناسیاری و ڕێزلێنان'),
    focus: b(
      'صيغ المجاملة التركية أكثر تحديداً من العربية: لكل موقف عبارة خاصّة به.',
      'دەربڕینی ڕێزلێنانی تورکی وردترە: بۆ هەر دۆخێک دەستەواژەیەکی تایبەت.',
    ),
    sentences: [
      p('Memnun oldum, ben Ahmet.', 'mem-NUN ol-DUM BEN ah-MET', 'تشرّفت، أنا أحمد.', 'دڵخۆشم، من ئەحمەدم.'),
      p('Adınız neydi, tekrar söyler misiniz?', 'a-dı-NIZ ney-Dİ tek-RAR söy-LER mi-si-NİZ', 'ما كان اسمك، هل تكرّره؟', 'ناوت چی بوو، دووبارەی دەکەیتەوە؟'),
      p('Kolay gelsin!', 'ko-LAY gel-SİN', 'الله يعينك (لمن يعمل).', 'ماندوو نەبیت!'),
      p('Ellerine sağlık, çok lezzetliydi.', 'el-le-ri-NE sağ-LIK ÇOK lez-zet-liy-Dİ', 'سلمت يداك، كان لذيذاً جداً.', 'دەستت خۆش بێت، زۆر بەتام بوو.'),
      p('Geçmiş olsun, çabuk iyileş.', 'geç-MİŞ ol-SUN ça-BUK i-yi-LEŞ', 'سلامتك، اشفَ سريعاً.', 'خودا شیفات بدات، زوو چاک ببەوە.'),
      p('Rica ederim, önemli değil.', 'ri-CA e-de-RİM ö-nem-Lİ de-ĞİL', 'العفو، لا يهمّ.', 'شایانی نییە، گرنگ نییە.'),
      p('Görüşmek üzere.', 'gö-rüş-MEK ü-ze-RE', 'إلى اللقاء.', 'بۆ بینینەوە.'),
      p('Hoşça kal, kendine iyi bak.', 'hoş-ÇA kal ken-di-NE i-Yİ bak', 'مع السلامة، اعتنِ بنفسك.', 'خوات لەگەڵ، ئاگات لە خۆت بێت.'),
    ],
  },
  {
    id: 'q-a1-numbers',
    level: 'a1',
    order: 101,
    title: 'Sayıları Söylemek',
    titleI18n: b('نطق الأرقام', 'وتنی ژمارەکان'),
    focus: b(
      'الأرقام كما تُنطق لا كما تُكتب: لاحظ أن «yüz» و«bin» تقالان وحدهما بلا «bir».',
      'ژمارەکان وەک دەوترێن: «yüz» و «bin» بەبێ «bir» دەوترێن.',
    ),
    sentences: [
      p('Bu kalem yirmi beş lira.', 'BU ka-LEM yir-Mİ BEŞ li-RA', 'هذا القلم خمسة وعشرون ليرة.', 'ئەم پێنووسە بیست و پێنج لیرەیە.'),
      p('Saat üç buçukta buluşalım.', 'sa-AT ÜÇ bu-çuk-TA bu-lu-şa-LIM', 'لنلتقِ الساعة الثالثة والنصف.', 'کاتژمێر سێ و نیو یەکتر ببینین.'),
      p('Dörde çeyrek var.', 'dör-DE çey-REK var', 'الساعة الرابعة إلّا ربع.', 'چارەکێک ماوە بۆ چوار.'),
      p('On beş Mayıs iki bin yirmi altı.', 'ON BEŞ ma-YIS i-Kİ BİN yir-Mİ al-TI', 'الخامس عشر من أيار ٢٠٢٦.', 'پانزەی ئایاری دوو هەزار و بیست و شەش.'),
      p('Yüz kişi katıldı.', 'YÜZ ki-Şİ ka-tıl-DI', 'شارك مئة شخص.', 'سەد کەس بەشداری کرد.'),
      p('Bin lira yetmez.', 'BİN li-RA yet-MEZ', 'ألف ليرة لا تكفي.', 'هەزار لیرە بەس نییە.'),
      p('Bir milyon insan yaşıyor.', 'BİR mil-YON in-SAN ya-şı-YOR', 'يعيش مليون إنسان.', 'ملیۆنێک مرۆڤ دەژی.'),
      p('Üçte biri tamamlandı.', 'üç-TE bi-Rİ ta-mam-lan-DI', 'اكتمل ثلثه.', 'سێیەکی تەواو بوو.'),
    ],
  },
  /* ================================ A2 ================================ */
  {
    id: 'q-a2-transport',
    level: 'a2',
    order: 102,
    title: 'Yolda',
    titleI18n: b('في الطريق', 'لە ڕێگادا'),
    focus: b(
      'أفعال الركوب والنزول تأخذ حالات مختلفة: otobüse binmek، otobüsten inmek.',
      'کرداری سواربوون و دابەزین حاڵەتی جیاواز وەردەگرن.',
    ),
    sentences: [
      p('Hangi otobüse binmeliyim?', 'han-Gİ o-to-bü-SE bin-me-li-YİM', 'أي حافلة عليّ أن أركب؟', 'دەبێت سواری کام پاس بم؟'),
      p('Bir sonraki durakta iniyorum.', 'BİR son-ra-Kİ du-rak-TA i-ni-yo-RUM', 'أنزل في المحطّة القادمة.', 'لە وێستگەی داهاتوودا دادەبەزم.'),
      p('Metro daha hızlı olur.', 'met-RO da-HA hız-LI o-LUR', 'المترو أسرع.', 'مێترۆ خێراترە.'),
      p('Bilet nereden alınıyor?', 'bi-LET ne-re-DEN a-lı-nı-YOR', 'من أين يُشترى التذكرة؟', 'بلیت لە کوێوە دەکڕدرێت؟'),
      p('Trafik çok yoğun, geç kalacağız.', 'tra-FİK ÇOK yo-ĞUN GEÇ ka-la-ca-ĞIZ', 'المرور مزدحم جداً، سنتأخّر.', 'هاتوچۆ زۆر قەرەباڵغە، دوادەکەوین.'),
      p('Taksiye binelim mi?', 'tak-si-YE bi-ne-LİM mi', 'هل نركب سيارة أجرة؟', 'سواری تاکسی ببین؟'),
      p('Arabayı garaja park ettim.', 'a-ra-ba-YI ga-ra-JA PARK et-TİM', 'ركنت السيارة في المرآب.', 'ئۆتۆمبێلەکەم لە گەراجەکە ڕاگرت.'),
      p('Yolculuk iki saat sürüyor.', 'yol-cu-LUK i-Kİ sa-AT sü-rü-YOR', 'تستغرق الرحلة ساعتين.', 'گەشتەکە دوو کاتژمێر دەخایەنێت.'),
    ],
  },
  {
    id: 'q-a2-weather',
    level: 'a2',
    order: 103,
    title: 'Hava Nasıl?',
    titleI18n: b('كيف الطقس؟', 'کەشەکە چۆنە؟'),
    focus: b(
      'الطقس يُبنى بـ «hava» + صفة، والأمطار بأفعالها الخاصّة: yağmur yağıyor.',
      'کەشوهەوا بە «hava» + ئاوەڵناو دروست دەبێت.',
    ),
    sentences: [
      p('Bugün hava çok soğuk.', 'bu-GÜN ha-VA ÇOK so-ĞUK', 'الطقس بارد جداً اليوم.', 'ئەمڕۆ کەشەکە زۆر ساردە.'),
      p('Yağmur yağıyor, şemsiyeni al.', 'yağ-MUR ya-ğı-YOR şem-si-ye-Nİ al', 'المطر ينزل، خذ مظلّتك.', 'باران دەبارێت، چەترەکەت ببە.'),
      p('Yarın kar yağacak deniyor.', 'ya-RIN KAR ya-ğa-CAK de-ni-YOR', 'يقال إن الثلج سينزل غداً.', 'دەڵێن سبەینێ بەفر دەبارێت.'),
      p('Rüzgâr çok sert esiyor.', 'rüz-GÂR ÇOK SERT e-si-YOR', 'الريح تهبّ بقوّة.', 'با بە توندی هەڵدەکات.'),
      p('Güneş açtı, hava ısındı.', 'gü-NEŞ aç-TI ha-VA ı-sın-DI', 'ظهرت الشمس ودفئ الجوّ.', 'خۆر دەرکەوت و کەشەکە گەرم بوو.'),
      p('Yazın burası çok sıcak olur.', 'ya-ZIN bu-ra-SI ÇOK sı-CAK o-LUR', 'يصبح هذا المكان حارّاً جداً في الصيف.', 'هاوینان ئێرە زۆر گەرم دەبێت.'),
      p('Sonbaharda yapraklar dökülür.', 'son-ba-har-DA yap-rak-LAR dö-kü-LÜR', 'تتساقط الأوراق في الخريف.', 'لە پاییزدا گەڵاکان دەوەرن.'),
      p('Hava kapalı ama yağmıyor.', 'ha-VA ka-pa-LI a-MA yağ-mı-YOR', 'الجوّ غائم لكنه لا يمطر.', 'کەشەکە هەورە بەڵام باران نابارێت.'),
    ],
  },
  {
    id: 'q-a2-market',
    level: 'a2',
    order: 104,
    title: 'Pazarda',
    titleI18n: b('في السوق', 'لە بازاڕدا'),
    focus: b(
      'وحدات الشراء: kilo, tane, demet. ولاحظ أن السعر يُسأل بـ «kaça» لا «kaç».',
      'یەکەکانی کڕین: kilo, tane, demet.',
    ),
    sentences: [
      p('Domates kaça?', 'do-ma-TES ka-ÇA', 'بكم الطماطم؟', 'تەماتە بە چەندە؟'),
      p('İki kilo patlıcan alayım.', 'i-Kİ ki-LO pat-lı-CAN a-la-YIM', 'سآخذ كيلوين من الباذنجان.', 'دوو کیلۆ باینجانی ڕەش دەکڕم.'),
      p('Bir demet maydanoz lütfen.', 'BİR de-MET may-da-NOZ lüt-FEN', 'حزمة بقدونس من فضلك.', 'یەک دەستە جەعدە تکایە.'),
      p('Zeytinyağı bitmiş, almam lazım.', 'zey-tin-ya-ĞI bit-MİŞ al-MAM la-ZIM', 'زيت الزيتون نفد، عليّ شراؤه.', 'ڕۆنی زەیتوون تەواو بووە، پێویستە بیکڕم.'),
      p('Bu kabaklar taze mi?', 'BU ka-bak-LAR ta-ZE mi', 'هل هذه الكوسا طازجة؟', 'ئەم کولەکانە تازەن؟'),
      p('Son fiyat ne olur?', 'SON fi-YAT NE o-LUR', 'كم يكون السعر الأخير؟', 'نرخی کۆتایی چەند دەبێت؟'),
      p('Poşet ister misiniz?', 'po-ŞET is-TER mi-si-NİZ', 'هل تريدون كيساً؟', 'کیسەتان دەوێت؟'),
      p('Hepsi ne kadar tuttu?', 'hep-Sİ NE ka-DAR tut-TU', 'كم صار المجموع؟', 'هەموویان چەند بوو؟'),
    ],
  },
  /* ================================ B1 ================================ */
  {
    id: 'q-b1-apology',
    level: 'b1',
    order: 105,
    title: 'Özür ve Açıklama',
    titleI18n: b('الاعتذار والتوضيح', 'داوای لێبوردن و ڕوونکردنەوە'),
    focus: b(
      'الاعتذار التركي يتدرّج: pardon (عابر)، özür dilerim (رسمي)، kusura bakma (حميم).',
      'داوای لێبوردنی تورکی پلەبەندییە: pardon، özür dilerim، kusura bakma.',
    ),
    sentences: [
      p('Özür dilerim, geç kaldım.', 'ö-ZÜR di-le-RİM GEÇ kal-DIM', 'أعتذر، تأخّرت.', 'داوای لێبوردن دەکەم، دواکەوتم.'),
      p('Kusura bakma, unutmuşum.', 'ku-su-RA bak-MA u-nut-mu-ŞUM', 'لا تؤاخذني، نسيت.', 'لێم مەگرە، لەبیرم چووە.'),
      p('Trafiğe takıldım, o yüzden gecikti.', 'tra-fi-ĞE ta-kıl-DIM O yüz-DEN ge-cik-Tİ', 'علقت في الزحام، لذلك تأخّر.', 'لە قەرەباڵغیدا گیرم خوارد، بۆیە درەنگ کەوت.'),
      p('Yanlış anlaşılma olmuş.', 'yan-LIŞ an-la-şıl-MA ol-MUŞ', 'يبدو أنه حدث سوء فهم.', 'وا دیارە تێگەیشتنێکی هەڵە ڕوویداوە.'),
      p('Benim hatam, düzeltirim.', 'be-NİM ha-TAM dü-zel-ti-RİM', 'خطئي، سأصلحه.', 'هەڵەی منە، ڕاستی دەکەمەوە.'),
      p('Bir daha olmayacak, söz.', 'bir da-HA ol-ma-ya-CAK söz', 'لن يتكرّر، أعدك.', 'جارێکی تر ناکرێت، بەڵێن.'),
      p('Rahatsız ettiysem affedersiniz.', 'ra-hat-SIZ et-tiy-SEM af-fe-der-si-NİZ', 'أعتذر إن كنت أزعجتكم.', 'ئەگەر ناڕەحەتم کردوون بمبوورن.'),
      p('Anlayışınız için teşekkür ederim.', 'an-la-yı-şı-NIZ i-ÇİN te-şek-KÜR e-de-RİM', 'أشكركم على تفهّمكم.', 'سوپاس بۆ تێگەیشتنتان.'),
    ],
  },
  {
    id: 'q-b1-people',
    level: 'b1',
    order: 106,
    title: 'İnsanları Tarif Etmek',
    titleI18n: b('وصف الأشخاص', 'وەسفکردنی کەسان'),
    focus: b(
      'الوصف الجسدي يُبنى بالإضافة: «uzun boylu» لا «uzun». والطبع بصفات مستقلّة.',
      'وەسفی جەستەیی بە پێکهاتە دروست دەبێت: «uzun boylu».',
    ),
    sentences: [
      p('Uzun boylu, esmer bir adam.', 'u-ZUN boy-LU es-MER bir a-DAM', 'رجل طويل القامة، أسمر.', 'پیاوێکی باڵا بەرز و قاوەیی.'),
      p('Kirpikleri çok uzun.', 'kir-pik-le-Rİ ÇOK u-ZUN', 'رموشه طويلة جداً.', 'برژانگەکانی زۆر درێژن.'),
      p('Gözlük takıyor, sakalı var.', 'göz-LÜK ta-kı-YOR sa-ka-LI var', 'يلبس نظّارة وله لحية.', 'چاویلکە لەبەر دەکات و ڕیشی هەیە.'),
      p('Çok sabırlı ve anlayışlı biri.', 'ÇOK sa-bır-LI ve an-la-yış-LI bi-Rİ', 'شخص صبور ومتفهّم جداً.', 'کەسێکی زۆر ئارامگر و تێگەیشتووە.'),
      p('Biraz utangaç ama çok samimi.', 'bi-RAZ u-tan-GAÇ a-MA ÇOK sa-mi-Mİ', 'خجول قليلاً لكنه صادق جداً.', 'کەمێک شەرمنە بەڵام زۆر دڵسۆزە.'),
      p('Kime benziyor, babasına mı?', 'ki-ME ben-zi-YOR ba-ba-sı-NA mı', 'بمن يشبه، بأبيه؟', 'لە کێ دەچێت، لە باوکی؟'),
      p('Her zaman güler yüzlüdür.', 'HER za-MAN gü-LER yüz-lü-DÜR', 'دائماً بشوش الوجه.', 'هەمیشە ڕووخۆشە.'),
      p('Yaşını hiç göstermiyor.', 'ya-şı-NI HİÇ gös-ter-mi-YOR', 'لا يبدو عليه عمره أبداً.', 'هەرگیز تەمەنی دیار نییە.'),
    ],
  },
  {
    id: 'q-b1-complaint',
    level: 'b1',
    order: 107,
    title: 'Müşteri Şikâyeti',
    titleI18n: b('شكوى الزبون', 'گلەیی کڕیار'),
    focus: b(
      'الشكوى المهذّبة تبدأ بالحدث لا بالاتّهام، وتنتهي بطلب واضح.',
      'گلەیی بە ڕێزەوە بە ڕووداوەکە دەست پێدەکات نەک بە تۆمەتبارکردن.',
    ),
    sentences: [
      p('Ürün hasarlı geldi.', 'ü-RÜN ha-sar-LI gel-Dİ', 'وصل المنتج تالفاً.', 'بەرهەمەکە زیانلێکەوتوو گەیشت.'),
      p('Kargo bir haftadır gelmedi.', 'kar-GO bir haf-ta-DIR gel-me-Dİ', 'الشحنة لم تصل منذ أسبوع.', 'کارگۆکە هەفتەیەکە نەگەیشتووە.'),
      p('İade etmek istiyorum.', 'i-a-DE et-MEK is-ti-yo-RUM', 'أريد الإرجاع.', 'دەمەوێت بیگەڕێنمەوە.'),
      p('Garanti kapsamında değil mi?', 'ga-ran-Tİ kap-sa-mın-DA de-ĞİL mi', 'أليس ضمن الضمان؟', 'لە چوارچێوەی گەرەنتیدا نییە؟'),
      p('Faturayı yanımda getirdim.', 'fa-tu-ra-YI ya-nım-DA ge-tir-DİM', 'أحضرت الفاتورة معي.', 'پسووڵەکەم لەگەڵ خۆم هێنا.'),
      p('Yetkiliyle görüşebilir miyim?', 'yet-ki-liy-LE gö-rü-şe-bi-LİR mi-YİM', 'هل يمكنني مقابلة المسؤول؟', 'دەتوانم لەگەڵ بەرپرس بدوێم؟'),
      p('Bir çözüm bulmanızı rica ediyorum.', 'BİR çö-ZÜM bul-ma-nı-ZI ri-CA e-di-yo-RUM', 'أرجو أن تجدوا حلاً.', 'داواتان لێدەکەم چارەسەرێک بدۆزنەوە.'),
      p('Şikâyetimi nereye iletebilirim?', 'şi-kâ-ye-ti-Mİ ne-re-YE i-le-te-bi-li-RİM', 'إلى أين أوجّه شكواي؟', 'گلەییەکەم بۆ کوێ بنێرم؟'),
    ],
  },
  /* ================================ B2 ================================ */
  {
    id: 'q-b2-interview',
    level: 'b2',
    order: 108,
    title: 'İş Görüşmesi',
    titleI18n: b('مقابلة العمل', 'چاوپێکەوتنی کار'),
    focus: b(
      'لغة المقابلة: الحديث عن التجربة بالماضي، وعن الخطط بـ -ecek، وعن القدرة بـ -ebil.',
      'زمانی چاوپێکەوتن: ئەزموون بە ڕابردوو، پلان بە -ecek.',
    ),
    sentences: [
      p('Beş yıllık iş deneyimim var.', 'BEŞ yıl-LIK İŞ de-ne-yi-MİM var', 'لديّ خبرة عمل خمس سنوات.', 'پێنج ساڵ ئەزموونی کارم هەیە.'),
      p('Ekip çalışmasına yatkınım.', 'e-KİP ça-lış-ma-sı-NA yat-kı-NIM', 'أميل إلى العمل الجماعي.', 'حەز لە کاری تیمی دەکەم.'),
      p('Önceki şirkette bir ekibi yönettim.', 'ön-ce-Kİ şir-ket-TE bir e-ki-Bİ yö-net-TİM', 'أدرت فريقاً في الشركة السابقة.', 'لە کۆمپانیای پێشوودا تیمێکم بەڕێوەبرد.'),
      p('Baskı altında çalışabiliyorum.', 'bas-KI al-tın-DA ça-lı-şa-bi-li-yo-RUM', 'أستطيع العمل تحت الضغط.', 'دەتوانم لەژێر فشاردا کار بکەم.'),
      p('Kendimi geliştirmeye devam ediyorum.', 'ken-di-Mİ ge-liş-tir-me-YE de-VAM e-di-yo-RUM', 'أواصل تطوير نفسي.', 'بەردەوامم لە پەرەپێدانی خۆم.'),
      p('Maaş beklentiniz nedir?', 'ma-AŞ bek-len-ti-NİZ ne-DİR', 'ما توقّعك للراتب؟', 'چاوەڕوانی مووچەت چییە؟'),
      p('İşe ne zaman başlayabilirsiniz?', 'i-ŞE NE za-MAN baş-la-ya-bi-lir-si-NİZ', 'متى يمكنك بدء العمل؟', 'کەی دەتوانیت دەست بە کار بکەیت؟'),
      p('Sorularınız için teşekkür ederim.', 'so-ru-la-rı-NIZ i-ÇİN te-şek-KÜR e-de-RİM', 'أشكركم على أسئلتكم.', 'سوپاس بۆ پرسیارەکانتان.'),
    ],
  },
  {
    id: 'q-b2-environment',
    level: 'b2',
    order: 109,
    title: 'Çevre Tartışması',
    titleI18n: b('نقاش البيئة', 'گفتوگۆی ژینگە'),
    focus: b(
      'لغة القضايا العامّة: yol açmak, azaltmak, geçmek — أفعال تتكرّر في كل خبر بيئي.',
      'زمانی کێشە گشتییەکان: yol açmak, azaltmak, geçmek.',
    ),
    sentences: [
      p('Sera gazları ısınmaya yol açıyor.', 'se-RA gaz-la-RI ı-sın-ma-YA YOL a-çı-YOR', 'غازات الدفيئة تسبّب الاحترار.', 'گازەکانی گەرمخانە دەبنە هۆی گەرمبوونەوە.'),
      p('Karbon emisyonu azaltılmalı.', 'kar-BON e-mis-yo-NU a-zal-tıl-ma-LI', 'ينبغي خفض انبعاثات الكربون.', 'دەبێت دەردانی کاربۆن کەم بکرێتەوە.'),
      p('Yenilenebilir enerjiye geçiyorlar.', 'ye-ni-le-ne-bi-LİR e-ner-ji-YE ge-çi-yor-LAR', 'ينتقلون إلى الطاقة المتجدّدة.', 'دەگوازنەوە بۆ وزەی نوێبووەوە.'),
      p('Camı geri dönüşüme atıyoruz.', 'ca-MI ge-Rİ dö-nü-şü-ME a-tı-yo-RUZ', 'نضع الزجاج في إعادة التدوير.', 'شووشە دەخەینە پیتاندنەوە.'),
      p('Enerji tüketimi geçen yıl düştü.', 'e-ner-Jİ tü-ke-ti-Mİ ge-ÇEN YIL düş-TÜ', 'انخفض استهلاك الطاقة العام الماضي.', 'خەرجکردنی وزە ساڵی ڕابردوو کەمی کرد.'),
      p('Kuraklık tarımı doğrudan etkiliyor.', 'ku-rak-LIK ta-rı-MI doğ-ru-DAN et-ki-li-YOR', 'الجفاف يؤثّر مباشرة على الزراعة.', 'وشکەساڵی ڕاستەوخۆ کاریگەری لەسەر کشتوکاڵ هەیە.'),
      p('Çevre farkındalığı artıyor.', 'çev-RE far-kın-da-lı-ĞI ar-tı-YOR', 'يزداد الوعي البيئي.', 'هۆشیاری ژینگەیی زیاد دەکات.'),
      p('Altyapı yatırımı ertelendi.', 'alt-ya-PI ya-tı-rı-MI er-te-len-Dİ', 'أُجّل الاستثمار في البنية التحتية.', 'وەبەرهێنان لە ژێرخان دواخرا.'),
    ],
  },
  {
    id: 'q-b2-digital',
    level: 'b2',
    order: 110,
    title: 'Dijital Hayat',
    titleI18n: b('الحياة الرقمية', 'ژیانی دیجیتاڵی'),
    focus: b(
      'الأفعال الرقمية تأخذ حالات ثابتة: bağlantıya tıklamak, sunucuya bağlanmak.',
      'کردارە دیجیتاڵییەکان حاڵەتی جێگیر وەردەگرن.',
    ),
    sentences: [
      p('Uygulamayı güncellemen gerekiyor.', 'uy-gu-la-ma-YI gün-cel-le-MEN ge-re-ki-YOR', 'عليك تحديث التطبيق.', 'پێویستە ئەپەکە نوێ بکەیتەوە.'),
      p('Dosyayı kaydetmeyi unutma.', 'dos-ya-YI kay-det-me-Yİ u-nut-MA', 'لا تنسَ حفظ الملف.', 'لەبیرت نەچێت فایلەکە پاشەکەوت بکەیت.'),
      p('Sunucuya bağlanamıyorum.', 'su-nu-cu-YA bağ-la-na-mı-yo-RUM', 'لا أستطيع الاتّصال بالخادم.', 'ناتوانم بە سێرڤەرەکەوە ببەسترێم.'),
      p('Bu bağlantıya tıklamayın.', 'BU bağ-lan-tı-YA tık-la-ma-YIN', 'لا تضغطوا على هذا الرابط.', 'کلیک لەم بەستەرە مەکەن.'),
      p('Gönderi çok beğeni aldı.', 'gön-de-Rİ ÇOK be-ğe-Nİ al-DI', 'نال المنشور إعجابات كثيرة.', 'پۆستەکە پەسەندی زۆری وەرگرت.'),
      p('Takipçi sayısı hızla arttı.', 'ta-kip-Çİ sa-yı-SI hız-LA art-TI', 'ازداد عدد المتابعين بسرعة.', 'ژمارەی شوێنکەوتووان بە خێرایی زیادی کرد.'),
      p('Türkçe klavye kullanıyorum.', 'türk-ÇE klav-YE kul-la-nı-yo-RUM', 'أستعمل لوحة مفاتيح تركية.', 'تەختەکلیلی تورکی بەکاردەهێنم.'),
      p('Her gün mesajlaşıyoruz.', 'HER GÜN me-saj-la-şı-yo-RUZ', 'نتراسل كل يوم.', 'هەموو ڕۆژێک نامە ئاڵوگۆڕ دەکەین.'),
    ],
  },
  /* ================================ C1 ================================ */
  {
    id: 'q-c1-headlines',
    level: 'c1',
    order: 111,
    title: 'Manşet Dili',
    titleI18n: b('لغة العناوين', 'زمانی سەردێڕ'),
    focus: b(
      'العنوان التركي يحذف الفعل المساعد ويكثر من المبني للمجهول واسم المصدر.',
      'سەردێڕی تورکی کرداری یاریدەدەر دەخات و شێوەی نەناسراو زۆر بەکاردەهێنێت.',
    ),
    sentences: [
      p('Enflasyon üst üste üç ay düştü.', 'enf-las-YON ÜST üs-TE ÜÇ AY düş-TÜ', 'انخفض التضخّم ثلاثة أشهر متتالية.', 'هەڵاوسان سێ مانگی بەردەوام کەمی کرد.'),
      p('Meclis yeni yasayı kabul etti.', 'mec-LİS ye-Nİ ya-sa-YI ka-BUL et-Tİ', 'أقرّ البرلمان القانون الجديد.', 'پەرلەمان یاسا نوێیەکەی پەسەند کرد.'),
      p('Karar yürürlüğe girdi.', 'ka-RAR yü-rür-lü-ĞE gir-Dİ', 'دخل القرار حيّز التنفيذ.', 'بڕیارەکە خرایە بواری جێبەجێکردن.'),
      p('Soruşturma başlatıldı.', 'so-ruş-tur-MA baş-la-tıl-DI', 'فُتح تحقيق.', 'لێکۆڵینەوە دەستپێکرا.'),
      p('Hükümet yeni önlemler açıkladı.', 'hü-kü-MET ye-Nİ ön-lem-LER a-çık-la-DI', 'أعلنت الحكومة إجراءات جديدة.', 'حکومەت ڕێوشوێنی نوێی ڕاگەیاند.'),
      p('İki kurum arasında anlaşma imzalandı.', 'i-Kİ ku-RUM a-ra-sın-DA an-laş-MA im-za-lan-DI', 'وُقّع اتّفاق بين مؤسستين.', 'ڕێککەوتننامەیەک لە نێوان دوو دامەزراوەدا واژووکرا.'),
      p('Mülteci sayısı geçen yıla göre azaldı.', 'mül-te-Cİ sa-yı-SI ge-ÇEN yı-LA gö-RE a-zal-DI', 'انخفض عدد اللاجئين مقارنة بالعام الماضي.', 'ژمارەی پەنابەران بەراورد بە ساڵی ڕابردوو کەمی کرد.'),
      p('Soruşturmanın ayrıntıları açıklanmadı.', 'so-ruş-tur-ma-NIN ay-rın-tı-la-RI a-çık-lan-ma-DI', 'لم تُعلَن تفاصيل التحقيق.', 'وردەکارییەکانی لێکۆڵینەوەکە ڕانەگەیەنرا.'),
    ],
  },
  {
    id: 'q-c1-meeting',
    level: 'c1',
    order: 112,
    title: 'Toplantı Yönetmek',
    titleI18n: b('إدارة اجتماع', 'بەڕێوەبردنی کۆبوونەوە'),
    focus: b(
      'أفعال إدارة النقاش: gündeme almak, söz vermek, karara bağlamak.',
      'کرداری بەڕێوەبردنی گفتوگۆ: gündeme almak, söz vermek.',
    ),
    sentences: [
      p('Gündemin ilk maddesine geçelim.', 'gün-de-MİN İLK mad-de-si-NE ge-çe-LİM', 'لننتقل إلى البند الأول.', 'با بچینە سەر بڕگەی یەکەم.'),
      p('Söz sizde, buyurun.', 'SÖZ siz-DE bu-yu-RUN', 'الكلمة لكم، تفضّلوا.', 'قسە هی ئێوەیە، فەرموو.'),
      p('Bu konuyu bir sonraki toplantıya bırakalım.', 'BU ko-nu-YU bir son-ra-Kİ top-lan-tı-YA bı-ra-ka-LIM', 'لنؤجّل هذا الموضوع للاجتماع القادم.', 'با ئەم بابەتە بۆ کۆبوونەوەی داهاتوو جێبهێڵین.'),
      p('Karara bağlamamız gereken üç madde var.', 'ka-ra-RA bağ-la-ma-MIZ ge-re-KEN ÜÇ mad-DE var', 'ثمّة ثلاثة بنود علينا حسمها.', 'سێ بڕگە هەیە دەبێت بڕیاری لەسەر بدەین.'),
      p('Herkes görüşünü kısaca belirtsin.', 'her-KES gö-rü-şü-NÜ kı-sa-CA be-lirt-SİN', 'ليذكر كل واحد رأيه باختصار.', 'با هەموو کەس بە کورتی بۆچوونی بڵێت.'),
      p('Bu öneriye katılmıyorum, gerekçem şu.', 'BU ö-ne-ri-YE ka-tıl-mı-yo-RUM ge-rek-ÇEM ŞU', 'لا أوافق على هذا الاقتراح، وسببي هو الآتي.', 'ڕازی نیم بەم پێشنیارە، هۆکارەکەم ئەمەیە.'),
      p('Tutanağa geçirelim lütfen.', 'tu-ta-na-ĞA ge-çi-re-LİM lüt-FEN', 'لندوّنه في المحضر من فضلكم.', 'تکایە بیخەینە پرۆتۆکۆلەکەوە.'),
      p('Toplantıyı burada kapatıyorum.', 'top-lan-tı-YI bu-ra-DA ka-pa-tı-yo-RUM', 'أختم الاجتماع هنا.', 'کۆبوونەوەکە لێرەدا کۆتایی پێدەهێنم.'),
    ],
  },
  /* =============================== C1+ ================================ */
  {
    id: 'q-c1plus-review',
    level: 'c1plus',
    order: 113,
    title: 'Eleştirel Değerlendirme',
    titleI18n: b('التقييم النقدي', 'هەڵسەنگاندنی ڕەخنەیی'),
    focus: b(
      'النقد الأكاديمي المهذّب: النفي الملطّف، والحكم المشروط، والاعتراف قبل الاعتراض.',
      'ڕەخنەی ئەکادیمی بە ڕێزەوە: ڕەتکردنەوەی نەرم.',
    ),
    sentences: [
      p('Metnin tutarlılığı zaman zaman zayıflıyor.', 'met-NİN tu-tar-lı-lı-ĞI za-MAN za-MAN za-yıf-lı-YOR', 'يضعف اتّساق النص أحياناً.', 'یەکگرتوویی دەقەکە جار جار لاواز دەبێت.'),
      p('Tezin temellendirmesi yeterince güçlü değil.', 'te-ZİN te-mel-len-dir-me-Sİ ye-te-rin-CE güç-LÜ de-ĞİL', 'تأسيس الأطروحة ليس قوياً بما يكفي.', 'بنەماسازی تێزەکە بەپێویست بەهێز نییە.'),
      p('İfadesinde açık bir çelişki var.', 'i-fa-de-sin-DE a-ÇIK bir çe-liş-Kİ var', 'في إفادته تناقض واضح.', 'لە قسەکەیدا دژایەتییەکی ئاشکرا هەیە.'),
      p('Bu indirgemeci bir okuma sayılır.', 'BU in-dir-ge-me-Cİ bir o-ku-MA sa-yı-LIR', 'تُعدّ هذه قراءة اختزالية.', 'ئەمە بە خوێندنەوەیەکی کورتکەرەوە دادەنرێت.'),
      p('Bütüncül bir bakış açısı gerekiyor.', 'bü-tün-CÜL bir ba-KIŞ a-çı-SI ge-re-ki-YOR', 'يلزم منظور كلّي.', 'ڕوانگەیەکی گشتگیرانە پێویستە.'),
      p('Yazarın katkısı yadsınamaz.', 'ya-za-RIN kat-kı-SI yad-sı-na-MAZ', 'لا يمكن إنكار إسهام الكاتب.', 'بەشداری نووسەرەکە ڕەتناکرێتەوە.'),
      p('Sonuç bölümü fazla iddialı.', 'so-NUÇ bö-lü-MÜ faz-LA id-di-a-LI', 'قسم الخاتمة مبالغ في ادّعائه.', 'بەشی ئەنجام زۆر بانگەشەکارە.'),
      p('Yine de özgün bir çalışma.', 'yi-NE DE öz-GÜN bir ça-lış-MA', 'ومع ذلك فهي دراسة أصيلة.', 'لەگەڵ ئەوەشدا توێژینەوەیەکی ڕەسەنە.'),
    ],
  },
];
