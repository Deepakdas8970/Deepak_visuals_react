import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderP from "./components/HeaderP";
import ProjectInfo from "./components/ProjectInfo";
import Button from "../../components/Button";
import pde1 from "./images/pde1.jpg";
import pde2 from "./images/pde2.jpg";
import pde3 from "./images/pde3.jpg";
import pde4 from "./images/pde4.jpg";
import pde5 from "./images/pde5.jpg";
import ProjectCarosoul from "./components/ProjectCarosoul";

const ProjectEducation = () => {
  const projectDetails = {
    projectName: " Education institution Website",
    aim: "This website showcases the courses offered by the academy, along with information about the organization and its contact details.",
    duration: "August 2023 To Present",
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
        <ProjectCarosoul
          img1={pde1}
          img2={pde2}
          img3={pde3}
          img4={pde4}
          img5={pde5}
        />

        <div className="row mt-5">
          <div className="col">
            <div className="card">
              <h5
                className="card-header fw-bold text-white"
                style={{ background: "#3511E8" }}
              >
                Description Of Project
              </h5>
              <div id="markdown-content" className="p-3 bg-black text-white">
                <h1 id="chitragupt-academy">Chitragupta Academy</h1>
                <p>
                  This repository contains the HTML and CSS files for the
                  Chitragupt Academy website.
                </p>

                <h2 id="table-of-contents">Table of Contents</h2>
                <ul>
                  <li>
                    <a href="#introduction">Introduction</a>
                  </li>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#technology-used">Technology Used</a>
                  </li>
                  <li>
                    <a href="#installation">Installation</a>
                  </li>
                  <li>
                    <a href="#usage">Usage</a>
                  </li>
                  <li>
                    <a href="#contributing">Contributing</a>
                  </li>
                  <li>
                    <a href="#license">License</a>
                  </li>
                </ul>

                <h2 id="introduction">Introduction</h2>
                <p>
                  Chitragupt Academy is a fictional educational institution.
                  This website showcases the courses offered by the academy,
                  along with information about the organization and its contact
                  details.
                </p>

                <h2 id="features">Features</h2>
                <ul>
                  <li>
                    Navigation menu for easy access to different sections of the
                    website
                  </li>
                  <li>Featured courses section</li>
                  <li>Testimonials section</li>
                  <li>Course offerings section</li>
                  <li>Contact information section</li>
                </ul>

                <h2 id="technology-used">Technology Used</h2>
                <p>The website is built using the following technologies:</p>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript minor used</li>
                  <li>PHP</li>
                  <li>MySQL for form data submission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button name="Previous Page"></Button>

      <Footer />
    </>
  );
};

export default ProjectEducation;
