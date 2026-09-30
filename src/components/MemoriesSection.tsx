import PageTransition, { Stagger } from './PageTransition';
import Button from './Button';
import content from '../data/content';

interface MemoriesSectionProps {
  onContinue: () => void;
}

const imagePaths = [
  'https://image.qwenlm.ai/generated-images/cb196ba1-0044-4363-b578-5dc17861ccd7/_result.png',
  'https://image.qwenlm.ai/generated-images/802cab24-f2b6-45b0-a965-5f10ce36e309/_result.png',
  'https://image.qwenlm.ai/generated-images/48dfda24-1f40-41cd-ac14-202b9fef17c3/_result.png',
  'https://image.qwenlm.ai/generated-images/3738e4f1-e60c-41e1-b3b7-bd1a4925d91f/_result.png',
];

export default function MemoriesSection({ onContinue }: MemoriesSectionProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 20%, rgba(217, 184, 188, 0.12), transparent 55%), #EFEAE3"
    >
      <div className="max-w-[680px] w-full text-center">
        <Stagger delay={0.3}>
          <p className="text-[11px] tracking-[0.35em] uppercase text-muted/70 font-light mb-6">
            before you go
          </p>
        </Stagger>

        <Stagger delay={0.5}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-14 leading-[1.1] tracking-tight">
            Some <span className="italic font-serif text-accent">memories.</span>
          </h2>
        </Stagger>

        {/* Asymmetric gallery - mobile: stacked, desktop: asymmetric */}
        <div className="space-y-6 md:space-y-8 mb-14">
          {/* Large first image */}
          <Stagger delay={0.7} className="group">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] md:aspect-[16/10] bg-border/40">
              <img
                src={imagePaths[0]}
                alt={content.photoAltText[0]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="text-sm text-muted mt-4 font-light italic">
              {content.photoCaptions[0]}
            </p>
          </Stagger>

          {/* Two smaller images side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Stagger delay={0.9} className="group">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] bg-border/40">
                <img
                  src={imagePaths[1]}
                  alt={content.photoAltText[1]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-sm text-muted mt-4 font-light italic">
                {content.photoCaptions[1]}
              </p>
            </Stagger>

            <Stagger delay={1.1} className="group">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] bg-border/40">
                <img
                  src={imagePaths[2]}
                  alt={content.photoAltText[2]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-sm text-muted mt-4 font-light italic">
                {content.photoCaptions[2]}
              </p>
            </Stagger>
          </div>

          {/* Large final image */}
          <Stagger delay={1.3} className="group">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] md:aspect-[16/10] bg-border/40">
              <img
                src={imagePaths[3]}
                alt={content.photoAltText[3]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <p className="text-sm text-muted mt-4 font-light italic">
              {content.photoCaptions[3]}
            </p>
          </Stagger>
        </div>

        <Stagger delay={1.6}>
          <Button variant="primary" arrow onClick={onContinue}>
            One last thing
          </Button>
        </Stagger>
      </div>
    </PageTransition>
  );
}
