import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, RefObject } from "react";

interface Props {
  className?: string;
  url?: string;
  from: string;
  variant?: string;
  children: React.ReactNode;
}

export const Card: FC<Props> = ({
  className = "",
  url = "#",
  from,
  children,
  variant,
}): JSX.Element => {
  const cardRef = useScrollAnimation(
    from,
  ) as unknown as RefObject<HTMLAnchorElement>;

  return (
    <Link
      href={url}
      ref={cardRef}
      className={`from-${from} group ${variant ? `bg-${variant}` : "bg-white"}`}
    >
      <div
        className={cn(
          "h-full border-[3.5px] duration-200 group-hover:-translate-y-3 group-hover:translate-x-3 group-active:-translate-x-3 group-active:translate-y-3",
          className,
        )}
      >
        {children}
      </div>
    </Link>
  );
};
