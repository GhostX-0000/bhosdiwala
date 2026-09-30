import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';
import content from '../data/content';

interface PersonalSectionProps {
  onContinue: () => void;
}

const items = [
  { label: 'I love', value: content.thingILove },
  { label: 'I miss', value: content.thingIMiss },
  { label: 'My favorite memory', value: content.favoriteMemory },
  { label: 'I\'ll never forget', value: content.specialMemory },
];

export default function PersonalSection({ onContinue }: PersonalSectionProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 20%, rgba(217, 184, 188, 0.14), transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(139, 58, 69, 0.05), transparent 50%), #F5F2ED"
    >
      <div className="max-w-[640px] w-full text-center">
        <Stagger delay={0.3} className="mb-14">
          <p className="text-base md:text-lg text-muted leading-relaxed font-light">
            There are things
            <br />
            I probably don't say enough.
          </p>
        </Stagger>

        {/* Timeline */}
        <div className="relative space-y-10 mb-14 text-left max-w-[480px] mx-auto">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent"
          />

          {items.map((item, index) => (
            <Stagger key={index} delay={0.5 + index * 0.2} className="relative pl-12 md:pl-14">
              {/* Number marker */}
              <div className="absolute left-0 top-0 flex items-center">
                <span className="text-[11px] tracking-[0.2em] text-accent/70 font-medium tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="text-base md:text-lg text-primary leading-relaxed font-light">
                <span className="text-muted/70">{item.label}</span>{' '}
                <span className="text-primary">{item.value}.</span>
              </p>
            </Stagger>
          ))}
        </div>

        <Stagger delay={1.5}>
          <p className="text-base md:text-lg text-primary leading-relaxed font-light mb-14">
            And honestly...
            <br />
            <span className="text-muted">life feels different</span>
            <br />
            <span className="text-muted">when we're not okay.</span>
          </p>
        </Stagger>

        <Stagger delay={1.7}>
          <Button variant="primary" arrow onClick={onContinue}>
            Continue
          </Button>
        </Stagger>
      </div>
    </PageTransition>
  );
}
