import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * A2 vocabulary: the verb pairs.
 *
 * Turkish systematically distinguishes *what happens* from *what someone does*
 * by a suffix on the same root:
 *
 *   dolmak    it fills           doldurmak    someone fills it
 *   yanmak    it burns           yakmak       someone lights it
 *   kırılmak  it breaks          kırmak       someone breaks it
 *   düşmek    it falls           düşürmek     someone drops it
 *
 * Arabic and Kurdish both make this distinction too, but with different verbs
 * (كُسِر / كَسَر) rather than with one predictable suffix — so the *concept* is
 * familiar and the *mechanism* is not. A student who learns `doldurmak` alone
 * will say "su doldurdu" when they mean "su doldu", and be understood to have
 * said something else entirely.
 *
 * The verb audit found that almost none of these pairs existed: the curriculum
 * held one half of a dozen pairs and neither half of thirty more. They are
 * listed here in pairs, each cross-linked to its partner, because learning one
 * without the other is what causes the mistake.
 *
 * The `-dir`/`-t` causatives of emotion verbs (`korkutmak`, `güldürmek`) are
 * the same mechanism applied to feelings, so they close the file.
 */

/* ---------------- filling and emptying ---------------- */

const CONTAINER: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('dolmak', 'dol-MAK', 'يمتلئ', 'پڕبوون',
      ['Salon çabuk doldu.', 'sa-LON ça-BUK dol-DU', 'امتلأت القاعة بسرعة.', 'هۆڵەکە بە خێرایی پڕ بوو.']),
    opposite: ['boşalmak'],
    related: ['doldurmak'],
    note: b(
      'لا فاعل خارجيّ: القاعة امتلأت من نفسها. إن كان هناك من يملأ، الفعل «doldurmak».',
      'کردارێکی بێ کردەیە: بۆ خۆی پڕ بووە.',
    ),
  },
  {
    ...w('doldurmak', 'dol-dur-MAK', 'يملأ', 'پڕکردن',
      ['Formu doldurun lütfen.', 'for-MU dol-du-RUN lüt-FEN', 'املأوا الاستمارة من فضلكم.', 'تکایە فۆڕمەکە پڕ بکەنەوە.']),
    opposite: ['boşaltmak'],
    related: ['dolmak'],
    collocations: ['form doldurmak', 'bardağı doldurmak'],
  },
  {
    ...w('boşalmak', 'bo-şal-MAK', 'يفرُغ', 'چۆڵبوون',
      ['Akşama doğru sokaklar boşalır.', 'ak-şa-MA doğ-RU so-kak-LAR bo-şa-LIR', 'تفرغ الشوارع نحو المساء.', 'بەرەو ئێوارە شەقامەکان چۆڵ دەبن.']),
    opposite: ['dolmak'],
    related: ['boşaltmak'],
  },
  {
    ...w('boşaltmak', 'bo-şalt-MAK', 'يُفرغ', 'چۆڵکردن',
      ['Kutuyu boşalttım.', 'ku-tu-YU bo-şalt-TIM', 'أفرغت الصندوق.', 'سندوقەکەم چۆڵ کرد.']),
    opposite: ['doldurmak'],
    related: ['boşalmak'],
  },
]);

/* ---------------- fire and heat ---------------- */

