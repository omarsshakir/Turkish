import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * A2 vocabulary: the kitchen, and what happens in it.
 *
 * Food nouns are already well covered at A1; what was missing is everything
 * around the food — the tools, the cooking verbs, and the taste adjectives.
 * These are high-frequency words that appear in recipes, restaurant talk and
 * ordinary family conversation, and the verbs in particular are reusable far
 * outside the kitchen (`kesmek`, `dökmek`, `karıştırmak`).
 */

/* ---------------- tools ---------------- */

const TOOLS: VocabItem[] = pack('house', 'a2', 'noun', [
  {
    ...w('çatal', 'ça-TAL', 'شوكة', 'چەتاڵ',
      ['Çatal ve bıçak getirir misin?', 'ça-TAL ve bı-ÇAK ge-ti-RİR mi-SİN', 'هل تحضر شوكة وسكّيناً؟', 'چەتاڵ و چەقۆ دەهێنیت؟']),
  },
  {
    ...w('kaşık', 'ka-ŞIK', 'ملعقة', 'کەوچک',
      ['Bir kaşık şeker koydum.', 'BİR ka-ŞIK şe-KER koy-DUM', 'وضعت ملعقة سكّر.', 'کەوچکێک شەکرم دانا.']),
    collocations: ['çay kaşığı', 'yemek kaşığı', 'bir kaşık'],
  },
  {
    ...w('bıçak', 'bı-ÇAK', 'سكّين', 'چەقۆ',
      ['Bıçak çok keskin.', 'bı-ÇAK ÇOK kes-KİN', 'السكّين حادّة جداً.', 'چەقۆکە زۆر تیژە.']),
    related: ['kesmek'],
  },
  {
    ...w('tencere', 'ten-ce-RE', 'قِدر', 'مەنجەڵ',
      ['Çorbayı tencerede pişirdim.', 'çor-ba-YI ten-ce-re-DE pi-şir-DİM', 'طبخت الشوربة في القِدر.', 'شۆربەکەم لە مەنجەڵدا لێنا.']),
  },
  {
    ...w('tava', 'ta-VA', 'مقلاة', 'تاوە',
      ['Yumurtayı tavaya kırdı.', 'yu-mur-ta-YI ta-va-YA kır-DI', 'كسر البيضة في المقلاة.', 'هێلکەکەی خستە ناو تاوەکە.']),
    related: ['kızartmak'],
  },
  {
    ...w('fırın', 'fı-RIN', 'فرن؛ مخبز', 'تەنوور؛ نانەواخانە',
      ['Ekmeği fırından aldım.', 'ek-me-Ğİ fı-rın-DAN al-DIM', 'أخذت الخبز من المخبز.', 'نانەکەم لە نانەواخانە کڕی.']),
    collocations: ['fırında pişirmek', 'fırına vermek'],
    note: b(
      'الكلمة نفسها للفرن في البيت وللمخبز في الشارع — السياق يفصل.',
      'هەمان وشە بۆ تەنووری ماڵ و نانەواخانەی سەر شەقام بەکاردێت.',
    ),
  },
]);

/* ---------------- cooking verbs ---------------- */

const COOKING: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('pişirmek', 'pi-şir-MEK', 'يطبخ', 'لێنان',
      ['Akşam makarna pişireceğim.', 'ak-ŞAM ma-kar-NA pi-şi-re-ce-ĞİM', 'سأطبخ معكرونة مساءً.', 'ئێوارە ماکارۆنە لێدەنێم.']),
    collocations: ['yemek pişirmek', 'fırında pişirmek'],
    related: ['pişmek'],
    note: b(
      '«pişirmek» يفعله الطبّاخ، و«pişmek» يحدث للطعام: «Yemek pişti» = نضج الطعام.',
      '«pişirmek» چێشتلێنەر دەیکات، «pişmek» بۆ خواردنەکە ڕوودەدات.',
    ),
  },
  {
    ...w('kesmek', 'kes-MEK', 'يقطع', 'بڕین',
      ['Ekmeği ince kes.', 'ek-me-Ğİ in-CE kes', 'اقطع الخبز رقيقاً.', 'نانەکە باریک ببڕە.']),
    collocations: ['ekmek kesmek', 'sözünü kesmek'],
    note: b(
      'تُستعمل أيضاً مجازاً: «sözünü kesmek» = يقاطع كلامه.',
      'بە مەجازیش بەکاردێت: «sözünü kesmek» = قسەی پێبڕین.',
    ),
  },
  {
    ...w('doğramak', 'doğ-ra-MAK', 'يفرم، يقطّع صغيراً', 'وردکردن',
      ['Soğanı ince doğradım.', 'so-ğa-NI in-CE doğ-ra-DIM', 'فرمت البصل ناعماً.', 'پیازەکەم ورد کرد.']),
    related: ['kesmek'],
  },
  {
    ...w('kızartmak', 'kı-zart-MAK', 'يقلي', 'برژاندن',
      ['Patatesleri kızarttık.', 'pa-ta-tes-le-Rİ kı-zart-TIK', 'قلينا البطاطا.', 'پەتاتەکانمان برژاند.']),
    collocations: ['patates kızartması', 'ekmek kızartmak'],
  },
  {
    ...w('haşlamak', 'haş-la-MAK', 'يسلق', 'کوڵاندن',
      ['Yumurtayı beş dakika haşla.', 'yu-mur-ta-YI BEŞ da-ki-KA haş-LA', 'اسلق البيضة خمس دقائق.', 'هێلکەکە پێنج خولەک بکوڵێنە.']),
  },
  {
    ...w('karıştırmak', 'ka-rış-tır-MAK', 'يخلط، يقلّب؛ يخلط بين شيئين', 'تێکەڵکردن',
      ['Şekeri iyice karıştır.', 'şe-ke-Rİ i-yi-CE ka-rış-TIR', 'قلّب السكّر جيداً.', 'شەکرەکە باش تێکەڵ بکە.']),
    collocations: ['iyice karıştırmak', 'birbirine karıştırmak'],
    note: b(
      'لها معنى ثانٍ مهم: «isimleri karıştırdım» = خلطت بين الأسماء.',
      'واتایەکی دووەمی گرنگی هەیە: «isimleri karıştırdım» = ناوەکانم تێکەڵ کرد.',
    ),
  },
  {
    ...w('dökmek', 'dök-MEK', 'يصبّ، يسكب', 'ڕشتن',
      ['Çayı bardağa döktü.', 'ça-YI bar-da-ĞA dök-TÜ', 'صبّ الشاي في الكوب.', 'چایەکەی ڕشتە ناو گڵاسەکە.']),
    collocations: ['su dökmek', 'yere dökmek'],
  },
]);

