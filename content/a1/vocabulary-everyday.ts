import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * A1 vocabulary: what is on the table and what is on the street.
 *
 * Two gaps the audit turned up at the most basic level:
 *
 *   - The food list stopped at the supermarket aisle. `ekmek` and `peynir`
 *     were there; `bal`, `reçel`, `mercimek`, `nohut`, `makarna` — the actual
 *     contents of a Turkish kitchen — were not, nor most of the fruit.
 *   - The city list had `okul` and `hastane` but not the shops a person walks
 *     into every week: `bakkal`, `kasap`, `manav`, `berber`, `pastane`.
 *
 * The trade names are grouped together because they share one suffix: `-cı`
 * turns a thing into the person who sells it. Learning `kasap` alone is one
 * word; learning that `süt → sütçü`, `kitap → kitapçı`, `çay → çaycı` is a
 * pattern that keeps paying.
 */

/* ---------------- breakfast and the store cupboard ---------------- */

const PANTRY: VocabItem[] = pack('food', 'a1', 'noun', [
  {
    ...w('bal', 'BAL', 'عسل', 'هەنگوین',
      ['Kahvaltıda bal yerim.', 'kah-val-tı-DA BAL ye-RİM', 'آكل العسل في الفطور.', 'لە نانی بەیانیدا هەنگوین دەخۆم.']),
    collocations: ['bal gibi', 'süzme bal'],
    note: b(
      'تعبير شائع: «bal gibi» = بكل تأكيد، حرفياً «مثل العسل».',
      'دەربڕینی باو: «bal gibi» = بێگومان.',
    ),
  },
  {
    ...w('reçel', 're-ÇEL', 'مربّى', 'مرەبا',
      ['Çilek reçeli sever misin?', 'çi-LEK re-çe-Lİ se-VER mi-SİN', 'أتحبّ مربّى الفراولة؟', 'حەز لە مرەبای شلێر دەکەیت؟']),
  },
  {
    ...w('makarna', 'ma-kar-NA', 'معكرونة', 'ماکارۆنە',
      ['Akşama makarna yapacağım.', 'ak-şa-MA ma-kar-NA ya-pa-ca-ĞIM', 'سأطبخ معكرونة مساءً.', 'ئێوارە ماکارۆنە دروست دەکەم.']),
  },
  {
    ...w('mercimek', 'mer-ci-MEK', 'عدس', 'نیسک',
      ['Mercimek çorbası içtik.', 'mer-ci-MEK çor-ba-SI iç-TİK', 'شربنا شوربة العدس.', 'شۆربەی نیسکمان خواردەوە.']),
    collocations: ['mercimek çorbası'],
    note: b(
      'شوربة العدس هي الشوربة الوطنية في تركيا — تجدها في كل مطعم.',
      'شۆربەی نیسک لە تورکیا لە هەموو چێشتخانەیەکدا هەیە.',
    ),
  },
  {
    ...w('nohut', 'no-HUT', 'حمّص', 'نۆک',
      ['Nohut yemeği yaptım.', 'no-HUT ye-me-Ğİ yap-TIM', 'طبخت أكلة الحمّص.', 'خواردنی نۆکم دروست کرد.']),
  },
  {
    ...w('fasulye', 'fa-sul-YE', 'فاصولياء', 'فاسۆلیا',
      ['Kuru fasulye çok lezzetli.', 'ku-RU fa-sul-YE ÇOK lez-zet-Lİ', 'الفاصولياء اليابسة لذيذة جداً.', 'فاسۆلیای وشک زۆر بەتامە.']),
    collocations: ['kuru fasulye', 'taze fasulye'],
  },
  {
    ...w('bulgur', 'bul-GUR', 'برغل', 'سەوارە',
      ['Bulgur pilavı yaptık.', 'bul-GUR pi-la-VI yap-TIK', 'صنعنا أرزّ البرغل.', 'برنجی سەوارەمان دروست کرد.']),
  },
  {
    ...w('sarımsak', 'sa-rım-SAK', 'ثوم', 'سیر',
      ['Yemeğe sarımsak koydum.', 'ye-me-ĞE sa-rım-SAK koy-DUM', 'وضعت ثوماً في الطعام.', 'سیرم بۆ خواردنەکە دانا.']),
  },
]);

