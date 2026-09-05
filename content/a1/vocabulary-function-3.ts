import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A1 vocabulary: the last of the closed class — including `ve`.
 *
 * The expanded content report checks the vocabulary against the gap audit's
 * reference list of Turkish function words, and the answer it gave was
 * uncomfortable: **`ve` was not taught.** Nor were `çok`, `az`, `biraz` or
 * `tabii`. Two rounds of function-word work had added the pronouns, the
 * question words, the postpositions and the question particle, and had walked
 * straight past the commonest conjunction in the language.
 *
 * That is the whole argument for having the report cross-check against a
 * fixed list rather than against intuition. Intuition adds what it notices.
 *
 * This file also finishes the inflected sets a learner meets as separate
 * words: the directional question words (`nereye`, `nereden`), the plural
 * demonstratives (`bunlar`, `şunlar`), and the two enclitics `de/da` and `ki`,
 * which are written separately and are not the suffixes that look like them.
 */

/* ---------------- the missing basics ---------------- */

const BASICS: VocabItem[] = pack('function', 'a1', 'conjunction', [
  {
    ...w('ve', 'VE', 'و (حرف العطف)', 'و',
      ['Ali ve Ayşe geldi.', 'a-Lİ VE ay-ŞE gel-Dİ', 'جاء علي وعائشة.', 'عەلی و عەیشە هاتن.']),
    note: b(
      '⚠️ لا تُستعمل كما في العربية. العربية تعطف كل جملة بـ«و»؛ التركية تستعملها بين اسمين أو عبارتين فقط، ونادراً بين جملتين. الجملتان تُفصلان بفاصلة أو بلاحقة رابطة. الإفراط في «ve» أوضح علامة على أن الكاتب عربي.',
      '⚠️ وەک عەرەبی بەکارنایەت: تەنها لە نێوان دوو ناودا، نەک لە نێوان دوو ڕستەدا.',
    ),
  },
  {
    ...w('hem', 'HEM', 'كلٌّ من (في التركيب المزدوج)', 'هەم',
      ['Hem ucuz hem güzel.', 'HEM u-CUZ HEM gü-ZEL', 'رخيص وجميل معاً.', 'هەم هەرزان هەم جوان.']),
    collocations: ['hem … hem de', 'hem de'],
    note: b(
      'لا تُستعمل وحدها: تأتي مكرّرة «hem … hem (de) …» = «كلاهما … و…».',
      'بە تەنها بەکارنایەت: «hem … hem de».',
    ),
  },
  {
    ...w('ki', 'Kİ', 'الذي، أنّ (رابط)', 'کە',
      ['Öyle yoruldum ki hemen uyudum.', 'öy-LE yo-rul-DUM Kİ HE-men u-yu-DUM', 'تعبت لدرجة أنني نمت فوراً.', 'وا ماندوو بووم کە دەستبەجێ خەوتم.']),
    collocations: ['o kadar ki', 'öyle ki', 'demek ki'],
    note: b(
      '⚠️ دخيلة فارسية وتعمل عكس التركية: الجملة التابعة تأتي **بعدها** لا قبلها. التركية الأصيلة تستعمل اللواحق (-dığı, -acağı) بدل «ki»، لكن «ki» شائعة جداً في الكلام.',
      '⚠️ لە فارسییەوە هاتووە و پێچەوانەی تورکی کار دەکات.',
    ),
  },
]);

/* ---------------- degree, the everyday four ---------------- */