const FIRE: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('yanmak', 'yan-MAK', 'يحترق؛ يضيء (مصباح)', 'سووتان؛ داگیرسان',
      ['Yemek yandı.', 'ye-MEK yan-DI', 'احترق الطعام.', 'خواردنەکە سووتا.']),
    opposite: ['sönmek'],
    related: ['yakmak'],
    collocations: ['ışık yanmak', 'canı yanmak'],
    note: b(
      'تُستعمل أيضاً للمصباح: «ışık yanıyor» = النور مضاء. وللألم: «canım yanıyor» = أتألّم.',
      'بۆ گڵۆپیش بەکاردێت: «ışık yanıyor».',
    ),
  },
  {
    ...w('yakmak', 'yak-MAK', 'يُشعل، يحرق', 'داگیرساندن',
      ['Işığı yak lütfen.', 'ı-şı-ĞI yak lüt-FEN', 'أشعل النور من فضلك.', 'تکایە گڵۆپەکە داگیرسێنە.']),
    opposite: ['söndürmek'],
    related: ['yanmak'],
    collocations: ['ışığı yakmak', 'ateş yakmak'],
  },
  {
    ...w('sönmek', 'sön-MEK', 'ينطفئ', 'کوژانەوە',
      ['Mum söndü.', 'MUM sön-DÜ', 'انطفأت الشمعة.', 'مۆمەکە کوژایەوە.']),
    opposite: ['yanmak'],
    related: ['söndürmek'],
  },
  {
    ...w('söndürmek', 'sön-dür-MEK', 'يُطفئ', 'کوژاندنەوە',
      ['Çıkarken ışıkları söndür.', 'çı-kar-KEN ı-şık-la-RI sön-DÜR', 'أطفئ الأنوار عند الخروج.', 'کاتی دەرچوون گڵۆپەکان بکوژێنەوە.']),
    opposite: ['yakmak'],
    related: ['sönmek'],
  },
  {
    ...w('ısıtmak', 'ı-sıt-MAK', 'يُسخّن', 'گەرمکردن',
      ['Çorbayı ısıttım.', 'çor-ba-YI ı-sıt-TIM', 'سخّنت الشوربة.', 'شۆربەکەم گەرم کرد.']),
    opposite: ['soğutmak'],
    related: ['ısınmak'],
  },
  {
    ...w('soğutmak', 'so-ğut-MAK', 'يُبرّد', 'ساردکردنەوە',
      ['Suyu buzdolabında soğuttum.', 'su-YU buz-do-la-bın-DA so-ğut-TUM', 'برّدت الماء في الثلاجة.', 'ئاوەکەم لە سەلاجەدا سارد کردەوە.']),
    opposite: ['ısıtmak'],
  },
  {
    ...w('donmak', 'don-MAK', 'يتجمّد', 'بەستن',
      ['Sular gece dondu.', 'su-LAR ge-CE don-DU', 'تجمّدت المياه ليلاً.', 'ئاوەکان بە شەو بەستن.']),
    related: ['dondurmak'],
    collocations: ['donmuş gıda'],
  },
  {
    ...w('dondurmak', 'don-dur-MAK', 'يُجمّد', 'بەستنەوە',
      ['Eti dondurdum.', 'e-Tİ don-dur-DUM', 'جمّدت اللحم.', 'گۆشتەکەم بەستەوە.']),
    related: ['donmak', 'dondurma'],
  },
  {
    ...w('erimek', 'e-ri-MEK', 'يذوب', 'توانەوە',
      ['Kar eridi.', 'KAR e-ri-Dİ', 'ذاب الثلج.', 'بەفرەکە تۆیایەوە.']),
    opposite: ['donmak'],
    related: ['eritmek'],
  },
  {
    ...w('eritmek', 'e-rit-MEK', 'يُذيب', 'توواندنەوە',
      ['Tereyağını tavada erittim.', 'te-re-ya-ğı-NI ta-va-DA e-rit-TİM', 'أذبت الزبدة في المقلاة.', 'کەرەکەم لە تاوەکەدا تواندەوە.']),
    related: ['erimek'],
  },
]);

/* ---------------- breaking and mending ---------------- */

