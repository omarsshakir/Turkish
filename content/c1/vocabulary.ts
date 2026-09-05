import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * C1 vocabulary - academic register and the precise, often Ottoman-Arabic
 * derived words that mark educated written Turkish. Arabic speakers have a
 * real advantage here: many of these are Arabic roots in Turkish clothing.
 */

const academic = pack('academic', 'c1', 'noun', [
  w('kuram', 'ku-RAM', 'نظرية', 'تیۆری', ['Bu kuram hâlâ tartışılıyor.', 'BU ku-RAM hâ-LÂ tar-tı-şı-lı-YOR', 'ما زالت هذه النظرية محل نقاش.', 'ئەم تیۆرییە هێشتا باسی لەسەر دەکرێت.']),
  w('kavram', 'kav-RAM', 'مفهوم', 'چەمک', ['Bu kavramı tanımlamalıyız.', 'BU kav-ra-MI ta-nım-la-ma-lı-YIZ', 'يجب أن نعرّف هذا المفهوم.', 'دەبێت ئەم چەمکە پێناسە بکەین.']),
  w('bağlam', 'ba-LAM', 'سياق', 'چوارچێوە / کۆنتێکست', ['Cümleyi bağlamından koparma.', 'djüm-le-Yİ ba-la-mın-DAN ko-par-MA', 'لا تقتطع الجملة من سياقها.', 'ڕستەکە لە چوارچێوەکەی جیا مەکەرەوە.']),
  w('çıkarım', 'çı-ka-RIM', 'استنتاج', 'دەرئەنجام', ['Bu çıkarım aceleci.', 'BU çı-ka-RIM a-dje-le-DJİ', 'هذا استنتاج متسرّع.', 'ئەم دەرئەنجامە پەلەکێشە.']),
  w('eleştiri', 'e-leş-ti-Rİ', 'نقد', 'ڕەخنە', ['Eleştiriye açığım.', 'e-leş-ti-ri-YE a-çı-ĞIM', 'أنا منفتح على النقد.', 'بۆ ڕەخنە کراوەم.']),
  w('özet', 'ö-ZET', 'ملخّص', 'کورتە', ['Makalenin özetini yazdım.', 'ma-ka-le-NİN ö-ze-ti-Nİ yaz-DIM', 'كتبت ملخّص المقالة.', 'کورتەی وتارەکەم نووسی.']),
  w('makale', 'ma-ka-LE', 'مقالة علمية', 'وتار', ['Makale hakemli bir dergide yayımlandı.', 'ma-ka-LE ha-kem-Lİ bir der-gi-DE ya-yım-lan-DI', 'نُشرت المقالة في مجلة محكّمة.', 'وتارەکە لە گۆڤارێکی هەڵسەنگێنراودا بڵاوکرایەوە.']),
  w('alıntı', 'a-lın-TI', 'اقتباس', 'وەرگرتنەوە', ['Doğrudan alıntı yaptım.', 'do-ru-DAN a-lın-TI yap-TIM', 'اقتبست اقتباساً مباشراً.', 'وەرگرتنەوەی ڕاستەوخۆم کرد.']),
]);

const advanced = pack('advanced', 'c1', 'noun', [
  w('mesele', 'me-se-LE', 'قضية / مسألة', 'مەسەلە', ['Mesele sandığın kadar basit değil.', 'me-se-LE san-dı-ĞIN ka-DAR ba-SİT de-İL', 'المسألة ليست بسيطة كما تظن.', 'مەسەلەکە بەو سادەییە نییە کە وا دەزانیت.']),
  w('husus', 'hu-SUS', 'أمر / ناحية', 'لایەن', ['Bu hususta hemfikiriz.', 'BU hu-sus-TA hem-fi-ki-RİZ', 'نحن متفقون في هذا الأمر.', 'لەم لایەنەدا هاوڕان.']),
  w('vesile', 've-si-LE', 'مناسبة / وسيلة', 'بۆنە', ['Bu vesileyle teşekkür ederim.', 'BU ve-si-ley-LE te-şek-KÜR e-de-rim', 'بهذه المناسبة أشكركم.', 'بەم بۆنەیەوە سوپاستان دەکەم.']),
  w('itibaren', 'i-ti-ba-REN', 'اعتباراً من', 'لە ... بەدواوە', ['Yarından itibaren başlıyoruz.', 'ya-rın-DAN i-ti-ba-REN baş-lı-YO-ruz', 'نبدأ اعتباراً من الغد.', 'لە سبەینێوە دەست پێدەکەین.'], 'adverb'),
  w('nitelik', 'ni-te-LİK', 'صفة / نوعية', 'چۆنایەتی', ['İşin niteliği çok önemli.', 'i-ŞİN ni-te-li-İ ÇOK ö-nem-Lİ', 'نوعية العمل مهمة جداً.', 'چۆنایەتی کارەکە زۆر گرنگە.']),
  w('sürdürülebilir', 'sür-dü-rü-le-bi-LİR', 'مستدام', 'بەردەوام', ['Sürdürülebilir bir model gerekiyor.', 'sür-dü-rü-le-bi-LİR bir mo-DEL ge-re-ki-YOR', 'نحتاج نموذجاً مستداماً.', 'مۆدێلێکی بەردەوام پێویستە.'], 'adjective'),
  w('kaçınılmaz', 'ka-çı-nıl-MAZ', 'حتميّ / لا مفرّ منه', 'نەگۆڕ', ['Bu sonuç kaçınılmazdı.', 'BU so-NUÇ ka-çı-nıl-maz-DI', 'كانت هذه النتيجة حتمية.', 'ئەم ئەنجامە نەگۆڕ بوو.'], 'adjective'),
  w('belirgin', 'be-lir-GİN', 'واضح / بارز', 'دیار', ['Belirgin bir iyileşme var.', 'be-lir-GİN bir i-yi-leş-ME VAR', 'هناك تحسّن واضح.', 'باشبوونەوەیەکی دیار هەیە.'], 'adjective'),
  w('öngörmek', 'ön-gör-MEK', 'يتوقّع / ينصّ على', 'پێشبینیکردن', ['Yasa bunu öngörmüyor.', 'ya-SA bu-NU ön-gör-mü-YOR', 'القانون لا ينصّ على هذا.', 'یاساکە ئەمە پێشبینی ناکات.'], 'verb'),
  w('irdelemek', 'ir-de-le-MEK', 'يمحّص / يدقّق في', 'لێکۆڵینەوە', ['Konuyu derinlemesine irdeledi.', 'ko-nu-YU de-rin-le-me-si-NE ir-de-le-Dİ', 'محّص الموضوع بعمق.', 'بە قووڵی لە بابەتەکە کۆڵییەوە.'], 'verb'),
  w('bağdaştırmak', 'ba-daş-tır-MAK', 'يوفّق بين / يربط', 'گونجاندن', ['İki görüşü bağdaştırmak zor.', 'i-Kİ gö-rü-ŞÜ ba-daş-tır-MAK ZOR', 'التوفيق بين الرأيين صعب.', 'گونجاندنی هەردوو بۆچوون قورسە.'], 'verb'),
]);

export const C1_VOCABULARY: VocabItem[] = [...academic, ...advanced];
