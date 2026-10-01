import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import Button from './Button';
import content from '../data/content';

interface SceneTwoProps {
  onComplete: () => void;
  onBack: () => void;
}

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
  return <span className="text-soft-accent font-medium">{children}</span>;
}

export default function SceneTwo({ onComplete, onBack }: SceneTwoProps) {
  return (
    <PageTransition
      background="radial-gradient(ellipse at 50% 20%, rgba(168, 50, 74, 0.18), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(168, 50, 74, 0.08), transparent 50%), #000000"
      align="start"
    >
      <div className="max-w-[600px] w-full mx-auto">
        {/* Opening eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[11px] tracking-[0.35em] uppercase text-warm-white/50 font-light mb-16 text-center"
        >
          from {content.senderName}
        </motion.p>

        {/* Message 1 */}
        <MessageSection>
          <p className="text-base md:text-lg text-warm-white/95 leading-[1.8] font-light">
            {content.messages[0]}
          </p>
        </MessageSection>

        {/* Message 2 */}
        <MessageSection>
          <p className="text-base md:text-lg text-warm-white/95 leading-[1.8] font-light">
            {content.messages[1]}
          </p>
        </MessageSection>

        {/* Message 3 */}
        <MessageSection>
          <p className="text-base md:text-lg text-warm-white/95 leading-[1.8] font-light">
            {content.messages[2]}
          </p>
        </MessageSection>

        {/* Message 4 */}
        <MessageSection>
          <p className="text-base md:text-lg text-warm-white/95 leading-[1.8] font-light">
            {content.messages[3]}
          </p>
        </MessageSection>

        {/* Message 5 */}
        <MessageSection>
          <p className="text-base md:text-lg text-warm-white/95 leading-[1.8] font-light">
            hrsa na ps hm <Highlight>i love you</Highlight> i forgave things that broke me bcs I couldn't imagine loosing you pain k wm dena baghair me nashu deal kole khpl pain sr
            <br />
            name ghohtal che ta hurt km nme dena mahke dse sa kare tta kha pata da
          </p>
        </MessageSection>

        {/* Message 6 */}
        <MessageSection>
          <p className="text-base md:text-lg text-warm-white/95 leading-[1.8] font-light">
            zamong da domra time yad ka sanga wo aw za sanga wom, <Highlight>i still love uh</Highlight>, and i will love uh.
            <br />
            hara pera ma chance warkari khpali meena la, os di tata realize shi
          </p>
        </MessageSection>

        {/* Message 7 */}
        <MessageSection>
          <p className="text-base md:text-lg text-warm-white/95 leading-[1.8] font-light">
            {content.messages[6]}
          </p>
        </MessageSection>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 mb-12 flex justify-center gap-4"
        >
          <Button
            variant="secondary"
            onClick={onBack}
            className="!border-border-dark/60 !text-warm-white/90 hover:!border-warm-white/50 hover:!text-warm-white"
          >
            back page
          </Button>
          <Button
            variant="secondary"
            arrow
            onClick={onComplete}
            className="!border-border-dark/60 !text-warm-white/90 hover:!border-warm-white/50 hover:!text-warm-white"
          >
            next page
          </Button>
        </motion.div>

        {/* Spacer */}
        <div className="h-10" />
      </div>
    </PageTransition>
  );
}
