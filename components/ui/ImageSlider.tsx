import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}

export default function ImageSlider({
  images,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className = "",
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          className={cn(className)}
          {...framerProps}
        >
          <Image
            src={images[index]}
            width={180}
            height={180}
            alt={`Kata: ${images[index]}`}
            className="size-24 sm:size-44"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
