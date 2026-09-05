import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * B1 vocabulary: body idioms and everyday fixed expressions.
 *
 * The existing idiom set sits almost entirely at C1+, which is backwards.
 * Turkish's commonest idioms are built from body parts — `göz`, `kulak`, `el`,
 * `kafa`, `can`, `dil` — and a B1 student meets them constantly in speech,
 * subtitles and messages, long before they read anything literary.
 *
 * Each entry gives the literal reading as well as the meaning, because the
 * literal reading is usually what makes it memorable: `lafı uzatmak` is "to
 * lengthen the word", and a student who sees that never forgets it.
 *
 * Where Arabic or Kurdish has the *same* image (`kulak vermek` / «أعار أذناً»)
 * the note says so — a free gift for our students, and worth pointing at.
 * Where the image differs, the note warns instead.
 */

/* ---------------- eyes and ears ---------------- */

const SENSES: VocabItem[] = pack('idioms', 'b1', 'phrase', [
  {
    ...w('kulak vermek', 'ku-LAK ver-MEK', 'يُصغي، يُعير انتباهاً', 'گوێگرتن',
      ['Söylediklerine kulak ver.', 'söy-le-dik-le-ri-NE ku-LAK ver', 'أصغِ إلى ما يقوله.', 'گوێ لەوە بگرە کە دەیڵێت.']),
    note: b(
      'حرفياً «يُعطي أذناً» — نفس الصورة تماماً في العربية «أعار أذناً صاغية».',
      'لە ڕەگدا «گوێ دان» — هەمان وێنە لە عەرەبیدا.',
    ),
  },
  {
    ...w('kulak asmak', 'ku-LAK as-MAK', 'يأبه، يعير اهتماماً (غالباً منفيّ)', 'گوێ پێدان',
      ['Uyarılara kulak asmadı.', 'u-ya-rı-la-RA ku-LAK as-ma-DI', 'لم يأبه للتحذيرات.', 'گوێی بە ئاگادارکردنەوەکان نەدا.']),
    note: b(
      '⚠️ تُستعمل منفيّة في الغالب: «kulak asmıyor» = لا يأبه. المثبتة نادرة.',
      '⚠️ زۆرجار بە نەرێنی بەکاردێت.',
    ),
  },
  {
    ...w('gözden geçirmek', 'göz-DEN ge-çir-MEK', 'يراجع، يمرّ على', 'پێداچوونەوە',
      ['Raporu bir kez daha gözden geçirdim.', 'ra-po-RU bir KEZ da-HA göz-DEN ge-çir-DİM', 'راجعت التقرير مرّة أخرى.', 'جارێکی تر پێداچوونەوەم بۆ ڕاپۆرتەکە کرد.']),
    note: b(
      'حرفياً «يُمرّر من العين». صيغة أساسية في العمل المكتبي.',
      'لە ڕەگدا «بە چاودا تێپەڕاندن».',
    ),
  },
  {
    ...w('dili dönmek', 'di-Lİ dön-MEK', 'يقدر على النطق/التعبير', 'زمانی سووڕان',
      ['Dilim dönmüyor, çok zor bir kelime.', 'di-LİM dön-mü-YOR ÇOK ZOR bir ke-li-ME', 'لساني لا يطاوعني، كلمة صعبة جداً.', 'زمانم ناسووڕێت، وشەیەکی زۆر قورسە.']),
    note: b(
      'حرفياً «يدور اللسان». تُستعمل غالباً منفيّة للاعتذار عن صعوبة النطق.',
      'لە ڕەگدا «سووڕانی زمان».',
    ),
  },
]);

/* ---------------- hands and heads ---------------- */

