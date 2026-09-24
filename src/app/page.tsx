import { Hero } from "@/components/sections/Hero";
import { ServicesIntro } from "@/components/sections/ServicesIntro";
import { Highlight } from "@/components/sections/Highlight";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Credibility } from "@/components/sections/Credibility";
import { Expertise } from "@/components/sections/Expertise";
import { Approach } from "@/components/sections/Approach";
import { Why } from "@/components/sections/Why";
import { TechnicalDepth } from "@/components/sections/TechnicalDepth";
import { About } from "@/components/sections/About";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesIntro />
      <Highlight />
      <BrandStatement />
      <Credibility />
      <Expertise />
      <Approach />
      <Why />
      <TechnicalDepth />
      <About />
      <FinalCta />
      <Contact />
    </>
  );
}
