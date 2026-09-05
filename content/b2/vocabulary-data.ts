import type { VocabItem } from '@/types/content';
import { b, needsReview, pack, sense, w } from '../shared/helpers';

/**
 * B2 vocabulary: data, method and the internet.
 *
 * The science section had `hipotez`, `bulgu` and `deney` but not the words
 * that surround a result — `analiz`, `model`, `olasılık`, `dağılım`, `sapma`.
 * The technology section had the consumer verbs (`indirmek`, `yüklemek`) but
 * not the infrastructure a B2 news article assumes: `ağ`, `sunucu` was there,
 * `şifreleme`, `depolama`, `erişim` were not.
 *
 * `örnek` deserves its own note. It is one word for three things a student
 * needs to keep apart: an example, a specimen, and a statistical sample —
 * and Turkish adds `örneklem` for the last of those only in academic writing.
 */

/* ---------------- evidence and method ---------------- */

const METHOD: VocabItem[] = pack('science', 'b2', 'noun', [
  {
    ...w('analiz', 'a-na-LİZ', 'تحليل', 'شیکاری',
      ['Analiz sonuçları çıktı.', 'a-na-LİZ so-nuç-la-RI çık-TI', 'صدرت نتائج التحليل.', 'ئەنجامەکانی شیکاری دەرچوون.']),
    collocations: ['analiz yapmak', 'veri analizi', 'kan analizi'],
    opposite: ['sentez'],
    related: ['tahlil'],
    note: b(
      '«analiz» دولية و«tahlil» عربية الأصل — الثانية أشيع في السياق الطبّي: «kan tahlili».',
      '«analiz» نێودەوڵەتییە و «tahlil» عەرەبییە.',
    ),
  },
  {
    ...w('teori', 'te-o-Rİ', 'نظرية', 'تیۆری',
      ['Teori pratikte işlemedi.', 'te-o-Rİ pra-tik-TE iş-le-me-Dİ', 'لم تنجح النظرية عملياً.', 'تیۆرییەکە لە پراکتیکدا کاری نەکرد.']),
    related: ['kuram'],
    note: b(
      '«kuram» تركية حديثة و«teori» دولية — مترادفتان، والثانية أشيع في الكلام.',
      '«kuram» تورکی نوێیە، «teori» نێودەوڵەتییە.',
    ),
  },
  {
    ...w('model', 'mo-DEL', 'نموذج', 'مۆدێل',
      ['Yeni bir model geliştirdiler.', 'ye-Nİ bir mo-DEL ge-liş-tir-di-LER', 'طوّروا نموذجاً جديداً.', 'مۆدێلێکی نوێیان پەرەپێدا.']),
    collocations: ['model kurmak', 'iş modeli'],
  },
  {
    ...w('örnek', 'ör-NEK', 'مثال؛ عيّنة؛ قدوة', 'نموونە',
      ['Bir örnek verebilir misiniz?', 'bir ör-NEK ve-re-bi-LİR mi-si-NİZ', 'هل تعطي مثالاً؟', 'دەتوانیت نموونەیەک بهێنیتەوە؟']),
    senses: [
      sense('عيّنة مخبرية', 'نموونەی تاقیگە',
        ['Laboratuvara örnek gönderildi.', 'la-bo-ra-tu-va-RA ör-NEK gön-de-ril-Dİ', 'أُرسلت عيّنة إلى المختبر.', 'نموونە بۆ تاقیگە نێردرا.']),
      sense('قدوة، مثال يُحتذى', 'نموونەی باش',
        ['Herkese örnek oldu.', 'her-ke-SE ör-NEK ol-DU', 'صار قدوة للجميع.', 'بوو بە نموونە بۆ هەمووان.']),
    ],
    collocations: ['örnek vermek', 'örnek olmak', 'örneğin'],
    note: b(
      '⚠️ في الإحصاء «العيّنة» هي «örneklem» لا «örnek» — والخلط بينهما خطأ شائع.',
      '⚠️ لە ئامادا «نموونە» «örneklem»ە نەک «örnek».',
    ),
  },
  {
    ...w('olasılık', 'o-la-sı-LIK', 'احتمال، احتمالية', 'ئەگەر',
      ['Başarı olasılığı yüksek.', 'ba-şa-RI o-la-sı-lı-ĞI yük-SEK', 'احتمال النجاح عالٍ.', 'ئەگەری سەرکەوتن بەرزە.']),
    related: ['ihtimal', 'olası'],
    note: b(
      '«olasılık» تركية حديثة و«ihtimal» عربية — الأولى في الرياضيات، والثانية في الكلام.',
      '«olasılık» لە بیرکاریدا، «ihtimal» لە قسەدا.',
    ),
  },
  {
    ...w('dağılım', 'da-ğı-LIM', 'توزيع', 'دابەشبوون',
      ['Gelir dağılımı adaletsiz.', 'ge-LİR da-ğı-lı-MI a-da-let-SİZ', 'توزيع الدخل غير عادل.', 'دابەشبوونی داهات دادپەروەرانە نییە.']),
    related: ['dağılmak'],
    collocations: ['gelir dağılımı', 'yaş dağılımı'],
  },
  {
    ...w('sapma', 'sap-MA', 'انحراف', 'لادان',
      ['Standart sapma hesaplandı.', 'stan-DART sap-MA he-sap-lan-DI', 'حُسب الانحراف المعياري.', 'لادانی ستاندارد ژمێردرا.']),
    collocations: ['standart sapma'],
    review: needsReview('Sorani statistical terminology — needs a native academic reader.'),
  },
  {
    ...w('simülasyon', 'si-mü-las-YON', 'محاكاة', 'سیمولەیشن',
      ['Simülasyon sonuçları tutarlı.', 'si-mü-las-YON so-nuç-la-RI tu-tar-LI', 'نتائج المحاكاة متّسقة.', 'ئەنجامەکانی سیمولەیشن یەکگرتوون.']),
  },
]);

