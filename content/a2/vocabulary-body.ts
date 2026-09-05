import type { VocabItem } from '@/types/content';
import { b, pack, sense, w } from '../shared/helpers';

/**
 * A2 vocabulary: the rest of the body, and what you wear on it.
 *
 * A1 covers the parts a beginner points at (`el`, `göz`, `baş`); this is the
 * layer a student needs at the doctor's — `omuz`, `bilek`, `boğaz` — plus the
 * accessories and clothing verbs that were missing from an otherwise complete
 * clothing set.
 *
 * Several of these differ from the A1 word only in a suffix or a vowel, so the
 * notes point at the confusions rather than repeating the translation.
 */

/* ---------------- arms and legs ---------------- */

const LIMBS: VocabItem[] = pack('body', 'a2', 'noun', [
  {
    ...w('omuz', 'o-MUZ', 'كتف', 'شان',
      ['Omzum ağrıyor.', 'om-ZUM ağ-rı-YOR', 'كتفي يؤلمني.', 'شانم دەیەشێت.']),
    note: b(
      'تسقط الحركة عند الإضافة: omuz → omzum. نمط يتكرّر في burun→burnum و karın→karnım.',
      'دەنگدار دەکەوێت لە کاتی زیادکردندا: omuz → omzum.',
    ),
  },
  {
    ...w('dirsek', 'dir-SEK', 'مرفق', 'ئانیشک',
      ['Dirseğini masaya koyma.', 'dir-se-ği-Nİ ma-sa-YA koy-MA', 'لا تضع مرفقك على الطاولة.', 'ئانیشکت مەخە سەر مێزەکە.']),
  },
  {
    ...w('bilek', 'bi-LEK', 'معصم؛ كاحل', 'مەچەک',
      ['Bileğim burkuldu.', 'bi-le-ĞİM bur-kul-DU', 'التوى معصمي.', 'مەچەکم بادرا.']),
    collocations: ['el bileği', 'ayak bileği'],
    note: b(
      'الكلمة نفسها للمعصم والكاحل — يفصلهما «el bileği» و«ayak bileği».',
      'هەمان وشە بۆ مەچەکی دەست و پێ — بە «el bileği» و «ayak bileği» جیا دەکرێنەوە.',
    ),
  },
  {
    ...w('diz', 'DİZ', 'ركبة', 'ئەژنۆ',
      ['Dizim şişti.', 'di-ZİM şiş-Tİ', 'انتفخت ركبتي.', 'ئەژنۆم ئاوسا.']),
  },
  {
    ...w('topuk', 'to-PUK', 'كعب', 'پاژنە',
      ['Topuğum su topladı.', 'to-pu-ĞUM SU top-la-DI', 'تقرّح كعبي.', 'پاژنەم ئاو کۆکردەوە.']),
  },
  {
    ...w('tırnak', 'tır-NAK', 'ظفر', 'نینۆک',
      ['Tırnaklarını kes.', 'tır-nak-la-rı-NI kes', 'قصّ أظافرك.', 'نینۆکەکانت ببڕە.']),
    collocations: ['tırnak kesmek', 'tırnak yemek'],
  },
  {
    ...w('bel', 'BEL', 'خصر، أسفل الظهر', 'کەمەر',
      ['Belim tutuldu.', 'be-LİM tu-tul-DU', 'شُدّ ظهري.', 'کەمەرم گیرا.']),
    collocations: ['bel ağrısı'],
  },
  {
    ...w('göğüs', 'gö-ĞÜS', 'صدر', 'سنگ',
      ['Göğsümde bir ağrı var.', 'göğ-süm-DE bir ağ-RI var', 'عندي ألم في الصدر.', 'ئازارێکم لە سنگدا هەیە.']),
    note: b(
      'تسقط الحركة أيضاً: göğüs → göğsüm.',
      'دەنگدارەکە دەکەوێت: göğüs → göğsüm.',
    ),
  },
]);

/* ---------------- the face ---------------- */

