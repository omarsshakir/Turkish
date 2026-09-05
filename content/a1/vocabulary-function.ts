import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A1 vocabulary: the function words.
 *
 * The cross-curriculum gap audit (`node scripts/gap-audit.mjs`) found that the
 * single most frequent word in the whole curriculum — `değil`, 76 occurrences —
 * was not a vocabulary entry. Nor were `için`, `kadar`, `gibi`, `ama`, `çünkü`,
 * `hiç`, `daha`, `herkes`, or **any personal pronoun or question word**.
 *
 * They were everywhere in the sentences and nowhere in the dictionary: a
 * student could read `ben` a hundred times and never look it up, favourite it,
 * or meet it in review. Nothing in the curriculum ranked higher by frequency,
 * and nothing was more completely missing.
 *
 * Function words are also where first-language interference bites hardest, so
 * these entries carry proportionally more notes than the rest of A1. The three
 * recurring traps for Arabic and Kurdish speakers:
 *
 *   1. Turkish postpositions come AFTER the noun (`senin için`), not before.
 *   2. `değil` negates nouns and adjectives; verbs are negated by a suffix.
 *   3. `hiç` needs a negative verb — Turkish requires the double negative that
 *      Arabic and Kurdish also use, so this one is a help, not a trap.
 */

/* ---------------- personal pronouns ---------------- */

const PRONOUNS: VocabItem[] = pack('function', 'a1', 'pronoun', [
  {
    ...w('ben', 'BEN', 'أنا', 'من',
      ['Ben öğrenciyim.', 'BEN öğ-ren-ci-YİM', 'أنا طالب.', 'من قوتابیم.']),
    collocations: ['bana', 'beni', 'benim', 'bende', 'benden'],
    note: b(
      '⚠️ الضمير يُحذف عادةً لأن اللاحقة تدلّ عليه: «öğrenciyim» تكفي. تُذكر «ben» للتوكيد أو المقابلة.',
      '⚠️ جێناوەکە زۆرجار دەخرێت چونکە پاشگرەکە ئاماژەی پێدەکات.',
    ),
  },
  {
    ...w('sen', 'SEN', 'أنتَ / أنتِ', 'تۆ',
      ['Sen nerede oturuyorsun?', 'SEN ne-re-DE o-tu-ru-yor-SUN', 'أين تسكن أنت؟', 'تۆ لە کوێ دەژیت؟']),
    collocations: ['sana', 'seni', 'senin', 'sende', 'senden'],
    note: b(
      'التركية لا تفرّق بين المذكّر والمؤنّث في الضمائر إطلاقاً — «sen» للاثنين.',
      'تورکی لە جێناودا نێر و مێ جیا ناکاتەوە.',
    ),
  },
  {
    ...w('o', 'O', 'هو / هي؛ ذلك', 'ئەو',
      ['O benim öğretmenim.', 'O be-NİM öğ-ret-me-NİM', 'هو معلّمي.', 'ئەو مامۆستاکەمە.']),
    senses: [
      sense('ذلك، تلك (اسم إشارة للبعيد)', 'ئەو (ئاماژە بۆ دوور)',
        ['O kitabı ver.', 'O ki-ta-BI ver', 'أعطني ذلك الكتاب.', 'ئەو کتێبەم بدەرێ.']),
    ],
    collocations: ['ona', 'onu', 'onun', 'onda', 'ondan'],
    note: b(
      '⚠️ نفس الكلمة للمذكّر والمؤنّث وغير العاقل — «هو» و«هي» و«هذا» كلها «o».',
      '⚠️ هەمان وشە بۆ نێر و مێ و ناژیاندار.',
    ),
  },
  {
    ...w('biz', 'BİZ', 'نحن', 'ئێمە',
      ['Biz Türkçe öğreniyoruz.', 'BİZ türk-ÇE öğ-re-ni-yo-RUZ', 'نحن نتعلّم التركية.', 'ئێمە تورکی فێردەبین.']),
    collocations: ['bize', 'bizi', 'bizim', 'bizde', 'bizden'],
  },
  {
    ...w('siz', 'SİZ', 'أنتم؛ حضرتك (تأدّباً)', 'ئێوە',
      ['Siz nereden geliyorsunuz?', 'SİZ ne-re-DEN ge-li-yor-su-NUZ', 'من أين تأتون؟', 'ئێوە لە کوێوە دێن؟']),
    collocations: ['size', 'sizi', 'sizin', 'sizde', 'sizden'],
    note: b(
      'مهمّ اجتماعياً: «siz» تُستعمل لشخص واحد أيضاً كصيغة احترام — مع غريب أو أكبر سنّاً أو في العمل.',
      'گرنگە: «siz» بۆ یەک کەسیش وەک ڕێزلێنان بەکاردێت.',
    ),
  },
  {
    ...w('onlar', 'on-LAR', 'هم، هنّ', 'ئەوان',
      ['Onlar bizi bekliyor.', 'on-LAR bi-Zİ bek-li-YOR', 'هم ينتظروننا.', 'ئەوان چاوەڕێمان دەکەن.']),
    collocations: ['onlara', 'onları', 'onların'],
  },
  {
    ...w('kendi', 'ken-Dİ', 'نفسه، ذاته', 'خۆ',
      ['Kendi odamı temizledim.', 'ken-Dİ o-da-MI te-miz-le-DİM', 'نظّفت غرفتي بنفسي.', 'ژووری خۆمم پاک کردەوە.']),
    collocations: ['kendim', 'kendine', 'kendi kendine', 'kendini'],
    note: b(
      'تُصرّف مع الشخص: kendim, kendin, kendisi, kendimiz. تفيد التوكيد والملكية معاً.',
      'لەگەڵ کەسدا دەگۆڕدرێت: kendim, kendin, kendisi.',
    ),
  },
  {
    ...w('birbiri', 'bir-bi-Rİ', 'بعضهم بعضاً', 'یەکتر',
      ['Birbirimize yardım ediyoruz.', 'bir-bi-ri-mi-ZE yar-DIM e-di-yo-RUZ', 'نساعد بعضنا بعضاً.', 'یارمەتی یەکتر دەدەین.']),
    collocations: ['birbirine', 'birbirimizi', 'birbiriyle'],
  },
]);

