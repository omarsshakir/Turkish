import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * B2 vocabulary: events, organisations, and the verbs of getting things done.
 *
 * The register a student needs the moment they stop being only a student —
 * running something, reporting on it, and describing where it has got to. Most
 * of these are the words that fill a Turkish workplace email, and almost all
 * of them take a characteristic object, so nearly every entry carries its
 * collocations.
 */

/* ---------------- events and organisations ---------------- */

const EVENTS: VocabItem[] = pack('work', 'b2', 'noun', [
  {
    ...w('tanıtım', 'ta-nı-TIM', 'تعريف، ترويج', 'ناساندن',
      ['Ürünün tanıtımı yarın yapılacak.', 'ü-rü-NÜN ta-nı-tı-MI ya-RIN ya-pı-la-CAK', 'سيُعرَّف بالمنتج غداً.', 'ناساندنی بەرهەمەکە سبەینێ دەکرێت.']),
    collocations: ['tanıtım yapmak', 'tanıtım toplantısı', 'tanıtım filmi'],
  },
  {
    ...w('sergi', 'ser-Gİ', 'معرض (فني)', 'پێشانگا',
      ['Sergi üç hafta açık kalacak.', 'ser-Gİ ÜÇ haf-TA a-ÇIK ka-la-CAK', 'سيبقى المعرض مفتوحاً ثلاثة أسابيع.', 'پێشانگاکە سێ هەفتە کراوە دەمێنێتەوە.']),
    collocations: ['sergi açmak', 'sergiyi gezmek', 'resim sergisi'],
  },
  {
    ...w('fuar', 'fu-AR', 'معرض تجاري', 'پێشانگای بازرگانی',
      ['Kitap fuarına gittik.', 'ki-TAP fu-a-rı-NA git-TİK', 'ذهبنا إلى معرض الكتاب.', 'چووینە پێشانگای کتێب.']),
    collocations: ['fuara katılmak', 'fuar standı'],
  },
  {
    ...w('konferans', 'kon-fe-RANS', 'مؤتمر', 'کۆنفڕانس',
      ['Uluslararası bir konferansta sunum yaptı.', 'u-lus-la-ra-ra-SI bir kon-fe-rans-TA su-NUM yap-TI', 'قدّم عرضاً في مؤتمر دولي.', 'لە کۆنفڕانسێکی نێودەوڵەتیدا پێشکەشکردنی کرد.']),
    collocations: ['konferans vermek', 'konferansa katılmak'],
  },
  {
    ...w('seminer', 'se-mi-NER', 'ندوة، حلقة دراسية', 'سیمینار',
      ['Cuma günü bir seminer var.', 'cu-MA gü-NÜ bir se-mi-NER var', 'هناك ندوة يوم الجمعة.', 'ڕۆژی هەینی سیمینارێک هەیە.']),
    collocations: ['seminer vermek', 'seminere kaydolmak'],
  },
  {
    ...w('atölye', 'a-töl-YE', 'ورشة عمل', 'وۆرکشۆپ',
      ['Yazarlık atölyesine katıldım.', 'ya-zar-LIK a-töl-ye-si-NE ka-tıl-DIM', 'شاركت في ورشة كتابة.', 'بەشداری وۆرکشۆپی نووسینم کرد.']),
    collocations: ['atölye düzenlemek', 'atölyeye katılmak'],
  },
  {
    ...w('katılımcı', 'ka-tı-lım-CI', 'مشارِك', 'بەشداربوو',
      ['Toplantıda kırk katılımcı vardı.', 'top-lan-tı-DA KIRK ka-tı-lım-CI var-DI', 'كان في الاجتماع أربعون مشاركاً.', 'لە کۆبوونەوەکەدا چل بەشداربوو هەبوو.']),
  },
  {
    ...w('sponsor', 'spon-SOR', 'راعٍ', 'سپۆنسەر',
      ['Etkinliğe iki sponsor bulduk.', 'et-kin-li-ĞE i-Kİ spon-SOR bul-DUK', 'وجدنا راعيَين للفعّالية.', 'دوو سپۆنسەرمان بۆ چالاکییەکە دۆزییەوە.']),
    collocations: ['sponsor olmak', 'sponsor bulmak'],
  },
  {
    ...w('gündem', 'gün-DEM', 'جدول أعمال؛ ما يشغل الرأي العام', 'ڕۆژەڤ',
      ['Bu konu gündemin ilk sırasında.', 'BU ko-NU gün-de-MİN İLK sı-ra-sın-DA', 'هذا الموضوع أول بنود جدول الأعمال.', 'ئەم بابەتە لە یەکەم ڕیزی ڕۆژەڤدایە.']),
    collocations: ['gündeme gelmek', 'gündeme almak', 'gündemi belirlemek'],
    note: b(
      'تحمل معنيين: جدول أعمال الاجتماع، وما يتصدّر اهتمام الناس — والسياق يفصل.',
      'دوو واتای هەیە: ڕۆژەڤی کۆبوونەوە، و ئەوەی سەرنجی خەڵک ڕادەکێشێت.',
    ),
  },
]);

