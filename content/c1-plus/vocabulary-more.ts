import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * C1+ vocabulary, expansion pass.
 *
 * At this level the useful additions are not new topics but finer degrees:
 * words that let a writer say *how* clear something is, *how* seriously a
 * claim is meant, and *what kind* of figure a sentence is using.
 *
 * Many of these are Arabic-derived and carry connection data, which makes
 * them unusually approachable for this platform's students even though the
 * register is the highest in the curriculum.
 */

const PRECISION: VocabItem[] = pack('literary', 'c1plus', 'adjective', [
  w('muğlak', 'muğ-LAK', 'غامض، ملتبس', 'ناڕوون',
    ['İfadesi muğlak kaldı.', 'i-fa-de-Sİ muğ-LAK kal-DI', 'بقيت عبارته غامضة.', 'دەربڕینەکەی ناڕوون مایەوە.']),
  w('müphem', 'müp-HEM', 'مبهم', 'تێکەڵ',
    ['Müphem bir cevap verdi.', 'müp-HEM bir ce-VAP ver-Dİ', 'أعطى جواباً مبهماً.', 'وەڵامێکی تێکەڵی دایەوە.']),
  w('sarih', 'sa-RİH', 'صريح، واضح', 'ئاشکرا',
    ['Kanun bu konuda sarihtir.', 'ka-NUN BU ko-nu-DA sa-rih-TİR', 'القانون صريح في هذا الأمر.', 'یاساکە لەم بارەیەوە ئاشکرایە.']),
  w('çekingen', 'çe-kin-GEN', 'متحفّظ، متردّد', 'کشاوە',
    ['Toplantıda çekingen davrandı.', 'top-lan-tı-DA çe-kin-GEN dav-ran-DI', 'تصرّف بتحفّظ في الاجتماع.', 'لە کۆبوونەوەکەدا بە کشاوەیی ڕەفتاری کرد.']),
  w('alaycı', 'a-lay-CI', 'ساخر', 'گاڵتەجاڕ',
    ['Alaycı bir üslupla yazmış.', 'a-lay-CI bir üs-lup-LA yaz-MIŞ', 'كتب بأسلوب ساخر.', 'بە شێوازێکی گاڵتەجاڕانە نووسیویەتی.']),
  w('hüzünlü', 'hü-zün-LÜ', 'حزين', 'خەمبار',
    ['Hüzünlü bir şarkıydı.', 'hü-zün-LÜ bir şar-kıy-DI', 'كانت أغنية حزينة.', 'گۆرانییەکی خەمبار بوو.']),
]);