/* ---------------- demonstratives ---------------- */

const DEIXIS: VocabItem[] = pack('function', 'a1', 'pronoun', [
  {
    ...w('bu', 'BU', 'هذا، هذه (قريب)', 'ئەم',
      ['Bu çanta senin mi?', 'BU çan-TA se-NİN mi', 'هل هذه الحقيبة لك؟', 'ئەم جانتایە هی تۆیە؟']),
    collocations: ['bunu', 'buna', 'bunun', 'bunlar'],
    note: b(
      'التركية ثلاث درجات للإشارة: bu (قريب) · şu (متوسّط، أو ما أشير إليه الآن) · o (بعيد). العربية درجتان فقط.',
      'تورکی سێ پلەی ئاماژە هەیە: bu · şu · o.',
    ),
  },
  {
    ...w('şu', 'ŞU', 'ذاك (متوسّط، أو ما أشير إليه)', 'ئەو (ئاماژەکراو)',
      ['Şunu tutar mısın?', 'şu-NU tu-TAR mı-SIN', 'هل تمسك ذاك؟', 'ئەوە دەگریت؟']),
    collocations: ['şunu', 'şuna', 'şunlar'],
    related: ['bu', 'o'],
  },
]);

/* ---------------- question words ---------------- */

const QUESTIONS: VocabItem[] = pack('function', 'a1', 'pronoun', [
  {
    ...w('kim', 'KİM', 'مَن', 'کێ',
      ['Bu çantayı kim getirdi?', 'BU çan-ta-YI KİM ge-tir-Dİ', 'من أحضر هذه الحقيبة؟', 'ئەم جانتایەی کێ هێنا؟']),
    collocations: ['kime', 'kimi', 'kimin', 'kiminle'],
    note: b(
      '⚠️ أدوات السؤال التركية تأخذ نبر المقطع الأول، وتقع حيث تقع الكلمة التي تسأل عنها — لا في أول الجملة إجبارياً.',
      '⚠️ ئامرازی پرسیار لە شوێنی ئەو وشەیەدا دێت کە پرسیاری لێدەکرێت.',
    ),
  },
  {
    ...w('ne', 'NE', 'ماذا، ما', 'چی',
      ['Ne istiyorsun?', 'NE is-ti-yor-SUN', 'ماذا تريد؟', 'چیت دەوێت؟']),
    collocations: ['neyi', 'neye', 'ne kadar', 'ne zaman'],
  },
  {
    ...w('nerede', 'NE-re-de', 'أين', 'لە کوێ',
      ['Nerede oturuyorsun?', 'NE-re-de o-tu-ru-yor-SUN', 'أين تسكن؟', 'لە کوێ دەژیت؟']),
    collocations: ['nereye', 'nereden', 'neresi'],
    note: b(
      'ثلاث صيغ حسب الاتّجاه: nerede (أين) · nereye (إلى أين) · nereden (من أين).',
      'سێ شێوە بەپێی ئاراستە: nerede · nereye · nereden.',
    ),
  },
  {
    ...w('ne zaman', 'NE za-man', 'متى', 'کەی',
      ['Ne zaman başlıyor?', 'NE za-man baş-lı-YOR', 'متى يبدأ؟', 'کەی دەست پێدەکات؟']),
  },
  {
    ...w('neden', 'NE-den', 'لماذا', 'بۆچی',
      ['Neden gelmedin?', 'NE-den gel-me-DİN', 'لماذا لم تأتِ؟', 'بۆچی نەهاتیت؟']),
    related: ['niçin'],
    note: b(
      '«neden» و«niçin» و«niye» ثلاثتها «لماذا». «neden» أشيعها في الكتابة و«niye» في الكلام.',
      '«neden»، «niçin» و «niye» هەرسێکیان «بۆچی»ن.',
    ),
  },
  {
    ...w('niçin', 'Nİ-çin', 'لماذا (أكثر رسمية)', 'بۆچی',
      ['Niçin böyle düşünüyorsun?', 'Nİ-çin böy-LE dü-şü-nü-yor-SUN', 'لماذا تفكّر هكذا؟', 'بۆچی وا بیر دەکەیتەوە؟']),
    related: ['neden'],
  },
  {
    ...w('hangi', 'HAN-gi', 'أيّ', 'کام',
      ['Hangi otobüse bineceğiz?', 'HAN-gi o-to-bü-SE bi-ne-ce-ĞİZ', 'أي حافلة سنركب؟', 'سواری کام پاس دەبین؟']),
    collocations: ['hangisi', 'hangi gün'],
  },
  {
    ...w('kaç', 'KAÇ', 'كم (عدداً)', 'چەند',
      ['Kaç kardeşin var?', 'KAÇ kar-de-ŞİN var', 'كم أخاً لديك؟', 'چەند برات هەیە؟']),
    collocations: ['kaç tane', 'kaç para', 'kaçta'],
    note: b(
      '⚠️ الاسم بعد «kaç» يبقى مفرداً: «kaç kitap» لا «kaç kitaplar».',
      '⚠️ ناوی دوای «kaç» تاک دەمێنێتەوە.',
    ),
  },
  {
    ...w('nasıl', 'NA-sıl', 'كيف', 'چۆن',
      ['Havalimanına nasıl giderim?', 'ha-va-li-ma-nı-NA NA-sıl gi-de-RİM', 'كيف أذهب إلى المطار؟', 'چۆن بچمە فڕۆکەخانە؟']),
    collocations: ['nasılsın', 'nasıl olur'],
  },
]);

