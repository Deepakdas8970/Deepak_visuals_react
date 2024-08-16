import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Project from "../pages/project/Project";
import ProjectHospital from "../pages/project/ProjectHospital";
import ProjectPortfolio from "../pages/project/ProjectPortfolio";
import ProjectBank from "../pages/project/ProjectBank";
import ProjectEducation from "../pages/project/ProjectEducation";
import ProjectPhoto from "../pages/project/ProjectPhoto";
import TopScroll from "../components/TopScroll";
import ErrorPage from "../pages/ErrorPage";
import Certificates from "../pages/certificates/Certificates";
import Success from "../pages/success/Success"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/hospital" element={<ProjectHospital />} />
        <Route path="/project/portfolio" element={<ProjectPortfolio />} />
        <Route path="/project/banking-system" element={<ProjectBank />} />
        <Route path="/project/photography" element={<ProjectPhoto />} />
        <Route path="/project/education" element={<ProjectEducation />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <TopScroll></TopScroll>
    </BrowserRouter>
  );
};

export default AppRouter;
