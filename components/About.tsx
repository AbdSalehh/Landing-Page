import { RefObject } from "react";
import { Container } from "./common/Container";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = (): JSX.Element => {
  const videoRef = useScrollAnimation(
    "bottom",
  ) as unknown as RefObject<HTMLIFrameElement>;

  return (
    <Container>
      <div className="space-y-9">
        <div className="space-y-7">
          <h1 className="text-5xl font-bold">We are</h1>
          <p className="text-3xl leading-[3rem]">
            team of like-minded people, socially active companies, media
            personalities, volunteers who help low-income shelters and foster
            carers to support homeless animals.
          </p>
        </div>
        <div className="space-y-7">
          <h1 className="text-5xl font-bold">Our primary goal</h1>
          <p className="text-3xl leading-[3rem]">
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
          <div className="border-third ml-14 space-y-2 border-l-4 px-4 py-3 text-3xl italic">
            <p>&quot;Animals need to have friends. Just like humans.&quot;</p>
            <p className="text-3xl italic">
              - James Herriot, All Creatures Great and Small
            </p>
          </div>
          <p className="text-3xl leading-[3rem]">
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
          className="from-bottom h-[581px] w-full border-4 border-black"
        ></iframe>
      </div>
    </Container>
  );
};
