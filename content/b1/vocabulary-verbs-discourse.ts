import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, sense, w } from '../shared/helpers';

/**
 * B1–B2 vocabulary: the verbs of saying, causing and containing.
 *
 * The verb audit found the curriculum strong on *doing* verbs and weak on the
 * three families that carry an argument:
 *
 *   saying     `ifade etmek`, `dile getirmek`, `değinmek`, `bahsetmek`
 *   causing    `neden olmak`, `kaynaklanmak`, `sonuçlanmak`, `etkilenmek`
 *   containing `içermek`, `kapsamak`, `oluşmak`, `barındırmak`
 *
 * These are what a student needs the moment they stop describing and start
 * explaining. Each one governs a specific case, and getting the case wrong is
 * the commonest B1 error — so the case is stated in the note, not left to be
 * discovered by being marked wrong.
 */

/* ---------------- saying ---------------- */

const SAYING: VocabItem[] = pack('verbs', 'b1', 'verb', [
  {
    ...w('tartışmak', 'tar-tış-MAK', 'يناقش؛ يتجادل', 'گفتوگۆکردن؛ دەمەقاڵێ',
      ['Konuyu uzun uzun tartıştık.', 'ko-nu-YU u-ZUN u-ZUN tar-tış-TIK', 'ناقشنا الموضوع مطوّلاً.', 'زۆر لەسەر بابەتەکە گفتوگۆمان کرد.']),
    senses: [
      sense('يتشاجر كلامياً', 'دەمەقاڵێکردن',
        ['Dün akşam kardeşimle tartıştım.', 'DÜN ak-ŞAM kar-de-şim-LE tar-tış-TIM', 'تجادلت مع أخي ليلة أمس.', 'دوێنێ ئێوارە لەگەڵ براکەم دەمەقاڵێم کرد.']),
    ],
    related: ['tartışma'],
    note: b(
      '⚠️ معنيان يفصلهما النبرة والسياق: نقاش هادئ، أو شجار. «tartışmaya girmek» يميل للثاني.',
      '⚠️ دوو واتا: گفتوگۆی ئارام، یان دەمەقاڵێ.',
    ),
  },
  {
    ...w('ifade etmek', 'i-fa-DE et-MEK', 'يعبّر عن؛ يفيد بـ', 'دەربڕین',
      ['Görüşünü açıkça ifade etti.', 'gö-rü-şü-NÜ a-çık-ÇA i-fa-DE et-Tİ', 'عبّر عن رأيه بوضوح.', 'بۆچوونی بە ئاشکرا دەربڕی.']),
    collocations: ['görüş ifade etmek', 'ifade vermek'],
    note: b(
      'في السياق القضائي «ifade vermek» = يدلي بإفادته — استعمال مختلف تماماً.',
      'لە دادگادا «ifade vermek» = وتەی خۆی دان.',
    ),
  },
  {
    ...w('dile getirmek', 'di-LE ge-tir-MEK', 'يطرح، يعبّر عمّا في نفسه', 'خستنەڕوو',
      ['Endişelerini dile getirdi.', 'en-di-şe-le-ri-Nİ di-LE ge-tir-Dİ', 'طرح مخاوفه.', 'نیگەرانییەکانی خستەڕوو.']),
    note: b(
      'حرفياً «يُحضر إلى اللسان» — تعبير أدبيّ الأصل صار عادياً في اللغة الرسمية.',
      'لە ڕەگدا «هێنانە سەر زمان»ە.',
    ),
  },
  {
    ...w('bahsetmek', 'bah-set-MEK', 'يذكر، يتحدّث عن', 'باسکردن',
      ['Bundan hiç bahsetmedi.', 'bun-DAN HİÇ bah-set-me-Dİ', 'لم يذكر هذا إطلاقاً.', 'هیچ باسی ئەمەی نەکرد.']),
    related: ['söz etmek'],
    note: b(
      '⚠️ يأخذ حالة الابتداء: «bundan bahsetti» لا «bunu bahsetti». نفس منطق «تحدّث عن».',
      '⚠️ حاڵەتی سەرچاوە وەردەگرێت: «bundan bahsetti».',
    ),
  },
  {
    ...w('söz etmek', 'SÖZ et-MEK', 'يأتي على ذكر', 'باسکردن',
      ['Raporda bundan söz edilmiyor.', 'ra-por-DA bun-DAN SÖZ e-dil-mi-YOR', 'لا يُذكر هذا في التقرير.', 'لە ڕاپۆرتەکەدا باسی ئەمە ناکرێت.']),
    related: ['bahsetmek'],
  },
  {
    ...w('değinmek', 'de-ğin-MEK', 'يتطرّق إلى، يشير عابراً', 'ئاماژەکردن',
      ['Yazar bu soruna kısaca değiniyor.', 'ya-ZAR BU so-ru-NA kı-sa-CA de-ği-ni-YOR', 'يتطرّق الكاتب لهذه المشكلة باختصار.', 'نووسەرەکە بە کورتی ئاماژە بەم کێشەیە دەکات.']),
    note: b(
      '⚠️ يأخذ حالة الاتّجاه: «konuya değindi». ويحمل معنى «بإيجاز» — ليس شرحاً كاملاً.',
      '⚠️ حاڵەتی ئاراستە وەردەگرێت و واتای «بە کورتی» دەگەیەنێت.',
    ),
  },
  {
    ...w('vurgu yapmak', 'vur-GU yap-MAK', 'يشدّد على', 'جەختکردن',
      ['Kalite üzerine vurgu yaptı.', 'ka-li-TE ü-ze-ri-NE vur-GU yap-TI', 'شدّد على الجودة.', 'جەختی لەسەر کوالیتی کردەوە.']),
    related: ['vurgulamak'],
  },
]);

