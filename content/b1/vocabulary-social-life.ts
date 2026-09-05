import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * B1 vocabulary: occasions, feelings and the words for how people behave.
 *
 * Two gaps that matter for very different reasons.
 *
 * **Occasions.** `düğün` and `bayram` structure the Turkish social calendar,
 * and a student invited to one needs `tebrik`, `hediye`, `tören`, `taziye`.
 * Getting the formula wrong at a funeral or a wedding is the kind of mistake
 * vocabulary size does not fix — so the notes carry the fixed phrases too.
 *
 * **Feelings as nouns.** The curriculum had the *verbs* (`kızmak`, `üzülmek`,
 * `korkmak`) but not the nouns (`öfke`, `üzüntü`, `korku` was there,
 * `kaygı` was there, most were not). You need the noun to talk *about* an
 * emotion rather than merely report having one — which is exactly the step
 * from A2 to B1.
 */

/* ---------------- occasions ---------------- */

const OCCASIONS: VocabItem[] = pack('relationships', 'b1', 'noun', [
  {
    ...w('kutlama', 'kut-la-MA', 'احتفال', 'ئاهەنگ',
      ['Mezuniyet kutlaması yapıldı.', 'me-zu-ni-YET kut-la-ma-SI ya-pıl-DI', 'أُقيم احتفال التخرّج.', 'ئاهەنگی دەرچوون کرا.']),
    related: ['kutlamak'],
    collocations: ['kutlama yapmak', 'yılbaşı kutlaması'],
  },
  {
    ...w('tören', 'tö-REN', 'مراسم، حفل رسمي', 'ڕێوڕەسم',
      ['Açılış töreni saat üçte.', 'a-çı-LIŞ tö-re-Nİ sa-AT üç-TE', 'حفل الافتتاح الساعة الثالثة.', 'ڕێوڕەسمی کردنەوە کاتژمێر سێیە.']),
    collocations: ['açılış töreni', 'mezuniyet töreni'],
    note: b(
      '«tören» رسمي ومنظّم؛ «kutlama» احتفال قد يكون عائلياً بسيطاً.',
      '«tören» فەرمییە؛ «kutlama» دەکرێت سادە بێت.',
    ),
  },
  {
    ...w('bayram', 'bay-RAM', 'عيد', 'جەژن',
      ['Bayramda memlekete gidiyoruz.', 'bay-ram-DA mem-le-ke-TE gi-di-yo-RUZ', 'نذهب إلى البلدة في العيد.', 'لە جەژندا دەچینە شارەکەمان.']),
    collocations: ['bayram tatili', 'iyi bayramlar'],
    note: b(
      'التحية: «İyi bayramlar» أو «Bayramınız kutlu olsun». وتُستعمل للأعياد الوطنية أيضاً: «23 Nisan bayramı».',
      'سڵاوکردن: «İyi bayramlar».',
    ),
  },
  {
    ...w('tebrik', 'teb-RİK', 'تهنئة', 'پیرۆزبایی',
      ['Tebrik ederim!', 'teb-RİK e-de-RİM', 'أهنّئك!', 'پیرۆزت لێبێت!']),
    collocations: ['tebrik etmek', 'tebrik kartı'],
    note: b(
      '«Tebrikler!» وحدها تكفي — أشيع صيغة تهنئة في التركية.',
      '«Tebrikler!» بە تەنها بەسە.',
    ),
  },
  {
    ...w('cenaze', 'ce-na-ZE', 'جنازة', 'ناشتن',
      ['Cenazeye katıldık.', 'ce-na-ze-YE ka-tıl-DIK', 'شاركنا في الجنازة.', 'بەشداری ناشتنەکە بووین.']),
    collocations: ['cenaze töreni', 'cenazeye katılmak'],
  },
  {
    ...w('taziye', 'ta-zi-YE', 'تعزية', 'سەرەخۆشی',
      ['Taziye ziyaretine gittik.', 'ta-zi-YE zi-ya-re-ti-NE git-TİK', 'ذهبنا لزيارة عزاء.', 'چووینە سەردانی سەرەخۆشی.']),
    note: b(
      'الصيغة المعتادة: «Başınız sağ olsun» — تقال لأهل الفقيد ولا تُترجم حرفياً.',
      'دەستەواژەی باو: «Başınız sağ olsun».',
    ),
  },
  {
    ...w('misafirlik', 'mi-sa-fir-LİK', 'زيارة اجتماعية', 'میوانداری',
      ['Akşam misafirliğe gidiyoruz.', 'ak-ŞAM mi-sa-fir-li-ĞE gi-di-yo-RUZ', 'نذهب لزيارة مساءً.', 'ئێوارە دەچینە میوانداری.']),
    related: ['misafir'],
  },
]);

