import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * C1+ vocabulary, part two.
 *
 * Idioms are translated by MEANING and given their real pragmatic context -
 * WHO says this, to WHOM, and when it would be rude. A literal gloss of a
 * Turkish deyim is never usable in Arabic or Kurdish, so where an equivalent
 * proverb exists in those languages, that equivalent is the translation.
 */

const idiomsExtra = pack('idioms', 'c1plus', 'phrase', [
  w('pabucu dama atılmak', 'pa-bu-DJU da-MA a-tıl-mak', 'يفقد قيمته ويُستبدَل بغيره', 'لە ڕەوایی کەوتن و جێگرەوە هێنانی', ['Yeni model çıkınca eskisinin pabucu dama atıldı.', 'ye-Nİ mo-DEL çı-kın-DJA es-ki-si-NİN pa-bu-DJU da-MA a-tıl-DI', 'حين صدر الموديل الجديد فقد القديم قيمته.', 'کە مۆدێلی نوێ هات، کۆنەکە لە ڕەوایی کەوت.']),
  w('kulak kabartmak', 'ku-LAK ka-bart-mak', 'يرهف السمع', 'گوێ شل کردن', ['Adımı duyunca kulak kabarttım.', 'a-dı-MI du-yun-DJA ku-LAK ka-bart-TIM', 'أرهفت السمع حين سمعت اسمي.', 'کە ناوم بیست گوێم شل کرد.']),
  w('burun kıvırmak', 'bu-RUN kı-vır-mak', 'يستصغر / يزدري', 'بێبایەخکردن', ['Teklife burun kıvırdı.', 'tek-li-FE bu-RUN kı-vır-DI', 'ازدرى العرض.', 'بێبایەخی بە پێشنیارەکە کرد.']),
  w('kan ter içinde kalmak', 'KAN TER i-çin-DE kal-mak', 'يغرق في العرق من الجهد', 'خوێ و ئارەق بوون', ['Merdivenleri çıkınca kan ter içinde kaldım.', 'mer-di-ven-le-Rİ çı-kın-DJA KAN TER i-çin-DE kal-DIM', 'غرقت في العرق حين صعدت الدرج.', 'کە بە پلیکانەکاندا سەرکەوتم خوێ و ئارەق بووم.']),
  w('gözü kalmak', 'gö-ZÜ kal-mak', 'يبقى متعلّقاً بشيء لم ينله', 'چاوی لەسەر مانەوە', ['O ceketde gözüm kaldı.', 'O dje-ket-DE gö-ZÜM kal-DI', 'بقيت عيني على تلك السترة.', 'چاوم لەسەر ئەو چاکەتە مایەوە.']),
  w('kafa dengi', 'ka-FA den-gi', 'متوافق فكرياً / على نفس الموجة', 'هاوبیر', ['Onunla kafa dengiyiz.', 'o-nun-LA ka-FA den-gi-YİZ', 'نحن متوافقان فكرياً.', 'لەگەڵ ئەودا هاوبیرین.']),
  w('yüz vermemek', 'YÜZ ver-me-mek', 'يتجاهل ولا يعطي وجهاً', 'ڕوو نەدان', ['Israrlarına hiç yüz vermedi.', 'ıs-rar-la-rı-NA HİÇ YÜZ ver-me-Dİ', 'لم يعطِ إلحاحه أي التفات.', 'هیچ ڕووی بە سوورییەکانی نەدا.']),
  w('ağır olmak', 'a-IR ol-mak', 'يكون وقوراً / رزيناً', 'سەنگین بوون', ['Ağır ol, herkes seni izliyor.', 'a-IR OL her-KES se-Nİ iz-li-YOR', 'كن رزيناً، الجميع يراقبك.', 'سەنگین بە، هەموو سەیرت دەکەن.']),
  w('dile kolay', 'di-LE ko-LAY', 'قوله سهل (لكن فعله صعب)', 'گوتنی ئاسانە', ['Dile kolay, tam on yıl çalıştı.', 'di-LE ko-LAY TAM ON YIL ça-lış-TI', 'قوله سهل، لقد عمل عشر سنوات كاملة.', 'گوتنی ئاسانە، تەواو دە ساڵ کاری کرد.']),
  w('göz göre göre', 'GÖZ gö-RE gö-RE', 'على مرأى ومسمع / عياناً', 'بە ئاشکرا', ['Göz göre göre hata yapıyorlar.', 'GÖZ gö-RE gö-RE ha-TA ya-pı-yor-lar', 'يخطئون على مرأى من الجميع.', 'بە ئاشکرا هەڵە دەکەن.']),
  w('bir kulağından girip diğerinden çıkmak', 'bir ku-la-ın-DAN gi-RİP di-e-rin-DEN çık-mak', 'يدخل من أذن ويخرج من الأخرى', 'لە گوێیەکەوە چوونە ژوورەوە و لەوی تر دەرچوون', ['Söylediklerim bir kulağından girip diğerinden çıkıyor.', 'söy-le-dik-le-RİM bir ku-la-ın-DAN gi-RİP di-e-rin-DEN çı-kı-YOR', 'ما أقوله يدخل من أذن ويخرج من الأخرى.', 'ئەوەی دەیڵێم لە گوێیەکەوە دەچێتە ژوورەوە و لەوی تر دەردەچێت.']),
  w('eli boş dönmek', 'e-Lİ BOŞ dön-mek', 'يعود خالي الوفاض', 'بە دەستی بەتاڵ گەڕانەوە', ['Görüşmeden eli boş döndük.', 'gö-rüş-me-DEN e-Lİ BOŞ dön-DÜK', 'عدنا من اللقاء خالي الوفاض.', 'لە کۆبوونەوەکە بە دەستی بەتاڵ گەڕاینەوە.']),
  w('içi rahat etmek', 'i-Çİ ra-HAT et-mek', 'يرتاح ضميره / يطمئنّ', 'دڵ ئاسوودەبوون', ['Onu görünce içim rahat etti.', 'o-NU gö-rün-DJE i-ÇİM ra-HAT et-ti', 'اطمأنّ قلبي حين رأيته.', 'کە بینیم دڵم ئاسوودە بوو.']),
  w('kılı kırk yarmak', 'kı-LI KIRK yar-mak', 'يدقّق تدقيقاً بالغاً', 'زۆر وردبوونەوە', ['Editör kılı kırk yarıyor.', 'e-di-TÖR kı-LI KIRK ya-rı-YOR', 'المحرّر يدقّق تدقيقاً بالغاً.', 'دەستکارەکە زۆر ورد دەبێتەوە.']),
  w('yüzü gülmek', 'yü-ZÜ gül-mek', 'تشرق أساريره / يفرح', 'ڕووی خۆشبوون', ['Sonucu duyunca yüzü güldü.', 'so-nu-DJU du-yun-DJA yü-ZÜ gül-DÜ', 'أشرقت أساريره حين سمع النتيجة.', 'کە ئەنجامەکەی بیست ڕووی خۆش بوو.']),
  w('kafası karışmak', 'ka-fa-SI ka-rış-mak', 'يختلط عليه الأمر', 'مێشک تێکچوون', ['Bu kadar seçenek olunca kafam karıştı.', 'BU ka-DAR se-çe-NEK o-lun-DJA ka-FAM ka-rış-TI', 'اختلط عليّ الأمر مع كل هذه الخيارات.', 'بەم هەموو هەڵبژاردەیە مێشکم تێکچوو.']),
  w('lafı ağzında gevelemek', 'la-FI a-zın-DA ge-ve-le-mek', 'يتلعثم ولا يقول ما يريد', 'قسە لە دەم گێڕانەوە', ['Lafı ağzında geveleme, açık söyle.', 'la-FI a-zın-DA ge-ve-le-ME a-ÇIK söy-LE', 'لا تتلعثم، قل بصراحة.', 'قسە لە دەمت مەگێڕەوە، بە ئاشکرا بڵێ.']),
  w('ekmeğini taştan çıkarmak', 'ek-me-i-Nİ taş-TAN çı-kar-mak', 'يكسب رزقه بشقّ الأنفس', 'نانی خۆی لە بەردەوە دەرهێنان', ['Gurbette ekmeğini taştan çıkarıyor.', 'gur-bet-TE ek-me-i-Nİ taş-TAN çı-ka-rı-YOR', 'يكسب رزقه بشقّ الأنفس في الغربة.', 'لە غەریبیدا نانی خۆی لە بەردەوە دەردەهێنێت.']),
  w('gözünün yaşına bakmamak', 'gö-zü-NÜN ya-şı-NA bak-ma-mak', 'لا يرحم / لا يلين', 'بێ بەزەیی بوون', ['Kurallar konusunda kimsenin gözünün yaşına bakmıyor.', 'ku-ral-LAR ko-nu-sun-DA kim-se-NİN gö-zü-NÜN ya-şı-NA bak-mı-YOR', 'لا يرحم أحداً في مسألة القواعد.', 'لە بابەتی یاساکاندا بەزەیی بە کەسدا نایەتەوە.']),
]);

