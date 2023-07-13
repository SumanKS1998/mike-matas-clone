import React, { useEffect, useState } from "react";
import { motion, useMotionValue, MotionValue } from "framer-motion";

interface MouseDimensions {
  w: number;
  h: number;
}

const CursorFollower: React.FC = () => {
  const [mouseDimensions, setMouseDimensions] = useState<MouseDimensions>({
    w: 50,
    h: 50,
  });
  const [scale, setScale] = useState<number>(1);
  const cursorX: MotionValue<number> = useMotionValue(-100);
  const cursorY: MotionValue<number> = useMotionValue(-100);

  const handleMouseMove = (e: MouseEvent) => {
    cursorX.set(e.clientX - 20);
    cursorY.set(e.clientY - 20);

    const cursorXLoc = e.clientX;
    const cursorYLoc = e.clientY;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isAtHorizontalEdge =
      cursorXLoc === 0 || cursorXLoc === screenWidth - 1;
    const isAtVerticalEdge = cursorYLoc === 0 || cursorYLoc === screenHeight;

    if (isAtHorizontalEdge || isAtVerticalEdge) {
      setScale(0);
    } else {
      setScale(1);
    }

    const targetElement = e.target as HTMLElement;
    if (targetElement.id === "clickable") {
      setMouseDimensions({
        w: 25,
        h: 25,
      });
      return;
    }
    setMouseDimensions({
      w: 50,
      h: 50,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        height: mouseDimensions.h,
        width: mouseDimensions.w,
        scale,
      }}
      className={`bg-light  rounded-full fixed top-0 left-0 z-[100] backdrop-blur-lg pointer-events-none `}
    ></motion.div>
  );
};

export default CursorFollower;
