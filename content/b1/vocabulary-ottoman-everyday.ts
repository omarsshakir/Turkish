import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * B1–B2 vocabulary: Arabic-derived words that never left everyday Turkish.
 *
 * These arrived here backwards, and the route is worth recording. While
 * extending the Arabic-origin dictionary, the validator refused fourteen new
 * etymology entries because the words they described were **not in the
 * vocabulary at all** — `âdet`, `kısım`, `helal`, `mevzu`, `vaziyet`. The
 * dictionary was about to document words the curriculum could not teach.
 *
 * That is exactly the check earning its keep, and the right fix was not to
 * delete the etymologies but to add the words: every one of them is in daily
 * Turkish use, and every one is transparent to an Arabic speaker. They are the
 * cheapest vocabulary this platform's students will ever acquire.
 *
 * `mevzu` and `vaziyet` deserve their register note: both are *spoken* Turkish
 * where the written language prefers `konu` and `durum`. A student who only
 * reads will not meet them; a student who only listens will meet nothing else.
 */

/* ---------------- everyday, and unmistakably Arabic ---------------- */

const DAILY: VocabItem[] = pack('nouns', 'b1', 'noun', [
  {
    ...w('âdet', 'â-DET', 'عادة، عُرف', 'داب و نەریت',
      ['Burada âdet böyle.', 'bu-ra-DA â-DET böy-LE', 'العادة هنا هكذا.', 'لێرە دابەکە وایە.']),
    collocations: ['âdet olmak', 'âdet yerini bulsun'],
    related: ['gelenek'],
    note: b(
      '⚠️ الشدّة على â تفرّقها عن «adet» = عدد. الكلمتان من جذرين مختلفين تماماً، والنطق وحده يفصل.',
      '⚠️ â جیای دەکاتەوە لە «adet» = ژمارە.',
    ),
  },
  {
    ...w('kısım', 'kı-SIM', 'قسم، جزء', 'بەش',
      ['Kitabın ilk kısmını okudum.', 'ki-ta-BIN İLK kıs-mı-NI o-ku-DUM', 'قرأت القسم الأول من الكتاب.', 'بەشی یەکەمی کتێبەکەم خوێندەوە.']),
    collocations: ['bir kısmı', 'büyük kısmı'],
    note: b(
      '⚠️ تسقط الحركة عند الإضافة: kısım → kısmı. نفس نمط fikir → fikri.',
      '⚠️ دەنگدار دەکەوێت: kısım → kısmı.',
    ),
  },
  {
    ...w('taksim', 'tak-SİM', 'تقسيم', 'دابەشکردن',
      ['Miras taksimi uzun sürdü.', 'mi-RAS tak-si-Mİ u-ZUN sür-DÜ', 'طال تقسيم الميراث.', 'دابەشکردنی میرات درێژەی کێشا.']),
    related: ['kısım', 'bölmek'],
    note: b(
      'هي أيضاً اسم أشهر ميدان في إسطنبول — «Taksim Meydanı»، سُمّي لتقسيم مياه المدينة هناك.',
      'ناوی ناوچەیەکی ناودارە لە ئەستەنبوڵ.',
    ),
  },
  {
    ...w('vaziyet', 'va-zi-YET', 'وضع، حالة', 'دۆخ',
      ['Vaziyet iyi görünmüyor.', 'va-zi-YET i-Yİ gö-rün-mü-YOR', 'الوضع لا يبدو جيداً.', 'دۆخەکە باش دیار نییە.']),
    related: ['durum'],
    note: b(
      'مرادفة لـ «durum»، لكنها أكثر في الكلام وأقلّ في الكتابة الرسمية.',
      'هاوواتای «durum»ە، بەڵام زیاتر لە قسەدا.',
    ),
  },
  {
    ...w('mevzu', 'mev-ZU', 'موضوع (في الكلام)', 'بابەت',
      ['Mevzu ne, anlatsana.', 'mev-ZU ne an-lat-sa-NA', 'ما الموضوع، احكِ.', 'بابەتەکە چییە، بیڵێ.']),
    related: ['konu'],
    note: b(
      '⚠️ عامّية إلى حدّ ما: في الكتابة يُقال «konu». استعمالها في تقرير رسمي يبدو مسترخياً أكثر من اللازم.',
      '⚠️ لە نووسیندا «konu» دەوترێت.',
    ),
  },
  {
    ...w('tabir', 'ta-BİR', 'تعبير، اصطلاح', 'دەربڕین',
      ['Tabiri caizse, işler karıştı.', 'ta-bi-Rİ ca-iz-SE iş-LER ka-rış-TI', 'إن جاز التعبير، اختلطت الأمور.', 'ئەگەر بەم شێوەیە بڵێم، کارەکان تێکەڵ بوون.']),
    collocations: ['tabiri caizse', 'yerinde bir tabir'],
    related: ['ifade'],
  },
  {
    ...w('imar', 'i-MAR', 'إعمار، تخطيط عمراني', 'ئاوەدانکردنەوە',
      ['İmar planı değişti.', 'i-MAR pla-NI de-ğiş-Tİ', 'تغيّرت خطّة التخطيط العمراني.', 'پلانی ئاوەدانکردنەوە گۆڕا.']),
    collocations: ['imar planı', 'imar izni'],
    related: ['tamir'],
    note: b(
      'من الجذر نفسه الذي أعطى «tamir» — البناء والتصليح والعمر كلها من ع م ر.',
      'لە هەمان ڕەگی «tamir»ەوە.',
    ),
  },
]);

