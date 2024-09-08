import { Card } from "./common/Card";
import { Container } from "./common/Container";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { RefObject } from "react";
import { BsArrowRight } from "react-icons/bs";

const services = [
  "Shelter of Victoria Bulbyna",
  "City of faithful hearts",
  "Shelter of Natalia",
  "Tymoshenko",
  "Shelter of Jeanne Sass",
  "Shelter of Victoria",
  "Bondarenko",
  "Sterilization center",
  "Zoo chance",
  "Save lives",
  "City Center for the Treatment of Animals",
  "Society for the Protection of Animals in Sumy",
  "The right to life",
  "4 paws",
  "The kingdom of cats",
  "Zvir",
  "Mercy",
  "Happy dog",
  "Give me a paw, friend",
  "Friend",
  "Hope",
  "We are for the right to life",
  "Planeta",
  "Second Life",
  "Happy shore",
  "Retrieverteam",
  "Shelter of Irina Dobrolyubova",
  "Matilda",
  "Life",
  "Second chance",
  "SOS",
  "Best friends",
];

export const Service = (): JSX.Element => {
  const linkRef = useScrollAnimation(
    "left-side",
  ) as unknown as RefObject<HTMLAnchorElement>;

  return (
    <Container className="bg-primary">
      <div className="space-y-5 md:space-y-9">
        <div className="space-y-2 sm:space-y-3 md:space-y-7">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            We want to help
          </h1>
          <p className="text-sm leading-6 sm:text-3xl md:leading-[3rem]">
            homeless packs, volunteers, guardians, overstayers, shelters and
            other organisations
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              from="bottom"
              className="flex items-center justify-center border-black"
            >
              <h1 className="px-5 py-5 text-center text-sm sm:py-9 sm:text-xl">
                {service}
              </h1>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap pt-3 sm:pt-16">
          <Link
            href="#"
            ref={linkRef}
            className="from-left-side bg-third text-2xl"
            onClick={(e) => e.preventDefault()}
          >
            <div className="group flex items-center gap-4 border-[3.5px] border-black px-8 py-3 text-base font-bold duration-200 group-hover:-translate-y-2 group-hover:translate-x-2 group-active:-translate-x-2 group-active:translate-y-2 sm:px-10 sm:text-[22px]">
              <p>apply for help</p>
              <BsArrowRight className="text-base duration-200 group-hover:translate-x-4 sm:text-5xl" />
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};
