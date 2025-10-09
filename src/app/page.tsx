import HeroSection from "@/components/hero-section"
import ContentSection from "@/components/about"
import FooterSection from "@/components/footer"
import Projects from "@/components/projects"
export default function Page(){
  return(
    <div>
      <HeroSection/>
      <ContentSection/>
      <Projects/>
      <FooterSection/>
    </div>
  )
}