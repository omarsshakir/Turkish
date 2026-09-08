import type { VocabCategory } from '@/types/content';
import { b } from './shared/helpers';

/**
 * Vocabulary categories, ordered roughly by the sequence a learner meets them.
 * `icon` is a lucide-react icon name resolved at render time.
 */
export const CATEGORIES: VocabCategory[] = [
  { id: 'greetings', label: 'Greetings', tr: 'Selamlaşma', labelI18n: b('التحيات', 'سڵاوکردن'), icon: 'Hand', level: 'a1' },
  { id: 'family', label: 'Family', tr: 'Aile', labelI18n: b('العائلة', 'خێزان'), icon: 'Users', level: 'a1' },
  { id: 'people', label: 'People', tr: 'İnsanlar', labelI18n: b('الناس', 'خەڵک'), icon: 'User', level: 'a1' },
  { id: 'numbers', label: 'Numbers', tr: 'Sayılar', labelI18n: b('الأرقام', 'ژمارەکان'), icon: 'Hash', level: 'a1' },
  { id: 'colors', label: 'Colors', tr: 'Renkler', labelI18n: b('الألوان', 'ڕەنگەکان'), icon: 'Palette', level: 'a1' },
  { id: 'days', label: 'Days', tr: 'Günler', labelI18n: b('أيام الأسبوع', 'ڕۆژانی هەفتە'), icon: 'CalendarDays', level: 'a1' },
  { id: 'months', label: 'Months', tr: 'Aylar', labelI18n: b('الشهور', 'مانگەکان'), icon: 'Calendar', level: 'a1' },
  { id: 'time', label: 'Time', tr: 'Zaman', labelI18n: b('الوقت', 'کات'), icon: 'Clock', level: 'a1' },
  { id: 'food', label: 'Food', tr: 'Yiyecekler', labelI18n: b('الطعام', 'خواردن'), icon: 'UtensilsCrossed', level: 'a1' },
  { id: 'drinks', label: 'Drinks', tr: 'İçecekler', labelI18n: b('المشروبات', 'خواردنەوە'), icon: 'CupSoda', level: 'a1' },
  { id: 'house', label: 'House', tr: 'Ev', labelI18n: b('المنزل', 'ماڵ'), icon: 'Home', level: 'a1' },
  { id: 'body', label: 'Body', tr: 'Vücut', labelI18n: b('الجسم', 'لەش'), icon: 'PersonStanding', level: 'a1' },
  { id: 'animals', label: 'Animals', tr: 'Hayvanlar', labelI18n: b('الحيوانات', 'ئاژەڵەکان'), icon: 'Cat', level: 'a1' },
  { id: 'clothing', label: 'Clothing', tr: 'Giysiler', labelI18n: b('الملابس', 'جلوبەرگ'), icon: 'Shirt', level: 'a1' },
  { id: 'directions', label: 'Directions', tr: 'Yönler', labelI18n: b('الاتجاهات', 'ئاراستەکان'), icon: 'Compass', level: 'a1' },
  { id: 'places', label: 'Places', tr: 'Yerler', labelI18n: b('الأماكن', 'شوێنەکان'), icon: 'MapPin', level: 'a1' },
  { id: 'verbs', label: 'Common verbs', tr: 'Yaygın fiiller', labelI18n: b('الأفعال الشائعة', 'کارە باوەکان'), icon: 'Zap', level: 'a1' },
  { id: 'adjectives', label: 'Common adjectives', tr: 'Yaygın sıfatlar', labelI18n: b('الصفات الشائعة', 'ئاوەڵناوە باوەکان'), icon: 'Sparkles', level: 'a1' },
  { id: 'nouns', label: 'Common nouns', tr: 'Yaygın isimler', labelI18n: b('الأسماء الشائعة', 'ناوە باوەکان'), icon: 'Box', level: 'a1' },
  { id: 'school', label: 'School', tr: 'Okul', labelI18n: b('المدرسة', 'قوتابخانە'), icon: 'School', level: 'a2' },
  { id: 'shopping', label: 'Shopping', tr: 'Alışveriş', labelI18n: b('التسوق', 'بازاڕکردن'), icon: 'ShoppingCart', level: 'a2' },
  { id: 'transportation', label: 'Transportation', tr: 'Ulaşım', labelI18n: b('المواصلات', 'گواستنەوە'), icon: 'Bus', level: 'a2' },
  { id: 'travel', label: 'Travel', tr: 'Seyahat', labelI18n: b('السفر', 'گەشت'), icon: 'Plane', level: 'a2' },
  { id: 'weather', label: 'Weather', tr: 'Hava durumu', labelI18n: b('الطقس', 'کەشوهەوا'), icon: 'CloudSun', level: 'a2' },
  { id: 'health', label: 'Health', tr: 'Sağlık', labelI18n: b('الصحة', 'تەندروستی'), icon: 'HeartPulse', level: 'a2' },
  { id: 'emotions', label: 'Emotions', tr: 'Duygular', labelI18n: b('المشاعر', 'هەست'), icon: 'Smile', level: 'a2' },
  { id: 'expressions', label: 'Daily expressions', tr: 'Günlük ifadeler', labelI18n: b('التعابير اليومية', 'دەربڕینی ڕۆژانە'), icon: 'MessageSquare', level: 'a2' },
  { id: 'nature', label: 'Nature', tr: 'Doğa', labelI18n: b('الطبيعة', 'سروشت'), icon: 'Trees', level: 'b1' },
  { id: 'work', label: 'Work', tr: 'İş hayatı', labelI18n: b('العمل', 'کار'), icon: 'Briefcase', level: 'b1' },
  { id: 'technology', label: 'Technology', tr: 'Teknoloji', labelI18n: b('التكنولوجيا', 'تەکنەلۆژیا'), icon: 'Laptop', level: 'b1' },
  { id: 'university', label: 'University', tr: 'Üniversite', labelI18n: b('الجامعة', 'زانکۆ'), icon: 'GraduationCap', level: 'b1' },
  { id: 'professional', label: 'Professional', tr: 'Mesleki dil', labelI18n: b('المفردات المهنية', 'وشەی پیشەیی'), icon: 'BadgeCheck', level: 'b2' },
  { id: 'academic', label: 'Academic', tr: 'Akademik dil', labelI18n: b('المفردات الأكاديمية', 'وشەی ئەکادیمی'), icon: 'BookOpen', level: 'c1' },
  { id: 'advanced', label: 'Advanced', tr: 'İleri kelimeler', labelI18n: b('مفردات متقدمة', 'وشەی پێشکەوتوو'), icon: 'Gem', level: 'c1' },
  { id: 'media', label: 'Media', tr: 'Medya', labelI18n: b('الإعلام', 'ڕاگەیاندن'), icon: 'Newspaper', level: 'b1' },
  { id: 'collocations', label: 'Collocations', tr: 'Kelime Grupları', labelI18n: b('المتلازمات اللفظية', 'کۆمەڵە وشە'), icon: 'Link2', level: 'b2' },
  { id: 'compounds', label: 'Compound expressions', tr: 'Birleşik İfadeler', labelI18n: b('التعابير المركّبة', 'دەربڕینی لێکدراو'), icon: 'Blocks', level: 'b2' },
  { id: 'informal', label: 'Informal Turkish', tr: 'Günlük Konuşma', labelI18n: b('اللغة العامية اليومية', 'زمانی ڕۆژانە'), icon: 'Coffee', level: 'b2' },
  { id: 'finance', label: 'Finance & economy', tr: 'Ekonomi ve Finans', labelI18n: b('الاقتصاد والمال', 'ئابووری و دارایی'), icon: 'TrendingUp', level: 'b2' },
  { id: 'society', label: 'Society & politics', tr: 'Toplum ve Siyaset', labelI18n: b('المجتمع والسياسة', 'کۆمەڵگا و سیاسەت'), icon: 'Landmark', level: 'c1' },
  { id: 'science', label: 'Science', tr: 'Bilim', labelI18n: b('العلوم', 'زانست'), icon: 'FlaskConical', level: 'c1' },
  { id: 'formal', label: 'Formal Turkish', tr: 'Resmî Dil', labelI18n: b('اللغة الرسمية', 'زمانی فەرمی'), icon: 'Stamp', level: 'c1' },
  { id: 'countries', label: 'Countries & nationalities', tr: 'Ülkeler ve Milletler', labelI18n: b('البلدان والجنسيات', 'وڵاتان و نەتەوەکان'), icon: 'Globe', level: 'a1' },
  { id: 'personality', label: 'Personality', tr: 'Kişilik', labelI18n: b('الشخصية', 'کەسایەتی'), icon: 'Smile', level: 'b1' },
  { id: 'relationships', label: 'Relationships', tr: 'İlişkiler', labelI18n: b('العلاقات', 'پەیوەندییەکان'), icon: 'HeartHandshake', level: 'b1' },
  { id: 'law', label: 'Law & administration', tr: 'Hukuk ve İdare', labelI18n: b('القانون والإدارة', 'یاسا و کارگێڕی'), icon: 'Scale', level: 'c1' },
  { id: 'function', label: 'Function words', tr: 'Yapı Kelimeleri', labelI18n: b('كلمات الوظيفة النحوية', 'وشەی ڕێزمانی'), icon: 'Puzzle', level: 'a1' },
  { id: 'philosophy', label: 'Philosophy & thought', tr: 'Felsefe ve Düşünce', labelI18n: b('الفلسفة والفكر', 'فەلسەفە و بیرکردنەوە'), icon: 'Infinity', level: 'c1plus' },
  { id: 'literary', label: 'Literary register', tr: 'Edebî Dil', labelI18n: b('اللغة الأدبية', 'زمانی ئەدەبی'), icon: 'Feather', level: 'c1plus' },
  { id: 'idioms', label: 'Idioms & proverbs', tr: 'Deyimler ve atasözleri', labelI18n: b('الاصطلاحات والأمثال', 'ئیدیۆم و پەند'), icon: 'Quote', level: 'c1plus' },
];

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  string,
  VocabCategory
>;
