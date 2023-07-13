import React from "react";

const Navbar: React.FC = () => {
  const styles = {
    container: "md:pt-[80px] xxl:pt-[135px]",
    links:
      "md:text-[14px] xxl:text-[18px] font-medium xxl:leading-[150%] text-light hover:text-black  cursor-none",
    title: "md:text-[28px] xxl:text-[42px] font-medium xxl:leading-[150%]",
    year: "md:text-[28px] xxl:text-[42px] font-medium leading-[90%]",
  };

  return (
    <nav>
      <div className={styles.container}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className={styles.title}>Dwayne</h1>
            <h1 className={styles.year}>2023</h1>
          </div>
          <div className="flex flex-col  items-start mr-[5%]">
            <button id="clickable" className={styles.links}>
              About
            </button>

            <button id="clickable" className={styles.links}>
              Twitter
            </button>

            <button id="clickable" className={styles.links}>
              Instagram
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
