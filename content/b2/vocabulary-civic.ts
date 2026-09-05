import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, sense, w } from '../shared/helpers';

/**
 * B2 vocabulary: the press, the ballot box, and the scandal.
 *
 * This is the vocabulary of a Turkish news bulletin. A B2 student who has it
 * can follow the evening news; without it they can follow the weather and
 * nothing else — and the audit found the curriculum had `hükümet` and `meclis`
 * but not `iktidar`, `muhalefet`, `seçmen`, `oy`, `basın` or `özgürlük`.
 *
 * A high proportion of these are Arabic-derived and transparent to an Arabic
 * speaker (`muhalefet`, `iktidar`, `itibar`, `propaganda` excepted), which is
 * why this set is unusually cheap for our students to acquire and unusually
 * expensive for other learners. The origin overlay documents the ones with a
 * clear root.
 */

/* ---------------- press and speech ---------------- */

const PRESS: VocabItem[] = pack('media', 'b2', 'noun', [
  {
    ...w('basın', 'ba-SIN', 'الصحافة', 'ڕۆژنامەگەری',
      ['Basın toplantısı yarın.', 'ba-SIN top-lan-tı-SI ya-RIN', 'المؤتمر الصحفي غداً.', 'کۆنفڕانسی ڕۆژنامەوانی سبەینێیە.']),
    collocations: ['basın toplantısı', 'basın açıklaması', 'yazılı basın'],
    related: ['basmak'],
    note: b(
      'من «basmak» (يطبع) — الصحافة هي «المطبوع»، تماماً كالعربية.',
      'لە «basmak»ەوە — وەک عەرەبی.',
    ),
  },
  {
    ...w('yayıncılık', 'ya-yın-cı-LIK', 'النشر، الإعلام', 'بڵاوکردنەوە',
      ['Dijital yayıncılık hızla büyüyor.', 'di-ji-TAL ya-yın-cı-LIK hız-LA bü-yü-YOR', 'ينمو النشر الرقمي بسرعة.', 'بڵاوکردنەوەی دیجیتاڵ بە خێرایی گەشە دەکات.']),
    related: ['yayın'],
  },
  {
    ...w('sansür', 'san-SÜR', 'رقابة، حجب', 'سانسۆر',
      ['Sansür tartışması sürüyor.', 'san-SÜR tar-tış-ma-SI sü-rü-YOR', 'يستمرّ الجدل حول الرقابة.', 'گفتوگۆی سانسۆر بەردەوامە.']),
    collocations: ['sansür uygulamak', 'sansüre uğramak'],
  },
  {
    ...w('özgürlük', 'öz-gür-LÜK', 'حرّية', 'ئازادی',
      ['Basın özgürlüğü temel bir haktır.', 'ba-SIN öz-gür-lü-ĞÜ te-MEL bir hak-TIR', 'حرّية الصحافة حقّ أساسي.', 'ئازادی ڕۆژنامەگەری مافێکی بنەڕەتییە.']),
    collocations: ['ifade özgürlüğü', 'basın özgürlüğü', 'özgürlük mücadelesi'],
    related: ['özgür', 'hürriyet'],
    note: b(
      '«özgürlük» تركية حديثة و«hürriyet» عربية الأصل — نفس المعنى، والأولى هي المستعملة اليوم.',
      '«özgürlük» تورکی نوێیە و «hürriyet» عەرەبییە.',
    ),
  },
  {
    ...w('propaganda', 'pro-pa-gan-DA', 'دعاية', 'پڕوپاگەندە',
      ['Seçim propagandası başladı.', 'se-ÇİM pro-pa-gan-da-SI baş-la-DI', 'بدأت الدعاية الانتخابية.', 'پڕوپاگەندەی هەڵبژاردن دەستی پێکرد.']),
  },
  {
    ...w('tarafsızlık', 'ta-raf-sız-LIK', 'الحياد', 'بێلایەنی',
      ['Yayın tarafsızlığı sorgulanıyor.', 'ya-YIN ta-raf-sız-lı-ĞI sor-gu-la-nı-YOR', 'يُشكَّك في حياد البثّ.', 'بێلایەنی بڵاوکردنەوە پرسیاری لەسەرە.']),
    related: ['taraf', 'tarafsız'],
  },
  {
    ...w('itibar', 'i-ti-BAR', 'سمعة، اعتبار', 'ناوبانگ',
      ['Kurumun itibarı zedelendi.', 'ku-ru-MUN i-ti-ba-RI ze-de-len-Dİ', 'تضرّرت سمعة المؤسسة.', 'ناوبانگی دامەزراوەکە زیانی بەرکەوت.']),
    collocations: ['itibar kaybetmek', 'itibar görmek', 'itibarıyla'],
  },
]);

/* ---------------- the ballot box ---------------- */

