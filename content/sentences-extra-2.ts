import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Sentence packs, third pass.
 *
 * Six more functions, chosen for the gaps the last pass left: the phone, the
 * bank and the landlord at A2–B1; disagreeing without giving offence at B2;
 * news register at C1; and the moves of a written argument at C1+.
 *
 * Every sentence is one a student would actually say or read. Nothing here is
 * a grammar demonstration with the vocabulary swapped out.
 */
export const EXTRA_SENTENCES_2: SentencePack[] = [
  /* ================================ A2 ================================ */
  {
    id: 'x2-a2-phone',
    level: 'a2',
    order: 42,
    title: 'Telefonda',
    titleI18n: b('على الهاتف', 'لە تەلەفۆندا'),
    focus: b(
      'المكالمة أصعب من المواجهة: لا وجه ولا إشارات، والكلمات وحدها.',
      'پەیوەندی تەلەفۆنی لە ڕووبەڕوو سەختترە: نە ڕوو هەیە نە ئاماژە، تەنها وشە.',
    ),
    sentences: [
      p('Alo, kimle görüşüyorum?', 'a-LO kim-LE gö-rü-şü-yo-RUM', 'ألو، مع من أتحدّث؟', 'ئەلۆ، لەگەڵ کێ قسە دەکەم؟'),
      p('Ben Ali, Ahmet Bey’le görüşebilir miyim?', 'BEN a-Lİ ah-MET bey-LE gö-rü-şe-bi-LİR mi-yim', 'أنا علي، هل يمكنني التحدّث مع السيد أحمد؟', 'من عەلیم، دەتوانم لەگەڵ بەڕێز ئەحمەد قسە بکەم؟'),
      p('Şu an müsait değil, mesaj bırakmak ister misiniz?', 'ŞU an mü-sa-İT de-ĞİL me-SAJ bı-rak-MAK is-TER mi-si-niz', 'ليس متاحاً الآن، أتريد ترك رسالة؟', 'ئێستا ئامادە نییە، دەتەوێت نامەیەک بەجێبهێڵیت؟'),
      p('Sesiniz iyi gelmiyor, tekrar eder misiniz?', 'se-si-NİZ i-Yİ gel-mi-YOR tek-RAR e-DER mi-si-niz', 'صوتكم غير واضح، هل تكرّر من فضلك؟', 'دەنگتان باش نایەت، دووبارەی دەکەیتەوە؟'),
      p('Yanlış numara, özür dilerim.', 'yan-LIŞ nu-ma-RA ö-ZÜR di-le-RİM', 'رقم خطأ، أعتذر.', 'ژمارە هەڵەیە، ببوورە.'),
      p('Sizi sonra arayabilir miyim?', 'si-Zİ son-RA a-ra-ya-bi-LİR mi-yim', 'هل يمكنني الاتصال بكم لاحقاً؟', 'دەتوانم دواتر پەیوەندیتان پێوە بکەم؟'),
      p('Hattı kapatmayın lütfen.', 'hat-TI ka-pat-ma-YIN lüt-FEN', 'لا تغلق الخطّ من فضلك.', 'تکایە هێڵەکە دامەخە.'),
      p('Görüşmek üzere, iyi günler.', 'gö-rüş-MEK ü-ze-RE i-Yİ gün-LER', 'إلى اللقاء، نهارك سعيد.', 'بۆ بینینەوە، ڕۆژباش.'),
    ],
  },
  {
    id: 'x2-a2-bank',
    level: 'a2',
    order: 43,
    title: 'Bankada',
    titleI18n: b('في البنك', 'لە بانکدا'),
    focus: b('أول ما يحتاجه طالب أجنبي بعد الوصول.', 'یەکەم شت کە خوێندکارێکی بیانی دوای گەیشتن پێویستی پێیەتی.'),
    sentences: [
      p('Hesap açtırmak istiyorum.', 'he-SAP aç-tır-MAK is-ti-yo-RUM', 'أريد فتح حساب.', 'دەمەوێت هەژمارێک بکەمەوە.'),
      p('Hangi belgeler gerekiyor?', 'han-Gİ bel-ge-LER ge-re-ki-YOR', 'ما الوثائق المطلوبة؟', 'چ بەڵگەنامەیەک پێویستە؟'),
      p('Pasaportum ve öğrenci belgem yanımda.', 'pa-sa-por-TUM ve öğ-ren-Cİ bel-GEM ya-nım-DA', 'جواز سفري ووثيقة الطالب معي.', 'پاسپۆرت و بەڵگەی خوێندکاریم لەگەڵمە.'),
      p('Kart ne zaman hazır olur?', 'KART NE za-man ha-ZIR o-LUR', 'متى تكون البطاقة جاهزة؟', 'کارتەکە کەی ئامادە دەبێت؟'),
      p('Para yatırmak istiyorum.', 'pa-RA ya-tır-MAK is-ti-yo-RUM', 'أريد إيداع مال.', 'دەمەوێت پارە دابنێم.'),
      p('Havale ücreti ne kadar?', 'ha-va-LE üc-re-Tİ NE ka-dar', 'كم رسم الحوالة؟', 'کرێی گواستنەوە چەندە؟'),
      p('Şifremi unuttum.', 'şif-re-Mİ u-nut-TUM', 'نسيت رقمي السري.', 'ژمارە نهێنییەکەم لەبیرکرد.'),
      p('Hesap özetimi alabilir miyim?', 'he-SAP ö-ze-ti-Mİ a-la-bi-LİR mi-yim', 'هل يمكنني الحصول على كشف الحساب؟', 'دەتوانم پوختەی هەژمارەکەم وەربگرم؟'),
    ],
  },

  /* ================================ B1 ================================ */
  {
    id: 'x2-b1-housing',
    level: 'b1',
    order: 42,
    title: 'Ev Kiralamak',
    titleI18n: b('استئجار بيت', 'بەکرێگرتنی ماڵ'),
    focus: b(
      'أصعب محادثة يخوضها طالب في سنته الأولى، وأكثرها كلفة إن أُسيء فهمها.',
      'سەختترین گفتوگۆی خوێندکار لە ساڵی یەکەمدا، و گرانترینیان ئەگەر هەڵە تێبگەیت.',
    ),
    sentences: [
      p('İlanı internette gördüm, hâlâ boş mu?', 'i-la-NI in-ter-net-TE gör-DÜM hâ-LÂ BOŞ mu', 'رأيت الإعلان على الإنترنت، هل ما زالت شاغرة؟', 'ڕاگەیەندراوەکەم لە ئینتەرنێت بینی، هێشتا بەتاڵە؟'),
      p('Kira ne kadar, aidat dahil mi?', 'ki-RA NE ka-dar a-i-DAT da-HİL mi', 'كم الإيجار، وهل رسوم الخدمات مشمولة؟', 'کرێکە چەندە، خەرجی خزمەتگوزاری تێدایە؟'),
      p('Depozito kaç aylık?', 'de-po-zi-TO KAÇ ay-LIK', 'كم شهراً مقدار التأمين؟', 'بارمتەکە چەند مانگە؟'),
      p('Faturalar kime ait?', 'fa-tu-ra-LAR ki-ME a-İT', 'على من الفواتير؟', 'پسووڵەکان هی کێن؟'),
      p('Eşyalı mı, eşyasız mı?', 'eş-ya-LI mı eş-ya-SIZ mı', 'مفروشة أم غير مفروشة؟', 'کەلوپەلی هەیە یان نا؟'),
      p('Sözleşme kaç yıllık olacak?', 'söz-leş-ME KAÇ yıl-LIK o-la-CAK', 'كم سنة مدّة العقد؟', 'گرێبەستەکە چەند ساڵ دەبێت؟'),
      p('Evi bir kez daha görebilir miyim?', 'e-Vİ BİR kez da-HA gö-re-bi-LİR mi-yim', 'هل يمكنني رؤية البيت مرة أخرى؟', 'دەتوانم جارێکی تر ماڵەکە ببینم؟'),
      p('Isıtma nasıl, doğalgaz mı?', 'ı-sıt-MA na-SIL do-ğal-GAZ mı', 'كيف التدفئة، هل بالغاز الطبيعي؟', 'گەرمکردنەوە چۆنە، بە گازی سروشتییە؟'),
      p('Komşular sakin mi?', 'kom-şu-LAR sa-KİN mi', 'هل الجيران هادئون؟', 'دراوسێکان هێمنن؟'),
      p('Düşünüp size dönebilir miyim?', 'dü-şü-NÜP si-ZE dö-ne-bi-LİR mi-yim', 'هل أفكّر وأعود إليكم؟', 'بیر بکەمەوە و وەڵامتان بدەمەوە؟'),
    ],
  },

  /* ================================ B2 ================================ */
  {
    id: 'x2-b2-disagree',
    level: 'b2',
    order: 41,
    title: 'Nazikçe Karşı Çıkma',
    titleI18n: b('الاعتراض بلباقة', 'ناڕەزایی دەربڕین بە ڕێزەوە'),
    focus: b(
      'أن تقول «لا» دون أن تغلق الباب — وهذا أصعب ما في اللغة الاجتماعية.',
      'ئەوەی «نەخێر» بڵێیت بەبێ داخستنی دەرگا — سەختترین بەشی زمانی کۆمەڵایەتی.',
    ),
    sentences: [
      p('Söylediğinizi anlıyorum, ama başka bir açıdan bakalım.', 'söy-le-di-ği-ni-Zİ an-lı-yo-RUM a-MA baş-KA bir a-çı-DAN ba-ka-LIM', 'أفهم ما تقولون، لكن لننظر من زاوية أخرى.', 'تێدەگەم چی دەڵێن، بەڵام با لە لایەکی ترەوە سەیر بکەین.'),
      p('Katılmakta zorlanıyorum, açıkçası.', 'ka-tıl-mak-TA zor-la-nı-yo-RUM a-çık-ça-SI', 'بصراحة أجد صعوبة في الموافقة.', 'بە ڕاشکاوی سەختە هاوڕا بم.'),
      p('Bu noktada size katılmıyorum ama sebebimi açıklayayım.', 'BU nok-ta-DA si-ZE ka-tıl-mı-yo-RUM a-MA se-be-bi-Mİ a-çık-la-ya-YIM', 'لا أوافقكم هنا، لكن دعوني أوضّح السبب.', 'لەم خاڵەدا هاوڕا نیم، بەڵام با هۆکارەکەم ڕوون بکەمەوە.'),
      p('Belki de meseleye fazla dar bakıyoruz.', 'bel-Kİ de me-se-le-YE faz-LA DAR ba-kı-yo-RUZ', 'ربما ننظر إلى المسألة بضيق أفق.', 'لەوانەیە زۆر بە تەسکی سەیری بابەتەکە بکەین.'),
      p('Haklı olabilirsiniz, yine de bir endişem var.', 'hak-LI o-la-bi-lir-si-NİZ yi-NE de bir en-di-ŞEM var', 'قد تكونون محقّين، ومع ذلك لديّ قلق.', 'لەوانەیە ڕاست بکەن، لەگەڵ ئەوەشدا نیگەرانییەکم هەیە.'),
      p('Prensipte hemfikirim, uygulamada değil.', 'pren-sip-TE hem-fi-ki-RİM uy-gu-la-ma-DA de-ĞİL', 'أتّفق مبدئياً لا تطبيقياً.', 'لە بنەمادا هاوڕام، لە جێبەجێکردندا نا.'),
      p('Bunu yeniden düşünmemizde fayda var.', 'bu-NU ye-ni-DEN dü-şün-me-miz-DE fay-DA var', 'من المفيد أن نعيد التفكير في هذا.', 'سوودی هەیە ئەمە دووبارە بیری لێبکەینەوە.'),
      p('Kusura bakmayın ama rakamlar bunu desteklemiyor.', 'ku-su-RA bak-ma-YIN a-MA ra-kam-LAR bu-NU des-tek-le-mi-YOR', 'اعذروني لكن الأرقام لا تدعم هذا.', 'ببوورن بەڵام ژمارەکان پشتگیری ئەمە ناکەن.'),
    ],
  },

  /* ================================ C1 ================================ */
  {
    id: 'x2-c1-news',
    level: 'c1',
    order: 41,
    title: 'Haber Dili',
    titleI18n: b('لغة الأخبار', 'زمانی هەواڵ'),
    focus: b(
      'الصحافة التركية تُكثر من المبني للمجهول والصيغ المنقولة — من قرأها اعتاد الرسمي كلّه.',
      'ڕۆژنامەگەری تورکی زۆر ڕەنگی ناچالاک و شێوەی گوازراوە بەکاردەهێنێت.',
    ),
    sentences: [
      p('Bakanlık konuya ilişkin açıklama yaptı.', 'ba-kan-LIK ko-nu-YA i-liş-KİN a-çık-la-MA yap-TI', 'أصدرت الوزارة بياناً بشأن الموضوع.', 'وەزارەت ڕاگەیەندراوێکی سەبارەت بە بابەتەکە بڵاوکردەوە.'),
      p('Olayla ilgili soruşturma başlatıldı.', 'o-lay-LA il-gi-Lİ so-ruş-tur-MA baş-la-tıl-DI', 'فُتح تحقيق بشأن الحادثة.', 'لێکۆڵینەوە دەربارەی ڕووداوەکە دەستپێکرا.'),
      p('Yetkililer, iddiaları doğrulamadı.', 'yet-ki-li-LER id-di-a-la-RI doğ-ru-la-ma-DI', 'لم يؤكّد المسؤولون الادّعاءات.', 'بەرپرسان بانگەشەکانیان پشتڕاست نەکردەوە.'),
      p('Kaynaklara göre görüşmeler sürüyor.', 'kay-nak-la-RA gö-RE gö-rüş-me-LER sü-rü-YOR', 'بحسب المصادر، المباحثات مستمرّة.', 'بەپێی سەرچاوەکان، دانوستانەکان بەردەوامن.'),
      p('Karar, yürürlüğe girmek üzere.', 'ka-RAR yü-rür-lü-ĞE gir-MEK ü-ze-RE', 'القرار على وشك دخول حيّز التنفيذ.', 'بڕیارەکە خەریکە جێبەجێ دەکرێت.'),
      p('Uzmanlar, önlemlerin yetersiz kaldığı görüşünde.', 'uz-man-LAR ön-lem-le-RİN ye-ter-SİZ kal-dı-ĞI gö-rü-şün-DE', 'يرى الخبراء أن الإجراءات ظلّت غير كافية.', 'پسپۆڕان پێیانوایە ڕێوشوێنەکان بەس نەبوون.'),
      p('Söz konusu düzenleme, yıl sonunda değerlendirilecek.', 'SÖZ ko-nu-SU dü-zen-le-ME YIL so-nun-DA de-ğer-len-di-ri-le-CEK', 'سيُقيَّم التنظيم المعني في نهاية العام.', 'ڕێکخستنە باسکراوەکە لە کۆتایی ساڵدا هەڵدەسەنگێنرێت.'),
    ],
  },

  /* =============================== C1+ ================================ */
  {
    id: 'x2-c1plus-essay',
    level: 'c1plus',
    order: 41,
    title: 'Yazılı Argüman',
    titleI18n: b('بناء الحجّة كتابةً', 'بنیاتنانی بەڵگە بە نووسین'),
    focus: b(
      'حركات المقال: التمهيد، والتحفّظ، والاعتراف بالخصم، ثم الحسم.',
      'جووڵەکانی وتار: پێشەکی، پارێزکاری، دانپێدانان بە بەرامبەر، پاشان بڕیار.',
    ),
    sentences: [
      p('Bu yazının amacı, yaygın bir varsayımı sınamaktır.', 'BU ya-zı-NIN a-ma-CI yay-GIN bir var-sa-yı-MI sı-na-mak-TIR', 'غرض هذه المقالة اختبار افتراض شائع.', 'ئامانجی ئەم وتارە تاقیکردنەوەی گریمانەیەکی باوە.'),
      p('İlk bakışta makul görünen bu iddia, yakından incelendiğinde zayıflar.', 'İLK ba-kış-TA ma-KUL gö-rü-NEN BU id-di-A ya-kın-DAN in-ce-len-di-ğin-DE za-yıf-LAR', 'هذه الدعوى التي تبدو معقولة للوهلة الأولى تضعف عند الفحص الدقيق.', 'ئەم بانگەشەیە کە لە یەکەم سەیرکردندا لۆژیکی دیارە، بە وردی لێکۆڵینەوە لاواز دەبێت.'),
      p('Karşı görüşün en güçlü hâlini kabul etmek gerekir.', 'kar-ŞI gö-rü-ŞÜN EN güç-LÜ hâ-li-Nİ ka-BUL et-MEK ge-re-KİR', 'ينبغي التسليم بأقوى صور الرأي المخالف.', 'پێویستە بەهێزترین شێوەی بۆچوونی بەرامبەر قبووڵ بکرێت.'),
      p('Buna karşılık, elimizdeki veriler başka bir tabloya işaret ediyor.', 'bu-NA kar-şı-LIK e-li-miz-de-Kİ ve-ri-LER baş-KA bir tab-lo-YA i-şa-RET e-di-YOR', 'في المقابل، تشير بياناتنا إلى صورة أخرى.', 'لە بەرامبەردا، داتاکانمان ئاماژە بە وێنەیەکی تر دەکەن.'),
      p('Söz konusu ayrım, göründüğü kadar keskin değildir.', 'SÖZ ko-nu-SU ay-RIM gö-rün-dü-ĞÜ ka-DAR kes-KİN de-ğil-DİR', 'التمييز المعني ليس حادّاً كما يبدو.', 'ئەو جیاکردنەوەیە وەک ئەوەی دیارە توند نییە.'),
      p('Sonuç olarak, sorunun kendisi yeniden tanımlanmalıdır.', 'so-NUÇ o-la-RAK so-ru-NUN ken-di-Sİ ye-ni-DEN ta-nım-lan-ma-lı-DIR', 'وخلاصةً، ينبغي إعادة تعريف المشكلة نفسها.', 'لە ئەنجامدا، دەبێت خودی کێشەکە دووبارە پێناسە بکرێتەوە.'),
    ],
  },
];
