import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A2 vocabulary: the second tier of core verbs.
 *
 * The same coverage audit that found the A1 gaps found these. They are one
 * step less frequent but no less necessary — and two of them are structural
 * rather than lexical:
 *
 *   `etmek`  — the auxiliary that turns hundreds of Arabic-derived nouns into
 *              verbs (`teşekkür etmek`, `kabul etmek`). Learning it once
 *              unlocks a whole class of vocabulary for an Arabic speaker.
 *   `çekmek` — the verb with the widest idiomatic range in Turkish; the
 *              literal sense is only the beginning.
 */

/* ---------------- the auxiliary ---------------- */

const AUXILIARY: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('etmek', 'et-MEK', 'يفعل (فعل مساعد)', 'کردن (کرداری یاریدەدەر)',
      ['Sana teşekkür ederim.', 'sa-NA te-şek-KÜR e-de-RİM', 'أشكرك.', 'سوپاست دەکەم.']),
    collocations: ['teşekkür etmek', 'kabul etmek', 'devam etmek', 'yardım etmek'],
    note: b(
      'مفتاح مهم للعربي: كثير من الأسماء العربية في التركية تصير أفعالاً بإضافة «etmek» — «kabul» ← «kabul etmek»، «devam» ← «devam etmek». تعلّم الاسم فتكسب الفعل معه.',
      'کلیلێکی گرنگ: زۆرێک لە ناوە عەرەبییەکان لە تورکیدا بە «etmek» دەبنە کردار — «kabul» ← «kabul etmek».',
    ),
  },
  {
    ...w('yardım etmek', 'yar-DIM et-MEK', 'يساعد', 'یارمەتیدان',
      ['Bana yardım eder misin?', 'ba-NA yar-DIM e-DER mi-SİN', 'هل تساعدني؟', 'یارمەتیم دەدەیت؟']),
    note: b(
      '⚠️ الشخص المُساعَد يأخذ حالة الاتّجاه: «bana yardım etti» لا «beni yardım etti».',
      '⚠️ ئەو کەسەی یارمەتی دەدرێت حاڵەتی ئاراستە وەردەگرێت: «bana yardım etti».',
    ),
  },
]);

/* ---------------- pushing and pulling ---------------- */

const FORCE: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('çekmek', 'çek-MEK', 'يسحب، يشدّ؛ يلتقط صورة', 'ڕاکێشان؛ وێنەگرتن',
      ['Sandalyeyi biraz çek.', 'san-dal-ye-Yİ bi-RAZ çek', 'اسحب الكرسي قليلاً.', 'کورسییەکە کەمێک ڕابکێشە.']),
    senses: [
      sense('يلتقط صورة', 'وێنە گرتن',
        ['Bir fotoğraf çekelim.', 'BİR fo-toğ-RAF çe-ke-LİM', 'لنلتقط صورة.', 'با وێنەیەک بگرین.']),
      sense('يعاني، يتحمّل', 'کێشان، بەرگەگرتن',
        ['Çok sıkıntı çektik.', 'ÇOK sı-kın-TI çek-TİK', 'عانينا كثيراً.', 'زۆر ناڕەحەتیمان کێشا.']),
    ],
    opposite: ['itmek'],
    collocations: ['fotoğraf çekmek', 'dikkat çekmek', 'sıkıntı çekmek'],
  },
  {
    ...w('itmek', 'it-MEK', 'يدفع', 'پاڵنان',
      ['Kapıyı ittim ama açılmadı.', 'ka-pı-YI it-TİM a-MA a-çıl-ma-DI', 'دفعت الباب لكنه لم يُفتح.', 'دەرگاکەم پاڵنا بەڵام نەکرایەوە.']),
    opposite: ['çekmek'],
  },
  {
    ...w('atmak', 'at-MAK', 'يرمي، يلقي', 'هاویشتن',
      ['Çöpü kutuya attım.', 'çö-PÜ ku-tu-YA at-TIM', 'رميت القمامة في السلّة.', 'زبڵەکەم خستە ناو سەبەتەکە.']),
    collocations: ['çöp atmak', 'adım atmak', 'imza atmak'],
  },
  {
    ...w('taşımak', 'ta-şı-MAK', 'يحمل، ينقل', 'هەڵگرتن، گواستنەوە',
      ['Kutuları yukarı taşıdık.', 'ku-tu-la-RI yu-ka-RI ta-şı-DIK', 'نقلنا الصناديق إلى الأعلى.', 'سندوقەکانمان بردە سەرەوە.']),
    related: ['taşınmak'],
    note: b(
      '«taşımak» ينقل شيئاً، و«taşınmak» ينتقل هو نفسه إلى بيت جديد.',
      '«taşımak» شتێک دەگوازێتەوە، «taşınmak» خۆی دەگوازێتەوە بۆ ماڵێکی نوێ.',
    ),
  },
  {
    ...w('çıkarmak', 'çı-kar-MAK', 'يُخرج؛ يخلع', 'دەرهێنان؛ داکەندن',
      ['Ayakkabılarını çıkar.', 'a-yak-ka-bı-la-rı-NI çı-KAR', 'اخلع حذاءك.', 'پێڵاوەکانت دابکەنە.']),
    opposite: ['giymek'],
    collocations: ['ayakkabı çıkarmak', 'ders çıkarmak'],
  },
]);

