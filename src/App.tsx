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
import Progress from './components/Progress';

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

const screenOrder: Screen[] = [
  'intro',
  'question',
  'apology',
  'noExcuses',
  'personal',
  'secondQuestion',
  'secondChance',
  'memories',
  'finalLetter',
];

// Map screens to step numbers (for progress)
const screenSteps: Record<Screen, number> = {
  intro: 1,
  question: 2,
  apology: 3,
  noExcuses: 4,
  personal: 5,
  secondQuestion: 6,
  secondChance: 7,
  memories: 8,
  finalLetter: 9,
  noResponse: 0, // hidden
};

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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

  const currentStep = screenSteps[currentScreen];
  const totalSteps = screenOrder.length;
  const showProgress = currentStep > 0 && currentScreen !== 'finalLetter';

  return (
    <div className="grain vignette relative min-h-screen overflow-x-hidden">
      {/* Ambient light blob */}
      <div
        aria-hidden
        className="ambient-light"
        style={{
          top: '20%',
          left: '60%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 58, 69, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Progress indicator */}
      <Progress current={currentStep} total={totalSteps} visible={showProgress} />

      {/* Main content */}
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
