import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, w } from '../shared/helpers';

/**
 * C1+ vocabulary: being, mind, and the formal register of the state.
 *
 * Two distinct strands, deliberately kept in one file because they behave the
 * same way for our students:
 *
 *   1. **The reform pair.** Turkish philosophy has, for most concepts, an
 *      Ottoman word and a 1930s Turkish coinage — `idrak` / `kavrayış`,
 *      `mahiyet` / `öz`. The Arabic-derived half is transparent to an Arabic
 *      speaker and the coinage is not, which reverses the usual difficulty:
 *      here the *native Turkish* word is the harder one.
 *
 *   2. **Administrative Ottoman.** `muvafakat`, `tebliğ`, `mükellefiyet` —
 *      words a student meets in a contract, a court notice or a tax letter and
 *      essentially nowhere else. An Arabic speaker reads them almost for free.
 *
 * Both strands are marked with their register, because knowing a word without
 * knowing that nobody says it out loud is a trap.
 */

const KU_ABSTRACT = 'Abstract philosophical register in Sorani — needs a native academic reader.';

/* ---------------- being ---------------- */

const BEING: VocabItem[] = pack('philosophy', 'c1plus', 'noun', [
  {
    ...w('varoluş', 'va-ro-LUŞ', 'وجود، الكينونة', 'بوون',
      ['Varoluş sorusu felsefenin merkezinde.', 'va-ro-LUŞ so-ru-SU fel-se-fe-NİN mer-ke-zin-DE', 'سؤال الوجود في قلب الفلسفة.', 'پرسیاری بوون لە ناوەندی فەلسەفەدایە.']),
    collocations: ['varoluş sorunu', 'varoluşçu felsefe'],
    note: b(
      'صيغة تركية حديثة من «var olmak». المقابل العثماني «vücut» صار يعني الجسد فقط.',
      'دروستکراوی تورکی نوێیە لە «var olmak». هاوتای عوسمانی «vücut» ئێستا تەنیا واتای جەستە دەدات.',
    ),
  },
  {
    ...w('varlık', 'var-LIK', 'وجود، موجود؛ ثروة', 'هەبوون؛ سامان',
      ['Her varlık kendi yasasına tabidir.', 'HER var-LIK ken-Dİ ya-sa-sı-NA ta-bi-DİR', 'كل موجود يخضع لقانونه الخاص.', 'هەموو هەبووێک ملکەچی یاسای خۆیەتی.']),
    opposite: ['yokluk'],
    note: b(
      'في الفلسفة «الموجود»، وفي الاقتصاد «الأصول والثروة» — والسياق وحده يفصل.',
      'لە فەلسەفەدا «هەبوو»، لە ئابووریدا «سامان» — تەنیا سیاق جیایان دەکاتەوە.',
    ),
  },
  {
    ...w('yokluk', 'yok-LUK', 'عدم', 'نەبوون',
      ['Yokluk kavramı zor tanımlanır.', 'yok-LUK kav-ra-MI ZOR ta-nım-la-NIR', 'يصعب تعريف مفهوم العدم.', 'چەمکی نەبوون بە ئاسانی پێناسە ناکرێت.']),
    opposite: ['varlık'],
  },
  {
    ...w('öz', 'ÖZ', 'جوهر، ماهية', 'ناوەڕۆک، جەوهەر',
      ['Meselenin özü bu.', 'me-se-le-NİN ö-ZÜ BU', 'هذا جوهر المسألة.', 'ئەمە ناوەڕۆکی بابەتەکەیە.']),
    related: ['mahiyet', 'töz'],
    collocations: ['özünde', 'meselenin özü'],
  },
  {
    ...w('mahiyet', 'ma-hi-YET', 'ماهيّة', 'چۆنیەتی',
      ['Olayın mahiyeti hâlâ belirsiz.', 'o-la-YIN ma-hi-ye-Tİ ha-LÂ be-lir-SİZ', 'ما زالت ماهية الحادثة غامضة.', 'چۆنیەتی ڕووداوەکە هێشتا ناڕوونە.']),
    related: ['öz'],
    note: b(
      'عثمانية شفافة للعربي؛ نظيرها التركي الحديث «öz» أشيع في الكلام اليومي.',
      'عوسمانییە و بۆ عەرەبیزان ڕوونە؛ هاوتای تورکی نوێی «öz» لە قسەی ڕۆژانەدا باوترە.',
    ),
  },
  {
    ...w('töz', 'TÖZ', 'الجوهر (فلسفياً)', 'جەوهەر',
      ['Descartes iki tözden söz eder.', 'de-KART i-Kİ töz-DEN SÖZ e-DER', 'يتحدّث ديكارت عن جوهرين.', 'دیکارت باسی دوو جەوهەر دەکات.']),
    review: needsReview(KU_ABSTRACT),
    note: b(
      'مصطلح فلسفي بحت (substance)؛ لا يُستعمل خارج الفلسفة.',
      'زاراوەیەکی فەلسەفی ڕەقە؛ لە دەرەوەی فەلسەفە بەکارنایەت.',
    ),
  },
]);

