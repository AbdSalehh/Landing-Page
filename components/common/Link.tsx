import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, RefObject } from "react";

interface Props {
  className?: string;
  url: string;
}

export const LinkComp: FC<Props> = ({ className = "", url }): JSX.Element => {
  const linkRef = useScrollAnimation(
    "top",
  ) as unknown as RefObject<HTMLAnchorElement>;

  return (
    <Link
      href={url}
      ref={linkRef}
      className="from-top group fixed right-8 top-8 z-10 bg-white text-2xl"
      onClick={(e) => e.preventDefault()}
    >
      <div
        className={cn(
          "border-[3.5px] border-black px-2 py-1.5 duration-200 group-hover:-translate-y-2 group-hover:translate-x-2 group-active:-translate-x-2 group-active:translate-y-2",
          className,
        )}
      >
        donate
      </div>
    </Link>
  );
};
