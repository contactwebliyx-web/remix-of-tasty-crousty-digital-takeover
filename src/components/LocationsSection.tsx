import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Paris 11e", status: "Ouvert", wait: "~25 min" },
  { city: "Paris 18e", status: "Ouvert", wait: "~40 min" },
  { city: "Ivry-sur-Seine", status: "Ouvert", wait: "~15 min" },
  { city: "Épinay-sur-Seine", status: "Ouvert", wait: "~20 min" },
  { city: "Corby", status: "Ouvert", wait: "~10 min" },
  { city: "Montreuil", status: "Ouvert", wait: "~35 min" },
  { city: "Melun", status: "Bientôt", wait: "—" },
  { city: "Lyon", status: "Bientôt", wait: "—" },
  { city: "Grenoble", status: "Bientôt", wait: "—" },
  { city: "Marseille", status: "Bientôt", wait: "—" },
  { city: "Orléans", status: "Bientôt", wait: "—" },
  { city: "Nantes", status: "Bientôt", wait: "—" },
];

const LocationsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Où nous trouver
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-foreground">
            FILES D'ATTENTE
            <br />
            <span className="text-neon-pink text-glow-pink">QUOTIDIENNES.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            Nouvelles villes chaque mois. Le phénomène ne s'arrête plus.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="flex justify-center gap-12 md:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-display text-6xl md:text-8xl text-neon-pink text-glow-pink">12</p>
            <p className="text-muted-foreground text-sm tracking-wider uppercase font-body">Île-de-France</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="font-display text-6xl md:text-8xl text-neon-green text-glow-green">4</p>
            <p className="text-muted-foreground text-sm tracking-wider uppercase font-body">En Province</p>
          </motion.div>
        </div>

        {/* Location grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`bg-card border rounded-lg p-4 transition-all duration-300 cursor-pointer group ${
                loc.status === "Ouvert"
                  ? "border-border hover:border-neon-green/50"
                  : "border-border/50 opacity-60"
              }`}
            >
              <div className="flex items-start gap-2">
                <MapPin className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  loc.status === "Ouvert" ? "text-neon-green" : "text-muted-foreground"
                }`} />
                <div>
                  <p className="text-foreground font-body font-medium text-sm">{loc.city}</p>
                  <p className={`text-xs mt-1 font-body ${
                    loc.status === "Ouvert" ? "text-neon-green" : "text-muted-foreground"
                  }`}>
                    {loc.status}
                  </p>
                  {loc.status === "Ouvert" && (
                    <p className="text-muted-foreground text-xs mt-0.5 font-body">
                      Attente: {loc.wait}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
