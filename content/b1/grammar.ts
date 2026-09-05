import type { Lesson } from '@/types/content';
import { b, fill, listening, match, mcq, order, p, speak, translate } from '../shared/helpers';

/**
 * B1 grammar - the aorist, ability, conditionals, the passive voice and the
 * imperative. This is the level where a student stops describing and starts
 * arguing, requesting, hypothesising and telling stories.
 */
export const B1_GRAMMAR: Lesson[] = [
  {
    id: 'b1-aorist',
    level: 'b1',
    kind: 'grammar',
    order: 1,
    minutes: 35,
    title: 'Geniş Zaman',
    titleI18n: b('الزمن الواسع (المضارع العام)', 'کاتی فراوان'),
    objective: b(
      'أن تعبّر عن الحقائق العامة والعادات والاستعداد والوعد بصيغة الزمن الواسع.',
      'ئەوەی ڕاستی گشتی و خوو و ئامادەیی و بەڵێن بە کاتی فراواندا دەرببڕیت.',
    ),
    prerequisites: ['a2-future'],
    tags: ['tense', 'verb', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Türkçenin en Türkçe zamanı',
        body: b(
          'الزمن الواسع (geniş zaman) لا مقابل مباشر له في العربية ولا الكردية، ولهذا يجده الطلاب أصعب زمن. وظائفه أربع: (1) الحقائق الثابتة — "الشمس تشرق من الشرق"، (2) العادات الدائمة — "أشرب الشاي كل صباح"، (3) الاستعداد والوعد — "سأساعدك"، (4) الطلب المهذّب — "هل تفتح النافذة من فضلك؟". لاحظ الفرق عن ‎-yor‎: هذه للحظة الآن، وتلك للطبع العام.',
          'کاتی فراوان (geniş zaman) بەراوردی ڕاستەوخۆی لە کوردیدا نییە، بۆیە قوتابیان بە قورسترین کات دەیزانن. چوار کاری هەیە: (١) ڕاستییە جێگیرەکان، (٢) خووی هەمیشەیی، (٣) ئامادەیی و بەڵێن، (٤) داواکاری بە ڕێزەوە. جیاوازییەکەی لەگەڵ ‎-yor‎: ئەوە بۆ ساتی ئێستایە، ئەمە بۆ سروشتی گشتی.',
        ),
      },
      {
        type: 'table',
        title: 'Üç kural',
        headers: ['Kök tipi', 'Ek', 'Örnek', 'Sonuç'],
        rows: [
          ['Ünlüyle biten', '-r', 'oku-, bekle-, başla-', 'okur, bekler, başlar'],
          ['Tek heceli, ünsüzle biten', '-ar / -er', 'bak-, yaz-, git-, sev-', 'bakar, yazar, gider, sever'],
          ['Çok heceli, ünsüzle biten', '-ır / -ir / -ur / -ür', 'çalış-, öğren-, otur-, konuş-', 'çalışır, öğrenir, oturur, konuşur'],
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'On üç istisna — ezberlenmesi şart',
        body: b(
          'ثلاثة عشر فعلاً أحادي المقطع تخالف القاعدة وتأخذ ‎-ir‎ بدل ‎-er‎. احفظها كقائمة، فهي من أكثر الأفعال استعمالاً: almak⟵alır، bilmek⟵bilir، bulmak⟵bulur، durmak⟵durur، gelmek⟵gelir، görmek⟵görür، kalmak⟵kalır، olmak⟵olur، ölmek⟵ölür، sanmak⟵sanır، varmak⟵varır، vermek⟵verir، vurmak⟵vurur.',
          'سێزدە کاری تاک بڕگە پێچەوانەی ڕێساکە ‎-ir‎ وەردەگرن لە جیاتی ‎-er‎. وەک لیستێک لەبەریان بکە، چونکە لە زۆرترین کارە بەکارهاتووەکانن: almak⟵alır، bilmek⟵bilir، bulmak⟵bulur، durmak⟵durur، gelmek⟵gelir، görmek⟵görür، kalmak⟵kalır، olmak⟵olur، ölmek⟵ölür، sanmak⟵sanır، varmak⟵varır، vermek⟵verir، vurmak⟵vurur.',
        ),
      },
      {
        type: 'conjugation',
        title: 'içmek (يشرب / خواردنەوە) — olumlu',
        verb: 'içmek (geniş)',
        rows: [
          { person: 'ben', tr: 'içerim', pron: 'i-çe-RİM', ar: 'أشرب (عادةً)', ku: 'دەخۆمەوە (بەگشتی)' },
          { person: 'sen', tr: 'içersin', pron: 'i-çer-SİN', ar: 'تشرب', ku: 'دەخۆیتەوە' },
          { person: 'o', tr: 'içer', pron: 'i-ÇER', ar: 'يشرب', ku: 'دەخواتەوە' },
          { person: 'biz', tr: 'içeriz', pron: 'i-çe-RİZ', ar: 'نشرب', ku: 'دەخۆینەوە' },
          { person: 'siz', tr: 'içersiniz', pron: 'i-çer-si-NİZ', ar: 'تشربون', ku: 'دەخۆنەوە' },
          { person: 'onlar', tr: 'içerler', pron: 'i-çer-LER', ar: 'يشربون', ku: 'دەخۆنەوە' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Olumsuz çekim düzensizdir!',
        body: b(
          'النفي في الزمن الواسع شاذّ ويجب حفظه منفصلاً: اللاحقة العامة ‎-mez/-maz‎ (gelmez, bakmaz)، لكن المتكلم المفرد يأخذ ‎-mem/-mam‎ (gelmem = لا آتي) والمتكلم الجمع يأخذ ‎-meyiz/-mayız‎ (gelmeyiz). أي أن الـ z تسقط في هاتين الصيغتين فقط. هذا من أشهر مواضع الخطأ حتى عند المتقدّمين.',
          'نەفی لە کاتی فراواندا ناڕێکە و دەبێت جیا لەبەر بکرێت: پاشگری گشتی ‎-mez/-maz‎ (gelmez)، بەڵام کەسی یەکەمی تاک ‎-mem/-mam‎ وەردەگرێت (gelmem = نایەم) و کەسی یەکەمی کۆ ‎-meyiz/-mayız‎ (gelmeyiz). واتە z تەنها لەم دوو شێوەیەدا دەکەوێت.',
        ),
      },
      {
        type: 'conjugation',
        title: 'gelmek — olumsuz',
        verb: 'gelmemek (geniş)',
        rows: [
          { person: 'ben', tr: 'gelmem', pron: 'gel-MEM', ar: 'لا آتي (عادةً)', ku: 'نایەم' },
          { person: 'sen', tr: 'gelmezsin', pron: 'gel-mez-SİN', ar: 'لا تأتي', ku: 'نایەیت' },
          { person: 'o', tr: 'gelmez', pron: 'gel-MEZ', ar: 'لا يأتي', ku: 'نایەت' },
          { person: 'biz', tr: 'gelmeyiz', pron: 'gel-me-YİZ', ar: 'لا نأتي', ku: 'نایەین' },
          { person: 'siz', tr: 'gelmezsiniz', pron: 'gel-mez-si-NİZ', ar: 'لا تأتون', ku: 'نایەن' },
          { person: 'onlar', tr: 'gelmezler', pron: 'gel-mez-LER', ar: 'لا يأتون', ku: 'نایەن' },
        ],
      },
      {
        type: 'table',
        title: '-yor mu, -r mı? Anlam farkı',
        headers: ['Cümle', 'Zaman', 'Anlam'],
        rows: [
          ['Çay içiyorum.', '-yor', 'أشرب الشاي الآن / ئێستا چا دەخۆمەوە'],
          ['Çay içerim.', '-r', 'أشرب الشاي عادةً (طبعي) / بەگشتی چا دەخۆمەوە'],
          ['Sigara içmiyorum.', '-yor', 'لا أدخّن الآن / ئێستا جگەرە ناکێشم'],
          ['Sigara içmem.', '-r', 'أنا غير مدخّن أصلاً / من جگەرەکێش نیم'],
          ['Yardım ediyorum.', '-yor', 'أساعد الآن / ئێستا یارمەتی دەدەم'],
          ['Yardım ederim.', '-r', 'سأساعدك (وعد) / یارمەتیت دەدەم (بەڵێن)'],
        ],
      },
      {
        type: 'examples',
        title: 'Dört işlev',
        items: [
          p('Güneş doğudan doğar.', 'gü-NEŞ do-u-DAN do-AR', 'الشمس تشرق من الشرق. (حقيقة)', 'خۆر لە ڕۆژهەڵاتەوە هەڵدێت. (ڕاستی)'),
          p('Her sabah kahve içerim.', 'her sa-BAH kah-VE i-çe-rim', 'أشرب القهوة كل صباح. (عادة)', 'هەموو بەیانییەک قاوە دەخۆمەوە. (خوو)'),
          p('Merak etme, sana yardım ederim.', 'me-RAK et-ME sa-NA yar-DIM e-de-rim', 'لا تقلق، سأساعدك. (وعد)', 'نیگەران مەبە، یارمەتیت دەدەم. (بەڵێن)'),
          p('Pencereyi açar mısınız?', 'pen-dje-re-Yİ a-ÇAR mı-sı-nız', 'هل تفتح النافذة من فضلك؟ (طلب مهذّب)', 'دەرگای پەنجەرەکە دەکەیتەوە؟ (داواکاری بە ڕێز)'),
          p('Ben et yemem.', 'BEN ET ye-MEM', 'أنا لا آكل اللحم. (طبع دائم)', 'من گۆشت ناخۆم. (خووی هەمیشەیی)'),
          p('Bu saatte otobüs gelmez.', 'BU sa-at-TE o-to-BÜS gel-MEZ', 'لا تأتي الحافلة في هذه الساعة.', 'لەم کاتەدا پاس نایەت.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Atasözleri hep geniş zamandadır',
        body: b(
          'ستلاحظ أن كل الأمثال التركية تقريباً تأتي بالزمن الواسع، لأنها تصف حقائق أزلية: "Damlaya damlaya göl olur"، "Ne ekersen onu biçersin"، "Su testisi su yolunda kırılır". هذه علامة مؤكدة على وظيفة الزمن.',
          'دەبینیت نزیکەی هەموو پەندە تورکییەکان بە کاتی فراوان دێن، چونکە ڕاستی هەمیشەیی وەسف دەکەن: "Damlaya damlaya göl olur"، "Ne ekersen onu biçersin".',
        ),
      },
    ],
    exercises: [
      fill('Her sabah kahve ___. (içmek / ben)', 'içerim', 'أشرب القهوة كل صباح.', 'هەموو بەیانییەک قاوە دەخۆمەوە.', {
        options: ['içerim', 'içirim', 'içarım', 'içiyorum'],
      }),
      mcq(
        b('ما نفي "gelirim" مع "ben"؟', 'نەفیی "gelirim" لەگەڵ "ben" چییە؟'),
        ['gelmezim', 'gelmem', 'gelmezsin', 'gelmiyorum'],
        1,
        { turkishOptions: true, explain: b('المتكلم المفرد يأخذ ‎-mem‎ لا ‎-mezim‎.', 'کەسی یەکەمی تاک ‎-mem‎ وەردەگرێت نەک ‎-mezim‎.') },
      ),
      mcq(
        b('أيّهما يعني "أنا لا أدخّن (لست مدخّناً)"؟', 'کامیان واتای "من جگەرەکێش نیم" دەدات؟'),
        ['Sigara içmiyorum.', 'Sigara içmem.', 'Sigara içmedim.', 'Sigara içmeyeceğim.'],
        1,
        { turkishOptions: true, explain: b('الطبع الدائم يحتاج الزمن الواسع.', 'خووی هەمیشەیی کاتی فراوانی دەوێت.') },
      ),
      mcq(
        b('ما صيغة الزمن الواسع من "çalışmak" مع "o"؟', 'شێوەی کاتی فراوانی "çalışmak" لەگەڵ "o" چییە؟'),
        ['çalışar', 'çalışır', 'çalışer', 'çalışur'],
        1,
        { turkishOptions: true, explain: b('متعدّد المقاطع ⟵ ‎-ır‎ (وآخر حركة ı).', 'فرە بڕگە ⟵ ‎-ır‎.') },
      ),
      translate('ar-tr', 'هل تفتح الباب من فضلك؟', ['Kapıyı açar mısınız?', 'Kapıyı açıyor musunuz?', 'Kapıyı açtınız mı?', 'Kapıyı açacak mısınız?'], 0),
      match(
        b('طابق الفعل بصيغته في الزمن الواسع.', 'کارەکە لەگەڵ شێوەی کاتی فراوانیدا بگونجێنە.'),
        [
          { tr: 'gelmek → gelir', ar: 'يأتي (استثناء)', ku: 'دێت (دەرچوون)' },
          { tr: 'bakmak → bakar', ar: 'ينظر', ku: 'سەیر دەکات' },
          { tr: 'okumak → okur', ar: 'يقرأ', ku: 'دەخوێنێتەوە' },
          { tr: 'öğrenmek → öğrenir', ar: 'يتعلّم', ku: 'فێر دەبێت' },
        ],
      ),
      speak('Merak etme, sana her zaman yardım ederim.', 'me-RAK et-ME sa-NA her za-MAN yar-DIM e-de-rim', 'لا تقلق، سأساعدك دائماً.', 'نیگەران مەبە، هەمیشە یارمەتیت دەدەم.'),
    ],
  },

  {
    id: 'b1-ability',
    level: 'b1',
    kind: 'grammar',
    order: 2,
    minutes: 28,
    title: 'Yeterlilik: -ebilmek / -abilmek',
    titleI18n: b('الاستطاعة والإمكان', 'توانا و ئەگەر'),
    objective: b(
      'أن تعبّر عن القدرة والإذن والاحتمال، وأن تنفيها بالصيغة الصحيحة.',
      'ئەوەی توانا و مۆڵەت و ئەگەر دەرببڕیت، و بە شێوەی دروست نەفییان بکەیت.',
    ),
    prerequisites: ['b1-aorist'],
    tags: ['modality', 'verb', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Üç anlam, tek yapı',
        body: b(
          'صيغة واحدة تغطّي ثلاثة معانٍ تفصل بينها العربية: (1) القدرة — "أستطيع السباحة"، (2) الإذن — "هل يمكنني الدخول؟"، (3) الاحتمال — "قد يأتي". تُبنى بإضافة ‎-ebil/-abil‎ إلى الجذر ثم أي زمن: gel + ebil + ir + im = gelebilirim.',
          'یەک شێوە سێ واتا دەگرێتەوە: (١) توانا — "دەتوانم مەلە بکەم"، (٢) مۆڵەت — "دەتوانم بێمە ژوورەوە؟"، (٣) ئەگەر — "لەوانەیە بێت". بە زیادکردنی ‎-ebil/-abil‎ بۆ ڕەگەکە دروست دەبێت پاشان هەر کاتێک.',
        ),
      },
      {
        type: 'conjugation',
        title: 'gelmek → gelebilmek (يستطيع المجيء / دەتوانێت بێت)',
        verb: 'gelebilmek',
        rows: [
          { person: 'ben', tr: 'gelebilirim', pron: 'ge-le-bi-li-RİM', ar: 'أستطيع أن آتي', ku: 'دەتوانم بێم' },
          { person: 'sen', tr: 'gelebilirsin', pron: 'ge-le-bi-lir-SİN', ar: 'تستطيع أن تأتي', ku: 'دەتوانیت بێیت' },
          { person: 'o', tr: 'gelebilir', pron: 'ge-le-bi-LİR', ar: 'يستطيع أن يأتي', ku: 'دەتوانێت بێت' },
          { person: 'biz', tr: 'gelebiliriz', pron: 'ge-le-bi-li-RİZ', ar: 'نستطيع أن نأتي', ku: 'دەتوانین بێین' },
          { person: 'siz', tr: 'gelebilirsiniz', pron: 'ge-le-bi-lir-si-NİZ', ar: 'تستطيعون أن تأتوا', ku: 'دەتوانن بێن' },
          { person: 'onlar', tr: 'gelebilirler', pron: 'ge-le-bi-lir-LER', ar: 'يستطيعون أن يأتوا', ku: 'دەتوانن بێن' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Olumsuz: "bil" düşer!',
        body: b(
          'أهم مفاجأة في الدرس: عند النفي يختفي المقطع ‎bil‎ تماماً ويبقى ‎-eme/-ama‎ فقط. فنفي gelebilirim ليس "gelebilmem" بل gelemem (لا أستطيع المجيء). وفي المضارع المستمر: gelemiyorum. وفي الماضي: gelemedim. تذكّر: للإثبات ‎-ebil‎، وللنفي ‎-eme‎.',
          'گرنگترین سەرسوڕهێنەری وانەکە: لە کاتی نەفیدا بڕگەی ‎bil‎ بە تەواوی دەڕەوێتەوە و تەنها ‎-eme/-ama‎ دەمێنێتەوە. کەواتە نەفیی gelebilirim، gelemem ـە (ناتوانم بێم). لە ئێستای بەردەوامدا: gelemiyorum. لە ڕابردوودا: gelemedim.',
        ),
      },
      {
        type: 'table',
        title: 'Olumlu / olumsuz karşılaştırma',
        headers: ['Zaman', 'Olumlu', 'Olumsuz', 'Anlam'],
        rows: [
          ['Geniş', 'gelebilirim', 'gelemem', 'أستطيع / لا أستطيع المجيء'],
          ['Şimdiki', 'gelebiliyorum', 'gelemiyorum', 'أستطيع الآن / لا أستطيع الآن'],
          ['Geçmiş', 'gelebildim', 'gelemedim', 'استطعت / لم أستطع'],
          ['Gelecek', 'gelebileceğim', 'gelemeyeceğim', 'سأستطيع / لن أستطيع'],
        ],
      },
      {
        type: 'examples',
        title: 'Üç işlev',
        items: [
          p('Yüzme bilmiyorum, yüzemem.', 'yüz-ME bil-mi-YO-rum yü-ze-MEM', 'لا أعرف السباحة، لا أستطيع السباحة. (قدرة)', 'مەلە ناکەم، ناتوانم مەلە بکەم. (توانا)'),
          p('İçeri girebilir miyim?', 'i-çe-Rİ gi-re-bi-LİR mi-yim', 'هل يمكنني الدخول؟ (إذن)', 'دەتوانم بێمە ژوورەوە؟ (مۆڵەت)'),
          p('Bugün yağmur yağabilir.', 'bu-GÜN YAA-mur ya-a-bi-LİR', 'قد تمطر اليوم. (احتمال)', 'ئەمڕۆ لەوانەیە باران ببارێت. (ئەگەر)'),
          p('Türkçe konuşabiliyor musun?', 'türk-ÇE ko-nu-şa-bi-li-YOR mu-sun', 'هل تستطيع التحدث بالتركية؟', 'دەتوانیت بە تورکی قسە بکەیت؟'),
          p('Dün seni arayamadım, kusura bakma.', 'DÜN se-Nİ a-ra-ya-ma-DIM ku-su-RA bak-MA', 'لم أستطع الاتصال بك أمس، اعذرني.', 'دوێنێ نەمتوانی پەیوەندیت پێوە بکەم، ببوورە.'),
          p('Bu soruyu kimse çözemedi.', 'BU so-ru-YU kim-SE çö-ze-me-Dİ', 'لم يستطع أحد حلّ هذا السؤال.', 'کەس نەیتوانی ئەم پرسیارە چارەسەر بکات.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Kibar rica: -ebilir misiniz?',
        body: b(
          'أدبّ صيغة للطلب في التركية هي ‎-ebilir misiniz?‎ — تقابل "هل يمكنك أن... من فضلك؟". Yardım edebilir misiniz? (هل يمكنك المساعدة؟) Tekrar edebilir misiniz? (هل يمكنك الإعادة؟) استخدمها مع الغرباء وفي المواقف الرسمية.',
          'بەڕێزترین شێوەی داواکاری لە تورکیدا ‎-ebilir misiniz?‎ ـە. Yardım edebilir misiniz? (دەتوانیت یارمەتی بدەیت؟) Tekrar edebilir misiniz? (دەتوانیت دووبارەی بکەیتەوە؟)',
        ),
      },
      {
        type: 'dialogue',
        title: 'Bilet gişesinde',
        lines: [
          { speaker: 'Yolcu', tr: 'Merhaba, yardım edebilir misiniz?', pron: 'mer-ha-BA yar-DIM e-de-bi-LİR mi-si-niz', ar: 'مرحباً، هل يمكنك مساعدتي؟', ku: 'سڵاو، دەتوانیت یارمەتیم بدەیت؟' },
          { speaker: 'Görevli', tr: 'Tabii, buyurun.', pron: 'ta-Bİ-i bu-yu-RUN', ar: 'بالتأكيد، تفضّل.', ku: 'بێگومان، فەرموو.' },
          { speaker: 'Yolcu', tr: 'Ankara’ya iki bilet alabilir miyim?', pron: 'an-ka-RA-ya i-Kİ bi-LET a-la-bi-LİR mi-yim', ar: 'هل يمكنني شراء تذكرتين إلى أنقرة؟', ku: 'دەتوانم دوو بلیت بۆ ئەنقەرە بکڕم؟' },
          { speaker: 'Görevli', tr: 'Maalesef sabah treni doldu, ama akşam trenine binebilirsiniz.', pron: 'ma-a-le-SEF sa-BAH tre-Nİ dol-DU a-MA ak-ŞAM tre-ni-NE bi-ne-bi-lir-si-NİZ', ar: 'للأسف امتلأ قطار الصباح، لكن يمكنك ركوب قطار المساء.', ku: 'بەداخەوە شەمەندەفەری بەیانی پڕ بووە، بەڵام دەتوانیت سواری شەمەندەفەری ئێوارە بیت.' },
          { speaker: 'Yolcu', tr: 'Olur, o zaman akşam treni. Kartla ödeyebilir miyim?', pron: 'o-LUR O za-MAN ak-ŞAM tre-Nİ kart-LA ö-de-ye-bi-LİR mi-yim', ar: 'حسناً، إذاً قطار المساء. هل يمكنني الدفع بالبطاقة؟', ku: 'باشە، کەواتە شەمەندەفەری ئێوارە. دەتوانم بە کارت پارە بدەم؟' },
        ],
      },
    ],
    exercises: [
      mcq(
        b('ما نفي "gelebilirim"؟', 'نەفیی "gelebilirim" چییە؟'),
        ['gelebilmem', 'gelemem', 'gelmem', 'gelebilmiyorum'],
        1,
        { turkishOptions: true, explain: b('يسقط bil ويبقى ‎-eme‎.', 'bil دەکەوێت و ‎-eme‎ دەمێنێتەوە.') },
      ),
      fill('Dün seni ___. (aramak / olumsuz yeterlilik / ben, geçmiş)', 'arayamadım', 'لم أستطع الاتصال بك أمس.', 'دوێنێ نەمتوانی پەیوەندیت پێوە بکەم.', {
        options: ['arayamadım', 'aramadım', 'arayabilmedim', 'aramıyordum'],
      }),
      mcq(
        b('كيف تطلب بأدب "هل يمكنك الإعادة؟"', 'چۆن بە ڕێزەوە داوا دەکەیت "دەتوانیت دووبارەی بکەیتەوە؟"'),
        ['Tekrar et!', 'Tekrar ediyor musun?', 'Tekrar edebilir misiniz?', 'Tekrar edeceksin.'],
        2,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'قد تمطر اليوم.', [
        'Bugün yağmur yağıyor.',
        'Bugün yağmur yağabilir.',
        'Bugün yağmur yağacak.',
        'Bugün yağmur yağmaz.',
      ], 1),
      translate('ku-tr', 'ناتوانم مەلە بکەم.', ['Yüzemem.', 'Yüzmem.', 'Yüzebilirim.', 'Yüzmedim.'], 0),
      order(
        b('رتّب: هل يمكنني الدخول؟', 'ڕێک بخە: دەتوانم بێمە ژوورەوە؟'),
        'İçeri girebilir miyim',
        'هل يمكنني الدخول؟',
        'دەتوانم بێمە ژوورەوە؟',
        { pron: 'i-çe-Rİ gi-re-bi-LİR mi-yim' },
      ),
      listening('Türkçe konuşabiliyor musun?', ['هل تستطيع التحدث بالتركية؟', 'هل تتحدث التركية الآن؟', 'هل تعلّمت التركية؟'], 0, 'ar',
        p('Türkçe konuşabiliyor musun?', 'türk-ÇE ko-nu-şa-bi-li-YOR mu-sun', 'هل تستطيع التحدث بالتركية؟', 'دەتوانیت بە تورکی قسە بکەیت؟')),
    ],
  },

  {
    id: 'b1-past-continuous',
    level: 'b1',
    kind: 'grammar',
    order: 3,
    minutes: 22,
    title: 'Şimdiki Zamanın Hikâyesi: -yordu',
    titleI18n: b('الماضي المستمر', 'ڕابردووی بەردەوام'),
    objective: b(
      'أن تصف خلفية الأحداث الماضية: "كنت أقرأ عندما اتصل بي".',
      'ئەوەی پاشبنەمای ڕووداوە ڕابردووەکان وەسف بکەیت: "کتێبم دەخوێندەوە کاتێک پەیوەندی پێوە کردم".',
    ),
    prerequisites: ['a2-past-simple'],
    tags: ['tense', 'verb', 'narrative'],
    blocks: [
      {
        type: 'text',
        title: 'İki geçmişi birleştirmek',
        body: b(
          'لسرد قصة تحتاج زمنين: واحد للخلفية المستمرة (كنت أفعل) وواحد للحدث المقاطع (فحدث كذا). الأول هو ‎-yordu‎ والثاني هو ‎-di‎ الذي تعلّمته. البناء بسيط: خذ صيغة المضارع المستمر وأضف ‎-du‎ ثم لاحقة الشخص: geliyor + du + m = geliyordum (كنت آتياً).',
          'بۆ گێڕانەوەی چیرۆکێک دوو کاتت پێویستە: یەکێک بۆ پاشبنەمای بەردەوام و یەکێک بۆ ڕووداوی پچڕێنەر. یەکەمیان ‎-yordu‎ ـە و دووەمیان ‎-di‎ ـە کە فێری بوویت. دروستکردنەکەی سادەیە: شێوەی ئێستای بەردەوام وەربگرە و ‎-du‎ زیاد بکە پاشان پاشگری کەس.',
        ),
      },
      {
        type: 'conjugation',
        title: 'okumak — şimdiki zamanın hikâyesi',
        verb: 'okuyordum',
        rows: [
          { person: 'ben', tr: 'okuyordum', pron: 'o-ku-YOR-dum', ar: 'كنت أقرأ', ku: 'دەمخوێندەوە' },
          { person: 'sen', tr: 'okuyordun', pron: 'o-ku-YOR-dun', ar: 'كنت تقرأ', ku: 'دەتخوێندەوە' },
          { person: 'o', tr: 'okuyordu', pron: 'o-ku-YOR-du', ar: 'كان يقرأ', ku: 'دەیخوێندەوە' },
          { person: 'biz', tr: 'okuyorduk', pron: 'o-ku-YOR-duk', ar: 'كنا نقرأ', ku: 'دەمانخوێندەوە' },
          { person: 'siz', tr: 'okuyordunuz', pron: 'o-ku-YOR-du-nuz', ar: 'كنتم تقرؤون', ku: 'دەتانخوێندەوە' },
          { person: 'onlar', tr: 'okuyorlardı', pron: 'o-ku-YOR-lar-dı', ar: 'كانوا يقرؤون', ku: 'دەیانخوێندەوە' },
        ],
      },
      {
        type: 'examples',
        title: 'Arka plan + kesen olay',
        items: [
          p('Kitap okuyordum, telefon çaldı.', 'ki-TAP o-ku-YOR-dum te-le-FON çal-DI', 'كنت أقرأ كتاباً، فرنّ الهاتف.', 'کتێبم دەخوێندەوە، تەلەفۆن لێیدا.'),
          p('Yağmur yağıyordu, o yüzden çıkmadık.', 'YAA-mur ya-ı-YOR-du O yüz-DEN çık-ma-DIK', 'كانت تمطر، لهذا لم نخرج.', 'باران دەباری، لەبەر ئەوە نەچووینە دەرەوە.'),
          p('Ne yapıyordun o sırada?', 'NE ya-pı-YOR-dun O sı-ra-DA', 'ماذا كنت تفعل حينها؟', 'ئەو کاتە چیت دەکرد؟'),
          p('Çocukken her yaz köye giderdik.', 'ço-djuk-KEN her YAZ kö-YE gi-der-DİK', 'حين كنا صغاراً كنا نذهب إلى القرية كل صيف.', 'کاتێک منداڵ بووین هەموو هاوینێک دەچووینە گوند.'),
          p('Dün bu saatte ders çalışıyordum.', 'DÜN BU sa-at-TE DERS ça-lı-şı-YOR-dum', 'كنت أدرس في مثل هذه الساعة أمس.', 'دوێنێ لەم کاتەدا وانەم دەخوێند.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: '-ardı / -erdi: eskiden yapılan alışkanlık',
        body: b(
          'هناك صيغة أخرى للماضي المعتاد: الزمن الواسع + ‎-dı‎، أي ‎-ardı/-erdi‎. تعني "كنّا نفعل كذا في الماضي" كعادة انقطعت: Çocukken her gün futbol oynardık (كنا نلعب كرة القدم كل يوم في الطفولة). الفرق عن ‎-yordu‎: هذه للعادة المتكرّرة وتلك للحظة مستمرة محدّدة.',
          'شێوەیەکی تری ڕابردووی خوویی هەیە: کاتی فراوان + ‎-dı‎، واتە ‎-ardı/-erdi‎. واتای "پێشتر وامان دەکرد" وەک خوویەکی پچڕاو: Çocukken her gün futbol oynardık. جیاوازی لەگەڵ ‎-yordu‎: ئەمە بۆ خووی دووبارەیە و ئەوە بۆ ساتێکی دیاریکراوی بەردەوام.',
        ),
      },
    ],
    exercises: [
      fill('Kitap ___, telefon çaldı. (okumak / ben)', 'okuyordum', 'كنت أقرأ كتاباً، فرنّ الهاتف.', 'کتێبم دەخوێندەوە، تەلەفۆن لێیدا.', {
        options: ['okuyordum', 'okudum', 'okurum', 'okuyacağım'],
      }),
      mcq(
        b('أي جملة تصف خلفية مستمرة في الماضي؟', 'کام ڕستە پاشبنەمای بەردەوامی ڕابردوو وەسف دەکات؟'),
        ['Dün sinemaya gittim.', 'Dün akşam ders çalışıyordum.', 'Yarın geleceğim.', 'Her gün çalışırım.'],
        1,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'ماذا كنت تفعل؟', ['Ne yaptın?', 'Ne yapıyordun?', 'Ne yapıyorsun?', 'Ne yapacaksın?'], 1),
      order(
        b('رتّب: كانت تمطر، لهذا لم نخرج.', 'ڕێک بخە: باران دەباری، لەبەر ئەوە نەچووینە دەرەوە.'),
        'Yağmur yağıyordu bu yüzden çıkmadık',
        'كانت تمطر، لهذا لم نخرج.',
        'باران دەباری، لەبەر ئەوە نەچووینە دەرەوە.',
        { pron: 'YAA-mur ya-ı-YOR-du BU yüz-DEN çık-ma-DIK' },
      ),
      speak('Çocukken her yaz dedemin köyüne giderdik.', 'ço-djuk-KEN her YAZ de-de-MİN kö-yü-NE gi-der-DİK', 'حين كنا صغاراً كنا نذهب كل صيف إلى قرية جدي.', 'کاتێک منداڵ بووین هەموو هاوینێک دەچووینە گوندی باپیرم.'),
    ],
  },

  {
    id: 'b1-conditional',
    level: 'b1',
    kind: 'grammar',
    order: 4,
    minutes: 32,
    title: 'Şart Kipi: -se / -sa',
    titleI18n: b('صيغة الشرط', 'شێوەی مەرج'),
    objective: b(
      'أن تفرّق بين الشرط الممكن والشرط المستحيل، وأن تبني كلا النوعين.',
      'ئەوەی جیاوازی بکەیت لە نێوان مەرجی گونجاو و مەرجی مەحاڵ، و هەردووکیان دروست بکەیت.',
    ),
    prerequisites: ['b1-aorist'],
    tags: ['conditional', 'verb'],
    blocks: [
      {
        type: 'text',
        title: 'İki tür şart',
        body: b(
          'التركية تفصل بوضوح بين نوعين من الشرط، تماماً كما تفعل العربية بـ"إنْ" و"لو": (1) الشرط الحقيقي الممكن ⟵ ‎-irse‎ (إن جاء، فسأخبره). (2) الشرط الافتراضي أو المستحيل ⟵ ‎-se‎ أو ‎-seydi‎ (لو جاء لأخبرته / لو كنت غنياً). الفرق في اللاحقة، وليس في السياق فقط.',
          'تورکی بە ڕوونی دوو جۆر مەرج جیا دەکاتەوە: (١) مەرجی ڕاستەقینەی گونجاو ⟵ ‎-irse‎ (ئەگەر بێت، پێی دەڵێم). (٢) مەرجی گریمانەیی یان مەحاڵ ⟵ ‎-se‎ یان ‎-seydi‎ (ئەگەر بهاتایە پێم دەگوت / ئەگەر دەوڵەمەند بوومایە).',
        ),
      },
      {
        type: 'table',
        title: 'Şart türleri',
        headers: ['Tür', 'Yapı', 'Örnek', 'Anlam'],
        rows: [
          ['Gerçek / olası', 'geniş zaman + -se', 'Yağmur yağarsa gitmeyiz.', 'إن أمطرت لن نذهب / ئەگەر باران باری نایەین'],
          ['Şimdiki gerçek', '-ıyorsa', 'Geliyorsa haber ver.', 'إن كان قادماً أخبرني / ئەگەر دێت پێم بڵێ'],
          ['Hayalî / şimdiki', '-se', 'Zengin olsam dünyayı gezerim.', 'لو كنت غنياً لجُبت العالم / ئەگەر دەوڵەمەند بم بە جیهاندا دەگەڕێم'],
          ['Gerçekleşmemiş geçmiş', '-seydi', 'Çalışsaydın kazanırdın.', 'لو درست لنجحت / ئەگەر بتخوێندایە سەردەکەوتیت'],
          ['İstek / dilek', 'keşke + -se', 'Keşke burada olsaydın.', 'ليتك كنت هنا / خۆزگە لێرە بوویتایە'],
        ],
      },
      {
        type: 'conjugation',
        title: 'gelmek — şart eki -se',
        verb: 'gelse',
        rows: [
          { person: 'ben', tr: 'gelsem', pron: 'gel-SEM', ar: 'لو جئتُ', ku: 'ئەگەر بێم' },
          { person: 'sen', tr: 'gelsen', pron: 'gel-SEN', ar: 'لو جئتَ', ku: 'ئەگەر بێیت' },
          { person: 'o', tr: 'gelse', pron: 'gel-SE', ar: 'لو جاء', ku: 'ئەگەر بێت' },
          { person: 'biz', tr: 'gelsek', pron: 'gel-SEK', ar: 'لو جئنا', ku: 'ئەگەر بێین' },
          { person: 'siz', tr: 'gelseniz', pron: 'gel-se-NİZ', ar: 'لو جئتم', ku: 'ئەگەر بێن' },
          { person: 'onlar', tr: 'gelseler', pron: 'gel-se-LER', ar: 'لو جاؤوا', ku: 'ئەگەر بێن' },
        ],
      },
      {
        type: 'examples',
        title: 'Gerçek şart: -irse',
        items: [
          p('Yağmur yağarsa dışarı çıkmayız.', 'YAA-mur ya-AR-sa dı-şa-RI çık-ma-YIZ', 'إن أمطرت لن نخرج.', 'ئەگەر باران باری نایەینە دەرەوە.'),
          p('Vaktin varsa bana yardım et.', 'vak-TİN var-SA ba-NA yar-DIM ET', 'إن كان لديك وقت فساعدني.', 'ئەگەر کاتت هەیە یارمەتیم بدە.'),
          p('Çalışırsan başarırsın.', 'ça-lı-şır-SAN ba-şa-rır-SIN', 'إن اجتهدت نجحت.', 'ئەگەر کۆشش بکەیت سەردەکەویت.'),
          p('İstersen birlikte gidebiliriz.', 'is-ter-SEN bir-lik-TE gi-de-bi-li-RİZ', 'إن أردت يمكننا الذهاب معاً.', 'ئەگەر بتەوێت دەتوانین پێکەوە بڕۆین.'),
        ],
      },
      {
        type: 'examples',
        title: 'Hayalî şart: -se / -seydi',
        items: [
          p('Zengin olsam bir ev alırdım.', 'zen-GİN ol-SAM bir EV a-lır-DIM', 'لو كنت غنياً لاشتريت بيتاً.', 'ئەگەر دەوڵەمەند بوومایە ماڵێکم دەکڕی.'),
          p('Daha çok çalışsaydın sınavı geçerdin.', 'da-HA ÇOK ça-lış-say-DIN sı-na-VI ge-çer-DİN', 'لو درست أكثر لنجحت في الامتحان.', 'ئەگەر زیاتر بتخوێندایە لە تاقیکردنەوەکە سەردەکەوتیت.'),
          p('Keşke burada olsaydın.', 'keş-KE bu-ra-DA ol-say-DIN', 'ليتك كنت هنا.', 'خۆزگە لێرە بوویتایە.'),
          p('Bilseydim gelmezdim.', 'bil-sey-DİM gel-mez-DİM', 'لو كنت أعلم لما جئت.', 'ئەگەر بمزانیایە نەدەهاتم.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Sonuç cümlesi hangi zamanda?',
        body: b(
          'قاعدة تنسيق الزمنين: مع الشرط الحقيقي (‎-irse‎) يأتي الجواب في المضارع أو المستقبل. ومع الشرط الافتراضي (‎-se‎) يأتي الجواب في الزمن الواسع + ‎-dı‎ أي ‎-irdi‎: "Zengin olsam alırdım". هذه المطابقة تشبه تماماً "لو ... لَـ" في العربية.',
          'ڕێسای گونجاندنی دوو کات: لەگەڵ مەرجی ڕاستەقینە (‎-irse‎) وەڵامەکە بە ئێستا یان داهاتوو دێت. لەگەڵ مەرجی گریمانەیی (‎-se‎) وەڵامەکە بە کاتی فراوان + ‎-dı‎ دێت واتە ‎-irdi‎.',
        ),
      },
    ],
    exercises: [
      fill('Yağmur ___ dışarı çıkmayız. (yağmak / gerçek şart)', 'yağarsa', 'إن أمطرت لن نخرج.', 'ئەگەر باران باری نایەینە دەرەوە.', {
        options: ['yağarsa', 'yağsa', 'yağsaydı', 'yağıyorsa'],
      }),
      mcq(
        b('أي جملة تعبّر عن شرط مستحيل في الماضي؟', 'کام ڕستە مەرجی مەحاڵی ڕابردوو دەردەبڕێت؟'),
        [
          'Çalışırsan kazanırsın.',
          'Çalışsaydın kazanırdın.',
          'Çalışıyorsan gel.',
          'Çalışacaksan söyle.',
        ],
        1,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'ليتك كنت هنا.', [
        'Keşke burada olsaydın.',
        'Keşke burada olursun.',
        'Burada olacaksın.',
        'Burada mısın?',
      ], 0),
      translate('tr-ar', 'İstersen birlikte gidebiliriz.', [
        'إن أردت يمكننا الذهاب معاً.',
        'أردت أن نذهب معاً.',
        'سنذهب معاً غداً.',
        'لم نستطع الذهاب معاً.',
      ], 0, { pron: 'is-ter-SEN bir-lik-TE gi-de-bi-li-RİZ' }),
      order(
        b('رتّب: لو كنت غنياً لاشتريت بيتاً.', 'ڕێک بخە: ئەگەر دەوڵەمەند بوومایە ماڵێکم دەکڕی.'),
        'Zengin olsam bir ev alırdım',
        'لو كنت غنياً لاشتريت بيتاً.',
        'ئەگەر دەوڵەمەند بوومایە ماڵێکم دەکڕی.',
        { pron: 'zen-GİN ol-SAM bir EV a-lır-DIM' },
      ),
      match(
        b('طابق نوع الشرط بمثاله.', 'جۆری مەرج لەگەڵ نموونەکەیدا بگونجێنە.'),
        [
          { tr: 'Gelirse söyle.', ar: 'شرط حقيقي ممكن', ku: 'مەرجی ڕاستەقینە' },
          { tr: 'Gelseydi görürdüm.', ar: 'شرط لم يتحقّق في الماضي', ku: 'مەرجی نەهاتووەدی' },
          { tr: 'Keşke gelse.', ar: 'تمنٍّ', ku: 'خۆزگەخواستن' },
          { tr: 'Geliyorsa bekleyelim.', ar: 'شرط عن حال قائمة', ku: 'مەرج لەسەر دۆخی ئێستا' },
        ],
      ),
    ],
  },

  {
    id: 'b1-passive',
    level: 'b1',
    kind: 'grammar',
    order: 5,
    minutes: 30,
    title: 'Edilgen Çatı',
    titleI18n: b('المبني للمجهول', 'ڕەنگی نەناسراو'),
    objective: b(
      'أن تحوّل الجملة إلى المبني للمجهول، وأن تقرأ اللافتات والنصوص الرسمية.',
      'ئەوەی ڕستە بگۆڕیت بۆ ڕەنگی نەناسراو، و تابلۆ و دەقە فەرمییەکان بخوێنیتەوە.',
    ),
    prerequisites: ['a2-cases'],
    tags: ['voice', 'verb', 'formal'],
    blocks: [
      {
        type: 'text',
        title: 'Fail bilinmiyorsa veya önemsizse',
        body: b(
          'المبني للمجهول يُستخدم حين يكون الفاعل مجهولاً أو غير مهم: "فُتح الباب"، "يُمنع التدخين". وهو أساس اللافتات والقوانين والنصوص الأكاديمية في التركية. الميزة: التركية تبنيه بلاحقة واحدة بدل تغيير الحركات كما في العربية.',
          'ڕەنگی نەناسراو کاتێک بەکاردێت کە کردار نەناسراو یان گرنگ نەبێت: "دەرگاکە کرایەوە"، "جگەرەکێشان قەدەغەیە". بنەمای تابلۆ و یاسا و دەقە ئەکادیمییەکانە لە تورکیدا.',
        ),
      },
      {
        type: 'table',
        title: 'Üç ek, üç kural',
        headers: ['Kök nasıl bitiyor?', 'Ek', 'Örnek', 'Edilgen'],
        rows: [
          ['Ünlü ile', '-n-', 'oku-, ye-, başla-', 'okunmak, yenmek, başlanmak'],
          ['"l" ile', '-in- / -ın- / -un- / -ün-', 'bul-, al-, bil-', 'bulunmak, alınmak, bilinmek'],
          ['Diğer ünsüzlerle', '-il- / -ıl- / -ul- / -ül-', 'yaz-, aç-, kır-, sat-', 'yazılmak, açılmak, kırılmak, satılmak'],
        ],
      },
      {
        type: 'examples',
        title: 'Etken → edilgen',
        items: [
          p('Ali kapıyı açtı. → Kapı açıldı.', 'a-Lİ ka-pı-YI aç-TI → ka-PI a-çıl-DI', 'فتح علي الباب. ← فُتح الباب.', 'عەلی دەرگاکەی کردەوە. ← دەرگاکە کرایەوە.'),
          p('Mektubu yazdım. → Mektup yazıldı.', 'mek-tu-BU yaz-DIM → mek-TUP ya-zıl-DI', 'كتبت الرسالة. ← كُتبت الرسالة.', 'نامەکەم نووسی. ← نامەکە نووسرا.'),
          p('Bu kitabı çok okuyorlar. → Bu kitap çok okunuyor.', 'BU ki-ta-BI ÇOK o-ku-yor-lar → BU ki-TAP ÇOK o-ku-nu-YOR', 'يقرؤون هذا الكتاب كثيراً. ← يُقرأ هذا الكتاب كثيراً.', 'ئەم کتێبە زۆر دەخوێننەوە. ← ئەم کتێبە زۆر دەخوێنرێتەوە.'),
          p('Evi sattılar. → Ev satıldı.', 'e-Vİ sat-tı-lar → EV sa-tıl-DI', 'باعوا البيت. ← بيع البيت.', 'ماڵەکەیان فرۆشت. ← ماڵەکە فرۆشرا.'),
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Nesne özneye dönüşür ve hâl eki DÜŞER',
        body: b(
          'انتبه للتحوّل النحوي: المفعول به في الجملة المعلومة يصبح فاعلاً في المجهولة، ولذلك تسقط عنه لاحقة المفعولية. "Kapıyı açtı" فيها kapı-yı بلاحقة ‎-yı‎، لكن في المجهول تصبح "Kapı açıldı" بلا لاحقة. هذا خطأ شائع جداً.',
          'ئاگاداری گۆڕانی ڕێزمانی بە: بەرکار لە ڕستەی ناسراودا دەبێتە کردار لە نەناسراودا، بۆیە پاشگری بەرکاری دەکەوێت. "Kapıyı açtı" پاشگری ‎-yı‎ ی هەیە، بەڵام لە نەناسراودا دەبێتە "Kapı açıldı" بێ پاشگر.',
        ),
      },
      {
        type: 'text',
        title: 'Fail nasıl belirtilir? "tarafından"',
        body: b(
          'إذا احتجت لذكر الفاعل في الجملة المجهولة تستخدم كلمة tarafından (من قِبَل): "Bu roman Orhan Pamuk tarafından yazıldı" (كُتبت هذه الرواية من قِبَل أورهان باموك). لكن الأسلوب التركي الطبيعي يتجنّب هذا ويفضّل الجملة المعلومة إذا كان الفاعل معروفاً.',
          'ئەگەر پێویستت بە باسکردنی کردار بێت لە ڕستەی نەناسراودا، وشەی tarafından (لەلایەن) بەکاردەهێنیت: "Bu roman Orhan Pamuk tarafından yazıldı". بەڵام شێوازی سروشتی تورکی ئەمە دەگرێت و ڕستەی ناسراو پەسەند دەکات.',
        ),
      },
      {
        type: 'examples',
        title: 'Tabelalar ve resmî dil',
        items: [
          p('Sigara içilmez.', 'si-ga-RA i-çil-MEZ', 'ممنوع التدخين.', 'جگەرەکێشان قەدەغەیە.'),
          p('Buraya park edilmez.', 'bu-ra-YA PARK e-dil-MEZ', 'ممنوع الوقوف هنا.', 'لێرە وەستان قەدەغەیە.'),
          p('Kapı otomatik olarak açılır.', 'ka-PI o-to-ma-TİK o-la-RAK a-çı-LIR', 'يُفتح الباب تلقائياً.', 'دەرگاکە بە خۆکاری دەکرێتەوە.'),
          p('Toplantı yarına ertelendi.', 'top-lan-TI ya-rı-NA er-te-len-Dİ', 'أُجّل الاجتماع إلى الغد.', 'کۆبوونەوەکە بۆ سبەینێ دواخرا.'),
          p('Bu ürün Türkiye’de üretiliyor.', 'BU ü-RÜN tür-ki-YE-de ü-re-ti-li-YOR', 'يُنتج هذا المنتج في تركيا.', 'ئەم بەرهەمە لە تورکیا بەرهەم دەهێنرێت.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Kişisiz edilgen: "burada Türkçe konuşulur"',
        body: b(
          'استخدام خاص: يمكن بناء المجهول من فعل لازم ليعبّر عن عموم الناس، مثل "on" الفرنسية أو "المبني للمجهول العام": Burada Türkçe konuşulur (يُتحدَّث هنا بالتركية). Nasıl gidilir? (كيف يُذهَب إلى هناك؟) Böyle yapılmaz (لا يُفعل هكذا).',
          'بەکارهێنانێکی تایبەت: دەتوانرێت نەناسراو لە کاری نەگوێزەرەوە دروست بکرێت بۆ دەربڕینی خەڵکی گشتی: Burada Türkçe konuşulur. Nasıl gidilir? Böyle yapılmaz.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما صيغة المجهول من "yazmak"؟', 'شێوەی نەناسراوی "yazmak" چییە؟'),
        ['yazınmak', 'yazılmak', 'yaznmak', 'yazmak'],
        1,
        { turkishOptions: true, explain: b('الجذر ينتهي بحرف ساكن غير l ⟵ ‎-ıl-‎.', 'ڕەگەکە بە کۆنسۆنانتێکی جگە لە l کۆتایی دێت ⟵ ‎-ıl-‎.') },
      ),
      mcq(
        b('ما صيغة المجهول من "okumak"؟', 'شێوەی نەناسراوی "okumak" چییە؟'),
        ['okulmak', 'okunmak', 'okuilmak', 'okumak'],
        1,
        { turkishOptions: true, explain: b('الجذر ينتهي بحركة ⟵ ‎-n-‎.', 'ڕەگەکە بە بزوێن کۆتایی دێت ⟵ ‎-n-‎.') },
      ),
      mcq(
        b('حوّل: "Ali kapıyı açtı" إلى المجهول.', 'بیگۆڕە بۆ نەناسراو: "Ali kapıyı açtı".'),
        ['Kapıyı açıldı.', 'Kapı açıldı.', 'Kapı açtı.', 'Kapıyı açtı.'],
        1,
        { turkishOptions: true, explain: b('تسقط لاحقة المفعولية لأن المفعول صار فاعلاً.', 'پاشگری بەرکاری دەکەوێت چونکە بەرکار بووە بە کردار.') },
      ),
      fill('Sigara ___. (içmek / edilgen geniş olumsuz)', 'içilmez', 'ممنوع التدخين.', 'جگەرەکێشان قەدەغەیە.', {
        options: ['içilmez', 'içmez', 'içilmiyor', 'içilmedi'],
      }),
      translate('tr-ar', 'Toplantı yarına ertelendi.', [
        'أُجّل الاجتماع إلى الغد.',
        'سيكون الاجتماع غداً.',
        'أجّلنا الاجتماع.',
        'انتهى الاجتماع أمس.',
      ], 0, { pron: 'top-lan-TI ya-rı-NA er-te-len-Dİ' }),
      listening('Burada Türkçe konuşulur.', ['يُتحدَّث هنا بالتركية.', 'أنا أتحدث التركية.', 'هل تتحدث التركية؟'], 0, 'ar',
        p('Burada Türkçe konuşulur.', 'bu-ra-DA türk-ÇE ko-nu-şu-LUR', 'يُتحدَّث هنا بالتركية.', 'لێرە بە تورکی قسە دەکرێت.')),
    ],
  },

  {
    id: 'b1-imperative',
    level: 'b1',
    kind: 'grammar',
    order: 6,
    minutes: 22,
    title: 'Emir ve İstek Kipi',
    titleI18n: b('صيغة الأمر والرجاء', 'شێوەی فەرمان و داواکاری'),
    objective: b(
      'أن تأمر وتنهى وتقترح بدرجات مختلفة من الأدب.',
      'ئەوەی فەرمان بدەیت و قەدەغە بکەیت و پێشنیار بکەیت بە ئاستی جیاوازی ڕێزەوە.',
    ),
    prerequisites: ['a1-present-continuous'],
    tags: ['mood', 'verb', 'pragmatics'],
    blocks: [
      {
        type: 'text',
        title: 'Emir: en kısa fiil biçimi',
        body: b(
          'صيغة الأمر للمخاطب المفرد هي جذر الفعل عارياً تماماً: gel! (تعال!)، bak! (انظر!)، otur! (اجلس!). وهي أقصر صيغة في اللغة. النهي بإضافة ‎-me/-ma‎: gelme! (لا تأتِ!)، bakma! (لا تنظر!).',
          'شێوەی فەرمان بۆ کەسی دووەمی تاک ڕەگی کارە بە تەواوی ڕووت: gel! (وەرە!)، bak! (سەیرکە!)، otur! (دابنیشە!). کورتترین شێوەی زمانە. قەدەغەکردنیش بە زیادکردنی ‎-me/-ma‎: gelme!، bakma!',
        ),
      },
      {
        type: 'table',
        title: 'Emir kipinin dört kişisi',
        headers: ['Kişi', 'Ek', 'Örnek (gelmek)', 'Nezaket düzeyi'],
        rows: [
          ['sen', '— (kök)', 'Gel!', 'Samimi, arkadaşça'],
          ['siz', '-in / -ın / -un / -ün', 'Gelin.', 'Kibar, resmî'],
          ['siz (çok resmî)', '-iniz / -ınız', 'Geliniz.', 'Yazılı, çok resmî'],
          ['o', '-sin / -sın / -sun / -sün', 'Gelsin.', 'Üçüncü kişiye buyruk'],
          ['onlar', '-sinler / -sınlar', 'Gelsinler.', 'Çoğul üçüncü kişi'],
        ],
      },
      {
        type: 'examples',
        title: 'Günlük emirler',
        items: [
          p('Buraya gel!', 'bu-ra-YA GEL', 'تعال إلى هنا!', 'وەرە ئێرە!'),
          p('Lütfen oturun.', 'lüt-FEN o-tu-RUN', 'اجلسوا من فضلكم.', 'تکایە دابنیشن.'),
          p('Kapıyı kapat.', 'ka-pı-YI ka-PAT', 'أغلق الباب.', 'دەرگاکە دابخە.'),
          p('Endişelenme, her şey yoluna girecek.', 'en-di-şe-len-ME her ŞEY yo-lu-NA gi-re-DJEK', 'لا تقلق، كل شيء سيكون بخير.', 'نیگەران مەبە، هەموو شتێک باش دەبێت.'),
          p('Lütfen dikkatli olunuz.', 'lüt-FEN dik-kat-LI o-lu-NUZ', 'يُرجى الانتباه.', 'تکایە وریابن.'),
          p('Çayını iç, soğuyor.', 'ça-yı-NI İÇ so-u-YOR', 'اشرب شايك، إنه يبرد.', 'چاکەت بخۆوە، سارد دەبێتەوە.'),
        ],
      },
      {
        type: 'text',
        title: 'İstek kipi: -eyim / -elim',
        body: b(
          'صيغة الرجاء أو الاقتراح تخصّ المتكلم: ‎-eyim/-ayım‎ للمفرد (دعني أفعل) و ‎-elim/-alım‎ للجمع (لنفعل). Gideyim mi? (هل أذهب؟) Gidelim! (لنذهب!) هذه من أكثر الصيغ استعمالاً في اقتراح شيء على المجموعة.',
          'شێوەی داواکاری یان پێشنیار تایبەتە بە قسەکەر: ‎-eyim/-ayım‎ بۆ تاک (با بکەم) و ‎-elim/-alım‎ بۆ کۆ (با بکەین). Gideyim mi? (بڕۆم؟) Gidelim! (با بڕۆین!)',
        ),
      },
      {
        type: 'examples',
        title: 'Teklif ve öneri',
        items: [
          p('Hadi gidelim!', 'ha-Dİ gi-de-LİM', 'هيا لنذهب!', 'دە با بڕۆین!'),
          p('Bir kahve içelim mi?', 'bir kah-VE i-çe-LİM mi', 'هل نشرب قهوة؟', 'قاوەیەک بخۆینەوە؟'),
          p('Sana yardım edeyim mi?', 'sa-NA yar-DIM e-de-YİM mi', 'هل أساعدك؟', 'یارمەتیت بدەم؟'),
          p('Yarın buluşalım.', 'ya-RIN bu-lu-şa-LIM', 'لنلتقِ غداً.', 'سبەینێ یەکتر ببینین.'),
          p('Ne yapalım şimdi?', 'NE ya-pa-LIM şim-Dİ', 'ماذا نفعل الآن؟', 'ئێستا چی بکەین؟'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Nezaket merdiveni',
        body: b(
          'درجات الأدب في الطلب من الأقل إلى الأكثر: (1) Gel. (2) Gelsene. (3) Gelin. (4) Gelir misin? (5) Gelebilir misiniz? (6) Gelme imkânınız var mı? استخدم الدرجة الرابعة فما فوق مع الغرباء ومن هم أكبر منك.',
          'پلەکانی ڕێز لە داواکاریدا لە کەمترەوە بۆ زۆرتر: (١) Gel. (٢) Gelsene. (٣) Gelin. (٤) Gelir misin? (٥) Gelebilir misiniz? پلەی چوارەم بەرەوسەر لەگەڵ نەناسیاو و کەسی گەورەتر بەکاربهێنە.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما صيغة الأمر المهذّبة من "oturmak" للجمع؟', 'شێوەی فەرمانی بەڕێزی "oturmak" بۆ کۆ چییە؟'),
        ['Otur!', 'Oturun.', 'Otursun.', 'Oturalım.'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('كيف تقترح "لنذهب"؟', 'چۆن پێشنیار دەکەیت "با بڕۆین"؟'),
        ['Gidin.', 'Gideyim.', 'Gidelim.', 'Gitsinler.'],
        2,
        { turkishOptions: true },
      ),
      fill('Lütfen ___, çok yorgunsun. (dinlenmek / siz emri)', 'dinlenin', 'من فضلك استرح، أنت متعب جداً.', 'تکایە پشوو بدە، زۆر ماندوویت.', {
        options: ['dinlenin', 'dinlen', 'dinlensin', 'dinlenelim'],
      }),
      translate('ar-tr', 'لا تقلق.', ['Endişelen.', 'Endişelenme.', 'Endişelenmiyor.', 'Endişelensin.'], 1),
      order(
        b('رتّب: هل نشرب قهوة؟', 'ڕێک بخە: قاوەیەک بخۆینەوە؟'),
        'Bir kahve içelim mi',
        'هل نشرب قهوة؟',
        'قاوەیەک بخۆینەوە؟',
        { pron: 'bir kah-VE i-çe-LİM mi' },
      ),
      speak('Hadi gidelim, geç kalıyoruz!', 'ha-Dİ gi-de-LİM GEÇ ka-lı-YO-ruz', 'هيا لنذهب، سنتأخر!', 'دە با بڕۆین، درەنگ دەکەوین!'),
    ],
  },

  {
    id: 'b1-necessity',
    level: 'b1',
    kind: 'grammar',
    order: 7,
    minutes: 24,
    title: 'Gereklilik ve Zorunluluk',
    titleI18n: b('الوجوب والاضطرار', 'پێویستی و ناچاری'),
    objective: b(
      'أن تفرّق بين ما ينبغي وما يلزم وما تُجبَر عليه، وأن تنفي كلاً منها بدقّة.',
      'ئەوەی جیاوازی بکەیت لە نێوان ئەوەی دەبێت و ئەوەی پێویستە و ئەوەی ناچاریت، و بە وردی نەفییان بکەیت.',
    ),
    prerequisites: ['a2-modals-basic'],
    tags: ['modality', 'verb'],
    blocks: [
      {
        type: 'table',
        title: 'Dört yapı, dört güç derecesi',
        headers: ['Yapı', 'Kaynak', 'Örnek', 'Anlam'],
        rows: [
          ['-meli / -malı', 'İç ses, öneri', 'Dinlenmelisin.', 'ينبغي أن تستريح / دەبێت پشوو بدەیت'],
          ['-mesi lazım / gerek', 'Nesnel ihtiyaç', 'Gitmem lazım.', 'يلزمني الذهاب / پێویستە بڕۆم'],
          ['-mek zorunda', 'Dış baskı, mecburiyet', 'Çalışmak zorundayım.', 'أنا مضطر للعمل / ناچارم کار بکەم'],
          ['-mek durumunda', 'Şartların dayatması', 'Beklemek durumundayız.', 'نحن في وضع يحتّم الانتظار / ناچارین چاوەڕێ بکەین'],
        ],
      },
      {
        type: 'text',
        title: '"lazım" yapısı: isim-fiil + iyelik',
        body: b(
          'تركيب lazım له بنية خاصة: المصدر بلاحقة ‎-me‎ + لاحقة الملكية + lazım. gitmem lazım (يلزمني الذهاب)، gitmen lazım (يلزمك)، gitmesi lazım (يلزمه)، gitmemiz lazım (يلزمنا). لاحظ أن الشخص يظهر في لاحقة الملكية لا في lazım.',
          'پێکهاتەی lazım پێکهاتەیەکی تایبەتی هەیە: سەرچاوە بە پاشگری ‎-me‎ + پاشگری خاوەندارێتی + lazım. gitmem lazım (پێویستە بڕۆم)، gitmen lazım، gitmesi lazım، gitmemiz lazım.',
        ),
      },
      {
        type: 'conjugation',
        title: 'gitmek + lazım',
        verb: 'gitmem lazım',
        rows: [
          { person: 'ben', tr: 'Gitmem lazım.', pron: 'git-MEM la-ZIM', ar: 'يلزمني أن أذهب.', ku: 'پێویستە بڕۆم.' },
          { person: 'sen', tr: 'Gitmen lazım.', pron: 'git-MEN la-ZIM', ar: 'يلزمك أن تذهب.', ku: 'پێویستە بڕۆیت.' },
          { person: 'o', tr: 'Gitmesi lazım.', pron: 'git-me-Sİ la-ZIM', ar: 'يلزمه أن يذهب.', ku: 'پێویستە بڕوات.' },
          { person: 'biz', tr: 'Gitmemiz lazım.', pron: 'git-me-MİZ la-ZIM', ar: 'يلزمنا أن نذهب.', ku: 'پێویستە بڕۆین.' },
          { person: 'siz', tr: 'Gitmeniz lazım.', pron: 'git-me-NİZ la-ZIM', ar: 'يلزمكم أن تذهبوا.', ku: 'پێویستە بڕۆن.' },
          { person: 'onlar', tr: 'Gitmeleri lazım.', pron: 'git-me-le-Rİ la-ZIM', ar: 'يلزمهم أن يذهبوا.', ku: 'پێویستە بڕۆن.' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Olumsuzda anlam ikiye ayrılır',
        body: b(
          'انتبه لفرق دقيق في النفي: "gitmemelisin" تعني "يجب ألا تذهب" (نهي). أما "gitmen gerekmiyor" فتعني "لا يلزمك الذهاب" (رفع الوجوب، لكن يمكنك). قارن بالعربية: "يجب ألا" ≠ "لا يجب". هذا الفرق مهم في التعليمات الطبية والقانونية.',
          'ئاگاداری جیاوازییەکی ورد بە لە نەفیدا: "gitmemelisin" واتای "نابێت بڕۆیت" (قەدەغە). بەڵام "gitmen gerekmiyor" واتای "پێویست ناکات بڕۆیت" (لابردنی پێویستی، بەڵام دەتوانیت).',
        ),
      },
      {
        type: 'examples',
        title: 'Gerçek kullanımlar',
        items: [
          p('Bu ilacı her gün almalısın.', 'BU i-la-DJI her GÜN al-ma-lı-SIN', 'يجب أن تأخذ هذا الدواء كل يوم.', 'دەبێت ئەم دەرمانە هەموو ڕۆژێک بخۆیت.'),
          p('Yarın erken kalkmam lazım.', 'ya-RIN er-KEN kalk-MAM la-ZIM', 'يلزمني الاستيقاظ باكراً غداً.', 'سبەینێ پێویستە زوو هەستم.'),
          p('Vize için başvurmak zorundasınız.', 'vi-ZE i-ÇİN baş-vur-MAK zo-run-da-sı-NIZ', 'أنتم مضطرون للتقديم من أجل التأشيرة.', 'ناچارن بۆ ڤیزە داواکاری بکەن.'),
          p('Endişelenmene gerek yok.', 'en-di-şe-len-me-NE ge-REK YOK', 'لا داعي لأن تقلق.', 'پێویست ناکات نیگەران بیت.'),
          p('Bu formu doldurmanız gerekiyor.', 'BU for-MU dol-dur-ma-NIZ ge-re-ki-YOR', 'يلزمكم تعبئة هذه الاستمارة.', 'پێویستە ئەم فۆرمە پڕ بکەنەوە.'),
        ],
      },
    ],
    exercises: [
      mcq(
        b('أي تركيب يعبّر عن اضطرار خارجي؟', 'کام پێکهاتە ناچاری دەرەکی دەردەبڕێت؟'),
        ['-meli', 'lazım', 'zorunda', '-ebilmek'],
        2,
      ),
      fill('Yarın erken kalk___ lazım. (ben)', 'mam', 'يلزمني الاستيقاظ باكراً غداً.', 'سبەینێ پێویستە زوو هەستم.', {
        options: ['mam', 'man', 'ması', 'mamız'],
      }),
      mcq(
        b('ما الفرق: "gitmemelisin" مقابل "gitmen gerekmiyor"؟', 'جیاوازی چییە: "gitmemelisin" بەرامبەر "gitmen gerekmiyor"؟'),
        [
          'لا فرق بينهما',
          'الأولى نهي (يجب ألا)، الثانية رفع وجوب (لا يلزم)',
          'الأولى ماضٍ والثانية مضارع',
          'الأولى رسمية والثانية عامية',
        ],
        1,
      ),
      translate('ar-tr', 'لا داعي لأن تقلق.', [
        'Endişelenmelisin.',
        'Endişelenmene gerek yok.',
        'Endişeleniyorsun.',
        'Endişelenme zorundasın.',
      ], 1),
      speak('Yarın sınavım var, bu yüzden bu akşam çok çalışmam lazım.', 'ya-RIN sı-na-VIM VAR BU yüz-DEN BU ak-ŞAM ÇOK ça-lış-MAM la-ZIM', 'لديّ امتحان غداً، لهذا يلزمني الدراسة كثيراً هذا المساء.', 'سبەینێ تاقیکردنەوەم هەیە، لەبەر ئەوە ئەم ئێوارەیە پێویستە زۆر بخوێنم.'),
    ],
  },
];
