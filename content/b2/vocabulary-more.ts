import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * B2 vocabulary, expansion pass.
 *
 * The register a student needs to read a business page or a news article:
 * how money moves, how institutions work, and the language of public debate.
 */

/* ---------------- business, trade and money ---------------- */

const BUSINESS: VocabItem[] = [
  ...pack('finance', 'b2', 'noun', [
    w('girişim', 'gi-ri-ŞİM', 'مشروع ناشئ، مبادرة', 'دەستپێشخەری',
      ['Genç bir girişim kurdu.', 'GENÇ bir gi-ri-ŞİM kur-DU', 'أسّس مشروعاً ناشئاً.', 'دەستپێشخەرییەکی گەنجانەی دامەزراند.']),
    w('sermaye', 'ser-ma-YE', 'رأس مال', 'سەرمایە',
      ['Yeterli sermayemiz yok.', 'ye-ter-Lİ ser-ma-ye-MİZ yok', 'ليس لدينا رأس مال كافٍ.', 'سەرمایەی پێویستمان نییە.']),
    w('borsa', 'bor-SA', 'بورصة', 'بۆرسە',
      ['Borsa bugün yükseldi.', 'bor-SA bu-GÜN yük-sel-Dİ', 'ارتفعت البورصة اليوم.', 'بۆرسە ئەمڕۆ بەرزبووەوە.']),
    w('hisse', 'his-SE', 'سهم، حصّة', 'پشک',
      ['Şirketin hisseleri düştü.', 'şir-ke-TİN his-se-le-Rİ düş-TÜ', 'انخفضت أسهم الشركة.', 'پشکەکانی کۆمپانیاکە کەمیان کرد.']),
    w('durgunluk', 'dur-gun-LUK', 'ركود', 'کۆسپ',
      ['Ekonomide durgunluk var.', 'e-ko-no-mi-DE dur-gun-LUK var', 'هناك ركود في الاقتصاد.', 'کۆسپ لە ئابووریدا هەیە.']),
    w('ihracat', 'ih-ra-CAT', 'تصدير', 'هەناردە',
      ['İhracat geçen yıla göre arttı.', 'ih-ra-CAT ge-ÇEN yı-LA gö-RE art-TI', 'ارتفع التصدير مقارنة بالعام الماضي.', 'هەناردە بەراورد بە پار زیادی کرد.']),
    w('ithalat', 'it-ha-LAT', 'استيراد', 'هاوردە',
      ['İthalat vergileri yükseldi.', 'it-ha-LAT ver-gi-le-Rİ yük-sel-Dİ', 'ارتفعت رسوم الاستيراد.', 'باجی هاوردە بەرزبووەوە.']),
    w('gümrük', 'güm-RÜK', 'جمارك', 'گومرگ',
      ['Malları gümrükte bekliyor.', 'mal-la-RI güm-rük-TE bek-li-YOR', 'بضاعته تنتظر في الجمارك.', 'کاڵاکانی لە گومرگ چاوەڕوانن.']),
    w('pazarlama', 'pa-zar-la-MA', 'تسويق', 'بازاڕکردن',
      ['Pazarlama bütçesi arttırıldı.', 'pa-zar-la-MA büt-çe-Sİ art-tı-rıl-DI', 'زِيدت ميزانية التسويق.', 'بودجەی بازاڕکردن زیادکرا.']),
    w('tedarik', 'te-da-RİK', 'توريد، إمداد', 'دابینکردن',
      ['Tedarik zinciri aksadı.', 'te-da-RİK zin-ci-Rİ ak-sa-DI', 'تعطّلت سلسلة التوريد.', 'زنجیرەی دابینکردن تێکچوو.']),
    w('lojistik', 'lo-jis-TİK', 'لوجستيات', 'لۆجستیک',
      ['Lojistik maliyetleri yüksek.', 'lo-jis-TİK ma-li-yet-le-Rİ yük-SEK', 'تكاليف اللوجستيات مرتفعة.', 'تێچووی لۆجستیک بەرزە.']),
    w('denetim', 'de-ne-TİM', 'رقابة، تدقيق', 'چاودێری',
      ['Yıllık denetim yapıldı.', 'yıl-LIK de-ne-TİM ya-pıl-DI', 'أُجري التدقيق السنوي.', 'چاودێری ساڵانە ئەنجام درا.']),
  ]),
  ...pack('finance', 'b2', 'verb', [
    w('sözleşmek', 'söz-leş-MEK', 'يتّفق، يتعاقد', 'ڕێککەوتن',
      ['Fiyat üzerinde sözleştik.', 'fi-YAT ü-ze-rin-DE söz-leş-TİK', 'اتّفقنا على السعر.', 'لەسەر نرخەکە ڕێککەوتین.']),
  ]),
];

/* ---------------- civics and public debate ---------------- */