/* ---------------- negation ---------------- */

const NEGATION: VocabItem[] = pack('function', 'a1', 'adverb', [
    {
      ...w('değil', 'DE-ğil', 'ليس', 'نییە',
        ['Bu doğru değil.', 'BU doğ-RU de-ĞİL', 'هذا ليس صحيحاً.', 'ئەمە ڕاست نییە.']),
      collocations: ['değil mi', 'öyle değil', 'o kadar da değil'],
      note: b(
        '⚠️ القاعدة الأهمّ في النفي التركي: «değil» تنفي الاسم والصفة فقط. الفعل يُنفى بلاحقة -me/-ma داخله: «gelmedi» لا «geldi değil».',
        '⚠️ «değil» تەنیا ناو و ئاوەڵناو ڕەت دەکاتەوە؛ کردار بە پاشگری -me/-ma ڕەت دەکرێتەوە.',
      ),
    },
    {
      ...w('hiç', 'HİÇ', 'أبداً، إطلاقاً', 'هەرگیز',
        ['Hiç sigara içmedim.', 'HİÇ si-ga-RA iç-me-DİM', 'لم أدخّن أبداً.', 'هەرگیز جگەرەم نەکێشاوە.']),
    senses: [
      sense('نهائياً، على الإطلاق (مع سؤال: من قبل)', 'هەرگیز، جارێک',
            ['Hiç İstanbul’a gittin mi?', 'HİÇ is-tan-bu-LA git-TİN mi', 'هل ذهبت إلى إسطنبول من قبل؟', 'هەرگیز چوویتە ئەستەنبوڵ؟']),
    ],
      note: b(
        'يلزمها فعل منفيّ — تماماً كما تقول العربية «لم … أبداً». نقطة يسهل على العربي فهمها ويصعب على غيره.',
        'کرداری نەرێنی دەوێت — وەک عەرەبی.',
      ),
    },
]);

