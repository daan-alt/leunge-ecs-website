import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Expertise } from "@/components/sections/Expertise";
import { Highlight } from "@/components/sections/Highlight";
import { Process } from "@/components/sections/Process";
import { Principles } from "@/components/sections/Principles";
import { TechnicalDepth } from "@/components/sections/TechnicalDepth";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Expertise />
      <Highlight />
      <Process />
      <Principles />
      <TechnicalDepth />
      <FinalCta />
    </>
  );
}
