import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeaderP from "./components/HeaderP";
import ProjectInfo from "./components/ProjectInfo";
import Button from "../../components/Button";
import pdd1 from "./images/pdd1.jpg";
import pdd2 from "./images/pdd2.jpg";
import pdd3 from "./images/pdd3.jpg";
import pdd4 from "./images/pdd4.jpg";
import pdd5 from "./images/pdd5.jpg";

import ProjectCarosoul from "./components/ProjectCarosoul";
const ProjectPhoto = () => {
  const projectDetails = {
    projectName: "Photography Website",
    aim: "To showcase My Photography Hobby",
    duration: "15 APR 2024 To 16 APR",
    url: "https://das-visuals.netlify.app/",
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
          img1={pdd1}
          img2={pdd2}
          img3={pdd3}
          img4={pdd4}
          img5={pdd5}
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
                <h1>DAS Visuals</h1>
                <p>
                  "DAS Visuals" is a professional photography website designed
                  to showcase captivating images captured by Deepak Das, an
                  enthusiastic photographer based in Indore, Madhya Pradesh.
                </p>

                <h2>Introduction</h2>
                <p>
                  This website serves as a platform for Deepak Das to exhibit
                  his photography portfolio, share information about himself,
                  and enable visitors to contact him. It features a
                  user-friendly interface, responsive design, and secure admin
                  login authentication for content management.
                </p>

                <h2>Features</h2>
                <ol>
                  <li>
                    <strong>Responsive Design</strong>:
                    <ul>
                      <li>
                        The website is built with a responsive design, ensuring
                        optimal viewing experience across various devices.
                      </li>
                      <li>
                        It adapts to different screen sizes and orientations,
                        providing a seamless browsing experience.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Development Using AI Tools</strong>:
                    <ul>
                      <li>
                        Utilizes cutting-edge AI tools and techniques to enhance
                        image quality and automate certain tasks.
                      </li>
                      <li>
                        AI-powered features may include image recognition,
                        automated tagging, and intelligent cropping for fast
                        development.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Admin Login Authentication</strong>:
                    <ul>
                      <li>
                        Secure admin login system allows authorized users to
                        access and manage website content.
                      </li>
                      <li>
                        Utilizes encryption techniques and authentication
                        mechanisms to safeguard sensitive data.
                      </li>
                    </ul>
                  </li>
                </ol>

                <h2>Technologies Used</h2>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>AI tools (for fast development)</li>
                  <li>Bootstrap icon library for icons.</li>
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

export default ProjectPhoto;
