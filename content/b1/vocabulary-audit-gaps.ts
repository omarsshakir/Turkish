import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * B1 vocabulary: the last words the audit could still see.
 *
 * Every entry here was found the same way, and it is the most useful signal
 * the gap audit produces: **the curriculum already refers to these words in
 * its own collocations.** `şifreyi değiştirmek`, `ihtiyacı karşılamak`,
 * `kirliliği azaltmak`, `imkân tanımak`, `hayal kırıklığına uğramak`, `tam
 * kapasite`, `uygun fiyat`, `tek kişilik oda` — a student meets the phrase,
 * looks up the head noun, and finds nothing about the verb doing the work.
 *
 * A collocation that names an untaught word is a promise the curriculum does
 * not keep. This file keeps it.
 */

/* ---------------- the verbs the collocations needed ---------------- */

const VERBS: VocabItem[] = pack('verbs', 'b1', 'verb', [
  {
    ...w('değiştirmek', 'de-ğiş-tir-MEK', 'يغيّر، يبدّل', 'گۆڕین',
      ['Şifreyi değiştirmen gerekiyor.', 'şif-re-Yİ de-ğiş-tir-MEN ge-re-ki-YOR', 'عليك تغيير كلمة السر.', 'پێویستە وشەی نهێنی بگۆڕیت.']),
    collocations: ['şifre değiştirmek', 'fikir değiştirmek', 'yer değiştirmek'],
    related: ['değişmek'],
    note: b(
      '⚠️ متعدٍّ: أنت تغيّر شيئاً. اللازم منه «değişmek» = يتغيّر من نفسه: «hava değişti» تغيّر الجوّ.',
      '⚠️ متعەددییە. شێوەی بێ بەرکاری «değişmek»ە.',
    ),
  },
  {
    ...w('karşılamak', 'kar-şı-la-MAK', 'يستقبل؛ يلبّي', 'پێشوازیکردن؛ دابینکردن',
      ['Bizi kapıda karşıladılar.', 'bi-Zİ ka-pı-DA kar-şı-la-dı-LAR', 'استقبلونا عند الباب.', 'لە دەرگاوە پێشوازییان لێکردین.']),
    senses: [
      sense('يلبّي حاجة أو تكلفة', 'دابینکردنی پێویستی',
        ['Bu bütçe ihtiyacı karşılamıyor.', 'BU büt-ÇE ih-ti-ya-CI kar-şı-la-mı-YOR', 'هذه الميزانية لا تلبّي الحاجة.', 'ئەم بودجەیە پێویستییەکە دابین ناکات.']),
      sense('يتلقّى خبراً بردّ فعل', 'وەرگرتنی هەواڵ',
        ['Haberi sevinçle karşıladık.', 'ha-be-Rİ se-vinç-LE kar-şı-la-DIK', 'استقبلنا الخبر بفرح.', 'بە خۆشییەوە پێشوازیمان لە هەواڵەکە کرد.']),
    ],
    collocations: ['ihtiyacı karşılamak', 'sıcak karşılamak', 'masrafı karşılamak'],
  },
  {
    ...w('uymak', 'uy-MAK', 'يلتزم بـ؛ يناسب', 'گوێڕایەڵی؛ گونجان',
      ['Kurallara uymak zorundayız.', 'ku-ral-la-RA uy-MAK zo-run-da-YIZ', 'علينا الالتزام بالقواعد.', 'دەبێت گوێڕایەڵی یاساکان بین.']),
    senses: [
      sense('يناسب، ينسجم مع', 'گونجان لەگەڵ',
        ['Bu renk sana çok uyuyor.', 'BU RENK sa-NA ÇOK u-yu-YOR', 'هذا اللون يناسبك كثيراً.', 'ئەم ڕەنگە زۆر لەگەڵت دەگونجێت.']),
    ],
    collocations: ['kurala uymak', 'söze uymak', 'uygun olmak'],
    note: b(
      '⚠️ يأخذ حالة الاتّجاه في المعنيين: «kurallara uymak», «sana uyuyor».',
      '⚠️ لە هەردوو واتادا حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('azaltmak', 'a-zalt-MAK', 'يقلّل، يخفّض', 'کەمکردنەوە',
      ['Şeker tüketimini azalttım.', 'şe-KER tü-ke-ti-mi-Nİ a-zalt-TIM', 'قلّلت استهلاك السكّر.', 'خواردنی شەکرم کەم کردەوە.']),
    opposite: ['artırmak'],
    related: ['azalmak', 'az'],
    collocations: ['riski azaltmak', 'maliyeti azaltmak'],
    note: b(
      'زوج لازم/متعدٍّ من «az»: azalmak (يقلّ) / azaltmak (يُقلّل).',
      'جووتی بێ بەرکار و متعەددی لە «az»ەوە.',
    ),
  },
  {
    ...w('tanımak', 'ta-nı-MAK', 'يعرف شخصاً؛ يعترف بـ', 'ناسین؛ دانپێدانان',
      ['Onu yıllardır tanıyorum.', 'o-NU yıl-lar-DIR ta-nı-yo-RUM', 'أعرفه منذ سنوات.', 'ساڵانێکە دەیناسم.']),
    senses: [
      sense('يمنح، يعترف بحقّ', 'پێدانی ماف',
        ['Yasa bu hakkı tanıyor.', 'ya-SA BU hak-KI ta-nı-YOR', 'يعترف القانون بهذا الحقّ.', 'یاساکە دان بەم مافەدا دەنێت.']),
    ],
    collocations: ['imkân tanımak', 'hak tanımak', 'tanışmak'],
    note: b(
      '⚠️ للأشخاص والأماكن، بينما «bilmek» للمعلومة. العربية تجمعهما في «عرف» — خطأ متكرّر جداً.',
      '⚠️ بۆ کەس و شوێن، بەڵام «bilmek» بۆ زانیاری.',
    ),
  },
  {
    ...w('uğramak', 'uğ-ra-MAK', 'يمرّ بـ؛ يتعرّض لـ', 'سەردانکردن؛ ڕووبەڕووبوونەوە',
      ['Dönüşte markete uğradım.', 'dö-nüş-TE mar-ke-TE uğ-ra-DIM', 'مررت بالسوق في طريق العودة.', 'لە گەڕانەوەدا سەردانی مارکێتم کرد.']),
    senses: [
      sense('يتعرّض لشيء سلبي', 'تووشبوون',
        ['Büyük bir hayal kırıklığına uğradık.', 'bü-YÜK bir ha-YAL kı-rık-lı-ğı-NA uğ-ra-DIK', 'تعرّضنا لخيبة أمل كبيرة.', 'تووشی نائومێدییەکی گەورە بووین.']),
    ],
    collocations: ['uğrayıp gitmek', 'zarara uğramak', 'saldırıya uğramak'],
    note: b(
      '⚠️ يأخذ حالة الاتّجاه دائماً. المعنى الثاني سلبي حصراً: لا تقول «başarıya uğradım».',
      '⚠️ هەمیشە حاڵەتی ئاراستە وەردەگرێت. واتای دووەم نەرێنییە.',
    ),
  },
]);

