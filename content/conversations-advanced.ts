import type { Lesson } from '@/types/content';
import { b, listening, mcq, order, speak, translate } from './shared/helpers';

/**
 * Advanced conversation lessons (B2 -> C1+).
 *
 * These are deliberately harder than the B1 dialogues in `conversations.ts`:
 * speakers interrupt, hedge, disagree politely and use idiom. Every line is
 * speakable, so these double as the source material for advanced listening
 * practice.
 */
export const ADVANCED_CONVERSATIONS: Lesson[] = [
  {
    id: 'conv-b2-negotiation',
    level: 'b2',
    kind: 'conversation',
    order: 41,
    minutes: 24,
    title: 'Fiyat Görüşmesi',
    titleI18n: b('مفاوضة على السعر', 'دانوستان لەسەر نرخ'),
    objective: b(
      'أن تفاوض بأدب: تعترض، تقترح بديلاً، وتغلق الاتفاق دون فظاظة.',
      'ئەوەی بە ڕێزەوە دانوستان بکەیت: ناڕەزایی دەربڕیت، بەدیلێک پێشنیار بکەیت، و ڕێککەوتنەکە کۆتایی پێبهێنیت.',
    ),
    tags: ['dialogue', 'business', 'negotiation'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Tedarikçiyle görüşme',
        lines: [
          { speaker: 'Alıcı', tr: 'Teklifinizi inceledik. Açıkçası birim fiyat beklentimizin biraz üzerinde.', pron: 'tek-li-fi-ni-Zİ in-dje-le-DİK a-çık-ça-SI bi-RİM fi-YAT bek-len-ti-mi-ZİN bi-RAZ ü-ze-rin-DE', ar: 'درسنا عرضكم. بصراحة سعر الوحدة أعلى قليلاً من توقّعاتنا.', ku: 'پێشنیارەکەتانمان پێداچووەوە. ڕاستییەکەی نرخی یەکە کەمێک لە چاوەڕوانیمان بەرزترە.' },
          { speaker: 'Satıcı', tr: 'Anlıyorum. Ancak bu fiyat, kalite belgeleri ve iki yıllık garantiyi de kapsıyor.', pron: 'an-lı-YO-rum an-DJAK BU fi-YAT ka-li-TE bel-ge-le-Rİ ve i-Kİ yıl-LIK ga-ran-ti-Yİ de kap-sı-YOR', ar: 'أتفهّم. غير أن هذا السعر يشمل شهادات الجودة وضماناً لمدة سنتين.', ku: 'تێدەگەم. بەڵام ئەم نرخە بەڵگەنامەکانی کوالیتی و گەرەنتی دوو ساڵەش لەخۆدەگرێت.' },
          { speaker: 'Alıcı', tr: 'Bunu göz önünde bulunduruyoruz. Yine de sipariş hacmini artırırsak bir indirim mümkün mü?', pron: 'bu-NU GÖZ ö-nün-DE bu-lun-du-ru-YO-ruz yi-NE de si-pa-RİŞ hadj-mi-Nİ ar-tı-rır-SAK bir in-di-RİM müm-KÜN mü', ar: 'نأخذ هذا بعين الاعتبار. ومع ذلك، هل يمكن الحصول على خصم إن زدنا حجم الطلب؟', ku: 'ئەمە لەبەرچاو دەگرین. لەگەڵ ئەوەشدا، ئەگەر بڕی داواکاری زیاد بکەین داشکاندن گونجاوە؟' },
          { speaker: 'Satıcı', tr: 'Beş bin adedin üzerine çıkarsanız yüzde yedi indirim yapabiliriz. Bunun altında maalesef mümkün değil.', pron: 'BEŞ BİN a-de-DİN ü-ze-ri-NE çı-kar-sa-NIZ yüz-DE ye-Dİ in-di-RİM ya-pa-bi-li-RİZ bu-NUN al-tın-DA ma-a-le-SEF müm-KÜN de-İL', ar: 'إن تجاوزتم خمسة آلاف قطعة يمكننا خصم سبعة بالمئة. أقل من ذلك غير ممكن للأسف.', ku: 'ئەگەر لە پێنج هەزار دانە زیاتر بکەن دەتوانین حەوت لە سەد داشکاندن بکەین. کەمتر لەوە بەداخەوە گونجاو نییە.' },
          { speaker: 'Alıcı', tr: 'Peki teslim süresi? Bizim için fiyat kadar kritik.', pron: 'pe-Kİ tes-LİM sü-re-Sİ bi-ZİM i-ÇİN fi-YAT ka-DAR kri-TİK', ar: 'وماذا عن مدة التسليم؟ هي حرجة بالنسبة لنا بقدر السعر.', ku: 'باشە ماوەی ڕادەستکردن؟ بۆ ئێمە بەقەد نرخ گرنگە.' },
          { speaker: 'Satıcı', tr: 'Standart süre altı hafta. Aciliyet varsa dört haftaya indirebiliriz, ancak bu ek maliyet doğurur.', pron: 'stan-DART sü-RE al-TI haf-TA a-dji-li-YET var-SA DÖRT haf-ta-YA in-di-re-bi-li-RİZ an-DJAK BU EK ma-li-YET do-u-RUR', ar: 'المدة القياسية ستة أسابيع. إن كان هناك استعجال يمكننا خفضها إلى أربعة، غير أن ذلك يولّد تكلفة إضافية.', ku: 'ماوەی ستانداردی شەش هەفتەیە. ئەگەر پەلە هەبێت دەتوانین بۆ چوار هەفتە کەمی بکەینەوە، بەڵام ئەمە تێچووی زیادە دروست دەکات.' },
          { speaker: 'Alıcı', tr: 'Şöyle yapalım: altı hafta kabul, ama yüzde yedi indirim ve nakliye size ait.', pron: 'şöy-LE ya-pa-LIM al-TI haf-TA ka-BUL a-MA yüz-DE ye-Dİ in-di-RİM ve nak-li-YE si-ZE a-İT', ar: 'لنفعل هكذا: نقبل ستة أسابيع، لكن بخصم سبعة بالمئة والشحن عليكم.', ku: 'با بەم شێوەیە بکەین: شەش هەفتە قبووڵە، بەڵام حەوت لە سەد داشکاندن و گواستنەوەش لەسەر ئێوە.' },
          { speaker: 'Satıcı', tr: 'Nakliyeyi paylaşırsak anlaşabiliriz. Yarım yarıma ne dersiniz?', pron: 'nak-li-ye-Yİ pay-la-şır-SAK an-la-şa-bi-li-RİZ ya-RIM ya-rı-MA NE der-si-niz', ar: 'إن تقاسمنا الشحن يمكننا الاتفاق. ما رأيكم بالمناصفة؟', ku: 'ئەگەر گواستنەوەکە بەش بکەین دەتوانین ڕێک بکەوین. نیوە بە نیوە چۆنە؟' },
          { speaker: 'Alıcı', tr: 'Kabul. Sözleşmeyi bu şartlarla hazırlayıp size gönderelim.', pron: 'ka-BUL söz-leş-me-Yİ BU şart-lar-LA ha-zır-la-YIP si-ZE gön-de-re-LİM', ar: 'موافقون. سنعدّ العقد بهذه الشروط ونرسله إليكم.', ku: 'قبووڵە. گرێبەستەکە بەم مەرجانە ئامادە دەکەین و بۆتانی دەنێرین.' },
          { speaker: 'Satıcı', tr: 'Memnuniyetle. İş birliğimizin uzun soluklu olmasını dilerim.', pron: 'mem-nu-ni-yet-LE İŞ bir-li-i-mi-ZİN u-ZUN so-luk-LU ol-ma-sı-NI di-le-rim', ar: 'بكل سرور. أتمنى أن يكون تعاوننا طويل الأمد.', ku: 'بە خۆشحاڵییەوە. هیوادارم هاوکارییەکەمان درێژخایەن بێت.' },
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Pazarlığın dili',
        body: b(
          'لاحظ ثلاث أدوات تفاوضية: (1) "Açıkçası…" لتليين الاعتراض، (2) "Ancak…" للاعتراض المهذّب بعد الموافقة الظاهرية، (3) "Şöyle yapalım:" لطرح صفقة مضادّة. من يتقنها يفاوض بالتركية دون أن يبدو فظاً.',
          'سەرنج بدە سێ ئامرازی دانوستان: (١) "Açıkçası…" بۆ نەرمکردنی ناڕەزایی، (٢) "Ancak…" بۆ ناڕەزایی بەڕێزانە دوای ڕەزامەندی ڕواڵەتی، (٣) "Şöyle yapalım:" بۆ خستنەڕووی ڕێککەوتنێکی بەرامبەر.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما الشرط الذي وضعه البائع للخصم؟', 'فرۆشیار چ مەرجێکی بۆ داشکاندن دانا؟'),
        [
          'Peşin ödeme',
          'Beş bin adedin üzerinde sipariş',
          'Uzun teslim süresi',
          'Nakliyeyi alıcının üstlenmesi',
        ],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('كيف انتهى التفاوض حول الشحن؟', 'دانوستان لەسەر گواستنەوە چۆن کۆتایی هات؟'),
        [
          'Satıcı tamamen üstlendi',
          'Alıcı tamamen üstlendi',
          'Yarı yarıya paylaştılar',
          'Anlaşamadılar',
        ],
        2,
        { turkishOptions: true },
      ),
      translate('tr-ar', 'Bunun altında maalesef mümkün değil.', [
        'أقل من ذلك غير ممكن للأسف.',
        'هذا ممكن بالتأكيد.',
        'تحت هذا السعر ممكن.',
        'للأسف السعر مرتفع.',
      ], 0),
      order(
        b('رتّب: هل يمكن الحصول على خصم إن زدنا حجم الطلب؟', 'ڕێک بخە: ئەگەر بڕی داواکاری زیاد بکەین داشکاندن گونجاوە؟'),
        'Sipariş hacmini artırırsak bir indirim mümkün mü',
        'إن زدنا حجم الطلب، هل الخصم ممكن؟',
        'ئەگەر بڕی داواکاری زیاد بکەین، داشکاندن گونجاوە؟',
      ),
      speak('Açıkçası birim fiyat beklentimizin biraz üzerinde.', 'a-çık-ça-SI bi-RİM fi-YAT bek-len-ti-mi-ZİN bi-RAZ ü-ze-rin-DE', 'بصراحة سعر الوحدة أعلى قليلاً من توقّعاتنا.', 'ڕاستییەکەی نرخی یەکە کەمێک لە چاوەڕوانیمان بەرزترە.'),
    ],
  },

  {
    id: 'conv-c1-disagreement',
    level: 'c1',
    kind: 'conversation',
    order: 41,
    minutes: 26,
    title: 'Kibarca Karşı Çıkmak',
    titleI18n: b('الاعتراض بلباقة', 'ناڕەزایی بە ڕێزەوە'),
    objective: b(
      'أن تخالف رئيسك أو أستاذك دون أن تبدو وقحاً، وأن تسحب اعتراضك بأناقة.',
      'ئەوەی جیاواز بیت لەگەڵ بەڕێوەبەر یان مامۆستاکەت بەبێ ئەوەی بێڕێز دەربکەویت.',
    ),
    tags: ['dialogue', 'pragmatics', 'workplace'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Proje toplantısında',
        lines: [
          { speaker: 'Müdür', tr: 'Bence lansmanı bir ay öne çekmeliyiz. Rakipler hızlanıyor.', pron: 'ben-DJE lan-sma-NI bir AY ö-NE çek-me-li-YİZ ra-kip-LER hız-la-nı-YOR', ar: 'برأيي علينا تقديم الإطلاق شهراً. المنافسون يتسارعون.', ku: 'بە بۆچوونی من دەبێت دەستپێکردنەکە مانگێک پێشبخەین. ڕکابەرەکان خێرا دەبن.' },
          { speaker: 'Ekip lideri', tr: 'Kaygınızı çok iyi anlıyorum. Yalnız şu var ki, test aşaması henüz tamamlanmadı.', pron: 'kay-gı-nı-ZI ÇOK i-Yİ an-lı-YO-rum yal-NIZ ŞU VAR Kİ TEST a-şa-ma-SI he-NÜZ ta-mam-lan-ma-DI', ar: 'أتفهّم قلقكم جيداً. إلا أن هناك أمراً: مرحلة الاختبار لم تكتمل بعد.', ku: 'زۆر باش لە نیگەرانیتان تێدەگەم. بەڵام شتێک هەیە: قۆناغی تاقیکردنەوە هێشتا تەواو نەبووە.' },
          { speaker: 'Müdür', tr: 'Testleri paralel yürütemez miyiz?', pron: 'test-le-Rİ pa-ra-LEL yü-rü-te-MEZ mi-yiz', ar: 'ألا يمكننا إجراء الاختبارات بالتوازي؟', ku: 'ناتوانین تاقیکردنەوەکان بە هاوتەریب ئەنجام بدەین؟' },
          { speaker: 'Ekip lideri', tr: 'Teorik olarak mümkün. Ne var ki geçen sefer aynı yolu denediğimizde hata oranı iki katına çıkmıştı.', pron: 'te-o-RİK o-la-RAK müm-KÜN NE VAR Kİ ge-ÇEN se-FER ay-NI yo-LU de-ne-di-i-miz-DE ha-TA o-ra-NI i-Kİ ka-tı-NA çık-mış-TI', ar: 'ممكن نظرياً. غير أنه حين جرّبنا الطريق نفسه المرة الماضية تضاعف معدّل الأخطاء.', ku: 'لە ڕووی تیۆرییەوە گونجاوە. بەڵام جاری پێشوو کە هەمان ڕێگامان تاقی کردەوە ڕێژەی هەڵە دوو قات ببوو.' },
          { speaker: 'Müdür', tr: 'Hmm. Peki ne öneriyorsun?', pron: 'HMM pe-Kİ NE ö-ne-ri-yor-sun', ar: 'همم. وماذا تقترح إذن؟', ku: 'همم. باشە چی پێشنیار دەکەیت؟' },
          { speaker: 'Ekip lideri', tr: 'İki haftalık bir öne çekme öneriyorum. Bu, hem rekabet baskısını karşılar hem de test kalitesinden ödün vermemizi gerektirmez.', pron: 'i-Kİ haf-ta-LIK bir ö-NE çek-ME ö-ne-ri-YO-rum BU HEM re-ka-BET bas-kı-sı-NI kar-şı-LAR HEM de TEST ka-li-te-sin-DEN ö-DÜN ver-me-mi-Zİ ge-rek-tir-MEZ', ar: 'أقترح تقديماً بأسبوعين. هذا يلبّي ضغط المنافسة ولا يستلزم التنازل عن جودة الاختبار.', ku: 'پێشخستنێکی دوو هەفتەیی پێشنیار دەکەم. ئەمە هەم فشاری ڕکابەری دەخاتە لاوە هەمیش پێویست ناکات لە کوالیتی تاقیکردنەوە بگەڕێینەوە.' },
          { speaker: 'Müdür', tr: 'Bunu düşünmemiştim. Rakamlarla destekleyebilir misin?', pron: 'bu-NU dü-şün-me-miş-TİM ra-kam-lar-LA des-tek-le-ye-bi-LİR mi-sin', ar: 'لم أفكّر في ذلك. أيمكنك دعمه بالأرقام؟', ku: 'بیرم لەوە نەکردبووەوە. دەتوانیت بە ژمارە پاڵپشتی بکەیت؟' },
          { speaker: 'Ekip lideri', tr: 'Elbette. Yarın sabaha kadar kısa bir analiz hazırlarım.', pron: 'el-bet-TE ya-RIN sa-ba-HA ka-DAR kı-SA bir a-na-LİZ ha-zır-la-RIM', ar: 'بالتأكيد. سأعدّ تحليلاً قصيراً بحلول صباح الغد.', ku: 'بێگومان. تا بەیانی سبەینێ شیکارییەکی کورت ئامادە دەکەم.' },
          { speaker: 'Müdür', tr: 'İyi. Ben de yönetim kuruluna bu şekilde sunarım.', pron: 'i-Yİ BEN de yö-ne-TİM ku-ru-lu-NA BU şe-kil-DE su-na-RIM', ar: 'جيد. وأنا سأعرضه على مجلس الإدارة بهذا الشكل.', ku: 'باشە. منیش بەم شێوەیە پێشکەشی ئەنجومەنی بەڕێوەبردنی دەکەم.' },
        ],
      },
      {
        type: 'note',
        tone: 'rule',
        title: 'Karşı çıkmanın üç adımı',
        body: b(
          'الصيغة التركية للاعتراض المهذّب ثلاثية دائماً: (1) اعترف بموقف الطرف الآخر — "Kaygınızı anlıyorum". (2) أدخل التحفّظ بأداة ناعمة — "Yalnız şu var ki…" أو "Ne var ki…". (3) اعرض بديلاً ملموساً، لا مجرّد رفض. الرفض بلا بديل يُقرأ في التركية كتحدٍّ شخصي.',
          'شێوازی تورکی بۆ ناڕەزایی بەڕێزانە هەمیشە سێ قۆناغە: (١) دان بە هەڵوێستی لای بەرامبەردا بنێ — "Kaygınızı anlıyorum". (٢) تێبینییەکە بە ئامرازێکی نەرم بخەرە ناو — "Yalnız şu var ki…". (٣) بەدیلێکی بەرجەستە پێشکەش بکە، نەک تەنها ڕەتکردنەوە.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما الأداة التي استخدمها قائد الفريق لإدخال اعتراضه؟', 'سەرۆکی تیم چ ئامرازێکی بەکارهێنا بۆ خستنەناوی ناڕەزاییەکەی؟'),
        ['Kesinlikle hayır', 'Yalnız şu var ki', 'Bence yanlış', 'Olmaz'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('لماذا رفض تشغيل الاختبارات بالتوازي؟', 'بۆچی ڕەتی کردەوە تاقیکردنەوەکان بە هاوتەریب ئەنجام بدرێن؟'),
        [
          'Zaman yetmiyordu',
          'Geçen sefer hata oranı iki katına çıkmıştı',
          'Ekip küçüktü',
          'Müdür izin vermemişti',
        ],
        1,
        { turkishOptions: true },
      ),
      translate('tr-ku', 'Kaygınızı çok iyi anlıyorum.', [
        'زۆر باش لە نیگەرانیتان تێدەگەم.',
        'نیگەرانیتان قبووڵ ناکەم.',
        'نیگەران مەبن.',
        'نازانم چی دەڵێیت.',
      ], 0),
      speak('Kaygınızı anlıyorum; yalnız şu var ki test aşaması henüz tamamlanmadı.', 'kay-gı-nı-ZI an-lı-YO-rum yal-NIZ ŞU VAR Kİ TEST a-şa-ma-SI he-NÜZ ta-mam-lan-ma-DI', 'أتفهّم قلقكم؛ إلا أن مرحلة الاختبار لم تكتمل بعد.', 'لە نیگەرانیتان تێدەگەم؛ بەڵام قۆناغی تاقیکردنەوە هێشتا تەواو نەبووە.'),
    ],
  },

  {
    id: 'conv-c1plus-smalltalk',
    level: 'c1plus',
    kind: 'conversation',
    order: 41,
    minutes: 28,
    title: 'Deyimlerle Sohbet',
    titleI18n: b('حديث ودّي بالاصطلاحات', 'گفتوگۆی دۆستانە بە ئیدیۆم'),
    objective: b(
      'أن تفهم حديثاً عفوياً بين صديقين مليئاً بالاصطلاحات والتلميحات.',
      'ئەوەی گفتوگۆیەکی ئاسایی نێوان دوو هاوڕێ تێبگەیت کە پڕە لە ئیدیۆم و ئاماژە.',
    ),
    tags: ['dialogue', 'idiomatic', 'informal'],
    blocks: [
      {
        type: 'dialogue',
        title: 'Kahve molasında',
        lines: [
          { speaker: 'Deniz', tr: 'Ya, sonunda! Nerelerdesin, kayıplara karıştın.', pron: 'YA so-nun-DA ne-re-ler-de-SİN ka-yıp-la-RA ka-rış-TIN', ar: 'أخيراً! أين كنت، اختفيت تماماً.', ku: 'لە کۆتاییدا! لە کوێ بوویت، بە تەواوی ون بوویت.' },
          { speaker: 'Emre', tr: 'Sorma. Son iki aydır işten başımı kaşıyacak vaktim olmadı.', pron: 'sor-MA SON i-Kİ ay-DIR iş-TEN ba-şı-MI ka-şı-ya-DJAK vak-TİM ol-ma-DI', ar: 'لا تسأل. منذ شهرين لم يكن لديّ وقت حتى لألتقط أنفاسي من العمل.', ku: 'مەپرسە. دوو مانگە لە کارەوە کاتم نەبووە تەنانەت سەری خۆم بخوڕم.' },
          { speaker: 'Deniz', tr: 'Anlıyorum da biraz da kendine vakit ayır. Sağlık her şeyin başı.', pron: 'an-lı-YO-rum da bi-RAZ da ken-di-NE va-KİT a-YIR sa-LIK her şe-YİN ba-ŞI', ar: 'أفهم، لكن خصّص بعض الوقت لنفسك أيضاً. الصحة أساس كل شيء.', ku: 'تێدەگەم، بەڵام کەمێک کاتیش بۆ خۆت تەرخان بکە. تەندروستی سەرەتای هەموو شتێکە.' },
          { speaker: 'Emre', tr: 'Haklısın da elimde değil. Proje bitmek bilmiyor.', pron: 'hak-lı-SIN da e-lim-DE de-İL pro-JE bit-MEK bil-mi-YOR', ar: 'أنت محق لكن الأمر ليس بيدي. المشروع لا ينتهي أبداً.', ku: 'ڕاست دەکەیت بەڵام لە دەستم نییە. پڕۆژەکە کۆتایی نایەت.' },
          { speaker: 'Deniz', tr: 'Yeni müdür nasıl peki? Duyduğuma göre biraz sert.', pron: 'ye-Nİ mü-DÜR na-SIL pe-Kİ duy-du-u-MA gö-RE bi-RAZ SERT', ar: 'وكيف المدير الجديد؟ سمعت أنه قاسٍ بعض الشيء.', ku: 'باشە بەڕێوەبەرە نوێیەکە چۆنە؟ بەپێی ئەوەی بیستوومە کەمێک توندە.' },
          { speaker: 'Emre', tr: 'İlk başta öyle sandım ama meğer altın kalpliymiş. Sadece işini ciddiye alıyor.', pron: 'İLK baş-TA öy-LE san-DIM a-MA me-ĞER al-TIN kalp-liy-MİŞ sa-de-DJE i-şi-Nİ djid-di-YE a-lı-YOR', ar: 'ظننت ذلك في البداية لكن تبيّن أن قلبه من ذهب. هو فقط يأخذ عمله على محمل الجدّ.', ku: 'لە سەرەتادا وامزانی بەڵام دەرکەوت دڵی زێڕینە. تەنها کارەکەی بە جددی وەردەگرێت.' },
          { speaker: 'Deniz', tr: 'İyi o zaman. Bak, bu cuma bize gelsene. Uzun zamandır oturup konuşmadık.', pron: 'i-Yİ O za-MAN BAK BU dju-MA bi-ZE gel-se-NE u-ZUN za-man-DIR o-tu-RUP ko-nuş-ma-DIK', ar: 'جيد إذن. اسمع، تعال إلينا هذه الجمعة. لم نجلس ونتحدّث منذ وقت طويل.', ku: 'باشە کەواتە. گوێبگرە، ئەم هەینییە وەرە لامان. ماوەیەکی زۆرە دانەنیشتووین و قسەمان نەکردووە.' },
          { speaker: 'Emre', tr: 'Olur, söz. Ama bu sefer sözümü tutacağım, geçen seferki gibi olmaz.', pron: 'o-LUR SÖZ a-MA BU se-FER sö-zü-MÜ tu-ta-dja-IM ge-ÇEN se-fer-Kİ gi-Bİ ol-MAZ', ar: 'اتفقنا، أعدك. لكن هذه المرة سأفي بوعدي، لن يكون كالمرة الماضية.', ku: 'باشە، بەڵێن. بەڵام ئەم جارە بەڵێنەکەم دەبەمە سەر، وەک جاری پێشوو نابێت.' },
          { speaker: 'Deniz', tr: 'Bakalım, göreceğiz. Kaçamazsın artık!', pron: 'ba-ka-LIM gö-re-dje-İZ ka-ça-maz-SIN ar-TIK', ar: 'لنرَ، سنشوف. لن تستطيع الهرب بعد الآن!', ku: 'با ببینین. ئیتر ناتوانیت هەڵبێیت!' },
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Bu diyalogdaki deyimler',
        body: b(
          'خمسة اصطلاحات هنا لا يمكن ترجمتها حرفياً: (1) "kayıplara karışmak" = يختفي تماماً. (2) "başını kaşıyacak vakti olmamak" = لا يجد وقتاً لالتقاط أنفاسه. (3) "elimde değil" = ليس بيدي. (4) "altın kalpli" = طيّب القلب. (5) "sözünü tutmak" = يفي بوعده. حاول ألا تفكّك كلماتها.',
          'پێنج ئیدیۆم لێرەدا هەن کە ناتوانرێت وشە بە وشە وەربگێڕدرێن: (١) "kayıplara karışmak" = بە تەواوی ون بوون. (٢) "başını kaşıyacak vakti olmamak" = کاتی هەناسەدانی نەبوون. (٣) "elimde değil" = لە دەستم نییە. (٤) "altın kalpli" = دڵزێڕین. (٥) "sözünü tutmak" = بەڵێن بردنە سەر.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما معنى "kayıplara karışmak"؟', 'واتای "kayıplara karışmak" چییە؟'),
        ['Yolunu kaybetmek', 'Ortadan tamamen kaybolmak', 'Bir şey kaybetmek', 'Taşınmak'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('ما رأي إمره في المدير الجديد في النهاية؟', 'لە کۆتاییدا بۆچوونی ئەمرە دەربارەی بەڕێوەبەرە نوێیەکە چییە؟'),
        [
          'Gerçekten çok sert biri',
          'Aslında iyi kalpli, sadece işini ciddiye alıyor',
          'Hiç tanımıyor',
          'Ondan hoşlanmıyor',
        ],
        1,
        { turkishOptions: true },
      ),
      listening('Meğer altın kalpliymiş.', [
        'تبيّن أن قلبه من ذهب.',
        'قلبه قاسٍ جداً.',
        'اشترى قلباً ذهبياً.',
      ], 0, 'ar'),
      translate('tr-ar', 'Bu sefer sözümü tutacağım.', [
        'هذه المرة سأفي بوعدي.',
        'هذه المرة سأمسك كلامي.',
        'لن أتكلّم هذه المرة.',
        'وعدتك مرة أخرى.',
      ], 0),
      speak('Sorma, son iki aydır başımı kaşıyacak vaktim olmadı.', 'sor-MA SON i-Kİ ay-DIR ba-şı-MI ka-şı-ya-DJAK vak-TİM ol-ma-DI', 'لا تسأل، منذ شهرين لم أجد وقتاً لالتقاط أنفاسي.', 'مەپرسە، دوو مانگە کاتی هەناسەدانم نەبووە.'),
    ],
  },
];
