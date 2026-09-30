import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';
import NoButton from './NoButton';
import content from '../data/content';

interface SceneTwoProps {
  onComplete: () => void;
}

export default function SceneTwo({ onComplete }: SceneTwoProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 30%, rgba(217, 184, 188, 0.14), transparent 55%), radial-gradient(ellipse at 20% 70%, rgba(139, 58, 69, 0.05), transparent 50%), #EFEAE3"
    >
      <div className="max-w-[640px] w-full text-center flex flex-col items-center">
        {/* The second no message */}
        <Stagger delay={0.3} className="mb-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-muted/60 font-light">
            listen
          </p>
        </Stagger>

        <Stagger delay={0.5} className="mb-14">
          <p className="text-xl md:text-2xl lg:text-[26px] font-light text-primary leading-relaxed tracking-tight">
            {content.secondNoMessage}
          </p>
        </Stagger>

        <Stagger delay={0.8} className="mb-10">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto" />
        </Stagger>

        {/* Buttons */}
        <Stagger delay={1.0} className="flex flex-col items-center gap-3 w-full max-w-[260px]">
          <Button variant="primary" onClick={onComplete} className="w-full">
            Yes
          </Button>
          <NoButton onClick={onComplete} />
        </Stagger>
      </div>
    </PageTransition>
  );
}