const proverbsExtra = pack('idioms', 'c1plus', 'phrase', [
  w('Bir taşla iki kuş vurmak.', 'bir taş-LA i-Kİ KUŞ vur-MAK', 'يضرب عصفورين بحجر واحد.', 'بە یەک بەرد دوو باڵندە پێکردن.', ['Hem alışveriş yaptım hem onu gördüm; bir taşla iki kuş vurdum.', 'HEM a-lış-ve-RİŞ yap-TIM hem o-NU gör-DÜM bir taş-LA i-Kİ KUŞ vur-DUM', 'تسوّقت ورأيته؛ ضربت عصفورين بحجر واحد.', 'هەم بازاڕم کرد هەم بینیم؛ بە یەک بەرد دوو باڵندەم پێکرد.']),
  w('Sabreden derviş muradına ermiş.', 'sab-re-DEN der-VİŞ mu-ra-dı-NA er-MİŞ', 'الصبر مفتاح الفرج.', 'ئارامگر بە مەبەستی خۆی دەگات.', ['Acele etme; sabreden derviş muradına ermiş.', 'a-dje-LE et-ME sab-re-DEN der-VİŞ mu-ra-dı-NA er-MİŞ', 'لا تتعجّل؛ الصبر مفتاح الفرج.', 'پەلە مەکە؛ ئارامگر بە مەبەستی خۆی دەگات.']),
  w('Ağaç yaşken eğilir.', 'a-AÇ yaş-KEN e-i-LİR', 'العلم في الصغر كالنقش في الحجر.', 'دار کە تەڕە دەچەمێتەوە.', ['Çocuklukta öğretmeli; ağaç yaşken eğilir.', 'ço-djuk-luk-TA öö-ret-me-Lİ a-AÇ yaş-KEN e-i-LİR', 'يجب التعليم في الصغر؛ العلم في الصغر كالنقش في الحجر.', 'لە منداڵیدا دەبێت فێری بکەیت؛ دار کە تەڕە دەچەمێتەوە.']),
  w('Bakarsan bağ, bakmazsan dağ olur.', 'ba-kar-SAN BA bak-maz-SAN DA o-LUR', 'إن رعيته صار بستاناً وإن أهملته صار جبلاً قاحلاً.', 'ئەگەر ئاگات لێبێت دەبێتە باخ، ئەگەر نا دەبێتە چیا.', ['İlişkiler emek ister; bakarsan bağ, bakmazsan dağ olur.', 'i-liş-ki-LER e-MEK is-TER ba-kar-SAN BA bak-maz-SAN DA o-LUR', 'العلاقات تحتاج جهداً؛ إن رعيتها ازدهرت وإن أهملتها ذبلت.', 'پەیوەندییەکان ماندووبوونیان دەوێت؛ ئەگەر ئاگات لێبێت دەبێتە باخ.']),
  w('Görünen köy kılavuz istemez.', 'gö-rü-NEN KÖY kı-la-VUZ is-te-MEZ', 'الأمر الواضح لا يحتاج دليلاً.', 'گوندی دیار ڕێبەری ناوێت.', ['Sonuç ortada; görünen köy kılavuz istemez.', 'so-NUÇ or-ta-DA gö-rü-NEN KÖY kı-la-VUZ is-te-MEZ', 'النتيجة واضحة؛ الأمر البيّن لا يحتاج دليلاً.', 'ئەنجامەکە ئاشکرایە؛ گوندی دیار ڕێبەری ناوێت.']),
  w('Üzüm üzüme baka baka kararır.', 'ü-ZÜM ü-zü-ME ba-KA ba-KA ka-ra-RIR', 'الصاحب ساحب / المرء على دين خليله.', 'ترێ بە سەیرکردنی ترێ ڕەش دەبێت.', ['Arkadaş seçimine dikkat et; üzüm üzüme baka baka kararır.', 'ar-ka-DAŞ se-çi-mi-NE dik-KAT ET ü-ZÜM ü-zü-ME ba-KA ba-KA ka-ra-RIR', 'انتبه لاختيار أصدقائك؛ الصاحب ساحب.', 'ئاگاداری هەڵبژاردنی هاوڕێت بە؛ ترێ بە سەیرکردنی ترێ ڕەش دەبێت.']),
  w('İşleyen demir ışıldar.', 'iş-le-YEN de-MİR ı-şıl-DAR', 'الحديد الذي يُستعمل يلمع (العمل يصقل المرء).', 'ئاسنی کارکراو دەدرەوشێتەوە.', ['Pratik yapmayı bırakma; işleyen demir ışıldar.', 'pra-TİK yap-ma-YI bı-rak-MA iş-le-YEN de-MİR ı-şıl-DAR', 'لا تتوقف عن التدريب؛ العمل يصقل المرء.', 'وازی لە ڕاهێنان مەهێنە؛ ئاسنی کارکراو دەدرەوشێتەوە.']),
  w('Doğru söyleyeni dokuz köyden kovarlar.', 'do-RU söy-le-ye-Nİ do-KUZ köy-DEN ko-var-LAR', 'قائل الحقّ لا يُحبّه الناس.', 'ئەوەی ڕاست دەڵێت لە نۆ گوند دەریدەکەن.', ['Eleştirisi haklıydı ama sevilmedi; doğru söyleyeni dokuz köyden kovarlar.', 'e-leş-ti-ri-Sİ hak-lıy-DI a-MA se-vil-me-Dİ do-RU söy-le-ye-Nİ do-KUZ köy-DEN ko-var-LAR', 'كان نقده محقاً لكنه لم يُحَبّ؛ قائل الحق لا يحبه الناس.', 'ڕەخنەکەی ڕاست بوو بەڵام خۆشیان نەویست؛ ئەوەی ڕاست دەڵێت لە نۆ گوند دەریدەکەن.']),
]);