/* ---------------- the adjectives the collocations needed ---------------- */

const ADJECTIVES: VocabItem[] = pack('adjectives', 'b1', 'adjective', [
  {
    ...w('tam', 'TAM', 'كامل، تامّ؛ بالضبط', 'تەواو',
      ['Tam olarak ne demek istiyorsun?', 'TAM o-la-RAK NE de-MEK is-ti-yor-SUN', 'ماذا تقصد بالضبط؟', 'بە تەواوی مەبەستت چییە؟']),
    collocations: ['tam kapasite', 'tam olarak', 'tam zamanlı', 'tam tersi'],
    note: b(
      'تعمل صفةً وظرفاً: «tam bir hafta» أسبوع كامل، و«tam burada» هنا بالضبط.',
      'هەم ئاوەڵناو هەم ئاوەڵکارە.',
    ),
  },
  {
    ...w('tek', 'TEK', 'وحيد، مفرد', 'تاک',
      ['Tek kişilik bir oda istiyorum.', 'TEK ki-şi-LİK bir o-DA is-ti-yo-RUM', 'أريد غرفة لشخص واحد.', 'ژوورێکی تاک کەسیم دەوێت.']),
    opposite: ['çift'],
    collocations: ['tek başına', 'tek tek', 'tek taraflı'],
    note: b(
      '«tek başına» = بمفرده، و«tek tek» = واحداً واحداً — تركيبان يوميان جداً.',
      '«tek başına» و «tek tek» زۆر باون.',
    ),
  },
  {
    ...w('uygun', 'uy-GUN', 'مناسب، ملائم', 'گونجاو',
      ['Bu fiyat bana uygun.', 'BU fi-YAT ba-NA uy-GUN', 'هذا السعر مناسب لي.', 'ئەم نرخە بۆ من گونجاوە.']),
    related: ['uymak'],
    opposite: ['uygunsuz'],
    collocations: ['uygun fiyat', 'uygun görmek', 'uygun olmak'],
    note: b(
      '⚠️ من يناسبه الشيء يأخذ حالة الاتّجاه: «bana uygun». وتُستعمل كثيراً للسؤال عن الموعد: «size uygun mu?»',
      '⚠️ حاڵەتی ئاراستە وەردەگرێت: «bana uygun».',
    ),
  },
]);

/* ---------------- and one noun ---------------- */

const NOUNS: VocabItem[] = pack('science', 'b1', 'noun', [
  {
    ...w('test', 'TEST', 'اختبار، فحص', 'تاقیکردنەوە',
      ['Varsayımı test etmemiz gerekiyor.', 'var-sa-yı-MI TEST et-me-MİZ ge-re-ki-YOR', 'علينا اختبار الفرضية.', 'پێویستە گریمانەکە تاقی بکەینەوە.']),
    collocations: ['test etmek', 'test sonucu', 'kan testi'],
    related: ['sınav', 'deney'],
    note: b(
      '⚠️ ثلاث كلمات متمايزة: «sınav» امتحان دراسي · «test» فحص أو اختبار تقني · «deney» تجربة علمية.',
      '⚠️ سێ وشەی جیاواز: sınav · test · deney.',
    ),
  },
]);

export const B1_VOCABULARY_AUDIT_GAPS: VocabItem[] = [
  ...VERBS,
  ...ADJECTIVES,
  ...NOUNS,
];
