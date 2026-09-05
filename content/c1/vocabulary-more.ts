import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * C1 vocabulary, expansion pass.
 *
 * The register of a research paper and a serious newspaper: the machinery of
 * scientific argument, and the abstract nouns that carry an academic claim.
 */

const SCIENCE: VocabItem[] = pack('science', 'c1', 'noun', [
  w('gen', 'GEN', 'جين', 'جین',
    ['Bu özellik genlerle aktarılır.', 'BU ö-zel-LİK gen-ler-LE ak-ta-rı-LIR', 'تُورَّث هذه الخاصّية بالجينات.', 'ئەم تایبەتمەندییە بە جینەکان دەگوازرێتەوە.']),
  w('hipotez', 'hi-po-TEZ', 'فرضية', 'گریمانە',
    ['Hipotez deneyle sınandı.', 'hi-po-TEZ de-ney-LE sı-nan-DI', 'اختُبرت الفرضية بالتجربة.', 'گریمانەکە بە تاقیکردنەوە تاقی کرایەوە.']),
  w('istatistik', 'is-ta-tis-TİK', 'إحصاء', 'ئامار',
    ['İstatistikler bunu doğruluyor.', 'is-ta-tis-tik-LER bu-NU doğ-ru-lu-YOR', 'تؤكّد الإحصاءات ذلك.', 'ئامارەکان ئەمە پشتڕاست دەکەنەوە.']),
  w('nedensellik', 'ne-den-sel-LİK', 'سببية', 'هۆکاری',
    ['Korelasyon nedensellik demek değildir.', 'ko-re-las-YON ne-den-sel-LİK de-MEK de-ğil-DİR', 'الارتباط لا يعني السببية.', 'پەیوەندی واتای هۆکاری نییە.']),
  w('madde', 'mad-DE', 'مادّة، بند', 'ماددە',
    ['Maddenin üç hâli vardır.', 'mad-de-NİN ÜÇ hâ-Lİ var-DIR', 'للمادّة ثلاث حالات.', 'ماددە سێ حاڵەتی هەیە.']),
  w('element', 'e-le-MENT', 'عنصر', 'توخم',
    ['Periyodik tabloda 118 element var.', 'pe-ri-yo-DİK tab-lo-DA yüz on se-KİZ e-le-MENT var', 'في الجدول الدوري 118 عنصراً.', 'لە خشتەی دەورییدا ١١٨ توخم هەیە.']),
  w('bileşik', 'bi-le-ŞİK', 'مركّب', 'تێکەڵە',
    ['Su bir kimyasal bileşiktir.', 'SU bir kim-ya-SAL bi-le-şik-TİR', 'الماء مركّب كيميائي.', 'ئاو تێکەڵەیەکی کیمیاییە.']),
  w('tepkime', 'tep-ki-ME', 'تفاعل كيميائي', 'کارلێکی کیمیایی',
    ['Tepkime ısı açığa çıkardı.', 'tep-ki-ME I-sı a-çı-ĞA çı-kar-DI', 'أطلق التفاعل حرارة.', 'کارلێکەکە گەرمی دەرکرد.']),
  w('ekosistem', 'e-ko-sis-TEM', 'نظام بيئي', 'ژینگە',
    ['Ekosistem dengesi bozuldu.', 'e-ko-sis-TEM den-ge-Sİ bo-zul-DU', 'اختلّ توازن النظام البيئي.', 'هاوسەنگی ژینگە تێکچوو.']),
]);

const ACADEMIC: VocabItem[] = [
  ...pack('academic', 'c1', 'noun', [
    w('yorumlama', 'yo-rum-la-MA', 'تأويل، تفسير', 'لێکدانەوە',
      ['Sonuçların yorumlanması tartışmalı.', 'so-nuç-la-RIN yo-rum-lan-ma-SI tar-tış-ma-LI', 'تفسير النتائج محلّ خلاف.', 'لێکدانەوەی ئەنجامەکان جێی ناکۆکییە.']),
  ]),
  ...pack('academic', 'c1', 'verb', [
    w('temellendirmek', 'te-mel-len-dir-MEK', 'يؤسّس، يسند بالأدلّة', 'بنچینەدانان',
      ['İddiasını verilerle temellendirdi.', 'id-di-a-sı-NI ve-ri-ler-LE te-mel-len-dir-Dİ', 'أسّس دعواه بالبيانات.', 'بانگەشەکەی بە داتا بنچینەی دانا.']),
    w('sorgulamak', 'sor-gu-la-MAK', 'يُشكّك، يستجوب', 'پرسیارکردن لە',
      ['Yaygın kabulleri sorguluyor.', 'yay-GIN ka-bul-le-Rİ sor-gu-lu-YOR', 'يشكّك في المسلّمات الشائعة.', 'پرسیار لە بڕوا باوەکان دەکات.']),
  ]),
];

const FORMAL: VocabItem[] = pack('formal', 'c1', 'noun', [
  w('istinaden', 'is-ti-na-DEN', 'استناداً إلى', 'بەپێی',
    ['Yönetmeliğe istinaden karar verildi.', 'yö-net-me-li-ĞE is-ti-na-DEN ka-RAR ve-ril-Dİ', 'صدر القرار استناداً إلى اللائحة.', 'بەپێی ڕێنمایی بڕیار درا.'], 'adverb'),
  w('mucibince', 'mu-ci-bin-CE', 'بموجب', 'بەپێی',
    ['Sözleşme mucibince ödeme yapıldı.', 'söz-leş-ME mu-ci-bin-CE ö-de-ME ya-pıl-DI', 'تمّ الدفع بموجب العقد.', 'بەپێی گرێبەست پارەکە درا.'], 'preposition'),
]);

export const C1_VOCABULARY_MORE: VocabItem[] = [
  ...SCIENCE,
  ...ACADEMIC,
  ...FORMAL,
];
