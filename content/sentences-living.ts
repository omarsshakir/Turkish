import type { SentencePack } from '@/types/content';
import { b, p } from './shared/helpers';

/**
 * Situational sentence packs: living in Turkish rather than studying it.
 *
 * The existing packs cover the classroom situations (directions, restaurant,
 * doctor, bank). These cover the ones that come after: the landlord, the
 * repair man, the residence-permit office, the queue at the counter, the
 * conversation about a match or a series.
 *
 * Every sentence is built from vocabulary already in the curriculum — mostly
 * the practical, leisure and kitchen sets added alongside this file. A pack is
 * a place to meet known words in a new shape, never a back door for words that
 * skipped the levelling.
 */
export const LIVING_SENTENCES: SentencePack[] = [
  /* ================================ A1 ================================ */
  {
    id: 'l-a1-morning',
    level: 'a1',
    order: 60,
    title: 'Sabah Rutini',
    titleI18n: b('روتين الصباح', 'ڕووتینی بەیانی'),
    focus: b(
      'الأفعال اليومية في المضارع المستمر: uyanmak, hazırlamak, çıkmak.',
      'کردارە ڕۆژانەکان لە ئێستای بەردەوامدا: uyanmak, hazırlamak, çıkmak.',
    ),
    sentences: [
      p('Her sabah yedide uyanıyorum.', 'HER sa-BAH ye-di-DE u-ya-nı-yo-RUM', 'أستيقظ كل صباح في السابعة.', 'هەموو بەیانییەک لە حەوتدا خەبەر دەبمەوە.'),
      p('Önce ellerimi yıkıyorum.', 'ön-CE el-le-ri-Mİ yı-kı-yo-RUM', 'أغسل يديّ أولاً.', 'سەرەتا دەستەکانم دەشۆم.'),
      p('Kahvaltıyı ben hazırlıyorum.', 'kah-val-tı-YI BEN ha-zır-lı-yo-RUM', 'أنا أحضّر الفطور.', 'من نانی بەیانی ئامادە دەکەم.'),
      p('Montumu giyip evden çıkıyorum.', 'mon-tu-MU gi-YİP ev-DEN çı-kı-yo-RUM', 'ألبس معطفي وأخرج من البيت.', 'چاکەتەکەم لەبەر دەکەم و لە ماڵەوە دەردەچم.'),
      p('Anahtarımı hep arıyorum.', 'a-nah-ta-rı-MI HEP a-rı-yo-RUM', 'أبحث عن مفتاحي دائماً.', 'هەمیشە بەدوای کلیلەکەمدا دەگەڕێم.'),
      p('Otobüse binip işe gidiyorum.', 'o-to-bü-SE bi-NİP i-ŞE gi-di-yo-RUM', 'أركب الحافلة وأذهب إلى العمل.', 'سواری پاس دەبم و دەچمە سەر کار.'),
      p('Akşam yorgun dönüyorum.', 'ak-ŞAM yor-GUN dö-nü-yo-RUM', 'أعود متعباً مساءً.', 'ئێوارە بە ماندووی دەگەڕێمەوە.'),
      p('Erken yatıyorum.', 'er-KEN ya-tı-yo-RUM', 'أنام مبكراً.', 'زوو ڕادەکشێم.'),
    ],
  },
  {
    id: 'l-a1-kitchen',
    level: 'a1',
    order: 61,
    title: 'Mutfakta',
    titleI18n: b('في المطبخ', 'لە چێشتخانەدا'),
    focus: b(
      'الأمر والطلب في المطبخ: kes, karıştır, dök — وصيغة الطلب اللطيف.',
      'فەرمان و داواکردن لە چێشتخانەدا: kes, karıştır, dök.',
    ),
    sentences: [
      p('Ekmeği ince kes.', 'ek-me-Ğİ in-CE kes', 'اقطع الخبز رقيقاً.', 'نانەکە باریک ببڕە.'),
      p('Soğanı doğrar mısın?', 'so-ğa-NI doğ-RAR mı-SIN', 'هل تفرم البصل؟', 'پیازەکە ورد دەکەیت؟'),
      p('Çayı bardağa dök.', 'ça-YI bar-da-ĞA dök', 'صبّ الشاي في الكوب.', 'چایەکە بڕژێنە ناو گڵاسەکە.'),
      p('Şekeri iyice karıştır.', 'şe-ke-Rİ i-yi-CE ka-rış-TIR', 'قلّب السكّر جيداً.', 'شەکرەکە باش تێکەڵ بکە.'),
      p('Yumurtayı beş dakika haşla.', 'yu-mur-ta-YI BEŞ da-ki-KA haş-LA', 'اسلق البيضة خمس دقائق.', 'هێلکەکە پێنج خولەک بکوڵێنە.'),
      p('Bir kaşık tuz yeter.', 'BİR ka-ŞIK TUZ ye-TER', 'ملعقة ملح تكفي.', 'کەوچکێک خوێ بەسە.'),
      p('Çatal ve bıçak getirir misin?', 'ça-TAL ve bı-ÇAK ge-ti-RİR mi-SİN', 'هل تحضر شوكة وسكّيناً؟', 'چەتاڵ و چەقۆ دەهێنیت؟'),
      p('Bulaşıkları ben yıkarım.', 'bu-la-şık-la-RI BEN yı-ka-RIM', 'أنا أغسل الأواني.', 'من قاپەکان دەشۆم.'),
    ],
  },
  /* ================================ A2 ================================ */
  {
    id: 'l-a2-clothes',
    level: 'a2',
    order: 62,
    title: 'Mağazada',
    titleI18n: b('في المتجر', 'لە فرۆشگادا'),
    focus: b(
      'الفرق بين giymek و takmak، وبين numara و beden — أخطاء يومية في المحلّ.',
      'جیاوازی نێوان giymek و takmak، و numara و beden.',
    ),
    sentences: [
      p('Kaç numara giyiyorsunuz?', 'KAÇ nu-ma-RA gi-yi-yor-su-NUZ', 'ما مقاسك (للحذاء)؟', 'چ ژمارەیەک لەبەر دەکەیت؟'),
      p('Bu bedeni deneyebilir miyim?', 'BU be-de-Nİ de-ne-ye-bi-LİR mi-YİM', 'هل يمكنني تجربة هذا المقاس؟', 'دەتوانم ئەم قەبارەیە تاقی بکەمەوە؟'),
      p('Kravatını taktı ve çıktı.', 'kra-va-tı-NI tak-TI ve çık-TI', 'ربط ربطة عنقه وخرج.', 'کرافاتەکەی بەست و چووە دەرەوە.'),
      p('Cüzdanımı kaybettim.', 'cüz-da-nı-MI kay-bet-TİM', 'أضعت محفظتي.', 'جزدانەکەم ون کرد.'),
      p('Bu model artık moda değil.', 'BU mo-DEL ar-TIK mo-DA de-ĞİL', 'هذا الطراز لم يعد موضة.', 'ئەم مۆدێلە چیتر مۆدە نییە.'),
      p('Fişi saklayın, değişim için lazım.', 'fi-Şİ sak-la-YIN de-ği-ŞİM i-ÇİN la-ZIM', 'احتفظ بالإيصال، يلزم للاستبدال.', 'وەسڵەکە بپارێزە، بۆ گۆڕینەوە پێویستە.'),
      p('Peşin ödersem indirim var mı?', 'pe-ŞİN ö-der-SEM in-di-RİM VAR mı', 'هل هناك خصم إن دفعت نقداً؟', 'ئەگەر نەقد بدەم داشکاندن هەیە؟'),
      p('Altı taksitle alabilir miyim?', 'al-TI tak-sit-LE a-la-bi-LİR mi-YİM', 'هل يمكنني الشراء على ستة أقساط؟', 'دەتوانم بە شەش قیست بیکڕم؟'),
    ],
  },
  {
    id: 'l-a2-body',
    level: 'a2',
    order: 63,
    title: 'Ağrım Var',
    titleI18n: b('عندي ألم', 'ئازارم هەیە'),
    focus: b(
      'وصف الألم: العضو + ضمير الملكية + ağrıyor. لاحظ سقوط الحركة في omuz → omzum.',
      'باسکردنی ئازار: ئەندام + خاوەندارێتی + ağrıyor.',
    ),
    sentences: [
      p('Omzum ağrıyor.', 'om-ZUM ağ-rı-YOR', 'كتفي يؤلمني.', 'شانم دەیەشێت.'),
      p('Boğazım çok ağrıyor.', 'bo-ğa-ZIM ÇOK ağ-rı-YOR', 'حلقي يؤلمني كثيراً.', 'گەروم زۆر دەیەشێت.'),
      p('Dizim şişti.', 'di-ZİM şiş-Tİ', 'انتفخت ركبتي.', 'ئەژنۆم ئاوسا.'),
      p('Bileğim burkuldu.', 'bi-le-ĞİM bur-kul-DU', 'التوى معصمي.', 'مەچەکم بادرا.'),
      p('Belim tutuldu, eğilemiyorum.', 'be-LİM tu-tul-DU e-ği-le-mi-yo-RUM', 'شُدّ ظهري، لا أستطيع الانحناء.', 'کەمەرم گیرا، ناتوانم خۆم چەماوە بکەم.'),
      p('Derin bir nefes alın lütfen.', 'de-RİN bir ne-FES a-LIN lüt-FEN', 'خذ نفساً عميقاً من فضلك.', 'تکایە هەناسەیەکی قووڵ هەڵمژە.'),
      p('Yara henüz iyileşmedi.', 'ya-RA he-NÜZ i-yi-leş-me-Dİ', 'الجرح لم يشفَ بعد.', 'برینەکە هێشتا چاک نەبووەتەوە.'),
      p('Bir ağrı kesici alabilir miyim?', 'BİR ağ-RI ke-si-Cİ a-la-bi-LİR mi-YİM', 'هل يمكنني أخذ مسكّن؟', 'دەتوانم ئازاربڕێک وەربگرم؟'),
    ],
  },
  /* ================================ B1 ================================ */
  {
    id: 'l-b1-landlord',
    level: 'b1',
    order: 64,
    title: 'Ev Sahibiyle',
    titleI18n: b('مع صاحب البيت', 'لەگەڵ خاوەن ماڵ'),
    focus: b(
      'الشكوى المهذّبة: المشكلة + الطلب. لاحظ استعمال الماضي الحكائي في الوصف.',
      'گلەیی بە ڕێزەوە: کێشەکە + داواکاری.',
    ),
    sentences: [
      p('Musluk damlıyor, tamir ettirebilir miyiz?', 'mus-LUK dam-lı-YOR ta-MİR et-ti-re-bi-LİR mi-YİZ', 'الصنبور ينقّط، هل يمكن تصليحه؟', 'موسلوکەکە دڵۆپە دەکات، دەکرێت چاکی بکەینەوە؟'),
      p('Su tesisatında bir sorun var.', 'SU te-si-sa-tın-DA bir so-RUN var', 'هناك مشكلة في تمديدات الماء.', 'کێشەیەک لە بۆریەکانی ئاودا هەیە.'),
      p('Asansör üç gündür bozuk.', 'a-san-SÖR ÜÇ gün-DÜR bo-ZUK', 'المصعد معطّل منذ ثلاثة أيام.', 'ئاسانسۆرەکە سێ ڕۆژە خراپە.'),
      p('Üst kattaki gürültüden uyuyamıyorum.', 'ÜST kat-ta-Kİ gü-rül-tü-DEN u-yu-ya-mı-yo-RUM', 'لا أستطيع النوم من ضجيج الطابق العلوي.', 'لە ژاوەژاوی نهۆمی سەرەوە ناتوانم بخەوم.'),
      p('Kirayı her ayın beşinde ödüyorum.', 'ki-ra-YI HER a-YIN be-şin-DE ö-dü-yo-RUM', 'أدفع الإيجار في الخامس من كل شهر.', 'کرێیەکە هەموو مانگێک لە پێنجەمدا دەدەم.'),
      p('Elektrik faturası çok yüksek geldi.', 'e-lek-TRİK fa-tu-ra-SI ÇOK yük-SEK gel-Dİ', 'جاءت فاتورة الكهرباء عالية جداً.', 'پسووڵەی کارەبا زۆر بەرز هات.'),
      p('Kapıcıya haber verdim ama gelmedi.', 'ka-pı-cı-YA ha-BER ver-DİM a-MA gel-me-Dİ', 'أخبرت البوّاب لكنه لم يأتِ.', 'بە دەرگاوانەکەم ڕاگەیاند بەڵام نەهات.'),
      p('Ampulü değiştirmemiz gerekiyor.', 'am-pu-LÜ de-ğiş-tir-me-MİZ ge-re-ki-YOR', 'علينا تغيير المصباح.', 'پێویستە گڵۆپەکە بگۆڕین.'),
    ],
  },
  {
    id: 'l-b1-permit',
    level: 'b1',
    order: 65,
    title: 'Resmî İşlemler',
    titleI18n: b('المعاملات الرسمية', 'کاری فەرمی'),
    focus: b(
      'لغة المكتب الحكومي: randevu almak, form doldurmak, başvuruda bulunmak.',
      'زمانی نووسینگەی حکومی: randevu almak, form doldurmak.',
    ),
    sentences: [
      p('İnternetten randevu aldım.', 'in-ter-net-TEN ran-de-VU al-DIM', 'أخذت موعداً عبر الإنترنت.', 'لە ئینتەرنێتەوە کاتم وەرگرت.'),
      p('Formu doldurup imzalayın lütfen.', 'for-MU dol-du-RUP im-za-la-YIN lüt-FEN', 'املأ الاستمارة ووقّعها من فضلك.', 'تکایە فۆڕمەکە پڕ بکەرەوە و واژووی بکە.'),
      p('İkamet adresinizi yazmanız gerekiyor.', 'i-ka-MET ad-re-si-ni-Zİ yaz-ma-NIZ ge-re-ki-YOR', 'عليك كتابة عنوان إقامتك.', 'پێویستە ناونیشانی نیشتەجێبوونت بنووسیت.'),
      p('Oturma izni bir yıl geçerli.', 'o-tur-MA iz-Nİ BİR YIL ge-çer-Lİ', 'تصريح الإقامة صالح سنة.', 'مۆڵەتی نیشتەجێبوون ساڵێک کاری پێدەکرێت.'),
      p('Müdürlüğe hangi belgeleri götüreceğim?', 'mü-dür-lü-ĞE han-Gİ bel-ge-le-Rİ gö-tü-re-ce-ĞİM', 'أي وثائق سآخذ إلى المديرية؟', 'کام بەڵگەنامە بۆ بەڕێوەبەرایەتی ببەم؟'),
      p('Sağlık sigortası şart mı?', 'sağ-LIK si-gor-ta-SI ŞART mı', 'هل التأمين الصحّي شرط؟', 'دڵنیایی تەندروستی مەرجە؟'),
      p('Makbuzu saklayın, sonra lazım olabilir.', 'mak-bu-ZU sak-la-YIN son-RA la-ZIM o-la-bi-LİR', 'احتفظ بالإيصال، قد يلزم لاحقاً.', 'وەسڵەکە بپارێزە، دواتر لەوانەیە پێویست بێت.'),
      p('Sıra bende mi, yoksa bekleyeyim mi?', 'sı-RA ben-DE Mİ yok-SA bek-le-ye-YİM Mİ', 'هل الدور عليّ أم أنتظر؟', 'نۆرە هی منە یان چاوەڕێ بکەم؟'),
    ],
  },
  {
    id: 'l-b1-smalltalk',
    level: 'b1',
    order: 66,
    title: 'Maç ve Dizi Sohbeti',
    titleI18n: b('حديث المباراة والمسلسل', 'گفتوگۆی یاری و زنجیرە'),
    focus: b(
      'الحديث العابر: takım tutmak, gol atmak, dizi izlemek — الأفعال المصاحبة تختلف عن العربية.',
      'قسەی سووک: takım tutmak, gol atmak, dizi izlemek.',
    ),
    sentences: [
      p('Hangi takımı tutuyorsun?', 'han-Gİ ta-kı-MI tu-tu-yor-SUN', 'أي فريق تشجّع؟', 'پشتگیری کام تیم دەکەیت؟'),
      p('Son dakikada gol attılar.', 'SON da-ki-ka-DA GOL at-tı-LAR', 'سجّلوا هدفاً في الدقيقة الأخيرة.', 'لە دوایین خولەکدا گۆڵیان تۆمارکرد.'),
      p('Maçı izledin mi?', 'ma-ÇI iz-le-DİN mi', 'هل شاهدت المباراة؟', 'یارییەکەت سەیرکرد؟'),
      p('Bu diziyi herkes izliyor.', 'BU di-zi-Yİ her-KES iz-li-YOR', 'الجميع يشاهد هذا المسلسل.', 'هەموو کەس ئەم زنجیرەیە سەیر دەکات.'),
      p('Son sahne çok etkileyiciydi.', 'SON sah-NE ÇOK et-ki-le-yi-ciy-Dİ', 'كان المشهد الأخير مؤثّراً جداً.', 'دوایین دیمەن زۆر کاریگەر بوو.'),
      p('Baş oyuncu bence çok iyi.', 'BAŞ o-yun-CU ben-CE ÇOK i-Yİ', 'الممثّل الرئيسي جيد جداً برأيي.', 'بەلای منەوە ئەکتەری سەرەکی زۆر باشە.'),
      p('Hafta sonu kampa gideceğiz.', 'haf-TA so-NU kam-PA gi-de-ce-ĞİZ', 'سنذهب للتخييم نهاية الأسبوع.', 'کۆتایی هەفتە دەچینە کەمپ.'),
      p('Sabah koşusuna çıkıyorum.', 'sa-BAH ko-şu-su-NA çı-kı-yo-RUM', 'أخرج للجري صباحاً.', 'بەیانیان بۆ ڕاکردن دەردەچم.'),
    ],
  },
  /* ================================ B2 ================================ */
  {
    id: 'l-b2-event',
    level: 'b2',
    order: 67,
    title: 'Etkinlik Düzenlemek',
    titleI18n: b('تنظيم فعّالية', 'ڕێکخستنی چالاکی'),
    focus: b(
      'لغة التنظيم: düzenlemek, katılmak, sponsor bulmak, gündeme almak.',
      'زمانی ڕێکخستن: düzenlemek, katılmak, sponsor bulmak.',
    ),
    sentences: [
      p('Mart ayında bir atölye düzenliyoruz.', 'MART a-yın-DA bir a-töl-YE dü-zen-li-yo-RUZ', 'ننظّم ورشة في آذار.', 'لە مانگی سێدا وۆرکشۆپێک ڕێکدەخەین.'),
      p('Kaç katılımcı bekliyoruz?', 'KAÇ ka-tı-lım-CI bek-li-yo-RUZ', 'كم مشاركاً نتوقّع؟', 'چەند بەشداربوو چاوەڕێ دەکەین؟'),
      p('İki sponsor bulmamız gerekiyor.', 'i-Kİ spon-SOR bul-ma-MIZ ge-re-ki-YOR', 'علينا إيجاد راعيَين.', 'پێویستە دوو سپۆنسەر بدۆزینەوە.'),
      p('Bu konuyu gündeme alalım.', 'BU ko-nu-YU gün-de-ME a-la-LIM', 'لنضع هذا الموضوع على جدول الأعمال.', 'با ئەم بابەتە بخەینە ڕۆژەڤەوە.'),
      p('Tanıtım filmini kim hazırlayacak?', 'ta-nı-TIM fil-mi-Nİ KİM ha-zır-la-ya-CAK', 'من سيحضّر الفيلم التعريفي؟', 'کێ فیلمی ناساندن ئامادە دەکات؟'),
      p('Bütçeyi aşmamaya dikkat edelim.', 'büt-çe-Yİ aş-ma-ma-YA dik-KAT e-de-LİM', 'لننتبه ألّا نتجاوز الميزانية.', 'ئاگاداربین لە بودجەکە تێنەپەڕین.'),
      p('Gönüllüler kayıt masasında olacak.', 'gö-nül-lü-LER ka-YIT ma-sa-sın-DA o-la-CAK', 'سيكون المتطوّعون عند طاولة التسجيل.', 'خۆبەخشەکان لە مێزی تۆمارکردن دەبن.'),
      p('Sonuçları aylık raporluyoruz.', 'so-nuç-la-RI ay-LIK ra-por-lu-yo-RUZ', 'نقدّم تقريراً شهرياً بالنتائج.', 'ئەنجامەکان مانگانە ڕاپۆرت دەکەین.'),
    ],
  },
  {
    id: 'l-b2-process',
    level: 'b2',
    order: 68,
    title: 'Süreci Anlatmak',
    titleI18n: b('وصف سير العمل', 'باسکردنی پڕۆسە'),
    focus: b(
      'مراحل المشروع: aşama, adım, hedeflemek, ölçmek — والزمن المناسب لكل مرحلة.',
      'قۆناغەکانی پڕۆژە: aşama, adım, hedeflemek, ölçmek.',
    ),
    sentences: [
      p('Proje son aşamasında.', 'pro-JE SON a-şa-ma-sın-DA', 'المشروع في مرحلته الأخيرة.', 'پڕۆژەکە لە دوایین قۆناغیدایە.'),
      p('İlk adımı geçen ay attık.', 'İLK a-dı-MI ge-ÇEN AY at-TIK', 'خطونا الخطوة الأولى الشهر الماضي.', 'یەکەم هەنگاومان مانگی ڕابردوو نا.'),
      p('Yüzde on büyüme hedefliyoruz.', 'yüz-DE ON bü-yü-ME he-def-li-yo-RUZ', 'نستهدف نموّاً بعشرة بالمئة.', 'ئامانجمان گەشەی دە لە سەدە.'),
      p('Başarıyı nasıl ölçeceğiz?', 'ba-şa-rı-YI na-SIL öl-çe-ce-ĞİZ', 'كيف سنقيس النجاح؟', 'چۆن سەرکەوتن دەپێوین؟'),
      p('Süreci yakından izliyoruz.', 'sü-re-Cİ ya-kın-DAN iz-li-yo-RUZ', 'نتابع العملية عن كثب.', 'بە وردی بەدوای پڕۆسەکەدا دەچین.'),
      p('Eksiklikleri giderdikten sonra sunacağız.', 'ek-sik-lik-le-Rİ gi-der-dik-TEN son-RA su-na-ca-ĞIZ', 'سنقدّمه بعد معالجة النواقص.', 'دوای نەهێشتنی کەموکوڕییەکان پێشکەشی دەکەین.'),
      p('Yeni sistem işimizi kolaylaştırdı.', 'ye-Nİ sis-TEM i-şi-mi-Zİ ko-lay-laş-tır-DI', 'سهّل النظام الجديد عملنا.', 'سیستەمە نوێیەکە کارەکەمانی ئاسان کرد.'),
      p('Görevi yardımcısına devretti.', 'gö-re-Vİ yar-dım-cı-sı-NA dev-ret-Tİ', 'سلّم المهمّة إلى مساعده.', 'ئەرکەکەی بە یاریدەدەرەکەی سپارد.'),
    ],
  },
  {
    id: 'l-b2-publichealth',
    level: 'b2',
    order: 69,
    title: 'Haberde Sağlık',
    titleI18n: b('الصحّة في الأخبار', 'تەندروستی لە هەواڵدا'),
    focus: b(
      'لغة الخبر الصحّي: önlem almak (لا yapmak), risk taşımak, tedbir.',
      'زمانی هەواڵی تەندروستی: önlem almak, risk taşımak.',
    ),
    sentences: [
      p('Gerekli önlemler alındı.', 'ge-rek-Lİ ön-lem-LER a-lın-DI', 'اتُّخذت الإجراءات اللازمة.', 'ڕێوشوێنە پێویستەکان گیرانەبەر.'),
      p('Bu ilacın bilinen riskleri var.', 'BU i-la-CIN bi-li-NEN risk-le-Rİ var', 'لهذا الدواء مخاطر معروفة.', 'ئەم دەرمانە مەترسی ناسراوی هەیە.'),
      p('On gün karantinada kaldı.', 'ON GÜN ka-ran-ti-na-DA kal-DI', 'بقي عشرة أيام في الحجر.', 'دە ڕۆژ لە قەرەنتینەدا مایەوە.'),
      p('Hareketsizlik kalbe zarar veriyor.', 'ha-re-ket-siz-LİK kal-BE za-RAR ve-ri-YOR', 'قلّة الحركة تضرّ بالقلب.', 'بێجووڵەیی زیان بە دڵ دەگەیەنێت.'),
      p('Ortalama ömür son yıllarda uzadı.', 'or-ta-la-MA ö-MÜR SON yıl-lar-DA u-za-DI', 'طال متوسّط العمر في السنوات الأخيرة.', 'تەمەنی ناوەند لەم ساڵانەی دواییدا درێژ بووەوە.'),
      p('Nüfusun yaşlanması tartışılıyor.', 'nü-fu-SUN yaş-lan-ma-SI tar-tı-şı-lı-YOR', 'تُناقَش شيخوخة السكّان.', 'پیربوونی دانیشتووان تاوتوێ دەکرێت.'),
      p('Ruhsal sağlık uzun süre ihmal edildi.', 'ruh-SAL sağ-LIK u-ZUN sü-RE ih-MAL e-dil-Dİ', 'أُهملت الصحّة النفسية مدّة طويلة.', 'تەندروستی دەروونی ماوەیەکی دوورودرێژ پشتگوێ خرا.'),
      p('Koruyucu sağlık hizmetleri arttı.', 'ko-ru-yu-CU sağ-LIK hiz-met-le-Rİ art-TI', 'ازدادت خدمات الصحّة الوقائية.', 'خزمەتگوزاری تەندروستی پارێزەر زیادی کرد.'),
    ],
  },
  /* ================================ C1 ================================ */
  {
    id: 'l-c1-framing',
    level: 'c1',
    order: 70,
    title: 'Bir İddiayı Çerçevelemek',
    titleI18n: b('تأطير الادّعاء', 'چوارچێوەدانان بۆ بانگەشە'),
    focus: b(
      'أدوات التأطير: açısından, bakımından, çerçevesinde, doğrultusunda — تلحق بالاسم مباشرة.',
      'ئامرازەکانی چوارچێوەدانان: açısından, bakımından, çerçevesinde.',
    ),
    sentences: [
      p('Ekonomik açıdan mümkün görünmüyor.', 'e-ko-no-MİK a-çı-DAN müm-KÜN gö-rün-mü-YOR', 'لا يبدو ممكناً من الناحية الاقتصادية.', 'لە ڕووی ئابوورییەوە گونجاو دیار نییە.'),
      p('Sağlık bakımından riskli bir karar.', 'sağ-LIK ba-kı-mın-DAN risk-Lİ bir ka-RAR', 'قرار محفوف بالمخاطر من حيث الصحّة.', 'بڕیارێکی مەترسیدارە لە ڕووی تەندروستییەوە.'),
      p('Proje çerçevesinde iki atölye yapıldı.', 'pro-JE çer-çe-ve-sin-DE i-Kİ a-töl-YE ya-pıl-DI', 'أُقيمت ورشتان في إطار المشروع.', 'لە چوارچێوەی پڕۆژەکەدا دوو وۆرکشۆپ کرا.'),
      p('Talepler doğrultusunda karar değişti.', 'ta-lep-LER doğ-rul-tu-sun-DA ka-RAR de-ğiş-Tİ', 'تغيّر القرار وفقاً للمطالب.', 'بەپێی داواکارییەکان بڕیارەکە گۆڕا.'),
      p('Söz konusu belge hâlâ kayıp.', 'SÖZ ko-nu-SU bel-GE ha-LÂ ka-YIP', 'الوثيقة المعنية ما زالت مفقودة.', 'ئەو بەڵگەنامەیەی باسکرا هێشتا ونە.'),
      p('Bu görüşü veriler destekliyor.', 'BU gö-rü-ŞÜ ve-ri-LER des-tek-li-YOR', 'البيانات تدعم هذا الرأي.', 'داتاکان پشتگیری ئەم بۆچوونە دەکەن.'),
      p('Öneriye açıkça karşı çıktı.', 'ö-ne-ri-YE a-çık-ÇA kar-ŞI çık-TI', 'اعترض على الاقتراح صراحةً.', 'بە ئاشکرا دژایەتی پێشنیارەکەی کرد.'),
      p('Bu faktörü dikkate almadık.', 'BU fak-tö-RÜ dik-ka-TE al-ma-DIK', 'لم نأخذ هذا العامل بعين الاعتبار.', 'ئەم فاکتەرەمان لەبەرچاو نەگرت.'),
    ],
  },
  {
    id: 'l-c1-hedging',
    level: 'c1',
    order: 71,
    title: 'Ne Kadar Kesin Konuşuyorum?',
    titleI18n: b('إلى أي حدّ أنا واثق؟', 'تا چەند دڵنیام؟'),
    focus: b(
      'التدرّج بين المطلق والنسبي: mutlak, görece, öngörülebilir, olumsallık.',
      'پلەبەندی نێوان ڕەها و ڕێژەیی: mutlak, görece.',
    ),
    sentences: [
      p('Mutlak bir doğru olduğunu söyleyemem.', 'mut-LAK bir doğ-RU ol-du-ğu-NU söy-le-ye-MEM', 'لا أستطيع القول إنه صواب مطلق.', 'ناتوانم بڵێم ڕاستییەکی ڕەهایە.'),
      p('Bu görece yeni bir yaklaşım.', 'BU gö-re-CE ye-Nİ bir yak-la-ŞIM', 'هذه مقاربة جديدة نسبياً.', 'ئەمە ڕوانگەیەکی نسبەتەن نوێیە.'),
      p('Sonuç aslında öngörülebilirdi.', 'so-NUÇ as-lın-DA ön-gö-rü-le-bi-lir-Dİ', 'كانت النتيجة قابلة للتنبّؤ في الحقيقة.', 'لە ڕاستیدا ئەنجامەکە پێشبینیکراو بوو.'),
      p('Hedefler ölçülebilir olmalı.', 'he-def-LER öl-çü-le-bi-LİR ol-ma-LI', 'ينبغي أن تكون الأهداف قابلة للقياس.', 'دەبێت ئامانجەکان پێوانەکراو بن.'),
      p('Tek örnekten genelleme yapılmaz.', 'TEK ör-nek-TEN ge-nel-le-ME ya-pıl-MAZ', 'لا يُعمَّم من مثال واحد.', 'لە یەک نموونەوە گشتاندن ناکرێت.'),
      p('Belirleyici faktör eğitimdi.', 'be-lir-le-yi-Cİ fak-TÖR e-ği-tim-Dİ', 'كان العامل الحاسم هو التعليم.', 'فاکتەری دیاریکەر خوێندن بوو.'),
      p('Dolaylı bir eleştiri yaptı.', 'do-lay-LI bir e-leş-ti-Rİ yap-TI', 'وجّه نقداً غير مباشر.', 'ڕەخنەیەکی ناڕاستەوخۆی گرت.'),
      p('Tanımı önce netleştirelim.', 'ta-nı-MI ön-CE net-leş-ti-re-LİM', 'لنوضّح التعريف أولاً.', 'سەرەتا با پێناسەکە ڕوون بکەینەوە.'),
    ],
  },
  /* =============================== C1+ ================================ */
  {
    id: 'l-c1plus-contract',
    level: 'c1plus',
    order: 72,
    title: 'Sözleşme Dili',
    titleI18n: b('لغة العقود', 'زمانی گرێبەست'),
    focus: b(
      'العثمانية الإدارية: muvafakat, tebliğ, mükellefiyet, muafiyet. شفّافة للعربي، مبهمة للتركي الشاب.',
      'عوسمانی کارگێڕی: muvafakat, tebliğ, mükellefiyet.',
    ),
    sentences: [
      p('Yazılı muvafakat olmadan işlem yapılamaz.', 'ya-zı-LI mu-va-fa-KAT ol-ma-DAN iş-LEM ya-pı-la-MAZ', 'لا تُجرى المعاملة دون موافقة خطّية.', 'بەبێ ڕەزامەندی نووسراو مامەڵە ناکرێت.'),
      p('Karar taraflara tebliğ edildi.', 'ka-RAR ta-raf-la-RA teb-LİĞ e-dil-Dİ', 'بُلِّغ القرار للأطراف.', 'بڕیارەکە بە لایەنەکان ڕاگەیەنرا.'),
      p('Sözleşmenin muhtevası tartışıldı.', 'söz-leş-me-NİN muh-te-va-SI tar-tı-şıl-DI', 'نوقش محتوى العقد.', 'ناوەڕۆکی گرێبەستەکە تاوتوێ کرا.'),
      p('Vergi mükellefiyeti bu tarihte doğar.', 'ver-Gİ mü-kel-le-fi-ye-Tİ BU ta-rih-TE do-ĞAR', 'ينشأ الالتزام الضريبي في هذا التاريخ.', 'ئەرکی باج لەم بەروارەدا دروست دەبێت.'),
      p('Bazı kurumlara muafiyet tanındı.', 'ba-ZI ku-rum-la-RA mu-a-fi-YET ta-nın-DI', 'مُنح بعض المؤسسات إعفاء.', 'لێبووردن بە هەندێک دامەزراوە درا.'),
      p('Bu karar emsal teşkil eder.', 'BU ka-RAR em-SAL teş-KİL e-DER', 'يشكّل هذا القرار سابقة.', 'ئەم بڕیارە دەبێتە نموونەی پێشوو.'),
      p('Kaza ağır ihmalden kaynaklandı.', 'ka-ZA a-ĞIR ih-mal-DEN kay-nak-lan-DI', 'نتج الحادث عن إهمال جسيم.', 'ڕووداوەکە لە کەمتەرخەمی گەورەوە سەرچاوەی گرت.'),
      p('İki kurum arasındaki münasebet gerginleşti.', 'i-Kİ ku-RUM a-ra-sın-da-Kİ mü-na-se-BET ger-gin-leş-Tİ', 'توتّرت العلاقة بين المؤسستين.', 'پەیوەندی نێوان دوو دامەزراوەکە توند بوو.'),
    ],
  },
  {
    id: 'l-c1plus-thought',
    level: 'c1plus',
    order: 73,
    title: 'Felsefî Anlatım',
    titleI18n: b('التعبير الفلسفي', 'دەربڕینی فەلسەفی'),
    focus: b(
      'ثنائي الإصلاح اللغوي: idrak/kavrayış، mahiyet/öz، külli/tümel — الاختيار بينهما اختيار أسلوبي.',
      'جووتی چاکسازی زمان: idrak/kavrayış، mahiyet/öz.',
    ),
    sentences: [
      p('Meselenin ciddiyetini geç idrak etti.', 'me-se-le-NİN cid-di-ye-ti-Nİ GEÇ id-RAK et-Tİ', 'أدرك خطورة المسألة متأخّراً.', 'بە درەنگ گرنگی بابەتەکەی تێگەیشت.'),
      p('Konuya kavrayışı gerçekten derindi.', 'ko-nu-YA kav-ra-yı-ŞI ger-çek-TEN de-rin-Dİ', 'كان إدراكه للموضوع عميقاً حقاً.', 'تێگەیشتنی لە بابەتەکە بەڕاستی قووڵ بوو.'),
      p('Olayın mahiyeti hâlâ belirsiz.', 'o-la-YIN ma-hi-ye-Tİ ha-LÂ be-lir-SİZ', 'ما زالت ماهية الحادثة غامضة.', 'چۆنیەتی ڕووداوەکە هێشتا ناڕوونە.'),
      p('Meselenin özü aslında bu.', 'me-se-le-NİN ö-ZÜ as-lın-DA BU', 'هذا في الحقيقة جوهر المسألة.', 'لە ڕاستیدا ئەمە ناوەڕۆکی بابەتەکەیە.'),
      p('Böyle bir sonucu tasavvur edemezdim.', 'böy-LE bir so-nu-CU ta-sav-VUR e-de-mez-DİM', 'ما كنت أتصوّر نتيجة كهذه.', 'ئەنجامێکی وام نەدەوێنا.'),
      p('Külli bir hükme varamayız.', 'kül-Lİ bir hük-ME va-ra-ma-YIZ', 'لا يمكننا بلوغ حكم كلّي.', 'ناتوانین بگەینە حوکمێکی گشتی.'),
      p('Tikel örnekler kuralı kanıtlamaz.', 'ti-KEL ör-nek-LER ku-ra-LI ka-nıt-la-MAZ', 'الأمثلة الجزئية لا تثبت القاعدة.', 'نموونەی بەشەکی یاساکە ناسەلمێنێت.'),
      p('Vicdanı rahat değil.', 'vic-da-NI ra-HAT de-ĞİL', 'ضميره ليس مرتاحاً.', 'ویژدانی ئاسوودە نییە.'),
    ],
  },
];
