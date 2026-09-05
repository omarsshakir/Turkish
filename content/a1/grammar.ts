import type { Lesson } from '@/types/content';
import { b, fill, listening, match, mcq, order, p, speak, translate } from '../shared/helpers';

/**
 * A1 grammar - the eight structures a beginner must own before anything else.
 *
 * Vowel harmony comes FIRST, deliberately. Every suffix in the language obeys
 * it, so a student who understands harmony on day one can predict endings
 * instead of memorising them one by one.
 */
export const A1_GRAMMAR: Lesson[] = [
  /* ---------------------------------------------------------------- */
  {
    id: 'a1-vowel-harmony',
    level: 'a1',
    kind: 'grammar',
    order: 1,
    minutes: 25,
    title: 'Ünlü Uyumu',
    titleI18n: b('تناغم الحركات (الانسجام الصوتي)', 'هارمۆنیای بزوێنەکان'),
    objective: b(
      'أن تتنبّأ بحركة أي لاحقة تركية دون حفظها، اعتماداً على آخر حركة في الكلمة.',
      'ئەوەی بتوانیت بزوێنی هەر پاشگرێکی تورکی پێشبینی بکەیت بەبێ لەبەرکردنی، بەپێی دوا بزوێنی وشەکە.',
    ),
    tags: ['harmony', 'suffix', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Neden en önemli kural?',
        body: b(
          'التركية لغة إلصاقية: تُبنى المعاني بإضافة لواحق متتالية إلى جذر الكلمة. لكن اللاحقة ليست ثابتة الشكل، بل تتغيّر حركتها لتنسجم مع آخر حركة في الكلمة. هذا هو "تناغم الحركات". من يفهم هذه القاعدة يتوقّف عن حفظ اللواحق ويبدأ في اشتقاقها بنفسه — وهي مفتاح التركية كلها.',
          'تورکی زمانێکی لکێنەرە: واتاکان بە زیادکردنی پاشگری یەک لەدوای یەک بۆ ڕەگی وشە دروست دەبن. بەڵام پاشگرەکە شێوەی جێگیری نییە، بەڵکو بزوێنەکەی دەگۆڕێت تاکو لەگەڵ دوا بزوێنی وشەکەدا بگونجێت. ئەمە "هارمۆنیای بزوێنەکان"ە. ئەوەی لەم ڕێسایە تێبگات وازدەهێنێت لە لەبەرکردنی پاشگرەکان و خۆی دەریاندەهێنێت — ئەمە کلیلی هەموو زمانی تورکییە.',
        ),
      },
      {
        type: 'table',
        title: 'Sekiz ünlü, iki grup',
        headers: ['Ünlü', 'Kalın / İnce', 'Düz / Yuvarlak', 'Örnek'],
        rows: [
          ['a', 'Kalın (خلفية / دواوە)', 'Düz (مفرودة / پان)', 'araba'],
          ['ı', 'Kalın (خلفية / دواوە)', 'Düz (مفرودة / پان)', 'kız'],
          ['o', 'Kalın (خلفية / دواوە)', 'Yuvarlak (مستديرة / خڕ)', 'okul'],
          ['u', 'Kalın (خلفية / دواوە)', 'Yuvarlak (مستديرة / خڕ)', 'su'],
          ['e', 'İnce (أمامية / پێشەوە)', 'Düz (مفرودة / پان)', 'ev'],
          ['i', 'İnce (أمامية / پێشەوە)', 'Düz (مفرودة / پان)', 'iş'],
          ['ö', 'İnce (أمامية / پێشەوە)', 'Yuvarlak (مستديرة / خڕ)', 'göz'],
          ['ü', 'İnce (أمامية / پێشەوە)', 'Yuvarlak (مستديرة / خڕ)', 'süt'],
        ],
        caption: b(
          'احفظ العمودين: خلفية/أمامية ومفرودة/مستديرة. كل قواعد اللواحق تُبنى على هذين التقسيمين.',
          'هەردوو ستوونەکە لەبەربکە: دواوە/پێشەوە و پان/خڕ. هەموو ڕێساکانی پاشگر لەسەر ئەم دوو دابەشکردنە بنیات نراون.',
        ),
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Kural 1 — İki biçimli ekler (a / e)',
        body: b(
          'اللواحق ذات الشكلين تحتوي على حركة واسعة، وتختار بين a و e فقط. القاعدة: إذا كانت آخر حركة في الكلمة خلفية (a, ı, o, u) فاللاحقة بـ a، وإذا كانت أمامية (e, i, ö, ü) فاللاحقة بـ e. مثال جمع: ev → evler، okul → okullar.',
          'پاشگرە دووشێوەکان بزوێنێکی فراوانیان تێدایە و تەنها لە نێوان a و e هەڵدەبژێرن. ڕێساکە: ئەگەر دوا بزوێنی وشەکە دواوە بێت (a, ı, o, u) پاشگرەکە بە a دێت، ئەگەر پێشەوە بێت (e, i, ö, ü) بە e دێت. نموونەی کۆ: ev → evler، okul → okullar.',
        ),
      },
      {
        type: 'examples',
        title: 'İki biçimli ek: çoğul -ler / -lar',
        items: [
          p('ev → evler', 'ev-LER', 'بيت ← بيوت (آخر حركة e أمامية ⟵ ler)', 'ماڵ ← ماڵەکان (دوا بزوێن e پێشەوەیە ⟵ ler)'),
          p('okul → okullar', 'o-kul-LAR', 'مدرسة ← مدارس (آخر حركة u خلفية ⟵ lar)', 'قوتابخانە ← قوتابخانەکان (دوا بزوێن u دواوەیە ⟵ lar)'),
          p('göz → gözler', 'göz-LER', 'عين ← عيون (ö أمامية ⟵ ler)', 'چاو ← چاوەکان (ö پێشەوەیە ⟵ ler)'),
          p('kitap → kitaplar', 'ki-tap-LAR', 'كتاب ← كتب (a خلفية ⟵ lar)', 'کتێب ← کتێبەکان (a دواوەیە ⟵ lar)'),
          p('şehir → şehirler', 'şe-hir-LER', 'مدينة ← مدن (i أمامية ⟵ ler)', 'شار ← شارەکان (i پێشەوەیە ⟵ ler)'),
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Kural 2 — Dört biçimli ekler (ı / i / u / ü)',
        body: b(
          'اللواحق ذات الأربعة أشكال تحتوي على حركة ضيّقة، وتختار بين ı, i, u, ü. القاعدة تنظر إلى آخر حركة: بعد a أو ı ⟵ ı. بعد e أو i ⟵ i. بعد o أو u ⟵ u. بعد ö أو ü ⟵ ü. لاحظ أن o و ö لا تظهران أبداً في اللواحق، بل تُستبدلان بـ u و ü.',
          'پاشگرە چوارشێوەکان بزوێنێکی تەسکیان تێدایە و لە نێوان ı, i, u, ü هەڵدەبژێرن. ڕێساکە سەیری دوا بزوێن دەکات: دوای a یان ı ⟵ ı. دوای e یان i ⟵ i. دوای o یان u ⟵ u. دوای ö یان ü ⟵ ü. سەرنج بدە کە o و ö هەرگیز لە پاشگرەکاندا دەرناکەون، بەڵکو بە u و ü دەگۆڕێن.',
        ),
      },
      {
        type: 'table',
        title: 'Dört biçimli ek: iyelik -im / -ım / -um / -üm ("benim")',
        headers: ['Son ünlü', 'Ek', 'Kelime', 'Sonuç', 'Anlam'],
        rows: [
          ['a, ı', '-ım', 'araba', 'arabam', 'سيارتي / ئۆتۆمبێلەکەم'],
          ['e, i', '-im', 'ev', 'evim', 'بيتي / ماڵەکەم'],
          ['o, u', '-um', 'okul', 'okulum', 'مدرستي / قوتابخانەکەم'],
          ['ö, ü', '-üm', 'göz', 'gözüm', 'عيني / چاوەکەم'],
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Ünsüz sertleşmesi — د تصير ت',
        body: b(
          'قاعدة مرافقة لا بد منها: إذا انتهت الكلمة بحرف مهموس، تتحوّل الـ d في اللاحقة إلى t. الحروف المهموسة هي: f, s, t, k, ç, ş, h, p — ويحفظها الأتراك بالجملة "FıSTıKÇı ŞaHaP". مثال: ev + de = evde، لكن kitap + de = kitapta، و iş + de = işte.',
          'ڕێسایەکی هاوڕێ کە پێویستە: ئەگەر وشەکە بە کۆنسۆنانتێکی بێدەنگ کۆتایی هات، d ی پاشگرەکە دەبێتە t. کۆنسۆنانتە بێدەنگەکان ئەمانەن: f, s, t, k, ç, ş, h, p — تورکەکان بە دەستەواژەی "FıSTıKÇı ŞaHaP" لەبەریان دەکەن. نموونە: ev + de = evde، بەڵام kitap + de = kitapta، و iş + de = işte.',
        ),
      },
      {
        type: 'examples',
        title: 'Sertleşme uygulamada',
        items: [
          p('evde', 'ev-DE', 'في البيت (v ليست مهموسة ⟵ de)', 'لە ماڵ (v بێدەنگ نییە ⟵ de)'),
          p('kitapta', 'ki-tap-TA', 'في الكتاب (p مهموسة ⟵ ta)', 'لە کتێب (p بێدەنگە ⟵ ta)'),
          p('işte', 'iş-TE', 'في العمل (ş مهموسة ⟵ te)', 'لە کار (ş بێدەنگە ⟵ te)'),
          p('okulda', 'o-kul-DA', 'في المدرسة (l ليست مهموسة ⟵ da)', 'لە قوتابخانە (l بێدەنگ نییە ⟵ da)'),
          p('sokakta', 'so-kak-TA', 'في الشارع (k مهموسة ⟵ ta)', 'لە کۆڵان (k بێدەنگە ⟵ ta)'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'İstisnalar',
        body: b(
          'بعض الكلمات الدخيلة لا تخضع للتناغم، مثل: kitap (تأخذ لواحق خلفية رغم الـ i)، saat، kalp، hakikat. وكذلك اللاحقة ‎-yor‎ في المضارع المستمر لا تتغيّر أبداً. لا تقلق: هذه الاستثناءات قليلة وستحفظها بالممارسة.',
          'هەندێک وشەی بێگانە ملکەچی هارمۆنی نابن، وەک: kitap (پاشگری دواوە وەردەگرێت لەگەڵ ئەوەی i ی تێدایە)، saat، kalp، hakikat. هەروەها پاشگری ‎-yor‎ لە کاتی ئێستای بەردەوامدا هەرگیز ناگۆڕێت. نیگەران مەبە: ئەم دەرچوونانە کەمن و بە ڕاهێنان لەبەریان دەکەیت.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما الشكل الصحيح لجمع كلمة "göz"؟', 'شێوەی دروستی کۆی وشەی "göz" چییە؟'),
        ['gözlar', 'gözler', 'gözlor', 'gözlür'],
        1,
        {
          turkishOptions: true,
          explain: b(
            'آخر حركة في göz هي ö وهي أمامية، فتأخذ ‎-ler‎.',
            'دوا بزوێن لە göz دا ö یە کە پێشەوەیە، بۆیە ‎-ler‎ وەردەگرێت.',
          ),
        },
      ),
      mcq(
        b('ما الشكل الصحيح لجمع كلمة "okul"؟', 'شێوەی دروستی کۆی وشەی "okul" چییە؟'),
        ['okuller', 'okullar', 'okullor', 'okullür'],
        1,
        {
          turkishOptions: true,
          explain: b('u حركة خلفية، فاللاحقة ‎-lar‎.', 'u بزوێنێکی دواوەیە، بۆیە پاشگرەکە ‎-lar‎ ە.'),
        },
      ),
      fill(
        'kitap + ___ (في الكتاب / لە کتێب)',
        'ta',
        'في الكتاب',
        'لە کتێب',
        {
          options: ['de', 'da', 'te', 'ta'],
          explain: b(
            'حركة a خلفية ⟵ da، لكن الكلمة تنتهي بـ p المهموسة ⟵ تتحول d إلى t، فتصير ta.',
            'بزوێنی a دواوەیە ⟵ da، بەڵام وشەکە بە p ی بێدەنگ کۆتایی دێت ⟵ d دەبێتە t، کەواتە دەبێتە ta.',
          ),
        },
      ),
      fill(
        'göz + ___ (عيني / چاوەکەم)',
        'üm',
        'عيني',
        'چاوەکەم',
        {
          options: ['ım', 'im', 'um', 'üm'],
          explain: b('بعد ö تأتي ü في اللواحق رباعية الشكل.', 'دوای ö لە پاشگرە چوارشێوەکاندا ü دێت.'),
        },
      ),
      match(
        b('طابق كل كلمة مع صيغة جمعها الصحيحة.', 'هەر وشەیەک لەگەڵ شێوەی کۆی دروستیدا بگونجێنە.'),
        [
          { tr: 'ev → evler', ar: 'بيوت', ku: 'ماڵەکان' },
          { tr: 'araba → arabalar', ar: 'سيارات', ku: 'ئۆتۆمبێلەکان' },
          { tr: 'süt → sütler', ar: 'أنواع الحليب', ku: 'شیرەکان' },
          { tr: 'kuş → kuşlar', ar: 'طيور', ku: 'باڵندەکان' },
        ],
      ),
      listening('okullar', ['okuller', 'okullar', 'okullür'], 1, 'tr', p('okullar', 'o-kul-LAR', 'مدارس', 'قوتابخانەکان')),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'a1-pronouns',
    level: 'a1',
    kind: 'grammar',
    order: 2,
    minutes: 25,
    title: 'Kişi Zamirleri ve "Olmak" Ekleri',
    titleI18n: b('الضمائر الشخصية ولواحق "الكينونة"', 'جێناوە کەسییەکان و پاشگرەکانی "بوون"'),
    objective: b(
      'أن تُعرّف بنفسك وتصف الآخرين بجمل اسمية كاملة: "أنا طالب"، "هي معلّمة".',
      'ئەوەی خۆت بناسێنیت و کەسانی تر وەسف بکەیت بە ڕستەی ناوی تەواو: "من قوتابیم"، "ئەو مامۆستایە".',
    ),
    prerequisites: ['a1-vowel-harmony'],
    tags: ['pronouns', 'copula', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Türkçede "olmak" fiili yoktur',
        body: b(
          'أهم فرق عن العربية والكردية: التركية لا تستخدم فعلاً منفصلاً بمعنى "يكون" في الجملة الاسمية. بدلاً من ذلك تُلصق لاحقة قصيرة بآخر الكلمة نفسها. فبدل أن تقول "أنا + طالب"، تقول "طالبـ+ـي" (öğrenciyim). الضمير ben اختياري لأن اللاحقة وحدها تدلّ على الشخص.',
          'گرنگترین جیاوازی لەگەڵ کوردی: تورکی کارێکی جیاواز بە واتای "بوون" لە ڕستەی ناویدا بەکارناهێنێت. لە جیاتی ئەوە پاشگرێکی کورت بە کۆتایی هەمان وشەوە دەلکێنرێت. لە جیاتی ئەوەی بڵێیت "من + قوتابی"، دەڵێیت "قوتابیـ+ـم" (öğrenciyim). جێناوی ben ئارەزوومەندانەیە چونکە پاشگرەکە بە تەنها کەسەکە دیاری دەکات.',
        ),
      },
      {
        type: 'table',
        title: 'Kişi zamirleri',
        headers: ['Türkçe', 'Okunuş', 'العربية', 'کوردی'],
        rows: [
          ['ben', 'BEN', 'أنا', 'من'],
          ['sen', 'SEN', 'أنت / أنتِ (غير رسمي)', 'تۆ (نافەرمی)'],
          ['o', 'O', 'هو / هي / هذا', 'ئەو'],
          ['biz', 'BİZ', 'نحن', 'ئێمە'],
          ['siz', 'SİZ', 'أنتم / حضرتك (رسمي)', 'ئێوە / جەنابت (فەرمی)'],
          ['onlar', 'on-LAR', 'هم / هنّ', 'ئەوان'],
        ],
        caption: b(
          'ملاحظة اجتماعية مهمة: siz تُستخدم لمخاطبة شخص واحد بصيغة الاحترام، تماماً مثل "حضرتك". استخدمها دائماً مع من هو أكبر منك أو لا تعرفه.',
          'تێبینییەکی کۆمەڵایەتی گرنگ: siz بۆ ئاخاوتن لەگەڵ یەک کەس بە شێوەی ڕێزلێنان بەکاردێت، وەک "جەنابت". هەمیشە لەگەڵ کەسی گەورەتر لە خۆت یان کەسی نەناسراودا بەکاری بهێنە.',
        ),
      },
      {
        type: 'table',
        title: 'Yüklem ekleri — ünsüzle biten kelimeler',
        headers: ['Kişi', 'Ek (4 biçim)', 'Örnek: "öğretmen"', 'Anlam'],
        rows: [
          ['ben', '-im / -ım / -um / -üm', 'öğretmenim', 'أنا معلّم / من مامۆستام'],
          ['sen', '-sin / -sın / -sun / -sün', 'öğretmensin', 'أنت معلّم / تۆ مامۆستایت'],
          ['o', '-dir / -dır / -dur / -dür', 'öğretmendir', 'هو معلّم / ئەو مامۆستایە'],
          ['biz', '-iz / -ız / -uz / -üz', 'öğretmeniz', 'نحن معلّمون / ئێمە مامۆستاین'],
          ['siz', '-siniz / -sınız / -sunuz / -sünüz', 'öğretmensiniz', 'أنتم معلّمون / ئێوە مامۆستان'],
          ['onlar', '-ler / -lar', 'öğretmenler', 'هم معلّمون / ئەوان مامۆستان'],
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Ünlüyle biten kelimeler: araya "y" girer',
        body: b(
          'إذا انتهت الكلمة بحركة، نُدخل حرف y فاصلاً لمنع التقاء حركتين: öğrenci + im ⟵ öğrenciyim، Ali + im ⟵ Aliyim، hasta + im ⟵ hastayım. هذا الـ y يُسمّى "حرف الوصل" (kaynaştırma harfi) وستراه كثيراً في التركية.',
          'ئەگەر وشەکە بە بزوێن کۆتایی هات، پیتی y وەک جیاکەرەوە دەخەینە نێوانیان بۆ ڕێگری لە یەکگەیشتنی دوو بزوێن: öğrenci + im ⟵ öğrenciyim، Ali + im ⟵ Aliyim، hasta + im ⟵ hastayım. ئەم y ـە پێی دەڵێن "پیتی بەستەر" (kaynaştırma harfi) و زۆر لە تورکیدا دەیبینیت.',
        ),
      },
      {
        type: 'conjugation',
        title: '"öğrenci" (طالب / قوتابی) — ünlüyle biten kelime',
        verb: 'öğrenci olmak',
        rows: [
          { person: 'ben', tr: 'Ben öğrenciyim.', pron: 'BEN öö-ren-Cİ-yim', ar: 'أنا طالب.', ku: 'من قوتابیم.' },
          { person: 'sen', tr: 'Sen öğrencisin.', pron: 'SEN öö-ren-dji-SİN', ar: 'أنت طالب.', ku: 'تۆ قوتابیت.' },
          { person: 'o', tr: 'O öğrenci.', pron: 'O öö-ren-DJİ', ar: 'هو طالب.', ku: 'ئەو قوتابییە.' },
          { person: 'biz', tr: 'Biz öğrenciyiz.', pron: 'BİZ öö-ren-Cİ-yiz', ar: 'نحن طلاب.', ku: 'ئێمە قوتابین.' },
          { person: 'siz', tr: 'Siz öğrencisiniz.', pron: 'SİZ öö-ren-dji-si-NİZ', ar: 'أنتم طلاب.', ku: 'ئێوە قوتابین.' },
          { person: 'onlar', tr: 'Onlar öğrenci.', pron: 'on-LAR öö-ren-DJİ', ar: 'هم طلاب.', ku: 'ئەوان قوتابین.' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: '"-dir" konuşmada söylenmez',
        body: b(
          'لاحقة الغائب ‎-dir‎ تُحذف في الكلام اليومي تماماً. نقول "O öğretmen" لا "O öğretmendir". تبقى ‎-dir‎ في اللغة الرسمية والمكتوبة والأخبار والتعليمات، حيث تعطي معنى التوكيد أو الحقيقة العامة: "Su yüz derecede kaynar" ⟵ "Su yüz derecede kaynardır" في النص العلمي.',
          'پاشگری کەسی سێیەم ‎-dir‎ لە قسەی ڕۆژانەدا بە تەواوی دەکەوێت. دەڵێین "O öğretmen" نەک "O öğretmendir". ‎-dir‎ لە زمانی فەرمی و نووسراو و هەواڵ و ڕێنماییەکاندا دەمێنێتەوە، کە واتای جەخت یان ڕاستییەکی گشتی دەدات.',
        ),
      },
      {
        type: 'text',
        title: 'Olumsuz: "değil"',
        body: b(
          'لنفي الجملة الاسمية نضع كلمة değil (ليس) بعد الاسم، ثم نُلصق لاحقة الشخص بـ değil نفسها وليس بالاسم: Ben öğretmen değilim (لست معلّماً). Sen hasta değilsin (لست مريضاً). O burada değil (هو ليس هنا). انتبه: değil كلمة مستقلة تُكتب منفصلة.',
          'بۆ نەفیکردنی ڕستەی ناوی وشەی değil (نییە) دوای ناوەکە دادەنێین، پاشان پاشگری کەس بە değil ـەوە دەلکێنین نەک بە ناوەکەوە: Ben öğretmen değilim (من مامۆستا نیم). Sen hasta değilsin (تۆ نەخۆش نیت). O burada değil (ئەو لێرە نییە). ئاگاداربە: değil وشەیەکی سەربەخۆیە و جیا دەنووسرێت.',
        ),
      },
      {
        type: 'examples',
        title: 'Olumlu ve olumsuz',
        items: [
          p('Ben Türk’üm.', 'BEN tür-KÜM', 'أنا تركي.', 'من تورکم.'),
          p('Ben Türk değilim.', 'BEN TÜRK de-i-LİM', 'أنا لست تركياً.', 'من تورک نیم.'),
          p('Sen çok yorgunsun.', 'SEN ÇOK yor-gun-SUN', 'أنت متعب جداً.', 'تۆ زۆر ماندوویت.'),
          p('O doktor değil, hemşire.', 'O dok-TOR de-İL hem-şi-RE', 'هي ليست طبيبة، بل ممرضة.', 'ئەو پزیشک نییە، پەرستارە.'),
          p('Biz arkadaşız.', 'BİZ ar-ka-da-ŞIZ', 'نحن أصدقاء.', 'ئێمە هاوڕێین.'),
          p('Siz Kürt müsünüz?', 'SİZ KÜRT mü-sü-nüz', 'هل أنتم أكراد؟', 'ئێوە کوردن؟'),
        ],
      },
    ],
    exercises: [
      fill('Ben öğretmen___.', 'im', 'أنا معلّم.', 'من مامۆستام.', {
        options: ['im', 'sin', 'iz', 'siniz'],
        explain: b('ben تأخذ اللاحقة ‎-im‎ بعد الحركة الأمامية e.', 'ben پاشگری ‎-im‎ وەردەگرێت دوای بزوێنی پێشەوەی e.'),
      }),
      fill('Sen çok mutlu___.', 'sun', 'أنت سعيد جداً.', 'تۆ زۆر دڵخۆشیت.', {
        options: ['sin', 'sun', 'sın', 'sün'],
        explain: b('آخر حركة في mutlu هي u ⟵ اللاحقة ‎-sun‎.', 'دوا بزوێن لە mutlu دا u یە ⟵ پاشگرەکە ‎-sun‎ ە.'),
      }),
      translate('ar-tr', 'أنا لست مريضاً.', ['Ben hasta değilim.', 'Ben hasta değilsin.', 'Ben hastayım.', 'Ben hasta değil.'], 0, {
        explain: b('değil يأخذ لاحقة المتكلم ‎-im‎.', 'değil پاشگری کەسی یەکەم ‎-im‎ وەردەگرێت.'),
      }),
      translate('ku-tr', 'ئێمە هاوڕێین.', ['Biz arkadaşsınız.', 'Biz arkadaşız.', 'Biz arkadaşım.', 'Biz arkadaşlar.'], 1),
      order(
        b('رتّب الكلمات لتكوين جملة صحيحة.', 'وشەکان ڕێک بخە بۆ دروستکردنی ڕستەیەکی دروست.'),
        'Ben İstanbul’da öğrenciyim',
        'أنا طالب في إسطنبول.',
        'من لە ئەستەنبوڵ قوتابیم.',
        { pron: 'BEN is-tan-BUL-da öö-ren-Cİ-yim', distractors: ['değil'] },
      ),
      speak('Merhaba, ben Ali. Öğretmenim.', 'mer-ha-BA BEN a-Lİ öö-ret-me-NİM', 'مرحباً، أنا علي. أنا معلّم.', 'سڵاو، من عەلیم. مامۆستام.'),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'a1-word-order',
    level: 'a1',
    kind: 'grammar',
    order: 3,
    minutes: 20,
    title: 'Türkçe Cümle Yapısı',
    titleI18n: b('بنية الجملة التركية', 'پێکهاتەی ڕستەی تورکی'),
    objective: b(
      'أن تبني جملة تركية بالترتيب الطبيعي: فاعل ← مكان/زمان ← مفعول ← فعل.',
      'ئەوەی ڕستەی تورکی بە ڕیزبەندی سروشتی دروست بکەیت: کردار ← شوێن/کات ← بەرکار ← کار.',
    ),
    prerequisites: ['a1-pronouns'],
    tags: ['syntax', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Fiil her zaman sonda',
        body: b(
          'القاعدة الذهبية: الفعل في التركية يأتي في آخر الجملة دائماً. العربية تبدأ غالباً بالفعل (كتبتُ رسالةً) والكردية السورانية تضع الفعل في النهاية أيضاً — فالكرد هنا لديهم أفضلية كبيرة. التركية تتبع الترتيب: فاعل ← مفعول ← فعل (SOV). "أنا كتاباً أقرأ" = Ben kitap okuyorum.',
          'ڕێسا زێڕینەکە: کار لە تورکیدا هەمیشە لە کۆتایی ڕستەدا دێت. کوردیی سۆرانیش کار لە کۆتاییدا دادەنێت — کەواتە ئێوە لێرەدا ئاسانکارییەکی گەورەتان هەیە. تورکی ئەم ڕیزبەندییە پەیڕەو دەکات: کردار ← بەرکار ← کار (SOV). "من کتێب دەخوێنمەوە" = Ben kitap okuyorum.',
        ),
      },
      {
        type: 'table',
        title: 'Cümle şeması',
        headers: ['1. Özne', '2. Zaman', '3. Yer', '4. Nesne', '5. Fiil'],
        rows: [
          ['Ben', 'her gün', 'okulda', 'Türkçe', 'öğreniyorum.'],
          ['Ali', 'dün', 'evde', 'kitap', 'okudu.'],
          ['Biz', 'yarın', 'İstanbul’a', '—', 'gideceğiz.'],
          ['Annem', 'sabahları', 'mutfakta', 'kahvaltı', 'hazırlar.'],
        ],
        caption: b(
          'هذا الترتيب هو الافتراضي المحايد. الأتراك يخالفونه للتشديد، لكن الفعل يبقى في النهاية دائماً.',
          'ئەم ڕیزبەندییە ئاسایی و بێلایەنە. تورکەکان بۆ جەختکردنەوە پێچەوانەی دەکەن، بەڵام کار هەمیشە لە کۆتاییدا دەمێنێتەوە.',
        ),
      },
      {
        type: 'examples',
        title: 'Basit cümleler',
        items: [
          p('Ben kitap okuyorum.', 'BEN ki-TAP o-ku-YO-rum', 'أنا أقرأ كتاباً.', 'من کتێب دەخوێنمەوە.'),
          p('Ali su içiyor.', 'a-Lİ SU i-çi-YOR', 'علي يشرب ماءً.', 'عەلی ئاو دەخواتەوە.'),
          p('Annem yemek yapıyor.', 'an-NEM ye-MEK ya-pı-YOR', 'أمي تطبخ الطعام.', 'دایکم خواردن دروست دەکات.'),
          p('Biz her gün Türkçe çalışıyoruz.', 'BİZ her GÜN türk-ÇE ça-lı-şı-YO-ruz', 'نحن ندرس التركية كل يوم.', 'ئێمە هەموو ڕۆژێک تورکی دەخوێنین.'),
          p('Öğrenciler sınıfta öğretmeni dinliyor.', 'öö-ren-dji-LER sı-nıf-TA öö-ret-me-Nİ din-li-YOR', 'الطلاب يستمعون إلى المعلّم في الصف.', 'قوتابییەکان لە پۆلەکەدا گوێ لە مامۆستا دەگرن.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Vurgu: fiilden hemen önceki kelime',
        body: b(
          'سرّ التشديد في التركية: الكلمة التي تسبق الفعل مباشرة هي الأهم في الجملة. قارن: "Ben yarın İstanbul’a gideceğim" (سأذهب غداً إلى إسطنبول — التركيز على إسطنبول) مقابل "Ben İstanbul’a yarın gideceğim" (سأذهب إلى إسطنبول غداً — التركيز على غد). المعنى واحد لكن البؤرة تغيّرت.',
          'نهێنی جەختکردن لە تورکیدا: ئەو وشەیەی ڕاستەوخۆ پێش کار دێت گرنگترینە لە ڕستەکەدا. بەراورد بکە: "Ben yarın İstanbul’a gideceğim" (جەخت لەسەر ئەستەنبوڵ) بەرامبەر "Ben İstanbul’a yarın gideceğim" (جەخت لەسەر سبەینێ). واتاکە یەکە بەڵام ناوەندی سەرنج گۆڕاوە.',
        ),
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Sıfat her zaman isimden önce',
        body: b(
          'خلافاً للعربية تماماً: الصفة تسبق الموصوف في التركية ولا تتبعه. نقول büyük ev (بيت كبير) وليس "ev büyük". وترتيب المركّب: (صفة) + (bir) + اسم ⟵ büyük bir ev = بيت كبير.',
          'بە پێچەوانەی عەرەبی: ئاوەڵناو پێش ناو دێت لە تورکیدا. دەڵێین büyük ev (ماڵێکی گەورە) نەک "ev büyük". ڕیزبەندی: (ئاوەڵناو) + (bir) + ناو ⟵ büyük bir ev.',
        ),
      },
      {
        type: 'examples',
        title: 'Sıfat + isim',
        items: [
          p('güzel bir şehir', 'gü-ZEL bir şe-HİR', 'مدينة جميلة', 'شارێکی جوان'),
          p('eski kitaplar', 'es-Kİ ki-tap-LAR', 'كتب قديمة', 'کتێبە کۆنەکان'),
          p('çok soğuk su', 'ÇOK so-UK SU', 'ماء بارد جداً', 'ئاوێکی زۆر سارد'),
          p('küçük kırmızı araba', 'kü-ÇÜK kır-mı-ZI a-ra-BA', 'سيارة حمراء صغيرة', 'ئۆتۆمبێلێکی سووری بچووک'),
        ],
      },
    ],
    exercises: [
      order(
        b('رتّب: أنا أشرب الشاي في البيت.', 'ڕێک بخە: من لە ماڵەوە چا دەخۆمەوە.'),
        'Ben evde çay içiyorum',
        'أنا أشرب الشاي في البيت.',
        'من لە ماڵەوە چا دەخۆمەوە.',
        { pron: 'BEN ev-DE ÇAY i-çi-YO-rum' },
      ),
      order(
        b('رتّب: الطلاب يقرؤون الكتاب في المدرسة.', 'ڕێک بخە: قوتابییەکان لە قوتابخانە کتێب دەخوێننەوە.'),
        'Öğrenciler okulda kitap okuyor',
        'الطلاب يقرؤون كتاباً في المدرسة.',
        'قوتابییەکان لە قوتابخانە کتێب دەخوێننەوە.',
        { pron: 'öö-ren-dji-LER o-kul-DA ki-TAP o-ku-YOR' },
      ),
      mcq(
        b('أي الجمل التالية صحيحة؟', 'کام لەم ڕستانە دروستە؟'),
        ['Ben okuyorum kitap.', 'Okuyorum ben kitap.', 'Ben kitap okuyorum.', 'Kitap ben okuyorum.'],
        2,
        {
          turkishOptions: true,
          explain: b('الفعل في النهاية والمفعول قبله مباشرة.', 'کار لە کۆتاییدایە و بەرکار ڕاستەوخۆ پێشیەتی.'),
        },
      ),
      mcq(
        b('كيف تقول "بيت كبير" بالتركية؟', 'چۆن بە تورکی دەڵێیت "ماڵێکی گەورە"؟'),
        ['ev büyük', 'büyük ev', 'ev büyüktür', 'büyüktür ev'],
        1,
        { turkishOptions: true, explain: b('الصفة تسبق الاسم دائماً.', 'ئاوەڵناو هەمیشە پێش ناو دێت.') },
      ),
      translate('tr-ar', 'Annem her gün mutfakta yemek yapıyor.', [
        'أمي تطبخ الطعام في المطبخ كل يوم.',
        'أمي ذهبت إلى المطبخ اليوم.',
        'أمي تحب الطعام كل يوم.',
        'أمي في المطبخ الآن.',
      ], 0, { pron: 'an-NEM her GÜN mut-fak-TA ye-MEK ya-pı-YOR' }),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'a1-var-yok',
    level: 'a1',
    kind: 'grammar',
    order: 4,
    minutes: 20,
    title: 'Var / Yok ve Olumsuzluk',
    titleI18n: b('يوجد / لا يوجد والنفي', 'هەیە / نییە و نەفی'),
    objective: b(
      'أن تعبّر عن الوجود والملكية والنفي: "يوجد كتاب"، "ليس لديّ وقت".',
      'ئەوەی هەبوون و خاوەندارێتی و نەفی دەرببڕیت: "کتێب هەیە"، "کاتم نییە".',
    ),
    prerequisites: ['a1-pronouns'],
    tags: ['existence', 'negation'],
    blocks: [
      {
        type: 'text',
        title: 'İki kelime, çok iş',
        body: b(
          'كلمتان فقط تغطّيان "يوجد/لا يوجد" و"عندي/ليس عندي" و"هناك/ليس هناك": var (موجود) و yok (غير موجود). وتأتيان دائماً في آخر الجملة، لأنهما تقومان مقام الفعل. Masada kitap var = على الطاولة كتاب. Param yok = ليس معي نقود.',
          'تەنها دوو وشە هەموو ئەمانە دەگرنەوە: "هەیە/نییە" و "لام هەیە/نییە": var (هەیە) و yok (نییە). هەمیشەش لە کۆتایی ڕستەدا دێن، چونکە جێی کار دەگرنەوە. Masada kitap var = لەسەر مێزەکە کتێب هەیە. Param yok = پارەم نییە.',
        ),
      },
      {
        type: 'examples',
        title: 'Varlık: bir yerde bir şey var',
        items: [
          p('Masada bir kitap var.', 'ma-sa-DA bir ki-TAP VAR', 'على الطاولة كتاب.', 'لەسەر مێزەکە کتێبێک هەیە.'),
          p('Sınıfta öğrenci yok.', 'sı-nıf-TA öö-ren-DJİ YOK', 'لا يوجد طلاب في الصف.', 'لە پۆلەکەدا قوتابی نییە.'),
          p('Bu şehirde çok cami var.', 'BU şe-hir-DE ÇOK dja-Mİ VAR', 'في هذه المدينة مساجد كثيرة.', 'لەم شارەدا مزگەوتی زۆر هەیە.'),
          p('Buzdolabında süt var mı?', 'buz-do-la-bın-DA SÜT var MI', 'هل يوجد حليب في الثلاجة؟', 'لە ساردکەرەوەکەدا شیر هەیە؟'),
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Sahiplik: "benim ... var" = عندي',
        body: b(
          'التركية لا تملك فعل "يملك". للتعبير عن الملكية تستخدم البنية: (الضمير بحالة الإضافة) + الاسم مع لاحقة الملكية + var/yok. مثال: Benim arabam var = لديّ سيارة (حرفياً: سيارتي موجودة). Senin zamanın yok = ليس لديك وقت. ويجوز حذف الضمير: Arabam var.',
          'تورکی کاری "خاوەندارێتی" نییە. بۆ دەربڕینی خاوەندارێتی ئەم پێکهاتەیە بەکاردەهێنێت: (جێناو بە حاڵەتی خاوەندار) + ناو لەگەڵ پاشگری خاوەندارێتی + var/yok. نموونە: Benim arabam var = ئۆتۆمبێلم هەیە. Senin zamanın yok = کاتت نییە. دەکرێت جێناوەکە بسڕدرێتەوە: Arabam var.',
        ),
      },
      {
        type: 'conjugation',
        title: 'Sahiplik çekimi: "araba" (سيارة / ئۆتۆمبێل)',
        verb: 'arabam var',
        rows: [
          { person: 'benim', tr: 'Benim arabam var.', pron: 'be-NİM a-ra-BAM VAR', ar: 'لديّ سيارة.', ku: 'ئۆتۆمبێلم هەیە.' },
          { person: 'senin', tr: 'Senin araban var.', pron: 'se-NİN a-ra-BAN VAR', ar: 'لديك سيارة.', ku: 'ئۆتۆمبێلت هەیە.' },
          { person: 'onun', tr: 'Onun arabası var.', pron: 'o-NUN a-ra-ba-SI VAR', ar: 'لديه سيارة.', ku: 'ئۆتۆمبێلی هەیە.' },
          { person: 'bizim', tr: 'Bizim arabamız var.', pron: 'bi-ZİM a-ra-ba-MIZ VAR', ar: 'لدينا سيارة.', ku: 'ئۆتۆمبێلمان هەیە.' },
          { person: 'sizin', tr: 'Sizin arabanız var.', pron: 'si-ZİN a-ra-ba-NIZ VAR', ar: 'لديكم سيارة.', ku: 'ئۆتۆمبێلتان هەیە.' },
          { person: 'onların', tr: 'Onların arabası var.', pron: 'on-la-RIN a-ra-ba-SI VAR', ar: 'لديهم سيارة.', ku: 'ئۆتۆمبێلیان هەیە.' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'değil ≠ yok',
        body: b(
          'خطأ شائع جداً: değil تنفي الوصف (هو ليس طبيباً ⟵ O doktor değil)، أما yok فتنفي الوجود أو الملكية (لا يوجد طبيب ⟵ Doktor yok). لا تخلط بينهما: "Param değil" خطأ، والصواب "Param yok".',
          'هەڵەیەکی زۆر باو: değil وەسف نەفی دەکات (ئەو پزیشک نییە ⟵ O doktor değil)، بەڵام yok هەبوون یان خاوەندارێتی نەفی دەکات (پزیشک نییە ⟵ Doktor yok). تێکەڵیان مەکە: "Param değil" هەڵەیە، دروستەکەی "Param yok" ە.',
        ),
      },
      {
        type: 'examples',
        title: 'Karşılaştırma',
        items: [
          p('O öğretmen değil.', 'O öö-ret-MEN de-İL', 'هو ليس معلّماً. (نفي الوصف)', 'ئەو مامۆستا نییە. (نەفی وەسف)'),
          p('Öğretmen yok.', 'öö-ret-MEN YOK', 'لا يوجد معلّم. (نفي الوجود)', 'مامۆستا نییە. (نەفی هەبوون)'),
          p('Vaktim yok.', 'vak-TİM YOK', 'ليس لديّ وقت.', 'کاتم نییە.'),
          p('Bu doğru değil.', 'BU do-RU de-İL', 'هذا ليس صحيحاً.', 'ئەمە ڕاست نییە.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Geçmiş: vardı / yoktu',
        body: b(
          'للماضي أضف ‎-dı‎: vardı (كان يوجد) و yoktu (لم يكن يوجد). Dün derste çok öğrenci vardı = كان في الدرس طلاب كثيرون أمس. Param yoktu = لم يكن معي نقود.',
          'بۆ ڕابردوو ‎-dı‎ زیاد بکە: vardı (هەبوو) و yoktu (نەبوو). Dün derste çok öğrenci vardı = دوێنێ لە وانەکەدا قوتابی زۆر هەبوو.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('كيف تقول "ليس لديّ وقت"؟', 'چۆن دەڵێیت "کاتم نییە"؟'),
        ['Zamanım değil.', 'Zamanım yok.', 'Zaman yokum.', 'Zamanım var değil.'],
        1,
        { turkishOptions: true, explain: b('نفي الملكية يكون بـ yok وليس değil.', 'نەفی خاوەندارێتی بە yok دەبێت نەک değil.') },
      ),
      mcq(
        b('كيف تقول "هو ليس طالباً"؟', 'چۆن دەڵێیت "ئەو قوتابی نییە"؟'),
        ['O öğrenci yok.', 'O öğrenci değil.', 'Öğrencisi yok.', 'O öğrenci değildir yok.'],
        1,
        { turkishOptions: true, explain: b('نفي الوصف يكون بـ değil.', 'نەفی وەسف بە değil دەبێت.') },
      ),
      fill('Benim iki kardeşim ___.', 'var', 'لديّ أخوان.', 'دوو خوشک و برام هەیە.', {
        options: ['var', 'yok', 'değil', 'dir'],
      }),
      fill('Bugün derste öğretmen ___.', 'yok', 'لا يوجد معلّم في الدرس اليوم.', 'ئەمڕۆ لە وانەکەدا مامۆستا نییە.', {
        options: ['var', 'yok', 'değil', 'vardı'],
      }),
      translate('ar-tr', 'هل لديك قلم؟', ['Kalemin var mı?', 'Kalemin yok mu?', 'Kalem değil mi?', 'Kalemim var.'], 0),
      listening('Benim param yok.', ['لديّ نقود.', 'ليس لديّ نقود.', 'هذه ليست نقودي.'], 1, 'ar',
        p('Benim param yok.', 'be-NİM pa-RAM YOK', 'ليس لديّ نقود.', 'پارەم نییە.')),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'a1-questions',
    level: 'a1',
    kind: 'grammar',
    order: 5,
    minutes: 22,
    title: 'Soru Cümleleri',
    titleI18n: b('جمل الاستفهام', 'ڕستەی پرسیاری'),
    objective: b(
      'أن تسأل أي سؤال بنعم/لا باستخدام أداة mi، وأن تستخدم أدوات الاستفهام الأساسية.',
      'ئەوەی هەر پرسیارێکی بەڵێ/نەخێر بە ئامرازی mi بکەیت، و ئامرازە سەرەکییەکانی پرسیار بەکاربهێنیت.',
    ),
    prerequisites: ['a1-pronouns'],
    tags: ['questions', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Soru eki: mi / mı / mu / mü',
        body: b(
          'لتحويل أي جملة إلى سؤال بنعم/لا، أضف أداة الاستفهام mi. وهي رباعية الشكل تخضع لتناغم الحركات مع الكلمة التي قبلها: mi / mı / mu / mü. الغريب في التركية: تُكتب هذه الأداة منفصلة عن الكلمة، لكنها تُنطق ملتصقة بها ولا تحمل نبراً.',
          'بۆ گۆڕینی هەر ڕستەیەک بۆ پرسیاری بەڵێ/نەخێر، ئامرازی پرسیاری mi زیاد بکە. چوارشێوەیە و ملکەچی هارمۆنیای بزوێنەکانە لەگەڵ ئەو وشەیەی پێشیەتی: mi / mı / mu / mü. سەیر لە تورکیدا: ئەم ئامرازە جیا لە وشەکە دەنووسرێت، بەڵام بە لکاوی دەخوێنرێتەوە و ڕەخنە هەڵناگرێت.',
        ),
      },
      {
        type: 'table',
        title: 'Soru ekinin dört biçimi',
        headers: ['Son ünlü', 'Soru eki', 'Örnek', 'Anlam'],
        rows: [
          ['a, ı', 'mı', 'Hasta mı?', 'هل هو مريض؟ / نەخۆشە؟'],
          ['e, i', 'mi', 'Öğrenci mi?', 'هل هو طالب؟ / قوتابییە؟'],
          ['o, u', 'mu', 'Doktor mu?', 'هل هو طبيب؟ / پزیشکە؟'],
          ['ö, ü', 'mü', 'Türk mü?', 'هل هو تركي؟ / تورکە؟'],
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Kişi eki soru ekine yapışır',
        body: b(
          'نقطة دقيقة جداً: لاحقة الشخص تلتصق بأداة الاستفهام لا بالاسم. فلا تقل "Öğrencisin mi?" بل "Öğrenci misin?" — أي: الاسم، ثم أداة الاستفهام، ثم لاحقة الشخص. الاستثناء: ضمير الغائب o لا يأخذ شيئاً.',
          'خاڵێکی زۆر ورد: پاشگری کەس بە ئامرازی پرسیارەوە دەلکێت نەک بە ناوەکەوە. کەواتە مەڵێ "Öğrencisin mi?" بەڵکو "Öğrenci misin?" — واتە: ناو، پاشان ئامرازی پرسیار، پاشان پاشگری کەس.',
        ),
      },
      {
        type: 'conjugation',
        title: 'Soru çekimi: "öğrenci"',
        verb: 'öğrenci mi?',
        rows: [
          { person: 'ben', tr: 'Öğrenci miyim?', pron: 'öö-ren-DJİ mi-yim', ar: 'هل أنا طالب؟', ku: 'من قوتابیم؟' },
          { person: 'sen', tr: 'Öğrenci misin?', pron: 'öö-ren-DJİ mi-sin', ar: 'هل أنت طالب؟', ku: 'تۆ قوتابیت؟' },
          { person: 'o', tr: 'Öğrenci mi?', pron: 'öö-ren-DJİ mi', ar: 'هل هو طالب؟', ku: 'ئەو قوتابییە؟' },
          { person: 'biz', tr: 'Öğrenci miyiz?', pron: 'öö-ren-DJİ mi-yiz', ar: 'هل نحن طلاب؟', ku: 'ئێمە قوتابین؟' },
          { person: 'siz', tr: 'Öğrenci misiniz?', pron: 'öö-ren-DJİ mi-si-niz', ar: 'هل أنتم طلاب؟', ku: 'ئێوە قوتابین؟' },
          { person: 'onlar', tr: 'Öğrenciler mi?', pron: 'öö-ren-dji-LER mi', ar: 'هل هم طلاب؟', ku: 'ئەوان قوتابین؟' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Fiillerle: soru eki fiilden SONRA',
        body: b(
          'مع الأفعال في المضارع المستمر، تأتي أداة الاستفهام بعد ‎-yor‎ مباشرة ثم تحمل لاحقة الشخص: Geliyor musun؟ (هل أنت قادم؟) وليس "Geliyorsun mu?". أما في الماضي فالأداة تأتي بعد لاحقة الشخص: Geldin mi؟ (هل جئت؟).',
          'لەگەڵ کاردا لە کاتی ئێستای بەردەوامدا، ئامرازی پرسیار ڕاستەوخۆ دوای ‎-yor‎ دێت پاشان پاشگری کەس هەڵدەگرێت: Geliyor musun? (دێیت؟) نەک "Geliyorsun mu?". بەڵام لە ڕابردوودا ئامرازەکە دوای پاشگری کەس دێت: Geldin mi? (هاتیت؟).',
        ),
      },
      {
        type: 'examples',
        title: 'Evet / hayır soruları',
        items: [
          p('Türkçe biliyor musun?', 'türk-ÇE bi-li-YOR mu-sun', 'هل تعرف التركية؟', 'تورکی دەزانیت؟'),
          p('Bu senin mi?', 'BU se-NİN mi', 'هل هذا لك؟', 'ئەمە هی تۆیە؟'),
          p('Çay ister misiniz?', 'ÇAY is-TER mi-si-niz', 'هل تريدون شاياً؟', 'چاتان دەوێت؟'),
          p('Yorgun musun?', 'yor-GUN mu-sun', 'هل أنت متعب؟', 'ماندوویت؟'),
          p('Buraya ilk defa mı geliyorsun?', 'bu-ra-YA İLK de-FA mı ge-li-yor-sun', 'هل تأتي إلى هنا لأول مرة؟', 'یەکەم جارە دێیتە ئێرە؟'),
        ],
      },
      {
        type: 'table',
        title: 'Soru kelimeleri',
        headers: ['Türkçe', 'Okunuş', 'العربية', 'کوردی'],
        rows: [
          ['ne', 'NE', 'ماذا', 'چی'],
          ['kim', 'KİM', 'مَن', 'کێ'],
          ['nerede', 'ne-re-DE', 'أين', 'لە کوێ'],
          ['nereye', 'ne-re-YE', 'إلى أين', 'بۆ کوێ'],
          ['nereden', 'ne-re-DEN', 'من أين', 'لە کوێوە'],
          ['ne zaman', 'ne za-MAN', 'متى', 'کەی'],
          ['neden / niçin', 'ne-DEN / ni-ÇİN', 'لماذا', 'بۆچی'],
          ['nasıl', 'na-SIL', 'كيف', 'چۆن'],
          ['kaç', 'KAÇ', 'كم (عدد)', 'چەند'],
          ['ne kadar', 'ne ka-DAR', 'كم (كمية/سعر)', 'چەندە'],
          ['hangi', 'han-Gİ', 'أيّ', 'کام'],
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Soru kelimesi fiilden hemen önce',
        body: b(
          'كلمة الاستفهام تحتلّ موضع المعلومة المطلوبة، وغالباً تقع مباشرة قبل الفعل: Sen nereye gidiyorsun? (إلى أين تذهب؟). ولا تُستخدم أداة mi مع كلمة استفهام أبداً — فلا تقل "Nerede mi?" في السؤال العادي.',
          'وشەی پرسیار جێی ئەو زانیارییە دەگرێت کە داوا دەکرێت، و بەزۆری ڕاستەوخۆ پێش کار دەکەوێت: Sen nereye gidiyorsun? ئامرازی mi هەرگیز لەگەڵ وشەی پرسیاردا بەکارنایەت.',
        ),
      },
      {
        type: 'dialogue',
        title: 'Tanışma',
        lines: [
          { speaker: 'Ayşe', tr: 'Merhaba! Adın ne?', pron: 'mer-ha-BA a-DIN NE', ar: 'مرحباً! ما اسمك؟', ku: 'سڵاو! ناوت چییە؟' },
          { speaker: 'Karwan', tr: 'Benim adım Karwan. Sizin adınız ne?', pron: 'be-NİM a-DIM kar-VAN si-ZİN a-dı-NIZ NE', ar: 'اسمي كاروان. ما اسمك حضرتك؟', ku: 'ناوی من کاروانە. ناوی جەنابت چییە؟' },
          { speaker: 'Ayşe', tr: 'Ayşe. Nerelisin?', pron: 'ay-ŞE ne-re-li-SİN', ar: 'عائشة. من أين أنت؟', ku: 'عەیشە. خەڵکی کوێیت؟' },
          { speaker: 'Karwan', tr: 'Erbil’denim. Sen İstanbullu musun?', pron: 'er-BİL-de-nim SEN is-tan-bul-LU mu-sun', ar: 'أنا من أربيل. هل أنتِ من إسطنبول؟', ku: 'خەڵکی هەولێرم. تۆ خەڵکی ئەستەنبوڵیت؟' },
          { speaker: 'Ayşe', tr: 'Evet. Türkçeyi nerede öğrendin?', pron: 'e-VET türk-çe-Yİ ne-re-DE öö-ren-din', ar: 'نعم. أين تعلّمت التركية؟', ku: 'بەڵێ. لە کوێ فێری تورکی بوویت؟' },
          { speaker: 'Karwan', tr: 'Kursta öğrendim. Çok zor değil.', pron: 'kurs-TA öö-ren-DİM ÇOK ZOR de-İL', ar: 'تعلّمتها في دورة. ليست صعبة جداً.', ku: 'لە خولێکدا فێربووم. زۆر قورس نییە.' },
        ],
      },
    ],
    exercises: [
      mcq(
        b('اختر الشكل الصحيح لأداة الاستفهام بعد كلمة "Türk".', 'شێوەی دروستی ئامرازی پرسیار دوای وشەی "Türk" هەڵبژێرە.'),
        ['mi', 'mı', 'mu', 'mü'],
        3,
        { tr: 'Sen Türk ___?', turkishOptions: true, explain: b('ü حركة أمامية مستديرة ⟵ mü.', 'ü بزوێنێکی پێشەوەی خڕە ⟵ mü.') },
      ),
      mcq(
        b('أي الجمل صحيحة؟', 'کام ڕستە دروستە؟'),
        ['Geliyorsun mu?', 'Geliyor musun?', 'Geliyor sun mu?', 'Mu geliyorsun?'],
        1,
        { turkishOptions: true, explain: b('مع ‎-yor‎ تأتي الأداة بعد الفعل ثم لاحقة الشخص.', 'لەگەڵ ‎-yor‎ ئامرازەکە دوای کار دێت پاشان پاشگری کەس.') },
      ),
      fill('Sen ___ gidiyorsun? (إلى أين / بۆ کوێ)', 'nereye', 'إلى أين تذهب؟', 'بۆ کوێ دەچیت؟', {
        options: ['nerede', 'nereye', 'nereden', 'ne zaman'],
        explain: b('الاتجاه إلى مكان يتطلّب nereye بحالة الاتجاه.', 'ئاراستە بۆ شوێنێک nereye دەوێت بە حاڵەتی ئاراستە.'),
      }),
      match(
        b('طابق كلمة الاستفهام بمعناها.', 'وشەی پرسیار لەگەڵ واتاکەیدا بگونجێنە.'),
        [
          { tr: 'kim', ar: 'مَن', ku: 'کێ' },
          { tr: 'ne zaman', ar: 'متى', ku: 'کەی' },
          { tr: 'nasıl', ar: 'كيف', ku: 'چۆن' },
          { tr: 'kaç', ar: 'كم (عدد)', ku: 'چەند' },
        ],
      ),
      translate('ar-tr', 'هل أنت متعب؟', ['Yorgunsun mu?', 'Yorgun musun?', 'Yorgun mısın?', 'Mu yorgunsun?'], 1),
      order(
        b('رتّب: هل تعرف التركية؟', 'ڕێک بخە: تورکی دەزانیت؟'),
        'Sen Türkçe biliyor musun',
        'هل تعرف التركية؟',
        'تۆ تورکی دەزانیت؟',
        { pron: 'SEN türk-ÇE bi-li-YOR mu-sun' },
      ),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'a1-demonstratives',
    level: 'a1',
    kind: 'grammar',
    order: 6,
    minutes: 18,
    title: 'İşaret Sıfatları: Bu, Şu, O',
    titleI18n: b('أسماء الإشارة: هذا، ذاك، ذلك', 'ئاماژەپێکەرەکان: ئەمە، ئەوە، ئەو'),
    objective: b(
      'أن تشير إلى الأشياء حسب قربها وبعدها، وأن تصرّفها في الجمع والحالات.',
      'ئەوەی ئاماژە بە شتەکان بکەیت بەپێی نزیکی و دووریان، و لە کۆ و حاڵەتەکاندا بیانگۆڕیت.',
    ),
    prerequisites: ['a1-word-order'],
    tags: ['demonstratives'],
    blocks: [
      {
        type: 'text',
        title: 'Üç mesafe',
        body: b(
          'التركية تميّز ثلاث مسافات بينما تكتفي العربية باثنتين. bu = هذا (قريب جداً، في متناول اليد). şu = ذاك (متوسط البعد، غالباً مع الإشارة بالإصبع أو للشيء الذي سنذكره). o = ذلك (بعيد، أو غائب عن مجال النظر، وهو نفسه ضمير الغائب "هو/هي").',
          'تورکی سێ دووری جیادەکاتەوە. bu = ئەمە (زۆر نزیک، لەبەردەست). şu = ئەوە (ناوەند، بەزۆری لەگەڵ ئاماژەکردن بە پەنجە یان بۆ ئەو شتەی باسی دەکەین). o = ئەو (دوور، یان لە بواری بینیندا نییە، هەروەها هەمان جێناوی کەسی سێیەمە).',
        ),
      },
      {
        type: 'table',
        title: 'İşaret sıfatları ve zamirleri',
        headers: ['Tekil', 'Çoğul', 'Mesafe', 'العربية', 'کوردی'],
        rows: [
          ['bu', 'bunlar', 'çok yakın', 'هذا / هؤلاء', 'ئەمە / ئەمانە'],
          ['şu', 'şunlar', 'orta', 'ذاك / أولئك', 'ئەوە / ئەوانە'],
          ['o', 'onlar', 'uzak', 'ذلك / أولئك، هو / هم', 'ئەو / ئەوان'],
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Sıfat mı, zamir mi?',
        body: b(
          'فرق مهم: إذا جاء بعد bu اسمٌ فهو صفة إشارة ولا يتغيّر أبداً: bu kitaplar (هذه الكتب) — لاحظ أن bu لم تصبح bunlar. أما إذا وقفت وحدها فهي اسم إشارة وتُجمع وتُصرّف: Bunlar güzel (هذه جميلة).',
          'جیاوازییەکی گرنگ: ئەگەر دوای bu ناوێک هات ئەوا ئاوەڵناوی ئاماژەیە و هەرگیز ناگۆڕێت: bu kitaplar (ئەم کتێبانە) — سەرنج بدە bu نەبووە bunlar. بەڵام ئەگەر بە تەنها وەستا ئەوا جێناوی ئاماژەیە و کۆ دەبێت و دەگۆڕێت: Bunlar güzel.',
        ),
      },
      {
        type: 'examples',
        title: 'Sıfat olarak (isimden önce)',
        items: [
          p('Bu kitap çok güzel.', 'BU ki-TAP ÇOK gü-ZEL', 'هذا الكتاب جميل جداً.', 'ئەم کتێبە زۆر جوانە.'),
          p('Şu adam kim?', 'ŞU a-DAM KİM', 'مَن ذاك الرجل؟', 'ئەو پیاوە کێیە؟'),
          p('O gün çok mutluydum.', 'O GÜN ÇOK mut-luy-DUM', 'كنت سعيداً جداً ذلك اليوم.', 'ئەو ڕۆژە زۆر دڵخۆش بووم.'),
          p('Bu öğrenciler çok çalışkan.', 'BU öö-ren-dji-LER ÇOK ça-lış-KAN', 'هؤلاء الطلاب مجتهدون جداً.', 'ئەم قوتابییانە زۆر کۆششکەرن.'),
        ],
      },
      {
        type: 'examples',
        title: 'Zamir olarak (tek başına)',
        items: [
          p('Bu ne?', 'BU NE', 'ما هذا؟', 'ئەمە چییە؟'),
          p('Bunlar senin mi?', 'bun-LAR se-NİN mi', 'هل هذه لك؟', 'ئەمانە هی تۆن؟'),
          p('Şunu bana ver.', 'şu-NU ba-NA VER', 'أعطني ذاك.', 'ئەوەم بدەرێ.'),
          p('Onu tanıyorum.', 'o-NU ta-nı-YO-rum', 'أعرفه.', 'دەیناسم.'),
        ],
      },
      {
        type: 'table',
        title: 'Hâl çekimi — dikkat: araya "n" girer',
        headers: ['Hâl', 'bu', 'şu', 'o', 'Anlam'],
        rows: [
          ['Yalın', 'bu', 'şu', 'o', 'هذا / ئەمە'],
          ['Belirtme (-i)', 'bunu', 'şunu', 'onu', 'هذا (مفعول به) / ئەمە (بەرکار)'],
          ['Yönelme (-e)', 'buna', 'şuna', 'ona', 'إلى هذا / بۆ ئەمە'],
          ['Bulunma (-de)', 'bunda', 'şunda', 'onda', 'في هذا / لەمە'],
          ['Ayrılma (-den)', 'bundan', 'şundan', 'ondan', 'من هذا / لەمەوە'],
          ['Tamlayan (-in)', 'bunun', 'şunun', 'onun', 'لهذا / هی ئەمە'],
        ],
        caption: b(
          'لاحظ حرف الوصل n الذي يظهر في كل الحالات: bu + n + u = bunu. هذه الـ n ليست عشوائية بل قاعدة ثابتة مع أسماء الإشارة.',
          'سەرنج بدە پیتی بەستەری n کە لە هەموو حاڵەتەکاندا دەردەکەوێت: bu + n + u = bunu. ئەم n ـە هەڕەمەکی نییە بەڵکو ڕێسایەکی جێگیرە لەگەڵ ئاماژەپێکەرەکاندا.',
        ),
      },
      {
        type: 'text',
        title: 'Yer zarfları: burada, şurada, orada',
        body: b(
          'من نفس الجذور تُشتقّ ظروف المكان: burada (هنا)، şurada (هناك القريبة)، orada (هناك البعيدة). وللاتجاه: buraya (إلى هنا)، oraya (إلى هناك). وللمصدر: buradan (من هنا)، oradan (من هناك). هذه الكلمات من أكثر ما ستستخدمه يومياً.',
          'لە هەمان ڕەگەوە هاوەڵکاری شوێن دروست دەبن: burada (لێرە)، şurada (لەوێی نزیک)، orada (لەوێی دوور). بۆ ئاراستە: buraya (بۆ ئێرە)، oraya (بۆ ئەوێ). بۆ سەرچاوە: buradan (لێرەوە)، oradan (لەوێوە).',
        ),
      },
      {
        type: 'examples',
        title: 'Yer zarfları',
        items: [
          p('Burada oturabilir miyim?', 'bu-ra-DA o-tu-ra-bi-LİR mi-yim', 'هل يمكنني الجلوس هنا؟', 'دەتوانم لێرە دابنیشم؟'),
          p('Orada ne var?', 'o-ra-DA NE VAR', 'ماذا يوجد هناك؟', 'لەوێ چی هەیە؟'),
          p('Buraya gel!', 'bu-ra-YA GEL', 'تعال إلى هنا!', 'وەرە ئێرە!'),
          p('Buradan İstanbul’a ne kadar sürer?', 'bu-ra-DAN is-tan-BUL-a ne ka-DAR sü-RER', 'كم تستغرق المسافة من هنا إلى إسطنبول؟', 'لێرەوە بۆ ئەستەنبوڵ چەند دەخایەنێت؟'),
        ],
      },
    ],
    exercises: [
      mcq(
        b('كيف تقول "هذه الكتب"؟', 'چۆن دەڵێیت "ئەم کتێبانە"؟'),
        ['bunlar kitaplar', 'bu kitaplar', 'bunlar kitap', 'bu kitap'],
        1,
        { turkishOptions: true, explain: b('كصفة إشارة لا تُجمع bu أبداً.', 'وەک ئاوەڵناوی ئاماژە، bu هەرگیز کۆ نابێت.') },
      ),
      fill('___ bana ver. (أعطني ذاك / ئەوەم بدەرێ)', 'Şunu', 'أعطني ذاك.', 'ئەوەم بدەرێ.', {
        options: ['Şu', 'Şunu', 'Şuna', 'Şunlar'],
        explain: b('المفعول به المعرّف يأخذ حالة ‎-i‎، ومع şu تصبح şunu.', 'بەرکاری ناسراو حاڵەتی ‎-i‎ وەردەگرێت، لەگەڵ şu دەبێتە şunu.'),
      }),
      translate('tr-ku', 'Bu senin mi?', ['ئەمە هی تۆیە؟', 'ئەوە هی منە؟', 'ئەمانە چین؟', 'تۆ لێرەیت؟'], 0, { pron: 'BU se-NİN mi' }),
      match(
        b('طابق كل كلمة بمعناها.', 'هەر وشەیەک لەگەڵ واتاکەیدا بگونجێنە.'),
        [
          { tr: 'burada', ar: 'هنا', ku: 'لێرە' },
          { tr: 'orada', ar: 'هناك', ku: 'لەوێ' },
          { tr: 'buraya', ar: 'إلى هنا', ku: 'بۆ ئێرە' },
          { tr: 'oradan', ar: 'من هناك', ku: 'لەوێوە' },
        ],
      ),
      order(
        b('رتّب: ما هذا؟', 'ڕێک بخە: ئەمە چییە؟'),
        'Bu ne',
        'ما هذا؟',
        'ئەمە چییە؟',
        { pron: 'BU NE', distractors: ['bunlar'] },
      ),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'a1-plural',
    level: 'a1',
    kind: 'grammar',
    order: 7,
    minutes: 15,
    title: 'Çokluk Eki: -ler / -lar',
    titleI18n: b('لاحقة الجمع', 'پاشگری کۆ'),
    objective: b(
      'أن تُجمع أي اسم تركي، وأن تعرف متى لا يُجمع رغم تعدّده.',
      'ئەوەی هەر ناوێکی تورکی کۆ بکەیتەوە، و بزانیت کەی کۆ نابێتەوە سەرەڕای زۆربوونی.',
    ),
    prerequisites: ['a1-vowel-harmony'],
    tags: ['plural', 'noun'],
    blocks: [
      {
        type: 'text',
        title: 'Tek bir ek, iki biçim',
        body: b(
          'الجمع في التركية أبسط بكثير منه في العربية: لا جمع تكسير ولا مثنّى ولا مذكّر ومؤنث. لاحقة واحدة فقط: ‎-ler‎ بعد الحركات الأمامية (e, i, ö, ü) و ‎-lar‎ بعد الخلفية (a, ı, o, u). القاعدة لا استثناء لها في الكلمات التركية الأصيلة.',
          'کۆ لە تورکیدا زۆر سادەترە: نە کۆی شکاو، نە دووانە، نە نێر و مێ. تەنها یەک پاشگر: ‎-ler‎ دوای بزوێنە پێشەوەکان (e, i, ö, ü) و ‎-lar‎ دوای دواوەکان (a, ı, o, u). ڕێساکە هیچ دەرچوونێکی نییە لە وشە ڕەسەنەکانی تورکیدا.',
        ),
      },
      {
        type: 'table',
        title: 'Örnekler',
        headers: ['Tekil', 'Son ünlü', 'Çoğul', 'العربية', 'کوردی'],
        rows: [
          ['ev', 'e', 'evler', 'بيوت', 'ماڵەکان'],
          ['kitap', 'a', 'kitaplar', 'كتب', 'کتێبەکان'],
          ['göz', 'ö', 'gözler', 'عيون', 'چاوەکان'],
          ['okul', 'u', 'okullar', 'مدارس', 'قوتابخانەکان'],
          ['şehir', 'i', 'şehirler', 'مدن', 'شارەکان'],
          ['kız', 'ı', 'kızlar', 'بنات', 'کچەکان'],
          ['gün', 'ü', 'günler', 'أيام', 'ڕۆژەکان'],
          ['soru', 'u', 'sorular', 'أسئلة', 'پرسیارەکان'],
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'En önemli kural: sayıdan sonra çoğul YOK',
        body: b(
          'هذه أشهر أخطاء الناطقين بالعربية: إذا سبق الاسمَ عددٌ أو كلمة كمّية، فالاسم يبقى مفرداً. نقول üç kitap (ثلاثة كتب) وليس "üç kitaplar". وكذلك: çok araba (سيارات كثيرة)، birkaç gün (بضعة أيام)، az insan (أناس قليلون). المنطق التركي: العدد نفسه يدلّ على الجمع، فلا حاجة لتكرار الدلالة.',
          'ئەمە بەناوبانگترین هەڵەی فێرخوازانە: ئەگەر ژمارەیەک یان وشەیەکی بڕ پێش ناوەکە کەوت، ناوەکە تاک دەمێنێتەوە. دەڵێین üç kitap (سێ کتێب) نەک "üç kitaplar". هەروەها: çok araba، birkaç gün، az insan. لۆژیکی تورکی: ژمارەکە خۆی ئاماژە بە کۆ دەکات، پێویست بە دووبارەکردنەوەی نییە.',
        ),
      },
      {
        type: 'examples',
        title: 'Doğru ve yanlış',
        items: [
          p('beş kitap (✔) — beş kitaplar (✘)', 'BEŞ ki-TAP', 'خمسة كتب', 'پێنج کتێب'),
          p('çok öğrenci (✔) — çok öğrenciler (✘)', 'ÇOK öö-ren-DJİ', 'طلاب كثيرون', 'قوتابی زۆر'),
          p('iki gün (✔) — iki günler (✘)', 'i-Kİ GÜN', 'يومان', 'دوو ڕۆژ'),
          p('Kitaplar masada. (✔ bir sayı yok)', 'ki-tap-LAR ma-sa-DA', 'الكتب على الطاولة. (لا يوجد عدد)', 'کتێبەکان لەسەر مێزەکەن.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: '-ler’in ikinci işi: "ve ailesi / ve arkadaşları"',
        body: b(
          'استخدام لطيف: عند إلحاق ‎-ler‎ باسم علم أو لقب فإنها تعني "فلان ومن معه": Aliler geldi = جاء علي وعائلته/أصحابه. Öğretmenler odası = غرفة المعلمين. وكذلك تعني الأنواع: sular (أنواع المياه)، çaylar (أكواب شاي متعددة).',
          'بەکارهێنانێکی جوان: کاتێک ‎-ler‎ بە ناوی کەس یان نازناوەوە دەلکێت واتای "فڵانە و ئەوانەی لەگەڵیەتی" دەدات: Aliler geldi = عەلی و خێزانەکەی هاتن. هەروەها واتای جۆرەکان دەدات: sular، çaylar.',
        ),
      },
      {
        type: 'examples',
        title: 'Çoğul cümlelerde',
        items: [
          p('Öğrenciler sınıfta.', 'öö-ren-dji-LER sı-nıf-TA', 'الطلاب في الصف.', 'قوتابییەکان لە پۆلەکەن.'),
          p('Bu şehirde çok park var.', 'BU şe-hir-DE ÇOK PARK VAR', 'في هذه المدينة حدائق كثيرة.', 'لەم شارەدا پارکی زۆر هەیە.'),
          p('Arkadaşlarım yarın geliyor.', 'ar-ka-daş-la-RIM ya-RIN ge-li-YOR', 'أصدقائي قادمون غداً.', 'هاوڕێکانم سبەینێ دێن.'),
          p('Dört mevsim var: ilkbahar, yaz, sonbahar, kış.', 'DÖRT mev-SİM VAR ilk-ba-HAR YAZ son-ba-HAR KIŞ', 'هناك أربعة فصول: الربيع والصيف والخريف والشتاء.', 'چوار وەرز هەیە: بەهار، هاوین، پاییز، زستان.'),
        ],
      },
    ],
    exercises: [
      mcq(
        b('أي جملة صحيحة؟', 'کام ڕستە دروستە؟'),
        ['Üç kitaplar aldım.', 'Üç kitap aldım.', 'Üçler kitap aldım.', 'Üç kitapları aldım.'],
        1,
        { turkishOptions: true, explain: b('بعد العدد يبقى الاسم مفرداً.', 'دوای ژمارە ناوەکە تاک دەمێنێتەوە.') },
      ),
      fill('Sınıfta çok ___ var.', 'öğrenci', 'يوجد طلاب كثيرون في الصف.', 'لە پۆلەکەدا قوتابی زۆر هەیە.', {
        options: ['öğrenci', 'öğrenciler', 'öğrencilar', 'öğrencis'],
        explain: b('بعد çok يبقى الاسم مفرداً.', 'دوای çok ناوەکە تاک دەمێنێتەوە.'),
      }),
      match(
        b('طابق المفرد بالجمع.', 'تاک لەگەڵ کۆدا بگونجێنە.'),
        [
          { tr: 'gün → günler', ar: 'أيام', ku: 'ڕۆژەکان' },
          { tr: 'soru → sorular', ar: 'أسئلة', ku: 'پرسیارەکان' },
          { tr: 'göz → gözler', ar: 'عيون', ku: 'چاوەکان' },
          { tr: 'kız → kızlar', ar: 'بنات', ku: 'کچەکان' },
        ],
      ),
      translate('ar-tr', 'المدن التركية جميلة.', [
        'Türk şehirler güzel.',
        'Türk şehirleri güzel.',
        'Türk şehir güzeller.',
        'Türkler şehir güzel.',
      ], 1),
      listening('Arkadaşlarım geliyor.', ['صديقي قادم.', 'أصدقائي قادمون.', 'ذهب أصدقائي.'], 1, 'ar',
        p('Arkadaşlarım geliyor.', 'ar-ka-daş-la-RIM ge-li-YOR', 'أصدقائي قادمون.', 'هاوڕێکانم دێن.')),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'a1-present-continuous',
    level: 'a1',
    kind: 'grammar',
    order: 8,
    minutes: 30,
    title: 'Şimdiki Zaman: -yor',
    titleI18n: b('المضارع المستمر', 'کاتی ئێستای بەردەوام'),
    objective: b(
      'أن تصرّف أي فعل تركي في المضارع إثباتاً ونفياً واستفهاماً.',
      'ئەوەی هەر کارێکی تورکی لە کاتی ئێستادا بگۆڕیت بە ئەرێنی و نەرێنی و پرسیاری.',
    ),
    prerequisites: ['a1-vowel-harmony', 'a1-word-order'],
    tags: ['tense', 'verb', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'İlk zaman, en kullanışlı zaman',
        body: b(
          'هذا أول زمن يتعلّمه الطالب، وهو الأكثر استعمالاً في الحديث اليومي. يعبّر عن: (1) ما يحدث الآن — "أنا آكل الآن"، (2) العادات — "أذهب إلى المدرسة كل يوم"، (3) المستقبل القريب المؤكد — "أنا قادم غداً". لاحقته ‎-yor‎ ثابتة لا تخضع للتناغم أبداً.',
          'ئەمە یەکەم کاتە کە قوتابی فێری دەبێت، و لە قسەی ڕۆژانەدا زۆرترین بەکارهێنانی هەیە. دەربڕی: (١) ئەوەی ئێستا ڕوودەدات، (٢) خوو و نەریت — "هەموو ڕۆژێک دەچمە قوتابخانە"، (٣) داهاتووی نزیکی دڵنیا. پاشگرەکەی ‎-yor‎ جێگیرە و هەرگیز ملکەچی هارمۆنی نابێت.',
        ),
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Formül',
        body: b(
          'الصيغة: جذر الفعل + حركة وصل (ı/i/u/ü) + yor + لاحقة الشخص. للحصول على الجذر احذف ‎-mek‎ أو ‎-mak‎ من المصدر: gelmek ⟵ gel. ثم: gel + i + yor + um = geliyorum (أنا آتٍ). حركة الوصل تخضع لتناغم الحركات الرباعي.',
          'فۆرمولەکە: ڕەگی کار + بزوێنی بەستەر (ı/i/u/ü) + yor + پاشگری کەس. بۆ بەدەستهێنانی ڕەگ، ‎-mek‎ یان ‎-mak‎ لە سەرچاوەکە لاببە: gelmek ⟵ gel. پاشان: gel + i + yor + um = geliyorum. بزوێنی بەستەر ملکەچی هارمۆنیای چوارانەیە.',
        ),
      },
      {
        type: 'conjugation',
        title: 'gelmek (يأتي / هاتن)',
        verb: 'gelmek',
        rows: [
          { person: 'ben', tr: 'geliyorum', pron: 'ge-li-YO-rum', ar: 'أنا آتٍ', ku: 'دێم' },
          { person: 'sen', tr: 'geliyorsun', pron: 'ge-li-YOR-sun', ar: 'أنت آتٍ', ku: 'دێیت' },
          { person: 'o', tr: 'geliyor', pron: 'ge-li-YOR', ar: 'هو آتٍ', ku: 'دێت' },
          { person: 'biz', tr: 'geliyoruz', pron: 'ge-li-YO-ruz', ar: 'نحن آتون', ku: 'دێین' },
          { person: 'siz', tr: 'geliyorsunuz', pron: 'ge-li-YOR-su-nuz', ar: 'أنتم آتون', ku: 'دێن' },
          { person: 'onlar', tr: 'geliyorlar', pron: 'ge-li-YOR-lar', ar: 'هم آتون', ku: 'دێن' },
        ],
      },
      {
        type: 'table',
        title: 'Bağlantı ünlüsü nasıl seçilir?',
        headers: ['Kökün son ünlüsü', 'Bağlantı ünlüsü', 'Fiil', 'Şimdiki zaman'],
        rows: [
          ['a, ı', 'ı', 'bak-mak', 'bakıyor'],
          ['e, i', 'i', 'gel-mek', 'geliyor'],
          ['o, u', 'u', 'kork-mak', 'korkuyor'],
          ['ö, ü', 'ü', 'gül-mek', 'gülüyor'],
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Ünlüyle biten kökler: son ünlü DÜŞER',
        body: b(
          'إذا انتهى جذر الفعل بحركة، تسقط تلك الحركة وتحلّ محلّها حركة الوصل المناسبة. bekle-mek ⟵ bekl + i + yor = bekliyor (وليس "bekleyor"). başla-mak ⟵ başl + ı + yor = başlıyor. oku-mak ⟵ ok + u + yor = okuyor. yürü-mek ⟵ yür + ü + yor = yürüyor. هذه من أكثر مواضع الخطأ عند المبتدئين.',
          'ئەگەر ڕەگی کار بە بزوێن کۆتایی هات، ئەو بزوێنە دەکەوێت و بزوێنی بەستەری گونجاو جێی دەگرێتەوە. bekle-mek ⟵ bekliyor (نەک "bekleyor"). başla-mak ⟵ başlıyor. oku-mak ⟵ okuyor. yürü-mek ⟵ yürüyor. ئەمە یەکێکە لە زۆرترین شوێنی هەڵە بۆ سەرەتاییەکان.',
        ),
      },
      {
        type: 'examples',
        title: 'Ünlüyle biten fiiller',
        items: [
          p('bekle-mek → bekliyorum', 'bek-li-YO-rum', 'أنا أنتظر', 'چاوەڕێ دەکەم'),
          p('başla-mak → başlıyor', 'baş-lı-YOR', 'يبدأ', 'دەست پێدەکات'),
          p('oku-mak → okuyorum', 'o-ku-YO-rum', 'أنا أقرأ', 'دەخوێنمەوە'),
          p('yürü-mek → yürüyoruz', 'yü-rü-YO-ruz', 'نحن نمشي', 'پیاسە دەکەین'),
          p('anla-mak → anlıyorum', 'an-lı-YO-rum', 'أنا أفهم', 'تێدەگەم'),
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Beş düzensiz fiil',
        body: b(
          'خمسة أفعال شاذة يجب حفظها: git-mek ⟵ gidiyor (تتحول t إلى d)، et-mek ⟵ ediyor، de-mek ⟵ diyor، ye-mek ⟵ yiyor، tat-mak ⟵ tadıyor. لاحظ أن de-mek و ye-mek تغيّران حركتهما إلى i.',
          'پێنج کاری ناڕێک کە دەبێت لەبەریان بکەیت: git-mek ⟵ gidiyor (t دەبێتە d)، et-mek ⟵ ediyor، de-mek ⟵ diyor، ye-mek ⟵ yiyor، tat-mak ⟵ tadıyor.',
        ),
      },
      {
        type: 'text',
        title: 'Olumsuz: -mi / -mı / -mu / -mü + yor',
        body: b(
          'للنفي ندخل لاحقة النفي بين الجذر و ‎-yor‎، وهي رباعية الشكل: gel + mi + yor + um = gelmiyorum (لا آتي). bak + mı + yor = bakmıyor. oku + mu + yor = okumuyor. gül + mü + yor = gülmüyor. انتبه: حركة النفي هي التي تحلّ محلّ حركة الوصل، فلا تجتمعان.',
          'بۆ نەفی، پاشگری نەفی دەخەینە نێوان ڕەگ و ‎-yor‎، چوارشێوەیە: gelmiyorum (نایەم). bakmıyor. okumuyor. gülmüyor. ئاگاداربە: بزوێنی نەفی جێی بزوێنی بەستەر دەگرێتەوە، هەردووکیان پێکەوە نایەن.',
        ),
      },
      {
        type: 'conjugation',
        title: 'Olumsuz: anlamak (يفهم / تێگەیشتن)',
        verb: 'anlamamak',
        rows: [
          { person: 'ben', tr: 'anlamıyorum', pron: 'an-la-mı-YO-rum', ar: 'لا أفهم', ku: 'تێناگەم' },
          { person: 'sen', tr: 'anlamıyorsun', pron: 'an-la-mı-YOR-sun', ar: 'لا تفهم', ku: 'تێناگەیت' },
          { person: 'o', tr: 'anlamıyor', pron: 'an-la-mı-YOR', ar: 'لا يفهم', ku: 'تێناگات' },
          { person: 'biz', tr: 'anlamıyoruz', pron: 'an-la-mı-YO-ruz', ar: 'لا نفهم', ku: 'تێناگەین' },
          { person: 'siz', tr: 'anlamıyorsunuz', pron: 'an-la-mı-YOR-su-nuz', ar: 'لا تفهمون', ku: 'تێناگەن' },
          { person: 'onlar', tr: 'anlamıyorlar', pron: 'an-la-mı-YOR-lar', ar: 'لا يفهمون', ku: 'تێناگەن' },
        ],
      },
      {
        type: 'examples',
        title: 'Günlük cümleler',
        items: [
          p('Şu anda ders çalışıyorum.', 'ŞU an-DA DERS ça-lı-şı-YO-rum', 'أنا أدرس الآن.', 'ئێستا وانە دەخوێنم.'),
          p('Her sabah kahve içiyorum.', 'her sa-BAH kah-VE i-çi-YO-rum', 'أشرب القهوة كل صباح.', 'هەموو بەیانییەک قاوە دەخۆمەوە.'),
          p('Ne yapıyorsun?', 'NE ya-pı-YOR-sun', 'ماذا تفعل؟', 'چی دەکەیت؟'),
          p('Türkçe öğreniyoruz.', 'türk-ÇE öö-re-ni-YO-ruz', 'نحن نتعلّم التركية.', 'فێری تورکی دەبین.'),
          p('Anlamıyorum, tekrar söyler misiniz?', 'an-la-mı-YO-rum tek-RAR söy-LER mi-si-niz', 'لا أفهم، هل تعيد من فضلك؟', 'تێناگەم، دووبارەی دەکەیتەوە؟'),
          p('Yarın İstanbul’a gidiyorum.', 'ya-RIN is-tan-BUL-a gi-di-YO-rum', 'سأذهب غداً إلى إسطنبول.', 'سبەینێ دەچمە ئەستەنبوڵ.'),
        ],
      },
      {
        type: 'text',
        title: 'Soru: fiil + soru eki + kişi eki',
        body: b(
          'في السؤال تأتي أداة الاستفهام mu (وهي دائماً mu لأن ‎-yor‎ تنتهي بحركة o) منفصلة بعد الفعل، ثم تحمل لاحقة الشخص: Geliyor musun? (هل أنت آتٍ؟) Çalışıyor muyuz? (هل نحن نعمل؟) Anlıyor musunuz? (هل تفهمون؟)',
          'لە پرسیاردا ئامرازی پرسیاری mu (هەمیشە mu ـە چونکە ‎-yor‎ بە بزوێنی o کۆتایی دێت) جیا دوای کار دێت، پاشان پاشگری کەس هەڵدەگرێت: Geliyor musun? Çalışıyor muyuz? Anlıyor musunuz?',
        ),
      },
    ],
    exercises: [
      fill('Ben her gün Türkçe ___. (çalışmak)', 'çalışıyorum', 'أدرس التركية كل يوم.', 'هەموو ڕۆژێک تورکی دەخوێنم.', {
        options: ['çalışıyorum', 'çalışyorum', 'çalışiyorum', 'çalışuyorum'],
        explain: b('آخر حركة في الجذر çalış هي ı ⟵ حركة الوصل ı.', 'دوا بزوێنی ڕەگی çalış، ı یە ⟵ بزوێنی بەستەر ı.'),
      }),
      mcq(
        b('ما تصريف "beklemek" مع "ben"؟', 'گۆڕانی "beklemek" لەگەڵ "ben" چییە؟'),
        ['bekleyorum', 'bekliyorum', 'beklıyorum', 'bekluyorum'],
        1,
        {
          turkishOptions: true,
          explain: b('الجذر bekle ينتهي بحركة، فتسقط e وتحل i.', 'ڕەگی bekle بە بزوێن کۆتایی دێت، e دەکەوێت و i جێی دەگرێتەوە.'),
        },
      ),
      mcq(
        b('ما نفي "okuyorum"؟', 'نەفیی "okuyorum" چییە؟'),
        ['okumıyorum', 'okumuyorum', 'okumiyorum', 'okuyormuyum'],
        1,
        { turkishOptions: true, explain: b('بعد u تأتي حركة النفي mu.', 'دوای u بزوێنی نەفی mu دێت.') },
      ),
      mcq(
        b('كيف تصرّف "gitmek" مع "o"؟', 'چۆن "gitmek" لەگەڵ "o" دەگۆڕیت؟'),
        ['gitiyor', 'gidiyor', 'gityor', 'gidyor'],
        1,
        { turkishOptions: true, explain: b('فعل شاذ: t تصير d بين حركتين.', 'کارێکی ناڕێک: t لە نێوان دوو بزوێندا دەبێتە d.') },
      ),
      order(
        b('رتّب: ماذا تفعل الآن؟', 'ڕێک بخە: ئێستا چی دەکەیت؟'),
        'Şu anda ne yapıyorsun',
        'ماذا تفعل الآن؟',
        'ئێستا چی دەکەیت؟',
        { pron: 'ŞU an-DA NE ya-pı-YOR-sun' },
      ),
      translate('ar-tr', 'نحن لا نفهم.', ['Anlamıyoruz.', 'Anlamıyorsunuz.', 'Anlıyoruz.', 'Anlamıyorlar.'], 0),
      listening('Kahve içiyor musun?', ['هل تشرب القهوة؟', 'أنا أشرب القهوة.', 'لا أشرب القهوة.'], 0, 'ar',
        p('Kahve içiyor musun?', 'kah-VE i-çi-YOR mu-sun', 'هل تشرب القهوة؟', 'قاوە دەخۆیتەوە؟')),
      speak('Merhaba, ben Türkçe öğreniyorum.', 'mer-ha-BA BEN türk-ÇE öö-re-ni-YO-rum', 'مرحباً، أنا أتعلّم التركية.', 'سڵاو، من فێری تورکی دەبم.'),
    ],
  },
];
