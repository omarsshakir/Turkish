import type { VocabItem } from '@/types/content';
import { pack, w } from '../shared/helpers';

/**
 * B2 vocabulary - professional register, abstract nouns and the connectives
 * that hold an argument together.
 */

const professional = pack('professional', 'b2', 'noun', [
  w('yönetim', 'yö-ne-TİM', 'إدارة', 'بەڕێوەبردن', ['Yönetim yeni bir karar aldı.', 'yö-ne-TİM ye-Nİ bir ka-RAR al-DI', 'اتخذت الإدارة قراراً جديداً.', 'بەڕێوەبردن بڕیارێکی نوێی دا.']),
  w('bütçe', 'büt-ÇE', 'ميزانية', 'بودجە', ['Bütçeyi aşmamalıyız.', 'büt-çe-Yİ aş-ma-ma-lı-YIZ', 'يجب ألا نتجاوز الميزانية.', 'نابێت لە بودجەکە تێپەڕین.']),
  w('sözleşme', 'söz-leş-ME', 'عقد', 'گرێبەست', ['Sözleşmeyi imzaladık.', 'söz-leş-me-Yİ im-za-la-DIK', 'وقّعنا العقد.', 'گرێبەستەکەمان واژۆ کرد.']),
  w('anlaşma', 'an-laş-MA', 'اتفاقية', 'ڕێککەوتن', ['İki taraf anlaşmaya vardı.', 'i-Kİ ta-RAF an-laş-ma-YA var-DI', 'توصّل الطرفان إلى اتفاق.', 'هەردوو لا گەیشتنە ڕێککەوتن.']),
  w('verimlilik', 've-rim-li-LİK', 'إنتاجية / كفاءة', 'بەرهەمداری', ['Verimliliği artırmalıyız.', 've-rim-li-li-İ ar-tır-ma-lı-YIZ', 'يجب أن نزيد الإنتاجية.', 'دەبێت بەرهەمداری زیاد بکەین.']),
  w('strateji', 'stra-te-Jİ', 'استراتيجية', 'ستراتیژ', ['Uzun vadeli bir strateji lazım.', 'u-ZUN va-de-Lİ bir stra-te-Jİ la-ZIM', 'نحتاج استراتيجية بعيدة المدى.', 'ستراتیژێکی درێژخایەن پێویستە.']),
  w('rekabet', 're-ka-BET', 'منافسة', 'ڕکابەری', ['Piyasada rekabet çok sert.', 'pi-ya-sa-DA re-ka-BET ÇOK SERT', 'المنافسة في السوق شرسة.', 'لە بازاڕدا ڕکابەری زۆر توندە.']),
  w('yatırım', 'ya-tı-RIM', 'استثمار', 'وەبەرهێنان', ['Teknolojiye yatırım yapıyorlar.', 'tek-no-lo-ji-YE ya-tı-RIM ya-pı-yor-lar', 'يستثمرون في التكنولوجيا.', 'لە تەکنەلۆژیادا وەبەرهێنان دەکەن.']),
  w('müzakere', 'mü-za-ke-RE', 'مفاوضات', 'دانوستان', ['Müzakereler sürüyor.', 'mü-za-ke-re-LER sü-rü-YOR', 'المفاوضات مستمرة.', 'دانوستانەکان بەردەوامن.']),
  w('performans', 'per-for-MANS', 'أداء', 'کارایی', ['Performansın çok iyiydi.', 'per-for-man-SIN ÇOK i-Yİy-di', 'كان أداؤك جيداً جداً.', 'کاراییەکەت زۆر باش بوو.']),
  w('teklif', 'tek-LİF', 'عرض / اقتراح', 'پێشنیار', ['Teklifinizi değerlendireceğiz.', 'tek-li-fi-ni-Zİ de-er-len-di-re-dje-İZ', 'سندرس عرضكم.', 'پێشنیارەکەتان هەڵدەسەنگێنین.']),
  w('rapor', 'ra-POR', 'تقرير', 'ڕاپۆرت', ['Raporu yarına yetiştir.', 'ra-po-RU ya-rı-NA ye-tiş-TİR', 'أنجز التقرير بحلول الغد.', 'ڕاپۆرتەکە بۆ سبەینێ ئامادە بکە.']),
]);

