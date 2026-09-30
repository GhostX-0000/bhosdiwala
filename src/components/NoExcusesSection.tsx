import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';

interface NoExcusesSectionProps {
  onContinue: () => void;
}

export default function NoExcusesSection({ onContinue }: NoExcusesSectionProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 30%, rgba(217, 184, 188, 0.12), transparent 55%), #1F1B19"
    >
      <div className="max-w-[640px] w-full text-center">
        <div className="space-y-6 mb-12">
          <Stagger delay={0.3}>
            <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light">
              I don't expect you
              <br />
              to forget it.
            </p>
          </Stagger>

          <Stagger delay={0.5}>
            <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light">
              I don't expect everything
              <br />
              to suddenly be okay.
            </p>
          </Stagger>

          <Stagger delay={0.7}>
            <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light">
              And I definitely don't expect
              <br />
              you to forgive me just because
              <br />
              I made this website.
            </p>
          </Stagger>

          <Stagger delay={0.9}>
            <p className="text-base md:text-lg text-warm-white/90 leading-relaxed font-light pt-2">
              I just want you to know that
              <br />
              I genuinely regret it.
            </p>
          </Stagger>
        </div>

        {/* Thin animated divider */}
        <Stagger delay={1.1} className="my-12 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-soft-accent/40 to-transparent line-draw" />
        </Stagger>

        {/* Emphasized text */}
        <div className="space-y-4 mb-14">
          <Stagger delay={1.3}>
            <p className="text-xl md:text-2xl lg:text-[26px] text-warm-white font-light leading-relaxed tracking-tight">
              You deserved better
              <br />
              <span className="italic font-serif text-soft-accent">from me that day.</span>
            </p>
          </Stagger>

          <Stagger delay={1.5}>
            <p className="text-base md:text-lg text-warm-white/80 leading-relaxed font-light pt-4">
              And I want to do better now.
            </p>
          </Stagger>
        </div>

        <Stagger delay={1.7}>
          <Button variant="secondary" arrow onClick={onContinue} className="!border-border-dark !text-warm-white/80 hover:!border-warm-white/40 hover:!text-warm-white">
            There's more
          </Button>
        </Stagger>
      </div>
    </PageTransition>
  );
}
