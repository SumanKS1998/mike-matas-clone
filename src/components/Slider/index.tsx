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
interface SliderProps {
  handleScroll: (params: { navigateClicked: boolean }) => void;
}
const Slider: React.FC<SliderProps> = ({ handleScroll }) => {
  const navigate = useNavigate();
  const { setLayoutId } = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll() as ScrollMotionValues;
  const xSpring = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });
  const x = useTransform(xSpring, [0, 1], ["0%", "-85%"]);

  return (
    <div ref={ref}>
      <motion.div
        style={{ x }}
        className="flex flex-1 w-max"
        initial={{ gap: "50px" }}
        animate={{ gap: "0px", transition: { delay: 0.5 } }}
      >
        {projects.map((item, i) => (
          <motion.div
            layoutId={item.name}
            key={i}
            onClick={() => {
              handleScroll({ navigateClicked: true });
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
