import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * B1 vocabulary: running a household and dealing with an office.
 *
 * A2 teaches a student to name the rooms; B1 is where they have to phone a
 * plumber, argue about a deposit, and hand a form to a clerk. These are the
 * words that decide whether somebody can actually live in Turkish rather than
 * only describe living.
 *
 * Almost every entry carries collocations, because this vocabulary is used in
 * fixed pairings far more than in isolation — nobody says `fatura`, they say
 * `fatura ödemek`.
 */

/* ---------------- the flat ---------------- */

const HOME: VocabItem[] = pack('house', 'b1', 'noun', [
  {
    ...w('emlakçı', 'em-lak-ÇI', 'وكيل عقارات', 'کۆمپانیای خانووبەرە',
      ['Emlakçı bize üç daire gösterdi.', 'em-lak-ÇI bi-ZE ÜÇ da-i-RE gös-ter-Dİ', 'أرانا وكيل العقارات ثلاث شقق.', 'کۆمپانیای خانووبەرە سێ شوقەی پیشاندایین.']),
  },
  {
    ...w('eşya', 'eş-YA', 'أثاث، أمتعة', 'کەلوپەل',
      ['Eşyaları kamyona yükledik.', 'eş-ya-la-RI kam-yo-NA yük-le-DİK', 'حمّلنا الأثاث في الشاحنة.', 'کەلوپەلەکانمان بارکردە سەر بارهەڵگرەکە.']),
    collocations: ['ev eşyası', 'eşyalı daire', 'eşya taşımak'],
    note: b(
      'جمعٌ في العربية، لكنها في التركية تُعامل مفرداً: «bir eşya» ممكنة.',
      'لە عەرەبیدا کۆیە، بەڵام لە تورکیدا وەک تاک بەکاردێت.',
    ),
  },
  { ...w('koltuk', 'kol-TUK', 'كنبة، مقعد وثير', 'کورسی نەرم',
    ['Koltukta oturup kitap okudum.', 'kol-tuk-TA o-tu-RUP ki-TAP o-ku-DUM', 'جلست على الكنبة وقرأت كتاباً.', 'لەسەر کورسییەکە دانیشتم و کتێبم خوێندەوە.']) },
  { ...w('yastık', 'yas-TIK', 'وسادة', 'سەرین',
    ['Yastığım çok yumuşak.', 'yas-tı-ĞIM ÇOK yu-mu-ŞAK', 'وسادتي طريّة جداً.', 'سەرینەکەم زۆر نەرمە.']) },
  { ...w('battaniye', 'bat-ta-ni-YE', 'بطّانية', 'بەتانی',
    ['Bir battaniye daha getir.', 'BİR bat-ta-ni-YE da-HA ge-TİR', 'أحضر بطّانية أخرى.', 'بەتانییەکی تر بهێنە.']) },
  {
    ...w('çamaşır', 'ça-ma-ŞIR', 'غسيل الملابس', 'جلوبەرگی شۆردراو',
      ['Çamaşırları balkona astım.', 'ça-ma-şır-la-RI bal-ko-NA as-TIM', 'نشرت الغسيل في الشرفة.', 'جلوبەرگەکانم لە بەلکۆنەکە هەڵواسی.']),
    collocations: ['çamaşır yıkamak', 'çamaşır makinesi', 'çamaşır asmak'],
  },
  {
    ...w('bulaşık', 'bu-la-ŞIK', 'أواني متّسخة', 'قاپی پیس',
      ['Bulaşıkları ben yıkarım.', 'bu-la-şık-la-RI BEN yı-ka-RIM', 'أنا أغسل الأواني.', 'من قاپەکان دەشۆم.']),
    collocations: ['bulaşık yıkamak', 'bulaşık makinesi'],
  },
  { ...w('merdiven', 'mer-di-VEN', 'درج، سلّم', 'پلیکانە',
    ['Asansör bozuk, merdivenden çıktık.', 'a-san-SÖR bo-ZUK mer-di-ven-DEN çık-TIK', 'المصعد معطّل، صعدنا على الدرج.', 'ئاسانسۆرەکە خراپە، بە پلیکانەدا سەرکەوتین.']) },
  { ...w('asansör', 'a-san-SÖR', 'مصعد', 'ئاسانسۆر',
    ['Asansör beşinci katta.', 'a-san-SÖR be-şin-Cİ kat-TA', 'المصعد في الطابق الخامس.', 'ئاسانسۆرەکە لە نهۆمی پێنجەمە.']) },
  { ...w('balkon', 'bal-KON', 'شرفة', 'بەلکۆن',
    ['Balkondan deniz görünüyor.', 'bal-kon-DAN de-NİZ gö-rü-nü-YOR', 'يُرى البحر من الشرفة.', 'لە بەلکۆنەوە دەریا دیارە.']) },
  { ...w('garaj', 'ga-RAJ', 'مرآب', 'گەراج',
    ['Arabayı garaja koydum.', 'a-ra-ba-YI ga-ra-JA koy-DUM', 'وضعت السيارة في المرآب.', 'ئۆتۆمبێلەکەم خستە گەراجەکە.']) },
  {
    ...w('kapıcı', 'ka-pı-CI', 'بوّاب العمارة', 'دەرگاوان',
      ['Kapıcı her sabah çöpleri alır.', 'ka-pı-CI HER sa-BAH çöp-le-Rİ a-LIR', 'يأخذ البوّاب القمامة كل صباح.', 'دەرگاوانەکە هەموو بەیانییەک زبڵەکان دەبات.']),
    note: b(
      'وظيفة شائعة جداً في العمارات التركية: يجمع القمامة ويوصل الخبز والفواتير.',
      'پیشەیەکی زۆر باوە لە بینا تورکییەکاندا: زبڵ کۆدەکاتەوە و نان و پسووڵە دەگەیەنێت.',
    ),
  },
  {
    ...w('gürültü', 'gü-rül-TÜ', 'ضجيج', 'ژاوەژاو',
      ['Üst kattaki gürültüden uyuyamadım.', 'ÜST kat-ta-Kİ gü-rül-tü-DEN u-yu-ya-ma-DIM', 'لم أستطع النوم من ضجيج الطابق العلوي.', 'لە ژاوەژاوی نهۆمی سەرەوە نەمتوانی بخەوم.']),
    collocations: ['gürültü yapmak', 'gürültü kirliliği'],
  },
]);

