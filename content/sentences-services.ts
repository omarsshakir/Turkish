import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Sentence packs for the places a person has to deal with.
 *
 * The existing situational packs cover the bank, the doctor, the landlord and
 * the permit office. These cover what is left of adult life in Turkey: the
 * pharmacy, the hospital reception, the municipality, the airport, the hotel,
 * the phone company, and the two conversations nobody prepares you for —
 * asking for help, and refusing politely.
 *
 * Every sentence uses vocabulary already in the curriculum, most of it added
 * alongside this file (`randevu`, `belge`, `yetkili`, `işlem`, `şikâyet`).
 */
export const SERVICE_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 'v-a1-help',
    level: 'a1',
    order: 140,
    title: 'Yardım İstemek',
    titleI18n: b('طلب المساعدة', 'داوای یارمەتی'),
    focus: b(
      'أبسط صيغ الاستنجاد والسؤال — تُحفظ كما هي ولا تُبنى من قواعد.',
      'سادەترین شێوەکانی داوای یارمەتی.',
    ),
    sentences: [
      p('Affedersiniz, bir şey soracaktım.', 'af-fe-der-si-NİZ bir ŞEY so-ra-cak-TIM', 'عذراً، أردت أن أسأل شيئاً.', 'ببوورە، دەمویست شتێک بپرسم.'),
      p('Bana yardım eder misiniz?', 'ba-NA yar-DIM e-DER mi-si-NİZ', 'هل تساعدونني؟', 'یارمەتیم دەدەن؟'),
      p('Türkçem çok iyi değil.', 'türk-ÇEM ÇOK i-Yİ de-ĞİL', 'تركيّتي ليست جيدة جداً.', 'تورکیم زۆر باش نییە.'),
      p('Daha yavaş konuşur musunuz?', 'da-HA ya-VAŞ ko-nu-ŞUR mu-su-NUZ', 'هل تتكلّمون أبطأ؟', 'هێواشتر قسە دەکەن؟'),
      p('Pardon, tam anlayamadım.', 'par-DON TAM an-la-ya-ma-DIM', 'عذراً، لم أفهم تماماً.', 'ببوورە، بە تەواوی تێنەگەیشتم.'),
      p('Bunu yazabilir misiniz?', 'bu-NU ya-za-bi-LİR mi-si-NİZ', 'هل يمكنكم كتابة هذا؟', 'دەتوانن ئەمە بنووسن؟'),
      p('Nerede olduğumu bilmiyorum.', 'ne-re-DE ol-du-ğu-MU bil-mi-yo-RUM', 'لا أعرف أين أنا.', 'نازانم لە کوێم.'),
      p('Çok teşekkür ederim, sağ olun.', 'ÇOK te-şek-KÜR e-de-RİM SAĞ o-LUN', 'شكراً جزيلاً، سلمت.', 'زۆر سوپاس، ماندوو نەبیت.'),
    ],
  },
  /* ================================ A2 ================================ */
  {
    id: 'v-a2-pharmacy',
    level: 'a2',
    order: 141,
    title: 'Eczanede',
    titleI18n: b('في الصيدلية', 'لە دەرمانخانە'),
    focus: b(
      'وصف العَرَض بالفعل لا بالصفة: «başım ağrıyor» لا «başım ağrılı».',
      'باسکردنی نیشانە بە کردار نەک ئاوەڵناو.',
    ),
    sentences: [
      p('Başım ağrıyor, bir ilaç var mı?', 'ba-ŞIM ağ-rı-YOR bir i-LAÇ VAR mı', 'رأسي يؤلمني، هل من دواء؟', 'سەرم دەیەشێت، دەرمانێک هەیە؟'),
      p('Reçetesiz alabilir miyim?', 're-çe-te-SİZ a-la-bi-LİR mi-YİM', 'هل يمكنني شراؤه بلا وصفة؟', 'بەبێ ڕەچەتە دەتوانم بیکڕم؟'),
      p('Günde kaç kez içeceğim?', 'gün-DE KAÇ KEZ i-çe-ce-ĞİM', 'كم مرّة في اليوم سآخذه؟', 'ڕۆژانە چەند جار بیخۆمەوە؟'),
      p('Aç karnına mı, tok karnına mı?', 'AÇ kar-nı-NA MI TOK kar-nı-NA MI', 'على معدة فارغة أم ممتلئة؟', 'بە سکی بەتاڵ یان تێر؟'),
      p('Bunun yan etkisi var mı?', 'bu-NUN YAN et-ki-Sİ VAR mı', 'هل له آثار جانبية؟', 'کاریگەری لاوەکی هەیە؟'),
      p('Ağrı kesici de alayım.', 'ağ-RI ke-si-Cİ DE a-la-YIM', 'سآخذ مسكّناً أيضاً.', 'ئازاربڕێکیش وەردەگرم.'),
      p('Nöbetçi eczane nerede?', 'nö-bet-Çİ ec-za-NE ne-re-DE', 'أين الصيدلية المناوبة؟', 'دەرمانخانەی نۆرەبەند لە کوێیە؟'),
      p('Geçmiş olsun, iyi günler.', 'geç-MİŞ ol-SUN i-Yİ gün-LER', 'سلامتك، طاب يومك.', 'خودا شیفات بدات، ڕۆژباش.'),
    ],
  },
  {
    id: 'v-a2-hotel',
    level: 'a2',
    order: 142,
    title: 'Otelde',
    titleI18n: b('في الفندق', 'لە هۆتێل'),
    focus: b(
      'الحجز والاستقبال: rezervasyon, oda, resepsiyon — والسؤال عن الشامل.',
      'حیجز و پێشوازی: rezervasyon، oda، resepsiyon.',
    ),
    sentences: [
      p('Rezervasyonum var, adım Ahmet.', 're-zer-vas-yo-NUM var a-DIM ah-MET', 'لديّ حجز، اسمي أحمد.', 'حیجزم هەیە، ناوم ئەحمەدە.'),
      p('İki kişilik bir oda istiyorum.', 'i-Kİ ki-şi-LİK bir o-DA is-ti-yo-RUM', 'أريد غرفة لشخصين.', 'ژوورێکی دوو کەسیم دەوێت.'),
      p('Kahvaltı dâhil mi?', 'kah-val-TI dâ-HİL Mİ', 'هل الفطور مشمول؟', 'نانی بەیانی لەگەڵدایە؟'),
      p('Anahtarı resepsiyona bırakayım mı?', 'a-nah-ta-RI re-sep-si-yo-NA bı-ra-ka-YIM mı', 'أأترك المفتاح في الاستقبال؟', 'کلیلەکە لە پێشوازی جێبهێڵم؟'),
      p('Odada sıcak su yok.', 'o-da-DA sı-CAK SU yok', 'لا يوجد ماء ساخن في الغرفة.', 'ئاوی گەرم لە ژوورەکەدا نییە.'),
      p('Çıkış saati kaçta?', 'çı-KIŞ sa-a-Tİ kaç-TA', 'متى موعد المغادرة؟', 'کاتی دەرچوون کەیە؟'),
      p('Bir gece daha kalabilir miyiz?', 'bir ge-CE da-HA ka-la-bi-LİR mi-YİZ', 'هل يمكننا البقاء ليلة أخرى؟', 'دەتوانین شەوێکی تر بمێنینەوە؟'),
      p('Havluları değiştirir misiniz?', 'hav-lu-la-RI de-ğiş-ti-RİR mi-si-NİZ', 'هل تبدّلون المناشف؟', 'خاولییەکان دەگۆڕن؟'),
    ],
  },
  {
    id: 'v-a2-airport',
    level: 'a2',
    order: 143,
    title: 'Havalimanında',
    titleI18n: b('في المطار', 'لە فڕۆکەخانە'),
    focus: b(
      'مفردات السفر مع صيغة السؤال المهذّبة — لغة تُسمع أكثر ممّا تُقال.',
      'وشەی گەشت لەگەڵ پرسیاری بەڕێزەوە.',
    ),
    sentences: [
      p('Biniş kartımı nereden alacağım?', 'bi-NİŞ kar-tı-MI ne-re-DEN a-la-ca-ĞIM', 'من أين آخذ بطاقة الصعود؟', 'کارتی سواربوونم لە کوێوە وەردەگرم؟'),
      p('Valizim çok ağır mı?', 'va-li-ZİM ÇOK a-ĞIR mı', 'هل حقيبتي ثقيلة جداً؟', 'جانتاکەم زۆر قورسە؟'),
      p('Uçuş kaçta kalkıyor?', 'u-ÇUŞ kaç-TA kal-kı-YOR', 'متى تقلع الرحلة؟', 'فڕینەکە کەی هەڵدەستێت؟'),
      p('Uçak rötar yaptı.', 'u-ÇAK rö-TAR yap-TI', 'تأخّرت الطائرة.', 'فڕۆکەکە دواکەوت.'),
      p('Pasaport kontrolü nerede?', 'pa-sa-PORT kon-tro-LÜ ne-re-DE', 'أين مراقبة الجوازات؟', 'کۆنترۆڵی پاسپۆرت لە کوێیە؟'),
      p('Bagajım gelmedi.', 'ba-ga-JIM gel-me-Dİ', 'لم تصل حقيبتي.', 'باگاجەکەم نەهات.'),
      p('Aktarma süresi ne kadar?', 'ak-tar-MA sü-re-Sİ NE ka-DAR', 'كم مدّة الترانزيت؟', 'ماوەی گواستنەوە چەندە؟'),
      p('Çıkış kapısı değişti mi?', 'çı-KIŞ ka-pı-SI de-ğiş-Tİ mi', 'هل تغيّرت بوّابة المغادرة؟', 'دەروازەی دەرچوون گۆڕا؟'),
    ],
  },
  /* ================================ B1 ================================ */
  {
    id: 'v-b1-hospital',
    level: 'b1',
    order: 144,
    title: 'Hastane Kaydı',
    titleI18n: b('التسجيل في المستشفى', 'تۆمارکردن لە نەخۆشخانە'),
    focus: b(
      'لغة الاستقبال الطبّي: randevu, sigorta, birim, yönlendirmek.',
      'زمانی پێشوازی پزیشکی: randevu، sigorta، birim.',
    ),
    sentences: [
      p('Randevum vardı ama geç kaldım.', 'ran-de-VUM var-DI a-MA GEÇ kal-DIM', 'كان لديّ موعد لكنني تأخّرت.', 'کاتم هەبوو بەڵام دواکەوتم.'),
      p('Sağlık sigortam geçerli mi?', 'sağ-LIK si-gor-TAM ge-çer-Lİ mi', 'هل تأميني الصحّي ساري؟', 'دڵنیایی تەندروستیم کاری پێدەکرێت؟'),
      p('Hangi birime gitmem gerekiyor?', 'han-Gİ bi-ri-ME git-MEM ge-re-ki-YOR', 'إلى أي وحدة عليّ الذهاب؟', 'دەبێت بچمە کام بەش؟'),
      p('Sizi ilgili birime yönlendireyim.', 'si-Zİ il-gi-Lİ bi-ri-ME yön-len-di-re-YİM', 'دعني أحوّلك إلى القسم المختصّ.', 'با بتنێرم بۆ بەشی پەیوەندیدار.'),
      p('Tahlil sonuçları ne zaman çıkar?', 'tah-LİL so-nuç-la-RI NE za-MAN çı-KAR', 'متى تصدر نتائج التحاليل؟', 'ئەنجامەکانی تاقیکردنەوە کەی دەردەچن؟'),
      p('Raporu nereden alabilirim?', 'ra-po-RU ne-re-DEN a-la-bi-li-RİM', 'من أين يمكنني أخذ التقرير؟', 'ڕاپۆرتەکە لە کوێوە وەربگرم؟'),
      p('Acil servise başvurdum.', 'a-CİL ser-vi-SE baş-vur-DUM', 'راجعت الطوارئ.', 'ڕووم لە بەشی فریاکەوتن کرد.'),
      p('Kimliğinizi alabilir miyim?', 'kim-li-ği-ni-Zİ a-la-bi-LİR mi-YİM', 'هل آخذ هويّتك؟', 'دەتوانم ناسنامەکەت وەربگرم؟'),
    ],
  },
  {
    id: 'v-b1-municipality',
    level: 'b1',
    order: 145,
    title: 'Belediyede',
    titleI18n: b('في البلدية', 'لە شارەوانی'),
    focus: b(
      'لغة الشكوى الرسمية: başvuru, dilekçe, yetkili, işlem.',
      'زمانی گلەیی فەرمی: başvuru، dilekçe، yetkili.',
    ),
    sentences: [
      p('Bir dilekçe vermek istiyorum.', 'bir di-lek-ÇE ver-MEK is-ti-yo-RUM', 'أريد تقديم عريضة.', 'دەمەوێت داواکارییەک پێشکەش بکەم.'),
      p('Başvurum ne aşamada?', 'baş-vu-RUM NE a-şa-ma-DA', 'في أي مرحلة طلبي؟', 'داواکارییەکەم لە کام قۆناغدایە؟'),
      p('Evrakta eksik var mı?', 'ev-rak-TA ek-SİK VAR mı', 'هل في الأوراق نقص؟', 'کەموکوڕی لە کاغەزەکاندا هەیە؟'),
      p('İşlem ne kadar sürer?', 'iş-LEM NE ka-DAR sü-RER', 'كم تستغرق المعاملة؟', 'مامەڵەکە چەند دەخایەنێت؟'),
      p('İlgili birim hangisi acaba?', 'il-gi-Lİ bi-RİM han-gi-Sİ a-ca-BA', 'ترى أي وحدة هي المختصّة؟', 'ئایا کام بەش پەیوەندیدارە؟'),
      p('Sokakta çöp toplanmıyor.', 'so-kak-TA ÇÖP top-lan-mı-YOR', 'لا تُجمع القمامة في الشارع.', 'زبڵ لە شەقامەکەدا کۆناکرێتەوە.'),
      p('Şikâyetimi kayda alır mısınız?', 'şi-kâ-ye-ti-Mİ kay-DA a-LIR mı-sı-NIZ', 'هل تسجّلون شكواي؟', 'گلەییەکەم تۆمار دەکەن؟'),
      p('Bir hafta içinde dönüş yapılacak.', 'bir haf-TA i-çin-DE dö-NÜŞ ya-pı-la-CAK', 'سيُردّ عليكم خلال أسبوع.', 'لە ماوەی هەفتەیەکدا وەڵام دەدرێتەوە.'),
    ],
  },
  {
    id: 'v-b1-phone',
    level: 'b1',
    order: 146,
    title: 'Müşteri Hizmetleri',
    titleI18n: b('خدمة العملاء', 'خزمەتگوزاری کڕیار'),
    focus: b(
      'مكالمة الشكوى: وصف المشكلة، ثم الطلب، ثم التأكيد.',
      'پەیوەندی گلەیی: باسکردنی کێشە، پاشان داواکاری.',
    ),
    sentences: [
      p('İnternet iki gündür çalışmıyor.', 'in-ter-NET i-Kİ gün-DÜR ça-lış-mı-YOR', 'الإنترنت لا يعمل منذ يومين.', 'دوو ڕۆژە ئینتەرنێت کار ناکات.'),
      p('Faturamda bir hata var.', 'fa-tu-ram-DA bir ha-TA var', 'في فاتورتي خطأ.', 'هەڵەیەک لە پسووڵەکەمدا هەیە.'),
      p('Aboneliğimi iptal etmek istiyorum.', 'a-bo-ne-li-ği-Mİ ip-TAL et-MEK is-ti-yo-RUM', 'أريد إلغاء اشتراكي.', 'دەمەوێت بەشداریەکەم هەڵبوەشێنمەوە.'),
      p('Kayıt numaram var mı?', 'ka-YIT nu-ma-RAM VAR mı', 'هل لديّ رقم تسجيل؟', 'ژمارەی تۆمارم هەیە؟'),
      p('Daha önce de aramıştım.', 'da-HA ön-CE DE a-ra-mış-TIM', 'كنت قد اتّصلت من قبل أيضاً.', 'پێشتریش پەیوەندیم کردبوو.'),
      p('Ne zaman çözülecek?', 'NE za-MAN çö-zü-le-CEK', 'متى ستُحلّ؟', 'کەی چارەسەر دەبێت؟'),
      p('Bir üst yetkiliye bağlar mısınız?', 'bir ÜST yet-ki-li-YE bağ-LAR mı-sı-NIZ', 'هل تحوّلني لمسؤول أعلى؟', 'دەمنێرن بۆ بەرپرسێکی بەرزتر؟'),
      p('Görüşme kaydı tutuluyor mu?', 'gö-rüş-ME ka-YIT tu-tu-lu-YOR mu', 'هل تُسجَّل المكالمة؟', 'تۆماری گفتوگۆکە دەکرێت؟'),
    ],
  },
  {
    id: 'v-b1-refusing',
    level: 'b1',
    order: 147,
    title: 'Kibarca Reddetmek',
    titleI18n: b('الرفض بلباقة', 'بە ڕەوشتەوە ڕەتکردنەوە'),
    focus: b(
      '⚠️ التركية ترفض بالاعتذار والتبرير، ونادراً بـ«hayır» وحدها — الرفض المباشر يُقرأ فظاظة.',
      '⚠️ تورکی بە داوای لێبوردن ڕەت دەکاتەوە نەک بە «hayır»ی تەنها.',
    ),
    sentences: [
      p('Kusura bakmayın, bugün olmaz.', 'ku-su-RA bak-ma-YIN bu-GÜN ol-MAZ', 'المعذرة، اليوم لا يمكن.', 'ببوورن، ئەمڕۆ نابێت.'),
      p('Çok isterdim ama işim var.', 'ÇOK is-ter-DİM a-MA i-ŞİM var', 'كنت أودّ كثيراً لكن لديّ عمل.', 'زۆرم دەویست بەڵام کارم هەیە.'),
      p('Maalesef müsait değilim.', 'ma-a-le-SEF mü-sa-İT de-ği-LİM', 'للأسف لست متفرّغاً.', 'بەداخەوە بەردەست نیم.'),
      p('Başka bir zaman olabilir mi?', 'baş-KA bir za-MAN o-la-bi-LİR mi', 'هل يمكن في وقت آخر؟', 'کاتێکی تر دەبێت؟'),
      p('Bu sefer katılamayacağım.', 'BU se-FER ka-tı-la-ma-ya-ca-ĞIM', 'لن أستطيع المشاركة هذه المرّة.', 'ئەم جارە ناتوانم بەشدار بم.'),
      p('Teşekkür ederim ama gerek yok.', 'te-şek-KÜR e-de-RİM a-MA ge-REK yok', 'شكراً لكن لا داعي.', 'سوپاس بەڵام پێویست ناکات.'),
      p('Düşünüp size döneyim.', 'dü-şü-NÜP si-ZE dö-ne-YİM', 'دعني أفكّر وأعود إليكم.', 'با بیر بکەمەوە و وەڵامتان دەدەمەوە.'),
      p('Ne yazık ki mümkün değil.', 'NE ya-ZIK Kİ müm-KÜN de-ĞİL', 'للأسف غير ممكن.', 'بەداخەوە گونجاو نییە.'),
    ],
  },
  /* ================================ B2 ================================ */
  {
    id: 'v-b2-negotiation',
    level: 'b2',
    order: 148,
    title: 'Pazarlık ve Anlaşma',
    titleI18n: b('التفاوض والاتّفاق', 'دانوستان و ڕێککەوتن'),
    focus: b(
      'لغة التفاوض: التنازل المشروط، والطلب المقابل، والتأكيد الكتابي.',
      'زمانی دانوستان: دەستبەرداربوونی مەرجدار.',
    ),
    sentences: [
      p('Bu konuda taviz veremeyiz.', 'BU ko-nu-DA ta-VİZ ve-re-me-YİZ', 'لا يمكننا التنازل في هذا الأمر.', 'لەم بارەیەوە دەستبەردار نابین.'),
      p('Fiyatta biraz esneyebilir misiniz?', 'fi-yat-TA bi-RAZ es-ne-ye-bi-LİR mi-si-NİZ', 'هل يمكنكم المرونة قليلاً في السعر؟', 'لە نرخدا کەمێک نەرم دەبن؟'),
      p('Şartları bir kez daha gözden geçirelim.', 'şart-la-RI bir KEZ da-HA göz-DEN ge-çi-re-LİM', 'لنراجع الشروط مرّة أخرى.', 'با جارێکی تر پێداچوونەوە بۆ مەرجەکان بکەین.'),
      p('Uzlaşmaya varmamız gerekiyor.', 'uz-laş-ma-YA var-ma-MIZ ge-re-ki-YOR', 'علينا التوصّل إلى توافق.', 'پێویستە بگەینە ڕێککەوتن.'),
      p('Bu teklifi yazılı olarak alabilir miyim?', 'BU tek-li-Fİ ya-zı-LI o-la-RAK a-la-bi-LİR mi-YİM', 'هل آخذ هذا العرض كتابةً؟', 'دەتوانم ئەم پێشنیارە بە نووسراوی وەربگرم؟'),
      p('Karşılıklı fayda sağlamalı.', 'kar-şı-lık-LI fay-DA sağ-la-ma-LI', 'ينبغي أن يحقّق فائدة متبادلة.', 'دەبێت سوودی هاوبەش دەستەبەر بکات.'),
      p('Sözleşmeyi imzalamadan önce avukata danışalım.', 'söz-leş-me-Yİ im-za-la-ma-DAN ön-CE a-vu-ka-TA da-nı-şa-LIM', 'لنستشر محامياً قبل التوقيع.', 'پێش واژووکردنی گرێبەست ڕاوێژ بە پارێزەر بکەین.'),
      p('Anlaştığımızı teyit ediyorum.', 'an-laş-tı-ğı-mı-ZI te-YİT e-di-yo-RUM', 'أؤكّد أننا اتّفقنا.', 'دڵنیایی دەدەم کە ڕێککەوتووین.'),
    ],
  },
  {
    id: 'v-b2-presenting',
    level: 'b2',
    order: 149,
    title: 'Sunum Yapmak',
    titleI18n: b('تقديم عرض', 'پێشکەشکردن'),
    focus: b(
      'بنية العرض: الافتتاح، الانتقال، الإحالة إلى الشريحة، الخاتمة.',
      'پێکهاتەی پێشکەشکردن: کردنەوە، گواستنەوە، کۆتایی.',
    ),
    sentences: [
      p('Bugün üç konuya değineceğim.', 'bu-GÜN ÜÇ ko-nu-YA de-ği-ne-ce-ĞİM', 'سأتطرّق اليوم لثلاثة مواضيع.', 'ئەمڕۆ ئاماژە بە سێ بابەت دەکەم.'),
      p('Öncelikle kısa bir özet vereyim.', 'ön-ce-lik-LE kı-SA bir ö-ZET ve-re-YİM', 'أولاً دعوني أقدّم ملخّصاً قصيراً.', 'سەرەتا با کورتەیەکی کورت بدەم.'),
      p('Bu grafikte görebileceğiniz gibi.', 'BU gra-fik-TE gö-re-bi-le-ce-ği-NİZ gi-Bİ', 'كما ترون في هذا الرسم.', 'وەک لەم گرافیکەدا دەبینن.'),
      p('Şimdi ikinci başlığa geçiyorum.', 'şim-Dİ i-kin-Cİ baş-lı-ĞA ge-çi-yo-RUM', 'أنتقل الآن إلى العنوان الثاني.', 'ئێستا دەچمە سەر بەشی دووەم.'),
      p('Verilerimiz bu görüşü destekliyor.', 've-ri-le-ri-MİZ BU gö-rü-ŞÜ des-tek-li-YOR', 'بياناتنا تدعم هذا الرأي.', 'داتاکانمان پشتگیری ئەم بۆچوونە دەکەن.'),
      p('Sorularınızı sonda alacağım.', 'so-ru-la-rı-nı-ZI son-DA a-la-ca-ĞIM', 'سآخذ أسئلتكم في النهاية.', 'پرسیارەکانتان لە کۆتاییدا وەردەگرم.'),
      p('Özetlemek gerekirse, üç bulgumuz var.', 'ö-zet-le-MEK ge-re-kir-SE ÜÇ bul-gu-MUZ var', 'خلاصةً، لدينا ثلاث نتائج.', 'بە کورتی، سێ دۆزینەوەمان هەیە.'),
      p('İlginiz için teşekkür ederim.', 'il-gi-NİZ i-ÇİN te-şek-KÜR e-de-RİM', 'شكراً على اهتمامكم.', 'سوپاس بۆ سەرنجتان.'),
    ],
  },
  {
    id: 'v-b2-email',
    level: 'b2',
    order: 150,
    title: 'Resmî Yazışma',
    titleI18n: b('المراسلة الرسمية', 'نووسینی فەرمی'),
    focus: b(
      'صيغ البريد الرسمي التركي — قوالب تُحفظ كما هي وتوفّر جهداً كبيراً.',
      'شێوەکانی ئیمەیڵی فەرمی تورکی.',
    ),
    sentences: [
      p('Sayın Yetkili, iyi çalışmalar dilerim.', 'sa-YIN yet-ki-Lİ i-Yİ ça-lış-ma-LAR di-le-RİM', 'حضرة المسؤول، أتمنّى لكم عملاً موفّقاً.', 'بەڕێز بەرپرس، کاری باشتان بۆ دەخوازم.'),
      p('Ekte gerekli belgeleri gönderiyorum.', 'ek-TE ge-rek-Lİ bel-ge-le-Rİ gön-de-ri-yo-RUM', 'أرسل الوثائق المطلوبة في المرفق.', 'بەڵگەنامە پێویستەکان لە هاوپێچدا دەنێرم.'),
      p('Konuyla ilgili bilgi rica ediyorum.', 'ko-nuy-LA il-gi-Lİ bil-Gİ ri-CA e-di-yo-RUM', 'أرجو معلومات بخصوص الموضوع.', 'داوای زانیاری دەربارەی بابەتەکە دەکەم.'),
      p('En kısa sürede dönüş yapmanızı rica ederim.', 'EN kı-SA sü-re-DE dö-NÜŞ yap-ma-nı-ZI ri-CA e-de-RİM', 'أرجو الردّ في أقرب وقت.', 'داوا دەکەم بە زووترین کات وەڵام بدەنەوە.'),
      p('İlginiz ve desteğiniz için teşekkürler.', 'il-gi-NİZ ve des-te-ği-NİZ i-ÇİN te-şek-kür-LER', 'شكراً على اهتمامكم ودعمكم.', 'سوپاس بۆ سەرنج و پشتگیریتان.'),
      p('Bilgilerinize sunarım.', 'bil-gi-le-ri-ni-ZE su-na-RIM', 'أرفع لعلمكم.', 'بۆ زانیاریتان پێشکەشی دەکەم.'),
      p('Saygılarımla.', 'say-gı-la-rım-LA', 'مع التحية والاحترام.', 'بە ڕێزەوە.'),
      p('Bu konuda görüşünüzü öğrenmek isterim.', 'BU ko-nu-DA gö-rü-şü-nü-ZÜ öğ-ren-MEK is-te-RİM', 'أودّ معرفة رأيكم في هذا الأمر.', 'دەمەوێت بۆچوونتان لەم بارەیەوە بزانم.'),
    ],
  },
  /* ================================ C1 ================================ */
  {
    id: 'v-c1-disagreeing',
    level: 'c1',
    order: 151,
    title: 'Diplomatik İtiraz',
    titleI18n: b('الاعتراض الدبلوماسي', 'ناڕەزایی دیپلۆماسی'),
    focus: b(
      'الاعتراض الأكاديمي يبدأ بالإقرار ثم يُقيّد: «katılıyorum, ancak…».',
      'ناڕەزایی ئەکادیمی بە دانپێدانان دەست پێدەکات.',
    ),
    sentences: [
      p('Bu noktada size katılıyorum, ancak bir çekincem var.', 'BU nok-ta-DA si-ZE ka-tı-lı-yo-RUM an-CAK bir çe-kin-CEM var', 'أتّفق معكم هنا، لكن لديّ تحفّظ.', 'لەم خاڵەدا لەگەڵتان ڕازیم، بەڵام مەرجێکم هەیە.'),
      p('Kısmen doğru, fakat tablonun tamamı değil.', 'kıs-MEN doğ-RU fa-KAT tab-lo-NUN ta-ma-MI de-ĞİL', 'صحيح جزئياً، لكنه ليس كامل الصورة.', 'بەشێکی ڕاستە، بەڵام هەموو وێنەکە نییە.'),
      p('Verilerin bunu desteklediğinden emin değilim.', 've-ri-le-RİN bu-NU des-tek-le-di-ğin-DEN e-MİN de-ği-LİM', 'لست متأكّداً أن البيانات تدعم هذا.', 'دڵنیا نیم داتاکان پشتگیری ئەمە بکەن.'),
      p('Alternatif bir okuma önerebilir miyim?', 'al-ter-na-TİF bir o-ku-MA ö-ne-re-bi-LİR mi-YİM', 'أأقترح قراءة بديلة؟', 'دەتوانم خوێندنەوەیەکی جێگرەوە پێشنیار بکەم؟'),
      p('Bu çıkarım biraz aceleci görünüyor.', 'BU çı-ka-RIM bi-RAZ a-ce-le-Cİ gö-rü-nü-YOR', 'يبدو هذا الاستنتاج متسرّعاً قليلاً.', 'ئەم ئەنجامە کەمێک بەپەلە دیارە.'),
      p('Örneklem büyüklüğü genellemeye yetmiyor.', 'ör-nek-LEM bü-yük-lü-ĞÜ ge-nel-le-me-YE yet-mi-YOR', 'حجم العيّنة لا يكفي للتعميم.', 'قەبارەی نموونەکە بۆ گشتاندن بەس نییە.'),
      p('Yine de katkısı yadsınamaz.', 'yi-NE DE kat-kı-SI yad-sı-na-MAZ', 'ومع ذلك لا يمكن إنكار إسهامه.', 'لەگەڵ ئەوەشدا بەشدارییەکەی ڕەتناکرێتەوە.'),
      p('Konuyu daha ayrıntılı ele almakta fayda var.', 'ko-nu-YU da-HA ay-rın-tı-LI e-LE al-mak-TA fay-DA var', 'من المفيد تناول الموضوع بتفصيل أكبر.', 'سوودی هەیە بابەتەکە بە وردی زیاتر بخرێتەڕوو.'),
    ],
  },
  {
    id: 'v-c1-evidence',
    level: 'c1',
    order: 152,
    title: 'Kanıt Sunmak',
    titleI18n: b('تقديم الدليل', 'خستنەڕووی بەڵگە'),
    focus: b(
      'الإحالة والتقييد: من قال، وبأي قوّة، وضمن أي حدود.',
      'ئاماژە و سنووردارکردن: کێ گوتی و بە چ هێزێک.',
    ),
    sentences: [
      p('Bulgular hipotezi kısmen destekliyor.', 'bul-gu-LAR hi-po-te-Zİ kıs-MEN des-tek-li-YOR', 'تدعم النتائج الفرضية جزئياً.', 'دۆزینەوەکان بەشێک پشتگیری گریمانەکە دەکەن.'),
      p('Bu, üç bağımsız çalışmayla doğrulandı.', 'BU ÜÇ ba-ğım-SIZ ça-lış-may-LA doğ-ru-lan-DI', 'تأكّد هذا بثلاث دراسات مستقلّة.', 'ئەمە بە سێ توێژینەوەی سەربەخۆ پشتڕاست کرایەوە.'),
      p('Korelasyon nedensellik anlamına gelmez.', 'ko-re-las-YON ne-den-sel-LİK an-la-mı-NA gel-MEZ', 'الارتباط لا يعني السببية.', 'پەیوەندی واتای هۆکاری نادات.'),
      p('Sapma standardın üzerinde.', 'sap-MA stan-dar-DIN ü-ze-rin-DE', 'الانحراف فوق المعياري.', 'لادانەکە لە ستاندارد بەرزترە.'),
      p('Kaynağı doğrudan alıntıladım.', 'kay-na-ĞI doğ-ru-DAN a-lın-tı-la-DIM', 'اقتبست المصدر مباشرةً.', 'ڕاستەوخۆ لە سەرچاوەکە وەرمگرت.'),
      p('Bu veriler sınırlı bir dönemi kapsıyor.', 'BU ve-ri-LER sı-nır-LI bir dö-ne-Mİ kap-sı-YOR', 'تغطّي هذه البيانات فترة محدودة.', 'ئەم داتایانە ماوەیەکی سنووردار دەگرنەوە.'),
      p('Aksini gösteren bir çalışma yok.', 'ak-si-Nİ gös-te-REN bir ça-lış-MA yok', 'لا توجد دراسة تُظهر العكس.', 'توێژینەوەیەک نییە پێچەوانەکەی نیشان بدات.'),
      p('Bu bağlamda dikkatli olmakta fayda var.', 'BU bağ-lam-DA dik-kat-Lİ ol-mak-TA fay-DA var', 'من المفيد التزام الحذر في هذا السياق.', 'لەم چوارچێوەیەدا سوودی هەیە ئاگادار بین.'),
    ],
  },
];
