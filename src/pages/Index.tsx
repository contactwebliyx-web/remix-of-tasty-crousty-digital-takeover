import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ViralProofSection from "@/components/ViralProofSection";
import ExperienceSection from "@/components/ExperienceSection";
import LocationsSection from "@/components/LocationsSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ViralProofSection />
      <ExperienceSection />
      <LocationsSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
