import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Sentence packs, expansion pass.
 *
 * Organised by FUNCTION rather than grammar point — what a student needs to
 * be able to do — because that is how sentences get used. The A1/A2 packs are
 * survival scripts; the B and C packs are the moves that make an argument
 * work in Turkish.
 */
export const EXTRA_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 'x-a1-directions',
    level: 'a1',
    order: 40,
    title: 'Yol Sorma',
    titleI18n: b('السؤال عن الطريق', 'پرسیاری ڕێگا'),
    focus: b(
      'أهمّ عشر جمل حين تضيع في مدينة تركية.',
      'گرنگترین دە ڕستە کاتێک لە شارێکی تورکیدا وێڵ دەبیت.',
    ),
    sentences: [
      p('Affedersiniz, bir şey sorabilir miyim?', 'af-fe-der-si-NİZ bir ŞEY so-ra-bi-LİR mi-yim', 'عفواً، هل يمكنني أن أسأل شيئاً؟', 'ببوورە، دەتوانم شتێک بپرسم؟'),
      p('Metro istasyonu nerede?', 'met-RO is-tas-yo-NU ne-re-DE', 'أين محطة المترو؟', 'وێستگەی مەترۆ لە کوێیە؟'),
      p('Bu adrese nasıl giderim?', 'BU ad-re-SE na-SIL gi-de-RİM', 'كيف أصل إلى هذا العنوان؟', 'چۆن بگەمە ئەم ناونیشانە؟'),
      p('Düz gidin, sonra sağa dönün.', 'DÜZ gi-DİN son-RA sa-ĞA dö-NÜN', 'امشِ مستقيماً ثم انعطف يميناً.', 'ڕاست بڕۆ، پاشان بەرەو ڕاست بسووڕێوە.'),
      p('Sola dönün, köşede.', 'so-LA dö-NÜN kö-şe-DE', 'انعطف يساراً، عند الزاوية.', 'بەرەو چەپ بسووڕێوە، لە گۆشەکەدایە.'),
      p('Uzak mı, yakın mı?', 'u-ZAK mı ya-KIN mı', 'هل هو بعيد أم قريب؟', 'دوورە یان نزیکە؟'),
      p('Otobüsle mi gitsem, taksiyle mi?', 'o-to-büs-LE mi git-SEM tak-siy-LE mi', 'هل أذهب بالحافلة أم بالتاكسي؟', 'بە پاس بڕۆم یان بە تاکسی؟'),
      p('Kayboldum.', 'kay-bol-DUM', 'لقد ضللت الطريق.', 'وێڵ بووم.'),
      p('Haritada gösterebilir misiniz?', 'ha-ri-ta-DA gös-te-re-bi-LİR mi-si-niz', 'هل يمكنك أن تريني على الخريطة؟', 'دەتوانیت لەسەر نەخشە پیشانم بدەیت؟'),
      p('Çok teşekkür ederim, iyi günler.', 'ÇOK te-şek-KÜR e-de-RİM i-Yİ gün-LER', 'شكراً جزيلاً، نهارك سعيد.', 'زۆر سوپاس، ڕۆژباش.'),
    ],
  },
  {
    id: 'x-a1-restaurant',
    level: 'a1',
    order: 41,
    title: 'Lokantada',
    titleI18n: b('في المطعم', 'لە چێشتخانەدا'),
    focus: b('اطلب وجبتك بثقة من أول يوم.', 'لە ڕۆژی یەکەمەوە بە متمانە خواردنەکەت داوا بکە.'),
    sentences: [
      p('İki kişilik bir masa var mı?', 'i-Kİ ki-şi-LİK bir ma-SA var MI', 'هل هناك طاولة لشخصين؟', 'مێزێک بۆ دوو کەس هەیە؟'),
      p('Menüde İngilizcesi var mı?', 'me-nü-DE in-gi-liz-ce-Sİ var MI', 'هل في القائمة نسخة إنجليزية؟', 'لە مێنیۆکەدا ئینگلیزی هەیە؟'),
      p('Bugünün spesiyali nedir?', 'bu-gü-NÜN spe-si-ya-Lİ ne-DİR', 'ما طبق اليوم المميّز؟', 'تایبەتمەندی ئەمڕۆ چییە؟'),
      p('Bir çorba ve bir salata istiyorum.', 'BİR çor-BA ve bir sa-la-TA is-ti-yo-RUM', 'أريد شوربة وسلطة.', 'شۆربایەک و زەڵاتەیەکم دەوێت.'),
      p('Etsiz bir yemek var mı?', 'et-SİZ bir ye-MEK var MI', 'هل يوجد طبق بلا لحم؟', 'خواردنێکی بێ گۆشت هەیە؟'),
      p('Acılı olmasın lütfen.', 'a-cı-LI ol-ma-SIN lüt-FEN', 'بلا حرّ من فضلك.', 'با تووند نەبێت تکایە.'),
      p('Su alabilir miyim?', 'SU a-la-bi-LİR mi-yim', 'هل يمكنني الحصول على ماء؟', 'دەتوانم ئاو وەربگرم؟'),
      p('Porsiyon ne kadar büyük?', 'por-si-YON NE ka-dar bü-YÜK', 'ما حجم الحصّة؟', 'بەشەکە چەند گەورەیە؟'),
      p('Hesabı alabilir miyim?', 'he-sa-BI a-la-bi-LİR mi-yim', 'هل يمكنني الحصول على الحساب؟', 'دەتوانم حسابەکە وەربگرم؟'),
      p('Hesabı ayrı ayrı alabilir miyiz?', 'he-sa-BI ay-RI ay-RI a-la-bi-LİR mi-yiz', 'هل يمكننا حسابين منفصلين؟', 'دەتوانین حسابەکە جیا جیا وەربگرین؟'),
    ],
  },

  /* ================================ A2 ================================ */
  {
    id: 'x-a2-doctor',
    level: 'a2',
    order: 40,
    title: 'Doktorda',
    titleI18n: b('عند الطبيب', 'لای پزیشک'),
    focus: b(
      'وصف الألم بدقّة — أهمّ ما تحتاجه في بلد أجنبي.',
      'وردی وەسفکردنی ئازار — گرنگترین شت لە وڵاتێکی بیانیدا.',
    ),
    sentences: [
      p('Randevu almak istiyorum.', 'ran-de-VU al-MAK is-ti-yo-RUM', 'أريد أخذ موعد.', 'دەمەوێت ژینگەیەک وەربگرم.'),
      p('Kendimi iyi hissetmiyorum.', 'ken-di-Mİ i-Yİ his-set-mi-yo-RUM', 'لا أشعر أنني بخير.', 'هەست بە باشی ناکەم.'),
      p('Üç gündür başım ağrıyor.', 'ÜÇ gün-DÜR ba-ŞIM ağ-rı-YOR', 'رأسي يؤلمني منذ ثلاثة أيام.', 'سێ ڕۆژە سەرم دەئێشێت.'),
      p('Ateşim var.', 'a-te-ŞİM var', 'عندي حرارة.', 'تام هەیە.'),
      p('Bu ilaca alerjim var.', 'BU i-la-CA a-ler-JİM var', 'عندي حساسية من هذا الدواء.', 'لەم دەرمانە هەستیارم.'),
      p('Ne zamandır böyle?', 'NE za-man-DIR böy-LE', 'منذ متى وأنت هكذا؟', 'لە کەیەوە وایە؟'),
      p('Günde kaç kere alacağım?', 'gün-DE KAÇ ke-RE a-la-ca-ĞIM', 'كم مرة آخذه يومياً؟', 'ڕۆژی چەند جار وەریدەگرم؟'),
      p('Ciddi bir şey mi?', 'cid-Dİ bir ŞEY mi', 'هل الأمر خطير؟', 'شتێکی جددییە؟'),
      p('Reçete yazabilir misiniz?', 're-çe-TE ya-za-bi-LİR mi-si-niz', 'هل يمكنك كتابة وصفة؟', 'دەتوانیت ڕەچەتەیەک بنووسیت؟'),
      p('Geçmiş olsun.', 'geç-MİŞ ol-SUN', 'سلامتك / شفاك الله.', 'خودا چاکت بکاتەوە.'),
    ],
  },

  /* ================================ B1 ================================ */
  {
    id: 'x-b1-opinion',
    level: 'b1',
    order: 40,
    title: 'Fikrini Söyleme',
    titleI18n: b('إبداء الرأي', 'ڕاگەیاندنی بۆچوون'),
    focus: b(
      'الفرق بين B1 و A2 هو أن تقول ما تعتقده، لا ما تحتاجه فقط.',
      'جیاوازی نێوان B1 و A2 ئەوەیە کە ئەوە بڵێیت کە باوەڕت پێیەتی، نەک تەنها ئەوەی پێویستتە.',
    ),
    sentences: [
      p('Bence bu doğru bir karar.', 'ben-CE BU doğ-RU bir ka-RAR', 'برأيي هذا قرار صحيح.', 'بەلای منەوە ئەمە بڕیارێکی ڕاستە.'),
      p('Bana kalırsa biraz erken.', 'ba-NA ka-lır-SA bi-RAZ er-KEN', 'في رأيي الأمر مبكّر قليلاً.', 'بەلای منەوە کەمێک زووە.'),
      p('Katılıyorum, aynı fikirdeyim.', 'ka-tı-lı-yo-RUM ay-NI fi-kir-de-YİM', 'أوافق، أنا على الرأي نفسه.', 'هاوڕام، هەمان بۆچوونم هەیە.'),
      p('Maalesef aynı fikirde değilim.', 'ma-a-le-SEF ay-NI fi-kir-DE de-ği-LİM', 'للأسف لست على الرأي نفسه.', 'بەداخەوە هاوڕا نیم.'),
      p('Bu konuda kararsızım.', 'BU ko-nu-DA ka-rar-sı-ZIM', 'أنا متردّد في هذا الأمر.', 'لەم بارەیەوە دوودڵم.'),
      p('Bir yandan doğru, ama diğer yandan…', 'BİR yan-DAN doğ-RU a-MA di-ĞER yan-dan', 'من جهة صحيح، لكن من جهة أخرى…', 'لەلایەکەوە ڕاستە، بەڵام لەلایەکی ترەوە…'),
      p('Sence de öyle değil mi?', 'sen-CE de öy-LE de-ĞİL mi', 'أليس كذلك برأيك أيضاً؟', 'بەلای تۆشەوە وا نییە؟'),
      p('Şöyle düşünüyorum.', 'şöy-LE dü-şü-nü-yo-RUM', 'أفكّر على النحو التالي.', 'بەم شێوەیە بیر دەکەمەوە.'),
      p('Kesinlikle katılmıyorum.', 'ke-sin-lik-LE ka-tıl-mı-yo-RUM', 'لا أوافق إطلاقاً.', 'بە هیچ شێوەیەک هاوڕا نیم.'),
      p('Haklı olabilirsin ama emin değilim.', 'hak-LI o-la-bi-lir-SİN a-MA e-MİN de-ği-LİM', 'قد تكون محقّاً لكنني لست متأكّداً.', 'لەوانەیە ڕاست بکەیت بەڵام دڵنیا نیم.'),
    ],
  },
  {
    id: 'x-b1-experience',
    level: 'b1',
    order: 41,
    title: 'Deneyim Anlatma',
    titleI18n: b('سرد التجارب', 'گێڕانەوەی ئەزموون'),
    focus: b('احكِ ما حدث لك، بترتيب زمني واضح.', 'ئەوە بگێڕەوە کە بۆت ڕوویدا، بە ڕیزبەندی کاتی ڕوون.'),
    sentences: [
      p('Daha önce hiç Türkiye’ye gitmemiştim.', 'da-HA ön-CE HİÇ tür-ki-YE-ye git-me-miş-TİM', 'لم أكن قد ذهبت إلى تركيا من قبل.', 'پێشتر هەرگیز نەچووبووم بۆ تورکیا.'),
      p('İlk defa geçen yaz gittim.', 'İLK de-FA ge-ÇEN YAZ git-TİM', 'ذهبت لأول مرة الصيف الماضي.', 'یەکەم جار هاوینی پار چووم.'),
      p('Başta çok zorlandım.', 'baş-TA ÇOK zor-lan-DIM', 'في البداية واجهت صعوبة كبيرة.', 'لە سەرەتادا زۆر سەختم بوو.'),
      p('Zamanla alıştım.', 'za-man-LA a-lış-TIM', 'اعتدت مع الوقت.', 'بە تێپەڕبوونی کات ڕاهاتم.'),
      p('En çok insanların sıcaklığı hoşuma gitti.', 'EN ÇOK in-san-la-RIN sı-cak-lı-ĞI ho-şu-MA git-Tİ', 'أكثر ما أعجبني دفء الناس.', 'زۆرترین شت کە بەدڵم بوو گەرمی خەڵکەکە بوو.'),
      p('Bir daha gitmeyi çok istiyorum.', 'BİR da-HA git-me-Yİ ÇOK is-ti-yo-RUM', 'أرغب كثيراً في الذهاب مرة أخرى.', 'زۆرم دەوێت جارێکی تر بچم.'),
      p('O gün hiç unutmayacağım.', 'O GÜN HİÇ u-nut-ma-ya-ca-ĞIM', 'لن أنسى ذلك اليوم أبداً.', 'ئەو ڕۆژە هەرگیز لەبیر ناکەم.'),
      p('Beklediğimden çok daha iyiydi.', 'bek-le-di-ğim-DEN ÇOK da-HA i-yiy-Dİ', 'كان أفضل بكثير مما توقّعت.', 'زۆر باشتر بوو لەوەی چاوەڕێم دەکرد.'),
    ],
  },

  /* ================================ B2 ================================ */
  {
    id: 'x-b2-workplace',
    level: 'b2',
    order: 40,
    title: 'İş Yerinde',
    titleI18n: b('في مكان العمل', 'لە شوێنی کاردا'),
    focus: b(
      'اللغة المهنية: أن تطلب، وتعتذر، وتعترض — بلياقة.',
      'زمانی پیشەیی: داواکردن، داوای لێبوردن، و ناڕەزایی — بە ڕێزەوە.',
    ),
    sentences: [
      p('Bu konuyu toplantıda gündeme getirelim.', 'BU ko-nu-YU top-lan-tı-DA gün-de-ME ge-ti-re-LİM', 'لنطرح هذا الموضوع في الاجتماع.', 'با ئەم بابەتە لە کۆبوونەوەکەدا بخەینە ڕوو.'),
      p('Raporu cuma gününe kadar yetiştiririm.', 'ra-po-RU cu-MA gü-nü-NE ka-dar ye-tiş-ti-ri-RİM', 'سأنجز التقرير قبل يوم الجمعة.', 'ڕاپۆرتەکە تا ڕۆژی هەینی تەواو دەکەم.'),
      p('Bir konuda desteğinize ihtiyacım var.', 'BİR ko-nu-DA des-te-ği-ni-ZE ih-ti-ya-CIM var', 'أحتاج دعمكم في أمر ما.', 'لە بابەتێکدا پێویستم بە پشتگیریتانە.'),
      p('Süreyi biraz uzatmamız mümkün mü?', 'sü-re-Yİ bi-RAZ u-zat-ma-MIZ müm-KÜN mü', 'هل يمكن تمديد المهلة قليلاً؟', 'دەکرێت کەمێک ماوەکە درێژ بکەینەوە؟'),
      p('Gecikme için özür dilerim.', 'ge-cik-ME i-ÇİN ö-ZÜR di-le-RİM', 'أعتذر عن التأخير.', 'داوای لێبوردن دەکەم بۆ دواکەوتن.'),
      p('Bu konuda farklı düşünüyorum.', 'BU ko-nu-DA fark-LI dü-şü-nü-yo-RUM', 'لديّ رأي مختلف في هذا.', 'لەم بارەیەوە جیاواز بیر دەکەمەوە.'),
      p('Önerinizi değerlendireceğiz.', 'ö-ne-ri-ni-Zİ de-ğer-len-di-re-ce-ĞİZ', 'سنقيّم اقتراحكم.', 'پێشنیارەکەتان هەڵدەسەنگێنین.'),
      p('Sorumluluğu ben üstleniyorum.', 'so-rum-lu-lu-ĞU BEN üst-le-ni-yo-RUM', 'أتحمّل المسؤولية أنا.', 'بەرپرسیارێتییەکە من دەیگرمە ئەستۆ.'),
      p('Ekibe geri dönüş yapacağım.', 'e-ki-BE ge-Rİ dö-NÜŞ ya-pa-ca-ĞIM', 'سأعود إلى الفريق بالرد.', 'وەڵام بۆ تیمەکە دەگەڕێنمەوە.'),
      p('Toplantıyı erteleyebilir miyiz?', 'top-lan-tı-YI er-te-le-ye-bi-LİR mi-yiz', 'هل يمكننا تأجيل الاجتماع؟', 'دەتوانین کۆبوونەوەکە دوابخەین؟'),
    ],
  },

  /* ================================ C1 ================================ */
  {
    id: 'x-c1-argument',
    level: 'c1',
    order: 40,
    title: 'Akademik Tartışma',
    titleI18n: b('النقاش الأكاديمي', 'گفتوگۆی ئەکادیمی'),
    focus: b(
      'أدوات بناء الحجّة: التمهيد، والتحفّظ، والاستدراك، والخلاصة.',
      'ئامرازەکانی بنیاتنانی بەڵگە: پێشەکی، پارێزکاری، و کۆتایی.',
    ),
    sentences: [
      p('Bu çalışmanın temel iddiası şudur:', 'BU ça-lış-ma-NIN te-MEL id-di-a-SI şu-DUR', 'الدعوى الأساسية لهذه الدراسة هي:', 'بانگەشەی بنەڕەتی ئەم توێژینەوەیە ئەمەیە:'),
      p('Mevcut literatür bu noktayı yeterince ele almamıştır.', 'mev-CUT li-te-ra-TÜR BU nok-ta-YI ye-te-rin-CE e-LE al-ma-mış-TIR', 'لم تتناول الأدبيات الحالية هذه النقطة بما يكفي.', 'ئەدەبیاتی ئێستا بەپێویست ئەم خاڵەی نەگرتووەتە بەر.'),
      p('Bulgular, hipotezi kısmen desteklemektedir.', 'bul-gu-LAR hi-po-te-Zİ kıs-MEN des-tek-le-mek-te-DİR', 'تدعم النتائج الفرضية جزئياً.', 'دۆزینەوەکان بەشێک گریمانەکە پشتگیری دەکەن.'),
      p('Ancak bu sonuç dikkatle yorumlanmalıdır.', 'an-CAK BU so-NUÇ dik-kat-LE yo-rum-lan-ma-lı-DIR', 'لكن يجب تفسير هذه النتيجة بحذر.', 'بەڵام دەبێت ئەم ئەنجامە بە وریایی لێکبدرێتەوە.'),
      p('Örneklemin sınırlı olması genellemeyi güçleştirmektedir.', 'ör-nek-le-MİN sı-nır-LI ol-ma-SI ge-nel-le-me-Yİ güç-leş-tir-mek-te-DİR', 'محدودية العيّنة تصعّب التعميم.', 'سنووردارێتی نموونەکە گشتاندن سەخت دەکات.'),
      p('Aksi yöndeki bulguları da göz ardı etmemek gerekir.', 'ak-Sİ yön-de-Kİ bul-gu-la-RI da GÖZ ar-DI et-me-MEK ge-re-KİR', 'ينبغي عدم تجاهل النتائج المعاكسة.', 'پێویستە دۆزینەوە پێچەوانەکانیش پشتگوێ نەخرێن.'),
      p('Buradan hareketle şu sonuca varılabilir.', 'bu-ra-DAN ha-re-ket-LE ŞU so-nu-CA va-rı-la-bi-LİR', 'انطلاقاً من هنا يمكن الوصول إلى هذه النتيجة.', 'لێرەوە دەتوانرێت بگەیتە ئەم ئەنجامە.'),
      p('İleride yapılacak çalışmalar bu boşluğu doldurabilir.', 'i-le-ri-DE ya-pı-la-CAK ça-lış-ma-LAR BU boş-lu-ĞU dol-du-ra-bi-LİR', 'قد تسدّ الدراسات المستقبلية هذه الفجوة.', 'توێژینەوەی داهاتوو دەتوانێت ئەم بۆشاییە پڕ بکاتەوە.'),
    ],
  },

  /* =============================== C1+ ================================ */
  {
    id: 'x-c1plus-nuance',
    level: 'c1plus',
    order: 40,
    title: 'İnce Anlam Farkları',
    titleI18n: b('فروق المعنى الدقيقة', 'جیاوازییە ورد و ناسکەکانی واتا'),
    focus: b(
      'في هذا المستوى لا يكفي أن تكون صحيحاً — عليك أن تكون دقيقاً في الدرجة.',
      'لەم ئاستەدا ڕاستبوون بەس نییە — دەبێت لە پلەکەدا وردیش بیت.',
    ),
    sentences: [
      p('Söylediklerinde bir haklılık payı var, ama tamamen katılmıyorum.', 'söy-le-dik-le-rin-DE bir hak-lı-LIK pa-YI var a-MA ta-ma-MEN ka-tıl-mı-yo-RUM', 'في كلامك قدر من الصواب، لكنني لا أوافق تماماً.', 'لە قسەکانتدا بەشێک ڕاستی هەیە، بەڵام بە تەواوی هاوڕا نیم.'),
      p('Meseleyi bu kadar keskin hatlarla ayırmak yanıltıcı olabilir.', 'me-se-le-Yİ BU ka-dar kes-KİN hat-lar-LA a-yır-MAK ya-nıl-tı-CI o-la-bi-LİR', 'قد يكون فصل المسألة بخطوط بهذه الحدّة مضلّلاً.', 'جیاکردنەوەی بابەتەکە بەم هێڵە توندانە لەوانەیە هەڵخەڵەتێنەر بێت.'),
      p('Bu, kuralın kendisini değil uygulanışını sorgulamak demektir.', 'BU ku-ra-LIN ken-di-si-Nİ de-ĞİL uy-gu-la-nı-şı-NI sor-gu-la-MAK de-mek-TİR', 'هذا يعني التشكيك في تطبيق القاعدة لا في القاعدة ذاتها.', 'ئەمە واتە پرسیارکردن لە جێبەجێکردنی یاساکە نەک لە خودی یاساکە.'),
      p('İyi niyetle söylenmiş olsa da sonuç itibarıyla kırıcıydı.', 'i-Yİ ni-yet-LE söy-len-MİŞ ol-SA da so-NUÇ i-ti-ba-rıy-LA kı-rı-cıy-DI', 'وإن قيل بحسن نيّة، فقد كان جارحاً في المحصّلة.', 'هەرچەندە بە نیازی باش وتراوە، لە ئەنجامدا دڵشکێنەر بوو.'),
      p('Sorun bilgisizlik değil, ilgisizlikti.', 'so-RUN bil-gi-siz-LİK de-ĞİL il-gi-siz-lik-Tİ', 'المشكلة لم تكن جهلاً بل لامبالاة.', 'کێشەکە نەزانی نەبوو، بێ ئاگایی بوو.'),
      p('Bunu bir eleştiri olarak değil, bir öneri olarak alın.', 'bu-NU bir e-leş-ti-Rİ o-la-RAK de-ĞİL bir ö-ne-Rİ o-la-RAK a-LIN', 'خذوا هذا اقتراحاً لا نقداً.', 'ئەمە وەک پێشنیار وەربگرن نەک ڕەخنە.'),
    ],
  },
];