/* ---------------- when something breaks ---------------- */

const REPAIR: VocabItem[] = [
  ...pack('house', 'b1', 'noun', [
    {
      ...w('tamir', 'ta-MİR', 'تصليح', 'چاککردنەوە',
        ['Buzdolabı tamire gitti.', 'buz-do-la-BI ta-mi-RE git-Tİ', 'ذهبت الثلاجة للتصليح.', 'سەلاجەکە بۆ چاککردنەوە برا.']),
      collocations: ['tamir etmek', 'tamire vermek', 'tamirci'],
    },
    {
      ...w('tesisat', 'te-si-SAT', 'تمديدات (ماء/كهرباء)', 'بۆری و وایەر',
        ['Su tesisatında bir sorun var.', 'SU te-si-sa-tın-DA bir so-RUN var', 'هناك مشكلة في تمديدات الماء.', 'کێشەیەک لە بۆریەکانی ئاودا هەیە.']),
      collocations: ['su tesisatı', 'elektrik tesisatı'],
    },
    { ...w('musluk', 'mus-LUK', 'صنبور', 'موسلوک',
      ['Musluk damlıyor.', 'mus-LUK dam-lı-YOR', 'الصنبور ينقّط.', 'موسلوکەکە دڵۆپە دەکات.']) },
    { ...w('priz', 'PRİZ', 'مقبس كهرباء', 'پریز',
      ['Priz çalışmıyor.', 'PRİZ ça-lış-mı-YOR', 'المقبس لا يعمل.', 'پریزەکە کار ناکات.']) },
    { ...w('ampul', 'am-PUL', 'مصباح كهربائي', 'گڵۆپ',
      ['Ampul patladı.', 'am-PUL pat-la-DI', 'انفجر المصباح.', 'گڵۆپەکە تەقییەوە.']) },
    {
      ...w('çöp', 'ÇÖP', 'قمامة', 'زبڵ',
        ['Çöpü aşağı atar mısın?', 'çö-PÜ a-şa-ĞI a-TAR mı-SIN', 'هل تنزل القمامة؟', 'زبڵەکە دەبەیتە خوارەوە؟']),
      collocations: ['çöp atmak', 'çöp kutusu', 'çöp poşeti'],
    },
  ]),
  ...pack('verbs', 'b1', 'verb', [
    {
      ...w('süpürmek', 'sü-pür-MEK', 'يكنس', 'گسکدان',
        ['Odayı süpürdüm.', 'o-da-YI sü-pür-DÜM', 'كنست الغرفة.', 'ژوورەکەم گسک دا.']),
      collocations: ['halıyı süpürmek', 'elektrikli süpürge'],
    },
    {
      ...w('asmak', 'as-MAK', 'يعلّق، ينشر', 'هەڵواسین',
        ['Duvara bir tablo astık.', 'du-va-RA bir tab-LO as-TIK', 'علّقنا لوحة على الجدار.', 'تابلۆیەکمان لە دیوارەکە هەڵواسی.']),
      collocations: ['çamaşır asmak', 'tablo asmak'],
      opposite: ['indirmek'],
    },
    {
      ...w('takmak', 'tak-MAK', 'يركّب، يلبس (إكسسوار)', 'دانان، لەبەرکردن',
        ['Perdeleri taktık.', 'per-de-le-Rİ tak-TIK', 'ركّبنا الستائر.', 'پەردەکانمان دانا.']),
      collocations: ['gözlük takmak', 'kemer takmak'],
      opposite: ['sökmek'],
      note: b(
        '⚠️ للنظارة والساعة والحزام يُقال «takmak» لا «giymek» — «giymek» للملابس فقط.',
        '⚠️ بۆ چاویلکە و کاتژمێر و پشتێن «takmak» دەوترێت نەک «giymek».',
      ),
    },
    {
      ...w('sökmek', 'sök-MEK', 'يفكّ، ينزع', 'داکەندن',
        ['Eski dolabı söktüler.', 'es-Kİ do-la-BI sök-tü-LER', 'فكّوا الخزانة القديمة.', 'دۆڵابە کۆنەکەیان داکەند.']),
      opposite: ['takmak'],
    },
  ]),
];

