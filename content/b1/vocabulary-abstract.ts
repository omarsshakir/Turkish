import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * B1 vocabulary: the abstract nouns an argument is built from.
 *
 * This is the layer between concrete nouns and academic ones — `oran`, `düzey`,
 * `sınır`, `gösterge`, `ilke`. A student who has them can read a news report;
 * a student who lacks them can only read a story.
 *
 * The audit turned up something more embarrassing than a gap: **`bilgi`** —
 * "information", one of the commonest nouns in Turkish and the root of
 * `bilgisayar` — was not a vocabulary entry, though `bilgisayar` was. So were
 * `temel`, `yön`, `sınır` and `toplam`. They were all present in sentences and
 * none of them was teachable.
 *
 * The institutional half of the file is what a student meets at a counter:
 * which `birim` handles this, who the `yetkili` is, what `belge` is required.
 */

/* ---------------- the missing basics ---------------- */

const BASICS: VocabItem[] = pack('nouns', 'b1', 'noun', [
  {
    ...w('bilgi', 'bil-Gİ', 'معلومة، معرفة', 'زانیاری',
      ['Bu konuda bilgim yok.', 'BU ko-nu-DA bil-GİM yok', 'ليس لديّ معلومات في هذا الأمر.', 'زانیاریم لەم بارەیەوە نییە.']),
    collocations: ['bilgi vermek', 'bilgi almak', 'bilgi edinmek', 'bilgi sahibi'],
    related: ['bilmek', 'bilgisayar'],
    note: b(
      'من «bilmek» (يعرف). و«bilgisayar» = «حاسوب» مركّبة من «bilgi» + «saymak»: عادّ المعلومات.',
      'لە «bilmek»ەوە. «bilgisayar» = «bilgi» + «saymak».',
    ),
  },
  {
    ...w('temel', 'te-MEL', 'أساس؛ أساسي', 'بنەما؛ بنەڕەتی',
      ['Sorunun temeli ekonomik.', 'so-ru-NUN te-me-Lİ e-ko-no-MİK', 'أساس المشكلة اقتصادي.', 'بنەمای کێشەکە ئابوورییە.']),
    collocations: ['temel atmak', 'temel ihtiyaç', 'temel olarak'],
    note: b(
      'اسم وصفة معاً: «binanın temeli» أساس المبنى، و«temel bilgiler» معلومات أساسية.',
      'هەم ناوە هەم ئاوەڵناو.',
    ),
  },
  {
    ...w('esas', 'e-SAS', 'الأصل، الجوهر؛ أساسي', 'بنەڕەت',
      ['Esas mesele bu değil.', 'e-SAS me-se-LE BU de-ĞİL', 'ليست هذه المسألة الأساسية.', 'بابەتی بنەڕەتی ئەمە نییە.']),
    collocations: ['esas olarak', 'esasen'],
    related: ['temel'],
  },
  {
    ...w('ilke', 'il-KE', 'مبدأ', 'بنەما',
      ['İlkelerinden ödün vermiyor.', 'il-ke-le-rin-DEN Ö-DÜN ver-mi-YOR', 'لا يتنازل عن مبادئه.', 'لە بنەماکانی لانادات.']),
    collocations: ['ilke edinmek', 'temel ilke', 'ilke olarak'],
  },
  {
    ...w('yön', 'YÖN', 'اتّجاه؛ جانب', 'ئاراستە؛ لا',
      ['Rüzgârın yönü değişti.', 'rüz-gâ-RIN yö-NÜ de-ğiş-Tİ', 'تغيّر اتّجاه الريح.', 'ئاراستەی با گۆڕا.']),
    senses: [
      sense('جانب، ناحية من موضوع', 'لایەن',
        ['Bu işin olumlu yönleri de var.', 'BU i-ŞİN o-lum-LU yön-le-Rİ DE var', 'لهذا الأمر جوانب إيجابية أيضاً.', 'ئەم کارە لایەنی ئەرێنیشی هەیە.']),
    ],
    collocations: ['yön vermek', 'her yönden', 'yön bulmak'],
  },
  {
    ...w('boyut', 'bo-YUT', 'بُعد، حجم', 'ڕەهەند',
      ['Sorun yeni bir boyut kazandı.', 'so-RUN ye-Nİ bir bo-YUT ka-zan-DI', 'اكتسبت المشكلة بعداً جديداً.', 'کێشەکە ڕەهەندێکی نوێی وەرگرت.']),
    collocations: ['boyut kazanmak', 'üç boyutlu'],
  },
  {
    ...w('hâl', 'HÂL', 'حال، وضع', 'حاڵ',
      ['Hâlin nasıl?', 'hâ-LİN na-SIL', 'كيف حالك؟', 'حاڵت چۆنە؟']),
    collocations: ['her hâlde', 'bu hâlde', 'hâlen'],
    note: b(
      'الشدّة على â تفرّقها عن «hal» بمعنى سوق الخضار — والنطق أطول.',
      'â جیای دەکاتەوە لە «hal» بە واتای بازاڕ.',
    ),
  },
  {
    ...w('ortam', 'or-TAM', 'بيئة، محيط، أجواء', 'ژینگە، کەش',
      ['Çalışma ortamı çok iyi.', 'ça-lış-MA or-ta-MI ÇOK i-Yİ', 'بيئة العمل جيدة جداً.', 'کەشی کارکردن زۆر باشە.']),
    collocations: ['iş ortamı', 'ortam yaratmak', 'sanal ortam'],
  },
]);

