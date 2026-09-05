import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * The last set of sentence packs: arranging things, and arguing about them.
 *
 * What the other four files left uncovered:
 *
 *   - **Arranging.** Invitations, appointments, clarification, explaining that
 *     something has gone wrong. The social machinery of a week.
 *   - **University.** Turkish academic life has its own vocabulary of
 *     registration, credits, attendance and supervision.
 *   - **Contrast and concession.** `-e rağmen`, `-dığı hâlde`, `oysa`,
 *     `buna karşın` — four ways to say "although", each with its own shape.
 *   - **Argument.** Comparing alternatives, drawing a conclusion, correcting
 *     a false claim, and stating how sure you are. This is the C1 layer that
 *     separates reading an editorial from writing one.
 */
export const DISCOURSE_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 'd-a1-invite',
    level: 'a1',
    order: 160,
    title: 'Davet Etmek',
    titleI18n: b('الدعوة', 'بانگهێشتکردن'),
    focus: b(
      'الدعوة بصيغة «-elim» (لنفعل) وبصيغة السؤال — كلاهما ودّي.',
      'بانگهێشت بە شێوەی «-elim» و پرسیار.',
    ),
    sentences: [
      p('Bu akşam bize gelir misin?', 'BU ak-ŞAM bi-ZE ge-LİR mi-SİN', 'هل تأتي إلينا هذا المساء؟', 'ئەم ئێوارەیە دێیتە لای ئێمە؟'),
      p('Beraber kahve içelim mi?', 'be-ra-BER kah-VE i-çe-LİM mi', 'أنشرب قهوة معاً؟', 'پێکەوە قاوە بخۆینەوە؟'),
      p('Doğum günüme davetlisin.', 'do-ĞUM gü-nü-ME da-vet-li-SİN', 'أنت مدعوّ إلى عيد ميلادي.', 'بۆ ڕۆژی لەدایکبوونم بانگهێشتراویت.'),
      p('Saat kaçta buluşalım?', 'sa-AT kaç-TA bu-lu-şa-LIM', 'في أي ساعة نلتقي؟', 'کاتژمێر چەند یەکتر ببینین؟'),
      p('Nerede buluşuyoruz?', 'ne-re-DE bu-lu-şu-yo-RUZ', 'أين نلتقي؟', 'لە کوێ یەکتر دەبینین؟'),
      p('Memnuniyetle gelirim.', 'mem-nu-ni-yet-LE ge-li-RİM', 'آتي بكل سرور.', 'بە خۆشحاڵییەوە دێم.'),
      p('Bir arkadaşımı da getirebilir miyim?', 'bir ar-ka-da-şı-MI DA ge-ti-re-bi-LİR mi-YİM', 'هل أحضر صديقاً معي؟', 'دەتوانم هاوڕێیەکیشم بهێنم؟'),
      p('Yarına erteleyelim mi?', 'ya-rı-NA er-te-le-ye-LİM mi', 'أنؤجّلها إلى الغد؟', 'بۆ سبەینێ دوای بخەین؟'),
    ],
  },
  {
    id: 'd-a1-problem',
    level: 'a1',
    order: 161,
    title: 'Bir Sorun Var',
    titleI18n: b('هناك مشكلة', 'کێشەیەک هەیە'),
    focus: b(
      'الإخبار عن عطل: الشيء + الحالة، بأبسط بناء ممكن.',
      'ڕاگەیاندنی خراپبوون: شت + دۆخ.',
    ),
    sentences: [
      p('Bir sorun var.', 'bir so-RUN var', 'هناك مشكلة.', 'کێشەیەک هەیە.'),
      p('Telefonum çalışmıyor.', 'te-le-fo-NUM ça-lış-mı-YOR', 'هاتفي لا يعمل.', 'تەلەفۆنەکەم کار ناکات.'),
      p('Anahtarımı kaybettim.', 'a-nah-ta-rı-MI kay-bet-TİM', 'أضعت مفتاحي.', 'کلیلەکەم ون کرد.'),
      p('Kapı açılmıyor.', 'ka-PI a-çıl-mı-YOR', 'الباب لا يُفتح.', 'دەرگاکە ناکرێتەوە.'),
      p('Işık yanmıyor.', 'ı-ŞIK yan-mı-YOR', 'النور لا يضيء.', 'گڵۆپەکە داناگیرسێت.'),
      p('Su akmıyor.', 'SU ak-mı-YOR', 'الماء لا يجري.', 'ئاو نایەت.'),
      p('Ne yapmam gerekiyor?', 'NE yap-MAM ge-re-ki-YOR', 'ماذا عليّ أن أفعل؟', 'دەبێت چی بکەم؟'),
      p('Kime söylemeliyim?', 'ki-ME söy-le-me-li-YİM', 'لمن ينبغي أن أقول؟', 'دەبێت بە کێ بڵێم؟'),
    ],
  },
  /* ================================ A2 ================================ */
  {
    id: 'd-a2-arrange',
    level: 'a2',
    order: 162,
    title: 'Randevu Ayarlamak',
    titleI18n: b('ترتيب موعد', 'ڕێکخستنی کات'),
    focus: b(
      'الاقتراح والتعديل والتأكيد — ثلاث خطوات ثابتة في كل ترتيب موعد.',
      'پێشنیار، گۆڕین و دڵنیاکردنەوە.',
    ),
    sentences: [
      p('Salı günü uygun mu?', 'sa-LI gü-NÜ uy-GUN mu', 'هل الثلاثاء مناسب؟', 'ڕۆژی سێشەممە گونجاوە؟'),
      p('O gün müsait değilim.', 'O GÜN mü-sa-İT de-ği-LİM', 'لست متفرّغاً ذلك اليوم.', 'ئەو ڕۆژە بەردەست نیم.'),
      p('Perşembe daha iyi olur.', 'per-şem-BE da-HA i-Yİ o-LUR', 'الخميس أفضل.', 'پێنجشەممە باشترە.'),
      p('Sabah mı, öğleden sonra mı?', 'sa-BAH MI öğ-le-DEN son-RA MI', 'صباحاً أم بعد الظهر؟', 'بەیانی یان دوای نیوەڕۆ؟'),
      p('Ondan sonra bir işim var.', 'on-DAN son-RA bir i-ŞİM var', 'لديّ عمل بعد ذلك.', 'دوای ئەوە کارێکم هەیە.'),
      p('Yarım saat sürer mi?', 'ya-RIM sa-AT sü-RER mi', 'هل تستغرق نصف ساعة؟', 'نیو کاتژمێر دەخایەنێت؟'),
      p('Tamam, o zaman anlaştık.', 'ta-MAM O za-MAN an-laş-TIK', 'حسناً، إذاً اتّفقنا.', 'باشە، کەواتە ڕێککەوتین.'),
      p('Bir gün önceden hatırlatır mısın?', 'bir GÜN ön-ce-DEN ha-tır-la-TIR mı-SIN', 'هل تذكّرني قبلها بيوم؟', 'ڕۆژێک پێشتر بیرم دەخەیتەوە؟'),
    ],
  },
  {
    id: 'd-a2-restaurant',
    level: 'a2',
    order: 163,
    title: 'Sipariş Vermek',
    titleI18n: b('طلب الطعام', 'داواکردنی خواردن'),
    focus: b(
      'الطلب بصيغة «alayım» أو «-ebilir miyim» — والسؤال عن المكوّنات.',
      'داواکردن بە «alayım» یان «-ebilir miyim».',
    ),
    sentences: [
      p('Menüye bakabilir miyim?', 'me-nü-YE ba-ka-bi-LİR mi-YİM', 'هل أنظر إلى القائمة؟', 'دەتوانم سەیری مێنیوەکە بکەم؟'),
      p('Bugün ne var?', 'bu-GÜN NE var', 'ماذا يوجد اليوم؟', 'ئەمڕۆ چی هەیە؟'),
      p('Mercimek çorbası alayım.', 'mer-ci-MEK çor-ba-SI a-la-YIM', 'سآخذ شوربة عدس.', 'شۆربەی نیسک وەردەگرم.'),
      p('İçinde acı var mı?', 'i-çin-DE a-CI VAR mı', 'هل فيه حارّ؟', 'تیایدا تیژی هەیە؟'),
      p('Vejetaryen seçenek var mı?', 've-je-tar-YEN se-çe-NEK VAR mı', 'هل يوجد خيار نباتي؟', 'هەڵبژاردەی ڕووەکی هەیە؟'),
      p('Yanında salata olsun.', 'ya-nın-DA sa-la-TA ol-SUN', 'مع سلطة جانبية.', 'لەگەڵی زەڵاتەیەک بێت.'),
      p('Hesabı alabilir miyiz?', 'he-sa-BI a-la-bi-LİR mi-YİZ', 'هل نأخذ الحساب؟', 'دەتوانین حیسابەکە وەربگرین؟'),
      p('Çok lezzetliydi, ellerinize sağlık.', 'ÇOK lez-zet-liy-Dİ el-le-ri-ni-ZE sağ-LIK', 'كان لذيذاً جداً، سلمت أيديكم.', 'زۆر بەتام بوو، دەستتان خۆش بێت.'),
    ],
  },
  {
    id: 'd-a2-clarify',
    level: 'a2',
    order: 164,
    title: 'Anlamadığını Söylemek',
    titleI18n: b('طلب التوضيح', 'داوای ڕوونکردنەوە'),
    focus: b(
      'قول «لم أفهم» بأكثر من طريقة — مهارة أهمّ من كثير من القواعد.',
      'بە چەند شێوەیەک وتنی «تێنەگەیشتم».',
    ),
    sentences: [
      p('Ne demek istiyorsunuz?', 'NE de-MEK is-ti-yor-su-NUZ', 'ماذا تقصدون؟', 'مەبەستتان چییە؟'),
      p('Bu kelimenin anlamı ne?', 'BU ke-li-me-NİN an-la-MI ne', 'ما معنى هذه الكلمة؟', 'واتای ئەم وشەیە چییە؟'),
      p('Bir örnek verebilir misiniz?', 'bir ör-NEK ve-re-bi-LİR mi-si-NİZ', 'هل تعطون مثالاً؟', 'دەتوانن نموونەیەک بهێننەوە؟'),
      p('Yani şöyle mi anlamalıyım?', 'ya-Nİ şöy-LE Mİ an-la-ma-lı-YIM', 'أي هل أفهمها هكذا؟', 'واتە بەم شێوەیە تێبگەم؟'),
      p('Doğru anladıysam, evet diyorsunuz.', 'doğ-RU an-la-dıy-SAM e-VET di-yor-su-NUZ', 'إن فهمت صحيحاً، أنتم تقولون نعم.', 'ئەگەر ڕاست تێگەیشتبم، دەڵێن بەڵێ.'),
      p('Kusura bakmayın, dalmışım.', 'ku-su-RA bak-ma-YIN dal-mı-ŞIM', 'المعذرة، سرحت.', 'ببوورن، بیرم لای تر بوو.'),
      p('Biraz daha açar mısınız?', 'bi-RAZ da-HA a-ÇAR mı-sı-NIZ', 'هل توضّحون أكثر قليلاً؟', 'کەمێک زیاتر ڕوونی دەکەنەوە؟'),
      p('Şimdi anladım, teşekkürler.', 'şim-Dİ an-la-DIM te-şek-kür-LER', 'الآن فهمت، شكراً.', 'ئێستا تێگەیشتم، سوپاس.'),
    ],
  },
  /* ================================ B1 ================================ */
  {
    id: 'd-b1-university',
    level: 'b1',
    order: 165,
    title: 'Üniversitede',
    titleI18n: b('في الجامعة', 'لە زانکۆ'),
    focus: b(
      'مفردات الفصل الدراسي: kayıt, ders seçmek, devamsızlık, final.',
      'وشەی وەرزی خوێندن: kayıt، ders seçmek، devamsızlık.',
    ),
    sentences: [
      p('Kayıt yenileme ne zaman?', 'ka-YIT ye-ni-le-ME NE za-MAN', 'متى تجديد التسجيل؟', 'نوێکردنەوەی تۆمار کەیە؟'),
      p('Bu dönem beş ders seçtim.', 'BU dö-NEM BEŞ DERS seç-TİM', 'اخترت خمسة مقرّرات هذا الفصل.', 'ئەم وەرزە پێنج وانەم هەڵبژارد.'),
      p('Devamsızlıktan kalır mıyım?', 'de-vam-sız-lık-TAN ka-LIR mı-YIM', 'هل أرسب بسبب الغياب؟', 'بەهۆی نەهاتنەوە دەکەوم؟'),
      p('Final sınavı ne zaman açıklanacak?', 'fi-NAL sı-na-VI NE za-MAN a-çık-la-na-CAK', 'متى يُعلن موعد الامتحان النهائي؟', 'تاقیکردنەوەی کۆتایی کەی ڕادەگەیەنرێت؟'),
      p('Danışmanımla görüşmem gerekiyor.', 'da-nış-ma-nım-LA gö-rüş-MEM ge-re-ki-YOR', 'عليّ مقابلة مرشدي الأكاديمي.', 'پێویستە لەگەڵ ڕاوێژکارەکەمدا بدوێم.'),
      p('Ödev teslimi cuma günü.', 'ö-DEV tes-li-Mİ cu-MA gü-NÜ', 'تسليم الواجب يوم الجمعة.', 'ڕادەستکردنی ئەرک ڕۆژی هەینییە.'),
      p('Yurtta mı kalıyorsun?', 'yurt-TA MI ka-lı-yor-SUN', 'هل تسكن في السكن الجامعي؟', 'لە یانەدا دەمێنیتەوە؟'),
      p('Bölüm başkanına dilekçe verdim.', 'bö-LÜM baş-ka-nı-NA di-lek-ÇE ver-DİM', 'قدّمت عريضة لرئيس القسم.', 'داواکارییەکم بە سەرۆکی بەش دا.'),
    ],
  },
  {
    id: 'd-b1-contrast',
    level: 'b1',
    order: 166,
    title: 'Zıtlık ve Karşıtlık',
    titleI18n: b('التضادّ والمقابلة', 'دژایەتی و بەرامبەری'),
    focus: b(
      'أربع طرق للتضادّ: ama · fakat · oysa · buna karşın — من الأخفّ إلى الأرسم.',
      'چوار ڕێگای دژایەتی: ama · fakat · oysa · buna karşın.',
    ),
    sentences: [
      p('İstedim ama olmadı.', 'is-te-DİM a-MA ol-ma-DI', 'أردت لكن لم يحدث.', 'ویستم بەڵام نەبوو.'),
      p('Ucuz, fakat kalitesiz.', 'u-CUZ fa-KAT ka-li-te-SİZ', 'رخيص، لكنه رديء.', 'هەرزانە، بەڵام بێ کوالیتییە.'),
      p('Ben çalıştım, oysa o hiç çalışmadı.', 'BEN ça-lış-TIM oy-SA O HİÇ ça-lış-ma-DI', 'أنا ذاكرت، بينما هو لم يذاكر أبداً.', 'من خوێندم، بەڵام ئەو هیچی نەخوێند.'),
      p('Buna karşın sonuç değişmedi.', 'bu-NA kar-ŞIN so-NUÇ de-ğiş-me-Dİ', 'ومع ذلك لم تتغيّر النتيجة.', 'لەگەڵ ئەوەشدا ئەنجامەکە نەگۆڕا.'),
      p('Bir yandan haklı, öbür yandan değil.', 'bir yan-DAN hak-LI ö-BÜR yan-DAN de-ĞİL', 'من ناحية محقّ، ومن ناحية أخرى لا.', 'لەلایەکەوە ڕاستە، لەلایەکی ترەوە نا.'),
      p('Tam tersi oldu.', 'TAM ter-Sİ ol-DU', 'حدث العكس تماماً.', 'بە تەواوی پێچەوانەکەی ڕوویدا.'),
      p('Görünüşe rağmen zor bir iş.', 'gö-rü-nü-ŞE rağ-MEN ZOR bir İŞ', 'رغم المظهر، إنه عمل صعب.', 'سەرەڕای دیمەنەکەی، کارێکی قورسە.'),
      p('Yağmura rağmen dışarı çıktık.', 'yağ-mu-RA rağ-MEN dı-şa-RI çık-TIK', 'خرجنا رغم المطر.', 'سەرەڕای باران چووینە دەرەوە.'),
    ],
  },
  {
    id: 'd-b1-reason',
    level: 'b1',
    order: 167,
    title: 'Sebep ve Sonuç',
    titleI18n: b('السبب والنتيجة', 'هۆکار و ئەنجام'),
    focus: b(
      'خمس صيغ للسبب: çünkü · -dığı için · yüzünden · sayesinde · bu yüzden.',
      'پێنج شێوەی هۆکار: çünkü · -dığı için · yüzünden.',
    ),
    sentences: [
      p('Gelemedim çünkü işim vardı.', 'ge-le-me-DİM ÇÜN-kü i-ŞİM var-DI', 'لم أستطع المجيء لأن لديّ عملاً.', 'نەمتوانی بێم چونکە کارم هەبوو.'),
      p('Hasta olduğum için gelmedim.', 'has-TA ol-du-ĞUM i-ÇİN gel-me-DİM', 'لم آتِ لأنني كنت مريضاً.', 'لەبەر ئەوەی نەخۆش بووم نەهاتم.'),
      p('Trafik yüzünden geç kaldık.', 'tra-FİK yü-zün-DEN GEÇ kal-DIK', 'تأخّرنا بسبب المرور.', 'بەهۆی هاتوچۆوە دواکەوتین.'),
      p('Senin sayende başardım.', 'se-NİN sa-yen-DE ba-şar-DIM', 'نجحت بفضلك.', 'بەهۆی تۆوە سەرکەوتم.'),
      p('Yağmur yağdı, bu yüzden maç iptal oldu.', 'yağ-MUR yağ-DI BU yüz-DEN MAÇ ip-TAL ol-DU', 'نزل المطر، لذلك أُلغيت المباراة.', 'باران باری، بۆیە یارییەکە هەڵوەشێنرایەوە.'),
      p('Sonuç olarak kimse memnun kalmadı.', 'so-NUÇ o-la-RAK kim-SE mem-NUN kal-ma-DI', 'ونتيجةً لذلك لم يرضَ أحد.', 'لە ئەنجامدا کەس ڕازی نەبوو.'),
      p('Bu karar birçok soruna yol açtı.', 'BU ka-RAR bir-ÇOK so-ru-NA YOL aç-TI', 'أدّى هذا القرار إلى مشاكل كثيرة.', 'ئەم بڕیارە بووە هۆی کێشەی زۆر.'),
      p('⚠️ «sayesinde» olumlu, «yüzünden» olumsuzdur.', 'sa-ye-sin-DE o-lum-LU yü-zün-DEN o-lum-suz-DUR', '⚠️ «sayesinde» للإيجابي و«yüzünden» للسلبي.', '⚠️ «sayesinde» ئەرێنی و «yüzünden» نەرێنییە.'),
    ],
  },
  {
    id: 'd-b1-possibility',
    level: 'b1',
    order: 168,
    title: 'İhtimal ve Zorunluluk',
    titleI18n: b('الاحتمال والوجوب', 'ئەگەر و پێویستی'),
    focus: b(
      'التدرّج: olabilir (ممكن) · muhtemelen (غالباً) · kesin (مؤكّد) · zorunda (مضطرّ).',
      'پلەبەندی: olabilir · muhtemelen · kesin · zorunda.',
    ),
    sentences: [
      p('Yarın yağmur yağabilir.', 'ya-RIN yağ-MUR ya-ğa-bi-LİR', 'قد يمطر غداً.', 'سبەینێ لەوانەیە باران ببارێت.'),
      p('Muhtemelen gecikecek.', 'muh-te-me-LEN ge-ci-ke-CEK', 'غالباً سيتأخّر.', 'بەگومان دوادەکەوێت.'),
      p('Kesinlikle geleceğim.', 'ke-sin-lik-LE ge-le-ce-ĞİM', 'سآتي بالتأكيد.', 'بە دڵنیاییەوە دێم.'),
      p('Olabilir ama sanmıyorum.', 'o-la-bi-LİR a-MA san-mı-yo-RUM', 'ممكن لكنني لا أظنّ.', 'دەکرێت بەڵام وا نازانم.'),
      p('Bunu yapmak zorundayız.', 'bu-NU yap-MAK zo-run-da-YIZ', 'نحن مضطرّون لفعل هذا.', 'ناچارین ئەمە بکەین.'),
      p('Gitmesem de olur.', 'git-me-SEM DE o-LUR', 'لا بأس إن لم أذهب.', 'ئەگەر نەچمیش دەبێت.'),
      p('İmkânsız değil ama zor.', 'im-kân-SIZ de-ĞİL a-MA zor', 'ليس مستحيلاً لكنه صعب.', 'مەحاڵ نییە بەڵام قورسە.'),
      p('Belki de haklısın.', 'bel-Kİ DE hak-lı-SIN', 'ربّما تكون محقّاً.', 'لەوانەیە ڕاست بیت.'),
    ],
  },
  /* ================================ B2 ================================ */
  {
    id: 'd-b2-compare',
    level: 'b2',
    order: 169,
    title: 'Seçenekleri Karşılaştırmak',
    titleI18n: b('مقارنة البدائل', 'بەراوردی هەڵبژاردەکان'),
    focus: b(
      'لغة الموازنة: avantaj/dezavantaj, kıyasla, buna karşılık, tercih.',
      'زمانی بەراورد: avantaj/dezavantaj, kıyasla.',
    ),
    sentences: [
      p('İki seçeneği de değerlendirdik.', 'i-Kİ se-çe-ne-Ğİ DE de-ğer-len-dir-DİK', 'قيّمنا كلا الخيارين.', 'هەردوو هەڵبژاردەکەمان هەڵسەنگاند.'),
      p('İlkine kıyasla daha pahalı.', 'il-ki-NE kı-yas-LA da-HA pa-ha-LI', 'أغلى مقارنةً بالأول.', 'بەراورد بە یەکەمیان گرانترە.'),
      p('Bunun avantajı hız, dezavantajı maliyet.', 'bu-NUN a-van-ta-JI HIZ de-za-van-ta-JI ma-li-YET', 'ميزته السرعة وعيبه التكلفة.', 'سوودەکەی خێراییە و زیانەکەی تێچووە.'),
      p('Buna karşılık ikincisi daha güvenli.', 'bu-NA kar-şı-LIK i-kin-ci-Sİ da-HA gü-ven-Lİ', 'في المقابل، الثاني أكثر أماناً.', 'لە بەرامبەردا دووەمیان پارێزراوترە.'),
      p('Uzun vadede daha verimli olur.', 'u-ZUN va-de-DE da-HA ve-rim-Lİ o-LUR', 'يكون أكثر كفاءة على المدى الطويل.', 'لە درێژخایەندا کاراترە.'),
      p('Maliyet açısından ikisi de benzer.', 'ma-li-YET a-çı-sın-DAN i-ki-Sİ DE ben-ZER', 'من ناحية التكلفة كلاهما متشابه.', 'لە ڕووی تێچووەوە هەردووکیان وەکو یەکن.'),
      p('Bu koşullarda ilkini tercih ederim.', 'BU ko-şul-lar-DA il-ki-Nİ ter-CİH e-de-RİM', 'في هذه الظروف أفضّل الأول.', 'لەم بارودۆخەدا یەکەمیان هەڵدەبژێرم.'),
      p('Üçüncü bir yol da var.', 'ü-çün-CÜ bir YOL DA var', 'هناك طريق ثالث أيضاً.', 'ڕێگایەکی سێیەمیش هەیە.'),
    ],
  },
  {
    id: 'd-b2-conclude',
    level: 'b2',
    order: 170,
    title: 'Sonuca Varmak',
    titleI18n: b('استخلاص النتيجة', 'گەیشتن بە ئەنجام'),
    focus: b(
      'قوالب الخاتمة: sonuç olarak · dolayısıyla · demek ki · kısacası.',
      'قاڵبی کۆتایی: sonuç olarak · dolayısıyla · demek ki.',
    ),
    sentences: [
      p('Sonuç olarak üç bulgumuz var.', 'so-NUÇ o-la-RAK ÜÇ bul-gu-MUZ var', 'خلاصةً، لدينا ثلاث نتائج.', 'لە ئەنجامدا سێ دۆزینەوەمان هەیە.'),
      p('Dolayısıyla hipotez doğrulanmadı.', 'do-la-yı-sıy-LA hi-po-TEZ doğ-ru-lan-ma-DI', 'وبالتالي لم تتأكّد الفرضية.', 'کەواتە گریمانەکە پشتڕاست نەکرایەوە.'),
      p('Demek ki sorun başka yerde.', 'de-MEK Kİ so-RUN baş-KA yer-DE', 'إذاً المشكلة في مكان آخر.', 'واتە کێشەکە لە شوێنێکی ترە.'),
      p('Kısacası, veriler yeterli değil.', 'kı-sa-ca-SI ve-ri-LER ye-ter-Lİ de-ĞİL', 'باختصار، البيانات غير كافية.', 'بە کورتی، داتاکان بەس نین.'),
      p('Bu da bizi şu soruya götürüyor.', 'BU DA bi-Zİ ŞU so-ru-YA gö-tü-rü-YOR', 'وهذا يقودنا إلى السؤال التالي.', 'ئەمەش دەمانباتە سەر ئەم پرسیارە.'),
      p('Bulgular birbirini destekliyor.', 'bul-gu-LAR bir-bi-ri-Nİ des-tek-li-YOR', 'النتائج يدعم بعضها بعضاً.', 'دۆزینەوەکان پشتگیری یەکتر دەکەن.'),
      p('Bundan şu sonuç çıkarılabilir.', 'bun-DAN ŞU so-NUÇ çı-ka-rı-la-bi-LİR', 'يمكن استخلاص هذه النتيجة من ذلك.', 'لەمەوە ئەم ئەنجامە دەردەهێنرێت.'),
      p('İleri araştırmaya ihtiyaç var.', 'i-le-Rİ a-raş-tır-ma-YA ih-ti-YAÇ var', 'ثمّة حاجة إلى بحث إضافي.', 'پێویستی بە توێژینەوەی زیاتر هەیە.'),
    ],
  },
  {
    id: 'd-b2-correcting',
    level: 'b2',
    order: 171,
    title: 'Yanlış Bilgiyi Düzeltmek',
    titleI18n: b('تصحيح معلومة خاطئة', 'ڕاستکردنەوەی زانیاری هەڵە'),
    focus: b(
      'التصحيح المهذّب: لا تنفِ الشخص، انفِ المعلومة — «bilgi yanlış» لا «yanılıyorsun».',
      'ڕاستکردنەوە بە ڕەوشتەوە: زانیاری ڕەت بکەوە نەک کەسەکە.',
    ),
    sentences: [
      p('Bu bilgi maalesef doğru değil.', 'BU bil-Gİ ma-a-le-SEF doğ-RU de-ĞİL', 'هذه المعلومة للأسف غير صحيحة.', 'ئەم زانیارییە بەداخەوە ڕاست نییە.'),
      p('Kaynağı kontrol ettim, öyle demiyor.', 'kay-na-ĞI kon-TROL et-TİM öy-LE de-mi-YOR', 'راجعت المصدر، لا يقول ذلك.', 'سەرچاوەکەم پشکنی، وا ناڵێت.'),
      p('Sanırım bir karışıklık var.', 'sa-nı-RIM bir ka-rı-şık-LIK var', 'أظنّ أن هناك التباساً.', 'وابزانم تێکەڵییەک هەیە.'),
      p('Yaygın bir yanılgı bu.', 'yay-GIN bir ya-nıl-GI BU', 'هذه مغالطة شائعة.', 'ئەمە هەڵەیەکی باوە.'),
      p('Rakam yüzde on değil, yüzde on beş.', 'ra-KAM yüz-DE ON de-ĞİL yüz-DE ON BEŞ', 'الرقم ليس عشرة بالمئة بل خمسة عشر.', 'ژمارەکە دە لە سەد نییە، پازدە لە سەدە.'),
      p('Tarihi yanlış hatırlıyor olabilirsiniz.', 'ta-ri-Hİ yan-LIŞ ha-tır-lı-YOR o-la-bi-lir-si-NİZ', 'قد تكونون تتذكّرون التاريخ خطأً.', 'لەوانەیە بەرواری هەڵە لەبیرتان بێت.'),
      p('Düzeltmem gerekiyor, özür dilerim.', 'dü-zelt-MEM ge-re-ki-YOR ö-ZÜR di-le-RİM', 'عليّ التصحيح، أعتذر.', 'پێویستە ڕاستی بکەمەوە، ببوورن.'),
      p('Doğrusu şöyle.', 'doğ-ru-SU şöy-LE', 'الصحيح هو التالي.', 'ڕاستەکەی بەم شێوەیەیە.'),
    ],
  },
  {
    id: 'd-b2-uncertain',
    level: 'b2',
    order: 172,
    title: 'Emin Olmadığını Belirtmek',
    titleI18n: b('التعبير عن عدم اليقين', 'دەربڕینی نادڵنیایی'),
    focus: b(
      'التحوّط: التركية تخفّف بالفعل نفسه («gibi görünüyor») لا بالظرف وحده.',
      'نەرمکردنەوە: تورکی بە کردار نەرم دەکات.',
    ),
    sentences: [
      p('Emin değilim ama sanırım öyle.', 'e-MİN de-ği-LİM a-MA sa-nı-RIM öy-LE', 'لست متأكّداً لكن أظنّ ذلك.', 'دڵنیا نیم بەڵام وابزانم.'),
      p('Öyle görünüyor.', 'öy-LE gö-rü-nü-YOR', 'يبدو الأمر كذلك.', 'وا دیارە.'),
      p('Şu an net konuşmak zor.', 'ŞU AN NET ko-nuş-MAK zor', 'يصعب الحديث بوضوح الآن.', 'ئێستا قسەکردنی ڕوون قورسە.'),
      p('Yanılıyor da olabilirim.', 'ya-nı-lı-YOR DA o-la-bi-li-RİM', 'قد أكون مخطئاً أيضاً.', 'لەوانەیە هەڵەش بکەم.'),
      p('Bildiğim kadarıyla böyle.', 'bil-di-ĞİM ka-da-rıy-LA böy-LE', 'على حدّ علمي هكذا.', 'بەو ڕادەیەی دەزانم وایە.'),
      p('Kontrol edip size döneyim.', 'kon-TROL e-DİP si-ZE dö-ne-YİM', 'دعني أتحقّق وأعود إليكم.', 'با بپشکنم و وەڵامتان دەدەمەوە.'),
      p('Bu konuda yetkili ben değilim.', 'BU ko-nu-DA yet-ki-Lİ BEN de-ği-LİM', 'لست المسؤول في هذا الأمر.', 'لەم بارەیەوە من بەرپرس نیم.'),
      p('Tahminimce iki hafta sürer.', 'tah-mi-nim-CE i-Kİ haf-TA sü-RER', 'بتقديري تستغرق أسبوعين.', 'بە پێشبینی من دوو هەفتە دەخایەنێت.'),
    ],
  },
  /* ================================ C1 ================================ */
  {
    id: 'd-c1-argument',
    level: 'c1',
    order: 173,
    title: 'Tez Kurmak',
    titleI18n: b('بناء الأطروحة', 'دروستکردنی تێز'),
    focus: b(
      'بنية الحجّة: الدعوى، ثم السند، ثم القيد، ثم الردّ على الاعتراض.',
      'پێکهاتەی بەڵگە: بانگەشە، سەلماندن، سنوور.',
    ),
    sentences: [
      p('Bu yazıda şunu savunuyorum.', 'BU ya-zı-DA şu-NU sa-vu-nu-yo-RUM', 'أدافع في هذا المقال عن الآتي.', 'لەم نووسینەدا بەرگری لەمە دەکەم.'),
      p('Savımı üç gerekçeye dayandırıyorum.', 'sa-vı-MI ÜÇ ge-rek-çe-YE da-yan-dı-rı-yo-RUM', 'أُسند دعواي إلى ثلاثة مبرّرات.', 'بانگەشەکەم لەسەر سێ هۆکار دەبەستم.'),
      p('İlk gerekçe tarihsel niteliktedir.', 'İLK ge-rek-ÇE ta-rih-SEL ni-te-lik-te-DİR', 'المبرّر الأول ذو طابع تاريخي.', 'هۆکاری یەکەم سروشتێکی مێژووی هەیە.'),
      p('Bu iddiaya itiraz edilebilir.', 'BU id-di-a-YA i-ti-RAZ e-di-le-bi-LİR', 'يمكن الاعتراض على هذا الادّعاء.', 'دەکرێت ناڕەزایی لەم بانگەشەیە دەربڕدرێت.'),
      p('Karşı görüşü de dikkate almak gerekir.', 'kar-ŞI gö-rü-ŞÜ DE dik-ka-TE al-MAK ge-re-KİR', 'ينبغي أخذ الرأي المقابل بالاعتبار.', 'پێویستە بۆچوونی بەرامبەریش لەبەرچاو بگیرێت.'),
      p('Ancak bu itiraz belirleyici değildir.', 'an-CAK BU i-ti-RAZ be-lir-le-yi-Cİ de-ğil-DİR', 'لكن هذا الاعتراض ليس حاسماً.', 'بەڵام ئەم ناڕەزاییە دیاریکەر نییە.'),
      p('Savımın sınırlılıklarının farkındayım.', 'sa-vı-MIN sı-nır-lı-lık-la-rı-NIN far-kın-da-YIM', 'أعي محدوديات دعواي.', 'ئاگادارم لە سنووردارییەکانی بانگەشەکەم.'),
      p('Bu çerçevede sonuca varıyorum.', 'BU çer-çe-ve-DE so-nu-CA va-rı-yo-RUM', 'ضمن هذا الإطار أصل إلى نتيجة.', 'لەم چوارچێوەیەدا دەگەمە ئەنجام.'),
    ],
  },
  {
    id: 'd-c1-media',
    level: 'c1',
    order: 174,
    title: 'Habere Şüpheyle Bakmak',
    titleI18n: b('قراءة الخبر بعين ناقدة', 'خوێندنەوەی هەواڵ بە ڕەخنەوە'),
    focus: b(
      'مفردات النقد الإعلامي: kaynak, algı, taraflılık, doğrulama.',
      'وشەی ڕەخنەی میدیایی: kaynak، algı، doğrulama.',
    ),
    sentences: [
      p('Haberin kaynağı belirtilmemiş.', 'ha-be-RİN kay-na-ĞI be-lir-til-me-MİŞ', 'لم يُذكر مصدر الخبر.', 'سەرچاوەی هەواڵەکە ئاماژەی پێنەکراوە.'),
      p('Başlık içerikle uyuşmuyor.', 'baş-LIK i-çe-rik-LE u-yuş-mu-YOR', 'العنوان لا يطابق المحتوى.', 'سەردێڕەکە لەگەڵ ناوەڕۆکدا ناگونجێت.'),
      p('Bu bir algı yönetimi örneği.', 'BU bir al-GI yö-ne-ti-Mİ ör-ne-Ğİ', 'هذا مثال على إدارة التصوّرات.', 'ئەمە نموونەی بەڕێوەبردنی وێنایە.'),
      p('İki bağımsız kaynaktan doğrulanmalı.', 'i-Kİ ba-ğım-SIZ kay-nak-TAN doğ-ru-lan-ma-LI', 'ينبغي التحقّق من مصدرين مستقلّين.', 'دەبێت لە دوو سەرچاوەی سەربەخۆوە پشتڕاست بکرێتەوە.'),
      p('Yayın tarafsızlığı tartışmalı.', 'ya-YIN ta-raf-sız-lı-ĞI tar-tış-ma-LI', 'حياد النشر محلّ جدل.', 'بێلایەنی بڵاوکردنەوە جێی گفتوگۆیە.'),
      p('İstatistik bağlamından koparılmış.', 'is-ta-tis-TİK bağ-la-mın-DAN ko-pa-rıl-MIŞ', 'أُخرجت الإحصائية عن سياقها.', 'ئامارەکە لە چوارچێوەکەی دەرهێنراوە.'),
      p('Dezenformasyon hızla yayılıyor.', 'de-zen-for-mas-YON hız-LA ya-yı-lı-YOR', 'تنتشر المعلومات المضلّلة بسرعة.', 'زانیاری هەڵە بە خێرایی بڵاو دەبێتەوە.'),
      p('Okuyucunun eleştirel olması gerekir.', 'o-ku-yu-cu-NUN e-leş-ti-REL ol-ma-SI ge-re-KİR', 'ينبغي أن يكون القارئ ناقداً.', 'پێویستە خوێنەر ڕەخنەگر بێت.'),
    ],
  },
  /* =============================== C1+ ================================ */
  {
    id: 'd-c1plus-academic',
    level: 'c1plus',
    order: 175,
    title: 'Akademik Metin Dili',
    titleI18n: b('لغة النص الأكاديمي', 'زمانی دەقی ئەکادیمی'),
    focus: b(
      'الصيغ التي تفتح فقرة أكاديمية وتُغلقها — قوالب تُحفظ وتوفّر وقتاً هائلاً.',
      'قاڵبەکانی کردنەوە و داخستنی بڕگەی ئەکادیمی.',
    ),
    sentences: [
      p('Bu çalışmanın amacı şudur.', 'BU ça-lış-ma-NIN a-ma-CI şu-DUR', 'هدف هذه الدراسة هو التالي.', 'مەبەستی ئەم توێژینەوەیە ئەمەیە.'),
      p('Alanyazında bu konu yeterince ele alınmamıştır.', 'a-lan-ya-zın-DA BU ko-NU ye-te-rin-CE e-LE a-lın-ma-mış-TIR', 'لم يُتناول هذا الموضوع كفايةً في الأدبيات.', 'لە لیتریچەردا ئەم بابەتە بەپێویست خراوەتەڕوو.'),
      p('Aşağıda üç başlık altında incelenecektir.', 'a-şa-ğı-DA ÜÇ baş-LIK al-tın-DA in-ce-le-ne-cek-TİR', 'سيُدرَس أدناه تحت ثلاثة عناوين.', 'لە خوارەوە لەژێر سێ سەردێڕدا لێکۆڵینەوەی لێدەکرێت.'),
      p('Bulgular önceki çalışmalarla örtüşmektedir.', 'bul-gu-LAR ön-ce-Kİ ça-lış-ma-lar-LA ör-tüş-mek-te-DİR', 'تتوافق النتائج مع الدراسات السابقة.', 'دۆزینەوەکان لەگەڵ توێژینەوە پێشووەکاندا دەگونجێن.'),
      p('Söz konusu veri seti sınırlıdır.', 'SÖZ ko-nu-SU ve-Rİ se-Tİ sı-nır-lı-DIR', 'مجموعة البيانات المعنية محدودة.', 'ئەو کۆمەڵە داتایەی باسکرا سنووردارە.'),
      p('Bu bağlamda dikkatli bir okuma gerekir.', 'BU bağ-lam-DA dik-kat-Lİ bir o-ku-MA ge-re-KİR', 'يلزم في هذا السياق قراءة متأنّية.', 'لەم چوارچێوەیەدا خوێندنەوەیەکی وردی پێویستە.'),
      p('İzleyen bölümde yöntem açıklanacaktır.', 'iz-le-YEN bö-lüm-DE yön-TEM a-çık-la-na-cak-TIR', 'سيُشرَح المنهج في القسم التالي.', 'لە بەشی داهاتوودا میتۆدەکە ڕوون دەکرێتەوە.'),
      p('Sonuç bölümünde öneriler sunulmaktadır.', 'so-NUÇ bö-lü-mün-DE ö-ne-ri-LER su-nul-mak-ta-DIR', 'تُقدَّم المقترحات في قسم الخاتمة.', 'لە بەشی ئەنجامدا پێشنیارەکان پێشکەش دەکرێن.'),
    ],
  },
  {
    id: 'd-c1plus-formal-speech',
    level: 'c1plus',
    order: 176,
    title: 'Törende Konuşmak',
    titleI18n: b('الخطاب في مناسبة', 'قسەکردن لە ڕێوڕەسمدا'),
    focus: b(
      'اللغة الاحتفالية: الشكر، الذكرى، التمنّي — قوالب عثمانية باقية.',
      'زمانی ڕێوڕەسم: سوپاس، یادکردنەوە، ئاواتەخوازی.',
    ),
    sentences: [
      p('Bugün burada bulunmaktan onur duyuyorum.', 'bu-GÜN bu-ra-DA bu-lun-mak-TAN o-NUR du-yu-yo-RUM', 'يشرّفني وجودي هنا اليوم.', 'شانازی بەوەوە دەکەم ئەمڕۆ لێرەم.'),
      p('Emeği geçen herkese teşekkür ederim.', 'e-me-Ği ge-ÇEN her-ke-SE te-şek-KÜR e-de-RİM', 'أشكر كل من بذل جهداً.', 'سوپاس بۆ هەموو ئەوانەی ماندوو بوون.'),
      p('Bu vesileyle bir hususu vurgulamak isterim.', 'BU ve-si-ley-LE bir hu-su-SU vur-gu-la-MAK is-te-RİM', 'أودّ بهذه المناسبة التشديد على أمر.', 'بەم بۆنەیەوە دەمەوێت جەخت لە خاڵێک بکەمەوە.'),
      p('Aramızdan ayrılanları rahmetle anıyoruz.', 'a-ra-mız-DAN ay-rı-lan-la-RI rah-met-LE a-nı-yo-RUZ', 'نذكر بالرحمة من فارقونا.', 'ئەوانەی لێمان جیا بوونەوە بە ڕەحمەت یاد دەکەینەوە.'),
      p('Başarılarınızın devamını dilerim.', 'ba-şa-rı-la-rı-nı-ZIN de-va-mı-NI di-le-RİM', 'أتمنّى لكم دوام النجاح.', 'بەردەوامی سەرکەوتنتان بۆ دەخوازم.'),
      p('Sözlerime burada son veriyorum.', 'söz-le-ri-ME bu-ra-DA SON ve-ri-yo-RUM', 'أختم كلامي هنا.', 'قسەکانم لێرەدا کۆتایی پێدەهێنم.'),
      p('Hepinizi saygıyla selamlıyorum.', 'he-pi-ni-Zİ say-gıy-LA se-lam-lı-yo-RUM', 'أحيّيكم جميعاً باحترام.', 'بە ڕێزەوە سڵاو لە هەموتان دەکەم.'),
      p('Katılımınız için müteşekkiriz.', 'ka-tı-lı-mı-NIZ i-ÇİN mü-te-şek-ki-RİZ', 'نحن ممتنّون لمشاركتكم.', 'سوپاسگوزارین بۆ بەشداریتان.'),
    ],
  },
];