const BREAKING: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('kırmak', 'kır-MAK', 'يكسر', 'شکاندن',
      ['Bardağı kırdım.', 'bar-da-ĞI kır-DIM', 'كسرت الكوب.', 'گڵاسەکەم شکاند.']),
    related: ['kırılmak'],
    collocations: ['camı kırmak', 'kalbini kırmak'],
    note: b(
      'مجازاً «kalbini kırmak» = يجرح مشاعره — نفس الصورة العربية.',
      'بە مەجازی «kalbini kırmak» = دڵشکاندن.',
    ),
  },
  {
    ...w('kırılmak', 'kı-rıl-MAK', 'ينكسر؛ يزعل', 'شکان؛ دڵگران بوون',
      ['Cam kırıldı.', 'CAM kı-rıl-DI', 'انكسر الزجاج.', 'شووشەکە شکا.']),
    related: ['kırmak'],
    note: b(
      'لها معنى عاطفي شائع: «bana kırıldı» = زعل منّي.',
      'واتایەکی هەستیاری باوی هەیە: «bana kırıldı».',
    ),
  },
  {
    ...w('bozmak', 'boz-MAK', 'يُفسد، يُعطّل؛ يصرف (نقوداً)', 'تێکدان؛ ئاڵوگۆڕکردن',
      ['Planımı bozdu.', 'pla-nı-MI boz-DU', 'أفسد خطّتي.', 'پلانەکەمی تێکدا.']),
    related: ['bozulmak'],
    collocations: ['para bozmak', 'sözünü bozmak', 'moralini bozmak'],
    note: b(
      'معنى عملي جداً: «para bozmak» = يصرف عملة كبيرة إلى فئات أصغر.',
      'واتایەکی کردەیی: «para bozmak» = پارە گۆڕینەوە.',
    ),
  },
  {
    ...w('bozulmak', 'bo-zul-MAK', 'يتعطّل؛ يفسد (طعام)', 'خراپبوون',
      ['Asansör yine bozuldu.', 'a-san-SÖR yi-NE bo-zul-DU', 'تعطّل المصعد مرّة أخرى.', 'ئاسانسۆرەکە دووبارە خراپ بوو.']),
    related: ['bozmak', 'bozuk'],
  },
  {
    ...w('düzeltmek', 'dü-zelt-MEK', 'يُصحّح، يعدّل', 'ڕاستکردنەوە',
      ['Hatayı düzelttim.', 'ha-ta-YI dü-zelt-TİM', 'صحّحت الخطأ.', 'هەڵەکەم ڕاست کردەوە.']),
    collocations: ['hata düzeltmek', 'yatağı düzeltmek'],
  },
  {
    ...w('onarmak', 'o-nar-MAK', 'يُرمّم، يُصلح', 'چاککردنەوە',
      ['Tarihi binayı onardılar.', 'ta-ri-Hİ bi-na-YI o-nar-dı-LAR', 'رمّموا المبنى التاريخي.', 'بینا مێژووییەکەیان چاککردەوە.']),
    related: ['tamir'],
    note: b(
      '«onarmak» أرسم وأقرب للترميم؛ «tamir etmek» أشيع في الكلام اليومي.',
      '«onarmak» فەرمیترە؛ «tamir etmek» لە قسەی ڕۆژانەدا باوترە.',
    ),
  },
]);

/* ---------------- rising and falling ---------------- */

