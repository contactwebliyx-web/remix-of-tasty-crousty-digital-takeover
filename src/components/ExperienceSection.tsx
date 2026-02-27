import { motion } from "framer-motion";
import productImage from "@/assets/product-crousty-enhanced.png";

const ExperienceSection = () => {
  return (
    <section id="menu" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-neon-green text-sm tracking-[0.3em] uppercase mb-4 font-body">
            L'expérience
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-foreground">
            CROUSTILLANT.
            <br />
            <span className="text-neon-pink text-glow-pink">ADDICTIF.</span>
          </h2>
        </motion.div>

        {/* Large hero product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-lg overflow-hidden mb-8 flex justify-center"
        >
          <img
            src={productImage}
            alt="Le Crousty — poulet croustillant sur riz"
            className="w-full max-w-3xl h-auto object-contain"
          />
        </motion.div>

        {/* Tagline below product */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="font-display text-3xl md:text-5xl text-foreground mb-2">
            LE CROUSTY ORIGINAL
          </p>
          <p className="text-muted-foreground font-body text-lg">
            Tellement fort qu'ils ont donné le nom de notre marque au plat.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
