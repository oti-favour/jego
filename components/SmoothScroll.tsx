"use client";
import "@/components/progress/progress.css";
import {
  motion,
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";
import ProgressIndicator from "./progress/ProgressIndicator";

interface MomentumScrollProps {
  children: React.ReactNode;
}

const MomentumScroll = ({ children }: MomentumScrollProps): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollableHeight, setScrollableHeight] = useState<number>(0);

  const resizeScrollableHeight = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        setScrollableHeight(entry.contentRect.height);
      }
    },
    [],
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizeScrollableHeight(entries),
    );
    scrollRef.current && resizeObserver.observe(scrollRef.current);

    return () => resizeObserver.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { scrollY, scrollYProgress } = useScroll();

  const negativeScrollY = useTransform(
    scrollY,
    [0, scrollableHeight],
    [0, -scrollableHeight],
  );

  const springPhysics: SpringOptions = {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100,
  };

  const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

  return (
    <div className="relative scroll-smooth">
      <motion.div
        ref={scrollRef}
        style={{ y: springNegativeScrollY }}
        className="scroll-container"
      >
        {children}
      </motion.div>

      <div style={{ height: scrollableHeight }} />
      <ProgressIndicator scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default MomentumScroll;