const MOVEMENT: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('düşmek', 'düş-MEK', 'يقع، يسقط؛ ينخفض', 'کەوتن؛ داشکان',
      ['Telefonum yere düştü.', 'te-le-fo-NUM ye-RE düş-TÜ', 'وقع هاتفي على الأرض.', 'تەلەفۆنەکەم کەوتە سەر زەوی.']),
    related: ['düşürmek'],
    collocations: ['yere düşmek', 'fiyat düşmek', 'aklına düşmek'],
    note: b(
      'تُستعمل كثيراً للأسعار والنِّسب: «fiyatlar düştü» = انخفضت الأسعار.',
      'زۆر بۆ نرخ و ڕێژە بەکاردێت: «fiyatlar düştü».',
    ),
  },
  {
    ...w('düşürmek', 'dü-şür-MEK', 'يُوقع، يُسقط؛ يخفّض', 'خستن؛ داشکاندن',
      ['Anahtarımı düşürmüşüm.', 'a-nah-ta-rı-MI dü-şür-mü-ŞÜM', 'يبدو أنني أوقعت مفتاحي.', 'وا دیارە کلیلەکەم کەوتووە.']),
    related: ['düşmek'],
    collocations: ['fiyat düşürmek', 'ateşi düşürmek'],
  },
  {
    ...w('kaldırmak', 'kal-dır-MAK', 'يرفع؛ يزيل، يُلغي', 'هەڵگرتن؛ لابردن',
      ['Tabakları kaldırır mısın?', 'ta-bak-la-RI kal-dı-RIR mı-SIN', 'هل ترفع الأطباق؟', 'قاپەکان هەڵدەگریت؟']),
    related: ['kalkmak'],
    collocations: ['elini kaldırmak', 'yasağı kaldırmak', 'masayı kaldırmak'],
    note: b(
      'معنى ثانٍ رسميّ مهمّ: «yasağı kaldırmak» = يرفع الحظر، أي يُلغيه.',
      'واتایەکی فەرمی: «yasağı kaldırmak» = هەڵوەشاندنەوەی قەدەغە.',
    ),
  },
  {
    ...w('uyandırmak', 'u-yan-dır-MAK', 'يوقظ', 'خەبەرکردنەوە',
      ['Beni yedide uyandır.', 'be-Nİ ye-di-DE u-yan-DIR', 'أيقظني في السابعة.', 'لە حەوتدا خەبەرم بکەوە.']),
    related: ['uyanmak'],
    collocations: ['merak uyandırmak', 'şüphe uyandırmak'],
  },
  {
    ...w('yatırmak', 'ya-tır-MAK', 'يُضجع؛ يودع (مالاً)', 'ڕاخستن؛ دانان (پارە)',
      ['Çocuğu erken yatırdım.', 'ço-cu-ĞU er-KEN ya-tır-DIM', 'أنمت الطفل مبكراً.', 'منداڵەکەم زوو خستە خەو.']),
    related: ['yatmak'],
    collocations: ['para yatırmak', 'bankaya yatırmak'],
    note: b(
      '⚠️ معنى ماليّ شائع جداً: «para yatırmak» = يودع المال في البنك.',
      '⚠️ واتای دارایی زۆر باو: «para yatırmak» = پارە دانان لە بانک.',
    ),
  },
  {
    ...w('durdurmak', 'dur-dur-MAK', 'يوقف', 'ڕاگرتن',
      ['Arabayı kenarda durdurdu.', 'a-ra-ba-YI ke-nar-DA dur-dur-DU', 'أوقف السيارة على الجانب.', 'ئۆتۆمبێلەکەی لە کەنارەوە ڕاگرت.']),
    related: ['durmak'],
  },
  {
    ...w('başlatmak', 'baş-lat-MAK', 'يُطلق، يبدأ شيئاً', 'دەستپێکردن',
      ['Kampanyayı dün başlattılar.', 'kam-pan-ya-YI DÜN baş-lat-tı-LAR', 'أطلقوا الحملة أمس.', 'دوێنێ کەمپینەکەیان دەستپێکرد.']),
    related: ['başlamak'],
    note: b(
      '⚠️ «başlamak» يبدأ الشيء بنفسه ويأخذ حالة الاتّجاه: «derse başladık». «başlatmak» أن تُطلق أنت شيئاً.',
      '⚠️ «başlamak» حاڵەتی ئاراستە وەردەگرێت: «derse başladık».',
    ),
  },
  {
    ...w('bitmek', 'bit-MEK', 'ينتهي، ينفد', 'تەواوبوون',
      ['Şeker bitti.', 'şe-KER bit-Tİ', 'نفد السكّر.', 'شەکر تەواو بوو.']),
    related: ['bitirmek'],
    collocations: ['şarjı bitmek', 'işi bitmek'],
    note: b(
      'تُستعمل كثيراً للنفاد: «benzin bitti» = نفد البنزين، «şarjım bitti» = فرغت بطاريتي.',
      'زۆر بۆ تەواوبوون بەکاردێت: «şarjım bitti».',
    ),
  },
]);

/* ---------------- water and surfaces ---------------- */