/* ---------------- mind and perception ---------------- */

const MIND: VocabItem[] = pack('philosophy', 'c1plus', 'noun', [
  {
    ...w('idrak', 'id-RAK', 'إدراك', 'تێگەیشتن',
      ['Meselenin ciddiyetini idrak etti.', 'me-se-le-NİN cid-di-ye-ti-Nİ id-RAK et-Tİ', 'أدرك خطورة المسألة.', 'گرنگی بابەتەکەی تێگەیشت.']),
    collocations: ['idrak etmek', 'idrak düzeyi'],
    related: ['kavrayış'],
  },
  {
    ...w('kavrayış', 'kav-ra-YIŞ', 'إدراك، فهم', 'تێگەیشتن',
      ['Konuya kavrayışı derindi.', 'ko-nu-YA kav-ra-yı-ŞI de-rin-Dİ', 'كان إدراكه للموضوع عميقاً.', 'تێگەیشتنی لە بابەتەکە قووڵ بوو.']),
    related: ['idrak'],
    note: b(
      'ثنائي الإصلاح اللغوي: «idrak» عربية و«kavrayış» تركية حديثة، والمعنى واحد.',
      'جووتی چاکسازی زمان: «idrak» عەرەبی و «kavrayış» تورکی نوێ، واتاکە یەکە.',
    ),
  },
  {
    ...w('tasavvur', 'ta-sav-VUR', 'تصوّر', 'وێناکردن',
      ['Böyle bir sonucu tasavvur edemezdim.', 'böy-LE bir so-nu-CU ta-sav-VUR e-de-mez-DİM', 'ما كنت أتصوّر نتيجة كهذه.', 'ئەنجامێکی وام نەدەوێنا.']),
    collocations: ['tasavvur etmek'],
    related: ['tahayyül'],
  },
  {
    ...w('tahayyül', 'ta-hay-YÜL', 'تخيّل', 'خەیاڵکردن',
      ['Yazar başka bir dünya tahayyül eder.', 'ya-ZAR baş-KA bir dün-YA ta-hay-YÜL e-DER', 'يتخيّل الكاتب عالماً آخر.', 'نووسەرەکە جیهانێکی تر دەخەیاڵێت.']),
    collocations: ['tahayyül etmek'],
    related: ['tasavvur'],
  },
  {
    ...w('teemmül', 'te-em-MÜL', 'تأمّل، إمعان نظر', 'ورد بوونەوە',
      ['Karar teemmül gerektirir.', 'ka-RAR te-em-MÜL ge-rek-ti-RİR', 'يستلزم القرار تأمّلاً.', 'بڕیارەکە ورد بوونەوەی دەوێت.']),
    review: needsReview(KU_ABSTRACT),
    note: b(
      'نادرة جداً اليوم؛ تُقرأ في النصوص القديمة أكثر مما تُسمع.',
      'زۆر دەگمەنە ئەمڕۆ؛ لە دەقە کۆنەکاندا زیاتر دەخوێنرێتەوە نەک ببیسترێت.',
    ),
  },
  {
    ...w('basiret', 'ba-si-RET', 'بصيرة', 'دووربینی',
      ['Basiretli bir yönetici.', 'ba-si-ret-Lİ bir yö-ne-ti-Cİ', 'مدير ذو بصيرة.', 'بەڕێوەبەرێکی دووربین.']),
    collocations: ['basiretli davranmak', 'basiretsizlik'],
  },
  {
    ...w('feraset', 'fe-ra-SET', 'فراسة', 'زیرەکی',
      ['Ferasetiyle tanınırdı.', 'fe-ra-se-tiy-LE ta-nı-nır-DI', 'كان معروفاً بفراسته.', 'بە زیرەکییەکەی ناسرابوو.']),
    review: needsReview(KU_ABSTRACT),
  },
  {
    ...w('vicdan', 'vic-DAN', 'ضمير', 'ویژدان',
      ['Vicdanı rahat değil.', 'vic-da-NI ra-HAT de-ĞİL', 'ضميره ليس مرتاحاً.', 'ویژدانی ئاسوودە نییە.']),
    collocations: ['vicdan azabı', 'vicdanen', 'vicdan sahibi'],
  },
]);

/* ---------------- logic ---------------- */

