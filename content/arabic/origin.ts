import type { Bilingual, WordOrigin } from '@/types/content';
import { b } from '../shared/helpers';

/**
 * Arabic-origin Turkish words.
 *
 * ---------------------------------------------------------------------------
 * What this is, and how it differs from the connections file
 * ---------------------------------------------------------------------------
 *
 * `connections.ts` answers a teaching question: *can an Arabic speaker
 * recognise this Turkish word?* It therefore includes false friends and pure
 * coincidences, because those are exactly what a learner needs warning about.
 *
 * This file answers an etymological one: *where did this word historically
 * come from?* That is true or false regardless of whether it helps anyone.
 *
 * A word can appear in both (`hükümet`), in one (`sabun` has a clear origin
 * but a weak teaching bridge), or in neither.
 *
 * ---------------------------------------------------------------------------
 * The rules
 * ---------------------------------------------------------------------------
 *
 *   1. `language: 'arabic'` means the word entered Turkish FROM Arabic. It
 *      does not mean the word is ultimately Semitic — `kanun`, `felsefe`,
 *      `defter` and `musiki` are Greek words that reached Turkish through
 *      Arabic, and they are marked Arabic-origin with NO root, because giving
 *      them a triliteral root would be inventing one.
 *
 *   2. A `root` is only set where the Arabic triliteral is standard. Where it
 *      is disputed or the word is not Semitic, the field is simply absent.
 *
 *   3. Words students *assume* are Arabic but are not appear here too, with
 *      their real origin and a `misconception` note. Correcting the
 *      assumption is more useful than staying silent about it.
 *
 *   4. `register` is recorded because the 1930s language reform pushed much
 *      Arabic vocabulary out of everyday speech. Knowing a word is
 *      Arabic-derived is nearly useless without knowing whether anyone still
 *      says it — `mektep` and `okul` mean the same thing and only one is
 *      current.
 *
 * Keyed by Turkish word and applied as an overlay in `content/index.ts`, the
 * same way connections and collocations are, so no vocabulary is duplicated.
 */

/* Shorthand: the vast majority of entries are certain, everyday-to-formal. */
const ar = (
  source: string,
  register: WordOrigin['register'],
  opts: {
    root?: string;
    sourcePron?: string;
    confidence?: WordOrigin['confidence'];
    usage?: Bilingual;
  } = {},
): WordOrigin => ({
  language: 'arabic',
  source,
  sourcePron: opts.sourcePron,
  root: opts.root,
  confidence: opts.confidence ?? 'certain',
  register,
  usage: opts.usage,
});

