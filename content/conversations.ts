import type { Lesson } from '@/types/content';
import { b, listening, mcq, order, speak, translate } from './shared/helpers';

/**
 * Conversation lessons - full dialogues in real situations, graded by level.
 * Every line is speakable, so a student can shadow the whole exchange.
 */
export const CONVERSATIONS: Lesson[] = [
  {
    id: 'conv-a1-greeting',
    level: 'a1',
    kind: 'conversation',
    order: 40,
    minutes: 15,
    title: 'İlk Tanışma',
    titleI18n: b('اللقاء الأول', 'یەکەم ناسین'),
    objective: b('أن تفتح محادثة مع تركي وتُعرّف بنفسك.', 'ئەوەی گفتوگۆ لەگەڵ تورکێک بکەیتەوە و خۆت بناسێنیت.'),
    tags: ['dialogue', 'greeting'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Üniversite kantininde',
        lines: [
          { speaker: 'Deniz', tr: 'Merhaba! Buraya oturabilir miyim?', pron: 'mer-ha-BA bu-ra-YA o-tu-ra-bi-LİR mi-yim', ar: 'مرحباً! هل يمكنني الجلوس هنا؟', ku: 'سڵاو! دەتوانم لێرە دابنیشم؟' },
          { speaker: 'Karwan', tr: 'Tabii, buyurun.', pron: 'ta-Bİ-i bu-yu-RUN', ar: 'بالتأكيد، تفضّل.', ku: 'بێگومان، فەرموو.' },
          { speaker: 'Deniz', tr: 'Ben Deniz. Sen de yeni misin?', pron: 'BEN de-NİZ SEN de ye-Nİ mi-sin', ar: 'أنا دينيز. وأنت أيضاً جديد؟', ku: 'من دەنیزم. تۆش نوێیت؟' },
          { speaker: 'Karwan', tr: 'Evet, ben Karwan. Bu benim ilk haftam.', pron: 'e-VET BEN kar-VAN BU be-NİM İLK haf-TAM', ar: 'نعم، أنا كاروان. هذا أسبوعي الأول.', ku: 'بەڵێ، من کاروانم. ئەمە یەکەم هەفتەمە.' },
          { speaker: 'Deniz', tr: 'Hoş geldin! Nerelisin?', pron: 'HOŞ gel-DİN ne-re-li-SİN', ar: 'أهلاً بك! من أين أنت؟', ku: 'بەخێربێیت! خەڵکی کوێیت؟' },
          { speaker: 'Karwan', tr: 'Erbil’denim, Irak’tan. Türkçeyi yeni öğreniyorum.', pron: 'er-BİL-de-nim ı-RAK-tan türk-çe-Yİ ye-Nİ öö-re-ni-YO-rum', ar: 'أنا من أربيل، من العراق. أتعلّم التركية حديثاً.', ku: 'خەڵکی هەولێرم، لە عێراقەوە. تازە فێری تورکی دەبم.' },
          { speaker: 'Deniz', tr: 'Çok güzel konuşuyorsun! Ne okuyorsun?', pron: 'ÇOK gü-ZEL ko-nu-şu-YOR-sun NE o-ku-yor-sun', ar: 'تتحدّث بشكل جميل جداً! ماذا تدرس؟', ku: 'زۆر جوان قسە دەکەیت! چی دەخوێنیت؟' },
          { speaker: 'Karwan', tr: 'Mühendislik. Sen?', pron: 'mü-hen-dis-LİK SEN', ar: 'الهندسة. وأنت؟', ku: 'ئەندازیاری. تۆ؟' },
          { speaker: 'Deniz', tr: 'Ben tıp okuyorum. Tanıştığımıza memnun oldum.', pron: 'BEN TIP o-ku-YO-rum ta-nış-tı-ı-mı-ZA mem-NUN ol-dum', ar: 'أنا أدرس الطب. سررت بالتعرّف عليك.', ku: 'من پزیشکی دەخوێنم. خۆشحاڵم بە ناسینت.' },
          { speaker: 'Karwan', tr: 'Ben de. Görüşürüz!', pron: 'BEN de gö-rü-şü-RÜZ', ar: 'وأنا أيضاً. إلى اللقاء!', ku: 'منیش. دیدارمان!' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Dikkat edilecek noktalar',
        body: b(
          'لاحظ ثلاثة أشياء: (1) استخدم دينيز صيغة sen مع كاروان لأنهما في العمر نفسه وطلاب. (2) "Nerelisin?" أدقّ من "Nereden geliyorsun?" للسؤال عن الأصل. (3) رد "Ben de" اختصار لطيف لـ "أنا أيضاً".',
          'سەرنج بدە سێ شت: (١) دەنیز شێوەی sen ی بەکارهێنا چونکە هاوتەمەنن و قوتابین. (٢) "Nerelisin?" وردترە لە "Nereden geliyorsun?" بۆ پرسیاری ڕەچەڵەک. (٣) وەڵامی "Ben de" کورتکراوەیەکی جوانە بۆ "منیش".',
        ),
      },
    ],
    exercises: [
      mcq(
        b('كيف تسأل عن أصل شخص؟', 'چۆن پرسیاری ڕەچەڵەکی کەسێک دەکەیت؟'),
        ['Nereye gidiyorsun?', 'Nerelisin?', 'Neredesin?', 'Ne yapıyorsun?'],
        1,
        { turkishOptions: true },
      ),
      translate('tr-ar', 'Bu benim ilk haftam.', ['هذا أسبوعي الأول.', 'هذه سنتي الأولى.', 'هذا يومي الأول.', 'أنا هنا منذ أسبوع.'], 0),
      order(
        b('رتّب: هل يمكنني الجلوس هنا؟', 'ڕێک بخە: دەتوانم لێرە دابنیشم؟'),
        'Buraya oturabilir miyim',
        'هل يمكنني الجلوس هنا؟',
        'دەتوانم لێرە دابنیشم؟',
        { pron: 'bu-ra-YA o-tu-ra-bi-LİR mi-yim' },
      ),
      speak('Merhaba, ben Karwan. Erbil’denim ve Türkçe öğreniyorum.', 'mer-ha-BA BEN kar-VAN er-BİL-de-nim ve türk-ÇE öö-re-ni-YO-rum', 'مرحباً، أنا كاروان. أنا من أربيل وأتعلّم التركية.', 'سڵاو، من کاروانم. خەڵکی هەولێرم و فێری تورکی دەبم.'),
    ],
  },

  {
    id: 'conv-a2-doctor',
    level: 'a2',
    kind: 'conversation',
    order: 40,
    minutes: 18,
    title: 'Doktorda',
    titleI18n: b('عند الطبيب', 'لای پزیشک'),
    objective: b('أن تصف أعراضك وتفهم تعليمات الطبيب.', 'ئەوەی نیشانەکانت وەسف بکەیت و ڕێنمایی پزیشک تێبگەیت.'),
    tags: ['dialogue', 'health'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Muayenehanede',
        lines: [
          { speaker: 'Doktor', tr: 'Buyurun, geçmiş olsun. Şikâyetiniz nedir?', pron: 'bu-yu-RUN geç-MİŞ ol-SUN şi-kâ-ye-ti-NİZ ne-DİR', ar: 'تفضّل، سلامتك. ما شكواك؟', ku: 'فەرموو، چاک ببیتەوە. گلەییەکەت چییە؟' },
          { speaker: 'Hasta', tr: 'Üç gündür başım ağrıyor ve ateşim var.', pron: 'ÜÇ gün-DÜR ba-ŞIM a-rı-YOR ve a-te-ŞİM VAR', ar: 'منذ ثلاثة أيام يؤلمني رأسي ولديّ حرارة.', ku: 'سێ ڕۆژە سەرم ئازار دەدات و تام هەیە.' },
          { speaker: 'Doktor', tr: 'Öksürük veya boğaz ağrınız var mı?', pron: 'ök-sü-RÜK ve-YA bo-AZ a-rı-NIZ var MI', ar: 'هل لديك سعال أو ألم في الحلق؟', ku: 'کۆکە یان ئازاری گەروو هەیە؟' },
          { speaker: 'Hasta', tr: 'Evet, biraz öksürüyorum. Boğazım da ağrıyor.', pron: 'e-VET bi-RAZ ök-sü-rü-YO-rum bo-a-ZIM da a-rı-YOR', ar: 'نعم، أسعل قليلاً. وحلقي يؤلمني أيضاً.', ku: 'بەڵێ، کەمێک کۆکەم هەیە. گەروومیش ئازار دەدات.' },
          { speaker: 'Doktor', tr: 'Ağzınızı açın lütfen... Grip olmuşsunuz.', pron: 'a-zı-nı-ZI a-ÇIN lüt-FEN GRİP ol-muş-su-nuz', ar: 'افتح فمك من فضلك... يبدو أنك أصبت بالإنفلونزا.', ku: 'تکایە دەمت بکەرەوە... وا دیارە تووشی هەڵامەت بوویت.' },
          { speaker: 'Hasta', tr: 'Ciddi mi doktor bey?', pron: 'djid-Dİ mi dok-TOR BEY', ar: 'هل هي خطيرة يا دكتور؟', ku: 'جددییە دکتۆر؟' },
          { speaker: 'Doktor', tr: 'Hayır, endişelenmeyin. Size antibiyotik yazıyorum.', pron: 'ha-YIR en-di-şe-len-me-YİN si-ZE an-ti-bi-yo-TİK ya-zı-YO-rum', ar: 'لا، لا تقلق. سأكتب لك مضاداً حيوياً.', ku: 'نەخێر، نیگەران مەبە. دژەژیانەوەیەکت بۆ دەنووسم.' },
          { speaker: 'Doktor', tr: 'Günde iki kez, yemekten sonra alın. Bol su için ve dinlenin.', pron: 'gün-DE i-Kİ KEZ ye-mek-TEN son-RA a-LIN BOL SU i-ÇİN ve din-le-NİN', ar: 'مرتين يومياً بعد الطعام. اشرب ماءً كثيراً واسترح.', ku: 'ڕۆژی دوو جار، دوای نان بیخۆ. ئاوی زۆر بخۆرەوە و پشوو بدە.' },
          { speaker: 'Hasta', tr: 'Anladım. Çok teşekkür ederim doktor bey.', pron: 'an-la-DIM ÇOK te-şek-KÜR e-de-rim dok-TOR BEY', ar: 'فهمت. شكراً جزيلاً يا دكتور.', ku: 'تێگەیشتم. زۆر سوپاس دکتۆر.' },
          { speaker: 'Doktor', tr: 'Geçmiş olsun. Bir hafta sonra kontrole gelin.', pron: 'geç-MİŞ ol-SUN bir haf-TA son-RA kon-tro-LE ge-LİN', ar: 'سلامتك. تعال للمراجعة بعد أسبوع.', ku: 'چاک ببیتەوە. دوای هەفتەیەک بۆ پشکنین وەرە.' },
        ],
      },
    ],
    exercises: [
      listening('Üç gündür başım ağrıyor.', [
        'منذ ثلاثة أيام يؤلمني رأسي.',
        'رأسي لا يؤلمني.',
        'سأذهب إلى الطبيب بعد ثلاثة أيام.',
      ], 0, 'ar'),
      mcq(
        b('ماذا يقول الطبيب في نهاية الزيارة؟', 'پزیشک لە کۆتایی سەردانەکەدا چی دەڵێت؟'),
        ['Afiyet olsun', 'Geçmiş olsun', 'Kolay gelsin', 'Hoş geldiniz'],
        1,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'لديّ حرارة.', ['Ateşim var.', 'Ateşim yok.', 'Ateş alıyorum.', 'Ateşliyim değil.'], 0),
      speak('Üç gündür başım ağrıyor ve ateşim var.', 'ÜÇ gün-DÜR ba-ŞIM a-rı-YOR ve a-te-ŞİM VAR', 'منذ ثلاثة أيام يؤلمني رأسي ولديّ حرارة.', 'سێ ڕۆژە سەرم ئازار دەدات و تام هەیە.'),
    ],
  },

  {
    id: 'conv-b1-apartment',
    level: 'b1',
    kind: 'conversation',
    order: 40,
    minutes: 20,
    title: 'Ev Kiralamak',
    titleI18n: b('استئجار شقة', 'بەکرێگرتنی ماڵ'),
    objective: b('أن تتفاوض على شروط الإيجار وتسأل عن التفاصيل.', 'ئەوەی لەسەر مەرجەکانی کرێ دانوستان بکەیت.'),
    tags: ['dialogue', 'housing'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Emlakçıda',
        lines: [
          { speaker: 'Emlakçı', tr: 'Hoş geldiniz. Nasıl bir ev arıyorsunuz?', pron: 'HOŞ gel-di-NİZ na-SIL bir EV a-rı-yor-su-nuz', ar: 'أهلاً بكم. ما نوع البيت الذي تبحثون عنه؟', ku: 'بەخێربێن. چ جۆرە ماڵێک دەگەڕێن؟' },
          { speaker: 'Kiracı', tr: 'İki odalı, eşyalı bir daire arıyorum. Üniversiteye yakın olsun.', pron: 'i-Kİ o-da-LI eş-ya-LI bir da-i-RE a-rı-YO-rum ü-ni-ver-si-te-YE ya-KIN ol-sun', ar: 'أبحث عن شقة بغرفتين مفروشة. أن تكون قريبة من الجامعة.', ku: 'شوقەیەکی دوو ژووری و کەلوپەلدار دەگەڕێم. با نزیک بێت لە زانکۆ.' },
          { speaker: 'Emlakçı', tr: 'Elimde tam size göre bir daire var. Üçüncü katta, asansörlü.', pron: 'e-lim-DE TAM si-ZE gö-RE bir da-i-RE VAR ü-çün-DJÜ kat-TA a-san-sör-LÜ', ar: 'لديّ شقة مناسبة لكم تماماً. في الطابق الثالث، مع مصعد.', ku: 'شوقەیەکم هەیە تەواو گونجاوە بۆتان. لە نهۆمی سێیەم، بە ئاسانسۆرەوە.' },
          { speaker: 'Kiracı', tr: 'Kirası ne kadar?', pron: 'ki-ra-SI ne ka-DAR', ar: 'كم إيجارها؟', ku: 'کرێکەی چەندە؟' },
          { speaker: 'Emlakçı', tr: 'On iki bin lira. Aidat ayrıca beş yüz lira.', pron: 'on i-Kİ BİN li-RA a-i-DAT ay-rı-DJA beş YÜZ li-RA', ar: 'اثنا عشر ألف ليرة. ورسوم الخدمات خمسمئة ليرة إضافية.', ku: 'دوازدە هەزار لیرە. کرێی خزمەتگوزاریش پێنج سەد لیرەی جیاوازە.' },
          { speaker: 'Kiracı', tr: 'Biraz yüksek geldi açıkçası. Pazarlık payı var mı?', pron: 'bi-RAZ yük-SEK gel-Dİ a-çık-ça-SI pa-zar-LIK pa-YI var MI', ar: 'بصراحة بدا لي مرتفعاً قليلاً. هل يوجد مجال للتفاوض؟', ku: 'ڕاستییەکەی کەمێک بەرز دەرکەوت. جێی بازاڕکردنی هەیە؟' },
          { speaker: 'Emlakçı', tr: 'Ev sahibiyle konuşabilirim. Peşin ödemede indirim yapabilir.', pron: 'EV sa-hi-biy-LE ko-nu-şa-bi-li-RİM pe-ŞİN ö-de-me-DE in-di-RİM ya-pa-bi-LİR', ar: 'يمكنني التحدّث مع صاحب البيت. قد يخصم في حالة الدفع المسبق.', ku: 'دەتوانم لەگەڵ خاوەن ماڵەکە قسە بکەم. لە پارەدانی پێشەکیدا لەوانەیە داشکاندن بکات.' },
          { speaker: 'Kiracı', tr: 'Depozito kaç aylık?', pron: 'de-po-zi-TO KAÇ ay-LIK', ar: 'كم شهراً التأمين؟', ku: 'دەپۆزیت چەند مانگە؟' },
          { speaker: 'Emlakçı', tr: 'İki aylık. Sözleşme bir yıllık olacak.', pron: 'i-Kİ ay-LIK söz-leş-ME bir yıl-LIK o-la-DJAK', ar: 'شهران. والعقد سيكون لسنة واحدة.', ku: 'دوو مانگ. گرێبەستەکەش یەک ساڵ دەبێت.' },
          { speaker: 'Kiracı', tr: 'Anlaştık. Yarın daireyi görebilir miyiz?', pron: 'an-laş-TIK ya-RIN da-i-re-Yİ gö-re-bi-LİR mi-yiz', ar: 'اتفقنا. هل يمكننا رؤية الشقة غداً؟', ku: 'ڕێککەوتین. سبەینێ دەتوانین شوقەکە ببینین؟' },
        ],
      },
    ],
    exercises: [
      mcq(
        b('ما معنى "Pazarlık payı var mı?"', 'واتای "Pazarlık payı var mı?" چییە؟'),
        ['هل يوجد سوق قريب؟', 'هل يوجد مجال للتفاوض على السعر؟', 'هل السعر نهائي؟', 'متى يوم السوق؟'],
        1,
      ),
      translate('tr-ar', 'Depozito iki aylık.', ['التأمين شهران.', 'الإيجار شهران.', 'العقد شهران.', 'التأمين سنتان.'], 0),
      mcq(
        b('كيف تقول "شقة مفروشة"؟', 'چۆن دەڵێیت "شوقەی کەلوپەلدار"؟'),
        ['eşyalı daire', 'eşyasız daire', 'boş daire', 'yeni daire'],
        0,
        { turkishOptions: true },
      ),
      speak('İki odalı, eşyalı bir daire arıyorum.', 'i-Kİ o-da-LI eş-ya-LI bir da-i-RE a-rı-YO-rum', 'أبحث عن شقة بغرفتين مفروشة.', 'شوقەیەکی دوو ژووری و کەلوپەلدار دەگەڕێم.'),
    ],
  },

  {
    id: 'conv-b2-interview',
    level: 'b2',
    kind: 'conversation',
    order: 40,
    minutes: 22,
    title: 'İş Görüşmesi',
    titleI18n: b('مقابلة عمل', 'چاوپێکەوتنی کار'),
    objective: b('أن تقدّم نفسك مهنياً وتجيب عن أسئلة المقابلة.', 'ئەوەی خۆت بە شێوەی پیشەیی بناسێنیت و وەڵامی پرسیارەکان بدەیتەوە.'),
    tags: ['dialogue', 'work'],
    blocks: [
      {
        type: 'dialogue',
        title: 'İnsan kaynaklarında',
        lines: [
          { speaker: 'İK', tr: 'Buyurun, oturun. Kendinizden kısaca bahseder misiniz?', pron: 'bu-yu-RUN o-tu-RUN ken-di-niz-DEN kı-sa-DJA bah-se-DER mi-si-niz', ar: 'تفضّل، اجلس. هل تحدّثنا عن نفسك باختصار؟', ku: 'فەرموو، دابنیشە. دەکرێت بە کورتی باسی خۆت بکەیت؟' },
          { speaker: 'Aday', tr: 'Tabii. Boğaziçi Üniversitesi Endüstri Mühendisliği mezunuyum. Dört yıldır lojistik sektöründe çalışıyorum.', pron: 'ta-Bİ-i bo-a-zi-Çİ ü-ni-ver-si-te-Sİ en-düst-Rİ mü-hen-dis-li-İ me-zu-nu-YUM DÖRT yıl-DIR lo-jis-TİK sek-tö-rün-DE ça-lı-şı-YO-rum', ar: 'بالتأكيد. أنا خرّيج هندسة صناعية من جامعة بوغازيتشي. أعمل في قطاع اللوجستيات منذ أربع سنوات.', ku: 'بێگومان. دەرچووی ئەندازیاری پیشەسازیم لە زانکۆی بۆغازیچی. چوار ساڵە لە کەرتی لۆجستیکدا کار دەکەم.' },
          { speaker: 'İK', tr: 'Neden şirketimizde çalışmak istiyorsunuz?', pron: 'ne-DEN şir-ke-ti-miz-DE ça-lış-MAK is-ti-yor-su-nuz', ar: 'لماذا تريد العمل في شركتنا؟', ku: 'بۆچی دەتەوێت لە کۆمپانیاکەماندا کار بکەیت؟' },
          { speaker: 'Aday', tr: 'Sürdürülebilir lojistik alanındaki çalışmalarınızı yakından takip ediyorum. Bu vizyona katkı sağlamak isterim.', pron: 'sür-dü-rü-le-bi-LİR lo-jis-TİK a-la-nın-da-Kİ ça-lış-ma-la-rı-nı-ZI ya-kın-DAN ta-KİP e-di-yo-rum BU viz-yo-NA kat-KI sa-la-MAK is-te-rim', ar: 'أتابع عن كثب أعمالكم في مجال اللوجستيات المستدامة. أودّ الإسهام في هذه الرؤية.', ku: 'کارەکانتان لە بواری لۆجستیکی بەردەواندا بە وردی شوێن دەکەوم. دەمەوێت بەشداری لەم دیدەدا بکەم.' },
          { speaker: 'İK', tr: 'En büyük zayıf yönünüz nedir sizce?', pron: 'EN bü-YÜK za-YIF yö-nü-NÜZ ne-DİR siz-DJE', ar: 'ما أكبر نقاط ضعفك برأيك؟', ku: 'بە بۆچوونی خۆت گەورەترین لاوازیت چییە؟' },
          { speaker: 'Aday', tr: 'Detaylara fazla takılabiliyorum. Bunu fark ettim ve zaman yönetimi konusunda kendimi geliştirmeye çalışıyorum.', pron: 'de-tay-la-RA faz-LA ta-kı-la-bi-li-YO-rum bu-NU FARK et-TİM ve za-MAN yö-ne-ti-Mİ ko-nu-sun-DA ken-di-Mİ ge-liş-tir-me-YE ça-lı-şı-YO-rum', ar: 'قد أتوقّف عند التفاصيل أكثر من اللازم. لاحظت هذا وأحاول تطوير نفسي في إدارة الوقت.', ku: 'لەوانەیە زیاتر لە پێویست لە وردەکارییەکان بوەستم. ئەمەم بەدی کرد و هەوڵ دەدەم لە بەڕێوەبردنی کاتدا خۆم پەرەپێبدەم.' },
          { speaker: 'İK', tr: 'Maaş beklentiniz nedir?', pron: 'ma-AŞ bek-len-ti-NİZ ne-DİR', ar: 'ما توقّعاتك للراتب؟', ku: 'چاوەڕوانیت لە مووچە چییە؟' },
          { speaker: 'Aday', tr: 'Sektör ortalamasını ve deneyimimi göz önünde bulundurarak makul bir rakam üzerinde anlaşabiliriz.', pron: 'sek-TÖR or-ta-la-ma-sı-NI ve de-ne-yi-mi-Mİ GÖZ ö-nün-DE bu-lun-du-ra-RAK ma-KUL bir ra-KAM ü-ze-rin-DE an-la-şa-bi-li-RİZ', ar: 'يمكننا الاتفاق على رقم معقول آخذين في الاعتبار متوسّط القطاع وخبرتي.', ku: 'دەتوانین لەسەر ژمارەیەکی گونجاو ڕێک بکەوین بە لەبەرچاوگرتنی ناوەندی کەرتەکە و ئەزموونەکەم.' },
          { speaker: 'İK', tr: 'Teşekkürler. Bir hafta içinde size dönüş yapacağız.', pron: 'te-şek-kür-LER bir haf-TA i-çin-DE si-ZE dö-NÜŞ ya-pa-dja-IZ', ar: 'شكراً. سنعود إليكم خلال أسبوع.', ku: 'سوپاس. لە ماوەی هەفتەیەکدا وەڵامتان دەدەینەوە.' },
        ],
      },
    ],
    exercises: [
      mcq(
        b('ما أفضل ردّ على سؤال نقاط الضعف؟', 'باشترین وەڵامی پرسیاری لاوازییەکان چییە؟'),
        [
          'Zayıf yönüm yok.',
          'Detaylara fazla takılabiliyorum ama üzerinde çalışıyorum.',
          'Çok tembelim.',
          'Bilmiyorum.',
        ],
        1,
        { turkishOptions: true, explain: b('اذكر ضعفاً حقيقياً واذكر كيف تعالجه.', 'لاوازییەکی ڕاستەقینە بڵێ و بڵێ چۆن چارەسەری دەکەیت.') },
      ),
      translate('tr-ar', 'Bir hafta içinde size dönüş yapacağız.', [
        'سنعود إليكم خلال أسبوع.',
        'عدنا إليكم منذ أسبوع.',
        'ستأتون بعد أسبوع.',
        'الوظيفة تبدأ بعد أسبوع.',
      ], 0),
      speak('Sürdürülebilir lojistik alanındaki çalışmalarınıza katkı sağlamak isterim.', 'sür-dü-rü-le-bi-LİR lo-jis-TİK a-la-nın-da-Kİ ça-lış-ma-la-rı-nı-ZA kat-KI sa-la-MAK is-te-rim', 'أودّ الإسهام في أعمالكم بمجال اللوجستيات المستدامة.', 'دەمەوێت بەشداری لە کارەکانتان بکەم لە بواری لۆجستیکی بەردەواندا.'),
    ],
  },

  {
    id: 'conv-c1-debate',
    level: 'c1',
    kind: 'conversation',
    order: 40,
    minutes: 24,
    title: 'Panel Tartışması',
    titleI18n: b('نقاش في ندوة', 'گفتوگۆ لە پانێلدا'),
    objective: b('أن تشارك في نقاش فكري وتردّ على حجّة بحجّة.', 'ئەوەی بەشداری گفتوگۆیەکی بیری بکەیت و بەڵگە بە بەڵگە وەڵام بدەیتەوە.'),
    tags: ['dialogue', 'academic', 'debate'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Dil ve kimlik paneli',
        lines: [
          { speaker: 'Moderatör', tr: 'Hocam, çok dilli ortamlarda büyüyen çocukların kimlik gelişimi hakkında ne düşünüyorsunuz?', pron: 'ho-DJAM ÇOK dil-Lİ or-tam-lar-DA bü-yü-YEN ço-djuk-la-RIN kim-LİK ge-li-şi-Mİ hak-kın-DA NE dü-şü-nü-yor-su-nuz', ar: 'أستاذي، ما رأيك في تطوّر هوية الأطفال الذين ينشؤون في بيئات متعدّدة اللغات؟', ku: 'مامۆستا، بۆچوونت چییە دەربارەی گەشەی ناسنامەی ئەو منداڵانەی لە ژینگەی فرەزماندا گەورە دەبن؟' },
          { speaker: 'Uzman A', tr: 'Alanyazın, çok dilliliğin bilişsel esnekliği artırdığını ortaya koyuyor. Ne var ki bu, kimlik karmaşası riskini tümüyle ortadan kaldırmıyor.', pron: 'a-lan-ya-ZIN ÇOK dil-li-li-İN bi-liş-SEL es-nek-li-İ ar-tır-dı-ı-NI or-ta-YA ko-yu-YOR NE VAR Kİ BU kim-LİK kar-ma-şa-SI ris-ki-Nİ tü-müy-LE or-ta-DAN kal-dır-mı-YOR', ar: 'تُظهر الأدبيات أن تعدّد اللغات يزيد المرونة المعرفية. غير أن هذا لا يلغي تماماً خطر ارتباك الهوية.', ku: 'ئەدەبیات دەریدەخات کە فرەزمانی نەرمی مێشکی زیاد دەکات. بەڵام ئەمە بە تەواوی مەترسی ئاڵۆزی ناسنامە لانابات.' },
          { speaker: 'Uzman B', tr: 'Bu noktada size katılmakla birlikte, "karmaşa" kavramının kendisini sorgulamamız gerektiğini düşünüyorum.', pron: 'BU nok-ta-DA si-ZE ka-tıl-mak-LA bir-lik-TE kar-ma-ŞA kav-ra-mı-NIN ken-di-si-Nİ sor-gu-la-ma-MIZ ge-rek-ti-i-Nİ dü-şü-nü-yo-rum', ar: 'مع أنني أتّفق معك في هذه النقطة، أرى أن علينا مساءلة مفهوم "الارتباك" نفسه.', ku: 'لەگەڵ ئەوەی لەم خاڵەدا هاوڕام لەگەڵت، پێم وایە دەبێت خودی چەمکی "ئاڵۆزی" بخەینە ژێر پرسیارەوە.' },
          { speaker: 'Uzman A', tr: 'Nasıl yani? Biraz açar mısınız?', pron: 'na-SIL ya-Nİ bi-RAZ a-ÇAR mı-sı-nız', ar: 'كيف تعني؟ هل توضّح قليلاً؟', ku: 'چۆن واتە؟ کەمێک ڕوونی دەکەیتەوە؟' },
          { speaker: 'Uzman B', tr: 'Tek dilli kimliği norm kabul ettiğimizde çok dilliliği zorunlu olarak sapma gibi okuyoruz. Oysa dünya nüfusunun çoğunluğu çok dillidir.', pron: 'TEK dil-Lİ kim-li-İ NORM ka-BUL et-ti-i-miz-DE ÇOK dil-li-li-İ zo-run-LU o-la-RAK sap-MA gi-Bİ o-ku-YO-ruz oy-SA dün-YA nü-fu-su-NUN ço-un-lu-U ÇOK dil-li-DİR', ar: 'حين نعتبر الهوية أحادية اللغة معياراً، نقرأ تعدّد اللغات حتماً كانحراف. مع أن غالبية سكان العالم متعدّدو اللغات.', ku: 'کاتێک ناسنامەی تاکزمانی وەک نۆرم وەردەگرین، بەناچاری فرەزمانی وەک لادان دەخوێنینەوە. لە کاتێکدا زۆرینەی دانیشتووانی جیهان فرەزمانن.' },
          { speaker: 'Moderatör', tr: 'İlginç bir çerçeveleme. Peki bu, eğitim politikaları açısından ne anlama geliyor?', pron: 'il-GİNÇ bir çer-çe-ve-le-ME pe-Kİ BU e-i-TİM po-li-ti-ka-la-RI a-çı-sın-DAN NE an-la-MA ge-li-YOR', ar: 'تأطير مثير للاهتمام. وماذا يعني هذا من زاوية السياسات التعليمية؟', ku: 'چوارچێوەیەکی سەرنجڕاکێش. باشە ئەمە لە ڕووی سیاسەتی پەروەردەوە چ واتایەکی هەیە؟' },
          { speaker: 'Uzman B', tr: 'Ana dilin okulda bastırılmaması gerektiği anlamına geliyor. Bastırıldığında ikinci dilin edinimi de zayıflıyor.', pron: 'a-NA di-LİN o-kul-DA bas-tı-rıl-ma-ma-SI ge-rek-ti-İ an-la-mı-NA ge-li-YOR bas-tı-rıl-dı-ın-DA i-kin-DJİ di-LİN e-di-ni-Mİ de za-yıf-lı-YOR', ar: 'يعني أنه لا ينبغي قمع اللغة الأم في المدرسة. فحين تُقمع يضعف اكتساب اللغة الثانية أيضاً.', ku: 'واتای ئەوەیە کە نابێت زمانی دایک لە قوتابخانەدا بسڕدرێتەوە. کاتێک دەسڕدرێتەوە، وەرگرتنی زمانی دووەمیش لاواز دەبێت.' },
        ],
      },
    ],
    exercises: [
      mcq(
        b('ما وظيفة عبارة "katılmakla birlikte"؟', 'ئەرکی دەستەواژەی "katılmakla birlikte" چییە؟'),
        ['رفض تام', 'اتفاق مع اعتراض جزئي', 'تأكيد كامل', 'تغيير الموضوع'],
        1,
      ),
      translate('tr-ar', 'Oysa dünya nüfusunun çoğunluğu çok dillidir.', [
        'مع أن غالبية سكان العالم متعدّدو اللغات.',
        'أقلية من سكان العالم متعدّدو اللغات.',
        'سكان العالم أحاديو اللغة.',
        'العالم يتعلّم لغات كثيرة.',
      ], 0),
      order(
        b('رتّب: هل توضّح قليلاً؟', 'ڕێک بخە: کەمێک ڕوونی دەکەیتەوە؟'),
        'Biraz açar mısınız',
        'هل توضّح قليلاً؟',
        'کەمێک ڕوونی دەکەیتەوە؟',
        { pron: 'bi-RAZ a-ÇAR mı-sı-nız' },
      ),
      speak('Bu noktada size katılmakla birlikte, kavramın kendisini sorgulamamız gerektiğini düşünüyorum.', 'BU nok-ta-DA si-ZE ka-tıl-mak-LA bir-lik-TE kav-ra-MIN ken-di-si-Nİ sor-gu-la-ma-MIZ ge-rek-ti-i-Nİ dü-şü-nü-yo-rum', 'مع أنني أتّفق معك في هذه النقطة، أرى أن علينا مساءلة المفهوم نفسه.', 'لەگەڵ ئەوەی لەم خاڵەدا هاوڕام، پێم وایە دەبێت خودی چەمکەکە بخەینە ژێر پرسیارەوە.'),
    ],
  },
];
