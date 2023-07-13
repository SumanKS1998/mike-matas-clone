import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages";
import "./index.css";
import AppProvider from "./context/appContext";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import ProjectDetails from "./components/ProjectDetails";
import CursorFollower from "./components/CursorFollower";

const App: React.FC = () => {
   return (
    <LayoutGroup >
      <CursorFollower />
      <AppProvider>
        <AnimatePresence mode="sync" key={window.location.href}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<ProjectDetails />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </AppProvider>
    </LayoutGroup>
  );
};

export default App;