/* ---------------- measure and degree ---------------- */

const MEASURE: VocabItem[] = pack('nouns', 'b1', 'noun', [
  {
    ...w('oran', 'o-RAN', 'نسبة، معدّل', 'ڕێژە',
      ['İşsizlik oranı düştü.', 'iş-siz-LİK o-ra-NI düş-TÜ', 'انخفض معدّل البطالة.', 'ڕێژەی بێکاری کەمی کرد.']),
    collocations: ['oranında', 'başarı oranı', 'oran artmak'],
  },
  {
    ...w('yüzde', 'yüz-DE', 'في المئة', 'لە سەدا',
      ['Yüzde on indirim var.', 'yüz-DE ON in-di-RİM var', 'هناك خصم عشرة بالمئة.', 'دە لە سەد داشکاندن هەیە.']),
    note: b(
      '⚠️ التركية تكتب الرمز قبل الرقم: «%10» تُقرأ «yüzde on» — أي «في المئة عشرة».',
      '⚠️ تورکی هێماکە پێش ژمارە دەنووسێت: «%10» = «yüzde on».',
    ),
  },
  {
    ...w('pay', 'PAY', 'حصّة، نصيب', 'بەش',
      ['Herkes payını aldı.', 'her-KES pa-yı-NI al-DI', 'أخذ كلّ واحد نصيبه.', 'هەموو کەس بەشی خۆی وەرگرت.']),
    collocations: ['pay almak', 'pazar payı', 'payına düşmek'],
  },
  {
    ...w('ölçü', 'öl-ÇÜ', 'مقياس، قياس؛ حدّ', 'پێوانە',
      ['Ölçüleri aldık.', 'öl-çü-le-Rİ al-DIK', 'أخذنا المقاسات.', 'پێوانەکانمان وەرگرت.']),
    collocations: ['ölçü almak', 'ölçüsünde', 'ölçüyü kaçırmak'],
    related: ['ölçmek'],
  },
  {
    ...w('düzey', 'dü-ZEY', 'مستوى', 'ئاست',
      ['Türkçe düzeyim orta.', 'türk-ÇE dü-ze-YİM or-TA', 'مستواي في التركية متوسّط.', 'ئاستی تورکیم ناوەندە.']),
    related: ['seviye'],
    collocations: ['üst düzey', 'düzeyinde'],
    note: b(
      '«düzey» تركية حديثة و«seviye» عربية الأصل — مترادفتان، و«düzey» أرسم في الكتابة الأكاديمية.',
      '«düzey» تورکی نوێیە و «seviye» عەرەبییە — هاوواتان.',
    ),
  },
  {
    ...w('seviye', 'se-vi-YE', 'مستوى', 'ئاست',
      ['Su seviyesi yükseldi.', 'SU se-vi-ye-Sİ yük-sel-Dİ', 'ارتفع منسوب الماء.', 'ئاستی ئاو بەرز بووەوە.']),
    related: ['düzey'],
  },
  {
    ...w('sınır', 'sı-NIR', 'حدّ؛ حدود الدولة', 'سنوور',
      ['Sabrımın bir sınırı var.', 'sab-rı-MIN bir sı-nı-RI var', 'لصبري حدّ.', 'ئارامگریم سنوورێکی هەیە.']),
    collocations: ['sınır koymak', 'sınırı aşmak', 'sınır kapısı'],
  },
  {
    ...w('eşik', 'e-ŞİK', 'عتبة', 'شێوان',
      ['Yoksulluk eşiğinin altında yaşıyorlar.', 'yok-sul-LUK e-şi-ği-NİN al-tın-DA ya-şı-yor-LAR', 'يعيشون تحت خطّ الفقر.', 'لە ژێر شێوانی هەژاریدا دەژین.']),
  },
  {
    ...w('toplam', 'top-LAM', 'المجموع', 'کۆ',
      ['Toplam kaç kişi var?', 'top-LAM KAÇ ki-Şİ var', 'كم شخصاً في المجموع؟', 'بە کۆی گشتی چەند کەس هەیە؟']),
    related: ['toplamak'],
    collocations: ['toplam tutar', 'toplamda'],
  },
  {
    ...w('tutar', 'tu-TAR', 'مبلغ', 'بڕ (پارە)',
      ['Fatura tutarı beş yüz lira.', 'fa-tu-RA tu-ta-RI BEŞ YÜZ li-RA', 'مبلغ الفاتورة خمسمئة ليرة.', 'بڕی پسووڵەکە پێنج سەد لیرەیە.']),
    related: ['tutmak'],
  },
  {
    ...w('adet', 'a-DET', 'عدد، قطعة (وحدة عدّ)', 'دانە',
      ['Üç adet aldım.', 'ÜÇ a-DET al-DIM', 'أخذت ثلاث قطع.', 'سێ دانەم کڕی.']),
    related: ['tane'],
    note: b(
      '⚠️ لا تخلطها بـ «âdet» = عادة. الفرق في الشدّة على الألف، والمعنى بعيد تماماً.',
      '⚠️ تێکەڵی «âdet» = خوو مەکە.',
    ),
  },
  {
    ...w('sayı', 'sa-YI', 'عدد؛ عدد (مجلة)', 'ژمارە',
      ['Katılımcı sayısı arttı.', 'ka-tı-lım-CI sa-yı-SI art-TI', 'ازداد عدد المشاركين.', 'ژمارەی بەشداربووان زیادی کرد.']),
    related: ['saymak'],
    collocations: ['sayı vermek', 'sayıca'],
  },
  {
    ...w('açı', 'a-ÇI', 'زاوية', 'گۆشە',
      ['Bu açıdan bakınca haklı.', 'BU a-çı-DAN ba-kın-CA hak-LI', 'من هذه الزاوية هو محقّ.', 'لەم گۆشەیەوە ڕاستە.']),
    collocations: ['bakış açısı', 'geniş açı'],
    related: ['açısından'],
  },
]);

