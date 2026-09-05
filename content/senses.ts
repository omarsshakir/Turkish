import type { VocabSense } from '@/types/content';
import { b, sense } from './shared/helpers';

/**
 * Extra senses, as an overlay.
 *
 * A Turkish verb like `çekmek` or `geçmek` carries five or six meanings that
 * share almost nothing in Arabic or Kurdish. A student who meets one gloss and
 * assumes it is the whole word will misread the other five — and, worse, will
 * produce them wrongly, because each sense governs a different case.
 *
 * The senses could have been written into the vocabulary files, and a handful
 * already are. But the words concerned live across nine different files, and
 * polysemy is a set you want to review *as a set*: it is only by listing
 * `geçmek`'s meanings next to `kalmak`'s that you see the pattern of Turkish
 * verbs whose "physical" sense has drifted into an abstract one.
 *
 * So this is the fourth overlay, alongside connections, collocations and
 * origins, applied in `content/index.ts` the same way and for the same reason:
 * no vocabulary is duplicated, and every word remains an ordinary `VocabItem`
 * that reaches SRS, search, audio and review with no special plumbing.
 *
 * ---------------------------------------------------------------------------
 * The rule for what belongs here
 * ---------------------------------------------------------------------------
 *
 * A sense is included only when a learner could NOT derive it from the primary
 * meaning. `açmak` = "to open" and `açmak` = "to open a shop" is one sense.
 * `açmak` = "to open" and `açmak` = "the flowers bloomed" is two, and the
 * second is worth teaching.
 *
 * An entry that already declares its own `senses` in a vocabulary file keeps
 * them — the overlay never overwrites hand-written data.
 */