const WATER: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('akmak', 'ak-MAK', 'يجري، يسيل', 'ڕۆیشتن (ئاو)',
      ['Musluktan su akıyor.', 'mus-luk-TAN SU a-kı-YOR', 'الماء يسيل من الصنبور.', 'ئاو لە موسلوکەکەوە دەڕوات.']),
    collocations: ['su akmak', 'zaman akıp gitmek'],
  },
  {
    ...w('damlamak', 'dam-la-MAK', 'ينقّط', 'دڵۆپەکردن',
      ['Musluk damlıyor.', 'mus-LUK dam-lı-YOR', 'الصنبور ينقّط.', 'موسلوکەکە دڵۆپە دەکات.']),
    related: ['damla'],
  },
  {
    ...w('taşmak', 'taş-MAK', 'يفيض', 'سەرڕێژبوون',
      ['Nehir taştı.', 'ne-HİR taş-TI', 'فاض النهر.', 'ڕووبارەکە سەرڕێژ بوو.']),
    collocations: ['sabrı taşmak'],
  },
  {
    ...w('batmak', 'bat-MAK', 'يغرق، يغوص؛ تغرب (الشمس)', 'نقوم بوون؛ ئاوابوون',
      ['Gemi battı.', 'ge-Mİ bat-TI', 'غرقت السفينة.', 'کەشتییەکە نوقوم بوو.']),
    collocations: ['güneş batmak', 'iğne batmak'],
    note: b(
      'نفس الفعل لغروب الشمس: «güneş batıyor». و«batı» = الغرب، من الجذر نفسه.',
      'هەمان کردار بۆ ئاوابوونی خۆر: «güneş batıyor».',
    ),
  },
  {
    ...w('kaymak', 'kay-MAK', 'ينزلق', 'خلیسکان',
      ['Buzda kaydım.', 'buz-DA kay-DIM', 'انزلقت على الجليد.', 'لەسەر سەهۆڵ خلیسکام.']),
    note: b(
      '⚠️ «kaymak» اسماً معناه القشدة — كلمة أخرى تماماً بنفس الشكل.',
      '⚠️ «kaymak» وەک ناو واتای «قەیماخ» دەدات.',
    ),
  },
  {
    ...w('kurumak', 'ku-ru-MAK', 'يجفّ', 'وشکبوون',
      ['Çamaşırlar kurudu.', 'ça-ma-şır-LAR ku-ru-DU', 'جفّ الغسيل.', 'جلوبەرگەکان وشک بوون.']),
    related: ['kurutmak', 'kuru'],
  },
  {
    ...w('kurutmak', 'ku-rut-MAK', 'يُجفّف', 'وشککردنەوە',
      ['Saçımı kuruttum.', 'sa-çı-MI ku-rut-TUM', 'جفّفت شعري.', 'قژم وشک کردەوە.']),
    related: ['kurumak'],
  },
  {
    ...w('ıslanmak', 'ıs-lan-MAK', 'يبتلّ', 'تەڕبوون',
      ['Yağmurda ıslandım.', 'yağ-mur-DA ıs-lan-DIM', 'ابتللت في المطر.', 'لە بارانەکەدا تەڕ بووم.']),
    opposite: ['kurumak'],
    related: ['ıslak'],
  },
]);

/* ---------------- hands and bodies ---------------- */

