import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderP from "./components/HeaderP";
import ProjectInfo from "./components/ProjectInfo";
import Button from "../../components/Button";
import pdh1 from "./images/pdh1.jpg";
import pdh2 from "./images/pde2.jpg";
import pdh3 from "./images/pdh3.jpg";
import pdh4 from "./images/pdh4.jpg";
import pdh5 from "./images/pdh4.jpg";
import ProjectCarosoul from "./components/ProjectCarosoul";

const ProjectHospital = () => {
  const projectDetails = {
    projectName: "Hospital Website",
    aim: " To showcase attractive design and admin managable",
    duration: "From Sep 2023 To Present",
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
          img1={pdh1}
          img2={pdh2}
          img3={pdh3}
          img4={pdh4}
          img5={pdh5}
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
                <h1 id="health-plus-website">Health Plus Website</h1>
                <p>
                  This project is a website template for a medical clinic named
                  &quot;Health Plus.&quot;
                </p>

                <h2 id="overview">Overview</h2>
                <p>
                  The Health Plus website provides information and services
                  related to medical care. It includes sections for social media
                  links, navigation, services, gallery, and specialities.
                </p>

                <h2 id="features">Features</h2>
                <ul>
                  <li>Fully Responsive Design.</li>
                  <li>
                    Responsive navigation bar for easy navigation across
                    different devices.
                  </li>
                  <li>
                    Carousel with autoplay feature showcasing various medical
                    services and facilities.
                  </li>
                  <li>Display of 24/7 service information.</li>
                  <li>
                    Grid layout displaying medical services with images and
                    descriptions.
                  </li>
                  <li>
                    Specialities section highlighting key medical specialties
                    offered by the clinic.
                  </li>
                  <li>Login Section.</li>
                  <li>
                    Other features will be included in the future as the project
                    is under development.
                  </li>
                </ul>

                <h2 id="future-plan">Future Plan</h2>
                <p>In the future, more features will be added:</p>
                <ol>
                  <li>
                    Currently, no other details are provided relative to this
                    project.
                  </li>
                  <li>After deployment, all the features will be revealed.</li>
                </ol>

                <h2 id="contributing">Contributing</h2>
                <p>
                  Contributions are welcome. Feel free to submit bug reports,
                  suggest new features, or contribute code to improve the
                  project.
                </p>

                <h2 id="license">License</h2>
                <p>&copy; All rights reserved, Deepak Das.</p>
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

export default ProjectHospital;
