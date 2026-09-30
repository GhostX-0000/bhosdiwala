import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';

interface SecondChanceSectionProps {
  onContinue: () => void;
}

export default function SecondChanceSection({ onContinue }: SecondChanceSectionProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 30%, rgba(217, 184, 188, 0.20), transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(139, 58, 69, 0.06), transparent 50%), #F5F2ED"
    >
      <div className="max-w-[640px] w-full text-center relative">
        {/* Subtle warm glow */}
        <div
          aria-hidden
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(217, 184, 188, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="relative z-10">
          <Stagger delay={0.4}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary mb-16 leading-[1.05] tracking-tight">
              Thank <span className="italic font-serif text-accent">you.</span>
            </h1>
          </Stagger>

          <div className="space-y-5 mb-16">
            <Stagger delay={0.7}>
              <p className="text-base md:text-lg text-primary leading-relaxed font-light">
                I really mean it.
              </p>
            </Stagger>

            <Stagger delay={0.9}>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light pt-3">
                I don't promise that we'll
                <br />
                never argue again.
              </p>
            </Stagger>

            <Stagger delay={1.1}>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light">
                I don't promise everything
                <br />
                will be perfect.
              </p>
            </Stagger>

            <Stagger delay={1.3}>
              <p className="text-base md:text-lg text-primary leading-relaxed font-light pt-3">
                But I can promise
                <br />
                that I'll try harder.
              </p>
            </Stagger>
          </div>

          {/* Promises with emphasis */}
          <div className="space-y-4 mb-16">
            <Stagger delay={1.5}>
              <p className="text-lg md:text-xl text-primary font-light leading-relaxed tracking-tight">
                I'll listen better.
              </p>
            </Stagger>

            <Stagger delay={1.7}>
              <p className="text-lg md:text-xl text-primary font-light leading-relaxed tracking-tight">
                I'll communicate better.
              </p>
            </Stagger>

            <Stagger delay={1.9}>
              <p className="text-lg md:text-xl text-primary font-light leading-relaxed tracking-tight">
                And I'll <span className="italic font-serif text-accent">never</span>
                <br />
                take you for granted.
              </p>
            </Stagger>
          </div>

          <Stagger delay={2.1}>
            <Button variant="primary" arrow onClick={onContinue}>
              One more thing
            </Button>
          </Stagger>
        </div>
      </div>
    </PageTransition>
  );
}