export const ARABIC_ORIGIN: Record<string, WordOrigin> = {

  /* ================================================================== */
  /* ك ت ب — writing                                                     */
  /* ================================================================== */

  kitap: ar('كتاب', 'everyday', { root: 'ك ت ب', sourcePron: 'kitāb' }),
  kâtip: ar('كاتب', 'formal', { root: 'ك ت ب', sourcePron: 'kātib' }),
  mektup: ar('مكتوب', 'everyday', {
    root: 'ك ت ب',
    sourcePron: 'maktūb',
    usage: b(
      'في العربية «مكتوب» اسم مفعول؛ في التركية صارت الرسالة نفسها.',
      'لە عەرەبیدا ناوی بەرکارە؛ لە تورکیدا بووە بە خودی نامە.',
    ),
  }),
  kütüphane: ar('مكتبة', 'everyday', {
    root: 'ك ت ب',
    usage: b(
      'مركّبة من «كتب» العربية و«خانه» الفارسية — بنية شائعة جداً في التركية.',
      'لێکدراوە لە «کتب»ی عەرەبی و «خانە»ی فارسی — پێکهاتەیەکی زۆر باو لە تورکیدا.',
    ),
  }),

  /* ================================================================== */
  /* ح ك م — judging, governing                                          */
  /* ================================================================== */

  hüküm: ar('حكم', 'formal', { root: 'ح ك م', sourcePron: 'ḥukm' }),
  hükümet: ar('حكومة', 'everyday', { root: 'ح ك م', sourcePron: 'ḥukūma' }),
  'hâkim': ar('حاكم', 'formal', {
    root: 'ح ك م',
    usage: b(
      'في التركية القاضي؛ وفي العربية الحاكم هو الوالي.',
      'لە تورکیدا دادوەر؛ لە عەرەبیدا فەرمانڕەوا.',
    ),
  }),
  mahkeme: ar('محكمة', 'everyday', { root: 'ح ك م', sourcePron: 'maḥkama' }),
  hikmet: ar('حكمة', 'literary', { root: 'ح ك م', sourcePron: 'ḥikma' }),

  /* ================================================================== */
  /* ع ل م — knowing                                                     */
  /* ================================================================== */

  ilim: ar('علم', 'formal', {
    root: 'ع ل م',
    usage: b(
      'الشائع اليوم bilim التركية الأصل؛ ilim باقية في السياق الديني والتقليدي.',
      'ئەوەی باوە ئەمڕۆ bilimـی ڕەگ تورکییە؛ ilim لە دۆخی ئایینیدا ماوە.',
    ),
  }),
  'âlim': ar('عالِم', 'literary', { root: 'ع ل م' }),
  muallim: ar('معلّم', 'historical', {
    root: 'ع ل م',
    usage: b(
      'استُبدلت بـ öğretmen بعد إصلاح اللغة؛ لا تُستعمل اليوم إلا تاريخياً.',
      'دوای چاکسازی زمان بە öğretmen گۆڕدرا؛ ئەمڕۆ تەنها مێژوویی بەکاردێت.',
    ),
  }),
  malumat: ar('معلومات', 'formal', { root: 'ع ل م' }),

  /* ================================================================== */
  /* س ل م — peace, wholeness                                            */
  /* ================================================================== */

  selam: ar('سلام', 'everyday', { root: 'س ل م', sourcePron: 'salām' }),
  selamet: ar('سلامة', 'formal', { root: 'س ل م' }),
  teslim: ar('تسليم', 'everyday', { root: 'س ل م' }),
  sulh: ar('صلح', 'formal', {
    root: 'ص ل ح',
    usage: b('الشائع اليوم barış التركية الأصل.', 'ئەوەی باوە ئەمڕۆ barışـە.'),
  }),

  /* ================================================================== */
  /* ح ق ق — truth, right                                                */
  /* ================================================================== */

  hak: ar('حق', 'everyday', { root: 'ح ق ق', sourcePron: 'ḥaqq' }),
  hakikat: ar('حقيقة', 'literary', { root: 'ح ق ق' }),
  hukuk: ar('حقوق', 'academic', { root: 'ح ق ق' }),
  hakikaten: ar('حقيقةً', 'everyday', { root: 'ح ق ق' }),

  /* ================================================================== */
  /* ع د ل — justice                                                     */
  /* ================================================================== */

  adalet: ar('عدالة', 'formal', { root: 'ع د ل' }),

  /* ================================================================== */
  /* د و ل / م ل ك — state and property                                  */
  /* ================================================================== */

  devlet: ar('دولة', 'everyday', { root: 'د و ل' }),
  'mülk': ar('ملك', 'formal', { root: 'م ل ك' }),
  emlak: ar('أملاك', 'everyday', { root: 'م ل ك' }),
  memleket: ar('مملكة', 'everyday', {
    root: 'م ل ك',
    usage: b(
      'في التركية «البلد» أو «مسقط الرأس» — لا علاقة لها بالحكم الملكي.',
      'لە تورکیدا «وڵات» یان «شوێنی لەدایکبوون» — پەیوەندی بە پاشایەتییەوە نییە.',
    ),
  }),

  /* ================================================================== */
  /* ج م ع — gathering                                                   */
  /* ================================================================== */

  cami: ar('جامع', 'everyday', { root: 'ج م ع' }),
  cemiyet: ar('جمعية', 'formal', { root: 'ج م ع' }),
  cümle: ar('جملة', 'everyday', { root: 'ج م ل' }),

  /* ================================================================== */
  /* Administration and law                                              */
  /* ================================================================== */

  'müdür': ar('مدير', 'everyday', { root: 'د و ر' }),
  idare: ar('إدارة', 'formal', { root: 'د و ر' }),
  daire: ar('دائرة', 'everyday', {
    root: 'د و ر',
    usage: b(
      'أشيع معانيها في التركية اليوم «الشقّة السكنية» — معنى لا وجود له في العربية.',
      'باوترین واتای لە تورکیدا ئەمڕۆ «شوقە»یە — واتایەک کە لە عەرەبیدا نییە.',
    ),
  }),
  memur: ar('مأمور', 'everyday', { root: 'أ م ر' }),
  vekil: ar('وكيل', 'formal', { root: 'و ك ل' }),
  meclis: ar('مجلس', 'formal', { root: 'ج ل س' }),
  karar: ar('قرار', 'everyday', { root: 'ق ر ر' }),
  kabul: ar('قبول', 'everyday', { root: 'ق ب ل' }),
  talep: ar('طلب', 'formal', { root: 'ط ل ب' }),
  hizmet: ar('خدمة', 'everyday', { root: 'خ د م' }),
  vazife: ar('وظيفة', 'formal', {
    root: 'و ظ ف',
    usage: b('الشائع اليوم görev التركية الأصل.', 'ئەوەی باوە ئەمڕۆ görevـە.'),
  }),
  mesuliyet: ar('مسؤولية', 'formal', { root: 'س أ ل' }),
  mesele: ar('مسألة', 'everyday', { root: 'س أ ل' }),
  'şahit': ar('شاهد', 'formal', { root: 'ش ه د' }),
  'şehit': ar('شهيد', 'formal', { root: 'ش ه د' }),
  vesika: ar('وثيقة', 'formal', { root: 'و ث ق' }),
  imza: ar('إمضاء', 'everyday', { root: 'م ض ي' }),
  ilan: ar('إعلان', 'everyday', { root: 'ع ل ن' }),
  emniyet: ar('أمنية', 'formal', { root: 'أ م ن' }),
  'zulüm': ar('ظلم', 'formal', { root: 'ظ ل م' }),
  hürriyet: ar('حرية', 'formal', { root: 'ح ر ر' }),
  ittifak: ar('اتفاق', 'formal', { root: 'و ف ق' }),
  yaptırım: {
    language: 'turkic',
    confidence: 'certain',
    register: 'formal',
    usage: b(
      'تركية الأصل من yapmak — أُدخلت بعد إصلاح اللغة لتحلّ محلّ «müeyyide» العربية.',
      'ڕەگ تورکییە لە yapmakـەوە — دوای چاکسازی زمان جێگای «müeyyide»ی عەرەبی گرتەوە.',
    ),
  },

  /* ================================================================== */
  /* Time                                                                */
  /* ================================================================== */

  vakit: ar('وقت', 'everyday', { root: 'و ق ت' }),
  saat: ar('ساعة', 'everyday', { root: 'س و ع' }),
  dakika: ar('دقيقة', 'everyday', { root: 'د ق ق' }),
  saniye: ar('ثانية', 'everyday', { root: 'ث ن ي' }),
  sene: ar('سنة', 'formal', {
    root: 'س ن و',
    usage: b('مرادف رسمي لـ yıl التركية الأصل.', 'هاوواتای فەرمی yılـە.'),
  }),
  'asır': ar('عصر', 'formal', { root: 'ع ص ر' }),
  tarih: ar('تاريخ', 'everyday', {
    root: 'أ ر خ',
    confidence: 'likely',
    usage: b(
      'الجذر مختلف عليه؛ يرى بعض اللغويين أنها من أصل غير سامي.',
      'ڕەگەکە جێی ناکۆکییە؛ هەندێک زمانەوان پێیانوایە ڕەگی ناسامییە.',
    ),
  }),
  sabah: ar('صباح', 'everyday', { root: 'ص ب ح' }),
  devam: ar('دوام', 'everyday', { root: 'د و م' }),
  daima: ar('دائماً', 'formal', { root: 'د و م' }),

  /* ================================================================== */
  /* Thought and learning                                                */
  /* ================================================================== */

  fikir: ar('فكر', 'everyday', { root: 'ف ك ر' }),
  'tefekkür': ar('تفكّر', 'literary', { root: 'ف ك ر' }),
  'akıl': ar('عقل', 'everyday', { root: 'ع ق ل' }),
  makul: ar('معقول', 'formal', { root: 'ع ق ل' }),
  'mantık': ar('منطق', 'academic', { root: 'ن ط ق' }),
  ders: ar('درس', 'everyday', { root: 'د ر س' }),
  cevap: ar('جواب', 'everyday', { root: 'ج و ب' }),
  kelime: ar('كلمة', 'everyday', { root: 'ك ل م' }),
  harf: ar('حرف', 'everyday', { root: 'ح ر ف' }),
  misal: ar('مثال', 'formal', { root: 'م ث ل' }),
  mesela: ar('مثلاً', 'everyday', { root: 'م ث ل' }),
  isim: ar('اسم', 'everyday', { root: 'س م و' }),
  fiil: ar('فعل', 'academic', { root: 'ف ع ل' }),
  'sıfat': ar('صفة', 'academic', { root: 'و ص ف' }),
  zamir: ar('ضمير', 'academic', { root: 'ض م ر' }),
  edat: ar('أداة', 'academic', { root: 'أ د و' }),
  'tercüme': ar('ترجمة', 'formal', { root: 'ر ج م' }),
  lisan: ar('لسان', 'literary', {
    root: 'ل س ن',
    usage: b('قديمة؛ الشائع اليوم dil التركية الأصل.', 'کۆنە؛ ئەوەی باوە dilـە.'),
  }),
  'tecrübe': ar('تجربة', 'everyday', { root: 'ج ر ب' }),
  tahlil: ar('تحليل', 'academic', { root: 'ح ل ل' }),
  tefsir: ar('تفسير', 'academic', { root: 'ف س ر' }),
  takdir: ar('تقدير', 'formal', { root: 'ق د ر' }),
  tavsiye: ar('توصية', 'everyday', { root: 'و ص ي' }),
  nasihat: ar('نصيحة', 'formal', { root: 'ن ص ح' }),
  'münakaşa': ar('مناقشة', 'formal', { root: 'ن ق ش' }),
  usul: ar('أصول', 'formal', { root: 'أ ص ل' }),
  kaide: ar('قاعدة', 'formal', { root: 'ق ع د' }),
  'şart': ar('شرط', 'everyday', { root: 'ش ر ط' }),
  ihtimal: ar('احتمال', 'formal', { root: 'ح م ل' }),
  netice: ar('نتيجة', 'formal', { root: 'ن ت ج' }),
  hedef: ar('هدف', 'everyday', { root: 'ه د ف' }),
  maksat: ar('مقصد', 'formal', { root: 'ق ص د' }),
  gaye: ar('غاية', 'literary', { root: 'غ ي ي' }),
  'vasıta': ar('واسطة', 'formal', { root: 'و س ط' }),
  vasat: ar('وسط', 'everyday', { root: 'و س ط' }),
  münasip: ar('مناسب', 'formal', { root: 'ن س ب' }),
  müstakil: ar('مستقل', 'formal', { root: 'ق ل ل' }),
  'muhtaç': ar('محتاج', 'everyday', { root: 'ح و ج' }),
  mahsus: ar('مخصوص', 'formal', { root: 'خ ص ص' }),
  hususi: ar('خصوصي', 'formal', { root: 'خ ص ص' }),
  bilhassa: ar('بالخاصة', 'formal', { root: 'خ ص ص', confidence: 'likely' }),

  /* ================================================================== */
  /* Trade and money                                                     */
  /* ================================================================== */

  ticaret: ar('تجارة', 'everyday', { root: 'ت ج ر' }),
  'tüccar': ar('تاجر', 'formal', { root: 'ت ج ر' }),
  sanayi: ar('صناعة', 'formal', { root: 'ص ن ع' }),
  sanat: ar('صنعة', 'everyday', { root: 'ص ن ع' }),
  ziraat: ar('زراعة', 'formal', { root: 'ز ر ع' }),
  'iktisat': ar('اقتصاد', 'academic', { root: 'ق ص د' }),
  maliye: ar('مالية', 'formal', { root: 'م و ل' }),
  servet: ar('ثروة', 'formal', { root: 'ث ر و' }),
  fakir: ar('فقير', 'everyday', { root: 'ف ق ر' }),
  'ücret': ar('أجرة', 'everyday', { root: 'أ ج ر' }),
  fayda: ar('فائدة', 'everyday', { root: 'ف ي د' }),
  menfaat: ar('منفعة', 'formal', { root: 'ن ف ع' }),
  hesap: ar('حساب', 'everyday', { root: 'ح س ب' }),
  rakam: ar('رقم', 'everyday', { root: 'ر ق م' }),
  sahip: ar('صاحب', 'everyday', { root: 'ص ح ب' }),
  sohbet: ar('صحبة', 'everyday', { root: 'ص ح ب' }),
  'inşaat': ar('إنشاءات', 'everyday', { root: 'ن ش أ' }),
  meslek: ar('مسلك', 'everyday', { root: 'س ل ك', confidence: 'likely' }),
  'müsabaka': ar('مسابقة', 'formal', { root: 'س ب ق' }),
  kira: ar('كراء', 'everyday', { root: 'ك ر ي' }),
  'müşteri': ar('مشتري', 'everyday', { root: 'ش ر ي' }),
  'dükkân': ar('دكان', 'everyday', { root: 'د ك ن', confidence: 'likely' }),

  /* ================================================================== */
  /* People and society                                                  */
  /* ================================================================== */

  insan: ar('إنسان', 'everyday', { root: 'أ ن س' }),
  aile: ar('عائلة', 'everyday', { root: 'ع و ل' }),
  akraba: ar('أقرباء', 'everyday', { root: 'ق ر ب' }),
  halk: ar('خلق', 'everyday', { root: 'خ ل ق' }),
  ahlak: ar('أخلاق', 'formal', { root: 'خ ل ق' }),
  millet: ar('ملّة', 'everyday', { root: 'م ل ل' }),
  vatan: ar('وطن', 'formal', { root: 'و ط ن' }),
  'nüfus': ar('نفوس', 'formal', { root: 'ن ف س' }),
  siyaset: ar('سياسة', 'everyday', { root: 'س و س' }),
  medeniyet: ar('مدنية', 'academic', { root: 'م د ن' }),
  cemaat: ar('جماعة', 'formal', { root: 'ج م ع' }),
  asker: ar('عسكر', 'everyday', {
    usage: b(
      'دخلت العربية من اللاتينية exercitus ثم انتقلت إلى التركية — فلا جذر ثلاثياً لها.',
      'لە لاتینییەوە چووەتە عەرەبی و پاشان بۆ تورکی — بۆیە ڕەگی سێپیتی نییە.',
    ),
  }),
  silah: ar('سلاح', 'everyday', { root: 'س ل ح' }),
  'şiddet': ar('شدة', 'formal', { root: 'ش د د' }),
  ziyaret: ar('زيارة', 'everyday', { root: 'ز و ر' }),
  davet: ar('دعوة', 'everyday', { root: 'د ع و' }),
  dua: ar('دعاء', 'everyday', { root: 'د ع و' }),
  ikram: ar('إكرام', 'everyday', { root: 'ك ر م' }),
  ziyafet: ar('ضيافة', 'formal', { root: 'ض ي ف' }),
  misafir: ar('مسافر', 'everyday', {
    root: 'س ف ر',
    usage: b(
      'من «المسافر»؛ استقرّ معناها في التركية على «الضيف».',
      'لە «مسافر»ـەوە؛ لە تورکیدا بووە بە «میوان».',
    ),
  }),
  sofra: ar('سفرة', 'everyday', {
    root: 'س ف ر',
    usage: b(
      'من الجذر نفسه: «السفرة» كانت زاد المسافر ثم صارت المائدة.',
      'لە هەمان ڕەگ: «سفرة» ئازووقەی ڕێبوار بوو و پاشان بووە خوان.',
    ),
  }),
  seyahat: ar('سياحة', 'everyday', { root: 'س ي ح' }),
  hediye: ar('هدية', 'everyday', { root: 'ه د ي' }),
  'hürmet': ar('حرمة', 'formal', { root: 'ح ر م' }),
  rica: ar('رجاء', 'everyday', { root: 'ر ج و' }),
  'teşekkür': ar('تشكّر', 'everyday', { root: 'ش ك ر' }),
  merhaba: ar('مرحباً', 'everyday', { root: 'ر ح ب' }),
  'meşhur': ar('مشهور', 'everyday', { root: 'ش ه ر' }),
  'meşgul': ar('مشغول', 'everyday', { root: 'ش غ ل' }),
  'hazır': ar('حاضر', 'everyday', { root: 'ح ض ر' }),
  'lazım': ar('لازم', 'everyday', { root: 'ل ز م' }),
  mecbur: ar('مجبور', 'everyday', { root: 'ج ب ر' }),
  cebir: ar('جبر', 'academic', { root: 'ج ب ر' }),

  /* ================================================================== */
  /* Body, health, feeling                                               */
  /* ================================================================== */

  kalp: ar('قلب', 'everyday', { root: 'ق ل ب' }),
  ruh: ar('روح', 'everyday', { root: 'ر و ح' }),
  beden: ar('بدن', 'formal', { root: 'ب د ن' }),
  'vücut': ar('وجود', 'everyday', { root: 'و ج د' }),
  mide: ar('معدة', 'everyday', { root: 'م ع د' }),
  'ilaç': ar('علاج', 'everyday', { root: 'ع ل ج' }),
  tedavi: ar('تداوي', 'formal', { root: 'د و ي' }),
  ameliyat: ar('عملية', 'everyday', { root: 'ع م ل' }),
  afiyet: ar('عافية', 'everyday', { root: 'ع ف و' }),
  'sıhhat': ar('صحة', 'formal', { root: 'ص ح ح' }),
  his: ar('حس', 'formal', { root: 'ح س س' }),
  hayal: ar('خيال', 'everyday', { root: 'خ ي ل' }),
  'rüya': ar('رؤيا', 'everyday', { root: 'ر أ ي' }),
  'hatıra': ar('خاطرة', 'everyday', { root: 'خ ط ر' }),
  'hafıza': ar('حافظة', 'formal', { root: 'ح ف ظ' }),
  'zekâ': ar('ذكاء', 'formal', { root: 'ذ ك و' }),
  'sabır': ar('صبر', 'everyday', { root: 'ص ب ر' }),
  'şeref': ar('شرف', 'formal', { root: 'ش ر ف' }),
  terbiye: ar('تربية', 'formal', { root: 'ر ب و' }),
  merhamet: ar('مرحمة', 'formal', { root: 'ر ح م' }),
  'şefkat': ar('شفقة', 'literary', { root: 'ش ف ق' }),
  'aşk': ar('عشق', 'literary', { root: 'ع ش ق' }),
  'hüzün': ar('حزن', 'literary', { root: 'ح ز ن' }),
  keder: ar('كدر', 'literary', { root: 'ك د ر' }),
  cesaret: ar('جسارة', 'everyday', { root: 'ج س ر' }),
  gurur: ar('غرور', 'everyday', {
    root: 'غ ر ر',
    usage: b(
      'في العربية مذمومة دائماً؛ في التركية غالباً «الاعتزاز» الإيجابي.',
      'لە عەرەبیدا هەمیشە خراپە؛ لە تورکیدا زۆرجار «شانازی»ی ئەرێنییە.',
    ),
  }),
  heves: ar('هوس', 'everyday', { root: 'ه و س', confidence: 'likely' }),
  irade: ar('إرادة', 'formal', { root: 'ر و د' }),
  azim: ar('عزم', 'literary', { root: 'ع ز م' }),
  kader: ar('قدر', 'everyday', { root: 'ق د ر' }),
  nasip: ar('نصيب', 'everyday', { root: 'ن ص ب' }),
  'kısmet': ar('قسمة', 'everyday', { root: 'ق س م' }),
  bereket: ar('بركة', 'everyday', { root: 'ب ر ك' }),
  hata: ar('خطأ', 'everyday', { root: 'خ ط أ' }),
  'ayıp': ar('عيب', 'everyday', { root: 'ع ي ب' }),
  kusur: ar('قصور', 'formal', { root: 'ق ص ر' }),
  'sır': ar('سر', 'everyday', { root: 'س ر ر' }),
  tehlike: ar('تهلكة', 'everyday', { root: 'ه ل ك', confidence: 'likely' }),
  imdat: ar('إمداد', 'everyday', { root: 'م د د' }),
  kaza: ar('قضاء', 'everyday', { root: 'ق ض ي' }),

  /* ================================================================== */
  /* Arts, letters, the natural world                                    */
  /* ================================================================== */

  edebiyat: ar('أدبيات', 'academic', { root: 'أ د ب' }),
  'şiir': ar('شعر', 'literary', { root: 'ش ع ر' }),
  'şair': ar('شاعر', 'literary', { root: 'ش ع ر' }),
  'hikâye': ar('حكاية', 'everyday', { root: 'ح ك ي' }),
  resim: ar('رسم', 'everyday', { root: 'ر س م' }),
  mimari: ar('معماري', 'academic', { root: 'ع م ر' }),
  makale: ar('مقالة', 'academic', { root: 'ق و ل' }),
  haber: ar('خبر', 'everyday', { root: 'خ ب ر' }),
  'sayfa': ar('صفحة', 'everyday', { root: 'ص ف ح' }),
  'satır': ar('سطر', 'everyday', { root: 'س ط ر' }),
  nokta: ar('نقطة', 'everyday', { root: 'ن ق ط' }),
  'şekil': ar('شكل', 'everyday', { root: 'ش ك ل' }),
  'şey': ar('شيء', 'everyday', { root: 'ش ي أ' }),
  tabiat: ar('طبيعة', 'formal', { root: 'ط ب ع' }),
  hava: ar('هواء', 'everyday', { root: 'ه و ي' }),
  sahil: ar('ساحل', 'everyday', { root: 'س ح ل' }),
  nehir: ar('نهر', 'formal', { root: 'ن ه ر' }),
  hayvan: ar('حيوان', 'everyday', { root: 'ح ي ي' }),
  hayat: ar('حياة', 'everyday', { root: 'ح ي ي' }),
  mevsim: ar('موسم', 'everyday', { root: 'و س م' }),
  derece: ar('درجة', 'everyday', { root: 'د ر ج' }),
  mesafe: ar('مسافة', 'formal', { root: 'س و ف', confidence: 'likely' }),
  hudut: ar('حدود', 'formal', { root: 'ح د د' }),
  'mekân': ar('مكان', 'formal', { root: 'ك و ن' }),
  'imkân': ar('إمكان', 'everyday', { root: 'ك و ن' }),
  'mümkün': ar('ممكن', 'everyday', { root: 'ك و ن' }),
  mevki: ar('موقع', 'formal', { root: 'و ق ع' }),
  taraf: ar('طرف', 'everyday', { root: 'ط ر ف' }),
  mahalle: ar('محلة', 'everyday', { root: 'ح ل ل' }),
  bina: ar('بناء', 'everyday', { root: 'ب ن ي' }),
  cadde: ar('جادة', 'everyday', { root: 'ج د د' }),
  meydan: ar('ميدان', 'everyday', { root: 'م ي د', confidence: 'likely' }),
  tabak: ar('طبق', 'everyday', { root: 'ط ب ق' }),
  mutfak: ar('مطبخ', 'everyday', { root: 'ط ب خ' }),
  kahve: ar('قهوة', 'everyday', { root: 'ق ه و' }),
  zeytin: ar('زيتون', 'everyday', { root: 'ز ي ت' }),
  sabun: ar('صابون', 'everyday', {
    usage: b(
      'كلمة قديمة انتقلت بين لغات كثيرة؛ وصلت التركية عبر العربية.',
      'وشەیەکی کۆنە کە بە نێو چەند زمانێکدا تێپەڕیوە؛ لە ڕێگەی عەرەبییەوە گەیشتووەتە تورکی.',
    ),
  }),
  fincan: ar('فنجان', 'everyday', { confidence: 'likely' }),
  'sandık': ar('صندوق', 'everyday', { confidence: 'likely' }),
  helva: ar('حلوى', 'everyday', { root: 'ح ل و' }),
  'şerbet': ar('شربة', 'everyday', { root: 'ش ر ب' }),
  ceviz: ar('جوز', 'everyday', { root: 'ج و ز' }),
  'fıstık': ar('فستق', 'everyday', { confidence: 'likely' }),
  nane: ar('نعناع', 'everyday', { root: 'ن ع ن ع' }),
  safran: ar('زعفران', 'everyday', { confidence: 'likely' }),
  mermer: ar('مرمر', 'everyday', {
    usage: b(
      'يونانية الأصل (marmaros) وصلت عبر العربية.',
      'ڕەگی یۆنانییە و لە ڕێگەی عەرەبییەوە هاتووە.',
    ),
  }),
  kandil: ar('قنديل', 'literary', { confidence: 'likely' }),
  tabut: ar('تابوت', 'formal', { confidence: 'likely' }),
  'nöbet': ar('نوبة', 'everyday', { root: 'ن و ب' }),

  /* ================================================================== */
  /* Greek and Persian words that reached Turkish THROUGH Arabic         */
  /* — Arabic-origin in the borrowing sense, with no Semitic root.       */
  /* ================================================================== */

  kanun: ar('قانون', 'formal', {
    usage: b(
      'يونانية الأصل (kanon)؛ دخلت التركية بشكلها العربي، فلا جذر ثلاثياً لها.',
      'ڕەگی یۆنانییە (kanon)؛ بە شێوە عەرەبییەکەی چووەتە تورکی، بۆیە ڕەگی سێپیتی نییە.',
    ),
  }),
  felsefe: ar('فلسفة', 'academic', {
    usage: b(
      'يونانية (philosophia) عبر العربية — لا جذر ثلاثياً لها.',
      'یۆنانییە (philosophia) لە ڕێگەی عەرەبییەوە — ڕەگی سێپیتی نییە.',
    ),
  }),
  'coğrafya': ar('جغرافيا', 'academic', {
    usage: b('يونانية عبر العربية.', 'یۆنانییە لە ڕێگەی عەرەبییەوە.'),
  }),
  defter: ar('دفتر', 'everyday', {
    usage: b(
      'يونانية (diphthera) عبر العربية.',
      'یۆنانییە (diphthera) لە ڕێگەی عەرەبییەوە.',
    ),
  }),


  /* ================================================================== */
  /* Administrative and legal Ottoman                                    */
  /* ================================================================== */

  tasarruf: ar('تصرّف', 'formal', {
    root: 'ص ر ف',
    sourcePron: 'taṣarruf',
    usage: b(
      '⚠️ انزلاق دلالي كبير: العربية «تصرّف» = سلوك، والتركية الشائعة = ادّخار وتوفير. المعنى القانوني (التصرّف في مال) باقٍ لكنه أضيق كثيراً.',
      '⚠️ گۆڕانی واتای گەورە: عەرەبی «تصرف» = ڕەفتار، تورکی باو = پاشەکەوت.',
    ),
  }),
  muvafakat: ar('موافقة', 'formal', { root: 'و ف ق', sourcePron: 'muwāfaqa' }),
  muhteva: ar('محتوى', 'formal', {
    root: 'ح و ي',
    usage: b(
      'أزاحها الإصلاح اللغوي لصالح «içerik»؛ بقيت في النصوص القانونية والرسمية.',
      'چاکسازی زمان «içerik»ی لە جێگای دانا؛ لە دەقە یاسایی و فەرمییەکاندا ماوەتەوە.',
    ),
  }),
  'münasebet': ar('مناسبة', 'formal', {
    root: 'ن س ب',
    sourcePron: 'munāsaba',
    usage: b(
      'المعنى التركي الأشيع هو «العلاقة» لا «الحدث» — والعربية تستعمل الثاني أكثر.',
      'واتای باوی تورکی «پەیوەندی»یە نەک «بۆنە».',
    ),
  }),
  'tebliğ': ar('تبليغ', 'formal', { root: 'ب ل غ', sourcePron: 'tablīġ' }),
  mükellefiyet: ar('مكلّف', 'formal', {
    root: 'ك ل ف',
    usage: b(
      'الأصل العربي «مكلّف»، واللاحقة «-iyet» تركية-عثمانية تصنع اسم المعنى.',
      'ڕەگی عەرەبی «مكلف»ە، پاشگری «-iyet» عوسمانییە.',
    ),
  }),
  muafiyet: ar('معاف', 'formal', {
    root: 'ع ف و',
    confidence: 'likely',
    usage: b(
      'من «معاف» العربية بلاحقة «-iyet»؛ الجذر ع ف و شبه مؤكّد لكنه ليس بديهياً من الشكل التركي.',
      'لە «معاف»ی عەرەبییەوە بە پاشگری «-iyet».',
    ),
  }),
  ihmal: ar('إهمال', 'formal', { root: 'ه م ل', sourcePron: 'ihmāl' }),
  emsal: ar('أمثال', 'formal', {
    root: 'م ث ل',
    usage: b(
      'جمع «مثل» في العربية، لكن التركية تعامله مفرداً بمعنى السابقة القضائية: «emsal karar».',
      'لە عەرەبیدا کۆی «مثل»ە، بەڵام تورکی وەک تاک بەکاری دەهێنێت.',
    ),
  }),
  ikamet: ar('إقامة', 'formal', { root: 'ق و م', sourcePron: 'iqāma' }),
  acil: ar('عاجل', 'everyday', { root: 'ع ج ل', sourcePron: 'ʿājil' }),
  'vakıf': ar('وقف', 'formal', {
    root: 'و ق ف',
    sourcePron: 'waqf',
    usage: b(
      'نفس المؤسسة الشرعية العربية، وبقيت حيّة في تركيا: كثير من الجامعات «vakıf üniversitesi».',
      'هەمان دامەزراوەی شەرعی عەرەبی، لە تورکیا زیندووە.',
    ),
  }),

  /* ================================================================== */
  /* Mind and perception                                                 */
  /* ================================================================== */

  idrak: ar('إدراك', 'formal', { root: 'د ر ك', sourcePron: 'idrāk' }),
  tasavvur: ar('تصوّر', 'formal', { root: 'ص و ر', sourcePron: 'taṣawwur' }),
  'tahayyül': ar('تخيّل', 'literary', { root: 'خ ي ل', sourcePron: 'taḫayyul' }),
  'teemmül': ar('تأمّل', 'literary', {
    root: 'أ م ل',
    confidence: 'likely',
    usage: b(
      'نادرة جداً في التركية المعاصرة؛ تُقرأ ولا تكاد تُسمع.',
      'زۆر دەگمەنە لە تورکی هاوچەرخدا.',
    ),
  }),
  basiret: ar('بصيرة', 'formal', { root: 'ب ص ر', sourcePron: 'baṣīra' }),
  feraset: ar('فراسة', 'literary', { root: 'ف ر س', sourcePron: 'firāsa' }),
  vicdan: ar('وجدان', 'everyday', {
    root: 'و ج د',
    usage: b(
      '⚠️ فرق دلالي: العربية «وجدان» = الشعور والعاطفة، والتركية = الضمير الأخلاقي.',
      '⚠️ جیاوازی واتا: عەرەبی «وجدان» = هەست، تورکی = ویژدانی ئەخلاقی.',
    ),
  }),
  'mahiyet': ar('ماهيّة', 'formal', {
    usage: b(
      'من «ما هي» العربية بلاحقة النسبة — لا جذر ثلاثياً لها، ولهذا لا يُذكر جذر هنا.',
      'لە «ما هي»ی عەرەبییەوە — ڕەگی سێپیتی نییە.',
    ),
  }),
  mutlak: ar('مطلق', 'academic', { root: 'ط ل ق', sourcePron: 'muṭlaq' }),
  'külli': ar('كلّي', 'academic', {
    root: 'ك ل ل',
    usage: b(
      'المقابل التركي الحديث «tümel»؛ «külli» بقيت في النصوص الدينية والفلسفية القديمة.',
      'هاوتای تورکی نوێ «tümel»ە؛ «külli» لە دەقە کۆنەکاندا ماوەتەوە.',
    ),
  }),

  /* ================================================================== */
  /* Everyday words with a clear Arabic root                             */
  /* ================================================================== */

  'ömür': ar('عمر', 'everyday', {
    root: 'ع م ر',
    sourcePron: 'ʿumr',
    usage: b(
      '⚠️ التركية تفرّق: «ömür» مدّة الحياة كلّها، و«yaş» عمر الشخص الآن. العربية تستعمل «عمر» للاثنين.',
      '⚠️ تورکی جیایان دەکاتەوە: «ömür» درێژایی ژیان، «yaş» تەمەنی ئێستا.',
    ),
  }),
  nefes: ar('نفس', 'everyday', {
    root: 'ن ف س',
    sourcePron: 'nafas',
    usage: b(
      'من «نَفَس» (الهواء) لا «نَفْس» (الذات) — نفس الرسم، معنيان.',
      'لە «نَفَس»ەوە نەک «نَفْس».',
    ),
  }),
  'şemsiye': ar('شمسيّة', 'everyday', {
    root: 'ش م س',
    usage: b(
      'من «شمس»: المظلّة كانت للشمس قبل المطر. الرابط يصير واضحاً بمجرّد رؤيته.',
      'لە «شمس»ەوە: چەتر پێش باران بۆ خۆر بوو.',
    ),
  }),
  'mülteci': ar('ملتجئ', 'formal', { root: 'ل ج أ', sourcePron: 'multajiʾ' }),
  makbuz: ar('مقبوض', 'everyday', { root: 'ق ب ض', sourcePron: 'maqbūḍ' }),
  taksit: ar('تقسيط', 'everyday', {
    root: 'ق س ط',
    usage: b(
      'العربية تستعمل «قِسط» للمفرد و«تقسيط» للمصدر؛ التركية أخذت الثاني للمفرد.',
      'عەرەبی «قسط» بۆ تاک بەکاردەهێنێت؛ تورکی «تقسیط»ی بۆ تاک وەرگرت.',
    ),
  }),
  iade: ar('إعادة', 'everyday', { root: 'ع و د', sourcePron: 'iʿāda' }),
  teslimat: ar('تسليم', 'everyday', {
    root: 'س ل م',
    usage: b(
      'الأصل «تسليم»، واللاحقة «-at» عربية الجمع لكنها في التركية صارت اسماً مفرداً.',
      'ڕەگ «تسلیم»ە؛ «-at» لە تورکیدا بووە بە ناوی تاک.',
    ),
  }),
  baharat: ar('بهارات', 'everyday', {
    usage: b(
      'وصلت التركية من العربية، لكن أصلها الأبعد فارسي-هندي — فلا جذر ثلاثياً يُذكر لها.',
      'لە عەرەبییەوە هاتووە، بەڵام ڕەگی دوورتری فارسی-هیندییە.',
    ),
  }),


  /* ================================================================== */
  /* ⚠️  NOT Arabic — the words students most often assume are           */
  /* ================================================================== */

  'şehir': {
    language: 'persian',
    source: 'شهر',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ ليست عربية. من الفارسية «شهر» أي المدينة. تشابهها مع «شهر» العربية (الوقت) مصادفة صوتية بحتة.',
      '⚠️ عەرەبی نییە. لە فارسی «شهر»ـەوە واتە شار. لێکچوونی لەگەڵ «شهر»ی عەرەبی ڕێکەوتێکی دەنگییە.',
    ),
  },
  hasta: {
    language: 'persian',
    source: 'خسته',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ فارسية «خسته» أي المتعب. كثيرون يظنّونها عربية لشيوعها في السياق الطبي.',
      '⚠️ فارسییە «خستە» واتە ماندوو. زۆر کەس وا بیردەکەنەوە عەرەبییە.',
    ),
  },
  hastane: {
    language: 'persian',
    source: 'خسته‌خانه',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ مركّبة فارسية بالكامل: hasta (مريض) + hane (بيت).',
      '⚠️ تەواو فارسییە: hasta (نەخۆش) + hane (ماڵ).',
    ),
  },
  para: {
    language: 'persian',
    source: 'پاره',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ فارسية «پاره» أي القطعة. ليست من العربية رغم شيوعها.',
      '⚠️ فارسییە «پارە» واتە پارچە. عەرەبی نییە.',
    ),
  },
  pazar: {
    language: 'persian',
    source: 'بازار',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ فارسية «بازار». ومنها جاءت bazaar الإنجليزية أيضاً.',
      '⚠️ فارسییە «بازار». bazaarی ئینگلیزیش لێرەوە هاتووە.',
    ),
  },
  hafta: {
    language: 'persian',
    source: 'هفته',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ فارسية من «هفت» أي سبعة — أي «السبعة أيام».',
      '⚠️ فارسییە لە «هەفت» واتە حەوت — واتە «حەوت ڕۆژ».',
    ),
  },
  'bahçe': {
    language: 'persian',
    source: 'باغچه',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ فارسية «باغچه» أي البستان الصغير.',
      '⚠️ فارسییە «باغچە» واتە باخی بچووک.',
    ),
  },
  pencere: {
    language: 'persian',
    source: 'پنجره',
    confidence: 'certain',
    register: 'everyday',
    misconception: b('⚠️ فارسية «پنجره».', '⚠️ فارسییە «پەنجەرە».'),
  },
  avukat: {
    language: 'french',
    source: 'avocat',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ فرنسية avocat، وليست عربية رغم السياق القانوني. المحامي بالعربية «محامٍ».',
      '⚠️ فەڕەنسییە (avocat)، عەرەبی نییە.',
    ),
  },
  doktor: {
    language: 'french',
    source: 'docteur',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ فرنسية/لاتينية. الكلمة العربية «طبيب» لم تدخل التركية الحديثة.',
      '⚠️ فەڕەنسی/لاتینییە. وشەی عەرەبی «طبيب» نەچووەتە تورکیی نوێ.',
    ),
  },
  gazete: {
    language: 'italian',
    source: 'gazzetta',
    confidence: 'certain',
    register: 'everyday',
    misconception: b('⚠️ إيطالية gazzetta.', '⚠️ ئیتالییە (gazzetta).'),
  },
  banka: {
    language: 'italian',
    source: 'banca',
    confidence: 'certain',
    register: 'everyday',
    misconception: b('⚠️ إيطالية banca.', '⚠️ ئیتالییە (banca).'),
  },
  'çay': {
    language: 'other',
    source: '茶 / چای',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ صينية الأصل، وصلت التركية عبر الفارسية — لا علاقة لها بالعربية.',
      '⚠️ ڕەگی چینییە، لە ڕێگەی فارسییەوە هاتووە — پەیوەندی بە عەرەبییەوە نییە.',
    ),
  },
  'şeker': {
    language: 'persian',
    source: 'شکر',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ سنسكريتية الأصل عبر الفارسية. العربية أخذتها أيضاً، لكن التركية أخذتها من الفارسية.',
      '⚠️ ڕەگی سانسکریتییە لە ڕێگەی فارسییەوە.',
    ),
  },
  ordu: {
    language: 'turkic',
    confidence: 'certain',
    register: 'everyday',
    misconception: b(
      '⚠️ تركية أصيلة — ومنها جاءت horde الإنجليزية. ليست من العربية.',
      '⚠️ ڕەسەنی تورکییە — hordeی ئینگلیزیش لێرەوە هاتووە.',
    ),
  },
  'ümit': {
    language: 'persian',
    source: 'امید',
    confidence: 'certain',
    register: 'everyday',
    misconception: b('⚠️ فارسية «امید».', '⚠️ فارسییە «ئومید».'),
  },
  zengin: {
    language: 'persian',
    source: 'سنگین',
    confidence: 'likely',
    register: 'everyday',
    misconception: b(
      '⚠️ يُرجَّح أنها فارسية؛ ليست عربية على أي حال.',
      '⚠️ زۆرتر وادەزانرێت فارسی بێت؛ بەهەرحاڵ عەرەبی نییە.',
    ),
  },
  /* ================================================================== */
  /* Phase 7 — the vocabulary of power and process                       */
  /* ================================================================== */

  /* ق د ر — capacity, decree */
  iktidar: ar('اقتدار', 'formal', {
    root: 'ق د ر',
    sourcePron: 'iqtidār',
    usage: b(
      'في العربية «اقتدار» = القدرة؛ وفي التركية ضاقت إلى «السلطة الحاكمة» تحديداً.',
      'لە عەرەبیدا «توانا»؛ لە تورکیدا بووە «دەسەڵاتی حوکمڕان».',
    ),
  }),
  kudret: ar('قدرة', 'literary', { root: 'ق د ر', sourcePron: 'qudra' }),

  /* خ ل ف — succeeding, opposing */
  muhalefet: ar('مخالفة', 'formal', {
    root: 'خ ل ف',
    sourcePron: 'muḫālafa',
    usage: b(
      'في العربية «مخالفة» = المضادّة عموماً؛ وفي التركية صارت المصطلح السياسي للمعارضة البرلمانية.',
      'لە تورکیدا بووە زاراوەی سیاسی بۆ ئۆپۆزسیۆن.',
    ),
  }),
  ihtilaf: ar('اختلاف', 'formal', { root: 'خ ل ف' }),

  /* ش ر ع — law, legitimacy */
  meşruiyet: ar('مشروعية', 'academic', { root: 'ش ر ع' }),
  'meşru': ar('مشروع', 'formal', { root: 'ش ر ع' }),

  /* ح ك م — extended in Phase 7 */
  tahakküm: ar('تحكّم', 'academic', {
    root: 'ح ك م',
    usage: b(
      'في العربية «تحكّم» = السيطرة؛ وفي التركية اكتسبت شحنة سلبية: التسلّط.',
      'لە تورکیدا باری نەرێنی وەرگرتووە: زاڵبوون.',
    ),
  }),

  /* ع و ض — compensation */
  taviz: ar('تعويض', 'formal', {
    root: 'ع و ض',
    usage: b(
      '⚠️ انزياح مهمّ: «تعويض» العربية = بدل مالي؛ و«taviz» التركية = تنازل في التفاوض.',
      '⚠️ گۆڕانێکی گرنگ: لە تورکیدا واتای دەستبەرداربوون دەدات.',
    ),
  }),

  /* ص د ق — truth, loyalty */
  sadakat: ar('صداقة', 'formal', {
    root: 'ص د ق',
    usage: b(
      '⚠️ «صداقة» العربية = الصحبة؛ و«sadakat» التركية = الولاء والإخلاص. المعنى تحوّل.',
      '⚠️ لە تورکیدا واتای دڵسۆزی دەدات نەک هاوڕێیەتی.',
    ),
  }),
  tasdik: ar('تصديق', 'formal', { root: 'ص د ق' }),
  samimiyet: ar('صميمية', 'everyday', { root: 'ص م م' }),

  /* و ف ي — fulfilling */
  vefa: ar('وفاء', 'literary', { root: 'و ف ي' }),
  vefat: ar('وفاة', 'formal', { root: 'و ف ي' }),

  /* ن ف ر — aversion */
  nefret: ar('نفرة', 'everyday', { root: 'ن ف ر', sourcePron: 'nafra' }),

  /* أ س س — foundation */
  esas: ar('أساس', 'everyday', { root: 'أ س س', sourcePron: 'asās' }),
  tesis: ar('تأسيس', 'formal', { root: 'أ س س' }),

  /* ح و ل — state, change */
  'hâl': ar('حال', 'everyday', { root: 'ح و ل', sourcePron: 'ḥāl' }),
  tahvil: ar('تحويل', 'technical', { root: 'ح و ل' }),

  /* ع د د — number */
  adet: ar('عدد', 'everyday', {
    root: 'ع د د',
    usage: b(
      '⚠️ لا تخلطها بـ «âdet» = عادة، من جذر آخر (ع و د). الفرق في المدّة.',
      '⚠️ تێکەڵی «âdet» = خوو مەکە، لە ڕەگێکی ترەوەیە.',
    ),
  }),
  'âdet': ar('عادة', 'everyday', { root: 'ع و د', sourcePron: 'ʿāda' }),

  /* و ر ق — paper */
  evrak: ar('أوراق', 'formal', {
    root: 'و ر ق',
    usage: b(
      'جمع «ورقة» في العربية؛ وفي التركية تُعامل مفرداً جامعاً: «evrak hazır».',
      'لە عەرەبیدا کۆیە؛ لە تورکیدا وەک ناوێکی کۆگرتوو.',
    ),
  }),

  /* ش ك و — complaint */
  'şikâyet': ar('شكاية', 'everyday', { root: 'ش ك و' }),

  /* س ج ل — record */
  sicil: ar('سجل', 'formal', { root: 'س ج ل' }),

  /* ب ر ك — blessing */
  tebrik: ar('تبريك', 'everyday', { root: 'ب ر ك' }),
  mübarek: ar('مبارك', 'everyday', { root: 'ب ر ك' }),

  /* ج ن ز — funeral */
  cenaze: ar('جنازة', 'everyday', { root: 'ج ن ز' }),

  /* ع ز ي — consolation */
  taziye: ar('تعزية', 'formal', { root: 'ع ز ي' }),

  /* ح ل ل — permitting, dissolving */
  ihlal: ar('إخلال', 'formal', {
    root: 'خ ل ل',
    usage: b(
      'في التركية تخصّصت في «انتهاك الحقّ أو القانون».',
      'لە تورکیدا تایبەت بووە بە «پێشێلکردنی ماف».',
    ),
  }),
  helal: ar('حلال', 'everyday', { root: 'ح ل ل' }),

  /* ف س خ — annulment */
  fesih: ar('فسخ', 'formal', {
    root: 'ف س خ',
    usage: b(
      '⚠️ تسقط الحركة عند الإضافة: fesih → feshi، كما في fikir → fikri.',
      '⚠️ دەنگدار دەکەوێت: fesih → feshi.',
    ),
  }),

  /* ق د م — precedence, seniority */
  kıdem: ar('قِدَم', 'formal', { root: 'ق د م' }),

  /* ك ر م — generosity */
  ikramiye: ar('إكرامية', 'everyday', { root: 'ك ر م' }),

  /* س ف ط — sophistry (via Greek) */
  safsata: ar('سفسطة', 'academic', {
    usage: b(
      'يونانية الأصل (sophistes) دخلت العربية ثم التركية — لذلك لا جذر ثلاثياً لها.',
      'لە بنەڕەتدا یۆنانییە، بە عەرەبیدا هاتووەتە تورکی.',
    ),
  }),

  /* ق ي س — analogy */
  'kıyas': ar('قياس', 'academic', { root: 'ق ي س' }),

  /* ه ج و — satire */
  hiciv: ar('هجو', 'literary', {
    root: 'ه ج و',
    usage: b(
      '⚠️ تسقط الحركة عند الإضافة: hiciv → hicvi.',
      '⚠️ دەنگدار دەکەوێت: hiciv → hicvi.',
    ),
  }),

  /* و م أ — implication */
  ima: ar('إيماء', 'formal', { root: 'و م أ' }),

  /* ع م ر — building, repair */
  tamir: ar('تعمير', 'everyday', {
    root: 'ع م ر',
    usage: b(
      'في العربية «تعمير» = البناء والإعمار؛ وفي التركية ضاقت إلى «التصليح».',
      'لە تورکیدا بووە «چاککردنەوە».',
    ),
  }),
  imar: ar('إعمار', 'formal', { root: 'ع م ر' }),

  /* و ض ع — placing, installation */
  tesisat: ar('تأسيسات', 'technical', { root: 'أ س س' }),
  vaziyet: ar('وضعية', 'everyday', { root: 'و ض ع' }),
  mevzu: ar('موضوع', 'formal', { root: 'و ض ع' }),

  /* ق ب ض — receipt, grasping */

  /* ق س ط — instalment */
  kısım: ar('قسم', 'everyday', { root: 'ق س م' }),
  taksim: ar('تقسيم', 'formal', { root: 'ق س م' }),

  /* ع و د — returning */

  /* ب ه ر — spices (via Persian) */

  /* ق ص ب — butcher */
  kasap: ar('قصّاب', 'everyday', { root: 'ق ص ب' }),

  /* ل و ح — board, plate */
  levha: ar('لوحة', 'everyday', { root: 'ل و ح' }),

  /* ض ي ف — guest */
  misafirlik: ar('مسافرة/ضيافة', 'everyday', {
    confidence: 'likely',
    usage: b(
      '«misafir» عربية «مسافر»، وتحوّل معناها في التركية من المسافر إلى الضيف. و«misafirlik» بناء تركي عليها.',
      '«misafir» لە «مسافر»ەوەیە، لە تورکیدا بووە «میوان».',
    ),
  }),

  /* ج ز أ — part */
  'cüzdan': ar('جزءدان', 'everyday', {
    confidence: 'likely',
    usage: b(
      'مركّبة من «جزء» العربية و«دان» الفارسية (وعاء) — أي حافظة الأجزاء.',
      'لێکدراوە لە «جزء»ی عەرەبی و «دان»ی فارسی.',
    ),
  }),

  /* ع ب ر — consideration, reputation */
  itibar: ar('اعتبار', 'formal', {
    root: 'ع ب ر',
    usage: b(
      'في العربية «اعتبار» = أخذ الأمر بعين الحسبان؛ وفي التركية غلبت عليها «السمعة».',
      'لە تورکیدا زیاتر واتای «ناوبانگ» دەدات.',
    ),
  }),
  tabir: ar('تعبير', 'formal', { root: 'ع ب ر' }),

  /* ح د د — limit */

  /* ك ل ل — totality */

  /* ================================================================== */
  /* Phase 7b — words already taught, etymology now recorded             */
  /* ================================================================== */

  /* ع ي ش · أ ذ ن · ق ي د — earning, permission, registration */
  'maaş': ar('معاش', 'everyday', { root: 'ع ي ش', sourcePron: 'maʿāš' }),
  izin: ar('إذن', 'everyday', { root: 'أ ذ ن', sourcePron: 'iḏn' }),
  'kayıt': ar('قيد', 'everyday', {
    root: 'ق ي د',
    usage: b(
      'في العربية «قيد» = ما يُقيّد؛ وفي التركية غلب عليها معنى التسجيل الإداري.',
      'لە تورکیدا واتای تۆمارکردنی کارگێڕی زاڵە.',
    ),
  }),

  /* م ك ن — possibility */
  'imkânsız': ar('إمكان + -sız', 'everyday', {
    root: 'م ك ن',
    usage: b(
      'هجين: جذر «إمكان» العربي مع لاحقة النفي التركية «-sız». بناء شائع جداً.',
      'تێکەڵە: ڕەگی عەرەبی + پاشگری نەرێنی تورکی «-sız».',
    ),
  }),
  mevcut: ar('موجود', 'formal', { root: 'و ج د', sourcePron: 'mawǧūd' }),

  /* خ ب ر — news */
  muhabir: ar('مخابر', 'everyday', { root: 'خ ب ر' }),

  /* ط ر ف — side */
  'tarafsız': ar('طرف + -sız', 'formal', {
    root: 'ط ر ف',
    usage: b(
      'هجين آخر: «taraf» عربية و«-sız» تركية — أي «بلا طرف» = محايد.',
      'تێکەڵەیەکی تر: «taraf» + «-sız».',
    ),
  }),

  /* ش خ ص — diagnosis */
  'teşhis': ar('تشخيص', 'technical', { root: 'ش خ ص' }),

  /* ح و ج — need */
  'ihtiyaç': ar('احتياج', 'everyday', { root: 'ح و ج' }),

  /* ق د ر — amount */
  miktar: ar('مقدار', 'everyday', { root: 'ق د ر', sourcePron: 'miqdār' }),

  /* ر ف ع — promotion */
  terfi: ar('ترفيع', 'formal', { root: 'ر ف ع' }),

  /* د ق ق — precision */
  dikkat: ar('دقّة', 'everyday', { root: 'د ق ق' }),

  /* ش ب ه — doubt, resemblance */
  'şüphe': ar('شبهة', 'everyday', { root: 'ش ب ه' }),

  /* خ ر ج — outgoing */
  'harç': ar('خرج', 'formal', {
    root: 'خ ر ج',
    usage: b(
      'في التركية رسم دراسي أو ضريبة صغيرة؛ من «خرج» بمعنى النفقة.',
      'لە تورکیدا واتای باج یان کرێی خوێندن.',
    ),
  }),
  'ihracat': ar('إخراجات', 'technical', { root: 'خ ر ج' }),

  /* د خ ل — incoming */
  ithalat: ar('إدخالات', 'technical', { root: 'د خ ل' }),
  'müdahale': ar('مداخلة', 'formal', { root: 'د خ ل' }),

  /* س ي ر — motion, viewing */
  seyirci: ar('سائر/سير + -ci', 'everyday', {
    root: 'س ي ر',
    usage: b(
      'هجين: «seyir» عربية (سير، مشاهدة) مع لاحقة الفاعل التركية «-ci».',
      'تێکەڵە: «seyir»ی عەرەبی + پاشگری «-ci».',
    ),
  }),

  /* س و ح — open ground */
  saha: ar('ساحة', 'everyday', { root: 'س و ح' }),

  /* س و ي — level */
  seviye: ar('سويّة', 'everyday', { root: 'س و ي' }),

  /* ش ع ب — branch */
  'şube': ar('شعبة', 'everyday', { root: 'ش ع ب' }),

  /* م ث ل — representation */
  temsilci: ar('تمثيل + -ci', 'formal', {
    root: 'م ث ل',
    usage: b(
      'هجين: «temsil» عربية مع لاحقة الفاعل التركية.',
      'تێکەڵە: «temsil» + «-ci».',
    ),
  }),

  /* و ط ن — homeland */
  'vatandaş': ar('وطن + -daş', 'everyday', {
    root: 'و ط ن',
    usage: b(
      'هجين: جذر «وطن» العربي مع لاحقة المشاركة التركية «-daş» — «شريك الوطن».',
      'تێکەڵە: ڕەگی «وطن» + پاشگری هاوبەشی «-daş».',
    ),
  }),

  /* ه ي ج — excitement */
  heyecan: ar('هيجان', 'everyday', {
    root: 'ه ي ج',
    usage: b(
      '⚠️ انزياح مهمّ: «هيجان» العربية اضطراب عنيف؛ و«heyecan» التركية حماس إيجابي غالباً.',
      '⚠️ لە تورکیدا زۆرجار ئەرێنییە: جۆش و خۆشی.',
    ),
  }),

  /* ح ض ر — presence, calm */
  huzur: ar('حضور', 'everyday', {
    root: 'ح ض ر',
    usage: b(
      '⚠️ انزياح كبير: «حضور» العربية = المجيء؛ و«huzur» التركية = الطمأنينة والسكينة.',
      '⚠️ گۆڕانێکی گەورە: لە تورکیدا واتای ئاسوودەیی دەدات.',
    ),
  }),

  /* ذ ك ر — negotiation */
  'müzakere': ar('مذاكرة', 'formal', { root: 'ذ ك ر' }),

  /* ك ل ف — proposal, cost */
  teklif: ar('تكليف', 'everyday', {
    root: 'ك ل ف',
    usage: b(
      'في العربية «تكليف» = إلزام بمهمّة؛ وفي التركية صارت «العرض/الاقتراح».',
      'لە تورکیدا بووە «پێشنیار».',
    ),
  }),

  /* س ب ب — cause */
  sebep: ar('سبب', 'everyday', { root: 'س ب ب' }),

  /* ف ر ق — difference */
  fark: ar('فرق', 'everyday', { root: 'ف ر ق' }),
  'farkındalık': ar('فرق + -lık', 'formal', {
    root: 'ف ر ق',
    usage: b(
      'مبنيّة على «fark» العربية بلواحق تركية خالصة: fark → farkında → farkındalık.',
      'لەسەر «fark» بە پاشگری تورکی دروست بووە.',
    ),
  }),

  /* ف ي ض · ض ر ر — interest, loss */
  faiz: ar('فائض', 'technical', {
    root: 'ف ي ض',
    confidence: 'likely',
    usage: b(
      'يُرجَّح أنها من «فائض»؛ المعنى المالي (الربا/الفائدة) تركي متأخّر.',
      'زۆرتر وادەزانرێت لە «فائض»ەوە بێت.',
    ),
  }),
  zarar: ar('ضرر', 'everyday', { root: 'ض ر ر' }),

  /* م و ل · ح ص ص — money, share */
  maliyet: ar('مالية', 'formal', { root: 'م و ل' }),
  hisse: ar('حصّة', 'technical', { root: 'ح ص ص' }),

  /* د ر ك — procurement */
  tedarik: ar('تدارك', 'technical', { root: 'د ر ك' }),

  /* ح ر م — privacy */
  mahremiyet: ar('محرميّة', 'academic', { root: 'ح ر م' }),

  /* د ل ل · ج ز ي · د ب ر — evidence, penalty, measure */
  delil: ar('دليل', 'formal', { root: 'د ل ل' }),
  ceza: ar('جزاء', 'everyday', { root: 'ج ز ي' }),
  tedbir: ar('تدبير', 'formal', { root: 'د ب ر' }),

  /* أ ث ر · ث ب ت — effect, establishing */
  tesir: ar('تأثير', 'literary', { root: 'أ ث ر' }),
  tespit: ar('تثبيت', 'formal', {
    root: 'ث ب ت',
    usage: b(
      'في التركية «الإثبات/التحديد بدقّة» — من أكثر كلمات التقارير الرسمية استعمالاً.',
      'لە تورکیدا «دیاریکردنی ورد».',
    ),
  }),

  /* خ م ن · ر ج ح · ص د ف — guessing, preferring, chance */
  tahmin: ar('تخمين', 'everyday', { root: 'خ م ن' }),
  tercih: ar('ترجيح', 'everyday', { root: 'ر ج ح' }),
  'tesadüf': ar('تصادف', 'everyday', { root: 'ص د ف' }),

  /* ح ص ل · ه م م — produce, importance */
  'mahsul': ar('محصول', 'formal', { root: 'ح ص ل' }),
  'mühim': ar('مهمّ', 'formal', { root: 'ه م م' }),

  /* ف ق ر · ح و ط · ق ت ل */
  'fıkra': ar('فقرة', 'everyday', {
    root: 'ف ق ر',
    usage: b(
      '⚠️ معنيان بعيدان: «فقرة» في القانون (بند)، و«نكتة» في الكلام اليومي.',
      '⚠️ دوو واتا: بڕگەی یاسایی، و گاڵتە.',
    ),
  }),
  muhit: ar('محيط', 'literary', { root: 'ح و ط' }),
  katil: ar('قاتل', 'everyday', { root: 'ق ت ل' }),
  afet: ar('آفة', 'formal', {
    usage: b(
      'الجذر مختلف عليه فلم يُذكر. المعنى التركي «كارثة طبيعية» أضيق من العربية.',
      'ڕەگەکە جێی گفتوگۆیە بۆیە نەنووسراوە.',
    ),
  }),

  /* Function words that came from Arabic — and stayed */
  fakat: ar('فقط', 'formal', {
    root: 'ف ق ط',
    usage: b(
      '⚠️ انزياح كامل: «فقط» العربية = لا غير؛ و«fakat» التركية = لكن. لا علاقة للمعنيين.',
      '⚠️ گۆڕانی تەواو: لە تورکیدا واتای «بەڵام» دەدات.',
    ),
  }),
  'lakin': ar('لكن', 'literary', {
    usage: b(
      'أدبية اليوم؛ الكلمة اليومية هي «ama».',
      'ئەدەبییە؛ وشەی ڕۆژانە «ama»یە.',
    ),
  }),
  'rağmen': ar('رغم', 'formal', { root: 'ر غ م' }),
  asla: ar('أصلاً', 'everyday', {
    root: 'أ ص ل',
    usage: b(
      '⚠️ انزياح: «أصلاً» العربية = في الأصل؛ و«asla» التركية = أبداً، قطعاً (مع النفي).',
      '⚠️ لە تورکیدا واتای «هەرگیز» دەدات.',
    ),
  }),
  zaten: ar('ذاتاً', 'everyday', {
    usage: b(
      'صارت في التركية «أصلاً، على أي حال» — ومن أكثر كلمات الحديث اليومي تكراراً.',
      'لە تورکیدا واتای «بەهەرحاڵ» دەدات.',
    ),
  }),
  takriben: ar('تقريباً', 'formal', { root: 'ق ر ب' }),
  tamamen: ar('تماماً', 'everyday', { root: 'ت م م' }),
  'estağfurullah': ar('أستغفر الله', 'everyday', {
    root: 'غ ف ر',
    usage: b(
      '⚠️ لا تُستعمل للاستغفار بل للردّ على الشكر أو المديح: «العفو، لا شكر على واجب».',
      '⚠️ بۆ وەڵامدانەوەی سوپاس بەکاردێت.',
    ),
  }),

  /* Academic and legal register */
  husus: ar('خصوص', 'formal', { root: 'خ ص ص' }),
  vesile: ar('وسيلة', 'formal', { root: 'و س ل' }),
  istikrar: ar('استقرار', 'academic', { root: 'ق ر ر' }),
  'teşvik': ar('تشويق', 'formal', {
    root: 'ش و ق',
    usage: b(
      'في العربية «تشويق» = إثارة الرغبة؛ وفي التركية صارت «الحفز والدعم» بمعنى اقتصادي.',
      'لە تورکیدا واتای «هاندان»ی ئابووری دەدات.',
    ),
  }),
  'itiraz': ar('اعتراض', 'formal', { root: 'ع ر ض' }),
  'tazminat': ar('تضمينات', 'formal', { root: 'ض م ن' }),
  temyiz: ar('تمييز', 'formal', { root: 'م ي ز' }),
  dava: ar('دعوى', 'everyday', { root: 'د ع و' }),
  muhakeme: ar('محاكمة', 'formal', { root: 'ح ك م' }),
  'teamül': ar('تعامل', 'academic', { root: 'ع م ل' }),
  'içtihat': ar('اجتهاد', 'academic', { root: 'ج ه د' }),
  mevzuat: ar('موضوعات', 'formal', { root: 'و ض ع' }),
  'mütalaa': ar('مطالعة', 'formal', { root: 'ط ل ع' }),
  'teşebbüs': ar('تشبّث', 'formal', {
    root: 'ش ب ث',
    usage: b(
      'في التركية «المبادرة/الشروع»؛ في القانون الجنائي «الشروع في الجريمة».',
      'لە تورکیدا «دەستپێکردن»ە.',
    ),
  }),

};
