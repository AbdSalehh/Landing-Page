import { useEffect, useRef } from "react";

export function useScrollAnimation(animationType: string) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const ScrollMagic = require("scrollmagic");
      const controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
        triggerElement: sectionRef.current,
        triggerHook: 0.8,
        reverse: true,
      })
      .setClassToggle(sectionRef.current, `slide-in-${animationType}`)
        .addTo(controller);

      return () => {
        scene.destroy();
        controller.destroy();
      };
    }
  }, [animationType]);

  return sectionRef;
}
