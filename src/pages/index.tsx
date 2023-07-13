import React, { useState } from "react";
 import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
 
const Home: React.FC = () => {
  return (
    <>
      <div className="w-[100%] h-[800vh] relative no-scrollbar">
     
        <div className={styles.container}>
          <Navbar />
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Home;

const styles = {
  container:
    "min-h-screen md:max-w-[700px] xxl:max-w-[950px] mx-auto cursor-none flex flex-col md:gap-[68px] xxl:gap-[98px] sticky top-0",
};
