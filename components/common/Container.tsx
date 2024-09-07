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
        "flex items-center justify-center space-y-8 py-28",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
};
