import { motion } from "framer-motion";
import heroDish from "@/assets/hero-dish.png";
import logo from "@/assets/logo-tasty-crousty.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Neon ambient layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[180px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Subtle diagonal streaks for energy */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 80px,
          hsl(330 100% 60% / 0.3) 80px,
          hsl(330 100% 60% / 0.3) 81px
        )`
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-24">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <img
                src={logo}
                alt="Tasty Crousty"
                className="h-14 md:h-20 w-auto mx-auto lg:mx-0"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] leading-[0.85] text-foreground mb-4"
            >
              LE VRAI
              <br />
              <span className="gradient-neon-text">PHÉNOMÈNE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl mb-10 font-body max-w-md mx-auto lg:mx-0"
            >
              Le phénomène qui cartonne sans site web. Imagine avec un.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="px-8 py-4 font-display text-xl tracking-wider border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                VOIR LA DÉMO COMPLÈTE
              </a>
              <a
                href="#commander"
                className="px-8 py-4 font-display text-xl tracking-wider bg-primary text-primary-foreground neon-pink-glow hover:scale-105 transition-all duration-300"
              >
                COMMANDER
              </a>
            </motion.div>
          </div>

          {/* Right: Hero dish image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            {/* Pink glow behind dish */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px]" />

            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src={heroDish}
              alt="Le Crousty — poulet croustillant sur riz"
              className="relative z-10 w-full max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto"
              style={{ animation: "glowPulse 3s ease-in-out infinite" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