/* ---------------- greeting and blessing ---------------- */

const BLESSING: VocabItem[] = pack('expressions', 'b1', 'adjective', [
  {
    ...w('mübarek', 'mü-ba-REK', 'مبارك', 'پیرۆز',
      ['Bayramınız mübarek olsun.', 'bay-ra-mı-NIZ mü-ba-REK ol-SUN', 'عيدكم مبارك.', 'جەژنتان پیرۆز بێت.']),
    collocations: ['mübarek olsun', 'mübarek gün'],
    note: b(
      'صيغة التهنئة الأساسية في الأعياد: «Bayramınız mübarek olsun».',
      'شێوەی سەرەکی پیرۆزبایی لە جەژندا.',
    ),
  },
  {
    ...w('helal', 'he-LAL', 'حلال؛ مستحقّ عن جدارة', 'حەڵاڵ',
      ['Helal olsun sana!', 'he-LAL ol-SUN sa-NA', 'أحسنت! تستحقّها.', 'حەڵاڵت بێت!']),
    opposite: ['haram'],
    senses: [
      sense('تعبير إعجاب: أحسنت', 'دەربڕینی پەسن',
        ['Bu başarı helalinden.', 'BU ba-şa-RI he-la-lin-DEN', 'هذا نجاح مستحقّ.', 'ئەم سەرکەوتنە حەڵاڵە.']),
    ],
    note: b(
      '⚠️ استعمالها اليومي غالباً غير ديني: «Helal olsun!» تعني «أحسنت، تستحقّها».',
      '⚠️ بەکارهێنانی ڕۆژانەی زۆرجار ئایینی نییە.',
    ),
  },
]);

/* ---------------- the formal register ---------------- */

const FORMAL: VocabItem[] = pack('formal', 'b2', 'noun', [
  {
    ...w('tasdik', 'tas-DİK', 'تصديق، مصادقة', 'پەسەندکردن',
      ['Belgenin noter tasdiki gerekiyor.', 'bel-ge-NİN no-TER tas-di-Kİ ge-re-ki-YOR', 'تلزم مصادقة كاتب العدل على الوثيقة.', 'پێویستە بەڵگەنامەکە لەلایەن نۆتەرەوە پەسەند بکرێت.']),
    collocations: ['tasdik etmek', 'noter tasdiki'],
    related: ['onay'],
  },
  {
    ...w('vefat', 've-FAT', 'وفاة', 'کۆچی دوایی',
      ['Vefat haberini yeni duydum.', 've-FAT ha-be-ri-Nİ ye-Nİ duy-DUM', 'سمعت خبر الوفاة للتوّ.', 'تازە هەواڵی کۆچی دواییم بیست.']),
    collocations: ['vefat etmek', 'vefat ilanı'],
    note: b(
      'الصيغة المهذّبة؛ «ölmek» مباشرة وقد تُعدّ جافّة في نعي أو خبر رسمي.',
      'شێوەی بەڕێزە؛ «ölmek» ڕاستەوخۆترە.',
    ),
  },
  {
    ...w('kudret', 'kud-RET', 'قدرة، جبروت', 'توانا',
      ['Doğanın kudreti karşısında acizdik.', 'do-ğa-NIN kud-re-Tİ kar-şı-sın-DA a-ciz-DİK', 'كنّا عاجزين أمام قدرة الطبيعة.', 'لەبەردەم توانای سروشتدا بێدەسەڵات بووین.']),
    related: ['iktidar', 'güç'],
    note: b(
      'أدبية ومرتفعة؛ الكلمة اليومية هي «güç» أو «kuvvet».',
      'ئەدەبی و بەرزە؛ وشەی ڕۆژانە «güç»ە.',
    ),
  },
  {
    ...w('tahvil', 'tah-VİL', 'سند مالي؛ تحويل', 'بۆند',
      ['Devlet tahvili aldı.', 'dev-LET tah-vi-Lİ al-DI', 'اشترى سنداً حكومياً.', 'بۆندی حکومی کڕی.']),
    collocations: ['devlet tahvili'],
    note: b(
      'المعنى المالي هو الغالب اليوم؛ معنى «التحويل» العامّ بقي في اللغة الرسمية فقط.',
      'واتای دارایی ئەمڕۆ زاڵترە.',
    ),
  },
]);

const LEGAL: VocabItem[] = pack('law', 'b2', 'adjective', [
  {
    ...w('meşru', 'meş-RU', 'مشروع، شرعي', 'یاسایی',
      ['Meşru bir talep bu.', 'meş-RU bir ta-LEP BU', 'هذا مطلب مشروع.', 'ئەمە داواکارییەکی یاساییە.']),
    opposite: ['gayrimeşru'],
    related: ['meşruiyet'],
  },
]);

export const B1_VOCABULARY_OTTOMAN_EVERYDAY: VocabItem[] = [
  ...DAILY,
  ...BLESSING,
  ...FORMAL,
  ...LEGAL,
];
