import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * A2 vocabulary, expansion pass.
 *
 * A2 was the thinnest level relative to its neighbours — 163 words against
 * A1's 370 and B1's 340 — and the gap showed in exactly the places a student
 * spends their first months: what to wear, what the weather is doing, what to
 * say at a station, and the animals every children's book contains.
 *
 * Chosen from the content report's "categories under 15 words" list rather
 * than by guesswork.
 */

/* ---------------- clothing ---------------- */

const CLOTHING: VocabItem[] = pack('clothing', 'a2', 'noun', [
  w('kazak', 'ka-ZAK', 'كنزة صوفية', 'کازاک',
    ['Kışın kalın kazak giyerim.', 'kı-ŞIN ka-LIN ka-ZAK gi-ye-RİM', 'ألبس كنزة سميكة في الشتاء.', 'لە زستاندا کازاکی ئەستوور لەبەر دەکەم.']),
  w('etek', 'e-TEK', 'تنّورة', 'دامێن',
    ['Bu etek sana çok yakışmış.', 'BU e-TEK sa-NA ÇOK ya-kış-MIŞ', 'هذه التنّورة تليق بك كثيراً.', 'ئەم دامێنە زۆر لێت دەگونجێت.']),
  w('bluz', 'BLUZ', 'بلوزة', 'بلوز',
    ['Beyaz bir bluz aldım.', 'be-YAZ bir BLUZ al-DIM', 'اشتريت بلوزة بيضاء.', 'بلوزێکی سپیم کڕی.']),
  w('mont', 'MONT', 'معطف، جاكيت شتوي', 'چاکەتی زستانە',
    ['Montunu giy, hava soğuk.', 'mon-tu-NU giy ha-VA so-ĞUK', 'البس معطفك، الجوّ بارد.', 'چاکەتەکەت لەبەر بکە، هەوا ساردە.']),
  w('atkı', 'at-KI', 'وشاح، شال', 'مێزەر',
    ['Atkımı evde unuttum.', 'at-kı-MI ev-DE u-nut-TUM', 'نسيت وشاحي في البيت.', 'مێزەرەکەم لە ماڵەوە لەبیرکرد.']),
  w('bot', 'BOT', 'حذاء طويل، بوت', 'پێڵاوی درێژ',
    ['Karda bot giymek lazım.', 'kar-DA BOT giy-MEK la-ZIM', 'يجب لبس البوت في الثلج.', 'لە بەفردا پێویستە پێڵاوی درێژ لەبەر بکەیت.']),
  w('terlik', 'ter-LİK', 'شبشب، خفّ', 'پێڵاوی ماڵەوە',
    ['Evde terlik giyeriz.', 'ev-DE ter-LİK gi-ye-RİZ', 'نلبس الشبشب في البيت.', 'لە ماڵەوە پێڵاوی ماڵەوە دەکەینە پێمان.']),
  w('kumaş', 'ku-MAŞ', 'قماش', 'قوماش',
    ['Bu kumaş çok yumuşak.', 'BU ku-MAŞ ÇOK yu-mu-ŞAK', 'هذا القماش ناعم جداً.', 'ئەم قوماشە زۆر نەرمە.']),
  w('şık', 'ŞIK', 'أنيق', 'شیک',
    ['Bugün çok şık görünüyorsun.', 'bu-GÜN ÇOK ŞIK gö-rü-nü-yor-SUN', 'تبدو أنيقاً جداً اليوم.', 'ئەمڕۆ زۆر شیک دیاریت.'], 'adjective'),
]);

/* ---------------- weather ---------------- */

const WEATHER: VocabItem[] = pack('weather', 'a2', 'noun', [
  w('şimşek', 'şim-ŞEK', 'برق', 'برووسکە',
    ['Şimşek çaktı, korktum.', 'şim-ŞEK çak-TI kork-TUM', 'لمع البرق فخفت.', 'برووسکە لێیدا، ترسام.']),
  w('gökkuşağı', 'gök-ku-şa-ĞI', 'قوس قزح', 'کەوانەی هەورە',
    ['Yağmurdan sonra gökkuşağı çıktı.', 'yağ-mur-DAN son-RA gök-ku-şa-ĞI çık-TI', 'ظهر قوس قزح بعد المطر.', 'دوای باران کەوانەی هەورە دەرکەوت.']),
]);

