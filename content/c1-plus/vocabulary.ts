import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * C1+ vocabulary - deyimler (idioms) and atasozleri (proverbs).
 *
 * These are translated by MEANING, not word by word. Where Arabic or Kurdish
 * has its own proverb saying the same thing, that equivalent is given, because
 * a literal rendering of a Turkish idiom is never natural in either language.
 */

const idioms = pack('idioms', 'c1plus', 'phrase', [
  w('göz atmak', 'GÖZ at-mak', 'يلقي نظرة سريعة (حرفياً: يرمي عيناً)', 'چاوێک لێکردن', ['Rapora bir göz atar mısın?', 'ra-po-RA bir GÖZ a-TAR mı-sın', 'هل تلقي نظرة على التقرير؟', 'چاوێک لە ڕاپۆرتەکە دەکەیت؟']),
  w('ağzı kulaklarına varmak', 'a-ZI ku-lak-la-rı-NA var-mak', 'يبتسم من أذن إلى أذن من شدة الفرح', 'دەمی گەیشتە گوێی (لە خۆشیدا)', ['Haberi duyunca ağzı kulaklarına vardı.', 'ha-be-Rİ du-yun-DJA a-ZI ku-lak-la-rı-NA var-dı', 'لما سمع الخبر ابتسم من أذن إلى أذن.', 'کە هەواڵەکەی بیست دەمی گەیشتە گوێی.']),
  w('burnu havada olmak', 'bur-NU ha-va-DA ol-mak', 'متكبّر / أنفه في السماء', 'لووتی بەرزە (خۆبەزلزان)', ['Zengin olunca burnu havada oldu.', 'zen-GİN o-lun-DJA bur-NU ha-va-DA ol-du', 'لما صار غنياً تكبّر.', 'کە دەوڵەمەند بوو لووتی بەرز بوو.']),
  w('eli açık', 'e-Lİ a-ÇIK', 'كريم / سخيّ (حرفياً: يده مفتوحة)', 'دەستکراوە (بەخشندە)', ['Çok eli açık bir adamdır.', 'ÇOK e-Lİ a-ÇIK bir a-dam-DIR', 'إنه رجل كريم جداً.', 'پیاوێکی زۆر دەستکراوەیە.']),
  w('kulak misafiri olmak', 'ku-LAK mi-sa-fi-Rİ ol-mak', 'يسمع حديثاً دون قصد', 'بێ ئەنقەست گوێی لێبوون', ['Konuşmanıza kulak misafiri oldum.', 'ko-nuş-ma-nı-ZA ku-LAK mi-sa-fi-Rİ ol-dum', 'سمعت حديثكم دون قصد.', 'بێ ئەنقەست گوێم لە قسەکانتان بوو.']),
  w('göze girmek', 'gö-ZE gir-mek', 'ينال الحظوة / يكسب رضا أحدهم', 'جێگای ڕەزامەندی بوون', ['Çalışkanlığıyla müdürün gözüne girdi.', 'ça-lış-kan-lı-ıy-LA mü-dü-RÜN gö-zü-NE gir-di', 'نال رضا المدير بجدّه.', 'بە کۆششەکەی جێگای ڕەزامەندی بەڕێوەبەر بوو.']),
  w('ağzından kaçırmak', 'a-zın-DAN ka-çır-mak', 'يفلت لسانه بسرّ', 'لە دەمی دەرچوون (نهێنی)', ['Sırrı ağzından kaçırdı.', 'sır-RI a-zın-DAN ka-çır-DI', 'أفلت السرّ من فمه.', 'نهێنییەکەی لە دەمی دەرچوو.']),
  w('ateş pahası', 'a-TEŞ pa-ha-sı', 'باهظ الثمن جداً (حرفياً: بثمن النار)', 'زۆر گران (وەک نرخی ئاگر)', ['Bu günlerde et ateş pahası.', 'BU gün-ler-DE ET a-TEŞ pa-ha-SI', 'اللحم هذه الأيام باهظ جداً.', 'ئەم ڕۆژانە گۆشت زۆر گرانە.']),
  w('etekleri zil çalmak', 'e-tek-le-Rİ ZİL çal-mak', 'يطير من الفرح', 'لە خۆشیدا نەگونجان', ['Sınavı geçince etekleri zil çaldı.', 'sı-na-VI ge-çin-DJE e-tek-le-Rİ ZİL çal-DI', 'لما نجح في الامتحان طار من الفرح.', 'کە لە تاقیکردنەوەکە دەرچوو لە خۆشیدا نەگونجا.']),
  w('baş göz üstüne', 'BAŞ GÖZ üs-tü-ne', 'من العين والرأس / بكل سرور', 'لەسەر چاو', ['Baş göz üstüne, hemen yapıyorum.', 'BAŞ GÖZ üs-tü-NE he-MEN ya-pı-YO-rum', 'من العين والرأس، سأفعلها حالاً.', 'لەسەر چاو، دەستبەجێ دەیکەم.']),
  w('turnayı gözünden vurmak', 'tur-na-YI gö-zün-DEN vur-mak', 'يصيب الهدف تماماً / يضرب عصفورين', 'دەقی ئامانج پێکردن', ['Bu yatırımla turnayı gözünden vurdu.', 'BU ya-tı-rım-LA tur-na-YI gö-zün-DEN vur-du', 'بهذا الاستثمار أصاب الهدف تماماً.', 'بەم وەبەرهێنانە دەقی ئامانجی پێکرد.']),
  w('ipe un sermek', 'i-PE UN ser-mek', 'يتذرّع بالأعذار ويماطل', 'بیانوو هێنانەوە', ['Bahane bulup ipe un seriyor.', 'ba-ha-NE bu-LUP i-PE UN se-ri-YOR', 'يختلق الأعذار ويماطل.', 'بیانوو دەهێنێتەوە و دوای دەخات.']),
  w('gözden düşmek', 'göz-DEN düş-mek', 'يفقد مكانته / يسقط من العين', 'کەوتنە خوارەوە لە چاو', ['Son hatasından sonra gözden düştü.', 'SON ha-ta-sın-DAN son-RA göz-DEN düş-TÜ', 'بعد خطئه الأخير فقد مكانته.', 'دوای هەڵە کۆتاییەکەی لە چاو کەوت.']),
  w('elini çabuk tutmak', 'e-li-Nİ ça-BUK tut-mak', 'يسرع في عمله', 'خێرایی کردن', ['Elini çabuk tut, geç kalıyoruz!', 'e-li-Nİ ça-BUK TUT GEÇ ka-lı-YO-ruz', 'أسرع، سنتأخر!', 'خێرا بکە، درەنگ دەکەوین!']),
  w('can kulağıyla dinlemek', 'DJAN ku-la-ıy-LA din-le-mek', 'يصغي بكل جوارحه', 'بە گوێی گیانەوە گوێگرتن', ['Öğretmeni can kulağıyla dinledi.', 'öö-ret-me-Nİ DJAN ku-la-ıy-LA din-le-Dİ', 'أصغى إلى المعلم بكل جوارحه.', 'بە گوێی گیانەوە گوێی لە مامۆستا گرت.']),
]);