const FACE: VocabItem[] = pack('body', 'a2', 'noun', [
  {
    ...w('alın', 'a-LIN', 'جبين', 'ناوچەوان',
      ['Alnında ter vardı.', 'al-nın-DA TER var-DI', 'كان على جبينه عرق.', 'ئارەق لە ناوچەوانی بوو.']),
  },
  {
    ...w('kaş', 'KAŞ', 'حاجب', 'برۆ',
      ['Kaşlarını kaldırdı.', 'kaş-la-rı-NI kal-dır-DI', 'رفع حاجبيه.', 'برۆکانی بەرز کردەوە.']),
  },
  {
    ...w('kirpik', 'kir-PİK', 'رمش', 'برژانگ',
      ['Kirpikleri çok uzun.', 'kir-pik-le-Rİ ÇOK u-ZUN', 'رموشه طويلة جداً.', 'برژانگەکانی زۆر درێژن.']),
  },
  {
    ...w('yanak', 'ya-NAK', 'خدّ', 'گۆنا',
      ['Yanakları kızardı.', 'ya-nak-la-RI kı-zar-DI', 'احمرّ خدّاه.', 'گۆناکانی سوور بوونەوە.']),
  },
  {
    ...w('dudak', 'du-DAK', 'شفة', 'لێو',
      ['Dudaklarım çatladı.', 'du-dak-la-RIM çat-la-DI', 'تشقّقت شفتاي.', 'لێوەکانم شەق بوون.']),
  },
  {
    ...w('çene', 'çe-NE', 'ذقن، فكّ', 'چەناگە',
      ['Çenesine vurmuş.', 'çe-ne-si-NE vur-MUŞ', 'ضُرب على ذقنه.', 'لە چەناگەی دراوە.']),
    collocations: ['çene çalmak'],
    note: b(
      'تعبير شائع: «çene çalmak» = يثرثر.',
      'دەربڕینێکی باو: «çene çalmak» = قسەی زۆر کردن.',
    ),
  },
  {
    ...w('boğaz', 'bo-ĞAZ', 'حلق؛ مضيق', 'گەرو؛ تەنگە',
      ['Boğazım ağrıyor.', 'bo-ğa-ZIM ağ-rı-YOR', 'حلقي يؤلمني.', 'گەروم دەیەشێت.']),
    senses: [
      sense('مضيق بحري', 'تەنگەی دەریایی',
        ['İstanbul Boğazı çok güzel.', 'is-tan-BUL bo-ğa-ZI ÇOK gü-ZEL', 'مضيق إسطنبول جميل جداً.', 'تەنگەی ئەستەنبوڵ زۆر جوانە.']),
    ],
  },
]);

/* ---------------- inside, and what goes wrong ---------------- */

const INSIDE: VocabItem[] = pack('health', 'a2', 'noun', [
  {
    ...w('kemik', 'ke-MİK', 'عظم', 'ئێسک',
      ['Kemiği kırılmış.', 'ke-mi-Ğİ kı-rıl-MIŞ', 'انكسر عظمه.', 'ئێسکی شکاوە.']),
  },
  {
    ...w('ciğer', 'ci-ĞER', 'رئة؛ كبد (في الطعام)', 'سییە؛ جگەر',
      ['Sigara ciğerlere zarar verir.', 'si-ga-RA ci-ğer-le-RE za-RAR ve-RİR', 'السجائر تضرّ بالرئتين.', 'جگەرە زیان بە سییەکان دەگەیەنێت.']),
  },
  {
    ...w('nefes', 'ne-FES', 'نَفَس', 'هەناسە',
      ['Derin bir nefes al.', 'de-RİN bir ne-FES al', 'خذ نفساً عميقاً.', 'هەناسەیەکی قووڵ هەڵمژە.']),
    collocations: ['nefes almak', 'nefes nefese'],
  },
  {
    ...w('ter', 'TER', 'عرق', 'ئارەق',
      ['Ter içinde kaldım.', 'TER i-çin-DE kal-DIM', 'غرقت في العرق.', 'بە ئارەقدا مامەوە.']),
    collocations: ['ter dökmek'],
  },
  {
    ...w('yara', 'ya-RA', 'جرح', 'برین',
      ['Yara henüz iyileşmedi.', 'ya-RA he-NÜZ i-yi-leş-me-Dİ', 'الجرح لم يشفَ بعد.', 'برینەکە هێشتا چاک نەبووەتەوە.']),
    collocations: ['yara bandı', 'yara izi'],
  },
  {
    ...w('şişlik', 'şiş-LİK', 'انتفاخ، ورم', 'ئاوسان',
      ['Şişlik iki günde geçti.', 'şiş-LİK i-Kİ gün-DE geç-Tİ', 'زال الانتفاخ خلال يومين.', 'ئاوسانەکە لە دوو ڕۆژدا نەما.']),
    related: ['şişmek'],
  },
]);

/* ---------------- accessories ---------------- */