const DEGREE: VocabItem[] = pack('function', 'a1', 'adverb', [
  {
    ...w('çok', 'ÇOK', 'كثيراً، جداً', 'زۆر',
      ['Çok teşekkür ederim.', 'ÇOK te-şek-KÜR e-de-RİM', 'شكراً جزيلاً.', 'زۆر سوپاس.']),
    opposite: ['az'],
    collocations: ['çok güzel', 'çok iyi', 'en çok', 'çok fazla'],
    note: b(
      '⚠️ تعمل ظرفاً وصفةً معاً: «çok güzel» جميل جداً (ظرف)، و«çok insan» ناس كثيرون (صفة). العربية تحتاج كلمتين مختلفتين.',
      '⚠️ هەم ئاوەڵکار هەم ئاوەڵناوە: «çok güzel» و «çok insan».',
    ),
  },
  {
    ...w('az', 'AZ', 'قليل، قليلاً', 'کەم',
      ['Az yemek yedim.', 'AZ ye-MEK ye-DİM', 'أكلت قليلاً.', 'کەم خواردنم خوارد.']),
    opposite: ['çok'],
    collocations: ['en az', 'az önce', 'biraz'],
    note: b(
      '«az önce» تعبير ثابت = قبل قليل، ولا علاقة له بالكمّية.',
      '«az önce» دەستەواژەی جێگیرە = کەمێک پێشتر.',
    ),
  },
  {
    ...w('biraz', 'bi-RAZ', 'قليلاً، بعض الشيء', 'کەمێک',
      ['Biraz bekler misin?', 'bi-RAZ bek-LER mi-SİN', 'هل تنتظر قليلاً؟', 'کەمێک چاوەڕێ دەکەیت؟']),
    related: ['az'],
    collocations: ['biraz sonra', 'birazdan', 'biraz daha'],
    note: b(
      'مركّبة من «bir» + «az» = «قليل واحد». و«birazdan» = بعد قليل.',
      'لێکدراوە لە «bir» + «az».',
    ),
  },
  {
    ...w('tabii', 'ta-Bİ-i', 'بالطبع، طبعاً', 'بێگومان',
      ['Tabii ki gelirim.', 'ta-Bİ-i Kİ ge-li-RİM', 'بالطبع سآتي.', 'بێگومان دێم.']),
    collocations: ['tabii ki', 'tabii canım'],
    note: b(
      'من «طبيعي» العربية. تُنطق بثلاث مقاطع مع مدّ على الياء، ويكتبها بعضهم «tabi».',
      'لە «طبیعی»ی عەرەبییەوە.',
    ),
  },
]);

/* ---------------- the two enclitics written separately ---------------- */

const ENCLITICS: VocabItem[] = pack('function', 'a2', 'particle', [
  {
    ...w('de', 'DE', 'أيضاً، كذلك', 'یش',
      ['Ben de geliyorum.', 'BEN de ge-li-yo-RUM', 'أنا أيضاً قادم.', 'منیش دێم.']),
    related: ['da'],
    collocations: ['ben de', 'sen de', 'biz de'],
    note: b(
      '⚠️ أشهر خطأ إملائي في التركية كلها. «de» المنفصلة تعني «أيضاً» وتُكتب بمسافة؛ و«-de» الملتصقة هي حالة الاستقرار وتعني «في». «Ben de» = أنا أيضاً · «bende» = عندي. المسافة تغيّر المعنى تماماً.',
      '⚠️ ناوبانگترین هەڵەی ڕێنووسە: «Ben de» = منیش، «bende» = لای من.',
    ),
  },
  {
    ...w('da', 'DA', 'أيضاً (بعد حركة خلفية)', 'یش',
      ['O da bilmiyor.', 'O da bil-mi-YOR', 'هو أيضاً لا يعرف.', 'ئەویش نازانێت.']),
    related: ['de'],
    note: b(
      'نفس الكلمة السابقة بانسجام الحركات: de بعد e/i/ö/ü، و da بعد a/ı/o/u.',
      'هەمان وشەیە بە هارمۆنی دەنگدارەوە.',
    ),
  },
  {
    ...w('ya', 'YA', 'يا (نداء)؛ أو؛ أداة تأكيد', 'یا',
      ['Ya sen ya ben gideceğiz.', 'YA SEN YA BEN gi-de-ce-ĞİZ', 'إمّا أنت وإمّا أنا سنذهب.', 'یان تۆ یان من دەچین.']),
    collocations: ['ya … ya', 'ya da', 'ya işte'],
    note: b(
      'التركيب المزدوج «ya … ya …» = «إمّا … وإمّا …». وحدها في آخر الجملة تعمل توكيداً عامّياً.',
      'پێکهاتەی «ya … ya …» = «یان … یان …».',
    ),
  },
]);

/* ---------------- directional questions and plural deixis ---------------- */

