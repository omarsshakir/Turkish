import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * B1 vocabulary: screens, sport and going places.
 *
 * The curriculum already covered media *institutions* (`kanal`, `yayın`,
 * `haber`) and the digital verbs, but not what people actually talk about —
 * the series they are watching, the match at the weekend, the queue at the
 * hotel desk. This is the small-talk layer, and it is where a B1 student
 * either joins a conversation or stands outside it.
 */

/* ---------------- film and television ---------------- */

const SCREEN: VocabItem[] = pack('media', 'b1', 'noun', [
  {
    ...w('dizi', 'di-Zİ', 'مسلسل', 'زنجیرە',
      ['Bu diziyi herkes izliyor.', 'BU di-zi-Yİ her-KES iz-li-YOR', 'الجميع يشاهد هذا المسلسل.', 'هەموو کەس ئەم زنجیرەیە سەیر دەکات.']),
    collocations: ['dizi izlemek', 'yerli dizi'],
    note: b(
      'المسلسلات التركية صناعة ضخمة ومادّة استماع ممتازة — لكن لغتها سريعة وعامّية.',
      'زنجیرە تورکییەکان پیشەسازییەکی گەورەن و مادەیەکی باشی گوێگرتنن.',
    ),
  },
  {
    ...w('film', 'FİLM', 'فيلم', 'فیلم',
      ['Dün gece bir film izledik.', 'DÜN ge-CE bir FİLM iz-le-DİK', 'شاهدنا فيلماً ليلة أمس.', 'دوێنێ شەو فیلمێکمان سەیرکرد.']),
    collocations: ['film izlemek', 'film çekmek'],
  },
  {
    ...w('sahne', 'sah-NE', 'مشهد؛ خشبة المسرح', 'دیمەن؛ سەرشانۆ',
      ['Son sahne çok etkileyiciydi.', 'SON sah-NE ÇOK et-ki-le-yi-ciy-Dİ', 'كان المشهد الأخير مؤثّراً جداً.', 'دوایین دیمەن زۆر کاریگەر بوو.']),
    senses: [
      sense('خشبة المسرح', 'سەرشانۆ',
        ['Sahneye çıktı.', 'sah-ne-YE çık-TI', 'صعد على المسرح.', 'سەرکەوتە سەر شانۆ.']),
    ],
  },
  {
    ...w('oyuncu', 'o-yun-CU', 'ممثّل؛ لاعب', 'ئەکتەر؛ یاریزان',
      ['Baş oyuncu kim?', 'BAŞ o-yun-CU kim', 'من الممثّل الرئيسي؟', 'ئەکتەری سەرەکی کێیە؟']),
    senses: [
      sense('لاعب', 'یاریزان',
        ['Takımın en iyi oyuncusu.', 'ta-kı-MIN EN i-Yİ o-yun-cu-SU', 'أفضل لاعب في الفريق.', 'باشترین یاریزانی تیمەکە.']),
    ],
    note: b(
      'من «oynamak» (يلعب/يمثّل) — والكلمة نفسها تخدم المسرح والملعب.',
      'لە «oynamak»ەوە — هەمان وشە بۆ شانۆ و یاریگا بەکاردێت.',
    ),
  },
  {
    ...w('yönetmen', 'yö-net-MEN', 'مخرج', 'دەرهێنەر',
      ['Yönetmen ödül aldı.', 'yö-net-MEN ö-DÜL al-DI', 'نال المخرج جائزة.', 'دەرهێنەرەکە خەڵاتی وەرگرت.']),
    related: ['yönetmek'],
  },
  {
    ...w('senaryo', 'se-nar-YO', 'سيناريو', 'سیناریۆ',
      ['Senaryoyu bir yazar grubu yazdı.', 'se-nar-yo-YU bir ya-ZAR gru-BU yaz-DI', 'كتب السيناريو فريق من الكتّاب.', 'سیناریۆکەی گروپێک نووسەر نووسی.']),
  },
  {
    ...w('seyirci', 'se-yir-Cİ', 'مشاهد، جمهور', 'بینەر',
      ['Salonda beş yüz seyirci vardı.', 'sa-lon-DA BEŞ YÜZ se-yir-Cİ var-DI', 'كان في القاعة خمسمئة مشاهد.', 'لە هۆڵەکەدا پێنج سەد بینەر هەبوو.']),
    related: ['izleyici'],
  },
  {
    ...w('program', 'prog-RAM', 'برنامج', 'پڕۆگرام',
      ['Sevdiğim bir program var.', 'sev-di-ĞİM bir prog-RAM var', 'هناك برنامج أحبّه.', 'پڕۆگرامێک هەیە حەزم لێیەتی.']),
    collocations: ['canlı program', 'program yapmak'],
  },
  {
    ...w('spiker', 'spi-KER', 'مذيع', 'ڕاگەیێنەر',
      ['Haber spikeri hızlı konuşuyor.', 'ha-BER spi-ke-Rİ hız-LI ko-nu-şu-YOR', 'مذيع الأخبار يتكلّم بسرعة.', 'ڕاگەیێنەری هەواڵ خێرا قسە دەکات.']),
  },
  {
    ...w('gazeteci', 'ga-ze-te-Cİ', 'صحفي', 'ڕۆژنامەنووس',
      ['Gazeteci soru sordu.', 'ga-ze-te-Cİ so-RU sor-DU', 'طرح الصحفي سؤالاً.', 'ڕۆژنامەنووسەکە پرسیارێکی کرد.']),
    related: ['gazete'],
  },
]);

