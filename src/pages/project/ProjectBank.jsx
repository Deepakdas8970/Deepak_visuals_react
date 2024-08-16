import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderP from "./components/HeaderP";
import ProjectInfo from "./components/ProjectInfo";
import ProjectCarosoul from "./components/ProjectCarosoul";
import ProjectDesc from "./components/ProjectDesc";
import Button from "../../components/Button";
import pdb1 from "./images/pdb1.jpg"
import pdb2 from "./images/pdb2.jpg"
import pdb3 from "./images/pdb3.jpg"
import pdb4 from "./images/pdb4.jpg"



const ProjectBank = () => {
  const projectDetails = {
    projectName: "Basic Banking System",
    aim: "To showcase basic banking system",
    duration: "1 May to 2 May 2024",
    url: "Currently Not Deployed",
    intro:
      "This project is a simple banking system web application that allows users to view all customers, transfer money securely between customers, and view the history of all money transfers.",
    tech: [
      " HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "AI tools (for fast development)",
      "Bootstrap icon library for icons",
    ],
  };

  return (
    <>
      <Navbar />
      <HeaderP name="Project Details" />
      

      <div className="container mt-5" id="portSec">
        <ProjectInfo
          projectName={projectDetails.projectName}
          aim={projectDetails.aim}
          duration={projectDetails.duration}
          url={projectDetails.url}
        />

        <ProjectCarosoul img1={pdb1} img2={pdb2} img3={pdb3} img4={pdb4} img5={pdb4}/>

        <ProjectDesc
          projectName={projectDetails.projectName}
          intro={projectDetails.intro}
          tech={projectDetails.tech}
        />
      </div>
      <Button name="Previous Page" ></Button>

      <Footer />
    </>
  );
};

export default ProjectBank;