/* ---------------- postpositions ---------------- */

const POSTPOSITIONS: VocabItem[] = pack('function', 'a1', 'preposition', [
  {
    ...w('için', 'i-ÇİN', 'من أجل، لـ', 'بۆ',
      ['Senin için aldım.', 'se-NİN i-ÇİN al-DIM', 'اشتريته من أجلك.', 'بۆ تۆم کڕی.']),
    collocations: ['bunun için', 'ne için', 'onun için'],
    note: b(
      '⚠️ تأتي بعد الاسم لا قبله، وهذا عكس العربية تماماً: «senin için» = «من أجلك».',
      '⚠️ دوای ناو دێت نەک پێشی — پێچەوانەی عەرەبی.',
    ),
  },
  {
    ...w('gibi', 'Gİ-bi', 'مثل، كـ', 'وەک',
      ['Babası gibi konuşuyor.', 'ba-ba-SI Gİ-bi ko-nu-şu-YOR', 'يتكلّم مثل أبيه.', 'وەک باوکی قسە دەکات.']),
    collocations: ['bunun gibi', 'senin gibi', 'gibi görünmek'],
  },
  {
    ...w('kadar', 'ka-DAR', 'حتى؛ بقدر، مثل', 'تا؛ بەقەد',
      ['Akşama kadar çalıştım.', 'ak-şa-MA ka-DAR ça-lış-TIM', 'عملت حتى المساء.', 'تا ئێوارە کارم کرد.']),
    senses: [
      sense('بقدر، مساوٍ لـ', 'بەقەد، هێندەی',
        ['Senin kadar hızlı koşamam.', 'se-NİN ka-DAR hız-LI ko-şa-MAM', 'لا أستطيع الجري بسرعتك.', 'ناتوانم بەقەد تۆ خێرا ڕابکەم.']),
    ],
    collocations: ['ne kadar', 'o kadar', 'bu kadar', 'şimdiye kadar'],
  },
  {
    ...w('ile', 'i-LE', 'مع؛ بـ (أداة)', 'لەگەڵ؛ بە',
      ['Arkadaşımla geldim.', 'ar-ka-da-şım-LA gel-DİM', 'جئت مع صديقي.', 'لەگەڵ هاوڕێکەم هاتم.']),
    senses: [
      sense('بواسطة، بأداة', 'بە هۆی',
        ['Kalemle yazdım.', 'ka-lem-LE yaz-DIM', 'كتبت بالقلم.', 'بە پێنووس نووسیم.']),
    ],
    note: b(
      'تلتصق عادةً كلاحقة -le/-la: «arkadaşımla». الصيغة المنفصلة «ile» أكثر رسمية.',
      'زۆرجار وەک پاشگری -le/-la دەلکێت.',
    ),
  },
]);

/* ---------------- conjunctions ---------------- */