const LOGIC: VocabItem[] = [
  ...pack('academic', 'c1plus', 'noun', [
    {
      ...w('çelişki', 'çe-liş-Kİ', 'تناقض', 'دژایەتی',
        ['İfadesinde bir çelişki var.', 'i-fa-de-sin-DE bir çe-liş-Kİ var', 'في إفادته تناقض.', 'لە قسەکەیدا دژایەتییەک هەیە.']),
      collocations: ['çelişkiye düşmek', 'iç çelişki'],
    },
    {
      ...w('tutarlılık', 'tu-tar-lı-LIK', 'اتّساق', 'یەکگرتوویی',
        ['Metnin tutarlılığı zayıf.', 'met-NİN tu-tar-lı-lı-ĞI za-YIF', 'اتّساق النص ضعيف.', 'یەکگرتوویی دەقەکە لاوازە.']),
      opposite: ['çelişki'],
    },
    {
      ...w('temellendirme', 'te-mel-len-dir-ME', 'تأسيس، إقامة الأساس', 'بنەماسازی',
        ['Tezin temellendirmesi eksik.', 'te-ZİN te-mel-len-dir-me-Sİ ek-SİK', 'تأسيس الأطروحة ناقص.', 'بنەماسازی تێزەکە کەموکوڕە.']),
      review: needsReview(KU_ABSTRACT),
    },
    {
      ...w('zorunluluk', 'zo-run-lu-LUK', 'ضرورة', 'پێویستی',
        ['Mantıksal bir zorunluluk değil.', 'man-tık-SAL bir zo-run-lu-LUK de-ĞİL', 'ليست ضرورة منطقية.', 'پێویستییەکی لۆژیکی نییە.']),
      opposite: ['olumsallık'],
    },
    {
      ...w('olumsallık', 'o-lum-sal-LIK', 'عرضية، إمكانية (لا ضرورة)', 'ڕێکەوتیی',
        ['Tarih olumsallıklarla doludur.', 'ta-RİH o-lum-sal-lık-lar-LA do-lu-DUR', 'التاريخ مليء بالعرضيات.', 'مێژوو پڕە لە ڕێکەوت.']),
      opposite: ['zorunluluk'],
      review: needsReview(KU_ABSTRACT),
    },
  ]),
  ...pack('academic', 'c1plus', 'adjective', [
    {
      ...w('tümel', 'tü-MEL', 'كلّي (منطقياً)', 'گشتی',
        ['Tümel bir yargı ileri sürdü.', 'tü-MEL bir yar-GI i-le-Rİ sür-DÜ', 'قدّم حكماً كلّياً.', 'حوکمێکی گشتی خستەڕوو.']),
      opposite: ['tikel'],
      review: needsReview(KU_ABSTRACT),
    },
    {
      ...w('tikel', 'ti-KEL', 'جزئي (منطقياً)', 'بەشەکی',
        ['Tikel örnekler kuralı kanıtlamaz.', 'ti-KEL ör-nek-LER ku-ra-LI ka-nıt-la-MAZ', 'الأمثلة الجزئية لا تثبت القاعدة.', 'نموونەی بەشەکی یاساکە ناسەلمێنێت.']),
      opposite: ['tümel'],
      review: needsReview(KU_ABSTRACT),
    },
    {
      ...w('varsayımsal', 'var-sa-yım-SAL', 'افتراضي', 'گریمانەیی',
        ['Varsayımsal bir örnek verelim.', 'var-sa-yım-SAL bir ör-NEK ve-re-LİM', 'لنعطِ مثالاً افتراضياً.', 'با نموونەیەکی گریمانەیی بهێنینەوە.']),
    },
    {
      ...w('külli', 'kül-Lİ', 'كلّي', 'گشتی',
        ['Külli bir hükme varamayız.', 'kül-Lİ bir hük-ME va-ra-ma-YIZ', 'لا يمكننا بلوغ حكم كلّي.', 'ناتوانین بگەینە حوکمێکی گشتی.']),
      note: b(
        'العثمانية «külli» والتركية الحديثة «tümel» متقابلتان — الأولى في النصوص الدينية والقديمة.',
        'عوسمانی «külli» و تورکی نوێی «tümel» بەرامبەری یەکن — یەکەمیان لە دەقە ئایینی و کۆنەکاندا.',
      ),
      related: ['tümel'],
    },
  ]),
];

/* ---------------- administrative Ottoman ---------------- */