/* ---------------- how people behave ---------------- */

const CHARACTER: VocabItem[] = pack('personality', 'b1', 'noun', [
  {
    ...w('saygı', 'say-GI', 'احترام', 'ڕێز',
      ['Herkese saygı gösteriyor.', 'her-ke-SE say-GI gös-te-ri-YOR', 'يُظهر احتراماً للجميع.', 'ڕێز لە هەموو کەس دەگرێت.']),
    collocations: ['saygı duymak', 'saygı göstermek', 'saygılı olmak'],
    note: b(
      '⚠️ الفعل معها «duymak» أو «göstermek» لا «yapmak»: «saygı duyuyorum».',
      '⚠️ کرداری لەگەڵدا «duymak» یان «göstermek»ە.',
    ),
  },
  {
    ...w('hoşgörü', 'hoş-gö-RÜ', 'تسامح', 'لێبووردەیی',
      ['Hoşgörü olmadan birlikte yaşanmaz.', 'hoş-gö-RÜ ol-ma-DAN bir-lik-TE ya-şan-MAZ', 'لا يمكن العيش معاً بلا تسامح.', 'بەبێ لێبووردەیی پێکەوەژیان نابێت.']),
    note: b(
      'مركّبة شفّافة: «hoş» جميل + «görü» رؤية — أي «أن ترى الأمر حسناً».',
      'لێکدراوێکی ڕوون: «hoş» + «görü».',
    ),
  },
  {
    ...w('anlayış', 'an-la-YIŞ', 'تفهّم', 'تێگەیشتن',
      ['Anlayışınız için teşekkürler.', 'an-la-yı-şı-NIZ i-ÇİN te-şek-kür-LER', 'شكراً على تفهّمكم.', 'سوپاس بۆ تێگەیشتنتان.']),
    related: ['anlamak'],
    note: b(
      'الجملة في المثال صيغة ختامية قياسية في الرسائل الرسمية.',
      'ڕستەی نموونە لە نامە فەرمییەکاندا باوە.',
    ),
  },
  {
    ...w('destek', 'des-TEK', 'دعم', 'پشتگیری',
      ['Ailemden çok destek gördüm.', 'a-i-lem-DEN ÇOK des-TEK gör-DÜM', 'وجدت دعماً كبيراً من عائلتي.', 'پشتگیری زۆرم لە خێزانەکەم بینی.']),
    related: ['desteklemek'],
    collocations: ['destek olmak', 'destek vermek', 'maddi destek'],
  },
  {
    ...w('yardımlaşma', 'yar-dım-laş-MA', 'التعاون، تبادل المساعدة', 'یارمەتی یەکتر',
      ['Köyde yardımlaşma güçlü.', 'köy-DE yar-dım-laş-MA güç-LÜ', 'التعاون قويّ في القرية.', 'یارمەتیدانی یەکتر لە گوندەکەدا بەهێزە.']),
    note: b(
      'اللاحقة «-laşma» تعني التبادل بين طرفين — نفس بناء «mesajlaşma» و«tanışma».',
      'پاشگری «-laşma» واتای ئاڵوگۆڕ دەدات.',
    ),
  },
  {
    ...w('fedakârlık', 'fe-da-kâr-LIK', 'تضحية', 'قوربانیدان',
      ['Annesi çok fedakârlık yaptı.', 'an-ne-Sİ ÇOK fe-da-kâr-LIK yap-TI', 'ضحّت أمّه كثيراً.', 'دایکی زۆر قوربانی دا.']),
  },
  {
    ...w('vefa', 've-FA', 'الوفاء', 'دڵسۆزی',
      ['Vefalı bir dost.', 've-fa-LI bir dost', 'صديق وفيّ.', 'هاوڕێیەکی دڵسۆز.']),
    related: ['sadakat'],
    note: b(
      '«vefa» في التركية أقرب إلى ألّا تنسى من أحسن إليك — أضيق قليلاً من العربية.',
      '«vefa» لە تورکیدا واتای لەبیرنەکردنی چاکەیە.',
    ),
  },
  {
    ...w('sadakat', 'sa-da-KAT', 'إخلاص، ولاء', 'دڵسۆزی',
      ['Sadakat en çok aranan özellik.', 'sa-da-KAT EN ÇOK a-ra-NAN ö-zel-LİK', 'الإخلاص أكثر صفة مطلوبة.', 'دڵسۆزی زۆرترین سیفەتی داواکراوە.']),
    related: ['vefa'],
  },
  {
    ...w('samimiyet', 'sa-mi-mi-YET', 'صدق، حميمية', 'دڵسۆزی، نزیکی',
      ['Sözlerinde samimiyet vardı.', 'söz-le-rin-DE sa-mi-mi-YET var-DI', 'كان في كلامه صدق.', 'دڵسۆزی لە قسەکانیدا هەبوو.']),
    related: ['samimi'],
  },
]);

