import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Sentence packs organised by STRUCTURE rather than by situation.
 *
 * The earlier packs answered "what do I say at the bank?". These answer "how
 * do I build a Turkish sentence that does X" — condition, concession, reported
 * speech, passive, causative, relative clause. Those are the constructions a
 * student meets constantly in reading and produces almost never, because
 * situational packs never isolate them.
 *
 * Deliberate design choice (§13): the sentences reuse curriculum vocabulary —
 * `karar`, `başvurmak`, `hükümet`, `dikkat`, `tehlike` — rather than
 * introducing new words. A sentence pack is a place to meet known words in a
 * new shape, not a back door for vocabulary that skipped the levelling.
 */
export const STRUCTURE_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 's-a1-questions',
    level: 'a1',
    order: 50,
    title: 'Soru Kalıpları',
    titleI18n: b('صيغ السؤال', 'شێوەی پرسیار'),
    focus: b(
      'أداة السؤال mı تُكتب منفصلة وتتبع انسجام الحركات: mı / mi / mu / mü.',
      'ئامرازی پرسیار mı جیا دەنووسرێت و شوێن هارمۆنیا دەکەوێت: mı / mi / mu / mü.',
    ),
    sentences: [
      p('Bu senin kitabın mı?', 'BU se-NİN ki-ta-BIN mı', 'هل هذا كتابك؟', 'ئەمە کتێبی تۆیە؟'),
      p('Türkçe biliyor musun?', 'türk-ÇE bi-li-YOR mu-sun', 'هل تعرف التركية؟', 'تورکی دەزانیت؟'),
      p('Öğrenci misin?', 'öğ-ren-Cİ mi-sin', 'هل أنت طالب؟', 'قوتابیت؟'),
      p('Bu çantayı kim getirdi?', 'BU çan-ta-YI KİM ge-tir-Dİ', 'من أحضر هذه الحقيبة؟', 'ئەم جانتایەی کێ هێنا؟'),
      p('Ne zaman başlıyor?', 'NE za-MAN baş-lı-YOR', 'متى يبدأ؟', 'کەی دەست پێدەکات؟'),
      p('Nerede oturuyorsun?', 'ne-re-DE o-tu-ru-yor-SUN', 'أين تسكن؟', 'لە کوێ دەژیت؟'),
      p('Niçin gelmedin?', 'ni-ÇİN gel-me-DİN', 'لماذا لم تأتِ؟', 'بۆچی نەهاتیت؟'),
      p('Kaç kardeşin var?', 'KAÇ kar-de-ŞİN var', 'كم أخاً لديك؟', 'چەند برات هەیە؟'),
      p('Hangi otobüse bineceğiz?', 'han-Gİ o-to-bü-SE bi-ne-ce-ĞİZ', 'أيّ حافلة سنركب؟', 'سواری کام پاس دەبین؟'),
      p('Nasılsın, iyi misin?', 'na-SIL-sın i-Yİ mi-sin', 'كيف حالك، أأنت بخير؟', 'چۆنی، باشی؟'),
    ],
  },
  {
    id: 's-a1-negation',
    level: 'a1',
    order: 51,
    title: 'Olumsuz Cümleler',
    titleI18n: b('الجمل المنفية', 'ڕستەی نەرێنی'),
    focus: b(
      'النفي في الفعل بـ -me/-ma، وفي الاسم بـ değil، وفي الوجود بـ yok.',
      'نەفی لە کرداردا بە -me/-ma، لە ناودا بە değil، لە بوونیشدا بە yok.',
    ),
    sentences: [
      p('Bugün çalışmıyorum.', 'bu-GÜN ça-lış-mı-yo-RUM', 'لا أعمل اليوم.', 'ئەمڕۆ کار ناکەم.'),
      p('Bu benim çantam değil.', 'BU be-NİM çan-TAM de-ĞİL', 'هذه ليست حقيبتي.', 'ئەمە جانتای من نییە.'),
      p('Evde kimse yok.', 'ev-DE kim-SE yok', 'لا أحد في البيت.', 'کەس لە ماڵەوە نییە.'),
      p('Hiç param kalmadı.', 'HİÇ pa-RAM kal-ma-DI', 'لم يبقَ لديّ أيّ مال.', 'هیچ پارەم نەماوە.'),
      p('Onu hiç görmedim.', 'o-NU HİÇ gör-me-DİM', 'لم أره أبداً.', 'هەرگیز نەمبینیوە.'),
      p('Daha karar vermedim.', 'da-HA ka-RAR ver-me-DİM', 'لم أقرّر بعد.', 'هێشتا بڕیارم نەداوە.'),
      p('Yarın gelemeyeceğim.', 'ya-RIN ge-le-me-ye-ce-ĞİM', 'لن أستطيع المجيء غداً.', 'سبەینێ ناتوانم بێم.'),
      p('Söylediğin doğru değil.', 'söy-le-di-ĞİN doğ-RU de-ĞİL', 'ما قلته غير صحيح.', 'ئەوەی وتت ڕاست نییە.'),
    ],
  },

  /* ================================ A2 ================================ */
  {
    id: 's-a2-requests',
    level: 'a2',
    order: 50,
    title: 'Rica ve Öneri',
    titleI18n: b('الطلب والاقتراح', 'داواکاری و پێشنیار'),
    focus: b(
      'الفرق بين الأمر والرجاء في التركية درجة تهذيب، لا صيغة مختلفة.',
      'جیاوازی نێوان فەرمان و داواکاری لە تورکیدا پلەی ڕێزە، نەک شێوەیەکی جیاواز.',
    ),
    sentences: [
      p('Pencereyi açar mısınız?', 'pen-ce-re-Yİ a-ÇAR mı-sı-nız', 'هل تفتح النافذة من فضلك؟', 'دەکرێت پەنجەرەکە بکەیتەوە؟'),
      p('Bana yardım edebilir misin?', 'ba-NA yar-DIM e-de-bi-LİR mi-sin', 'هل يمكنك مساعدتي؟', 'دەتوانیت یارمەتیم بدەیت؟'),
      p('Biraz bekler misiniz lütfen?', 'bi-RAZ bek-LER mi-si-niz lüt-FEN', 'هل تنتظر قليلاً من فضلك؟', 'تکایە کەمێک چاوەڕێ دەکەیت؟'),
      p('Hadi biraz yürüyelim.', 'ha-Dİ bi-RAZ yü-rü-ye-LİM', 'هيا نمشِ قليلاً.', 'وەرە کەمێک پیاسە بکەین.'),
      p('İstersen sonra konuşuruz.', 'is-ter-SEN son-RA ko-nu-şu-RUZ', 'إن شئت نتحدّث لاحقاً.', 'ئەگەر بتەوێت دواتر قسە دەکەین.'),
      p('Kahve içmeye ne dersin?', 'kah-VE iç-me-YE NE der-SİN', 'ما رأيك أن نشرب قهوة؟', 'چی دەڵێیت قاوەیەک بخۆینەوە؟'),
      p('Bence taksiyle gitsek daha iyi.', 'ben-CE tak-siy-LE git-SEK da-HA i-Yİ', 'برأيي الأفضل أن نذهب بالتاكسي.', 'بەلای منەوە باشترە بە تاکسی بڕۆین.'),
      p('Lütfen kapıyı kapatın.', 'lüt-FEN ka-pı-YI ka-pa-TIN', 'أغلقوا الباب من فضلكم.', 'تکایە دەرگاکە دابخەن.'),
    ],
  },
  {
    id: 's-a2-comparison',
    level: 'a2',
    order: 51,
    title: 'Karşılaştırma',
    titleI18n: b('المقارنة', 'بەراوردکردن'),
    focus: b(
      'المقارنة بـ -den daha، والتفضيل بـ en. لا يوجد تصريف للصفة كما في الإنجليزية.',
      'بەراورد بە -den daha، و باڵاترین بە en. ئاوەڵناو وەک ئینگلیزی ناگۆڕێت.',
    ),
    sentences: [
      p('İstanbul Ankara’dan daha büyük.', 'is-tan-BUL an-ka-RA-dan da-HA bü-YÜK', 'إسطنبول أكبر من أنقرة.', 'ئیستەنبووڵ لە ئەنقەرە گەورەترە.'),
      p('Bu kitap ötekinden daha ilginç.', 'BU ki-TAP ö-te-kin-DEN da-HA il-GİNÇ', 'هذا الكتاب أكثر إثارة من الآخر.', 'ئەم کتێبە لەوی تر سەرنجڕاکێشترە.'),
      p('En sevdiğim mevsim sonbahar.', 'EN sev-di-ĞİM mev-SİM son-ba-HAR', 'فصلي المفضّل هو الخريف.', 'خۆشەویزترین وەرزم پاییزە.'),
      p('Kardeşim benden iki yaş küçük.', 'kar-de-ŞİM ben-DEN i-Kİ YAŞ kü-ÇÜK', 'أخي أصغر منّي بسنتين.', 'برام دوو ساڵ لە من بچووکترە.'),
      p('Bu yol diğeri kadar uzun değil.', 'BU YOL di-ğe-Rİ ka-DAR u-ZUN de-ĞİL', 'هذا الطريق ليس طويلاً كالآخر.', 'ئەم ڕێگایە وەک ئەوی تر درێژ نییە.'),
      p('İkisi de aynı derecede zor.', 'i-ki-Sİ de ay-NI de-re-ce-DE ZOR', 'كلاهما صعب بالدرجة نفسها.', 'هەردووکیان بە یەک ئاست سەختن.'),
    ],
  },

  /* ================================ B1 ================================ */
  {
    id: 's-b1-conditions',
    level: 'b1',
    order: 50,
    title: 'Şart Cümleleri',
    titleI18n: b('الجمل الشرطية', 'ڕستەی مەرجدار'),
    focus: b(
      'التركية تميّز بوضوح بين الشرط الممكن (-se) والشرط المستحيل (-seydi).',
      'تورکی بە ڕوونی جیاوازی دەکات لە نێوان مەرجی گونجاو (-se) و مەرجی نەگونجاو (-seydi).',
    ),
    sentences: [
      p('Vaktim olursa sana uğrarım.', 'vak-TİM o-lur-SA sa-NA uğ-ra-RIM', 'إن كان لديّ وقت سأمرّ عليك.', 'ئەگەر کاتم هەبێت سەردانت دەکەم.'),
      p('Yağmur yağarsa gitmeyiz.', 'yağ-MUR ya-ğar-SA git-me-YİZ', 'إن أمطرت لن نذهب.', 'ئەگەر باران ببارێت ناچین.'),
      p('Erken kalksaydım treni kaçırmazdım.', 'er-KEN kalk-say-DIM tre-Nİ ka-çır-maz-DIM', 'لو استيقظت مبكراً لما فاتني القطار.', 'ئەگەر زوو هەستابام شەمەندەفەرم لەدەست نەدەدا.'),
      p('Karar vermeden önce iyi düşün.', 'ka-RAR ver-me-DEN ön-CE i-Yİ dü-ŞÜN', 'فكّر جيداً قبل أن تقرّر.', 'پێش ئەوەی بڕیار بدەیت باش بیر بکەرەوە.'),
      p('Başvurmazsan hiçbir şey değişmez.', 'baş-vur-maz-SAN hiç-BİR ŞEY de-ğiş-MEZ', 'إن لم تتقدّم بطلب فلن يتغيّر شيء.', 'ئەگەر داواکاری پێشکەش نەکەیت هیچ ناگۆڕێت.'),
      p('İstesen bile artık geç.', 'is-te-SEN bi-LE ar-TIK GEÇ', 'حتى لو أردت فقد تأخّر الوقت.', 'تەنانەت ئەگەر بتەوێت ئێستا درەنگە.'),
    ],
  },
  {
    id: 's-b1-cause',
    level: 'b1',
    order: 51,
    title: 'Sebep ve Sonuç',
    titleI18n: b('السبب والنتيجة', 'هۆکار و ئەنجام'),
    focus: b(
      'التركية تضع السبب قبل النتيجة عادةً، عكس ترتيب العربية الشائع.',
      'تورکی بەزۆری هۆکار پێش ئەنجام دادەنێت، پێچەوانەی ڕیزبەندی باوی عەرەبی.',
    ),
    sentences: [
      p('Trafik olduğu için geç kaldım.', 'tra-FİK ol-du-ĞU i-ÇİN GEÇ kal-DIM', 'تأخّرت بسبب الزحام.', 'بەهۆی قەرەباڵغییەوە دواکەوتم.'),
      p('Hasta olduğundan derse gelemedi.', 'has-TA ol-du-ğun-DAN ders-SE ge-le-me-Dİ', 'لم يستطع الحضور لأنه مريض.', 'بەهۆی نەخۆشییەوە نەیتوانی بێت.'),
      p('Çok çalıştı, bu yüzden başardı.', 'ÇOK ça-lış-TI BU yü-zden ba-şar-DI', 'اجتهد كثيراً، لذلك نجح.', 'زۆر کاری کرد، بۆیە سەرکەوت.'),
      p('Fiyatlar arttığı için satışlar düştü.', 'fi-yat-LAR art-tı-ĞI i-ÇİN sa-tış-LAR düş-TÜ', 'انخفضت المبيعات لأن الأسعار ارتفعت.', 'بەهۆی زیادبوونی نرخەکان فرۆشتن کەمی کرد.'),
      p('Sonuç olarak karar ertelendi.', 'so-NUÇ o-la-RAK ka-RAR er-te-len-Dİ', 'وفي النتيجة أُجّل القرار.', 'لە ئەنجامدا بڕیارەکە دواخرا.'),
      p('Dikkat etmediği için kaza oldu.', 'dik-KAT et-me-di-Ğİ i-ÇİN ka-ZA ol-DU', 'وقع الحادث لأنه لم ينتبه.', 'بەهۆی ئاگادارنەبوونەوە ڕووداوەکە ڕوویدا.'),
    ],
  },

  /* ================================ B2 ================================ */
  {
    id: 's-b2-passive',
    level: 'b2',
    order: 50,
    title: 'Edilgen ve Ettirgen',
    titleI18n: b('المبني للمجهول والتعدية', 'ناچالاک و کارپێکەر'),
    focus: b(
      'المبني للمجهول عمود الكتابة الرسمية التركية؛ والتعدية (-dır/-tır) لا مقابل مباشر لها في العربية.',
      'ڕەنگی ناچالاک کۆڵەکەی نووسینی فەرمی تورکییە؛ کارپێکەریش (-dır/-tır) هاوتای ڕاستەوخۆی لە عەرەبیدا نییە.',
    ),
    sentences: [
      p('Karar dün akşam açıklandı.', 'ka-RAR DÜN ak-ŞAM a-çık-lan-DI', 'أُعلن القرار مساء أمس.', 'بڕیارەکە دوێنێ ئێوارە ڕاگەیەندرا.'),
      p('Bu köprü 1973’te yapılmış.', 'BU köp-RÜ bin do-kuz yüz yet-miş ÜÇ-te ya-pıl-MIŞ', 'بُني هذا الجسر عام 1973.', 'ئەم پردە لە ساڵی ١٩٧٣ دروستکراوە.'),
      p('Toplantı yarına ertelendi.', 'top-lan-TI ya-rı-NA er-te-len-Dİ', 'أُجّل الاجتماع إلى الغد.', 'کۆبوونەوەکە بۆ سبەینێ دواخرا.'),
      p('Müdür raporu bana yazdırdı.', 'mü-DÜR ra-po-RU ba-NA yaz-dır-DI', 'جعلني المدير أكتب التقرير.', 'بەڕێوەبەر وایکرد ڕاپۆرتەکە بنووسم.'),
      p('Saçımı kestirdim.', 'sa-çı-MI kes-tir-DİM', 'قصصت شعري (عند الحلّاق).', 'قژم بڕی (لای سەرتاش).'),
      p('Belgeler imzalanmak üzere gönderildi.', 'bel-ge-LER im-za-lan-MAK ü-ze-RE gön-de-ril-Dİ', 'أُرسلت الوثائق للتوقيع.', 'بەڵگەنامەکان بۆ واژووکردن نێردران.'),
      p('Yeni yasa mecliste görüşülüyor.', 'ye-Nİ ya-SA mec-lis-TE gö-rü-şü-lü-YOR', 'يُناقش القانون الجديد في البرلمان.', 'یاسا نوێیەکە لە ئەنجومەندا باس دەکرێت.'),
    ],
  },
  {
    id: 's-b2-reported',
    level: 'b2',
    order: 51,
    title: 'Aktarılan Söz',
    titleI18n: b('الكلام المنقول', 'قسەی گوازراوە'),
    focus: b(
      'التركية تنقل الكلام بـ -dığını söyledi، وتميّز بين ما رأيته وما سمعت به عبر -miş.',
      'تورکی قسە بە -dığını söyledi دەگوازێتەوە، و بە -miş جیاوازی دەکات لە نێوان بینراو و بیستراو.',
    ),
    sentences: [
      p('Geleceğini söyledi.', 'ge-le-ce-ği-Nİ söy-le-Dİ', 'قال إنه سيأتي.', 'وتی کە دێت.'),
      p('Hasta olduğunu duydum.', 'has-TA ol-du-ğu-NU duy-DUM', 'سمعت أنه مريض.', 'بیستم کە نەخۆشە.'),
      p('Toplantının ertelendiğini bilmiyordum.', 'top-lan-tı-NIN er-te-len-di-ği-Nİ bil-mi-yor-DUM', 'لم أكن أعرف أن الاجتماع أُجّل.', 'نەمدەزانی کۆبوونەوەکە دواخراوە.'),
      p('Yarın yağmur yağacakmış.', 'ya-RIN yağ-MUR ya-ğa-cak-MIŞ', 'يُقال إنها ستمطر غداً.', 'دەڵێن سبەینێ باران دەبارێت.'),
      p('Bana neden söylemediğini anlamıyorum.', 'ba-NA ne-DEN söy-le-me-di-ği-Nİ an-la-mı-yo-RUM', 'لا أفهم لماذا لم تخبرني.', 'تێناگەم بۆچی پێت نەوتم.'),
      p('Herkes onun haklı olduğunu düşünüyor.', 'her-KES o-NUN hak-LI ol-du-ğu-NU dü-şü-nü-YOR', 'الجميع يظنّ أنه محقّ.', 'هەموو کەس وا بیردەکاتەوە کە ڕاست دەکات.'),
    ],
  },

  /* ================================ C1 ================================ */
  {
    id: 's-c1-relative',
    level: 'c1',
    order: 50,
    title: 'Sıfat-Fiil ve İlgi Yapıları',
    titleI18n: b('الصفات الفعلية والجمل الوصلية', 'ئاوەڵکردار و ڕستەی پەیوەندیدار'),
    focus: b(
      'التركية لا تملك «الذي»؛ تبني الوصل بلاحقة على الفعل تسبق الاسم. هذا أكبر فرق بنيوي عن العربية.',
      'تورکی «ئەوەی» نییە؛ پەیوەندی بە پاشگرێک لەسەر کردار دروست دەکات کە پێش ناو دێت.',
    ),
    sentences: [
      p('Dün gördüğüm film çok etkileyiciydi.', 'DÜN gör-dü-ĞÜM FİLM ÇOK et-ki-le-yi-ciy-Dİ', 'الفيلم الذي شاهدته أمس كان مؤثّراً جداً.', 'ئەو فیلمەی دوێنێ بینیم زۆر کاریگەر بوو.'),
      p('Burada çalışan herkes çok deneyimli.', 'bu-ra-DA ça-lı-ŞAN her-KES ÇOK de-ne-yim-Lİ', 'كل من يعمل هنا ذو خبرة كبيرة.', 'هەموو ئەوانەی لێرە کار دەکەن زۆر ئەزموونداری.'),
      p('Söylediklerin beni düşündürdü.', 'söy-le-dik-le-RİN be-Nİ dü-şün-dür-DÜ', 'ما قلته جعلني أفكّر.', 'ئەوەی وتت وایکرد بیر بکەمەوە.'),
      p('Kararın alındığı toplantıya katılmadım.', 'ka-ra-RIN a-lın-dı-ĞI top-lan-tı-YA ka-tıl-ma-DIM', 'لم أحضر الاجتماع الذي اتُّخذ فيه القرار.', 'بەشداری ئەو کۆبوونەوەیەم نەکرد کە بڕیارەکەی تێدا درا.'),
      p('Üzerinde çalıştığımız proje bitmek üzere.', 'ü-ze-rin-DE ça-lış-tı-ğı-MIZ pro-JE bit-MEK ü-ze-RE', 'المشروع الذي نعمل عليه أوشك على الانتهاء.', 'ئەو پڕۆژەیەی لەسەری کار دەکەین خەریکە تەواو دەبێت.'),
      p('Anlaşılması güç bir metinle karşılaştık.', 'an-la-şıl-ma-SI GÜÇ bir me-tin-LE kar-şı-laş-TIK', 'واجهنا نصّاً صعب الفهم.', 'ڕووبەڕووی دەقێکی سەختی تێگەیشتن بووینەوە.'),
    ],
  },

  /* =============================== C1+ ================================ */
  {
    id: 's-c1plus-concession',
    level: 'c1plus',
    order: 50,
    title: 'Ödün ve Karşıtlık',
    titleI18n: b('التنازل والتضادّ', 'دانپێدانان و دژایەتی'),
    focus: b(
      'أن تعترف للخصم ثم تنقض — أهمّ حركة في المقال الجدلي، ولها في التركية أدوات دقيقة.',
      'دانپێدانان بە بەرامبەر و پاشان ڕەتکردنەوە — گرنگترین جووڵەی وتاری بەڵگەیی.',
    ),
    sentences: [
      p('Her ne kadar haklı görünse de, veriler bunu doğrulamıyor.', 'HER ne ka-DAR hak-LI gö-rün-SE de ve-ri-LER bu-NU doğ-ru-la-mı-YOR', 'مع أنه يبدو محقّاً، فإن البيانات لا تؤكّد ذلك.', 'هەرچەندە وا دیارە ڕاست بێت، داتاکان پشتڕاستی ناکەنەوە.'),
      p('Bu itiraz yerinde olmakla birlikte, kapsamı dardır.', 'BU i-ti-RAZ ye-rin-DE ol-mak-LA bir-lik-TE kap-sa-MI dar-DIR', 'رغم وجاهة هذا الاعتراض، فنطاقه ضيّق.', 'سەرەڕای جێگیربوونی ئەم ناڕەزاییە، بواری تەسکە.'),
      p('Söz konusu bulgular ilginç olsa dahi, genellenemez.', 'SÖZ ko-nu-SU bul-gu-LAR il-GİNÇ ol-SA da-Hİ ge-nel-le-ne-MEZ', 'وإن كانت النتائج المعنية مثيرة، فلا يمكن تعميمها.', 'هەرچەندە ئەو دۆزینەوانە سەرنجڕاکێش بن، گشتاندنیان بۆ ناکرێت.'),
      p('Aksine, tam da bu nokta savı zayıflatıyor.', 'ak-si-NE TAM da BU nok-TA sa-VI za-yıf-la-tı-YOR', 'على العكس، هذه النقطة بالذات تضعف الأطروحة.', 'بەپێچەوانەوە، هەر ئەم خاڵە بانگەشەکە لاواز دەکات.'),
      p('Ne var ki, bu yorum metinde dayanak bulmuyor.', 'NE var ki BU yo-RUM me-tin-DE da-ya-NAK bul-mu-YOR', 'غير أن هذا التأويل لا يجد سنداً في النصّ.', 'بەڵام ئەم لێکدانەوەیە پاڵپشتی لە دەقەکەدا نادۆزێتەوە.'),
      p('Bununla birlikte, sorunun kendisi yerinde duruyor.', 'bu-nun-LA bir-lik-TE so-ru-NUN ken-di-Sİ ye-rin-DE du-ru-YOR', 'ومع ذلك، تبقى المشكلة نفسها قائمة.', 'لەگەڵ ئەوەشدا، خودی کێشەکە لە جێی خۆیدا دەمێنێتەوە.'),
    ],
  },
];
