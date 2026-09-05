import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * Vocabulary for the three connection categories that needed real examples:
 * recognisable-by-sound borrowings, shared Arabic roots, and borrowings whose
 * Turkish form was reshaped enough to hide the sound while the meaning held.
 */

/* ---------------- recognisable by sound ---------------- */

const SOUND: VocabItem[] = [
  ...pack('house', 'a2', 'noun', [
    w('sabun', 'sa-BUN', 'صابون', 'سابوون',
      ['Banyoda sabun kalmamış.', 'ban-yo-DA sa-BUN kal-ma-MIŞ', 'لم يبقَ صابون في الحمّام.', 'لە حەمامدا سابوون نەماوە.']),
    w('fincan', 'fin-CAN', 'فنجان', 'فنجان',
      ['Bir fincan kahve içelim.', 'BİR fin-CAN kah-VE i-çe-LİM', 'لنشرب فنجان قهوة.', 'با فنجانێک قاوە بخۆینەوە.']),
    w('sandık', 'san-DIK', 'صندوق', 'سندوق',
      ['Eski eşyalar sandıkta.', 'es-Kİ eş-ya-LAR san-dık-TA', 'الأغراض القديمة في الصندوق.', 'کەلوپەلە کۆنەکان لە سندوقەکەدان.']),
    w('mermer', 'mer-MER', 'رخام', 'مەڕمەڕ',
      ['Mutfak tezgâhı mermerden.', 'mut-FAK tez-gâ-HI mer-mer-DEN', 'سطح المطبخ من الرخام.', 'سەرەکەی چێشتخانە لە مەڕمەڕە.']),
    w('kandil', 'kan-DİL', 'قنديل، مصباح زيتي', 'قەندیل',
      ['Duvarda eski bir kandil asılı.', 'du-var-DA es-Kİ bir kan-DİL a-sı-LI', 'على الجدار قنديل قديم.', 'لەسەر دیوارەکە قەندیلێکی کۆن هەڵواسراوە.']),
  ]),
  ...pack('food', 'a2', 'noun', [
    w('nane', 'na-NE', 'نعناع', 'پونگ',
      ['Çaya biraz nane koy.', 'ça-YA bi-RAZ na-NE koy', 'ضع قليلاً من النعناع في الشاي.', 'کەمێک پونگ بخە ناو چاکەوە.']),
    w('safran', 'saf-RAN', 'زعفران', 'زەعفەران',
      ['Safran çok pahalı bir baharat.', 'saf-RAN ÇOK pa-ha-LI bir ba-ha-RAT', 'الزعفران بهار غالٍ جداً.', 'زەعفەران بەهاراتێکی زۆر گرانە.']),
    w('ceviz', 'ce-VİZ', 'جوز', 'گوێز',
      ['Tatlının üstüne ceviz serpti.', 'tat-lı-NIN üs-tü-NE ce-VİZ serp-Tİ', 'رشّ الجوز فوق الحلوى.', 'گوێزی بەسەر شیرینییەکەدا وردکرد.']),
    w('fıstık', 'fıs-TIK', 'فستق', 'فستق',
      ['Antep fıstığı meşhurdur.', 'an-TEP fıs-tı-ĞI meş-hur-DUR', 'فستق عنتاب مشهور.', 'فستقی ئەنتەپ بەناوبانگە.']),
    w('limon', 'li-MON', 'ليمون', 'لیمۆ',
      ['Çaya limon sıktım.', 'ça-YA li-MON sık-TIM', 'عصرت ليموناً في الشاي.', 'لیمۆم خستە ناو چاکەوە.']),
    w('helva', 'hel-VA', 'حلوى، حلاوة', 'حەڵوا',
      ['İrmik helvası yaptık.', 'ir-MİK hel-va-SI yap-TIK', 'صنعنا حلاوة السميد.', 'حەڵوای سمیدمان دروستکرد.']),
    w('şerbet', 'şer-BET', 'شربات، شراب محلّى', 'شەربەت',
      ['Baklavanın şerbeti çok tatlı.', 'bak-la-va-NIN şer-be-Tİ ÇOK tat-LI', 'شربات البقلاوة حلو جداً.', 'شەربەتی بەقلاوەکە زۆر شیرینە.']),
  ]),
  ...pack('society', 'b2', 'noun', [
    w('tabut', 'ta-BUT', 'تابوت', 'تابووت',
      ['Tabut törenle taşındı.', 'ta-BUT tö-ren-LE ta-şın-DI', 'حُمل التابوت في مراسم.', 'تابووتەکە بە ڕێوڕەسم هەڵگیرا.']),
  ]),
];

/* ---------------- shared Arabic roots ---------------- */