const abstractNouns = pack('nouns', 'b2', 'noun', [
  w('sebep', 'se-BEP', 'سبب', 'هۆکار', ['Bunun bir sebebi olmalı.', 'bu-NUN bir se-be-Bİ ol-ma-LI', 'لا بد أن لهذا سبباً.', 'دەبێت هۆکارێکی هەبێت.']),
  w('sonuç', 'so-NUÇ', 'نتيجة', 'ئەنجام', ['Sonuçlar açıklandı.', 'so-nuç-LAR a-çık-lan-DI', 'أُعلنت النتائج.', 'ئەنجامەکان ڕاگەیەندران.']),
  w('etki', 'et-Kİ', 'تأثير', 'کاریگەری', ['Bu kararın etkisi büyük olacak.', 'BU ka-ra-RIN et-ki-Sİ bü-YÜK o-la-DJAK', 'سيكون لهذا القرار تأثير كبير.', 'کاریگەری ئەم بڕیارە گەورە دەبێت.']),
  w('koşul', 'ko-ŞUL', 'شرط / ظرف', 'مەرج', ['Bu koşullarda çalışamam.', 'BU ko-şul-lar-DA ça-lı-şa-MAM', 'لا أستطيع العمل في هذه الظروف.', 'لەم مەرجانەدا ناتوانم کار بکەم.']),
  w('görüş', 'gö-RÜŞ', 'رأي / وجهة نظر', 'بۆچوون', ['Farklı görüşlere saygı duyarım.', 'fark-LI gö-rüş-le-RE say-GI du-ya-rım', 'أحترم الآراء المختلفة.', 'ڕێز لە بۆچوونی جیاواز دەگرم.']),
  w('güven', 'gü-VEN', 'ثقة', 'متمانە', ['Güven kazanmak zor, kaybetmek kolay.', 'gü-VEN ka-zan-MAK ZOR kay-bet-MEK ko-LAY', 'كسب الثقة صعب وفقدانها سهل.', 'بەدەستهێنانی متمانە قورسە و ونکردنی ئاسان.']),
  w('değer', 'de-ĞER', 'قيمة', 'بەها', ['Aile bizim için büyük bir değer.', 'a-i-LE bi-ZİM i-ÇİN bü-YÜK bir de-ĞER', 'العائلة قيمة كبيرة بالنسبة لنا.', 'خێزان بۆ ئێمە بەهایەکی گەورەیە.']),
  w('fark', 'FARK', 'فرق', 'جیاوازی', ['Aradaki fark çok büyük.', 'a-ra-da-Kİ FARK ÇOK bü-YÜK', 'الفرق بينهما كبير جداً.', 'جیاوازی نێوانیان زۆر گەورەیە.']),
  w('gerçek', 'ger-ÇEK', 'حقيقة / حقيقي', 'ڕاستی', ['Gerçeği söylemelisin.', 'ger-çe-İ söy-le-me-li-SİN', 'يجب أن تقول الحقيقة.', 'دەبێت ڕاستییەکە بڵێیت.']),
  w('çözüm', 'çö-ZÜM', 'حلّ', 'چارەسەر', ['Bir çözüm bulmalıyız.', 'bir çö-ZÜM bul-ma-lı-YIZ', 'يجب أن نجد حلاً.', 'دەبێت چارەسەرێک بدۆزینەوە.']),
  w('sorun', 'so-RUN', 'مشكلة', 'کێشە', ['Sorun nedir?', 'so-RUN ne-DİR', 'ما المشكلة؟', 'کێشەکە چییە؟']),
  w('imkân', 'im-KÂN', 'إمكانية / فرصة', 'دەرفەت', ['Bize bu imkânı verdiler.', 'bi-ZE BU im-kâ-NI ver-di-ler', 'أعطونا هذه الفرصة.', 'ئەم دەرفەتەیان پێداین.']),
]);

