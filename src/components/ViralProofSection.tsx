import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 12, suffix: "M+", label: "Vues TikTok" },
  { value: 500, suffix: "K+", label: "Followers" },
  { value: 16, suffix: "", label: "Restaurants" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

const tiktokPosts = [
  { views: "4.2M", caption: "Le croustillant qui rend fou 🍗🔥", likes: "892K" },
  { views: "2.8M", caption: "File d'attente à Crousty 😱", likes: "621K" },
  { views: "1.9M", caption: "La sauce secrète enfin révélée 🤫", likes: "445K" },
  { views: "3.1M", caption: "ASMR Crousty c'est satisfaisant 😍", likes: "718K" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl md:text-7xl text-neon-pink text-glow-pink">
        {count}{suffix}
      </p>
    </div>
  );
}

const ViralProofSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Social Proof
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-foreground">
            ILS EN PARLENT
            <br />
            <span className="text-neon-pink text-glow-pink">PARTOUT.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2 tracking-wider uppercase font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TikTok-style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiktokPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors duration-300 group cursor-pointer"
            >
              {/* Fake TikTok video placeholder */}
              <div className="aspect-[9/16] bg-muted rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-foreground border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neon-pink font-body font-semibold">{post.views} vues</span>
                <span className="text-muted-foreground">❤️ {post.likes}</span>
              </div>
              <p className="text-foreground/80 text-sm mt-2 font-body">{post.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViralProofSection;
