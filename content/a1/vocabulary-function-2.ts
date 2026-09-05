import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A1–A2 vocabulary: the rest of the closed class.
 *
 * Phase 7 taught the pronouns, question words and postpositions. The rebuilt
 * gap audit found what that pass still missed, and the top of the list was the
 * question particle:
 *
 *   mı  66 occurrences      mi  51      mu  19      mü  5
 *
 * **141 uses, no entry.** Every yes/no question in the curriculum contains one,
 * and a student could not look it up. It is arguably the single most important
 * word in spoken Turkish after `değil`, because without it a learner cannot ask
 * a yes/no question at all.
 *
 * The rest of this file is the remainder of the closed class the audit named:
 * `en` (the superlative, 32 uses), the comparison and degree adverbs, the
 * indefinite pronouns, the conditional `eğer`/`ise`, the concessive `oysa`, and
 * the four-way `bu/şu/o` deixis extended to manner — `böyle`, `şöyle`, `öyle`.
 *
 * ---------------------------------------------------------------------------
 * Why a bound particle is a vocabulary entry and a suffix is not
 * ---------------------------------------------------------------------------
 *
 * The brief warns against turning grammar morphology into vocabulary. The line
 * this file draws: `mi` is written as a **separate word** in Turkish
 * orthography (`geldi mi?`), takes its own stress, and a student must choose
 * between four forms. That makes it a lexical unit. The plural `-ler`, the
 * accusative `-i` and the present `-iyor` are written attached, are never
 * separable, and belong to the grammar lessons — they are not here.
 */

/* ---------------- the question particle ---------------- */

const QUESTION_PARTICLE: VocabItem[] = pack('function', 'a1', 'particle', [
  {
    ...w('mı', 'MI', 'أداة الاستفهام (نعم/لا)', 'ئامرازی پرسیار',
      ['Yanında salata var mı?', 'ya-nın-DA sa-la-TA VAR mı', 'هل معه سلطة؟', 'زەڵاتەی لەگەڵدایە؟']),
    related: ['mi', 'mu', 'mü'],
    collocations: ['var mı', 'anladın mı', 'alır mı'],
    note: b(
      '⚠️ أهمّ أداة في التركية المحكية بعد «değil». تُكتب **منفصلة** لكنها تتبع انسجام الحركات: mı بعد a/ı · mi بعد e/i · mu بعد o/u · mü بعد ö/ü. لا يوجد ترتيب كلمات خاصّ للسؤال كما في العربية — تضع الأداة وتنتهي.',
      '⚠️ گرنگترین ئامرازە لە تورکی قسەکردندا. جیا دەنووسرێت بەڵام هارمۆنی دەنگدار پەیڕەو دەکات.',
    ),
  },
  {
    ...w('mi', 'Mİ', 'أداة الاستفهام (بعد e/i)', 'ئامرازی پرسیار',
      ['Siyah çanta senin mi?', 'si-YAH çan-TA se-NİN mi', 'هل الحقيبة السوداء لك؟', 'جانتا ڕەشەکە هی تۆیە؟']),
    related: ['mı'],
    collocations: ['değil mi', 'geldi mi', 'öyle mi'],
    note: b(
      '«değil mi?» = «أليس كذلك؟» — أشيع صيغة استفهام تأكيدي في الحوار.',
      '«değil mi?» = «وانییە؟»',
    ),
  },
  {
    ...w('mu', 'MU', 'أداة الاستفهام (بعد o/u)', 'ئامرازی پرسیار',
      ['Kredi kartı geçiyor mu?', 'kre-Dİ kar-TI ge-çi-YOR mu', 'هل تُقبل بطاقة الائتمان؟', 'کارتی قەرز کاردەکات؟']),
    related: ['mı'],
  },
  {
    ...w('mü', 'MÜ', 'أداة الاستفهام (بعد ö/ü)', 'ئامرازی پرسیار',
      ['Bu mümkün mü?', 'BU müm-KÜN mü', 'هل هذا ممكن؟', 'ئەمە دەکرێت؟']),
    related: ['mı'],
  },
]);