const CONJUNCTIONS: VocabItem[] = pack('function', 'a1', 'conjunction', [
  {
    ...w('ama', 'A-ma', 'لكن', 'بەڵام',
      ['Geldi ama seni bulamadı.', 'gel-Dİ A-ma se-Nİ bu-la-ma-DI', 'جاء لكنه لم يجدك.', 'هات بەڵام نەیدۆزیتەوە.']),
    related: ['fakat', 'ancak'],
    note: b(
      'ثلاثتها «لكن»: «ama» في الكلام، «fakat» أعلى قليلاً، «ancak» رسمية ومكتوبة.',
      'هەرسێکیان «بەڵام»ن، بەڵام بە پلەی جیاواز.',
    ),
  },
  {
    ...w('ancak', 'an-CAK', 'لكن (رسمية)؛ فقط، لا أكثر', 'بەڵام؛ تەنها',
      ['Katılıyorum, ancak bir şartla.', 'ka-tı-lı-yo-RUM an-CAK bir şart-LA', 'أوافق، لكن بشرط.', 'ڕازیم، بەڵام بە مەرجێک.']),
    related: ['ama'],
  },
  {
    ...w('çünkü', 'ÇÜN-kü', 'لأنّ', 'چونکە',
      ['Gelmedim çünkü hastaydım.', 'gel-me-DİM ÇÜN-kü has-tay-DIM', 'لم آتِ لأنني كنت مريضاً.', 'نەهاتم چونکە نەخۆش بووم.']),
    note: b(
      '⚠️ «çünkü» تأتي بعد النتيجة وقبل السبب، كالعربية. لكن التركية تفضّل غالباً لاحقة -dığı için في الكتابة.',
      '⚠️ «çünkü» دوای ئەنجام و پێش هۆکار دێت.',
    ),
  },
  {
    ...w('veya', 've-YA', 'أو', 'یان',
      ['Çay veya kahve içer misiniz?', 'ÇAY ve-YA kah-VE i-ÇER mi-si-NİZ', 'أتشرب شاياً أم قهوة؟', 'چای یان قاوە دەخۆیتەوە؟']),
    related: ['ya da'],
  },
  {
    ...w('ya da', 'ya DA', 'أو', 'یان',
      ['Bugün ya da yarın gelirim.', 'bu-GÜN ya DA ya-RIN ge-li-RİM', 'سآتي اليوم أو غداً.', 'ئەمڕۆ یان سبەینێ دێم.']),
    related: ['veya'],
    note: b(
      'مرادفة لـ «veya» تماماً؛ «ya da» أشيع في الكلام.',
      'هاوواتای «veya»یە؛ «ya da» لە قسەدا باوترە.',
    ),
  },
  {
    ...w('hem de', 'HEM de', 'وأيضاً، بل حتى', 'هەروەها',
      ['Çalışıyor, hem de çok iyi.', 'ça-lı-şı-YOR HEM de ÇOK i-Yİ', 'يعمل، بل ويعمل جيداً جداً.', 'کار دەکات، هەروەها زۆر باشیش.']),
    collocations: ['hem … hem de'],
    note: b(
      'التركيب المزدوج «hem … hem de …» = «كلاهما… و…»: «hem ucuz hem de güzel».',
      'پێکهاتەی دووانی «hem … hem de …» = «هەردووکیان».',
    ),
  },
]);

/* ---------------- quantifiers ---------------- */

