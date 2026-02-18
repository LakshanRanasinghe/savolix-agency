import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Portfolio } from "@/components/home/portfolio";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";
import { TeamOverview } from "@/components/home/team-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <TeamOverview />
      <Testimonials />
      <CTA />
    </>
  );
}
