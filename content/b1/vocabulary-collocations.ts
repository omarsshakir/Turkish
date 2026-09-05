import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * B1 vocabulary, taught with the words it actually occurs with.
 *
 * The step from A2 to B1 is not more nouns — it is knowing that Turkish says
 * `başvuruda bulunmak`, `karar vermek`, `izin almak`. A verb-plus-noun pairing
 * is one unit of meaning and has to be learned as one, so every entry here
 * carries the collocations it lives inside.
 *
 * `collocations` was added to the model in the previous phase but never
 * populated. This file starts using it properly.
 */

/* ---------------- university admin: the paperwork of student life -------- */

const UNIVERSITY: VocabItem[] = [
  ...pack('university', 'b1', 'noun', [
    {
      ...w('dilekçe', 'di-lek-ÇE', 'التماس، طلب خطّي', 'داواکاری نووسراو',
        ['Bölüme bir dilekçe verdim.', 'bö-lü-ME bir di-lek-ÇE ver-DİM', 'قدّمت التماساً إلى القسم.', 'داواکارییەکم بە بەشەکە دا.']),
      collocations: ['dilekçe vermek', 'dilekçe yazmak', 'dilekçeyle başvurmak'],
    },
    {
      ...w('harç', 'HARÇ', 'رسوم دراسية', 'خەرجی خوێندن',
        ['Bu dönem harcı yatırdım.', 'BU dö-NEM har-CI ya-tır-DIM', 'دفعت رسوم هذا الفصل.', 'خەرجی ئەم وەرزەم دا.']),
      collocations: ['harç yatırmak', 'harç ödemek', 'harç muafiyeti'],
    },
    {
      ...w('sertifika', 'ser-ti-fi-KA', 'شهادة (دورة)', 'بڕوانامە',
        ['Kurs sonunda sertifika veriyorlar.', 'KURS so-nun-DA ser-ti-fi-KA ve-ri-yor-LAR', 'يمنحون شهادة في نهاية الدورة.', 'لە کۆتایی خولەکەدا بڕوانامە دەدەن.']),
      collocations: ['sertifika almak', 'sertifika vermek', 'sertifika programı'],
    },
    {
      ...w('ortalama', 'or-ta-la-MA', 'معدّل', 'تێکڕا',
        ['Not ortalamam yükseldi.', 'NOT or-ta-la-MAM yük-sel-Dİ', 'ارتفع معدّل درجاتي.', 'تێکڕای نمرەکانم بەرزبووەوە.']),
      collocations: ['not ortalaması', 'ortalamayı yükseltmek', 'ortalamanın altında'],
    },
    {
      ...w('kulüp', 'ku-LÜP', 'نادٍ طلابي', 'کلوب',
        ['Tiyatro kulübüne üye oldum.', 'ti-yat-RO ku-lü-bü-NE ü-YE ol-DUM', 'انضممت إلى نادي المسرح.', 'بووم بە ئەندامی کلوبی شانۆ.']),
      collocations: ['kulübe üye olmak', 'kulüp kurmak', 'öğrenci kulübü'],
    },
    {
      ...w('etkinlik', 'et-kin-LİK', 'فعّالية، نشاط', 'چالاکی',
        ['Okulda bir etkinlik düzenlendi.', 'o-kul-DA bir et-kin-LİK dü-zen-len-Dİ', 'نُظّمت فعّالية في المدرسة.', 'چالاکییەک لە قوتابخانە ڕێکخرا.']),
      collocations: ['etkinlik düzenlemek', 'etkinliğe katılmak', 'kültürel etkinlik'],
    },
    {
      ...w('tartışma', 'tar-tış-MA', 'نقاش، جدال', 'گفتوگۆ',
        ['Sınıfta uzun bir tartışma oldu.', 'sı-nıf-TA u-ZUN bir tar-tış-MA ol-DU', 'دار نقاش طويل في الصفّ.', 'گفتوگۆیەکی درێژ لە پۆلەکەدا ڕوویدا.']),
      collocations: ['tartışma açmak', 'tartışmaya katılmak', 'tartışmayı kapatmak'],
    },
    {
      ...w('grup', 'GRUP', 'مجموعة', 'گروپ',
        ['Grup çalışması yapıyoruz.', 'GRUP ça-lış-ma-SI ya-pı-yo-RUZ', 'نقوم بعمل جماعي.', 'کاری گروپی دەکەین.']),
      collocations: ['grup çalışması', 'gruba katılmak', 'grup kurmak'],
    },
    {
      ...w('özgeçmiş', 'öz-geç-MİŞ', 'سيرة ذاتية', 'ژیاننامە',
        ['Özgeçmişimi güncelledim.', 'öz-geç-mi-Şİ-mi gün-cel-le-DİM', 'حدّثت سيرتي الذاتية.', 'ژیاننامەکەم نوێ کردەوە.']),
      collocations: ['özgeçmiş hazırlamak', 'özgeçmiş göndermek', 'özgeçmişi güncellemek'],
    },
  ]),
];