/* ---------------- sweets ---------------- */

const SWEET: VocabItem[] = pack('food', 'a1', 'noun', [
  {
    ...w('pasta', 'pas-TA', 'كعكة، غاتوه', 'کێک',
      ['Doğum günü pastası aldık.', 'do-ĞUM gü-NÜ pas-ta-SI al-DIK', 'اشترينا كعكة عيد ميلاد.', 'کێکی ڕۆژی لەدایکبوونمان کڕی.']),
    note: b(
      '⚠️ لا تعني المعكرونة كما في الإيطالية والإنجليزية — المعكرونة هي «makarna».',
      '⚠️ واتای ماکارۆنە نادات — ماکارۆنە «makarna»یە.',
    ),
  },
  {
    ...w('kurabiye', 'ku-ra-bi-YE', 'بسكويت، كعك صغير', 'کولێچە',
      ['Çayla kurabiye ikram etti.', 'çay-LA ku-ra-bi-YE ik-RAM et-Tİ', 'قدّم كعكاً مع الشاي.', 'کولێچەی لەگەڵ چای پێشکەش کرد.']),
  },
  {
    ...w('dondurma', 'don-dur-MA', 'مثلجات، آيس كريم', 'بەستەنی',
      ['Yazın her gün dondurma yerim.', 'ya-ZIN HER GÜN don-dur-MA ye-RİM', 'آكل المثلجات كل يوم في الصيف.', 'هاوینان هەموو ڕۆژێک بەستەنی دەخۆم.']),
    related: ['dondurmak'],
    note: b(
      'من «dondurmak» (يُجمّد) — الاسم مبني من الفعل مباشرة.',
      'لە «dondurmak»ەوە دروست بووە.',
    ),
  },
]);

/* ---------------- vegetables ---------------- */

const VEG: VocabItem[] = pack('food', 'a1', 'noun', [
  {
    ...w('havuç', 'ha-VUÇ', 'جزر', 'گێزەر',
      ['Salataya havuç rendeledim.', 'sa-la-ta-YA ha-VUÇ ren-de-le-DİM', 'بشرت جزراً في السلطة.', 'گێزەرم بۆ زەڵاتەکە ڕەندە کرد.']),
  },
  {
    ...w('ıspanak', 'ıs-pa-NAK', 'سبانخ', 'سەوزەی ئیسپانەخ',
      ['Ispanak çok faydalı.', 'ıs-pa-NAK ÇOK fay-da-LI', 'السبانخ مفيدة جداً.', 'ئیسپانەخ زۆر بەسوودە.']),
    note: b(
      'تبدأ بحرف ı (بلا نقطة) — من الكلمات القليلة التي تبدأ بهذا الحرف.',
      'بە پیتی ı دەست پێدەکات.',
    ),
  },
  {
    ...w('marul', 'ma-RUL', 'خسّ', 'خس',
      ['Marul taze mi?', 'ma-RUL ta-ZE mi', 'هل الخسّ طازج؟', 'خسەکە تازەیە؟']),
  },
  {
    ...w('turp', 'TURP', 'فجل', 'توروک',
      ['Kahvaltıda turp da vardı.', 'kah-val-tı-DA TURP DA var-DI', 'كان في الفطور فجل أيضاً.', 'لە نانی بەیانیدا توروکیش هەبوو.']),
  },
]);

/* ---------------- fruit ---------------- */