const PHYSICAL: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('dokunmak', 'do-kun-MAK', 'يلمس؛ يؤذي (صحّياً)', 'دەستلێدان',
      ['Cama dokunma.', 'ca-MA do-kun-MA', 'لا تلمس الزجاج.', 'دەست لە شووشەکە مەدە.']),
    note: b(
      '⚠️ يأخذ حالة الاتّجاه: «cama dokundu» لا «camı dokundu». ومعنى ثانٍ: «bu yemek bana dokundu» = هذا الطعام لم يوافقني.',
      '⚠️ حاڵەتی ئاراستە وەردەگرێت: «cama dokundu».',
    ),
  },
  {
    ...w('vurmak', 'vur-MAK', 'يضرب؛ يطرق', 'لێدان',
      ['Kapıya vurdu.', 'ka-pı-YA vur-DU', 'طرق الباب.', 'لە دەرگا دا.']),
    collocations: ['kapıya vurmak', 'mühür vurmak'],
    note: b(
      '⚠️ الهدف يأخذ حالة الاتّجاه: «kapıya vurdu». وضرب شخصٍ: «ona vurdu».',
      '⚠️ ئامانج حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('sokmak', 'sok-MAK', 'يُدخل؛ يلدغ', 'خستنە ناو؛ پێوەدان',
      ['Anahtarı kilide soktum.', 'a-nah-ta-RI ki-li-DE sok-TUM', 'أدخلت المفتاح في القفل.', 'کلیلەکەم خستە ناو قوفڵەکە.']),
    note: b(
      'معنى ثانٍ شائع: «arı soktu» = لدغته نحلة.',
      'واتای دووەم: «arı soktu» = هەنگ پێیدا.',
    ),
  },
  {
    ...w('saklamak', 'sak-la-MAK', 'يُخفي؛ يحتفظ بـ', 'شاردنەوە؛ پاراستن',
      ['Makbuzu saklayın.', 'mak-bu-ZU sak-la-YIN', 'احتفظوا بالإيصال.', 'وەسڵەکە بپارێزن.']),
    collocations: ['sır saklamak', 'saklı tutmak'],
    note: b(
      'معنيان قريبان يفصلهما السياق: الإخفاء عن الآخرين، والاحتفاظ للاستعمال لاحقاً.',
      'دوو واتای نزیک: شاردنەوە و پاراستن بۆ دواتر.',
    ),
  },
  {
    ...w('kaybolmak', 'kay-bol-MAK', 'يضيع، يختفي', 'ونبوون',
      ['Kalabalıkta kayboldum.', 'ka-la-ba-lık-TA kay-bol-DUM', 'ضعت في الزحام.', 'لە قەرەباڵغیدا ون بووم.']),
    related: ['kaybetmek'],
    note: b(
      '⚠️ الفرق مهمّ: «kaybettim» = أضعت شيئاً، «kayboldum» = ضعت أنا.',
      '⚠️ جیاوازی گرنگ: «kaybettim» شتێکم ون کرد، «kayboldum» خۆم ون بووم.',
    ),
  },
  {
    ...w('bulunmak', 'bu-lun-MAK', 'يوجد، يقع', 'بوونی هەبوون',
      ['Müze şehir merkezinde bulunuyor.', 'mü-ZE şe-HİR mer-ke-zin-DE bu-lu-nu-YOR', 'يقع المتحف في مركز المدينة.', 'مۆزەخانەکە لە ناوەندی شاردایە.']),
    related: ['bulmak'],
    collocations: ['yardımda bulunmak', 'ricada bulunmak'],
    note: b(
      'صيغة رسمية للوجود، أشيع من «var» في الكتابة الإدارية.',
      'شێوەیەکی فەرمی، لە نووسینی کارگێڕیدا باوترە لە «var».',
    ),
  },
  {
    ...w('yerleşmek', 'yer-leş-MEK', 'يستقرّ، يسكن', 'نیشتەجێبوون',
      ['Ailem Ankara’ya yerleşti.', 'a-i-LEM an-ka-ra-YA yer-leş-Tİ', 'استقرّت عائلتي في أنقرة.', 'خێزانەکەم لە ئەنقەرە نیشتەجێ بوون.']),
    related: ['yer'],
  },
  {
    ...w('toplanmak', 'top-lan-MAK', 'يجتمع؛ يُرتَّب', 'کۆبوونەوە',
      ['Herkes salonda toplandı.', 'her-KES sa-lon-DA top-lan-DI', 'اجتمع الجميع في القاعة.', 'هەموو کەس لە هۆڵەکەدا کۆبووەوە.']),
    opposite: ['dağılmak'],
    related: ['toplamak', 'toplantı'],
  },
  {
    ...w('dağılmak', 'da-ğıl-MAK', 'يتفرّق؛ يتبعثر', 'بڵاوبوونەوە',
      ['Toplantıdan sonra dağıldık.', 'top-lan-tı-DAN son-RA da-ğıl-DIK', 'تفرّقنا بعد الاجتماع.', 'دوای کۆبوونەوەکە بڵاو بووینەوە.']),
    opposite: ['toplanmak'],
  },
  {
    ...w('patlamak', 'pat-la-MAK', 'ينفجر', 'تەقینەوە',
      ['Balon patladı.', 'ba-LON pat-la-DI', 'انفجر البالون.', 'باڵۆنەکە تەقییەوە.']),
    collocations: ['lastik patlamak', 'kriz patlamak'],
  },
]);

/* ---------------- states of the body ---------------- */

