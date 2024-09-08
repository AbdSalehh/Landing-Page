import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { FC, RefObject } from "react";

interface Props {
  className?: string;
  url?: string;
  from: string;
  variant?: string;
  children: React.ReactNode;
}

export const TeamCard: FC<Props> = ({
  className = "",
  from,
  children,
}): JSX.Element => {
  const cardRef = useScrollAnimation(
    from,
  ) as unknown as RefObject<HTMLDivElement>;

  return (
    <div className={`from-${from} group bg-primary`} ref={cardRef}>
      <div
        className={cn(
          "flex h-full flex-col items-center justify-start gap-2 border-[3.5px] border-black p-8 pb-11 duration-200 hover:scale-90",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