const POLITICS: VocabItem[] = pack('society', 'b2', 'noun', [
  {
    ...w('iktidar', 'ik-ti-DAR', 'السلطة، الحزب الحاكم', 'دەسەڵات',
      ['İktidar yeni bir yasa hazırlıyor.', 'ik-ti-DAR ye-Nİ bir ya-SA ha-zır-lı-YOR', 'تُعدّ السلطة قانوناً جديداً.', 'دەسەڵات یاسایەکی نوێ ئامادە دەکات.']),
    opposite: ['muhalefet'],
    collocations: ['iktidara gelmek', 'iktidar partisi'],
  },
  {
    ...w('muhalefet', 'mu-ha-le-FET', 'المعارضة', 'ئۆپۆزسیۆن',
      ['Muhalefet karara itiraz etti.', 'mu-ha-le-FET ka-ra-RA i-ti-RAZ et-Tİ', 'اعترضت المعارضة على القرار.', 'ئۆپۆزسیۆن ناڕەزایی لە بڕیارەکە دەربڕی.']),
    opposite: ['iktidar'],
  },
  {
    ...w('parti', 'par-Tİ', 'حزب', 'پارت',
      ['Hangi partiye oy verdin?', 'han-Gİ par-ti-YE OY ver-DİN', 'لأي حزب صوّتّ؟', 'دەنگت بە کام پارت دا؟']),
    collocations: ['siyasi parti', 'parti kurmak'],
  },
  {
    ...w('oy', 'OY', 'صوت انتخابي', 'دەنگ',
      ['Oy kullanmaya gittik.', 'OY kul-lan-ma-YA git-TİK', 'ذهبنا للتصويت.', 'چووین بۆ دەنگدان.']),
    collocations: ['oy vermek', 'oy kullanmak', 'oy oranı'],
    note: b(
      '⚠️ التركية «تُعطي» الصوت (oy vermek) أو «تستعمله» (oy kullanmak) — لا «تُدلي» به.',
      '⚠️ تورکی دەنگ «دەدات» یان «بەکاردەهێنێت».',
    ),
  },
  {
    ...w('seçmen', 'seç-MEN', 'ناخب', 'دەنگدەر',
      ['Seçmen sayısı açıklandı.', 'seç-MEN sa-yı-SI a-çık-lan-DI', 'أُعلن عدد الناخبين.', 'ژمارەی دەنگدەران ڕاگەیەنرا.']),
    related: ['seçmek', 'seçim'],
    note: b(
      'اللاحقة «-men» تصنع الفاعل: seçmek→seçmen, öğretmek→öğretmen, yönetmek→yönetmen.',
      'پاشگری «-men» کردەر دروست دەکات.',
    ),
  },
  {
    ...w('koalisyon', 'ko-a-lis-YON', 'ائتلاف', 'کۆئەڵێشن',
      ['Koalisyon hükümeti kuruldu.', 'ko-a-lis-YON hü-kü-me-Tİ ku-rul-DU', 'تشكّلت حكومة ائتلافية.', 'حکومەتی کۆئەڵێشن پێکهات.']),
  },
  {
    ...w('reform', 're-FORM', 'إصلاح', 'چاکسازی',
      ['Eğitim reformu tartışılıyor.', 'e-ği-TİM re-for-MU tar-tı-şı-lı-YOR', 'يُناقَش إصلاح التعليم.', 'چاکسازی پەروەردە تاوتوێ دەکرێت.']),
    collocations: ['reform yapmak', 'reform paketi'],
  },
  {
    ...w('politika', 'po-li-ti-KA', 'سياسة (نهج)', 'سیاسەت',
      ['Yeni bir dış politika izliyorlar.', 'ye-Nİ bir DIŞ po-li-ti-KA iz-li-yor-LAR', 'يتّبعون سياسة خارجية جديدة.', 'سیاسەتێکی دەرەکی نوێ پەیڕەو دەکەن.']),
    collocations: ['dış politika', 'politika izlemek'],
    note: b(
      '⚠️ «politika» النهج والسياسة العامّة؛ «siyaset» العمل السياسي. الفرق قريب من «policy» و«politics».',
      '⚠️ «politika» = ڕێبازی گشتی؛ «siyaset» = کاری سیاسی.',
    ),
  },
]);

/* ---------------- protest and pressure ---------------- */

