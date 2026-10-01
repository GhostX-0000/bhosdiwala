import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume immediately
    audio.volume = 0.5;

    // Cleanup function for gesture listeners (defined first so it can be referenced)
    const cleanupGestureListeners = () => {
      document.removeEventListener('pointerdown', handleFirstInteraction, true);
      document.removeEventListener('touchstart', handleFirstInteraction, true);
      document.removeEventListener('click', handleFirstInteraction, true);
      document.removeEventListener('keydown', handleFirstInteraction, true);
    };

    // Function to attempt playback
    const tryPlay = async () => {
      if (!audio || hasStartedRef.current) return;
      
      try {
        await audio.play();
        hasStartedRef.current = true;
        console.log('Background music started');
        // Cleanup gesture listeners once playback succeeds
        cleanupGestureListeners();
      } catch (error) {
        // Browser autoplay policy blocked playback - this is expected
        // Will wait for user gesture
      }
    };

    // Attempt autoplay immediately
    tryPlay();

    // Also attempt when audio is ready
    const handleCanPlay = () => tryPlay();
    const handleLoadedMetadata = () => tryPlay();
    
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    // First-interaction fallback with capture phase
    const handleFirstInteraction = async () => {
      if (!hasStartedRef.current && audio) {
        try {
          await audio.play();
          hasStartedRef.current = true;
          console.log('Background music started on user interaction');
          cleanupGestureListeners();
        } catch (error) {
          console.error('Failed to start background music:', error);
        }
      }
    };

    // Add capture-phase listeners WITHOUT { once: true } - keep listening until it works
    document.addEventListener('pointerdown', handleFirstInteraction, { capture: true });
    document.addEventListener('touchstart', handleFirstInteraction, { capture: true });
    document.addEventListener('click', handleFirstInteraction, { capture: true });
    document.addEventListener('keydown', handleFirstInteraction, { capture: true });

    // Error handling
    const handleError = () => {
      console.error('Background music failed to load');
    };

    audio.addEventListener('error', handleError);

    // Cleanup on unmount
    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('error', handleError);
      cleanupGestureListeners();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/background.mp3"
      preload="auto"
      loop
      playsInline
      style={{ display: 'none' }}
    />
  );
}