const STATES: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('yorulmak', 'yo-rul-MAK', 'يتعب', 'ماندووبوون',
      ['Çok yoruldum.', 'ÇOK yo-rul-DUM', 'تعبت كثيراً.', 'زۆر ماندوو بووم.']),
    related: ['yorgun'],
  },
  {
    ...w('acıkmak', 'a-cık-MAK', 'يجوع', 'برسیبوون',
      ['Acıktın mı?', 'a-cık-TIN mı', 'هل جعت؟', 'برسیت بووە؟']),
    note: b(
      '⚠️ التركية تجعله فعلاً لا صفة: تقول «acıktım» (جُعت) لا «açım».',
      '⚠️ تورکی وەک کردار بەکاری دەهێنێت: «acıktım».',
    ),
  },
  {
    ...w('susamak', 'su-sa-MAK', 'يعطش', 'تینووبوون',
      ['Susadım, su var mı?', 'su-sa-DIM SU VAR mı', 'عطشت، هل يوجد ماء؟', 'تینوو بووم، ئاو هەیە؟']),
    related: ['acıkmak'],
  },
  {
    ...w('üşümek', 'ü-şü-MEK', 'يشعر بالبرد', 'سەرمابوون',
      ['Üşüyorum, pencereyi kapatalım.', 'ü-şü-yo-RUM pen-ce-re-Yİ ka-pa-ta-LIM', 'أشعر بالبرد، لنغلق النافذة.', 'سەرمامە، با پەنجەرەکە دابخەین.']),
    note: b(
      '⚠️ لا تقل «soğuğum». الشعور بالبرد فعل: «üşüyorum». و«hava soğuk» للطقس.',
      '⚠️ مەڵێ «soğuğum». هەستکردن بە سەرما کردارە: «üşüyorum».',
    ),
  },
  {
    ...w('terlemek', 'ter-le-MEK', 'يتعرّق', 'ئارەقکردن',
      ['Sıcaktan terledim.', 'sı-cak-TAN ter-le-DİM', 'تعرّقت من الحرّ.', 'لە گەرمادا ئارەقم کرد.']),
    related: ['ter'],
  },
  {
    ...w('uçmak', 'uç-MAK', 'يطير', 'فڕین',
      ['Kuşlar güneye uçuyor.', 'kuş-LAR gü-ne-YE u-çu-YOR', 'تطير الطيور جنوباً.', 'باڵندەکان بەرەو باشوور دەفڕن.']),
    related: ['uçak', 'uçuş'],
  },
  {
    ...w('yüzmek', 'yüz-MEK', 'يسبح', 'مەلەکردن',
      ['Denizde yüzdük.', 'de-niz-DE yüz-DÜK', 'سبحنا في البحر.', 'لە دەریادا مەلەمان کرد.']),
    related: ['yüzme'],
  },
]);

/* ---------------- feelings, and making someone feel ---------------- */