/* ---------------- civil society ---------------- */

const CIVIL: VocabItem[] = pack('society', 'b2', 'noun', [
  {
    ...w('dernek', 'der-NEK', 'جمعية', 'کۆمەڵە',
      ['Öğrenci derneğine üye oldum.', 'öğ-ren-Cİ der-ne-ği-NE ü-YE ol-DUM', 'انضممت إلى جمعية الطلاب.', 'بووم بە ئەندامی کۆمەڵەی خوێندکاران.']),
    collocations: ['dernek kurmak', 'derneğe üye olmak'],
  },
  {
    ...w('vakıf', 'va-KIF', 'وقف، مؤسسة خيرية', 'وەقف',
      ['Vakıf burs veriyor.', 'va-KIF BURS ve-ri-YOR', 'يمنح الوقف منحاً دراسية.', 'وەقفەکە بورس دەدات.']),
    collocations: ['vakıf kurmak', 'vakıf üniversitesi'],
  },
  {
    ...w('bağış', 'ba-ĞIŞ', 'تبرّع', 'بەخشین',
      ['Kampanyaya bağış yaptık.', 'kam-pan-ya-YA ba-ĞIŞ yap-TIK', 'تبرّعنا للحملة.', 'بەخشینمان بۆ کەمپینەکە کرد.']),
    collocations: ['bağış yapmak', 'bağış toplamak', 'kan bağışı'],
  },
  {
    ...w('gönüllü', 'gö-nül-LÜ', 'متطوّع', 'خۆبەخش',
      ['Yüz gönüllü çalıştı.', 'YÜZ gö-nül-LÜ ça-lış-TI', 'عمل مئة متطوّع.', 'سەد خۆبەخش کاریان کرد.']),
    collocations: ['gönüllü olmak', 'gönüllü çalışmak'],
  },
  {
    ...w('kampanya', 'kam-pan-YA', 'حملة', 'کەمپین',
      ['Farkındalık kampanyası başlattılar.', 'far-kın-da-LIK kam-pan-ya-SI baş-lat-tı-LAR', 'أطلقوا حملة توعية.', 'کەمپینی هۆشیارکردنەوەیان دەستپێکرد.']),
    collocations: ['kampanya başlatmak', 'kampanya yürütmek'],
  },
  {
    ...w('farkındalık', 'far-kın-da-LIK', 'وعي، إدراك', 'هۆشیاری',
      ['Çevre farkındalığı artıyor.', 'çev-RE far-kın-da-lı-ĞI ar-tı-YOR', 'يزداد الوعي البيئي.', 'هۆشیاری ژینگەیی زیاد دەکات.']),
    collocations: ['farkındalık yaratmak', 'farkındalığı artırmak'],
  },
]);

/* ---------------- stages of a process ---------------- */