/* ---------------- standards and evidence ---------------- */

const STANDARDS: VocabItem[] = pack('academic', 'b1', 'noun', [
  {
    ...w('standart', 'stan-DART', 'معيار قياسي', 'ستانداردی',
      ['Ürün standartlara uygun.', 'ü-RÜN stan-dart-la-RA uy-GUN', 'المنتج مطابق للمعايير.', 'بەرهەمەکە لەگەڵ ستانداردەکاندا دەگونجێت.']),
    collocations: ['standarda uymak', 'yaşam standardı'],
  },
  {
    ...w('kriter', 'kri-TER', 'معيار', 'پێوەر',
      ['Seçim kriterleri belli değil.', 'se-ÇİM kri-ter-le-Rİ bel-Lİ de-ĞİL', 'معايير الاختيار غير واضحة.', 'پێوەرەکانی هەڵبژاردن ڕوون نین.']),
    related: ['ölçüt'],
  },
  {
    ...w('gösterge', 'gös-ter-GE', 'مؤشّر', 'نیشاندەر',
      ['Ekonomik göstergeler olumlu.', 'e-ko-no-MİK gös-ter-ge-LER o-lum-LU', 'المؤشّرات الاقتصادية إيجابية.', 'نیشاندەرە ئابوورییەکان ئەرێنین.']),
    related: ['göstermek'],
  },
]);

/* ---------------- institutions and paperwork ---------------- */

