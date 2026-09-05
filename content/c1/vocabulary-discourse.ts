import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * C1 vocabulary: the connective tissue of formal Turkish.
 *
 * The argumentation *verbs* were already well covered — `savunmak`,
 * `çürütmek`, `kanıtlamak` are all there. What was missing is the layer
 * between them: the postpositional phrases (`açısından`, `çerçevesinde`) that
 * frame a claim, and the light-verb constructions (`karşı çıkmak`, `yer
 * vermek`) that carry it.
 *
 * These are the hardest words in the curriculum to look up, because a student
 * meeting `bu açıdan bakıldığında` in a text cannot find `açısından` by
 * guessing its dictionary form. Listing them as entries is the point.
 */

/* ---------------- framing a claim ---------------- */

const FRAMING: VocabItem[] = pack('formal', 'c1', 'preposition', [
  {
    ...w('açısından', 'a-çı-sın-DAN', 'من ناحية، من زاوية', 'لە ڕووی',
      ['Ekonomik açıdan mümkün değil.', 'e-ko-no-MİK a-çı-DAN müm-KÜN de-ĞİL', 'ليس ممكناً من الناحية الاقتصادية.', 'لە ڕووی ئابوورییەوە گونجاو نییە.']),
    related: ['bakımından'],
    note: b(
      'من «açı» = زاوية. تلحق بالاسم مباشرة: «ekonomi açısından»، أو تُصرّف: «bu açıdan».',
      'لە «açı» = گۆشە. ڕاستەوخۆ بە ناوەوە دەنووسرێت: «ekonomi açısından».',
    ),
  },
  {
    ...w('bakımından', 'ba-kı-mın-DAN', 'من حيث', 'لە ڕووی',
      ['Sağlık bakımından risklidir.', 'sağ-LIK ba-kı-mın-DAN risk-li-DİR', 'إنه محفوف بالمخاطر من حيث الصحّة.', 'لە ڕووی تەندروستییەوە مەترسیدارە.']),
    related: ['açısından'],
    note: b(
      'مرادف قريب من «açısından»، وأشيع منه في اللغة المكتوبة الرسمية.',
      'هاوواتای نزیکی «açısından»، لە زمانی نووسراوی فەرمیدا باوترە.',
    ),
  },
  {
    ...w('çerçevesinde', 'çer-çe-ve-sin-DE', 'في إطار', 'لە چوارچێوەی',
      ['Proje çerçevesinde iki atölye yapıldı.', 'pro-JE çer-çe-ve-sin-DE i-Kİ a-töl-YE ya-pıl-DI', 'أُقيمت ورشتان في إطار المشروع.', 'لە چوارچێوەی پڕۆژەکەدا دوو وۆرکشۆپ کرا.']),
    related: ['çerçeve'],
  },
  {
    ...w('doğrultusunda', 'doğ-rul-tu-sun-DA', 'وفقاً لـ، في اتّجاه', 'بەپێی',
      ['Talepler doğrultusunda karar değişti.', 'ta-lep-LER doğ-rul-tu-sun-DA ka-RAR de-ğiş-Tİ', 'تغيّر القرار وفقاً للمطالب.', 'بەپێی داواکارییەکان بڕیارەکە گۆڕا.']),
  },
  {
    ...w('söz konusu', 'SÖZ ko-nu-SU', 'المعني، المذكور؛ وارد', 'ئەوەی باسکرا',
      ['Söz konusu belge kayıp.', 'SÖZ ko-nu-SU bel-GE ka-YIP', 'الوثيقة المعنية مفقودة.', 'ئەو بەڵگەنامەیەی باسکرا ون بووە.']),
    // Not a postposition like its neighbours — it modifies a noun.
    pos: 'phrase',
    note: b(
      'استعمالان: صفة بمعنى «المذكور»، ونفي قاطع: «Söz konusu bile değil» = غير وارد إطلاقاً.',
      'دوو بەکارهێنان: ئاوەڵناوی «باسکراو»، و ڕەتکردنەوەی توند: «Söz konusu bile değil».',
    ),
  },
]);