/* ---------------- daily routine ---------------- */

const ROUTINE: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('uyanmak', 'u-yan-MAK', 'يستيقظ', 'خەبەربوونەوە',
      ['Her sabah yedide uyanıyorum.', 'HER sa-BAH ye-di-DE u-ya-nı-yo-RUM', 'أستيقظ كل صباح في السابعة.', 'هەموو بەیانییەک لە حەوتدا خەبەر دەبمەوە.']),
    opposite: ['uyumak'],
  },
  {
    ...w('temizlemek', 'te-miz-le-MEK', 'ينظّف', 'پاککردنەوە',
      ['Odamı temizledim.', 'o-da-MI te-miz-le-DİM', 'نظّفت غرفتي.', 'ژوورەکەمم پاک کردەوە.']),
    related: ['temiz'],
  },
  {
    ...w('seçmek', 'seç-MEK', 'يختار', 'هەڵبژاردن',
      ['İkisinden birini seç.', 'i-ki-sin-DEN bi-ri-Nİ seç', 'اختر واحداً من الاثنين.', 'یەکێک لە دووانەکە هەڵبژێرە.']),
    collocations: ['seçim yapmak', 'ders seçmek'],
  },
  {
    ...w('ödemek', 'ö-de-MEK', 'يدفع (مالاً)', 'پارەدان',
      ['Faturayı ödedim.', 'fa-tu-ra-YI ö-de-DİM', 'دفعت الفاتورة.', 'پسووڵەکەم دا.']),
    collocations: ['fatura ödemek', 'kira ödemek', 'nakit ödemek'],
    note: b(
      '⚠️ «ödemek» للمال فقط. دفع الباب هو «itmek».',
      '⚠️ «ödemek» تەنیا بۆ پارەیە. پاڵنانی دەرگا «itmek»ە.',
    ),
  },
]);

/* ---------------- winning and teaching ---------------- */

const OUTCOME: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('kazanmak', 'ka-zan-MAK', 'يربح، يكسب', 'بردنەوە، بەدەستهێنان',
      ['Maçı biz kazandık.', 'ma-ÇI BİZ ka-zan-DIK', 'نحن ربحنا المباراة.', 'یارییەکەمان بردەوە.']),
    opposite: ['kaybetmek'],
    collocations: ['para kazanmak', 'maç kazanmak', 'güven kazanmak'],
  },
  {
    ...w('öğretmek', 'öğ-ret-MEK', 'يعلّم', 'فێرکردن',
      ['Bize Türkçe öğretiyor.', 'bi-ZE türk-ÇE öğ-re-ti-YOR', 'يعلّمنا التركية.', 'تورکیمان فێردەکات.']),
    opposite: ['öğrenmek'],
    note: b(
      'الشخص المتعلّم يأخذ حالة الاتّجاه: «bana öğretti» = علّمني.',
      'ئەو کەسەی فێردەکرێت حاڵەتی ئاراستە وەردەگرێت: «bana öğretti».',
    ),
  },
  {
    ...w('cevaplamak', 'ce-vap-la-MAK', 'يجيب', 'وەڵامدانەوە',
      ['Sorularını cevapladım.', 'so-ru-la-rı-NI ce-vap-la-DIM', 'أجبت عن أسئلته.', 'وەڵامی پرسیارەکانیم دایەوە.']),
    related: ['cevap'],
    note: b(
      'بديل شائع في الكلام: «cevap vermek» — والمعنى واحد.',
      'جێگرەوەیەکی باو لە قسەدا: «cevap vermek» — واتاکە یەکە.',
    ),
  },
]);

export const A2_VOCABULARY_VERBS: VocabItem[] = [
  ...AUXILIARY,
  ...FORCE,
  ...ROUTINE,
  ...OUTCOME,
];
