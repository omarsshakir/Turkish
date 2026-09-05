import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * A1 vocabulary, second pass.
 *
 * The first A1 file covered the survival core. This one fills the gaps a
 * student hits in week three: the rest of the kitchen, the rest of the body,
 * the verbs that appear in every sentence, and the adjectives needed to say
 * anything about anything.
 */

/* ---------------- countries and nationalities ---------------- */

const COUNTRIES: VocabItem[] = pack('countries', 'a1', 'noun', [
  w('Türkiye', 'tür-ki-YE', 'تركيا', 'تورکیا',
    ['Türkiye’de yaşıyorum.', 'tür-ki-YE-de ya-şı-yo-RUM', 'أعيش في تركيا.', 'لە تورکیا دەژیم.']),
  w('Irak', 'ı-RAK', 'العراق', 'عێراق',
    ['Ailem Irak’ta yaşıyor.', 'a-i-LEM ı-rak-TA ya-şı-YOR', 'عائلتي تعيش في العراق.', 'خێزانەکەم لە عێراق دەژی.']),
  w('Suriye', 'su-ri-YE', 'سوريا', 'سووریا',
    ['Suriye’den geldik.', 'su-ri-YE-den gel-DİK', 'أتينا من سوريا.', 'لە سووریاوە هاتووین.']),
  w('Mısır', 'MI-sır', 'مصر', 'میسر',
    ['Mısır çok eski bir ülke.', 'MI-sır ÇOK es-Kİ bir ül-KE', 'مصر بلد قديم جداً.', 'میسر وڵاتێکی زۆر کۆنە.']),
  w('Almanya', 'al-man-YA', 'ألمانيا', 'ئەڵمانیا',
    ['Kardeşim Almanya’da çalışıyor.', 'kar-de-ŞİM al-man-YA-da ça-lı-şı-YOR', 'أخي يعمل في ألمانيا.', 'برام لە ئەڵمانیا کار دەکات.']),
  w('Türk', 'TÜRK', 'تركي', 'تورک',
    ['O bir Türk öğretmen.', 'O bir TÜRK öğ-ret-MEN', 'هو معلّم تركي.', 'ئەو مامۆستایەکی تورکە.'], 'adjective'),
  w('Arap', 'a-RAP', 'عربي', 'عەرەب',
    ['Arap arkadaşlarım var.', 'a-RAP ar-ka-daş-la-RIM var', 'لديّ أصدقاء عرب.', 'هاوڕێی عەرەبم هەیە.'], 'adjective'),
  w('Kürt', 'KÜRT', 'كردي', 'کورد',
    ['Kürt müziğini seviyorum.', 'KÜRT mü-zi-ği-Nİ se-vi-yo-RUM', 'أحبّ الموسيقى الكردية.', 'مۆسیقای کوردیم خۆشدەوێت.'], 'adjective'),
  w('yabancı', 'ya-ban-CI', 'أجنبي', 'بیانی',
    ['Burada çok yabancı var.', 'bu-ra-DA ÇOK ya-ban-CI var', 'هنا أجانب كثيرون.', 'لێرە زۆر بیانی هەیە.'], 'adjective'),
]);

/* ---------------- everyday verbs ---------------- */

const VERBS: VocabItem[] = pack('verbs', 'a1', 'verb', [
  w('duymak', 'duy-MAK', 'يسمع', 'بیستن',
    ['Sesini duyamıyorum.', 'se-si-Nİ du-ya-mı-yo-RUM', 'لا أسمع صوتك.', 'دەنگت نابیستم.']),
  w('vermek üzere olmak', 'ver-MEK ü-ze-RE ol-MAK', 'يوشك أن يعطي', 'خەریکە بدات',
    ['Cevap vermek üzereydi.', 'ce-VAP ver-MEK ü-ze-rey-Dİ', 'كان على وشك أن يجيب.', 'خەریک بوو وەڵام بداتەوە.'], 'phrase'),
  w('kalmak', 'kal-MAK', 'يبقى', 'مانەوە',
    ['Bu gece evde kalıyorum.', 'BU ge-CE ev-DE ka-lı-yo-RUM', 'أبقى في البيت الليلة.', 'ئەمشەو لە ماڵەوە دەمێنمەوە.']),
]);

/* ---------------- adjectives ---------------- */

const ADJECTIVES: VocabItem[] = pack('adjectives', 'a1', 'adjective', [
  w('doğru', 'doğ-RU', 'صحيح', 'ڕاست',
    ['Cevabın doğru.', 'ce-va-BIN doğ-RU', 'إجابتك صحيحة.', 'وەڵامەکەت ڕاستە.']),
  w('yanlış', 'yan-LIŞ', 'خطأ، خاطئ', 'هەڵە',
    ['Yanlış numara.', 'yan-LIŞ nu-ma-RA', 'رقم خطأ.', 'ژمارە هەڵەیە.']),
]);

/* ---------------- more food and drink ---------------- */

const FOOD: VocabItem[] = pack('food', 'a1', 'noun', [
  w('öğle yemeği', 'öğ-LE ye-me-Ğİ', 'غداء', 'نانی نیوەڕۆ',
    ['Öğle yemeğini nerede yiyorsun?', 'öğ-LE ye-me-ği-Nİ ne-re-DE yi-yor-SUN', 'أين تتغدّى؟', 'نانی نیوەڕۆ لە کوێ دەخۆیت؟'], 'phrase'),
  w('akşam yemeği', 'ak-ŞAM ye-me-Ğİ', 'عشاء', 'نانی ئێوارە',
    ['Akşam yemeği hazır.', 'ak-ŞAM ye-me-Ğİ ha-ZIR', 'العشاء جاهز.', 'نانی ئێوارە ئامادەیە.'], 'phrase'),
  w('biber', 'bi-BER', 'فلفل', 'بیبەر',
    ['Biber çok acı.', 'bi-BER ÇOK a-CI', 'الفلفل حارّ جداً.', 'بیبەرەکە زۆر تووندە.']),
]);

export const A1_VOCABULARY_MORE: VocabItem[] = [
  ...COUNTRIES,
  ...VERBS,
  ...ADJECTIVES,
  ...FOOD,
];
