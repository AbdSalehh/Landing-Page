import { Container } from "./common/Container";
import ImageSlider from "./ui/ImageSlider";
import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPatreon,
} from "react-icons/fa";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const icons = [
  {
    name: "Youtube",
    link: "https://youtube.com",
    icon: <FaYoutube className="size-9" />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    icon: <FaInstagram className="size-9" />,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: <FaFacebookF className="size-9" />,
  },
  {
    name: "Patreon",
    link: "https://patreon.com",
    icon: <FaPatreon className="size-9" />,
  },
  {
    name: "Telegram",
    link: "https://telegram.com",
    icon: <FaTelegramPlane className="size-9" />,
  },
];

export const Hero = (): JSX.Element => {
  const imageRef = useScrollAnimation("top");
  const titleRef = useScrollAnimation("right-side");
  const linkRef = useScrollAnimation("bottom");

  return (
    <Container className="bg-primary">
      <div className="relative flex items-center justify-center gap-11">
        <div className="from-top relative size-44" ref={imageRef}>
          <ImageSlider
            images={["/hero-image1.svg", "/hero-image2.svg"]}
            className="absolute top-0"
          />
        </div>
        <div
          ref={titleRef}
          className="from-right-side hero-title w-72 text-[3.35rem] font-bold leading-[1]"
        >
          Innovative Solutions for Animals
        </div>
      </div>
      <div ref={linkRef} className="from-bottom mt-7">
        <p className="text-center text-3xl">charity organization</p>
        <div className="mt-5 flex items-center justify-center gap-8">
          {icons.map((icon) => (
            <Link
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              key={icon.name}
              className="duration-200 hover:scale-[.85]"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
        <IoIosArrowDropdownCircle className="absolute -bottom-20 left-1/2 size-6 -translate-x-1/2 animate-bounce" />
      </div>
    </Container>
  );
};