export const EXTRA_SENSES: Record<string, VocabSense[]> = {

  /* ================================================================== */
  /* The great polysemous verbs                                          */
  /* ================================================================== */

  geçmek: [
    sense('يمرّ (وقت)', 'تێپەڕین (کات)',
      ['Yıllar çabuk geçiyor.', 'yıl-LAR ça-BUK ge-çi-YOR', 'تمرّ السنوات بسرعة.', 'ساڵەکان بە خێرایی تێدەپەڕن.']),
    sense('ينجح في امتحان', 'دەرچوون لە تاقیکردنەوە',
      ['Sınavı geçtim.', 'sı-na-VI geç-TİM', 'نجحت في الامتحان.', 'لە تاقیکردنەوەکە دەرچووم.'],
      { note: b('عكسه «kalmak» = يرسب — نفس الفعل الذي يعني «يبقى».',
        'پێچەوانەکەی «kalmak» = کەوتن.') }),
    sense('ينتقل إلى موضوع/مقعد آخر', 'گواستنەوە بۆ',
      ['Bir sonraki maddeye geçelim.', 'bir son-ra-Kİ mad-de-YE ge-çe-LİM', 'لننتقل إلى البند التالي.', 'با بچینە سەر بڕگەی داهاتوو.']),
    sense('يتجاوز، يزيد على', 'تێپەڕاندن',
      ['Katılım beş yüzü geçti.', 'ka-tı-LIM BEŞ yü-ZÜ geç-Tİ', 'تجاوز الحضور خمسمئة.', 'بەشداری لە پێنج سەد تێپەڕی.']),
  ],

  kalmak: [
    sense('يرسب في امتحان', 'کەوتن لە تاقیکردنەوە',
      ['Sınıfta kaldı.', 'sı-nıf-TA kal-DI', 'رسب وأعاد السنة.', 'لە پۆلەکەدا کەوت.'],
      { note: b('⚠️ حرفياً «بقي في الصفّ» — لا علاقة له بالمكان.',
        '⚠️ لە ڕەگدا «لە پۆل مایەوە».') }),
    sense('يتبقّى', 'مانەوە',
      ['İki gün kaldı.', 'i-Kİ GÜN kal-DI', 'بقي يومان.', 'دوو ڕۆژ ماوە.']),
    sense('يبيت، ينزل (في فندق)', 'مانەوە لە',
      ['Otelde üç gece kaldık.', 'o-tel-DE ÜÇ ge-CE kal-DIK', 'بتنا ثلاث ليالٍ في الفندق.', 'سێ شەو لە هۆتێلەکە ماینەوە.']),
  ],

  'tutmak': [
    sense('يشجّع فريقاً', 'پشتگیری تیم',
      ['Hangi takımı tutuyorsun?', 'han-Gİ ta-kı-MI tu-tu-yor-SUN', 'أي فريق تشجّع؟', 'پشتگیری کام تیم دەکەیت؟']),
    sense('يستأجر، يحجز', 'بەکرێگرتن',
      ['Şehir merkezinde bir ev tuttuk.', 'şe-HİR mer-ke-zin-DE bir EV tut-TUK', 'استأجرنا بيتاً في وسط المدينة.', 'خانوویەکمان لە ناوەندی شاردا بەکرێ گرت.']),
    sense('يبلغ مبلغاً (حساب)', 'بەرامبەر بوون بە',
      ['Hepsi ne kadar tuttu?', 'hep-Sİ NE ka-DAR tut-TU', 'كم صار المجموع؟', 'هەموویان چەند بوو؟']),
    sense('يفي بوعده', 'بەجێهێنانی بەڵێن',
      ['Sözünü tuttu.', 'sö-zü-NÜ tut-TU', 'وفى بوعده.', 'بەڵێنەکەی بەجێهێنا.']),
  ],

  'atmak': [
    sense('يخطو خطوة', 'هەنگاو نان',
      ['İlk adımı biz attık.', 'İLK a-dı-MI BİZ at-TIK', 'نحن خطونا الخطوة الأولى.', 'یەکەم هەنگاومان نا.']),
    sense('يوقّع', 'واژووکردن',
      ['Belgeye imza attı.', 'bel-ge-YE im-ZA at-TI', 'وقّع على الوثيقة.', 'واژووی لە بەڵگەنامەکە کرد.']),
    sense('يسجّل هدفاً', 'گۆڵ تۆمارکردن',
      ['Son dakikada gol attı.', 'SON da-ki-ka-DA GOL at-TI', 'سجّل هدفاً في الدقيقة الأخيرة.', 'لە دوایین خولەکدا گۆڵێکی تۆمارکرد.']),
  ],

  'vermek': [
    sense('يتّخذ قراراً', 'بڕیاردان',
      ['Henüz karar vermedim.', 'he-NÜZ ka-RAR ver-me-DİM', 'لم أقرّر بعد.', 'هێشتا بڕیارم نەداوە.'],
      { note: b('⚠️ التركية «تُعطي» القرار ولا «تأخذه» كالعربية: karar vermek.',
        '⚠️ تورکی بڕیار «دەدات» نەک «وەریدەگرێت».') }),
    sense('يُلقي محاضرة/يقدّم', 'پێشکەشکردن',
      ['Konferans verdi.', 'kon-fe-RANS ver-Dİ', 'ألقى محاضرة.', 'کۆنفڕانسێکی پێشکەش کرد.']),
    sense('يسبّب ضرراً', 'زیان گەیاندن',
      ['Sigara sağlığa zarar verir.', 'si-ga-RA sağ-lı-ĞA za-RAR ve-RİR', 'التدخين يضرّ بالصحّة.', 'جگەرە زیان بە تەندروستی دەگەیەنێت.']),
  ],

  'almak': [
    sense('يشتري', 'کڕین',
      ['Yeni bir telefon aldım.', 'ye-Nİ bir te-le-FON al-DIM', 'اشتريت هاتفاً جديداً.', 'تەلەفۆنێکی نوێم کڕی.'],
      { note: b('⚠️ التركية لا تفرّق بين «أخذ» و«اشترى» — «aldım» تحتمل الاثنين، والسياق يفصل.',
        '⚠️ تورکی «وەرگرتن» و «کڕین» جیا ناکاتەوە.') }),
    sense('يستقبل، يتلقّى', 'وەرگرتن',
      ['Mesajını aldım.', 'me-sa-jı-NI al-DIM', 'وصلتني رسالتك.', 'نامەکەتم پێگەیشت.']),
    sense('يستغرق (وقتاً)', 'خایاندن',
      ['Bu iş iki saat alır.', 'BU İŞ i-Kİ sa-AT a-LIR', 'يستغرق هذا العمل ساعتين.', 'ئەم کارە دوو کاتژمێر دەخایەنێت.']),
  ],

  'bakmak': [
    sense('يعتني بـ', 'چاودێریکردن',
      ['Hasta annesine bakıyor.', 'has-TA an-ne-si-NE ba-kı-YOR', 'يعتني بأمّه المريضة.', 'چاودێری دایکە نەخۆشەکەی دەکات.']),
    sense('يتولّى، يختصّ بـ', 'لێپرسراوبوون لە',
      ['Bu işe hangi birim bakıyor?', 'BU i-ŞE han-Gİ bi-RİM ba-kı-YOR', 'أي وحدة تتولّى هذا الأمر؟', 'کام بەش لێپرسراوی ئەم کارەیە؟']),
    sense('يبدو، يظهر أن (bakalım)', 'با بزانین',
      ['Bakalım ne olacak.', 'ba-ka-LIM NE o-la-CAK', 'لنرَ ماذا سيحدث.', 'با بزانین چی دەبێت.']),
  ],

  'açmak': [
    sense('تتفتّح الأزهار', 'کوڵینەوەی گوڵ',
      ['Bahçede güller açtı.', 'bah-çe-DE gül-LER aç-TI', 'تفتّحت الورود في الحديقة.', 'گوڵەکان لە باخچەکەدا کوڵانەوە.']),
    sense('يفتتح، يؤسّس', 'کردنەوە، دامەزراندن',
      ['Yeni bir şube açtılar.', 'ye-Nİ bir şu-BE aç-tı-LAR', 'افتتحوا فرعاً جديداً.', 'لقێکی نوێیان کردەوە.']),
    sense('يتّصل هاتفياً / يردّ', 'وەڵامدانەوەی تەلەفۆن',
      ['Telefonu kimse açmadı.', 'te-le-fo-NU kim-SE aç-ma-DI', 'لم يردّ أحد على الهاتف.', 'کەس وەڵامی تەلەفۆنەکەی نەدایەوە.']),
    sense('يصفو الجوّ', 'ڕوونبوونەوەی کەش',
      ['Hava açtı.', 'ha-VA aç-TI', 'صفا الجوّ.', 'کەشەکە ڕوون بووەوە.']),
  ],

  'çıkarmak': [
    sense('يستنتج، يستخلص', 'دەرهێنانی ئەنجام',
      ['Bu olaydan ders çıkardık.', 'BU o-lay-DAN DERS çı-kar-DIK', 'استخلصنا درساً من هذه الحادثة.', 'لەم ڕووداوەوە وانەمان وەرگرت.']),
    sense('يُصدر (قانوناً، كتاباً)', 'دەرکردن',
      ['Yeni bir yasa çıkardılar.', 'ye-Nİ bir ya-SA çı-kar-dı-LAR', 'أصدروا قانوناً جديداً.', 'یاسایەکی نوێیان دەرکرد.']),
  ],

  'girmek': [
    sense('يدخل امتحاناً', 'چوونە تاقیکردنەوە',
      ['Yarın sınava gireceğim.', 'ya-RIN sı-na-VA gi-re-ce-ĞİM', 'سأدخل الامتحان غداً.', 'سبەینێ دەچمە تاقیکردنەوە.']),
    sense('يسري، يدخل حيّز النفاذ', 'خرانە بواری جێبەجێکردن',
      ['Karar yürürlüğe girdi.', 'ka-RAR yü-rür-lü-ĞE gir-Dİ', 'دخل القرار حيّز التنفيذ.', 'بڕیارەکە خرایە بواری جێبەجێکردن.']),
  ],

  'kapatmak': [
    sense('يُغلق مشروعاً/حساباً', 'داخستنی هەژمار',
      ['Hesabımı kapattım.', 'he-sa-bı-MI ka-pat-TIM', 'أغلقت حسابي.', 'هەژمارەکەمم داخست.']),
    sense('يسدّ عجزاً/ديناً', 'قەرز داپۆشین',
      ['Açığı kapattık.', 'a-çı-ĞI ka-pat-TIK', 'سددنا العجز.', 'کەمایەسییەکەمان داپۆشی.']),
  ],

  'dönmek': [
    sense('يستدير، ينعطف', 'سوڕانەوە',
      ['Sağa dönün.', 'sa-ĞA dö-NÜN', 'انعطفوا يميناً.', 'بەرەو ڕاست بسووڕێنەوە.']),
    sense('يتحوّل إلى', 'گۆڕان بۆ',
      ['Tartışma kavgaya döndü.', 'tar-tış-MA kav-ga-YA dön-DÜ', 'تحوّل النقاش إلى شجار.', 'گفتوگۆکە بووە شەڕ.'],
      { note: b('في هذا المعنى يأخذ حالة الاتّجاه: «-e dönmek».',
        'لەم واتایەدا حاڵەتی ئاراستە وەردەگرێت.') }),
  ],

  /* ================================================================== */
  /* Nouns whose second meaning is the one in the news                   */
  /* ================================================================== */

  'hava': [
    sense('الجوّ العامّ، الأجواء', 'کەشوهەوای گشتی',
      ['Toplantının havası gergindi.', 'top-lan-tı-NIN ha-va-SI ger-gin-Dİ', 'كانت أجواء الاجتماع متوتّرة.', 'کەشی کۆبوونەوەکە ئاڵۆز بوو.']),
  ],


  'baş': [
    sense('بداية، مقدّمة', 'سەرەتا',
      ['Baştan anlat.', 'baş-TAN an-LAT', 'احكِ من البداية.', 'لە سەرەتاوە بیگێڕەوە.']),
    sense('رئيس، رئيسي (في التركيب)', 'سەرۆک، سەرەکی',
      ['Baş oyuncu kim?', 'BAŞ o-yun-CU kim', 'من الممثّل الرئيسي؟', 'ئەکتەری سەرەکی کێیە؟']),
  ],

  'yer': [
    sense('الأرض (السطح تحت القدم)', 'زەوی',
      ['Telefonum yere düştü.', 'te-le-fo-NUM ye-RE düş-TÜ', 'وقع هاتفي على الأرض.', 'تەلەفۆنەکەم کەوتە سەر زەوی.']),
    sense('مقعد، محلّ محجوز', 'شوێن، کورسی',
      ['Sana yer ayırdım.', 'sa-NA YER a-yır-DIM', 'حجزت لك مكاناً.', 'شوێنم بۆ تۆ تەرخان کرد.']),
  ],

  'iş': [
    sense('الأمر، المسألة', 'کار، بابەت',
      ['İş sandığın gibi değil.', 'İŞ san-dı-ĞIN gi-Bİ de-ĞİL', 'الأمر ليس كما تظنّ.', 'بابەتەکە وەک ئەوەی تۆ وا دەزانیت نییە.']),
  ],

  'dil': [
    sense('اللسان (العضو)', 'زمان (ئەندام)',
      ['Dilimi ısırdım.', 'di-li-Mİ ı-sır-DIM', 'عضضت لساني.', 'زمانم گەست.'],
      { note: b('نفس الازدواج في العربية والكردية: اللسان والّلغة كلمة واحدة.',
        'هەمان دووانە لە عەرەبی و کوردیدا هەیە.') }),
  ],

  'göz': [
    sense('درج، خانة', 'خانە',
      ['Masanın üst gözünde.', 'ma-sa-NIN ÜST gö-zün-DE', 'في الدرج العلوي من الطاولة.', 'لە خانەی سەرەوەی مێزەکەدایە.']),
  ],

  'para': [
    sense('عملة، قطعة نقدية', 'پارە، دراو',
      ['Bozuk paran var mı?', 'bo-ZUK pa-RAN VAR mı', 'هل معك فكّة؟', 'پارەی وردت هەیە؟']),
  ],

  'kâğıt': [
    sense('ورقة رسمية، مستند', 'بەڵگەنامە',
      ['Bütün kâğıtları hazırladım.', 'bü-TÜN kâ-ğıt-la-RI ha-zır-la-DIM', 'حضّرت كل الأوراق.', 'هەموو بەڵگەنامەکانم ئامادە کرد.']),
  ],

  /* ================================================================== */
  /* Adjectives that mean something else about people                    */
  /* ================================================================== */

  'ağır': [
    sense('بطيء', 'هێواش',
      ['Trafik çok ağır.', 'tra-FİK ÇOK a-ĞIR', 'المرور بطيء جداً.', 'هاتوچۆ زۆر هێواشە.']),
    sense('جسيم، خطير (خطأ، مرض)', 'گران، جدی',
      ['Ağır bir hata yaptık.', 'a-ĞIR bir ha-TA yap-TIK', 'ارتكبنا خطأً جسيماً.', 'هەڵەیەکی گەورەمان کرد.']),
  ],

  'açık': [
    sense('واضح، صريح', 'ڕوون، ئاشکرا',
      ['Açık bir cevap istiyorum.', 'a-ÇIK bir ce-VAP is-ti-yo-RUM', 'أريد جواباً صريحاً.', 'وەڵامێکی ڕوونم دەوێت.']),
    sense('فاتح (لون)', 'کاڵ (ڕەنگ)',
      ['Açık mavi bir gömlek.', 'a-ÇIK ma-Vİ bir göm-LEK', 'قميص أزرق فاتح.', 'کراسێکی شینی کاڵ.']),
    sense('عجز، فجوة (اسم)', 'کەمایەسی',
      ['Bütçe açığı büyüyor.', 'büt-ÇE a-çı-ĞI bü-yü-YOR', 'يتّسع عجز الميزانية.', 'کەمایەسی بودجە گەورە دەبێت.']),
  ],

  'sıcak': [
    sense('حميم، ودود', 'گەرم، دۆستانە',
      ['Bizi sıcak karşıladılar.', 'bi-Zİ sı-CAK kar-şı-la-dı-LAR', 'استقبلونا استقبالاً حارّاً.', 'بە گەرمی پێشوازییان لێکردین.']),
  ],

  'soğuk': [
    sense('فاتر، غير ودود', 'سارد، بێ خۆشەویستی',
      ['Bana çok soğuk davrandı.', 'ba-NA ÇOK so-ĞUK dav-ran-DI', 'عاملني ببرود شديد.', 'زۆر بە سەردی هەڵسوکەوتی لەگەڵ کردم.']),
  ],

  'derin': [
    sense('عميق (تفكير، تحليل)', 'قووڵ (بیرکردنەوە)',
      ['Konuya derin bir hâkimiyeti var.', 'ko-nu-YA de-RİN bir hâ-ki-mi-ye-Tİ var', 'له إلمام عميق بالموضوع.', 'زانیارییەکی قووڵی لە بابەتەکە هەیە.']),
  ],

  'geniş': [
    sense('واسع الأفق، متسامح', 'فراوان (بیر)',
      ['Geniş bir bakış açısı gerekiyor.', 'ge-NİŞ bir ba-KIŞ a-çı-SI ge-re-ki-YOR', 'يلزم منظور واسع.', 'ڕوانگەیەکی فراوان پێویستە.']),
  ],
  /* ================================================================== */
  /* Phase 8 — the verbs whose gloss hides the most                      */
  /* ================================================================== */

  'olmak': [
    sense('يصير، يُصبح', 'بوون بە',
      ['Kardeşim doktor oldu.', 'kar-de-ŞİM dok-TOR ol-DU', 'صار أخي طبيباً.', 'براکەم بوو بە دکتۆر.']),
    sense('يحدث، يقع', 'ڕوودان',
      ['Ne oldu?', 'NE ol-DU', 'ماذا حدث؟', 'چی ڕوویدا؟']),
    sense('ينضج، يجهز', 'پێگەیشتن، ئامادەبوون',
      ['Yemek oldu mu?', 'ye-MEK ol-DU mu', 'هل جهز الطعام؟', 'خواردنەکە ئامادە بوو؟']),
    sense('يمرض (مع اسم مرض)', 'نەخۆشکەوتن',
      ['Grip oldum.', 'GRİP ol-DUM', 'أصبت بالإنفلونزا.', 'هەڵامەتم گرت.'],
      { note: b('⚠️ التركية تقول «صرت إنفلونزا» حرفياً — تركيب ثابت لا يُترجم كلمة بكلمة.',
        '⚠️ تورکی دەڵێت «بووم بە هەڵامەت».') }),
  ],

  'yapmak': [
    sense('يبني، يصنع', 'دروستکردن',
      ['Burada yeni bir okul yapıyorlar.', 'bu-ra-DA ye-Nİ bir o-KUL ya-pı-yor-LAR', 'يبنون مدرسة جديدة هنا.', 'لێرە قوتابخانەیەکی نوێ دروست دەکەن.']),
    sense('يطبخ', 'لێنان',
      ['Akşama makarna yapacağım.', 'ak-şa-MA ma-kar-NA ya-pa-ca-ĞIM', 'سأطبخ معكرونة مساءً.', 'ئێوارە ماکارۆنە دروست دەکەم.']),
    sense('يبلغ، يساوي (حساب)', 'بەرامبەر بوون',
      ['İki kere iki dört yapar.', 'i-Kİ ke-RE i-Kİ DÖRT ya-PAR', 'اثنان في اثنين يساوي أربعة.', 'دوو جار دوو دەکاتە چوار.']),
  ],

  'etmek': [
    sense('يساوي، يبلغ ثمناً', 'بەرامبەر بوون بە نرخ',
      ['Bu kaç para eder?', 'BU KAÇ pa-RA e-DER', 'كم يساوي هذا؟', 'ئەمە چەند دەکات؟']),
  ],

  'çıkmak': [
    sense('يصعد', 'سەرکەوتن',
      ['Merdivenden çıktık.', 'mer-di-ven-DEN çık-TIK', 'صعدنا على الدرج.', 'بە پلیکانەدا سەرکەوتین.']),
    sense('يظهر، يصدر', 'دەرچوون',
      ['Sonuçlar yarın çıkacak.', 'so-nuç-LAR ya-RIN çı-ka-CAK', 'ستصدر النتائج غداً.', 'ئەنجامەکان سبەینێ دەردەچن.']),
    sense('يخرج مع شخص (علاقة)', 'هاوڕێیەتی',
      ['İki yıldır çıkıyorlar.', 'i-Kİ yıl-DIR çı-kı-yor-LAR', 'هما في علاقة منذ سنتين.', 'دوو ساڵە پێکەوەن.']),
    sense('يتبيّن أن، يتضح', 'دەرکەوتن',
      ['Haber yalan çıktı.', 'ha-BER ya-LAN çık-TI', 'تبيّن أن الخبر كاذب.', 'هەواڵەکە درۆ دەرچوو.']),
  ],

  'koymak': [
    sense('يضيف إلى طعام أو شراب', 'زیادکردن',
      ['Çaya şeker koyar mısın?', 'ça-YA şe-KER ko-YAR mı-SIN', 'هل تضع سكّراً في الشاي؟', 'شەکر دەخەیتە چایەکەوە؟']),
    sense('يضع قاعدة، يفرض', 'دانانی یاسا',
      ['Yeni bir kural koydular.', 'ye-Nİ bir ku-RAL koy-du-LAR', 'وضعوا قاعدة جديدة.', 'یاسایەکی نوێیان دانا.']),
    sense('يؤثّر سلبياً في النفس (عامّية)', 'کاریگەری خراپ',
      ['Bu haber bana çok koydu.', 'BU ha-BER ba-NA ÇOK koy-DU', 'أثّر فيّ هذا الخبر كثيراً.', 'ئەم هەواڵە زۆر کاری تێکردم.'],
      { note: b('⚠️ استعمال عامّي شائع جداً ولا يُخمَّن من المعنى الأصلي.',
        '⚠️ بەکارهێنانێکی باوی قسەکردنە.') }),
  ],

  'düşmek': [
    sense('ينخفض (سعر، حرارة)', 'داشکان',
      ['Fiyatlar düştü.', 'fi-yat-LAR düş-TÜ', 'انخفضت الأسعار.', 'نرخەکان داشکان.']),
    sense('يخطر بالبال', 'کەوتنە بیر',
      ['Aklıma bir fikir düştü.', 'ak-lı-MA bir fi-KİR düş-TÜ', 'خطرت لي فكرة.', 'بیرۆکەیەک کەوتە بیرم.']),
    sense('يقع من نصيبه', 'کەوتنە بەشی',
      ['Bu iş bana düştü.', 'BU İŞ ba-NA düş-TÜ', 'وقع هذا العمل على عاتقي.', 'ئەم کارە کەوتە ئەستۆم.']),
  ],

  'çekmek': [
    sense('يلتقط صورة', 'وێنەگرتن',
      ['Bir fotoğraf çekelim.', 'bir fo-toğ-RAF çe-ke-LİM', 'لنلتقط صورة.', 'با وێنەیەک بگرین.']),
    sense('يسحب مالاً', 'دەرهێنانی پارە',
      ['Bankamatikten para çektim.', 'ban-ka-ma-tik-TEN pa-RA çek-TİM', 'سحبت مالاً من الصرّاف.', 'پارەم لە ئامێرەکەوە دەرهێنا.']),
    sense('يعاني، يكابد', 'کێشان (ئازار)',
      ['Çok sıkıntı çekti.', 'ÇOK sı-kın-TI çek-Tİ', 'عانى كثيراً.', 'زۆر ئازاری چێشت.'],
      { note: b('نفس الصورة العربية «عانى» و«احتمل»: «acı çekmek» = يتألّم.',
        'هەمان وێنە: «acı çekmek» = ئازار چێشتن.') }),
  ],

  'sürmek': [
    sense('يقود مركبة', 'لێخوڕین',
      ['Araba sürmeyi biliyor musun?', 'a-ra-BA sür-me-Yİ bi-li-YOR mu-SUN', 'هل تعرف قيادة السيارة؟', 'دەزانیت ئۆتۆمبێل لێبخوڕیت؟']),
    sense('يدهن، يمسح على', 'مالین',
      ['Ekmeğe tereyağı sürdü.', 'ek-me-ĞE te-re-ya-ĞI sür-DÜ', 'دهن الخبز بالزبدة.', 'کەرەی لە نانەکە دا.']),
  ],

  'kesmek': [
    sense('يقطع خدمة أو تيّاراً', 'پچڕاندن',
      ['Elektrikleri kestiler.', 'e-lek-trik-le-Rİ kes-ti-LER', 'قطعوا الكهرباء.', 'کارەباکەیان پچڕاند.']),
    sense('يكفي (عامّية)', 'بەسبوون',
      ['Bu kadar para keser mi?', 'BU ka-DAR pa-RA ke-SER mi', 'هل يكفي هذا المبلغ؟', 'ئەم بڕە پارەیە بەس دەکات؟']),
  ],

  'vurmak': [
    sense('يطرق الباب', 'لێدانی دەرگا',
      ['Kapıya vurdu.', 'ka-pı-YA vur-DU', 'طرق الباب.', 'لە دەرگا دا.']),
    sense('يضرّ، يصيب بضرر', 'زیان گەیاندن',
      ['Kriz esnafı vurdu.', 'KRİZ es-na-FI vur-DU', 'ضربت الأزمة أصحاب المحال.', 'قەیرانەکە لە بازرگانان دا.']),
  ],

  'katılmak': [
    sense('يوافق، يتّفق مع', 'ڕازیبوون لەگەڵ',
      ['Bu konuda size katılıyorum.', 'BU ko-nu-DA si-ZE ka-tı-lı-yo-RUM', 'أتّفق معكم في هذا.', 'لەم بارەیەوە لەگەڵتان ڕازیم.'],
      { note: b('⚠️ نفس الفعل للمشاركة وللموافقة، وكلاهما بحالة الاتّجاه.',
        '⚠️ هەمان کردار بۆ بەشداری و ڕازیبوون.') }),
  ],

  'taşımak': [
    sense('يحمل صفة أو معنى', 'هەڵگرتنی سیفەت',
      ['Bu karar risk taşıyor.', 'BU ka-RAR RİSK ta-şı-YOR', 'يحمل هذا القرار مخاطرة.', 'ئەم بڕیارە مەترسی هەڵدەگرێت.']),
  ],

  'kurmak': [
    sense('يؤسّس شركة أو منظّمة', 'دامەزراندن',
      ['Küçük bir şirket kurdu.', 'kü-ÇÜK bir şir-KET kur-DU', 'أسّس شركة صغيرة.', 'کۆمپانیایەکی بچووکی دامەزراند.']),
    sense('يضبط منبّهاً', 'کۆکردنەوەی زەنگ',
      ['Alarmı yediye kurdum.', 'a-lar-MI ye-di-YE kur-DUM', 'ضبطت المنبّه على السابعة.', 'زەنگەکەم بۆ حەوت کۆکردەوە.']),
    sense('يبني جملة أو خطّة', 'دروستکردنی ڕستە',
      ['Doğru cümle kurmak zor.', 'doğ-RU cüm-LE kur-MAK zor', 'بناء جملة صحيحة صعب.', 'دروستکردنی ڕستەی ڕاست قورسە.']),
  ],

  'binmek': [
    sense('يمتطي حيواناً', 'سواربوونی ئاژەڵ',
      ['Ata bindi.', 'a-TA bin-Dİ', 'امتطى الحصان.', 'سواری ئەسپ بوو.']),
  ],

  'dolmak': [
    sense('ينقضي، يكتمل (مدّة)', 'تەواوبوونی ماوە',
      ['Sürem doldu.', 'sü-REM dol-DU', 'انتهت مدّتي.', 'ماوەکەم تەواو بوو.']),
  ],

  /* ---------------- nouns and adjectives with a hidden sense ---------- */

  'saat': [
    sense('الوقت المعلن (كم الساعة)', 'کاتژمێر چەند',
      ['Saat kaç?', 'sa-AT kaç', 'كم الساعة؟', 'کاتژمێر چەندە؟']),
  ],

  'el': [
    sense('الغريب، غير الأهل (أدبية)', 'بیانی',
      ['El âlem ne der?', 'EL â-LEM NE der', 'ماذا سيقول الناس؟', 'خەڵکی چی دەڵێن؟'],
      { note: b('«el âlem» تعبير ثابت = الناس، الغرباء — لا علاقة له باليد.',
        '«el âlem» دەستەواژەیەکی جێگیرە.') }),
  ],

  'can': [
    sense('عزيز، حبيب (نداء)', 'ئازیز',
      ['Canım, biraz bekle.', 'ca-NIM bi-RAZ bek-LE', 'عزيزي، انتظر قليلاً.', 'ئازیزم، کەمێک چاوەڕێ بکە.']),
    sense('الرغبة، المزاج', 'حەز',
      ['Canım çay istiyor.', 'ca-NIM ÇAY is-ti-YOR', 'أشتهي شاياً.', 'حەزم لە چایە.'],
      { note: b('⚠️ التركية تعبّر عن الرغبة بـ «canım … istiyor» حرفياً «روحي تريد».',
        '⚠️ تورکی حەز بە «canım … istiyor» دەردەبڕێت.') }),
  ],

  'ağız': [
    sense('لهجة محلّية', 'شێوەزار',
      ['Karadeniz ağzıyla konuşuyor.', 'ka-ra-de-NİZ ağ-zıy-LA ko-nu-şu-YOR', 'يتكلّم بلهجة البحر الأسود.', 'بە شێوەزاری دەریای ڕەش قسە دەکات.']),
  ],

  'yol': [
    sense('الطريقة، الأسلوب', 'ڕێگا، شێواز',
      ['Başka bir yol bulmalıyız.', 'baş-KA bir YOL bul-ma-lı-YIZ', 'علينا إيجاد طريقة أخرى.', 'دەبێت ڕێگایەکی تر بدۆزینەوە.']),
    sense('السفر، الرحلة', 'گەشت',
      ['Yolculuk iyi geçti mi?', 'yol-cu-LUK i-Yİ geç-Tİ mi', 'هل كانت الرحلة جيدة؟', 'گەشتەکە باش بوو؟']),
  ],

  'kapı': [
    sense('الفرصة، المدخل المجازي', 'دەرفەت',
      ['Bu iş bana yeni kapılar açtı.', 'BU İŞ ba-NA ye-Nİ ka-pı-LAR aç-TI', 'فتح لي هذا العمل أبواباً جديدة.', 'ئەم کارە دەرگای نوێی بۆم کردەوە.']),
  ],

  'tatlı': [
    sense('لطيف، ظريف (عن شخص)', 'شیرین (کەس)',
      ['Çok tatlı bir çocuk.', 'ÇOK tat-LI bir ço-CUK', 'طفل لطيف جداً.', 'منداڵێکی زۆر شیرین.']),
  ],

  'zor': [
    sense('بالكاد، بصعوبة (ظرف)', 'بە زەحمەت',
      ['Zor yetiştim.', 'ZOR ye-tiş-TİM', 'بالكاد لحقت.', 'بە زەحمەت گەیشتم.']),
  ],

  'temiz': [
    sense('نظيف السجلّ، نزيه', 'پاک (تۆمار)',
      ['Sicili temiz.', 'si-ci-Lİ te-MİZ', 'سجلّه نظيف.', 'تۆمارەکەی پاکە.']),
  ],

};