/* ---------------- paperwork ---------------- */

const OFFICE: VocabItem[] = pack('work', 'b1', 'noun', [
  {
    ...w('randevu', 'ran-de-VU', 'موعد', 'ژووان، کات',
      ['Doktordan randevu aldım.', 'dok-tor-DAN ran-de-VU al-DIM', 'أخذت موعداً من الطبيب.', 'کاتم لە پزیشک وەرگرت.']),
    collocations: ['randevu almak', 'randevu vermek', 'randevuyu iptal etmek'],
  },
  {
    ...w('form', 'FORM', 'استمارة', 'فۆڕم',
      ['Formu doldurup imzalayın.', 'for-MU dol-du-RUP im-za-la-YIN', 'املأ الاستمارة ووقّعها.', 'فۆڕمەکە پڕ بکەرەوە و واژووی بکە.']),
    collocations: ['form doldurmak', 'başvuru formu'],
  },
  {
    ...w('müdürlük', 'mü-dür-LÜK', 'مديرية', 'بەڕێوەبەرایەتی',
      ['Göç İdaresi Müdürlüğüne gittik.', 'GÖÇ i-da-re-Sİ mü-dür-lü-ğü-NE git-TİK', 'ذهبنا إلى مديرية إدارة الهجرة.', 'چووینە بەڕێوەبەرایەتی کۆچ.']),
  },
  {
    ...w('ikamet', 'i-ka-MET', 'إقامة', 'نیشتەجێبوون',
      ['İkamet adresini yazdı.', 'i-ka-MET ad-re-si-Nİ yaz-DI', 'كتب عنوان إقامته.', 'ناونیشانی نیشتەجێبوونی نووسی.']),
    collocations: ['ikamet izni', 'ikamet adresi'],
  },
  {
    ...w('oturma izni', 'o-tur-MA iz-Nİ', 'تصريح إقامة', 'مۆڵەتی نیشتەجێبوون',
      ['Oturma izni bir yıl geçerli.', 'o-tur-MA iz-Nİ BİR YIL ge-çer-Lİ', 'تصريح الإقامة صالح سنة.', 'مۆڵەتی نیشتەجێبوون ساڵێک کاری پێدەکرێت.']),
    related: ['ikamet'],
    note: b(
      'المصطلح الرسمي «ikamet izni»، لكن الناس يقولون «oturma izni» في الكلام.',
      'زاراوەی فەرمی «ikamet izni»یە، بەڵام خەڵک لە قسەدا «oturma izni» دەڵێن.',
    ),
  },
  {
    ...w('sigorta', 'si-gor-TA', 'تأمين', 'دڵنیایی',
      ['Sağlık sigortam var.', 'sağ-LIK si-gor-TAM var', 'لديّ تأمين صحّي.', 'دڵنیایی تەندروستیم هەیە.']),
    collocations: ['sağlık sigortası', 'sigorta yaptırmak'],
  },
]);