/* ---------------- comparison ---------------- */

const COMPARISON: VocabItem[] = pack('function', 'a1', 'adverb', [
  {
    ...w('en', 'EN', 'الأكثر (أداة التفضيل المطلق)', 'هەرە',
      ['En iyi arkadaşım Ahmet.', 'EN i-Yİ ar-ka-da-ŞIM ah-MET', 'أحمد أفضل أصدقائي.', 'ئەحمەد باشترین هاوڕێمە.']),
    related: ['daha'],
    collocations: ['en iyi', 'en az', 'en fazla', 'en son'],
    note: b(
      '⚠️ التركية لا تغيّر الصفة أبداً: «iyi» تبقى «iyi». المقارنة بـ «daha iyi» والتفضيل بـ «en iyi». لا وزن أفعل ولا تصريف.',
      '⚠️ تورکی ئاوەڵناو ناگۆڕێت: «daha iyi» بەراورد و «en iyi» هەرە باش.',
    ),
  },
  {
    ...w('aynı', 'AY-nı', 'نفس، ذاته', 'هەمان',
      ['Aynı okulda okuduk.', 'AY-nı o-kul-DA o-ku-DUK', 'درسنا في نفس المدرسة.', 'لە هەمان قوتابخانەدا خوێندمان.']),
    pos: 'adjective',
    opposite: ['başka'],
    collocations: ['aynı şey', 'aynı zamanda', 'aynı anda'],
  },
  {
    ...w('başka', 'BAŞ-ka', 'آخر، غير', 'تر، جیا',
      ['Başka bir gün gelelim.', 'BAŞ-ka bir GÜN ge-le-LİM', 'لنأتِ في يوم آخر.', 'ڕۆژێکی تر بێین.']),
    pos: 'adjective',
    opposite: ['aynı'],
    related: ['diğer'],
    collocations: ['başka bir', 'başkası', 'bundan başka'],
    note: b(
      'تعمل أيضاً كأداة استثناء مع حالة الابتداء: «senden başka kimse yok» = لا أحد غيرك.',
      'وەک ئامرازی جیاکردنەوەش کار دەکات: «senden başka».',
    ),
  },
  {
    ...w('diğer', 'di-ĞER', 'الآخر (من مجموعة)', 'ئەوی تر',
      ['Diğer öğrenciler nerede?', 'di-ĞER öğ-ren-ci-LER ne-re-DE', 'أين الطلاب الآخرون؟', 'قوتابییەکانی تر لە کوێن؟']),
    pos: 'adjective',
    related: ['başka', 'öbür'],
    note: b(
      '«diğer» يشير إلى البقية من مجموعة معروفة؛ «başka» إلى شيء مختلف تماماً.',
      '«diğer» ئەوانی تری کۆمەڵێک، «başka» شتێکی جیاواز.',
    ),
  },
  {
    ...w('öbür', 'Ö-bür', 'الآخر (عامّية)', 'ئەوی تر',
      ['Öbür gün görüşürüz.', 'Ö-bür GÜN gö-rü-şü-RÜZ', 'نلتقي بعد غد.', 'دوو ڕۆژی تر یەکتر دەبینین.']),
    pos: 'adjective',
    related: ['diğer'],
    note: b(
      '«öbür gün» تعبير ثابت = بعد غد، لا «اليوم الآخر».',
      '«öbür gün» = دوو ڕۆژی تر.',
    ),
  },
]);

/* ---------------- degree ---------------- */