/* ---------------- sport ---------------- */

const SPORT: VocabItem[] = pack('nature', 'b1', 'noun', [
  {
    ...w('maç', 'MAÇ', 'مباراة', 'یاری',
      ['Maç saat sekizde başlıyor.', 'MAÇ sa-AT se-kiz-DE baş-lı-YOR', 'المباراة تبدأ الساعة الثامنة.', 'یارییەکە کاتژمێر هەشت دەستپێدەکات.']),
    collocations: ['maç izlemek', 'maçı kazanmak'],
  },
  {
    ...w('takım', 'ta-KIM', 'فريق', 'تیم',
      ['Hangi takımı tutuyorsun?', 'han-Gİ ta-kı-MI tu-tu-yor-SUN', 'أي فريق تشجّع؟', 'پشتگیری کام تیم دەکەیت؟']),
    collocations: ['takım tutmak', 'millî takım'],
    note: b(
      'تشجيع فريق يقال «takım tutmak» — بالفعل «يمسك» لا «يشجّع».',
      'پشتگیری تیم بە «takım tutmak» دەوترێت — بە کرداری «گرتن».',
    ),
  },
  {
    ...w('gol', 'GOL', 'هدف (في المرمى)', 'گۆڵ',
      ['Son dakikada gol attı.', 'SON da-ki-ka-DA GOL at-TI', 'سجّل هدفاً في الدقيقة الأخيرة.', 'لە دوایین خولەکدا گۆڵێکی تۆمارکرد.']),
    collocations: ['gol atmak', 'gol yemek'],
    note: b(
      '⚠️ لا تخلطها بـ «göl» = بحيرة. حرف واحد يغيّر المعنى تماماً.',
      '⚠️ تێکەڵی «göl» = دەریاچە مەکە. یەک پیت واتاکە بە تەواوی دەگۆڕێت.',
    ),
  },
  {
    ...w('saha', 'sa-HA', 'ملعب، ساحة', 'یاریگا',
      ['Saha çok çamurluydu.', 'sa-HA ÇOK ça-mur-luy-DU', 'كان الملعب موحلاً جداً.', 'یاریگاکە زۆر قوڕاوی بوو.']),
  },
  {
    ...w('antrenman', 'ant-ren-MAN', 'تمرين، تدريب', 'ڕاهێنان',
      ['Haftada üç gün antrenman yapıyor.', 'haf-ta-DA ÜÇ GÜN ant-ren-MAN ya-pı-YOR', 'يتدرّب ثلاثة أيام أسبوعياً.', 'هەفتەی سێ ڕۆژ ڕاهێنان دەکات.']),
    collocations: ['antrenman yapmak'],
  },
  {
    ...w('antrenör', 'ant-re-NÖR', 'مدرّب', 'ڕاهێنەر',
      ['Yeni antrenör göreve başladı.', 'ye-Nİ ant-re-NÖR gö-re-VE baş-la-DI', 'باشر المدرّب الجديد مهامّه.', 'ڕاهێنەرە نوێیەکە دەستی بە کارەکەی کرد.']),
  },
  {
    ...w('turnuva', 'tur-nu-VA', 'بطولة، دورة', 'پاڵەوانێتی',
      ['Turnuva iki hafta sürecek.', 'tur-nu-VA i-Kİ haf-TA sü-re-CEK', 'ستستمرّ البطولة أسبوعين.', 'پاڵەوانێتییەکە دوو هەفتە دەخایەنێت.']),
  },
  {
    ...w('şampiyon', 'şam-pi-YON', 'بطل', 'پاڵەوان',
      ['Bu yıl şampiyon olduk.', 'BU YIL şam-pi-YON ol-DUK', 'صرنا أبطالاً هذا العام.', 'ئەمساڵ بووین بە پاڵەوان.']),
    collocations: ['şampiyon olmak'],
  },
  {
    ...w('madalya', 'ma-dal-YA', 'ميدالية', 'مەدالیا',
      ['Altın madalya kazandı.', 'al-TIN ma-dal-YA ka-zan-DI', 'فاز بميدالية ذهبية.', 'مەدالیای زێڕینی بەدەستهێنا.']),
  },
  {
    ...w('yarış', 'ya-RIŞ', 'سباق', 'پێشبڕکێ',
      ['Yarışı bir saniye farkla kazandı.', 'ya-rı-ŞI bir sa-ni-YE fark-LA ka-zan-DI', 'فاز بالسباق بفارق ثانية.', 'بە جیاوازی چرکەیەک پێشبڕکێیەکەی بردەوە.']),
    collocations: ['yarışa katılmak', 'at yarışı'],
  },
  {
    ...w('koşu', 'ko-ŞU', 'جري', 'ڕاکردن',
      ['Sabah koşusuna çıkıyorum.', 'sa-BAH ko-şu-su-NA çı-kı-yo-RUM', 'أخرج للجري صباحاً.', 'بەیانیان بۆ ڕاکردن دەردەچم.']),
    related: ['koşmak'],
  },
  {
    ...w('yüzme', 'yüz-ME', 'سباحة', 'مەلەوانی',
      ['Yüzme kursuna yazıldım.', 'yüz-ME kur-su-NA ya-zıl-DIM', 'سجّلت في دورة سباحة.', 'خۆم لە کۆرسی مەلەوانی تۆمارکرد.']),
    related: ['yüzmek'],
  },
]);

