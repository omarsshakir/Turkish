import type { Lesson } from '@/types/content';
import { b, fill, listening, match, mcq, order, p, speak, translate } from '../shared/helpers';

/**
 * A2 grammar - possessives, the six noun cases, past and future tense,
 * basic modality and the connectives that turn sentences into paragraphs.
 */
export const A2_GRAMMAR: Lesson[] = [
  {
    id: 'a2-possessive',
    level: 'a2',
    kind: 'grammar',
    order: 1,
    minutes: 28,
    title: 'İyelik Ekleri',
    titleI18n: b('لواحق الملكية', 'پاشگرەکانی خاوەندارێتی'),
    objective: b(
      'أن تعبّر عن الملكية بلواحق بدل الضمائر: "بيتي، بيتك، بيته".',
      'ئەوەی خاوەندارێتی بە پاشگر دەرببڕیت نەک بە جێناو: "ماڵەکەم، ماڵەکەت، ماڵەکەی".',
    ),
    prerequisites: ['a1-vowel-harmony'],
    tags: ['possessive', 'noun', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Sahiplik isme yapışır',
        body: b(
          'في العربية نقول "بيتي" بإضافة ياء، وفي الكردية "ماڵەکەم". التركية تفعل الشيء نفسه لكن بست لواحق منظّمة تخضع لتناغم الحركات. الميزة: لا تحتاج إلى ضمير منفصل إطلاقاً — اللاحقة وحدها كافية. evim = بيتي.',
          'لە کوردیدا دەڵێین "ماڵەکەم". تورکیش هەمان شت دەکات بەڵام بە شەش پاشگری ڕێکخراو کە ملکەچی هارمۆنیای بزوێنەکانن. تایبەتمەندییەکەی: هیچ پێویستت بە جێناوی جیاواز نییە — پاشگرەکە بە تەنها بەسە. evim = ماڵەکەم.',
        ),
      },
      {
        type: 'table',
        title: 'Ünsüzle biten isimler: "ev" (بيت / ماڵ)',
        headers: ['Kişi', 'Ek', 'Sonuç', 'العربية', 'کوردی'],
        rows: [
          ['benim', '-im / -ım / -um / -üm', 'evim', 'بيتي', 'ماڵەکەم'],
          ['senin', '-in / -ın / -un / -ün', 'evin', 'بيتك', 'ماڵەکەت'],
          ['onun', '-i / -ı / -u / -ü', 'evi', 'بيته', 'ماڵەکەی'],
          ['bizim', '-imiz / -ımız / -umuz / -ümüz', 'evimiz', 'بيتنا', 'ماڵەکەمان'],
          ['sizin', '-iniz / -ınız / -unuz / -ünüz', 'eviniz', 'بيتكم', 'ماڵەکەتان'],
          ['onların', '-leri / -ları', 'evleri', 'بيتهم', 'ماڵەکەیان'],
        ],
      },
      {
        type: 'table',
        title: 'Ünlüyle biten isimler: "araba" (سيارة / ئۆتۆمبێل)',
        headers: ['Kişi', 'Ek', 'Sonuç', 'Açıklama'],
        rows: [
          ['benim', '-m', 'arabam', 'ünlüden sonra sadece -m'],
          ['senin', '-n', 'araban', 'ünlüden sonra sadece -n'],
          ['onun', '-si / -sı / -su / -sü', 'arabası', 'araya "s" girer'],
          ['bizim', '-miz / -mız / -muz / -müz', 'arabamız', 'ünlüden sonra -mız'],
          ['sizin', '-niz / -nız / -nuz / -nüz', 'arabanız', 'ünlüden sonra -nız'],
          ['onların', '-ları / -leri', 'arabaları', 'çoğul eki gibi'],
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Üçüncü tekil kişinin "s"si',
        body: b(
          'انتبه للاحقة الغائب المفرد: إذا انتهى الاسم بحرف ساكن نضيف ‎-i‎ فقط (ev ⟵ evi)، أما إذا انتهى بحركة فندخل حرف s فاصلاً (araba ⟵ arabası، kapı ⟵ kapısı، oda ⟵ odası). هذه الـ s خاصة بضمير الغائب فقط.',
          'ئاگاداری پاشگری کەسی سێیەمی تاک بە: ئەگەر ناوەکە بە کۆنسۆنانت کۆتایی هات تەنها ‎-i‎ زیاد دەکەین (ev ⟵ evi)، بەڵام ئەگەر بە بزوێن کۆتایی هات پیتی s وەک جیاکەرەوە دەخەینە نێوان (araba ⟵ arabası). ئەم s ـە تەنها تایبەتە بە کەسی سێیەم.',
        ),
      },
      {
        type: 'examples',
        title: 'İyelik cümlelerde',
        items: [
          p('Adım Ali.', 'a-DIM a-Lİ', 'اسمي علي.', 'ناوم عەلییە.'),
          p('Annen nerede?', 'an-NEN ne-re-DE', 'أين أمك؟', 'دایکت لە کوێیە؟'),
          p('Onun arabası çok yeni.', 'o-NUN a-ra-ba-SI ÇOK ye-Nİ', 'سيارته جديدة جداً.', 'ئۆتۆمبێلەکەی زۆر نوێیە.'),
          p('Evimiz okula yakın.', 'e-vi-MİZ o-ku-LA ya-KIN', 'بيتنا قريب من المدرسة.', 'ماڵەکەمان نزیکە لە قوتابخانە.'),
          p('Öğretmeniniz kim?', 'öö-ret-me-ni-NİZ KİM', 'مَن معلّمكم؟', 'مامۆستاکەتان کێیە؟'),
          p('Kitapları masada.', 'ki-tap-la-RI ma-sa-DA', 'كتبهم على الطاولة.', 'کتێبەکانیان لەسەر مێزەکەن.'),
        ],
      },
      {
        type: 'text',
        title: 'İsim tamlaması: iki isim birleşince',
        body: b(
          'التركية تربط اسمين بطريقة خاصة تُشبه الإضافة العربية لكن معكوسة: المالك يأتي أولاً بلاحقة ‎-in‎ والمملوك ثانياً بلاحقة ‎-i‎. "باب البيت" = evin kapısı (البيتِ بابُه). "اسم المعلّم" = öğretmenin adı. لاحظ أن كلا الاسمين يحمل لاحقة.',
          'تورکی دوو ناو بە شێوەیەکی تایبەت دەبەستێتەوە: خاوەن سەرەتا دێت بە پاشگری ‎-in‎ و ئەوەی خاوەنی لێیەتی دووەم دێت بە پاشگری ‎-i‎. "دەرگای ماڵ" = evin kapısı. سەرنج بدە هەردوو ناوەکە پاشگر هەڵدەگرن.',
        ),
      },
      {
        type: 'examples',
        title: 'İsim tamlaması',
        items: [
          p('evin kapısı', 'e-VİN ka-pı-SI', 'باب البيت', 'دەرگای ماڵ'),
          p('okulun müdürü', 'o-ku-LUN mü-dü-RÜ', 'مدير المدرسة', 'بەڕێوەبەری قوتابخانە'),
          p('Türkiye’nin başkenti', 'tür-ki-YE-nin baş-ken-Tİ', 'عاصمة تركيا', 'پایتەختی تورکیا'),
          p('arkadaşımın annesi', 'ar-ka-da-şı-MIN an-ne-Sİ', 'أم صديقي', 'دایکی هاوڕێکەم'),
          p('kitabın adı', 'ki-ta-BIN a-DI', 'اسم الكتاب', 'ناوی کتێبەکە'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Belirtisiz tamlama: sadece ikinci ek',
        body: b(
          'هناك نوع ثانٍ يصف النوع لا المالك، فيسقط ‎-in‎ من الأول: öğretmen odası (غرفة معلّمين — أي نوعها) مقابل öğretmenin odası (غرفة المعلّم — أي ملكه). قارن: Türk kahvesi (قهوة تركية) و Türk’ün kahvesi (قهوة التركي).',
          'جۆرێکی دووەم هەیە کە جۆر وەسف دەکات نەک خاوەن، بۆیە ‎-in‎ لە یەکەمیان دەکەوێت: öğretmen odası (ژووری مامۆستایان — جۆرەکەی) بەرامبەر öğretmenin odası (ژووری مامۆستاکە — موڵکی). بەراورد: Türk kahvesi (قاوەی تورکی) و Türk’ün kahvesi (قاوەی ئەو تورکە).',
        ),
      },
    ],
    exercises: [
      fill('Benim ad___ Ayşe.', 'ım', 'اسمي عائشة.', 'ناوم عەیشەیە.', {
        options: ['ım', 'im', 'um', 'üm'],
        explain: b('آخر حركة في ad هي a ⟵ ‎-ım‎.', 'دوا بزوێنی ad، a یە ⟵ ‎-ım‎.'),
      }),
      mcq(
        b('كيف تقول "سيارته"؟', 'چۆن دەڵێیت "ئۆتۆمبێلەکەی"؟'),
        ['arabai', 'arabası', 'arabaı', 'arabanı'],
        1,
        { turkishOptions: true, explain: b('بعد الحركة يدخل حرف s مع ضمير الغائب.', 'دوای بزوێن پیتی s لەگەڵ کەسی سێیەمدا دێت.') },
      ),
      mcq(
        b('كيف تقول "باب البيت"؟', 'چۆن دەڵێیت "دەرگای ماڵ"؟'),
        ['ev kapı', 'evin kapı', 'evin kapısı', 'ev kapısın'],
        2,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'بيتنا قريب.', ['Evimiz yakın.', 'Eviniz yakın.', 'Evim yakın.', 'Evleri yakın.'], 0),
      match(
        b('طابق اللاحقة بصاحبها.', 'پاشگرەکە لەگەڵ خاوەنەکەیدا بگونجێنە.'),
        [
          { tr: 'evim', ar: 'بيتي', ku: 'ماڵەکەم' },
          { tr: 'evin', ar: 'بيتك', ku: 'ماڵەکەت' },
          { tr: 'evimiz', ar: 'بيتنا', ku: 'ماڵەکەمان' },
          { tr: 'eviniz', ar: 'بيتكم', ku: 'ماڵەکەتان' },
        ],
      ),
      order(
        b('رتّب: اسم صديقي كاروان.', 'ڕێک بخە: ناوی هاوڕێکەم کاروانە.'),
        'Arkadaşımın adı Karwan',
        'اسم صديقي كاروان.',
        'ناوی هاوڕێکەم کاروانە.',
        { pron: 'ar-ka-da-şı-MIN a-DI kar-VAN' },
      ),
    ],
  },

  {
    id: 'a2-cases',
    level: 'a2',
    kind: 'grammar',
    order: 2,
    minutes: 40,
    title: 'İsmin Hâlleri',
    titleI18n: b('حالات الاسم الست', 'شەش حاڵەتی ناو'),
    objective: b(
      'أن تستخدم الحالات الست استخداماً صحيحاً: مَن، ماذا، إلى أين، في أين، من أين، لِمَن.',
      'ئەوەی شەش حاڵەتەکە بە دروستی بەکاربهێنیت: کێ، چی، بۆ کوێ، لە کوێ، لە کوێوە، هی کێ.',
    ),
    prerequisites: ['a2-possessive'],
    tags: ['cases', 'noun', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Türkçede edat yok, ek var',
        body: b(
          'الفرق الجوهري عن العربية والكردية: التركية لا تستخدم حروف جرّ منفصلة (في، إلى، من) بل تُلصق لواحق بالاسم نفسه. "إلى البيت" ليست كلمتين بل كلمة واحدة: eve. هذا يجعل التركية أوجز، لكنه يتطلّب إتقان اللواحق الست.',
          'جیاوازی بنەڕەتی لەگەڵ کوردی: تورکی ئامرازی جیاواز (لە، بۆ، لەوە) بەکارناهێنێت بەڵکو پاشگر بە خودی ناوەکەوە دەلکێنێت. "بۆ ماڵ" دوو وشە نییە بەڵکو یەک وشەیە: eve.',
        ),
      },
      {
        type: 'table',
        title: 'Altı hâl',
        headers: ['Hâl', 'Ek', 'Soru', 'Örnek (ev)', 'Anlam'],
        rows: [
          ['Yalın (المجرّدة)', '—', 'ne? kim?', 'ev', 'بيت / ماڵ'],
          ['Belirtme (المفعولية)', '-i / -ı / -u / -ü', 'neyi? kimi?', 'evi', 'البيتَ / ماڵەکە (بەرکار)'],
          ['Yönelme (الاتجاه)', '-e / -a', 'nereye? kime?', 'eve', 'إلى البيت / بۆ ماڵ'],
          ['Bulunma (المكان)', '-de / -da / -te / -ta', 'nerede? kimde?', 'evde', 'في البيت / لە ماڵ'],
          ['Ayrılma (الابتداء)', '-den / -dan / -ten / -tan', 'nereden? kimden?', 'evden', 'من البيت / لە ماڵەوە'],
          ['Tamlayan (الإضافة)', '-in / -ın / -un / -ün', 'kimin?', 'evin', 'للبيت / هی ماڵ'],
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Belirtme hâli: sadece BELİRLİ nesnede',
        body: b(
          'أدقّ نقطة في الدرس، وأكثرها إرباكاً للعرب: لاحقة المفعولية ‎-i‎ تُستخدم فقط إذا كان المفعول معرَّفاً ومحدَّداً. قارن: "Kitap okuyorum" = أقرأ كتاباً (أيّ كتاب — بلا لاحقة). "Kitabı okuyorum" = أقرأ الكتابَ (كتاباً معيّناً — باللاحقة). أسماء الأعلام والضمائر تأخذ اللاحقة دائماً لأنها معرفة بطبيعتها: Ali’yi gördüm.',
          'وردترین خاڵی وانەکە: پاشگری بەرکاری ‎-i‎ تەنها بەکاردێت ئەگەر بەرکارەکە ناسراو و دیاریکراو بێت. بەراورد: "Kitap okuyorum" = کتێبێک دەخوێنمەوە (هەر کتێبێک — بێ پاشگر). "Kitabı okuyorum" = کتێبەکە دەخوێنمەوە (کتێبێکی دیاریکراو — بە پاشگر).',
        ),
      },
      {
        type: 'examples',
        title: 'Belirtili / belirtisiz nesne',
        items: [
          p('Su içiyorum.', 'SU i-çi-YO-rum', 'أشرب ماءً. (غير محدّد)', 'ئاو دەخۆمەوە. (نادیار)'),
          p('Suyu içiyorum.', 'su-YU i-çi-YO-rum', 'أشرب الماءَ. (المحدّد)', 'ئاوەکە دەخۆمەوە. (دیار)'),
          p('Film izliyoruz.', 'FİLM iz-li-YO-ruz', 'نشاهد فيلماً.', 'فیلمێک دەبینین.'),
          p('Filmi izliyoruz.', 'fil-Mİ iz-li-YO-ruz', 'نشاهد الفيلمَ.', 'فیلمەکە دەبینین.'),
          p('Ali’yi tanıyor musun?', 'a-Lİ-yi ta-nı-YOR mu-sun', 'هل تعرف عليّاً؟', 'عەلی دەناسیت؟'),
        ],
      },
      {
        type: 'text',
        title: 'Yönelme hâli (-e / -a): hedef',
        body: b(
          'حالة الاتجاه تجيب عن "إلى أين؟" و"لِمَن؟". تُستخدم مع أفعال الحركة (gitmek, gelmek) وأفعال العطاء (vermek, söylemek) وبعد كلمات مثل göre (حسب) و kadar (حتى). إذا انتهت الكلمة بحركة يدخل حرف y: araba ⟵ arabaya.',
          'حاڵەتی ئاراستە وەڵامی "بۆ کوێ؟" و "بۆ کێ؟" دەداتەوە. لەگەڵ کاری جووڵە (gitmek, gelmek) و کاری دان (vermek, söylemek) بەکاردێت. ئەگەر وشەکە بە بزوێن کۆتایی هات پیتی y دێتە نێوان: araba ⟵ arabaya.',
        ),
      },
      {
        type: 'examples',
        title: 'Yönelme hâli',
        items: [
          p('Okula gidiyorum.', 'o-ku-LA gi-di-YO-rum', 'أذهب إلى المدرسة.', 'دەچمە قوتابخانە.'),
          p('Bana bir kahve ver.', 'ba-NA bir kah-VE VER', 'أعطني قهوة.', 'قاوەیەکم بدەرێ.'),
          p('İstanbul’a ne zaman gideceksin?', 'is-tan-BUL-a ne za-MAN gi-de-djek-sin', 'متى ستذهب إلى إسطنبول؟', 'کەی دەچیتە ئەستەنبوڵ؟'),
          p('Arabaya bindik.', 'a-ra-ba-YA bin-DİK', 'ركبنا السيارة.', 'سواری ئۆتۆمبێلەکە بووین.'),
        ],
      },
      {
        type: 'examples',
        title: 'Bulunma hâli (-de): yer ve zaman',
        items: [
          p('Evdeyim.', 'ev-de-YİM', 'أنا في البيت.', 'لە ماڵەوەم.'),
          p('Toplantı saat üçte.', 'top-lan-TI sa-AT üç-TE', 'الاجتماع في الساعة الثالثة.', 'کۆبوونەوەکە کاتژمێر سێیە.'),
          p('Çantada ne var?', 'çan-ta-DA NE VAR', 'ماذا في الحقيبة؟', 'لە جانتاکەدا چی هەیە؟'),
          p('Ankara’da yaşıyoruz.', 'an-ka-RA-da ya-şı-YO-ruz', 'نعيش في أنقرة.', 'لە ئەنقەرە دەژین.'),
        ],
      },
      {
        type: 'examples',
        title: 'Ayrılma hâli (-den): kaynak',
        items: [
          p('Okuldan geliyorum.', 'o-kul-DAN ge-li-YO-rum', 'آتٍ من المدرسة.', 'لە قوتابخانەوە دێم.'),
          p('Nereden geliyorsun?', 'ne-re-DEN ge-li-yor-sun', 'من أين تأتي؟', 'لە کوێوە دێیت؟'),
          p('Sudan korkuyorum.', 'su-DAN kor-ku-YO-rum', 'أخاف من الماء.', 'لە ئاو دەترسم.'),
          p('Bu kitaptan çok şey öğrendim.', 'BU ki-tap-TAN ÇOK ŞEY öö-ren-DİM', 'تعلّمت أشياء كثيرة من هذا الكتاب.', 'لەم کتێبەوە شتی زۆرم فێربوو.'),
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Özel isimlerde kesme işareti (’)',
        body: b(
          'أسماء الأعلام (المدن، الأشخاص، الدول) تفصل لواحقها بفاصلة عليا: İstanbul’da، Ali’ye، Türkiye’nin. هذه قاعدة إملائية رسمية في التركية، والتزامها يُظهر أنك تكتب بشكل صحيح.',
          'ناوی تایبەت (شار، کەس، وڵات) پاشگرەکانیان بە نیشانەی سەرەوە جیا دەکرێنەوە: İstanbul’da، Ali’ye، Türkiye’nin. ئەمە ڕێسایەکی ڕێنووسی فەرمییە لە تورکیدا.',
        ),
      },
      {
        type: 'table',
        title: 'Zamirlerin hâl çekimi (düzensiz!)',
        headers: ['Yalın', 'Belirtme', 'Yönelme', 'Bulunma', 'Ayrılma', 'Tamlayan'],
        rows: [
          ['ben', 'beni', 'bana ⚠', 'bende', 'benden', 'benim'],
          ['sen', 'seni', 'sana ⚠', 'sende', 'senden', 'senin'],
          ['o', 'onu', 'ona', 'onda', 'ondan', 'onun'],
          ['biz', 'bizi', 'bize', 'bizde', 'bizden', 'bizim'],
          ['siz', 'sizi', 'size', 'sizde', 'sizden', 'sizin'],
          ['onlar', 'onları', 'onlara', 'onlarda', 'onlardan', 'onların'],
        ],
        caption: b(
          'انتبه لـ bana و sana: كان يُتوقّع "bene" و"sene" لكن الشذوذ هنا يجب حفظه. باقي الجدول منتظم.',
          'ئاگاداری bana و sana بە: چاوەڕوان دەکرا "bene" و "sene" بێت بەڵام ئەم ناڕێکییە دەبێت لەبەر بکرێت.',
        ),
      },
    ],
    exercises: [
      fill('Okul___ gidiyorum. (إلى المدرسة / بۆ قوتابخانە)', 'a', 'أذهب إلى المدرسة.', 'دەچمە قوتابخانە.', {
        options: ['a', 'da', 'dan', 'un'],
      }),
      fill('Ev___ kitap okuyorum. (في البيت / لە ماڵ)', 'de', 'أقرأ كتاباً في البيت.', 'لە ماڵەوە کتێب دەخوێنمەوە.', {
        options: ['e', 'de', 'den', 'i'],
      }),
      fill('İstanbul’___ geliyorum. (من إسطنبول / لە ئەستەنبوڵەوە)', 'dan', 'آتٍ من إسطنبول.', 'لە ئەستەنبوڵەوە دێم.', {
        options: ['a', 'da', 'dan', 'un'],
      }),
      mcq(
        b('أيّهما يعني "أقرأ الكتابَ (المحدّد)"؟', 'کامیان واتای "کتێبەکە دەخوێنمەوە (دیاریکراو)" دەدات؟'),
        ['Kitap okuyorum.', 'Kitabı okuyorum.', 'Kitaba okuyorum.', 'Kitapta okuyorum.'],
        1,
        { turkishOptions: true, explain: b('المفعول المعرّف يأخذ لاحقة ‎-ı‎ مع تليين p إلى b.', 'بەرکاری ناسراو پاشگری ‎-ı‎ وەردەگرێت لەگەڵ نەرمبوونی p بۆ b.') },
      ),
      mcq(
        b('ما حالة الاتجاه من الضمير "ben"؟', 'حاڵەتی ئاراستەی جێناوی "ben" چییە؟'),
        ['bene', 'bana', 'beni', 'benden'],
        1,
        { turkishOptions: true, explain: b('شاذّ: ben ⟵ bana.', 'ناڕێک: ben ⟵ bana.') },
      ),
      match(
        b('طابق الحالة بمعناها.', 'حاڵەتەکە لەگەڵ واتاکەیدا بگونجێنە.'),
        [
          { tr: 'evde', ar: 'في البيت', ku: 'لە ماڵ' },
          { tr: 'eve', ar: 'إلى البيت', ku: 'بۆ ماڵ' },
          { tr: 'evden', ar: 'من البيت', ku: 'لە ماڵەوە' },
          { tr: 'evin', ar: 'للبيت / خاص بالبيت', ku: 'هی ماڵ' },
        ],
      ),
      order(
        b('رتّب: أذهب من البيت إلى المدرسة.', 'ڕێک بخە: لە ماڵەوە دەچمە قوتابخانە.'),
        'Evden okula gidiyorum',
        'أذهب من البيت إلى المدرسة.',
        'لە ماڵەوە دەچمە قوتابخانە.',
        { pron: 'ev-DEN o-ku-LA gi-di-YO-rum' },
      ),
      listening('Nereden geliyorsun?', ['إلى أين تذهب؟', 'من أين تأتي؟', 'أين أنت؟'], 1, 'ar',
        p('Nereden geliyorsun?', 'ne-re-DEN ge-li-yor-sun', 'من أين تأتي؟', 'لە کوێوە دێیت؟')),
    ],
  },

  {
    id: 'a2-past-simple',
    level: 'a2',
    kind: 'grammar',
    order: 3,
    minutes: 28,
    title: 'Belirli Geçmiş Zaman: -di',
    titleI18n: b('الماضي المُعايَن (المؤكّد)', 'ڕابردووی بینراو'),
    objective: b(
      'أن تحكي أحداثاً ماضية شهدتها بنفسك أو تعرفها يقيناً.',
      'ئەوەی ڕووداوی ڕابردوو بگێڕیتەوە کە خۆت بینیوتن یان بە دڵنیاییەوە دەیزانیت.',
    ),
    prerequisites: ['a1-present-continuous'],
    tags: ['tense', 'verb', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Şahit olunan geçmiş',
        body: b(
          'هذا هو الماضي "المُعايَن": تستخدمه لحدث رأيته بعينك أو تعرفه يقيناً. التركية تملك ماضياً ثانياً (‎-miş‎) للأحداث المنقولة أو غير المشاهدة، وستتعلّمه في مستوى B2. اللاحقة هنا ‎-di‎ برباعية الشكل، وتتحوّل إلى ‎-ti‎ بعد الحروف المهموسة.',
          'ئەمە ڕابردووی "بینراو"ە: بۆ ڕووداوێک بەکاری دەهێنیت کە بە چاوی خۆت بینیوتە یان بە دڵنیایی دەیزانیت. تورکی ڕابردوویەکی دووەمی هەیە (‎-miş‎) بۆ ڕووداوی گوازراوە، لە ئاستی B2 فێری دەبیت.',
        ),
      },
      {
        type: 'table',
        title: 'Sekiz biçim: -dı / -di / -du / -dü ve -tı / -ti / -tu / -tü',
        headers: ['Kökün son ünlüsü', 'Sesli sondan sonra', 'Sessiz sondan sonra (FISTIKÇI ŞAHAP)'],
        rows: [
          ['a, ı', '-dı (aldı)', '-tı (baktı)'],
          ['e, i', '-di (geldi)', '-ti (gitti)'],
          ['o, u', '-du (okudu)', '-tu (koştu)'],
          ['ö, ü', '-dü (güldü)', '-tü (öptü)'],
        ],
      },
      {
        type: 'conjugation',
        title: 'gelmek — olumlu',
        verb: 'gelmek (geçmiş)',
        rows: [
          { person: 'ben', tr: 'geldim', pron: 'gel-DİM', ar: 'جئتُ', ku: 'هاتم' },
          { person: 'sen', tr: 'geldin', pron: 'gel-DİN', ar: 'جئتَ', ku: 'هاتیت' },
          { person: 'o', tr: 'geldi', pron: 'gel-Dİ', ar: 'جاء', ku: 'هات' },
          { person: 'biz', tr: 'geldik', pron: 'gel-DİK', ar: 'جئنا', ku: 'هاتین' },
          { person: 'siz', tr: 'geldiniz', pron: 'gel-di-NİZ', ar: 'جئتم', ku: 'هاتن' },
          { person: 'onlar', tr: 'geldiler', pron: 'gel-di-LER', ar: 'جاؤوا', ku: 'هاتن' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Kişi ekleri farklı!',
        body: b(
          'انتبه: لواحق الشخص في الماضي تختلف عن تلك في المضارع. في المضارع نقول geliyorum (بـ ‎-um‎) وفي الماضي geldim (بـ ‎-m‎). وللمتكلم الجمع: geliyoruz لكن geldik (بـ ‎-k‎). هذه المجموعة الثانية من اللواحق تُسمّى "لواحق الملكية" لأنها تطابق لواحق التملّك.',
          'ئاگاداربە: پاشگری کەس لە ڕابردوودا جیاوازە لەوانەی ئێستا. لە ئێستادا دەڵێین geliyorum و لە ڕابردوودا geldim. بۆ کەسی یەکەمی کۆ: geliyoruz بەڵام geldik.',
        ),
      },
      {
        type: 'conjugation',
        title: 'gitmek — olumsuz (-medi / -madı)',
        verb: 'gitmemek (geçmiş)',
        rows: [
          { person: 'ben', tr: 'gitmedim', pron: 'git-me-DİM', ar: 'لم أذهب', ku: 'نەچووم' },
          { person: 'sen', tr: 'gitmedin', pron: 'git-me-DİN', ar: 'لم تذهب', ku: 'نەچوویت' },
          { person: 'o', tr: 'gitmedi', pron: 'git-me-Dİ', ar: 'لم يذهب', ku: 'نەچوو' },
          { person: 'biz', tr: 'gitmedik', pron: 'git-me-DİK', ar: 'لم نذهب', ku: 'نەچووین' },
          { person: 'siz', tr: 'gitmediniz', pron: 'git-me-di-NİZ', ar: 'لم تذهبوا', ku: 'نەچوون' },
          { person: 'onlar', tr: 'gitmediler', pron: 'git-me-di-LER', ar: 'لم يذهبوا', ku: 'نەچوون' },
        ],
      },
      {
        type: 'examples',
        title: 'Geçmiş cümleler',
        items: [
          p('Dün sinemaya gittik.', 'DÜN si-ne-ma-YA git-TİK', 'ذهبنا إلى السينما أمس.', 'دوێنێ چووینە سینەما.'),
          p('Sabah erken kalktım.', 'sa-BAH er-KEN kalk-TIM', 'استيقظت باكراً في الصباح.', 'بەیانی زوو هەستام.'),
          p('Ödevini yaptın mı?', 'ö-de-vi-Nİ yap-TIN mı', 'هل عملتَ واجبك؟', 'ئەرکەکەت کرد؟'),
          p('Onu hiç görmedim.', 'o-NU HİÇ gör-me-DİM', 'لم أره قطّ.', 'هەرگیز نەمبینیوە.'),
          p('Geçen yıl Türkiye’ye geldik.', 'ge-ÇEN YIL tür-ki-YE-ye gel-DİK', 'جئنا إلى تركيا العام الماضي.', 'ساڵی ڕابردوو هاتینە تورکیا.'),
          p('Ne oldu?', 'NE ol-DU', 'ماذا حدث؟', 'چی ڕوویدا؟'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'İsim cümlelerinin geçmişi: -ydi',
        body: b(
          'للجملة الاسمية ماضٍ أيضاً: Ben öğrenciydim (كنتُ طالباً). Hava güzeldi (كان الجو جميلاً). O evde değildi (لم يكن في البيت). Param yoktu (لم يكن معي نقود). القاعدة: أضف ‎-ydi‎ بعد الحركة و ‎-di‎ بعد الساكن.',
          'ڕستەی ناویش ڕابردووی هەیە: Ben öğrenciydim (قوتابی بووم). Hava güzeldi (کەشوهەوا جوان بوو). Param yoktu (پارەم نەبوو).',
        ),
      },
      {
        type: 'dialogue',
        title: 'Hafta sonu',
        lines: [
          { speaker: 'Mehmet', tr: 'Hafta sonu ne yaptın?', pron: 'haf-TA so-NU NE yap-tın', ar: 'ماذا فعلت في عطلة نهاية الأسبوع؟', ku: 'کۆتایی هەفتە چیت کرد؟' },
          { speaker: 'Zeynep', tr: 'Ailemle Ankara’ya gittik.', pron: 'a-i-lem-LE an-ka-RA-ya git-TİK', ar: 'ذهبنا إلى أنقرة مع عائلتي.', ku: 'لەگەڵ خێزانەکەم چووینە ئەنقەرە.' },
          { speaker: 'Mehmet', tr: 'Güzel! Orada ne yaptınız?', pron: 'gü-ZEL o-ra-DA NE yap-tı-nız', ar: 'جميل! ماذا فعلتم هناك؟', ku: 'جوانە! لەوێ چیتان کرد؟' },
          { speaker: 'Zeynep', tr: 'Müzeleri gezdik, çok yorulduk ama çok eğlendik.', pron: 'mü-ze-le-Rİ gez-DİK ÇOK yo-rul-DUK a-MA ÇOK e-len-DİK', ar: 'تجوّلنا في المتاحف، تعبنا كثيراً لكننا استمتعنا جداً.', ku: 'بە مۆزەخانەکاندا گەڕاین، زۆر ماندوو بووین بەڵام زۆر خۆشمان بوو.' },
          { speaker: 'Mehmet', tr: 'Ben hiçbir yere gitmedim, evde kaldım.', pron: 'BEN hiç-BİR ye-RE git-me-DİM ev-DE kal-DIM', ar: 'أنا لم أذهب إلى أي مكان، بقيت في البيت.', ku: 'من بۆ هیچ شوێنێک نەچووم، لە ماڵەوە مامەوە.' },
        ],
      },
    ],
    exercises: [
      fill('Dün akşam sinemaya ___. (gitmek / biz)', 'gittik', 'ذهبنا إلى السينما مساء أمس.', 'دوێنێ ئێوارە چووینە سینەما.', {
        options: ['gittik', 'gitdik', 'gittiz', 'gidik'],
        explain: b('t مهموسة ⟵ اللاحقة ti، والمتكلم الجمع ‎-k‎.', 't بێدەنگە ⟵ پاشگرەکە ti، و کەسی یەکەمی کۆ ‎-k‎.'),
      }),
      mcq(
        b('ما ماضي "bakmak" مع "ben"؟', 'ڕابردووی "bakmak" لەگەڵ "ben" چییە؟'),
        ['bakdım', 'baktım', 'baktim', 'bakdim'],
        1,
        { turkishOptions: true, explain: b('k مهموسة ⟵ tı، و a خلفية ⟵ ı.', 'k بێدەنگە ⟵ tı، و a دواوەیە ⟵ ı.') },
      ),
      mcq(
        b('كيف تنفي "geldim"؟', 'چۆن "geldim" نەفی دەکەیت؟'),
        ['gelmedim', 'geldimem', 'gelmedin', 'gelmiyorum'],
        1,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'لم أفهم.', ['Anlamadım.', 'Anlamıyorum.', 'Anladım.', 'Anlamadın.'], 0),
      translate('tr-ku', 'Dün çok yoruldum.', ['دوێنێ زۆر ماندوو بووم.', 'ئەمڕۆ زۆر ماندووم.', 'سبەینێ ماندوو دەبم.', 'ماندوو نەبووم.'], 0, { pron: 'DÜN ÇOK yo-rul-DUM' }),
      order(
        b('رتّب: هل عملتَ واجبك أمس؟', 'ڕێک بخە: دوێنێ ئەرکەکەت کرد؟'),
        'Dün ödevini yaptın mı',
        'هل عملتَ واجبك أمس؟',
        'دوێنێ ئەرکەکەت کرد؟',
        { pron: 'DÜN ö-de-vi-Nİ yap-TIN mı' },
      ),
      speak('Geçen yıl Türkiye’ye geldim ve Türkçe öğrenmeye başladım.', 'ge-ÇEN YIL tür-ki-YE-ye gel-DİM ve türk-ÇE öö-ren-me-YE baş-la-DIM', 'جئت إلى تركيا العام الماضي وبدأت أتعلّم التركية.', 'ساڵی ڕابردوو هاتمە تورکیا و دەستم کرد بە فێربوونی تورکی.'),
    ],
  },

  {
    id: 'a2-future',
    level: 'a2',
    kind: 'grammar',
    order: 4,
    minutes: 25,
    title: 'Gelecek Zaman: -ecek / -acak',
    titleI18n: b('المستقبل', 'کاتی داهاتوو'),
    objective: b(
      'أن تتحدث عن خططك ووعودك وتوقّعاتك المستقبلية.',
      'ئەوەی باس لە پلان و بەڵێن و چاوەڕوانییە داهاتووەکانت بکەیت.',
    ),
    prerequisites: ['a2-past-simple'],
    tags: ['tense', 'verb'],
    blocks: [
      {
        type: 'text',
        title: 'İki biçimli ek',
        body: b(
          'لاحقة المستقبل ثنائية الشكل: ‎-ecek‎ بعد الحركات الأمامية و ‎-acak‎ بعد الخلفية. تُستخدم للخطط والوعود والتنبّؤات: "سأذهب"، "سأتصل بك"، "ستمطر غداً".',
          'پاشگری داهاتوو دووشێوەیە: ‎-ecek‎ دوای بزوێنە پێشەوەکان و ‎-acak‎ دوای دواوەکان. بۆ پلان و بەڵێن و پێشبینی بەکاردێت.',
        ),
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'k → ğ değişimi',
        body: b(
          'أهم تفصيلة في هذا الدرس: عندما تأتي لاحقة تبدأ بحركة بعد ‎-ecek‎، تتحوّل الـ k إلى ğ. gel + ecek + im ⟵ geleceğim (وليس "gelecekim"). هذا يحدث مع ben و biz فقط، لأن لاحقتيهما تبدآن بحركة. أما geleceksin و gelecek فتبقيان بـ k.',
          'گرنگترین وردەکاری ئەم وانەیە: کاتێک پاشگرێک کە بە بزوێن دەست پێدەکات دوای ‎-ecek‎ دێت، k دەبێتە ğ. gel + ecek + im ⟵ geleceğim (نەک "gelecekim"). ئەمە تەنها لەگەڵ ben و biz ڕوودەدات.',
        ),
      },
      {
        type: 'conjugation',
        title: 'gelmek — gelecek zaman',
        verb: 'gelmek (gelecek)',
        rows: [
          { person: 'ben', tr: 'geleceğim', pron: 'ge-le-dje-İM', ar: 'سآتي', ku: 'دێم' },
          { person: 'sen', tr: 'geleceksin', pron: 'ge-le-DJEK-sin', ar: 'ستأتي', ku: 'دێیت' },
          { person: 'o', tr: 'gelecek', pron: 'ge-le-DJEK', ar: 'سيأتي', ku: 'دێت' },
          { person: 'biz', tr: 'geleceğiz', pron: 'ge-le-dje-İZ', ar: 'سنأتي', ku: 'دێین' },
          { person: 'siz', tr: 'geleceksiniz', pron: 'ge-le-DJEK-si-niz', ar: 'ستأتون', ku: 'دێن' },
          { person: 'onlar', tr: 'gelecekler', pron: 'ge-le-djek-LER', ar: 'سيأتون', ku: 'دێن' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Ünlüyle biten kökler: araya y',
        body: b(
          'إذا انتهى الجذر بحركة نُدخل y: bekle ⟵ bekleyeceğim، oku ⟵ okuyacağım، başla ⟵ başlayacağım. وللنفي: ‎-meyecek / -mayacak‎: gelmeyeceğim (لن آتي)، okumayacağım (لن أقرأ).',
          'ئەگەر ڕەگەکە بە بزوێن کۆتایی هات پیتی y دەخەینە نێوان: bekleyeceğim، okuyacağım. بۆ نەفی: ‎-meyecek / -mayacak‎: gelmeyeceğim، okumayacağım.',
        ),
      },
      {
        type: 'examples',
        title: 'Planlar ve sözler',
        items: [
          p('Yarın seni arayacağım.', 'ya-RIN se-Nİ a-ra-ya-dja-IM', 'سأتصل بك غداً.', 'سبەینێ پەیوەندیت پێوە دەکەم.'),
          p('Gelecek yıl üniversiteye başlayacağım.', 'ge-le-DJEK YIL ü-ni-ver-si-te-YE baş-la-ya-dja-IM', 'سأبدأ الجامعة العام القادم.', 'ساڵی داهاتوو دەست بە زانکۆ دەکەم.'),
          p('Bu akşam dışarı çıkmayacağız.', 'BU ak-ŞAM dı-şa-RI çık-ma-ya-dja-IZ', 'لن نخرج هذا المساء.', 'ئەم ئێوارەیە نایەینە دەرەوە.'),
          p('Ne zaman geleceksin?', 'ne za-MAN ge-le-djek-sin', 'متى ستأتي؟', 'کەی دێیت؟'),
          p('Yarın yağmur yağacak.', 'ya-RIN YAA-mur ya-a-DJAK', 'ستمطر غداً.', 'سبەینێ باران دەبارێت.'),
          p('Söz veriyorum, unutmayacağım.', 'SÖZ ve-ri-YO-rum u-nut-ma-ya-dja-IM', 'أعدك، لن أنسى.', 'بەڵێنت پێدەدەم، لەبیری ناکەم.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Konuşma dilinde kısalma',
        body: b(
          'في الكلام السريع يختصر الأتراك: geleceğim تصير "gelicem"، gideceğim تصير "gidicem"، yapacağım تصير "yapıcam". اعرفها لتفهمها في الأفلام والحوار اليومي، لكن اكتب الشكل الكامل دائماً.',
          'لە قسەی خێرادا تورکەکان کورتی دەکەنەوە: geleceğim دەبێتە "gelicem"، gideceğim دەبێتە "gidicem". بیانناسە بۆ تێگەیشتنیان لە فیلم و گفتوگۆی ڕۆژانەدا، بەڵام هەمیشە شێوە تەواوەکە بنووسە.',
        ),
      },
    ],
    exercises: [
      fill('Yarın seni ___. (aramak / ben)', 'arayacağım', 'سأتصل بك غداً.', 'سبەینێ پەیوەندیت پێوە دەکەم.', {
        options: ['arayacağım', 'aracağım', 'arayacakım', 'arıyacağım'],
        explain: b('الجذر ara ينتهي بحركة ⟵ y وصل، ثم k تلين إلى ğ.', 'ڕەگی ara بە بزوێن کۆتایی دێت ⟵ y ی بەستەر، پاشان k نەرم دەبێت.'),
      }),
      mcq(
        b('لماذا نقول "geleceğim" وليس "gelecekim"؟', 'بۆچی دەڵێین "geleceğim" نەک "gelecekim"؟'),
        [
          'لأن اللاحقة شاذّة',
          'لأن k تتحوّل إلى ğ بين حركتين',
          'لأن الفعل مبني للمجهول',
          'لأن ben تأخذ ğ دائماً',
        ],
        1,
      ),
      mcq(
        b('ما نفي "gideceğim"؟', 'نەفیی "gideceğim" چییە؟'),
        ['gitmeyeceğim', 'gidemeyeceğim', 'gitmiyeceğim', 'gideceğim değil'],
        0,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'لن نخرج اليوم.', [
        'Bugün dışarı çıkmayacağız.',
        'Bugün dışarı çıkacağız.',
        'Bugün dışarı çıkmadık.',
        'Bugün dışarı çıkmıyoruz.',
      ], 0),
      order(
        b('رتّب: سأبدأ الجامعة العام القادم.', 'ڕێک بخە: ساڵی داهاتوو دەست بە زانکۆ دەکەم.'),
        'Gelecek yıl üniversiteye başlayacağım',
        'سأبدأ الجامعة العام القادم.',
        'ساڵی داهاتوو دەست بە زانکۆ دەکەم.',
        { pron: 'ge-le-DJEK YIL ü-ni-ver-si-te-YE baş-la-ya-dja-IM' },
      ),
      listening('Yarın yağmur yağacak.', ['أمطرت أمس.', 'ستمطر غداً.', 'إنها تمطر الآن.'], 1, 'ar',
        p('Yarın yağmur yağacak.', 'ya-RIN YAA-mur ya-a-DJAK', 'ستمطر غداً.', 'سبەینێ باران دەبارێت.')),
    ],
  },

  {
    id: 'a2-modals-basic',
    level: 'a2',
    kind: 'grammar',
    order: 5,
    minutes: 25,
    title: 'Temel Kip Yapıları',
    titleI18n: b('التراكيب الشرطية الأساسية: الإرادة والوجوب', 'پێکهاتە بنەڕەتییەکان: ویست و پێویستی'),
    objective: b(
      'أن تعبّر عن الرغبة والحاجة والوجوب: "أريد أن"، "يجب أن"، "أحتاج إلى".',
      'ئەوەی ئارەزوو و پێویستی و ناچاری دەرببڕیت: "دەمەوێت"، "دەبێت"، "پێویستمە".',
    ),
    prerequisites: ['a1-present-continuous'],
    tags: ['modality', 'verb'],
    blocks: [
      {
        type: 'text',
        title: 'Mastar + istemek = "أريد أن"',
        body: b(
          'للتعبير عن الرغبة نستخدم المصدر القصير (‎-mek/-mak‎) متبوعاً بفعل istemek: gitmek istiyorum (أريد أن أذهب). لاحظ أن الفعل الأول يبقى في المصدر ولا يُصرَّف، والتصريف يقع على istemek فقط.',
          'بۆ دەربڕینی ئارەزوو سەرچاوەی کورت (‎-mek/-mak‎) بەکاردەهێنین دواتر کاری istemek: gitmek istiyorum (دەمەوێت بڕۆم). سەرنج بدە کاری یەکەم لە سەرچاوەدا دەمێنێتەوە و ناگۆڕدرێت.',
        ),
      },
      {
        type: 'examples',
        title: 'İstek: -mek istemek',
        items: [
          p('Türkçe öğrenmek istiyorum.', 'türk-ÇE öö-ren-MEK is-ti-YO-rum', 'أريد أن أتعلّم التركية.', 'دەمەوێت فێری تورکی ببم.'),
          p('Bir kahve içmek ister misiniz?', 'bir kah-VE iç-MEK is-TER mi-si-niz', 'هل تودّون شرب قهوة؟', 'دەتانەوێت قاوەیەک بخۆنەوە؟'),
          p('Yarın seni görmek istiyorum.', 'ya-RIN se-Nİ gör-MEK is-ti-YO-rum', 'أريد أن أراك غداً.', 'سبەینێ دەمەوێت بتبینم.'),
          p('Hiçbir şey yapmak istemiyorum.', 'hiç-BİR ŞEY yap-MAK is-te-mi-YO-rum', 'لا أريد أن أفعل أي شيء.', 'ناموێت هیچ شتێک بکەم.'),
        ],
      },
      {
        type: 'text',
        title: 'Gereklilik: -meli / -malı',
        body: b(
          'للوجوب الداخلي (ما ينبغي فعله) نضيف ‎-meli/-malı‎ إلى الجذر ثم لاحقة الشخص: gitmeliyim (يجب أن أذهب). هذه أقرب إلى "ينبغي" منها إلى الإلزام الخارجي.',
          'بۆ پێویستی ناوەکی (ئەوەی دەبێت بکرێت) ‎-meli/-malı‎ بۆ ڕەگەکە زیاد دەکەین پاشان پاشگری کەس: gitmeliyim (دەبێت بڕۆم).',
        ),
      },
      {
        type: 'conjugation',
        title: 'çalışmak — gereklilik',
        verb: 'çalışmalı',
        rows: [
          { person: 'ben', tr: 'çalışmalıyım', pron: 'ça-lış-ma-lı-YIM', ar: 'يجب أن أعمل/أدرس', ku: 'دەبێت کار بکەم' },
          { person: 'sen', tr: 'çalışmalısın', pron: 'ça-lış-ma-lı-SIN', ar: 'يجب أن تعمل', ku: 'دەبێت کار بکەیت' },
          { person: 'o', tr: 'çalışmalı', pron: 'ça-lış-ma-LI', ar: 'يجب أن يعمل', ku: 'دەبێت کار بکات' },
          { person: 'biz', tr: 'çalışmalıyız', pron: 'ça-lış-ma-lı-YIZ', ar: 'يجب أن نعمل', ku: 'دەبێت کار بکەین' },
          { person: 'siz', tr: 'çalışmalısınız', pron: 'ça-lış-ma-lı-SI-nız', ar: 'يجب أن تعملوا', ku: 'دەبێت کار بکەن' },
          { person: 'onlar', tr: 'çalışmalılar', pron: 'ça-lış-ma-lı-LAR', ar: 'يجب أن يعملوا', ku: 'دەبێت کار بکەن' },
        ],
      },
      {
        type: 'table',
        title: 'Üç gereklilik yapısı karşılaştırması',
        headers: ['Yapı', 'Güç derecesi', 'Örnek', 'Anlam'],
        rows: [
          ['-meli / -malı', 'Öneri, iç gereklilik', 'Dinlenmelisin.', 'ينبغي أن تستريح / دەبێت پشوو بدەیت'],
          ['lazım / gerek', 'Nesnel ihtiyaç', 'Gitmem lazım.', 'يلزمني أن أذهب / پێویستە بڕۆم'],
          ['zorunda', 'Dış zorunluluk, mecburiyet', 'Çalışmak zorundayım.', 'أنا مضطر للعمل / ناچارم کار بکەم'],
        ],
      },
      {
        type: 'examples',
        title: 'Gereklilik cümleleri',
        items: [
          p('Daha çok çalışmalısın.', 'da-HA ÇOK ça-lış-ma-lı-SIN', 'يجب أن تجتهد أكثر.', 'دەبێت زیاتر کۆشش بکەیت.'),
          p('Şimdi gitmem lazım.', 'şim-Dİ git-MEM la-ZIM', 'يجب أن أذهب الآن.', 'ئێستا پێویستە بڕۆم.'),
          p('Her gün ilaç almak zorundayım.', 'her GÜN i-LAÇ al-MAK zo-run-da-YIM', 'أنا مضطر لتناول الدواء كل يوم.', 'ناچارم هەموو ڕۆژێک دەرمان بخۆم.'),
          p('Sigara içmemelisin.', 'si-ga-RA iç-me-me-li-SİN', 'يجب ألا تدخّن.', 'نابێت جگەرە بکێشیت.'),
          p('Bir doktora görünmen gerek.', 'bir dok-to-RA gö-rün-MEN ge-REK', 'يلزمك أن تُعرض على طبيب.', 'پێویستە خۆت پیشانی پزیشکێک بدەیت.'),
        ],
      },
    ],
    exercises: [
      fill('Türkçe öğrenmek ___. (istemek / ben)', 'istiyorum', 'أريد أن أتعلّم التركية.', 'دەمەوێت فێری تورکی ببم.', {
        options: ['istiyorum', 'istiyor', 'isterim', 'istedim'],
      }),
      mcq(
        b('كيف تقول "يجب أن أذهب"؟', 'چۆن دەڵێیت "دەبێت بڕۆم"؟'),
        ['Gitmelisin.', 'Gitmeliyim.', 'Gitmeli.', 'Gitmeliyiz.'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('أيّ تركيب يعبّر عن اضطرار خارجي (مجبَر)؟', 'کام پێکهاتە ناچاری دەرەکی دەردەبڕێت؟'),
        ['-meli / -malı', 'lazım', 'zorunda', '-mek istemek'],
        2,
      ),
      translate('ar-tr', 'يجب أن تستريح.', ['Dinlenmelisin.', 'Dinleniyorsun.', 'Dinlenmek istiyorsun.', 'Dinlendin.'], 0),
      order(
        b('رتّب: أريد أن أشرب قهوة.', 'ڕێک بخە: دەمەوێت قاوە بخۆمەوە.'),
        'Bir kahve içmek istiyorum',
        'أريد أن أشرب قهوة.',
        'دەمەوێت قاوەیەک بخۆمەوە.',
        { pron: 'bir kah-VE iç-MEK is-ti-YO-rum' },
      ),
      speak('Daha çok çalışmalıyım çünkü sınavım var.', 'da-HA ÇOK ça-lış-ma-lı-YIM çün-KÜ sı-na-VIM VAR', 'يجب أن أدرس أكثر لأن لديّ امتحاناً.', 'دەبێت زیاتر بخوێنم چونکە تاقیکردنەوەم هەیە.'),
    ],
  },

  {
    id: 'a2-conjunctions',
    level: 'a2',
    kind: 'grammar',
    order: 6,
    minutes: 20,
    title: 'Temel Bağlaçlar',
    titleI18n: b('أدوات الربط الأساسية', 'بەستەرە بنەڕەتییەکان'),
    objective: b(
      'أن تربط جملتين أو أكثر لتكوين فقرة مترابطة بدل جمل منفصلة.',
      'ئەوەی دوو ڕستە یان زیاتر ببەستیتەوە بۆ دروستکردنی بڕگەیەکی بەستراو.',
    ),
    prerequisites: ['a1-word-order'],
    tags: ['conjunctions', 'discourse'],
    blocks: [
      {
        type: 'text',
        title: 'Cümleden paragrafa',
        body: b(
          'حتى الآن بنيت جملاً منفصلة. أدوات الربط هي ما يحوّلها إلى كلام متصل طبيعي. الخبر السار: معظمها كلمات مستقلة لا لواحق، وكثير منها مأخوذ من العربية فستعرفه فوراً: ve (و)، fakat (لكن)، çünkü (لأن)، ama (أما).',
          'تا ئێستا ڕستەی جیاوازت دروست کردووە. بەستەرەکان ئەوەن کە دەیانگۆڕن بۆ قسەی پەیوەست و سروشتی. هەواڵی خۆش: زۆربەیان وشەی سەربەخۆن نەک پاشگر، و زۆریان لە عەرەبییەوە هاتوون.',
        ),
      },
      {
        type: 'table',
        title: 'En sık kullanılan bağlaçlar',
        headers: ['Türkçe', 'Okunuş', 'العربية', 'کوردی'],
        rows: [
          ['ve', 'VE', 'و', 'و'],
          ['ile / -le, -la', 'i-LE', 'مع / بواسطة', 'لەگەڵ / بە'],
          ['ama / fakat', 'a-MA / fa-KAT', 'لكن', 'بەڵام'],
          ['çünkü', 'çün-KÜ', 'لأنّ', 'چونکە'],
          ['için', 'i-ÇİN', 'من أجل / لكي', 'بۆ'],
          ['ya da / veya', 'ya-DA / ve-YA', 'أو', 'یان'],
          ['hem ... hem de', 'HEM ... HEM de', 'كلاهما ... و', 'هەم ... هەمیش'],
          ['ne ... ne de', 'NE ... NE de', 'لا ... ولا', 'نە ... نە'],
          ['sonra', 'son-RA', 'ثم / بعد ذلك', 'پاشان'],
          ['önce', 'ön-DJE', 'قبل ذلك', 'پێشتر'],
          ['ayrıca', 'ay-rı-DJA', 'كذلك / إضافةً', 'هەروەها'],
          ['yani', 'ya-Nİ', 'أي / يعني', 'واتە'],
          ['ancak', 'an-DJAK', 'غير أنّ / فقط', 'تەنها / بەڵام'],
          ['bu yüzden', 'BU yüz-DEN', 'لهذا السبب', 'لەبەر ئەوە'],
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: '"ne ... ne de" olumlu fiil ister!',
        body: b(
          'مفاجأة نحوية: تركيب "ne ... ne de" ينفي بنفسه، فيأتي الفعل بعده مثبتاً لا منفياً. نقول "Ne çay ne de kahve içiyorum" (لا أشرب شاياً ولا قهوة) بفعل مثبت içiyorum. أما "içmiyorum" فتكون نفياً مزدوجاً خاطئاً.',
          'سەرسوڕهێنەرییەکی ڕێزمانی: پێکهاتەی "ne ... ne de" خۆی نەفی دەکات، بۆیە کارەکەی دوایی ئەرێنی دێت نەک نەرێنی. دەڵێین "Ne çay ne de kahve içiyorum" بە کاری ئەرێنی.',
        ),
      },
      {
        type: 'examples',
        title: 'Bağlaçlarla cümleler',
        items: [
          p('Çay ve kahve içiyorum.', 'ÇAY ve kah-VE i-çi-YO-rum', 'أشرب الشاي والقهوة.', 'چا و قاوە دەخۆمەوە.'),
          p('Yorgunum ama mutluyum.', 'yor-gu-NUM a-MA mut-lu-YUM', 'أنا متعب لكنني سعيد.', 'ماندووم بەڵام دڵخۆشم.'),
          p('Gelemedim çünkü hastaydım.', 'ge-le-me-DİM çün-KÜ has-tay-DIM', 'لم أستطع المجيء لأنني كنت مريضاً.', 'نەمتوانی بێم چونکە نەخۆش بووم.'),
          p('Sınav için çok çalıştım.', 'sı-NAV i-ÇİN ÇOK ça-lış-TIM', 'درست كثيراً من أجل الامتحان.', 'زۆرم خوێند بۆ تاقیکردنەوەکە.'),
          p('Hem çalışıyorum hem de okuyorum.', 'HEM ça-lı-şı-YO-rum HEM de o-ku-YO-rum', 'أعمل وأدرس في آنٍ واحد.', 'هەم کار دەکەم هەمیش دەخوێنم.'),
          p('Ne çay ne de kahve içiyorum.', 'NE ÇAY NE de kah-VE i-çi-YO-rum', 'لا أشرب شاياً ولا قهوة.', 'نە چا نە قاوە دەخۆمەوە.'),
          p('Önce yemek yedik, sonra sinemaya gittik.', 'ön-DJE ye-MEK ye-DİK son-RA si-ne-ma-YA git-TİK', 'أكلنا أولاً ثم ذهبنا إلى السينما.', 'سەرەتا نانمان خوارد، پاشان چووینە سینەما.'),
          p('Hava soğuktu, bu yüzden dışarı çıkmadık.', 'ha-VA so-uk-TU BU yüz-DEN dı-şa-RI çık-ma-DIK', 'كان الجو بارداً، لهذا لم نخرج.', 'کەشوهەوا سارد بوو، لەبەر ئەوە نەچووینە دەرەوە.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: '"ile" eke dönüşür: -le / -la',
        body: b(
          'كلمة ile (مع) تُلصق غالباً كلاحقة: arkadaşım ile ⟵ arkadaşımla (مع صديقي)، otobüs ile ⟵ otobüsle (بالحافلة). وبعد الحركة تدخل y: araba ile ⟵ arabayla. تُستخدم للمصاحبة وللوسيلة معاً.',
          'وشەی ile (لەگەڵ) بەزۆری وەک پاشگر دەلکێت: arkadaşımla، otobüsle. دوای بزوێن پیتی y دێتە نێوان: arabayla. بۆ هاوڕێیەتی و ئامرازیش بەکاردێت.',
        ),
      },
    ],
    exercises: [
      fill('Yorgunum ___ mutluyum.', 'ama', 'أنا متعب لكنني سعيد.', 'ماندووم بەڵام دڵخۆشم.', {
        options: ['ve', 'ama', 'çünkü', 'için'],
      }),
      fill('Gelemedim ___ hastaydım.', 'çünkü', 'لم أستطع المجيء لأنني كنت مريضاً.', 'نەمتوانی بێم چونکە نەخۆش بووم.', {
        options: ['ama', 'çünkü', 've', 'ya da'],
      }),
      mcq(
        b('أي جملة صحيحة؟', 'کام ڕستە دروستە؟'),
        [
          'Ne çay ne de kahve içmiyorum.',
          'Ne çay ne de kahve içiyorum.',
          'Ne çay ve kahve içiyorum.',
          'Ne çay ne kahve içmedim değil.',
        ],
        1,
        { turkishOptions: true, explain: b('التركيب ينفي بذاته فيبقى الفعل مثبتاً.', 'پێکهاتەکە خۆی نەفی دەکات بۆیە کارەکە ئەرێنی دەمێنێتەوە.') },
      ),
      mcq(
        b('كيف تقول "بالحافلة"؟', 'چۆن دەڵێیت "بە پاس"؟'),
        ['otobüs ile', 'otobüsle', 'otobüsyle', 'otobüs için'],
        1,
        { turkishOptions: true, explain: b('كلاهما صحيح لكن otobüsle هو الشكل الملتصق الشائع.', 'هەردووکیان دروستن بەڵام otobüsle شێوە باوەکەیە.') },
      ),
      match(
        b('طابق أداة الربط بمعناها.', 'بەستەرەکە لەگەڵ واتاکەیدا بگونجێنە.'),
        [
          { tr: 'çünkü', ar: 'لأنّ', ku: 'چونکە' },
          { tr: 'ama', ar: 'لكن', ku: 'بەڵام' },
          { tr: 'bu yüzden', ar: 'لهذا السبب', ku: 'لەبەر ئەوە' },
          { tr: 'ayrıca', ar: 'كذلك', ku: 'هەروەها' },
        ],
      ),
      order(
        b('رتّب: أعمل وأدرس في آن واحد.', 'ڕێک بخە: هەم کار دەکەم هەمیش دەخوێنم.'),
        'Hem çalışıyorum hem de okuyorum',
        'أعمل وأدرس في آنٍ واحد.',
        'هەم کار دەکەم هەمیش دەخوێنم.',
        { pron: 'HEM ça-lı-şı-YO-rum HEM de o-ku-YO-rum' },
      ),
    ],
  },
];