const DEGREE: VocabItem[] = pack('function', 'a2', 'adverb', [
  {
    ...w('yalnızca', 'yal-NIZ-ca', 'فقط، ليس إلا', 'تەنها',
      ['Yalnızca iki kişiyiz.', 'yal-NIZ-ca i-Kİ ki-şi-YİZ', 'نحن شخصان فقط.', 'تەنها دوو کەسین.']),
    related: ['sadece'],
    note: b(
      'مرادفة لـ «sadece» وأرسم منها قليلاً. من «yalnız» = وحيد.',
      'هاوواتای «sadece»یە و فەرمیترە.',
    ),
  },
  {
    ...w('oldukça', 'ol-duk-ÇA', 'إلى حدّ كبير، لا بأس به', 'تا ڕادەیەک زۆر',
      ['Sınav oldukça zordu.', 'sı-NAV ol-duk-ÇA zor-DU', 'كان الامتحان صعباً إلى حدّ كبير.', 'تاقیکردنەوەکە تا ڕادەیەک قورس بوو.']),
    related: ['epey', 'gayet'],
    note: b(
      'سلّم التقوية: biraz (قليلاً) < oldukça (لا بأس) < çok (كثيراً) < son derece (للغاية).',
      'پلەبەندی: biraz < oldukça < çok < son derece.',
    ),
  },
  {
    ...w('epey', 'e-PEY', 'كثيراً نوعاً ما (عامّية)', 'زۆر',
      ['Epey bekledik.', 'e-PEY bek-le-DİK', 'انتظرنا كثيراً.', 'زۆر چاوەڕێمان کرد.']),
    related: ['oldukça'],
  },
  {
    ...w('gayet', 'ga-YET', 'تماماً، بشكل كامل', 'تەواو',
      ['Gayet iyi anladım.', 'ga-YET i-Yİ an-la-DIM', 'فهمت تماماً.', 'تەواو تێگەیشتم.']),
    collocations: ['gayet iyi', 'gayet normal'],
    note: b(
      'تسبق الصفة وتقوّيها إيجابياً: «gayet iyi» = جيد تماماً.',
      'پێش ئاوەڵناو دێت و بەهێزی دەکات.',
    ),
  },
  {
    ...w('yine', 'Yİ-ne', 'مرّة أخرى، مجدّداً', 'دووبارە',
      ['Yine geç kaldın.', 'Yİ-ne GEÇ kal-DIN', 'تأخّرت مجدّداً.', 'دووبارە دواکەوتیت.']),
    related: ['tekrar'],
    collocations: ['yine de', 'yine bekleriz'],
    note: b(
      '«yine de» معناها مختلف: «ومع ذلك». التركيب يغيّر الكلمة تماماً.',
      '«yine de» واتای «لەگەڵ ئەوەشدا» دەدات.',
    ),
  },
  {
    ...w('tekrar', 'tek-RAR', 'مرّة أخرى؛ تكرار', 'دووبارە',
      ['Tekrar eder misiniz?', 'tek-RAR e-DER mi-si-NİZ', 'هل تعيد من فضلك؟', 'دووبارەی دەکەیتەوە؟']),
    related: ['yine'],
    collocations: ['tekrar etmek', 'tekrar tekrar'],
  },
  {
    ...w('ayrıca', 'AY-rı-ca', 'كذلك، بالإضافة إلى ذلك', 'هەروەها',
      ['Ayrıca teşekkür etmek isterim.', 'AY-rı-ca te-şek-KÜR et-MEK is-te-RİM', 'كما أودّ أن أشكر.', 'هەروەها دەمەوێت سوپاس بکەم.']),
    related: ['üstelik'],
  },
  {
    ...w('üstelik', 'ÜS-te-lik', 'وفوق ذلك (تصعيد)', 'سەرەڕای ئەوەش',
      ['Geç geldi, üstelik özür de dilemedi.', 'GEÇ gel-Dİ ÜS-te-lik ö-ZÜR DE di-le-me-Dİ', 'تأخّر، وفوق ذلك لم يعتذر.', 'دواکەوت، سەرەڕای ئەوەش داوای لێبوردنیش نەکرد.']),
    related: ['ayrıca'],
    note: b(
      '⚠️ ليست مرادفة لـ «ayrıca»: «üstelik» تضيف شيئاً يزيد الأمر سوءاً أو غرابة.',
      '⚠️ «üstelik» شتێک زیاد دەکات کە بارەکە خراپتر دەکات.',
    ),
  },
]);

