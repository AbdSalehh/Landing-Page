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
      <div className="space-y-5 text-white md:space-y-9">
        <div className="space-y-2 sm:space-y-3 md:space-y-7">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Our projects
          </h1>
          <p className="text-sm leading-6 sm:text-3xl md:leading-[3rem]">
            are very different in terms of priority, scale and complexity of
            implementation.
          </p>
        </div>
        <div className="flex flex-col gap-7">
          {project.map(({ title, description, variant }, idx) => (
            <Card
              key={idx}
              variant={variant}
              className="space-y-4 py-8 pl-12 pr-16 sm:space-y-5 sm:p-14 sm:pr-20"
              from="left-side"
            >
              <h1 className="text-2xl font-bold sm:text-4xl">{title}</h1>
              <p className="text-md leading-5 sm:text-2xl">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};