const STAGES: VocabItem[] = [
  ...pack('professional', 'b2', 'noun', [
    {
      ...w('aşama', 'a-şa-MA', 'مرحلة', 'قۆناغ',
        ['Proje son aşamasında.', 'pro-JE SON a-şa-ma-sın-DA', 'المشروع في مرحلته الأخيرة.', 'پڕۆژەکە لە دوایین قۆناغیدایە.']),
      collocations: ['aşama kaydetmek', 'ilk aşama', 'son aşama'],
      related: ['süreç', 'adım'],
    },
    {
      ...w('adım', 'a-DIM', 'خطوة', 'هەنگاو',
        ['İlk adımı biz attık.', 'İLK a-dı-MI BİZ at-TIK', 'نحن خطونا الخطوة الأولى.', 'یەکەم هەنگاومان نا.']),
      collocations: ['adım atmak', 'adım adım', 'bir sonraki adım'],
    },
  ]),
  ...pack('adjectives', 'b2', 'adjective', [
    {
      ...w('öncelikli', 'ön-ce-lik-Lİ', 'ذو أولوية', 'پێشینەدار',
        ['Bu öncelikli bir konu.', 'BU ön-ce-lik-Lİ bir ko-NU', 'هذا موضوع ذو أولوية.', 'ئەمە بابەتێکی پێشینەدارە.']),
    },
    {
      ...w('acil', 'a-CİL', 'عاجل، طارئ', 'بەپەلە',
        ['Acil bir durum var.', 'a-CİL bir du-RUM var', 'هناك حالة طارئة.', 'دۆخێکی بەپەلە هەیە.']),
      collocations: ['acil durum', 'acil servis', 'acilen'],
    },
    {
      ...w('tamamlanmış', 'ta-mam-lan-MIŞ', 'مُنجَز', 'تەواوکراو',
        ['Tamamlanmış işleri listeledik.', 'ta-mam-lan-MIŞ iş-le-Rİ lis-te-le-DİK', 'أدرجنا الأعمال المنجزة.', 'کارە تەواوکراوەکانمان لیست کرد.']),
      opposite: ['devam eden'],
    },
  ]),
];

/* ---------------- the verbs of getting things done ---------------- */