/* ---------------- the verbs that paperwork runs on ---------------------- */

const PROCESS_VERBS: VocabItem[] = pack('verbs', 'b1', 'verb', [
  {
    ...w('başvurmak', 'baş-vur-MAK', 'يتقدّم بطلب', 'داواکاری پێشکەشکردن',
      ['Bursa başvurdum.', 'bur-SA baş-vur-DUM', 'تقدّمت بطلب للمنحة.', 'داواکاری بۆ بورس پێشکەش کرد.']),
    collocations: ['işe başvurmak', 'bursa başvurmak', 'vizeye başvurmak'],
    note: b(
      'يأخذ حالة الاتجاه -e: işe başvurmak، وليس işi başvurmak.',
      'حاڵەتی ئاراستە -e وەردەگرێت: işe başvurmak، نەک işi başvurmak.',
    ),
  },
  {
    ...w('onaylamak', 'o-nay-la-MAK', 'يوافق، يعتمد', 'پەسەندکردن',
      ['Müdür talebi onayladı.', 'mü-DÜR ta-le-Bİ o-nay-la-DI', 'وافق المدير على الطلب.', 'بەڕێوەبەر داواکارییەکەی پەسەند کرد.']),
    collocations: ['talebi onaylamak', 'kararı onaylamak', 'belgeyi onaylatmak'],
    opposite: ['reddetmek'],
  },
  {
    ...w('ertelemek', 'er-te-le-MEK', 'يؤجّل', 'دواخستن',
      ['Toplantıyı haftaya erteledik.', 'top-lan-tı-YI haf-ta-YA er-te-le-DİK', 'أجّلنا الاجتماع إلى الأسبوع القادم.', 'کۆبوونەوەکەمان بۆ هەفتەی داهاتوو دواخست.']),
    collocations: ['toplantıyı ertelemek', 'sınavı ertelemek', 'kararı ertelemek'],
  },
  {
    ...w('iptal etmek', 'ip-TAL et-MEK', 'يلغي', 'هەڵوەشاندنەوە',
      ['Uçuş iptal edildi.', 'u-ÇUŞ ip-TAL e-dil-Dİ', 'أُلغيت الرحلة.', 'فڕینەکە هەڵوەشێنرایەوە.'], 'phrase'),
    collocations: ['randevuyu iptal etmek', 'rezervasyonu iptal etmek', 'iptal edilmek'],
  },
  {
    ...w('yenilemek', 'ye-ni-le-MEK', 'يجدّد', 'نوێکردنەوە',
      ['Pasaportumu yeniledim.', 'pa-sa-por-tu-MU ye-ni-le-DİM', 'جدّدت جواز سفري.', 'پاسپۆرتەکەم نوێ کردەوە.']),
    collocations: ['pasaportu yenilemek', 'aboneliği yenilemek', 'sözleşmeyi yenilemek'],
  },
  {
    ...w('düzenlemek', 'dü-zen-le-MEK', 'ينظّم', 'ڕێکخستن',
      ['Bir konser düzenliyorlar.', 'BİR kon-SER dü-zen-li-yor-LAR', 'ينظّمون حفلاً موسيقياً.', 'کۆنسێرتێک ڕێکدەخەن.']),
    collocations: ['etkinlik düzenlemek', 'toplantı düzenlemek', 'gezi düzenlemek'],
  },
  {
    ...w('taşınmak', 'ta-şın-MAK', 'ينتقل (سكناً)', 'گواستنەوە',
      ['Yeni bir eve taşındık.', 'ye-Nİ bir e-VE ta-şın-DIK', 'انتقلنا إلى بيت جديد.', 'گواستمانەوە بۆ ماڵێکی نوێ.']),
    collocations: ['eve taşınmak', 'şehir değiştirip taşınmak'],
  },
  {
    ...w('kiralamak', 'ki-ra-la-MAK', 'يستأجر', 'بەکرێگرتن',
      ['Bir daire kiraladık.', 'BİR da-i-RE ki-ra-la-DIK', 'استأجرنا شقّة.', 'شوقەیەکمان بەکرێ گرت.']),
    collocations: ['ev kiralamak', 'araba kiralamak', 'kiraya vermek'],
  },
  {
    ...w('yetişmek', 'ye-tiş-MEK', 'يلحق بـ', 'گەیشتن بە',
      ['Son otobüse yetiştim.', 'SON o-to-bü-SE ye-tiş-TİM', 'لحقت بآخر حافلة.', 'گەیشتمە دوایین پاس.']),
    collocations: ['otobüse yetişmek', 'derse yetişmek', 'teslim tarihine yetişmek'],
  },
  {
    ...w('kaçırmak', 'ka-çır-MAK', 'يفوته، يفوّت', 'لەدەستدان',
      ['Treni kaçırdım.', 'tre-Nİ ka-çır-DIM', 'فاتني القطار.', 'شەمەندەفەرەکەم لەدەست دا.']),
    collocations: ['treni kaçırmak', 'fırsatı kaçırmak', 'dersi kaçırmak'],
    opposite: ['yetişmek'],
  },
  {
    ...w('gecikmek', 'ge-cik-MEK', 'يتأخّر', 'دواکەوتن',
      ['Uçak iki saat gecikti.', 'u-ÇAK i-Kİ sa-AT ge-cik-Tİ', 'تأخّرت الطائرة ساعتين.', 'فڕۆکەکە دوو کاتژمێر دواکەوت.']),
    collocations: ['işe gecikmek', 'ödeme gecikmesi', 'gecikme yaşamak'],
  },
  {
    ...w('geçmek', 'geç-MEK', 'يمرّ، ينجح، يتجاوز', 'تێپەڕین، دەرچوون',
      ['Sınavı geçtim.', 'sı-na-VI geç-TİM', 'نجحت في الامتحان.', 'لە تاقیکردنەوەکە دەرچووم.']),
    collocations: ['sınavı geçmek', 'zaman geçmek', 'karşıya geçmek'],
    note: b(
      'فعل واسع المعنى: النجاح في امتحان، ومرور الوقت، والعبور المكاني — والسياق هو ما يحدّد.',
      'کردارێکی فراوانە: دەرچوون لە تاقیکردنەوە، تێپەڕبوونی کات، و پەڕینەوە — دۆخەکە دیاری دەکات.',
    ),
  },
  {
    ...w('ayrılmak', 'ay-rıl-MAK', 'يغادر، ينفصل', 'جیابوونەوە، ڕۆیشتن',
      ['İşten ayrıldı.', 'iş-TEN ay-rıl-DI', 'ترك العمل.', 'لە کارەکە جیا بووەوە.']),
    collocations: ['işten ayrılmak', 'okuldan ayrılmak', 'yoldan ayrılmak'],
  },
]);