const CIVICS: VocabItem[] = pack('society', 'b2', 'noun', [
  w('mahremiyet', 'mah-re-mi-YET', 'خصوصية', 'تایبەتمەندی',
    ['Dijital mahremiyet tartışılıyor.', 'di-ji-TAL mah-re-mi-YET tar-tı-şı-lı-YOR', 'تُناقَش الخصوصية الرقمية.', 'تایبەتمەندی دیجیتاڵ باس دەکرێت.']),
  w('dezenformasyon', 'de-zen-for-mas-YON', 'تضليل معلوماتي', 'زانیاری هەڵە',
    ['Dezenformasyonla mücadele gerekiyor.', 'de-zen-for-mas-yon-LA mü-ca-de-LE ge-re-ki-YOR', 'لا بدّ من مكافحة التضليل.', 'پێویستە بەرەنگاری زانیاری هەڵە بکرێت.']),
  w('yargı', 'yar-GI', 'قضاء، سلطة قضائية', 'دادوەری',
    ['Yargı bağımsız olmalı.', 'yar-GI ba-ğım-SIZ ol-ma-LI', 'ينبغي أن يكون القضاء مستقلاً.', 'دەبێت دادوەری سەربەخۆ بێت.']),
  w('savcı', 'sav-CI', 'مدّعٍ عامّ', 'داواکار',
    ['Savcı soruşturma başlattı.', 'sav-CI so-ruş-tur-MA baş-lat-TI', 'فتح المدّعي العامّ تحقيقاً.', 'داواکار لێکۆڵینەوەی دەستپێکرد.']),
  w('sanık', 'sa-NIK', 'متّهم', 'تاوانبار',
    ['Sanık suçlamaları reddetti.', 'sa-NIK suç-la-ma-la-RI red-det-Tİ', 'أنكر المتّهم التهم.', 'تاوانبارەکە تۆمەتەکانی ڕەتکردەوە.']),
  w('tanık', 'ta-NIK', 'شاهد (في محكمة)', 'شایەت',
    ['Tanık mahkemede ifade verdi.', 'ta-NIK mah-ke-me-DE i-fa-DE ver-Dİ', 'أدلى الشاهد بإفادته في المحكمة.', 'شایەتەکە لە دادگا لێدوانی دا.']),
  w('delil', 'de-LİL', 'دليل', 'بەڵگە',
    ['Yeterli delil bulunamadı.', 'ye-ter-Lİ de-LİL bu-lu-na-ma-DI', 'لم يُعثر على دليل كافٍ.', 'بەڵگەی پێویست نەدۆزرایەوە.']),
  w('ceza', 'ce-ZA', 'عقوبة', 'سزا',
    ['Trafik cezası kesildi.', 'tra-FİK ce-za-SI ke-sil-Dİ', 'حُرِّرت مخالفة مرورية.', 'سزای هاتووچۆ بڕدرا.']),
  w('beraat', 'be-ra-AT', 'براءة', 'بێتاوانی',
    ['Mahkeme beraat kararı verdi.', 'mah-ke-ME be-ra-AT ka-ra-RI ver-Dİ', 'أصدرت المحكمة حكماً بالبراءة.', 'دادگا بڕیاری بێتاوانی دا.']),
  w('yürürlük', 'yü-rür-LÜK', 'سريان، نفاذ', 'جێبەجێبوون',
    ['Kanun yürürlüğe girdi.', 'ka-NUN yü-rür-lü-ĞE gir-Dİ', 'دخل القانون حيّز النفاذ.', 'یاساکە جێبەجێ کرا.']),
  w('tedbir', 'ted-BİR', 'إجراء، تدبير', 'ڕێوشوێن',
    ['Yeni tedbirler açıklandı.', 'ye-Nİ ted-bir-LER a-çık-lan-DI', 'أُعلنت إجراءات جديدة.', 'ڕێوشوێنی نوێ ڕاگەیەنران.']),
]);

/* ---------------- the body, in clinical register ---------------- */

