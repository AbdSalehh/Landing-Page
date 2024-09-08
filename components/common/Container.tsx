import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ className = "", children }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center space-y-8 py-14 md:py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl px-10 sm:px-20 xl:px-0">{children}</div>
    </div>
  );
};