const literary = pack('literary', 'c1plus', 'noun', [
  w('hüzün', 'hü-ZÜN', 'شجن / حزن رقيق', 'خەمی ناسک', ['Şiirde derin bir hüzün var.', 'şi-ir-DE de-RİN bir hü-ZÜN VAR', 'في القصيدة شجن عميق.', 'لە شیعرەکەدا خەمێکی قووڵ هەیە.']),
  w('özlem', 'öz-LEM', 'حنين / شوق', 'تامەزرۆیی', ['Memleket özlemi çekiyor.', 'mem-le-KET öz-le-Mİ çe-ki-YOR', 'يعاني حنيناً إلى الوطن.', 'تامەزرۆی وڵاتەکەیەتی.']),
  w('yalnızlık', 'yal-nız-LIK', 'وحدة / عزلة', 'تەنیایی', ['Yalnızlık onun temel temasıdır.', 'yal-nız-LIK o-NUN te-MEL te-ma-sı-DIR', 'الوحدة هي ثيمته الأساسية.', 'تەنیایی بابەتی سەرەکییەتی.']),
  w('gurbet', 'gur-BET', 'الغربة', 'غەریبی', ['Gurbet türküleri çok içli.', 'gur-BET tür-kü-le-Rİ ÇOK iç-Lİ', 'أغاني الغربة مؤثّرة جداً.', 'گۆرانییەکانی غەریبی زۆر سۆزدارن.']),
  w('vuslat', 'vus-LAT', 'وصال / لقاء بعد فراق', 'گەیشتن بە یەکتر', ['Divan şiirinde vuslat temel bir izlektir.', 'di-VAN şi-i-rin-DE vus-LAT te-MEL bir iz-lek-TİR', 'الوصال ثيمة أساسية في شعر الديوان.', 'گەیشتن بە یەکتر بابەتێکی بنەڕەتییە لە شیعری دیواندا.']),
  w('mecaz', 'me-DJAZ', 'مجاز', 'مەجاز', ['Bu ifade mecaz anlamda kullanılmış.', 'BU i-fa-DE me-DJAZ an-lam-DA kul-la-nıl-MIŞ', 'استُخدم هذا التعبير بالمعنى المجازي.', 'ئەم دەربڕینە بە واتای مەجازی بەکارهاتووە.']),
  w('istiare', 'is-ti-a-RE', 'استعارة', 'خواستن (ئەدەبی)', ['Şair burada güçlü bir istiare kullanıyor.', 'şa-İR bu-ra-DA güç-LÜ bir is-ti-a-RE kul-la-nı-YOR', 'يستخدم الشاعر هنا استعارة قوية.', 'شاعیر لێرەدا خواستنێکی بەهێز بەکاردەهێنێت.']),
  w('imge', 'im-GE', 'صورة شعرية', 'وێنا', ['Şiirin imgeleri çok canlı.', 'şi-i-RİN im-ge-le-Rİ ÇOK djan-LI', 'صور القصيدة حيّة جداً.', 'وێناکانی شیعرەکە زۆر زیندوون.']),
  w('üslup', 'üs-LUP', 'أسلوب', 'شێواز', ['Yazarın üslubu çok kendine has.', 'ya-za-RIN üs-lu-BU ÇOK ken-di-NE HAS', 'أسلوب الكاتب خاص جداً به.', 'شێوازی نووسەرەکە زۆر تایبەتە بە خۆی.']),
  w('anlatıcı', 'an-la-tı-DJI', 'الراوي', 'گێڕەرەوە', ['Romanda anlatıcı birinci tekil kişi.', 'ro-man-DA an-la-tı-DJI bi-rin-DJİ te-KİL ki-Şİ', 'الراوي في الرواية بضمير المتكلم.', 'گێڕەرەوە لە ڕۆمانەکەدا کەسی یەکەمی تاکە.']),
  w('kurgu', 'kur-GU', 'حبكة / بناء سردي', 'پێکهاتەی چیرۆک', ['Kurgu çok katmanlı.', 'kur-GU ÇOK kat-man-LI', 'الحبكة متعددة الطبقات.', 'پێکهاتەکە چەند چینییە.']),
  w('yergi', 'yer-Gİ', 'هجاء / سخرية لاذعة', 'ڕەخنەی تیژ', ['Metin ince bir yergi içeriyor.', 'me-TİN in-DJE bir yer-Gİ i-çe-ri-YOR', 'يحتوي النص على سخرية لطيفة.', 'دەقەکە ڕەخنەیەکی ناسکی تێدایە.']),
  w('kinaye', 'ki-na-YE', 'كناية / تعريض', 'کنایە', ['Kinayeli konuşmayı sevmiyorum.', 'ki-na-ye-Lİ ko-nuş-ma-YI sev-mi-YO-rum', 'لا أحب الكلام بالتعريض.', 'قسەی کنایەئامێزم پێ خۆش نییە.']),
  w('dize', 'di-ZE', 'بيت شعري / سطر', 'دێڕی شیعر', ['Bu dizeyi ezbere biliyorum.', 'BU di-ze-Yİ ez-be-RE bi-li-YO-rum', 'أحفظ هذا البيت عن ظهر قلب.', 'ئەم دێڕەم لەبەرە.']),
  w('deneme', 'de-ne-ME', 'مقالة أدبية (Essay)', 'وتاری ئەدەبی', ['Montaigne denemenin kurucusudur.', 'mon-TEN de-ne-me-NİN ku-ru-dju-su-DUR', 'مونتين مؤسّس فن المقالة.', 'مۆنتێن دامەزرێنەری وتاری ئەدەبییە.']),
  w('bilge', 'bil-GE', 'حكيم', 'دانا', ['Bilge bir ihtiyar gibi konuşuyor.', 'bil-GE bir ih-ti-YAR gi-Bİ ko-nu-şu-YOR', 'يتكلم كشيخ حكيم.', 'وەک پیرێکی دانا قسە دەکات.'], 'adjective'),
  w('yürek burkan', 'yü-REK bur-kan', 'يعتصر القلب / مؤلم', 'دڵتەزێن', ['Yürek burkan bir hikâye anlattı.', 'yü-REK bur-KAN bir hi-kâ-YE an-lat-TI', 'حكى قصة تعتصر القلب.', 'چیرۆکێکی دڵتەزێنی گێڕایەوە.'], 'adjective'),
  w('içli', 'iç-Lİ', 'مرهف / عاطفي', 'سۆزدار', ['İçli bir sesle söyledi.', 'iç-Lİ bir ses-LE söy-le-Dİ', 'غنّى بصوت مرهف.', 'بە دەنگێکی سۆزدار گوتی.'], 'adjective'),
]);