/* ---------------- indefinite pronouns ---------------- */

const INDEFINITE: VocabItem[] = pack('function', 'a2', 'pronoun', [
  {
    ...w('biri', 'bi-Rİ', 'أحدهم، واحد', 'یەکێک',
      ['Biri seni arıyor.', 'bi-Rİ se-Nİ a-rı-YOR', 'أحدهم يبحث عنك.', 'یەکێک بەدواتدا دەگەڕێت.']),
    related: ['birisi', 'kimse'],
    collocations: ['birine', 'birini', 'her biri'],
  },
  {
    ...w('birisi', 'bi-ri-Sİ', 'أحدهم (مؤكّدة)', 'یەکێکیان',
      ['Birisi kapıyı çalıyor.', 'bi-ri-Sİ ka-pı-YI ça-lı-YOR', 'أحدهم يطرق الباب.', 'یەکێک لە دەرگا دەدات.']),
    related: ['biri'],
  },
  {
    ...w('kimse', 'kim-SE', 'أحد (مع النفي: لا أحد)', 'کەس',
      ['Kimse gelmedi.', 'kim-SE gel-me-Dİ', 'لم يأتِ أحد.', 'کەس نەهات.']),
    related: ['hiç kimse'],
    note: b(
      '⚠️ يلزمها فعل منفيّ لتعني «لا أحد». في السؤال تعني «أحد»: «kimse var mı?» = هل يوجد أحد؟',
      '⚠️ لەگەڵ نەرێنیدا واتای «کەس» دەدات.',
    ),
  },
  {
    ...w('hiçbiri', 'hiç-bi-Rİ', 'لا واحد منهم', 'هیچیان',
      ['Hiçbiri işe yaramadı.', 'hiç-bi-Rİ i-ŞE ya-ra-ma-DI', 'لم ينفع أيّ منها.', 'هیچیان بەکەڵک نەهات.']),
    related: ['hiçbir'],
  },
  {
    ...w('başkası', 'baş-ka-SI', 'شخص آخر، غيره', 'کەسێکی تر',
      ['Bunu başkası yapsın.', 'bu-NU baş-ka-SI yap-SIN', 'ليفعل هذا شخص آخر.', 'با کەسێکی تر ئەمە بکات.']),
    related: ['başka'],
  },
  {
    ...w('kendisi', 'ken-di-Sİ', 'هو نفسه؛ صيغة مهذّبة للغائب', 'خۆی',
      ['Kendisi şu an burada değil.', 'ken-di-Sİ ŞU AN bu-ra-DA de-ĞİL', 'هو نفسه ليس هنا الآن.', 'خۆی ئێستا لێرە نییە.']),
    related: ['kendi'],
    note: b(
      'مهذّبة: في العمل يُقال «kendisi» بدل «o» عند الحديث عن شخص بأدب.',
      'بەڕێزانەیە: لە کاردا لەبری «o» بەکاردێت.',
    ),
  },
]);

/* ---------------- condition and contrast ---------------- */