/* ---------------- going places ---------------- */

const OUTING: VocabItem[] = pack('travel', 'b1', 'noun', [
  {
    ...w('gezi', 'ge-Zİ', 'رحلة، جولة', 'گەشت',
      ['Okul gezisine gittik.', 'o-KUL ge-zi-si-NE git-TİK', 'ذهبنا في رحلة مدرسية.', 'چووینە گەشتی قوتابخانە.']),
    related: ['gezmek'],
  },
  {
    ...w('tur', 'TUR', 'جولة سياحية', 'گەشتی گەڕان',
      ['Şehir turuna katıldık.', 'şe-HİR tu-ru-NA ka-tıl-DIK', 'شاركنا في جولة المدينة.', 'بەشداری گەشتی شارەکە بووین.']),
    note: b(
      '⚠️ لا تخلطها بـ «tür» = نوع. الفرق نقطتان فوق الحرف.',
      '⚠️ تێکەڵی «tür» = جۆر مەکە.',
    ),
  },
  {
    ...w('kamp', 'KAMP', 'مخيّم، تخييم', 'کەمپ',
      ['Yazın kampa gideceğiz.', 'ya-ZIN kam-PA gi-de-ce-ĞİZ', 'سنذهب للتخييم في الصيف.', 'هاوین دەچینە کەمپ.']),
    collocations: ['kamp yapmak', 'kampa gitmek'],
  },
  {
    ...w('resepsiyon', 're-sep-si-YON', 'مكتب الاستقبال', 'پێشوازی',
      ['Anahtarı resepsiyona bıraktım.', 'a-nah-ta-RI re-sep-si-yo-NA bı-rak-TIM', 'تركت المفتاح في الاستقبال.', 'کلیلەکەم لە پێشوازی جێهێشت.']),
  },
  {
    ...w('sıra', 'sı-RA', 'دور؛ صفّ، ترتيب', 'نۆرە؛ ڕیز',
      ['Sıra sende.', 'sı-RA sen-DE', 'الدور عليك.', 'نۆرە هی تۆیە.']),
    senses: [
      sense('صفّ، ترتيب', 'ڕیز، ڕیزبەندی',
        ['İsimleri alfabetik sıraya koydum.', 'i-sim-le-Rİ al-fa-be-TİK sı-ra-YA koy-DUM', 'رتّبت الأسماء أبجدياً.', 'ناوەکانم بە ڕیزی ئەلفوبێ دانا.']),
    ],
    collocations: ['sıra beklemek', 'sıraya girmek', 'sırayla'],
  },
  {
    ...w('kuyruk', 'kuy-RUK', 'طابور؛ ذيل', 'ڕیز؛ کلک',
      ['Kasada uzun bir kuyruk var.', 'ka-sa-DA u-ZUN bir kuy-RUK var', 'هناك طابور طويل عند الصندوق.', 'لە قاسەکەدا ڕیزێکی درێژ هەیە.']),
    senses: [
      sense('ذيل حيوان', 'کلکی ئاژەڵ',
        ['Kedinin kuyruğu uzun.', 'ke-di-NİN kuy-ru-ĞU u-ZUN', 'ذيل القطّة طويل.', 'کلکی پشیلەکە درێژە.']),
    ],
    collocations: ['kuyruğa girmek', 'kuyrukta beklemek'],
  },
]);

