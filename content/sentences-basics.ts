import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Beginner-weighted sentence packs.
 *
 * A1 and A2 hold nearly forty per cent of the vocabulary but had the fewest
 * sentence packs, which is backwards: a beginner needs many short sentences
 * around a small vocabulary, not few sentences around a large one.
 *
 * Each pack drills one case suffix or one everyday frame, and the sentences
 * are deliberately short — six words or fewer wherever the meaning allows — so
 * they can be heard, repeated and remembered rather than parsed.
 */
export const BASICS_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 'k-a1-locative',
    level: 'a1',
    order: 120,
    title: 'Nerede? — -de / -da',
    titleI18n: b('أين؟ حالة المكان', 'لە کوێ؟ حاڵەتی شوێن'),
    focus: b(
      'حالة المكان -de/-da تعني «في/عند»، وتتغيّر إلى -te/-ta بعد الحروف الشديدة.',
      'حاڵەتی شوێن -de/-da واتای «لە»یە.',
    ),
    sentences: [
      p('Kitap masada.', 'ki-TAP ma-sa-DA', 'الكتاب على الطاولة.', 'کتێبەکە لەسەر مێزەکەیە.'),
      p('Annem mutfakta.', 'an-NEM mut-fak-TA', 'أمّي في المطبخ.', 'دایکم لە چێشتخانەیە.'),
      p('Çocuklar bahçede oynuyor.', 'ço-cuk-LAR bah-çe-DE oy-nu-YOR', 'الأطفال يلعبون في الحديقة.', 'منداڵەکان لە باخچەکە یاری دەکەن.'),
      p('Ben evdeyim.', 'BEN ev-de-YİM', 'أنا في البيت.', 'من لە ماڵەوەم.'),
      p('Otobüs durakta bekliyor.', 'o-to-BÜS du-rak-TA bek-li-YOR', 'الحافلة تنتظر في المحطّة.', 'پاسەکە لە وێستگەکە چاوەڕێ دەکات.'),
      p('Süt buzdolabında.', 'SÜT buz-do-la-bın-DA', 'الحليب في الثلاجة.', 'شیرەکە لە سەلاجەکەیە.'),
      p('Kardeşim okulda.', 'kar-de-ŞİM o-kul-DA', 'أخي في المدرسة.', 'براکەم لە قوتابخانەیە.'),
      p('Anahtar cebimde.', 'a-nah-TAR ce-bim-DE', 'المفتاح في جيبي.', 'کلیلەکە لە گیرفانمە.'),
    ],
  },
  {
    id: 'k-a1-dative',
    level: 'a1',
    order: 121,
    title: 'Nereye? — -e / -a',
    titleI18n: b('إلى أين؟ حالة الاتّجاه', 'بۆ کوێ؟ حاڵەتی ئاراستە'),
    focus: b(
      'حالة الاتّجاه -e/-a تعني «إلى»، وتلزم أفعالاً كثيرة: gitmek, girmek, binmek, bakmak.',
      'حاڵەتی ئاراستە -e/-a واتای «بۆ»یە.',
    ),
    sentences: [
      p('Okula gidiyorum.', 'o-ku-LA gi-di-yo-RUM', 'أذهب إلى المدرسة.', 'دەچمە قوتابخانە.'),
      p('Sınıfa girdi.', 'sı-nı-FA gir-Dİ', 'دخل الصفّ.', 'چووە ناو پۆلەکە.'),
      p('Otobüse bindik.', 'o-to-bü-SE bin-DİK', 'ركبنا الحافلة.', 'سواری پاسەکە بووین.'),
      p('Bana bak.', 'ba-NA bak', 'انظر إليّ.', 'سەیرم بکە.'),
      p('Kitabı masaya koydum.', 'ki-ta-BI ma-sa-YA koy-DUM', 'وضعت الكتاب على الطاولة.', 'کتێبەکەم خستە سەر مێزەکە.'),
      p('Sana bir şey söyleyeceğim.', 'sa-NA bir ŞEY söy-le-ye-ce-ĞİM', 'سأقول لك شيئاً.', 'شتێکت پێدەڵێم.'),
      p('Eve dönelim.', 'e-VE dö-ne-LİM', 'لنعد إلى البيت.', 'با بگەڕێینەوە ماڵەوە.'),
      p('Doktora gitmen lazım.', 'dok-to-RA git-MEN la-ZIM', 'عليك الذهاب إلى الطبيب.', 'پێویستە بچیتە لای پزیشک.'),
    ],
  },
  {
    id: 'k-a1-ablative',
    level: 'a1',
    order: 122,
    title: 'Nereden? — -den / -dan',
    titleI18n: b('من أين؟ حالة الابتداء', 'لە کوێوە؟ حاڵەتی سەرچاوە'),
    focus: b(
      'حالة الابتداء -den/-dan تعني «من»، وتلزم أفعالاً مفاجئة للعربي: korkmak, hoşlanmak.',
      'حاڵەتی سەرچاوە -den/-dan واتای «لە...ەوە»یە.',
    ),
    sentences: [
      p('Evden çıktım.', 'ev-DEN çık-TIM', 'خرجت من البيت.', 'لە ماڵەوە دەرچووم.'),
      p('Nereden geliyorsun?', 'ne-re-DEN ge-li-yor-SUN', 'من أين تأتي؟', 'لە کوێوە دێیت؟'),
      p('Köpekten korkuyorum.', 'kö-pek-TEN kor-ku-yo-RUM', 'أخاف من الكلب.', 'لە سەگ دەترسم.'),
      p('Bu çaydan hoşlanıyorum.', 'BU çay-DAN hoş-la-nı-yo-RUM', 'يعجبني هذا الشاي.', 'حەزم لەم چایە دەکات.'),
      p('Ekmeği fırından aldım.', 'ek-me-Ğİ fı-rın-DAN al-DIM', 'أخذت الخبز من المخبز.', 'نانەکەم لە نانەواخانە کڕی.'),
      p('Merdivenden indik.', 'mer-di-ven-DEN in-DİK', 'نزلنا على الدرج.', 'بە پلیکانەدا هاتینە خوارەوە.'),
      p('Suriye’den geldim.', 'su-ri-ye-DEN gel-DİM', 'جئت من سوريا.', 'لە سووریاوە هاتم.'),
      p('Sabahtan beri buradayım.', 'sa-bah-TAN be-Rİ bu-ra-da-YIM', 'أنا هنا منذ الصباح.', 'لە بەیانییەوە لێرەم.'),
    ],
  },
  {
    id: 'k-a1-accusative',
    level: 'a1',
    order: 123,
    title: 'Belirli Nesne — -ı / -i',
    titleI18n: b('المفعول المعرّف', 'بەرکاری دیاریکراو'),
    focus: b(
      '⚠️ اللاحقة تُوضع فقط إن كان المفعول معيّناً: «kitap okudum» قرأت كتاباً، «kitabı okudum» قرأت الكتاب.',
      '⚠️ پاشگرەکە تەنیا بۆ بەرکاری دیاریکراو دادەنرێت.',
    ),
    sentences: [
      p('Kitap okuyorum.', 'ki-TAP o-ku-yo-RUM', 'أقرأ كتاباً.', 'کتێب دەخوێنمەوە.'),
      p('Kitabı okudum.', 'ki-ta-BI o-ku-DUM', 'قرأت الكتاب.', 'کتێبەکەم خوێندەوە.'),
      p('Çayı içtim.', 'ça-YI iç-TİM', 'شربت الشاي.', 'چایەکەم خواردەوە.'),
      p('Kapıyı kapat.', 'ka-pı-YI ka-PAT', 'أغلق الباب.', 'دەرگاکە دابخە.'),
      p('Onu tanıyorum.', 'o-NU ta-nı-yo-RUM', 'أعرفه.', 'دەیناسم.'),
      p('Bu filmi izledin mi?', 'BU fil-Mİ iz-le-DİN mi', 'هل شاهدت هذا الفيلم؟', 'ئەم فیلمەت بینیوە؟'),
      p('Ellerini yıka.', 'el-le-ri-Nİ yı-KA', 'اغسل يديك.', 'دەستەکانت بشۆ.'),
      p('Formu doldur.', 'for-MU dol-DUR', 'املأ الاستمارة.', 'فۆڕمەکە پڕ بکەرەوە.'),
    ],
  },
  {
    id: 'k-a1-possessive',
    level: 'a1',
    order: 124,
    title: 'Benim, Senin, Onun',
    titleI18n: b('لواحق الملكية', 'پاشگری خاوەندارێتی'),
    focus: b(
      'الملكية تُبنى بلاحقة على الاسم، والضمير قبله اختياري ويُستعمل للتوكيد فقط.',
      'خاوەندارێتی بە پاشگر لەسەر ناو دروست دەبێت.',
    ),
    sentences: [
      p('Bu benim kitabım.', 'BU be-NİM ki-ta-BIM', 'هذا كتابي.', 'ئەمە کتێبی منە.'),
      p('Senin adın ne?', 'se-NİN a-DIN ne', 'ما اسمك؟', 'ناوی تۆ چییە؟'),
      p('Onun evi büyük.', 'o-NUN e-Vİ bü-YÜK', 'بيته كبير.', 'ماڵەکەی گەورەیە.'),
      p('Bizim sınıfımız üçüncü katta.', 'bi-ZİM sı-nı-fı-MIZ ü-çün-CÜ kat-TA', 'صفّنا في الطابق الثالث.', 'پۆلەکەمان لە نهۆمی سێیەمە.'),
      p('Arkadaşımın telefonu bozuldu.', 'ar-ka-da-şı-MIN te-le-fo-NU bo-zul-DU', 'تعطّل هاتف صديقي.', 'تەلەفۆنی هاوڕێکەم خراپ بوو.'),
      p('Ailem İstanbul’da yaşıyor.', 'a-i-LEM is-tan-bul-DA ya-şı-YOR', 'عائلتي تعيش في إسطنبول.', 'خێزانەکەم لە ئەستەنبوڵ دەژی.'),
      p('Odamı temizledim.', 'o-da-MI te-miz-le-DİM', 'نظّفت غرفتي.', 'ژوورەکەمم پاک کردەوە.'),
      p('Cüzdanım nerede?', 'cüz-da-NIM ne-re-DE', 'أين محفظتي؟', 'جزدانەکەم لە کوێیە؟'),
    ],
  },
  /* ================================ A2 ================================ */
  {
    id: 'k-a2-future',
    level: 'a2',
    order: 125,
    title: 'Gelecek Zaman',
    titleI18n: b('زمن المستقبل', 'کاتی داهاتوو'),
    focus: b(
      'المستقبل -ecek/-acak. لاحظ الليونة أمام اللاحقة: gidecek → gideceğim.',
      'داهاتوو -ecek/-acak. سەرنج بدە بە نەرمبوونەکە.',
    ),
    sentences: [
      p('Yarın seni arayacağım.', 'ya-RIN se-Nİ a-ra-ya-ca-ĞIM', 'سأتّصل بك غداً.', 'سبەینێ پەیوەندیت پێوە دەکەم.'),
      p('Yaz tatilinde köye gideceğiz.', 'YAZ ta-ti-lin-DE kö-YE gi-de-ce-ĞİZ', 'سنذهب إلى القرية في عطلة الصيف.', 'لە پشووی هاویندا دەچینە گوند.'),
      p('Bu iş bir hafta sürecek.', 'BU İŞ bir haf-TA sü-re-CEK', 'سيستغرق هذا العمل أسبوعاً.', 'ئەم کارە هەفتەیەک دەخایەنێت.'),
      p('Ne zaman döneceksin?', 'NE za-MAN dö-ne-cek-SİN', 'متى ستعود؟', 'کەی دەگەڕێیتەوە؟'),
      p('Yarın yağmur yağmayacak.', 'ya-RIN yağ-MUR yağ-ma-ya-CAK', 'لن يمطر غداً.', 'سبەینێ باران نابارێت.'),
      p('Sana yardım edeceğim.', 'sa-NA yar-DIM e-de-ce-ĞİM', 'سأساعدك.', 'یارمەتیت دەدەم.'),
      p('Teklifi yarın sunacağım.', 'tek-li-Fİ ya-RIN su-na-ca-ĞIM', 'سأقدّم العرض غداً.', 'سبەینێ پێشنیارەکە پێشکەش دەکەم.'),
      p('Kimse gelmeyecek galiba.', 'kim-SE gel-me-ye-CEK ga-li-BA', 'يبدو أن أحداً لن يأتي.', 'وا دیارە کەس نایەت.'),
    ],
  },
  {
    id: 'k-a2-frequency',
    level: 'a2',
    order: 126,
    title: 'Ne Sıklıkla?',
    titleI18n: b('كم مرّة؟', 'چەند جار؟'),
    focus: b(
      'ظروف التكرار تسبق الفعل عادةً: her gün, bazen, hiç, genellikle.',
      'ئاوەڵکاری دووبارەبوونەوە پێش کردار دێن.',
    ),
    sentences: [
      p('Her gün Türkçe çalışıyorum.', 'HER GÜN türk-ÇE ça-lı-şı-yo-RUM', 'أدرس التركية كل يوم.', 'هەموو ڕۆژێک تورکی دەخوێنم.'),
      p('Bazen geç kalıyorum.', 'ba-ZEN GEÇ ka-lı-yo-RUM', 'أتأخّر أحياناً.', 'هەندێک جار دوادەکەوم.'),
      p('Hiç sigara içmedim.', 'HİÇ si-ga-RA iç-me-DİM', 'لم أدخّن قطّ.', 'هەرگیز جگەرەم نەکێشاوە.'),
      p('Genellikle otobüsle giderim.', 'ge-nel-lik-LE o-to-büs-LE gi-de-RİM', 'عادةً أذهب بالحافلة.', 'زۆرجار بە پاس دەڕۆم.'),
      p('Haftada üç gün antrenman yapıyor.', 'haf-ta-DA ÜÇ GÜN ant-ren-MAN ya-pı-YOR', 'يتدرّب ثلاثة أيام أسبوعياً.', 'هەفتەی سێ ڕۆژ ڕاهێنان دەکات.'),
      p('Nadiren dışarıda yemek yeriz.', 'na-di-REN dı-şa-rı-DA ye-MEK ye-RİZ', 'نادراً ما نأكل في الخارج.', 'بە دەگمەن لە دەرەوە نان دەخۆین.'),
      p('Her zaman geç yatıyorsun.', 'HER za-MAN GEÇ ya-tı-yor-SUN', 'أنت تنام متأخّراً دائماً.', 'هەمیشە درەنگ ڕادەکشێیت.'),
      p('Ara sıra görüşüyoruz.', 'a-RA sı-RA gö-rü-şü-yo-RUZ', 'نلتقي بين حين وآخر.', 'جار جار یەکتر دەبینین.'),
    ],
  },
  {
    id: 'k-a2-postpositions',
    level: 'a2',
    order: 127,
    title: 'ile, için, gibi, kadar',
    titleI18n: b('حروف الجرّ التركية', 'ئامرازە دواوەکان'),
    focus: b(
      '⚠️ التركية تضع هذه الأدوات بعد الاسم لا قبله — وهذا عكس العربية تماماً.',
      '⚠️ تورکی ئەم ئامرازانە دوای ناو دادەنێت نەک پێشی.',
    ),
    sentences: [
      p('Arkadaşımla geldim.', 'ar-ka-da-şım-LA gel-DİM', 'جئت مع صديقي.', 'لەگەڵ هاوڕێکەم هاتم.'),
      p('Senin için aldım.', 'se-NİN i-ÇİN al-DIM', 'اشتريته من أجلك.', 'بۆ تۆم کڕی.'),
      p('Babası gibi konuşuyor.', 'ba-ba-SI gi-Bİ ko-nu-şu-YOR', 'يتكلّم مثل أبيه.', 'وەک باوکی قسە دەکات.'),
      p('Akşama kadar çalıştım.', 'ak-şa-MA ka-DAR ça-lış-TIM', 'عملت حتى المساء.', 'تا ئێوارە کارم کرد.'),
      p('Otobüsle iki saat sürüyor.', 'o-to-büs-LE i-Kİ sa-AT sü-rü-YOR', 'يستغرق ساعتين بالحافلة.', 'بە پاس دوو کاتژمێر دەخایەنێت.'),
      p('Bunu senin gibi yapamam.', 'bu-NU se-NİN gi-Bİ ya-pa-MAM', 'لا أستطيع فعل هذا مثلك.', 'ناتوانم وەک تۆ ئەمە بکەم.'),
      p('Sağlık için spor şart.', 'sağ-LIK i-ÇİN SPOR şart', 'الرياضة ضرورية للصحّة.', 'وەرزش بۆ تەندروستی پێویستە.'),
      p('Kalemle yazdım.', 'ka-lem-LE yaz-DIM', 'كتبت بالقلم.', 'بە پێنووس نووسیم.'),
    ],
  },
  {
    id: 'k-a2-imperative',
    level: 'a2',
    order: 128,
    title: 'Rica ve Emir',
    titleI18n: b('الأمر والرجاء', 'فەرمان و داواکاری'),
    focus: b(
      'الأمر المفرد هو جذر الفعل عارياً؛ الجمع والمهذّب بـ -in/-ın؛ والأكثر لطفاً بصيغة السؤال.',
      'فەرمانی تاک ڕەگی کردارە؛ کۆ و بەڕێز بە -in/-ın.',
    ),
    sentences: [
      p('Pencereyi kapat.', 'pen-ce-re-Yİ ka-PAT', 'أغلق النافذة.', 'پەنجەرەکە دابخە.'),
      p('Lütfen oturun.', 'lüt-FEN o-tu-RUN', 'اجلسوا من فضلكم.', 'تکایە دانیشن.'),
      p('Biraz bekler misiniz?', 'bi-RAZ bek-LER mi-si-NİZ', 'هل تنتظرون قليلاً؟', 'کەمێک چاوەڕێ دەکەن؟'),
      p('Buraya yazmayın lütfen.', 'bu-ra-YA yaz-ma-YIN lüt-FEN', 'لا تكتبوا هنا من فضلكم.', 'تکایە لێرە مەنووسن.'),
      p('Sesini biraz aç.', 'se-si-Nİ bi-RAZ aç', 'ارفع الصوت قليلاً.', 'دەنگەکەی کەمێک بەرز بکەرەوە.'),
      p('Acele etme, vaktimiz var.', 'a-ce-LE et-ME vak-ti-MİZ var', 'لا تستعجل، عندنا وقت.', 'پەلە مەکە، کاتمان هەیە.'),
      p('Şunu bana verir misin?', 'şu-NU ba-NA ve-RİR mi-SİN', 'هل تعطيني ذاك؟', 'ئەوەم دەدەیتێ؟'),
      p('Dikkatli olun.', 'dik-kat-Lİ o-LUN', 'انتبهوا.', 'ئاگاداربن.'),
    ],
  },
  /* ================================ B1 ================================ */
  {
    id: 'k-b1-opinion',
    level: 'b1',
    order: 129,
    title: 'Fikrimi Söylemek',
    titleI18n: b('إبداء الرأي', 'دەربڕینی بۆچوون'),
    focus: b(
      'صيغ الرأي التركية تختلف في القوّة: bence (رأيي)، bana kalırsa (لو الأمر لي)، kanımca (رسمية).',
      'شێوەکانی بۆچوون لە هێزدا جیاوازن: bence، bana kalırsa، kanımca.',
    ),
    sentences: [
      p('Bence bu öneri mantıklı.', 'ben-CE BU ö-ne-Rİ man-tık-LI', 'برأيي هذا الاقتراح منطقي.', 'بەلای منەوە ئەم پێشنیارە لۆژیکییە.'),
      p('Bana kalırsa acele etmemeliyiz.', 'ba-NA ka-lır-SA a-ce-LE et-me-me-li-YİZ', 'لو الأمر لي، ينبغي ألّا نستعجل.', 'ئەگەر بە من بێت نابێت پەلە بکەین.'),
      p('Katılıyorum ama bir şartla.', 'ka-tı-lı-yo-RUM a-MA bir şart-LA', 'أوافق لكن بشرط.', 'ڕازیم بەڵام بە مەرجێک.'),
      p('Henüz kesin bir kanaatim yok.', 'he-NÜZ ke-SİN bir ka-na-a-TİM yok', 'ليس لديّ رأي قاطع بعد.', 'هێشتا بۆچوونێکی بڕیاریم نییە.'),
      p('Tam tersini düşünüyorum.', 'TAM ter-si-Nİ dü-şü-nü-yo-RUM', 'أفكّر بعكس ذلك تماماً.', 'بە تەواوی پێچەوانەی ئەوە بیر دەکەمەوە.'),
      p('Haklı olabilirsin.', 'hak-LI o-la-bi-lir-SİN', 'قد تكون محقّاً.', 'لەوانەیە ڕاست بیت.'),
      p('Bu görüşe katılmıyorum.', 'BU gö-rü-ŞE ka-tıl-mı-yo-RUM', 'لا أوافق على هذا الرأي.', 'ڕازی نیم بەم بۆچوونە.'),
      p('Kısaca söylemek gerekirse, evet.', 'kı-sa-CA söy-le-MEK ge-re-kir-SE e-VET', 'باختصار، نعم.', 'بە کورتی، بەڵێ.'),
    ],
  },
  {
    id: 'k-b1-plans',
    level: 'b1',
    order: 130,
    title: 'Plan ve Niyet',
    titleI18n: b('الخطط والنيّة', 'پلان و مەبەست'),
    focus: b(
      'الفرق بين النيّة (-mayı düşünmek) والخطّة (planlamak) والاحتمال (belki + geniş zaman).',
      'جیاوازی نێوان مەبەست، پلان و ئەگەر.',
    ),
    sentences: [
      p('Yaz tatilinde çalışmayı düşünüyorum.', 'YAZ ta-ti-lin-DE ça-lış-ma-YI dü-şü-nü-yo-RUM', 'أفكّر في العمل خلال عطلة الصيف.', 'بیر لەوە دەکەمەوە لە پشووی هاویندا کار بکەم.'),
      p('Önümüzdeki ay taşınmayı planlıyoruz.', 'ö-nü-müz-de-Kİ AY ta-şın-ma-YI plan-lı-yo-RUZ', 'نخطّط للانتقال الشهر القادم.', 'پلان بۆ گواستنەوە لە مانگی داهاتوودا دادەنێین.'),
      p('Belki bu akşam uğrarım.', 'bel-Kİ BU ak-ŞAM uğ-ra-RIM', 'ربّما أمرّ هذا المساء.', 'لەوانەیە ئەم ئێوارەیە سەردانت بکەم.'),
      p('Yeni bir kursa yazılacağım.', 'ye-Nİ bir kur-SA ya-zı-la-ca-ĞIM', 'سأسجّل في دورة جديدة.', 'خۆم لە کۆرسێکی نوێ تۆمار دەکەم.'),
      p('Bu yıl mezun olmayı umuyorum.', 'BU YIL me-ZUN ol-ma-YI u-mu-yo-RUM', 'آمل أن أتخرّج هذا العام.', 'هیوادارم ئەمساڵ دەرچم.'),
      p('Henüz karar vermedim.', 'he-NÜZ ka-RAR ver-me-DİM', 'لم أقرّر بعد.', 'هێشتا بڕیارم نەداوە.'),
      p('Bakalım, görürüz.', 'ba-ka-LIM gö-rü-RÜZ', 'لنرَ، سنرى.', 'با ببینین.'),
      p('Kesin bir şey söyleyemem.', 'ke-SİN bir ŞEY söy-le-ye-MEM', 'لا أستطيع قول شيء مؤكّد.', 'ناتوانم شتێکی دڵنیا بڵێم.'),
    ],
  },
  {
    id: 'k-b1-explaining',
    level: 'b1',
    order: 131,
    title: 'Bir Şeyi Tarif Etmek',
    titleI18n: b('شرح شيء لا تعرف اسمه', 'ڕوونکردنەوەی شتێک'),
    focus: b(
      'مهارة عملية: وصف الشيء حين تنسى كلمته — «şey», «bir tür», «-e benziyor».',
      'کارامەیی کردەیی: وەسفکردنی شت کاتێک وشەکەت لەبیر دەچێت.',
    ),
    sentences: [
      p('Adını unuttum, şey işte.', 'a-dı-NI u-nut-TUM ŞEY iş-TE', 'نسيت اسمه، ذاك الشيء.', 'ناوەکەی لەبیرم چوو، ئەو شتە.'),
      p('Bir tür meyve, kırmızı.', 'BİR TÜR mey-VE kır-mı-ZI', 'نوع من الفاكهة، أحمر.', 'جۆرێک میوەیە، سوورە.'),
      p('Şemsiyeye benziyor ama daha büyük.', 'şem-si-ye-YE ben-zi-YOR a-MA da-HA bü-YÜK', 'يشبه المظلّة لكنه أكبر.', 'لە چەتر دەچێت بەڵام گەورەترە.'),
      p('Mutfakta kullanılan bir alet.', 'mut-fak-TA kul-la-nı-LAN bir a-LET', 'أداة تُستعمل في المطبخ.', 'ئامێرێکە لە چێشتخانەدا بەکاردێت.'),
      p('Nasıl söylenir bilmiyorum.', 'na-SIL söy-le-NİR bil-mi-yo-RUM', 'لا أعرف كيف تُقال.', 'نازانم چۆن دەوترێت.'),
      p('Yani şöyle anlatayım.', 'ya-Nİ şöy-LE an-la-ta-YIM', 'أي دعني أشرح هكذا.', 'واتە با بەم شێوەیە بیڵێم.'),
      p('Tam olarak öyle değil.', 'TAM o-la-RAK öy-LE de-ĞİL', 'ليس هكذا تماماً.', 'بە تەواوی وا نییە.'),
      p('Ne demek istediğimi anladın mı?', 'NE de-MEK is-te-di-ği-Mİ an-la-DIN mı', 'هل فهمت ما أقصد؟', 'تێگەیشتیت چیم مەبەست بوو؟'),
    ],
  },
];
