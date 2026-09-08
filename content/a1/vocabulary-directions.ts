import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * A1 vocabulary: directions and position.
 *
 * This was a genuine hole. The curriculum could ask "where is it?" — `nerede`,
 * `nereye` and `nereden` were all there — and had no way to answer. Not one of
 * `sağ`, `sol`, `kuzey`, `güney`, `doğu`, `batı`, `ön`, `arka`, `üst`, `alt`,
 * `iç`, `dış` existed, so a student could take the directions conversation and
 * still not be able to say "on the left".
 *
 * Two things make this group hard for an Arabic or Kurdish speaker, and both
 * are handled in the examples rather than asserted:
 *
 *   1. These are NOUNS, not prepositions. Arabic says أمام البيت with a
 *      preposition; Turkish says `evin önünde` — "the house's front-at". The
 *      possessive comes first and the case ending last, and every example
 *      below shows the whole shape rather than the bare word.
 *   2. The case ending carries the meaning that a preposition carries in
 *      Arabic: `sağa` to the right, `sağda` on the right, `sağdan` from the
 *      right. One word, three jobs.
 *
 * `iç` and `dış` are listed even though `içeri` and `dışarı` already exist:
 * the pair is not a duplicate. `içeri gel` is "come inside" — a movement —
 * while `çantanın içinde` is "inside the bag" — a position. Students who only
 * meet `içeri` reach for it in both, and it is wrong in the second.
 */

/* ---------------- the compass ---------------- */

const COMPASS: VocabItem[] = pack('directions', 'a1', 'noun', [
  {
    ...w('kuzey', 'ku-ZEY', 'شمال', 'باکوور',
      ['Kuzeyde hava soğuk.', 'ku-zey-DE ha-VA so-UK', 'الطقس بارد في الشمال.', 'لە باکوور کەشوهەوا ساردە.']),
    opposite: ['güney'],
  },
  {
    ...w('güney', 'gü-NEY', 'جنوب', 'باشوور',
      ['Güneyde deniz var.', 'gü-ney-DE de-NİZ VAR', 'يوجد بحر في الجنوب.', 'لە باشوور دەریا هەیە.']),
    opposite: ['kuzey'],
  },
  {
    ...w('doğu', 'do-U', 'شرق', 'ڕۆژهەڵات',
      ['Güneş doğudan doğar.', 'gü-NEŞ do-u-DAN do-AR', 'تشرق الشمس من الشرق.', 'خۆر لە ڕۆژهەڵاتەوە هەڵدێت.']),
    opposite: ['batı'],
  },
  {
    ...w('batı', 'ba-TI', 'غرب', 'ڕۆژئاوا',
      ['Güneş batıdan batar.', 'gü-NEŞ ba-tı-DAN ba-TAR', 'تغرب الشمس في الغرب.', 'خۆر لە ڕۆژئاوا ئاوا دەبێت.']),
    opposite: ['doğu'],
  },
]);

/* ---------------- left, right and the way ahead ---------------- */

const SIDES: VocabItem[] = pack('directions', 'a1', 'noun', [
  {
    ...w('sağ', 'SAA', 'يمين', 'ڕاست',
      ['Sağa dön.', 'sa-A DÖN', 'انعطف يميناً.', 'بەرەو ڕاست بسوڕێوە.']),
    opposite: ['sol'],
    note: b(
      'ثلاث نهايات، ثلاثة معانٍ: sağa إلى اليمين، sağda على اليمين، sağdan من جهة اليمين. الكلمة واحدة والنهاية هي التي تحمل المعنى الذي يحمله حرف الجرّ في العربية.',
      'سێ کۆتایی، سێ واتا: sağa بەرەو ڕاست، sağda لە لای ڕاست، sağdan لە لای ڕاستەوە. وشەکە یەکە و کۆتاییەکە واتاکە هەڵدەگرێت.',
    ),
  },
  {
    ...w('sol', 'SOL', 'يسار', 'چەپ',
      ['Solda bir market var.', 'sol-DA BİR mar-KET VAR', 'يوجد سوبرماركت على اليسار.', 'لە لای چەپ مارکێتێک هەیە.']),
    opposite: ['sağ'],
  },
  {
    ...w('ileri', 'i-le-Rİ', 'إلى الأمام، متقدّم', 'بەرەو پێش',
      ['Biraz ileri git.', 'bi-RAZ i-le-Rİ GİT', 'تقدّم قليلاً إلى الأمام.', 'کەمێک بەرەو پێش بڕۆ.'],
      'adverb'),
    opposite: ['geri'],
  },
  {
    ...w('geri', 'ge-Rİ', 'إلى الخلف، رجوعاً', 'بەرەو دوا',
      ['Lütfen geri gel.', 'lüt-FEN ge-Rİ GEL', 'من فضلك ارجع.', 'تکایە بگەڕێوە.'],
      'adverb'),
    opposite: ['ileri'],
  },
  {
    ...w('yukarı', 'yu-ka-RI', 'إلى الأعلى، فوق', 'بەرەو سەرەوە',
      ['Yukarı çık.', 'yu-ka-RI ÇIK', 'اصعد إلى الأعلى.', 'بڕۆ سەرەوە.'],
      'adverb'),
    opposite: ['aşağı'],
  },
  {
    ...w('aşağı', 'a-şa-I', 'إلى الأسفل، تحت', 'بەرەو خوارەوە',
      ['Aşağı in.', 'a-şa-I İN', 'انزل إلى الأسفل.', 'وەرە خوارەوە.'],
      'adverb'),
    opposite: ['yukarı'],
  },
]);

/* ---------------- position words, and the shape they need ---------------- */

