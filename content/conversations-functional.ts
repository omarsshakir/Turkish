import type { Lesson } from '@/types/content';
import { b, listening, mcq, translate } from './shared/helpers';

/**
 * Conversation lessons, second set: the exchanges a student actually has.
 *
 * The existing eight dialogues cover meeting people, the café and a few
 * set-pieces. These cover the conversations that go *wrong* — the ones where a
 * learner needs a script because improvising costs them money, a deposit or a
 * job.
 *
 * Two things every dialogue here does deliberately:
 *
 *   1. **It uses the function words heavily.** `mı`, `değil mi`, `eğer`,
 *      `oysa`, `üstelik`, `yine de`, `en`, `daha` — the words added this phase
 *      appear in natural speech rather than in isolation, which is the only
 *      way a closed-class word is ever really learned.
 *
 *   2. **It shows the register shift.** The same speaker uses `sen` with a
 *      classmate and `siz` with a landlord in the space of two dialogues, and
 *      the notes say why. Turkish politeness is not decoration: getting it
 *      wrong at a counter changes the outcome.
 */
export const FUNCTIONAL_CONVERSATIONS: Lesson[] = [
  /* ================================ A1 ================================ */
  {
    id: 'conv-a1-directions',
    level: 'a1',
    kind: 'conversation',
    order: 60,
    minutes: 12,
    title: 'Yol Sormak',
    titleI18n: b('السؤال عن الطريق', 'پرسیاری ڕێگا'),
    objective: b(
      'أن تسأل عن الطريق وتفهم الجواب — أول موقف يواجهه كل قادم جديد.',
      'ئەوەی پرسیاری ڕێگا بکەیت و وەڵامەکە تێبگەیت.',
    ),
    tags: ['dialogue', 'directions'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Sokakta',
        lines: [
          { speaker: 'Karwan', tr: 'Affedersiniz, bir şey soracaktım.', pron: 'af-fe-der-si-NİZ bir ŞEY so-ra-cak-TIM', ar: 'عذراً، أردت أن أسأل شيئاً.', ku: 'ببوورن، دەمویست شتێک بپرسم.' },
          { speaker: 'Kadın', tr: 'Buyurun, tabii.', pron: 'bu-yu-RUN ta-Bİ-i', ar: 'تفضّل، بالتأكيد.', ku: 'فەرموو، بێگومان.' },
          { speaker: 'Karwan', tr: 'Merkez Eczanesi nerede acaba?', pron: 'mer-KEZ ec-za-ne-Sİ ne-re-DE a-ca-BA', ar: 'أين صيدلية المركز يا ترى؟', ku: 'دەرمانخانەی ناوەند لە کوێیە ئایا؟' },
          { speaker: 'Kadın', tr: 'Şu köşeden sağa dönün.', pron: 'ŞU kö-şe-DEN sa-ĞA dö-NÜN', ar: 'انعطف يميناً من تلك الناصية.', ku: 'لەو گۆشەیەوە بەرەو ڕاست بسووڕێوە.' },
          { speaker: 'Karwan', tr: 'Sağa mı? Peki sonra?', pron: 'sa-ĞA MI pe-Kİ son-RA', ar: 'يميناً؟ وبعد ذلك؟', ku: 'بەرەو ڕاست؟ باشە پاشان؟' },
          { speaker: 'Kadın', tr: 'Sonra düz gidin, solda kalıyor.', pron: 'son-RA DÜZ gi-DİN sol-DA ka-lı-YOR', ar: 'ثم امشِ مستقيماً، ستكون على اليسار.', ku: 'پاشان ڕاست بڕۆ، لای چەپە.' },
          { speaker: 'Karwan', tr: 'Yürüyerek ne kadar sürer?', pron: 'yü-rü-ye-REK NE ka-DAR sü-RER', ar: 'كم تستغرق مشياً؟', ku: 'بە پێ چەند دەخایەنێت؟' },
          { speaker: 'Kadın', tr: 'Beş dakika, en fazla.', pron: 'BEŞ da-ki-KA EN faz-LA', ar: 'خمس دقائق على الأكثر.', ku: 'پێنج خولەک، لانی زۆر.' },
          { speaker: 'Karwan', tr: 'Çok teşekkür ederim, sağ olun.', pron: 'ÇOK te-şek-KÜR e-de-RİM SAĞ o-LUN', ar: 'شكراً جزيلاً، سلمت.', ku: 'زۆر سوپاس، ماندوو نەبن.' },
          { speaker: 'Kadın', tr: 'Rica ederim, kolay gelsin.', pron: 'ri-CA e-de-RİM ko-LAY gel-SİN', ar: 'عفواً، بالتوفيق.', ku: 'شایانی نییە، ئاسان بێت.' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Neden böyle söylendi',
        body: b(
          'ثلاث نقاط: (١) «soracaktım» بصيغة الماضي المستقبلي أهذب من «sormak istiyorum» — التركية تُبعد الطلب زمنياً لتخفّفه، تماماً كالإنجليزية «I was wondering». (٢) «acaba» تحوّل السؤال المباشر إلى تساؤل لطيف. (٣) «kolay gelsin» تُقال لمن يعمل أو يسير في مهمّة، ولا مقابل عربي مباشر لها.',
          'سێ خاڵ: (١) «soracaktım» بەڕێزترە لە «sormak istiyorum». (٢) «acaba» پرسیارەکە نەرم دەکات. (٣) «kolay gelsin» بۆ کەسێک دەوترێت کە کار دەکات.',
        ),
      },
      {
        type: 'text',
        title: 'Kullanılan yapılar',
        body: b(
          'لاحظ أداة الاستفهام «mı» في «Sağa mı?» — سؤال من كلمة واحدة، وهو أشيع أشكال طلب التأكيد في الحوار التركي.',
          'ئامرازی پرسیاری «mı» لە «Sağa mı?» — پرسیارێکی یەک وشەیی.',
        ),
      },
    ],
    exercises: [
      mcq(b('ماذا يعني «kolay gelsin»؟', '«kolay gelsin» چی دەگەیەنێت؟'),
        ['بالتوفيق في عملك', 'تعال بسهولة', 'الطريق سهل'], 0,
        { explain: b('تُقال لمن يعمل أو ينجز مهمّة.', 'بۆ کەسێک کە کار دەکات دەوترێت.') }),
      translate('tr-ar', 'Beş dakika, en fazla.',
        ['خمس دقائق على الأكثر.', 'خمس دقائق على الأقلّ.', 'خمسة شوارع بعد.'], 0),
      listening('Şu köşeden sağa dönün.',
        ['Şu köşeden sağa dönün.', 'Şu köşeden sola dönün.', 'Bu köşede sağa bakın.'], 0),
    ],
  },
  /* ================================ A2 ================================ */
  {
    id: 'conv-a2-shop',
    level: 'a2',
    kind: 'conversation',
    order: 61,
    minutes: 14,
    title: 'Mağazada Beden Sorunu',
    titleI18n: b('مشكلة مقاس في المتجر', 'کێشەی قەبارە لە فرۆشگا'),
    objective: b(
      'أن تطلب مقاساً آخر، وتسأل عن السعر، وتقرّر أن تفكّر — بلا إحراج.',
      'ئەوەی داوای قەبارەیەکی تر بکەیت و نرخ بپرسیت.',
    ),
    tags: ['dialogue', 'shopping'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Giyim mağazasında',
        lines: [
          { speaker: 'Görevli', tr: 'Hoş geldiniz, yardımcı olabilir miyim?', pron: 'HOŞ gel-di-NİZ yar-dım-CI o-la-bi-LİR mi-YİM', ar: 'أهلاً بكم، هل أساعدكم؟', ku: 'بەخێربێن، دەتوانم یارمەتیتان بدەم؟' },
          { speaker: 'Zeynep', tr: 'Bu gömleği deneyebilir miyim?', pron: 'BU göm-le-Ğİ de-ne-ye-bi-LİR mi-YİM', ar: 'هل يمكنني تجربة هذا القميص؟', ku: 'دەتوانم ئەم کراسە تاقی بکەمەوە؟' },
          { speaker: 'Görevli', tr: 'Tabii, kabin şurada.', pron: 'ta-Bİ-i ka-BİN şu-ra-DA', ar: 'بالتأكيد، غرفة القياس هناك.', ku: 'بێگومان، ژووری تاقیکردنەوە لەوێیە.' },
          { speaker: 'Zeynep', tr: 'Biraz dar geldi. Bir büyüğü var mı?', pron: 'bi-RAZ DAR gel-Dİ bir bü-yü-ĞÜ VAR mı', ar: 'جاء ضيّقاً قليلاً. هل يوجد مقاس أكبر؟', ku: 'کەمێک تەنگ بوو. یەکی گەورەتر هەیە؟' },
          { speaker: 'Görevli', tr: 'Bir bakayım… Evet, large var.', pron: 'bir ba-ka-YIM e-VET LARC var', ar: 'دعيني أنظر… نعم، يوجد لارج.', ku: 'با سەیر بکەم… بەڵێ، لارج هەیە.' },
          { speaker: 'Zeynep', tr: 'Bu daha iyi oldu. Fiyatı ne kadar?', pron: 'BU da-HA i-Yİ ol-DU fi-ya-TI NE ka-DAR', ar: 'هذا صار أفضل. كم سعره؟', ku: 'ئەمە باشتر بوو. نرخی چەندە؟' },
          { speaker: 'Görevli', tr: 'Dört yüz elli lira, indirimli.', pron: 'DÖRT YÜZ el-Lİ li-RA in-di-rim-Lİ', ar: 'أربعمئة وخمسون ليرة، بالتخفيض.', ku: 'چوار سەد و پەنجا لیرە، بە داشکاندن.' },
          { speaker: 'Zeynep', tr: 'Biraz pahalı, değil mi?', pron: 'bi-RAZ pa-ha-LI de-ĞİL mi', ar: 'غالٍ قليلاً، أليس كذلك؟', ku: 'کەمێک گرانە، وانییە؟' },
          { speaker: 'Görevli', tr: 'Kumaşı çok iyi. Yine de düşünebilirsiniz.', pron: 'ku-ma-ŞI ÇOK i-Yİ Yİ-ne DE dü-şü-ne-bi-lir-si-NİZ', ar: 'قماشه جيد جداً. ومع ذلك يمكنكِ التفكير.', ku: 'قوماشەکەی زۆر باشە. لەگەڵ ئەوەشدا دەتوانیت بیر بکەیتەوە.' },
          { speaker: 'Zeynep', tr: 'Bir düşüneyim, teşekkürler.', pron: 'bir dü-şü-ne-YİM te-şek-kür-LER', ar: 'دعيني أفكّر، شكراً.', ku: 'با بیر بکەمەوە، سوپاس.' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Kibarca hayır demek',
        body: b(
          '⚠️ «Bir düşüneyim» هي الطريقة التركية القياسية للرفض المهذّب في المتجر: لا يقول أحد «hayır, almayacağım». تعلّمها كوحدة — ستستعملها كثيراً. ولاحظ «değil mi?» لطلب الموافقة، و«yine de» بمعنى «ومع ذلك».',
          '⚠️ «Bir düşüneyim» شێوەی ستانداردی ڕەتکردنەوەی بەڕێزانەیە لە فرۆشگادا.',
        ),
      },
    ],
    exercises: [
      mcq(b('ماذا تقصد زينب بـ «Bir düşüneyim»؟', 'مەبەستی زەینەب لە «Bir düşüneyim» چییە؟'),
        ['رفض مهذّب', 'ستشتريه غداً', 'لم تفهم السعر'], 0,
        { explain: b('صيغة رفض لطيفة وشائعة جداً.', 'شێوەی ڕەتکردنەوەی بەڕێزانەیە.') }),
      translate('tr-ar', 'Bir büyüğü var mı?',
        ['هل يوجد مقاس أكبر؟', 'هل يوجد لون آخر؟', 'هل هو أغلى؟'], 0),
    ],
  },
  /* ================================ B1 ================================ */
  {
    id: 'conv-b1-landlord',
    level: 'b1',
    kind: 'conversation',
    order: 62,
    minutes: 16,
    title: 'Ev Sahibiyle Sorun',
    titleI18n: b('مشكلة مع صاحب البيت', 'کێشە لەگەڵ خاوەن خانوو'),
    objective: b(
      'أن تبلّغ عن عطل وتطالب بإصلاحه بلغة حازمة ومهذّبة في آن.',
      'ئەوەی خراپبوونێک ڕابگەیەنیت و داوای چاککردنەوەی بکەیت.',
    ),
    tags: ['dialogue', 'housing'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Telefonda',
        lines: [
          { speaker: 'Karwan', tr: 'İyi günler, ben üst kattaki kiracınız.', pron: 'i-Yİ gün-LER BEN ÜST kat-ta-Kİ ki-ra-cı-NIZ', ar: 'طاب يومكم، أنا المستأجر في الطابق العلوي.', ku: 'ڕۆژباش، من کرێچی نهۆمی سەرەوەم.' },
          { speaker: 'Ev sahibi', tr: 'Merhaba, buyurun. Bir sorun mu var?', pron: 'mer-ha-BA bu-yu-RUN bir so-RUN MU var', ar: 'مرحباً، تفضّل. هل هناك مشكلة؟', ku: 'سڵاو، فەرموو. کێشەیەک هەیە؟' },
          { speaker: 'Karwan', tr: 'Maalesef var. Banyoda su akıtıyor.', pron: 'ma-a-le-SEF var ban-yo-DA SU a-kı-tı-YOR', ar: 'للأسف نعم. الماء يتسرّب في الحمّام.', ku: 'بەداخەوە هەیە. لە حەمامەکەدا ئاو دەڕژێت.' },
          { speaker: 'Ev sahibi', tr: 'Ne zamandır böyle?', pron: 'NE za-man-DIR böy-LE', ar: 'منذ متى وهو هكذا؟', ku: 'لە کەیەوە وایە؟' },
          { speaker: 'Karwan', tr: 'Üç gündür. Dün daha da kötüleşti.', pron: 'ÜÇ gün-DÜR DÜN da-HA DA kö-tü-leş-Tİ', ar: 'منذ ثلاثة أيام. وأمس ازداد سوءاً.', ku: 'سێ ڕۆژە. دوێنێ خراپتریش بوو.' },
          { speaker: 'Ev sahibi', tr: 'Anladım. Tesisatçıya haber vereyim.', pron: 'an-la-DIM te-si-sat-çı-YA ha-BER ve-re-YİM', ar: 'فهمت. سأخبر السبّاك.', ku: 'تێگەیشتم. بە بۆریچی ڕادەگەیەنم.' },
          { speaker: 'Karwan', tr: 'Ne zaman gelebilir acaba?', pron: 'NE za-MAN ge-le-bi-LİR a-ca-BA', ar: 'متى يمكنه المجيء يا ترى؟', ku: 'کەی دەتوانێت بێت ئایا؟' },
          { speaker: 'Ev sahibi', tr: 'Yarın öğleden sonra uygun mu?', pron: 'ya-RIN öğ-le-DEN son-RA uy-GUN mu', ar: 'هل يناسبك غداً بعد الظهر؟', ku: 'سبەینێ دوای نیوەڕۆ گونجاوە؟' },
          { speaker: 'Karwan', tr: 'Uygun. Ama daha fazla gecikirse duvar zarar görecek.', pron: 'uy-GUN a-MA da-HA faz-LA ge-ci-kir-SE du-VAR za-RAR gö-re-CEK', ar: 'مناسب. لكن إن تأخّر أكثر سيتضرّر الجدار.', ku: 'گونجاوە. بەڵام ئەگەر زیاتر دوابکەوێت دیوارەکە زیانی بەردەکەوێت.' },
          { speaker: 'Ev sahibi', tr: 'Haklısınız, hallederiz. Kusura bakmayın.', pron: 'hak-lı-sı-NIZ hal-le-de-RİZ ku-su-RA bak-ma-YIN', ar: 'أنتم محقّون، سنحلّها. المعذرة.', ku: 'ڕاست دەکەن، چارەسەری دەکەین. ببوورن.' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Register: siz, her zaman',
        body: b(
          '⚠️ لاحظ أن الطرفين يستعملان «siz» طوال المكالمة رغم أنهما يعرفان بعضهما. مع صاحب البيت والموظّف والجار الأكبر سنّاً تبقى «siz» — التحوّل إلى «sen» يُقرأ استخفافاً. ولاحظ الشرط «gecikirse» في جملة كاروان: صيغة ضغط مهذّبة تذكر العاقبة بلا تهديد.',
          '⚠️ هەردوو لایەن «siz» بەکاردەهێنن. لەگەڵ خاوەن خانوودا «siz» دەمێنێتەوە.',
        ),
      },
    ],
    exercises: [
      mcq(b('لماذا استعمل كاروان «gecikirse»؟', 'بۆچی کاروان «gecikirse»ی بەکارهێنا؟'),
        ['ليذكر العاقبة بلطف', 'ليعتذر', 'ليسأل عن الوقت'], 0,
        { explain: b('الشرط يضغط دون تهديد مباشر.', 'مەرج فشار دەخاتە سەر بەبێ هەڕەشە.') }),
      translate('tr-ar', 'Üç gündür böyle.',
        ['منذ ثلاثة أيام وهو هكذا.', 'سيستمرّ ثلاثة أيام.', 'قبل ثلاثة أيام انتهى.'], 0),
      listening('Tesisatçıya haber vereyim.',
        ['Tesisatçıya haber vereyim.', 'Tesisatçıdan haber alayım.', 'Tesisatçıyı bekleyelim.'], 0),
    ],
  },
  /* ================================ B2 ================================ */
  {
    id: 'conv-b2-interview-hr',
    level: 'b2',
    kind: 'conversation',
    order: 63,
    minutes: 18,
    title: 'İş Görüşmesi',
    titleI18n: b('مقابلة عمل', 'چاوپێکەوتنی کار'),
    objective: b(
      'أن تعرض خبرتك، وتبرّر انتقالك، وتسأل أسئلتك — بلغة رسمية دون تكلّف.',
      'ئەوەی شارەزاییت بخەیتەڕوو و پرسیارەکانت بکەیت.',
    ),
    tags: ['dialogue', 'work'],
    blocks: [
      {
        type: 'dialogue',
        title: 'İnsan kaynaklarında',
        lines: [
          { speaker: 'İK', tr: 'Buyurun, kendinizden biraz bahseder misiniz?', pron: 'bu-yu-RUN ken-di-niz-DEN bi-RAZ bah-se-DER mi-si-NİZ', ar: 'تفضّل، هل تحدّثنا قليلاً عن نفسك؟', ku: 'فەرموو، کەمێک باسی خۆت دەکەیت؟' },
          { speaker: 'Aday', tr: 'Tabii. Beş yıldır yazılım alanında çalışıyorum.', pron: 'ta-Bİ-i BEŞ yıl-DIR ya-zı-LIM a-la-nın-DA ça-lı-şı-yo-RUM', ar: 'بالتأكيد. أعمل في مجال البرمجيات منذ خمس سنوات.', ku: 'بێگومان. پێنج ساڵە لە بواری نەرمەکاڵادا کار دەکەم.' },
          { speaker: 'İK', tr: 'Şu anki işinizden neden ayrılmak istiyorsunuz?', pron: 'ŞU an-Kİ i-şi-niz-DEN NE-den ay-rıl-MAK is-ti-yor-su-NUZ', ar: 'لماذا تريد ترك عملك الحالي؟', ku: 'بۆچی دەتەوێت کارە ئێستاکەت جێبهێڵیت؟' },
          { speaker: 'Aday', tr: 'Orada çok şey öğrendim, ancak artık gelişme alanı kalmadı.', pron: 'o-ra-DA ÇOK ŞEY öğ-ren-DİM an-CAK ar-TIK ge-liş-ME a-la-NI kal-ma-DI', ar: 'تعلّمت الكثير هناك، لكن لم يعد هناك مجال للتطوّر.', ku: 'لەوێ زۆر شتم فێربوو، بەڵام چیتر بواری گەشەکردن نەماوە.' },
          { speaker: 'İK', tr: 'Ekip çalışmasına yatkın mısınız?', pron: 'e-KİP ça-lış-ma-sı-NA yat-KIN mı-sı-NIZ', ar: 'هل أنت ميّال للعمل الجماعي؟', ku: 'ئامادەی کاری تیمیت؟' },
          { speaker: 'Aday', tr: 'Evet, son projemi altı kişilik bir ekiple yürüttüm.', pron: 'e-VET SON pro-je-Mİ al-TI ki-şi-LİK bir e-kip-LE yü-rüt-TÜM', ar: 'نعم، أدرت مشروعي الأخير مع فريق من ستة أشخاص.', ku: 'بەڵێ، دوایین پڕۆژەم بە تیمێکی شەش کەسی بەڕێوەبرد.' },
          { speaker: 'İK', tr: 'Zorlandığınız bir durum oldu mu?', pron: 'zor-lan-dı-ğı-NIZ bir du-RUM ol-DU mu', ar: 'هل مررت بموقف صعب؟', ku: 'دۆخێکی سەختت بەسەرهات؟' },
          { speaker: 'Aday', tr: 'Oldu. Teslim tarihi öne alındı, üstelik bir kişi ayrıldı.', pron: 'ol-DU tes-LİM ta-ri-Hİ ö-NE a-lın-DI ÜS-te-lik bir ki-Şİ ay-rıl-DI', ar: 'حدث. قُدّم موعد التسليم، وفوق ذلك غادر شخص.', ku: 'بوو. بەرواری ڕادەستکردن پێشخرا، سەرەڕای ئەوەش کەسێک ڕۆیشت.' },
          { speaker: 'İK', tr: 'Nasıl çözdünüz?', pron: 'na-SIL çöz-dü-NÜZ', ar: 'كيف حللتموها؟', ku: 'چۆن چارەسەرتان کرد؟' },
          { speaker: 'Aday', tr: 'Kapsamı yeniden önceliklendirdik ve zamanında teslim ettik.', pron: 'kap-sa-MI ye-ni-DEN ön-ce-lik-len-dir-DİK ve za-ma-nın-DA tes-LİM et-TİK', ar: 'أعدنا ترتيب أولويات النطاق وسلّمنا في الوقت.', ku: 'دووبارە پێشینەی بەرفراوانییەکەمان دیاری کردەوە و لە کاتی خۆیدا ڕادەستمان کرد.' },
          { speaker: 'İK', tr: 'Sizin bize bir sorunuz var mı?', pron: 'si-ZİN bi-ZE bir so-ru-NUZ VAR mı', ar: 'هل لديك سؤال لنا؟', ku: 'پرسیارێکت بۆ ئێمە هەیە؟' },
          { speaker: 'Aday', tr: 'Var. Ekibin şu anki önceliği nedir?', pron: 'var e-ki-BİN ŞU an-Kİ ön-ce-li-Ğİ ne-DİR', ar: 'نعم. ما أولوية الفريق حالياً؟', ku: 'هەیە. پێشینەی ئێستای تیمەکە چییە؟' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Neden ayrıldığınızı nasıl anlatmalı',
        body: b(
          '⚠️ لاحظ كيف برّر المرشّح انتقاله: بدأ بالإيجاب («çok şey öğrendim») ثم قيّده بـ «ancak». هذا هو القالب التركي القياسي في المقابلات — الشكوى المباشرة من صاحب العمل السابق تُقرأ سلبياً. ولاحظ «üstelik» وهي تُصعّد الصعوبة بلا تذمّر.',
          '⚠️ سەرەتا بە ئەرێنی دەستپێدەکات پاشان بە «ancak» سنووردار دەکرێت.',
        ),
      },
    ],
    exercises: [
      mcq(b('لماذا بدأ المرشّح بـ «çok şey öğrendim»؟', 'بۆچی بە «çok şey öğrendim» دەستی پێکرد؟'),
        ['ليتجنّب انتقاد صاحب العمل السابق', 'ليطلب راتباً أعلى', 'ليغيّر الموضوع'], 0,
        { explain: b('الشكوى المباشرة تُقرأ سلبياً في المقابلة التركية.', 'گلەیی ڕاستەوخۆ نەرێنی وەردەگیرێت.') }),
      translate('tr-ar', 'Zorlandığınız bir durum oldu mu?',
        ['هل مررت بموقف صعب؟', 'هل أجبرت أحداً؟', 'هل كان العمل ممتعاً؟'], 0),
    ],
  },
  /* ================================ C1 ================================ */
  {
    id: 'conv-c1-meeting',
    level: 'c1',
    kind: 'conversation',
    order: 64,
    minutes: 20,
    title: 'Toplantıda Anlaşmazlık',
    titleI18n: b('خلاف في اجتماع', 'ناکۆکی لە کۆبوونەوەدا'),
    objective: b(
      'أن تعترض على مقترح زميل وتقترح بديلاً دون أن تُقرأ عدائياً.',
      'ئەوەی ناڕەزایی لە پێشنیارێک دەربڕیت و جێگرەوەیەک پێشنیار بکەیت.',
    ),
    tags: ['dialogue', 'work', 'argument'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Proje toplantısı',
        lines: [
          { speaker: 'Elif', tr: 'Bütçeyi yüzde on kısmayı öneriyorum.', pron: 'büt-çe-Yİ yüz-DE ON kıs-ma-YI ö-ne-ri-yo-RUM', ar: 'أقترح خفض الميزانية عشرة بالمئة.', ku: 'پێشنیاری کەمکردنەوەی بودجە بە دە لە سەد دەکەم.' },
          { speaker: 'Murat', tr: 'Gerekçenizi anlıyorum, ancak bir çekincem var.', pron: 'ge-rek-çe-ni-Zİ an-lı-yo-RUM an-CAK bir çe-kin-CEM var', ar: 'أفهم مبرّركم، لكن لديّ تحفّظ.', ku: 'لە هۆکارەکەت تێدەگەم، بەڵام مەرجێکم هەیە.' },
          { speaker: 'Elif', tr: 'Buyurun, dinliyorum.', pron: 'bu-yu-RUN din-li-yo-RUM', ar: 'تفضّل، أستمع.', ku: 'فەرموو، گوێ دەگرم.' },
          { speaker: 'Murat', tr: 'Kısıntı test aşamasına yansırsa kalite düşer.', pron: 'kı-sın-TI TEST a-şa-ma-sı-NA yan-sır-SA ka-li-TE dü-ŞER', ar: 'إن انعكس الخفض على مرحلة الاختبار ستنخفض الجودة.', ku: 'ئەگەر کەمکردنەوەکە کاریگەری لەسەر قۆناغی تاقیکردنەوە بێت کوالیتی دادەبەزێت.' },
          { speaker: 'Elif', tr: 'Oysa veriler test süresinin uzun olduğunu gösteriyor.', pron: 'OY-sa ve-ri-LER TEST sü-re-si-NİN u-ZUN ol-du-ğu-NU gös-te-ri-YOR', ar: 'بينما تُظهر البيانات أن مدّة الاختبار طويلة.', ku: 'بەڵام داتاکان نیشان دەدەن ماوەی تاقیکردنەوە درێژە.' },
          { speaker: 'Murat', tr: 'Kısmen katılıyorum. Uzun, fakat gereksiz değil.', pron: 'kıs-MEN ka-tı-lı-yo-RUM u-ZUN fa-KAT ge-rek-SİZ de-ĞİL', ar: 'أتّفق جزئياً. طويلة، لكنها ليست غير ضرورية.', ku: 'بەشێک ڕازیم. درێژە، بەڵام بێ پێویست نییە.' },
          { speaker: 'Elif', tr: 'Peki alternatif öneriniz nedir?', pron: 'pe-Kİ al-ter-na-TİF ö-ne-ri-NİZ ne-DİR', ar: 'حسناً، ما اقتراحكم البديل؟', ku: 'باشە، پێشنیاری جێگرەوەتان چییە؟' },
          { speaker: 'Murat', tr: 'Kısıntıyı tanıtım kaleminden yapalım.', pron: 'kı-sın-tı-YI ta-nı-TIM ka-le-min-DEN ya-pa-LIM', ar: 'لنجعل الخفض من بند التسويق.', ku: 'کەمکردنەوەکە لە بڕگەی ناساندنەوە بکەین.' },
          { speaker: 'Elif', tr: 'Bu bağlamda makul görünüyor.', pron: 'BU bağ-lam-DA ma-KUL gö-rü-nü-YOR', ar: 'يبدو معقولاً في هذا السياق.', ku: 'لەم چوارچێوەیەدا لۆژیکی دیارە.' },
          { speaker: 'Murat', tr: 'Rakamları çıkarıp yarın sunayım mı?', pron: 'ra-kam-la-RI çı-ka-RIP ya-RIN su-na-YIM mı', ar: 'أستخرج الأرقام وأعرضها غداً؟', ku: 'ژمارەکان دەربهێنم و سبەینێ پێشکەشی بکەم؟' },
          { speaker: 'Elif', tr: 'Lütfen. O zaman kararı yarın veririz.', pron: 'lüt-FEN O za-MAN ka-ra-RI ya-RIN ve-ri-RİZ', ar: 'من فضلك. عندها نتّخذ القرار غداً.', ku: 'تکایە. ئەوکات سبەینێ بڕیار دەدەین.' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Anlaşmazlığın grameri',
        body: b(
          'تتبّع البنية: مراد يقرّ («anlıyorum») ثم يقيّد («ancak») ثم يشترط («yansırsa»). إليف تعارض بـ «oysa» لا بالنفي المباشر. ثم «kısmen katılıyorum» تنزع فتيل الخلاف قبل الاعتراض الثاني. لا جملة واحدة تبدأ بـ «hayır» — وهذا مقصود: النقاش المهني التركي يبني الاعتراض ولا يعلنه.',
          'پێکهاتەکە: دانپێدانان، «ancak»، پاشان مەرج. هیچ ڕستەیەک بە «hayır» دەست پێناکات.',
        ),
      },
    ],
    exercises: [
      mcq(b('ما وظيفة «oysa» في كلام إليف؟', 'ئەرکی «oysa» چییە؟'),
        ['تعارض بلطف بذكر معطى مقابل', 'توافق', 'تغيّر الموضوع'], 0,
        { explain: b('تقدّم معطى مضادّاً دون نفي مباشر.', 'داتایەکی دژ دەخاتەڕوو بەبێ ڕەتکردنەوەی ڕاستەوخۆ.') }),
      translate('tr-ar', 'Kısmen katılıyorum.',
        ['أتّفق جزئياً.', 'أشارك قليلاً.', 'لا أوافق إطلاقاً.'], 0),
      listening('Bu bağlamda makul görünüyor.',
        ['Bu bağlamda makul görünüyor.', 'Bu bağlamda makul değil.', 'Bu konuda makul olabilir.'], 0),
    ],
  },
];
