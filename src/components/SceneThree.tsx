import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';

interface SceneThreeProps {
  onComplete: () => void;
}

export default function SceneThree({ onComplete }: SceneThreeProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 40%, rgba(139, 58, 69, 0.10), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(217, 184, 188, 0.08), transparent 50%), #F5F2ED"
    >
      <div className="max-w-[640px] w-full text-center flex flex-col items-center">
        <Stagger delay={0.3} className="mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-muted/60 font-light">
            one last thing
          </p>
        </Stagger>

        <Stagger delay={0.5} className="mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-[1.15] tracking-tight">
            Will you <span className="italic font-serif text-accent">listen?</span>
          </h1>
        </Stagger>

        <Stagger delay={0.8} className="mb-10">
          <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-[400px]">
            Just hear me out.
            <br />
            That's all I ask.
          </p>
        </Stagger>

        {/* Only Yes button */}
        <Stagger delay={1.1}>
          <Button variant="primary" onClick={onComplete} className="min-w-[200px]">
            Yes
          </Button>
        </Stagger>
      </div>
    </PageTransition>
  );
}
