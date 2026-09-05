import type { Lesson } from '@/types/content';
import { b, fill, match, mcq, order, p, speak, translate } from '../shared/helpers';

/**
 * C1 grammar - register. At this level the student already knows the forms;
 * what they need is to choose the RIGHT form for an academic paper, a formal
 * petition, a news report or a seminar discussion.
 */
export const C1_GRAMMAR: Lesson[] = [
  {
    id: 'c1-complex-clauses',
    level: 'c1',
    kind: 'grammar',
    order: 1,
    minutes: 35,
    title: 'Karmaşık Yan Cümleler',
    titleI18n: b('الجمل الفرعية المركّبة', 'ڕستە لاوەکییە ئاڵۆزەکان'),
    objective: b(
      'أن تبني جملة تركية طويلة متعدّدة الطبقات دون أن تفقد وضوحها.',
      'ئەوەی ڕستەیەکی تورکی درێژ و چەند چینی دروست بکەیت بەبێ ونکردنی ڕوونی.',
    ),
    prerequisites: ['b2-converbs', 'b2-participles'],
    tags: ['syntax', 'advanced'],
    blocks: [
      {
        type: 'text',
        title: 'Katmanlı cümle mimarisi',
        body: b(
          'الجملة التركية المتقدّمة تُبنى كطبقات متداخلة، وكلها تصبّ في فعل واحد أخير. المبدأ: كل جملة فرعية تتحوّل إلى مكوّن اسمي أو ظرفي داخل الجملة الأم. القاعدة الذهبية في القراءة: ابحث عن الفعل الأخير أولاً — فهو قلب الجملة — ثم فكّك الطبقات من الخارج إلى الداخل.',
          'ڕستەی تورکیی پێشکەوتوو وەک چینی تێکەڵ دروست دەبێت، و هەموویان دەڕژێنە ناو یەک کاری کۆتایی. بنەماکە: هەر ڕستەیەکی لاوەکی دەبێت بە پێکهاتەیەکی ناوی یان هاوەڵکاری لە ناو ڕستە دایکەکەدا. ڕێسا زێڕینەکە لە خوێندنەوەدا: سەرەتا بەدوای کاری کۆتاییدا بگەڕێ.',
        ),
      },
      {
        type: 'table',
        title: 'Yan cümle türleri ve bağlayıcıları',
        headers: ['Tür', 'Yapı', 'Örnek'],
        rows: [
          ['İsim cümlesi (özne)', '-dik/-ecek + iyelik', 'Geç kaldığın belli.'],
          ['İsim cümlesi (nesne)', '-dik/-ecek + iyelik + -i', 'Geldiğini duydum.'],
          ['Sıfat cümlesi', '-en / -dik / -ecek', 'Anlattığın hikâye ilginçti.'],
          ['Zarf cümlesi (zaman)', '-ince, -ken, -dikten sonra', 'İşi bitirdikten sonra döneriz.'],
          ['Zarf cümlesi (sebep)', '-diği için, -dığından', 'Yağmur yağdığından çıkmadık.'],
          ['Zarf cümlesi (amaç)', '-mek için, -mek üzere', 'Görüşmek üzere geldim.'],
          ['Zarf cümlesi (zıtlık)', '-diği hâlde, -mesine rağmen', 'Çalıştığı hâlde kazanamadı.'],
          ['Zarf cümlesi (koşul)', '-diği takdirde, -mesi hâlinde', 'Gelmediği takdirde başlarız.'],
        ],
      },
      {
        type: 'examples',
        title: 'Çok katmanlı cümleler — parçala ve anla',
        items: [
          p(
            'Dün akşam bana anlattığın, uzun süredir üzerinde çalıştığını söylediğin proje sonunda kabul edilmiş.',
            'DÜN ak-ŞAM ba-NA an-lat-tı-IN u-ZUN sü-re-DİR ü-ze-rin-DE ça-lış-tı-ı-NI söy-le-di-İN pro-JE so-nun-DA ka-BUL e-dil-MİŞ',
            'المشروع الذي حدّثتني عنه مساء أمس، والذي قلت إنك تعمل عليه منذ وقت طويل، قُبل أخيراً.',
            'ئەو پڕۆژەیەی دوێنێ ئێوارە باست بۆ کردم، ئەوەی گوتت ماوەیەکی درێژە لەسەری کار دەکەیت، لە کۆتاییدا پەسەند کراوە.',
          ),
          p(
            'Hükümetin açıkladığı yeni düzenlemenin, küçük işletmeleri nasıl etkileyeceği henüz belli değil.',
            'hü-kü-me-TİN a-çık-la-dı-I ye-Nİ dü-zen-le-me-NİN kü-ÇÜK iş-let-me-le-Rİ na-SIL et-ki-le-ye-dje-İ he-NÜZ bel-Lİ de-İL',
            'لم يتّضح بعد كيف سيؤثّر التنظيم الجديد الذي أعلنته الحكومة على المنشآت الصغيرة.',
            'هێشتا ڕوون نییە کە ئەو ڕێکخستنە نوێیەی حکومەت ڕایگەیاند چۆن کاریگەری لەسەر کۆمپانیا بچووکەکان دەبێت.',
          ),
          p(
            'Uzun yıllar yurt dışında yaşamış olmasına rağmen ana dilini hiç unutmadığı görülüyor.',
            'u-ZUN yıl-LAR yurt dı-şın-DA ya-şa-MIŞ ol-ma-sı-NA ra-MEN a-NA di-li-Nİ HİÇ u-nut-ma-dı-I gö-rü-lü-YOR',
            'يبدو أنه لم ينسَ لغته الأم رغم أنه عاش سنوات طويلة في الخارج.',
            'وا دەردەکەوێت کە زمانی دایکی لەبیر نەکردووە سەرەڕای ئەوەی ساڵانێکی زۆر لە دەرەوەی وڵات ژیاوە.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Okuma stratejisi: dört adım',
        body: b(
          'لتفكيك جملة تركية طويلة: (1) ابحث عن الفعل الأخير — هو الفعل الرئيسي. (2) ابحث عن فاعله (غالباً في أول الجملة بلاحقة ‎-in‎ أو بلا لاحقة). (3) حدّد أين تنتهي كل جملة فرعية — علامتها لاحقة ‎-dik/-ecek/-en/-ince‎. (4) ترجم من الداخل إلى الخارج. بالتمرين تصبح هذه العملية لحظية.',
          'بۆ شیکردنەوەی ڕستەیەکی تورکیی درێژ: (١) بەدوای کاری کۆتاییدا بگەڕێ — کارە سەرەکییەکەیە. (٢) بەدوای کردارەکەیدا بگەڕێ. (٣) دیاری بکە هەر ڕستەیەکی لاوەکی لە کوێ کۆتایی دێت. (٤) لە ناوەوە بۆ دەرەوە وەریبگێڕە.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('في جملة تركية طويلة، أين يقع الفعل الرئيسي؟', 'لە ڕستەیەکی تورکیی درێژدا، کاری سەرەکی لە کوێدایە؟'),
        ['في البداية', 'في الوسط', 'في النهاية دائماً', 'بعد الفاعل مباشرة'],
        2,
      ),
      fill('Yağmur yağ___ dışarı çıkmadık. (sebep bildiren yapı)', 'dığından', 'لم نخرج بسبب هطول المطر.', 'بەهۆی بارینی بارانەوە نەچووینە دەرەوە.', {
        options: ['dığından', 'ınca', 'arak', 'madan'],
      }),
      translate('tr-ar', 'Çalıştığı hâlde sınavı kazanamadı.', [
        'لم يستطع النجاح في الامتحان رغم أنه درس.',
        'درس فنجح في الامتحان.',
        'لم يدرس فرسب في الامتحان.',
        'سيدرس لينجح في الامتحان.',
      ], 0, { pron: 'ça-lış-tı-I hâl-DE sı-na-VI ka-za-na-ma-DI' }),
      match(
        b('طابق الرابط بالعلاقة التي يعبّر عنها.', 'بەستەرەکە لەگەڵ ئەو پەیوەندییەی دەریدەبڕێت بگونجێنە.'),
        [
          { tr: '-diği için', ar: 'سبب', ku: 'هۆکار' },
          { tr: '-mesine rağmen', ar: 'تضادّ', ku: 'پێچەوانە' },
          { tr: '-mek üzere', ar: 'غرض', ku: 'مەبەست' },
          { tr: '-diği takdirde', ar: 'شرط', ku: 'مەرج' },
        ],
      ),
      order(
        b('رتّب: عدنا بعد أن أنهينا العمل.', 'ڕێک بخە: دوای تەواوکردنی کارەکە گەڕاینەوە.'),
        'İşi bitirdikten sonra eve döndük',
        'عدنا إلى البيت بعد أن أنهينا العمل.',
        'دوای تەواوکردنی کارەکە گەڕاینەوە ماڵ.',
        { pron: 'i-Şİ bi-tir-dik-TEN son-RA e-VE dön-DÜK' },
      ),
    ],
  },

  {
    id: 'c1-advanced-conditionals',
    level: 'c1',
    kind: 'grammar',
    order: 2,
    minutes: 26,
    title: 'İleri Koşul Yapıları',
    titleI18n: b('التراكيب الشرطية المتقدّمة', 'پێکهاتە مەرجییە پێشکەوتووەکان'),
    objective: b(
      'أن تستخدم الشرط في السياق الرسمي والقانوني والأكاديمي.',
      'ئەوەی مەرج لە چوارچێوەی فەرمی و یاسایی و ئەکادیمیدا بەکاربهێنیت.',
    ),
    prerequisites: ['b1-conditional'],
    tags: ['conditional', 'formal'],
    blocks: [
      {
        type: 'table',
        title: 'Resmî koşul bağlayıcıları',
        headers: ['Yapı', 'Kayıt', 'Örnek', 'Anlam'],
        rows: [
          ['-diği takdirde', 'Resmî / hukukî', 'Ödeme yapılmadığı takdirde sözleşme feshedilir.', 'في حال عدم الدفع يُفسخ العقد'],
          ['-mesi hâlinde', 'Resmî / idarî', 'Belgelerin eksik olması hâlinde başvuru reddedilir.', 'في حال نقص الوثائق يُرفض الطلب'],
          ['-mek şartıyla', 'Şart koşma', 'Zamanında teslim etmek şartıyla kabul ederim.', 'أقبل بشرط التسليم في الموعد'],
          ['-mek kaydıyla', 'Resmî şart', 'Kaynak göstermek kaydıyla alıntı yapılabilir.', 'يجوز الاقتباس بشرط ذكر المصدر'],
          ['aksi takdirde', 'Sonuç uyarısı', 'Acele et, aksi takdirde yetişemeyiz.', 'أسرع وإلا لن نلحق'],
          ['-madığı sürece', 'Süre koşulu', 'İzin verilmediği sürece giremezsiniz.', 'ما لم يُؤذن لكم لا تدخلون'],
          ['yeter ki', 'Tek şart', 'Ne istersen yaparım, yeter ki mutlu ol.', 'أفعل ما تريد، المهم أن تكون سعيداً'],
        ],
      },
      {
        type: 'examples',
        title: 'Hukukî ve akademik metinlerden',
        items: [
          p(
            'Başvuru süresi içinde belge sunulmadığı takdirde talep işleme alınmaz.',
            'baş-vu-RU sü-re-Sİ i-çin-DE bel-GE su-nul-ma-dı-I tak-dir-DE ta-LEP iş-le-ME a-lın-MAZ',
            'في حال عدم تقديم الوثائق خلال مدة التقديم، لا يُنظر في الطلب.',
            'لە حاڵەتی پێشکەشنەکردنی بەڵگەنامە لە ماوەی داواکاریدا، داواکارییەکە نابێتە جێی سەرنج.',
          ),
          p(
            'Verilerin doğru yorumlanabilmesi için örneklem büyüklüğünün yeterli olması gerekir.',
            've-ri-le-RİN do-RU yo-rum-la-na-bil-me-Sİ i-ÇİN ör-nek-LEM bü-yük-lü-ü-NÜN ye-ter-Lİ ol-ma-SI ge-re-KİR',
            'لكي تُفسَّر البيانات تفسيراً صحيحاً، يلزم أن يكون حجم العينة كافياً.',
            'بۆ ئەوەی داتاکان بە دروستی لێکبدرێنەوە، پێویستە قەبارەی نموونەکە بەس بێت.',
          ),
          p(
            'Kaynak göstermek kaydıyla bu çalışmadan alıntı yapılabilir.',
            'kay-NAK gös-ter-MEK kay-dıy-LA BU ça-lış-ma-DAN a-lın-TI ya-pı-la-bi-LİR',
            'يجوز الاقتباس من هذه الدراسة بشرط ذكر المصدر.',
            'دەکرێت لەم توێژینەوەیە وەربگیرێتەوە بە مەرجی نیشاندانی سەرچاوە.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Konuşma dilindeki karşılıkları',
        body: b(
          'لكل تركيب رسمي مقابل عامّي: ‎-diği takdirde‎ ⟵ ‎-mezse‎. ‎-mesi hâlinde‎ ⟵ ‎-irse‎. ‎-madığı sürece‎ ⟵ ‎-medikçe‎. اعرف كليهما: استخدم الرسمي في الكتابة والعامّي في الحديث. الخلط بينهما يبدو غريباً للأذن التركية.',
          'بۆ هەر پێکهاتەیەکی فەرمی بەرامبەرێکی ناڕەسمی هەیە: ‎-diği takdirde‎ ⟵ ‎-mezse‎. ‎-mesi hâlinde‎ ⟵ ‎-irse‎. هەردووکیان بزانە: فەرمییەکە لە نووسیندا و ناڕەسمییەکە لە قسەدا.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('أي تركيب يناسب نصاً قانونياً؟', 'کام پێکهاتە لەگەڵ دەقێکی یاساییدا دەگونجێت؟'),
        ['gelmezse', 'gelmediği takdirde', 'gelmese', 'gelmiyorsa'],
        1,
        { turkishOptions: true },
      ),
      fill('Kaynak göstermek ___ alıntı yapılabilir.', 'kaydıyla', 'يجوز الاقتباس بشرط ذكر المصدر.', 'بە مەرجی نیشاندانی سەرچاوە دەکرێت وەربگیرێتەوە.', {
        options: ['kaydıyla', 'takdirde', 'sürece', 'rağmen'],
      }),
      translate('tr-ar', 'İzin verilmediği sürece içeri giremezsiniz.', [
        'ما لم يُؤذن لكم لا يمكنكم الدخول.',
        'أُذن لكم بالدخول.',
        'دخلتم دون إذن.',
        'سيُؤذن لكم بالدخول.',
      ], 0, { pron: 'i-ZİN ve-ril-me-di-İ sü-re-DJE i-çe-Rİ gi-re-mez-si-NİZ' }),
      match(
        b('طابق التركيب الرسمي بمقابله العامّي.', 'پێکهاتە فەرمییەکە لەگەڵ بەرامبەرە ناڕەسمییەکەیدا بگونجێنە.'),
        [
          { tr: '-diği takdirde ↔ -mezse', ar: 'في حال ← إن لم', ku: 'لە حاڵەتی ← ئەگەر نا' },
          { tr: '-mesi hâlinde ↔ -irse', ar: 'في حال ← إن', ku: 'لە حاڵەتی ← ئەگەر' },
          { tr: '-madığı sürece ↔ -medikçe', ar: 'ما دام لم ← ما لم', ku: 'تا ئەو کاتەی نا' },
          { tr: 'aksi takdirde ↔ yoksa', ar: 'وإلا', ku: 'ئەگەرنا' },
        ],
      ),
    ],
  },

  {
    id: 'c1-advanced-conjunctions',
    level: 'c1',
    kind: 'grammar',
    order: 3,
    minutes: 24,
    title: 'İleri Bağlaçlar ve Söylem Belirleyicileri',
    titleI18n: b('أدوات الربط المتقدّمة ومؤشّرات الخطاب', 'بەستەرە پێشکەوتووەکان و ئاماژەکانی گوتار'),
    objective: b(
      'أن تنظّم فقرة أكاديمية بأدوات ربط تدلّ على التسلسل والتقابل والاستنتاج.',
      'ئەوەی بڕگەیەکی ئەکادیمی ڕێک بخەیت بە بەستەرێک کە ئاماژە بە ڕیزبەندی و بەرامبەری و دەرئەنجام دەکات.',
    ),
    prerequisites: ['a2-conjunctions'],
    tags: ['discourse', 'academic'],
    blocks: [
      {
        type: 'table',
        title: 'Söylem belirleyicileri — işlevlere göre',
        headers: ['İşlev', 'Bağlayıcılar', 'Örnek'],
        rows: [
          ['Sıralama', 'öncelikle, ilk olarak, ardından, son olarak', 'Öncelikle veriler toplandı, ardından analiz edildi.'],
          ['Ekleme', 'ayrıca, bunun yanı sıra, üstelik, dahası', 'Üstelik maliyeti de düşüktür.'],
          ['Karşıtlık', 'ancak, oysa, buna karşın, halbuki, ne var ki', 'Sonuçlar olumluydu; ne var ki örneklem küçüktü.'],
          ['Sebep', 'zira, çünkü, -diği için, dolayısıyla', 'Zira bu yöntem daha güvenilirdir.'],
          ['Sonuç', 'bu nedenle, dolayısıyla, sonuç olarak, kısacası', 'Dolayısıyla hipotez doğrulanmıştır.'],
          ['Örnekleme', 'örneğin, söz gelimi, mesela', 'Örneğin İstanbul verileri bunu göstermektedir.'],
          ['Açıklama', 'yani, başka bir deyişle, bir başka ifadeyle', 'Yani sonuç istatistiksel olarak anlamlıdır.'],
          ['Vurgu', 'özellikle, bilhassa, hele ki', 'Özellikle genç kuşakta bu eğilim belirgindir.'],
          ['Sınırlama', 'yalnızca, sadece, ancak ve ancak', 'Ancak belirli koşullarda geçerlidir.'],
        ],
      },
      {
        type: 'examples',
        title: 'Akademik paragraf örneği',
        items: [
          p(
            'Öncelikle mevcut literatür taranmıştır.',
            'ön-dje-lik-LE mev-DJUT li-te-ra-TÜR ta-ran-mış-TIR',
            'أولاً، جرى مسح الأدبيات الموجودة.',
            'سەرەتا ئەدەبیاتی بەردەست پێداچوونەوەی بۆ کرا.',
          ),
          p(
            'Ardından nicel yöntemle veri toplanmıştır.',
            'ar-dın-DAN ni-DJEL yön-tem-LE ve-Rİ top-lan-mış-TIR',
            'ثم جُمعت البيانات بالمنهج الكمّي.',
            'پاشان بە ڕێبازی چەندایەتی داتا کۆکرایەوە.',
          ),
          p(
            'Bulgular hipotezi desteklemektedir; ne var ki örneklem sınırlıdır.',
            'bul-gu-LAR hi-po-te-Zİ des-tek-le-mek-te-DİR NE VAR Kİ ör-nek-LEM sı-nır-lı-DIR',
            'تدعم النتائج الفرضية؛ غير أن العينة محدودة.',
            'دۆزینەوەکان پشتگیری گریمانەکە دەکەن؛ بەڵام نموونەکە سنووردارە.',
          ),
          p(
            'Dolayısıyla bu bulguların genellenebilirliği tartışmalıdır.',
            'do-la-yı-sıy-LA BU bul-gu-la-RIN ge-nel-le-ne-bi-lir-li-İ tar-tış-ma-lı-DIR',
            'وبالتالي فإن قابلية تعميم هذه النتائج محلّ نقاش.',
            'کەواتە گشتگیربوونی ئەم دۆزینەوانە جێی گفتوگۆیە.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: '"ki" bağlacı: Farsçadan gelen istisna',
        body: b(
          'التركية الأصيلة لا تعرف أداة الربط ki، لكنها دخلت من الفارسية واستقرّت في اللغة. تُستخدم في: (1) التوضيح — "Biliyorum ki gelecek" (أعلم أنه سيأتي). (2) التعجّب — "Öyle güzel ki!" (ما أجمله!). (3) النتيجة — "O kadar yorgundum ki hemen uyudum". لكن الأسلوب التركي الرصين يفضّل التركيب باللواحق: "Geleceğini biliyorum" أفصح من "Biliyorum ki gelecek".',
          'تورکیی ڕەسەن بەستەری ki ناناسێت، بەڵام لە فارسییەوە هاتووە و جێگیر بووە. بەکاردێت بۆ: (١) ڕوونکردنەوە، (٢) سەرسوڕمان، (٣) ئەنجام. بەڵام شێوازی تورکیی پوخت پێکهاتەی پاشگری پەسەند دەکات: "Geleceğini biliyorum" پوختترە لە "Biliyorum ki gelecek".',
        ),
      },
    ],
    exercises: [
      mcq(
        b('أي أداة تعبّر عن التضادّ في نصّ أكاديمي؟', 'کام ئامراز پێچەوانەیی لە دەقێکی ئەکادیمیدا دەردەبڕێت؟'),
        ['dolayısıyla', 'ne var ki', 'ayrıca', 'örneğin'],
        1,
        { turkishOptions: true },
      ),
      fill('Sonuçlar tutarlıdır; ___ hipotez doğrulanmıştır.', 'dolayısıyla', 'النتائج متسقة؛ وبالتالي تأكدت الفرضية.', 'ئەنجامەکان یەکگرتوون؛ کەواتە گریمانەکە پشتڕاست بووەتەوە.', {
        options: ['dolayısıyla', 'oysa', 'örneğin', 'ancak'],
      }),
      match(
        b('طابق الأداة بوظيفتها الخطابية.', 'ئامرازەکە لەگەڵ ئەرکە گوتارییەکەیدا بگونجێنە.'),
        [
          { tr: 'zira', ar: 'سبب', ku: 'هۆکار' },
          { tr: 'oysa', ar: 'تضادّ', ku: 'پێچەوانە' },
          { tr: 'kısacası', ar: 'خلاصة', ku: 'کورتی' },
          { tr: 'bilhassa', ar: 'تخصيص وتوكيد', ku: 'بەتایبەت' },
        ],
      ),
      translate('ar-tr', 'وبعبارة أخرى، النتيجة ذات دلالة إحصائية.', [
        'Başka bir deyişle, sonuç istatistiksel olarak anlamlıdır.',
        'Örneğin sonuç istatistikseldir.',
        'Ancak sonuç anlamlı değildir.',
        'Öncelikle sonuç hesaplanmıştır.',
      ], 0),
    ],
  },

  {
    id: 'c1-formal',
    level: 'c1',
    kind: 'grammar',
    order: 4,
    minutes: 30,
    title: 'Resmî Türkçe',
    titleI18n: b('التركية الرسمية', 'تورکیی فەرمی'),
    objective: b(
      'أن تكتب رسالة رسمية أو طلباً إدارياً بالصيغ المتوقّعة.',
      'ئەوەی نامەیەکی فەرمی یان داواکارییەکی کارگێڕی بە شێوە چاوەڕوانکراوەکان بنووسیت.',
    ),
    prerequisites: ['b1-passive'],
    tags: ['register', 'formal', 'writing'],
    blocks: [
      {
        type: 'text',
        title: 'Resmî dilin üç sütunu',
        body: b(
          'التركية الرسمية تقوم على ثلاث ركائز: (1) صيغة المجهول لتجنّب ذكر الفاعل. (2) لاحقة ‎-mektedir‎ بدل ‎-yor‎ للحاضر المستمرّ الرسمي. (3) لاحقة ‎-dir‎ التوكيدية التي تُحذف في الكلام. من يجيد هذه الثلاث يكتب تركية إدارية سليمة.',
          'تورکیی فەرمی لەسەر سێ کۆڵەکە دامەزراوە: (١) ڕەنگی نەناسراو بۆ خۆدوورخستنەوە لە باسکردنی کردار. (٢) پاشگری ‎-mektedir‎ لە جیاتی ‎-yor‎ بۆ ئێستای بەردەوامی فەرمی. (٣) پاشگری جەختکەری ‎-dir‎.',
        ),
      },
      {
        type: 'table',
        title: 'Günlük ↔ resmî karşılıkları',
        headers: ['Günlük dil', 'Resmî dil', 'Anlam'],
        rows: [
          ['çalışıyor', 'çalışmaktadır', 'يعمل / كار دەکات'],
          ['artıyor', 'artmaktadır', 'يزداد / زیاد دەبێت'],
          ['söyledi', 'belirtmiştir / ifade etmiştir', 'ذكر / ئاماژەی پێکردووە'],
          ['yaptık', 'gerçekleştirilmiştir', 'أُنجز / جێبەجێ کراوە'],
          ['istiyorum', 'talep etmekteyim / arz ederim', 'أطلب / داوا دەکەم'],
          ['gönderdim', 'sunulmuştur / iletilmiştir', 'قُدّم / پێشکەش کراوە'],
          ['lazım', 'gerekmektedir / zorunludur', 'يلزم / پێویستە'],
          ['ama', 'ancak / bununla birlikte', 'غير أن / بەڵام'],
        ],
      },
      {
        type: 'examples',
        title: 'Resmî dilekçe kalıpları',
        items: [
          p(
            'Gereğinin yapılmasını arz ederim.',
            'ge-re-i-NİN ya-pıl-ma-sı-NI ARZ e-de-rim',
            'أرجو اتخاذ اللازم. (خاتمة الطلبات الرسمية)',
            'داوا دەکەم پێویست ئەنجام بدرێت. (کۆتایی داواکاری فەرمی)',
          ),
          p(
            'Bilgilerinize saygılarımla sunarım.',
            'bil-gi-le-ri-ni-ZE say-gı-la-rım-LA su-na-RIM',
            'أرفع إلى علمكم مع فائق الاحترام.',
            'بە ڕێزەوە پێشکەشی زانیارییەکانتانی دەکەم.',
          ),
          p(
            'Söz konusu belgeler ekte sunulmuştur.',
            'SÖZ ko-nu-SU bel-ge-LER ek-TE su-nul-muş-TUR',
            'الوثائق المذكورة مرفقة طيّه.',
            'بەڵگەنامە باسکراوەکان لە پاشکۆدا پێشکەش کراون.',
          ),
          p(
            'Başvurunuz değerlendirmeye alınmıştır.',
            'baş-vu-ru-NUZ de-er-len-dir-me-YE a-lın-mış-TIR',
            'أُخذ طلبكم بعين الاعتبار للتقييم.',
            'داواکارییەکەتان خراوەتە بەردەم هەڵسەنگاندن.',
          ),
          p(
            'Konuya ilişkin ayrıntılı bilgi aşağıda yer almaktadır.',
            'ko-nu-YA i-liş-KİN ay-rın-tı-LI bil-Gİ a-şa-ı-DA YER al-mak-ta-DIR',
            'ترد المعلومات التفصيلية بشأن الموضوع أدناه.',
            'زانیاری وردی پەیوەندیدار بە بابەتەکە لە خوارەوە هاتووە.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Hitap ve kapanış',
        body: b(
          'صيغ المخاطبة الرسمية: Sayın Ahmet Yılmaz (السيد المحترم)، Sayın Yetkili (إلى المسؤول المختص)، Sayın Hocam (أستاذي الفاضل). وصيغ الختام: Saygılarımla (مع الاحترام) للمراسلات العادية، Saygılarımla arz ederim للطلبات الرسمية، İyi çalışmalar (طيب العمل) للزملاء.',
          'شێوەکانی ئاخاوتنی فەرمی: Sayın Ahmet Yılmaz (بەڕێز)، Sayın Yetkili (بۆ بەرپرسی پەیوەندیدار). شێوەکانی کۆتایی: Saygılarımla (بە ڕێزەوە)، İyi çalışmalar (کاری باش).',
        ),
      },
      {
        type: 'dialogue',
        title: 'Resmî e-posta örneği',
        lines: [
          { speaker: 'Konu', tr: 'Ders kaydı hakkında', pron: 'DERS kay-DI hak-kın-DA', ar: 'الموضوع: بخصوص تسجيل المقرّر', ku: 'بابەت: دەربارەی تۆمارکردنی وانە' },
          { speaker: 'Hitap', tr: 'Sayın Hocam,', pron: 'sa-YIN ho-DJAM', ar: 'أستاذي الفاضل،', ku: 'مامۆستای بەڕێز،' },
          { speaker: 'Giriş', tr: 'Bahar döneminde açacağınız seçmeli derse kayıt olmak istiyorum.', pron: 'ba-HAR dö-ne-min-DE a-ça-dja-ı-NIZ seç-me-Lİ der-SE ka-YIT ol-MAK is-ti-YO-rum', ar: 'أرغب في التسجيل في المقرّر الاختياري الذي ستفتحونه في الفصل الربيعي.', ku: 'دەمەوێت خۆم تۆمار بکەم لەو وانە هەڵبژاردەیەی لە وەرزی بەهاردا دەیکەنەوە.' },
          { speaker: 'Gövde', tr: 'Ön koşul dersini geçen dönem başarıyla tamamladım; transkriptim ekte sunulmuştur.', pron: 'ÖN ko-ŞUL der-si-Nİ ge-ÇEN dö-NEM ba-şa-rıy-LA ta-mam-la-DIM trans-krip-TİM ek-TE su-nul-muş-TUR', ar: 'أكملت المقرّر التمهيدي بنجاح في الفصل الماضي؛ وكشف درجاتي مرفق طيّه.', ku: 'وانە پێشمەرجەکەم وەرزی ڕابردوو بە سەرکەوتوویی تەواو کرد؛ تێبینی نمرەکانم لە پاشکۆدایە.' },
          { speaker: 'Kapanış', tr: 'Gereğini bilgilerinize arz eder, iyi çalışmalar dilerim.', pron: 'ge-re-i-Nİ bil-gi-le-ri-ni-ZE ARZ e-DER i-Yİ ça-lış-ma-LAR di-le-rim', ar: 'أرفع الأمر إلى علمكم راجياً اتخاذ اللازم، وأتمنى لكم طيب العمل.', ku: 'پێویست پێشکەشی زانیارییەکانتان دەکەم، کاری باشتان بۆ خواستم.' },
        ],
      },
    ],
    exercises: [
      mcq(
        b('ما المقابل الرسمي لـ "çalışıyor"؟', 'بەرامبەری فەرمیی "çalışıyor" چییە؟'),
        ['çalışır', 'çalışmaktadır', 'çalışacaktır', 'çalışmıştır'],
        1,
        { turkishOptions: true },
      ),
      fill('Söz konusu belgeler ekte ___.', 'sunulmuştur', 'الوثائق المذكورة مرفقة طيّه.', 'بەڵگەنامەکان لە پاشکۆدا پێشکەش کراون.', {
        options: ['sundum', 'sunulmuştur', 'sunuyorum', 'sunacağım'],
      }),
      mcq(
        b('كيف تختم طلباً رسمياً؟', 'چۆن داواکارییەکی فەرمی کۆتایی پێدەهێنیت؟'),
        ['Görüşürüz.', 'Hoşça kal.', 'Gereğini arz ederim.', 'Kendine iyi bak.'],
        2,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'أُخذ طلبكم بعين الاعتبار.', [
        'Başvurunuzu aldım.',
        'Başvurunuz değerlendirmeye alınmıştır.',
        'Başvuru yapıyorsunuz.',
        'Başvurunuz reddedildi.',
      ], 1),
      match(
        b('طابق العبارة اليومية بمقابلها الرسمي.', 'دەستەواژە ڕۆژانەکە لەگەڵ بەرامبەرە فەرمییەکەیدا بگونجێنە.'),
        [
          { tr: 'söyledi → belirtmiştir', ar: 'قال ← ذكر', ku: 'گوتی ← ئاماژەی پێکردووە' },
          { tr: 'lazım → gerekmektedir', ar: 'يلزم', ku: 'پێویستە' },
          { tr: 'ama → ancak', ar: 'لكن ← غير أن', ku: 'بەڵام' },
          { tr: 'yaptık → gerçekleştirilmiştir', ar: 'فعلنا ← أُنجز', ku: 'کردمان ← جێبەجێ کراوە' },
        ],
      ),
    ],
  },

  {
    id: 'c1-academic',
    level: 'c1',
    kind: 'grammar',
    order: 5,
    minutes: 32,
    title: 'Akademik Türkçe',
    titleI18n: b('التركية الأكاديمية', 'تورکیی ئەکادیمی'),
    objective: b(
      'أن تكتب ملخّصاً أو فقرة منهجية بالأسلوب الأكاديمي التركي.',
      'ئەوەی کورتە یان بڕگەیەکی ڕێبازی بە شێوازی ئەکادیمیی تورکی بنووسیت.',
    ),
    prerequisites: ['c1-formal'],
    tags: ['register', 'academic', 'writing'],
    blocks: [
      {
        type: 'text',
        title: 'Nesnellik: "ben" yok, edilgen var',
        body: b(
          'المبدأ الأول في التركية الأكاديمية هو الموضوعية: يُتجنّب ضمير المتكلم تماماً. لا تقل "Ben bu yöntemi kullandım" بل "Bu yöntem kullanılmıştır". ولا تقل "Bence" بل "Bu çalışmanın bulgularına göre". صيغة المجهول ليست خياراً أسلوبياً هنا بل شرط قبول في المجلات المحكّمة.',
          'بنەمای یەکەم لە تورکیی ئەکادیمیدا بابەتییەتییە: جێناوی کەسی یەکەم بە تەواوی دەگیرێت. مەڵێ "Ben bu yöntemi kullandım" بەڵکو "Bu yöntem kullanılmıştır". مەڵێ "Bence" بەڵکو "Bu çalışmanın bulgularına göre".',
        ),
      },
      {
        type: 'table',
        title: 'Makale bölümleri ve kalıpları',
        headers: ['Bölüm', 'Türkçe kalıp', 'Anlam'],
        rows: [
          ['Amaç', 'Bu çalışmanın amacı ...-i incelemektir.', 'هدف هذه الدراسة هو دراسة...'],
          ['Literatür', 'Alanyazında ... konusunda sınırlı sayıda çalışma bulunmaktadır.', 'توجد دراسات محدودة في الأدبيات حول...'],
          ['Yöntem', 'Veriler ... yöntemiyle toplanmıştır.', 'جُمعت البيانات بمنهج...'],
          ['Örneklem', 'Araştırmanın örneklemini ... oluşturmaktadır.', 'تتكوّن عينة البحث من...'],
          ['Bulgular', 'Elde edilen bulgulara göre ...', 'وفقاً للنتائج المتحصّلة...'],
          ['Tartışma', 'Bu bulgu, ...’ın çalışmasıyla örtüşmektedir.', 'تتفق هذه النتيجة مع دراسة...'],
          ['Sınırlılık', 'Çalışmanın en önemli sınırlılığı ...-dir.', 'أهم محدّدات الدراسة هي...'],
          ['Sonuç', 'Sonuç olarak ... söylenebilir.', 'وخلاصةً يمكن القول إن...'],
          ['Öneri', 'İleride yapılacak çalışmalarda ... önerilmektedir.', 'يُوصى في الدراسات المستقبلية بـ...'],
        ],
      },
      {
        type: 'examples',
        title: 'Gerçek akademik cümleler',
        items: [
          p(
            'Bu çalışmanın amacı, iki dilli öğrencilerin Türkçe okuma becerilerini incelemektir.',
            'BU ça-lış-ma-NIN a-ma-DJI i-Kİ dil-Lİ öö-ren-dji-le-RİN türk-ÇE o-ku-MA be-dje-ri-le-ri-Nİ in-dje-le-mek-TİR',
            'هدف هذه الدراسة هو بحث مهارات القراءة بالتركية لدى الطلاب ثنائيي اللغة.',
            'ئامانجی ئەم توێژینەوەیە لێکۆڵینەوەیە لە توانای خوێندنەوەی تورکی لای قوتابییە دوو زمانەکان.',
          ),
          p(
            'Araştırmanın örneklemini 240 üniversite öğrencisi oluşturmaktadır.',
            'a-raş-tır-ma-NIN ör-nek-le-mi-Nİ i-Kİ yüz KIRK ü-ni-ver-si-TE öö-ren-dji-Sİ o-luş-tur-mak-ta-DIR',
            'تتكوّن عينة البحث من 240 طالباً جامعياً.',
            'نموونەی توێژینەوەکە لە ٢٤٠ قوتابی زانکۆ پێکدێت.',
          ),
          p(
            'Elde edilen bulgular, ana dili Arapça olan öğrencilerin ünlü uyumunda zorlandığını göstermektedir.',
            'el-DE e-di-LEN bul-gu-LAR a-NA di-Lİ a-rap-ÇA o-LAN öö-ren-dji-le-RİN ün-LÜ u-yu-mun-DA zor-lan-dı-ı-NI gös-ter-mek-te-DİR',
            'تُظهر النتائج أن الطلاب الناطقين بالعربية يواجهون صعوبة في تناغم الحركات.',
            'دۆزینەوەکان دەریدەخەن کە قوتابیانی عەرەبیزمان لە هارمۆنیای بزوێنەکاندا دووچاری قورسایی دەبن.',
          ),
          p(
            'Bu sonuç, önceki çalışmalarla tutarlılık göstermektedir.',
            'BU so-NUÇ ön-dje-Kİ ça-lış-ma-lar-LA tu-tar-lı-LIK gös-ter-mek-te-DİR',
            'تُظهر هذه النتيجة اتساقاً مع الدراسات السابقة.',
            'ئەم ئەنجامە یەکگرتوویی لەگەڵ توێژینەوە پێشووەکاندا نیشان دەدات.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Arapça kökenli akademik kelimeler',
        body: b(
          'المتعلّم العربي لديه ميزة هائلة هنا: كثير من المصطلحات الأكاديمية التركية عربية الأصل وستفهمها فوراً: kavram (من "قوام")، mefhum، mesele، usul، tahlil، istatistik، nitel/nicel (تركية حديثة)، hipotez، analiz. لكن انتبه لفخّ "الأصدقاء الكاذبين": بعض الكلمات غيّرت معناها في التركية.',
          'فێرخوازی عەرەب لێرەدا ئاسانکارییەکی گەورەی هەیە: زۆرێک لە زاراوە ئەکادیمییە تورکییەکان ڕەگی عەرەبین. بەڵام ئاگاداری تەڵەی "هاوڕێی درۆزن" بە: هەندێک وشە واتاکەیان لە تورکیدا گۆڕاوە.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('أي صيغة تناسب مقالاً أكاديمياً؟', 'کام شێوە لەگەڵ وتارێکی ئەکادیمیدا دەگونجێت؟'),
        [
          'Ben bu yöntemi kullandım.',
          'Bu yöntem kullanılmıştır.',
          'Bu yöntemi kullandık galiba.',
          'Bence bu yöntem iyi.',
        ],
        1,
        { turkishOptions: true, explain: b('الموضوعية تقتضي المبني للمجهول.', 'بابەتییەتی ڕەنگی نەناسراوی دەوێت.') },
      ),
      fill('Bu çalışmanın amacı, konuyu ___.', 'incelemektir', 'هدف هذه الدراسة هو بحث الموضوع.', 'ئامانجی ئەم توێژینەوەیە لێکۆڵینەوەیە لە بابەتەکە.', {
        options: ['incelemektir', 'inceledim', 'inceliyorum', 'inceleyeceğim'],
      }),
      translate('ar-tr', 'وفقاً للنتائج المتحصّلة...', [
        'Elde edilen bulgulara göre...',
        'Bence bulgular...',
        'Bulguları buldum...',
        'Bulgular olacaktır...',
      ], 0),
      match(
        b('طابق قسم المقالة بعبارته النمطية.', 'بەشی وتارەکە لەگەڵ دەستەواژە نمونەییەکەیدا بگونجێنە.'),
        [
          { tr: 'Bu çalışmanın amacı...', ar: 'الهدف', ku: 'ئامانج' },
          { tr: 'Veriler ... toplanmıştır.', ar: 'المنهج', ku: 'ڕێباز' },
          { tr: 'Elde edilen bulgulara göre...', ar: 'النتائج', ku: 'دۆزینەوەکان' },
          { tr: 'Sonuç olarak ... söylenebilir.', ar: 'الخاتمة', ku: 'دەرئەنجام' },
        ],
      ),
      speak('Bu çalışmanın amacı, iki dilli öğrencilerin Türkçe okuma becerilerini incelemektir.', 'BU ça-lış-ma-NIN a-ma-DJI i-Kİ dil-Lİ öö-ren-dji-le-RİN türk-ÇE o-ku-MA be-dje-ri-le-ri-Nİ in-dje-le-mek-TİR', 'هدف هذه الدراسة هو بحث مهارات القراءة بالتركية لدى الطلاب ثنائيي اللغة.', 'ئامانجی ئەم توێژینەوەیە لێکۆڵینەوەیە لە توانای خوێندنەوەی تورکی لای قوتابییە دوو زمانەکان.'),
    ],
  },

  {
    id: 'c1-participles-advanced',
    level: 'c1',
    kind: 'grammar',
    order: 6,
    minutes: 28,
    title: 'İleri Sıfat-Fiil Kullanımları',
    titleI18n: b('استعمالات متقدّمة للصفات الفعلية', 'بەکارهێنانی پێشکەوتووی ئاوەڵناوی کاری'),
    objective: b(
      'أن تستخدم الصفات الفعلية في تراكيب اسمية كثيفة كما في الصحافة والقانون.',
      'ئەوەی ئاوەڵناوی کاری لە پێکهاتەی ناویی چڕدا بەکاربهێنیت وەک لە ڕۆژنامەگەری و یاسادا.',
    ),
    prerequisites: ['b2-participles'],
    tags: ['participles', 'advanced', 'reading'],
    blocks: [
      {
        type: 'text',
        title: 'Gazete başlıklarının dili',
        body: b(
          'الصحافة والقانون في التركية يعتمدان على تكديس الصفات الفعلية قبل الاسم، فتتكوّن عبارات اسمية طويلة تختصر جملاً كاملة. "Dün açıklanan, ekonomiyi doğrudan etkileyecek yeni karar" = "القرار الجديد الذي أُعلن أمس والذي سيؤثّر مباشرة على الاقتصاد". هذه بنية أساسية لقراءة الأخبار.',
          'ڕۆژنامەگەری و یاسا لە تورکیدا پشت بە کۆکردنەوەی ئاوەڵناوی کاری پێش ناو دەبەستن، بۆیە دەستەواژەی ناویی درێژ دروست دەبن کە ڕستەی تەواو کورت دەکەنەوە. ئەمە پێکهاتەیەکی بنەڕەتییە بۆ خوێندنەوەی هەواڵ.',
        ),
      },
      {
        type: 'table',
        title: 'Sıfat-fiil özetleri',
        headers: ['Ek', 'Zaman/çatı', 'Örnek', 'Anlam'],
        rows: [
          ['-en / -an', 'Özne, her zaman', 'gelen misafir', 'الضيف القادم'],
          ['-dik + iyelik', 'Nesne, geçmiş/şimdi', 'okuduğum makale', 'المقالة التي قرأتها'],
          ['-ecek + iyelik', 'Nesne, gelecek', 'yazacağım rapor', 'التقرير الذي سأكتبه'],
          ['-miş', 'Tamamlanmış durum', 'kırılmış cam', 'الزجاج المكسور'],
          ['-esi', 'Dilek/beddua (arkaik)', 'kör olası', 'عسى أن يعمى (سبّ)'],
          ['-mez', 'Olumsuz nitelik', 'çıkmaz sokak', 'طريق مسدود'],
          ['-r ... -mez', 'Hemen ardından', 'gelir gelmez', 'حالما يأتي'],
        ],
      },
      {
        type: 'examples',
        title: 'Basın ve hukuk dilinden',
        items: [
          p(
            'Dün açıklanan ve piyasaları doğrudan etkileyecek olan karar tartışma yarattı.',
            'DÜN a-çık-la-NAN ve pi-ya-sa-la-RI do-ru-DAN et-ki-le-ye-DJEK o-LAN ka-RAR tar-tış-MA ya-rat-TI',
            'أثار القرار الذي أُعلن أمس والذي سيؤثّر مباشرة على الأسواق جدلاً.',
            'ئەو بڕیارەی دوێنێ ڕاگەیەندرا و ڕاستەوخۆ کاریگەری لەسەر بازاڕەکان دەبێت گفتوگۆی دروست کرد.',
          ),
          p(
            'Başvuruda bulunacak kişilerin taşıması gereken şartlar aşağıda belirtilmiştir.',
            'baş-vu-ru-DA bu-lu-na-DJAK ki-şi-le-RİN ta-şı-ma-SI ge-re-KEN şart-LAR a-şa-ı-DA be-lir-til-miş-TİR',
            'الشروط الواجب توفّرها في الأشخاص الراغبين في التقديم مبيّنة أدناه.',
            'ئەو مەرجانەی پێویستە لەو کەسانەدا هەبێت کە دەیانەوێت داواکاری بکەن لە خوارەوە دیاری کراون.',
          ),
          p(
            'Eve gelir gelmez seni aradım.',
            'e-VE ge-LİR gel-MEZ se-Nİ a-ra-DIM',
            'اتصلت بك حالما وصلت إلى البيت.',
            'هەرکە گەیشتمە ماڵ پەیوەندیم پێوە کردیت.',
          ),
          p(
            'Bu çıkmaz sokaktan geri dönmemiz gerekiyor.',
            'BU çık-MAZ so-kak-TAN ge-Rİ dön-me-MİZ ge-re-ki-YOR',
            'يلزمنا العودة من هذا الطريق المسدود.',
            'پێویستە لەم کۆڵانە داخراوەوە بگەڕێینەوە.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: '"olan" — sıfat-fiilleri birleştiren tutkal',
        body: b(
          'كلمة olan (الكائن/الذي هو) هي أداة بالغة الفائدة لربط تركيبين وصفيين أو لتحويل عبارة اسمية إلى صفة: "sorumlu olan kişi" (الشخص المسؤول)، "gerekli olan belgeler" (الوثائق اللازمة)، "etkileyecek olan karar" (القرار الذي سيؤثّر). استخدمها حين يصعب الربط المباشر.',
          'وشەی olan ئامرازێکی زۆر بەسوودە بۆ بەستنەوەی دوو پێکهاتەی وەسفی: "sorumlu olan kişi"، "gerekli olan belgeler"، "etkileyecek olan karar". کاتێک بەستنەوەی ڕاستەوخۆ قورس بێت بەکاری بهێنە.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما معنى "gelir gelmez"؟', 'واتای "gelir gelmez" چییە؟'),
        ['لا يأتي', 'حالما يأتي', 'قد يأتي', 'كان يأتي'],
        1,
      ),
      mcq(
        b('ما معنى "çıkmaz sokak"؟', 'واتای "çıkmaz sokak" چییە؟'),
        ['شارع واسع', 'شارع مسدود', 'شارع مزدحم', 'شارع جديد'],
        1,
      ),
      fill('Başvuruda bulun___ kişiler bu formu doldurmalıdır. (gelecek ortaç)', 'acak', 'على الأشخاص الذين سيقدّمون تعبئة هذه الاستمارة.', 'ئەو کەسانەی داواکاری دەکەن دەبێت ئەم فۆرمە پڕ بکەنەوە.', {
        options: ['an', 'acak', 'duğu', 'muş'],
      }),
      translate('tr-ar', 'Dün açıklanan karar tartışma yarattı.', [
        'أثار القرار الذي أُعلن أمس جدلاً.',
        'أعلنّا القرار أمس.',
        'سيُعلن القرار غداً.',
        'لم يُعلن القرار.',
      ], 0, { pron: 'DÜN a-çık-la-NAN ka-RAR tar-tış-MA ya-rat-TI' }),
      order(
        b('رتّب: اتصلت بك حالما وصلت إلى البيت.', 'ڕێک بخە: هەرکە گەیشتمە ماڵ پەیوەندیم پێوە کردیت.'),
        'Eve gelir gelmez seni aradım',
        'اتصلت بك حالما وصلت إلى البيت.',
        'هەرکە گەیشتمە ماڵ پەیوەندیم پێوە کردیت.',
        { pron: 'e-VE ge-LİR gel-MEZ se-Nİ a-ra-DIM' },
      ),
    ],
  },
];
