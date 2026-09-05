import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A1 vocabulary: core verbs that were missing.
 *
 * A coverage audit of the forty commonest Turkish verbs found these absent —
 * `aramak`, `koymak`, `girmek`, `çıkmak` and the rest are the verbs a beginner
 * needs in week two, and they were only appearing inside example sentences
 * rather than as words a student could look up or revise.
 *
 * They are grouped by the case they govern, because that is the thing an
 * Arabic or Kurdish speaker actually gets wrong: `girmek` takes the dative
 * (`eve girdim`), `çıkmak` the ablative (`evden çıktım`).
 */

/* ---------------- putting and moving things ---------------- */

const HANDLING: VocabItem[] = pack('verbs', 'a1', 'verb', [
  {
    ...w('koymak', 'koy-MAK', 'يضع', 'دانان',
      ['Kitabı masaya koydum.', 'ki-ta-BI ma-sa-YA koy-DUM', 'وضعت الكتاب على الطاولة.', 'کتێبەکەم خستە سەر مێزەکە.']),
    collocations: ['masaya koymak', 'içine koymak'],
    note: b(
      'المكان يأخذ حالة الاتّجاه (-a/-e): «masaya koydum» لا «masada koydum».',
      'شوێنەکە حاڵەتی ئاراستە (-a/-e) وەردەگرێت: «masaya koydum».',
    ),
  },
  {
    ...w('tutmak', 'tut-MAK', 'يمسك، يمسك بـ', 'گرتن',
      ['Elimi tuttu.', 'e-li-Mİ tut-TU', 'أمسك بيدي.', 'دەستمی گرت.']),
    collocations: ['elini tutmak', 'söz tutmak'],
  },
  {
    ...w('bırakmak', 'bı-rak-MAK', 'يترك', 'جێهێشتن',
      ['Çantamı evde bıraktım.', 'çan-ta-MI ev-DE bı-rak-TIM', 'تركت حقيبتي في البيت.', 'جانتاکەم لە ماڵەوە جێهێشت.']),
    collocations: ['sigarayı bırakmak', 'evde bırakmak'],
    opposite: ['almak'],
  },
  {
    ...w('göndermek', 'gön-der-MEK', 'يرسل', 'ناردن',
      ['Sana bir mesaj gönderdim.', 'sa-NA bir me-SAJ gön-der-DİM', 'أرسلت لك رسالة.', 'نامەیەکم بۆ ناردیت.']),
    collocations: ['mesaj göndermek', 'para göndermek'],
  },
  {
    ...w('götürmek', 'gö-tür-MEK', 'يأخذ شيئاً معه إلى مكان آخر', 'بردن',
      ['Kitabı okula götürdüm.', 'ki-ta-BI o-ku-LA gö-tür-DÜM', 'أخذت الكتاب إلى المدرسة.', 'کتێبەکەم بردە قوتابخانە.']),
    related: ['getirmek'],
    note: b(
      '«götürmek» يبتعد عن المتكلّم و«getirmek» يقترب منه — الفرق نفسه بين «ذهب بـ» و«جاء بـ».',
      '«götürmek» لە قسەکەرەوە دوور دەکەوێتەوە و «getirmek» نزیک دەبێتەوە.',
    ),
  },
]);

/* ---------------- in and out ---------------- */

const MOTION: VocabItem[] = pack('verbs', 'a1', 'verb', [
  {
    ...w('girmek', 'gir-MEK', 'يدخل', 'چوونە ژوورەوە',
      ['Sınıfa girdi.', 'sı-nı-FA gir-Dİ', 'دخل الصفّ.', 'چووە ناو پۆلەکە.']),
    opposite: ['çıkmak'],
    note: b(
      '⚠️ يأخذ حالة الاتّجاه (-a/-e): «eve girdim» = دخلت البيت.',
      '⚠️ حاڵەتی ئاراستە (-a/-e) وەردەگرێت: «eve girdim».',
    ),
  },
  {
    ...w('çıkmak', 'çık-MAK', 'يخرج؛ يصعد', 'دەرچوون؛ سەرکەوتن',
      ['Evden sekizde çıktım.', 'ev-DEN se-kiz-DE çık-TIM', 'خرجت من البيت في الثامنة.', 'لە کاتژمێر هەشت لە ماڵەوە دەرچووم.']),
    opposite: ['girmek'],
    senses: [
      sense('يصعد', 'سەرکەوتن',
        ['Merdivenden çıktık.', 'mer-di-ven-DEN çık-TIK', 'صعدنا على الدرج.', 'بە پلیکانەدا سەرکەوتین.']),
    ],
    note: b(
      '⚠️ يأخذ حالة الابتداء (-dan/-den): «evden çıktım» = خرجت من البيت.',
      '⚠️ حاڵەتی سەرچاوە (-dan/-den) وەردەگرێت: «evden çıktım».',
    ),
  },
  {
    ...w('dönmek', 'dön-MEK', 'يعود؛ يستدير', 'گەڕانەوە؛ سوڕانەوە',
      ['Akşam eve döndüm.', 'ak-ŞAM e-VE dön-DÜM', 'عدت إلى البيت مساءً.', 'ئێوارە گەڕامەوە ماڵەوە.']),
    collocations: ['geri dönmek', 'sağa dönmek'],
  },
  {
    ...w('yatmak', 'yat-MAK', 'يستلقي، ينام (يأوي إلى الفراش)', 'ڕاکشان',
      ['Erken yattım.', 'er-KEN yat-TIM', 'نمت مبكراً.', 'زوو ڕاکشام.']),
    opposite: ['kalkmak'],
    note: b(
      '«yatmak» = يأوي إلى الفراش، و«uyumak» = ينام فعلاً. الفرق مهم.',
      '«yatmak» = ڕاکشان لەسەر جێگا، «uyumak» = خەوتنی ڕاستەقینە.',
    ),
  },
]);