const DOING: VocabItem[] = pack('verbs', 'b2', 'verb', [
  {
    ...w('hedeflemek', 'he-def-le-MEK', 'يستهدف', 'ئامانج',
      ['Yüzde on büyüme hedefliyoruz.', 'yüz-DE ON bü-yü-ME he-def-li-yo-RUZ', 'نستهدف نموّاً بعشرة بالمئة.', 'ئامانجمان گەشەی دە لە سەدە.']),
    collocations: ['büyüme hedeflemek', 'hedeflenen tarih'],
  },
  {
    ...w('belirlemek', 'be-lir-le-MEK', 'يحدّد', 'دیاریکردن',
      ['Önce ölçütleri belirleyelim.', 'ön-CE öl-çüt-le-Rİ be-lir-le-ye-LİM', 'لنحدّد المعايير أولاً.', 'سەرەتا پێوەرەکان دیاری بکەین.']),
    collocations: ['tarih belirlemek', 'kriter belirlemek', 'fiyat belirlemek'],
  },
  {
    ...w('ölçmek', 'ölç-MEK', 'يقيس', 'پێوان',
      ['Başarıyı nasıl ölçeceğiz?', 'ba-şa-rı-YI na-SIL öl-çe-ce-ĞİZ', 'كيف سنقيس النجاح؟', 'چۆن سەرکەوتن دەپێوین؟']),
    collocations: ['performansı ölçmek', 'sıcaklığı ölçmek'],
  },
  {
    ...w('izlemek', 'iz-le-MEK', 'يتابع، يرصد؛ يشاهد', 'بەدواداچوون؛ سەیرکردن',
      ['Süreci yakından izliyoruz.', 'sü-re-Cİ ya-kın-DAN iz-li-yo-RUZ', 'نتابع العملية عن كثب.', 'بە وردی بەدوای پڕۆسەکەدا دەچین.']),
    collocations: ['süreci izlemek', 'film izlemek', 'yakından izlemek'],
    note: b(
      'تحمل معنيين شائعين: المتابعة/الرصد، ومشاهدة فيلم أو مباراة.',
      'دوو واتای باوی هەیە: بەدواداچوون، و سەیرکردنی فیلم.',
    ),
  },
  {
    ...w('raporlamak', 'ra-por-la-MAK', 'يقدّم تقريراً', 'ڕاپۆرتکردن',
      ['Sonuçları aylık raporluyoruz.', 'so-nuç-la-RI ay-LIK ra-por-lu-yo-RUZ', 'نقدّم تقريراً شهرياً بالنتائج.', 'ئەنجامەکان مانگانە ڕاپۆرت دەکەین.']),
  },
  {
    ...w('sunmak', 'sun-MAK', 'يقدّم، يعرض', 'پێشکەشکردن',
      ['Teklifi yarın sunacağım.', 'tek-li-Fİ ya-RIN su-na-ca-ĞIM', 'سأقدّم العرض غداً.', 'سبەینێ پێشنیارەکە پێشکەش دەکەم.']),
    collocations: ['teklif sunmak', 'rapor sunmak', 'özür sunmak'],
  },
  {
    ...w('devretmek', 'dev-ret-MEK', 'يسلّم، ينقل الصلاحية', 'گواستنەوە',
      ['Görevi yardımcısına devretti.', 'gö-re-Vİ yar-dım-cı-sı-NA dev-ret-Tİ', 'سلّم المهمّة إلى مساعده.', 'ئەرکەکەی بە یاریدەدەرەکەی سپارد.']),
    collocations: ['yetki devretmek', 'görevi devretmek'],
  },
  {
    ...w('kolaylaştırmak', 'ko-lay-laş-tır-MAK', 'يسهّل', 'ئاسانکردن',
      ['Yeni sistem işimizi kolaylaştırdı.', 'ye-Nİ sis-TEM i-şi-mi-Zİ ko-lay-laş-tır-DI', 'سهّل النظام الجديد عملنا.', 'سیستەمە نوێیەکە کارەکەمانی ئاسان کرد.']),
    opposite: ['zorlaştırmak'],
  },
  {
    ...w('hızlandırmak', 'hız-lan-dır-MAK', 'يسرّع', 'خێراکردن',
      ['Süreci hızlandırmamız gerekiyor.', 'sü-re-Cİ hız-lan-dır-ma-MIZ ge-re-ki-YOR', 'علينا تسريع العملية.', 'پێویستە پڕۆسەکە خێرا بکەین.']),
    opposite: ['yavaşlatmak'],
  },
  {
    ...w('yavaşlatmak', 'ya-vaş-lat-MAK', 'يبطّئ', 'هێواشکردن',
      ['Bürokrasi işleri yavaşlatıyor.', 'bü-rok-ra-Sİ iş-le-Rİ ya-vaş-la-tı-YOR', 'البيروقراطية تبطّئ الأمور.', 'بیرۆکراسی کارەکان هێواش دەکات.']),
    opposite: ['hızlandırmak'],
  },
  {
    ...w('çözmek', 'çöz-MEK', 'يحلّ', 'چارەسەرکردن',
      ['Sorunu birlikte çözdük.', 'so-ru-NU bir-lik-TE çöz-DÜK', 'حللنا المشكلة معاً.', 'کێشەکەمان پێکەوە چارەسەر کرد.']),
    collocations: ['sorun çözmek', 'düğümü çözmek'],
  },
  {
    ...w('gidermek', 'gi-der-MEK', 'يزيل، يعالج نقصاً', 'نەهێشتن',
      ['Eksiklikleri giderdik.', 'ek-sik-lik-le-Rİ gi-der-DİK', 'عالجنا أوجه النقص.', 'کەموکوڕییەکانمان نەهێشت.']),
    collocations: ['eksiği gidermek', 'ihtiyacı gidermek'],
  },
  {
    ...w('iyileştirmek', 'i-yi-leş-tir-MEK', 'يحسّن', 'باشترکردن',
      ['Hizmet kalitesini iyileştirdik.', 'hiz-MET ka-li-te-si-Nİ i-yi-leş-tir-DİK', 'حسّنا جودة الخدمة.', 'کوالیتی خزمەتگوزاریمان باشتر کرد.']),
    collocations: ['kaliteyi iyileştirmek', 'koşulları iyileştirmek'],
  },
  {
    ...w('geliştirmek', 'ge-liş-tir-MEK', 'يطوّر', 'پەرەپێدان',
      ['Yeni bir uygulama geliştiriyorlar.', 'ye-Nİ bir uy-gu-la-MA ge-liş-ti-ri-yor-LAR', 'يطوّرون تطبيقاً جديداً.', 'ئەپێکی نوێ پەرەپێدەدەن.']),
    collocations: ['yazılım geliştirmek', 'strateji geliştirmek', 'kendini geliştirmek'],
  },
]);

export const B2_VOCABULARY_PROCESS: VocabItem[] = [
  ...EVENTS,
  ...CIVIL,
  ...STAGES,
  ...DOING,
];
