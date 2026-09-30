import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';

interface IntroSectionProps {
  onContinue: () => void;
}

export default function IntroSection({ onContinue }: IntroSectionProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 20%, rgba(217, 184, 188, 0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(139, 58, 69, 0.06), transparent 50%), #F5F2ED"
    >
      <div className="max-w-[640px] w-full text-center flex flex-col items-center">
        {/* Small eyebrow */}
        <Stagger delay={0.3} className="mb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-muted/70 font-light">
            for Khola.
          </p>
        </Stagger>

        {/* Decorative thin line */}
        <Stagger delay={0.5} className="mb-16">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
        </Stagger>

        {/* Main text block */}
        <div className="space-y-6 mb-16">
          <Stagger delay={0.7}>
            <p className="text-xl md:text-2xl lg:text-[28px] text-primary font-light leading-relaxed tracking-tight">
              I know you're upset.
            </p>
          </Stagger>

          <Stagger delay={0.9}>
            <p className="text-xl md:text-2xl lg:text-[28px] text-primary font-light leading-relaxed tracking-tight">
              And I know I hurt you.
            </p>
          </Stagger>

          <Stagger delay={1.2}>
            <div className="pt-4">
              <p className="text-base md:text-lg text-muted font-light leading-relaxed">
                So I made something
              </p>
              <p className="text-base md:text-lg text-muted font-light leading-relaxed">
                instead of just saying sorry.
              </p>
            </div>
          </Stagger>
        </div>

        {/* Continue button with scroll hint */}
        <Stagger delay={1.5} className="flex flex-col items-center gap-6">
          <Button variant="primary" arrow onClick={onContinue}>
            Continue
          </Button>
          <div className="scroll-indicator mt-2">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden>
              <path d="M7 2 L7 16 M2 12 L7 17 L12 12" stroke="#68635E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            </svg>
          </div>
        </Stagger>
      </div>
    </PageTransition>
  );
}