const LOGIC: VocabItem[] = pack('function', 'a2', 'conjunction', [
  {
    ...w('eğer', 'E-ğer', 'إذا، إن', 'ئەگەر',
      ['Eğer vaktin varsa görüşelim.', 'E-ğer vak-TİN var-SA gö-rü-şe-LİM', 'إن كان لديك وقت فلنلتقِ.', 'ئەگەر کاتت هەیە یەکتر ببینین.']),
    collocations: ['eğer … -sa'],
    note: b(
      '⚠️ اختيارية تماماً: الشرط في التركية تحمله اللاحقة -sa/-se على الفعل، و«eğer» مجرّد إشارة مبكرة. «Vaktin varsa» صحيحة وحدها.',
      '⚠️ ئارەزوومەندانەیە: مەرج بە پاشگری -sa/-se دەردەبڕدرێت.',
    ),
  },
  {
    ...w('ise', 'i-SE', 'أمّا… فـ؛ إذا كان', 'بەڵام؛ ئەگەر',
      ['Ben çay içerim, o ise kahve.', 'BEN ÇAY i-çe-RİM O i-SE kah-VE', 'أنا أشرب شاياً، أمّا هو فقهوة.', 'من چای دەخۆمەوە، بەڵام ئەو قاوە.']),
    note: b(
      '⚠️ استعمالان: المقابلة («أمّا… فـ»)، والشرط بعد اسم. تلتصق كثيراً كلاحقة: «o ise» = «oysa» في الكتابة.',
      '⚠️ دوو بەکارهێنان: بەرامبەری و مەرج.',
    ),
  },
  {
    ...w('oysa', 'OY-sa', 'بينما، مع أنّ', 'لە کاتێکدا',
      ['Kolay sanmıştım, oysa çok zormuş.', 'ko-LAY san-mış-TIM OY-sa ÇOK zor-MUŞ', 'ظننتها سهلة، مع أنها صعبة جداً.', 'وامزانی ئاسانە، بەڵام زۆر قورس بووە.']),
    related: ['hâlbuki'],
  },
  {
    ...w('hâlbuki', 'hâl-BU-ki', 'في حين أنّ، والحال أنّ', 'لە کاتێکدا',
      ['Geleceğini söyledi, hâlbuki gelmedi.', 'ge-le-ce-Ğİ-ni söy-le-Dİ hâl-BU-ki gel-me-Dİ', 'قال إنه سيأتي، والحال أنه لم يأتِ.', 'گوتی دێت، بەڵام نەهات.']),
    related: ['oysa'],
    note: b(
      'مرادفة لـ «oysa» وأرسم منها؛ مركّبة من «hâl» + «bu» + «ki» — حرفياً «والحال أنّ».',
      'هاوواتای «oysa»یە و فەرمیترە.',
    ),
  },
  {
    ...w('yoksa', 'YOK-sa', 'وإلا؛ أم', 'ئەگەرنا؛ یان',
      ['Acele et, yoksa geç kalacağız.', 'a-ce-LE et YOK-sa GEÇ ka-la-ca-ĞIZ', 'أسرع وإلا سنتأخّر.', 'پەلە بکە، ئەگەرنا دوادەکەوین.']),
    senses: [
      sense('أم (في سؤال بديل)', 'یان',
        ['Çay mı yoksa kahve mi?', 'ÇAY MI YOK-sa kah-VE Mİ', 'شاي أم قهوة؟', 'چای یان قاوە؟']),
    ],
  },
  {
    ...w('yahut', 'ya-HUT', 'أو (أدبية)', 'یان',
      ['Bugün yahut yarın.', 'bu-GÜN ya-HUT ya-RIN', 'اليوم أو غداً.', 'ئەمڕۆ یان سبەینێ.']),
    related: ['veya', 'ya da'],
    note: b(
      'أرسم صيغ «أو» الثلاث وأقلّها استعمالاً اليوم.',
      'فەرمیترین شێوەی «یان»ە و کەمتر بەکاردێت.',
    ),
  },
]);

/* ---------------- more postpositions ---------------- */