const ABSTRACT: VocabItem[] = pack('literary', 'c1plus', 'noun', [
  w('tenakuz', 'te-na-KUZ', 'تناقض', 'دژایەتی',
    ['Metinde açık bir tenakuz var.', 'me-tin-DE a-ÇIK bir te-na-KUZ var', 'في النصّ تناقض واضح.', 'لە دەقەکەدا دژایەتییەکی ئاشکرا هەیە.']),
  w('mübalağa', 'mü-ba-la-ĞA', 'مبالغة', 'زیادەڕەوی',
    ['Bu biraz mübalağa oldu.', 'BU bi-RAZ mü-ba-la-ĞA ol-DU', 'صار في هذا شيء من المبالغة.', 'ئەمە کەمێک زیادەڕەوی بوو.']),
  w('istihza', 'is-tih-ZA', 'استهزاء، تهكّم', 'گاڵتەپێکردن',
    ['Sözlerinde ince bir istihza vardı.', 'söz-le-rin-DE in-CE bir is-tih-ZA var-DI', 'في كلامه تهكّم خفيّ.', 'لە قسەکانیدا گاڵتەپێکردنێکی ناسک هەبوو.']),
  w('tevazu', 'te-va-ZU', 'تواضع', 'خۆنەویستی',
    ['Tevazu büyüklüğün işaretidir.', 'te-va-ZU bü-yük-lü-ĞÜN i-şa-re-ti-DİR', 'التواضع علامة العظمة.', 'خۆنەویستی نیشانەی گەورەییە.']),
  w('ihtiyat', 'ih-ti-YAT', 'احتياط، حذر', 'وریایی',
    ['İhtiyatı elden bırakmadı.', 'ih-ti-ya-TI el-DEN bı-rak-ma-DI', 'لم يفرّط في الحذر.', 'وریایی لەدەست نەدا.']),
  w('tefekkür', 'te-fek-KÜR', 'تفكّر، تأمّل', 'بیرکردنەوە',
    ['Uzun bir tefekkürden sonra karar verdi.', 'u-ZUN bir te-fek-kür-DEN son-RA ka-RAR ver-Dİ', 'قرّر بعد تفكّر طويل.', 'دوای بیرکردنەوەیەکی درێژ بڕیاری دا.']),
  w('tezahür', 'te-za-HÜR', 'تجلٍّ، ظهور', 'دەرکەوتن',
    ['Bu tutum korkunun bir tezahürü.', 'BU tu-TUM kor-ku-NUN bir te-za-hü-RÜ', 'هذا الموقف مظهر من مظاهر الخوف.', 'ئەم هەڵوێستە دەرکەوتنێکی ترسە.']),
  w('sükûnet', 'sü-kû-NET', 'سكينة، هدوء', 'ئارامی',
    ['Odaya derin bir sükûnet çöktü.', 'o-da-YA de-RİN bir sü-kû-NET çök-TÜ', 'خيّم على الغرفة سكون عميق.', 'ئارامییەکی قووڵ باڵی بەسەر ژوورەکەدا کێشا.']),
  w('telakki', 'te-lak-Kİ', 'تصوّر، فهم للأمر', 'تێگەیشتن',
    ['Bu, meseleye dar bir telakki.', 'BU me-se-le-YE DAR bir te-lak-Kİ', 'هذا تصوّر ضيّق للمسألة.', 'ئەمە تێگەیشتنێکی تەسکە لە بابەتەکە.']),
  w('ahenk', 'a-HENK', 'انسجام، تناغم', 'هاوئاهەنگی',
    ['Renkler arasında ahenk var.', 'renk-LER a-ra-sın-DA a-HENK var', 'بين الألوان انسجام.', 'لە نێوان ڕەنگەکاندا هاوئاهەنگی هەیە.']),
  w('övgü', 'öv-GÜ', 'مدح، ثناء', 'ستایش',
    ['Eleştiriden çok övgü aldı.', 'e-leş-ti-ri-DEN ÇOK öv-GÜ al-DI', 'نال ثناءً أكثر من النقد.', 'زیاتر لە ڕەخنە ستایشی وەرگرت.']),
  w('benzetme', 'ben-zet-ME', 'تشبيه', 'وێنەکردن',
    ['Güzel bir benzetme kullandı.', 'gü-ZEL bir ben-zet-ME kul-lan-DI', 'استخدم تشبيهاً جميلاً.', 'وێنەکردنێکی جوانی بەکارهێنا.']),
  w('ironi', 'i-ro-Nİ', 'مفارقة، سخرية', 'ئایرۆنی',
    ['Hikâyenin ironisi sonda ortaya çıkıyor.', 'hi-kâ-ye-NİN i-ro-ni-Sİ son-DA or-ta-YA çı-kı-YOR', 'تظهر مفارقة القصة في النهاية.', 'ئایرۆنی چیرۆکەکە لە کۆتاییدا دەردەکەوێت.']),
]);

const ADVERBS: VocabItem[] = pack('formal', 'c1plus', 'adverb', [
  w('zımnen', 'zım-NEN', 'ضمناً', 'بە ناڕاستەوخۆ',
    ['Zımnen kabul etmiş oldu.', 'zım-NEN ka-BUL et-MİŞ ol-DU', 'صار قابلاً ضمناً.', 'بە ناڕاستەوخۆ قبووڵی کرد.']),
  w('teenni', 'te-en-Nİ', 'تأنٍّ، تمهّل', 'خاوی',
    ['Teenni ile hareket etmeliyiz.', 'te-en-Nİ i-LE ha-re-KET et-me-li-YİZ', 'علينا التصرّف بتأنٍّ.', 'دەبێت بە خاوی جووڵەبکەین.'], 'noun'),
]);

export const C1PLUS_VOCABULARY_MORE: VocabItem[] = [
  ...PRECISION,
  ...ABSTRACT,
  ...ADVERBS,
];
