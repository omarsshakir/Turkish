import type { Lesson } from '@/types/content';
import { b, fill, listening, match, mcq, order, p, speak, translate } from '../shared/helpers';

/**
 * B2 grammar - the machinery that turns short sentences into real Turkish:
 * causatives, participles, verbal nouns, converbs, reported speech and the
 * evidential past. This is where a learner starts to sound Turkish rather
 * than translated.
 */
export const B2_GRAMMAR: Lesson[] = [
  {
    id: 'b2-evidential',
    level: 'b2',
    kind: 'grammar',
    order: 1,
    minutes: 28,
    title: 'Öğrenilen Geçmiş Zaman: -miş',
    titleI18n: b('الماضي المنقول (غير المُعايَن)', 'ڕابردووی بیستراو'),
    objective: b(
      'أن تنقل خبراً لم تشهده بنفسك، وأن تفهم لماذا يبدو -miş ساخراً أحياناً.',
      'ئەوەی هەواڵێک بگوازیتەوە کە خۆت نەتبینیوە، و تێبگەیت بۆچی هەندێک جار -miş گاڵتەجاڕانە دەردەکەوێت.',
    ),
    prerequisites: ['a2-past-simple'],
    tags: ['tense', 'evidentiality', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Türkçenin gizli süper gücü',
        body: b(
          'التركية تُلزمك نحوياً بأن تكشف مصدر معلومتك — وهذا ما لا تفعله العربية ولا الكردية. إذا رأيت الحدث بعينك تستخدم ‎-di‎، وإذا سمعته من غيرك أو استنتجته تستخدم ‎-miş‎. "Ali geldi" = رأيت عليّاً يأتي. "Ali gelmiş" = بلغني أن عليّاً جاء / يبدو أنه جاء. هذا ليس زمناً مختلفاً بل موقفاً معرفياً مختلفاً.',
          'تورکی بە شێوەی ڕێزمانی ناچارت دەکات سەرچاوەی زانیارییەکەت ئاشکرا بکەیت — ئەمە کوردی ناکات. ئەگەر بە چاوی خۆت ڕووداوەکەت بینی ‎-di‎ بەکاردەهێنیت، ئەگەر لە کەسێکی ترەوە بیستت یان دەرت هێنا ‎-miş‎ بەکاردەهێنیت. "Ali geldi" = عەلیم بینی کە هات. "Ali gelmiş" = پێم گەیشت کە عەلی هاتووە.',
        ),
      },
      {
        type: 'table',
        title: '-di / -miş karşılaştırması',
        headers: ['Cümle', 'Bilgi kaynağı', 'Anlam'],
        rows: [
          ['Ali geldi.', 'Gördüm / kesin biliyorum', 'جاء علي (رأيته) / عەلی هات (بینیم)'],
          ['Ali gelmiş.', 'Duydum / çıkarım yaptım', 'يبدو أن علياً جاء / وا دیارە عەلی هاتووە'],
          ['Yağmur yağdı.', 'Yağarken gördüm', 'أمطرت (رأيتها) / باران باری (بینیم)'],
          ['Yağmur yağmış.', 'Sabah yerler ıslaktı', 'يبدو أنها أمطرت (الأرض مبلّلة) / وا دیارە باران باریوە'],
          ['Çok güzeldi.', 'Ben oradaydım', 'كان جميلاً (كنت هناك) / زۆر جوان بوو'],
          ['Çok güzelmiş.', 'Bana öyle söylediler', 'يقولون إنه كان جميلاً / دەڵێن زۆر جوان بووە'],
        ],
      },
      {
        type: 'conjugation',
        title: 'gelmek — öğrenilen geçmiş',
        verb: 'gelmiş',
        rows: [
          { person: 'ben', tr: 'gelmişim', pron: 'gel-mi-ŞİM', ar: 'يبدو أنني جئت', ku: 'وا دیارە هاتووم' },
          { person: 'sen', tr: 'gelmişsin', pron: 'gel-miş-SİN', ar: 'يبدو أنك جئت', ku: 'وا دیارە هاتوویت' },
          { person: 'o', tr: 'gelmiş', pron: 'gel-MİŞ', ar: 'يبدو أنه جاء', ku: 'وا دیارە هاتووە' },
          { person: 'biz', tr: 'gelmişiz', pron: 'gel-mi-ŞİZ', ar: 'يبدو أننا جئنا', ku: 'وا دیارە هاتووین' },
          { person: 'siz', tr: 'gelmişsiniz', pron: 'gel-miş-si-NİZ', ar: 'يبدو أنكم جئتم', ku: 'وا دیارە هاتوون' },
          { person: 'onlar', tr: 'gelmişler', pron: 'gel-miş-LER', ar: 'يبدو أنهم جاؤوا', ku: 'وا دیارە هاتوون' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Neden masallar hep -miş ile başlar?',
        body: b(
          'كل الحكايات الشعبية التركية تُروى بـ ‎-miş‎، لأن الراوي لم يشهد الأحداث: "Bir varmış, bir yokmuş..." (كان يا ما كان). وكذلك الأخبار المنقولة والنميمة. ولهذا السبب نفسه تحمل ‎-miş‎ أحياناً نبرة ساخرة أو متشكّكة: "Çok çalışıyormuş!" = "يقولون إنه يعمل كثيراً!" بنبرة عدم تصديق.',
          'هەموو چیرۆکە گەلییە تورکییەکان بە ‎-miş‎ دەگێڕدرێنەوە، چونکە گێڕەرەوەکە ڕووداوەکانی نەبینیوە: "Bir varmış, bir yokmuş..." (هەبوو نەبوو). بۆ هەمان هۆکار هەندێک جار ‎-miş‎ ئاوازێکی گاڵتەجاڕانە یان گومانی هەڵدەگرێت.',
        ),
      },
      {
        type: 'examples',
        title: 'Duyum, çıkarım, sürpriz',
        items: [
          p('Duydum ki evlenmiş.', 'du-y-DUM Kİ ev-len-MİŞ', 'سمعت أنه تزوّج.', 'بیستم کە هاوسەرگیری کردووە.'),
          p('Yerler ıslak, gece yağmur yağmış.', 'yer-LER ıs-LAK ge-DJE YAA-mur ya-MIŞ', 'الأرض مبلّلة، يبدو أنها أمطرت ليلاً.', 'زەوی شێیە، وا دیارە شەو باران باریوە.'),
          p('Meğer beni beklemiş!', 'me-ĞER be-Nİ bek-le-MİŞ', 'تبيّن أنه كان ينتظرني!', 'دەرکەوت کە چاوەڕێی منی کردووە!'),
          p('Bir varmış bir yokmuş, evvel zaman içinde...', 'bir var-MIŞ bir yok-MUŞ ev-VEL za-MAN i-çin-DE', 'كان يا ما كان، في قديم الزمان...', 'هەبوو نەبوو، لە زەمانی زوودا...'),
          p('Uyuyakalmışım, alarmı duymamışım.', 'u-yu-ya-kal-mı-ŞIM a-lar-MI duy-ma-mı-ŞIM', 'يبدو أنني غفوت ولم أسمع المنبّه.', 'وا دیارە خەوم لێکەوتووە و گوێم لە زەنگەکە نەبووە.'),
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'İsim cümlelerinde: -mış / -ymış',
        body: b(
          'يمكن إلحاق ‎-mış‎ بالأسماء أيضاً لنقل خبر: O çok zenginmiş (يقولون إنه غني جداً). Hastaymış (يبدو أنه مريض). Öğretmenmiş (سمعت أنه معلّم). لاحظ حرف الوصل y بعد الحركة.',
          'دەکرێت ‎-mış‎ بە ناویشەوە بلکێت بۆ گواستنەوەی هەواڵ: O çok zenginmiş. Hastaymış. Öğretmenmiş. سەرنج بدە پیتی بەستەری y دوای بزوێن.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('رأيتَ المطر بعينك. أي جملة تستخدم؟', 'بارانت بە چاوی خۆت بینی. کام ڕستە بەکاردەهێنیت؟'),
        ['Yağmur yağmış.', 'Yağmur yağdı.', 'Yağmur yağıyormuş.', 'Yağmur yağarmış.'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('استيقظت فوجدت الأرض مبلّلة. أي جملة تستخدم؟', 'خەبەریت بووەوە بینیت زەوی شێیە. کام ڕستە بەکاردەهێنیت؟'),
        ['Yağmur yağdı.', 'Yağmur yağmış.', 'Yağmur yağacak.', 'Yağmur yağar.'],
        1,
        { turkishOptions: true, explain: b('استنتاج من أثر، لا مشاهدة ⟵ ‎-miş‎.', 'دەرهێنان لە شوێنەوارەوە، نەک بینین ⟵ ‎-miş‎.') },
      ),
      fill('Duydum ki Ali İstanbul’a taşın___.', 'mış', 'سمعت أن علياً انتقل إلى إسطنبول.', 'بیستم کە عەلی گواستراوەتەوە بۆ ئەستەنبوڵ.', {
        options: ['dı', 'mış', 'yor', 'acak'],
      }),
      translate('tr-ar', 'Meğer bizi bekliyormuş.', [
        'تبيّن أنه كان ينتظرنا.',
        'كان ينتظرنا وقد رأيته.',
        'سينتظرنا.',
        'لم ينتظرنا.',
      ], 0, { pron: 'me-ĞER bi-Zİ bek-li-YOR-muş' }),
      listening('Çok güzelmiş.', ['كان جميلاً (رأيته بنفسي).', 'يقولون إنه كان جميلاً.', 'سيكون جميلاً.'], 1, 'ar',
        p('Çok güzelmiş.', 'ÇOK gü-zel-MİŞ', 'يقولون إنه كان جميلاً.', 'دەڵێن زۆر جوان بووە.')),
      speak('Bir varmış bir yokmuş, evvel zaman içinde bir padişah yaşarmış.', 'bir var-MIŞ bir yok-MUŞ ev-VEL za-MAN i-çin-DE bir pa-di-ŞAH ya-şar-MIŞ', 'كان يا ما كان، في قديم الزمان عاش سلطان.', 'هەبوو نەبوو، لە زەمانی زوودا پاشایەک ژیاوە.'),
    ],
  },

  {
    id: 'b2-causative',
    level: 'b2',
    kind: 'grammar',
    order: 2,
    minutes: 30,
    title: 'Ettirgen Çatı',
    titleI18n: b('صيغة التعدية (جعل الغير يفعل)', 'ڕەنگی هۆکاری'),
    objective: b(
      'أن تحوّل الفعل من "أفعل" إلى "أجعل غيري يفعل": يقرأ ⟵ يُقرِئ، يأكل ⟵ يُطعِم.',
      'ئەوەی کار بگۆڕیت لە "دەیکەم" بۆ "وا لە کەسێکی تر دەکەم بیکات": دەخوێنێتەوە ⟵ دەیخوێنێتەوە بۆی.',
    ),
    prerequisites: ['b1-passive'],
    tags: ['voice', 'verb'],
    blocks: [
      {
        type: 'text',
        title: 'Bir ek, koca bir anlam',
        body: b(
          'العربية تعبّر عن التعدية بتضعيف العين أو بالهمزة (علِم ⟵ علَّم، أكل ⟵ أطعم). التركية تفعل الشيء نفسه بلاحقة واحدة. yapmak (يفعل) ⟵ yaptırmak (يجعل غيره يفعل). يمكن حتى تكرارها: yaptırtmak (يجعل شخصاً يجعل شخصاً آخر يفعل!).',
          'کوردی جاری وا هەیە هۆکاری بە کاری یاریدەدەر دەردەبڕێت. تورکی هەمان شت بە یەک پاشگر دەکات. yapmak (دەیکات) ⟵ yaptırmak (وا لە کەسێکی تر دەکات بیکات). تەنانەت دەکرێت دووبارە بکرێتەوە: yaptırtmak.',
        ),
      },
      {
        type: 'table',
        title: 'Hangi ek ne zaman?',
        headers: ['Kural', 'Ek', 'Örnek', 'Ettirgen'],
        rows: [
          ['Çok heceli, ünlü / -l / -r ile biten', '-t-', 'okumak, temizlemek, oturmak', 'okutmak, temizletmek, oturtmak'],
          ['Diğer çoğu fiil', '-dir- / -tir-', 'yapmak, yazmak, gülmek, öl-', 'yaptırmak, yazdırmak, güldürmek, öldürmek'],
          ['Bazı tek heceliler', '-ir- / -it-', 'içmek, düşmek, bitmek, korkmak', 'içirmek, düşürmek, bitirmek, korkutmak'],
          ['Düzensiz (ezberle)', '—', 'yemek, gitmek', 'yedirmek, gidermek'],
        ],
      },
      {
        type: 'examples',
        title: 'Anlam değişimi',
        items: [
          p('Çocuk yemek yedi. → Anne çocuğa yemek yedirdi.', 'ço-DJUK ye-MEK ye-Dİ → an-NE ço-dju-A ye-MEK ye-dir-Dİ', 'أكل الطفل. ← أطعمت الأم الطفل.', 'منداڵەکە نانی خوارد. ← دایک نانی دا بە منداڵەکە.'),
          p('Saçımı kestim. → Saçımı kestirdim.', 'sa-çı-MI kes-TİM → sa-çı-MI kes-tir-DİM', 'قصصت شعري بنفسي. ← قصصت شعري (عند الحلّاق).', 'قژی خۆمم بڕی. ← قژم بڕیمەوە (لای سەرتاش).'),
          p('Elbisemi yıkadım. → Elbisemi yıkattım.', 'el-bi-se-Mİ yı-ka-DIM → el-bi-se-Mİ yı-kat-TIM', 'غسلت فستاني. ← أرسلته للغسيل.', 'کراسەکەمم شۆرد. ← کراسەکەمم دا بشۆردرێت.'),
          p('Beni çok güldürdün.', 'be-Nİ ÇOK gül-dür-DÜN', 'أضحكتني كثيراً.', 'زۆرت پێکەنیم.'),
          p('Öğretmen öğrencilere kitap okuttu.', 'öö-ret-MEN öö-ren-dji-le-RE ki-TAP o-kut-TU', 'جعل المعلّم الطلاب يقرؤون كتاباً.', 'مامۆستا وای لە قوتابییەکان کرد کتێب بخوێننەوە.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Günlük hayatta çok kullanılır',
        body: b(
          'التركية تستخدم التعدية أكثر بكثير مما تتوقّع. حين تقول "قصصت شعري" بالعربية يفهم السامع أنك ذهبت للحلاق. أما التركية فتُلزمك بالدقّة: kestim (قصصته بيدي) مقابل kestirdim (جعلت الحلاق يقصّه). وكذلك: ev yaptırdım (بنيت بيتاً — أي وظّفت من يبنيه)، diş çektirdim (خلعت سنّي عند الطبيب).',
          'تورکی زۆر زیاتر لەوەی بیر بکەیتەوە هۆکاری بەکاردەهێنێت. کاتێک دەڵێیت "قژم بڕی" بە کوردی، بیسەر تێدەگات کە چوویتە لای سەرتاش. بەڵام تورکی ناچارت دەکات وردبیت: kestim (بە دەستی خۆم) بەرامبەر kestirdim (سەرتاشەکە بڕی).',
        ),
      },
      {
        type: 'text',
        title: 'Kime? Hâl ekleri değişir',
        body: b(
          'عند التعدية يظهر فاعل ثانٍ. إذا كان الفعل الأصلي لازماً يأخذ الفاعل الجديد حالة المفعولية: Çocuk uyudu ⟵ Anne çocuğu uyuttu. وإذا كان الفعل متعدّياً أصلاً يأخذ حالة الاتجاه: Çocuk yemek yedi ⟵ Anne çocuğa yemek yedirdi. هذه من أدقّ نقاط التركية.',
          'لە هۆکاریدا کرداری دووەم دەردەکەوێت. ئەگەر کارە بنەڕەتییەکە نەگوێزەرەوە بێت، کرداری نوێ حاڵەتی بەرکار وەردەگرێت: Anne çocuğu uyuttu. ئەگەر گوێزەرەوە بێت حاڵەتی ئاراستە وەردەگرێت: Anne çocuğa yemek yedirdi.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما صيغة التعدية من "yapmak"؟', 'شێوەی هۆکاری "yapmak" چییە؟'),
        ['yapılmak', 'yaptırmak', 'yapmak', 'yapışmak'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('"Saçımı kestirdim" تعني:', '"Saçımı kestirdim" واتای:'),
        [
          'قصصت شعري بيدي',
          'قصصت شعري عند الحلاق',
          'شعري مقصوص',
          'سأقصّ شعري',
        ],
        1,
      ),
      fill('Anne çocuğa yemek ___. (yemek / ettirgen, geçmiş)', 'yedirdi', 'أطعمت الأم الطفل.', 'دایک نانی دا بە منداڵەکە.', {
        options: ['yedi', 'yedirdi', 'yenildi', 'yiyordu'],
      }),
      translate('ar-tr', 'أضحكتني كثيراً.', ['Beni çok güldüm.', 'Beni çok güldürdün.', 'Çok güldüm.', 'Beni çok gülüyorsun.'], 1),
      match(
        b('طابق الفعل بصيغة التعدية.', 'کارەکە لەگەڵ شێوەی هۆکاریدا بگونجێنە.'),
        [
          { tr: 'ölmek → öldürmek', ar: 'يموت ← يقتل', ku: 'مردن ← کوشتن' },
          { tr: 'içmek → içirmek', ar: 'يشرب ← يسقي', ku: 'خواردنەوە ← خواردنەوەپێدان' },
          { tr: 'okumak → okutmak', ar: 'يقرأ ← يُقرِئ / يُدرِّس', ku: 'خوێندنەوە ← خوێندنەوەپێکردن' },
          { tr: 'bitmek → bitirmek', ar: 'ينتهي ← يُنهي', ku: 'تەواوبوون ← تەواوکردن' },
        ],
      ),
      speak('Yeni bir ev yaptırıyoruz, gelecek yıl bitecek.', 'ye-Nİ bir EV yap-tı-rı-YO-ruz ge-le-DJEK YIL bi-te-DJEK', 'نحن نبني بيتاً جديداً، سينتهي العام القادم.', 'ماڵێکی نوێ دروست دەکەین، ساڵی داهاتوو تەواو دەبێت.'),
    ],
  },

  {
    id: 'b2-reflexive',
    level: 'b2',
    kind: 'grammar',
    order: 3,
    minutes: 20,
    title: 'Dönüşlü ve İşteş Çatı',
    titleI18n: b('صيغتا المطاوعة والمشاركة', 'ڕەنگی گەڕانەوە و بەشداری'),
    objective: b(
      'أن تفرّق بين "يغسل" و"يغتسل" و"يتراسلان" بلواحق تركية.',
      'ئەوەی جیاوازی بکەیت لە نێوان "دەشوات" و "خۆی دەشوات" و "نامە بۆ یەکتر دەنووسن".',
    ),
    prerequisites: ['b2-causative'],
    tags: ['voice', 'verb'],
    blocks: [
      {
        type: 'text',
        title: 'Dönüşlü: -in- (fiil özneye döner)',
        body: b(
          'صيغة المطاوعة تعني أن الفاعل يفعل الفعل بنفسه على نفسه — مثل وزن "افتعل" و"تفعّل" في العربية. yıkamak (يغسل شيئاً) ⟵ yıkanmak (يغتسل). giymek (يلبس شيئاً) ⟵ giyinmek (يتلبّس، يرتدي ملابسه). hazırlamak (يجهّز) ⟵ hazırlanmak (يستعدّ).',
          'ڕەنگی گەڕانەوە واتای ئەوەیە کە کردار کارەکە لەسەر خۆی ئەنجام دەدات. yıkamak (شتێک دەشوات) ⟵ yıkanmak (خۆی دەشوات). giymek ⟵ giyinmek (جل لەبەر دەکات). hazırlamak ⟵ hazırlanmak (خۆی ئامادە دەکات).',
        ),
      },
      {
        type: 'examples',
        title: 'Dönüşlü fiiller',
        items: [
          p('Arabayı yıkadım. / Ben yıkandım.', 'a-ra-ba-YI yı-ka-DIM / BEN yı-kan-DIM', 'غسلت السيارة. / اغتسلت.', 'ئۆتۆمبێلەکەم شۆرد. / خۆم شۆرد.'),
          p('Çabuk giyin, geç kalıyoruz.', 'ça-BUK gi-YİN GEÇ ka-lı-YO-ruz', 'ألبس بسرعة، سنتأخر.', 'خێرا جل لەبەر بکە، درەنگ دەکەوین.'),
          p('Sınava hazırlanıyorum.', 'sı-na-VA ha-zır-la-nı-YO-rum', 'أستعدّ للامتحان.', 'خۆم بۆ تاقیکردنەوەکە ئامادە دەکەم.'),
          p('Aynada kendine baktı.', 'ay-na-DA ken-di-NE bak-TI', 'نظر إلى نفسه في المرآة.', 'لە ئاوێنەکەدا سەیری خۆی کرد.'),
        ],
      },
      {
        type: 'text',
        title: 'İşteş: -iş- (karşılıklı veya birlikte)',
        body: b(
          'صيغة المشاركة تعني أن الفعل متبادل بين طرفين أو جماعي — مثل وزن "تفاعل" في العربية (تراسل، تصافح، تشارك). görmek (يرى) ⟵ görüşmek (يتقابلان). yazmak (يكتب) ⟵ yazışmak (يتراسلان). anlamak (يفهم) ⟵ anlaşmak (يتّفقان). tanımak (يعرف) ⟵ tanışmak (يتعارفان).',
          'ڕەنگی بەشداری واتای ئەوەیە کە کارەکە لە نێوان دوو لاوە یان بە کۆمەڵ ئەنجام دەدرێت. görmek ⟵ görüşmek (یەکتر دەبینن). yazmak ⟵ yazışmak (نامە بۆ یەکتر دەنووسن). anlamak ⟵ anlaşmak (ڕێک دەکەون). tanımak ⟵ tanışmak (یەکتر دەناسن).',
        ),
      },
      {
        type: 'examples',
        title: 'İşteş fiiller',
        items: [
          p('Tanıştığımıza memnun oldum.', 'ta-nış-tı-ı-mı-ZA mem-NUN ol-dum', 'سررت بالتعرّف عليك.', 'خۆشحاڵم بە ناسینت.'),
          p('Yarın görüşelim.', 'ya-RIN gö-rü-şe-LİM', 'لنتقابل غداً.', 'سبەینێ یەکتر ببینین.'),
          p('Sonunda anlaştık.', 'so-nun-DA an-laş-TIK', 'اتفقنا في النهاية.', 'لە کۆتاییدا ڕێککەوتین.'),
          p('E-posta ile yazışıyoruz.', 'e-pos-TA i-LE ya-zı-şı-YO-ruz', 'نتراسل بالبريد الإلكتروني.', 'بە ئیمەیل نامە بۆ یەکتر دەنووسین.'),
          p('Öğrenciler koridorda bağrıştı.', 'öö-ren-dji-LER ko-ri-dor-DA ba-rış-TI', 'صاح الطلاب في الممرّ جميعاً.', 'قوتابییەکان لە هۆڵەکەدا پێکەوە هاواریان کرد.'),
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Aynı ek, farklı çatı: bağlamdan anla',
        body: b(
          'تنبيه: لاحقة ‎-in-‎ تُستخدم أيضاً في المبني للمجهول بعد الجذور المنتهية بـ l (bulunmak = يُوجَد). والفرق يظهر من السياق: "Kitap bulundu" (وُجد الكتاب — مجهول) مقابل "Toplantıda bulundum" (حضرت الاجتماع — مطاوعة). لا تحفظ اللاحقة وحدها، بل الفعل كاملاً بمعناه.',
          'ئاگاداری: پاشگری ‎-in-‎ لە ڕەنگی نەناسراودا بەکاردێت دوای ڕەگی کۆتاییهاتوو بە l (bulunmak = هەیە/دەدۆزرێتەوە). جیاوازییەکە لە دەقەکەوە دەردەکەوێت.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما معنى "tanışmak"؟', 'واتای "tanışmak" چییە؟'),
        ['يعرف شخصاً', 'يتعرّفان على بعضهما', 'يُعرَّف', 'يجعل غيره يعرف'],
        1,
      ),
      mcq(
        b('ما صيغة المطاوعة من "hazırlamak"؟', 'شێوەی گەڕانەوەی "hazırlamak" چییە؟'),
        ['hazırlatmak', 'hazırlanmak', 'hazırlaşmak', 'hazırlamak'],
        1,
        { turkishOptions: true },
      ),
      fill('Sınava ___. (hazırlanmak / ben, şimdiki)', 'hazırlanıyorum', 'أستعدّ للامتحان.', 'خۆم بۆ تاقیکردنەوەکە ئامادە دەکەم.', {
        options: ['hazırlıyorum', 'hazırlanıyorum', 'hazırlatıyorum', 'hazırlaşıyorum'],
      }),
      match(
        b('طابق الفعل بمعناه.', 'کارەکە لەگەڵ واتاکەیدا بگونجێنە.'),
        [
          { tr: 'yıkanmak', ar: 'يغتسل', ku: 'خۆی دەشوات' },
          { tr: 'görüşmek', ar: 'يتقابلان', ku: 'یەکتر دەبینن' },
          { tr: 'anlaşmak', ar: 'يتّفقان', ku: 'ڕێک دەکەون' },
          { tr: 'giyinmek', ar: 'يرتدي ملابسه', ku: 'جل لەبەر دەکات' },
        ],
      ),
      speak('Tanıştığımıza memnun oldum, yarın tekrar görüşelim.', 'ta-nış-tı-ı-mı-ZA mem-NUN ol-dum ya-RIN tek-RAR gö-rü-şe-LİM', 'سررت بالتعرّف عليك، لنتقابل غداً مجدداً.', 'خۆشحاڵم بە ناسینت، سبەینێ دیسان یەکتر ببینین.'),
    ],
  },

  {
    id: 'b2-participles',
    level: 'b2',
    kind: 'grammar',
    order: 4,
    minutes: 38,
    title: 'Sıfat-Fiiller (Ortaçlar)',
    titleI18n: b('الصفات الفعلية (جمل الوصل)', 'ئاوەڵناوی کاری (ڕستەی پەیوەندی)'),
    objective: b(
      'أن تبني جملة الوصل التركية التي تسبق الموصوف، بدل "الذي/التي" العربية.',
      'ئەوەی ڕستەی پەیوەندی تورکی دروست بکەیت کە پێش ناوەکە دێت.',
    ),
    prerequisites: ['a2-possessive', 'b1-aorist'],
    tags: ['participles', 'syntax', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Türkçede "ki" yoktur — ortaç vardır',
        body: b(
          'هذا أصعب درس في المستوى، وأهمّه. العربية تقول "الرجلُ الذي جاء أمس" فتضع جملة الصلة بعد الموصوف. التركية تعكس الترتيب تماماً: تضع الجملة كلها قبل الاسم وتحوّل فعلها إلى صفة. "dün gelen adam" = حرفياً "أمسِ الجائي الرجل". تمرّن على قلب الترتيب ذهنياً؛ هذا مفتاح الطلاقة.',
          'ئەمە قورسترین وانەی ئاستەکەیە، و گرنگترینیان. کوردی دەڵێت "ئەو پیاوەی دوێنێ هات". تورکی بە تەواوی ڕیزبەندییەکە دەگۆڕێت: هەموو ڕستەکە پێش ناوەکە دادەنێت و کارەکەی دەکات بە ئاوەڵناو. "dün gelen adam". ڕاهێنان بکە لەسەر هەڵگەڕاندنەوەی ڕیزبەندییەکە بە بیرکردنەوە.',
        ),
      },
      {
        type: 'table',
        title: 'Üç temel ortaç',
        headers: ['Ek', 'Ne zaman?', 'Örnek', 'Anlam'],
        rows: [
          ['-en / -an', 'Nitelenen isim ÖZNE ise', 'gelen adam', 'الرجل الذي جاء / ئەو پیاوەی هات'],
          ['-dik + iyelik', 'Nitelenen isim NESNE ise (geçmiş/şimdi)', 'okuduğum kitap', 'الكتاب الذي قرأته / ئەو کتێبەی خوێندمەوە'],
          ['-ecek + iyelik', 'Nitelenen isim NESNE ise (gelecek)', 'okuyacağım kitap', 'الكتاب الذي سأقرؤه / ئەو کتێبەی دەیخوێنمەوە'],
          ['-miş', 'Tamamlanmış durum sıfatı', 'pişmiş yemek', 'طعام مطبوخ / خواردنی لێنراو'],
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Hangi ortacı seçmeliyim? Tek soru sor',
        body: b(
          'القاعدة الحاسمة: اسأل نفسك — هل الاسمُ الموصوف هو فاعل الفعل أم مفعوله؟ إذا كان فاعلاً استخدم ‎-en‎ بلا لاحقة ملكية: "الرجل الذي كتب الرسالة" = mektubu yazan adam. وإذا كان مفعولاً استخدم ‎-dik‎ + لاحقة ملكية تدلّ على الفاعل الحقيقي: "الرسالة التي كتبها الرجل" = adamın yazdığı mektup.',
          'ڕێسا بڕیارەکە: لە خۆت بپرسە — ئایا ناوە وەسفکراوەکە کرداری کارەکەیە یان بەرکارەکەی؟ ئەگەر کردار بێت ‎-en‎ بەکاربهێنە بێ پاشگری خاوەندارێتی: mektubu yazan adam. ئەگەر بەرکار بێت ‎-dik‎ + پاشگری خاوەندارێتی بەکاربهێنە: adamın yazdığı mektup.',
        ),
      },
      {
        type: 'examples',
        title: '-en / -an: özne ortacı',
        items: [
          p('Dün gelen adam kimdi?', 'DÜN ge-LEN a-DAM kim-Dİ', 'من كان الرجل الذي جاء أمس؟', 'ئەو پیاوەی دوێنێ هات کێ بوو؟'),
          p('Türkçe bilen bir arkadaşım var.', 'türk-ÇE bi-LEN bir ar-ka-da-ŞIM VAR', 'لديّ صديق يعرف التركية.', 'هاوڕێیەکم هەیە کە تورکی دەزانێت.'),
          p('Masada duran kitap senin mi?', 'ma-sa-DA du-RAN ki-TAP se-NİN mi', 'هل الكتاب الموجود على الطاولة لك؟', 'ئەو کتێبەی لەسەر مێزەکەیە هی تۆیە؟'),
          p('Çalışan kazanır.', 'ça-lı-ŞAN ka-za-NIR', 'من يعمل يربح.', 'ئەوەی کار بکات دەبات.'),
        ],
      },
      {
        type: 'examples',
        title: '-dik + iyelik: nesne ortacı',
        items: [
          p('Okuduğum kitap çok güzeldi.', 'o-ku-du-UM ki-TAP ÇOK gü-zel-Dİ', 'الكتاب الذي قرأته كان جميلاً جداً.', 'ئەو کتێبەی خوێندمەوە زۆر جوان بوو.'),
          p('Aldığın hediye çok hoşuma gitti.', 'al-dı-IN he-di-YE ÇOK ho-şu-MA git-Tİ', 'الهدية التي اشتريتها أعجبتني كثيراً.', 'ئەو دیارییەی کڕیت زۆر بەدڵم بوو.'),
          p('Gittiğimiz restoran çok pahalıydı.', 'git-ti-i-MİZ res-to-RAN ÇOK pa-ha-lıy-DI', 'المطعم الذي ذهبنا إليه كان غالياً جداً.', 'ئەو چێشتخانەیەی چووینێ زۆر گران بوو.'),
          p('Söylediklerini anlamadım.', 'söy-le-dik-le-ri-Nİ an-la-ma-DIM', 'لم أفهم ما قلتَه.', 'لەوەی گوتت تێنەگەیشتم.'),
        ],
      },
      {
        type: 'examples',
        title: '-ecek + iyelik: gelecek ortacı',
        items: [
          p('Okuyacağım kitabı aldım.', 'o-ku-ya-dja-IM ki-ta-BI al-DIM', 'اشتريت الكتاب الذي سأقرؤه.', 'ئەو کتێبەم کڕی کە دەیخوێنمەوە.'),
          p('Yapacağım işi biliyorum.', 'ya-pa-dja-IM i-Şİ bi-li-YO-rum', 'أعرف العمل الذي سأقوم به.', 'ئەو کارە دەزانم کە دەیکەم.'),
          p('Gideceğimiz şehir çok uzak.', 'gi-de-dje-i-MİZ şe-HİR ÇOK u-ZAK', 'المدينة التي سنذهب إليها بعيدة جداً.', 'ئەو شارەی بۆی دەچین زۆر دوورە.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Çeviri stratejisi: sondan başa',
        body: b(
          'حيلة عملية للترجمة: ابدأ من آخر الجملة التركية. "Dün akşam sinemada gördüğüm film" ⟵ ابدأ بـ film (الفيلم) ثم gördüğüm (الذي شاهدته) ثم sinemada (في السينما) ثم dün akşam (مساء أمس) = "الفيلم الذي شاهدته في السينما مساء أمس". طبّق هذه الحيلة على كل جملة وصل حتى تصبح تلقائية.',
          'فێڵێکی کردەیی بۆ وەرگێڕان: لە کۆتایی ڕستە تورکییەکەوە دەست پێبکە. "Dün akşam sinemada gördüğüm film" ⟵ سەرەتا film، پاشان gördüğüm، پاشان sinemada، پاشان dün akşam. ئەم فێڵە لەسەر هەموو ڕستەیەکی پەیوەندی جێبەجێ بکە تا خۆکار دەبێت.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('كيف تقول "الرجل الذي جاء أمس"؟', 'چۆن دەڵێیت "ئەو پیاوەی دوێنێ هات"؟'),
        ['adam ki dün geldi', 'dün gelen adam', 'dün geldiğim adam', 'adam dün gelen'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('كيف تقول "الكتاب الذي قرأتُه"؟', 'چۆن دەڵێیت "ئەو کتێبەی خوێندمەوە"؟'),
        ['okuyan kitap', 'okuduğum kitap', 'okuduğun kitap', 'okuyacağım kitap'],
        1,
        { turkishOptions: true, explain: b('الكتاب مفعول ⟵ ‎-dik‎ + لاحقة المتكلم ‎-um‎.', 'کتێب بەرکارە ⟵ ‎-dik‎ + پاشگری کەسی یەکەم.') },
      ),
      mcq(
        b('لماذا نقول "mektubu yazan adam" وليس "yazdığım"؟', 'بۆچی دەڵێین "mektubu yazan adam" نەک "yazdığım"؟'),
        [
          'لأن الرجل هو الفاعل وليس المفعول',
          'لأن الجملة في الماضي',
          'لأن الرسالة معرّفة',
          'لأن الفعل لازم',
        ],
        0,
      ),
      fill('Dün ___ film çok güzeldi. (izlemek / ben)', 'izlediğim', 'الفيلم الذي شاهدته أمس كان جميلاً جداً.', 'ئەو فیلمەی دوێنێ بینیم زۆر جوان بوو.', {
        options: ['izleyen', 'izlediğim', 'izleyeceğim', 'izlemiş'],
      }),
      translate('ar-tr', 'لديّ صديق يعرف التركية.', [
        'Türkçe bildiğim bir arkadaşım var.',
        'Türkçe bilen bir arkadaşım var.',
        'Türkçe bileceğim bir arkadaşım var.',
        'Bir arkadaşım Türkçe biliyor ki.',
      ], 1),
      order(
        b('رتّب: المطعم الذي ذهبنا إليه كان غالياً.', 'ڕێک بخە: ئەو چێشتخانەیەی چووینێ گران بوو.'),
        'Gittiğimiz restoran çok pahalıydı',
        'المطعم الذي ذهبنا إليه كان غالياً جداً.',
        'ئەو چێشتخانەیەی چووینێ زۆر گران بوو.',
        { pron: 'git-ti-i-MİZ res-to-RAN ÇOK pa-ha-lıy-DI' },
      ),
      speak('Dün akşam sinemada gördüğüm film çok etkileyiciydi.', 'DÜN ak-ŞAM si-ne-ma-DA gör-dü-ÜM FİLM ÇOK et-ki-le-yi-dji-y-Dİ', 'الفيلم الذي شاهدته في السينما مساء أمس كان مؤثّراً جداً.', 'ئەو فیلمەی دوێنێ ئێوارە لە سینەما بینیم زۆر کاریگەر بوو.'),
    ],
  },

  {
    id: 'b2-verbal-nouns',
    level: 'b2',
    kind: 'grammar',
    order: 5,
    minutes: 26,
    title: 'İsim-Fiiller',
    titleI18n: b('الأسماء الفعلية (المصادر)', 'ناوی کاری'),
    objective: b(
      'أن تحوّل الفعل إلى اسم لتستخدمه فاعلاً أو مفعولاً: "القراءة مفيدة"، "أحبّ السباحة".',
      'ئەوەی کار بگۆڕیت بۆ ناو تاکو وەک کردار یان بەرکار بەکاری بهێنیت.',
    ),
    prerequisites: ['b2-participles'],
    tags: ['nominalisation', 'syntax'],
    blocks: [
      {
        type: 'table',
        title: 'Üç isim-fiil eki',
        headers: ['Ek', 'İşlev', 'Örnek', 'Anlam'],
        rows: [
          ['-mek / -mak', 'Genel mastar, sözlük biçimi', 'Yüzmek güzeldir.', 'السباحة جميلة / مەلەکردن جوانە'],
          ['-me / -ma', 'Çekimlenebilen eylem adı', 'Yüzmeyi seviyorum.', 'أحبّ السباحة / مەلەکردنم خۆشدەوێت'],
          ['-iş / -ış', 'Yapılış biçimi, tarz', 'Gülüşü çok güzel.', 'ضحكتُه جميلة / پێکەنینەکەی جوانە'],
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: '-mek mi, -me mi?',
        body: b(
          'الفرق العملي: ‎-mek‎ لا يقبل لاحقة ملكية ولا حالة مفعولية بسهولة، ويُستخدم في العبارات العامة (Sigara içmek yasak). أما ‎-me‎ فيتصرّف كاسم كامل يقبل كل اللواحق (Sigara içmeni istemiyorum = لا أريدك أن تدخّن). القاعدة العملية: إذا احتجت لتحديد "مَن يفعل" استخدم ‎-me‎ + لاحقة ملكية.',
          'جیاوازی کردەیی: ‎-mek‎ بە ئاسانی پاشگری خاوەندارێتی و حاڵەتی بەرکار وەرناگرێت، و لە دەستەواژەی گشتیدا بەکاردێت (Sigara içmek yasak). بەڵام ‎-me‎ وەک ناوێکی تەواو ڕەفتار دەکات و هەموو پاشگرەکان وەردەگرێت (Sigara içmeni istemiyorum).',
        ),
      },
      {
        type: 'examples',
        title: '-mek: genel ifadeler',
        items: [
          p('Yüzmek çok faydalıdır.', 'yüz-MEK ÇOK fay-da-lı-DIR', 'السباحة مفيدة جداً.', 'مەلەکردن زۆر سوودبەخشە.'),
          p('Burada sigara içmek yasaktır.', 'bu-ra-DA si-ga-RA iç-MEK ya-sak-TIR', 'ممنوع التدخين هنا.', 'لێرە جگەرەکێشان قەدەغەیە.'),
          p('Erken kalkmak zor geliyor.', 'er-KEN kalk-MAK ZOR ge-li-YOR', 'الاستيقاظ باكراً صعب عليّ.', 'زوو هەستان قورس دێتە بەرچاوم.'),
        ],
      },
      {
        type: 'examples',
        title: '-me: kişili eylem adı',
        items: [
          p('Yüzmeyi çok severim.', 'yüz-me-Yİ ÇOK se-ve-rim', 'أحبّ السباحة كثيراً.', 'مەلەکردنم زۆر خۆشدەوێت.'),
          p('Gelmeni bekliyorum.', 'gel-me-Nİ bek-li-YO-rum', 'أنتظر مجيئك.', 'چاوەڕێی هاتنت دەکەم.'),
          p('Onun gitmesini istemedim.', 'o-NUN git-me-si-Nİ is-te-me-DİM', 'لم أُرد أن يذهب.', 'نەمویست بڕوات.'),
          p('Türkçe öğrenmem iki yıl sürdü.', 'türk-ÇE öö-ren-MEM i-Kİ YIL sür-DÜ', 'استغرق تعلّمي للتركية سنتين.', 'فێربوونی تورکیم دوو ساڵی خایاند.'),
          p('Yardım etmenize çok sevindim.', 'yar-DIM et-me-ni-ZE ÇOK se-vin-DİM', 'سعدت كثيراً بمساعدتكم.', 'زۆر دڵخۆش بووم بە یارمەتیدانتان.'),
        ],
      },
      {
        type: 'examples',
        title: '-iş: yapılış biçimi',
        items: [
          p('Onun gülüşü çok tatlı.', 'o-NUN gü-lü-ŞÜ ÇOK tat-LI', 'ضحكته حلوة جداً.', 'پێکەنینەکەی زۆر شیرینە.'),
          p('Bakışından anladım.', 'ba-kı-şın-DAN an-la-DIM', 'فهمت من نظرته.', 'لە سەیرکردنیەوە تێگەیشتم.'),
          p('Türkçenin yazılışı kolaydır.', 'türk-çe-NİN ya-zı-lı-ŞI ko-lay-DIR', 'كتابة التركية سهلة.', 'نووسینی تورکی ئاسانە.'),
        ],
      },
    ],
    exercises: [
      mcq(
        b('كيف تقول "أحبّ القراءة"؟', 'چۆن دەڵێیت "خوێندنەوەم خۆشدەوێت"؟'),
        ['Okumak severim.', 'Okumayı severim.', 'Okuyan severim.', 'Okuduğum severim.'],
        1,
        { turkishOptions: true, explain: b('المفعول به يحتاج ‎-me‎ + لاحقة المفعولية.', 'بەرکار ‎-me‎ + پاشگری بەرکاری دەوێت.') },
      ),
      fill('___ bekliyorum. (gelmek / sen)', 'Gelmeni', 'أنتظر مجيئك.', 'چاوەڕێی هاتنت دەکەم.', {
        options: ['Gelmek', 'Gelmeni', 'Gelen', 'Geldiğin'],
      }),
      mcq(
        b('أي جملة صحيحة للافتة رسمية؟', 'کام ڕستە بۆ تابلۆیەکی فەرمی دروستە؟'),
        ['Sigara içmeyi yasaktır.', 'Sigara içmek yasaktır.', 'Sigara içen yasaktır.', 'Sigara içmem yasaktır.'],
        1,
        { turkishOptions: true },
      ),
      translate('tr-ar', 'Onun gitmesini istemedim.', [
        'لم أُرد أن يذهب.',
        'لم أذهب معه.',
        'أراد أن يذهب.',
        'ذهبت دون أن أريد.',
      ], 0, { pron: 'o-NUN git-me-si-Nİ is-te-me-DİM' }),
      match(
        b('طابق الصيغة بوظيفتها.', 'شێوەکە لەگەڵ کارەکەیدا بگونجێنە.'),
        [
          { tr: 'yüzmek', ar: 'المصدر العام', ku: 'سەرچاوەی گشتی' },
          { tr: 'yüzmeyi', ar: 'المصدر كمفعول به', ku: 'سەرچاوە وەک بەرکار' },
          { tr: 'yüzmem', ar: 'سباحتي (بلاحقة ملكية)', ku: 'مەلەکردنم' },
          { tr: 'yüzüşü', ar: 'طريقة سباحته', ku: 'شێوەی مەلەکردنی' },
        ],
      ),
    ],
  },

  {
    id: 'b2-converbs',
    level: 'b2',
    kind: 'grammar',
    order: 6,
    minutes: 34,
    title: 'Zarf-Fiiller (Ulaçlar)',
    titleI18n: b('الظروف الفعلية (روابط الجمل)', 'هاوەڵکاری کاری'),
    objective: b(
      'أن تربط جملتين داخل جملة واحدة دون أدوات ربط منفصلة.',
      'ئەوەی دوو ڕستە لە ناو یەک ڕستەدا ببەستیتەوە بەبێ بەستەری جیاواز.',
    ),
    prerequisites: ['b2-verbal-nouns'],
    tags: ['converbs', 'syntax', 'core'],
    blocks: [
      {
        type: 'text',
        title: 'Türkçenin uzun cümlelerinin sırrı',
        body: b(
          'إذا قرأت نصاً تركياً وجدت جملاً طويلة جداً بفعل واحد في النهاية. السرّ هو "الظروف الفعلية": لواحق تحوّل الفعل إلى ظرف يربط بجملة أخرى دون حرف عطف. بدل "جاء ثم جلس" تقول "gelip oturdu" في كلمتين. إتقان هذه اللواحق هو الفرق بين تركية المبتدئ وتركية المتقدّم.',
          'ئەگەر دەقێکی تورکی بخوێنیتەوە ڕستەی زۆر درێژت بەدی دەکرد بە یەک کار لە کۆتاییدا. نهێنییەکە "هاوەڵکاری کاری"یە: پاشگرێک کە کار دەکات بە هاوەڵکارێک کە بە ڕستەیەکی ترەوە دەیبەستێتەوە بەبێ بەستەر. لە جیاتی "هات پاشان دانیشت" دەڵێیت "gelip oturdu".',
        ),
      },
      {
        type: 'table',
        title: 'En sık kullanılan ulaçlar',
        headers: ['Ek', 'Anlam', 'Örnek', 'Çeviri'],
        rows: [
          ['-ip / -ıp', 've, sonra (aynı özne)', 'Gelip oturdu.', 'جاء وجلس / هات و دانیشت'],
          ['-erek / -arak', '...-erek, yaparak', 'Koşarak geldi.', 'جاء راكضاً / بە ڕاکردن هات'],
          ['-ince / -ınca', '...-diğinde, ne zaman ki', 'Eve gelince ara.', 'اتصل حين تصل البيت / کاتێک گەیشتیتە ماڵ پەیوەندی بکە'],
          ['-ken', '...-irken, sırasında', 'Yürürken düştü.', 'وقع وهو يمشي / لە کاتی ڕۆیشتندا کەوت'],
          ['-dikten sonra', '...-dikten sonra', 'Yedikten sonra çıktık.', 'خرجنا بعد أن أكلنا / دوای ئەوەی نانمان خوارد چووینە دەرەوە'],
          ['-meden önce', '...-meden önce', 'Gitmeden önce ara.', 'اتصل قبل أن تذهب / پێش ئەوەی بڕۆیت پەیوەندی بکە'],
          ['-diği için', 'çünkü', 'Hasta olduğu için gelmedi.', 'لم يأتِ لأنه مريض / نەهات چونکە نەخۆش بوو'],
          ['-dikçe', '...-dikçe, her seferinde', 'Gördükçe seviyorum.', 'كلما رأيته أحببته أكثر / هەرچی دەیبینم زیاتر خۆشمدەوێت'],
          ['-meden', '...-meksizin, olmadan', 'Söylemeden gitti.', 'ذهب دون أن يقول / بەبێ ئەوەی بڵێت ڕۆیشت'],
          ['-e ... -e', 'tekrarlayarak', 'Güle güle gitti.', 'ذهب ضاحكاً / بە پێکەنینەوە ڕۆیشت'],
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: '-ip kuralı: özne aynı olmalı',
        body: b(
          'شرط أساسي: لاحقة ‎-ip‎ تصحّ فقط إذا كان فاعل الجملتين واحداً. "Ali gelip oturdu" صحيحة (علي جاء وعلي جلس). لكن "Ali gelip ben gittim" خاطئة لأن الفاعلين مختلفان — استخدم فيها "Ali geldi ve ben gittim". هذا الشرط ينطبق أيضاً على ‎-erek‎ و ‎-meden‎.',
          'مەرجێکی بنەڕەتی: پاشگری ‎-ip‎ تەنها ڕاستە ئەگەر کرداری هەردوو ڕستەکە یەک بێت. "Ali gelip oturdu" دروستە. بەڵام "Ali gelip ben gittim" هەڵەیە چونکە کردارەکان جیاوازن.',
        ),
      },
      {
        type: 'examples',
        title: 'Ulaçlarla akıcı cümleler',
        items: [
          p('Eve gelince beni ara.', 'e-VE ge-lin-DJE be-Nİ a-RA', 'اتصل بي حين تصل إلى البيت.', 'کاتێک گەیشتیتە ماڵ پەیوەندیم پێوە بکە.'),
          p('Müzik dinleyerek ders çalışıyorum.', 'mü-ZİK din-le-ye-REK DERS ça-lı-şı-YO-rum', 'أدرس وأنا أستمع إلى الموسيقى.', 'بە گوێگرتن لە مۆسیقا وانە دەخوێنم.'),
          p('Yemek yedikten sonra yürüyüşe çıktık.', 'ye-MEK ye-dik-TEN son-RA yü-rü-yü-ŞE çık-TIK', 'خرجنا للمشي بعد أن أكلنا.', 'دوای ئەوەی نانمان خوارد چووینە دەرەوە بۆ پیاسە.'),
          p('Yatmadan önce dişlerini fırçala.', 'yat-ma-DAN ön-DJE diş-le-ri-Nİ fır-ça-LA', 'اغسل أسنانك قبل أن تنام.', 'پێش ئەوەی بنوویت ددانەکانت بشۆ.'),
          p('Otobüsü kaçırdığım için geç kaldım.', 'o-to-bü-SÜ ka-çır-dı-IM i-ÇİN GEÇ kal-DIM', 'تأخرت لأنني فاتتني الحافلة.', 'درەنگ کەوتم چونکە پاسەکەم لێ دواکەوت.'),
          p('Hiçbir şey söylemeden çıkıp gitti.', 'hiç-BİR ŞEY söy-le-me-DEN çı-KIP git-Tİ', 'خرج وذهب دون أن يقول شيئاً.', 'بەبێ ئەوەی هیچ بڵێت چووە دەرەوە و ڕۆیشت.'),
          p('Türkçe öğrendikçe Türkiye’yi daha çok seviyorum.', 'türk-ÇE öö-ren-dik-DJE tür-ki-YE-yi da-HA ÇOK se-vi-YO-rum', 'كلما تعلّمت التركية أحببت تركيا أكثر.', 'هەرچی فێری تورکی دەبم زیاتر تورکیام خۆشدەوێت.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: '-ken: en kolay ulaç',
        body: b(
          'لاحقة ‎-ken‎ سهلة جداً ولا تخضع لتناغم الحركات إطلاقاً — شكلها واحد دائماً. تُضاف إلى الزمن الواسع للأفعال: yürürken (بينما يمشي)، gelirken (بينما يأتي). وتُضاف إلى الأسماء مباشرة: çocukken (حين كنت طفلاً)، öğrenciyken (حين كنت طالباً)، küçükken (حين كنت صغيراً).',
          'پاشگری ‎-ken‎ زۆر ئاسانە و بە هیچ شێوەیەک ملکەچی هارمۆنیای بزوێن نییە — هەمیشە یەک شێوەی هەیە. بۆ کار بە کاتی فراوانەوە زیاد دەکرێت: yürürken، gelirken. بۆ ناویش ڕاستەوخۆ: çocukken، öğrenciyken.',
        ),
      },
    ],
    exercises: [
      fill('Eve ___ beni ara. (gelmek / -ince)', 'gelince', 'اتصل بي حين تصل إلى البيت.', 'کاتێک گەیشتیتە ماڵ پەیوەندیم پێوە بکە.', {
        options: ['gelerek', 'gelince', 'gelip', 'gelmeden'],
      }),
      mcq(
        b('كيف تقول "جاء راكضاً"؟', 'چۆن دەڵێیت "بە ڕاکردن هات"؟'),
        ['Koşup geldi.', 'Koşarak geldi.', 'Koşunca geldi.', 'Koşmadan geldi.'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('أي جملة خاطئة؟', 'کام ڕستە هەڵەیە؟'),
        [
          'Ali gelip oturdu.',
          'Ali gelip ben gittim.',
          'Yemek yiyip çıktık.',
          'Kitabı alıp okudum.',
        ],
        1,
        { turkishOptions: true, explain: b('لاحقة ‎-ip‎ تتطلّب فاعلاً واحداً للجملتين.', 'پاشگری ‎-ip‎ یەک کردار بۆ هەردوو ڕستەکە دەوێت.') },
      ),
      fill('Yat___ önce diş fırçala.', 'madan', 'اغسل أسنانك قبل النوم.', 'پێش نووستن ددانەکانت بشۆ.', {
        options: ['madan', 'ınca', 'arak', 'ıp'],
      }),
      translate('ar-tr', 'تأخرت لأنني كنت مريضاً.', [
        'Hasta olduğum için geç kaldım.',
        'Hasta olunca geç kaldım.',
        'Hasta olarak geç kaldım.',
        'Hasta olmadan geç kaldım.',
      ], 0),
      order(
        b('رتّب: خرجنا للمشي بعد أن أكلنا.', 'ڕێک بخە: دوای ئەوەی نانمان خوارد چووینە دەرەوە بۆ پیاسە.'),
        'Yemek yedikten sonra yürüyüşe çıktık',
        'خرجنا للمشي بعد أن أكلنا.',
        'دوای ئەوەی نانمان خوارد چووینە پیاسە.',
        { pron: 'ye-MEK ye-dik-TEN son-RA yü-rü-yü-ŞE çık-TIK' },
      ),
      speak('Türkçe öğrendikçe her şey daha kolay geliyor.', 'türk-ÇE öö-ren-dik-DJE her ŞEY da-HA ko-LAY ge-li-YOR', 'كلما تعلّمت التركية بدا كل شيء أسهل.', 'هەرچی فێری تورکی دەبم هەموو شتێک ئاسانتر دەردەکەوێت.'),
    ],
  },

  {
    id: 'b2-reported-speech',
    level: 'b2',
    kind: 'grammar',
    order: 7,
    minutes: 28,
    title: 'Dolaylı Anlatım',
    titleI18n: b('الكلام المنقول', 'قسەی گوازراوە'),
    objective: b(
      'أن تنقل كلام الآخرين وأسئلتهم وأوامرهم دون اقتباس مباشر.',
      'ئەوەی قسە و پرسیار و فەرمانی کەسانی تر بگوازیتەوە بەبێ وەرگرتنەوەی ڕاستەوخۆ.',
    ),
    prerequisites: ['b2-participles'],
    tags: ['reported-speech', 'syntax'],
    blocks: [
      {
        type: 'text',
        title: 'Türkçede "ki" ile değil, ekle',
        body: b(
          'العربية تنقل الكلام بـ"قال إنّ" والكردية بـ"گوتی کە". التركية لا تستخدم أداة ربط، بل تحوّل الجملة المنقولة إلى اسم بلاحقة ‎-dik‎ أو ‎-ecek‎ + لاحقة ملكية + حالة المفعولية، ثم تضع فعل القول في النهاية. "قال إنه سيأتي" = Geleceğini söyledi.',
          'کوردی بە "گوتی کە" قسە دەگوازێتەوە. تورکی بەستەر بەکارناهێنێت، بەڵکو ڕستە گوازراوەکە دەکات بە ناو بە پاشگری ‎-dik‎ یان ‎-ecek‎ + پاشگری خاوەندارێتی + حاڵەتی بەرکار، پاشان کاری گوتن لە کۆتاییدا دادەنێت.',
        ),
      },
      {
        type: 'table',
        title: 'Doğrudan → dolaylı',
        headers: ['Doğrudan anlatım', 'Dolaylı anlatım', 'Anlam'],
        rows: [
          ['"Geliyorum" dedi.', 'Geldiğini söyledi.', 'قال إنه قادم / گوتی کە دێت'],
          ['"Geleceğim" dedi.', 'Geleceğini söyledi.', 'قال إنه سيأتي / گوتی کە دێت'],
          ['"Hastayım" dedi.', 'Hasta olduğunu söyledi.', 'قال إنه مريض / گوتی نەخۆشە'],
          ['"Gel!" dedi.', 'Gelmemi söyledi.', 'قال لي أن آتي / پێی گوتم بێم'],
          ['"Geliyor musun?" diye sordu.', 'Gelip gelmediğimi sordu.', 'سأل إن كنت قادماً / پرسی ئایا دێم'],
          ['"Nerede oturuyorsun?" diye sordu.', 'Nerede oturduğumu sordu.', 'سأل أين أسكن / پرسی لە کوێ دەژیم'],
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'İyelik eki KİMİN yaptığını gösterir',
        body: b(
          'نقطة حاسمة: لاحقة الملكية على ‎-dik‎ تشير إلى فاعل الجملة المنقولة لا إلى الناقل. "Geldiğimi söyledi" = قال إنني جئت (اللاحقة ‎-im‎ تشير إليّ أنا). "Geldiğini söyledi" = قال إنه/إنك جئت. هذا يوجب انتباهاً شديداً عند النقل.',
          'خاڵێکی بڕیارکەر: پاشگری خاوەندارێتی لەسەر ‎-dik‎ ئاماژە بە کرداری ڕستە گوازراوەکە دەکات نەک بە گوازەرەوەکە. "Geldiğimi söyledi" = گوتی کە من هاتووم. "Geldiğini söyledi" = گوتی کە ئەو/تۆ هاتووی.',
        ),
      },
      {
        type: 'examples',
        title: 'Haber aktarma',
        items: [
          p('Ali yarın geleceğini söyledi.', 'a-Lİ ya-RIN ge-le-dje-i-Nİ söy-le-Dİ', 'قال علي إنه سيأتي غداً.', 'عەلی گوتی کە سبەینێ دێت.'),
          p('Hasta olduğunu duydum.', 'has-TA ol-du-u-NU du-y-DUM', 'سمعت أنه مريض.', 'بیستم کە نەخۆشە.'),
          p('Beni beklediğini bilmiyordum.', 'be-Nİ bek-le-di-i-Nİ bil-mi-YOR-dum', 'لم أكن أعلم أنه ينتظرني.', 'نەمدەزانی چاوەڕێم دەکات.'),
          p('Nerede oturduğumu sordu.', 'ne-re-DE o-tur-du-u-MU sor-DU', 'سألني أين أسكن.', 'پرسی لە کوێ دەژیم.'),
          p('Gelip gelmeyeceğimizi merak ediyor.', 'ge-LİP gel-me-ye-dje-i-mi-Zİ me-RAK e-di-yor', 'يتساءل إن كنا سنأتي أم لا.', 'کنجکاوە کە ئایا دێین یان نا.'),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Emir naklinde: -memi / -meni + söylemek',
        body: b(
          'لنقل الأمر نستخدم ‎-me‎ + لاحقة ملكية + حالة المفعولية: "Gel!" dedi ⟵ Gelmemi söyledi (قال لي أن آتي). "Beklemeyin" dedi ⟵ Beklememizi istemedi (لم يُرد أن ننتظر). لاحظ أن الفعل الناقل قد يكون söylemek أو istemek أو rica etmek حسب قوة الأمر.',
          'بۆ گواستنەوەی فەرمان ‎-me‎ + پاشگری خاوەندارێتی + حاڵەتی بەرکار بەکاردەهێنین: Gelmemi söyledi. Beklememizi istemedi. سەرنج بدە کاری گوازەرەوە دەکرێت söylemek یان istemek یان rica etmek بێت.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('انقل: "Geleceğim" dedi.', 'بیگوازەوە: "Geleceğim" dedi.'),
        ['Geleceğini söyledi.', 'Geldiğini söyledi.', 'Geleceğimi söyledi.', 'Gelmesini söyledi.'],
        0,
        { turkishOptions: true },
      ),
      mcq(
        b('"Geldiğimi söyledi" تعني:', '"Geldiğimi söyledi" واتای:'),
        ['قال إنه جاء', 'قال إنني جئت', 'قلت إنه جاء', 'قال لي أن آتي'],
        1,
      ),
      fill('Ali hasta ___ söyledi. (olmak + dolaylı, o)', 'olduğunu', 'قال علي إنه مريض.', 'عەلی گوتی کە نەخۆشە.', {
        options: ['olduğunu', 'olacağını', 'olduğumu', 'olmasını'],
      }),
      translate('ar-tr', 'سألني أين أسكن.', [
        'Nerede oturduğunu sordu.',
        'Nerede oturduğumu sordu.',
        'Nerede oturacağımı sordu.',
        'Nerede oturmamı söyledi.',
      ], 1),
      order(
        b('رتّب: قال علي إنه سيأتي غداً.', 'ڕێک بخە: عەلی گوتی کە سبەینێ دێت.'),
        'Ali yarın geleceğini söyledi',
        'قال علي إنه سيأتي غداً.',
        'عەلی گوتی کە سبەینێ دێت.',
        { pron: 'a-Lİ ya-RIN ge-le-dje-i-Nİ söy-le-Dİ' },
      ),
      listening('Beni beklediğini bilmiyordum.', [
        'لم أكن أعلم أنه ينتظرني.',
        'كنت أعرف أنه ينتظرني.',
        'انتظرته ولم يأتِ.',
      ], 0, 'ar', p('Beni beklediğini bilmiyordum.', 'be-Nİ bek-le-di-i-Nİ bil-mi-YOR-dum', 'لم أكن أعلم أنه ينتظرني.', 'نەمدەزانی چاوەڕێم دەکات.')),
    ],
  },
];