const POSTPOSITIONS: VocabItem[] = pack('function', 'a2', 'preposition', [
  {
    ...w('beri', 'be-Rİ', 'منذ', 'لەو کاتەوە',
      ['Sabahtan beri bekliyorum.', 'sa-bah-TAN be-Rİ bek-li-yo-RUM', 'أنتظر منذ الصباح.', 'لە بەیانییەوە چاوەڕێ دەکەم.']),
    note: b(
      '⚠️ تلزمها حالة الابتداء قبلها: «-den beri». والفعل يبقى في المضارع كالعربية: «منذ الصباح وأنا أنتظر».',
      '⚠️ حاڵەتی سەرچاوەی پێویستە: «-den beri».',
    ),
  },
  {
    ...w('göre', 'gö-RE', 'حسب، بحسب؛ مقارنةً بـ', 'بەپێی',
      ['Habere göre yarın yağmur var.', 'ha-be-RE gö-RE ya-RIN yağ-MUR var', 'حسب الخبر ستمطر غداً.', 'بەپێی هەواڵەکە سبەینێ باران دەبارێت.']),
    collocations: ['bana göre', 'buna göre', 'ona göre'],
    note: b(
      '⚠️ تلزمها حالة الاتّجاه: «-e göre». «bana göre» = برأيي.',
      '⚠️ حاڵەتی ئاراستەی پێویستە: «-e göre».',
    ),
  },
  {
    ...w('karşı', 'kar-ŞI', 'ضدّ؛ تجاه؛ مقابل', 'دژ؛ بەرامبەر',
      ['Bu karara karşıyım.', 'BU ka-ra-RA kar-şı-YIM', 'أنا ضدّ هذا القرار.', 'من دژی ئەم بڕیارەم.']),
    collocations: ['karşı çıkmak', 'karşı karşıya', 'karşısında'],
    note: b(
      '⚠️ تلزمها حالة الاتّجاه: «-e karşı». وتعمل اسماً أيضاً: «karşı ev» = البيت المقابل.',
      '⚠️ حاڵەتی ئاراستە وەردەگرێت: «-e karşı».',
    ),
  },
  {
    ...w('dolayı', 'do-la-YI', 'بسبب', 'بەهۆی',
      ['Yağmurdan dolayı maç ertelendi.', 'yağ-mur-DAN do-la-YI MAÇ er-te-len-Dİ', 'أُجّلت المباراة بسبب المطر.', 'بەهۆی بارانەوە یارییەکە دواخرا.']),
    related: ['yüzünden'],
    note: b(
      '⚠️ تلزمها حالة الابتداء: «-den dolayı». محايدة، بينما «yüzünden» سلبية.',
      '⚠️ حاڵەتی سەرچاوە وەردەگرێت و بێلایەنە.',
    ),
  },
  {
    ...w('hakkında', 'hak-kın-DA', 'عن، بخصوص', 'دەربارەی',
      ['Bu konu hakkında ne düşünüyorsun?', 'BU ko-NU hak-kın-DA NE dü-şü-nü-yor-SUN', 'ما رأيك بخصوص هذا الموضوع؟', 'دەربارەی ئەم بابەتە چی بیر دەکەیتەوە؟']),
    note: b(
      'تتبع الاسم مباشرة بلا حالة: «kitap hakkında». من «hak» + لاحقة.',
      'ڕاستەوخۆ دوای ناو دێت بەبێ حاڵەت.',
    ),
  },
  {
    ...w('üzere', 'ü-ze-RE', 'على وشك؛ بشرط أن؛ بغرض', 'لە سەرەخۆ؛ بەمەرجی',
      ['Toplantı bitmek üzere.', 'top-lan-TI bit-MEK ü-ze-RE', 'الاجتماع على وشك الانتهاء.', 'کۆبوونەوەکە خەریکە تەواو دەبێت.']),
    senses: [
      sense('بشرط أن، على أن', 'بەمەرجی ئەوەی',
        ['Yarın dönmek üzere gitti.', 'ya-RIN dön-MEK ü-ze-RE git-Tİ', 'ذهب على أن يعود غداً.', 'ڕۆیشت بەمەرجی ئەوەی سبەینێ بگەڕێتەوە.']),
    ],
    note: b(
      'رسمية؛ «bitmek üzere» أشيع تركيب لها في الكلام.',
      'فەرمییە؛ «bitmek üzere» باوترین پێکهاتەیە.',
    ),
  },
]);

/* ---------------- manner deixis, and two nouns the audit found ---------------- */

