import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import content from '../data/content';

/**
 * Renders a section of Kabir's message with optional inline highlighting.
 * Highlights are purely visual — no words are changed.
 */
function MessageSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-12 md:mb-16"
    >
      {children}
    </motion.div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-soft-accent font-medium">
      {children}
    </span>
  );
}

export default function SceneFour() {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 20%, rgba(139, 58, 69, 0.14), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(139, 58, 69, 0.06), transparent 50%), #171717"
      align="start"
    >
      <div className="max-w-[600px] w-full mx-auto">
          {/* Opening eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[11px] tracking-[0.35em] uppercase text-warm-white/30 font-light mb-16 text-center"
          >
            from {content.senderName}
          </motion.p>

          {/* Section 1 */}
          <MessageSection>
            <p className="text-base md:text-lg text-warm-white/80 leading-[1.8] font-light">
              ik tme om hurt kre nd ik you cant get over it quickly i jus hope you dont judge everything i feel fir you by the worst thing i did while i ws hurt mam dka ghlti okra depere kho da na che ta ba loose kom
            </p>
          </MessageSection>

          {/* Section 2 */}
          <MessageSection>
            <p className="text-base md:text-lg text-warm-white/80 leading-[1.8] font-light">
              im not going to make excuses for what i did kho zm hurt wm
              <br />
              I thought somehow it would make you understand che smra pain k wam but i realise now i ended up hurting you too
            </p>
          </MessageSection>

          {/* Section 3 */}
          <MessageSection>
            <p className="text-base md:text-lg text-warm-white/80 leading-[1.8] font-light">
              I swear zara interest me hm pke nao da tole khbre me aghy use kolo dpra kole che sta dpra me okra aka sat me wrta safa ovel na nd ta me na replace kole naba chrta oghwaram
            </p>
          </MessageSection>

          {/* Section 4 */}
          <MessageSection>
            <p className="text-base md:text-lg text-warm-white/80 leading-[1.8] font-light">
              ma da drd ghalatt tareqe sr handle ko kho my actions came from a place of pain not because I stopped loving you
            </p>
          </MessageSection>

          {/* Section 5 — with subtle highlight on "i love you" */}
          <MessageSection>
            <p className="text-base md:text-lg text-warm-white/80 leading-[1.8] font-light">
              hrsa na ps hm <Highlight>i love you</Highlight> i forgave things that broke me bcs I couldn't imagine loosing you pain k wm dena baghair me nashu deal kole khpl pain sr
              <br />
              name ghohtal che ta hurt km nme dena mahke dse sa kare tta kha pata da
            </p>
          </MessageSection>

          {/* Section 6 — with subtle highlight on "i still love you" */}
          <MessageSection>
            <p className="text-base md:text-lg text-warm-white/80 leading-[1.8] font-light">
              kho ta zmng ds dre salor kala yad ka hrsa yad ka da snga wu za snga wm <Highlight>i still love you</Highlight> hra pera ma chance wrkre mene la depere tana ghwarm
            </p>
          </MessageSection>

          {/* Section 7 */}
          <MessageSection>
            <p className="text-base md:text-lg text-warm-white/80 leading-[1.8] font-light">
              mata pata da you've seen things nd ik hurt kai bde za e deny kom na kho da hrsa i lied hrsa was on purpose
              <br />
              I ws carrying so much pain che ma pasa khpl pain control ko aghy da pasa ta kawal
            </p>
          </MessageSection>

          {/* Section 8 — with subtle highlight on "I want you back" */}
          <MessageSection>
            <p className="text-lg md:text-xl text-warm-white/90 leading-[1.8] font-light">
              <Highlight>I want you back</Highlight> da cycle odrawa bska os
            </p>
          </MessageSection>

          {/* Section 9 — FINAL WORDS — slightly larger, more emphasis */}
          <MessageSection delay={0.1}>
            <div className="pt-6 border-t border-border-dark/30">
              <p className="text-lg md:text-xl text-warm-white leading-[1.8] font-light">
                Os na ps om drta wem che im choosing honesty <Highlight>i need you i fckn love you</Highlight> ds dmra time drta hrsa pata da khola hrsa strgy ma patawa os
              </p>
            </div>
          </MessageSection>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-20 mb-12 text-center"
          >
            <p className="text-xl md:text-2xl font-serif italic text-soft-accent/70 tracking-wide">
              — {content.senderName}
            </p>
          </motion.div>

          {/* Spacer for comfortable scroll end */}
          <div className="h-20" />
      </div>
    </PageTransition>
  );
}