const POSITION: VocabItem[] = pack('directions', 'a1', 'noun', [
  {
    ...w('ön', 'ÖN', 'الأمام، مقدّمة', 'پێشەوە',
      ['Evin önünde bir ağaç var.', 'e-VİN ö-nün-DE BİR a-AÇ VAR', 'أمام البيت شجرة.', 'لە بەردەم ماڵەکەدا دارێک هەیە.']),
    opposite: ['arka'],
    note: b(
      'العربية تقول «أمام البيت» بحرف جرّ. التركية تقول evin önünde أي «البيتِ أمامِـه‌ـفي»: المضاف إليه أولاً، ثم الكلمة، ثم النهاية. هذا الترتيب هو القاعدة لكل كلمات هذا القسم.',
      'عەرەبی دەڵێت «أمام البيت» بە ئامرازی جێ. تورکی دەڵێت evin önünde واتە «ماڵەکە + پێش + ی + لە». ئەم ڕیزبەندییە یاسای هەموو ئەم وشانەیە.',
    ),
  },
  {
    ...w('arka', 'ar-KA', 'الخلف، مؤخّرة', 'دواوە',
      ['Arkada oturalım.', 'ar-ka-DA o-tu-ra-LIM', 'لنجلس في الخلف.', 'با لە دواوە دانیشین.']),
    opposite: ['ön'],
  },
  {
    ...w('üst', 'ÜST', 'الأعلى، فوق', 'سەرەوە',
      ['Kitap masanın üstünde.', 'ki-TAP ma-sa-NIN üs-tün-DE', 'الكتاب فوق الطاولة.', 'کتێبەکە لەسەر مێزەکەیە.']),
    opposite: ['alt'],
  },
  {
    ...w('alt', 'ALT', 'الأسفل، تحت', 'خوارەوە',
      ['Çanta masanın altında.', 'çan-TA ma-sa-NIN al-tın-DA', 'الحقيبة تحت الطاولة.', 'جانتاکە لەژێر مێزەکەیە.']),
    opposite: ['üst'],
  },
  {
    ...w('iç', 'İÇ', 'الداخل، جوف', 'ناوەوە',
      ['Çantanın içinde ne var?', 'çan-ta-NIN i-çin-DE NE VAR', 'ماذا يوجد داخل الحقيبة؟', 'چی لەناو جانتاکەدایە؟']),
    opposite: ['dış'],
    note: b(
      'لا تخلطه بـ içeri. الفرق حركة مقابل موضع: içeri gel «تعال إلى الداخل» حركة، أما çantanın içinde «داخل الحقيبة» فموضع.',
      'تێکەڵی içeri مەکە. جیاوازییەکە جوڵە بەرامبەر شوێنە: içeri gel «وەرە ژوورەوە» جوڵەیە، بەڵام çantanın içinde «لەناو جانتاکە» شوێنە.',
    ),
  },
  {
    ...w('dış', 'DIŞ', 'الخارج', 'دەرەوە',
      ['Şehrin dışında oturuyorum.', 'şeh-RİN dı-şın-DA o-tu-ru-YO-rum', 'أسكن خارج المدينة.', 'لە دەرەوەی شارەکە دەژیم.']),
    opposite: ['iç'],
  },
  {
    ...w('yan', 'YAN', 'الجانب، بجانب', 'لاتەنیشت',
      ['Bankanın yanında bir kafe var.', 'ban-ka-NIN ya-nın-DA BİR ka-FE VAR', 'بجانب البنك يوجد مقهى.', 'لەتەنیشت بانکەکە کافێیەک هەیە.']),
  },
  {
    ...w('orta', 'or-TA', 'الوسط', 'ناوەڕاست',
      ['Masayı odanın ortasına koy.', 'ma-sa-YI o-da-NIN or-ta-sı-NA KOY', 'ضع الطاولة في وسط الغرفة.', 'مێزەکە بخە ناوەڕاستی ژوورەکە.']),
  },
]);

/* ---------------- getting there ---------------- */

const MOVEMENT: VocabItem[] = pack('directions', 'a1', 'verb', [
  {
    ...w('sapmak', 'sap-MAK', 'ينعطف، يحيد', 'لادان',
      ['İkinci sokaktan sağa sap.', 'i-kin-DJİ so-kak-TAN sa-A SAP', 'انعطف يميناً من الشارع الثاني.', 'لە دووەم شەقامەوە بەرەو ڕاست لابدە.']),
  },
  {
    ...w('varmak', 'var-MAK', 'يصل', 'گەیشتن',
      ['Otobüs saat üçte varıyor.', 'o-to-BÜS sa-AT ÜÇ-te va-rı-YOR', 'يصل الباص في الساعة الثالثة.', 'پاسەکە کاتژمێر سێ دەگات.']),
  },
  {
    ...w('kavşak', 'kav-ŞAK', 'تقاطع طرق', 'چوارڕیان',
      ['Kavşakta sola dön.', 'kav-şak-TA so-LA DÖN', 'عند التقاطع انعطف يساراً.', 'لە چوارڕیانەکە بەرەو چەپ بسوڕێوە.'],
      'noun'),
  },
  {
    ...w('adres', 'ad-RES', 'عنوان', 'ناونیشان',
      ['Adresi yazar mısınız?', 'ad-re-Sİ ya-ZAR mı-sı-NIZ', 'هل تكتب العنوان من فضلك؟', 'ناونیشانەکە دەنووسیت؟'],
      'noun'),
  },
]);

export const A1_VOCABULARY_DIRECTIONS: VocabItem[] = [
  ...COMPASS,
  ...SIDES,
  ...POSITION,
  ...MOVEMENT,
];
