import { Card } from "./common/Card";
import { Container } from "./common/Container";

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
  return (
    <Container className="bg-primary">
      <div className="space-y-9">
        <div className="space-y-7">
          <h1 className="text-5xl font-bold">We want to help</h1>
          <p className="text-3xl leading-[3rem]">
            homeless packs, volunteers, guardians, overstayers, shelters and
            other organisations
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} from="bottom" className="border-black">
              <h1 className="px-5 py-9 text-center text-xl">{service}</h1>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};