const FRUIT: VocabItem[] = pack('food', 'a1', 'noun', [
  {
    ...w('üzüm', 'ü-ZÜM', 'عنب', 'ترێ',
      ['Bu üzüm çok tatlı.', 'BU ü-ZÜM ÇOK tat-LI', 'هذا العنب حلو جداً.', 'ئەم ترێیە زۆر شیرینە.']),
  },
  {
    ...w('kiraz', 'ki-RAZ', 'كرز', 'گێلاس',
      ['Kiraz mevsimi geldi.', 'ki-RAZ mev-si-Mİ gel-Dİ', 'جاء موسم الكرز.', 'وەرزی گێلاس هات.']),
  },
  {
    ...w('vişne', 'viş-NE', 'كرز حامض', 'ئاڵووگێلاس',
      ['Vişne suyu içtim.', 'viş-NE su-YU iç-TİM', 'شربت عصير الكرز الحامض.', 'شەربەتی ئاڵووگێلاسم خواردەوە.']),
    related: ['kiraz'],
    note: b(
      'التركية تفرّق بين النوعين: «kiraz» حلو و«vişne» حامض. العربية تجمعهما غالباً.',
      'تورکی جیایان دەکاتەوە: «kiraz» شیرین و «vişne» ترش.',
    ),
  },
  {
    ...w('şeftali', 'şef-ta-Lİ', 'خوخ، دُرّاق', 'قەیسی',
      ['Şeftali çok sulu.', 'şef-ta-Lİ ÇOK su-LU', 'الخوخ كثير العصارة.', 'قەیسییەکە زۆر ئاوداڕە.']),
  },
  {
    ...w('kayısı', 'ka-yı-SI', 'مشمش', 'قەیسی زەرد',
      ['Malatya kayısısı meşhurdur.', 'ma-lat-YA ka-yı-sı-SI meş-hur-DUR', 'مشمش ملاطية مشهور.', 'قەیسی مەلەتیا بەناوبانگە.']),
  },
  {
    ...w('erik', 'e-RİK', 'خوخ أخضر، برقوق', 'هەڵووژە',
      ['Yeşil erik çok ekşi.', 'ye-ŞİL e-RİK ÇOK ek-Şİ', 'الخوخ الأخضر حامض جداً.', 'هەڵووژەی سەوز زۆر ترشە.']),
  },
  {
    ...w('incir', 'in-CİR', 'تين', 'هەنجیر',
      ['Kuru incir aldım.', 'ku-RU in-CİR al-DIM', 'اشتريت تيناً مجفّفاً.', 'هەنجیری وشکم کڕی.']),
  },
  {
    ...w('kavun', 'ka-VUN', 'شمّام', 'کاڵەک',
      ['Yazın kavun yeriz.', 'ya-ZIN ka-VUN ye-RİZ', 'نأكل الشمّام في الصيف.', 'هاوینان کاڵەک دەخۆین.']),
  },
]);

/* ---------------- the street ---------------- */

