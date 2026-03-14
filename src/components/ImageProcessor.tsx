import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { processImage } from "@/lib/removeBackground";
import { Upload, Download, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImageProcessor = () => {
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setOriginalUrl(URL.createObjectURL(file));
    setResultUrl(null);
    setProcessing(true);
    try {
      const url = await processImage(file);
      setResultUrl(url);
    } catch (e) {
      console.error("Background removal failed:", e);
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = "image-sans-fond.png";
    a.click();
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-4xl md:text-6xl text-foreground text-center mb-4">
          REMOVE <span className="text-neon-pink text-glow-pink">BACKGROUND</span>
        </h2>
        <p className="text-muted-foreground text-center font-body mb-10">
          Supprime le fond de tes images produit en un clic grâce à l'IA.
        </p>

        {/* Upload zone */}
        <div
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-border hover:border-neon-pink/50 rounded-lg p-12 text-center cursor-pointer transition-colors duration-300 mb-10"
        >
          <Upload className="mx-auto mb-3 text-muted-foreground" size={32} />
          <p className="text-muted-foreground font-body">
            Clique ou glisse une image ici
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>

        {/* Processing loader */}
        {processing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted rounded-lg">
              <div className="w-5 h-5 border-2 border-neon-pink border-t-transparent rounded-full animate-spin" />
              <span className="font-body text-neon-pink animate-pulse">
                Traitement IA en cours...
              </span>
            </div>
          </motion.div>
        )}

        {/* Results grid */}
        {(originalUrl || resultUrl) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Original */}
            {originalUrl && (
              <div>
                <p className="font-display text-lg text-muted-foreground mb-2 text-center">ORIGINAL</p>
                <div className="rounded-lg overflow-hidden border border-border bg-muted">
                  <img src={originalUrl} alt="Original" className="w-full h-auto object-contain" />
                </div>
              </div>
            )}

            {/* Result with checkerboard */}
            {resultUrl && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <p className="font-display text-lg text-neon-green mb-2 text-center">SANS FOND</p>
                <div
                  className="rounded-lg overflow-hidden border border-border"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, hsl(var(--muted)) 25%, transparent 25%),
                      linear-gradient(-45deg, hsl(var(--muted)) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, hsl(var(--muted)) 75%),
                      linear-gradient(-45deg, transparent 75%, hsl(var(--muted)) 75%)
                    `,
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                  }}
                >
                  <img src={resultUrl} alt="Sans fond" className="w-full h-auto object-contain" />
                </div>
                <Button
                  onClick={handleDownload}
                  className="w-full mt-3 bg-neon-green text-background hover:bg-neon-green/80 font-display tracking-wider"
                >
                  <Download size={18} />
                  TÉLÉCHARGER
                </Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageProcessor;
