import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.15;

    // Attempt autoplay
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        hasStartedRef.current = true;
        console.log('Background music started automatically');
      } catch (error) {
        console.log('Autoplay blocked, waiting for user interaction');
        // Will be handled by interaction listener below
      }
    };

    attemptAutoplay();

    // Fallback: start on first user interaction
    const handleFirstInteraction = async () => {
      if (!hasStartedRef.current && audio) {
        try {
          await audio.play();
          hasStartedRef.current = true;
          console.log('Background music started on user interaction');
        } catch (error) {
          console.error('Failed to start background music:', error);
        }
      }
      // Remove all listeners after first successful interaction
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    // Add interaction listeners
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    // Error handling
    const handleError = () => {
      console.error('Background music failed to load');
    };

    audio.addEventListener('error', handleError);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  // Render a hidden audio element that persists
  return (
    <audio
      ref={audioRef}
      src="/music/background.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
}