const ACTION: VocabItem[] = pack('idioms', 'b1', 'phrase', [
  {
    ...w('el atmak', 'EL at-MAK', 'يشرع في، يباشر', 'دەست بەکارکردن',
      ['Soruna hemen el attı.', 'so-ru-NA HE-men EL at-TI', 'باشر معالجة المشكلة فوراً.', 'دەستبەجێ دەستی بە کێشەکە کرد.']),
    note: b(
      '⚠️ المشكلة تأخذ حالة الاتّجاه: «-e el atmak».',
      '⚠️ حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('kafa yormak', 'ka-FA yor-MAK', 'يُعمِل فكره، يجهد ذهنه', 'بیرکردنەوەی قووڵ',
      ['Bu soruna çok kafa yorduk.', 'BU so-ru-NA ÇOK ka-FA yor-DUK', 'أجهدنا أذهاننا كثيراً في هذه المشكلة.', 'زۆر بیرمان لەم کێشەیە کردەوە.']),
    note: b(
      'حرفياً «يُتعب الرأس» — من «yormak» بمعنى يُتعب.',
      'لە ڕەگدا «ماندووکردنی سەر».',
    ),
  },
  {
    ...w('can atmak', 'CAN at-MAK', 'يتلهّف، يتوق بشدّة', 'زۆر ئارەزوو کردن',
      ['Görmeye can atıyorum.', 'gör-me-YE CAN a-tı-yo-RUM', 'أتلهّف لرؤيته.', 'زۆر ئارەزووی بینینی دەکەم.']),
    note: b(
      'حرفياً «يرمي الروح» — أقوى بكثير من «istemek».',
      'لە ڕەگدا «گیان هاویشتن».',
    ),
  },
  {
    ...w('işi büyütmek', 'i-Şİ bü-yüt-MEK', 'يضخّم الأمر', 'کارەکە گەورە کردن',
      ['Boşuna işi büyütme.', 'bo-şu-NA i-Şİ bü-yüt-ME', 'لا تضخّم الأمر بلا داعٍ.', 'بەخۆڕایی کارەکە گەورە مەکە.']),
    opposite: ['işi küçültmek'],
  },
  {
    ...w('lafı uzatmak', 'la-FI u-zat-MAK', 'يُطيل الكلام', 'قسە درێژکردنەوە',
      ['Lafı uzatmadan söyleyeyim.', 'la-FI u-zat-ma-DAN söy-le-ye-YİM', 'أقولها دون إطالة.', 'بەبێ درێژکردنەوە بیڵێم.']),
    note: b(
      '«Lafı uzatmayayım» صيغة شائعة جداً لبدء خلاصة الكلام.',
      '«Lafı uzatmayayım» دەستەواژەیەکی باوە.',
    ),
  },
  {
    ...w('sözünü kesmek', 'sö-zü-NÜ kes-MEK', 'يقاطع كلامه', 'قسەی پێبڕین',
      ['Özür dilerim, sözünü kestim.', 'ö-ZÜR di-le-RİM sö-zü-NÜ kes-TİM', 'أعتذر، قاطعتك.', 'ببوورە، قسەم پێبڕیت.']),
    related: ['kesmek'],
    note: b(
      'نفس الصورة العربية «قطع كلامه» تماماً.',
      'هەمان وێنەی عەرەبی.',
    ),
  },
]);

/* ---------------- states of a person ---------------- */