/* ---------------- money at the counter ---------------- */

const COUNTER: VocabItem[] = [
  ...pack('shopping', 'b1', 'noun', [
    {
      ...w('fatura', 'fa-tu-RA', 'فاتورة', 'پسووڵە',
        ['Elektrik faturası geldi.', 'e-lek-TRİK fa-tu-ra-SI gel-Dİ', 'وصلت فاتورة الكهرباء.', 'پسووڵەی کارەبا هات.']),
      collocations: ['fatura ödemek', 'faturayı kesmek'],
    },
    {
      ...w('makbuz', 'mak-BUZ', 'إيصال', 'وەسڵ',
        ['Makbuzu saklayın.', 'mak-bu-ZU sak-la-YIN', 'احتفظ بالإيصال.', 'وەسڵەکە بپارێزە.']),
      related: ['fiş'],
    },
    {
      ...w('taksit', 'tak-SİT', 'قسط', 'قیست',
        ['Altı taksitle aldım.', 'al-TI tak-sit-LE al-DIM', 'اشتريته على ستة أقساط.', 'بە شەش قیست کڕیم.']),
      collocations: ['taksitle almak', 'taksit ödemek'],
      opposite: ['peşin'],
    },
    {
      ...w('iade', 'i-a-DE', 'إرجاع، ردّ', 'گەڕاندنەوە',
        ['Ürünü iade ettim.', 'ü-rü-NÜ i-a-DE et-TİM', 'أرجعت المنتج.', 'بەرهەمەکەم گەڕاندەوە.']),
      collocations: ['iade etmek', 'para iadesi'],
    },
    {
      ...w('değişim', 'de-ği-ŞİM', 'استبدال؛ تغيّر', 'گۆڕینەوە؛ گۆڕان',
        ['Değişim için fiş gerekiyor.', 'de-ği-ŞİM i-ÇİN FİŞ ge-re-ki-YOR', 'يلزم الإيصال للاستبدال.', 'بۆ گۆڕینەوە وەسڵ پێویستە.']),
    },
    {
      ...w('garanti', 'ga-ran-Tİ', 'ضمان', 'گەرەنتی',
        ['İki yıl garantisi var.', 'i-Kİ YIL ga-ran-ti-Sİ var', 'له ضمان سنتين.', 'دوو ساڵ گەرەنتی هەیە.']),
      collocations: ['garanti belgesi', 'garanti kapsamında'],
    },
    {
      ...w('teslimat', 'tes-li-MAT', 'تسليم، توصيل', 'گەیاندن',
        ['Teslimat üç gün sürüyor.', 'tes-li-MAT ÜÇ GÜN sü-rü-YOR', 'التوصيل يستغرق ثلاثة أيام.', 'گەیاندن سێ ڕۆژ دەخایەنێت.']),
      collocations: ['ücretsiz teslimat', 'teslimat adresi'],
    },
  ]),
  ...pack('shopping', 'b1', 'adverb', [
    {
      ...w('peşin', 'pe-ŞİN', 'نقداً، دفعة واحدة', 'نەقد',
        ['Peşin ödersen indirim var.', 'pe-ŞİN ö-der-SEN in-di-RİM var', 'إن دفعت نقداً فهناك خصم.', 'ئەگەر نەقد بدەیت داشکاندن هەیە.']),
      opposite: ['taksit'],
    },
  ]),
];

/* ---------------- at the clinic ---------------- */

const CLINIC: VocabItem[] = pack('health', 'b1', 'noun', [
  {
    ...w('iğne', 'iğ-NE', 'إبرة، حقنة', 'دەرزی',
      ['Hemşire iğne yaptı.', 'hem-şi-RE iğ-NE yap-TI', 'أعطت الممرّضة حقنة.', 'پەرستارەکە دەرزی لێدا.']),
    collocations: ['iğne yapmak', 'iğne olmak'],
  },
  {
    ...w('ağrı kesici', 'ağ-RI ke-si-Cİ', 'مسكّن ألم', 'ئازاربڕ',
      ['Bir ağrı kesici aldım.', 'BİR ağ-RI ke-si-Cİ al-DIM', 'أخذت مسكّن ألم.', 'ئازاربڕێکم خوارد.']),
    related: ['ağrı'],
  },
]);

export const B1_VOCABULARY_PRACTICAL: VocabItem[] = [
  ...HOME,
  ...REPAIR,
  ...OFFICE,
  ...COUNTER,
  ...CLINIC,
];