const ADMIN: VocabItem[] = pack('law', 'c1plus', 'noun', [
  {
    ...w('muhteva', 'muh-te-VA', 'محتوى', 'ناوەڕۆک',
      ['Sözleşmenin muhtevası tartışıldı.', 'söz-leş-me-NİN muh-te-va-SI tar-tı-şıl-DI', 'نوقش محتوى العقد.', 'ناوەڕۆکی گرێبەستەکە تاوتوێ کرا.']),
    related: ['içerik'],
    note: b(
      'اليوم يقول الناس «içerik»؛ «muhteva» بقيت في اللغة القانونية والرسمية.',
      'ئەمڕۆ خەڵک «içerik» دەڵێن؛ «muhteva» لە زمانی یاسایی و فەرمیدا ماوەتەوە.',
    ),
  },
  {
    ...w('münasebet', 'mü-na-se-BET', 'مناسبة؛ علاقة', 'پەیوەندی؛ بۆنە',
      ['İki kurum arasındaki münasebet gerginleşti.', 'i-Kİ ku-RUM a-ra-sın-da-Kİ mü-na-se-BET ger-gin-leş-Tİ', 'توتّرت العلاقة بين المؤسستين.', 'پەیوەندی نێوان دوو دامەزراوەکە توند بوو.']),
    collocations: ['bu münasebetle', 'münasebetsiz'],
    related: ['ilişki'],
  },
  {
    ...w('muvafakat', 'mu-va-fa-KAT', 'موافقة', 'ڕەزامەندی',
      ['Yazılı muvafakat gerekiyor.', 'ya-zı-LI mu-va-fa-KAT ge-re-ki-YOR', 'يلزم موافقة خطّية.', 'ڕەزامەندی نووسراو پێویستە.']),
    collocations: ['muvafakat vermek', 'muvafakatname'],
    related: ['onay'],
  },
  {
    ...w('tasarruf', 'ta-sar-RUF', 'تصرّف؛ ادّخار', 'خەرجکردن؛ پاشەکەوت',
      ['Enerji tasarrufu sağlandı.', 'e-ner-Jİ ta-sar-ru-FU sağ-lan-DI', 'تحقّق توفير في الطاقة.', 'پاشەکەوتی وزە دەستەبەر کرا.']),
    collocations: ['tasarruf etmek', 'tasarruf tedbiri'],
    note: b(
      '⚠️ الفرق مهم: العربية «تصرّف» = سلوك، والتركية الشائعة = توفير وادّخار. المعنى القانوني (التصرّف في مال) باقٍ لكنه أضيق.',
      '⚠️ جیاوازییەکە گرنگە: عەرەبی «تصرف» = ڕەفتار، بەڵام تورکی باو = پاشەکەوت.',
    ),
  },
  {
    ...w('tebliğ', 'teb-LİĞ', 'تبليغ، إخطار رسمي', 'ڕاگەیاندنی فەرمی',
      ['Karar taraflara tebliğ edildi.', 'ka-RAR ta-raf-la-RA teb-LİĞ e-dil-Dİ', 'بُلِّغ القرار للأطراف.', 'بڕیارەکە بە لایەنەکان ڕاگەیەنرا.']),
    collocations: ['tebliğ etmek', 'tebligat'],
  },
  {
    ...w('mükellefiyet', 'mü-kel-le-fi-YET', 'التزام، تكليف', 'ئەرک',
      ['Vergi mükellefiyeti doğdu.', 'ver-Gİ mü-kel-le-fi-ye-Tİ doğ-DU', 'نشأ التزام ضريبي.', 'ئەرکی باج دروست بوو.']),
    related: ['yükümlülük'],
    opposite: ['muafiyet'],
  },
  {
    ...w('muafiyet', 'mu-a-fi-YET', 'إعفاء', 'بەخشین لە ئەرک',
      ['Vergi muafiyeti tanındı.', 'ver-Gİ mu-a-fi-ye-Tİ ta-nın-DI', 'مُنح إعفاء ضريبي.', 'لێبووردنی باجی پێدرا.']),
    opposite: ['mükellefiyet'],
  },
  {
    ...w('ihmal', 'ih-MAL', 'إهمال', 'کەمتەرخەمی',
      ['Kaza ihmalden kaynaklandı.', 'ka-ZA ih-mal-DEN kay-nak-lan-DI', 'نتج الحادث عن إهمال.', 'ڕووداوەکە لە کەمتەرخەمییەوە سەرچاوەی گرت.']),
    collocations: ['ihmal etmek', 'ağır ihmal'],
  },
  {
    ...w('emsal', 'em-SAL', 'سابقة، نظير', 'نموونەی پێشوو',
      ['Bu karar emsal oluşturur.', 'BU ka-RAR em-SAL o-luş-tu-RUR', 'يشكّل هذا القرار سابقة.', 'ئەم بڕیارە دەبێتە نموونەی پێشوو.']),
    collocations: ['emsal teşkil etmek', 'emsalsiz'],
    note: b(
      'جمع «مثل» في العربية، لكنها في التركية تُعامل مفرداً بمعنى السابقة القضائية.',
      'لە عەرەبیدا کۆی «مثل»ە، بەڵام لە تورکیدا وەک تاک بەکاردێت بە واتای نموونەی دادوەری.',
    ),
  },
]);

export const C1PLUS_VOCABULARY_THOUGHT: VocabItem[] = [
  ...BEING,
  ...MIND,
  ...LOGIC,
  ...ADMIN,
];