const QUANTIFIERS: VocabItem[] = [
  ...pack('function', 'a1', 'pronoun', [
    {
      ...w('herkes', 'her-KES', 'الجميع، كلّ واحد', 'هەموو کەس',
        ['Herkes geldi mi?', 'her-KES gel-Dİ mi', 'هل جاء الجميع؟', 'هەموو کەس هات؟']),
      collocations: ['herkese', 'herkesi', 'herkesin'],
      note: b(
        '⚠️ الفعل بعدها مفرد: «herkes geldi» لا «herkes geldiler».',
        '⚠️ کرداری دوای ئەم وشەیە تاکە.',
      ),
    },
    {
      ...w('hiç kimse', 'HİÇ kim-SE', 'لا أحد', 'کەس',
        ['Sınıfta hiç kimse yok.', 'sı-nıf-TA HİÇ kim-SE yok', 'لا أحد في الصفّ.', 'کەس لە پۆلەکەدا نییە.']),
      note: b(
        'يلزمها فعل منفيّ: «hiç kimse gelmedi». نفس منطق العربية.',
        'کرداری نەرێنی دەوێت: «hiç kimse gelmedi».',
      ),
    },
    {
      ...w('hepsi', 'HEP-si', 'كلّهم، كلّه', 'هەموویان',
        ['Hepsi ne kadar tuttu?', 'HEP-si NE ka-DAR tut-TU', 'كم صار المجموع؟', 'هەموویان چەند بوو؟']),
      related: ['hepimiz'],
    },
  ]),
  ...pack('function', 'a1', 'adjective', [
    {
      ...w('her', 'HER', 'كلّ (مع مفرد)', 'هەموو',
        ['Her gün Türkçe çalışıyorum.', 'HER GÜN türk-ÇE ça-lı-şı-yo-RUM', 'أدرس التركية كل يوم.', 'هەموو ڕۆژێک تورکی دەخوێنم.']),
      collocations: ['her zaman', 'her şey', 'her yerde', 'her biri'],
      note: b(
        '⚠️ الاسم بعد «her» مفرد دائماً: «her gün» لا «her günler».',
        '⚠️ ناوی دوای «her» هەمیشە تاکە.',
      ),
    },
    {
      ...w('hiçbir', 'hiç-BİR', 'ولا أيّ', 'هیچ',
        ['Hiçbir sorun yok.', 'hiç-BİR so-RUN yok', 'لا توجد أي مشكلة.', 'هیچ کێشەیەک نییە.']),
      collocations: ['hiçbir şey', 'hiçbir zaman', 'hiçbir yerde'],
    },
    {
      ...w('bazı', 'ba-ZI', 'بعض', 'هەندێک',
        ['Bazı öğrenciler geç kaldı.', 'ba-ZI öğ-ren-ci-LER GEÇ kal-DI', 'تأخّر بعض الطلاب.', 'هەندێک قوتابی دواکەوتن.']),
      note: b(
        '⚠️ عكس «her»: الاسم بعد «bazı» يأتي جمعاً — «bazı öğrenciler».',
        '⚠️ پێچەوانەی «her»: ناوی دوای «bazı» کۆیە.',
      ),
    },
    {
      ...w('birkaç', 'bir-KAÇ', 'بضعة، عدّة', 'چەند',
        ['Birkaç gün sonra dönerim.', 'bir-KAÇ GÜN son-RA dö-ne-RİM', 'أعود بعد بضعة أيام.', 'دوای چەند ڕۆژێک دەگەڕێمەوە.']),
      note: b(
        'الاسم بعدها مفرد: «birkaç gün» لا «birkaç günler».',
        'ناوی دوای ئەمە تاکە.',
      ),
    },
    {
      ...w('birçok', 'bir-ÇOK', 'كثير من', 'زۆرێک لە',
        ['Birçok insan bunu bilmiyor.', 'bir-ÇOK in-SAN bu-NU bil-mi-YOR', 'كثير من الناس لا يعرف هذا.', 'زۆرێک لە خەڵک ئەمە نازانن.']),
    },
    {
      ...w('bütün', 'bü-TÜN', 'كلّ، كامل', 'هەموو',
        ['Bütün gün çalıştım.', 'bü-TÜN GÜN ça-lış-TIM', 'عملت طوال اليوم.', 'هەموو ڕۆژەکە کارم کرد.']),
      related: ['tüm'],
    },
    {
      ...w('tüm', 'TÜM', 'كلّ، جميع (أرسم)', 'هەموو',
        ['Tüm belgeleri getirdim.', 'TÜM bel-ge-le-Rİ ge-tir-DİM', 'أحضرت جميع الوثائق.', 'هەموو بەڵگەنامەکانم هێنا.']),
      related: ['bütün'],
      note: b(
        '«tüm» و«bütün» مترادفتان عملياً؛ «tüm» أميل للكتابة الرسمية.',
        '«tüm» و «bütün» هاوواتان؛ «tüm» فەرمیترە.',
      ),
    },
  ]),
];

/* ---------------- adverbs of degree, time and stance ---------------- */

