import type { ArabicConnection } from '@/types/content';
import { b, conn } from '../shared/helpers';

/**
 * Turkish words with a genuine relationship to Arabic.
 *
 * ---------------------------------------------------------------------------
 * What this file is, and what it deliberately is not
 * ---------------------------------------------------------------------------
 *
 * Ottoman Turkish borrowed heavily from Arabic, and although the 1930s language
 * reform replaced a great deal of it, several thousand Arabic-derived words
 * remain in ordinary modern use. For a student who already reads Arabic that is
 * an enormous head start - but only if the connections they are given are real.
 *
 * Three rules govern every entry:
 *
 *   1. A word is marked `borrowing` or `direct` only when the Arabic origin is
 *      documented, never because two words merely resemble each other. Words
 *      that FEEL Arabic but arrived through Persian, French, Greek or Italian
 *      are either absent or explicitly marked `surface`.
 *
 *   2. `confidence` is honest. `certain` means the standard reference works
 *      agree; `likely` means the borrowing is accepted but the semantic path is
 *      debated; `surface` means resemblance only, with no claim of shared
 *      origin.
 *
 *   3. Every `false-friend` carries `means` - what the Arabic word actually
 *      means in Arabic - because the whole value of that category is stopping a
 *      student from guessing wrong. The validator enforces it.
 *
 * Words deliberately NOT claimed as Arabic, despite looking it to a student:
 * hasta, hastane, para, pazar, hafta, bahçe, perde, duvar, pencere, zengin,
 * çay, şeker, neşe, endişe, ümit, ordu (Persian or Turkic); doktor, gazete,
 * banka, berber, vapur, bilet, otel, polis, ekonomi, roman, kültür (European).
 * `şehir` appears only as a false friend, with its real Persian origin stated.
 *
 * The map is keyed by the Turkish word and applied over the whole vocabulary in
 * `content/index.ts`, so a word already in the curriculum is decorated rather
 * than duplicated.
 */