/* ---------------- light-verb constructions ---------------- */

const LIGHT_VERBS: VocabItem[] = pack('formal', 'c1', 'verb', [
  {
    ...w('karşı çıkmak', 'kar-ŞI çık-MAK', 'يعترض على، يعارض', 'دژایەتیکردن',
      ['Öneriye açıkça karşı çıktı.', 'ö-ne-ri-YE a-çık-ÇA kar-ŞI çık-TI', 'اعترض على الاقتراح صراحةً.', 'بە ئاشکرا دژایەتی پێشنیارەکەی کرد.']),
    note: b(
      '⚠️ الشيء المعارَض يأخذ حالة الاتّجاه: «öneriye karşı çıktı».',
      '⚠️ ئەو شتەی دژایەتی دەکرێت حاڵەتی ئاراستە وەردەگرێت.',
    ),
    opposite: ['desteklemek'],
  },
  {
    ...w('desteklemek', 'des-tek-le-MEK', 'يدعم، يؤيّد', 'پشتگیریکردن',
      ['Bu görüşü veriler destekliyor.', 'BU gö-rü-ŞÜ ve-ri-LER des-tek-li-YOR', 'البيانات تدعم هذا الرأي.', 'داتاکان پشتگیری ئەم بۆچوونە دەکەن.']),
    collocations: ['görüşü desteklemek', 'maddi destek'],
    opposite: ['karşı çıkmak'],
  },
  {
    ...w('öne sürmek', 'ö-NE sür-MEK', 'يطرح، يزعم', 'خستنەڕوو',
      ['Yeni bir hipotez öne sürdü.', 'ye-Nİ bir hi-po-TEZ ö-NE sür-DÜ', 'طرح فرضية جديدة.', 'گریمانەیەکی نوێی خستەڕوو.']),
    related: ['ileri sürmek'],
    note: b(
      'مرادف عملي لـ «ileri sürmek»؛ كلاهما يحمل ظلّ «يزعم» لا «يثبت».',
      'هاوواتای کارای «ileri sürmek»؛ هەردووکیان واتای «بانگەشەکردن» دەگەیەنن.',
    ),
  },
  {
    ...w('iddia etmek', 'id-di-A et-MEK', 'يدّعي، يزعم', 'بانگەشەکردن',
      ['Belgenin sahte olduğunu iddia ediyor.', 'bel-ge-NİN sah-TE ol-du-ğu-NU id-di-A e-di-YOR', 'يدّعي أن الوثيقة مزوّرة.', 'بانگەشە دەکات کە بەڵگەنامەکە ساختەیە.']),
    collocations: ['iddia etmek', 'iddiada bulunmak'],
  },
  {
    ...w('belirtmek', 'be-lirt-MEK', 'يشير إلى، يذكر', 'ئاماژەکردن',
      ['Raporda açıkça belirtilmiş.', 'ra-por-DA a-çık-ÇA be-lir-til-MİŞ', 'ذُكر في التقرير صراحةً.', 'لە ڕاپۆرتەکەدا بە ئاشکرا ئاماژەی پێکراوە.']),
    related: ['belirlemek'],
    note: b(
      '⚠️ لا تخلطها بـ «belirlemek» = يحدّد. «belirtmek» = يذكر ويشير.',
      '⚠️ تێکەڵی «belirlemek» = دیاریکردن مەکە.',
    ),
  },
  {
    ...w('yer vermek', 'YER ver-MEK', 'يفسح مجالاً، يورد', 'جێگا دان',
      ['Makale bu tartışmaya yer vermiyor.', 'ma-ka-LE BU tar-tış-ma-YA YER ver-mi-YOR', 'المقال لا يورد هذا النقاش.', 'وتارەکە جێگا بەم گفتوگۆیە نادات.']),
  },
  {
    ...w('dikkate almak', 'dik-ka-TE al-MAK', 'يأخذ بعين الاعتبار', 'لەبەرچاوگرتن',
      ['Bu faktörü dikkate almadık.', 'BU fak-tö-RÜ dik-ka-TE al-ma-DIK', 'لم نأخذ هذا العامل بعين الاعتبار.', 'ئەم فاکتەرەمان لەبەرچاو نەگرت.']),
    related: ['hesaba katmak'],
  },
  {
    ...w('ayırt etmek', 'a-yırt et-MEK', 'يميّز بين', 'جیاکردنەوە',
      ['İkisini ayırt etmek zor.', 'i-ki-si-Nİ a-yırt et-MEK zor', 'يصعب التمييز بينهما.', 'جیاکردنەوەی هەردووکیان قورسە.']),
    collocations: ['ayırt edici özellik'],
  },
]);