const STATES: VocabItem[] = pack('idioms', 'b1', 'phrase', [
  {
    ...w('başı dertte', 'ba-ŞI dert-TE', 'في ورطة', 'لە کێشەدایە',
      ['Başı büyük dertte.', 'ba-ŞI bü-YÜK dert-TE', 'هو في ورطة كبيرة.', 'لە کێشەیەکی گەورەدایە.']),
    note: b(
      'حرفياً «رأسه في الهمّ» — تُصرّف مع الشخص: başım, başın, başı.',
      'لە ڕەگدا «سەری لە کێشەدایە».',
    ),
  },
  {
    ...w('canı sıkkın', 'ca-NI sık-KIN', 'مكتئب، ضيّق الصدر', 'دڵتەنگ',
      ['Bugün canım biraz sıkkın.', 'bu-GÜN ca-NIM bi-RAZ sık-KIN', 'أنا ضيّق الصدر قليلاً اليوم.', 'ئەمڕۆ کەمێک دڵتەنگم.']),
    related: ['can sıkıntısı'],
    note: b(
      '«canım sıkılıyor» = أشعر بالملل أو الضيق — من أشيع عبارات الحياة اليومية.',
      '«canım sıkılıyor» دەستەواژەیەکی زۆر باوە.',
    ),
  },
  {
    ...w('içi rahat', 'i-Çİ ra-HAT', 'مرتاح البال', 'دڵئاسوودە',
      ['Artık içim rahat.', 'ar-TIK i-ÇİM ra-HAT', 'صرت مرتاح البال الآن.', 'ئێستا دڵم ئاسوودەیە.']),
    opposite: ['içi rahat değil'],
    note: b(
      'حرفياً «داخله مرتاح» — أقرب صورة عربية «مرتاح البال» أو «قرّت عينه».',
      'لە ڕەگدا «ناوەوەی ئاسوودەیە».',
    ),
  },
  {
    ...w('eli boş', 'e-Lİ BOŞ', 'صفر اليدين', 'دەستبەتاڵ',
      ['Eli boş dönmek istemedi.', 'e-Lİ BOŞ dön-MEK is-te-me-Dİ', 'لم يشأ العودة صفر اليدين.', 'نەیویست بە دەستبەتاڵی بگەڕێتەوە.']),
    note: b(
      'نفس الصورة في العربية والكردية — ترجمة حرفية صحيحة لمرّة واحدة.',
      'هەمان وێنە لە عەرەبی و کوردیدا.',
    ),
  },
  {
    ...w('ağzı sıkı', 'ağ-ZI sı-KI', 'كتوم، يحفظ السرّ', 'دەم پارێزراو',
      ['Ona güvenebilirsin, ağzı sıkıdır.', 'o-NA gü-ve-ne-bi-lir-SİN ağ-ZI sı-kı-DIR', 'يمكنك الوثوق به، إنه كتوم.', 'دەتوانیت متمانەی پێبکەیت، دەمی پارێزراوە.']),
    note: b(
      'حرفياً «فمه مشدود». المديح هنا، لا الذمّ.',
      'لە ڕەگدا «دەمی توندە» — پەسنە نەک ڕەخنە.',
    ),
  },
  {
    ...w('burnu büyümek', 'bur-NU bü-yü-MEK', 'يتكبّر', 'لووتبەرزبوون',
      ['Terfi edince burnu büyüdü.', 'ter-Fİ e-din-CE bur-NU bü-yü-DÜ', 'تكبّر بعد الترقية.', 'دوای بەرزبوونەوە لووتی بەرز بوو.']),
    note: b(
      'حرفياً «كبر أنفه» — قريبة من «شمخ بأنفه» العربية.',
      'لە ڕەگدا «لووتی گەورە بوو».',
    ),
  },
]);

/* ---------------- what happens to you ---------------- */

const EVENTS: VocabItem[] = pack('idioms', 'b1', 'phrase', [
  {
    ...w('aklına gelmek', 'ak-lı-NA gel-MEK', 'يخطر بباله', 'بەبیریدا هاتن',
      ['Birden aklıma geldi.', 'bir-DEN ak-lı-MA gel-Dİ', 'خطر ببالي فجأة.', 'لەناکاو بەبیرمدا هات.']),
    note: b(
      'نفس الصورة العربية «خطر على البال» — يأخذ ضمير الملكية والاتّجاه معاً.',
      'هەمان وێنەی عەرەبی.',
    ),
  },
  {
    ...w('aklında tutmak', 'ak-lın-DA tut-MAK', 'يبقي في ذهنه', 'لەبیر هێشتنەوە',
      ['Bunu aklında tut.', 'bu-NU ak-lın-DA tut', 'ابقِ هذا في ذهنك.', 'ئەمە لەبیر بێت.']),
    related: ['aklına gelmek'],
  },
  {
    ...w('yolu düşmek', 'yo-LU düş-MEK', 'يمرّ بالمكان صدفةً', 'ڕێگای کەوتنە',
      ['Bir gün yolun düşerse uğra.', 'bir GÜN yo-LUN dü-şer-SE uğ-RA', 'إن مررت يوماً فتفضّل.', 'ڕۆژێک ئەگەر ڕێگات کەوتە ئێرە، سەردانم بکە.']),
    note: b(
      'حرفياً «يقع طريقه» — دعوة مهذّبة غير مُلزِمة.',
      'لە ڕەگدا «ڕێگای کەوتن».',
    ),
  },
  {
    ...w('yüz vermek', 'YÜZ ver-MEK', 'يُدلّل، يعطي وجهاً (سلبي)', 'ڕوو دان',
      ['Fazla yüz verme.', 'faz-LA YÜZ ver-ME', 'لا تُفرط في التدليل.', 'زۆر ڕووی مەدەرێ.']),
    note: b(
      '⚠️ سلبية غالباً: «yüz verirsen şımarır» = إن دلّلتَه أفسدتَه.',
      '⚠️ زۆرجار نەرێنییە.',
    ),
  },
]);

export const B1_VOCABULARY_IDIOMS: VocabItem[] = [
  ...SENSES,
  ...ACTION,
  ...STATES,
  ...EVENTS,
];
