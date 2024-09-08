import { RefObject } from "react";
import { Container } from "./common/Container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = (): JSX.Element => {
  const videoRef = useScrollAnimation(
    "bottom",
  ) as unknown as RefObject<HTMLIFrameElement>;

  return (
    <Container>
      <div className="space-y-5 md:space-y-9">
        <div className="space-y-2 sm:space-y-3 md:space-y-7">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">We are</h1>
          <p className="text-sm leading-6 sm:text-3xl md:leading-[3rem]">
            team of like-minded people, socially active companies, media
            personalities, volunteers who help low-income shelters and foster
            carers to support homeless animals.
          </p>
        </div>
        <div className="space-y-2 sm:space-y-3 md:space-y-7">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Our primary goal
          </h1>
          <p className="text-sm leading-6 sm:text-3xl md:leading-[3rem]">
            is to provide animals with the most necessary things - food,
            medicine, and urgent needs for the livelihood of shelters. We
            believe in our power and the power of conscious citizens who care
            about the environment and their health, who understand the
            importance of helping each other, especially our little friends.
            Growth begins with your care for your loved ones. Animals are one of
            the closest creatures to humans who remain with us throughout our
            lives. We all know the healing power of warmth, grace, and big
            loving eyes.
          </p>
          <div className="text-md ml-6 space-y-2 border-l-4 border-third px-4 py-3 italic sm:text-3xl md:ml-14">
            <p>&quot;Animals need to have friends. Just like humans.&quot;</p>
            <p>- James Herriot, All Creatures Great and Small</p>
          </div>
          <p className="text-sm leading-6 sm:text-3xl md:leading-[3rem]">
            Who else if not we should support our younger brothers, especially
            in difficult times? Let&apos;s be friends!
          </p>
        </div>
        <iframe
          ref={videoRef}
          src="https://www.youtube.com/embed/5Wk1rp99B7o?si=KjnTC005Z185NtrO"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="from-bottom h-48 w-full border-4 border-black sm:h-80 lg:h-[581px]"
        ></iframe>
      </div>
    </Container>
  );
};