const WORN: VocabItem[] = pack('clothing', 'a2', 'noun', [
  {
    ...w('kravat', 'kra-VAT', 'ربطة عنق', 'کرافات',
      ['Kravatını düzeltti.', 'kra-va-tı-NI dü-zelt-Tİ', 'عدّل ربطة عنقه.', 'کرافاتەکەی ڕێکخست.']),
    note: b(
      'تأخذ «takmak» لا «giymek»: «kravat taktı».',
      '«takmak» وەردەگرێت نەک «giymek»: «kravat taktı».',
    ),
  },
  {
    ...w('cüzdan', 'cüz-DAN', 'محفظة', 'جزدان',
      ['Cüzdanımı kaybettim.', 'cüz-da-nı-MI kay-bet-TİM', 'أضعت محفظتي.', 'جزدانەکەم ون کرد.']),
  },
  {
    ...w('yüzük', 'yü-ZÜK', 'خاتم', 'ئەڵقە',
      ['Parmağında bir yüzük var.', 'par-ma-ğın-DA bir yü-ZÜK var', 'في إصبعه خاتم.', 'ئەڵقەیەک لە پەنجەیدایە.']),
    collocations: ['nişan yüzüğü'],
  },
  {
    ...w('küpe', 'kü-PE', 'قرط', 'گوارە',
      ['Yeni küpeler almış.', 'ye-Nİ kü-pe-LER al-MIŞ', 'اشترت أقراطاً جديدة.', 'گوارەی نوێی کڕیوە.']),
  },
  {
    ...w('kolye', 'kol-YE', 'عقد، قلادة', 'ملوانکە',
      ['Anneme kolye aldım.', 'an-ne-ME kol-YE al-DIM', 'اشتريت عقداً لأمّي.', 'ملوانکەیەکم بۆ دایکم کڕی.']),
  },
  {
    ...w('şemsiye', 'şem-si-YE', 'مظلّة', 'چەتر',
      ['Şemsiyeni unutma, yağmur var.', 'şem-si-ye-Nİ u-nut-MA yağ-MUR var', 'لا تنسَ مظلّتك، هناك مطر.', 'چەترەکەت لەبیر مەکە، باران هەیە.']),
  },
  {
    ...w('numara', 'nu-ma-RA', 'مقاس (حذاء)؛ رقم', 'ژمارە',
      ['Kaç numara giyiyorsun?', 'KAÇ nu-ma-RA gi-yi-yor-SUN', 'ما مقاسك؟', 'چ ژمارەیەک لەبەر دەکەیت؟']),
    note: b(
      '⚠️ «numara» مقاس الحذاء، و«beden» مقاس الملابس. سؤالان مختلفان في المحلّ.',
      '⚠️ «numara» ژمارەی پێڵاوە، «beden» قەبارەی جلە.',
    ),
    related: ['beden'],
  },
  {
    ...w('moda', 'mo-DA', 'موضة', 'مۆدە',
      ['Bu model artık moda değil.', 'BU mo-DEL ar-TIK mo-DA de-ĞİL', 'هذا الطراز لم يعد موضة.', 'ئەم مۆدێلە چیتر مۆدە نییە.']),
    collocations: ['moda olmak', 'modası geçmek'],
  },
]);

/* ---------------- looking after clothes ---------------- */

const CARE: VocabItem[] = pack('verbs', 'a2', 'verb', [
  {
    ...w('dikmek', 'dik-MEK', 'يخيط؛ يزرع', 'دووریین؛ چاندن',
      ['Düğmeyi diktim.', 'düğ-me-Yİ dik-TİM', 'خطت الزرّ.', 'دوگمەکەم دووری.']),
    senses: [
      sense('يزرع شجرة', 'دارچاندن',
        ['Bahçeye bir ağaç diktik.', 'bah-çe-YE bir a-ĞAÇ dik-TİK', 'زرعنا شجرة في الحديقة.', 'دارێکمان لە باخچەکە چاند.']),
    ],
  },
  {
    ...w('yırtmak', 'yırt-MAK', 'يمزّق', 'دڕاندن',
      ['Kâğıdı yırttı.', 'kâ-ğı-DI yırt-TI', 'مزّق الورقة.', 'کاغەزەکەی دڕاند.']),
    related: ['yırtılmak'],
  },
  {
    ...w('ütülemek', 'ü-tü-le-MEK', 'يكوي', 'ئوتوکردن',
      ['Gömleğini ütüledim.', 'göm-le-ği-Nİ ü-tü-le-DİM', 'كويت قميصه.', 'کراسەکەیم ئوتو کرد.']),
  },
  {
    ...w('katlamak', 'kat-la-MAK', 'يطوي', 'تاکردن',
      ['Çamaşırları katladım.', 'ça-ma-şır-la-RI kat-la-DIM', 'طويت الغسيل.', 'جلوبەرگەکانم تا کرد.']),
  },
  {
    ...w('kaşınmak', 'ka-şın-MAK', 'يحكّ، يشعر بحكّة', 'خوران',
      ['Sırtım kaşınıyor.', 'sır-TIM ka-şı-nı-YOR', 'ظهري يحكّني.', 'پشتم دەخورێت.']),
  },
]);

export const A2_VOCABULARY_BODY: VocabItem[] = [
  ...LIMBS,
  ...FACE,
  ...INSIDE,
  ...WORN,
  ...CARE,
];