/* ---------------- work life ---------------- */

const WORK: VocabItem[] = pack('work', 'b1', 'noun', [
  {
    ...w('görüşme', 'gö-rüş-ME', 'مقابلة، لقاء', 'دیدار',
      ['Yarın bir iş görüşmem var.', 'ya-RIN bir İŞ gö-rüş-MEM var', 'لديّ مقابلة عمل غداً.', 'سبەینێ دیدارێکی کارم هەیە.']),
    collocations: ['iş görüşmesi', 'görüşme yapmak', 'görüşmeye gitmek'],
  },
  {
    ...w('zam', 'ZAM', 'زيادة في الراتب أو السعر', 'زیادکردنی نرخ',
      ['Maaşa zam geldi.', 'ma-a-ŞA ZAM gel-Dİ', 'جاءت زيادة على الراتب.', 'زیادکردن بۆ مووچە هات.']),
    collocations: ['zam yapmak', 'zam istemek', 'zam gelmek'],
  },
  {
    ...w('vardiya', 'var-di-YA', 'وردية، نوبة عمل', 'شیفت',
      ['Bu hafta gece vardiyasındayım.', 'BU haf-TA ge-CE var-di-ya-sın-da-YIM', 'هذا الأسبوع في الوردية الليلية.', 'ئەم هەفتەیە لە شیفتی شەودام.']),
    collocations: ['gece vardiyası', 'vardiya değiştirmek', 'vardiyaya girmek'],
  },
  {
    ...w('emeklilik', 'e-mek-li-LİK', 'تقاعد', 'خانەنشینی',
      ['Emekliliğine üç yıl kaldı.', 'e-mek-li-li-ği-NE ÜÇ YIL kal-DI', 'بقيت له ثلاث سنوات على التقاعد.', 'سێ ساڵی ماوە بۆ خانەنشینی.']),
    collocations: ['emekli olmak', 'emeklilik yaşı', 'emekli maaşı'],
  },
  {
    ...w('işsizlik', 'iş-siz-LİK', 'بطالة', 'بێکاری',
      ['İşsizlik oranı düştü.', 'iş-siz-LİK o-ra-NI düş-TÜ', 'انخفض معدّل البطالة.', 'ڕێژەی بێکاری کەمی کرد.']),
    collocations: ['işsizlik oranı', 'işsiz kalmak', 'işsizlik maaşı'],
  },
]);

