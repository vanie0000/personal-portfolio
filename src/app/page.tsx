import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/about";
import Projects from "@/components/projects";
import FooterSection from "@/components/footer";

export default function Page() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <ContentSection />
      <Projects />
      <FooterSection />
    </div>
  );
}