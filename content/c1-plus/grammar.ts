import type { Lesson } from '@/types/content';
import { b, fill, match, mcq, p, speak, translate } from '../shared/helpers';

/**
 * C1+ grammar - the last mile. Nothing here is a new form; everything here is
 * about choosing between forms the student already owns, the way a native
 * speaker does without thinking about it.
 */
export const C1PLUS_GRAMMAR: Lesson[] = [
  {
    id: 'c1plus-nuances',
    level: 'c1plus',
    kind: 'grammar',
    order: 1,
    minutes: 35,
    title: 'Türkçe Dilbilgisinin İncelikleri',
    titleI18n: b('دقائق النحو التركي', 'ورد و ناسکییەکانی ڕێزمانی تورکی'),
    objective: b(
      'أن تميّز بين صيغ متقاربة يخلط بينها المتعلّمون ويفرّق بينها الأتراك تلقائياً.',
      'ئەوەی جیاوازی بکەیت لە نێوان شێوە نزیکەکان کە فێرخوازان تێکەڵیان دەکەن و تورکەکان بەخۆکاری جیایان دەکەنەوە.',
    ),
    prerequisites: ['b2-evidential', 'b1-aorist'],
    tags: ['nuance', 'mastery'],
    blocks: [
      {
        type: 'text',
        title: 'Doğru değil, "daha doğru"',
        body: b(
          'في هذا المستوى لم تعد المسألة صواباً وخطأً، بل اختياراً بين صيغتين كلتاهما نحوياً سليمة لكن إحداهما هي ما يقوله التركي فعلاً. هذا الدرس يجمع أهمّ عشرة فروق دقيقة يقع فيها حتى المتقدّمون.',
          'لەم ئاستەدا مەسەلەکە چیتر ڕاست و هەڵە نییە، بەڵکو هەڵبژاردنە لە نێوان دوو شێوەدا کە هەردووکیان لە ڕووی ڕێزمانییەوە دروستن بەڵام یەکێکیان ئەوەیە کە تورک بەڕاستی دەیڵێت.',
        ),
      },
      {
        type: 'table',
        title: 'On ince fark',
        headers: ['Çift', 'Fark', 'Örnek'],
        rows: [
          ['-yor / -r', 'Şu an / genel huy', 'Sigara içmiyorum (şu an) ≠ Sigara içmem (hiç içmem)'],
          ['-di / -miş', 'Tanık oldum / duydum', 'Geldi (gördüm) ≠ Gelmiş (duydum)'],
          ['-ecek / -yor (gelecek)', 'Plan / kesin yakın', 'Yarın gideceğim ≠ Yarın gidiyorum (bilet alındı)'],
          ['-meli / lazım', 'İç ses / dış ihtiyaç', 'Gitmeliyim (bence) ≠ Gitmem lazım (mecburiyet)'],
          ['-abilir / belki', 'Olasılık eki / zarf', 'Gelebilir ≠ Belki gelir (ikisi de olur, ilki daha Türkçe)'],
          ['için / -e', 'Amaç / yönelme', 'Sana geldim ≠ Senin için geldim'],
          ['ile / -de', 'Araç / yer', 'Otobüsle gittim ≠ Otobüste uyudum'],
          ['çok / fazla', 'Nötr / olumsuz aşırılık', 'Çok güzel ≠ Fazla tuzlu (olumsuz)'],
          ['bir / — ', 'Belirsizlik / genellik', 'Bir kitap okudum ≠ Kitap okudum (okuma eylemi)'],
          ['değil / yok', 'Nitelik / varlık', 'Param değil (yanlış) → Param yok (doğru)'],
        ],
      },
      {
        type: 'examples',
        title: 'Anlam kayan çiftler',
        items: [
          p(
            'Yarın gideceğim. / Yarın gidiyorum.',
            'ya-RIN gi-de-dje-İM / ya-RIN gi-di-YO-rum',
            'سأذهب غداً (نيّة). / أنا ذاهب غداً (مؤكّد، التذكرة محجوزة).',
            'سبەینێ دەڕۆم (مەبەست). / سبەینێ دەڕۆم (دڵنیا، بلیت کڕدراوە).',
          ),
          p(
            'Fazla konuşuyorsun. / Çok konuşuyorsun.',
            'faz-LA ko-nu-şu-YOR-sun / ÇOK ko-nu-şu-YOR-sun',
            'تتكلّم أكثر من اللازم (عتاب). / تتكلّم كثيراً (وصف محايد).',
            'زیاتر لە پێویست قسە دەکەیت (سەرزەنشت). / زۆر قسە دەکەیت (وەسفی بێلایەن).',
          ),
          p(
            'Sana bir şey aldım. / Senin için bir şey aldım.',
            'sa-NA bir ŞEY al-DIM / se-NİN i-ÇİN bir ŞEY al-DIM',
            'اشتريت لك شيئاً. / اشتريت شيئاً من أجلك (لأجل خاطرك).',
            'شتێکم بۆت کڕی. / لە پێناوی تۆدا شتێکم کڕی.',
          ),
          p(
            'Kitap okudum. / Bir kitap okudum.',
            'ki-TAP o-ku-DUM / bir ki-TAP o-ku-DUM',
            'قرأت (مارست القراءة). / قرأت كتاباً (كتاباً واحداً محدّداً).',
            'خوێندنەوەم کرد. / کتێبێکم خوێندەوە.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Arapça konuşanların en inatçı hatası',
        body: b(
          'خطأ يلازم العرب حتى المستويات المتقدّمة: الخلط بين لاحقة المفعولية ‎-i‎ ووجودها. القاعدة التي لا تُنسى: إذا كان المفعول محدّداً في ذهن المتكلّم والسامع معاً، فاللاحقة واجبة. "Ekmek aldım" (اشتريت خبزاً — أيّ خبز) مقابل "Ekmeği aldım" (أخذت الخبز — الذي اتّفقنا عليه). العربية لا تميّز هذا بالإعراب بل بأداة التعريف، ولهذا يسهو المتعلّم عنه.',
          'هەڵەیەک کە تا ئاستە پێشکەوتووەکانیش لەگەڵ فێرخوازاندا دەمێنێتەوە: تێکەڵکردنی پاشگری بەرکاری ‎-i‎ و هەبوونی. ڕێساکە: ئەگەر بەرکارەکە لە مێشکی قسەکەر و بیسەردا دیاریکراو بێت، پاشگرەکە پێویستە.',
        ),
      },
      {
        type: 'examples',
        title: 'Belirlilik testi',
        items: [
          p('Bugün film izledim.', 'bu-GÜN FİLM iz-le-DİM', 'شاهدت فيلماً اليوم. (أي فيلم)', 'ئەمڕۆ فیلمێکم بینی. (هەر فیلمێک)'),
          p('Bugün filmi izledim.', 'bu-GÜN fil-Mİ iz-le-DİM', 'شاهدت الفيلم اليوم. (الذي تحدّثنا عنه)', 'ئەمڕۆ فیلمەکەم بینی. (ئەوەی باسمان کرد)'),
          p('Su içtim.', 'SU iç-TİM', 'شربت ماءً.', 'ئاوم خواردەوە.'),
          p('Suyu içtim.', 'su-YU iç-TİM', 'شربت الماء. (الكوب الذي أمامي)', 'ئاوەکەم خواردەوە. (ئەوەی لەبەردەمم بوو)'),
        ],
      },
    ],
    exercises: [
      mcq(
        b('أنت غير مدخّن أصلاً. ماذا تقول؟', 'تۆ بە بنەڕەت جگەرەکێش نیت. چی دەڵێیت؟'),
        ['Sigara içmiyorum.', 'Sigara içmem.', 'Sigara içmedim.', 'Sigara içmeyeceğim.'],
        1,
        { turkishOptions: true, explain: b('الطبع الدائم ⟵ الزمن الواسع.', 'خووی هەمیشەیی ⟵ کاتی فراوان.') },
      ),
      mcq(
        b('"Fazla tuzlu" تحمل معنى:', '"Fazla tuzlu" ئەم واتایە هەڵدەگرێت:'),
        ['مالح كثيراً (مدح)', 'مالح أكثر من اللازم (عيب)', 'قليل الملح', 'بلا ملح'],
        1,
      ),
      fill('Dün konuştuğumuz ___ nihayet izledim.', 'filmi', 'شاهدت أخيراً الفيلم الذي تحدّثنا عنه أمس.', 'لە کۆتاییدا ئەو فیلمەم بینی کە دوێنێ باسمان کرد.', {
        options: ['film', 'filmi', 'filme', 'filmde'],
        explain: b('الفيلم محدّد بجملة الوصل ⟵ لاحقة المفعولية واجبة.', 'فیلمەکە بە ڕستەی پەیوەندی دیاریکراوە ⟵ پاشگری بەرکاری پێویستە.'),
      }),
      translate('tr-ar', 'Yarın gidiyorum, biletimi aldım.', [
        'سأذهب غداً، حجزت تذكرتي. (مؤكّد)',
        'قد أذهب غداً.',
        'ذهبت أمس.',
        'أفكّر في الذهاب غداً.',
      ], 0, { pron: 'ya-RIN gi-di-YO-rum bi-le-ti-Mİ al-DIM' }),
      match(
        b('طابق الصيغة بدلالتها الدقيقة.', 'شێوەکە لەگەڵ واتا وردەکەیدا بگونجێنە.'),
        [
          { tr: 'Geldi.', ar: 'رأيته يأتي', ku: 'بینیم کە هات' },
          { tr: 'Gelmiş.', ar: 'بلغني أنه جاء', ku: 'پێم گەیشت کە هاتووە' },
          { tr: 'Gitmeliyim.', ar: 'أرى أن عليّ الذهاب', ku: 'پێم وایە دەبێت بڕۆم' },
          { tr: 'Gitmem lazım.', ar: 'مضطرّ للذهاب', ku: 'ناچارم بڕۆم' },
        ],
      ),
    ],
  },

  {
    id: 'c1plus-advanced-structures',
    level: 'c1plus',
    kind: 'grammar',
    order: 2,
    minutes: 30,
    title: 'İleri Cümle Yapıları',
    titleI18n: b('التراكيب الجملية المتقدّمة', 'پێکهاتە ڕستەییە پێشکەوتووەکان'),
    objective: b(
      'أن تستخدم التراكيب الأدبية والبلاغية التي تميّز الكاتب المتمكّن.',
      'ئەوەی پێکهاتە ئەدەبی و ڕەوانبێژییەکان بەکاربهێنیت کە نووسەری شارەزا جیا دەکەنەوە.',
    ),
    prerequisites: ['c1-complex-clauses'],
    tags: ['style', 'literary', 'mastery'],
    blocks: [
      {
        type: 'table',
        title: 'Üslup yapıları',
        headers: ['Yapı', 'İşlev', 'Örnek', 'Anlam'],
        rows: [
          ['-mekle birlikte', 'Kabul + karşıtlık', 'Zor olmakla birlikte imkânsız değil.', 'مع أنه صعب فليس مستحيلاً'],
          ['-mek şöyle dursun', 'Şiddetli reddetme', 'Yardım etmek şöyle dursun, engel oldu.', 'بدل أن يساعد، عرقل'],
          ['-den ziyade', 'Tercih / karşılaştırma', 'Zorluktan ziyade sabır meselesi.', 'مسألة صبر أكثر منها صعوبة'],
          ['ne var ki', 'Beklenmedik karşıtlık', 'Çok çalıştı; ne var ki sonuç değişmedi.', 'اجتهد كثيراً؛ غير أن النتيجة لم تتغيّر'],
          ['-e gelince', 'Konu değiştirme', 'Bütçeye gelince, durum farklı.', 'أما بالنسبة للميزانية فالوضع مختلف'],
          ['-dığı kadarıyla', 'Bilgi sınırı', 'Bildiğim kadarıyla henüz açıklanmadı.', 'على حدّ علمي لم يُعلن بعد'],
          ['-mek üzere olmak', 'Tam öncesi', 'Tren kalkmak üzere.', 'القطار على وشك الانطلاق'],
          ['-ir -mez', 'Anında ardıllık', 'Duyar duymaz koştum.', 'ركضت حالما سمعت'],
          ['bir yandan ... bir yandan', 'Eşzamanlılık', 'Bir yandan çalışıyor bir yandan okuyor.', 'يعمل ويدرس في آن واحد'],
          ['-dıkça -sın', 'Artan oran', 'Okudukça anlıyorsun.', 'كلما قرأت أكثر فهمت أكثر'],
        ],
      },
      {
        type: 'examples',
        title: 'Yazılı dilde',
        items: [
          p(
            'Bildiğim kadarıyla karar henüz resmen açıklanmadı.',
            'bil-di-İM ka-da-rıy-LA ka-RAR he-NÜZ res-MEN a-çık-lan-ma-DI',
            'على حدّ علمي لم يُعلن القرار رسمياً بعد.',
            'بەو ڕادەیەی دەیزانم بڕیارەکە هێشتا بە فەرمی ڕانەگەیەندراوە.',
          ),
          p(
            'Sorun teknik olmaktan ziyade bir yönetim meselesidir.',
            'so-RUN tek-NİK ol-mak-TAN zi-ya-DE bir yö-ne-TİM me-se-le-si-DİR',
            'المشكلة مسألة إدارية أكثر منها تقنية.',
            'کێشەکە زیاتر مەسەلەیەکی بەڕێوەبردنە تا تەکنیکی.',
          ),
          p(
            'Yardım etmek şöyle dursun, işleri daha da zorlaştırdı.',
            'yar-DIM et-MEK şöy-LE dur-SUN iş-le-Rİ da-HA da zor-laş-tır-DI',
            'بدل أن يساعد، زاد الأمور صعوبة.',
            'لە جیاتی یارمەتیدان، کارەکانی زیاتر قورس کرد.',
          ),
          p(
            'Projeye gelince, bütçe onayı hâlâ beklenmektedir.',
            'pro-je-YE ge-lin-DJE büt-ÇE o-na-YI hâ-LÂ bek-len-mek-te-DİR',
            'أما المشروع فما زالت الموافقة على ميزانيته منتظرة.',
            'سەبارەت بە پڕۆژەکە، پەسەندکردنی بودجەکە هێشتا چاوەڕوان دەکرێت.',
          ),
          p(
            'Zor olmakla birlikte imkânsız olduğunu söyleyemeyiz.',
            'ZOR ol-mak-LA bir-lik-TE im-kân-SIZ ol-du-u-NU söy-le-ye-me-YİZ',
            'مع أنه صعب، لا نستطيع القول إنه مستحيل.',
            'لەگەڵ ئەوەی قورسە، ناتوانین بڵێین مەحاڵە.',
          ),
        ],
      },
      {
        type: 'note',
        tone: 'tip',
        title: 'Devrik cümle: şiirin ve konuşmanın imkânı',
        body: b(
          'التركية تسمح بتقديم الفعل على غير موضعه لغرض بلاغي، وتُسمّى الجملة عندئذٍ devrik cümle (الجملة المقلوبة). "Geldi bahar" بدل "Bahar geldi" — تُستخدم في الشعر والأغاني والكلام العاطفي. لا تستخدمها في الكتابة الأكاديمية، لكن اعرفها لتقرأ الأدب.',
          'تورکی ڕێگە دەدات کار لە شوێنی خۆی پێشبخرێت بۆ مەبەستی ڕەوانبێژی، و ئەو کاتە پێی دەڵێن devrik cümle (ڕستەی هەڵگەڕاوە). "Geldi bahar" لە جیاتی "Bahar geldi" — لە شیعر و گۆرانی و قسەی سۆزداردا بەکاردێت.',
        ),
      },
    ],
    exercises: [
      mcq(
        b('ما معنى "yardım etmek şöyle dursun"؟', 'واتای "yardım etmek şöyle dursun" چییە؟'),
        ['ساعد كثيراً', 'بدل أن يساعد (بل على العكس)', 'سيساعد لاحقاً', 'يريد المساعدة'],
        1,
      ),
      fill('___ kadarıyla toplantı iptal edildi. (bilmek / ben)', 'Bildiğim', 'على حدّ علمي أُلغي الاجتماع.', 'بەو ڕادەیەی دەیزانم کۆبوونەوەکە هەڵوەشێنراوەتەوە.', {
        options: ['Bilen', 'Bildiğim', 'Bileceğim', 'Bilmiş'],
      }),
      mcq(
        b('أي تركيب يعبّر عن "على وشك"؟', 'کام پێکهاتە واتای "لە نزیک ئەوەیە" دەدات؟'),
        ['-mek üzere olmak', '-mekle birlikte', '-den ziyade', '-e gelince'],
        0,
        { turkishOptions: true },
      ),
      translate('ar-tr', 'المشكلة مسألة وقت أكثر منها مال.', [
        'Sorun paradan ziyade bir zaman meselesidir.',
        'Sorun zamandan ziyade bir para meselesidir.',
        'Sorun hem para hem zamandır.',
        'Sorun ne para ne zamandır.',
      ], 0),
      speak('Zor olmakla birlikte, öğrendikçe her şeyin daha kolay hâle geldiğini fark ediyorum.', 'ZOR ol-mak-LA bir-lik-TE öö-ren-dik-DJE her şe-YİN da-HA ko-LAY hâ-LE gel-di-i-Nİ FARK e-di-yo-rum', 'مع أنه صعب، ألاحظ أن كل شيء يصبح أسهل كلما تعلّمت أكثر.', 'لەگەڵ ئەوەی قورسە، تێدەگەم کە هەرچی فێر دەبم هەموو شتێک ئاسانتر دەبێت.'),
    ],
  },

  {
    id: 'c1plus-natural-usage',
    level: 'c1plus',
    kind: 'grammar',
    order: 3,
    minutes: 30,
    title: 'Doğal Türkçe: Yerlilerin Söylediği Gibi',
    titleI18n: b('التركية الطبيعية: كما ينطقها أهلها', 'تورکیی سروشتی: وەک خەڵکەکەی خۆی'),
    objective: b(
      'أن تتخلّص من الترجمة الحرفية وتستخدم القوالب التي يستخدمها الأتراك فعلاً.',
      'ئەوەی خۆت لە وەرگێڕانی وشە بە وشە ڕزگار بکەیت و ئەو قاڵبانە بەکاربهێنیت کە تورکەکان بەڕاستی بەکاریان دەهێنن.',
    ),
    prerequisites: ['c1plus-nuances'],
    tags: ['pragmatics', 'idiomatic', 'mastery'],
    blocks: [
      {
        type: 'text',
        title: 'Doğru gramer, yanlış Türkçe',
        body: b(
          'يمكن أن تبني جملة صحيحة نحوياً مئة بالمئة ومع ذلك لا يقولها أي تركي. هذا الدرس عن القوالب الجاهزة (kalıp ifadeler) التي تُقال في مواقف بعينها. حفظها كوحدات كاملة أفضل من تركيبها من الصفر.',
          'دەکرێت ڕستەیەکی سەد لە سەد دروست دروست بکەیت و لەگەڵ ئەوەشدا هیچ تورکێک نەیڵێت. ئەم وانەیە دەربارەی قاڵبە ئامادەکانە (kalıp ifadeler) کە لە دۆخی دیاریکراودا دەوترێن. لەبەرکردنیان وەک یەکەی تەواو باشترە لە دروستکردنیان لە سفرەوە.',
        ),
      },
      {
        type: 'table',
        title: 'Kelimesi kelimesine çeviri tuzakları',
        headers: ['Yanlış (çeviri)', 'Doğru (Türkçe)', 'Durum'],
        rows: [
          ['Ben açım değil', 'Karnım aç / Açım', 'Açlık'],
          ['Yaşım yirmi bir yıl', 'Yirmi bir yaşındayım', 'Yaş söyleme'],
          ['Adım Ali\'dir dedi', 'Adı Ali', 'Tanıtma'],
          ['Çok mutluyum seni görmek', 'Seni gördüğüme çok sevindim', 'Karşılaşma'],
          ['Ne senin işin?', 'Ne iş yapıyorsun?', 'Meslek sorma'],
          ['Kaç saat şimdi?', 'Saat kaç?', 'Saat sorma'],
          ['Ben istiyorum su', 'Su alabilir miyim? / Bir su lütfen', 'Sipariş'],
          ['Nasıl gidiyor sen?', 'Nasılsın? / Ne var ne yok?', 'Hâl hatır'],
          ['Ben Türkçe iyi değilim', 'Türkçem çok iyi değil', 'Dil seviyesi'],
          ['Bu bana zor', 'Bu bana zor geliyor', 'Zorlanma'],
        ],
      },
      {
        type: 'examples',
        title: 'Sosyal kalıplar — durumu bilmeden kullanma',
        items: [
          p('Kolay gelsin.', 'ko-LAY gel-SİN', 'تُقال لكل من تراه يعمل: البائع، السائق، الموظّف. لا مقابل حرفي لها.', 'بۆ هەر کەسێک دەوترێت کە دەیبینیت کار دەکات. بەراوردی وشە بە وشەی نییە.'),
          p('Eline sağlık.', 'e-li-NE sa-LIK', 'لمن طبخ أو صنع شيئاً بيده — "سلمت يداك".', 'بۆ ئەوەی خواردنی دروست کردووە — "دەستت خۆش بێت".'),
          p('Geçmiş olsun.', 'geç-MİŞ ol-SUN', 'لمريض أو لمن مرّ بمصيبة أو حتى لمن أنهى امتحاناً صعباً.', 'بۆ نەخۆش یان ئەوەی بەڵایەکی بەسەرهاتووە.'),
          p('Gözün aydın.', 'gö-ZÜN ay-DIN', 'لمن وصله خبر سارّ أو عاد له غائب.', 'بۆ ئەوەی هەواڵێکی خۆشی پێگەیشتووە.'),
          p('Allah kolaylık versin.', 'al-LAH ko-lay-LIK ver-SİN', 'دعاء لمن يمرّ بصعوبة — يقولها المتديّن وغيره.', 'دوعا بۆ ئەوەی لە قورساییدایە.'),
          p('Başımın üstünde yeri var.', 'ba-şı-MIN üs-tün-DE ye-Rİ VAR', 'ترحيب بالغ بشخص أو طلب — "على العين والرأس".', 'بەخێرهاتنێکی گەورە — "لەسەر چاو".'),
          p('Ağzından yel alsın.', 'a-zın-DAN YEL al-SIN', 'حين يذكر أحدهم احتمالاً سيّئاً — "بعيد الشرّ".', 'کاتێک کەسێک باسی شتێکی خراپ دەکات — "دوور بێت".'),
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Sen mi siz mi? Sosyal risk',
        body: b(
          'أخطر خطأ اجتماعي في التركية ليس نحوياً: استخدام sen مع من يستحقّ siz. القاعدة: استخدم siz مع كل من هو أكبر منك سناً، أو لا تعرفه، أو في موقع رسمي — حتى لو كان أصغر منك. الانتقال إلى sen يحدث بدعوة صريحة: "Sen diyebiliriz" أو "Lütfen sen de". لا تبادر أنت.',
          'مەترسیدارترین هەڵەی کۆمەڵایەتی لە تورکیدا ڕێزمانی نییە: بەکارهێنانی sen لەگەڵ کەسێک کە شایانی siz ـە. ڕێساکە: siz بەکاربهێنە لەگەڵ هەر کەسێک کە لە تۆ گەورەترە، یان نایناسیت، یان لە شوێنێکی فەرمیدایە. گواستنەوە بۆ sen بە بانگهێشتی ڕوون ڕوودەدات.',
        ),
      },
      {
        type: 'dialogue',
        title: 'Doğal bir sohbet',
        lines: [
          { speaker: 'Komşu', tr: 'Kolay gelsin, taşınıyor musunuz?', pron: 'ko-LAY gel-SİN ta-şı-nı-YOR mu-su-nuz', ar: 'الله يعينكم، هل تنتقلون؟', ku: 'ئاسان بێت، دەگوازنەوە؟' },
          { speaker: 'Karwan', tr: 'Sağ olun, evet. Yeni taşındık aslında.', pron: 'SA o-LUN e-VET ye-Nİ ta-şın-DIK as-lın-DA', ar: 'شكراً لك، نعم. في الحقيقة انتقلنا حديثاً.', ku: 'سوپاس، بەڵێ. لە ڕاستیدا تازە گواستوومانەتەوە.' },
          { speaker: 'Komşu', tr: 'Hayırlı olsun! Bir ihtiyacınız olursa çekinmeyin.', pron: 'ha-yır-LI ol-SUN bir ih-ti-ya-djı-NIZ o-lur-SA çe-kin-me-YİN', ar: 'مبارك! إن احتجتم شيئاً فلا تترددوا.', ku: 'پیرۆز بێت! ئەگەر پێویستیتان بە شتێک بوو دوودڵ مەبن.' },
          { speaker: 'Karwan', tr: 'Çok naziksiniz, teşekkür ederim. Başımızın üstünde yeriniz var.', pron: 'ÇOK na-zik-si-NİZ te-şek-KÜR e-de-rim ba-şı-mı-ZIN üs-tün-DE ye-ri-NİZ VAR', ar: 'أنتم لطفاء جداً، شكراً لكم. أنتم على العين والرأس.', ku: 'زۆر بەڕێزن، سوپاستان دەکەم. لەسەر چاومان جێتان هەیە.' },
          { speaker: 'Komşu', tr: 'Estağfurullah. Kahveye bekleriz bir gün.', pron: 'es-ta-fu-rul-LAH kah-ve-YE bek-le-RİZ bir GÜN', ar: 'العفو. ننتظركم لشرب القهوة يوماً ما.', ku: 'شایانی نییە. ڕۆژێک بۆ قاوە چاوەڕێتان دەکەین.' },
        ],
      },
    ],
    exercises: [
      mcq(
        b('ترى بائعاً يعمل في محلّه. ماذا تقول؟', 'فرۆشیارێک دەبینیت لە دوکانەکەیدا کار دەکات. چی دەڵێیت؟'),
        ['İyi günler yalnızca', 'Kolay gelsin', 'Geçmiş olsun', 'Gözün aydın'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('صديقك طبخ لك عشاءً لذيذاً. ماذا تقول؟', 'هاوڕێکەت شێوێکی خۆشی بۆ لێناویت. چی دەڵێیت؟'),
        ['Kolay gelsin', 'Geçmiş olsun', 'Eline sağlık', 'Hayırlı olsun'],
        2,
        { turkishOptions: true },
      ),
      mcq(
        b('كيف تقول "عمري 21 سنة" بالتركية الطبيعية؟', 'چۆن بە تورکیی سروشتی دەڵێیت "تەمەنم ٢١ ساڵە"؟'),
        ['Yaşım yirmi bir yıl.', 'Yirmi bir yaşındayım.', 'Ben yirmi bir yıl.', 'Yaşım yirmi bir yaşında.'],
        1,
        { turkishOptions: true },
      ),
      mcq(
        b('تقابل مدير الجامعة لأول مرة. أي ضمير تستخدم؟', 'یەکەم جارە بەڕێوەبەری زانکۆ دەبینیت. کام جێناو بەکاردەهێنیت؟'),
        ['sen', 'siz', 'o', 'biz'],
        1,
        { explain: b('siz إلزامية مع الغرباء وأصحاب المناصب.', 'siz پێویستە لەگەڵ نەناسیاو و خاوەن پۆستەکاندا.') },
      ),
      match(
        b('طابق العبارة بموقفها.', 'دەستەواژەکە لەگەڵ دۆخەکەیدا بگونجێنە.'),
        [
          { tr: 'Kolay gelsin', ar: 'لمن يعمل', ku: 'بۆ ئەوەی کار دەکات' },
          { tr: 'Geçmiş olsun', ar: 'لمريض أو منكوب', ku: 'بۆ نەخۆش' },
          { tr: 'Eline sağlık', ar: 'لمن طبخ', ku: 'بۆ ئەوەی خواردنی لێناوە' },
          { tr: 'Hayırlı olsun', ar: 'لمن اشترى أو بدأ شيئاً جديداً', ku: 'بۆ ئەوەی شتێکی نوێی کڕیوە' },
        ],
      ),
      translate('ar-tr', 'سررت برؤيتك.', [
        'Çok mutluyum seni görmek.',
        'Seni gördüğüme çok sevindim.',
        'Seni görmek mutluyum.',
        'Sevindim seni görüyorum.',
      ], 1),
    ],
  },
];