const DIRECTIONAL: VocabItem[] = pack('function', 'a1', 'pronoun', [
  {
    ...w('nereye', 'NE-re-ye', 'إلى أين', 'بۆ کوێ',
      ['Nereye gidiyorsun?', 'NE-re-ye gi-di-yor-SUN', 'إلى أين تذهب؟', 'بۆ کوێ دەچیت؟']),
    related: ['nerede', 'nereden'],
    note: b(
      'ثلاثية الاتّجاه: nerede (أين، استقرار) · nereye (إلى أين، اتّجاه) · nereden (من أين، ابتداء). نفس اللواحق التي تأخذها الأسماء.',
      'سێیانەی ئاراستە: nerede · nereye · nereden.',
    ),
  },
  {
    ...w('nereden', 'NE-re-den', 'من أين', 'لە کوێوە',
      ['Nereden geliyorsunuz?', 'NE-re-den ge-li-yor-su-NUZ', 'من أين تأتون؟', 'لە کوێوە دێن؟']),
    related: ['nereye'],
  },
  {
    ...w('neresi', 'ne-re-Sİ', 'أيّ مكان، ما هذا المكان', 'کوێیە',
      ['Burası neresi?', 'bu-ra-SI ne-re-Sİ', 'ما هذا المكان؟', 'ئێرە کوێیە؟']),
    related: ['nerede'],
  },
  {
    ...w('hangisi', 'HAN-gi-si', 'أيّهم، أيّها', 'کامیان',
      ['Hangisi senin?', 'HAN-gi-si se-NİN', 'أيّها لك؟', 'کامیان هی تۆیە؟']),
    related: ['hangi'],
    note: b(
      '«hangi» تسبق اسماً («hangi kitap»)، و«hangisi» تقف وحدها («hangisi?»).',
      '«hangi» پێش ناو دێت، «hangisi» بە تەنها دەوەستێت.',
    ),
  },
  {
    ...w('bunlar', 'bun-LAR', 'هؤلاء، هذه (جمع)', 'ئەمانە',
      ['Bunlar senin mi?', 'bun-LAR se-NİN mi', 'هل هذه لك؟', 'ئەمانە هی تۆن؟']),
    related: ['bu', 'şunlar'],
  },
  {
    ...w('şunlar', 'şun-LAR', 'تلك، هؤلاء (المشار إليهم)', 'ئەوانە',
      ['Şunlar da bizim.', 'şun-LAR DA bi-ZİM', 'وتلك أيضاً لنا.', 'ئەوانەش هی ئێمەن.']),
    related: ['şu', 'bunlar'],
  },
  {
    ...w('kendim', 'ken-DİM', 'بنفسي', 'خۆم',
      ['Kendim yaptım.', 'ken-DİM yap-TIM', 'فعلتها بنفسي.', 'خۆم کردم.']),
    related: ['kendi'],
  },
  {
    ...w('niye', 'Nİ-ye', 'لماذا (عامّية)', 'بۆچی',
      ['Niye gelmedin?', 'Nİ-ye gel-me-DİN', 'لماذا لم تأتِ؟', 'بۆچی نەهاتیت؟']),
    related: ['neden', 'niçin'],
    note: b(
      'الأشيع في الكلام اليومي بين الثلاثة؛ «neden» في الكتابة و«niçin» أرسمها.',
      'لە قسەی ڕۆژانەدا باوترینە لە نێوان هەرسێکیاندا.',
    ),
  },
]);

/* ---------------- quantity ---------------- */

const QUANTITY: VocabItem[] = pack('function', 'a2', 'adjective', [
  {
    ...w('çoğu', 'ço-ĞU', 'معظم، أغلب', 'زۆربەی',
      ['Çoğu insan böyle düşünüyor.', 'ço-ĞU in-SAN böy-LE dü-şü-nü-YOR', 'معظم الناس يفكّرون هكذا.', 'زۆربەی خەڵک وا بیر دەکەنەوە.']),
    related: ['çok'],
    collocations: ['çoğu zaman', 'çoğu kez'],
    note: b(
      '⚠️ الاسم بعدها مفرد: «çoğu insan» لا «çoğu insanlar».',
      '⚠️ ناوی دوای ئەمە تاکە.',
    ),
  },
  {
    ...w('birer', 'bi-RER', 'واحد لكلّ (توزيعية)', 'یەک بۆ هەریەک',
      ['Herkese birer çay verdi.', 'her-ke-SE bi-RER ÇAY ver-Dİ', 'أعطى لكل واحد شاياً.', 'بۆ هەریەکەیان چایەکی دا.']),
    senses: [
      sense('واحداً واحداً (مكرّرة)', 'یەک بە یەک',
        ['Birer birer içeri girdiler.', 'bi-RER bi-RER i-çe-Rİ gir-di-LER', 'دخلوا واحداً واحداً.', 'یەک بە یەک چوونە ژوورەوە.']),
    ],
    note: b(
      'لاحقة التوزيع «-er/-ar» تعمل مع كل عدد: ikişer (اثنان لكل), üçer (ثلاثة لكل).',
      'پاشگری دابەشکردن لەگەڵ هەموو ژمارەیەکدا کار دەکات.',
    ),
  },
]);

export const A1_VOCABULARY_FUNCTION_3: VocabItem[] = [
  ...BASICS,
  ...DEGREE,
  ...ENCLITICS,
  ...DIRECTIONAL,
  ...QUANTITY,
];
