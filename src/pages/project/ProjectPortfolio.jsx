import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderP from "./components/HeaderP";
import ProjectInfo from "./components/ProjectInfo";
import Button from "../../components/Button";
import pdport1 from "./images/pdport1.jpg";
import pdport2 from "./images/pdport2.jpg";
import pdport3 from "./images/pdport3.jpg";
import pdport4 from "./images/pdport4.jpg";
import pdport5 from "./images/pdport5.jpg";
import ProjectCarosoul from "./components/ProjectCarosoul";
const ProjectPortfolio = () => {
  const projectDetails = {
    projectName: "Personal Portfolio Website",
    aim: "Personal Portfolio Website",
    duration: "Fab 2024 To Present",
    url: "https://deepak-visuals.netlify.app/",
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
          img1={pdport1}
          img2={pdport2}
          img3={pdport3}
          img4={pdport4}
          img5={pdport5}
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
                <h1>Deepak's Visuals</h1>

                <h2>Description:</h2>
                <p>
                  This README provides information about a website template for
                  Deepak's Visuals, a portfolio showcasing Deepak Das's skills
                  as a software developer. The website is designed to highlight
                  Deepak's expertise and projects.
                </p>

                <h2>Installation:</h2>
                <p>
                  To use the website, no installation is required. It's a static
                  website, so simply open the <code>index.html</code> file in
                  your web browser to access the content.
                </p>

                <h2>Usage:</h2>
                <p>
                  The website is divided into several sections accessible via
                  the navigation menu. Here's a brief overview of each section:
                </p>
                <ul>
                  <li>
                    <strong>Home:</strong> The landing page with a logo and
                    navigation menu.
                  </li>
                  <li>
                    <strong>About Me:</strong> Information about Deepak Das,
                    including a brief bio and a photo.
                  </li>
                  <li>
                    <strong>Skills:</strong> A section showcasing Deepak's
                    skills, displayed using progress bars.
                  </li>
                  <li>
                    <strong>Projects:</strong> A link to view Deepak's projects
                    (not implemented in this template).
                  </li>
                  <li>
                    <strong>Contact Me:</strong> A form to contact Deepak.
                  </li>
                </ul>

                <h2>Technology Used:</h2>
                <p>The website template utilizes the following technologies:</p>
                <ul>
                  <li>
                    <strong>HTML5:</strong> Markup language for structuring the
                    website content.
                  </li>
                  <li>
                    <strong>CSS3:</strong> Styling language for designing the
                    website layout and appearance.
                  </li>
                  <li>
                    <strong>Bootstrap:</strong> Version 5.3.2 (CDN) for
                    responsive design and styling components.
                  </li>
                  <li>
                    <strong>Bootstrap Icons:</strong> Version 1.11.1 (CDN) for
                    icons used throughout the website.
                  </li>
                  <li>
                    <strong>Animate.css:</strong> Version 4.1.1 (CDN) for adding
                    animations to elements.
                  </li>
                </ul>

                <h2>Dependencies:</h2>
                <p>The website relies on the following dependencies:</p>
                <ul>
                  <li>
                    <strong>Bootstrap:</strong> Version 5.3.2 (CDN) for styling
                    and layout.
                  </li>
                  <li>
                    <strong>Bootstrap Icons:</strong> Version 1.11.1 (CDN) for
                    icons used in the website.
                  </li>
                  <li>
                    <strong>Animate.css:</strong> Version 4.1.1 (CDN) for
                    animations.
                  </li>
                </ul>

                <h2>Contributing:</h2>
                <p>
                  At the moment, this project is not open to contributions.
                  However, suggestions and feedback are welcome.
                </p>

                <h2>License:</h2>
                <p>
                  This project is licensed under the MIT License. See the{" "}
                  <a href="#">LICENSE</a> file for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button name="Previous Page" ></Button>

      <Footer />
    </>
  );
};

export default ProjectPortfolio;