/* ---------------- the network ---------------- */

const NETWORK: VocabItem[] = pack('technology', 'b2', 'noun', [
  {
    ...w('ağ', 'AĞ', 'شبكة', 'تۆڕ',
      ['Ağ bağlantısı koptu.', 'AĞ bağ-lan-tı-SI kop-TU', 'انقطع اتّصال الشبكة.', 'پەیوەندی تۆڕ پچڕا.']),
    collocations: ['sosyal ağ', 'ağ bağlantısı'],
    note: b(
      'نفس الكلمة لشبكة الصيد ولشبكة الحاسوب — كالعربية تماماً.',
      'هەمان وشە بۆ تۆڕی ڕاوکردن و تۆڕی کۆمپیوتەر.',
    ),
  },
  {
    ...w('algoritma', 'al-go-rit-MA', 'خوارزمية', 'ئەلگۆریتم',
      ['Algoritma önerileri belirliyor.', 'al-go-rit-MA ö-ne-ri-le-Rİ be-lir-li-YOR', 'الخوارزمية تحدّد المقترحات.', 'ئەلگۆریتمەکە پێشنیارەکان دیاری دەکات.']),
    note: b(
      'الكلمة من اسم الخوارزمي — عربية الأصل بطريق اللاتينية، وعادت إلى التركية أوروبية الشكل.',
      'لە ناوی خوارزمییەوە.',
    ),
  },
  {
    ...w('veri tabanı', 've-Rİ ta-ba-NI', 'قاعدة بيانات', 'بنکەی داتا',
      ['Veri tabanına kaydedildi.', 've-Rİ ta-ba-nı-NA kay-de-dil-Dİ', 'سُجّل في قاعدة البيانات.', 'لە بنکەی داتادا تۆمار کرا.']),
    related: ['veri'],
  },
  {
    ...w('şifreleme', 'şif-re-le-ME', 'تشفير', 'شفرەکردن',
      ['Uçtan uca şifreleme kullanıyor.', 'uç-TAN u-CA şif-re-le-ME kul-la-nı-YOR', 'يستعمل التشفير من طرف إلى طرف.', 'شفرەکردنی سەر بە سەر بەکاردەهێنێت.']),
    related: ['şifre'],
  },
  {
    ...w('depolama', 'de-po-la-MA', 'تخزين', 'کۆگاکردن',
      ['Bulut depolama kullanıyorum.', 'bu-LUT de-po-la-MA kul-la-nı-yo-RUM', 'أستعمل التخزين السحابي.', 'کۆگای هەوری بەکاردەهێنم.']),
    collocations: ['bulut depolama', 'depolama alanı'],
  },
  {
    ...w('erişim', 'e-ri-ŞİM', 'وصول، نفاذ', 'دەستگەیشتن',
      ['Erişim izni verilmedi.', 'e-ri-ŞİM iz-Nİ ve-ril-me-Dİ', 'لم يُمنح إذن الوصول.', 'مۆڵەتی دەستگەیشتن نەدرا.']),
    collocations: ['erişim izni', 'erişim engeli'],
    related: ['erişmek'],
  },
  {
    ...w('yedek', 'ye-DEK', 'نسخة احتياطية؛ احتياطي', 'یەدەگ',
      ['Yedek almayı unutma.', 'ye-DEK al-ma-YI u-nut-MA', 'لا تنسَ أخذ نسخة احتياطية.', 'لەبیرت نەچێت یەدەگ وەربگریت.']),
    collocations: ['yedek almak', 'yedek parça', 'yedek anahtar'],
  },
  {
    ...w('hız', 'HIZ', 'سرعة', 'خێرایی',
      ['İnternet hızı düşük.', 'in-ter-NET hı-ZI dü-ŞÜK', 'سرعة الإنترنت منخفضة.', 'خێرایی ئینتەرنێت نزمە.']),
    related: ['hızlı', 'hızlandırmak'],
    collocations: ['hız sınırı', 'hız kazanmak'],
  },
  {
    ...w('siber', 'si-BER', 'سيبراني', 'سایبەری',
      ['Siber güvenlik uzmanı arıyorlar.', 'si-BER gü-ven-LİK uz-ma-NI a-rı-yor-LAR', 'يبحثون عن خبير أمن سيبراني.', 'بەدوای پسپۆڕی ئاسایشی سایبەری دەگەڕێن.']),
    pos: 'adjective',
    collocations: ['siber güvenlik', 'siber saldırı'],
  },
]);

export const B2_VOCABULARY_DATA: VocabItem[] = [
  ...METHOD,
  ...NETWORK,
];