const FEELING: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('korkmak', 'kork-MAK', 'يخاف', 'ترسان',
      ['Köpekten korkuyorum.', 'kö-pek-TEN kor-ku-yo-RUM', 'أخاف من الكلب.', 'لە سەگ دەترسم.']),
    related: ['korkutmak', 'korku'],
    note: b(
      '⚠️ ما تخاف منه يأخذ حالة الابتداء: «-den korkmak». نفس منطق «خاف من».',
      '⚠️ ئەوەی لێی دەترسیت حاڵەتی سەرچاوە وەردەگرێت.',
    ),
  },
  {
    ...w('korkutmak', 'kor-kut-MAK', 'يُخيف', 'ترساندن',
      ['Beni korkuttun!', 'be-Nİ kor-kut-TUN', 'أخفتني!', 'ترساندیم!']),
    related: ['korkmak'],
  },
  {
    ...w('gülmek', 'gül-MEK', 'يضحك', 'پێکەنین',
      ['Hepimiz güldük.', 'he-pi-MİZ gül-DÜK', 'ضحكنا جميعاً.', 'هەموومان پێکەنین.']),
    related: ['güldürmek', 'gülümsemek'],
    note: b(
      '⚠️ الضحك على شخص يأخذ حالة الاتّجاه: «bana güldü» = ضحك عليّ.',
      '⚠️ پێکەنین بە کەسێک حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('güldürmek', 'gül-dür-MEK', 'يُضحك', 'پێکەنیناندن',
      ['Bizi çok güldürdü.', 'bi-Zİ ÇOK gül-dür-DÜ', 'أضحكنا كثيراً.', 'زۆر پێی کەنینین.']),
    related: ['gülmek'],
  },
  {
    ...w('ağlamak', 'ağ-la-MAK', 'يبكي', 'گریان',
      ['Bebek ağlıyor.', 'be-BEK ağ-lı-YOR', 'الرضيع يبكي.', 'منداڵەکە دەگری.']),
    related: ['ağlatmak'],
    opposite: ['gülmek'],
  },
  {
    ...w('ağlatmak', 'ağ-lat-MAK', 'يُبكي', 'گریاندن',
      ['Film beni ağlattı.', 'FİLM be-Nİ ağ-lat-TI', 'أبكاني الفيلم.', 'فیلمەکە گریاندمی.']),
    related: ['ağlamak'],
  },
  {
    ...w('kızmak', 'kız-MAK', 'يغضب', 'تووڕەبوون',
      ['Bana kızdı.', 'ba-NA kız-DI', 'غضب منّي.', 'لێم تووڕە بوو.']),
    related: ['kızdırmak'],
    note: b(
      '⚠️ عكس العربية: من تغضب منه يأخذ حالة الاتّجاه لا الابتداء — «bana kızdı» لا «benden kızdı».',
      '⚠️ پێچەوانەی عەرەبی: حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('kızdırmak', 'kız-dır-MAK', 'يُغضب', 'تووڕەکردن',
      ['Onu kızdırma.', 'o-NU kız-dır-MA', 'لا تُغضبه.', 'تووڕەی مەکە.']),
    related: ['kızmak'],
  },
  {
    ...w('sevinmek', 'se-vin-MEK', 'يفرح', 'دڵخۆشبوون',
      ['Haberi duyunca çok sevindim.', 'ha-be-Rİ du-yun-CA ÇOK se-vin-DİM', 'فرحت كثيراً حين سمعت الخبر.', 'کاتێک هەواڵەکەم بیست زۆر دڵخۆش بووم.']),
    related: ['sevindirmek', 'sevinç'],
  },
  {
    ...w('sevindirmek', 'se-vin-dir-MEK', 'يُفرح', 'دڵخۆشکردن',
      ['Bu haber hepimizi sevindirdi.', 'BU ha-BER he-pi-mi-Zİ se-vin-dir-Dİ', 'أفرحنا هذا الخبر جميعاً.', 'ئەم هەواڵە هەموومانی دڵخۆش کرد.']),
    related: ['sevinmek'],
  },
  {
    ...w('üzülmek', 'ü-zül-MEK', 'يحزن', 'خەمبوون',
      ['Çok üzüldüm.', 'ÇOK ü-zül-DÜM', 'حزنت كثيراً.', 'زۆر خەمبار بووم.']),
    related: ['üzmek'],
    opposite: ['sevinmek'],
  },
  {
    ...w('üzmek', 'üz-MEK', 'يُحزن', 'خەمبارکردن',
      ['Seni üzmek istemedim.', 'se-Nİ üz-MEK is-te-me-DİM', 'لم أرد أن أُحزنك.', 'نەمویست خەمبارت بکەم.']),
    related: ['üzülmek'],
  },
  {
    ...w('bağırmak', 'ba-ğır-MAK', 'يصرخ', 'هاوارکردن',
      ['Lütfen bağırma.', 'lüt-FEN ba-ğır-MA', 'من فضلك لا تصرخ.', 'تکایە هاوار مەکە.']),
    note: b(
      'الصراخ على شخص يأخذ حالة الاتّجاه: «bana bağırdı».',
      'هاوارکردن بەسەر کەسێکدا حاڵەتی ئاراستە وەردەگرێت.',
    ),
  },
  {
    ...w('susmak', 'sus-MAK', 'يسكت', 'بێدەنگبوون',
      ['Herkes sustu.', 'her-KES sus-TU', 'سكت الجميع.', 'هەموو کەس بێدەنگ بوو.']),
    opposite: ['konuşmak'],
    note: b(
      '⚠️ لا تخلطها بـ «susamak» = يعطش. حرف واحد يغيّر المعنى تماماً.',
      '⚠️ تێکەڵی «susamak» = تینووبوون مەکە.',
    ),
  },
]);

export const A2_VOCABULARY_VERB_PAIRS: VocabItem[] = [
  ...CONTAINER,
  ...FIRE,
  ...BREAKING,
  ...MOVEMENT,
  ...WATER,
  ...PHYSICAL,
  ...STATES,
  ...FEELING,
];
