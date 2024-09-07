import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { LinkComp } from "@/components/common/Link";
import { Projects } from "@/components/Projects";
import { Service } from "@/components/Service";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${dmSans.className} overflow-x-hidden`}>
      <LinkComp url="#" />
      <Hero />
      <About />
      <Projects />
      <Service />
    </main>
  );
}
