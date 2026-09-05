import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A2 vocabulary: containers, cleaning, and the words for "when".
 *
 * Three small gaps that together cost a student a lot of everyday speech:
 *
 *   - **Containers.** `kutu`, `şişe`, `paket`, `kavanoz` — you cannot buy
 *     anything in Turkey without them, and none was in the curriculum.
 *   - **Cleaning.** `deterjan`, `süpürge`, `havlu`, `bez` — the nouns that go
 *     with the cleaning verbs added earlier.
 *   - **Time postpositions.** `boyunca`, `sırasında`, `ardından`, `başında`.
 *     A student without these can say *when* something happened but not *over
 *     what period* or *in the course of what*.
 *
 * The time set is the most valuable of the three and the hardest: Turkish
 * expresses these with a possessive plus a case, so `yıl` becomes `yılın
 * başında` — a construction, not a word. Each entry shows the whole shape.
 */

/* ---------------- containers ---------------- */

const CONTAINERS: VocabItem[] = pack('shopping', 'a2', 'noun', [
  {
    ...w('kutu', 'ku-TU', 'علبة، صندوق', 'سندوق',
      ['Bir kutu çikolata aldım.', 'bir ku-TU çi-ko-la-TA al-DIM', 'اشتريت علبة شوكولاتة.', 'سندوقێک شۆکولاتەم کڕی.']),
    collocations: ['çöp kutusu', 'kutu süt'],
  },
  {
    ...w('şişe', 'şi-ŞE', 'زجاجة، قنّينة', 'شووشە',
      ['İki şişe su lütfen.', 'i-Kİ şi-ŞE SU lüt-FEN', 'قنّينتا ماء من فضلك.', 'دوو شووشە ئاو تکایە.']),
  },
  {
    ...w('paket', 'pa-KET', 'رزمة، عبوة؛ طرد', 'پاکێت',
      ['Bir paket makarna yeter.', 'bir pa-KET ma-kar-NA ye-TER', 'عبوة معكرونة تكفي.', 'پاکێتێک ماکارۆنە بەسە.']),
    senses: [
      sense('طلب طعام للخارج', 'خواردنی بۆ دەرەوە',
        ['Paket servis var mı?', 'pa-KET ser-VİS VAR mı', 'هل يوجد خدمة توصيل؟', 'خزمەتگوزاری پاکێت هەیە؟']),
    ],
  },
  {
    ...w('kavanoz', 'ka-va-NOZ', 'مرطبان', 'جامخانە',
      ['Reçeli kavanoza koydum.', 're-çe-Lİ ka-va-no-ZA koy-DUM', 'وضعت المربّى في المرطبان.', 'مرەباکەم خستە ناو جامخانەکە.']),
  },
  {
    ...w('konserve', 'kon-ser-VE', 'معلّبات', 'کۆنسێرڤە',
      ['Konserve fasulye aldım.', 'kon-ser-VE fa-sul-YE al-DIM', 'اشتريت فاصولياء معلّبة.', 'فاسۆلیای کۆنسێرڤەم کڕی.']),
  },
  {
    ...w('liste', 'lis-TE', 'قائمة', 'لیست',
      ['Alışveriş listesi yaptım.', 'a-lış-ve-RİŞ lis-te-Sİ yap-TIM', 'أعددت قائمة تسوّق.', 'لیستی کڕینم دروست کرد.']),
    collocations: ['liste yapmak', 'listeye eklemek'],
  },
  {
    ...w('kart', 'KART', 'بطاقة', 'کارت',
      ['Kartla ödeyebilir miyim?', 'kart-LA ö-de-ye-bi-LİR mi-YİM', 'هل يمكنني الدفع بالبطاقة؟', 'دەتوانم بە کارت بدەم؟']),
    collocations: ['kredi kartı', 'kartla ödemek'],
  },
  {
    ...w('bozuk para', 'bo-ZUK pa-RA', 'فكّة، نقود معدنية', 'پارەی ورد',
      ['Bozuk paran var mı?', 'bo-ZUK pa-RAN VAR mı', 'هل معك فكّة؟', 'پارەی وردت هەیە؟']),
    related: ['bozmak'],
    note: b(
      'حرفياً «نقود مكسورة» — من «bozmak» بمعنى صرف العملة الكبيرة.',
      'لە ڕەگدا «پارەی شکاو» لە «bozmak»ەوە.',
    ),
  },
]);

/* ---------------- cleaning ---------------- */

