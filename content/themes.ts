import type { ThemeSection } from '@/types/content';
import { b } from './shared/helpers';

/**
 * Thematic sections.
 *
 * A theme is a VIEW over vocabulary that already exists, not a second copy of
 * it. Every entry below names a Turkish word and nothing else — the resolver in
 * `content/index.ts` attaches the real `VocabItem`, with its verified
 * pronunciation, Arabic, Sorani, example sentence and SRS card. So a theme
 * cannot drift away from the word list, because there is nothing in here to
 * drift, and a word shown in a theme is the same card the student reviews.
 *
 * What IS authored here is the part a word list cannot give you: the order,
 * the grouping, and the one paragraph explaining why the theme is worth its own
 * section for someone who already speaks Arabic or Kurdish. `amca` and `dayı`
 * are not two words to memorise for such a student — they are عمّ and خال,
 * already known, needing only a new label. Saying so is the whole value of
 * grouping them.
 *
 * The opposites section is the exception that proves the rule: its groups
 * declare `fromOpposites` instead of a word list, and are filled from every
 * vocabulary item that declares an antonym. Authoring those pairs by hand would
 * have duplicated data the words already carry.
 */
export const THEMES: ThemeSection[] = [
  /* ---------------------------------------------------------------- */
  {
    id: 'calendar',
    title: 'Günler ve Aylar',
    label: b('أيام الأسبوع والشهور', 'ڕۆژان و مانگەکان'),
    icon: 'CalendarDays',
    intro: b(
      'خمسة من أسماء الشهور التركية هي نفسها المستعملة في العراق وبلاد الشام: Şubat شباط، Nisan نيسان، Haziran حزيران، Temmuz تموز، Eylül أيلول. أنت تعرفها أصلاً، ولا يبقى عليك إلا نطقها. وأيام الأسبوع مبنية على منطق ظاهر: Pazar تعني «السوق»، و«ertesi» تعني «اليوم التالي» — فـ Pazartesi هو اليوم الذي يلي Pazar، و Cumartesi هو اليوم الذي يلي Cuma.',
      'پێنج لە ناوی مانگە تورکییەکان هەمان ئەوانەن کە لە عێراق و شامدا بەکاردێن: Şubat، Nisan، Haziran، Temmuz، Eylül. ئێستاش دەیانناسیت. ڕۆژەکانی هەفتەش لۆژیکێکی ڕوونیان هەیە: Pazar واتە «بازاڕ»، و «ertesi» واتە «ڕۆژی دوایی» — بۆیە Pazartesi ئەو ڕۆژەیە کە دوای Pazar دێت، و Cumartesi ئەوەی دوای Cuma.',
    ),
    groups: [
      {
        id: 'days',
        title: 'Haftanın günleri',
        label: b('أيام الأسبوع', 'ڕۆژانی هەفتە'),
        note: b(
          'يبدأ الأسبوع التركي بـ Pazartesi (الاثنين) وينتهي بـ Pazar (الأحد). وحين تقول «يوم الاثنين» تضيف النهاية: Pazartesi günü، أو pazartesileri للعادة المتكرّرة.',
          'هەفتەی تورکی بە Pazartesi (دووشەممە) دەست پێدەکات و بە Pazar (یەکشەممە) کۆتایی دێت. بۆ «ڕۆژی دووشەممە» دەڵێیت Pazartesi günü.',
        ),
        words: [
          { word: 'Pazartesi' }, { word: 'Salı' }, { word: 'Çarşamba' },
          { word: 'Perşembe' }, { word: 'Cuma' }, { word: 'Cumartesi' },
          { word: 'Pazar' },
        ],
      },
      {
        id: 'week',
        title: 'Gün, hafta, hafta sonu',
        label: b('اليوم والأسبوع وعطلة نهايته', 'ڕۆژ، هەفتە و کۆتایی هەفتە'),
        words: [
          { word: 'gün' }, { word: 'hafta' }, { word: 'hafta içi' }, { word: 'hafta sonu' },
        ],
      },
      {
        id: 'months',
        title: 'Aylar',
        label: b('الشهور', 'مانگەکان'),
        note: b(
          'الأشهر الخمسة المألوفة لك هي Şubat وNisan وHaziran وTemmuz وEylül. أما Ocak وMart وMayıs وAğustos وEkim وKasım وAralık فجديدة عليك، وهي وحدها ما يحتاج حفظاً.',
          'ئەو پێنج مانگەی دەیانناسیت: Şubat، Nisan، Haziran، Temmuz، Eylül. تەنها Ocak، Mart، Mayıs، Ağustos، Ekim، Kasım و Aralık نوێن بۆت.',
        ),
        words: [
          { word: 'Ocak' }, { word: 'Şubat' }, { word: 'Mart' }, { word: 'Nisan' },
          { word: 'Mayıs' }, { word: 'Haziran' }, { word: 'Temmuz' }, { word: 'Ağustos' },
          { word: 'Eylül' }, { word: 'Ekim' }, { word: 'Kasım' }, { word: 'Aralık' },
        ],
      },
      {
        id: 'seasons',
        title: 'Mevsimler',
        label: b('الفصول', 'وەرزەکان'),
        words: [
          { word: 'mevsim' }, { word: 'ilkbahar' }, { word: 'yaz' },
          { word: 'sonbahar' }, { word: 'kış' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'colors',
    title: 'Renkler',
    label: b('الألوان', 'ڕەنگەکان'),
    icon: 'Palette',
    intro: b(
      'الصفة تسبق الاسم دائماً في التركية، بلا استثناء: kırmızı araba «سيارة حمراء»، وليس araba kırmızı. ولاحظ بنية kahverengi: هي kahve «قهوة» + rengi «لونُه»، أي «لون القهوة» حرفياً — وهو نمط حيّ تستطيع أن تبني عليه: gül rengi، portakal rengi. وللسؤال عن اللون تقول: Ne renk? «ما اللون؟»',
      'ئاوەڵناو هەمیشە پێش ناو دێت، بێ جیاوازی: kırmızı araba، نەک araba kırmızı. سەیری پێکهاتەی kahverengi بکە: kahve «قاوە» + rengi «ڕەنگی»، واتە «ڕەنگی قاوە» — ئەمە شێوازێکی زیندووە: gül rengi، portakal rengi. بۆ پرسیار دەڵێیت: Ne renk?',
    ),
    groups: [
      {
        id: 'primary',
        title: 'Ana renkler',
        label: b('الألوان الأساسية', 'ڕەنگە سەرەکییەکان'),
        words: [
          { word: 'renk' },
          { word: 'kırmızı', swatch: '#DC2626' },
          { word: 'mavi', swatch: '#2563EB' },
          { word: 'sarı', swatch: '#EAB308' },
          { word: 'yeşil', swatch: '#16A34A' },
        ],
      },
      {
        id: 'neutral',
        title: 'Siyah, beyaz ve arası',
        label: b('الأسود والأبيض وما بينهما', 'ڕەش، سپی و نێوانیان'),
        words: [
          { word: 'siyah', swatch: '#171717' },
          { word: 'beyaz', swatch: '#F5F5F4' },
          { word: 'gri', swatch: '#9CA3AF' },
          {
            word: 'kahverengi',
            swatch: '#78350F',
            note: b(
              'حرفياً «لون القهوة»: kahve + rengi.',
              'واتە «ڕەنگی قاوە»: kahve + rengi.',
            ),
          },
        ],
      },
      {
        id: 'more',
        title: 'Diğer renkler',
        label: b('ألوان أخرى', 'ڕەنگی تر'),
        words: [
          { word: 'turuncu', swatch: '#EA580C' },
          { word: 'mor', swatch: '#7C3AED' },
          { word: 'pembe', swatch: '#EC4899' },
          { word: 'lacivert', swatch: '#1E3A8A' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'body',
    title: 'Vücut',
    label: b('أعضاء الجسم', 'ئەندامانی لەش'),
    icon: 'PersonStanding',
    intro: b(
      'أعضاء الجسم في التركية لا تكاد تُذكر بلا لاحقة ملكية. لا تقل baş ağrıyor بل başım ağrıyor «رأسي يؤلمني» — اللاحقة هنا ليست زينة، وبدونها تبدو الجملة ناقصة. ونقطة ثانية: العربية تملك مثنّى (يدان، عينان)، والتركية لا تملكه — الجمع واحد فقط: eller، gözler.',
      'ئەندامانی لەش لە تورکیدا بەبێ پاشگری خاوەندارێتی بەکارنایەن. مەڵێ baş ağrıyor بەڵکو başım ağrıyor «سەرم دەئێشێت». خاڵی دووەم: عەرەبی دووانە هەیە (يدان، عينان)، تورکی نایەتی — تەنها کۆ هەیە: eller، gözler.',
    ),
    groups: [
      {
        id: 'head',
        title: 'Baş ve yüz',
        label: b('الرأس والوجه', 'سەر و ڕوو'),
        words: [
          { word: 'baş' }, { word: 'saç' }, { word: 'alın' },
          { word: 'yüz', category: 'body' },
          { word: 'göz' }, { word: 'kaş' }, { word: 'kirpik' }, { word: 'kulak' },
          { word: 'burun' }, { word: 'yanak' }, { word: 'ağız' }, { word: 'dudak' },
          { word: 'diş' }, { word: 'dil' }, { word: 'çene' },
        ],
      },
      {
        id: 'torso',
        title: 'Gövde',
        label: b('الجذع', 'تەن'),
        words: [
          { word: 'vücut' }, { word: 'boyun' }, { word: 'boğaz' }, { word: 'omuz' },
          { word: 'göğüs' }, { word: 'sırt' }, { word: 'karın' }, { word: 'bel' },
        ],
      },
      {
        id: 'limbs',
        title: 'Kollar ve bacaklar',
        label: b('الأطراف: اليدان والقدمان', 'دەست و قاچەکان'),
        words: [
          { word: 'kol' }, { word: 'dirsek' }, { word: 'bilek' }, { word: 'el' },
          { word: 'parmak' }, { word: 'tırnak' }, { word: 'bacak' }, { word: 'diz' },
          { word: 'ayak' }, { word: 'topuk' },
        ],
      },
      {
        id: 'inner',
        title: 'İç organlar',
        label: b('الأعضاء الداخلية', 'ئەندامە ناوەکییەکان'),
        note: b(
          'هذه المجموعة مستوى B2 وتلزم عند الطبيب أكثر مما تلزم في الحديث اليومي.',
          'ئەم کۆمەڵە ئاستی B2ـیە و زیاتر لای پزیشک پێویستە نەک لە قسەی ڕۆژانەدا.',
        ),
        words: [
          { word: 'kalp' }, { word: 'akciğer' }, { word: 'karaciğer' }, { word: 'böbrek' },
          { word: 'kas' }, { word: 'damar' }, { word: 'sinir' }, { word: 'iskelet' },
          { word: 'doku' }, { word: 'organ' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'family',
    title: 'Aile',
    label: b('العائلة', 'خێزان'),
    icon: 'Users',
    intro: b(
      'هنا التركية تشبهك تماماً. هي تفصل بين أقارب الأب وأقارب الأم كما تفعل العربية بالضبط: amca = عمّ، dayı = خال، hala = عمّة، teyze = خالة. أربع كلمات مقابل أربع، بلا خسارة ولا التباس — وهذا ما يعجز عنه الإنجليزي الذي يقول uncle للاثنين. في المقابل هناك فرق واحد عليك الانتباه له: kardeş لا تحمل جنساً، فهي الأخ والأخت معاً؛ وإن لزم التحديد قلت erkek kardeş أو kız kardeş. أما abi وabla فتعنيان الأخ الأكبر والأخت الكبرى، وتُستعملان أيضاً لمخاطبة من هو أكبر منك سنّاً ولو كان غريباً.',
      'لێرەدا تورکی تەواو لە تۆ دەچێت. جیاوازی دەکات لە نێوان خزمانی باوک و خزمانی دایک: amca = مام، dayı = خاڵ، hala = پوورە (خوشکی باوک)، teyze = پوور (خوشکی دایک). یەک جیاوازی هەیە کە دەبێت ئاگاداری بیت: kardeş ڕەگەزی نییە و هەردوو «برا» و «خوشک» دەگرێتەوە؛ بۆ دیاریکردن دەڵێیت erkek kardeş یان kız kardeş. abi و abla واتە برای گەورە و خوشکی گەورە، و بۆ بانگکردنی کەسی لە خۆت گەورەتریش بەکاردێن، تەنانەت ئەگەر نامۆش بێت.',
    ),
    groups: [
      {
        id: 'core',
        title: 'Çekirdek aile',
        label: b('الأسرة المباشرة', 'خێزانی سەرەکی'),
        words: [
          { word: 'aile' }, { word: 'anne' }, { word: 'baba' },
          { word: 'çocuk' }, { word: 'oğul' }, { word: 'kız' },
        ],
      },
      {
        id: 'siblings',
        title: 'Kardeşler',
        label: b('الإخوة', 'خوشک و برا'),
        note: b(
          'kardeş لا جنس لها. وabi وabla تحملان معنى «الأكبر» داخلهما، فلا حاجة لإضافة كلمة أخرى.',
          'kardeş ڕەگەزی نییە. abi و abla واتای «گەورەتر»یان لەخۆدا هەڵگرتووە.',
        ),
        words: [{ word: 'kardeş' }, { word: 'abi' }, { word: 'abla' }],
      },
      {
        id: 'uncles',
        title: 'Amca, dayı, hala, teyze',
        label: b('العمّ والخال والعمّة والخالة', 'مام، خاڵ، پوورە و پوور'),
        note: b(
          'الفصل بين جهة الأب وجهة الأم موجود في التركية والعربية والكردية معاً. احفظ الأربع مقترنة بما تعرفه: amca–عمّ، dayı–خال، hala–عمّة، teyze–خالة.',
          'جیاکردنەوەی لای باوک و لای دایک لە هەر سێ زماندا هەیە. چوارەکە بە جووت فێربە: amca–مام، dayı–خاڵ.',
        ),
        words: [
          { word: 'amca' }, { word: 'dayı' }, { word: 'hala' }, { word: 'teyze' },
        ],
      },
      {
        id: 'elders',
        title: 'Büyükler ve torunlar',
        label: b('الأجداد والأحفاد', 'باپیران و نەوەکان'),
        words: [{ word: 'dede' }, { word: 'büyükanne' }, { word: 'torun' }],
      },
      {
        id: 'marriage',
        title: 'Evlilik ve akrabalık',
        label: b('الزواج والقرابة', 'هاوسەرگیری و خزمایەتی'),
        note: b(
          'eş كلمة محايدة تصلح للزوج والزوجة معاً، وهي الأكثر تهذيباً في الحديث الرسمي.',
          'eş وشەیەکی بێلایەنە و بۆ هاوسەری نێر و مێ بەکاردێت.',
        ),
        words: [
          { word: 'eş' }, { word: 'koca' }, { word: 'akraba' }, { word: 'yeğen' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'directions',
    title: 'Yönler',
    label: b('الاتجاهات', 'ئاراستەکان'),
    icon: 'Compass',
    intro: b(
      'كلمات الاتجاه في التركية أسماء، لا حروف جرّ، والنهاية هي التي تحمل المعنى: sağa «إلى اليمين»، sağda «على اليمين»، sağdan «من جهة اليمين». كلمة واحدة وثلاث وظائف. ومع كلمات الموضع يأتي ترتيب ثابت: المضاف إليه أولاً، ثم الكلمة، ثم النهاية — evin önünde «أمام البيت»، حرفياً «البيتِ أمامِـهِ في». اقرأها من اليمين إلى اليسار فتستقيم لك.',
      'وشەکانی ئاراستە لە تورکیدا ناون، نەک ئامرازی جێ، و کۆتاییەکە واتاکە هەڵدەگرێت: sağa «بەرەو ڕاست»، sağda «لە لای ڕاست»، sağdan «لە لای ڕاستەوە». یەک وشە و سێ ئەرک. لەگەڵ وشەکانی شوێندا ڕیزبەندییەکی جێگیر هەیە: خاوەن یەکەم، پاشان وشەکە، پاشان کۆتایی — evin önünde «لە بەردەم ماڵەکە».',
    ),
    groups: [
      {
        id: 'compass',
        title: 'Pusula',
        label: b('الجهات الأربع', 'چوار لا'),
        words: [
          { word: 'kuzey' }, { word: 'güney' }, { word: 'doğu' }, { word: 'batı' },
        ],
      },
      {
        id: 'sides',
        title: 'Sağ, sol ve yön',
        label: b('اليمين واليسار والحركة', 'ڕاست، چەپ و جوڵە'),
        note: b(
          'جرّب النهايات الثلاث على كل كلمة هنا: sağa / sağda / sağdan، yukarıya / yukarıda / yukarıdan.',
          'هەر سێ کۆتایی لەسەر هەموو وشەیەک تاقی بکەرەوە: sağa / sağda / sağdan.',
        ),
        words: [
          { word: 'sağ' }, { word: 'sol' }, { word: 'ileri' },
          { word: 'geri' }, { word: 'yukarı' }, { word: 'aşağı' },
        ],
      },
      {
        id: 'position',
        title: 'Konum bildiren kelimeler',
        label: b('كلمات الموضع', 'وشەکانی شوێن'),
        note: b(
          'كلها تأخذ الشكل نفسه: masanın üstünde، evin önünde، çantanın içinde.',
          'هەموویان هەمان شێوە وەردەگرن: masanın üstünde، evin önünde.',
        ),
        words: [
          { word: 'ön' }, { word: 'arka' }, { word: 'üst' }, { word: 'alt' },
          { word: 'iç' }, { word: 'dış' }, { word: 'yan' }, { word: 'orta' },
        ],
      },
      {
        id: 'route',
        title: 'Yol tarifi',
        label: b('وصف الطريق', 'ڕێنمایی ڕێگا'),
        words: [
          { word: 'sapmak' }, { word: 'varmak' }, { word: 'kavşak' }, { word: 'adres' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'produce',
    title: 'Meyve ve Sebzeler',
    label: b('الفواكه والخضار', 'میوە و سەوزە'),
    icon: 'Apple',
    intro: b(
      'هذه قائمة السوق، وهي أوّل ما تحتاجه فعلاً. قاعدتان تكفيان للشراء: التركية لا تُجمع الاسم بعد العدد — تقول iki elma «تفاحتان» ولا تقول iki elmalar؛ والوزن يُقال بالكيلو مباشرة: bir kilo domates «كيلو طماطم». وحين تسأل عن السعر: Kaç para? أو Ne kadar?',
      'ئەمە لیستی بازاڕە. دوو یاسا بەسن بۆ کڕین: تورکی دوای ژمارە کۆ بەکارناهێنێت — دەڵێیت iki elma، نەک iki elmalar؛ و کێش ڕاستەوخۆ بە کیلۆ دەوترێت: bir kilo domates. بۆ پرسیاری نرخ: Kaç para? یان Ne kadar?',
    ),
    groups: [
      {
        id: 'fruit',
        title: 'Meyveler',
        label: b('الفواكه', 'میوەکان'),
        words: [
          { word: 'meyve' }, { word: 'elma' }, { word: 'portakal' }, { word: 'muz' },
          { word: 'karpuz' }, { word: 'kavun' }, { word: 'üzüm' }, { word: 'kiraz' },
          { word: 'vişne' }, { word: 'şeftali' }, { word: 'kayısı' }, { word: 'erik' },
          { word: 'incir' }, { word: 'limon' },
        ],
      },
      {
        id: 'veg',
        title: 'Sebzeler',
        label: b('الخضار', 'سەوزەکان'),
        words: [
          { word: 'sebze' }, { word: 'domates' }, { word: 'salatalık' }, { word: 'soğan' },
          { word: 'sarımsak' }, { word: 'patates' }, { word: 'havuç' }, { word: 'ıspanak' },
          { word: 'marul' }, { word: 'turp' }, { word: 'patlıcan' }, { word: 'kabak' },
          { word: 'biber' }, { word: 'maydanoz' }, { word: 'nane' },
        ],
      },
      {
        id: 'pulses',
        title: 'Bakliyat ve tahıl',
        label: b('البقوليات والحبوب', 'حەبوبات و دانەوێڵە'),
        words: [
          { word: 'mercimek' }, { word: 'nohut' }, { word: 'fasulye' },
          { word: 'bulgur' }, { word: 'pirinç' },
        ],
      },
      {
        id: 'nuts',
        title: 'Kuruyemiş ve zeytin',
        label: b('المكسّرات والزيتون', 'چەرەز و زەیتوون'),
        words: [{ word: 'ceviz' }, { word: 'fıstık' }, { word: 'zeytin' }],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'animals',
    title: 'Hayvanlar',
    label: b('الحيوانات', 'ئاژەڵەکان'),
    icon: 'Cat',
    intro: b(
      'كلمة hayvan نفسها عربية الأصل (حيوان)، وهي مدوّنة في قسم الكلمات عربية الأصل بجذرها. والتركية لا تعرف الجنس النحوي إطلاقاً: kedi هي القطّ والقطّة معاً، ولا مؤنّث لها؛ وإن لزم التحديد أضفت erkek «ذكر» أو dişi «أنثى» قبل الاسم. هذا يريحك من نصف ما يتعبك في العربية.',
      'وشەی hayvan خۆی ڕەگی عەرەبییە (حيوان) و لە بەشی وشە عەرەبی ڕەگەکاندا تۆمارکراوە. تورکی هیچ ڕەگەزێکی ڕێزمانی نییە: kedi هەردوو نێر و مێ دەگرێتەوە؛ بۆ دیاریکردن erkek یان dişi دەخەیتە پێشییەوە.',
    ),
    groups: [
      {
        id: 'pets',
        title: 'Evcil hayvanlar',
        label: b('الحيوانات الأليفة', 'ئاژەڵە ماڵییەکان'),
        words: [
          { word: 'hayvan' }, { word: 'kedi' }, { word: 'köpek' }, { word: 'tavşan' },
        ],
      },
      {
        id: 'farm',
        title: 'Çiftlik hayvanları',
        label: b('حيوانات المزرعة', 'ئاژەڵی کێڵگە'),
        words: [
          { word: 'at' }, { word: 'inek' }, { word: 'koyun' },
          { word: 'keçi' }, { word: 'tavuk' },
        ],
      },
      {
        id: 'wild',
        title: 'Yabani hayvanlar',
        label: b('الحيوانات البرّية', 'ئاژەڵە کێوییەکان'),
        words: [
          { word: 'aslan' }, { word: 'kurt' }, { word: 'tilki' }, { word: 'ayı' },
          { word: 'fil' }, { word: 'maymun' }, { word: 'yılan' }, { word: 'kaplumbağa' },
        ],
      },
      {
        id: 'birds',
        title: 'Kuşlar',
        label: b('الطيور', 'باڵندەکان'),
        words: [
          { word: 'kuş' }, { word: 'güvercin' }, { word: 'karga' }, { word: 'papağan' },
        ],
      },
      {
        id: 'small',
        title: 'Böcekler ve küçük hayvanlar',
        label: b('الحشرات والحيوانات الصغيرة', 'مێروو و ئاژەڵی بچووک'),
        words: [
          { word: 'arı' }, { word: 'kelebek' }, { word: 'karınca' },
          { word: 'sinek' }, { word: 'örümcek' }, { word: 'fare' },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'opposites',
    title: 'Zıt Anlamlılar',
    label: b('الأضداد', 'دژوواتەکان'),
    icon: 'ArrowLeftRight',
    intro: b(
      'أسرع طريق لمضاعفة مفرداتك: تعلّم الكلمة وضدّها معاً، لا واحدة ثم الأخرى بعد شهر. ولاحظ في قسم الأفعال نمطاً يتكرّر: كثير منها يأتي في زوجين لا زوج واحد. dolmak «يمتلئ» و boşalmak «يفرغ» بلا فاعل، مقابل doldurmak «يملأ» و boşaltmak «يفرّغ» بفاعل — واللاحقة -dır/-t هي التي تضيف الفاعل. من عرف هذا لم يعد يحفظ أربعة أفعال، بل اثنين وقاعدة.',
      'خێراترین ڕێگا بۆ دووقات کردنی وشەکانت: وشەکە و دژەکەی پێکەوە فێربە. لە بەشی کارەکاندا شێوازێک دووبارە دەبێتەوە: زۆربەیان بە دوو جووت دێن نەک یەک. dolmak «پڕ دەبێت» و boşalmak «چۆڵ دەبێت» بێ کردار، بەرامبەر doldurmak «پڕ دەکات» و boşaltmak «چۆڵ دەکات» بە کردار — پاشگری -dır/-t کردارەکە زیاد دەکات.',
    ),
    groups: [
      {
        id: 'adjectives',
        title: 'Sıfatlar',
        label: b('الصفات', 'ئاوەڵناوەکان'),
        fromOpposites: ['adjective'],
      },
      {
        id: 'verbs',
        title: 'Fiiller',
        label: b('الأفعال', 'کارەکان'),
        note: b(
          'ابحث عن الرباعيّات: yanmak / sönmek بلا فاعل، yakmak / söndürmek بفاعل.',
          'بەدوای چوارەکاندا بگەڕێ: yanmak / sönmek بێ کردار، yakmak / söndürmek بە کردار.',
        ),
        fromOpposites: ['verb'],
      },
      {
        id: 'nouns',
        title: 'İsimler',
        label: b('الأسماء', 'ناوەکان'),
        fromOpposites: ['noun'],
      },
      {
        id: 'adverbs',
        title: 'Zarflar',
        label: b('الظروف', 'ئاوەڵکارەکان'),
        fromOpposites: ['adverb'],
      },
    ],
  },
];