const INSTITUTIONS: VocabItem[] = pack('work', 'b1', 'noun', [
  {
    ...w('kurum', 'ku-RUM', 'مؤسسة، جهة', 'دامەزراوە',
      ['Hangi kuruma başvurmalıyım?', 'han-Gİ ku-ru-MA baş-vur-ma-lı-YIM', 'إلى أي جهة أتقدّم؟', 'دەبێت داوا لە کام دامەزراوە بکەم؟']),
    collocations: ['kamu kurumu', 'kurum içi'],
    related: ['kuruluş', 'kurmak'],
  },
  {
    ...w('kuruluş', 'ku-ru-LUŞ', 'منظّمة؛ تأسيس', 'ڕێکخراو؛ دامەزراندن',
      ['Sivil toplum kuruluşları destek verdi.', 'si-VİL top-LUM ku-ru-luş-la-RI des-TEK ver-Dİ', 'قدّمت منظمات المجتمع المدني الدعم.', 'ڕێکخراوەکانی کۆمەڵگای مەدەنی پشتگیرییان کرد.']),
    related: ['kurum'],
  },
  {
    ...w('birim', 'bi-RİM', 'وحدة إدارية', 'یەکە',
      ['Sizi ilgili birime yönlendireyim.', 'si-Zİ il-gi-Lİ bi-ri-ME yön-len-di-re-YİM', 'دعني أحوّلك إلى الوحدة المختصّة.', 'با بتنێرم بۆ یەکەی پەیوەندیدار.']),
    collocations: ['ilgili birim', 'birim fiyat'],
  },
  {
    ...w('şube', 'şu-BE', 'فرع', 'لق',
      ['Bankanın hangi şubesi?', 'ban-ka-NIN han-Gİ şu-be-Sİ', 'أي فرع من البنك؟', 'کام لقی بانکەکە؟']),
  },
  {
    ...w('yetkili', 'yet-ki-Lİ', 'مسؤول، مخوّل', 'دەسەڵاتدار',
      ['Yetkiliyle görüşmek istiyorum.', 'yet-ki-liy-LE gö-rüş-MEK is-ti-yo-RUM', 'أريد مقابلة المسؤول.', 'دەمەوێت لەگەڵ دەسەڵاتداردا بدوێم.']),
    related: ['yetki'],
  },
  {
    ...w('görevli', 'gö-rev-Lİ', 'موظّف مكلّف', 'کارمەند',
      ['Görevli birazdan gelecek.', 'gö-rev-Lİ bi-raz-DAN ge-le-CEK', 'سيأتي الموظّف بعد قليل.', 'کارمەندەکە دوای کەمێک دێت.']),
    related: ['görev'],
  },
  {
    ...w('uzman', 'uz-MAN', 'خبير، أخصّائي', 'پسپۆڕ',
      ['Bir uzmana danışmalısın.', 'bir uz-ma-NA da-nış-ma-lı-SIN', 'عليك استشارة خبير.', 'دەبێت ڕاوێژ بە پسپۆڕێک بکەیت.']),
    collocations: ['uzman görüşü', 'alanında uzman'],
  },
  {
    ...w('vatandaş', 'va-tan-DAŞ', 'مواطن', 'هاووڵاتی',
      ['Her vatandaşın hakkı var.', 'HER va-tan-da-ŞIN hak-KI var', 'لكل مواطن حقّ.', 'هەموو هاووڵاتییەک مافی هەیە.']),
    related: ['vatan'],
    note: b(
      'اللاحقة «-daş» تعني الشريك في شيء: «vatandaş» شريك الوطن، «arkadaş» شريك الظهر، «meslektaş» شريك المهنة.',
      'پاشگری «-daş» واتای هاوبەشی دەدات: vatandaş، arkadaş، meslektaş.',
    ),
  },
  {
    ...w('temsilci', 'tem-sil-Cİ', 'ممثّل، مندوب', 'نوێنەر',
      ['Sendika temsilcisiyle konuştuk.', 'sen-di-KA tem-sil-ci-siy-LE ko-nuş-TUK', 'تحدّثنا مع ممثّل النقابة.', 'لەگەڵ نوێنەری سەندیکادا قسەمان کرد.']),
  },
  {
    ...w('sözcü', 'söz-CÜ', 'ناطق رسمي', 'وتەبێژ',
      ['Bakanlık sözcüsü açıklama yaptı.', 'ba-kan-LIK söz-cü-SÜ a-çık-la-MA yap-TI', 'أدلى الناطق باسم الوزارة بتصريح.', 'وتەبێژی وەزارەت ڕاگەیەنراوەیەکی دەرکرد.']),
    related: ['söz'],
  },
]);

/* ---------------- what a counter asks for ---------------- */