const CLEANING: VocabItem[] = pack('house', 'a2', 'noun', [
  {
    ...w('deterjan', 'de-ter-JAN', 'منظّف، مسحوق غسيل', 'دیتێرجەنت',
      ['Çamaşır deterjanı bitti.', 'ça-ma-ŞIR de-ter-ja-NI bit-Tİ', 'نفد مسحوق الغسيل.', 'دیتێرجەنتی جلشۆر تەواو بوو.']),
  },
  {
    ...w('şampuan', 'şam-pu-AN', 'شامبو', 'شامپۆ',
      ['Şampuan aldın mı?', 'şam-pu-AN al-DIN mı', 'هل اشتريت شامبو؟', 'شامپۆت کڕی؟']),
  },
  {
    ...w('diş macunu', 'DİŞ ma-cu-NU', 'معجون أسنان', 'مەعجوونی ددان',
      ['Diş macunu bitmiş.', 'DİŞ ma-cu-NU bit-MİŞ', 'نفد معجون الأسنان.', 'مەعجوونی ددان تەواو بووە.']),
  },
  {
    ...w('havlu', 'hav-LU', 'منشفة', 'خاولی',
      ['Temiz havlu var mı?', 'te-MİZ hav-LU VAR mı', 'هل توجد منشفة نظيفة؟', 'خاولی پاک هەیە؟']),
  },
  {
    ...w('peçete', 'pe-çe-TE', 'منديل مائدة', 'دەستەسڕ',
      ['Peçete rica edebilir miyim?', 'pe-çe-TE ri-CA e-de-bi-LİR mi-YİM', 'هل أطلب منديلاً؟', 'دەتوانم داوای دەستەسڕ بکەم؟']),
    related: ['mendil'],
  },
  {
    ...w('mendil', 'men-DİL', 'منديل جيب', 'دەسمال',
      ['Cebimde mendil var.', 'ce-bim-DE men-DİL var', 'في جيبي منديل.', 'دەسمالم لە گیرفانمە.']),
    related: ['peçete'],
  },
  {
    ...w('süpürge', 'sü-pür-GE', 'مكنسة', 'گسک',
      ['Elektrikli süpürgeyle temizledim.', 'e-lek-trik-Lİ sü-pür-gey-LE te-miz-le-DİM', 'نظّفت بالمكنسة الكهربائية.', 'بە گسکی کارەبایی پاکم کردەوە.']),
    related: ['süpürmek'],
  },
  {
    ...w('fırça', 'fır-ÇA', 'فرشاة', 'فرچە',
      ['Diş fırçamı unuttum.', 'DİŞ fır-ça-MI u-nut-TUM', 'نسيت فرشاة أسناني.', 'فرچەی ددانەکەم لەبیرم چوو.']),
    collocations: ['diş fırçası', 'saç fırçası'],
  },
  {
    ...w('bez', 'BEZ', 'خرقة، قماشة', 'پەڕۆ',
      ['Nemli bir bezle sil.', 'nem-Lİ bir bez-LE sil', 'امسح بخرقة مبلّلة.', 'بە پەڕۆیەکی تەڕ بیسڕەوە.']),
  },
  {
    ...w('kova', 'ko-VA', 'دلو', 'سەتڵ',
      ['Kovayı doldur.', 'ko-va-YI dol-DUR', 'املأ الدلو.', 'سەتڵەکە پڕ بکە.']),
  },
  {
    ...w('ütü', 'ü-TÜ', 'مكواة', 'ئوتو',
      ['Ütü çok sıcak.', 'ü-TÜ ÇOK sı-CAK', 'المكواة ساخنة جداً.', 'ئوتوەکە زۆر گەرمە.']),
    related: ['ütülemek'],
  },
  {
    ...w('makine', 'ma-ki-NE', 'آلة، ماكينة', 'ئامێر',
      ['Çamaşır makinesi bozuldu.', 'ça-ma-ŞIR ma-ki-ne-Sİ bo-zul-DU', 'تعطّلت غسّالة الملابس.', 'ئامێری جلشۆر خراپ بوو.']),
    collocations: ['çamaşır makinesi', 'bulaşık makinesi'],
  },
]);

/* ---------------- when, and for how long ---------------- */

