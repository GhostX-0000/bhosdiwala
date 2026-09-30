import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const targetVolume = 0.15; // 0.12-0.18 range

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/music/background.mp3');
    audio.loop = true;
    audio.volume = 0; // Start at 0 for fade-in
    audioRef.current = audio;

    // Attempt autoplay
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        // Fade in over 3 seconds
        fadeIn(audio, targetVolume, 3000);
      } catch (error) {
        // Autoplay blocked, will start on first interaction
        console.log('Autoplay blocked, waiting for user interaction');
      }
    };

    playAudio();

    // Fallback: start on first user interaction if autoplay was blocked
    const handleFirstInteraction = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          fadeIn(audioRef.current, targetVolume, 3000);
        } catch (error) {
          console.log('Could not start audio');
        }
      }
      // Remove listeners after first interaction
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    // Add listeners for fallback
    if (!isPlaying) {
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('touchstart', handleFirstInteraction);
      document.addEventListener('keydown', handleFirstInteraction);
    }

    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  // Fade in function
  const fadeIn = (audio: HTMLAudioElement, target: number, duration: number) => {
    const steps = 30;
    const stepDuration = duration / steps;
    const volumeStep = target / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      audio.volume = Math.min(volumeStep * currentStep, target);
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  // Fade out function
  const fadeOut = (audio: HTMLAudioElement, duration: number) => {
    const steps = 30;
    const stepDuration = duration / steps;
    const startVolume = audio.volume;
    const volumeStep = startVolume / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      audio.volume = Math.max(startVolume - volumeStep * currentStep, 0);
      if (currentStep >= steps) {
        clearInterval(interval);
        audio.pause();
      }
    }, stepDuration);
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      // Unmute - fade in
      audioRef.current.play();
      setIsPlaying(true);
      fadeIn(audioRef.current, targetVolume, 2000);
      setIsMuted(false);
    } else {
      // Mute - fade out
      fadeOut(audioRef.current, 2000);
      setIsPlaying(false);
      setIsMuted(true);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm border border-border/30 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
    >
      {isMuted ? (
        // Muted icon
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        // Playing icon
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </motion.button>
  );
}
