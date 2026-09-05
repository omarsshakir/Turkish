import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Sentence packs organised by the grammatical form they drill.
 *
 * `sentences-structures.ts` covers the big clause types — condition, cause,
 * passive, reported speech, relative, concession. This file covers the forms
 * that sit inside those clauses and that a student produces wrong for years:
 * ability, obligation, purpose, the four time-clause suffixes, the evidential
 * past, the habitual past, and the converbs `-ip` and `-erek`.
 *
 * Each pack isolates ONE form. Where a form has a common wrong analogue in
 * Arabic or Kurdish, the focus line says so rather than leaving the student to
 * discover it by being marked wrong.
 *
 * As in the other packs, the vocabulary is entirely from the curriculum.
 */
export const FORM_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 'f-a1-existential',
    level: 'a1',
    order: 80,
    title: 'Var ve Yok',
    titleI18n: b('يوجد ولا يوجد', 'هەیە و نییە'),
    focus: b(
      'التركية لا فعل «يملك» لها: الملكية تُبنى بلاحقة الملكية + var/yok.',
      'تورکی کرداری «هەبوون» نییە: خاوەندارێتی بە پاشگر + var/yok دروست دەبێت.',
    ),
    sentences: [
      p('Bu odada bir masa var.', 'BU o-da-DA bir ma-SA var', 'في هذه الغرفة طاولة.', 'لەم ژوورەدا مێزێک هەیە.'),
      p('Bugün hiç param yok.', 'bu-GÜN HİÇ pa-RAM yok', 'ليس معي مال اليوم إطلاقاً.', 'ئەمڕۆ هیچ پارەم نییە.'),
      p('İki kardeşim var.', 'i-Kİ kar-de-ŞİM var', 'لديّ أخوان.', 'دوو برام هەیە.'),
      p('Buzdolabında süt var mı?', 'buz-do-la-bın-DA SÜT VAR mı', 'هل يوجد حليب في الثلاجة؟', 'شیر لە سەلاجەدا هەیە؟'),
      p('Bugün dersimiz yok.', 'bu-GÜN der-si-MİZ yok', 'ليس لدينا درس اليوم.', 'ئەمڕۆ وانەمان نییە.'),
      p('Sınıfta kimse yok.', 'sı-nıf-TA kim-SE yok', 'لا أحد في الصفّ.', 'کەس لە پۆلەکەدا نییە.'),
      p('Bir sorunuz var mı?', 'BİR so-ru-NUZ VAR mı', 'هل لديكم سؤال؟', 'پرسیارتان هەیە؟'),
      p('Vaktim yok, gitmem lazım.', 'vak-TİM yok git-MEM la-ZIM', 'ليس لديّ وقت، عليّ الذهاب.', 'کاتم نییە، پێویستە بڕۆم.'),
    ],
  },
  {
    id: 'f-a1-ability',
    level: 'a1',
    order: 81,
    title: 'Yapabilmek',
    titleI18n: b('القدرة: -ebilmek', 'توانین: -ebilmek'),
    focus: b(
      'القدرة لاحقة داخل الفعل (-ebil-)، لا فعل مستقلّ. والنفي شاذّ: -eme-.',
      'توانین پاشگرێکە لەناو کرداردا (-ebil-)، نەک کردارێکی سەربەخۆ.',
    ),
    sentences: [
      p('Türkçe konuşabiliyorum.', 'türk-ÇE ko-nu-şa-bi-li-yo-RUM', 'أستطيع التحدّث بالتركية.', 'دەتوانم بە تورکی قسە بکەم.'),
      p('Bugün gelemem.', 'bu-GÜN ge-le-MEM', 'لا أستطيع المجيء اليوم.', 'ئەمڕۆ ناتوانم بێم.'),
      p('Araba kullanabiliyor musun?', 'a-ra-BA kul-la-na-bi-li-YOR mu-SUN', 'هل تستطيع قيادة السيارة؟', 'دەتوانیت ئۆتۆمبێل لێبخوڕیت؟'),
      p('Bu kelimeyi okuyamıyorum.', 'BU ke-li-me-Yİ o-ku-ya-mı-yo-RUM', 'لا أستطيع قراءة هذه الكلمة.', 'ناتوانم ئەم وشەیە بخوێنمەوە.'),
      p('Yarın erken kalkabilirim.', 'ya-RIN er-KEN kal-ka-bi-li-RİM', 'أستطيع الاستيقاظ مبكراً غداً.', 'سبەینێ دەتوانم زوو هەستم.'),
      p('Kapıyı açabilir misiniz?', 'ka-pı-YI a-ça-bi-LİR mi-si-NİZ', 'هل يمكنك فتح الباب؟', 'دەتوانیت دەرگاکە بکەیتەوە؟'),
      p('Onu hiç unutamadım.', 'o-NU HİÇ u-nu-ta-ma-DIM', 'لم أستطع نسيانه أبداً.', 'هەرگیز نەمتوانی لەبیری بکەم.'),
      p('Burada sigara içemezsiniz.', 'bu-ra-DA si-ga-RA i-çe-mez-si-NİZ', 'لا يمكنكم التدخين هنا.', 'لێرە ناتوانن جگەرە بکێشن.'),
    ],
  },
  /* ================================ A2 ================================ */
  {
    id: 'f-a2-obligation',
    level: 'a2',
    order: 82,
    title: 'Zorunluluk',
    titleI18n: b('الوجوب', 'پێویستی'),
    focus: b(
      'ثلاث صيغ متقاربة: -meli (ينبغي)، gerekiyor (يلزم)، zorunda (مضطرّ). الثالثة أقواها.',
      'سێ شێوەی نزیک: -meli، gerekiyor، zorunda.',
    ),
    sentences: [
      p('Erken yatmalısın.', 'er-KEN yat-ma-lı-SIN', 'عليك أن تنام مبكراً.', 'دەبێت زوو ڕابکشێیت.'),
      p('Bu formu doldurmam gerekiyor.', 'BU for-MU dol-dur-MAM ge-re-ki-YOR', 'يلزمني ملء هذه الاستمارة.', 'پێویستە ئەم فۆڕمە پڕ بکەمەوە.'),
      p('Yarın çalışmak zorundayım.', 'ya-RIN ça-lış-MAK zo-run-da-YIM', 'أنا مضطرّ للعمل غداً.', 'سبەینێ ناچارم کار بکەم.'),
      p('Randevu almanız gerekiyor.', 'ran-de-VU al-ma-NIZ ge-re-ki-YOR', 'يلزمكم أخذ موعد.', 'پێویستە کات وەربگرن.'),
      p('Kirayı ayın beşinde ödemeliyiz.', 'ki-ra-YI a-YIN be-şin-DE ö-de-me-li-YİZ', 'علينا دفع الإيجار في الخامس.', 'دەبێت کرێیەکە لە پێنجەمدا بدەین.'),
      p('Acele etmemiz lazım.', 'a-ce-LE et-me-MİZ la-ZIM', 'علينا أن نستعجل.', 'پێویستە پەلە بکەین.'),
      p('Bu ilacı aç karnına almamalısın.', 'BU i-la-CI AÇ kar-nı-NA al-ma-ma-lı-SIN', 'لا ينبغي تناول هذا الدواء على معدة فارغة.', 'نابێت ئەم دەرمانە بە سکی بەتاڵ بخۆیت.'),
      p('İmza atmanız yeterli.', 'im-ZA at-ma-NIZ ye-ter-Lİ', 'يكفي أن توقّعوا.', 'واژووکردنتان بەسە.'),
    ],
  },
  {
    id: 'f-a2-time',
    level: 'a2',
    order: 83,
    title: 'Zaman Bağlaçları',
    titleI18n: b('روابط الزمن', 'بەستەری کات'),
    focus: b(
      'التركية تبني الزمن بلواحق لا بأدوات: -ince (عندما)، -dikten sonra (بعد أن)، -meden önce (قبل أن).',
      'تورکی کات بە پاشگر دروست دەکات نەک بە ئامراز.',
    ),
    sentences: [
      p('Eve gelince beni ara.', 'e-VE ge-lin-CE be-Nİ a-RA', 'اتّصل بي عندما تصل البيت.', 'کاتێک گەیشتیتە ماڵەوە پەیوەندیم پێوە بکە.'),
      p('Yemek yedikten sonra yürüyüşe çıkarız.', 'ye-MEK ye-dik-TEN son-RA yü-rü-yü-ŞE çı-ka-RIZ', 'نخرج للمشي بعد أن نأكل.', 'دوای خواردن دەچینە دەرەوە بۆ پیاسە.'),
      p('Çıkmadan önce ışıkları kapat.', 'çık-ma-DAN ön-CE ı-şık-la-RI ka-PAT', 'أطفئ الأنوار قبل أن تخرج.', 'پێش دەرچوون گڵۆپەکان بکوژێنەوە.'),
      p('Ders çalışırken müzik dinlerim.', 'DERS ça-lı-şır-KEN mü-ZİK din-le-RİM', 'أستمع للموسيقى حين أذاكر.', 'کاتێک وانە دەخوێنم گوێ لە مۆسیقا دەگرم.'),
      p('Otobüs kalkarken koşarak yetiştim.', 'o-to-BÜS kal-kar-KEN ko-şa-RAK ye-tiş-TİM', 'لحقت بالحافلة راكضاً وهي تتحرّك.', 'کاتێک پاسەکە دەڕۆیشت بە ڕاکردن پێی گەیشتم.'),
      p('İşim bitince seni ararım.', 'i-ŞİM bi-tin-CE se-Nİ a-ra-RIM', 'سأتّصل بك عندما ينتهي عملي.', 'کاتێک کارەکەم تەواو بوو پەیوەندیت پێوە دەکەم.'),
      p('Uyanmadan önce alarm çaldı.', 'u-yan-ma-DAN ön-CE a-LARM çal-DI', 'رنّ المنبّه قبل أن أستيقظ.', 'پێش خەبەربوونەوەم زەنگەکە لێدرا.'),
      p('Formu imzaladıktan sonra teslim edin.', 'for-MU im-za-la-dık-TAN son-RA tes-LİM e-DİN', 'سلّم الاستمارة بعد أن توقّعها.', 'دوای واژووکردنی فۆڕمەکە بیدە.'),
    ],
  },
  {
    id: 'f-a2-purpose',
    level: 'a2',
    order: 84,
    title: 'Amaç Bildirmek',
    titleI18n: b('التعبير عن الغاية', 'دەربڕینی مەبەست'),
    focus: b(
      '«için» تأخذ المصدر إن اتّحد الفاعل، و«diye» أو «-mesi için» إن اختلف.',
      '«için» ماستەر وەردەگرێت ئەگەر کردار یەک بێت.',
    ),
    sentences: [
      p('Türkçe öğrenmek için buraya geldim.', 'türk-ÇE öğ-ren-MEK i-ÇİN bu-ra-YA gel-DİM', 'جئت إلى هنا لأتعلّم التركية.', 'بۆ فێربوونی تورکی هاتمە ئێرە.'),
      p('Sınavı geçmek için çok çalıştım.', 'sı-na-VI geç-MEK i-ÇİN ÇOK ça-lış-TIM', 'ذاكرت كثيراً لأنجح في الامتحان.', 'بۆ سەرکەوتن لە تاقیکردنەوەکە زۆر خوێندم.'),
      p('Anlaması için yavaş konuştum.', 'an-la-ma-SI i-ÇİN ya-VAŞ ko-nuş-TUM', 'تكلّمت ببطء كي يفهم.', 'هێواش قسەم کرد بۆ ئەوەی تێبگات.'),
      p('Para biriktirmek için az harcıyorum.', 'pa-RA bi-rik-tir-MEK i-ÇİN AZ har-cı-yo-RUM', 'أنفق قليلاً كي أدّخر المال.', 'کەم خەرج دەکەم بۆ ئەوەی پارە کۆبکەمەوە.'),
      p('Geç kalmamak için erken çıktım.', 'GEÇ kal-ma-MAK i-ÇİN er-KEN çık-TIM', 'خرجت مبكراً كي لا أتأخّر.', 'زوو دەرچووم بۆ ئەوەی دواکەوتوو نەبم.'),
      p('Sağlıklı olmak için spor yapıyorum.', 'sağ-lık-LI ol-MAK i-ÇİN SPOR ya-pı-yo-RUM', 'أمارس الرياضة كي أكون بصحّة جيدة.', 'وەرزش دەکەم بۆ ئەوەی تەندروست بم.'),
      p('Duysun diye yüksek sesle söyledim.', 'duy-SUN di-YE yük-SEK ses-LE söy-le-DİM', 'قلتها بصوت عالٍ كي يسمع.', 'بە دەنگی بەرز وتم بۆ ئەوەی ببیستێت.'),
      p('Bilgi almak için müdürlüğe gittim.', 'bil-Gİ al-MAK i-ÇİN mü-dür-lü-ĞE git-TİM', 'ذهبت إلى المديرية للاستفسار.', 'بۆ زانیاری وەرگرتن چوومە بەڕێوەبەرایەتی.'),
    ],
  },
  /* ================================ B1 ================================ */
  {
    id: 'f-b1-evidential',
    level: 'b1',
    order: 85,
    title: 'Duyduğuma Göre: -miş',
    titleI18n: b('صيغة السماع: -miş', 'شێوەی بیستن: -miş'),
    focus: b(
      'التركية تميّز ما رأيتَه بنفسك (-di) عمّا سمعتَه أو استنتجته (-miş). العربية لا تلزمك بهذا التمييز.',
      'تورکی جیاوازی دەکات لە نێوان ئەوەی خۆت بینیوتە (-di) و ئەوەی بیستووتە (-miş).',
    ),
    sentences: [
      p('Dün akşam kar yağmış.', 'DÜN ak-ŞAM KAR yağ-MIŞ', 'يبدو أن الثلج نزل ليلة أمس.', 'دوێنێ ئێوارە بەفر باریوە.'),
      p('Ali evlenmiş, duydun mu?', 'a-Lİ ev-len-MİŞ duy-DUN mu', 'تزوّج علي، هل سمعت؟', 'عەلی هاوسەرگیری کردووە، بیستووتە؟'),
      p('Toplantı iptal edilmiş.', 'top-lan-TI ip-TAL e-dil-MİŞ', 'يبدو أن الاجتماع أُلغي.', 'کۆبوونەوەکە هەڵوەشێنراوەتەوە.'),
      p('Çok yorulmuşsun, dinlen biraz.', 'ÇOK yo-rul-muş-SUN din-LEN bi-RAZ', 'يبدو أنك تعبت كثيراً، استرح قليلاً.', 'زۆر ماندوو بوویت، کەمێک بحەسێوە.'),
      p('Anahtarı masaya bırakmışım.', 'a-nah-ta-RI ma-sa-YA bı-rak-mı-ŞIM', 'يبدو أنني تركت المفتاح على الطاولة.', 'وا دیارە کلیلەکەم لەسەر مێزەکە جێهێشتووە.'),
      p('Kapıcı çöpleri almamış.', 'ka-pı-CI çöp-le-Rİ al-ma-MIŞ', 'يبدو أن البوّاب لم يأخذ القمامة.', 'دەرگاوانەکە زبڵەکانی نەبردووە.'),
      p('Fatura zaten ödenmiş.', 'fa-tu-RA za-TEN ö-den-MİŞ', 'يبدو أن الفاتورة دُفعت أصلاً.', 'پسووڵەکە پێشتر دراوە.'),
      p('Maçı kaybetmişler.', 'ma-ÇI kay-bet-miş-LER', 'يبدو أنهم خسروا المباراة.', 'یارییەکەیان دۆڕاندووە.'),
    ],
  },
  {
    id: 'f-b1-habitual',
    level: 'b1',
    order: 86,
    title: 'Eskiden Böyleydi',
    titleI18n: b('ما كان يحدث في الماضي', 'ئەوەی جاران ڕوویدەدا'),
    focus: b(
      '«-erdi» للعادة الماضية، و«-iyordu» للحدث الجاري في الماضي. الفرق دقيق ومهم.',
      '«-erdi» بۆ خووی ڕابردوو، «-iyordu» بۆ ڕووداوی بەردەوامی ڕابردوو.',
    ),
    sentences: [
      p('Çocukken her yaz köye giderdik.', 'ço-cuk-KEN HER YAZ kö-YE gi-der-DİK', 'كنّا نذهب إلى القرية كل صيف في الصغر.', 'لە منداڵیدا هەموو هاوینێک دەچووینە گوند.'),
      p('Eskiden burada bir fırın vardı.', 'es-ki-DEN bu-ra-DA bir fı-RIN var-DI', 'كان هنا مخبز سابقاً.', 'جاران لێرە نانەواخانەیەک هەبوو.'),
      p('Annem her sabah çay demlerdi.', 'an-NEM HER sa-BAH ÇAY dem-ler-Dİ', 'كانت أمّي تُعدّ الشاي كل صباح.', 'دایکم هەموو بەیانییەک چای دەکوڵاند.'),
      p('O zamanlar telefonumuz yoktu.', 'O za-man-LAR te-le-fo-nu-MUZ yok-TU', 'لم يكن لدينا هاتف حينها.', 'لەو کاتەدا تەلەفۆنمان نەبوو.'),
      p('Dün akşam ders çalışıyordum.', 'DÜN ak-ŞAM DERS ça-lı-şı-yor-DUM', 'كنت أذاكر ليلة أمس.', 'دوێنێ ئێوارە وانەم دەخوێند.'),
      p('Lisede futbol oynardım.', 'li-se-DE fut-BOL oy-nar-DIM', 'كنت ألعب كرة القدم في الثانوية.', 'لە ئامادەییدا تۆپی پێ یاری دەکرد.'),
      p('Eskiden mektup yazardık.', 'es-ki-DEN mek-TUP ya-zar-DIK', 'كنّا نكتب الرسائل سابقاً.', 'جاران نامەمان دەنووسی.'),
      p('Kapı çalınca uyuyordum.', 'ka-PI ça-lın-CA u-yu-yor-DUM', 'كنت نائماً حين قُرع الباب.', 'کاتێک لە دەرگا درا خەوتبووم.'),
    ],
  },
  {
    id: 'f-b1-converbs',
    level: 'b1',
    order: 87,
    title: '-ip ve -erek',
    titleI18n: b('ربط الأفعال: -ip و -erek', 'بەستنی کردار: -ip و -erek'),
    focus: b(
      '«-ip» يربط فعلين متتاليين، و«-erek» يصف كيف حدث الفعل. العربية تستعمل الواو للاثنين.',
      '«-ip» دوو کردار بەیەکەوە دەبەستێت، «-erek» چۆنیەتی دەردەبڕێت.',
    ),
    sentences: [
      p('Kahvaltı yapıp işe gittim.', 'kah-val-TI ya-PIP i-ŞE git-TİM', 'تناولت الفطور وذهبت إلى العمل.', 'نانی بەیانیم خوارد و چوومە سەر کار.'),
      p('Koşarak otobüse yetiştim.', 'ko-şa-RAK o-to-bü-SE ye-tiş-TİM', 'لحقت بالحافلة راكضاً.', 'بە ڕاکردن گەیشتمە پاسەکە.'),
      p('Formu doldurup imzaladım.', 'for-MU dol-du-RUP im-za-la-DIM', 'ملأت الاستمارة ووقّعتها.', 'فۆڕمەکەم پڕ کردەوە و واژووم کرد.'),
      p('Gülerek cevap verdi.', 'gü-le-REK ce-VAP ver-Dİ', 'أجاب ضاحكاً.', 'بە پێکەنینەوە وەڵامی دایەوە.'),
      p('Kitabı alıp çantasına koydu.', 'ki-ta-BI a-LIP çan-ta-sı-NA koy-DU', 'أخذ الكتاب ووضعه في حقيبته.', 'کتێبەکەی برد و خستییە ناو جانتاکەی.'),
      p('Dinleyerek çok şey öğrendim.', 'din-le-ye-REK ÇOK ŞEY öğ-ren-DİM', 'تعلّمت الكثير بالاستماع.', 'بە گوێگرتن شتی زۆرم فێربوو.'),
      p('Ellerini yıkayıp sofraya otur.', 'el-le-ri-Nİ yı-ka-YIP sof-ra-YA o-TUR', 'اغسل يديك واجلس إلى المائدة.', 'دەستەکانت بشۆ و لەسەر خوان دانیشە.'),
      p('Adım adım ilerleyerek bitirdik.', 'a-DIM a-DIM i-ler-le-ye-REK bi-tir-DİK', 'أنهيناه بالتقدّم خطوة خطوة.', 'بە هەنگاو بە هەنگاو پێشکەوتن تەواومان کرد.'),
    ],
  },
  {
    id: 'f-b1-wishes',
    level: 'b1',
    order: 88,
    title: 'Keşke ve Dilek',
    titleI18n: b('التمنّي والندم', 'ئاواتەخوازی و پەشیمانی'),
    focus: b(
      '«keşke» + الماضي الشرطي للندم، و«-se» وحدها للتمنّي المفتوح.',
      '«keşke» + ڕابردووی مەرجی بۆ پەشیمانی.',
    ),
    sentences: [
      p('Keşke daha erken başlasaydım.', 'keş-KE da-HA er-KEN baş-la-say-DIM', 'ليتني بدأت مبكراً.', 'خۆزگە زووتر دەستم پێدەکرد.'),
      p('Keşke o gün gelmeseydin.', 'keş-KE O GÜN gel-me-sey-DİN', 'ليتك لم تأتِ ذلك اليوم.', 'خۆزگە ئەو ڕۆژە نەدەهاتیت.'),
      p('Bir gün İstanbul’da yaşasam.', 'BİR GÜN is-tan-bul-DA ya-şa-SAM', 'ليتني أعيش يوماً في إسطنبول.', 'خۆزگە ڕۆژێک لە ئەستەنبوڵ بژیام.'),
      p('Param olsa bir ev alırdım.', 'pa-RAM ol-SA bir EV a-lır-DIM', 'لو كان لديّ مال لاشتريت بيتاً.', 'ئەگەر پارەم هەبووایە خانووێکم دەکڕی.'),
      p('Keşke bunu bana söyleseydin.', 'keş-KE bu-NU ba-NA söy-le-sey-DİN', 'ليتك قلت لي هذا.', 'خۆزگە ئەمەت پێ بگوتمایە.'),
      p('Zamanında başvursaydık kabul edilirdik.', 'za-ma-nın-DA baş-vur-say-DIK ka-BUL e-di-lir-DİK', 'لو تقدّمنا في الوقت لقُبلنا.', 'ئەگەر لە کاتی خۆیدا داوامان بکردایە وەرمان دەگیرا.'),
      p('Umarım her şey yolunda gider.', 'u-ma-RIM HER ŞEY yo-lun-DA gi-DER', 'آمل أن يسير كل شيء على ما يرام.', 'هیوادارم هەموو شتێک باش بڕوات.'),
      p('İnşallah yarın hava düzelir.', 'in-şal-LAH ya-RIN ha-VA dü-ze-LİR', 'إن شاء الله يتحسّن الطقس غداً.', 'ئینشاڵا سبەینێ کەشەکە باش دەبێت.'),
    ],
  },
  /* ================================ B2 ================================ */
  {
    id: 'f-b2-causative',
    level: 'b2',
    order: 89,
    title: 'Ettirgen: Yaptırmak',
    titleI18n: b('صيغة التسبيب', 'شێوەی هۆکاری'),
    focus: b(
      'لاحقة -tir/-dir تعني «جعله يفعل» أو «كلّف أحداً بالفعل»: yapmak → yaptırmak.',
      'پاشگری -tir/-dir واتای «وایکرد بیکات» دەدات.',
    ),
    sentences: [
      p('Perdeleri diktirdik.', 'per-de-le-Rİ dik-tir-DİK', 'خِطنا الستائر (عند خيّاط).', 'پەردەکانمان دوورییەوە.'),
      p('Musluğu tamir ettirdik.', 'mus-lu-ĞU ta-MİR et-tir-DİK', 'صلّحنا الصنبور (عند فنّي).', 'موسلوکەکەمان چاککردەوە.'),
      p('Çocuğa ödevini yaptırdı.', 'ço-cu-ĞA ö-de-vi-Nİ yap-tır-DI', 'جعل الطفل يحلّ واجبه.', 'وای لە منداڵەکە کرد ئەرکەکەی بکات.'),
      p('Beni yarım saat bekletti.', 'be-Nİ ya-RIM sa-AT bek-let-Tİ', 'جعلني أنتظر نصف ساعة.', 'نیو کاتژمێر چاوەڕێی کردم.'),
      p('Elbiseyi kısalttırmam gerekiyor.', 'el-bi-se-Yİ kı-salt-tır-MAM ge-re-ki-YOR', 'يلزمني تقصير الفستان عند خيّاط.', 'پێویستە جلەکە کورت بکرێتەوە.'),
      p('Belgeleri müdüre imzalattık.', 'bel-ge-le-Rİ mü-dü-RE im-za-lat-TIK', 'جعلنا المدير يوقّع الوثائق.', 'بەڵگەنامەکانمان بە بەڕێوەبەر واژوو کرد.'),
      p('Haberi bana kim bildirdi?', 'ha-be-Rİ ba-NA KİM bil-dir-Dİ', 'من أبلغني الخبر؟', 'کێ هەواڵەکەی پێ ڕاگەیاندم؟'),
      p('Toplantıyı bir hafta ertelettik.', 'top-lan-tı-YI bir haf-TA er-te-let-TİK', 'أجّلنا الاجتماع أسبوعاً.', 'کۆبوونەوەکەمان هەفتەیەک دواخست.'),
    ],
  },
  {
    id: 'f-b2-nominalisation',
    level: 'b2',
    order: 90,
    title: 'Cümleyi İsimleştirmek',
    titleI18n: b('تحويل الجملة إلى اسم', 'ڕستە بکە بە ناو'),
    focus: b(
      'التركية لا «أنّ» لها: الجملة التابعة تصير اسماً بـ -dığı/-eceği + لاحقة الملكية.',
      'تورکی «کە»ی نییە: ڕستەی لاوەکی بە -dığı/-eceği دەبێت بە ناو.',
    ),
    sentences: [
      p('Geleceğini biliyordum.', 'ge-le-ce-ği-Nİ bi-li-yor-DUM', 'كنت أعرف أنه سيأتي.', 'دەمزانی دێت.'),
      p('Haklı olduğunu kabul etti.', 'hak-LI ol-du-ğu-NU ka-BUL et-Tİ', 'اعترف بأنه محقّ.', 'دانی پێدانا کە ڕاستە.'),
      p('Belgenin sahte olduğunu iddia ediyor.', 'bel-ge-NİN sah-TE ol-du-ğu-NU id-di-A e-di-YOR', 'يدّعي أن الوثيقة مزوّرة.', 'بانگەشە دەکات کە بەڵگەنامەکە ساختەیە.'),
      p('Ne istediğini anlamadım.', 'NE is-te-di-ği-Nİ an-la-ma-DIM', 'لم أفهم ماذا يريد.', 'تێنەگەیشتم چی دەوێت.'),
      p('Toplantının ertelendiğini duydum.', 'top-lan-tı-NIN er-te-len-di-ği-Nİ duy-DUM', 'سمعت أن الاجتماع أُجّل.', 'بیستم کۆبوونەوەکە دواخراوە.'),
      p('Nerede oturduğunu bilmiyorum.', 'ne-re-DE o-tur-du-ğu-NU bil-mi-yo-RUM', 'لا أعرف أين يسكن.', 'نازانم لە کوێ دەژی.'),
      p('Sorunun çözüleceğine inanıyorum.', 'so-ru-NUN çö-zü-le-ce-ği-NE i-na-nı-yo-RUM', 'أؤمن بأن المشكلة ستُحلّ.', 'باوەڕم وایە کێشەکە چارەسەر دەبێت.'),
      p('Ne zaman döneceğimi söylemedim.', 'NE za-MAN dö-ne-ce-ği-Mİ söy-le-me-DİM', 'لم أقل متى سأعود.', 'نەموت کەی دەگەڕێمەوە.'),
    ],
  },
  {
    id: 'f-b2-comparison',
    level: 'b2',
    order: 91,
    title: 'Karşılaştırma ve Derece',
    titleI18n: b('المقارنة والتدرّج', 'بەراورد و پلە'),
    focus: b(
      'المفضّل عليه يأخذ الابتداء (-dan daha)، والتفضيل المطلق بـ en. ولاحظ «kadar» للمساواة.',
      'بەراورد بە (-dan daha) و باشترین بە en دروست دەبێت.',
    ),
    sentences: [
      p('Bu yıl geçen yıldan daha zor.', 'BU YIL ge-ÇEN yıl-DAN da-HA ZOR', 'هذه السنة أصعب من السنة الماضية.', 'ئەمساڵ لە ساڵی ڕابردوو قورستترە.'),
      p('En iyi çözüm bu değil.', 'EN i-Yİ çö-ZÜM BU de-ĞİL', 'ليس هذا أفضل حلّ.', 'ئەمە باشترین چارەسەر نییە.'),
      p('Beklediğimiz kadar pahalı değilmiş.', 'bek-le-di-ği-MİZ ka-DAR pa-ha-LI de-ğil-MİŞ', 'تبيّن أنه ليس غالياً كما توقّعنا.', 'وا دەرکەوت وەک چاوەڕوانمان گران نییە.'),
      p('Üretim tüketimden hızlı arttı.', 'ü-re-TİM tü-ke-tim-DEN hız-LI art-TI', 'ازداد الإنتاج أسرع من الاستهلاك.', 'بەرهەمهێنان خێراتر لە خەرجکردن زیادی کرد.'),
      p('Nüfus yoğunluğu giderek artıyor.', 'nü-FUS yo-ğun-lu-ĞU gi-de-REK ar-tı-YOR', 'الكثافة السكّانية تزداد تدريجياً.', 'چڕی دانیشتووان بەرەبەرە زیاد دەکات.'),
      p('Bu bölge, diğerine göre daha güvenli.', 'BU böl-GE di-ğe-ri-NE gö-RE da-HA gü-ven-Lİ', 'هذه المنطقة أكثر أماناً مقارنة بالأخرى.', 'ئەم ناوچەیە بەراورد بەو تر پارێزراوترە.'),
      p('Kalite hiç olmadığı kadar önemli.', 'ka-li-TE HİÇ ol-ma-dı-ĞI ka-DAR ö-nem-Lİ', 'الجودة مهمّة أكثر من أي وقت مضى.', 'کوالیتی لە هەر کاتێکی تر گرنگترە.'),
      p('En az iki hafta sürecek.', 'EN AZ i-Kİ haf-TA sü-re-CEK', 'سيستغرق أسبوعين على الأقلّ.', 'لانیکەم دوو هەفتە دەخایەنێت.'),
    ],
  },
  /* ================================ C1 ================================ */
  {
    id: 'f-c1-participles',
    level: 'c1',
    order: 92,
    title: 'Sıfat-Fiiller',
    titleI18n: b('الصفات الفعلية', 'ئاوەڵناوی کرداری'),
    focus: b(
      '-en/-an للفاعل، -dığı للمفعول، -ecek للمستقبل. هذه هي «الذي» التركية، وتسبق الاسم دائماً.',
      '-en/-an بۆ کردار، -dığı بۆ بەرکار، -ecek بۆ داهاتوو.',
    ),
    sentences: [
      p('Toplantıya katılan herkes imza attı.', 'top-lan-tı-YA ka-tı-LAN her-KES im-ZA at-TI', 'وقّع كل من حضر الاجتماع.', 'هەموو ئەوانەی بەشداری کۆبوونەوەکە بوون واژوویان کرد.'),
      p('Dün okuduğum makale çok iyiydi.', 'DÜN o-ku-du-ĞUM ma-ka-LE ÇOK i-yiy-Dİ', 'المقال الذي قرأته أمس كان جيداً جداً.', 'ئەو وتارەی دوێنێ خوێندمەوە زۆر باش بوو.'),
      p('Yarın sunulacak rapor hazır.', 'ya-RIN su-nu-la-CAK ra-POR ha-ZIR', 'التقرير الذي سيُقدَّم غداً جاهز.', 'ئەو ڕاپۆرتەی سبەینێ پێشکەش دەکرێت ئامادەیە.'),
      p('Gerekli önlemleri alan kurumlar korundu.', 'ge-rek-Lİ ön-lem-le-Rİ a-LAN ku-rum-LAR ko-run-DU', 'حُمِيت المؤسسات التي اتّخذت الإجراءات اللازمة.', 'ئەو دامەزراوانەی ڕێوشوێنی پێویستیان گرتەبەر پارێزران.'),
      p('Söylediklerini dikkate aldık.', 'söy-le-dik-le-ri-Nİ dik-ka-TE al-DIK', 'أخذنا ما قاله بعين الاعتبار.', 'ئەوەی گوتی لەبەرچاومان گرت.'),
      p('Ölçülebilir hedefler koyan ekipler başarılı.', 'öl-çü-le-bi-LİR he-def-LER ko-YAN e-kip-LER ba-şa-rı-LI', 'الفرق التي تضع أهدافاً قابلة للقياس ناجحة.', 'ئەو تیمانەی ئامانجی پێوانەکراو دادەنێن سەرکەوتوون.'),
      p('İmzalanan sözleşme yürürlüğe girdi.', 'im-za-la-NAN söz-leş-ME yü-rür-lü-ĞE gir-Dİ', 'دخل العقد الموقّع حيّز التنفيذ.', 'ئەو گرێبەستەی واژووکرا خرایە بواری جێبەجێکردن.'),
      p('Anlamadığım tek nokta bu.', 'an-la-ma-dı-ĞIM TEK nok-TA BU', 'هذه النقطة الوحيدة التي لم أفهمها.', 'ئەمە تەنها خاڵێکە کە تێینەگەیشتووم.'),
    ],
  },
  {
    id: 'f-c1-impersonal',
    level: 'c1',
    order: 93,
    title: 'Kişisiz Anlatım',
    titleI18n: b('الأسلوب غير الشخصي', 'شێوازی نائەلکەسی'),
    focus: b(
      'اللغة الأكاديمية التركية تفضّل المبني للمجهول واسم الفاعل العامّ: «yapılmaktadır», «görülmektedir».',
      'زمانی ئەکادیمی تورکی حەز بە شێوەی نەناسراو دەکات.',
    ),
    sentences: [
      p('Bu konuda çok sayıda çalışma yapılmaktadır.', 'BU ko-nu-DA ÇOK sa-yı-DA ça-lış-MA ya-pıl-mak-ta-DIR', 'تُجرى دراسات كثيرة في هذا الموضوع.', 'لەم بارەیەوە توێژینەوەی زۆر ئەنجام دەدرێت.'),
      p('Sonuçlar aşağıda özetlenmiştir.', 'so-nuç-LAR a-şa-ğı-DA ö-zet-len-miş-TİR', 'لُخّصت النتائج أدناه.', 'ئەنجامەکان لە خوارەوە کورت کراونەتەوە.'),
      p('Böyle bir ilişki gözlemlenmemiştir.', 'böy-LE bir i-liş-Kİ göz-lem-len-me-miş-TİR', 'لم تُلاحَظ علاقة كهذه.', 'پەیوەندییەکی وا نەبینراوە.'),
      p('Verilerin sınıflandırılması gerekmektedir.', 've-ri-le-RİN sı-nıf-lan-dı-rıl-ma-SI ge-rek-mek-te-DİR', 'يلزم تصنيف البيانات.', 'پێویستە داتاکان پۆلێن بکرێن.'),
      p('Bu bulgu literatürle uyumludur.', 'BU bul-GU li-te-ra-tür-LE u-yum-lu-DUR', 'هذه النتيجة متّسقة مع الأدبيات.', 'ئەم دۆزینەوەیە لەگەڵ لیتریچەردا دەگونجێت.'),
      p('Örneklem yeterli görülmemiştir.', 'ör-nek-LEM ye-ter-Lİ gö-rül-me-miş-TİR', 'لم تُعتبر العيّنة كافية.', 'نموونەکە پێویست نەبینراوە.'),
      p('Çalışmanın sınırlılıkları belirtilmiştir.', 'ça-lış-ma-NIN sı-nır-lı-lık-la-RI be-lir-til-miş-TİR', 'ذُكرت محدوديات الدراسة.', 'سنووردارییەکانی توێژینەوەکە ئاماژەیان پێکراوە.'),
      p('İleri araştırmalara ihtiyaç duyulmaktadır.', 'i-le-Rİ a-raş-tır-ma-la-RA ih-ti-YAÇ du-yul-mak-ta-DIR', 'ثمّة حاجة إلى أبحاث إضافية.', 'پێویستی بە توێژینەوەی زیاتر هەیە.'),
    ],
  },
  /* =============================== C1+ ================================ */
  {
    id: 'f-c1plus-ottoman',
    level: 'c1plus',
    order: 94,
    title: 'Osmanlıca Kalıplar',
    titleI18n: b('التراكيب العثمانية', 'پێکهاتە عوسمانییەکان'),
    focus: b(
      'تراكيب الإضافة الفارسية الباقية في التركية الرسمية: «hüsn-ü niyet», «sui istimal» — تُقرأ ولا تُنتَج.',
      'پێکهاتەی فارسی کە لە تورکی فەرمیدا ماوە.',
    ),
    sentences: [
      p('Bu karar emsal teşkil etmiştir.', 'BU ka-RAR em-SAL teş-KİL et-miş-TİR', 'شكّل هذا القرار سابقة.', 'ئەم بڕیارە بووەتە نموونەی پێشوو.'),
      p('Meselenin mahiyeti henüz aydınlatılmamıştır.', 'me-se-le-NİN ma-hi-ye-Tİ he-NÜZ ay-dın-la-tıl-ma-mış-TIR', 'لم تُوضَّح ماهية المسألة بعد.', 'چۆنیەتی بابەتەکە هێشتا ڕوون نەکراوەتەوە.'),
      p('Muvafakat alınmadan tasarrufta bulunulamaz.', 'mu-va-fa-KAT a-lın-ma-DAN ta-sar-ruf-TA bu-lu-nu-la-MAZ', 'لا يجوز التصرّف دون أخذ موافقة.', 'بەبێ وەرگرتنی ڕەزامەندی نابێت هیچ بکرێت.'),
      p('İlgili kurumlara tebligat yapılmıştır.', 'il-gi-Lİ ku-rum-la-RA teb-li-GAT ya-pıl-mış-TIR', 'أُبلغت المؤسسات المعنية.', 'بە دامەزراوە پەیوەندیدارەکان ڕاگەیەنراوە.'),
      p('Basiretli bir tüccar gibi davranmalıdır.', 'ba-si-ret-Lİ bir tüc-CAR gi-Bİ dav-ran-ma-lı-DIR', 'عليه أن يتصرّف كتاجر ذي بصيرة.', 'دەبێت وەک بازرگانێکی دووربین ڕەفتار بکات.'),
      p('Vicdanen rahat olduğunu söyledi.', 'vic-da-NEN ra-HAT ol-du-ğu-NU söy-le-Dİ', 'قال إنه مرتاح الضمير.', 'گوتی لە ڕووی ویژدانەوە ئاسوودەیە.'),
      p('Mükellefiyet doğduğu tarihten itibaren işler.', 'mü-kel-le-fi-YET doğ-du-ĞU ta-rih-TEN i-ti-ba-REN iş-LER', 'يسري الالتزام من تاريخ نشوئه.', 'ئەرکەکە لە بەرواری دروستبوونیەوە کاردەکات.'),
      p('İhmal ve kusur birlikte değerlendirilir.', 'ih-MAL ve ku-SUR bir-lik-TE de-ğer-len-di-ri-LİR', 'يُقيَّم الإهمال والتقصير معاً.', 'کەمتەرخەمی و کەموکوڕی پێکەوە هەڵدەسەنگێنرێن.'),
    ],
  },
];
