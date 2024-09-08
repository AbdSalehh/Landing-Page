import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { LinkComp } from "@/components/common/Link";
import { Projects } from "@/components/Projects";
import { Service } from "@/components/Service";
import { DM_Sans } from "next/font/google";
import { Team } from "@/components/Team";
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovative Solutions for Animals</title>
        <meta
          name="description"
          content="We are team of like-minded people, socially active companies, media personalities, volunteers who help low-income shelters and foster carers to support homeless animals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={`${dmSans.className} overflow-x-hidden`}>
        <LinkComp url="#" />
        <Hero />
        <About />
        <Projects />
        <Service />
        <Team />
      </main>
    </>
  );
}
