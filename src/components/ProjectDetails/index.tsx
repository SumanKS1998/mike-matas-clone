import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/appContext";
import { projects } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails: React.FC = () => {
  const navigate = useNavigate();
  const { layoutId, setLayoutId } = useContext(AppContext);
  const location = useLocation();
  const selectedProject = projects.find((project) =>
    location.pathname.includes(project.name)
  );
  const renderArrowBack = () => {
    return (
      <motion.div
        className="h-[100px] w-[100px] absolute top-8 left-[2%] "
        initial={{ stroke: "#bababa", scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => navigate("/")}
      >
        <motion.svg
          whileHover={{ scale: 1.2, stroke: "#000000" }}
          xmlns="http://www.w3.org/2000/svg"
          whileTap={{ scale: 0 }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="h-full w-full outline-none"
          id="clickable"
        >
          <motion.path d="M13.5 9L10.5 12L13.5 15" />
        </motion.svg>
      </motion.div>
    );
  };
  return (
    <motion.div
      className="flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 z-[99] gap-[2%]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
    >
      {renderArrowBack()}
      <motion.div
        className="flex flex-col max-w-[250px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-[22px] font-bold">{selectedProject?.name}</h1>
        <h2 className="text-[20px] font-light">{selectedProject?.subtopic}</h2>
        <h3 className="text-[20px] font-light">{selectedProject?.year}</h3>
        <p className="text-[18px] mt-[32px] font-light">
          {selectedProject?.description}
        </p>
      </motion.div>
      <motion.img
        layoutId={layoutId}
        src={selectedProject?.image}
        alt="laptop"
        className="h-[80vh] max-w-[60%] object-contain"
        onClick={() => {
          setLayoutId("");
          navigate("/");
        }}
      />
    </motion.div>
  );
};

export default ProjectDetails;
