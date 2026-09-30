import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroSection from './components/IntroSection';
import QuestionSection from './components/QuestionSection';
import ApologySection from './components/ApologySection';
import NoExcusesSection from './components/NoExcusesSection';
import PersonalSection from './components/PersonalSection';
import SecondQuestionSection from './components/SecondQuestionSection';
import SecondChanceSection from './components/SecondChanceSection';
import MemoriesSection from './components/MemoriesSection';
import FinalLetter from './components/FinalLetter';
import NoResponse from './components/NoResponse';

type Screen =
  | 'intro'
  | 'question'
  | 'apology'
  | 'noExcuses'
  | 'personal'
  | 'secondQuestion'
  | 'secondChance'
  | 'memories'
  | 'finalLetter'
  | 'noResponse';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('intro');

  const navigate = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return <IntroSection onContinue={() => navigate('question')} />;
      case 'question':
        return (
          <QuestionSection
            onYes={() => navigate('apology')}
            onNoGiveUp={() => navigate('apology')}
          />
        );
      case 'apology':
        return <ApologySection onContinue={() => navigate('noExcuses')} />;
      case 'noExcuses':
        return <NoExcusesSection onContinue={() => navigate('personal')} />;
      case 'personal':
        return <PersonalSection onContinue={() => navigate('secondQuestion')} />;
      case 'secondQuestion':
        return (
          <SecondQuestionSection
            onYes={() => navigate('secondChance')}
            onNo={() => navigate('noResponse')}
          />
        );
      case 'secondChance':
        return <SecondChanceSection onContinue={() => navigate('memories')} />;
      case 'memories':
        return <MemoriesSection onContinue={() => navigate('finalLetter')} />;
      case 'finalLetter':
        return <FinalLetter />;
      case 'noResponse':
        return <NoResponse />;
      default:
        return <IntroSection onContinue={() => navigate('question')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