const PROTEST: VocabItem[] = pack('society', 'b2', 'noun', [
  {
    ...w('protesto', 'pro-tes-TO', 'احتجاج', 'ناڕەزایی',
      ['Karar protesto edildi.', 'ka-RAR pro-tes-TO e-dil-Dİ', 'جرى الاحتجاج على القرار.', 'ناڕەزایی لە بڕیارەکە دەربڕدرا.']),
    collocations: ['protesto etmek', 'protesto gösterisi'],
  },
  {
    ...w('grev', 'GREV', 'إضراب', 'مانگرتن',
      ['İşçiler greve gitti.', 'iş-çi-LER gre-VE git-Tİ', 'دخل العمّال في إضراب.', 'کرێکاران مانیان گرت.']),
    collocations: ['greve gitmek', 'grev kararı'],
  },
  {
    ...w('sendika', 'sen-di-KA', 'نقابة', 'سەندیکا',
      ['Sendika üyeleri toplandı.', 'sen-di-KA ü-ye-le-Rİ top-lan-DI', 'اجتمع أعضاء النقابة.', 'ئەندامانی سەندیکا کۆبوونەوە.']),
  },
  {
    ...w('uzlaşma', 'uz-laş-MA', 'توافق، تسوية', 'ڕێککەوتن',
      ['Taraflar uzlaşmaya vardı.', 'ta-raf-LAR uz-laş-ma-YA var-DI', 'توصّل الطرفان إلى توافق.', 'لایەنەکان گەیشتنە ڕێککەوتن.']),
    related: ['uzlaşmak'],
    collocations: ['uzlaşmaya varmak'],
  },
  {
    ...w('taviz', 'ta-VİZ', 'تنازل', 'لێبوردن، دەستبەرداربوون',
      ['Bu konuda taviz vermeyiz.', 'BU ko-nu-DA ta-VİZ ver-me-YİZ', 'لن نقدّم تنازلاً في هذا الأمر.', 'لەم بارەیەوە دەستبەردار نابین.']),
    collocations: ['taviz vermek', 'taviz koparmak'],
  },
  {
    ...w('lobi', 'lo-Bİ', 'جماعة ضغط، لوبي', 'لۆبی',
      ['Güçlü bir lobi faaliyeti var.', 'güç-LÜ bir lo-Bİ fa-a-li-ye-Tİ var', 'هناك نشاط ضغط قويّ.', 'چالاکییەکی لۆبی بەهێز هەیە.']),
    review: needsReview('Sorani political terminology — needs a native reader.'),
  },
]);

/* ---------------- scandal and accountability ---------------- */

const ACCOUNTABILITY: VocabItem[] = pack('society', 'b2', 'noun', [
  {
    ...w('kriz', 'KRİZ', 'أزمة', 'قەیران',
      ['Ekonomik kriz derinleşiyor.', 'e-ko-no-MİK KRİZ de-rin-le-şi-YOR', 'تتعمّق الأزمة الاقتصادية.', 'قەیرانی ئابووری قووڵتر دەبێتەوە.']),
    collocations: ['kriz yönetimi', 'krize girmek', 'kriz çıkmak'],
  },
  {
    ...w('skandal', 'skan-DAL', 'فضيحة', 'ڕیسوایی',
      ['Skandal basına yansıdı.', 'skan-DAL ba-sı-NA yan-sı-DI', 'انعكست الفضيحة في الصحافة.', 'ڕیسواییەکە لە ڕۆژنامەکاندا دەرکەوت.']),
  },
  {
    ...w('soruşturma', 'so-ruş-tur-MA', 'تحقيق', 'لێکۆڵینەوە',
      ['Soruşturma başlatıldı.', 'so-ruş-tur-MA baş-la-tıl-DI', 'فُتح تحقيق.', 'لێکۆڵینەوە دەستپێکرا.']),
    related: ['sormak'],
    collocations: ['soruşturma açmak', 'soruşturma yürütmek'],
  },
  {
    ...w('yolsuzluk', 'yol-suz-LUK', 'فساد', 'گەندەڵی',
      ['Yolsuzluk iddiaları gündemde.', 'yol-suz-LUK id-di-a-la-RI gün-dem-DE', 'اتّهامات الفساد على جدول الأعمال.', 'تۆمەتەکانی گەندەڵی لە ڕۆژەڤدان.']),
    note: b(
      'حرفياً «انعدام الطريق» — «yol» طريق + «-suz» بلا + «-luk» اسم حالة.',
      'لە ڕەگدا «بێڕێگایی»: yol + -suz + -luk.',
    ),
  },
  {
    ...w('şeffaflık', 'şef-faf-LIK', 'الشفافية', 'شەفافیەت',
      ['Şeffaflık güveni artırır.', 'şef-faf-LIK gü-ve-Nİ ar-tı-RIR', 'الشفافية تزيد الثقة.', 'شەفافیەت متمانە زیاد دەکات.']),
    related: ['şeffaf'],
  },
  {
    ...w('algı', 'al-GI', 'إدراك، تصوّر عامّ', 'تێگەیشتن، وێنا',
      ['Kamuoyu algısı değişti.', 'ka-mu-o-YU al-gı-SI de-ğiş-Tİ', 'تغيّر تصوّر الرأي العام.', 'تێگەیشتنی ڕای گشتی گۆڕا.']),
    senses: [
      sense('التلاعب بالتصوّرات (سياسياً)', 'دەستکاری وێنا',
        ['Algı yönetimi tartışılıyor.', 'al-GI yö-ne-ti-Mİ tar-tı-şı-lı-YOR', 'يُناقَش موضوع إدارة التصوّرات.', 'بەڕێوەبردنی وێنا تاوتوێ دەکرێت.']),
    ],
    related: ['algılamak'],
  },
]);

export const B2_VOCABULARY_CIVIC: VocabItem[] = [
  ...PRESS,
  ...POLITICS,
  ...PROTEST,
  ...ACCOUNTABILITY,
];