const proverbs = pack('idioms', 'c1plus', 'phrase', [
  w('Damlaya damlaya göl olur.', 'dam-la-YA dam-la-YA GÖL o-lur', 'قطرة قطرة تصير بحيرة — أي أن القليل الدائم يصنع الكثير.', 'دڵۆپە دڵۆپە دەبێتە دەریاچە — کەمی بەردەوام دەبێتە زۆر.', ['Her gün on kelime öğren; damlaya damlaya göl olur.', 'her GÜN ON ke-li-ME öö-REN dam-la-YA dam-la-YA GÖL o-lur', 'تعلّم عشر كلمات كل يوم؛ قطرة قطرة تصير بحيرة.', 'هەموو ڕۆژێک دە وشە فێربە؛ دڵۆپە دڵۆپە دەبێتە دەریاچە.']),
  w('Ayağını yorganına göre uzat.', 'a-ya-ı-NI yor-ga-nı-NA gö-RE u-ZAT', 'على قدر بساطك مدّ رجليك — عش في حدود إمكاناتك.', 'پێت بەقەد لێفەکەت درێژ بکە — بەپێی توانات بژی.', ['Borca girme, ayağını yorganına göre uzat.', 'bor-DJA gir-ME a-ya-ı-NI yor-ga-nı-NA gö-RE u-ZAT', 'لا تستدن، وعلى قدر بساطك مدّ رجليك.', 'قەرز مەکە، پێت بەقەد لێفەکەت درێژ بکە.']),
  w('Acele işe şeytan karışır.', 'a-dje-LE i-ŞE şey-TAN ka-rı-ŞIR', 'في العجلة الندامة وفي التأني السلامة.', 'لە پەلەدا شەیتان تێکەڵ دەبێت — پەلە پەشیمانی لێدەکەوێتەوە.', ['Yavaş ol, acele işe şeytan karışır.', 'ya-VAŞ OL a-dje-LE i-ŞE şey-TAN ka-rı-ŞIR', 'تمهّل، ففي العجلة الندامة.', 'هێواش بە، لە پەلەدا شەیتان تێکەڵ دەبێت.']),
  w('Gülü seven dikenine katlanır.', 'gü-LÜ se-VEN di-ke-ni-NE kat-la-NIR', 'من أحبّ الوردة تحمّل شوكها.', 'ئەوەی گوڵی خۆشبوێت دەبێت بەرگەی دڕکەکەی بگرێت.', ['Sabret; gülü seven dikenine katlanır.', 'sab-RET gü-LÜ se-VEN di-ke-ni-NE kat-la-NIR', 'اصبر؛ من أحب الوردة تحمّل شوكها.', 'ئارام بگرە؛ ئەوەی گوڵی خۆشبوێت بەرگەی دڕکەکەی دەگرێت.']),
  w('Bir elin nesi var, iki elin sesi var.', 'bir e-LİN ne-Sİ VAR i-Kİ e-LİN se-Sİ VAR', 'يد واحدة لا تصفّق — الاتحاد قوة.', 'یەک دەست دەنگی نییە، دوو دەست دەنگی هەیە — یەکێتی هێزە.', ['Beraber çalışalım; bir elin nesi var, iki elin sesi var.', 'be-ra-BER ça-lı-şa-LIM bir e-LİN ne-Sİ VAR i-Kİ e-LİN se-Sİ VAR', 'لنعمل معاً؛ يد واحدة لا تصفّق.', 'با پێکەوە کار بکەین؛ یەک دەست دەنگی نییە.']),
  w('Ne ekersen onu biçersin.', 'NE e-ker-SEN o-NU bi-çer-SİN', 'كما تزرع تحصد.', 'چی بچێنیت ئەوە دەدرویتەوە.', ['Emek ver; ne ekersen onu biçersin.', 'e-MEK VER NE e-ker-SEN o-NU bi-çer-SİN', 'ابذل جهداً؛ كما تزرع تحصد.', 'ماندووبە؛ چی بچێنیت ئەوە دەدرویتەوە.']),
  w('Söz gümüşse sükût altındır.', 'SÖZ gü-müş-SE sü-KÛT al-tın-DIR', 'إن كان الكلام من فضة فالسكوت من ذهب.', 'ئەگەر قسە زیو بێت، بێدەنگی زێڕە.', ['Bazen susmak gerek; söz gümüşse sükût altındır.', 'ba-ZEN sus-MAK ge-REK SÖZ gü-müş-SE sü-KÛT al-tın-DIR', 'أحياناً يجب الصمت؛ إن كان الكلام من فضة فالسكوت من ذهب.', 'هەندێک جار پێویستە بێدەنگ بیت؛ ئەگەر قسە زیو بێت بێدەنگی زێڕە.']),
  w('Dost kara günde belli olur.', 'DOST ka-RA gün-DE bel-Lİ o-lur', 'الصديق وقت الضيق.', 'دۆست لە ڕۆژی ڕەشدا دەردەکەوێت.', ['Bana o zaman yardım etti; dost kara günde belli olur.', 'ba-NA O za-MAN yar-DIM et-Tİ DOST ka-RA gün-DE bel-Lİ o-lur', 'ساعدني حينها؛ الصديق وقت الضيق.', 'ئەو کاتە یارمەتی دام؛ دۆست لە ڕۆژی ڕەشدا دەردەکەوێت.']),
  w('Sakla samanı, gelir zamanı.', 'sak-LA sa-ma-NI ge-LİR za-ma-NI', 'احفظ الشيء ولو تافهاً فقد يأتي وقته.', 'کا هەڵبگرە، کاتی خۆی دێت.', ['Atma bunu; sakla samanı, gelir zamanı.', 'at-MA bu-NU sak-LA sa-ma-NI ge-LİR za-ma-NI', 'لا ترمِ هذا؛ احفظه فقد يأتي وقته.', 'ئەمە فڕێمەدە؛ کا هەڵبگرە، کاتی خۆی دێت.']),
  w('Su testisi su yolunda kırılır.', 'SU tes-ti-Sİ SU yo-lun-DA kı-rı-LIR', 'جرّة الماء تنكسر في طريق الماء — من داوم على خطر أصابه.', 'گۆزەی ئاو لە ڕێگای ئاودا دەشکێت — ئەوەی مەترسی دووبارە بکاتەوە تووشی دەبێت.', ['Dikkatli ol; su testisi su yolunda kırılır.', 'dik-kat-Lİ OL SU tes-ti-Sİ SU yo-lun-DA kı-rı-LIR', 'كن حذراً؛ جرة الماء تنكسر في طريق الماء.', 'وریابە؛ گۆزەی ئاو لە ڕێگای ئاودا دەشکێت.']),
]);

export const C1PLUS_VOCABULARY: VocabItem[] = [...idioms, ...proverbs];