/* ---------------- two high-frequency nouns the curriculum lacked -------- */

const CORE_NOUNS: VocabItem[] = pack('nouns', 'b1', 'noun', [
  w('zengin', 'zen-GİN', 'غنيّ', 'دەوڵەمەند',
    ['Zengin bir ailenin çocuğu.', 'zen-GİN bir a-i-le-NİN ço-cu-ĞU', 'ابن عائلة غنية.', 'منداڵی خێزانێکی دەوڵەمەند.'], 'adjective'),
  w('ordu', 'or-DU', 'جيش', 'سوپا',
    ['Ordu sınırda konuşlandı.', 'or-DU sı-nır-DA ko-nuş-lan-DI', 'انتشر الجيش على الحدود.', 'سوپا لە سنووردا جێگیر بوو.']),
  w('ümit', 'ü-MİT', 'أمل', 'ئومێد',
    ['Ümidini hiç kaybetmedi.', 'ü-mi-di-Nİ HİÇ kay-bet-me-Dİ', 'لم يفقد أمله أبداً.', 'هەرگیز ئومێدی لەدەست نەدا.']),
  w('cemaat', 'ce-ma-AT', 'جماعة، جمهور المصلّين', 'کۆمەڵ',
    ['Camide büyük bir cemaat vardı.', 'ca-mi-DE bü-YÜK bir ce-ma-AT var-DI', 'كان في المسجد جماعة كبيرة.', 'لە مزگەوتەکەدا کۆمەڵێکی گەورە هەبوو.']),
  w('sıhhat', 'sıh-HAT', 'صحة (رسمي)', 'تەندروستی',
    ['Sıhhatinize dikkat edin.', 'sıh-ha-ti-ni-ZE dik-KAT e-DİN', 'انتبهوا لصحّتكم.', 'ئاگاداری تەندروستیتان بن.']),
  w('dikkat', 'dik-KAT', 'انتباه، حذر', 'ئاگاداری',
    ['Lütfen dikkat edin.', 'lüt-FEN dik-KAT e-DİN', 'انتبهوا من فضلكم.', 'تکایە ئاگاداربن.']),
  w('şüphe', 'şüp-HE', 'شكّ', 'گومان',
    ['Bu konuda şüphem var.', 'BU ko-nu-DA şüp-HEM var', 'لديّ شكّ في هذا الأمر.', 'گومانم لەم بارەیەوە هەیە.']),
]);

export const B1_VOCABULARY_COLLOCATIONS: VocabItem[] = [
  ...CORE_NOUNS,
  ...UNIVERSITY,
  ...PROCESS_VERBS,
  ...WORK,
];
