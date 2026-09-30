import { motion } from 'framer-motion';
import PageTransition, { Stagger } from './PageTransition';

interface SecondQuestionSectionProps {
  onYes: () => void;
  onNo: () => void;
}

export default function SecondQuestionSection({ onYes, onNo }: SecondQuestionSectionProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 40%, rgba(139, 58, 69, 0.14), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(217, 184, 188, 0.10), transparent 50%), #F5F2ED"
    >
      <div className="max-w-[640px] w-full text-center relative">
        {/* Subtle glow */}
        <div
          aria-hidden
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 58, 69, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10">
          <Stagger delay={0.3}>
            <p className="text-[11px] tracking-[0.35em] uppercase text-muted/70 font-light mb-8">
              So after everything...
            </p>
          </Stagger>

          <Stagger delay={0.5}>
            <p className="text-base md:text-lg text-muted mb-10 font-light">
              I have one last question.
            </p>
          </Stagger>

          <Stagger delay={0.7}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-12 leading-[1.15] tracking-tight">
              Can you give us
              <br />
              <span className="italic font-serif text-accent">another chance?</span>
            </h1>
          </Stagger>

          <Stagger delay={1.0} className="mb-12">
            <div className="space-y-2 max-w-[400px] mx-auto">
              <p className="text-base md:text-lg text-muted leading-relaxed font-light">
                Not to pretend nothing happened.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light">
                Not to forget the bad parts.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light pt-3">
                But to try again.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light">
                To talk.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light">
                To understand each other.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light pt-3">
                And hopefully...
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light">
                to make things better together.
              </p>
            </div>
          </Stagger>

          <Stagger delay={1.3}>
            <p className="text-xl md:text-2xl text-primary font-light mb-10 tracking-tight">
              Can we try again?
            </p>
          </Stagger>

          <Stagger delay={1.5} className="flex flex-col items-center gap-3">
            <button
              onClick={onYes}
              className="group w-full max-w-[260px] inline-flex items-center justify-center gap-2 px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 active:scale-[0.98] bg-primary text-warm-white hover:bg-primary/90 shadow-[0_4px_20px_-8px_rgba(23,23,23,0.4)]"
            >
              <span>Yes</span>
              <span className="text-soft-accent">❤</span>
              <motion.span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </motion.span>
            </button>

            <button
              onClick={onNo}
              className="w-full max-w-[260px] inline-flex items-center justify-center px-8 min-h-[52px] text-sm font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 active:scale-[0.98] bg-transparent text-muted border border-border hover:border-muted/60"
            >
              No
            </button>
          </Stagger>
        </div>
      </div>
    </PageTransition>
  );
}