const MANNER: VocabItem[] = [
  ...pack('function', 'a1', 'adverb', [
    {
      ...w('böyle', 'BÖY-le', 'هكذا (قريب)', 'بەم شێوەیە',
        ['Böyle yapma lütfen.', 'BÖY-le yap-MA lüt-FEN', 'لا تفعل هكذا من فضلك.', 'بەم شێوەیە مەکە تکایە.']),
      related: ['şöyle', 'öyle'],
      note: b(
        'ثلاثية موازية لـ bu/şu/o: böyle (هكذا، قريب) · şöyle (هكذا، أشير) · öyle (كذلك، بعيد أو مذكور).',
        'سێیانەی هاوتای bu/şu/o: böyle · şöyle · öyle.',
      ),
    },
    {
      ...w('şöyle', 'ŞÖY-le', 'هكذا (أشير إليه)', 'ئاوا',
        ['Olay şöyle oldu.', 'o-LAY ŞÖY-le ol-DU', 'حدثت القصة هكذا.', 'ڕووداوەکە ئاوا ڕوویدا.']),
      related: ['böyle'],
      collocations: ['şöyle ki', 'şöyle bir'],
    },
    {
      ...w('öyle', 'ÖY-le', 'كذلك، هكذا (المذكور)', 'وا',
        ['Öyle demedim.', 'ÖY-le de-me-DİM', 'لم أقل ذلك.', 'وام نەگوت.']),
      related: ['böyle'],
      collocations: ['öyle mi', 'öyle ki', 'öyle bir'],
    },
    {
      ...w('dışarı', 'dı-şa-RI', 'الخارج، إلى الخارج', 'دەرەوە',
        ['Dışarı çıkalım mı?', 'dı-şa-RI çı-ka-LIM mı', 'أنخرج؟', 'بچینە دەرەوە؟']),
      opposite: ['içeri'],
      collocations: ['dışarı çıkmak', 'dışarıda', 'dışarıdan'],
    },
    {
      ...w('içeri', 'i-çe-Rİ', 'الداخل، إلى الداخل', 'ژوورەوە',
        ['İçeri buyurun.', 'i-çe-Rİ bu-yu-RUN', 'تفضّل بالدخول.', 'فەرموو بۆ ژوورەوە.']),
      opposite: ['dışarı'],
      collocations: ['içeri girmek', 'içeride'],
    },
  ]),
  ...pack('people', 'a1', 'noun', [
    {
      ...w('kişi', 'ki-Şİ', 'شخص', 'کەس',
        ['Toplantıda yirmi kişi vardı.', 'top-lan-tı-DA yir-Mİ ki-Şİ var-DI', 'كان في الاجتماع عشرون شخصاً.', 'لە کۆبوونەوەکەدا بیست کەس هەبوو.']),
      collocations: ['kaç kişi', 'kişi başı', 'kişisel'],
      note: b(
        '⚠️ وحدة العدّ للناس: «üç kişi» لا «üç insan». والاسم يبقى مفرداً بعد العدد.',
        '⚠️ یەکەی ژماردنی خەڵکە: «üç kişi».',
      ),
    },
  ]),
  ...pack('shopping', 'a1', 'noun', [
    {
      ...w('kilo', 'ki-LO', 'كيلوغرام', 'کیلۆ',
        ['Bir kilo pirinç aldım.', 'bir ki-LO pi-RİNÇ al-DIM', 'اشتريت كيلو أرزّ.', 'کیلۆیەک برنجم کڕی.']),
      collocations: ['yarım kilo', 'kilo almak', 'kilo vermek'],
      note: b(
        '«kilo almak» = يزداد وزناً، و«kilo vermek» = ينقص وزناً — تعبيران يوميان.',
        '«kilo almak» و «kilo vermek» بۆ کێش بەکاردێن.',
      ),
    },
  ]),
];

export const A1_VOCABULARY_FUNCTION_2: VocabItem[] = [
  ...QUESTION_PARTICLE,
  ...COMPARISON,
  ...DEGREE,
  ...INDEFINITE,
  ...LOGIC,
  ...POSTPOSITIONS,
  ...MANNER,
];