const STREET: VocabItem[] = pack('places', 'a1', 'noun', [
  {
    ...w('köşe', 'kö-ŞE', 'زاوية، ناصية', 'گۆشە',
      ['Market köşede.', 'mar-KET kö-şe-DE', 'السوق عند الناصية.', 'مارکێتەکە لە گۆشەکەیە.']),
    collocations: ['köşe başında', 'köşeye çekilmek'],
  },
  {
    ...w('köprü', 'köp-RÜ', 'جسر', 'پرد',
      ['Köprüden geçtik.', 'köp-rü-DEN geç-TİK', 'عبرنا الجسر.', 'بە پردەکەدا پەڕینەوە.']),
  },
  {
    ...w('tünel', 'tü-NEL', 'نفق', 'تونێل',
      ['Tünel iki kilometre.', 'tü-NEL i-Kİ ki-lo-met-RE', 'النفق كيلومتران.', 'تونێلەکە دوو کیلۆمەترە.']),
  },
  {
    ...w('kaldırım', 'kal-dı-RIM', 'رصيف', 'ڕێڕەوی پیادە',
      ['Kaldırımdan yürü.', 'kal-dı-rım-DAN yü-RÜ', 'امشِ على الرصيف.', 'بە ڕێڕەوی پیادەدا بڕۆ.']),
  },
  {
    ...w('ışık', 'ı-ŞIK', 'ضوء، نور', 'ڕووناکی',
      ['Işıkları kapat.', 'ı-şık-la-RI ka-PAT', 'أطفئ الأنوار.', 'گڵۆپەکان بکوژێنەوە.']),
    collocations: ['ışık yakmak', 'trafik ışığı', 'ışık tutmak'],
  },
  {
    ...w('tabela', 'ta-be-LA', 'لافتة', 'تابلۆ',
      ['Tabelayı okuyamadım.', 'ta-be-la-YI o-ku-ya-ma-DIM', 'لم أستطع قراءة اللافتة.', 'نەمتوانی تابلۆکە بخوێنمەوە.']),
  },
  {
    ...w('levha', 'lev-HA', 'لوحة إرشادية', 'تابلۆی ئاماژە',
      ['Trafik levhasına dikkat et.', 'tra-FİK lev-ha-sı-NA dik-KAT et', 'انتبه للوحة المرور.', 'ئاگاداری تابلۆی هاتوچۆ بە.']),
  },
  {
    ...w('istasyon', 'is-tas-YON', 'محطّة (قطار)', 'وێستگە',
      ['Tren istasyonuna gidelim.', 'TREN is-tas-yo-nu-NA gi-de-LİM', 'لنذهب إلى محطّة القطار.', 'با بچینە وێستگەی شەمەندەفەر.']),
    related: ['durak'],
    note: b(
      '«istasyon» للقطار والمترو، و«durak» لموقف الحافلة. لا تُخلط.',
      '«istasyon» بۆ شەمەندەفەر، «durak» بۆ پاس.',
    ),
  },
  {
    ...w('liman', 'li-MAN', 'ميناء', 'بەندەر',
      ['Gemi limana yanaştı.', 'ge-Mİ li-ma-NA ya-naş-TI', 'رست السفينة في الميناء.', 'کەشتییەکە لە بەندەرەکە وەستا.']),
  },
  {
    ...w('iskele', 'is-ke-LE', 'مرسى العبّارة', 'بەربەست',
      ['Vapur iskelede bekliyor.', 'va-PUR is-ke-le-DE bek-li-YOR', 'العبّارة تنتظر عند المرسى.', 'کەشتییەکە لە بەربەستەکە چاوەڕێ دەکات.']),
    related: ['liman'],
  },
  {
    ...w('kilise', 'ki-li-SE', 'كنيسة', 'کڵێسا',
      ['Eski bir kilise gördük.', 'es-Kİ bir ki-li-SE gör-DÜK', 'رأينا كنيسة قديمة.', 'کڵێسایەکی کۆنمان بینی.']),
  },
  {
    ...w('klinik', 'kli-NİK', 'عيادة', 'کلینیک',
      ['Özel bir kliniğe gittim.', 'ö-ZEL bir kli-ni-ĞE git-TİM', 'ذهبت إلى عيادة خاصّة.', 'چوومە کلینیکێکی تایبەت.']),
  },
]);

/* ---------------- the -cı trades ---------------- */

