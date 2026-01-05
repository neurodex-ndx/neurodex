import { HeroSection } from "@/components/landing-page/HeroSection";
import { AboutSection } from "@/components/landing-page/AboutSection";
import { MissionSection } from "@/components/landing-page/MissionSection";
import { InitiativesSection } from "@/components/landing-page/InitiativesSection";
import { SupportersCarousel } from "@/components/landing-page/SupportersCarousel";
import { ParticipationSection } from "@/components/landing-page/ParticipationSection";
import { Footer } from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SupportersCarousel />
      <AboutSection />
      <MissionSection />
      <InitiativesSection />
      <ParticipationSection />
      <Footer />
    </main>
  );
}