/* ---------------- animals ---------------- */

const ANIMALS: VocabItem[] = pack('animals', 'a2', 'noun', [
  w('keçi', 'ke-Çİ', 'ماعز', 'بزن',
    ['Dağda keçiler otluyordu.', 'dağ-DA ke-çi-LER ot-lu-yor-DU', 'كانت الماعز ترعى في الجبل.', 'لە چیادا بزنەکان دەلەوەڕان.']),
  w('tilki', 'til-Kİ', 'ثعلب', 'ڕێوی',
    ['Tilki çok kurnaz bir hayvandır.', 'til-Kİ ÇOK kur-NAZ bir hay-van-DIR', 'الثعلب حيوان ماكر جداً.', 'ڕێوی ئاژەڵێکی زۆر فێڵبازە.']),
  w('ayı', 'a-YI', 'دبّ', 'ورچ',
    ['Ormanda ayı gördük.', 'or-man-DA a-YI gör-DÜK', 'رأينا دبّاً في الغابة.', 'لە دارستاندا ورچمان بینی.']),
  w('fil', 'FİL', 'فيل', 'فیل',
    ['Fil dünyanın en büyük kara hayvanı.', 'FİL dün-ya-NIN EN bü-YÜK ka-RA hay-va-NI', 'الفيل أكبر حيوان برّي في العالم.', 'فیل گەورەترین ئاژەڵی وشکانییە.']),
  w('maymun', 'may-MUN', 'قرد', 'مەیموون',
    ['Maymunlar ağaçta oynuyor.', 'may-mun-LAR a-ğaç-TA oy-nu-YOR', 'القرود تلعب على الشجرة.', 'مەیموونەکان لەسەر دار یاری دەکەن.']),
  w('kaplumbağa', 'kap-lum-ba-ĞA', 'سلحفاة', 'کیسەڵ',
    ['Kaplumbağa çok yavaş yürür.', 'kap-lum-ba-ĞA ÇOK ya-VAŞ yü-RÜR', 'السلحفاة تمشي ببطء شديد.', 'کیسەڵ زۆر هێواش دەڕوات.']),
  w('karınca', 'ka-rın-CA', 'نملة', 'مێروولە',
    ['Karıncalar çok çalışkandır.', 'ka-rın-ca-LAR ÇOK ça-lış-kan-DIR', 'النمل مجتهد جداً.', 'مێروولەکان زۆر کۆششکەرن.']),
  w('sinek', 'si-NEK', 'ذبابة', 'مێش',
    ['Odada bir sinek var.', 'o-da-DA bir si-NEK var', 'في الغرفة ذبابة.', 'لە ژوورەکەدا مێشێک هەیە.']),
  w('örümcek', 'ö-rüm-CEK', 'عنكبوت', 'جاڵجاڵۆکە',
    ['Köşede örümcek ağı var.', 'kö-şe-DE ö-rüm-CEK a-ĞI var', 'في الزاوية بيت عنكبوت.', 'لە گۆشەکەدا تۆڕی جاڵجاڵۆکە هەیە.']),
  w('fare', 'fa-RE', 'فأر', 'مشک',
    ['Mutfakta fare gördüm.', 'mut-fak-TA fa-RE gör-DÜM', 'رأيت فأراً في المطبخ.', 'لە چێشتخانەدا مشکم بینی.']),
  w('güvercin', 'gü-ver-CİN', 'حمامة', 'کۆتر',
    ['Meydanda güvercinler var.', 'mey-dan-DA gü-ver-cin-LER var', 'في الساحة حمام.', 'لە گۆڕەپاندا کۆتر هەیە.']),
  w('karga', 'kar-GA', 'غراب', 'قەلەڕەش',
    ['Karga ağaca kondu.', 'kar-GA a-ğa-CA kon-DU', 'حطّ الغراب على الشجرة.', 'قەلەڕەشەکە لەسەر دار نیشتەوە.']),
  w('papağan', 'pa-pa-ĞAN', 'ببغاء', 'پەپاغان',
    ['Papağan konuşmayı öğrendi.', 'pa-pa-ĞAN ko-nuş-ma-YI öğ-ren-Dİ', 'تعلّم الببغاء الكلام.', 'پەپاغانەکە فێری قسەکردن بوو.']),
]);