const TRADES: VocabItem[] = pack('places', 'a1', 'noun', [
  {
    ...w('bakkal', 'bak-KAL', 'بقّالة، دكّان', 'بەقاڵ',
      ['Bakkaldan ekmek aldım.', 'bak-kal-DAN ek-MEK al-DIM', 'اشتريت خبزاً من البقّالة.', 'نانم لە بەقاڵ کڕی.']),
    note: b(
      'الدكّان الصغير في الحيّ. أكبر منه «market» وأكبر منهما «süpermarket».',
      'دوکانی بچووکی گەڕەک.',
    ),
  },
  {
    ...w('kasap', 'ka-SAP', 'جزّار، ملحمة', 'قەساب',
      ['Kasaptan kıyma aldım.', 'ka-sap-TAN kıy-MA al-DIM', 'اشتريت لحماً مفروماً من الجزّار.', 'گۆشتی وردکراوم لە قەساب کڕی.']),
  },
  {
    ...w('manav', 'ma-NAV', 'بائع الخضار والفاكهة', 'سەوزەفرۆش',
      ['Manavda taze meyve var.', 'ma-nav-DA ta-ZE mey-VE var', 'عند بائع الخضار فاكهة طازجة.', 'لای سەوزەفرۆش میوەی تازە هەیە.']),
  },
  {
    ...w('fırıncı', 'fı-rın-CI', 'خبّاز', 'نانەوا',
      ['Fırıncı sabah beşte başlar.', 'fı-rın-CI sa-BAH beş-TE baş-LAR', 'يبدأ الخبّاز في الخامسة صباحاً.', 'نانەوا لە پێنجی بەیانی دەستپێدەکات.']),
    related: ['fırın'],
    note: b(
      'اللاحقة «-cı/-ci» تصنع صاحب المهنة من الشيء: fırın→fırıncı, kitap→kitapçı, çay→çaycı, süt→sütçü.',
      'پاشگری «-cı» خاوەنی پیشە دروست دەکات: fırın→fırıncı.',
    ),
  },
  {
    ...w('terzi', 'ter-Zİ', 'خيّاط', 'دەرزیکەر',
      ['Pantolonu terziye verdim.', 'pan-to-lo-NU ter-zi-YE ver-DİM', 'أعطيت البنطال للخيّاط.', 'پانتۆڵەکەم دا بە دەرزیکەر.']),
  },
  {
    ...w('berber', 'ber-BER', 'حلّاق (للرجال)', 'دەلاک',
      ['Berbere gitmem lazım.', 'ber-be-RE git-MEM la-ZIM', 'عليّ الذهاب إلى الحلّاق.', 'پێویستە بچمە لای دەلاک.']),
    related: ['kuaför'],
  },
  {
    ...w('kuaför', 'ku-a-FÖR', 'مصفّف شعر (للنساء)', 'ئارایشتگا',
      ['Kuaförden randevu aldım.', 'ku-a-för-DEN ran-de-VU al-DIM', 'أخذت موعداً من الكوافير.', 'کاتم لە ئارایشتگا وەرگرت.']),
    related: ['berber'],
    note: b(
      'التركية تفرّق: «berber» للرجال و«kuaför» للنساء عادةً.',
      'تورکی جیای دەکاتەوە: «berber» بۆ پیاوان و «kuaför» بۆ ژنان.',
    ),
  },
  {
    ...w('kafe', 'ka-FE', 'مقهى', 'کافێ',
      ['Kafede buluşalım.', 'ka-fe-DE bu-lu-şa-LIM', 'لنلتقِ في المقهى.', 'لە کافێکە یەکتر ببینین.']),
  },
  {
    ...w('pastane', 'pas-ta-NE', 'محلّ حلويات', 'شیرینیفرۆشی',
      ['Pastaneden kek aldım.', 'pas-ta-ne-DEN KEK al-DIM', 'اشتريت كعكة من محلّ الحلويات.', 'کێکم لە شیرینیفرۆشی کڕی.']),
    related: ['pasta'],
    note: b(
      'مركّبة من «pasta» + «hane» الفارسية = بيت الكعك، مثل «kütüphane».',
      'لێکدراوە لە «pasta» + «hane»ی فارسی.',
    ),
  },
]);

export const A1_VOCABULARY_EVERYDAY: VocabItem[] = [
  ...PANTRY,
  ...SWEET,
  ...VEG,
  ...FRUIT,
  ...STREET,
  ...TRADES,
];