const ROOTS: VocabItem[] = [
  ...pack('work', 'b2', 'noun', [
    w('kâtip', 'kâ-TİP', 'كاتب، موظّف كتابي', 'نووسەر',
      ['Mahkeme kâtibi tutanağı yazdı.', 'mah-ke-ME kâ-ti-Bİ tu-ta-na-ĞI yaz-DI', 'كتب كاتب المحكمة المحضر.', 'نووسەری دادگا تۆمارەکەی نووسی.']),
  ]),
  ...pack('law', 'b2', 'noun', [
    w('katil', 'kaa-TİL', 'قاتل', 'بکوژ',
      ['Katil yakalandı.', 'kaa-TİL ya-ka-lan-DI', 'قُبض على القاتل.', 'بکوژەکە دەستگیر کرا.']),
    w('teslim', 'tes-LİM', 'تسليم', 'ڕادەستکردن',
      ['Belgeleri teslim ettim.', 'bel-ge-le-Rİ tes-LİM et-TİM', 'سلّمت الوثائق.', 'بەڵگەنامەکانم ڕادەست کرد.']),
  ]),
  ...pack('academic', 'c1', 'noun', [
    w('hikmet', 'hik-MET', 'حكمة', 'دانایی',
      ['Bu sözde büyük hikmet var.', 'BU söz-DE bü-YÜK hik-MET var', 'في هذا القول حكمة كبيرة.', 'لەم قسەیەدا دانایەکی گەورە هەیە.']),
    w('âlim', 'â-LİM', 'عالِم', 'زانا',
      ['Devrinin en büyük âlimiydi.', 'dev-ri-NİN EN bü-YÜK â-li-miy-Dİ', 'كان أكبر عالم في عصره.', 'گەورەترین زانای سەردەمی خۆی بوو.']),
    w('cebir', 'ce-BİR', 'جبر (رياضيات)', 'جەبر',
      ['Cebir dersini seviyorum.', 'ce-BİR der-si-Nİ se-vi-yo-RUM', 'أحبّ درس الجبر.', 'وانەی جەبرم خۆشدەوێت.']),
  ]),
  ...pack('school', 'b2', 'noun', [
    w('muallim', 'mu-al-LİM', 'معلّم (قديم/رسمي)', 'مامۆستا',
      ['Eskiden öğretmene muallim denirdi.', 'es-ki-DEN öğ-ret-me-NE mu-al-LİM de-nir-Dİ', 'كان المعلّم يُسمّى قديماً muallim.', 'پێشتر بە مامۆستا muallim دەوترا.']),
  ]),
  ...pack('greetings', 'b2', 'noun', [
    w('selamet', 'se-la-MET', 'سلامة', 'سەلامەت',
      ['Güle güle, selametle.', 'gü-LE gü-LE se-la-met-LE', 'مع السلامة.', 'بە خێر و سەلامەت.']),
  ]),
];

/* ---------------- meaning survived, sound drifted ---------------- */

const RESHAPED: VocabItem[] = [
  ...pack('academic', 'b2', 'noun', [
    w('tesir', 'te-SİR', 'تأثير', 'کاریگەری',
      ['İlacın tesiri hemen başladı.', 'i-la-CIN te-si-Rİ he-MEN baş-la-DI', 'بدأ تأثير الدواء فوراً.', 'کاریگەری دەرمانەکە دەستبەجێ دەستیپێکرد.']),
    w('tespit', 'tes-PİT', 'تثبيت، تحديد', 'دیاریکردن',
      ['Sorunun kaynağını tespit ettik.', 'so-ru-NUN kay-na-ğı-NI tes-PİT et-TİK', 'حدّدنا مصدر المشكلة.', 'سەرچاوەی کێشەکەمان دیاری کرد.']),
    w('tahmin', 'tah-MİN', 'تخمين، توقّع', 'مەزەندە',
      ['Hava tahmini yağmurlu diyor.', 'ha-VA tah-mi-Nİ yağ-mur-LU di-YOR', 'توقّعات الطقس تقول ممطر.', 'پێشبینی کەشوهەوا دەڵێت بارانییە.']),
    w('tercih', 'ter-CİH', 'ترجيح، تفضيل', 'هەڵبژاردن',
      ['Çayı kahveye tercih ederim.', 'ça-YI kah-ve-YE ter-CİH e-de-RİM', 'أفضّل الشاي على القهوة.', 'چا بەسەر قاوەدا هەڵدەبژێرم.']),
    w('tesadüf', 'te-sa-DÜF', 'مصادفة', 'ڕێکەوت',
      ['Onunla tesadüfen karşılaştım.', 'o-nun-LA te-sa-dü-FEN kar-şı-laş-TIM', 'التقيته مصادفةً.', 'بە ڕێکەوت پێی گەیشتم.']),
  ]),
  ...pack('work', 'b2', 'noun', [
    w('tesis', 'te-SİS', 'تأسيس، منشأة', 'دامەزراندن',
      ['Yeni tesis geçen yıl açıldı.', 'ye-Nİ te-SİS ge-ÇEN YIL a-çıl-DI', 'افتُتحت المنشأة الجديدة العام الماضي.', 'دامەزراوە نوێیەکە پار کرایەوە.']),
    w('mahsul', 'mah-SUL', 'محصول', 'بەرهەم',
      ['Bu yılki mahsul bereketli.', 'BU yıl-Kİ mah-SUL be-re-ket-Lİ', 'محصول هذا العام وفير.', 'بەرهەمی ئەمساڵ بەپیتە.']),
    w('mühür', 'mü-HÜR', 'ختم', 'مۆر',
      ['Belgeye mühür vuruldu.', 'bel-ge-YE mü-HÜR vu-rul-DU', 'خُتمت الوثيقة.', 'بەڵگەنامەکە مۆر کرا.']),
  ]),
  ...pack('adjectives', 'b2', 'adjective', [
    w('mühim', 'mü-HİM', 'مهمّ', 'گرنگ',
      ['Çok mühim bir konu.', 'ÇOK mü-HİM bir ko-NU', 'موضوع مهمّ جداً.', 'بابەتێکی زۆر گرنگ.']),
  ]),
  ...pack('media', 'b2', 'noun', [
    w('fıkra', 'fık-RA', 'نكتة؛ فقرة قانونية', 'گاڵتە؛ بڕگە',
      ['Güzel bir fıkra anlattı.', 'gü-ZEL bir fık-RA an-lat-TI', 'حكى نكتة جميلة.', 'گاڵتەیەکی جوانی گێڕایەوە.']),
  ]),
];

export const ARABIC_LINK_VOCABULARY_2: VocabItem[] = [
  ...SOUND,
  ...ROOTS,
  ...RESHAPED,
];