/* ---------------- taste ---------------- */

const TASTE: VocabItem[] = pack('food', 'a2', 'adjective', [
  {
    ...w('tuzlu', 'tuz-LU', 'مالح', 'سوێر',
      ['Çorba biraz tuzlu olmuş.', 'çor-BA bi-RAZ tuz-LU ol-MUŞ', 'صارت الشوربة مالحة قليلاً.', 'شۆربەکە کەمێک سوێر بووە.']),
    opposite: ['tuzsuz'],
  },
  {
    ...w('ekşi', 'ek-Şİ', 'حامض', 'ترش',
      ['Limon çok ekşi.', 'li-MON ÇOK ek-Şİ', 'الليمون حامض جداً.', 'لیمۆ زۆر ترشە.']),
    collocations: ['ekşi maya', 'ekşi elma'],
  },
  {
    ...w('acı', 'a-CI', 'حارّ (طعم)؛ مؤلم', 'تیژ؛ ئازار',
      ['Bu biber çok acı.', 'BU bi-BER ÇOK a-CI', 'هذا الفلفل حارّ جداً.', 'ئەم بیبەرە زۆر تیژە.']),
    note: b(
      '⚠️ «acı» للطعم الحارّ لا للحرارة — الساخن هو «sıcak». ولها معنى ثانٍ: الألم والحزن.',
      '⚠️ «acı» بۆ تامی تیژە نەک گەرمی — گەرم «sıcak»ە. واتای دووەمیشی هەیە: ئازار.',
    ),
  },
]);

/* ---------------- store cupboard ---------------- */

const PANTRY: VocabItem[] = pack('food', 'a2', 'noun', [
  {
    ...w('un', 'UN', 'طحين', 'ئارد',
      ['İki bardak un lazım.', 'i-Kİ bar-DAK UN la-ZIM', 'يلزم كوبان من الطحين.', 'دوو گڵاس ئارد پێویستە.']),
  },
  {
    ...w('baharat', 'ba-ha-RAT', 'بهارات', 'بەهارات',
      ['Yemeğe baharat ekledim.', 'ye-me-ĞE ba-ha-RAT ek-le-DİM', 'أضفت بهارات إلى الطعام.', 'بەهاراتم بۆ خواردنەکە زیاد کرد.']),
  },
  {
    ...w('zeytinyağı', 'zey-tin-ya-ĞI', 'زيت زيتون', 'ڕۆنی زەیتوون',
      ['Salataya zeytinyağı koy.', 'sa-la-ta-YA zey-tin-ya-ĞI koy', 'ضع زيت زيتون على السلطة.', 'ڕۆنی زەیتوون بخە سەر زەڵاتەکە.']),
    note: b(
      'مركّبة من «zeytin» + «yağ»: زيتون + دهن.',
      'لێکدراوە لە «zeytin» + «yağ»: زەیتوون + ڕۆن.',
    ),
  },
  {
    ...w('maydanoz', 'may-da-NOZ', 'بقدونس', 'جەعدە',
      ['Üstüne maydanoz serptim.', 'üs-tü-NE may-da-NOZ serp-TİM', 'رششت بقدونساً فوقه.', 'جەعدەم بەسەریدا پرژاند.']),
  },
  {
    ...w('patlıcan', 'pat-lı-CAN', 'باذنجان', 'باینجانی ڕەش',
      ['Patlıcan yemeğini severim.', 'pat-lı-CAN ye-me-ği-Nİ se-ve-RİM', 'أحبّ أكلة الباذنجان.', 'خواردنی باینجانی ڕەشم خۆشدەوێت.']),
  },
  {
    ...w('kabak', 'ka-BAK', 'كوسا؛ يقطين', 'کولەکە',
      ['Kabak dolması yaptık.', 'ka-BAK dol-ma-SI yap-TIK', 'صنعنا محشي كوسا.', 'دۆڵمەی کولەکەمان دروست کرد.']),
  },
]);

export const A2_VOCABULARY_KITCHEN: VocabItem[] = [
  ...TOOLS,
  ...COOKING,
  ...TASTE,
  ...PANTRY,
];
