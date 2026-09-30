import PageTransition, { Stagger } from './PageTransition';

export default function NoResponse() {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 50%, rgba(104, 99, 94, 0.08), transparent 60%), #EFEAE3"
    >
      <div className="max-w-[640px] w-full text-center">
        <Stagger delay={0.4}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-primary leading-tight tracking-tight mb-12">
            Okay.
          </p>
        </Stagger>

        <div className="space-y-5 mb-12">
          <Stagger delay={0.7}>
            <p className="text-base md:text-lg text-muted leading-relaxed font-light">
              I respect your answer.
            </p>
          </Stagger>

          <Stagger delay={0.9}>
            <p className="text-base md:text-lg text-muted leading-relaxed font-light">
              I won't try to force you
              <br />
              into saying yes.
            </p>
          </Stagger>

          <Stagger delay={1.1}>
            <p className="text-base md:text-lg text-primary leading-relaxed font-light pt-3">
              I just want you to know
              <br />
              that I'm sorry.
            </p>
          </Stagger>
        </div>

        {/* Thin divider */}
        <Stagger delay={1.3} className="my-10 flex justify-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </Stagger>

        <Stagger delay={1.5}>
          <p className="text-base md:text-lg text-muted leading-relaxed font-light">
            And if someday
            <br />
            you want to talk...
          </p>
        </Stagger>

        <Stagger delay={1.8}>
          <p className="text-xl md:text-2xl text-primary font-light mt-6 tracking-tight">
            I'll be here.
          </p>
        </Stagger>
      </div>
    </PageTransition>
  );
}