/* ---------------- feelings, named ---------------- */

const FEELINGS: VocabItem[] = pack('emotions', 'b1', 'noun', [
  {
    ...w('öfke', 'öf-KE', 'غضب', 'تووڕەیی',
      ['Öfkesini kontrol edemedi.', 'öf-ke-si-Nİ kon-TROL e-de-me-Dİ', 'لم يستطع السيطرة على غضبه.', 'نەیتوانی تووڕەیی خۆی کۆنترۆڵ بکات.']),
    related: ['kızmak'],
    collocations: ['öfke kontrolü', 'öfkelenmek'],
  },
  {
    ...w('endişe', 'en-di-ŞE', 'قلق، تخوّف', 'نیگەرانی',
      ['Endişelerini dile getirdi.', 'en-di-şe-le-ri-Nİ di-LE ge-tir-Dİ', 'طرح مخاوفه.', 'نیگەرانییەکانی خستەڕوو.']),
    related: ['kaygı'],
    note: b(
      '«endişe» و«kaygı» مترادفتان عملياً؛ «kaygı» أقرب للقلق النفسي المزمن.',
      '«endişe» و «kaygı» هاوواتان.',
    ),
  },
  {
    ...w('utanç', 'u-TANÇ', 'خجل، عار', 'شەرم',
      ['Utanç verici bir durum.', 'u-TANÇ ve-ri-Cİ bir du-RUM', 'وضع مخجل.', 'دۆخێکی شەرمهێنەرە.']),
    related: ['utanmak'],
    collocations: ['utanç duymak', 'utanç verici'],
  },
  {
    ...w('suçluluk', 'suç-lu-LUK', 'الشعور بالذنب', 'تاوانباری',
      ['Suçluluk duygusu yaşıyor.', 'suç-lu-LUK duy-gu-SU ya-şı-YOR', 'يعيش شعوراً بالذنب.', 'هەستی تاوانباری هەیە.']),
    related: ['suç'],
  },
  {
    ...w('kıskançlık', 'kıs-kanç-LIK', 'غيرة', 'ئیرەیی',
      ['Kıskançlık ilişkiyi bitirdi.', 'kıs-kanç-LIK i-liş-ki-Yİ bi-tir-Dİ', 'أنهت الغيرة العلاقة.', 'ئیرەیی پەیوەندییەکەی کۆتایی پێهێنا.']),
    related: ['kıskanmak'],
  },
  {
    ...w('nefret', 'nef-RET', 'كراهية', 'ڕق',
      ['Nefret söylemi suçtur.', 'nef-RET söy-le-Mİ suç-TUR', 'خطاب الكراهية جريمة.', 'گوتاری ڕق تاوانە.']),
    opposite: ['sevgi'],
    collocations: ['nefret etmek', 'nefret söylemi'],
    note: b(
      '⚠️ ما تكرهه يأخذ حالة الابتداء: «-den nefret etmek».',
      '⚠️ حاڵەتی سەرچاوە وەردەگرێت.',
    ),
  },
  {
    ...w('sevgi', 'sev-Gİ', 'محبّة', 'خۆشەویستی',
      ['Sevgiyle büyüdü.', 'sev-giy-LE bü-yü-DÜ', 'نشأ في محبّة.', 'بە خۆشەویستی گەورە بوو.']),
    opposite: ['nefret'],
    related: ['sevmek', 'aşk'],
    note: b(
      '⚠️ «sevgi» محبّة عامّة، «aşk» عشق رومانسي. الخلط بينهما مضحك أو محرج.',
      '⚠️ «sevgi» خۆشەویستی گشتییە، «aşk» عەشقە.',
    ),
  },
  {
    ...w('heyecan', 'he-ye-CAN', 'حماس، توتّر مبهج', 'خۆشحاڵی، جۆش',
      ['Heyecandan uyuyamadım.', 'he-ye-can-DAN u-yu-ya-ma-DIM', 'لم أنم من الحماس.', 'لە جۆشدا نەمتوانی بخەوم.']),
    collocations: ['heyecan duymak', 'heyecanlanmak'],
    note: b(
      '⚠️ ليست «الخوف» — «heyecan» إثارة إيجابية غالباً، ومنها التوتّر قبل امتحان.',
      '⚠️ ترس نییە — زۆرجار ئەرێنییە.',
    ),
  },
  {
    ...w('huzur', 'hu-ZUR', 'طمأنينة، سكينة', 'ئاسوودەیی',
      ['Burada huzur buluyorum.', 'bu-ra-DA hu-ZUR bu-lu-yo-RUM', 'أجد السكينة هنا.', 'لێرەدا ئاسوودەیی دەدۆزمەوە.']),
    opposite: ['gerginlik'],
    collocations: ['huzur bulmak', 'huzurlu olmak'],
  },
  {
    ...w('gerginlik', 'ger-gin-LİK', 'توتّر', 'ئاڵۆزی',
      ['İki taraf arasında gerginlik var.', 'i-Kİ ta-RAF a-ra-sın-DA ger-gin-LİK var', 'هناك توتّر بين الطرفين.', 'ئاڵۆزی لە نێوان دوو لایەندا هەیە.']),
    opposite: ['huzur'],
    related: ['gergin'],
  },
  {
    ...w('sıkıntı', 'sı-kın-TI', 'ضيق، مشكلة', 'تەنگانە',
      ['Bir sıkıntı var mı?', 'bir sı-kın-TI VAR mı', 'هل هناك مشكلة؟', 'کێشەیەک هەیە؟']),
    collocations: ['sıkıntı çekmek', 'sıkıntı yok'],
    note: b(
      '«Sıkıntı yok» عبارة يومية جداً = «لا مشكلة، تمام».',
      '«Sıkıntı yok» دەستەواژەیەکی ڕۆژانەیە.',
    ),
  },
  {
    ...w('yorgunluk', 'yor-gun-LUK', 'إرهاق، تعب', 'ماندووبوون',
      ['Zihinsel yorgunluk da gerçektir.', 'zi-hin-SEL yor-gun-LUK DA ger-çek-TİR', 'الإرهاق الذهني حقيقي أيضاً.', 'ماندووبوونی مێشکیش ڕاستەقینەیە.']),
    related: ['yorulmak', 'yorgun'],
  },
  {
    ...w('motivasyon', 'mo-ti-vas-YON', 'دافعية، حافز', 'پاڵنەر',
      ['Motivasyonum düştü.', 'mo-ti-vas-yo-NUM düş-TÜ', 'انخفضت دافعيتي.', 'پاڵنەرم کەم بووەوە.']),
    collocations: ['motivasyon kaybı', 'motive olmak'],
  },
  {
    ...w('şaşkınlık', 'şaş-kın-LIK', 'دهشة، حيرة', 'سەرسوڕمان',
      ['Haberi şaşkınlıkla karşıladık.', 'ha-be-Rİ şaş-kın-lık-LA kar-şı-la-DIK', 'استقبلنا الخبر بدهشة.', 'بە سەرسوڕمانەوە پێشوازیمان لە هەواڵەکە کرد.']),
    related: ['şaşırmak'],
  },
]);

export const B1_VOCABULARY_SOCIAL_LIFE: VocabItem[] = [
  ...OCCASIONS,
  ...CHARACTER,
  ...FEELINGS,
];
