import Image from "next/image";
import { Container } from "./common/Container";
import { TeamCard } from "./common/TeamCard";

const members = [
  {
    name: "Daryna Deriy",
    position: "Chairman of the Board",
    photo: "/members/daryna-deriy.jpeg",
  },
  {
    name: "Polina Snisarenko-Kulchytska",
    position: "Curator of the Foundation",
    photo: "/members/polina-snisarenko-kulchytska.jpeg",
  },
  {
    name: "Bohdan Kulchytsky",
    position: "Executive Manager",
    photo: "/members/bohdan-kulchytsky.jpeg",
  },
  {
    name: "Mykhaylo Deriy",
    position: "Operation Manager",
    photo: "/members/mykhaylo-deriy.jpeg",
  },
  {
    name: "Ksenia Nikishina",
    position: "Office manager",
    photo: "/members/ksenia-nikishina.jpeg",
  },
  {
    name: "Anna Andriychuk",
    position: "SMM-manager",
    photo: "/members/anna-andriychuk.jpeg",
  },
  {
    name: "Anastasia Kovalchuk",
    position: "Director",
    photo: "/members/anastasia-kovalchuk.jpeg",
  },
  {
    name: "Basil Gloo",
    position: "Web Developer",
    photo: "/members/basil-gloo.png",
  },
  {
    name: "Lina Yakobchuk",
    position: "Designer",
    photo: "/members/lina-yakobchuk.jpeg",
  },
  {
    name: "Anastasia Yevchenko",
    position: "Translator",
    photo: "/members/anastasia-yevchenko.jpeg",
  },
  {
    name: "Office Manager",
    position: "open vacancy",
    photo: "/members/office-manager.svg",
  },
  {
    name: "SEO specialist",
    position: "open vacancy",
    photo: "/members/seo-specialist.svg",
  },
];

export const Team = (): JSX.Element => {
  return (
    <Container className="overflow-y-hidden">
      <div className="space-y-5 md:space-y-9">
        <div className="space-y-2 sm:space-y-3 md:space-y-7">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Our team
          </h1>
          <p className="text-sm leading-6 sm:text-3xl md:leading-[3rem]">
            consists of completely different people who are united by a common
            desire - to help.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {members.map(({ name, position, photo }, idx) => (
            <TeamCard from="bottom" key={idx}>
              <Image
                src={photo}
                alt={name}
                width={150}
                height={150}
                className="grayscale"
              />
              <h1 className="text-center text-sm sm:text-lg">{name}</h1>
              <p className="text-center text-xs sm:text-base">{position}</p>
            </TeamCard>
          ))}
        </div>
      </div>
    </Container>
  );
};