const verbsB2 = pack('verbs', 'b2', 'verb', [
  w('savunmak', 'sa-vun-MAK', 'يدافع عن', 'بەرگریکردن', ['Fikrini cesurca savundu.', 'fik-ri-Nİ dje-sur-DJA sa-vun-DU', 'دافع عن رأيه بشجاعة.', 'بە ئازایانە بەرگری لە بیرۆکەکەی کرد.']),
  w('eleştirmek', 'e-leş-tir-MEK', 'ينتقد', 'ڕەخنەگرتن', ['Yapıcı bir şekilde eleştirdi.', 'ya-pı-DJI bir şe-kil-DE e-leş-tir-Dİ', 'انتقد بشكل بنّاء.', 'بە شێوەیەکی بنیاتنەر ڕەخنەی گرت.']),
  w('vurgulamak', 'vur-gu-la-MAK', 'يؤكّد / يُبرز', 'جەختکردن', ['Bu noktayı vurgulamak isterim.', 'BU nok-ta-YI vur-gu-la-MAK is-te-rim', 'أود التأكيد على هذه النقطة.', 'دەمەوێت جەخت لەم خاڵە بکەمەوە.']),
  w('değerlendirmek', 'de-er-len-dir-MEK', 'يقيّم / يستفيد من', 'هەڵسەنگاندن', ['Teklifi değerlendireceğiz.', 'tek-li-Fİ de-er-len-di-re-dje-İZ', 'سنقيّم العرض.', 'پێشنیارەکە هەڵدەسەنگێنین.']),
  w('gerçekleştirmek', 'ger-çek-leş-tir-MEK', 'يحقّق / ينفّذ', 'جێبەجێکردن', ['Hayalini gerçekleştirdi.', 'ha-ya-li-Nİ ger-çek-leş-tir-Dİ', 'حقّق حلمه.', 'خەونەکەی هێنایە دی.']),
  w('etkilemek', 'et-ki-le-MEK', 'يؤثّر في', 'کاریگەری کردن', ['Bu haber herkesi etkiledi.', 'BU ha-BER her-ke-Sİ et-ki-le-Dİ', 'أثّر هذا الخبر في الجميع.', 'ئەم هەواڵە کاریگەری لەسەر هەموان کرد.']),
  w('kapsamak', 'kap-sa-MAK', 'يشمل / يغطّي', 'لەخۆگرتن', ['Sigorta bunu kapsıyor mu?', 'si-gor-TA bu-NU kap-sı-YOR mu', 'هل يشمل التأمين هذا؟', 'دڵنیایی ئەمە لەخۆدەگرێت؟']),
  w('üstlenmek', 'üst-len-MEK', 'يتحمّل / يتولّى', 'وەرگرتنی بەرپرسیارێتی', ['Sorumluluğu üstlendi.', 'so-rum-lu-lu-U üst-len-Dİ', 'تحمّل المسؤولية.', 'بەرپرسیارێتییەکەی گرتە ئەستۆ.']),
  w('katkıda bulunmak', 'kat-kı-DA bu-lun-mak', 'يُسهم / يساهم', 'بەشداری کردن', ['Projeye büyük katkıda bulundu.', 'pro-je-YE bü-YÜK kat-kı-DA bu-lun-du', 'أسهم إسهاماً كبيراً في المشروع.', 'بەشدارییەکی گەورەی لە پڕۆژەکەدا کرد.']),
]);

export const B2_VOCABULARY: VocabItem[] = [...professional, ...abstractNouns, ...verbsB2];
