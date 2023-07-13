import React, { useRef, useContext } from "react";
import { projects } from "../../constants";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  ScrollMotionValues,
} from "framer-motion";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router";

const Slider: React.FC = () => {
  const navigate = useNavigate();
  const { setLayoutId } = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll() as ScrollMotionValues;

  const xSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const x = useTransform(xSpring, [0, 1], ["0%", "-85%"]);

  return (
    <div ref={ref}>
      <motion.div style={{ x }} className="flex flex-1 w-max">
        {projects.map((item, i) => (
          <motion.div
            layoutId={item.name}
            key={i}
            onClick={() => {
              setLayoutId(item.name);
              navigate(`/${item.name}`);
            }}
          >
            <img
              src={item.image}
              className={`md:h-[53vh] xxl:h-[56vh] object-contain px-[24px] pointer-events-none`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;