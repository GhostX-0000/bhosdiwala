import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SceneOne from './components/SceneOne';
import SceneTwo from './components/SceneTwo';
import SceneThree from './components/SceneThree';
import SceneFour from './components/SceneFour';
import Progress from './components/Progress';

type Screen = 'scene1' | 'scene2' | 'scene3' | 'scene4';

const screenSteps: Record<Screen, number> = {
  scene1: 1,
  scene2: 2,
  scene3: 3,
  scene4: 0, // hidden on final scene
};

const TOTAL_SCENES = 4;

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('scene1');

  const navigate = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'scene1':
        return <SceneOne onComplete={() => navigate('scene2')} />;
      case 'scene2':
        return <SceneTwo onComplete={() => navigate('scene3')} />;
      case 'scene3':
        return <SceneThree onComplete={() => navigate('scene4')} />;
      case 'scene4':
        return <SceneFour />;
      default:
        return <SceneOne onComplete={() => navigate('scene2')} />;
    }
  };

  const currentStep = screenSteps[currentScreen];
  const showProgress = currentStep > 0;

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
      <Progress current={currentStep} total={TOTAL_SCENES} visible={showProgress} />

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
