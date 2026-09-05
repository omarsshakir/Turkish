import type { SentencePack } from '@/types/content';
import { b, p } from '../shared/helpers';

export const B2_SENTENCES: SentencePack[] = [
  {
    id: 'b2-sent-argument',
    level: 'b2',
    order: 1,
    title: 'Tartışmak ve Savunmak',
    titleI18n: b('النقاش والدفاع عن الرأي', 'گفتوگۆ و بەرگری لە ڕا'),
    focus: b('ادعم موقفك بحجّة ورد على الاعتراض.', 'پاڵپشتی هەڵوێستەکەت بکە بە بەڵگە و وەڵامی ناڕەزایی بدەوە.'),
    sentences: [
      p('Bu konuda farklı düşündüğümü belirtmek isterim.', 'BU ko-nu-DA fark-LI dü-şün-dü-ü-MÜ be-lirt-MEK is-te-rim', 'أودّ الإشارة إلى أنني أفكّر بشكل مختلف في هذا الأمر.', 'دەمەوێت ئاماژە بەوە بکەم کە بە جیاوازی بیر دەکەمەوە.'),
      p('Bir noktaya dikkat çekmek istiyorum.', 'bir nok-ta-YA dik-KAT çek-MEK is-ti-YO-rum', 'أريد لفت الانتباه إلى نقطة.', 'دەمەوێت سەرنج بۆ خاڵێک ڕابکێشم.'),
      p('Söylediklerinize katılmakla birlikte bir itirazım var.', 'söy-le-dik-le-ri-ni-ZE ka-tıl-mak-LA bir-lik-TE bir i-ti-ra-ZIM VAR', 'مع أنني أتفق مع ما قلتم، لديّ اعتراض.', 'لەگەڵ ئەوەی هاوڕام لەگەڵ قسەکانتان، ناڕەزاییەکم هەیە.'),
      p('Bunu destekleyen somut bir veri var mı?', 'bu-NU des-tek-le-YEN so-MUT bir ve-Rİ var MI', 'هل توجد بيانات ملموسة تدعم هذا؟', 'داتایەکی بەرچاو هەیە کە پشتگیری ئەمە بکات؟'),
      p('Meseleye başka bir açıdan bakalım.', 'me-se-le-YE baş-KA bir a-çı-DAN ba-ka-LIM', 'لننظر إلى المسألة من زاوية أخرى.', 'با لە ڕوانگەیەکی ترەوە سەیری مەسەلەکە بکەین.'),
      p('Bence sorunun kökeni daha derinde.', 'ben-DJE so-ru-NUN kö-ke-Nİ da-HA de-rin-DE', 'برأيي جذر المشكلة أعمق من ذلك.', 'بە بۆچوونی من ڕەگی کێشەکە قووڵترە.'),
      p('Haklı olabilirsiniz, ancak şunu da göz ardı etmeyelim.', 'hak-LI o-la-bi-lir-si-NİZ an-DJAK şu-NU da GÖZ ar-DI et-me-ye-LİM', 'قد تكونون على حق، لكن دعونا لا نتجاهل هذا أيضاً.', 'لەوانەیە ڕاست بکەن، بەڵام با ئەمەش پشتگوێ نەخەین.'),
      p('Sonuç olarak her iki görüşün de haklı yanları var.', 'so-NUÇ o-la-RAK her i-Kİ gö-rü-ŞÜN de hak-LI yan-la-RI VAR', 'خلاصةً، لكلا الرأيين جوانب صائبة.', 'لە کۆتاییدا، هەردوو بۆچوونەکە لایەنی ڕاستیان هەیە.'),
    ],
  },
  {
    id: 'b2-sent-emotions',
    level: 'b2',
    order: 2,
    title: 'İnce Duyguları İfade Etmek',
    titleI18n: b('التعبير عن المشاعر الدقيقة', 'دەربڕینی هەستە ناسکەکان'),
    focus: b('تجاوز "سعيد" و"حزين" إلى الظلال الدقيقة.', 'لە "دڵخۆش" و "خەمگین" تێپەڕە بۆ سێبەرە ناسکەکان.'),
    sentences: [
      p('Doğrusu biraz hayal kırıklığına uğradım.', 'do-ru-SU bi-RAZ ha-YAL kı-rık-lı-ı-NA u-ra-DIM', 'بصراحة أصابتني خيبة أمل بسيطة.', 'ڕاستییەکەی کەمێک دڵشکاو بووم.'),
      p('İçimde tarif edemediğim bir huzursuzluk var.', 'i-çim-DE ta-RİF e-de-me-di-İM bir hu-zur-suz-LUK VAR', 'في داخلي قلق لا أستطيع وصفه.', 'لە ناخمدا نائارامییەک هەیە کە ناتوانم وەسفی بکەم.'),
      p('Ne yalan söyleyeyim, çok gurur duydum.', 'NE ya-LAN söy-le-ye-YİM ÇOK gu-RUR du-y-DUM', 'لن أكذب، شعرت بفخر كبير.', 'درۆ ناکەم، زۆر شانازیم کرد.'),
      p('Bu haber beni derinden etkiledi.', 'BU ha-BER be-Nİ de-rin-DEN et-ki-le-Dİ', 'أثّر فيّ هذا الخبر بعمق.', 'ئەم هەواڵە بە قووڵی کاریگەری لەسەرم کرد.'),
      p('Açıkçası bu durumdan rahatsızım.', 'a-çık-ça-SI BU du-rum-DAN ra-hat-SI-zım', 'بصراحة أنا منزعج من هذا الوضع.', 'ڕاستییەکەی لەم دۆخە نائارامم.'),
      p('Bir yandan sevindim, bir yandan endişelendim.', 'bir yan-DAN se-vin-DİM bir yan-DAN en-di-şe-len-DİM', 'من جهة فرحت، ومن جهة أخرى قلقت.', 'لەلایەکەوە دڵخۆش بووم، لەلایەکی ترەوە نیگەران.'),
      p('İçim rahat, doğru olanı yaptım.', 'i-ÇİM ra-HAT do-RU o-la-NI yap-TIM', 'ضميري مرتاح، فعلت الصواب.', 'دڵم ئاسوودەیە، ئەوەی ڕاست بوو کردم.'),
      p('Buna gerçekten çok içerledim.', 'bu-NA ger-çek-TEN ÇOK i-çer-le-DİM', 'تضايقت من هذا كثيراً حقاً.', 'بەڕاستی زۆرم پێ ناخۆش بوو.'),
    ],
  },
];
