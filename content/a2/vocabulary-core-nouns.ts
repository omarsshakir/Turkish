import type { VocabItem } from '@/types/content';
import { b, pack, w } from '../shared/helpers';

/**
 * A2 vocabulary: core nouns the overlays kept asking for.
 *
 * Every word here arrived the same way: a sense, a collocation or an idiom
 * elsewhere in the curriculum referred to it, and the validator refused the
 * reference because the word itself was never taught.
 *
 * `can` is the clearest case. The curriculum already contained `can atmak`,
 * `canı sıkkın`, `can kulağıyla dinlemek` and `canım` — four entries built on
 * a word a student could not look up. It is also one of the most culturally
 * loaded words in Turkish: it means life, soul, and "darling", and it drives
 * the everyday way of expressing desire (`canım çay istiyor`, literally "my
 * soul wants tea").
 */

const CORE: VocabItem[] = pack('nouns', 'a2', 'noun', [
  {
    ...w('can', 'CAN', 'روح، نفس؛ عزيز', 'گیان؛ ئازیز',
      ['Canını kurtardı.', 'ca-nı-NI kur-tar-DI', 'أنقذ روحه.', 'گیانی خۆی ڕزگار کرد.']),
    collocations: ['canım', 'can sıkıntısı', 'can atmak', 'canı istemek'],
    related: ['ruh'],
    note: b(
      '⚠️ من أكثر كلمات التركية دوراناً في الحياة اليومية، ونادراً بمعناها الحرفي: «canım» عزيزي · «canım sıkılıyor» أشعر بالملل · «canım çay istiyor» أشتهي شاياً · «canı yanmak» يتألّم. الأصل فارسي («جان») وليس عربياً.',
      '⚠️ زۆر بەکاردێت لە ژیانی ڕۆژانەدا: canım، canım sıkılıyor، canı yanmak. ڕەگی فارسییە.',
    ),
  },
]);

export const A2_VOCABULARY_CORE_NOUNS: VocabItem[] = CORE;