/* ---------------- causing ---------------- */

const CAUSING: VocabItem[] = pack('verbs', 'b1', 'verb', [
  {
    ...w('neden olmak', 'NE-den ol-MAK', 'يسبّب', 'دەبێتە هۆی',
      ['Yoğun yağış sele neden oldu.', 'yo-ĞUN ya-ĞIŞ se-LE NE-den ol-DU', 'تسبّب المطر الغزير في فيضان.', 'بارانی زۆر بووە هۆی لافاو.']),
    related: ['sebep olmak', 'yol açmak'],
    note: b(
      '⚠️ النتيجة تأخذ حالة الاتّجاه: «kazaya neden oldu». ثلاث صيغ مترادفة عملياً: neden olmak · sebep olmak · yol açmak.',
      '⚠️ ئەنجامەکە حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('sebep olmak', 'se-BEP ol-MAK', 'يكون سبباً في', 'دەبێتە هۆکار',
      ['Dikkatsizlik kazaya sebep oldu.', 'dik-kat-siz-LİK ka-za-YA se-BEP ol-DU', 'أدّى الإهمال إلى الحادث.', 'بێئاگایی بووە هۆی ڕووداوەکە.']),
    related: ['neden olmak'],
  },
  {
    ...w('kaynaklanmak', 'kay-nak-lan-MAK', 'ينبع من، ينتج عن', 'سەرچاوەگرتن',
      ['Sorun iletişim eksikliğinden kaynaklanıyor.', 'so-RUN i-le-ti-ŞİM ek-sik-li-ğin-DEN kay-nak-la-nı-YOR', 'المشكلة ناتجة عن نقص التواصل.', 'کێشەکە لە کەمی پەیوەندییەوە سەرچاوە دەگرێت.']),
    related: ['kaynak'],
    note: b(
      '⚠️ السبب يأخذ حالة الابتداء: «-den kaynaklanmak». هذا الفعل هو الأشيع في الكتابة التحليلية.',
      '⚠️ هۆکارەکە حاڵەتی سەرچاوە وەردەگرێت.',
    ),
  },
  {
    ...w('sonuçlanmak', 'so-nuç-lan-MAK', 'ينتهي إلى، يُسفر عن', 'کۆتایی هاتن بە',
      ['Görüşmeler anlaşmayla sonuçlandı.', 'gö-rüş-me-LER an-laş-may-LA so-nuç-lan-DI', 'انتهت المفاوضات باتّفاق.', 'دانوستانەکان بە ڕێککەوتن کۆتاییان هات.']),
    related: ['sonuç'],
    note: b(
      '⚠️ النتيجة تأخذ اللاحقة -la/-le: «başarıyla sonuçlandı».',
      '⚠️ ئەنجامەکە پاشگری -la/-le وەردەگرێت.',
    ),
  },
  {
    ...w('etkilenmek', 'et-ki-len-MEK', 'يتأثّر بـ', 'کاریگەری لێبوون',
      ['Bu karardan herkes etkilendi.', 'BU ka-rar-DAN her-KES et-ki-len-Dİ', 'تأثّر الجميع بهذا القرار.', 'هەموو کەس لەم بڕیارە کاریگەر بوو.']),
    related: ['etkilemek', 'etki'],
    note: b(
      '⚠️ مصدر التأثير يأخذ حالة الابتداء: «-den etkilenmek».',
      '⚠️ سەرچاوەی کاریگەری حاڵەتی سەرچاوە وەردەگرێت.',
    ),
  },
  {
    ...w('ilgilendirmek', 'il-gi-len-dir-MEK', 'يخصّ، يعني', 'پەیوەندیدارکردن',
      ['Bu konu hepimizi ilgilendiriyor.', 'BU ko-NU he-pi-mi-Zİ il-gi-len-di-ri-YOR', 'هذا الموضوع يخصّنا جميعاً.', 'ئەم بابەتە پەیوەندی بە هەموومانەوە هەیە.']),
    related: ['ilgilenmek'],
    note: b(
      '⚠️ لا تخلطها بـ «ilgilenmek» = يهتمّ بـ. هذه: الموضوع يخصّني. تلك: أنا أهتمّ بالموضوع.',
      '⚠️ تێکەڵی «ilgilenmek» مەکە.',
    ),
  },
  {
    ...w('karşı karşıya kalmak', 'kar-ŞI kar-şı-YA kal-MAK', 'يواجه، يجد نفسه أمام', 'ڕووبەڕووبوونەوە',
      ['Ciddi bir sorunla karşı karşıya kaldık.', 'cid-Dİ bir so-run-LA kar-ŞI kar-şı-YA kal-DIK', 'واجهنا مشكلة جدّية.', 'ڕووبەڕووی کێشەیەکی جدی بووینەوە.']),
    note: b(
      '⚠️ ما تواجهه يأخذ اللاحقة -la/-le.',
      '⚠️ ئەوەی ڕووبەڕووی دەبیتەوە پاشگری -la/-le وەردەگرێت.',
    ),
  },
]);