/* ---------------- one more device word ---------------- */

const DEVICE: VocabItem[] = [
  ...pack('technology', 'b1', 'noun', [
    {
      ...w('klavye', 'klav-YE', 'لوحة مفاتيح', 'تەختەکلیل',
        ['Türkçe klavye kullanıyorum.', 'türk-ÇE klav-YE kul-la-nı-yo-RUM', 'أستعمل لوحة مفاتيح تركية.', 'تەختەکلیلی تورکی بەکاردەهێنم.']),
      note: b(
        'لوحة المفاتيح التركية نوعان: Q و F. معظم الناس يستعملون Q.',
        'تەختەکلیلی تورکی دوو جۆرە: Q و F. زۆربەی خەڵک Q بەکاردەهێنن.',
      ),
    },
  ]),
  ...pack('technology', 'b1', 'verb', [
    {
      ...w('mesajlaşmak', 'me-saj-laş-MAK', 'يتراسل', 'نامە ئاڵوگۆڕکردن',
        ['Her gün mesajlaşıyoruz.', 'HER GÜN me-saj-la-şı-yo-RUZ', 'نتراسل كل يوم.', 'هەموو ڕۆژێک نامە ئاڵوگۆڕ دەکەین.']),
      note: b(
        'اللاحقة «-laşmak» تعني التبادل بين طرفين: «mesajlaşmak»، «görüşmek»، «tanışmak».',
        'پاشگری «-laşmak» واتای ئاڵوگۆڕی نێوان دوو لا دەدات.',
      ),
    },
  ]),
];

export const B1_VOCABULARY_LEISURE: VocabItem[] = [
  ...SCREEN,
  ...SPORT,
  ...OUTING,
  ...DEVICE,
];