const ADVERBS: VocabItem[] = pack('function', 'a1', 'adverb', [
  {
    ...w('daha', 'DA-ha', 'أكثر؛ بعدُ؛ آخر', 'زیاتر؛ هێشتا',
      ['Bir salatalık daha ver.', 'BİR sa-la-ta-LIK DA-ha ver', 'أعطني خيارة أخرى.', 'خیارێکی تر بدەرێ.']),
    senses: [
      sense('أداة التفضيل: أكثر', 'ئامرازی بەراورد: زیاتر',
        ['Bu yol daha kısa.', 'BU YOL DA-ha kı-SA', 'هذا الطريق أقصر.', 'ئەم ڕێگایە کورتترە.']),
    ],
    collocations: ['daha çok', 'daha iyi', 'bir daha', 'daha önce'],
  },
  {
    ...w('hep', 'HEP', 'دائماً', 'هەمیشە',
      ['Anahtarımı hep arıyorum.', 'a-nah-ta-rı-MI HEP a-rı-yo-RUM', 'أبحث عن مفتاحي دائماً.', 'هەمیشە بەدوای کلیلەکەمدا دەگەڕێم.']),
    collocations: ['hep birlikte', 'hep beraber'],
  },
  {
    ...w('hâlâ', 'HÂ-lâ', 'ما زال، لا يزال', 'هێشتا',
      ['Hâlâ bekliyoruz.', 'HÂ-lâ bek-li-yo-RUZ', 'ما زلنا ننتظر.', 'هێشتا چاوەڕێ دەکەین.']),
    note: b(
      '⚠️ لا تخلطها بـ «hala» = العمّة. الفرق في المدّة (â) وفي النبر، والمعنى يتغيّر تماماً.',
      '⚠️ تێکەڵی «hala» = پوور مەکە.',
    ),
  },
  {
    ...w('henüz', 'he-NÜZ', 'بعدُ، حتى الآن', 'هێشتا',
      ['Henüz karar vermedim.', 'he-NÜZ ka-RAR ver-me-DİM', 'لم أقرّر بعد.', 'هێشتا بڕیارم نەداوە.']),
    note: b(
      'تُستعمل غالباً مع النفي: «henüz gelmedi» = لم يأتِ بعد.',
      'زۆرجار لەگەڵ نەرێنی بەکاردێت.',
    ),
  },
  {
    ...w('artık', 'ar-TIK', 'لم يعد؛ من الآن فصاعداً', 'چیتر',
      ['Bu model artık moda değil.', 'BU mo-DEL ar-TIK mo-DA de-ĞİL', 'هذا الطراز لم يعد موضة.', 'ئەم مۆدێلە چیتر مۆدە نییە.']),
    note: b(
      'مع النفي = «لم يعد»؛ مع الإثبات = «صار الآن»: «Artık anlıyorum» = صرت أفهم الآن.',
      'لەگەڵ نەرێنی = «چیتر نا»؛ لەگەڵ ئەرێنی = «ئێستا».',
    ),
  },
  {
    ...w('sadece', 'sa-DE-ce', 'فقط', 'تەنها',
      ['Sadece iki kişi geldi.', 'sa-DE-ce i-Kİ ki-Şİ gel-Dİ', 'جاء شخصان فقط.', 'تەنها دوو کەس هاتن.']),
    related: ['yalnızca'],
  },
  {
    ...w('bile', 'bi-LE', 'حتى', 'تەنانەت',
      ['Adını bile bilmiyorum.', 'a-dı-NI bi-LE bil-mi-yo-RUM', 'لا أعرف حتى اسمه.', 'تەنانەت ناویشی نازانم.']),
    note: b(
      '⚠️ تأتي بعد الكلمة التي تؤكّدها، لا قبلها: «adını bile» = «حتى اسمه».',
      '⚠️ دوای ئەو وشەیە دێت کە جەختی لێدەکات.',
    ),
  },
  {
    ...w('belki', 'BEL-ki', 'ربّما', 'لەوانەیە',
      ['Belki bu akşam uğrarım.', 'BEL-ki BU ak-ŞAM uğ-ra-RIM', 'ربّما أمرّ هذا المساء.', 'لەوانەیە ئەم ئێوارەیە سەردانت بکەم.']),
    related: ['herhalde'],
  },
  {
    ...w('herhalde', 'her-HAL-de', 'على الأرجح، غالباً', 'بەگومان',
      ['Herhalde yolda kaldı.', 'her-HAL-de yol-DA kal-DI', 'على الأرجح عَلِق في الطريق.', 'بەگومان لە ڕێگا مایەوە.']),
    note: b(
      'أقوى من «belki»: «belki» احتمال، و«herhalde» ترجيح.',
      'بەهێزترە لە «belki»: گریمانەیەکی بەهێزترە.',
    ),
  },
  {
    ...w('mutlaka', 'mut-la-KA', 'حتماً، بالتأكيد', 'حەتمەن',
      ['Mutlaka haber ver.', 'mut-la-KA ha-BER ver', 'أخبرني حتماً.', 'حەتمەن ئاگادارم بکەوە.']),
  },
  {
    ...w('gerçekten', 'ger-çek-TEN', 'حقّاً، فعلاً', 'بەڕاستی',
      ['Gerçekten çok yoruldum.', 'ger-çek-TEN ÇOK yo-rul-DUM', 'تعبت حقاً كثيراً.', 'بەڕاستی زۆر ماندوو بووم.']),
    related: ['gerçek'],
  },
  {
    ...w('hemen', 'HE-men', 'فوراً، حالاً', 'دەستبەجێ',
      ['Hemen geliyorum.', 'HE-men ge-li-yo-RUM', 'آتي حالاً.', 'دەستبەجێ دێم.']),
    collocations: ['hemen şimdi', 'hemen hemen'],
    note: b(
      '«hemen hemen» معناها مختلف تماماً: «تقريباً».',
      '«hemen hemen» واتای «نزیکەی»ە.',
    ),
  },
  {
    ...w('birden', 'bir-DEN', 'فجأةً', 'لەناکاو',
      ['Birden yağmur başladı.', 'bir-DEN yağ-MUR baş-la-DI', 'بدأ المطر فجأة.', 'لەناکاو باران دەستی پێکرد.']),
    related: ['birdenbire'],
  },
  {
    ...w('keşke', 'KEŞ-ke', 'ليت', 'خۆزگە',
      ['Keşke daha erken başlasaydım.', 'KEŞ-ke da-HA er-KEN baş-la-say-DIM', 'ليتني بدأت مبكراً.', 'خۆزگە زووتر دەستم پێدەکرد.']),
    note: b(
      'يلزمها الشرط الماضي للندم: «keşke gelseydin» = ليتك أتيت.',
      'مەرجی ڕابردووی دەوێت بۆ پەشیمانی.',
    ),
  },
]);