const compoundsAdvanced = pack('compounds', 'c1plus', 'phrase', [
  w('ne var ki', 'NE VAR Kİ', 'غير أنّ (تضادّ رفيع)', 'بەڵام (پێچەوانەیەکی ناسک)', ['Plan iyiydi; ne var ki bütçe yetmedi.', 'PLAN i-yiy-Dİ NE VAR Kİ büt-ÇE yet-me-Dİ', 'كانت الخطة جيدة؛ غير أن الميزانية لم تكفِ.', 'پلانەکە باش بوو؛ بەڵام بودجە بەس نەبوو.']),
  w('kaldı ki', 'kal-DI Kİ', 'ثم إنّ / علاوةً على ذلك', 'سەرەڕای ئەوە', ['Vaktimiz yok; kaldı ki bütçemiz de dar.', 'vak-ti-MİZ YOK kal-DI Kİ büt-çe-MİZ de DAR', 'ليس لدينا وقت؛ ثم إن ميزانيتنا ضيقة.', 'کاتمان نییە؛ سەرەڕای ئەوە بودجەشمان تەسکە.']),
  w('bir bakıma', 'bir ba-kı-MA', 'من وجه ما / نوعاً ما', 'لە ڕوویەکەوە', ['Bir bakıma haklısın.', 'bir ba-kı-MA hak-lı-SIN', 'من وجه ما أنت محق.', 'لە ڕوویەکەوە ڕاست دەکەیت.']),
  w('öyle ki', 'öy-LE Kİ', 'إلى درجة أنّ', 'بەشێوەیەک کە', ['Öyle yoğundu ki nefes alamadım.', 'öy-LE yo-un-DU Kİ ne-FES a-la-ma-DIM', 'كان مزدحماً إلى درجة أنني لم أستطع التنفس.', 'بەشێوەیەک قەرەباڵغ بوو کە نەمتوانی هەناسە بدەم.']),
  w('sözün özü', 'sö-ZÜN ö-ZÜ', 'خلاصة القول', 'کورتی قسەکە', ['Sözün özü, plan değişmeli.', 'sö-ZÜN ö-ZÜ PLAN de-ğiş-me-Lİ', 'خلاصة القول، يجب تغيير الخطة.', 'کورتی قسەکە، دەبێت پلانەکە بگۆڕدرێت.']),
  w('her şeyden önce', 'her şey-DEN ön-DJE', 'قبل كل شيء', 'پێش هەموو شتێک', ['Her şeyden önce güvenlik.', 'her şey-DEN ön-DJE gü-ven-LİK', 'قبل كل شيء الأمان.', 'پێش هەموو شتێک ئاسایش.']),
  w('bununla birlikte', 'bu-nun-LA bir-lik-TE', 'ومع ذلك', 'لەگەڵ ئەوەشدا', ['Bununla birlikte itiraz etmedik.', 'bu-nun-LA bir-lik-TE i-ti-RAZ et-me-DİK', 'ومع ذلك لم نعترض.', 'لەگەڵ ئەوەشدا ناڕەزایی دەرنەبڕی.']),
  w('bir yandan da', 'bir yan-DAN da', 'ومن جهة أخرى', 'لەلایەکی ترەوە', ['Bir yandan da haklı olabilir.', 'bir yan-DAN da hak-LI o-la-bi-LİR', 'ومن جهة أخرى قد يكون محقاً.', 'لەلایەکی ترەوە لەوانەیە ڕاست بکات.']),
  w('ne yazık ki', 'NE ya-ZIK Kİ', 'للأسف', 'بەداخەوە', ['Ne yazık ki geç kaldık.', 'NE ya-ZIK Kİ GEÇ kal-DIK', 'للأسف تأخّرنا.', 'بەداخەوە درەنگ کەوتین.']),
  w('şu var ki', 'ŞU VAR Kİ', 'إلا أنّ هناك أمراً', 'بەڵام شتێک هەیە', ['Şu var ki, süre çok kısa.', 'ŞU VAR Kİ sü-RE ÇOK kı-SA', 'إلا أن هناك أمراً: المدة قصيرة جداً.', 'بەڵام شتێک هەیە: ماوەکە زۆر کورتە.']),
  w('gel gelelim', 'GEL ge-le-lim', 'ولكن للأسف / وإذا بنا', 'بەڵام بەداخەوە', ['Hazırdık; gel gelelim toplantı iptal oldu.', 'ha-zır-DIK GEL ge-le-LİM top-lan-TI ip-TAL ol-du', 'كنا جاهزين؛ ولكن للأسف أُلغي الاجتماع.', 'ئامادە بووین؛ بەڵام بەداخەوە کۆبوونەوەکە هەڵوەشێندرایەوە.']),
  w('haddizatında', 'had-di-za-tın-DA', 'في حدّ ذاته', 'لە ڕاستیدا', ['Haddizatında sorun teknik değil.', 'had-di-za-tın-DA so-RUN tek-NİK de-İL', 'المشكلة في حد ذاتها ليست تقنية.', 'لە ڕاستیدا کێشەکە تەکنیکی نییە.']),
]);

export const C1PLUS_VOCABULARY_EXTRA: VocabItem[] = [
  ...idiomsExtra, ...proverbsExtra, ...literary, ...compoundsAdvanced,
];
