import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="commander" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background ambients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink/5 rounded-full blur-[250px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-neon-green text-sm tracking-[0.3em] uppercase mb-6 font-body"
        >
          Une proposition. Zéro risque.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-8xl lg:text-[10rem] text-foreground leading-[0.9] mb-8"
        >
          PRÊT À VIVRE
          <br />
          <span className="gradient-neon-text">L'EXPÉRIENCE ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-12 font-body"
        >
          Tasty Crousty mérite une présence en ligne à la hauteur. On s'en occupe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="px-10 py-5 font-display text-xl tracking-wider bg-primary text-primary-foreground neon-pink-glow hover:scale-105 transition-all duration-300"
          >
            TRAVAILLER AVEC WEBLIYX
          </a>
          <a
            href="#"
            className="px-10 py-5 font-display text-xl tracking-wider border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-background neon-green-glow transition-all duration-300"
          >
            TROUVER UN RESTAURANT
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex justify-center gap-8"
        >
          {["TikTok", "Instagram", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-muted-foreground hover:text-neon-pink transition-colors duration-300 text-sm tracking-wider uppercase font-body"
            >
              {social}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-border/30">
        <p className="text-center text-muted-foreground text-xs font-body tracking-wider">
          © 2026 TASTY CROUSTY — LE VRAI PHÉNOMÈNE
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
