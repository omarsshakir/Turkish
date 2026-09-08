import { Route, Routes } from 'react-router-dom';
import { SettingsProvider } from '@/state/SettingsContext';
import { ProgressProvider } from '@/state/ProgressContext';
import { ContentProvider } from '@/state/ContentContext';
import { AppShell } from '@/components/layout/AppShell';

import Dashboard from '@/pages/Dashboard';
import Alphabet from '@/pages/Alphabet';
import Numbers from '@/pages/Numbers';
import Vocabulary from '@/pages/Vocabulary';
import Grammar from '@/pages/Grammar';
import Sentences from '@/pages/Sentences';
import Conversations from '@/pages/Conversations';
import Connections from '@/pages/Connections';
import Syllables from '@/pages/Syllables';
import Themes from '@/pages/Themes';
import ThemeDetail from '@/pages/ThemeDetail';
import ConnectionPractice from '@/pages/ConnectionPractice';
import NumberPractice from '@/pages/NumberPractice';
import ArabicOrigin from '@/pages/ArabicOrigin';
import OriginPractice from '@/pages/OriginPractice';
import Lesson from '@/pages/Lesson';
import Levels from '@/pages/Levels';
import LevelDetail from '@/pages/LevelDetail';
import Progress from '@/pages/Progress';
import Review from '@/pages/Review';
import Favorites from '@/pages/Favorites';
import Settings from '@/pages/Settings';
import SearchPage from '@/pages/SearchPage';
import NotFound from '@/pages/NotFound';
import { GrammarPractice, VocabularyPractice } from '@/pages/Practice';
import Listening from '@/pages/Listening';
import Speaking from '@/pages/Speaking';
import Admin from '@/pages/Admin';

export default function App() {
  return (
    <SettingsProvider>
      <ProgressProvider>
        <ContentProvider>
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<Dashboard />} />

              <Route path="alphabet" element={<Alphabet />} />
              <Route path="numbers" element={<Numbers />} />
              <Route path="vocabulary" element={<Vocabulary />} />
              <Route path="grammar" element={<Grammar />} />
              <Route path="sentences" element={<Sentences />} />
              <Route path="conversations" element={<Conversations />} />
              <Route path="connections" element={<Connections />} />
              <Route path="arabic-origin" element={<ArabicOrigin />} />
              <Route path="syllables" element={<Syllables />} />
              <Route path="themes" element={<Themes />} />
              <Route path="themes/:themeId" element={<ThemeDetail />} />
              <Route path="lesson/:lessonId" element={<Lesson />} />

              <Route path="levels" element={<Levels />} />
              <Route path="levels/:levelId" element={<LevelDetail />} />

              <Route path="practice/vocabulary" element={<VocabularyPractice />} />
              <Route path="practice/grammar" element={<GrammarPractice />} />
              <Route path="practice/listening" element={<Listening />} />
              <Route path="practice/speaking" element={<Speaking />} />
              <Route path="practice/connections" element={<ConnectionPractice />} />
              <Route path="practice/numbers" element={<NumberPractice />} />
              <Route path="practice/origin" element={<OriginPractice />} />
              {/* Kept so old links and bookmarks still resolve. */}
              <Route path="practice/pronunciation" element={<Speaking />} />

              <Route path="review" element={<Review />} />
              <Route path="progress" element={<Progress />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="settings" element={<Settings />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="admin" element={<Admin />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ContentProvider>
      </ProgressProvider>
    </SettingsProvider>
  );
}
