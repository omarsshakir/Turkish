import type { VocabItem } from '@/types/content';
import { needsReview, pack, w } from '../shared/helpers';

/**
 * C1 vocabulary: the machinery of argument.
 *
 * Not topic words but the words a Turkish academic text uses to *do* things —
 * to ground a claim, to qualify it, to concede, to reason from evidence to
 * conclusion. These are the words that let a student read a journal article
 * rather than merely understand its subject.
 *
 * ---------------------------------------------------------------------------
 * A note on the Kurdish
 * ---------------------------------------------------------------------------
 * Much of this is specialist terminology — `tümdengelim` (deduction),
 * `içtihat` (juristic reasoning), `müeyyide` (sanction). The Turkish and the
 * Arabic are solid. The Sorani is written carefully and consistently, but
 * these are terms where a native academic would be the right authority and I
 * am not one, so the entries are flagged `needs-review` rather than presented
 * as settled. The flag is editorial metadata: students never see it.
 */

const KU_TECHNICAL = 'Specialist Sorani terminology — needs a native academic reader.';

/* ---------------- reasoning ---------------- */

const REASONING: VocabItem[] = pack('academic', 'c1', 'noun', [
  {
    ...w('dayanak', 'da-ya-NAK', 'سند، مستند (لحجّة)', 'پاڵپشت',
      ['İddianın bilimsel bir dayanağı yok.', 'id-di-a-NIN bi-lim-SEL bir da-ya-na-ĞI yok', 'ليس للدعوى سند علمي.', 'بانگەشەکە پاڵپشتی زانستی نییە.']),
    collocations: ['dayanak göstermek', 'yasal dayanak', 'dayanaktan yoksun'],
    related: ['gerekçe', 'kanıt'],
  },
  {
    ...w('öngörü', 'ön-gö-RÜ', 'تنبّؤ، استشراف', 'پێشبینی',
      ['Modelin öngörüsü doğrulandı.', 'mo-de-LİN ön-gö-rü-SÜ doğ-ru-lan-DI', 'تأكّد تنبّؤ النموذج.', 'پێشبینی مۆدێلەکە پشتڕاست کرایەوە.']),
    collocations: ['öngörüde bulunmak', 'öngörüyü doğrulamak', 'uzun vadeli öngörü'],
  },
  {
    ...w('çıkarsama', 'çı-kar-sa-MA', 'استدلال، استنباط', 'دەرهێنان',
      ['Bu çıkarsama verilerle desteklenmiyor.', 'BU çı-kar-sa-MA ve-ri-ler-LE des-tek-len-mi-YOR', 'هذا الاستدلال لا تدعمه البيانات.', 'ئەم دەرهێنانە بە داتا پشتگیری ناکرێت.']),
    collocations: ['çıkarsama yapmak', 'mantıksal çıkarsama'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('tümdengelim', 'tüm-den-ge-LİM', 'استنباط (من العامّ إلى الخاصّ)', 'لە گشتییەوە بۆ تایبەتی',
      ['Tümdengelim genel ilkeden özele gider.', 'tüm-den-ge-LİM ge-NEL il-ke-DEN ö-ze-LE gi-DER', 'الاستنباط يسير من المبدأ العامّ إلى الخاصّ.', 'لە بنەمای گشتییەوە بۆ تایبەتی دەڕوات.']),
    opposite: ['tümevarım'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('tümevarım', 'tü-me-va-RIM', 'استقراء (من الخاصّ إلى العامّ)', 'لە تایبەتییەوە بۆ گشتی',
      ['Deneysel bilimler tümevarıma dayanır.', 'de-ney-SEL bi-lim-LER tü-me-va-rı-MA da-ya-NIR', 'العلوم التجريبية تقوم على الاستقراء.', 'زانستە تاقیگەییەکان لەسەر ئەمە دەوەستن.']),
    opposite: ['tümdengelim'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('muhakeme', 'mu-ha-ke-ME', 'تفكير منطقي، محاكمة عقلية', 'لێکدانەوەی لۆژیکی',
      ['Muhakeme yeteneği güçlü bir öğrenci.', 'mu-ha-ke-ME ye-te-ne-Ğİ güç-LÜ bir öğ-ren-Cİ', 'طالب قويّ في التفكير المنطقي.', 'قوتابییەکی بەهێز لە لێکدانەوەی لۆژیکی.']),
    collocations: ['muhakeme yeteneği', 'sağlıklı muhakeme'],
  },
  {
    ...w('önyargı', 'ön-yar-GI', 'حكم مسبق، تحيّز', 'پێشداوەری',
      ['Önyargılarımızı sorgulamalıyız.', 'ön-yar-gı-la-rı-mı-ZI sor-gu-la-ma-lı-YIZ', 'علينا مساءلة أحكامنا المسبقة.', 'دەبێت پرسیار لە پێشداوەرییەکانمان بکەین.']),
    collocations: ['önyargılı davranmak', 'önyargıdan arınmak'],
  },
  {
    ...w('yanlılık', 'yan-lı-LIK', 'تحيّز (منهجي)', 'لایەنگری',
      ['Örneklem yanlılığı sonucu bozdu.', 'ör-nek-LEM yan-lı-lı-ĞI so-nu-CU boz-DU', 'أفسد تحيّز العيّنة النتيجة.', 'لایەنگری نموونەکە ئەنجامەکەی تێکدا.']),
    collocations: ['yayın yanlılığı', 'örneklem yanlılığı'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('söylem', 'söy-LEM', 'خطاب (بالمعنى النقدي)', 'گوتار',
      ['Siyasi söylem sertleşti.', 'si-ya-Sİ söy-LEM sert-leş-Tİ', 'اشتدّ الخطاب السياسي.', 'گوتاری سیاسی توندتر بوو.']),
    collocations: ['söylem analizi', 'siyasi söylem', 'söylem geliştirmek'],
  },
  {
    ...w('gerekçelendirme', 'ge-rek-çe-len-dir-ME', 'تسويغ، تعليل', 'بەهۆکارکردن',
      ['Kararın gerekçelendirilmesi zayıf.', 'ka-ra-RIN ge-rek-çe-len-di-ril-me-Sİ za-YIF', 'تعليل القرار ضعيف.', 'بەهۆکارکردنی بڕیارەکە لاوازە.']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('saptama', 'sap-ta-MA', 'ملاحظة مثبتة، تحديد', 'دەستنیشانکردن',
      ['Bu önemli bir saptama.', 'BU ö-nem-Lİ bir sap-ta-MA', 'هذه ملاحظة مهمّة.', 'ئەمە دەستنیشانکردنێکی گرنگە.']),
    collocations: ['saptamada bulunmak', 'yerinde bir saptama'],
  },
  {
    ...w('betimleme', 'be-tim-le-ME', 'وصف (منهجي)', 'وەسفکردن',
      ['Betimleme ile açıklama farklı şeylerdir.', 'be-tim-le-ME i-LE a-çık-la-MA fark-LI şey-ler-DİR', 'الوصف غير التفسير.', 'وەسفکردن و ڕوونکردنەوە دوو شتی جیاوازن.']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('nicelik', 'ni-ce-LİK', 'كمّية', 'چەندایەتی',
      ['Nicelik değil nitelik önemli.', 'ni-ce-LİK de-ĞİL ni-te-LİK ö-nem-Lİ', 'المهمّ النوعية لا الكمّية.', 'گرنگ چۆنایەتییە نەک چەندایەتی.']),
    opposite: ['nitelik'],
  },
]);

const QUALIFIERS: VocabItem[] = pack('academic', 'c1', 'adjective', [
  {
    ...w('kavramsal', 'kav-ram-SAL', 'مفاهيمي', 'چەمکی',
      ['Kavramsal bir çerçeve kurdu.', 'kav-ram-SAL bir çer-çe-VE kur-DU', 'وضع إطاراً مفاهيمياً.', 'چوارچێوەیەکی چەمکی دانا.']),
    collocations: ['kavramsal çerçeve', 'kavramsal karışıklık'],
  },
  {
    ...w('olgusal', 'ol-gu-SAL', 'واقعي، متعلّق بالوقائع', 'ڕووداوی',
      ['Olgusal bir hata var.', 'ol-gu-SAL bir ha-TA var', 'هناك خطأ في الوقائع.', 'هەڵەیەکی ڕووداوی هەیە.']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('görgül', 'gör-GÜL', 'تجريبي، مبنيّ على المشاهدة', 'ئەزموونی',
      ['Görgül veriye ihtiyacımız var.', 'gör-GÜL ve-ri-YE ih-ti-ya-cı-MIZ var', 'نحتاج بيانات تجريبية.', 'پێویستمان بە داتای ئەزموونییە.']),
    related: ['deneysel', 'ampirik'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('eleştirel', 'e-leş-ti-REL', 'نقدي', 'ڕەخنەیی',
      ['Eleştirel düşünme öğretilmeli.', 'e-leş-ti-REL dü-şün-ME öğ-re-til-me-Lİ', 'ينبغي تعليم التفكير النقدي.', 'دەبێت بیرکردنەوەی ڕەخنەیی فێر بکرێت.']),
    collocations: ['eleştirel düşünme', 'eleştirel bakış'],
  },
  {
    ...w('tutarsız', 'tu-tar-SIZ', 'متناقض، غير متّسق', 'ناتەبا',
      ['Anlatısı tutarsızdı.', 'an-la-tı-SI tu-tar-sız-DI', 'كانت روايته متناقضة.', 'گێڕانەوەکەی ناتەبا بوو.']),
    opposite: ['tutarlı'],
  },
]);

/* ---------------- law and administration ---------------- */

const LEGAL: VocabItem[] = pack('law', 'c1', 'noun', [
  {
    ...w('mevzuat', 'mev-zu-AT', 'التشريعات، مجموعة الأنظمة', 'یاسا و ڕێنماییەکان',
      ['İlgili mevzuat değişti.', 'il-gi-Lİ mev-zu-AT de-ğiş-Tİ', 'تغيّرت التشريعات ذات الصلة.', 'یاسا پەیوەندیدارەکان گۆڕان.']),
    collocations: ['mevzuata uygun', 'mevzuat değişikliği'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('yaptırım', 'yap-tı-RIM', 'عقوبة، جزاء', 'سزا',
      ['Kurallara uymayana yaptırım uygulanır.', 'ku-ral-la-RA uy-ma-ya-NA yap-tı-RIM uy-gu-la-NIR', 'تُطبَّق عقوبة على من لا يلتزم.', 'سزا بەسەر ئەوەدا جێبەجێ دەکرێت کە پابەند نەبێت.']),
    collocations: ['yaptırım uygulamak', 'ekonomik yaptırım'],
  },
  {
    ...w('denetleme', 'de-net-le-ME', 'رقابة، تفتيش', 'چاودێری',
      ['Yıllık denetleme raporu yayımlandı.', 'yıl-LIK de-net-le-ME ra-po-RU ya-yım-lan-DI', 'نُشر تقرير الرقابة السنوي.', 'ڕاپۆرتی چاودێری ساڵانە بڵاوکرایەوە.']),
    collocations: ['denetleme yapmak', 'denetleme kurulu'],
  },
  {
    ...w('teamül', 'te-a-MÜL', 'عرف، ممارسة متّبعة', 'نەریت',
      ['Bu, yerleşik bir teamüldür.', 'BU yer-le-ŞİK bir te-a-mül-DÜR', 'هذا عرف مستقرّ.', 'ئەمە نەریتێکی جێگیرە.']),
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('içtihat', 'iç-ti-HAT', 'اجتهاد قضائي، سوابق', 'ئیجتیهاد',
      ['Yargıtay içtihadı bu yönde.', 'yar-gı-TAY iç-ti-ha-DI BU yön-DE', 'اجتهاد محكمة التمييز في هذا الاتجاه.', 'ئیجتیهادی دادگای باڵا بەم ئاراستەیەیە.']),
    review: needsReview(KU_TECHNICAL),
  },
]);

/* ---------------- society ---------------- */

const SOCIETY: VocabItem[] = pack('society', 'c1', 'noun', [
  {
    ...w('uzlaşı', 'uz-la-ŞI', 'توافق، إجماع', 'ڕێککەوتن',
      ['Taraflar bir uzlaşıya vardı.', 'ta-raf-LAR bir uz-la-şı-YA var-DI', 'توصّل الطرفان إلى توافق.', 'هەردوو لا گەیشتنە ڕێککەوتنێک.']),
    collocations: ['uzlaşıya varmak', 'toplumsal uzlaşı'],
    opposite: ['ayrışma'],
  },
  {
    ...w('kutuplaşma', 'ku-tup-laş-MA', 'استقطاب', 'دووجەمسەری',
      ['Toplumsal kutuplaşma derinleşti.', 'top-lum-SAL ku-tup-laş-MA de-rin-leş-Tİ', 'تعمّق الاستقطاب المجتمعي.', 'دووجەمسەری کۆمەڵایەتی قووڵتر بووەوە.']),
    collocations: ['siyasi kutuplaşma', 'kutuplaşmayı azaltmak'],
    review: needsReview(KU_TECHNICAL),
  },
  {
    ...w('ayrışma', 'ay-rış-MA', 'انقسام، تباعد', 'لێکجیابوونەوە',
      ['İki grup arasında ayrışma büyüdü.', 'i-Kİ GRUP a-ra-sın-DA ay-rış-MA bü-yü-DÜ', 'اتّسع الانقسام بين المجموعتين.', 'لێکجیابوونەوە لە نێوان دوو گروپەکەدا گەورەتر بوو.']),
    opposite: ['uzlaşı'],
  },
  {
    ...w('teşkilatlanma', 'teş-ki-lat-lan-MA', 'تنظيم، بناء تنظيمي', 'ڕێکخراوەیی',
      ['İşçilerin teşkilatlanma hakkı var.', 'iş-çi-le-RİN teş-ki-lat-lan-MA hak-KI var', 'للعمّال حقّ التنظيم.', 'کرێکاران مافی ڕێکخراوەیییان هەیە.']),
    review: needsReview(KU_TECHNICAL),
  },
]);

export const C1_VOCABULARY_ARGUMENT: VocabItem[] = [
  ...REASONING,
  ...QUALIFIERS,
  ...LEGAL,
  ...SOCIETY,
];
