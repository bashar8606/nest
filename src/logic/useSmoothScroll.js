import { useLayoutEffect } from "react";

import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  let lenis;
  useLayoutEffect(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    requestAnimationFrame(raf);
    window.lenis = lenis;
  }, []);
};

export default useSmoothScroll;