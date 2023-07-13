import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { AppContext } from "../context/appContext";

const Home: React.FC = () => {
  const { setScrollValue, scrollValue: scrollValueState } =
    useContext(AppContext);

  const handleScroll = ({ navigateClicked }: { navigateClicked: boolean }) => {
    const scrollValue = window.scrollY;
    if (navigateClicked) {
      console.log("Scroll value:", scrollValue);
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
      <div className="w-[100%] h-[800vh] relative no-scrollbar">
        <div className={styles.container}>
          <Navbar />
          <Slider handleScroll={handleScroll} />
        </div>
      </div>
    </>
  );
};

const styles = {
  container:
    "min-h-screen md:max-w-[700px] xxl:max-w-[950px] mx-auto cursor-none flex flex-col md:gap-[68px] xxl:gap-[98px] sticky top-0",
};

export default Home;