/* ---------------- everyday actions ---------------- */

const DAILY: VocabItem[] = pack('verbs', 'a1', 'verb', [
  {
    ...w('aramak', 'a-ra-MAK', 'يتّصل؛ يبحث عن', 'تەلەفۆنکردن؛ گەڕان',
      ['Annemi aradım.', 'an-ne-Mİ a-ra-DIM', 'اتّصلت بأمّي.', 'تەلەفۆنم بۆ دایکم کرد.']),
    senses: [
      sense('يبحث عن', 'گەڕان بەدوای',
        ['Anahtarımı arıyorum.', 'a-nah-ta-rı-MI a-rı-yo-RUM', 'أبحث عن مفتاحي.', 'بەدوای کلیلەکەمدا دەگەڕێم.']),
    ],
    collocations: ['telefonla aramak', 'iş aramak'],
    note: b(
      'معنيان شائعان جداً: الاتّصال هاتفياً، والبحث عن شيء — والسياق يفصل بينهما.',
      'دوو واتای زۆر باو: پەیوەندی تەلەفۆنی، و گەڕان بەدوای شتێکدا.',
    ),
  },
  {
    ...w('giymek', 'giy-MEK', 'يلبس', 'لەبەرکردن',
      ['Montunu giy, hava soğuk.', 'mon-tu-NU giy ha-VA so-ĞUK', 'البس معطفك، الجوّ بارد.', 'چاکەتەکەت لەبەر بکە، کەشەکە ساردە.']),
    opposite: ['çıkarmak'],
    note: b(
      '⚠️ للملابس فقط. النظارة والساعة تأخذ «takmak».',
      '⚠️ تەنیا بۆ جلوبەرگ. چاویلکە و کاتژمێر «takmak» وەردەگرن.',
    ),
  },
  {
    ...w('yıkamak', 'yı-ka-MAK', 'يغسل', 'شوشتن',
      ['Ellerini yıka.', 'el-le-ri-Nİ yı-KA', 'اغسل يديك.', 'دەستەکانت بشۆ.']),
    collocations: ['el yıkamak', 'bulaşık yıkamak', 'araba yıkamak'],
  },
  {
    ...w('hazırlamak', 'ha-zır-la-MAK', 'يحضّر، يجهّز', 'ئامادەکردن',
      ['Kahvaltıyı hazırladım.', 'kah-val-tı-YI ha-zır-la-DIM', 'حضّرت الفطور.', 'نانی بەیانیم ئامادە کرد.']),
    collocations: ['yemek hazırlamak', 'sunum hazırlamak'],
  },
  {
    ...w('oynamak', 'oy-na-MAK', 'يلعب', 'یاریکردن',
      ['Çocuklar bahçede oynuyor.', 'ço-cuk-LAR bah-çe-DE oy-nu-YOR', 'الأطفال يلعبون في الحديقة.', 'منداڵەکان لە باخچەکە یاری دەکەن.']),
    collocations: ['oyun oynamak', 'futbol oynamak'],
  },
  {
    ...w('kullanmak', 'kul-lan-MAK', 'يستعمل؛ يقود', 'بەکارهێنان؛ لێخوڕین',
      ['Bu programı her gün kullanıyorum.', 'BU prog-ra-MI HER GÜN kul-la-nı-yo-RUM', 'أستعمل هذا البرنامج كل يوم.', 'ئەم پڕۆگرامە هەموو ڕۆژێک بەکاردەهێنم.']),
    senses: [
      sense('يقود سيارة', 'ئۆتۆمبێل لێخوڕین',
        ['Araba kullanabiliyor musun?', 'a-ra-BA kul-la-na-bi-li-YOR mu-SUN', 'هل تستطيع قيادة السيارة؟', 'دەتوانیت ئۆتۆمبێل لێبخوڕیت؟']),
    ],
  },
]);

/* ---------------- learning and showing ---------------- */

const SCHOOL: VocabItem[] = pack('verbs', 'a1', 'verb', [
  {
    ...w('öğrenmek', 'öğ-ren-MEK', 'يتعلّم', 'فێربوون',
      ['Türkçe öğreniyorum.', 'türk-ÇE öğ-re-ni-yo-RUM', 'أتعلّم التركية.', 'تورکی فێردەبم.']),
    opposite: ['öğretmek'],
  },
  {
    ...w('göstermek', 'gös-ter-MEK', 'يُري، يعرض', 'پیشاندان',
      ['Bana yolu gösterdi.', 'ba-NA yo-LU gös-ter-Dİ', 'أراني الطريق.', 'ڕێگاکەی پیشاندام.']),
    collocations: ['yol göstermek', 'ilgi göstermek'],
  },
  {
    ...w('demek', 'de-MEK', 'يقول', 'گوتن',
      ['“Tamam” dedi.', 'ta-MAM de-Dİ', 'قال: «حسناً».', '«باشە» گوتی.']),
    related: ['söylemek'],
    note: b(
      '«demek» يسبقه الكلام المنقول حرفياً؛ «söylemek» يأخذ مفعولاً عادياً: «bir şey söyledi».',
      '«demek» قسەی ڕاستەوخۆی پێش دەکەوێت؛ «söylemek» بەرکاری ئاسایی وەردەگرێت.',
    ),
  },
]);

export const A1_VOCABULARY_CORE_VERBS: VocabItem[] = [
  ...HANDLING,
  ...MOTION,
  ...DAILY,
  ...SCHOOL,
];