const PAPERWORK: VocabItem[] = pack('work', 'b1', 'noun', [
  {
    ...w('belge', 'bel-GE', 'وثيقة', 'بەڵگەنامە',
      ['Hangi belgeleri getirmeliyim?', 'han-Gİ bel-ge-le-Rİ ge-tir-me-li-YİM', 'أي وثائق عليّ إحضارها؟', 'کام بەڵگەنامە بهێنم؟']),
    collocations: ['belge istemek', 'resmî belge', 'garanti belgesi'],
  },
  {
    ...w('evrak', 'ev-RAK', 'أوراق رسمية', 'کاغەزی فەرمی',
      ['Evrakları tamamladım.', 'ev-rak-la-RI ta-mam-la-DIM', 'أكملت الأوراق.', 'کاغەزەکانم تەواو کرد.']),
    related: ['belge'],
    note: b(
      'جمع «ورقة» في العربية، لكنها في التركية تُعامل مفرداً جامعاً: «evrak hazır».',
      'لە عەرەبیدا کۆیە، لە تورکیدا وەک ناوێکی کۆگرتوو.',
    ),
  },
  {
    ...w('işlem', 'iş-LEM', 'إجراء، معاملة', 'مامەڵە',
      ['İşlem tamamlandı.', 'iş-LEM ta-mam-lan-DI', 'اكتملت المعاملة.', 'مامەڵەکە تەواو بوو.']),
    collocations: ['işlem yapmak', 'işlem ücreti'],
  },
  {
    ...w('prosedür', 'pro-se-DÜR', 'إجراءات، مسار رسمي', 'ڕێکارە',
      ['Prosedür biraz uzun.', 'pro-se-DÜR bi-RAZ u-ZUN', 'الإجراءات طويلة قليلاً.', 'ڕێکارەکە کەمێک درێژە.']),
  },
  {
    ...w('onay', 'o-NAY', 'موافقة، تصديق', 'پەسەندکردن',
      ['Müdürün onayı gerekiyor.', 'mü-dü-RÜN o-na-YI ge-re-ki-YOR', 'يلزم موافقة المدير.', 'پەسەندکردنی بەڕێوەبەر پێویستە.']),
    related: ['onaylamak'],
    collocations: ['onay almak', 'onay vermek'],
  },
  {
    ...w('şikâyet', 'şi-kâ-YET', 'شكوى', 'گلەیی',
      ['Şikâyetimi nereye iletebilirim?', 'şi-kâ-ye-ti-Mİ ne-re-YE i-le-te-bi-li-RİM', 'إلى أين أوجّه شكواي؟', 'گلەییەکەم بۆ کوێ بنێرم؟']),
    collocations: ['şikâyet etmek', 'şikâyette bulunmak'],
  },
  {
    ...w('öneri', 'ö-ne-Rİ', 'اقتراح', 'پێشنیار',
      ['Bir önerim var.', 'bir ö-ne-RİM var', 'لديّ اقتراح.', 'پێشنیارێکم هەیە.']),
    related: ['önermek'],
    collocations: ['öneri sunmak', 'öneride bulunmak'],
  },
  {
    ...w('dilek', 'di-LEK', 'أمنية، طلب', 'داواکاری، ئاواتی',
      ['İyi dileklerimle.', 'i-Yİ di-lek-le-rim-LE', 'مع أطيب التمنّيات.', 'بە باشترین ئاواتەکانمەوە.']),
    related: ['dilekçe', 'dilemek'],
  },
  {
    ...w('tutanak', 'tu-ta-NAK', 'محضر', 'پرۆتۆکۆل',
      ['Toplantı tutanağını yazdım.', 'top-lan-TI tu-ta-na-ĞI-nı yaz-DIM', 'كتبت محضر الاجتماع.', 'پرۆتۆکۆلی کۆبوونەوەکەم نووسی.']),
    collocations: ['tutanak tutmak'],
  },
  {
    ...w('arşiv', 'ar-ŞİV', 'أرشيف', 'ئەرشیف',
      ['Belgeler arşivde saklanıyor.', 'bel-ge-LER ar-şiv-DE sak-la-nı-YOR', 'تُحفظ الوثائق في الأرشيف.', 'بەڵگەنامەکان لە ئەرشیفدا دەپارێزرێن.']),
  },
  {
    ...w('sicil', 'si-CİL', 'سجلّ', 'تۆمار',
      ['Adli sicil kaydı istendi.', 'ad-Lİ si-CİL kay-DI is-ten-Dİ', 'طُلب سجلّ جنائي.', 'تۆماری دادوەری داوا کرا.']),
    collocations: ['adli sicil', 'sicil kaydı'],
  },
]);

export const B1_VOCABULARY_ABSTRACT: VocabItem[] = [
  ...BASICS,
  ...MEASURE,
  ...STANDARDS,
  ...INSTITUTIONS,
  ...PAPERWORK,
];
