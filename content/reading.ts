import type { Lesson } from '@/types/content';
import { b, mcq, order, translate } from './shared/helpers';

/**
 * Graded reading passages, B1 to C1+.
 *
 * Each one is a normal `Lesson` of kind `reading`, so it appears in the level
 * dashboard, the search index and the progress maths with no special casing.
 * The text lives in a `passage` block whose paragraphs are individually
 * speakable, so the same material doubles as listening practice.
 *
 * Difficulty is controlled deliberately:
 *   B1  - past narrative, everyday topic, ~110 words
 *   B2  - argument with connectives, abstract topic, ~170 words
 *   C1  - academic register, passive voice, nominalisation, ~200 words
 *   C1+ - literary/essayistic, idiomatic, ~200 words
 */
export const READING_LESSONS: Lesson[] = [
  {
    id: 'read-b1-istanbul',
    level: 'b1',
    kind: 'reading',
    order: 30,
    minutes: 20,
    title: 'İstanbul’da İlk Günüm',
    titleI18n: b('يومي الأول في إسطنبول', 'یەکەم ڕۆژم لە ئەستەنبوڵ'),
    objective: b(
      'أن تقرأ سرداً بسيطاً في الماضي وتستخرج منه المعلومات الأساسية.',
      'ئەوەی گێڕانەوەیەکی سادە بە کاتی ڕابردوو بخوێنیتەوە و زانیارییە سەرەکییەکانی لێ دەربهێنیت.',
    ),
    tags: ['reading', 'narrative'],
    blocks: [
      {
        type: 'passage',
        title: 'İstanbul’da İlk Günüm',
        intro: b(
          'نصّ سردي بصيغة الماضي. اقرأه أولاً دون ترجمة، ثم أظهر الترجمة وتحقّق من فهمك.',
          'دەقێکی گێڕانەوەیی بە کاتی ڕابردوو. سەرەتا بەبێ وەرگێڕان بیخوێنەوە، پاشان وەرگێڕان پیشان بدە و تێگەیشتنت تاقی بکەوە.',
        ),
        paragraphs: [
          {
            tr: 'Geçen yaz İstanbul’a ilk kez gittim. Uçak sabah erkenden indi ve havalimanından şehir merkezine metroyla gittim. Yol yaklaşık bir saat sürdü.',
            ar: 'الصيف الماضي ذهبت إلى إسطنبول لأول مرة. هبطت الطائرة باكراً في الصباح وذهبت من المطار إلى مركز المدينة بالمترو. استغرق الطريق نحو ساعة.',
            ku: 'هاوینی ڕابردوو یەکەم جار چوومە ئەستەنبوڵ. فڕۆکەکە بەیانی زوو نیشتەوە و لە فڕۆکەخانەوە بە مێترۆ چوومە ناوەندی شار. ڕێگاکە نزیکەی کاتژمێرێکی خایاند.',
          },
          {
            tr: 'Otele eşyalarımı bıraktıktan sonra hemen dışarı çıktım. Hava sıcaktı ama sokaklar çok kalabalıktı. Herkes acele ediyordu.',
            ar: 'بعد أن تركت أغراضي في الفندق خرجت فوراً. كان الجو حاراً لكن الشوارع مزدحمة جداً. كان الجميع مستعجلين.',
            ku: 'دوای ئەوەی کەلوپەلەکانم لە هوتێلەکە دانا، دەستبەجێ چوومە دەرەوە. کەشوهەوا گەرم بوو بەڵام کۆڵانەکان زۆر قەرەباڵغ بوون. هەموو پەلەیان بوو.',
          },
          {
            tr: 'Önce Sultanahmet’e yürüdüm. Ayasofya’yı görünce gerçekten çok etkilendim. İçeride bir saatten fazla kaldım ve fotoğraf çekmeyi bile unuttum.',
            ar: 'مشيت أولاً إلى السلطان أحمد. حين رأيت آيا صوفيا تأثّرت كثيراً حقاً. بقيت في الداخل أكثر من ساعة ونسيت حتى أن ألتقط صوراً.',
            ku: 'سەرەتا بۆ سوڵتان ئەحمەد ڕۆیشتم. کە ئایاسۆفیام بینی بەڕاستی زۆر کاریگەر بووم. زیاتر لە کاتژمێرێک لە ژوورەوە مامەوە و تەنانەت لەبیرم چوو وێنە بگرم.',
          },
          {
            tr: 'Akşam üstü Boğaz’da vapura bindim. Güneş batarken deniz turuncu olmuştu. O anda İstanbul’u neden bu kadar çok sevdiklerini anladım.',
            ar: 'قبيل المساء ركبت العبّارة في البوسفور. كان البحر قد صار برتقالياً وقت الغروب. في تلك اللحظة فهمت لماذا يحبّون إسطنبول إلى هذا الحدّ.',
            ku: 'بەرەو ئێوارە لە بۆغازدا سواری کەشتی بووم. لە کاتی ئاوابوونی خۆردا دەریا پرتەقاڵی ببوو. لەو ساتەدا تێگەیشتم بۆچی ئەوەندە ئەستەنبوڵیان خۆشدەوێت.',
          },
          {
            tr: 'Gece otele döndüğümde çok yorgundum ama mutluydum. Ertesi gün için uzun bir liste hazırladım.',
            ar: 'حين عدت إلى الفندق ليلاً كنت متعباً جداً لكنني كنت سعيداً. أعددت قائمة طويلة لليوم التالي.',
            ku: 'کاتێک شەو گەڕامەوە هوتێل زۆر ماندوو بووم بەڵام دڵخۆش بووم. لیستێکی درێژم بۆ ڕۆژی دواتر ئامادە کرد.',
          },
        ],
        glossary: [
          { tr: 'inmek', pron: 'in-MEK', ar: 'يهبط / ينزل', ku: 'نیشتنەوە / دابەزین' },
          { tr: 'kalabalık', pron: 'ka-la-ba-LIK', ar: 'مزدحم', ku: 'قەرەباڵغ' },
          { tr: 'etkilenmek', pron: 'et-ki-len-MEK', ar: 'يتأثّر', ku: 'کاریگەربوون' },
          { tr: 'akşam üstü', pron: 'ak-ŞAM üs-tü', ar: 'قبيل المساء', ku: 'بەرەو ئێوارە' },
          { tr: 'ertesi gün', pron: 'er-te-Sİ GÜN', ar: 'اليوم التالي', ku: 'ڕۆژی دواتر' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Okuma stratejisi',
        body: b(
          'لا تتوقّف عند كل كلمة مجهولة. اقرأ الفقرة كاملة أولاً، خمّن المعنى من السياق، ثم تحقّق. هذه العادة وحدها تضاعف سرعتك في القراءة خلال أسابيع.',
          'لە هەموو وشەیەکی نەناسراودا مەوەستە. سەرەتا بڕگەکە بە تەواوی بخوێنەوە، لە چوارچێوەکەوە واتاکە خەمڵێنە، پاشان تاقی بکەوە. تەنها ئەم خووە خێرایی خوێندنەوەت لە ماوەی چەند هەفتەیەکدا دوو قات دەکات.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('كيف ذهب الكاتب من المطار إلى مركز المدينة؟', 'نووسەر چۆن لە فڕۆکەخانەوە چوو بۆ ناوەندی شار؟'),
        ['Taksiyle', 'Metroyla', 'Otobüsle', 'Yürüyerek'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('لماذا لم يلتقط صوراً في آيا صوفيا؟', 'بۆچی لە ئایاسۆفیادا وێنەی نەگرت؟'),
        [
          'Fotoğraf çekmek yasaktı',
          'Telefonu bozuktu',
          'Çok etkilendiği için unuttu',
          'Acelesi vardı',
        ],
        2,
        { turkishOptions: true },
      ),
      translate('tr-ar', 'Güneş batarken deniz turuncu olmuştu.', [
        'كان البحر قد صار برتقالياً وقت الغروب.',
        'كان البحر أزرق عند الغروب.',
        'غربت الشمس في البحر.',
        'كان البحر هادئاً في الصباح.',
      ], 0),
      order(
        b('رتّب: تركت أغراضي في الفندق وخرجت فوراً.', 'ڕێک بخە: کەلوپەلەکانم لە هوتێل دانا و دەستبەجێ چوومە دەرەوە.'),
        'Otele eşyalarımı bıraktıktan sonra hemen dışarı çıktım',
        'بعد أن تركت أغراضي في الفندق خرجت فوراً.',
        'دوای ئەوەی کەلوپەلەکانم لە هوتێل دانا دەستبەجێ چوومە دەرەوە.',
      ),
    ],
  },

  {
    id: 'read-b2-social-media',
    level: 'b2',
    kind: 'reading',
    order: 30,
    minutes: 25,
    title: 'Sosyal Medya ve Dikkat Süresi',
    titleI18n: b('وسائل التواصل ومدى الانتباه', 'سۆشیاڵ میدیا و ماوەی سەرنج'),
    objective: b(
      'أن تتابع نصاً حجاجياً بأدوات ربط، وتميّز الرأي من المعلومة.',
      'ئەوەی دەقێکی بەڵگەیی بە بەستەرەکانەوە شوێن بکەویت، و ڕا لە زانیاری جیا بکەیتەوە.',
    ),
    tags: ['reading', 'argument'],
    blocks: [
      {
        type: 'passage',
        title: 'Sosyal Medya ve Dikkat Süresi',
        intro: b(
          'نصّ حجاجي. انتبه لأدوات الربط: ancak، dolayısıyla، ne var ki — هي التي تحمل بنية الحجّة.',
          'دەقێکی بەڵگەیی. ئاگاداری بەستەرەکان بە: ancak، dolayısıyla، ne var ki — ئەوانن کە پێکهاتەی بەڵگەکە هەڵدەگرن.',
        ),
        paragraphs: [
          {
            tr: 'Son yıllarda sosyal medyanın dikkat süremizi kısalttığı sıkça dile getiriliyor. Bazı araştırmalar, sürekli bildirim almanın odaklanmayı zorlaştırdığını ortaya koyuyor.',
            ar: 'يُقال كثيراً في السنوات الأخيرة إن وسائل التواصل قصّرت مدى انتباهنا. تُظهر بعض الدراسات أن تلقّي الإشعارات المستمر يجعل التركيز أصعب.',
            ku: 'لە ساڵانی دواییدا زۆر باس لەوە دەکرێت کە سۆشیاڵ میدیا ماوەی سەرنجمانی کورت کردووەتەوە. هەندێک توێژینەوە دەریدەخەن کە وەرگرتنی بەردەوامی ئاگادارکردنەوە خولیابوون قورستر دەکات.',
          },
          {
            tr: 'Ancak bu tabloyu tek bir nedene bağlamak doğru olmaz. Uyku düzeni, iş yükü ve stres de dikkat üzerinde en az teknoloji kadar etkilidir.',
            ar: 'غير أنه ليس صحيحاً إرجاع هذه الصورة إلى سبب واحد. فنظام النوم وعبء العمل والتوتر تؤثّر في الانتباه بقدر التقنية على الأقل.',
            ku: 'بەڵام دروست نییە ئەم وێنەیە بە یەک هۆکارەوە ببەستین. ڕێکی خەو و باری کار و ستریسیش بەلایەنی کەمەوە بەقەد تەکنەلۆژیا کاریگەرن لەسەر سەرنج.',
          },
          {
            tr: 'Kaldı ki sorun teknolojinin kendisinden ziyade kullanım biçimimizden kaynaklanıyor olabilir. Aynı telefon, hem dikkati dağıtan bir araç hem de öğrenmeyi kolaylaştıran bir kaynak olabiliyor.',
            ar: 'ثم إن المشكلة قد تنبع من طريقة استخدامنا أكثر منها من التقنية نفسها. فالهاتف ذاته يمكن أن يكون أداة تشتّت وأن يكون مورداً يسهّل التعلّم في آنٍ واحد.',
            ku: 'سەرەڕای ئەوە لەوانەیە کێشەکە زیاتر لە شێوازی بەکارهێنانمانەوە سەرچاوە بگرێت تا لە خودی تەکنەلۆژیا. هەمان تەلەفۆن دەتوانێت هەم ئامرازێکی سەرنجلادان بێت هەم سەرچاوەیەک کە فێربوون ئاسان دەکات.',
          },
          {
            tr: 'Dolayısıyla çözüm, teknolojiden tamamen uzaklaşmak değil; bilinçli sınırlar koymaktır. Bildirimleri kapatmak, belirli saatlerde telefona bakmamak ve tek bir işe odaklanmak somut adımlardır.',
            ar: 'وبالتالي فالحلّ ليس الابتعاد التام عن التقنية، بل وضع حدود واعية. إغلاق الإشعارات، وعدم النظر إلى الهاتف في ساعات محدّدة، والتركيز على مهمة واحدة — كلها خطوات ملموسة.',
            ku: 'کەواتە چارەسەرەکە دوورکەوتنەوەی تەواو لە تەکنەلۆژیا نییە؛ بەڵکو دانانی سنووری هۆشیارانەیە. کوژاندنەوەی ئاگادارکردنەوەکان، سەیرنەکردنی تەلەفۆن لە کاتی دیاریکراودا و خولیابوون بە یەک کار — هەموویان هەنگاوی بەرجەستەن.',
          },
          {
            tr: 'Ne var ki bu adımların hepsi kişisel çabaya dayanıyor. Platformların tasarımı dikkati elde tutmak üzere kurgulandığı sürece, sorumluluğun tamamını kullanıcıya yüklemek adil sayılmaz.',
            ar: 'غير أن هذه الخطوات كلها تقوم على الجهد الفردي. وما دام تصميم المنصّات مبنياً على استبقاء الانتباه، فإن تحميل المستخدم المسؤولية كاملةً لا يُعدّ عادلاً.',
            ku: 'بەڵام هەموو ئەم هەنگاوانە پشت بە هەوڵی کەسی دەبەستن. تا ئەو کاتەی دیزاینی پلاتفۆرمەکان بۆ ڕاگرتنی سەرنج داڕێژراوە، خستنە ئەستۆی هەموو بەرپرسیارێتییەک بۆ بەکارهێنەر دادپەروەرانە نییە.',
          },
        ],
        glossary: [
          { tr: 'dile getirmek', pron: 'di-LE ge-tir-mek', ar: 'يعبّر عن / يُثار', ku: 'باسکردن' },
          { tr: 'ortaya koymak', pron: 'or-ta-YA koy-mak', ar: 'يُظهر / يكشف', ku: 'دەرخستن' },
          { tr: '-den ziyade', pron: '-den zi-ya-DE', ar: 'أكثر من', ku: 'زیاتر لە' },
          { tr: 'bilinçli', pron: 'bi-linç-Lİ', ar: 'واعٍ', ku: 'هۆشیارانە' },
          { tr: 'yüklemek', pron: 'yük-le-MEK', ar: 'يُحمّل', ku: 'خستنە ئەستۆ' },
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Metnin iskeleti',
        body: b(
          'لاحظ بنية الحجّة: (1) طرح الادّعاء الشائع، (2) ancak — اعتراض، (3) kaldı ki — تعميق الاعتراض، (4) dolayısıyla — استنتاج، (5) ne var ki — تحفّظ أخير. هذه البنية الخماسية هي قالب المقال الحجاجي التركي.',
          'سەرنج بدە پێکهاتەی بەڵگەکە: (١) خستنەڕووی بانگەشەی باو، (٢) ancak — ناڕەزایی، (٣) kaldı ki — قووڵکردنەوەی ناڕەزایی، (٤) dolayısıyla — دەرئەنجام، (٥) ne var ki — تێبینی کۆتایی. ئەم پێکهاتە پێنجانەیە قاڵبی وتاری بەڵگەیی تورکییە.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما موقف الكاتب من التقنية؟', 'هەڵوێستی نووسەر بەرامبەر تەکنەلۆژیا چییە؟'),
        [
          'Teknoloji tamamen zararlıdır',
          'Sorun teknolojiden çok kullanım biçimidir',
          'Teknolojinin dikkatle ilgisi yoktur',
          'Bildirimler faydalıdır',
        ],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('ما وظيفة "ne var ki" في الفقرة الأخيرة؟', 'ئەرکی "ne var ki" لە بڕگەی کۆتاییدا چییە؟'),
        [
          'Sonuç bildirmek',
          'Örnek vermek',
          'Beklenmedik bir karşıtlık eklemek',
          'Konuyu değiştirmek',
        ],
        2,
        { turkishOptions: true },
      ),
      translate('tr-ku', 'Sorun teknolojinin kendisinden ziyade kullanım biçimimizden kaynaklanıyor.', [
        'کێشەکە زیاتر لە شێوازی بەکارهێنانمانەوە سەرچاوە دەگرێت تا لە خودی تەکنەلۆژیا.',
        'تەکنەلۆژیا بە تەواوی زیانبەخشە.',
        'کێشەیەکمان لەگەڵ تەکنەلۆژیا نییە.',
        'شێوازی بەکارهێنان گرنگ نییە.',
      ], 0),
      mcq(
        b('ما الحلّ الذي يقترحه النصّ؟', 'ئەو چارەسەرەی دەقەکە پێشنیاری دەکات چییە؟'),
        [
          'Teknolojiyi tamamen bırakmak',
          'Bilinçli sınırlar koymak',
          'Daha çok bildirim açmak',
          'Platformları kapatmak',
        ],
        1,
        { turkishOptions: true },
      ),
    ],
  },

  {
    id: 'read-c1-bilingualism',
    level: 'c1',
    kind: 'reading',
    order: 30,
    minutes: 30,
    title: 'İki Dillilik Üzerine',
    titleI18n: b('في ثنائية اللغة', 'دەربارەی دووزمانی'),
    objective: b(
      'أن تقرأ نصاً أكاديمياً بصيغة المجهول والأسماء الفعلية دون ترجمة ذهنية.',
      'ئەوەی دەقێکی ئەکادیمی بە ڕەنگی نەناسراو و ناوی کاری بخوێنیتەوە بەبێ وەرگێڕانی مێشکی.',
    ),
    tags: ['reading', 'academic'],
    blocks: [
      {
        type: 'passage',
        title: 'İki Dillilik Üzerine',
        intro: b(
          'نصّ أكاديمي. لاحظ كثافة المبني للمجهول (-ilmiştir، -mektedir) والأسماء الفعلية (-mesi، -diği) — هذه هي علامات التسجيل الأكاديمي التركي.',
          'دەقێکی ئەکادیمی. سەرنج بدە چڕی ڕەنگی نەناسراو (-ilmiştir، -mektedir) و ناوی کاری (-mesi، -diği) — ئەمانە نیشانەکانی ئاستی ئەکادیمیی تورکین.',
        ),
        paragraphs: [
          {
            tr: 'İki dilliliğin bilişsel gelişim üzerindeki etkileri uzun yıllardır tartışılmaktadır. Yirminci yüzyılın ortalarına kadar iki dilli çocukların dilsel açıdan dezavantajlı olduğu varsayılıyordu.',
            ar: 'تُناقش آثار ثنائية اللغة على النمو المعرفي منذ سنوات طويلة. حتى منتصف القرن العشرين كان يُفترض أن الأطفال ثنائيي اللغة في وضع أضعف لغوياً.',
            ku: 'کاریگەرییەکانی دووزمانی لەسەر گەشەی مێشکی ماوەی ساڵانێکی درێژە باسی لێوە دەکرێت. تا ناوەڕاستی سەدەی بیستەم وا گریمانە دەکرا کە منداڵە دووزمانەکان لە ڕووی زمانەوانییەوە لە دۆخێکی لاوازتردان.',
          },
          {
            tr: 'Ancak bu varsayımın dayandığı çalışmaların büyük bölümünde sosyoekonomik değişkenler denetlenmemişti. Dolayısıyla gözlemlenen farkın kaynağı dilden çok yoksulluk olabilirdi.',
            ar: 'غير أن المتغيّرات الاجتماعية-الاقتصادية لم تكن مضبوطة في القسم الأكبر من الدراسات التي استند إليها هذا الافتراض. وبالتالي فإن مصدر الفارق الملاحَظ قد يكون الفقر أكثر من اللغة.',
            ku: 'بەڵام لە بەشی هەرە زۆری ئەو توێژینەوانەی ئەم گریمانەیە پشتی پێبەستبوو، گۆڕاوە کۆمەڵایەتی-ئابوورییەکان کۆنترۆڵ نەکرابوون. کەواتە سەرچاوەی ئەو جیاوازییەی چاودێری کرابوو، لەوانەیە هەژاری بووبێت زیاتر لە زمان.',
          },
          {
            tr: 'Son otuz yılda yapılan araştırmalar tabloyu önemli ölçüde değiştirmiştir. İki dilli bireylerin, iki dil arasında sürekli seçim yapmak zorunda kalmaları nedeniyle yürütücü işlevlerinin daha güçlü olduğu bulunmuştur.',
            ar: 'غيّرت الأبحاث المُجراة في الثلاثين سنة الأخيرة الصورة تغييراً كبيراً. فقد وُجد أن الوظائف التنفيذية لدى الأفراد ثنائيي اللغة أقوى، بسبب اضطرارهم إلى الاختيار المستمر بين لغتين.',
            ku: 'ئەو توێژینەوانەی لە سی ساڵی ڕابردوودا ئەنجام دراون بە شێوەیەکی بەرچاو وێنەکەیان گۆڕیوە. دۆزرایەوە کە ئەرکە جێبەجێکەرەکانی کەسە دووزمانەکان بەهێزترن، بەهۆی ئەوەی بەردەوام ناچارن لە نێوان دوو زماندا هەڵبژاردن بکەن.',
          },
          {
            tr: 'Bununla birlikte bu bulguların da abartılmaması gerekir. Yakın tarihli meta-analizler, etkinin büyüklüğünün önceki çalışmalarda bildirilenden daha küçük olduğunu göstermektedir.',
            ar: 'ومع ذلك ينبغي ألّا يُبالَغ في هذه النتائج أيضاً. فالتحليلات البعدية الحديثة تُظهر أن حجم الأثر أصغر ممّا أُبلغ عنه في الدراسات السابقة.',
            ku: 'لەگەڵ ئەوەشدا نابێت لەم دۆزینەوانەشدا زیادەڕەوی بکرێت. مێتا-شیکارییە نوێیەکان دەریدەخەن کە قەبارەی کاریگەرییەکە بچووکترە لەوەی لە توێژینەوە پێشووەکاندا ڕاگەیەندرابوو.',
          },
          {
            tr: 'Eğitim politikaları açısından çıkarılacak sonuç açıktır: ana dilin okulda bastırılması savunulabilir değildir. Aksine, ana dili güçlü olan öğrencilerin ikinci dili de daha hızlı edindiği düşünülmektedir.',
            ar: 'والنتيجة التي تُستخلَص من زاوية السياسات التعليمية واضحة: قمع اللغة الأم في المدرسة أمر لا يمكن الدفاع عنه. بل على العكس، يُعتقد أن الطلاب الذين لغتهم الأم قوية يكتسبون اللغة الثانية أسرع أيضاً.',
            ku: 'ئەو ئەنجامەی لە ڕووی سیاسەتی پەروەردەوە دەردەهێنرێت ڕوونە: سڕینەوەی زمانی دایک لە قوتابخانەدا بەرگریکراو نییە. بەپێچەوانەوە، وا بیر دەکرێتەوە کە ئەو قوتابییانەی زمانی دایکیان بەهێزە، زمانی دووەمیش خێراتر وەردەگرن.',
          },
        ],
        glossary: [
          { tr: 'bilişsel', pron: 'bi-liş-SEL', ar: 'معرفي', ku: 'مێشکی' },
          { tr: 'varsayılmak', pron: 'var-sa-yıl-MAK', ar: 'يُفترَض', ku: 'گریمانە کردن' },
          { tr: 'denetlemek', pron: 'de-net-le-MEK', ar: 'يضبط / يراقب', ku: 'کۆنترۆڵکردن' },
          { tr: 'yürütücü işlev', pron: 'yü-rü-tü-DJÜ iş-LEV', ar: 'وظيفة تنفيذية', ku: 'ئەرکی جێبەجێکەر' },
          { tr: 'meta-analiz', pron: 'me-TA a-na-LİZ', ar: 'تحليل بعدي', ku: 'مێتا-شیکاری' },
          { tr: 'bastırmak', pron: 'bas-tır-MAK', ar: 'يقمع / يكبت', ku: 'سڕینەوە / چەوساندنەوە' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Akademik Türkçenin üç işareti',
        body: b(
          'راقب ثلاثة أشياء في هذا النصّ: (1) ‎-mektedir‎ بدل ‎-yor‎، (2) المبني للمجهول بدل الفاعل الصريح، (3) الأسماء الفعلية ‎-diği/-mesi‎ التي تحوّل جملة كاملة إلى مفعول به. من يتقن هذه الثلاثة يكتب تركية أكاديمية مقبولة.',
          'سێ شت لەم دەقەدا چاودێری بکە: (١) ‎-mektedir‎ لە جیاتی ‎-yor‎، (٢) ڕەنگی نەناسراو لە جیاتی کرداری ئاشکرا، (٣) ناوی کاری ‎-diği/-mesi‎ کە ڕستەیەکی تەواو دەکات بە بەرکار.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('لماذا كانت الدراسات القديمة مضلّلة حسب النصّ؟', 'بەپێی دەقەکە بۆچی توێژینەوە کۆنەکان چەواشەکەر بوون؟'),
        [
          'Örneklem çok büyüktü',
          'Sosyoekonomik değişkenler denetlenmemişti',
          'İki dilli çocuk bulunamamıştı',
          'Yöntem niteldi',
        ],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('ما موقف النصّ من نتائج الأبحاث الحديثة؟', 'هەڵوێستی دەقەکە بەرامبەر ئەنجامی توێژینەوە نوێیەکان چییە؟'),
        [
          'Tamamen reddediyor',
          'Kabul ediyor ama abartılmaması gerektiğini söylüyor',
          'Kesin doğru sayıyor',
          'Hiç değinmiyor',
        ],
        1,
        { turkishOptions: true },
      ),
      translate('tr-ar', 'Ana dilin okulda bastırılması savunulabilir değildir.', [
        'قمع اللغة الأم في المدرسة أمر لا يمكن الدفاع عنه.',
        'يجب تدريس اللغة الأم في المدرسة.',
        'اللغة الأم لا تُدرَّس في المدرسة.',
        'المدرسة تدافع عن اللغة الأم.',
      ], 0),
      mcq(
        b('صيغة "gösterilmektedir" هي:', 'شێوەی "gösterilmektedir" ئەمەیە:'),
        [
          'Etken, şimdiki zaman',
          'Edilgen, resmî geniş/şimdiki zaman',
          'Emir kipi',
          'Geçmiş zaman hikâyesi',
        ],
        1,
      ),
    ],
  },

  {
    id: 'read-c1plus-memory',
    level: 'c1plus',
    kind: 'reading',
    order: 30,
    minutes: 30,
    title: 'Hafıza ve Şehir',
    titleI18n: b('الذاكرة والمدينة', 'یاد و شار'),
    objective: b(
      'أن تقرأ نصاً أدبياً اصطلاحياً وتلتقط النبرة لا المعنى الحرفي فقط.',
      'ئەوەی دەقێکی ئەدەبی و ئیدیۆمی بخوێنیتەوە و ئاوازەکە بگریت نەک تەنها واتای وشەکی.',
    ),
    tags: ['reading', 'literary'],
    blocks: [
      {
        type: 'passage',
        title: 'Hafıza ve Şehir',
        intro: b(
          'نصّ أدبي/تأملي. المفردات هنا ليست صعبة بالضرورة، لكن التراكيب اصطلاحية والنبرة شخصية. اقرأه ببطء.',
          'دەقێکی ئەدەبی/بیرکەرەوە. وشەکان لێرەدا بەناچاری قورس نین، بەڵام پێکهاتەکان ئیدیۆمین و ئاوازەکە کەسییە. بە هێواشی بیخوێنەوە.',
        ),
        paragraphs: [
          {
            tr: 'Bir şehri gerçekten tanımak, sokaklarının adını ezberlemekle olmuyor. İnsan ancak bir yerde bir şeyler kaybettikten sonra orayı tanımaya başlıyor.',
            ar: 'معرفة مدينة معرفةً حقيقية لا تكون بحفظ أسماء شوارعها. لا يبدأ المرء في معرفة مكانٍ إلا بعد أن يفقد فيه شيئاً.',
            ku: 'ناسینی ڕاستەقینەی شارێک بە لەبەرکردنی ناوی کۆڵانەکانی نابێت. مرۆڤ تەنها دوای ئەوەی شتێکی لە شوێنێکدا ون بکات دەست بە ناسینی ئەو شوێنە دەکات.',
          },
          {
            tr: 'Çocukluğumun geçtiği mahalleye yıllar sonra döndüğümde her şey küçülmüştü. Dev sandığım duvar belime bile gelmiyordu. Oysa duvar aynı duvardı; değişen bendim.',
            ar: 'حين عدت بعد سنوات إلى الحيّ الذي قضيت فيه طفولتي كان كل شيء قد صغر. الجدار الذي ظننته عملاقاً لم يكن يصل حتى خصري. مع أن الجدار هو الجدار نفسه؛ المتغيّر كان أنا.',
            ku: 'کاتێک دوای ساڵانێک گەڕامەوە بۆ ئەو گەڕەکەی منداڵیم تێیدا بەسەربردبوو، هەموو شتێک بچووک ببووەوە. ئەو دیوارەی وامدەزانی گەورەیە تەنانەت نەدەگەیشتە کەمەرم. لە کاتێکدا دیوارەکە هەمان دیوار بوو؛ ئەوەی گۆڕابوو من بووم.',
          },
          {
            tr: 'Hafıza sadık bir kâtip değil. Yıllar geçtikçe bazı ayrıntıları abartıyor, bazılarını sessizce siliyor. Sonunda hatırladığımız şey, yaşadığımız şeyden çok, kendimize anlattığımız hikâye oluyor.',
            ar: 'الذاكرة ليست كاتباً أميناً. فكلما مرّت السنوات بالغت في بعض التفاصيل ومحت أخرى بصمت. وفي النهاية يصير ما نتذكّره — لا ما عشناه — بل الحكاية التي رويناها لأنفسنا.',
            ku: 'یاد نووسەرێکی دڵسۆز نییە. هەرچی ساڵ تێدەپەڕێت لە هەندێک وردەکاری زیادەڕەوی دەکات و هەندێکی تر بە بێدەنگی دەسڕێتەوە. لە کۆتاییدا ئەوەی بیرمان دەکەوێت، نەک ئەوەی ژیاومانە، بەڵکو ئەو چیرۆکەیە کە بۆ خۆمان گێڕاومانەتەوە.',
          },
          {
            tr: 'Yine de bu bir kusur sayılmamalı. Belki de hatırlamak, geçmişi olduğu gibi saklamak değil; onunla yaşanabilir bir barış kurmaktır.',
            ar: 'ومع ذلك لا ينبغي عدّ هذا عيباً. ربما كان التذكّر ليس حفظ الماضي كما كان، بل عقد صلح ممكن العيش معه.',
            ku: 'لەگەڵ ئەوەشدا نابێت ئەمە بە کەموکوڕی دابنرێت. لەوانەیە بیرکردنەوە، پاراستنی ڕابردوو وەک خۆی نەبێت؛ بەڵکو دروستکردنی ئاشتییەکی ژیانپێکراو بێت لەگەڵیدا.',
          },
          {
            tr: 'O gün mahalleden ayrılırken arkama bakmadım. Bakmaya gerek yoktu; artık orayı yanımda taşıyordum.',
            ar: 'ذلك اليوم، حين غادرت الحيّ، لم ألتفت إلى الوراء. لم تكن هناك حاجة؛ فقد صرت أحمل المكان معي.',
            ku: 'ئەو ڕۆژە کاتێک لە گەڕەکەکە جیا بوومەوە، ئاوڕم نەدایەوە. پێویست نەبوو؛ ئیتر ئەو شوێنەم لەگەڵ خۆم هەڵدەگرت.',
          },
        ],
        glossary: [
          { tr: 'sadık', pron: 'sa-DIK', ar: 'وفيّ / أمين', ku: 'دڵسۆز' },
          { tr: 'kâtip', pron: 'kâ-TİP', ar: 'كاتب / ناسخ', ku: 'نووسەر' },
          { tr: 'abartmak', pron: 'a-bart-MAK', ar: 'يبالغ', ku: 'زیادەڕەوی کردن' },
          { tr: 'kusur', pron: 'ku-SUR', ar: 'عيب / نقص', ku: 'کەموکوڕی' },
          { tr: 'oysa', pron: 'oy-SA', ar: 'مع أنّ / بينما', ku: 'لە کاتێکدا' },
          { tr: 'yine de', pron: 'yi-NE de', ar: 'ومع ذلك', ku: 'لەگەڵ ئەوەشدا' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Edebî üslubun izleri',
        body: b(
          'لاحظ ثلاث علامات أسلوبية: (1) الجملة القصيرة الحاسمة بعد جملة طويلة ("değişen bendim")، (2) الاستعارة الممتدّة (الذاكرة ككاتب)، (3) الخاتمة المفتوحة بدل الاستنتاج. هذه أدوات المقالة الأدبية التركية (deneme).',
          'سێ نیشانەی شێوازی سەرنج بدە: (١) ڕستەی کورتی بڕیاردەر دوای ڕستەیەکی درێژ، (٢) خواستنی درێژکراوە (یاد وەک نووسەر)، (٣) کۆتایی کراوە لە جیاتی دەرئەنجام. ئەمانە ئامرازەکانی وتاری ئەدەبی تورکین (deneme).',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما المقصود بـ "değişen bendim"؟', 'مەبەست لە "değişen bendim" چییە؟'),
        [
          'Duvar yıkılmıştı',
          'Mahalle yeniden yapılmıştı',
          'Yazarın kendisi büyümüş ve algısı değişmişti',
          'Yazar taşınmıştı',
        ],
        2,
        { turkishOptions: true },
      ),
      mcq(
        b('كيف يصف النصّ الذاكرة؟', 'دەقەکە یاد چۆن وەسف دەکات؟'),
        [
          'Kusursuz bir kayıt aracı',
          'Seçici ve yeniden kurgulayan bir şey',
          'Tamamen güvenilmez bir yalan',
          'Bilimsel bir olgu',
        ],
        1,
        { turkishOptions: true },
      ),
      translate('tr-ar', 'Hafıza sadık bir kâtip değil.', [
        'الذاكرة ليست كاتباً أميناً.',
        'الذاكرة كاتب جيد.',
        'الكاتب لا يتذكّر.',
        'الذاكرة قوية جداً.',
      ], 0),
      mcq(
        b('ما نبرة الفقرة الأخيرة؟', 'ئاوازی بڕگەی کۆتایی چییە؟'),
        [
          'Öfkeli ve suçlayıcı',
          'Kabullenmiş ve dingin',
          'Bilimsel ve nesnel',
          'Şaşkın ve korkmuş',
        ],
        1,
        { turkishOptions: true },
      ),
    ],
  },
];
