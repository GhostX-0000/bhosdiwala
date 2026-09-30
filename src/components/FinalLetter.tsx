import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition, { Stagger } from './PageTransition';
import content from '../data/content';

export default function FinalLetter() {
  const [showHeart, setShowHeart] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const heartTimer = setTimeout(() => setShowHeart(true), 2500);
    const finalTimer = setTimeout(() => setShowFinal(true), 4500);

    return () => {
      clearTimeout(heartTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 40%, rgba(139, 58, 69, 0.12), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(217, 184, 188, 0.06), transparent 50%), #171717"
    >
      <div className="max-w-[640px] w-full text-center relative">
        {/* Subtle glow */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 58, 69, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10">
          <Stagger delay={0.4}>
            <p className="text-[11px] tracking-[0.35em] uppercase text-warm-white/40 font-light mb-12">
              the end
            </p>
          </Stagger>

          <div className="space-y-5 mb-14">
            <Stagger delay={0.6}>
              <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light">
                If you're reading this,
                <br />
                then you made it this far.
              </p>
            </Stagger>

            <Stagger delay={0.9}>
              <p className="text-base md:text-lg text-warm-white/70 leading-relaxed font-light pt-2">
                I don't know what you're
                <br />
                feeling right now.
              </p>
            </Stagger>

            <Stagger delay={1.1}>
              <div className="pt-3 space-y-1">
                <p className="text-base md:text-lg text-warm-white/60 leading-relaxed font-light">
                  Maybe you're still angry.
                </p>
                <p className="text-base md:text-lg text-warm-white/60 leading-relaxed font-light">
                  Maybe you're hurt.
                </p>
                <p className="text-base md:text-lg text-warm-white/60 leading-relaxed font-light">
                  Maybe you're smiling.
                </p>
                <p className="text-base md:text-lg text-warm-white/60 leading-relaxed font-light">
                  Maybe all three.
                </p>
              </div>
            </Stagger>

            <Stagger delay={1.4}>
              <p className="text-base md:text-lg text-warm-white/70 leading-relaxed font-light pt-4">
                Whatever it is...
                <br />
                it's okay.
              </p>
            </Stagger>

            <Stagger delay={1.6}>
              <p className="text-base md:text-lg text-warm-white/90 leading-relaxed font-light pt-4">
                I just wanted you to know
                <br />
                that I'm sorry, {content.girlfriendName}.
              </p>
            </Stagger>

            <Stagger delay={1.8}>
              <p className="text-lg md:text-xl text-warm-white leading-relaxed font-light pt-4">
                I love you, and I don't
                <br />
                want to lose you.
              </p>
            </Stagger>

            <Stagger delay={2.0}>
              <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light pt-4">
                Thank you for hearing me out.
              </p>
            </Stagger>
          </div>

          {/* Signature */}
          <Stagger delay={2.3}>
            <p className="text-xl md:text-2xl font-serif italic text-soft-accent/80 mb-10 tracking-wide">
              — {content.senderName}
            </p>
          </Stagger>

          {/* Heart that appears after delay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showHeart ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <span className="text-3xl" role="img" aria-label="heart">❤️</span>
          </motion.div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={showFinal ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm md:text-base text-warm-white/50 leading-relaxed font-light">
              Whatever happens next,
              <br />
              I hope you're okay.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