export const ARABIC_CONNECTIONS: Record<string, ArabicConnection> = {

  /* =================================================================== */
  /* Everyday life, time, people                                         */
  /* =================================================================== */

  kitap: conn('كتاب', 'direct', 'certain', { arPron: 'kitāb', kuLink: 'کتێب' }),
  kalem: conn('قلم', 'direct', 'certain', { arPron: 'qalam', kuLink: 'قەڵەم' }),
  defter: conn('دفتر', 'direct', 'certain', {
    arPron: 'daftar',
    kuLink: 'دەفتەر',
    why: b(
      'يونانية الأصل، لكنها وصلت التركية عن طريق العربية، فالشكل عربي تماماً.',
      'ڕەگی یۆنانییە، بەڵام لە ڕێگەی عەرەبییەوە گەیشتووەتە تورکی، بۆیە شێوەکەی تەواو عەرەبییە.',
    ),
  }),
  ders: conn('درس', 'direct', 'certain', { arPron: 'dars', kuLink: 'دەرس' }),
  cevap: conn('جواب', 'direct', 'certain', { arPron: 'jawāb' }),
  kelime: conn('كلمة', 'direct', 'certain', { arPron: 'kalima' }),
  cümle: conn('جملة', 'direct', 'certain', {
    arPron: 'jumla',
    why: b(
      'نفس المعنى النحوي في اللغتين: وحدة كلام تامة.',
      'هەمان واتای ڕێزمانی لە هەردوو زماندا: یەکەیەکی تەواوی قسە.',
    ),
  }),
  harf: conn('حرف', 'direct', 'certain', { arPron: 'ḥarf', kuLink: 'حەرف' }),
  saat: conn('ساعة', 'direct', 'certain', { arPron: 'sāʿa', kuLink: 'سەعات' }),
  dakika: conn('دقيقة', 'direct', 'certain', { arPron: 'daqīqa', kuLink: 'دەقیقە' }),
  saniye: conn('ثانية', 'direct', 'certain', { arPron: 'thāniya' }),
  sene: conn('سنة', 'direct', 'certain', {
    arPron: 'sana',
    why: b(
      'مرادف لـ yıl التركية الأصل، وتُستعمل في السياق الرسمي أكثر.',
      'هاوواتای yılـی ڕەگ تورکییە، زیاتر لە دۆخی فەرمیدا بەکاردێت.',
    ),
  }),
  asır: conn('عصر', 'direct', 'certain', { arPron: 'ʿaṣr' }),
  tarih: conn('تاريخ', 'direct', 'certain', {
    arPron: 'tārīkh',
    why: b(
      'تحمل المعنيين نفسيهما كما في العربية: التاريخ كعِلم، والتاريخ كيوم محدّد.',
      'هەردوو واتاکە هەڵدەگرێت وەک لە عەرەبیدا: مێژوو وەک زانست، و ڕێکەوت وەک ڕۆژێکی دیاریکراو.',
    ),
  }),
  sabah: conn('صباح', 'direct', 'certain', { arPron: 'ṣabāḥ' }),
  merhaba: conn('مرحبا', 'direct', 'certain', { arPron: 'marḥaban' }),
  selam: conn('سلام', 'direct', 'certain', { arPron: 'salām', kuLink: 'سڵاو' }),
  insan: conn('إنسان', 'direct', 'certain', { arPron: 'insān' }),
  aile: conn('عائلة', 'direct', 'certain', { arPron: 'ʿāʾila' }),
  akraba: conn('أقرباء', 'direct', 'certain', {
    arPron: 'aqribāʾ',
    why: b(
      'مأخوذة من صيغة الجمع العربية، لكنها تُستعمل في التركية للمفرد والجمع معاً.',
      'لە شێوەی کۆی عەرەبییەوە وەرگیراوە، بەڵام لە تورکیدا بۆ تاک و کۆ بەکاردێت.',
    ),
  }),
  hayvan: conn('حيوان', 'direct', 'certain', { arPron: 'ḥayawān' }),
  hayat: conn('حياة', 'direct', 'certain', { arPron: 'ḥayāt' }),
  kalp: conn('قلب', 'direct', 'certain', { arPron: 'qalb', kuLink: 'قەڵب' }),
  ruh: conn('روح', 'direct', 'certain', { arPron: 'rūḥ', kuLink: 'ڕۆح' }),
  akıl: conn('عقل', 'direct', 'certain', { arPron: 'ʿaql', kuLink: 'عەقڵ' }),
  ilaç: conn('علاج', 'borrowing', 'certain', {
    arPron: 'ʿilāj',
    why: b(
      'في العربية «علاج» هو المعالجة، أما في التركية فصار الدواء نفسه.',
      'لە عەرەبیدا «علاج» چارەسەرکردنە، بەڵام لە تورکیدا بووەتە خودی دەرمان.',
    ),
  }),
  mide: conn('معدة', 'direct', 'certain', { arPron: 'maʿida' }),
  cami: conn('جامع', 'direct', 'certain', { arPron: 'jāmiʿ' }),
  dua: conn('دعاء', 'direct', 'certain', { arPron: 'duʿāʾ', kuLink: 'دوعا' }),
  kahve: conn('قهوة', 'direct', 'certain', { arPron: 'qahwa', kuLink: 'قاوە' }),
  zeytin: conn('زيتون', 'direct', 'certain', { arPron: 'zaytūn', kuLink: 'زەیتوون' }),
  mahkeme: conn('محكمة', 'direct', 'certain', { arPron: 'maḥkama' }),
  müdür: conn('مدير', 'direct', 'certain', { arPron: 'mudīr' }),
  haber: conn('خبر', 'direct', 'certain', { arPron: 'khabar' }),
  makale: conn('مقالة', 'direct', 'certain', { arPron: 'maqāla' }),
  siyaset: conn('سياسة', 'direct', 'certain', { arPron: 'siyāsa', kuLink: 'سیاسەت' }),
  kuvvet: conn('قوة', 'direct', 'certain', { arPron: 'quwwa' }),
  mutfak: conn('مطبخ', 'direct', 'certain', { arPron: 'maṭbakh' }),
  kira: conn('كراء', 'direct', 'certain', { arPron: 'kirāʾ', kuLink: 'کرێ' }),
  müşteri: conn('مشتري', 'direct', 'certain', { arPron: 'mushtarī' }),
  cadde: conn('جادة', 'direct', 'certain', { arPron: 'jādda' }),
  sokak: conn('زقاق', 'borrowing', 'certain', {
    arPron: 'zuqāq',
    why: b(
      'تغيّر أول حرف من الزاي إلى السين عند دخولها التركية.',
      'یەکەم پیت لە «ز»ـەوە بووە بە «س» کاتێک چووەتە ناو تورکییەوە.',
    ),
  }),
  meydan: conn('ميدان', 'direct', 'certain', { arPron: 'maydān', kuLink: 'مەیدان' }),
  dükkân: conn('دكان', 'direct', 'certain', { arPron: 'dukkān', kuLink: 'دووکان' }),
  seyahat: conn('سياحة', 'borrowing', 'certain', {
    arPron: 'siyāḥa',
    why: b(
      'في العربية الحديثة «سياحة» تعني tourism، وفي التركية تعني السفر عموماً.',
      'لە عەرەبی نوێدا «سياحة» واتە گەشتیاری، بەڵام لە تورکیدا واتای گەشتکردنە بە گشتی.',
    ),
  }),
  ameliyat: conn('عملية', 'borrowing', 'certain', {
    arPron: 'ʿamaliyya',
    why: b(
      'خُصّصت في التركية للعملية الجراحية وحدها.',
      'لە تورکیدا تەنها بۆ نەشتەرگەری تایبەت کراوە.',
    ),
  }),
  tedavi: conn('تداوي', 'direct', 'certain', { arPron: 'tadāwī' }),
  beden: conn('بدن', 'direct', 'certain', { arPron: 'badan' }),
  iklim: conn('إقليم', 'borrowing', 'certain', {
    arPron: 'iqlīm',
    why: b(
      'الأصل يوناني klima. في العربية صار «الإقليم» منطقة، وفي التركية بقي المناخ.',
      'ڕەگەکەی یۆنانییە (klima). لە عەرەبیدا بووە بە ناوچە، بەڵام لە تورکیدا کەشوهەوای ماوەتەوە.',
    ),
  }),
  mevsim: conn('موسم', 'direct', 'certain', { arPron: 'mawsim' }),
  derece: conn('درجة', 'direct', 'certain', { arPron: 'daraja' }),
  nehir: conn('نهر', 'direct', 'certain', { arPron: 'nahr' }),
  zaman: conn('زمان', 'direct', 'certain', { arPron: 'zamān', kuLink: 'زەمان' }),
  sebep: conn('سبب', 'direct', 'certain', { arPron: 'sabab', kuLink: 'سەبەب' }),
  mesele: conn('مسألة', 'direct', 'certain', { arPron: 'masʾala' }),
  imkân: conn('إمكان', 'direct', 'certain', { arPron: 'imkān' }),
  mümkün: conn('ممكن', 'direct', 'certain', { arPron: 'mumkin' }),
  zarar: conn('ضرر', 'direct', 'certain', { arPron: 'ḍarar' }),
  maaş: conn('معاش', 'borrowing', 'certain', {
    arPron: 'maʿāsh',
    why: b(
      'في العربية الحديثة «معاش» غالباً راتب التقاعد، وفي التركية الراتب الشهري عموماً.',
      'لە عەرەبی نوێدا زۆرجار مووچەی خانەنشینییە، بەڵام لە تورکیدا مووچەی مانگانەی گشتییە.',
    ),
  }),

  /* =================================================================== */
  /* Grammar terminology — the fastest win an Arabic reader gets          */
  /* =================================================================== */

  isim: conn('اسم', 'direct', 'certain', {
    arPron: 'ism',
    why: b(
      'مصطلح نحوي مشترك: الاسم في العربية هو isim في التركية بالمعنى نفسه.',
      'زاراوەیەکی ڕێزمانی هاوبەشە: «اسم»ی عەرەبی هەمان isimـی تورکییە.',
    ),
  }),
  fiil: conn('فعل', 'direct', 'certain', {
    arPron: 'fiʿl',
    why: b(
      'مصطلح النحو نفسه في اللغتين. من يعرف النحو العربي يفهم التقسيم التركي فوراً.',
      'هەمان زاراوەی ڕێزمانی لە هەردوو زماندا. ئەوەی ڕێزمانی عەرەبی بزانێت دابەشکردنی تورکی دەستبەجێ تێدەگات.',
    ),
  }),
  sıfat: conn('صفة', 'direct', 'certain', { arPron: 'ṣifa' }),
  zamir: conn('ضمير', 'direct', 'certain', {
    arPron: 'ḍamīr',
    why: b(
      'في التركية مصطلح نحوي فقط، بينما تحمل العربية أيضاً معنى «الوجدان».',
      'لە تورکیدا تەنها زاراوەیەکی ڕێزمانییە، بەڵام لە عەرەبیدا واتای «وژدان»یشی هەیە.',
    ),
  }),
  edat: conn('أداة', 'direct', 'certain', { arPron: 'adāt' }),
  lisan: conn('لسان', 'borrowing', 'certain', {
    arPron: 'lisān',
    why: b(
      'قديمة ورسمية؛ الكلمة الشائعة اليوم هي dil التركية الأصل.',
      'کۆن و فەرمییە؛ وشەی باو ئەمڕۆ dilـی ڕەگ تورکییە.',
    ),
  }),
  tercüme: conn('ترجمة', 'direct', 'certain', { arPron: 'tarjama' }),
  misal: conn('مثال', 'direct', 'certain', { arPron: 'mithāl' }),
  nokta: conn('نقطة', 'direct', 'certain', { arPron: 'nuqṭa' }),
  satır: conn('سطر', 'direct', 'certain', { arPron: 'saṭr' }),
  sayfa: conn('صفحة', 'direct', 'certain', { arPron: 'ṣafḥa' }),
  şekil: conn('شكل', 'direct', 'certain', { arPron: 'shakl' }),
  şey: conn('شيء', 'direct', 'certain', { arPron: 'shayʾ' }),

  /* =================================================================== */
  /* State, law, civic life                                              */
  /* =================================================================== */

  devlet: conn('دولة', 'direct', 'certain', { arPron: 'dawla', kuLink: 'دەوڵەت' }),
  hükümet: conn('حكومة', 'direct', 'certain', { arPron: 'ḥukūma', kuLink: 'حکومەت' }),
  kanun: conn('قانون', 'direct', 'certain', {
    arPron: 'qānūn',
    why: b(
      'يونانية الأصل (kanon)، دخلت التركية عبر العربية بشكلها العربي.',
      'ڕەگی یۆنانییە (kanon)، بە شێوە عەرەبییەکەی لە ڕێگەی عەرەبییەوە چووەتە تورکی.',
    ),
  }),
  hukuk: conn('حقوق', 'direct', 'certain', { arPron: 'ḥuqūq' }),
  adalet: conn('عدالة', 'direct', 'certain', { arPron: 'ʿadāla' }),
  hâkim: conn('حاكم', 'borrowing', 'certain', {
    arPron: 'ḥākim',
    why: b(
      'في التركية القاضي في المحكمة؛ وفي العربية الحاكم هو الوالي أو الرئيس.',
      'لە تورکیدا دادوەری دادگایە؛ لە عەرەبیدا حاکم واتە فەرمانڕەوا.',
    ),
  }),
  avukat: conn('محامٍ', 'false-friend', 'surface', {
    arPron: 'muḥāmin',
    means: b('المحامي بالعربية «محامٍ» ولا صلة لها بـ avukat.', 'پارێزەر بە عەرەبی «محامٍ»ە و پەیوەندی بە avukatـەوە نییە.'),
    why: b(
      '⚠️ ليست عربية إطلاقاً: أصلها الفرنسية avocat. أدرجناها هنا لأن كثيراً من الطلاب يظنّونها عربية.',
      '⚠️ هیچ عەرەبی نییە: ڕەگی فەڕەنسییە (avocat). لێرە دانراوە چونکە زۆر خوێندکار وا بیردەکەنەوە عەرەبییە.',
    ),
  }),
  şahit: conn('شاهد', 'direct', 'certain', { arPron: 'shāhid' }),
  vekil: conn('وكيل', 'direct', 'certain', { arPron: 'wakīl' }),
  memur: conn('مأمور', 'borrowing', 'certain', {
    arPron: 'maʾmūr',
    why: b(
      'في التركية الموظف الحكومي؛ وفي العربية «المأمور» من صدر إليه أمر.',
      'لە تورکیدا فەرمانبەری حکومییە؛ لە عەرەبیدا ئەو کەسەیە کە فەرمانی پێدراوە.',
    ),
  }),
  meclis: conn('مجلس', 'direct', 'certain', { arPron: 'majlis' }),
  karar: conn('قرار', 'direct', 'certain', { arPron: 'qarār', kuLink: 'بڕیار' }),
  kabul: conn('قبول', 'direct', 'certain', { arPron: 'qabūl' }),
  talep: conn('طلب', 'direct', 'certain', { arPron: 'ṭalab' }),
  idare: conn('إدارة', 'direct', 'certain', { arPron: 'idāra' }),
  hizmet: conn('خدمة', 'direct', 'certain', { arPron: 'khidma' }),
  vatan: conn('وطن', 'direct', 'certain', { arPron: 'waṭan', kuLink: 'وەتەن' }),
  halk: conn('خلق', 'borrowing', 'certain', {
    arPron: 'khalq',
    why: b(
      'من «الخَلْق» أي الناس المخلوقون؛ استقرّ معناها في التركية على «الشعب».',
      'لە «خەلق»ـەوە واتە خەڵکی دروستکراو؛ لە تورکیدا واتاکەی بووە بە «گەل».',
    ),
  }),
  cemiyet: conn('جمعية', 'direct', 'certain', { arPron: 'jamʿiyya' }),
  nüfus: conn('نفوس', 'borrowing', 'certain', {
    arPron: 'nufūs',
    why: b(
      'جمع «نفس» بالعربية؛ صارت في التركية «عدد السكان» ثم «السجل المدني».',
      'کۆی «نفس»ە بە عەرەبی؛ لە تورکیدا بووە بە «ژمارەی دانیشتوان» و پاشان «تۆماری بارودۆخی خێزانی».',
    ),
  }),
  hürriyet: conn('حرية', 'direct', 'certain', { arPron: 'ḥurriyya' }),
  hak: conn('حق', 'direct', 'certain', { arPron: 'ḥaqq', kuLink: 'ماف' }),
  hakikat: conn('حقيقة', 'direct', 'certain', { arPron: 'ḥaqīqa' }),
  zulüm: conn('ظلم', 'direct', 'certain', { arPron: 'ẓulm' }),
  emniyet: conn('أمنية', 'borrowing', 'certain', {
    arPron: 'amniyya',
    why: b(
      'من جذر «أمن». في التركية تعني الأمن العام وأيضاً جهاز الشرطة.',
      'لە ڕەگی «أمن»ـەوە. لە تورکیدا واتای ئاسایشی گشتی و دەزگای پۆلیسیش دەگەیەنێت.',
    ),
  }),
  asker: conn('عسكر', 'direct', 'certain', { arPron: 'ʿaskar' }),
  silah: conn('سلاح', 'direct', 'certain', { arPron: 'silāḥ' }),
  sulh: conn('صلح', 'direct', 'certain', { arPron: 'ṣulḥ' }),
  ittifak: conn('اتفاق', 'borrowing', 'certain', {
    arPron: 'ittifāq',
    why: b(
      'في العربية «اتفاق» عام، وفي التركية تميل إلى «التحالف» السياسي أو العسكري.',
      'لە عەرەبیدا گشتییە، بەڵام لە تورکیدا زیاتر بۆ «هاوپەیمانی» سیاسی یان سەربازی بەکاردێت.',
    ),
  }),
  şehit: conn('شهيد', 'direct', 'certain', { arPron: 'shahīd' }),
  imza: conn('إمضاء', 'direct', 'certain', { arPron: 'imḍāʾ' }),
  vesika: conn('وثيقة', 'direct', 'certain', { arPron: 'wathīqa' }),
  mektup: conn('مكتوب', 'borrowing', 'certain', {
    arPron: 'maktūb',
    why: b(
      '«مكتوب» اسم مفعول بالعربية؛ صارت في التركية «الرسالة» نفسها.',
      'لە عەرەبیدا ناوی بەرکارە؛ لە تورکیدا بووە بە خودی «نامە».',
    ),
  }),
  ilan: conn('إعلان', 'direct', 'certain', { arPron: 'iʿlān' }),

  /* =================================================================== */
  /* Thought, knowledge, academia                                        */
  /* =================================================================== */

  fikir: conn('فكر', 'direct', 'certain', { arPron: 'fikr', kuLink: 'فکر' }),
  ilim: conn('علم', 'borrowing', 'certain', {
    arPron: 'ʿilm',
    why: b(
      'الكلمة الحديثة الشائعة هي bilim التركية الأصل، لكن ilim باقية في السياق الديني والتقليدي.',
      'وشەی نوێی باو bilimـی ڕەگ تورکییە، بەڵام ilim لە دۆخی ئایینی و نەریتیدا ماوە.',
    ),
  }),
  felsefe: conn('فلسفة', 'direct', 'certain', {
    arPron: 'falsafa',
    why: b(
      'يونانية الأصل، وصلت التركية عبر العربية بالشكل العربي نفسه.',
      'ڕەگی یۆنانییە، بە هەمان شێوەی عەرەبی لە ڕێگەی عەرەبییەوە گەیشتووە.',
    ),
  }),
  coğrafya: conn('جغرافيا', 'direct', 'certain', { arPron: 'jughrāfiyā' }),
  medeniyet: conn('مدنية', 'direct', 'certain', { arPron: 'madaniyya' }),
  edebiyat: conn('أدبيات', 'borrowing', 'certain', {
    arPron: 'adabiyyāt',
    why: b(
      'من «الأدب»؛ التركية أخذت صيغة الجمع واستعملتها للمفرد.',
      'لە «أدب»ـەوە؛ تورکی شێوەی کۆی وەرگرتووە و بۆ تاک بەکاریدەهێنێت.',
    ),
  }),
  şiir: conn('شعر', 'direct', 'certain', { arPron: 'shiʿr', kuLink: 'شیعر' }),
  şair: conn('شاعر', 'direct', 'certain', { arPron: 'shāʿir', kuLink: 'شاعیر' }),
  hikâye: conn('حكاية', 'direct', 'certain', { arPron: 'ḥikāya' }),
  sanat: conn('صنعة', 'borrowing', 'certain', {
    arPron: 'ṣanʿa',
    why: b(
      'من «الصنعة» أي الحرفة؛ ارتقى معناها في التركية إلى «الفن».',
      'لە «صنعة»ـەوە واتە پیشە؛ لە تورکیدا واتاکەی بەرزبووەتەوە بۆ «هونەر».',
    ),
  }),
  resim: conn('رسم', 'direct', 'certain', { arPron: 'rasm' }),
  mimari: conn('معماري', 'direct', 'certain', { arPron: 'miʿmārī' }),
  hesap: conn('حساب', 'direct', 'certain', { arPron: 'ḥisāb', kuLink: 'حساب' }),
  rakam: conn('رقم', 'direct', 'certain', { arPron: 'raqm' }),
  tecrübe: conn('تجربة', 'direct', 'certain', { arPron: 'tajriba' }),
  malumat: conn('معلومات', 'borrowing', 'certain', {
    arPron: 'maʿlūmāt',
    why: b(
      'رسمية أو قديمة الطابع؛ الشائع اليوم bilgi التركية الأصل.',
      'فەرمی یان کۆنە؛ ئەوەی باوە ئەمڕۆ bilgiـی ڕەگ تورکییە.',
    ),
  }),
  tahlil: conn('تحليل', 'direct', 'certain', { arPron: 'taḥlīl' }),
  tefsir: conn('تفسير', 'direct', 'certain', { arPron: 'tafsīr' }),
  takdir: conn('تقدير', 'direct', 'certain', { arPron: 'taqdīr' }),
  tavsiye: conn('توصية', 'direct', 'certain', { arPron: 'tawṣiya' }),
  nasihat: conn('نصيحة', 'direct', 'certain', { arPron: 'naṣīḥa' }),
  münakaşa: conn('مناقشة', 'borrowing', 'certain', {
    arPron: 'munāqasha',
    why: b(
      'في العربية نقاش محايد، وفي التركية تميل إلى المشادّة والجدال الحادّ.',
      'لە عەرەبیدا گفتوگۆیەکی ئاساییە، بەڵام لە تورکیدا زیاتر واتای دەمەقاڵێ دەدات.',
    ),
  }),
  usul: conn('أصول', 'borrowing', 'certain', {
    arPron: 'uṣūl',
    why: b(
      'جمع «أصل» بالعربية؛ استقرّت في التركية بمعنى «الطريقة» أو «الإجراء».',
      'کۆی «أصل»ە بە عەرەبی؛ لە تورکیدا بە واتای «ڕێباز» یان «ڕێکار» جێگیر بووە.',
    ),
  }),
  kaide: conn('قاعدة', 'direct', 'certain', { arPron: 'qāʿida' }),
  şart: conn('شرط', 'direct', 'certain', { arPron: 'sharṭ', kuLink: 'مەرج' }),
  ihtimal: conn('احتمال', 'direct', 'certain', { arPron: 'iḥtimāl' }),
  netice: conn('نتيجة', 'direct', 'certain', { arPron: 'natīja' }),
  hedef: conn('هدف', 'direct', 'certain', { arPron: 'hadaf', kuLink: 'ئامانج' }),
  maksat: conn('مقصد', 'direct', 'certain', { arPron: 'maqṣad' }),
  gaye: conn('غاية', 'direct', 'certain', { arPron: 'ghāya' }),
  vasıta: conn('واسطة', 'direct', 'certain', { arPron: 'wāsiṭa' }),
  mantık: conn('منطق', 'direct', 'certain', { arPron: 'manṭiq' }),
  makul: conn('معقول', 'direct', 'certain', { arPron: 'maʿqūl' }),
  münasip: conn('مناسب', 'direct', 'certain', { arPron: 'munāsib' }),
  müstakil: conn('مستقل', 'direct', 'certain', { arPron: 'mustaqill' }),
  muhtaç: conn('محتاج', 'direct', 'certain', { arPron: 'muḥtāj' }),
  mahsus: conn('مخصوص', 'direct', 'certain', { arPron: 'makhṣūṣ' }),
  hususi: conn('خصوصي', 'direct', 'certain', {
    arPron: 'khuṣūṣī',
    why: b(
      'رسمية الطابع؛ الشائع اليوم özel التركية الأصل.',
      'فەرمییە؛ ئەوەی باوە ئەمڕۆ özelـی ڕەگ تورکییە.',
    ),
  }),

  /* =================================================================== */
  /* Work, trade, money                                                  */
  /* =================================================================== */

  ticaret: conn('تجارة', 'direct', 'certain', { arPron: 'tijāra' }),
  tüccar: conn('تاجر', 'direct', 'certain', { arPron: 'tājir' }),
  sanayi: conn('صناعة', 'direct', 'certain', { arPron: 'ṣināʿa' }),
  ziraat: conn('زراعة', 'direct', 'certain', { arPron: 'zirāʿa' }),
  iktisat: conn('اقتصاد', 'direct', 'certain', { arPron: 'iqtiṣād' }),
  maliye: conn('مالية', 'direct', 'certain', { arPron: 'māliyya' }),
  servet: conn('ثروة', 'direct', 'certain', { arPron: 'tharwa' }),
  fakir: conn('فقير', 'direct', 'certain', { arPron: 'faqīr' }),
  ücret: conn('أجرة', 'direct', 'certain', { arPron: 'ujra' }),
  fayda: conn('فائدة', 'direct', 'certain', { arPron: 'fāʾida', kuLink: 'سوود' }),
  menfaat: conn('منفعة', 'direct', 'certain', { arPron: 'manfaʿa' }),
  mülk: conn('ملك', 'direct', 'certain', { arPron: 'mulk' }),
  emlak: conn('أملاك', 'direct', 'certain', { arPron: 'amlāk' }),
  sahip: conn('صاحب', 'direct', 'certain', { arPron: 'ṣāḥib' }),
  inşaat: conn('إنشاءات', 'direct', 'certain', { arPron: 'inshāʾāt' }),
  meslek: conn('مسلك', 'borrowing', 'likely', {
    arPron: 'maslak',
    why: b(
      'من «المسلك» أي الطريق المسلوك؛ استقرّت في التركية على «المهنة».',
      'لە «مسلك»ـەوە واتە ڕێگای گیراو؛ لە تورکیدا بووە بە «پیشە».',
    ),
  }),
  vazife: conn('وظيفة', 'borrowing', 'certain', {
    arPron: 'waẓīfa',
    why: b(
      'في العربية الحديثة «الوظيفة» هي العمل، وفي التركية «الواجب»؛ والشائع اليوم görev.',
      'لە عەرەبی نوێدا «وظيفة» واتە کار، بەڵام لە تورکیدا واتە «ئەرک»؛ ئەوەی باوە ئەمڕۆ görevـە.',
    ),
  }),
  mesuliyet: conn('مسؤولية', 'direct', 'certain', { arPron: 'masʾūliyya' }),
  müsabaka: conn('مسابقة', 'direct', 'certain', { arPron: 'musābaqa' }),
  ziyaret: conn('زيارة', 'direct', 'certain', { arPron: 'ziyāra' }),
  davet: conn('دعوة', 'direct', 'certain', { arPron: 'daʿwa' }),
  ikram: conn('إكرام', 'direct', 'certain', { arPron: 'ikrām' }),
  ziyafet: conn('ضيافة', 'borrowing', 'certain', {
    arPron: 'ḍiyāfa',
    why: b(
      'في العربية «الضيافة» فعل الاستقبال، وفي التركية صارت «المأدبة» نفسها.',
      'لە عەرەبیدا کردەی پێشوازییە، بەڵام لە تورکیدا بووە بە خودی «خوانی میوانداری».',
    ),
  }),
  sofra: conn('سفرة', 'direct', 'certain', { arPron: 'sufra' }),
  tabak: conn('طبق', 'direct', 'certain', { arPron: 'ṭabaq' }),
  bina: conn('بناء', 'direct', 'certain', { arPron: 'bināʾ' }),
  mahalle: conn('محلة', 'direct', 'certain', { arPron: 'maḥalla' }),
  mekân: conn('مكان', 'direct', 'certain', { arPron: 'makān' }),
  mevki: conn('موقع', 'direct', 'certain', { arPron: 'mawqiʿ' }),
  taraf: conn('طرف', 'direct', 'certain', { arPron: 'ṭaraf' }),
  hudut: conn('حدود', 'direct', 'certain', { arPron: 'ḥudūd' }),
  mesafe: conn('مسافة', 'direct', 'certain', { arPron: 'masāfa' }),
  sahil: conn('ساحل', 'direct', 'certain', { arPron: 'sāḥil' }),
  tabiat: conn('طبيعة', 'direct', 'certain', { arPron: 'ṭabīʿa' }),
  hava: conn('هواء', 'borrowing', 'certain', {
    arPron: 'hawāʾ',
    why: b(
      'في التركية تعني الهواء والطقس والجوّ العام معاً.',
      'لە تورکیدا واتای هەوا و کەشوهەوا و بارودۆخی گشتیش دەگەیەنێت.',
    ),
  }),

  /* =================================================================== */
  /* Feelings, character, values                                         */
  /* =================================================================== */

  his: conn('حس', 'direct', 'certain', { arPron: 'ḥiss' }),
  hayal: conn('خيال', 'direct', 'certain', { arPron: 'khayāl' }),
  rüya: conn('رؤيا', 'direct', 'certain', { arPron: 'ruʾyā' }),
  hatıra: conn('خاطرة', 'direct', 'certain', { arPron: 'khāṭira' }),
  hafıza: conn('حافظة', 'direct', 'certain', { arPron: 'ḥāfiẓa' }),
  zekâ: conn('ذكاء', 'direct', 'certain', { arPron: 'dhakāʾ' }),
  sabır: conn('صبر', 'direct', 'certain', { arPron: 'ṣabr', kuLink: 'سەبر' }),
  şeref: conn('شرف', 'direct', 'certain', { arPron: 'sharaf', kuLink: 'شەرەف' }),
  ahlak: conn('أخلاق', 'direct', 'certain', { arPron: 'akhlāq', kuLink: 'ئەخلاق' }),
  terbiye: conn('تربية', 'direct', 'certain', { arPron: 'tarbiya' }),
  merhamet: conn('مرحمة', 'direct', 'certain', { arPron: 'marḥama' }),
  şefkat: conn('شفقة', 'direct', 'certain', { arPron: 'shafaqa' }),
  aşk: conn('عشق', 'direct', 'certain', { arPron: 'ʿishq', kuLink: 'عەشق' }),
  hüzün: conn('حزن', 'direct', 'certain', { arPron: 'ḥuzn' }),
  keder: conn('كدر', 'direct', 'certain', { arPron: 'kadar' }),
  cesaret: conn('جسارة', 'direct', 'certain', { arPron: 'jasāra' }),
  gurur: conn('غرور', 'borrowing', 'certain', {
    arPron: 'ghurūr',
    why: b(
      'في العربية «الغرور» مذموم دائماً، وفي التركية gurur غالباً «الاعتزاز» الإيجابي.',
      'لە عەرەبیدا هەمیشە خراپە، بەڵام لە تورکیدا زۆرجار واتای «شانازی»ی ئەرێنی دەدات.',
    ),
  }),
  heves: conn('هوس', 'borrowing', 'likely', {
    arPron: 'hawas',
    why: b(
      'في العربية «الهوس» قريب من الجنون، وفي التركية heves حماسة عابرة أو رغبة.',
      'لە عەرەبیدا لە شێتی نزیکە، بەڵام لە تورکیدا واتای پەرۆشی کاتی یان ئارەزوو دەدات.',
    ),
  }),
  irade: conn('إرادة', 'direct', 'certain', { arPron: 'irāda' }),
  azim: conn('عزم', 'direct', 'certain', { arPron: 'ʿazm' }),
  kader: conn('قدر', 'direct', 'certain', { arPron: 'qadar' }),
  nasip: conn('نصيب', 'direct', 'certain', { arPron: 'naṣīb' }),
  kısmet: conn('قسمة', 'borrowing', 'certain', {
    arPron: 'qisma',
    why: b(
      'من «القسمة» أي ما قُسم للمرء؛ صارت في التركية «الحظ» أو «النصيب».',
      'لە «قسمة»ـەوە واتە ئەوەی بۆ مرۆڤ دابەشکراوە؛ لە تورکیدا بووە بە «بەخت».',
    ),
  }),
  bereket: conn('بركة', 'direct', 'certain', { arPron: 'baraka', kuLink: 'بەرەکەت' }),
  afiyet: conn('عافية', 'direct', 'certain', {
    arPron: 'ʿāfiya',
    why: b(
      'تُقال قبل الطعام: afiyet olsun، أي «بالعافية».',
      'پێش خواردن دەوترێت: afiyet olsun، واتە «بە خۆشی».',
    ),
  }),
  hata: conn('خطأ', 'direct', 'certain', { arPron: 'khaṭaʾ' }),
  ayıp: conn('عيب', 'direct', 'certain', { arPron: 'ʿayb', kuLink: 'عەیب' }),
  kusur: conn('قصور', 'direct', 'certain', { arPron: 'quṣūr' }),
  sır: conn('سر', 'direct', 'certain', { arPron: 'sirr' }),
  şiddet: conn('شدة', 'borrowing', 'certain', {
    arPron: 'shidda',
    why: b(
      'في العربية «الشدّة» قوة أو صعوبة، وفي التركية استقرّت على «العنف».',
      'لە عەرەبیدا واتای هێز یان سەختی، بەڵام لە تورکیدا بووە بە «توندوتیژی».',
    ),
  }),
  tehlike: conn('تهلكة', 'borrowing', 'likely', {
    arPron: 'tahluka',
    why: b(
      'من «التهلكة» أي الهلاك؛ صارت في التركية «الخطر» بمعناه العام.',
      'لە «تهلكة»ـەوە واتە لەناوچوون؛ لە تورکیدا بووە بە «مەترسی» بە واتای گشتی.',
    ),
  }),
  afet: conn('آفة', 'borrowing', 'certain', {
    arPron: 'āfa',
    why: b(
      'في العربية «الآفة» بلاء أو مرض، وفي التركية «الكارثة الطبيعية».',
      'لە عەرەبیدا بەڵا یان نەخۆشییە، بەڵام لە تورکیدا «کارەساتی سروشتی»یە.',
    ),
  }),
  imdat: conn('إمداد', 'borrowing', 'certain', {
    arPron: 'imdād',
    why: b(
      'من «الإمداد» أي العون؛ صارت في التركية صرخة الاستغاثة نفسها.',
      'لە «إمداد»ـەوە واتە یارمەتی؛ لە تورکیدا بووە بە خودی هاواری فریاکەوتن.',
    ),
  }),
  hediye: conn('هدية', 'direct', 'certain', { arPron: 'hadiyya' }),
  hürmet: conn('حرمة', 'borrowing', 'certain', {
    arPron: 'ḥurma',
    why: b(
      'من الجذر نفسه، لكنها في التركية «الاحترام» تحديداً.',
      'لە هەمان ڕەگەوە، بەڵام لە تورکیدا بە تایبەتی واتای «ڕێزلێنان» دەدات.',
    ),
  }),
  rica: conn('رجاء', 'direct', 'certain', { arPron: 'rajāʾ' }),
  teşekkür: conn('تشكّر', 'direct', 'certain', { arPron: 'tashakkur' }),
  meşhur: conn('مشهور', 'direct', 'certain', { arPron: 'mashhūr' }),
  meşgul: conn('مشغول', 'direct', 'certain', { arPron: 'mashghūl' }),
  hazır: conn('حاضر', 'borrowing', 'certain', {
    arPron: 'ḥāḍir',
    why: b(
      'في العربية «حاضر» أي موجود، وفي التركية «جاهز» أو «مُعدّ سلفاً».',
      'لە عەرەبیدا واتە ئامادەبوون لە شوێنێک، بەڵام لە تورکیدا واتە «ئامادە» یان «پێشوەخت دروستکراو».',
    ),
  }),
  lazım: conn('لازم', 'direct', 'certain', { arPron: 'lāzim' }),
  mecbur: conn('مجبور', 'direct', 'certain', { arPron: 'majbūr' }),
  devam: conn('دوام', 'borrowing', 'certain', {
    arPron: 'dawām',
    why: b(
      'في العربية «الدوام» أيضاً ساعات العمل، وفي التركية الاستمرار فقط.',
      'لە عەرەبیدا کاتژمێری کاریش دەگەیەنێت، بەڵام لە تورکیدا تەنها بەردەوامییە.',
    ),
  }),
  vakit: conn('وقت', 'direct', 'certain', { arPron: 'waqt', kuLink: 'وەخت' }),

  /* =================================================================== */
  /* Discourse markers — the ones that make speech sound native           */
  /* =================================================================== */

  yani: conn('يعني', 'direct', 'certain', {
    arPron: 'yaʿnī',
    why: b(
      'نفس الاستعمال تماماً: تُقال أثناء الشرح لإعادة الصياغة.',
      'تەواو هەمان بەکارهێنان: لە کاتی ڕوونکردنەوەدا بۆ دووبارە داڕشتنەوە دەوترێت.',
    ),
  }),
  mesela: conn('مثلاً', 'direct', 'certain', { arPron: 'mathalan' }),
  maalesef: conn('مع الأسف', 'direct', 'certain', {
    arPron: 'maʿa l-asaf',
    why: b(
      'تركيب عربي كامل انتقل ككلمة واحدة إلى التركية.',
      'دەستەواژەیەکی تەواوی عەرەبییە وەک یەک وشە چووەتە ناو تورکییەوە.',
    ),
  }),
  lakin: conn('لكن', 'direct', 'certain', { arPron: 'lākin' }),
  hakikaten: conn('حقيقةً', 'direct', 'certain', { arPron: 'ḥaqīqatan' }),
  tamamen: conn('تماماً', 'direct', 'certain', { arPron: 'tamāman' }),
  takriben: conn('تقريباً', 'direct', 'certain', { arPron: 'taqrīban' }),
  bilhassa: conn('بالخاصة', 'direct', 'likely', { arPron: 'bi-l-khāṣṣa' }),
  daima: conn('دائماً', 'direct', 'certain', { arPron: 'dāʾiman' }),
  acaba: conn('عجباً', 'borrowing', 'certain', {
    arPron: 'ʿajaban',
    why: b(
      'في العربية تعبير تعجّب، وفي التركية أداة تساؤل: «تُرى؟».',
      'لە عەرەبیدا دەربڕینی سەرسوڕمانە، بەڵام لە تورکیدا ئامرازی پرسیارە: «عەجەب؟».',
    ),
  }),
  galiba: conn('غالباً', 'borrowing', 'certain', {
    arPron: 'ghāliban',
    why: b(
      'في العربية «في الغالب»، وفي التركية أقرب إلى «أظنّ» أو «على ما يبدو».',
      'لە عەرەبیدا «زۆرجار»ە، بەڵام لە تورکیدا لە «وابزانم» نزیکترە.',
    ),
  }),
  elbette: conn('البتّة', 'borrowing', 'likely', {
    arPron: 'al-batta',
    why: b(
      'في العربية تُستعمل مع النفي للتأكيد، وفي التركية صارت «بالتأكيد» الإيجابية.',
      'لە عەرەبیدا لەگەڵ نەفیدا بۆ جەختکردنەوە بەکاردێت، بەڵام لە تورکیدا بووە بە «بێگومان»ی ئەرێنی.',
    ),
  }),
  inşallah: conn('إن شاء الله', 'direct', 'certain', { arPron: 'in shāʾa llāh' }),
  maşallah: conn('ما شاء الله', 'direct', 'certain', { arPron: 'mā shāʾa llāh' }),
  vallahi: conn('والله', 'direct', 'certain', { arPron: 'wa-llāhi' }),
  rağmen: conn('رغم', 'direct', 'certain', {
    arPron: 'raghma',
    why: b(
      'تأتي بعد الاسم في التركية: buna rağmen = رغم ذلك.',
      'لە تورکیدا دوای ناو دێت: buna rağmen = سەرەڕای ئەوە.',
    ),
  }),

  /* =================================================================== */
  /* Recognisable by SOUND — the spelling diverged, the ear did not       */
  /* =================================================================== */

  sabun: conn('صابون', 'pronunciation', 'certain', { arPron: 'ṣābūn', kuLink: 'سابوون' }),
  fincan: conn('فنجان', 'pronunciation', 'certain', { arPron: 'finjān', kuLink: 'فنجان' }),
  sandık: conn('صندوق', 'pronunciation', 'certain', {
    arPron: 'ṣundūq',
    why: b(
      'الضمّة العربية صارت ı تركية: صندوق ← sandık. الهيكل الصوتي يبقى واضحاً رغم ذلك.',
      'دەنگداری عەرەبی بووە بە ıی تورکی: صندوق ← sandık. بەڵام شێوەی دەنگی ڕوون دەمێنێتەوە.',
    ),
  }),
  mermer: conn('مرمر', 'pronunciation', 'certain', { arPron: 'marmar' }),
  kandil: conn('قنديل', 'pronunciation', 'certain', { arPron: 'qandīl', kuLink: 'قەندیل' }),
  nane: conn('نعناع', 'pronunciation', 'certain', {
    arPron: 'naʿnāʿ',
    why: b(
      'سقطت العين في التركية لأنها ليست من أصواتها: نعناع ← nane.',
      'پیتی «ع» لە تورکیدا کەوتووە چونکە لە دەنگەکانی نییە: نعناع ← nane.',
    ),
  }),
  safran: conn('زعفران', 'pronunciation', 'certain', {
    arPron: 'zaʿfarān',
    why: b(
      'سقطت الزاي الأولى وبقي الباقي: زعفران ← safran.',
      'یەکەم «ز» کەوتووە و ئەوەی مایەوە: زعفران ← safran.',
    ),
  }),
  ceviz: conn('جوز', 'pronunciation', 'certain', {
    arPron: 'jawz',
    why: b(
      'الجيم العربية تُنطق c في التركية دائماً: جوز ← ceviz.',
      '«ج»ی عەرەبی لە تورکیدا هەمیشە c دەردەبڕدرێت: جوز ← ceviz.',
    ),
  }),
  fıstık: conn('فستق', 'pronunciation', 'certain', { arPron: 'fustuq' }),
  limon: conn('ليمون', 'pronunciation', 'likely', {
    arPron: 'laymūn',
    why: b(
      'أصلها آسيوي، وانتقلت إلى التركية عبر العربية أو الفارسية — والطريق مختلف عليه.',
      'ڕەگی ئاسیایییە، لە ڕێگەی عەرەبی یان فارسییەوە چووەتە تورکی — ڕێگاکە جێی ناکۆکییە.',
    ),
  }),
  helva: conn('حلوى', 'pronunciation', 'certain', { arPron: 'ḥalwā', kuLink: 'حەڵوا' }),
  şerbet: conn('شربة', 'pronunciation', 'certain', { arPron: 'sharba', kuLink: 'شەربەت' }),
  tabut: conn('تابوت', 'pronunciation', 'certain', { arPron: 'tābūt', kuLink: 'تابووت' }),
  nöbet: conn('نوبة', 'pronunciation', 'certain', {
    arPron: 'nawba',
    why: b(
      'الواو صارت ö: نوبة ← nöbet. ومعنى «الدور» باقٍ في اللغتين.',
      '«و» بووە بە ö: نوبة ← nöbet. واتای «نۆرە» لە هەردووکیاندا ماوە.',
    ),
  }),

  /* =================================================================== */
  /* Shared ROOT — the Arabic consonant skeleton is still visible         */
  /*                                                                      */
  /* Turkish and Arabic use different scripts, so "similar spelling" in   */
  /* the literal sense is not a useful category. What IS useful to an     */
  /* Arabic reader is the ROOT: once you see k-t-b inside kitap, kâtip,   */
  /* mektup and kütüphane, four words collapse into one pattern.          */
  /* =================================================================== */

  kâtip: conn('كاتب', 'spelling', 'certain', {
    arPron: 'kātib',
    why: b(
      'من جذر ك-ت-ب نفسه: kitap (كتاب)، kâtip (كاتب)، mektup (مكتوب)، kütüphane (مكتبة). أربع كلمات، جذر واحد.',
      'لە هەمان ڕەگی ک-ت-ب: kitap، kâtip، mektup، kütüphane. چوار وشە، یەک ڕەگ.',
    ),
  }),
  kütüphane: conn('مكتبة', 'spelling', 'certain', {
    arPron: 'maktaba',
    why: b(
      'مركّبة: «كُتُب» العربية + «خانه» الفارسية (بيت)، أي «بيت الكتب». هذا التركيب شائع جداً في التركية.',
      'لێکدراوە: «کتب»ی عەرەبی + «خانە»ی فارسی (ماڵ)، واتە «ماڵی کتێب».',
    ),
  }),
  hüküm: conn('حكم', 'spelling', 'certain', {
    arPron: 'ḥukm',
    why: b(
      'جذر ح-ك-م يعطي في التركية: hüküm (حكم)، hükümet (حكومة)، hâkim (حاكم)، mahkeme (محكمة)، hikmet (حكمة).',
      'ڕەگی ح-ک-م لە تورکیدا دەدات: hüküm، hükümet، hâkim، mahkeme، hikmet.',
    ),
  }),
  hikmet: conn('حكمة', 'spelling', 'certain', { arPron: 'ḥikma' }),
  'âlim': conn('عالِم', 'spelling', 'certain', {
    arPron: 'ʿālim',
    why: b(
      'جذر ع-ل-م: ilim (علم)، âlim (عالم)، muallim (معلّم)، malumat (معلومات). العين تسقط في التركية.',
      'ڕەگی ع-ل-م: ilim، âlim، muallim، malumat. پیتی «ع» لە تورکیدا دەکەوێت.',
    ),
  }),
  muallim: conn('معلّم', 'spelling', 'certain', { arPron: 'muʿallim' }),
  teslim: conn('تسليم', 'spelling', 'certain', {
    arPron: 'taslīm',
    why: b(
      'جذر س-ل-م: selam (سلام)، selamet (سلامة)، teslim (تسليم)، Müslüman (مسلم).',
      'ڕەگی س-ل-م: selam، selamet، teslim، Müslüman.',
    ),
  }),
  selamet: conn('سلامة', 'spelling', 'certain', { arPron: 'salāma' }),
  katil: conn('قاتل', 'spelling', 'certain', {
    arPron: 'qātil',
    why: b(
      'اسم الفاعل العربي على وزن «فاعل» يبقى كما هو في التركية: kâtip، katil، âlim، hâkim.',
      'ناوی کردەی عەرەبی لەسەر کێشی «فاعل» وەک خۆی لە تورکیدا دەمێنێتەوە.',
    ),
  }),
  cebir: conn('جبر', 'spelling', 'certain', {
    arPron: 'jabr',
    why: b(
      'من «الجبر» في كتاب الخوارزمي — ومنه جاءت algebra في الإنجليزية أيضاً.',
      'لە «جبر»ی کتێبی خوارزمییەوە — لەوێشەوە algebraی ئینگلیزی هاتووە.',
    ),
  }),

  /* =================================================================== */
  /* Meaning survived, the SOUND was reshaped                             */
  /*                                                                      */
  /* Turkish has neither hamza nor ʿayn, so the Arabic tafʿīl pattern     */
  /* collapses into a plain te- syllable. Once a student sees that, a     */
  /* whole class of words opens at once.                                  */
  /* =================================================================== */

  tesir: conn('تأثير', 'semantic', 'certain', {
    arPron: 'taʾthīr',
    why: b(
      'الهمزة لا وجود لها في التركية، فصار «تأثير» ← tesir. لاحظ النمط: كثير من صيغة «تفعيل» تصير te- في التركية.',
      'هەمزە لە تورکیدا نییە، بۆیە «تأثير» بووە tesir. سەرنج بدە: زۆرێک لە کێشی «تفعیل» دەبێت بە te-.',
    ),
  }),
  tesis: conn('تأسيس', 'semantic', 'certain', { arPron: 'taʾsīs' }),
  'tesadüf': conn('تصادف', 'semantic', 'certain', { arPron: 'taṣāduf' }),
  tahmin: conn('تخمين', 'semantic', 'certain', { arPron: 'takhmīn' }),
  tespit: conn('تثبيت', 'semantic', 'certain', {
    arPron: 'tathbīt',
    why: b(
      'الثاء العربية ليست في التركية فتصير s: تثبيت ← tespit.',
      '«ث»ی عەرەبی لە تورکیدا نییە و دەبێت بە s: تثبیت ← tespit.',
    ),
  }),
  tercih: conn('ترجيح', 'semantic', 'certain', { arPron: 'tarjīḥ' }),
  mahsul: conn('محصول', 'semantic', 'certain', { arPron: 'maḥṣūl' }),
  'mühür': conn('مهر', 'semantic', 'likely', {
    arPron: 'muhr',
    why: b(
      'قد تكون وصلت عبر الفارسية، لكن الأصل السامي واضح والمعنى واحد.',
      'لەوانەیە لە ڕێگەی فارسییەوە هاتبێت، بەڵام ڕەگە سامییەکە ڕوونە و واتاکە یەکە.',
    ),
  }),
  'mühim': conn('مهمّ', 'semantic', 'certain', { arPron: 'muhimm' }),
  'fıkra': conn('فقرة', 'semantic', 'certain', {
    arPron: 'faqra',
    why: b(
      'في العربية «فقرة» من النصّ. احتفظت التركية بهذا المعنى في القانون، وأضافت معنى «النكتة» في الحديث اليومي.',
      'لە عەرەبیدا «بڕگە»ی دەقە. تورکی ئەم واتایەی لە یاسادا پاراستووە و واتای «گاڵتە»ی زیادکردووە.',
    ),
  }),

  /* =================================================================== */
  /* C1 / C1+ — the register where Arabic-derived words are DENSEST       */
  /*                                                                      */
  /* The highest levels of Turkish are where an Arabic reader gains most.  */
  /* Everyday Turkish has largely replaced its Arabic vocabulary with      */
  /* Turkicised coinages, but formal, literary and legal registers kept    */
  /* theirs - so a C1 text is often MORE transparent to an Arabic speaker  */
  /* than an A2 conversation.                                             */
  /* =================================================================== */

  'müphem': conn('مبهم', 'direct', 'certain', { arPron: 'mubham' }),
  sarih: conn('صريح', 'direct', 'certain', { arPron: 'ṣarīḥ' }),
  tenakuz: conn('تناقض', 'direct', 'certain', { arPron: 'tanāquḍ' }),
  'mübalağa': conn('مبالغة', 'direct', 'certain', { arPron: 'mubālagha' }),
  istihza: conn('استهزاء', 'direct', 'certain', { arPron: 'istihzāʾ' }),
  tevazu: conn('تواضع', 'direct', 'certain', { arPron: 'tawāḍuʿ' }),
  ihtiyat: conn('احتياط', 'direct', 'certain', { arPron: 'iḥtiyāṭ' }),
  'tefekkür': conn('تفكّر', 'direct', 'certain', { arPron: 'tafakkur' }),
  teenni: conn('تأنّي', 'direct', 'certain', {
    arPron: 'taʾannī',
    why: b(
      'الهمزة سقطت كعادة التركية: تأنّي ← teenni.',
      'هەمزە کەوتووە وەک نەریتی تورکی: تأنّي ← teenni.',
    ),
  }),
  'zımnen': conn('ضمناً', 'direct', 'certain', { arPron: 'ḍimnan' }),
  'muğlak': conn('مغلق', 'borrowing', 'likely', {
    arPron: 'mughlaq',
    why: b(
      'من «مغلق» أي المقفل؛ صارت في التركية «الغامض» — ما أُغلق على الفهم.',
      'لە «مغلق»ـەوە واتە داخراو؛ لە تورکیدا بووە بە «ناڕوون» — ئەوەی لەبەردەم تێگەیشتندا داخراوە.',
    ),
  }),
  'tezahür': conn('تظاهر', 'borrowing', 'certain', {
    arPron: 'taẓāhur',
    why: b(
      'في العربية الحديثة «تظاهر» يعني التمثيل أو الخروج في مظاهرة؛ وفي التركية «التجلّي» و«الظهور».',
      'لە عەرەبی نوێدا «تظاهر» واتە خۆنواندن یان خۆپیشاندان؛ لە تورکیدا واتە «دەرکەوتن».',
    ),
  }),
  telakki: conn('تلقّي', 'borrowing', 'certain', {
    arPron: 'talaqqī',
    why: b(
      'في العربية «التلقّي» هو الاستقبال؛ استقرّت في التركية بمعنى «التصوّر» أو «الفهم».',
      'لە عەرەبیدا «تلقّي» واتە وەرگرتن؛ لە تورکیدا بووە بە «تێگەیشتن» یان «بۆچوون».',
    ),
  }),
  'sükûnet': conn('سكون', 'borrowing', 'likely', {
    arPron: 'sukūn',
    why: b(
      'من «السكون»؛ التركية اشتقّت منها اسماً على وزن فُعُولة يفيد الحالة.',
      'لە «سکون»ـەوە؛ تورکی ناوێکی لێ داڕشتووە کە دۆخ دەگەیەنێت.',
    ),
  }),

  /* =================================================================== */
  /* ⚠️  FALSE FRIENDS — similar form, different meaning                  */
  /* =================================================================== */

  şehir: conn('شهر', 'false-friend', 'surface', {
    arPron: 'shahr',
    means: b('الشهر من شهور السنة.', 'مانگێک لە مانگەکانی ساڵ.'),
    why: b(
      '⚠️ شبه صوتي فقط. şehir التركية فارسية الأصل (شهر = مدينة بالفارسية) ولا علاقة لها بـ «شهر» العربية.',
      '⚠️ تەنها لێکچوونی دەنگییە. şehirـی تورکی ڕەگی فارسییە (شهر = شار بە فارسی) و پەیوەندی بە «شهر»ی عەرەبییەوە نییە.',
    ),
  }),
  hala: conn('خالة', 'false-friend', 'certain', {
    arPron: 'khāla',
    means: b('الخالة: أخت الأمّ.', 'پوور: خوشکی دایک.'),
    why: b(
      '⚠️ مأخوذة من «خالة» فعلاً، لكن المعنى انقلب: hala في التركية أخت الأب، وأخت الأمّ هي teyze.',
      '⚠️ بەڕاستی لە «خالة»ـەوە وەرگیراوە، بەڵام واتاکە هەڵگەڕاوەتەوە: hala لە تورکیدا خوشکی باوکە، خوشکی دایکیش teyzeـە.',
    ),
  }),
  fakat: conn('فقط', 'false-friend', 'certain', {
    arPron: 'faqaṭ',
    means: b('فقط: لا غير، حصراً.', 'تەنها: بەس، نەک زیاتر.'),
    why: b(
      '⚠️ من أخطر الأخطاء الشائعة. fakat في التركية «لكن»، وليست «فقط». «فقط» بالتركية sadece.',
      '⚠️ لە هەڵە باوەکانی مەترسیدارە. fakat لە تورکیدا «بەڵام»ە، نەک «تەنها». «تەنها» بە تورکی sadeceـە.',
    ),
  }),
  asla: conn('أصلاً', 'false-friend', 'certain', {
    arPron: 'aṣlan',
    means: b('أصلاً: في الأساس، من البداية.', 'ئەسڵەن: لە بنەڕەتدا، لە سەرەتاوە.'),
    why: b(
      '⚠️ في التركية asla تعني «أبداً» وتُستعمل مع النفي: Asla gitmem = لن أذهب أبداً.',
      '⚠️ لە تورکیدا asla واتە «هەرگیز» و لەگەڵ نەفیدا بەکاردێت: Asla gitmem = هەرگیز ناچم.',
    ),
  }),
  zaten: conn('ذاتاً', 'false-friend', 'certain', {
    arPron: 'dhātan',
    means: b('ذاتاً: بنفسه، في جوهره.', 'بە خۆی، لە ناخیدا.'),
    why: b(
      '⚠️ zaten التركية تعني «على أي حال» أو «أصلاً كان كذلك»، لا «بذاته».',
      '⚠️ zatenـی تورکی واتە «بەهەرحاڵ» یان «لە بنەڕەتدا وابوو»، نەک «بە خۆی».',
    ),
  }),
  misafir: conn('مسافر', 'false-friend', 'certain', {
    arPron: 'musāfir',
    means: b('المسافر: من يقطع مسافة، الراحل.', 'گەشتیار: ئەوەی ڕێگا دەبڕێت.'),
    why: b(
      '⚠️ عربية الأصل فعلاً، لكن معناها في التركية استقرّ على «الضيف»، لا «المسافر».',
      '⚠️ بەڕاستی ڕەگی عەرەبییە، بەڵام لە تورکیدا واتاکەی بووە بە «میوان»، نەک «گەشتیار».',
    ),
  }),
  vücut: conn('وجود', 'false-friend', 'certain', {
    arPron: 'wujūd',
    means: b('الوجود: الكينونة، أن يكون الشيء موجوداً.', 'بوون: ئەوەی شت هەبێت.'),
    why: b(
      '⚠️ من الجذر نفسه، لكن vücut في التركية هي «الجسم» تحديداً. «الوجود» الفلسفي بالتركية varlık.',
      '⚠️ لە هەمان ڕەگەوە، بەڵام vücut لە تورکیدا بە تایبەتی «لەش»ە. «بوون»ی فەلسەفی بە تورکی varlıkـە.',
    ),
  }),
  millet: conn('ملّة', 'false-friend', 'certain', {
    arPron: 'milla',
    means: b('الملّة: الجماعة الدينية، الدين.', 'ملەت: کۆمەڵی ئایینی، ئایین.'),
    why: b(
      '⚠️ في التركية الحديثة millet هي «الأمة» بالمعنى القومي، لا الطائفة الدينية.',
      '⚠️ لە تورکی نوێدا millet واتە «نەتەوە» بە واتای نەتەوەیی، نەک کۆمەڵی ئایینی.',
    ),
  }),
  memleket: conn('مملكة', 'false-friend', 'certain', {
    arPron: 'mamlaka',
    means: b('المملكة: دولة يحكمها ملك.', 'شانشین: دەوڵەتێک کە پاشا حوکمی دەکات.'),
    why: b(
      '⚠️ memleket في التركية «البلد» أو «مسقط الرأس»، ولا تعني الحكم الملكي إطلاقاً.',
      '⚠️ memleket لە تورکیدا «وڵات» یان «شوێنی لەدایکبوون»ە، هیچ پەیوەندی بە پاشایەتییەوە نییە.',
    ),
  }),
  kaza: conn('قضاء', 'false-friend', 'certain', {
    arPron: 'qaḍāʾ',
    means: b('القضاء: الحكم، السلطة القضائية، وأيضاً القدر.', 'دادوەری: حوکم، دەسەڵاتی دادوەری، هەروەها چارەنووس.'),
    why: b(
      '⚠️ kaza في التركية «الحادث» (trafik kazası)، وأيضاً وحدة إدارية. القضاء بالتركية yargı.',
      '⚠️ kaza لە تورکیدا «ڕووداو»ە (trafik kazası)، هەروەها یەکەیەکی کارگێڕی. دادوەری بە تورکی yargıـە.',
    ),
  }),
  sohbet: conn('صحبة', 'false-friend', 'certain', {
    arPron: 'ṣuḥba',
    means: b('الصحبة: الرفقة، المصاحبة.', 'هاوڕێیەتی، بەیەکەوەبوون.'),
    why: b(
      '⚠️ sohbet في التركية هي «الحديث الودّي» نفسه، لا العلاقة بين الأصحاب.',
      '⚠️ sohbet لە تورکیدا خودی «گفتوگۆی دۆستانە»یە، نەک پەیوەندی نێوان هاوڕێیان.',
    ),
  }),
  muhabbet: conn('محبة', 'false-friend', 'certain', {
    arPron: 'maḥabba',
    means: b('المحبة: الحبّ والمودّة.', 'خۆشەویستی و سۆز.'),
    why: b(
      '⚠️ في التركية اليومية muhabbet هي «الدردشة» و«الجلسة الودّية»، لا الحبّ. الحبّ sevgi أو aşk.',
      '⚠️ لە تورکی ڕۆژانەدا muhabbet واتە «گفتوگۆ» و «دانیشتنی دۆستانە»، نەک خۆشەویستی. خۆشەویستی sevgi یان aşkـە.',
    ),
  }),
  keyif: conn('كيف', 'false-friend', 'certain', {
    arPron: 'kayf',
    means: b('كيف: أداة الاستفهام «how».', 'چۆن: ئامرازی پرسیار.'),
    why: b(
      '⚠️ keyif التركية من «الكيف» بالمعنى الكلاسيكي (الحال، اللذّة) لا من أداة الاستفهام. تعني المزاج الطيّب.',
      '⚠️ keyifـی تورکی لە «کەیف»ی کلاسیکییەوەیە (دۆخ، خۆشی)، نەک لە ئامرازی پرسیارەوە. واتای کەیفی خۆش دەدات.',
    ),
  }),
  fena: conn('فناء', 'false-friend', 'likely', {
    arPron: 'fanāʾ',
    means: b('الفناء: الزوال والانعدام، وفي التصوّف فناء النفس.', 'لەناوچوون؛ لە تەسەوفدا فەنای نەفس.'),
    why: b(
      '⚠️ fena في التركية صفة يومية تعني «سيّئ» ببساطة.',
      '⚠️ fena لە تورکیدا ئاوەڵناوێکی ڕۆژانەیە کە بە سادەیی واتای «خراپ» دەدات.',
    ),
  }),
  daire: conn('دائرة', 'false-friend', 'certain', {
    arPron: 'dāʾira',
    means: b('الدائرة: الشكل الهندسي، وأيضاً القسم الإداري.', 'بازنە: شێوەی ئەندازەیی، هەروەها بەشی کارگێڕی.'),
    why: b(
      '⚠️ المعنى الأشيع في التركية اليوم هو «الشقّة السكنية»، وهو معنى لا وجود له في العربية.',
      '⚠️ باوترین واتا لە تورکیدا ئەمڕۆ «شوقە»یە، واتایەک کە لە عەرەبیدا بوونی نییە.',
    ),
  }),
  vasat: conn('وسط', 'false-friend', 'certain', {
    arPron: 'wasaṭ',
    means: b('الوسط: المنتصف، ما بين طرفين.', 'ناوەڕاست: ئەوەی لە نێوان دوو لاوەیە.'),
    why: b(
      '⚠️ vasat في التركية تحمل حكماً سلبياً: «متوسّط» بمعنى «ضعيف نوعاً ما».',
      '⚠️ vasat لە تورکیدا واتایەکی نەرێنی هەیە: «مامناوەند» بە واتای «لاواز».',
    ),
  }),
  muhit: conn('محيط', 'false-friend', 'certain', {
    arPron: 'muḥīṭ',
    means: b('المحيط: البحر الأعظم، وأيضاً ما يحيط بالشيء.', 'ئۆقیانووس؛ هەروەها ئەوەی دەوری شت دەدات.'),
    why: b(
      '⚠️ muhit في التركية «الوسط الاجتماعي» أو «الدائرة المحيطة بالشخص»، لا المحيط المائي. المحيط okyanus.',
      '⚠️ muhit لە تورکیدا «ژینگەی کۆمەڵایەتی»یە، نەک ئۆقیانووس. ئۆقیانووس okyanusـە.',
    ),
  }),
  estağfurullah: conn('أستغفر الله', 'false-friend', 'certain', {
    arPron: 'astaghfiru llāh',
    means: b('أستغفر الله: أطلب المغفرة من الله.', 'داوای لێبوردن لە خودا دەکەم.'),
    why: b(
      '⚠️ في التركية جواب مهذّب على المدح أو الشكر: «لا شكر على واجب». ليست استغفاراً دينياً في هذا السياق.',
      '⚠️ لە تورکیدا وەڵامێکی ڕێزدارانەیە بۆ ستایش یان سوپاس: «شایانی باسکردن نییە». لەم دۆخەدا داوای لێبوردنی ئایینی نییە.',
    ),
  }),
  /* ================================================================== */
  /* Phase 7 — recognisable at sight                                     */
  /* ================================================================== */

  izin: conn('إذن', 'direct', 'certain', { arPron: 'iḏn', kuLink: 'مۆڵەت' }),
  fark: conn('فرق', 'direct', 'certain', { arPron: 'farq', kuLink: 'جیاوازی' }),
  delil: conn('دليل', 'direct', 'certain', { arPron: 'dalīl', kuLink: 'بەڵگە' }),
  ceza: conn('جزاء', 'direct', 'certain', { arPron: 'jazāʾ', kuLink: 'سزا' }),
  dava: conn('دعوى', 'direct', 'certain', { arPron: 'daʿwā', kuLink: 'داوا' }),
  saha: conn('ساحة', 'direct', 'certain', { arPron: 'sāḥa' }),
  seviye: conn('سويّة', 'direct', 'certain', { arPron: 'sawiyya' }),
  'şube': conn('شعبة', 'direct', 'certain', { arPron: 'šuʿba' }),
  hisse: conn('حصّة', 'direct', 'certain', { arPron: 'ḥiṣṣa' }),
  husus: conn('خصوص', 'direct', 'certain', { arPron: 'ḫuṣūṣ' }),
  vesile: conn('وسيلة', 'direct', 'certain', { arPron: 'wasīla' }),
  mevcut: conn('موجود', 'direct', 'certain', { arPron: 'mawǧūd' }),
  'müzakere': conn('مذاكرة', 'direct', 'certain', { arPron: 'muḏākara' }),
  itiraz: conn('اعتراض', 'direct', 'certain', { arPron: 'iʿtirāḍ' }),
  temyiz: conn('تمييز', 'direct', 'certain', { arPron: 'tamyīz' }),
  muhakeme: conn('محاكمة', 'direct', 'certain', { arPron: 'muḥākama' }),
  'içtihat': conn('اجتهاد', 'direct', 'certain', { arPron: 'iǧtihād' }),
  'mütalaa': conn('مطالعة', 'direct', 'certain', { arPron: 'muṭālaʿa' }),
  mahremiyet: conn('محرميّة', 'direct', 'certain', { arPron: 'maḥramiyya' }),
  istikrar: conn('استقرار', 'direct', 'certain', { arPron: 'istiqrār' }),
  'müdahale': conn('مداخلة', 'direct', 'certain', { arPron: 'mudāḫala' }),
  tedbir: conn('تدبير', 'direct', 'certain', { arPron: 'tadbīr' }),
  tedarik: conn('تدارك', 'direct', 'certain', { arPron: 'tadāruk' }),
  dikkat: conn('دقّة', 'direct', 'certain', { arPron: 'diqqa' }),
  'şüphe': conn('شبهة', 'direct', 'certain', { arPron: 'šubha' }),
  'ihtiyaç': conn('احتياج', 'direct', 'certain', { arPron: 'iḥtiyāǧ' }),
  miktar: conn('مقدار', 'direct', 'certain', { arPron: 'miqdār' }),
  terfi: conn('ترفيع', 'direct', 'certain', { arPron: 'tarfīʿ' }),
  'teşhis': conn('تشخيص', 'direct', 'certain', { arPron: 'tašḫīṣ' }),
  muhabir: conn('مخابر', 'direct', 'certain', { arPron: 'muḫābir' }),
  'kayıt': conn('قيد', 'direct', 'certain', { arPron: 'qayd' }),
  'harç': conn('خرج', 'direct', 'certain', { arPron: 'ḫarǧ' }),
  'ihracat': conn('إخراجات', 'direct', 'certain', { arPron: 'iḫrāǧāt' }),
  ithalat: conn('إدخالات', 'direct', 'certain', { arPron: 'idḫālāt' }),
  maliyet: conn('مالية', 'direct', 'certain', { arPron: 'māliyya' }),
  'mükellefiyet': conn('مكلّفية', 'direct', 'certain', { arPron: 'mukallafiyya' }),
  muafiyet: conn('معافية', 'direct', 'likely', { arPron: 'muʿāfiya' }),
  ihmal: conn('إهمال', 'direct', 'certain', { arPron: 'ihmāl' }),
  emsal: conn('أمثال', 'borrowing', 'certain', {
    arPron: 'amṯāl',
    why: b(
      'جمع «مثل» في العربية؛ وفي التركية تُعامل مفرداً بمعنى السابقة القضائية.',
      'لە عەرەبیدا کۆیە؛ لە تورکیدا وەک تاک بەکاردێت.',
    ),
  }),
  'tebliğ': conn('تبليغ', 'direct', 'certain', { arPron: 'tablīġ' }),
  muvafakat: conn('موافقة', 'direct', 'certain', { arPron: 'muwāfaqa' }),
  muhteva: conn('محتوى', 'direct', 'certain', { arPron: 'muḥtawā' }),
  'münasebet': conn('مناسبة', 'direct', 'certain', { arPron: 'munāsaba' }),
  mahiyet: conn('ماهيّة', 'direct', 'certain', { arPron: 'māhiyya' }),
  idrak: conn('إدراك', 'direct', 'certain', { arPron: 'idrāk' }),
  vicdan: conn('وجدان', 'direct', 'certain', { arPron: 'wiǧdān', kuLink: 'ویژدان' }),
  tasavvur: conn('تصوّر', 'direct', 'certain', { arPron: 'taṣawwur' }),
  'tahayyül': conn('تخيّل', 'direct', 'certain', { arPron: 'taḫayyul' }),
  basiret: conn('بصيرة', 'direct', 'certain', { arPron: 'baṣīra' }),
  feraset: conn('فراسة', 'direct', 'certain', { arPron: 'firāsa' }),
  'külli': conn('كلّي', 'direct', 'certain', { arPron: 'kullī' }),
  meşruiyet: conn('مشروعية', 'direct', 'certain', { arPron: 'mašrūʿiyya' }),
  'meşru': conn('مشروع', 'direct', 'certain', { arPron: 'mašrūʿ' }),
  tasdik: conn('تصديق', 'direct', 'certain', { arPron: 'taṣdīq' }),
  vefat: conn('وفاة', 'direct', 'certain', { arPron: 'wafāt' }),
  kudret: conn('قدرة', 'direct', 'certain', { arPron: 'qudra' }),
  'kısım': conn('قسم', 'direct', 'certain', { arPron: 'qism' }),
  taksim: conn('تقسيم', 'direct', 'certain', { arPron: 'taqsīm' }),
  imar: conn('إعمار', 'direct', 'certain', { arPron: 'iʿmār' }),
  tabir: conn('تعبير', 'direct', 'certain', { arPron: 'taʿbīr' }),
  'mübarek': conn('مبارك', 'direct', 'certain', { arPron: 'mubārak', kuLink: 'پیرۆز' }),
  helal: conn('حلال', 'direct', 'certain', { arPron: 'ḥalāl', kuLink: 'حەڵاڵ' }),
  cenaze: conn('جنازة', 'direct', 'certain', { arPron: 'ǧanāza' }),
  taziye: conn('تعزية', 'direct', 'certain', { arPron: 'taʿziya' }),
  tebrik: conn('تبريك', 'direct', 'certain', { arPron: 'tabrīk' }),
  sicil: conn('سجل', 'direct', 'certain', { arPron: 'siǧill' }),
  'şikâyet': conn('شكاية', 'direct', 'certain', { arPron: 'šikāya' }),
  evrak: conn('أوراق', 'borrowing', 'certain', {
    arPron: 'awrāq',
    why: b(
      'جمع في العربية؛ وفي التركية اسم جامع مفرد: «evrak hazır».',
      'لە عەرەبیدا کۆیە؛ لە تورکیدا ناوێکی کۆگرتوو.',
    ),
  }),
  'kıyas': conn('قياس', 'direct', 'certain', { arPron: 'qiyās' }),
  hiciv: conn('هجو', 'direct', 'certain', { arPron: 'haǧw' }),
  ima: conn('إيماء', 'direct', 'certain', { arPron: 'īmāʾ' }),
  makbuz: conn('مقبوض', 'borrowing', 'certain', {
    arPron: 'maqbūḍ',
    why: b(
      'اسم مفعول في العربية؛ وفي التركية صار الإيصال نفسه.',
      'لە عەرەبیدا ناوی بەرکارە؛ لە تورکیدا بووە خودی وەسڵ.',
    ),
  }),
  taksit: conn('تقسيط', 'direct', 'certain', { arPron: 'taqsīṭ' }),
  iade: conn('إعادة', 'direct', 'certain', { arPron: 'iʿāda' }),
  kasap: conn('قصّاب', 'direct', 'certain', { arPron: 'qaṣṣāb' }),
  levha: conn('لوحة', 'direct', 'certain', { arPron: 'lawḥa' }),
  itibar: conn('اعتبار', 'borrowing', 'certain', {
    arPron: 'iʿtibār',
    why: b(
      'في العربية الأخذ بالحسبان؛ وفي التركية غلبت «السمعة».',
      'لە تورکیدا زیاتر «ناوبانگ».',
    ),
  }),
  iktidar: conn('اقتدار', 'borrowing', 'certain', {
    arPron: 'iqtidār',
    why: b(
      'في العربية القدرة عموماً؛ وفي التركية «السلطة الحاكمة» تحديداً.',
      'لە تورکیدا «دەسەڵاتی حوکمڕان».',
    ),
  }),
  muhalefet: conn('مخالفة', 'borrowing', 'certain', {
    arPron: 'muḫālafa',
    why: b(
      'في العربية المضادّة عموماً؛ وفي التركية المعارضة السياسية.',
      'لە تورکیدا ئۆپۆزسیۆنی سیاسی.',
    ),
  }),
  'tahakküm': conn('تحكّم', 'borrowing', 'certain', {
    arPron: 'taḥakkum',
    why: b(
      'اكتسبت في التركية شحنة سلبية: التسلّط لا مجرّد السيطرة.',
      'لە تورکیدا باری نەرێنی وەرگرتووە.',
    ),
  }),
  'teşvik': conn('تشويق', 'borrowing', 'certain', {
    arPron: 'tašwīq',
    why: b(
      'في العربية إثارة الرغبة؛ وفي التركية الحفز الاقتصادي والدعم.',
      'لە تورکیدا هاندانی ئابووری.',
    ),
  }),
  'teşebbüs': conn('تشبّث', 'borrowing', 'certain', {
    arPron: 'tašabbuṯ',
    why: b(
      'في العربية التمسّك؛ وفي التركية المبادرة والشروع.',
      'لە تورکیدا دەستپێکردن.',
    ),
  }),
  'teamül': conn('تعامل', 'borrowing', 'certain', {
    arPron: 'taʿāmul',
    why: b(
      'في العربية التبادل؛ وفي التركية «العُرف المتّبع» في القانون والإدارة.',
      'لە تورکیدا «نەریتی پەیڕەوکراو».',
    ),
  }),
  mevzuat: conn('موضوعات', 'borrowing', 'certain', {
    arPron: 'mawḍūʿāt',
    why: b(
      'في العربية جمع «موضوع»؛ وفي التركية مجموع التشريعات النافذة.',
      'لە تورکیدا کۆی یاساکان.',
    ),
  }),
  'tazminat': conn('تضمينات', 'direct', 'certain', { arPron: 'taḍmīnāt' }),
  heyecan: conn('هيجان', 'borrowing', 'certain', {
    arPron: 'hayaǧān',
    why: b(
      '⚠️ «هيجان» العربية اضطراب عنيف وسلبي غالباً؛ و«heyecan» التركية حماس إيجابي.',
      '⚠️ لە تورکیدا زۆرجار ئەرێنییە.',
    ),
  }),
  huzur: conn('حضور', 'borrowing', 'certain', {
    arPron: 'ḥuḍūr',
    why: b(
      '⚠️ «حضور» العربية المجيء؛ و«huzur» التركية السكينة والطمأنينة. المسافة كبيرة.',
      '⚠️ لە تورکیدا ئاسوودەیی.',
    ),
  }),
  taviz: conn('تعويض', 'borrowing', 'certain', {
    arPron: 'taʿwīḍ',
    why: b(
      '⚠️ «تعويض» العربية بدل مالي؛ و«taviz» التركية تنازل في التفاوض.',
      '⚠️ لە تورکیدا دەستبەرداربوون.',
    ),
  }),
  sadakat: conn('صداقة', 'borrowing', 'certain', {
    arPron: 'ṣadāqa',
    why: b(
      '⚠️ «صداقة» العربية الصحبة؛ و«sadakat» التركية الولاء والإخلاص.',
      '⚠️ لە تورکیدا دڵسۆزی.',
    ),
  }),
  tamir: conn('تعمير', 'borrowing', 'certain', {
    arPron: 'taʿmīr',
    why: b(
      '«تعمير» العربية البناء؛ و«tamir» التركية التصليح تحديداً.',
      'لە تورکیدا چاککردنەوە.',
    ),
  }),
  teklif: conn('تكليف', 'borrowing', 'certain', {
    arPron: 'taklīf',
    why: b(
      '«تكليف» العربية إلزام بمهمّة؛ و«teklif» التركية عرض أو اقتراح.',
      'لە تورکیدا پێشنیار.',
    ),
  }),

  /* ---------------- function words: the biggest traps ---------------- */

  'âdet': conn('عادة', 'direct', 'certain', { arPron: 'ʿāda', kuLink: 'عادەت' }),
  adet: conn('عدد', 'false-friend', 'certain', {
    arPron: 'ʿadad',
    means: b(
      '«عدد» في العربية = الرقم أو الكمّية.',
      '«عدد» لە عەرەبیدا ژمارەیە.',
    ),
    why: b(
      '⚠️ التركية تفرّق بين «adet» (عدد، قطعة) و«âdet» (عادة) بالمدّة وحدها — والجذران مختلفان.',
      '⚠️ تورکی بە درێژی جیایان دەکاتەوە.',
    ),
  }),
  esas: conn('أساس', 'direct', 'certain', { arPron: 'asās', kuLink: 'بنەما' }),
  'hâl': conn('حال', 'direct', 'certain', { arPron: 'ḥāl', kuLink: 'حاڵ' }),
  vefa: conn('وفاء', 'direct', 'certain', { arPron: 'wafāʾ' }),
  nefret: conn('نفرة', 'direct', 'certain', { arPron: 'nafra' }),
  samimiyet: conn('صميمية', 'direct', 'likely', { arPron: 'ṣamīmiyya' }),
  ikramiye: conn('إكرامية', 'direct', 'certain', { arPron: 'ikrāmiyya' }),
  'kıdem': conn('قِدَم', 'direct', 'certain', { arPron: 'qidam' }),
  fesih: conn('فسخ', 'direct', 'certain', { arPron: 'fasḫ' }),
  ihlal: conn('إخلال', 'direct', 'certain', { arPron: 'iḫlāl' }),
  safsata: conn('سفسطة', 'direct', 'certain', { arPron: 'safsaṭa' }),
  tahvil: conn('تحويل', 'borrowing', 'certain', {
    arPron: 'taḥwīl',
    why: b(
      'في التركية غلب المعنى المالي: السند.',
      'لە تورکیدا واتای دارایی زاڵە.',
    ),
  }),
  mevzu: conn('موضوع', 'direct', 'certain', { arPron: 'mawḍūʿ' }),
  vaziyet: conn('وضعية', 'direct', 'certain', { arPron: 'waḍʿiyya' }),
  seyirci: conn('سائر', 'borrowing', 'likely', {
    arPron: 'sāʾir',
    why: b(
      'هجين: «seyir» عربية مع لاحقة الفاعل التركية «-ci».',
      'تێکەڵە: «seyir» + «-ci».',
    ),
  }),
  'vatandaş': conn('وطن', 'borrowing', 'certain', {
    arPron: 'waṭan',
    why: b(
      'هجين شفّاف: جذر «وطن» العربي مع لاحقة المشاركة التركية «-daş».',
      'تێکەڵەیەکی ڕوون: «وطن» + «-daş».',
    ),
  }),
  temsilci: conn('تمثيل', 'borrowing', 'certain', {
    arPron: 'tamṯīl',
    why: b(
      'هجين: «temsil» عربية مع لاحقة الفاعل التركية.',
      'تێکەڵە: «temsil» + «-ci».',
    ),
  }),
  'farkındalık': conn('فرق', 'borrowing', 'certain', {
    arPron: 'farq',
    why: b(
      'الجذر عربي والبناء تركي بالكامل: fark → farkında → farkındalık.',
      'ڕەگ عەرەبی و پێکهاتە تورکی.',
    ),
  }),
  'imkânsız': conn('إمكان', 'borrowing', 'certain', {
    arPron: 'imkān',
    why: b(
      'هجين: «imkân» عربية مع لاحقة النفي التركية «-sız».',
      'تێکەڵە: «imkân» + «-sız».',
    ),
  }),
  'tarafsız': conn('طرف', 'borrowing', 'certain', {
    arPron: 'ṭaraf',
    why: b(
      'هجين: «taraf» عربية مع «-sız» التركية — «بلا طرف» = محايد.',
      'تێکەڵە: «taraf» + «-sız».',
    ),
  }),
  faiz: conn('فائض', 'borrowing', 'likely', {
    arPron: 'fāʾiḍ',
    why: b(
      'الاشتقاق مرجّح لا قاطع؛ والمعنى المالي (الفائدة) تركي متأخّر.',
      'وەرگرتنەکە گریمانەیە نەک دڵنیایی تەواو.',
    ),
  }),

  /* ---------------- Phase 7c: closing the origin/connection gap ------- */

  cemaat: conn('جماعة', 'direct', 'certain', { arPron: 'ǧamāʿa' }),
  'sıhhat': conn('صحّة', 'direct', 'certain', { arPron: 'ṣiḥḥa', kuLink: 'تەندروستی' }),
  ikamet: conn('إقامة', 'direct', 'certain', { arPron: 'iqāma' }),
  acil: conn('عاجل', 'direct', 'certain', { arPron: 'ʿāǧil' }),
  'vakıf': conn('وقف', 'direct', 'certain', { arPron: 'waqf', kuLink: 'وەقف' }),
  'teemmül': conn('تأمّل', 'direct', 'certain', { arPron: 'taʾammul' }),
  mutlak: conn('مطلق', 'direct', 'certain', { arPron: 'muṭlaq' }),
  'ömür': conn('عمر', 'direct', 'certain', { arPron: 'ʿumr' }),
  nefes: conn('نفس', 'direct', 'certain', { arPron: 'nafas' }),
  'şemsiye': conn('شمسيّة', 'direct', 'certain', { arPron: 'šamsiyya' }),
  'mülteci': conn('ملتجئ', 'direct', 'certain', { arPron: 'multaǧiʾ' }),
  teslimat: conn('تسليمات', 'direct', 'certain', { arPron: 'taslīmāt' }),
  ihtilaf: conn('اختلاف', 'direct', 'certain', { arPron: 'iḫtilāf' }),
  tesisat: conn('تأسيسات', 'borrowing', 'certain', {
    arPron: 'taʾsīsāt',
    why: b(
      'في التركية تخصّصت في تمديدات الماء والكهرباء داخل المبنى.',
      'لە تورکیدا تایبەتە بە بۆری و وایەری خانوو.',
    ),
  }),
  tasarruf: conn('تصرّف', 'false-friend', 'certain', {
    arPron: 'taṣarruf',
    means: b(
      '«تصرّف» في العربية = السلوك والتدبير.',
      '«تصرف» لە عەرەبیدا واتای ڕەفتار دەدات.',
    ),
    why: b(
      '⚠️ «tasarruf» التركية اليومية = التوفير والادّخار. المعنى القانوني (التصرّف في مال) باقٍ لكنه أضيق كثيراً.',
      '⚠️ لە تورکیدا واتای پاشەکەوت دەدات.',
    ),
  }),
  /* ================================================================== */
  /* Phase 7d — the literary and academic register                       */
  /* ================================================================== */

  /* An Arabic reader gets this whole layer almost free. These are the
     words the 1930s reform never managed to replace in writing. */

  'mülakat': conn('مقابلة', 'borrowing', 'certain', {
    arPron: 'muqābala',
    why: b(
      'في العربية «مقابلة» عامّة؛ وفي التركية تخصّصت في مقابلة العمل والامتحان الشفوي.',
      'لە تورکیدا تایبەتە بە چاوپێکەوتنی کار.',
    ),
  }),
  mesai: conn('مساعي', 'borrowing', 'likely', {
    arPron: 'masāʿī',
    why: b(
      'في العربية جمع «مسعى»؛ وفي التركية صارت «ساعات الدوام».',
      'لە تورکیدا بووە «کاتی کار».',
    ),
  }),
  nispeten: conn('نسبةً', 'direct', 'certain', { arPron: 'nisbatan' }),
  'teşkilatlanma': conn('تشكيلات', 'borrowing', 'certain', {
    arPron: 'taškīlāt',
    why: b(
      'هجين: «teşkilat» عربية مع لواحق تركية خالصة (-lan-ma).',
      'تێکەڵە: «teşkilat» + پاشگری تورکی.',
    ),
  }),
  'kalıp': conn('قالب', 'direct', 'certain', { arPron: 'qālib' }),
  gurbet: conn('غربة', 'direct', 'certain', { arPron: 'ġurba', kuLink: 'غەریبی' }),
  vuslat: conn('وصلة', 'direct', 'certain', { arPron: 'wuṣla' }),
  mecaz: conn('مجاز', 'direct', 'certain', { arPron: 'maǧāz' }),
  istiare: conn('استعارة', 'direct', 'certain', { arPron: 'istiʿāra' }),
  'üslup': conn('أسلوب', 'direct', 'certain', { arPron: 'uslūb' }),
  kinaye: conn('كناية', 'direct', 'certain', { arPron: 'kināya' }),
  'haddizatında': conn('حدّ ذاته', 'direct', 'certain', { arPron: 'ḥadd ḏātihi' }),
  'hüzünlü': conn('حزن', 'borrowing', 'certain', {
    arPron: 'ḥuzn',
    why: b(
      'هجين: «hüzün» عربية مع لاحقة الصفة التركية «-lü».',
      'تێکەڵە: «hüzün» + «-lü».',
    ),
  }),
  mutabakat: conn('مطابقة', 'borrowing', 'certain', {
    arPron: 'muṭābaqa',
    why: b(
      'في العربية التطابق؛ وفي التركية «الاتّفاق الموقَّع» في اللغة الدبلوماسية.',
      'لە تورکیدا «ڕێککەوتنی واژووکراو».',
    ),
  }),
  tenkit: conn('تنقيد', 'direct', 'certain', { arPron: 'tanqīd' }),
  bariz: conn('بارز', 'direct', 'certain', { arPron: 'bāriz' }),
  'müstesna': conn('مستثنى', 'direct', 'certain', { arPron: 'mustaṯnā' }),
  nafile: conn('نافلة', 'borrowing', 'certain', {
    arPron: 'nāfila',
    why: b(
      '⚠️ «نافلة» العربية زيادة تطوّعية؛ و«nafile» التركية «بلا جدوى، عبثاً».',
      '⚠️ لە تورکیدا «بێهوودە»یە.',
    ),
  }),
  abes: conn('عبث', 'direct', 'certain', { arPron: 'ʿabaṯ' }),
  'münferit': conn('منفرد', 'direct', 'certain', { arPron: 'munfarid' }),
  'müşterek': conn('مشترك', 'direct', 'certain', { arPron: 'muštarak' }),
  kifayetsiz: conn('كفاية', 'borrowing', 'certain', {
    arPron: 'kifāya',
    why: b(
      'هجين: «kifayet» عربية مع لاحقة النفي التركية «-siz».',
      'تێکەڵە: «kifayet» + «-siz».',
    ),
  }),
  beraat: conn('براءة', 'direct', 'certain', { arPron: 'barāʾa' }),
  /* ---------------- Phase 7e: the remaining formal register ---------- */

  hakem: conn('حكم', 'borrowing', 'certain', {
    arPron: 'ḥakam',
    why: b(
      'من ح ك م نفسه الذي أعطى hüküm وhükümet. في التركية: حَكَم المباراة، ومحكِّم البحث العلمي.',
      'لە هەمان ڕەگی hüküm و hükümet.',
    ),
  }),
  'atıf': conn('عطف', 'borrowing', 'certain', {
    arPron: 'ʿaṭf',
    why: b(
      '⚠️ «عطف» العربية الميل والحنوّ؛ و«atıf» التركية الإحالة والاستشهاد الأكاديمي.',
      '⚠️ لە تورکیدا «ئاماژە»ی ئەکادیمییە.',
    ),
  }),
  intihal: conn('انتحال', 'direct', 'certain', { arPron: 'intiḥāl' }),
  madde: conn('مادّة', 'direct', 'certain', { arPron: 'mādda' }),
  istisna: conn('استثناء', 'direct', 'certain', { arPron: 'istiṯnāʾ' }),
  mucibince: conn('بموجبه', 'direct', 'certain', { arPron: 'bi-mūǧibihi' }),
  istinaden: conn('استناداً', 'direct', 'certain', { arPron: 'istinādan' }),
  'mezkûr': conn('مذكور', 'direct', 'certain', { arPron: 'maḏkūr' }),
  'münhasıran': conn('منحصراً', 'direct', 'certain', { arPron: 'munḥaṣiran' }),
  bilumum: conn('بالعموم', 'direct', 'certain', { arPron: 'bi-l-ʿumūm' }),
};