const BODY: VocabItem[] = pack('body', 'b2', 'noun', [
  w('damar', 'da-MAR', 'وريد، شريان', 'خوێنبەر',
    ['Damar yolu açıldı.', 'da-MAR yo-LU a-çıl-DI', 'فُتح خطّ وريدي.', 'ڕێگای خوێنبەر کرایەوە.']),
  w('sinir', 'si-NİR', 'عصب', 'دەمار',
    ['Sinir sistemi karmaşıktır.', 'si-NİR sis-te-Mİ kar-ma-şık-TIR', 'الجهاز العصبي معقّد.', 'سیستەمی دەمار ئاڵۆزە.']),
  w('akciğer', 'ak-ci-ĞER', 'رئة', 'سییە',
    ['Sigara akciğerlere zarar verir.', 'si-ga-RA ak-ci-ğer-le-RE za-RAR ve-RİR', 'التدخين يضرّ الرئتين.', 'جگەرە زیان بە سییەکان دەگەیەنێت.']),
  w('böbrek', 'böb-REK', 'كلية', 'گورچیلە',
    ['Böbrek nakli yapıldı.', 'böb-REK nak-Lİ ya-pıl-DI', 'أُجريت عملية زرع كلية.', 'گواستنەوەی گورچیلە ئەنجام درا.']),
  w('karaciğer', 'ka-ra-ci-ĞER', 'كبد', 'جەرگ',
    ['Karaciğer değerleri normal.', 'ka-ra-ci-ĞER de-ğer-le-Rİ nor-MAL', 'قيم الكبد طبيعية.', 'بەهاکانی جەرگ ئاساییە.']),
  w('kas', 'KAS', 'عضلة', 'ماسولکە',
    ['Kas ağrısı geçmedi.', 'KAS ağ-rı-SI geç-me-Dİ', 'لم يزل ألم العضلات.', 'ئازاری ماسولکە نەڕۆیشت.']),
  w('iskelet', 'is-ke-LET', 'هيكل عظمي', 'ئێسک',
    ['İnsan iskeleti 206 kemikten oluşur.', 'in-SAN is-ke-le-Tİ i-Kİ yüz al-TI ke-mik-TEN o-lu-ŞUR', 'يتكوّن الهيكل البشري من 206 عظمة.', 'ئێسکی مرۆڤ لە ٢٠٦ ئێسک پێکدێت.']),
  w('doku', 'do-KU', 'نسيج', 'شانە',
    ['Doku örneği alındı.', 'do-KU ör-ne-Ğİ a-lın-DI', 'أُخذت عيّنة نسيجية.', 'نموونەی شانە وەرگیرا.']),
  w('organ', 'or-GAN', 'عضو', 'ئەندام',
    ['Organ bağışı hayat kurtarır.', 'or-GAN ba-ğı-ŞI ha-YAT kur-ta-RIR', 'التبرّع بالأعضاء ينقذ حياة.', 'بەخشینی ئەندام ژیان ڕزگار دەکات.']),
]);

/* ---------------- medicine ---------------- */

const MEDICINE: VocabItem[] = [
  ...pack('health', 'b2', 'noun', [
    w('virüs', 'vi-RÜS', 'فيروس', 'ڤایرۆس',
      ['Virüs hızla yayıldı.', 'vi-RÜS hız-LA ya-yıl-DI', 'انتشر الفيروس بسرعة.', 'ڤایرۆسەکە بە خێرایی بڵاوبووەوە.']),
    w('bakteri', 'bak-te-Rİ', 'بكتيريا', 'بەکتریا',
      ['Bu ilaç bakterilere karşı etkili.', 'BU i-LAÇ bak-te-ri-le-RE kar-ŞI et-ki-Lİ', 'هذا الدواء فعّال ضدّ البكتيريا.', 'ئەم دەرمانە بەرامبەر بەکتریا کاریگەرە.']),
    w('doz', 'DOZ', 'جرعة', 'دۆز',
      ['Günde iki doz alın.', 'gün-DE i-Kİ DOZ a-LIN', 'خذ جرعتين يومياً.', 'ڕۆژانە دوو دۆز وەربگرە.']),
    w('nöbet', 'nö-BET', 'نوبة، مناوبة', 'نۆرە',
      ['Doktor gece nöbetinde.', 'dok-TOR ge-CE nö-be-tin-DE', 'الطبيب في مناوبة ليلية.', 'پزیشکەکە لە نۆرەی شەودایە.']),
    w('ameliyathane', 'a-me-li-yat-ha-NE', 'غرفة العمليات', 'ژووری نەشتەرگەری',
      ['Hasta ameliyathaneye alındı.', 'has-TA a-me-li-yat-ha-ne-YE a-lın-DI', 'أُدخل المريض غرفة العمليات.', 'نەخۆشەکە بردرایە ژووری نەشتەرگەری.']),
  ]),
  ...pack('health', 'b2', 'adjective', [
    w('kronik', 'kro-NİK', 'مزمن', 'درێژخایەن',
      ['Kronik bir hastalığı var.', 'kro-NİK bir has-ta-lı-ĞI var', 'لديه مرض مزمن.', 'نەخۆشییەکی درێژخایەنی هەیە.']),
    w('bulaşıcı', 'bu-la-şı-CI', 'مُعدٍ', 'گوازراوە',
      ['Bulaşıcı hastalıklar artıyor.', 'bu-la-şı-CI has-ta-lık-LAR ar-tı-YOR', 'تزداد الأمراض المعدية.', 'نەخۆشییە گوازراوەکان زیاد دەکەن.']),
  ]),
];

export const B2_VOCABULARY_MORE: VocabItem[] = [
  ...BUSINESS,
  ...CIVICS,
  ...BODY,
  ...MEDICINE,
];
