import type { LetterEntry } from '@/types/content';
import { b, p } from '../shared/helpers';

/**
 * The Turkish alphabet - 29 letters, Latin script, adopted in 1928.
 *
 * Q, W and X do not exist. Seven letters do not exist in English:
 * C-cedilla, soft G, dotless I, dotted I, O-umlaut, S-cedilla, U-umlaut.
 *
 * Every `note` is written for Arabic and Kurdish speakers specifically -
 * it names the equivalent Arabic or Sorani letter wherever one exists,
 * because that is the fastest route to a correct Turkish sound.
 */
export const ALPHABET: LetterEntry[] = [
  {
    id: 'a',
    upper: 'A', lower: 'a', name: 'a', namePron: 'a', ipa: '/a/',
    sound: 'Open "a" as in "father", short and clean.',
    kind: 'vowel',
    vowel: { front: false, rounded: false, close: false },
    note: b(
      'صوت الألف المفتوحة، مثل "ا" في كلمة "باب" لكنه أقصر قليلاً. لا يُمال أبداً نحو الكسرة.',
      'دەنگی "ا"ی کراوە، وەک "ا" لە وشەی "باب"، بەڵام کەمێک کورتترە. هەرگیز بەرەو "ێ" لانادات.',
    ),
    example: p('araba', 'a-ra-BA', 'سيارة', 'ئۆتۆمبێل'),
    example2: p('anne', 'an-NE', 'أم', 'دایک'),
  },
  {
    id: 'b',
    upper: 'B', lower: 'b', name: 'be', namePron: 'be', ipa: '/b/',
    sound: 'Same as English b.',
    kind: 'consonant',
    note: b(
      'مطابق تماماً لحرف "ب" في العربية.', 'تەواو وەک پیتی "ب" لە کوردیدا.',
    ),
    example: p('baba', 'ba-BA', 'أب', 'باوک'),
    example2: p('bal', 'BAL', 'عسل', 'هەنگوین'),
  },
  {
    id: 'c',
    upper: 'C', lower: 'c', name: 'ce', namePron: 'dje', ipa: '/d͡ʒ/',
    sound: 'Like the j in "jam" - never like English c.',
    kind: 'consonant', special: true,
    note: b(
      'انتبه: حرف C التركي يُنطق "ج" وليس "س" أو "ك". هو نفس صوت "ج" في الفصحى.',
      'ئاگاداربە: پیتی C ی تورکی وەک "ج" دەخوێنرێتەوە، نەک "س" یان "ک". هەمان دەنگی "ج"ی کوردییە.',
    ),
    example: p('cam', 'DJAM', 'زجاج', 'شووشە'),
    example2: p('ceviz', 'dje-VİZ', 'جوز', 'گوێز'),
  },
  {
    id: 'cc',
    upper: 'Ç', lower: 'ç', name: 'çe', namePron: 'tche', ipa: '/t͡ʃ/',
    sound: 'Like ch in "chair".',
    kind: 'consonant', special: true,
    note: b(
      'هذا الصوت غير موجود في الفصحى، لكنه موجود في الفارسية والكردية بحرف "چ". انطقه كـ"تش" في كلمة واحدة سريعة.',
      'ئەم دەنگە بە تەواوی وەک پیتی "چ"ی کوردییە. هیچ گۆڕانکارییەکی تێدا نییە - ئێوە ئەم دەنگەتان هەیە.',
    ),
    example: p('çay', 'ÇAY', 'شاي', 'چا'),
    example2: p('çocuk', 'ço-DJUK', 'طفل', 'منداڵ'),
  },
  {
    id: 'd',
    upper: 'D', lower: 'd', name: 'de', namePron: 'de', ipa: '/d/',
    sound: 'Same as English d.',
    kind: 'consonant',
    note: b('مطابق لحرف "د" في العربية.', 'وەک پیتی "د" لە کوردیدا.'),
    example: p('deniz', 'de-NİZ', 'بحر', 'دەریا'),
    example2: p('dört', 'DÖRT', 'أربعة', 'چوار'),
  },
  {
    id: 'e',
    upper: 'E', lower: 'e', name: 'e', namePron: 'e', ipa: '/e/',
    sound: 'Like e in "bed".',
    kind: 'vowel',
    vowel: { front: true, rounded: false, close: false },
    note: b(
      'صوت بين الفتحة والكسرة، مثل "e" في كلمة "بيت" بالعامية. أقرب ما يكون إلى الفتحة المُمالة.',
      'تەواو وەک پیتی "ە" لە کوردیدا. هیچ جیاوازییەک نییە.',
    ),
    example: p('ev', 'EV', 'بيت', 'ماڵ'),
    example2: p('elma', 'el-MA', 'تفاحة', 'سێو'),
  },
  {
    id: 'f',
    upper: 'F', lower: 'f', name: 'fe', namePron: 'fe', ipa: '/f/',
    sound: 'Same as English f.',
    kind: 'consonant',
    note: b('مطابق لحرف "ف".', 'وەک پیتی "ف".'),
    example: p('fil', 'FİL', 'فيل', 'فیل'),
    example2: p('fındık', 'fın-DIK', 'بندق', 'فندق'),
  },
  {
    id: 'g',
    upper: 'G', lower: 'g', name: 'ge', namePron: 'ge', ipa: '/g/',
    sound: 'Hard g as in "go", never as in "gem".',
    kind: 'consonant',
    note: b(
      'صوت "الجيم المصرية" أو "گ" الفارسية. لا يُنطق "ج" أبداً حتى قبل الكسرة.',
      'تەواو وەک پیتی "گ" لە کوردیدا. هەمیشە قورسە، هەرگیز نابێتە "ج".',
    ),
    example: p('gül', 'GÜL', 'وردة', 'گوڵ'),
    example2: p('göz', 'GÖZ', 'عين', 'چاو'),
  },
  {
    id: 'gg',
    upper: 'Ğ', lower: 'ğ', name: 'yumuşak ge', namePron: 'yu-mu-ŞAK ge', ipa: '/ː/ (soundless)',
    sound: 'The "soft g" - it has no sound of its own; it lengthens the vowel before it.',
    kind: 'consonant', special: true,
    note: b(
      'أهمّ قاعدة: حرف Ğ لا يُنطق! وظيفته إطالة الحركة التي قبله. فكلمة dağ تُقرأ "دا" بألف ممدودة. ولا تبدأ به أي كلمة تركية أبداً.',
      'گرنگترین ڕێسا: پیتی Ğ دەنگی خۆی نییە! کارەکەی درێژکردنەوەی ئەو بزوێنەیە کە پێشیەتی. وشەی dağ دەبێتە "دا"ی درێژ. هەرگیز هیچ وشەیەکی تورکی پێی دەست پێناکات.',
    ),
    example: p('dağ', 'DAA', 'جبل', 'چیا'),
    example2: p('ağaç', 'a-AÇ', 'شجرة', 'دار'),
  },
  {
    id: 'h',
    upper: 'H', lower: 'h', name: 'he', namePron: 'he', ipa: '/h/',
    sound: 'Always pronounced, never silent.',
    kind: 'consonant',
    note: b(
      'مطابق لحرف "هـ". انتبه: يُنطق دائماً ولا يسقط أبداً، حتى في وسط الكلمة وآخرها.',
      'وەک پیتی "ھ". ئاگاداربە: هەمیشە دەخوێنرێتەوە و هەرگیز ناکەوێت، تەنانەت لە ناوەڕاست و کۆتایی وشەشدا.',
    ),
    example: p('hava', 'ha-VA', 'هواء، طقس', 'هەوا'),
    example2: p('hasta', 'has-TA', 'مريض', 'نەخۆش'),
  },
  {
    id: 'i-dotless',
    upper: 'I', lower: 'ı', name: 'ı', namePron: 'ı', ipa: '/ɯ/',
    sound: 'Close back unrounded vowel. No English equivalent - the "dotless i".',
    kind: 'vowel', special: true,
    vowel: { front: false, rounded: false, close: true },
    note: b(
      'حرف صعب على العرب: صوت بين الكسرة والضمة، يُنطق من مؤخرة الفم والشفتان مفرودتان لا مستديرتان. جرّب أن تقول "كسرة" مع سحب لسانك إلى الخلف. لاحظ أن الكبير I والصغير ı كلاهما بلا نقطة.',
      'ئاسانە بۆ کوردەکان: تەواو وەک "ی"ی کورت (بزرۆکە) لە وشەی "دڵ" یان "گرتن". لێوەکان پان دەبن نەک خڕ. سەرنج بدە کە هەردوو I ی گەورە و ı ی بچووک بێ خاڵن.',
    ),
    example: p('ışık', 'ı-ŞIK', 'ضوء', 'ڕووناکی'),
    example2: p('ırmak', 'ır-MAK', 'نهر', 'ڕووبار'),
  },
  {
    id: 'i-dotted',
    upper: 'İ', lower: 'i', name: 'i', namePron: 'i', ipa: '/i/',
    sound: 'Like ee in "see", but short.',
    kind: 'vowel', special: true,
    vowel: { front: true, rounded: false, close: true },
    note: b(
      'صوت الكسرة الممدودة القصيرة، مثل "ي" في "بيت". القاعدة المهمة: الحرف الكبير له نقطة (İ) والصغير له نقطة (i). لا تخلط بينه وبين I بلا نقطة - المعنى يتغيّر تماماً!',
      'وەک پیتی "ی" لە کوردیدا. ڕێسای گرنگ: پیتی گەورەش خاڵی هەیە (İ) و بچووکەکەش (i). تێکەڵی بە I ی بێ خاڵ مەکە - واتا بە تەواوی دەگۆڕێت!',
    ),
    example: p('iş', 'İŞ', 'عمل', 'کار'),
    example2: p('insan', 'in-SAN', 'إنسان', 'مرۆڤ'),
  },
  {
    id: 'j',
    upper: 'J', lower: 'j', name: 'je', namePron: 'je', ipa: '/ʒ/',
    sound: 'Like s in "measure" or French j. Rare - loanwords only.',
    kind: 'consonant', special: true,
    note: b(
      'غير موجود في الفصحى. هو "ج" لكن دون الشدّة التي في أولها - مثل j الفرنسية في "bonjour"، ومثل حرف "ژ" في الكردية والفارسية. نادر، ويأتي في الكلمات الدخيلة فقط.',
      'تەواو وەک پیتی "ژ" لە کوردیدا. دەگمەنە و تەنها لە وشە بێگانەکاندا دێت.',
    ),
    example: p('jandarma', 'jan-dar-MA', 'الدرك', 'ژاندارما'),
    example2: p('jeton', 'je-TON', 'قطعة نقدية', 'ژیتۆن'),
  },
  {
    id: 'k',
    upper: 'K', lower: 'k', name: 'ke', namePron: 'ke', ipa: '/k/, /c/',
    sound: 'Like k in "kite"; softer before front vowels.',
    kind: 'consonant',
    note: b(
      'مطابق لحرف "ك". يصبح أرقّ قليلاً قبل الحركات الأمامية (e, i, ö, ü) كما في kitap.',
      'وەک پیتی "ک". لەپێش بزوێنە پێشەوەکان (e, i, ö, ü) کەمێک ناسکتر دەبێت، وەک لە kitap.',
    ),
    example: p('kitap', 'ki-TAP', 'كتاب', 'کتێب'),
    example2: p('kalem', 'ka-LEM', 'قلم', 'پێنووس'),
  },
  {
    id: 'l',
    upper: 'L', lower: 'l', name: 'le', namePron: 'le', ipa: '/l/, /ɫ/',
    sound: 'Clear l before front vowels, darker before back vowels.',
    kind: 'consonant',
    note: b(
      'مطابق لحرف "ل". يكون رقيقاً مع الحركات الأمامية وثقيلاً (مفخّماً) مع الخلفية، كما في الفرق بين "لام" في "لِسان" و"الله".',
      'وەک پیتی "ل". لەگەڵ بزوێنە پێشەوەکاندا ناسک و لەگەڵ دواوەکاندا قورس دەبێت - وەک جیاوازی "ل" و "ڵ".',
    ),
    example: p('limon', 'li-MON', 'ليمون', 'لیمۆ'),
    example2: p('lale', 'la-LE', 'زهرة التوليب', 'لالە'),
  },
  {
    id: 'm',
    upper: 'M', lower: 'm', name: 'me', namePron: 'me', ipa: '/m/',
    sound: 'Same as English m.',
    kind: 'consonant',
    note: b('مطابق لحرف "م".', 'وەک پیتی "م".'),
    example: p('masa', 'ma-SA', 'طاولة', 'مێز'),
    example2: p('merhaba', 'MER-ha-ba', 'مرحباً', 'سڵاو'),
  },
  {
    id: 'n',
    upper: 'N', lower: 'n', name: 'ne', namePron: 'ne', ipa: '/n/',
    sound: 'Same as English n.',
    kind: 'consonant',
    note: b('مطابق لحرف "ن".', 'وەک پیتی "ن".'),
    example: p('nar', 'NAR', 'رمّان', 'هەنار'),
    example2: p('ne', 'NE', 'ماذا', 'چی'),
  },
  {
    id: 'o',
    upper: 'O', lower: 'o', name: 'o', namePron: 'o', ipa: '/o/',
    sound: 'Like o in "more", lips rounded.',
    kind: 'vowel',
    vowel: { front: false, rounded: true, close: false },
    note: b(
      'صوت غير موجود في الفصحى كحركة مستقلة، لكنه موجود في العامية مثل "أوضة". استدر الشفتين ولا تُمِلها نحو الواو الطويلة.',
      'تەواو وەک پیتی "ۆ" لە کوردیدا، وەک لە وشەی "کۆن".',
    ),
    example: p('okul', 'o-KUL', 'مدرسة', 'قوتابخانە'),
    example2: p('oda', 'o-DA', 'غرفة', 'ژوور'),
  },
  {
    id: 'oo',
    upper: 'Ö', lower: 'ö', name: 'ö', namePron: 'ö', ipa: '/ø/',
    sound: 'Front rounded vowel - like German ö or French eu.',
    kind: 'vowel', special: true,
    vowel: { front: true, rounded: true, close: false },
    note: b(
      'غير موجود في العربية ولا في الكردية. الطريقة: ضع لسانك في وضع نطق "e" ثم استدر شفتيك كأنك تنطق "o". احبس الوضعين معاً واخرج الصوت. تدرّب: e ... ö ... e ... ö.',
      'لە کوردیدا نییە. ڕێگاکەی: زمانت لە شوێنی دەنگی "ێ" دابنێ، پاشان لێوەکانت خڕ بکەوە وەک "ۆ". هەردوو دۆخەکە پێکەوە بگرە و دەنگەکە دەربکە. ڕاهێنان بکە: ێ ... ö ... ێ ... ö.',
    ),
    example: p('göz', 'GÖZ', 'عين', 'چاو'),
    example2: p('öğretmen', 'öö-ret-MEN', 'معلّم', 'مامۆستا'),
  },
  {
    id: 'p',
    upper: 'P', lower: 'p', name: 'pe', namePron: 'pe', ipa: '/p/',
    sound: 'Same as English p, with a puff of air.',
    kind: 'consonant',
    note: b(
      'غير موجود في الفصحى. هو "ب" لكن مهموس بلا اهتزاز الحبال الصوتية، مثل "پ" الفارسية. ضع يدك أمام فمك: يجب أن تشعر بدفعة هواء.',
      'تەواو وەک پیتی "پ" لە کوردیدا.',
    ),
    example: p('para', 'pa-RA', 'نقود', 'پارە'),
    example2: p('pencere', 'pen-dje-RE', 'نافذة', 'پەنجەرە'),
  },
  {
    id: 'r',
    upper: 'R', lower: 'r', name: 're', namePron: 're', ipa: '/ɾ/',
    sound: 'A single light tap of the tongue - never rolled heavily.',
    kind: 'consonant',
    note: b(
      'مثل "ر" لكن بضربة واحدة خفيفة جداً، لا تكرار ولا تفخيم. في آخر الكلمة يكاد يصبح همساً.',
      'وەک "ر"ی کوردی (نەک "ڕ"ی قورس) - تەنها یەک لێدانی سووکی زمان. لە کۆتایی وشەدا نزیکە لە چپەوە.',
    ),
    example: p('renk', 'RENK', 'لون', 'ڕەنگ'),
    example2: p('resim', 're-SİM', 'صورة', 'وێنە'),
  },
  {
    id: 's',
    upper: 'S', lower: 's', name: 'se', namePron: 'se', ipa: '/s/',
    sound: 'Always a sharp s, never z.',
    kind: 'consonant',
    note: b(
      'مطابق لحرف "س". لا يتحوّل إلى "ز" بين حركتين كما في بعض اللغات الأوروبية.',
      'وەک پیتی "س". هەرگیز لە نێوان دوو بزوێندا نابێتە "ز".',
    ),
    example: p('su', 'SU', 'ماء', 'ئاو'),
    example2: p('süt', 'SÜT', 'حليب', 'شیر'),
  },
  {
    id: 'ss',
    upper: 'Ş', lower: 'ş', name: 'şe', namePron: 'şe', ipa: '/ʃ/',
    sound: 'Like sh in "ship".',
    kind: 'consonant', special: true,
    note: b(
      'مطابق تماماً لحرف "ش". العلامة تحته تُسمّى "cedilla" وهي نفسها التي تميّز Ç عن C.',
      'تەواو وەک پیتی "ش". ئەو نیشانەیەی ژێری پێی دەڵێن "cedilla"، هەمان ئەوەیە کە Ç لە C جیا دەکاتەوە.',
    ),
    example: p('şeker', 'şe-KER', 'سكّر', 'شەکر'),
    example2: p('şehir', 'şe-HİR', 'مدينة', 'شار'),
  },
  {
    id: 't',
    upper: 'T', lower: 't', name: 'te', namePron: 'te', ipa: '/t/',
    sound: 'Same as English t, with a puff of air.',
    kind: 'consonant',
    note: b(
      'مطابق لحرف "ت" المرقّق، وليس "ط" المفخّم. انتبه لهذا الفرق فهو شائع عند العرب.',
      'وەک پیتی "ت"ی ناسک، نەک قورس.',
    ),
    example: p('top', 'TOP', 'كرة', 'تۆپ'),
    example2: p('tuz', 'TUZ', 'ملح', 'خوێ'),
  },
  {
    id: 'u',
    upper: 'U', lower: 'u', name: 'u', namePron: 'u', ipa: '/u/',
    sound: 'Like oo in "book", short.',
    kind: 'vowel',
    vowel: { front: false, rounded: true, close: true },
    note: b(
      'صوت الضمة الممدودة القصيرة، مثل "و" في "نور" لكن أقصر.',
      'وەک پیتی "وو" لە کوردیدا، بەڵام کورتتر.',
    ),
    example: p('uçak', 'u-ÇAK', 'طائرة', 'فڕۆکە'),
    example2: p('un', 'UN', 'طحين', 'ئارد'),
  },
  {
    id: 'uu',
    upper: 'Ü', lower: 'ü', name: 'ü', namePron: 'ü', ipa: '/y/',
    sound: 'Front rounded close vowel - like German ü or French u.',
    kind: 'vowel', special: true,
    vowel: { front: true, rounded: true, close: true },
    note: b(
      'غير موجود في العربية ولا في الكردية. الطريقة: انطق "i" (كسرة) ثم - دون تحريك لسانك إطلاقاً - استدر شفتيك كأنك تنطق "u". تدرّب: i ... ü ... i ... ü. الفرق بينه وبين u هو موضع اللسان فقط.',
      'لە کوردیدا نییە. ڕێگاکەی: دەنگی "ی" دەربکە، پاشان - بەبێ ئەوەی زمانت بجووڵێنیت - لێوەکانت خڕ بکەوە وەک "وو". ڕاهێنان: ی ... ü ... ی ... ü.',
    ),
    example: p('üzüm', 'ü-ZÜM', 'عنب', 'ترێ'),
    example2: p('ülke', 'ül-KE', 'بلد', 'وڵات'),
  },
  {
    id: 'v',
    upper: 'V', lower: 'v', name: 've', namePron: 've', ipa: '/v/',
    sound: 'Like v in "van"; softer, almost w, between rounded vowels.',
    kind: 'consonant',
    note: b(
      'غير موجود في الفصحى. ضع أسنانك العليا على شفتك السفلى وأخرج الصوت مع اهتزاز - مثل حرف "ڤ" الكردي. لا تنطقه "و".',
      'تەواو وەک پیتی "ڤ" لە کوردیدا. وەک "و" مەیخوێنەوە.',
    ),
    example: p('ve', 'VE', 'و (حرف عطف)', 'و'),
    example2: p('vapur', 'va-PUR', 'عبّارة', 'کەشتی'),
  },
  {
    id: 'y',
    upper: 'Y', lower: 'y', name: 'ye', namePron: 'ye', ipa: '/j/',
    sound: 'Like y in "yes" - always a consonant.',
    kind: 'consonant',
    note: b(
      'مطابق لحرف "ي" حين يكون ساكناً متحرّكاً (مثل "يَد")، وليس حركة مدّ أبداً.',
      'وەک پیتی "ی" کاتێک کۆنسۆنانتە (وەک لە "یار")، هەرگیز وەک بزوێن نا.',
    ),
    example: p('yol', 'YOL', 'طريق', 'ڕێگا'),
    example2: p('yıldız', 'yıl-DIZ', 'نجمة', 'ئەستێرە'),
  },
  {
    id: 'z',
    upper: 'Z', lower: 'z', name: 'ze', namePron: 'ze', ipa: '/z/',
    sound: 'Same as English z.',
    kind: 'consonant',
    note: b('مطابق لحرف "ز".', 'وەک پیتی "ز".'),
    example: p('zaman', 'za-MAN', 'وقت', 'کات'),
    example2: p('zeytin', 'zey-TİN', 'زيتون', 'زەیتوون'),
  },
];

/** Letters that do not appear in the English alphabet - the ones students trip on. */
export const SPECIAL_LETTERS = ALPHABET.filter((l) => l.special);

/** The eight Turkish vowels, in the order the harmony table uses. */
export const VOWELS = ALPHABET.filter((l) => l.kind === 'vowel');

/** Letters that exist in English/Latin but not in Turkish. */
export const MISSING_LETTERS = ['Q', 'W', 'X'];
