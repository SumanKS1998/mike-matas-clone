import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { motion } from "framer-motion";
import { AppContext } from "../context/appContext";

const Home: React.FC = () => {
  const {
    scrollXValue,
    setScrollValue,
    scrollValue: scrollValueState,
  } = useContext(AppContext);

  const handleScroll = ({ navigateClicked }: { navigateClicked: boolean }) => {
    const scrollValue = window.scrollY;
    if (navigateClicked) {
      setScrollValue(scrollValue);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScroll({ navigateClicked: false })
    );

    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll({ navigateClicked: false })
      );
    };
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: scrollValueState,
      behavior: "auto",
    });
  }, [scrollValueState]);
  return (
    <>
      <motion.div className="w-[100%] h-[700vh] relative no-scrollbar">
        <div className={styles.container}>
          <Navbar />
          <motion.div style={{ x: scrollXValue }}>
            <Slider handleScroll={handleScroll} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

const styles = {
  container:
    "min-h-screen md:max-w-[700px] xxl:max-w-[950px] mx-auto cursor-none flex flex-col md:gap-[68px] xxl:gap-[98px] sticky top-0",
};

export default Home;
