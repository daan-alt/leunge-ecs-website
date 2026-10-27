import type { Locale } from "@/content";
import { features } from "@/lib/features";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Expertise } from "@/components/sections/Expertise";
import { Highlight } from "@/components/sections/Highlight";
import { Anatomy } from "@/components/sections/Anatomy";
import { ServiceMarquee } from "@/components/sections/ServiceMarquee";
import { Process } from "@/components/sections/Process";
import { Situations } from "@/components/sections/Situations";
import { Career } from "@/components/sections/Career";
import { Principles } from "@/components/sections/Principles";
import { TechnicalDepth } from "@/components/sections/TechnicalDepth";
import { FinalCta } from "@/components/sections/FinalCta";

// One page. The ids below are the menu's targets (nav.links in the content);
// each wrapper is one menu item, so the scroll-spy highlights the whole group:
//   #expertise  services          #parts    spare parts + anatomy
//   #process    how it works      #about    who we are, career, principles, technical depth
//   #contact    the request block (FinalCta)
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <Expertise locale={locale} />
      <div id="parts" className="scroll-mt-16">
        <Highlight locale={locale} />
        {features.scrolly && <Anatomy locale={locale} />}
        <ServiceMarquee locale={locale} />
      </div>
      <div id="process" className="scroll-mt-16">
        <Process locale={locale} />
        <Situations locale={locale} />
      </div>
      <div id="about" className="scroll-mt-16">
        <Intro locale={locale} />
        <Career locale={locale} />
        <Principles locale={locale} />
        <TechnicalDepth locale={locale} />
      </div>
      <FinalCta locale={locale} />
    </>
  );
}