/* ---------------- containing and consisting ---------------- */

const CONTAINING: VocabItem[] = pack('verbs', 'b1', 'verb', [
  {
    ...w('içermek', 'i-çer-MEK', 'يتضمّن، يحتوي على', 'لەخۆگرتن',
      ['Rapor üç bölüm içeriyor.', 'ra-POR ÜÇ bö-LÜM i-çe-ri-YOR', 'يتضمّن التقرير ثلاثة أقسام.', 'ڕاپۆرتەکە سێ بەش لەخۆدەگرێت.']),
    related: ['içerik'],
    note: b(
      '⚠️ يأخذ المفعول مباشرة، بلا حرف: «üç bölüm içeriyor» — لا «üç bölümü içeriyor» ولا حرف جرّ.',
      '⚠️ ڕاستەوخۆ بەرکار وەردەگرێت.',
    ),
  },
  {
    ...w('barındırmak', 'ba-rın-dır-MAK', 'يضمّ، يؤوي', 'لەخۆگرتن، حەواندنەوە',
      ['Bina yüz aileyi barındırıyor.', 'bi-NA YÜZ a-i-le-Yİ ba-rın-dı-rı-YOR', 'يؤوي المبنى مئة عائلة.', 'بیناکە سەد خێزان لەخۆدەگرێت.']),
    related: ['barınma'],
    review: needsReview('Sorani distinction between “house” and “contain” senses — needs a native reader.'),
  },
  {
    ...w('oluşmak', 'o-luş-MAK', 'يتكوّن من؛ يحدث', 'پێکهاتن',
      ['Komisyon beş kişiden oluşuyor.', 'ko-mis-YON BEŞ ki-şi-DEN o-lu-şu-YOR', 'تتكوّن اللجنة من خمسة أشخاص.', 'لیژنەکە لە پێنج کەس پێکهاتووە.']),
    related: ['oluşturmak'],
    note: b(
      '⚠️ المكوّنات تأخذ حالة الابتداء: «-den oluşmak». هذه صيغة أساسية في الكتابة الوصفية.',
      '⚠️ پێکهێنەرەکان حاڵەتی سەرچاوە وەردەگرن.',
    ),
  },
  {
    ...w('meydana gelmek', 'mey-da-NA gel-MEK', 'يحدث، يقع', 'ڕوودان',
      ['Kaza sabah saatlerinde meydana geldi.', 'ka-ZA sa-BAH sa-at-le-rin-DE mey-da-NA gel-Dİ', 'وقع الحادث في ساعات الصباح.', 'ڕووداوەکە لە کاتژمێرەکانی بەیانیدا ڕوویدا.']),
    related: ['gerçekleşmek'],
    note: b(
      'صيغة الأخبار الرسمية للحدوث؛ في الكلام يُقال «oldu» ببساطة.',
      'شێوەی فەرمی هەواڵە؛ لە قسەدا «oldu» دەوترێت.',
    ),
  },
  {
    ...w('sahip olmak', 'sa-HİP ol-MAK', 'يمتلك، يتمتّع بـ', 'خاوەنبوون',
      ['Geniş bir bilgi birikimine sahip.', 'ge-NİŞ bir bil-Gİ bi-ri-ki-mi-NE sa-HİP', 'يمتلك رصيداً معرفياً واسعاً.', 'خاوەنی زانیارییەکی فراوانە.']),
    note: b(
      '⚠️ ما تملكه يأخذ حالة الاتّجاه: «-e sahip olmak». في الكلام اليومي تُفضَّل صيغة «var»: «arabam var».',
      '⚠️ ئەوەی خاوەنیت حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('ihtiyaç duymak', 'ih-ti-YAÇ duy-MAK', 'يحتاج إلى', 'پێویستی بوون',
      ['Daha fazla veriye ihtiyaç duyuyoruz.', 'da-HA faz-LA ve-ri-YE ih-ti-YAÇ du-yu-yo-RUZ', 'نحتاج إلى بيانات أكثر.', 'پێویستمان بە داتای زیاتر هەیە.']),
    related: ['ihtiyaç'],
    note: b(
      '⚠️ المحتاج إليه يأخذ حالة الاتّجاه. الصيغة الأبسط في الكلام: «-e ihtiyacım var».',
      '⚠️ حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
]);

/* ---------------- running things ---------------- */

const RUNNING: VocabItem[] = pack('verbs', 'b1', 'verb', [
  {
    ...w('uygulamak', 'uy-gu-la-MAK', 'يطبّق، ينفّذ', 'جێبەجێکردن',
      ['Yeni kuralı bu aydan itibaren uyguluyoruz.', 'ye-Nİ ku-ra-LI BU ay-DAN i-ti-ba-REN uy-gu-lu-yo-RUZ', 'نطبّق القاعدة الجديدة اعتباراً من هذا الشهر.', 'یاسا نوێیەکە لەم مانگەوە جێبەجێ دەکەین.']),
    related: ['uygulama'],
    collocations: ['kural uygulamak', 'yöntem uygulamak'],
  },
  {
    ...w('yürütmek', 'yü-rüt-MEK', 'يدير، يسيّر (عملاً)', 'بەڕێوەبردن',
      ['Projeyi kim yürütüyor?', 'pro-je-Yİ KİM yü-rü-tü-YOR', 'من يدير المشروع؟', 'کێ پڕۆژەکە بەڕێوە دەبات؟']),
    collocations: ['proje yürütmek', 'çalışma yürütmek', 'soruşturma yürütmek'],
    related: ['yürümek'],
  },
  {
    ...w('yönetmek', 'yö-net-MEK', 'يدير، يحكم', 'بەڕێوەبردن',
      ['Toplantıyı o yönetiyor.', 'top-lan-tı-YI O yö-ne-ti-YOR', 'هو يدير الاجتماع.', 'ئەو کۆبوونەوەکە بەڕێوە دەبات.']),
    related: ['yönetici', 'yönetmen'],
    note: b(
      'من الجذر نفسه: «yönetici» مدير، «yönetmen» مخرج سينمائي، «yönetim» إدارة.',
      'لە هەمان ڕەگ: yönetici، yönetmen، yönetim.',
    ),
  },
  {
    ...w('planlamak', 'plan-la-MAK', 'يخطّط لـ', 'پلاندانان',
      ['Taşınmayı gelecek ay için planlıyoruz.', 'ta-şın-ma-YI ge-le-CEK AY i-ÇİN plan-lı-yo-RUZ', 'نخطّط للانتقال الشهر القادم.', 'پلان بۆ گواستنەوە لە مانگی داهاتوودا دادەنێین.']),
    related: ['plan'],
  },
  {
    ...w('hazırlanmak', 'ha-zır-lan-MAK', 'يستعدّ لـ', 'ئامادەبوون',
      ['Sınava hazırlanıyorum.', 'sı-na-VA ha-zır-la-nı-yo-RUM', 'أستعدّ للامتحان.', 'بۆ تاقیکردنەوەکە ئامادە دەبم.']),
    related: ['hazırlamak'],
    note: b(
      '⚠️ الفرق مهمّ: «hazırlamak» تُحضّر شيئاً، «hazırlanmak» تستعدّ أنت. وما تستعدّ له يأخذ حالة الاتّجاه.',
      '⚠️ «hazırlamak» شت ئامادە دەکەیت، «hazırlanmak» خۆت ئامادە دەبیت.',
    ),
  },
  {
    ...w('ilerlemek', 'i-ler-le-MEK', 'يتقدّم', 'پێشکەوتن',
      ['Çalışmalar hızla ilerliyor.', 'ça-lış-ma-LAR hız-LA i-ler-li-YOR', 'تتقدّم الأعمال بسرعة.', 'کارەکان بە خێرایی پێشدەکەون.']),
    related: ['ileri', 'ilerleme'],
  },
  {
    ...w('gerek duymak', 'ge-REK duy-MAK', 'يرى لزوماً، يحتاج', 'پێویستی بە',
      ['Açıklama yapmaya gerek duymadı.', 'a-çık-la-MA yap-ma-YA ge-REK duy-ma-DI', 'لم يرَ لزوماً لتقديم توضيح.', 'پێویستی بە ڕوونکردنەوە نەبینی.']),
    related: ['ihtiyaç duymak'],
  },
]);

export const B1_VOCABULARY_VERBS_DISCOURSE: VocabItem[] = [
  ...SAYING,
  ...CAUSING,
  ...CONTAINING,
  ...RUNNING,
];