/* ---------------- analytical verbs ---------------- */

const ANALYSIS: VocabItem[] = pack('academic', 'c1', 'verb', [
  {
    ...w('sınıflandırmak', 'sı-nıf-lan-dır-MAK', 'يصنّف', 'پۆلێنکردن',
      ['Verileri üç grupta sınıflandırdık.', 've-ri-le-Rİ ÜÇ grup-TA sı-nıf-lan-dır-DIK', 'صنّفنا البيانات في ثلاث مجموعات.', 'داتاکانمان لە سێ گروپدا پۆلێن کرد.']),
    related: ['sınıf'],
  },
  {
    ...w('özetlemek', 'ö-zet-le-MEK', 'يلخّص', 'کورتکردنەوە',
      ['Bulguları kısaca özetleyeyim.', 'bul-gu-la-RI kı-sa-CA ö-zet-le-ye-YİM', 'دعني ألخّص النتائج باختصار.', 'با بە کورتی دۆزینەوەکان کورت بکەمەوە.']),
    related: ['özet'],
  },
  {
    ...w('genellemek', 'ge-nel-le-MEK', 'يعمّم', 'گشتاندن',
      ['Tek örnekten genelleme yapılmaz.', 'TEK ör-nek-TEN ge-nel-le-ME ya-pıl-MAZ', 'لا يُعمَّم من مثال واحد.', 'لە یەک نموونەوە گشتاندن ناکرێت.']),
    collocations: ['genelleme yapmak'],
    related: ['genel'],
  },
  {
    ...w('ilişkilendirmek', 'i-liş-ki-len-dir-MEK', 'يربط بـ', 'پەیوەندیدارکردن',
      ['İki olguyu ilişkilendirmek gerekiyor.', 'i-Kİ ol-gu-YU i-liş-ki-len-dir-MEK ge-re-ki-YOR', 'يلزم الربط بين الظاهرتين.', 'پێویستە پەیوەندی نێوان دوو دیاردەکە دیاری بکرێت.']),
    related: ['ilişki'],
  },
  {
    ...w('soyutlamak', 'so-yut-la-MAK', 'يجرّد', 'ئەبستراکتکردن',
      ['Modeli gerçeklikten soyutladık.', 'mo-de-Lİ ger-çek-lik-TEN so-yut-la-DIK', 'جرّدنا النموذج عن الواقع.', 'مۆدێلەکەمان لە ڕاستییەوە جیا کردەوە.']),
    opposite: ['somutlaştırmak'],
    related: ['soyut'],
  },
  {
    ...w('netleştirmek', 'net-leş-tir-MEK', 'يوضّح، يحسم', 'ڕوونکردنەوە',
      ['Tanımı netleştirelim.', 'ta-nı-MI net-leş-ti-re-LİM', 'لنوضّح التعريف.', 'با پێناسەکە ڕوون بکەینەوە.']),
    related: ['net'],
  },
]);

export const C1_VOCABULARY_DISCOURSE: VocabItem[] = [
  ...FRAMING,
  ...LIGHT_VERBS,
  ...ANALYSIS,
];