/* ---------------- counting occasions ---------------- */

const TIMES: VocabItem[] = pack('function', 'a1', 'noun', [
  {
    ...w('kez', 'KEZ', 'مرّة', 'جار',
      ['Bu filmi iki kez izledim.', 'BU fil-Mİ i-Kİ KEZ iz-le-DİM', 'شاهدت هذا الفيلم مرّتين.', 'ئەم فیلمەم دوو جار بینیوە.']),
    related: ['defa', 'sefer'],
  },
  {
    ...w('defa', 'de-FA', 'مرّة', 'جار',
      ['Kaç defa söyledim!', 'KAÇ de-FA söy-le-DİM', 'كم مرّة قلت!', 'چەند جار وتم!']),
    related: ['kez', 'sefer'],
    note: b(
      'ثلاث كلمات لـ«مرّة»: «kez» محايدة، «defa» و«sefer» أشيع في الكلام. «defa» عربية الأصل.',
      'سێ وشە بۆ «جار»: kez، defa، sefer.',
    ),
  },
  {
    ...w('sefer', 'se-FER', 'مرّة؛ رحلة', 'جار؛ گەشت',
      ['Bu sefer başaracağız.', 'BU se-FER ba-şa-ra-ca-ĞIZ', 'هذه المرّة سننجح.', 'ئەم جارە سەردەکەوین.']),
    related: ['kez', 'defa'],
  },
]);

export const A1_VOCABULARY_FUNCTION: VocabItem[] = [
  ...PRONOUNS,
  ...DEIXIS,
  ...QUESTIONS,
  ...NEGATION,
  ...POSTPOSITIONS,
  ...CONJUNCTIONS,
  ...QUANTIFIERS,
  ...ADVERBS,
  ...TIMES,
];