const TIME: VocabItem[] = [
  ...pack('time', 'a2', 'adverb', [
    {
      ...w('zamanında', 'za-ma-nın-DA', 'في الوقت المحدّد', 'لە کاتی خۆیدا',
        ['Zamanında geldi.', 'za-ma-nın-DA gel-Dİ', 'جاء في الوقت المحدّد.', 'لە کاتی خۆیدا هات.']),
      related: ['zaman'],
      opposite: ['geç'],
    },
    {
      ...w('sabahleyin', 'sa-bah-le-YİN', 'صباحاً', 'بەیانیان',
        ['Sabahleyin koşuya çıkarım.', 'sa-bah-le-YİN ko-şu-YA çı-ka-RIM', 'أخرج للجري صباحاً.', 'بەیانیان بۆ ڕاکردن دەردەچم.']),
      related: ['sabah'],
      note: b(
        'اللاحقة «-leyin» تصنع ظرف الوقت من الاسم: sabah→sabahleyin, akşam→akşamleyin, gece→geceleyin.',
        'پاشگری «-leyin» ئاوەڵکاری کات دروست دەکات.',
      ),
    },
    {
      ...w('öğleyin', 'öğ-le-YİN', 'ظهراً', 'نیوەڕۆ',
        ['Öğleyin buluşalım.', 'öğ-le-YİN bu-lu-şa-LIM', 'لنلتقِ ظهراً.', 'نیوەڕۆ یەکتر ببینین.']),
      related: ['öğle'],
    },
    {
      ...w('geceleyin', 'ge-ce-le-YİN', 'ليلاً', 'شەوان',
        ['Geceleyin çok sessiz oluyor.', 'ge-ce-le-YİN ÇOK ses-SİZ o-lu-YOR', 'يصير هادئاً جداً ليلاً.', 'شەوان زۆر بێدەنگ دەبێت.']),
      related: ['gece'],
    },
    {
      ...w('ardından', 'ar-dın-DAN', 'عقب ذلك، بعده', 'دوای ئەوە',
        ['Toplantının ardından çıktık.', 'top-lan-tı-NIN ar-dın-DAN çık-TIK', 'خرجنا عقب الاجتماع.', 'دوای کۆبوونەوەکە دەرچووین.']),
      related: ['sonra'],
      note: b(
        'أرسم من «sonra» وتلزمها الإضافة: «-in ardından».',
        'فەرمیترە لە «sonra».',
      ),
    },
  ]),
  ...pack('time', 'a2', 'preposition', [
    {
      ...w('boyunca', 'bo-yun-CA', 'طوال، على امتداد', 'بە درێژایی',
        ['Bütün yıl boyunca çalıştı.', 'bü-TÜN YIL bo-yun-CA ça-lış-TI', 'عمل طوال السنة.', 'بە درێژایی ساڵ کاری کرد.']),
      note: b(
        '⚠️ تأتي بعد الاسم بلا إضافة: «yıl boyunca». تصلح للزمان والمكان: «yol boyunca».',
        '⚠️ دوای ناو دێت بەبێ ئیزافە.',
      ),
    },
    {
      ...w('süresince', 'sü-re-sin-CE', 'خلال، طوال مدّة', 'لە ماوەی',
        ['Sınav süresince telefon yasak.', 'sı-NAV sü-re-sin-CE te-le-FON ya-SAK', 'الهاتف ممنوع طوال الامتحان.', 'لە ماوەی تاقیکردنەوەدا تەلەفۆن قەدەغەیە.']),
      related: ['süre', 'boyunca'],
    },
    {
      ...w('sırasında', 'sı-ra-sın-DA', 'أثناء', 'لە کاتی',
        ['Ders sırasında konuşma.', 'DERS sı-ra-sın-DA ko-nuş-MA', 'لا تتكلّم أثناء الدرس.', 'لە کاتی وانەدا قسە مەکە.']),
      related: ['sıra', 'esnasında'],
    },
    {
      ...w('esnasında', 'es-na-sın-DA', 'في أثناء (أرسم)', 'لە کاتی',
        ['Tartışma esnasında ayrıldı.', 'tar-tış-MA es-na-sın-DA ay-rıl-DI', 'غادر في أثناء النقاش.', 'لە کاتی گفتوگۆکەدا ڕۆیشت.']),
      related: ['sırasında'],
      note: b(
        'مرادفة لـ «sırasında» وأرسم منها؛ «esna» عربية الأصل.',
        'هاوواتای «sırasında»یە و فەرمیترە.',
      ),
    },
  ]),
  ...pack('time', 'a2', 'noun', [
    {
      ...w('başında', 'ba-şın-DA', 'في بداية', 'لە سەرەتای',
        ['Ayın başında maaş yatar.', 'a-YIN ba-şın-DA ma-AŞ ya-TAR', 'يُودَع الراتب في بداية الشهر.', 'لە سەرەتای مانگدا مووچە دادەنرێت.']),
      opposite: ['sonunda'],
      related: ['baş'],
      note: b(
        'ثلاثيّة تُتعلَّم معاً: «başında» بداية · «ortasında» منتصف · «sonunda» نهاية — كلها بإضافة قبلها.',
        'سێیانەیەک پێکەوە فێردەبن: başında · ortasında · sonunda.',
      ),
    },
    {
      ...w('ortasında', 'or-ta-sın-DA', 'في منتصف', 'لە ناوەڕاستی',
        ['Haftanın ortasında tatil var.', 'haf-ta-NIN or-ta-sın-DA ta-TİL var', 'هناك عطلة في منتصف الأسبوع.', 'لە ناوەڕاستی هەفتەدا پشوو هەیە.']),
      related: ['orta'],
    },
    {
      ...w('sonunda', 'so-nun-DA', 'في نهاية؛ أخيراً', 'لە کۆتایی؛ لە کۆتاییدا',
        ['Sonunda anlaştık.', 'so-nun-DA an-laş-TIK', 'أخيراً اتّفقنا.', 'لە کۆتاییدا ڕێککەوتین.']),
      opposite: ['başında'],
      related: ['son'],
      note: b(
        'وحدها تعني «أخيراً»، ومع إضافة تعني «في نهاية»: «ayın sonunda».',
        'بە تەنها «لە کۆتاییدا»، بە ئیزافەوە «لە کۆتایی».',
      ),
    },
  ]),
];

export const A2_VOCABULARY_HOUSEHOLD: VocabItem[] = [
  ...CONTAINERS,
  ...CLEANING,
  ...TIME,
];
