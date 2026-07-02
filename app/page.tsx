import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import PricingSection from "@/components/PricingSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <TrustedBy />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal>
        <DashboardPreview />
      </ScrollReveal>
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal>
        <CTABanner />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
