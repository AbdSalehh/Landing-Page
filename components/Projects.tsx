import { Card } from "./common/Card";
import { Container } from "./common/Container";

const project = [
  {
    title: "Emergency Aid. WAR 2022.",
    variant: "black",
    description:
      "providing food and medicine to the shelters and animals which lost their homes and families due to the war in 2022.",
  },
  {
    title: "Non-commercial feed line",
    variant: "fourth",
    description:
      "construction of industrial production base where food for shelters will be produced on a free basis",
  },
  {
    title: "Education and Control",
    variant: "third",
    description:
      "lectures on communication, organisation and coordination of processes, control over the use of aid",
  },
];

export const Projects = (): JSX.Element => {
  return (
    <Container className="bg-secondary">
      <div className="space-y-9 text-white">
        <div className="space-y-7">
          <h1 className="text-5xl font-bold">Our projects</h1>
          <p className="text-3xl leading-[3rem]">
            are very different in terms of priority, scale and complexity of
            implementation.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          {project.map(({ title, description, variant }, idx) => (
            <Card
              key={idx}
              variant={variant}
              className="space-y-5 p-14 pr-20"
              from="left-side"
            >
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-2xl">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};