/* ---------------- travel ---------------- */

const TRAVEL: VocabItem[] = pack('travel', 'a2', 'noun', [
  w('valiz', 'va-LİZ', 'حقيبة سفر', 'جانتای گەشت',
    ['Valizimi hazırladım.', 'va-li-zi-Mİ ha-zır-la-DIM', 'حضّرت حقيبتي.', 'جانتاکەمم ئامادە کرد.']),
  w('gişe', 'gi-ŞE', 'شبّاك التذاكر', 'دەریچەی بلیت',
    ['Bilet gişeden alınır.', 'bi-LET gi-şe-DEN a-lı-NIR', 'تُشترى التذكرة من الشبّاك.', 'بلیت لە دەریچەکەوە دەکڕدرێت.']),
  w('peron', 'pe-RON', 'رصيف المحطة', 'سەکۆ',
    ['Tren üçüncü perona geliyor.', 'TREN ü-çün-CÜ pe-ro-NA ge-li-YOR', 'يصل القطار إلى الرصيف الثالث.', 'شەمەندەفەرەکە بۆ سەکۆی سێیەم دێت.']),
  w('kalkış', 'kal-KIŞ', 'إقلاع، مغادرة', 'بەڕێکەوتن',
    ['Kalkış saati değişti.', 'kal-KIŞ sa-a-Tİ de-ğiş-Tİ', 'تغيّر موعد الإقلاع.', 'کاتی بەڕێکەوتن گۆڕا.']),
  w('varış', 'va-RIŞ', 'وصول', 'گەیشتن',
    ['Varış saati akşam yedi.', 'va-RIŞ sa-a-Tİ ak-ŞAM ye-Dİ', 'موعد الوصول السابعة مساءً.', 'کاتی گەیشتن حەوتی ئێوارەیە.']),
  w('gecikme', 'ge-cik-ME', 'تأخير', 'دواکەوتن',
    ['Uçuşta iki saat gecikme var.', 'u-çuş-TA i-Kİ sa-AT ge-cik-ME var', 'هناك تأخير ساعتين في الرحلة.', 'دوو کاتژمێر دواکەوتن لە فڕینەکەدا هەیە.']),
  w('aktarma', 'ak-tar-MA', 'تبديل، ترانزيت', 'گۆڕین',
    ['İstanbul’da aktarma yapacağım.', 'is-tan-BUL-da ak-tar-MA ya-pa-ca-ĞIM', 'سأبدّل في إسطنبول.', 'لە ئیستەنبووڵ دەگۆڕم.']),
  w('konaklama', 'ko-nak-la-MA', 'إقامة، مبيت', 'مانەوە',
    ['Konaklama fiyata dahil mi?', 'ko-nak-la-MA fi-ya-TA da-HİL mi', 'هل الإقامة مشمولة بالسعر؟', 'مانەوە لە نرخەکەدایە؟']),
  w('tercüman', 'ter-cü-MAN', 'مترجم', 'وەرگێڕ',
    ['Bize bir tercüman lazım.', 'bi-ZE bir ter-cü-MAN la-ZIM', 'نحتاج مترجماً.', 'پێویستمان بە وەرگێڕێکە.']),
]);

export const A2_VOCABULARY_MORE: VocabItem[] = [
  ...CLOTHING,
  ...WEATHER,
  ...ANIMALS,
  ...TRAVEL,
];
