import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';

interface ApologySectionProps {
  onContinue: () => void;
}

export default function ApologySection({ onContinue }: ApologySectionProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 40%, rgba(139, 58, 69, 0.18), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(139, 58, 69, 0.08), transparent 50%), #171717"
    >
      <div className="max-w-[640px] w-full text-center relative">
        {/* Subtle burgundy glow behind heading */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 58, 69, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative z-10">
          <Stagger delay={0.4}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-warm-white mb-16 leading-[1.05] tracking-tight">
              I'm <span className="italic font-serif text-soft-accent">sorry.</span>
            </h1>
          </Stagger>

          <div className="space-y-6 mb-16">
            <Stagger delay={0.7}>
              <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light">
                Not the quick 'sorry'
              </p>
              <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light">
                people say to move on.
              </p>
            </Stagger>

            <Stagger delay={0.9}>
              <p className="text-base md:text-lg text-warm-white/90 leading-relaxed font-light pt-4">
                I mean it.
              </p>
            </Stagger>

            <Stagger delay={1.1}>
              <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light pt-4">
                I know I hurt you, and I know
                <br />
                I can't take that back.
              </p>
            </Stagger>

            <Stagger delay={1.3}>
              <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light pt-4">
                I could give you excuses.
                <br />
                I could explain what happened.
              </p>
            </Stagger>

            <Stagger delay={1.5}>
              <p className="text-base md:text-lg text-warm-white/70 leading-relaxed font-light pt-4">
                But honestly...
              </p>
              <p className="text-base md:text-lg text-warm-white/70 leading-relaxed font-light pt-2">
                none of that
                <br />
                changes how you felt.
              </p>
            </Stagger>

            <Stagger delay={1.7}>
              <p className="text-base md:text-lg text-warm-white/90 leading-relaxed font-light pt-6">
                And I'm sorry.
              </p>
            </Stagger>
          </div>

          <Stagger delay={2.0}>
            <Button variant="secondary" arrow onClick={onContinue} className="!border-border-dark !text-warm-white/80 hover:!border-warm-white/40 hover:!text-warm-white">
              Keep reading
            </Button>
          </Stagger>
        </div>
      </div>
    </PageTransition>
  );
}
