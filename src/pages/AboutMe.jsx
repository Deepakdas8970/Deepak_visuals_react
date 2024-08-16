import React from "react";
import profileImg from "../images/IMG_20240501_225210-01.jpeg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <div className="row mt-5 aboutMeSection" id="aboutMe">
        <div className="col">
          <div className=" text-white pb-5">
            <div>
              <h1 style={{ paddingBottom: "1rem" }} className="text-center">
                ABOUT ME
              </h1>

              <div className="d-flex justify-content-center py-4">
                <img
                  src={profileImg}
                  alt="Deepak Das"
                  width="200"
                  height="250"
                  style={{ border: "2px double white" }}
                />
              </div>

              <p className="px-sm-5 p-2" style={{ textAlign: "justify" }}>
                Hii 🤗 I'm
                <span className="fw-bold text-warning"> Deepak Das </span> from
                Indore currently I am pursuing
                <span className="fw-bold text-warning"> B.Tech </span> in CSE
                branch from LNCT college Indore MP. I have good knowledge about
                <span className="fw-bold text-warning">
                  {" "}
                  full stack web development{" "}
                </span>
                and I created a lot of projects on web development, but I want
                to gain industry experience so as a fresher currently I am
                looking for new opportunities. Hard work and dedication are my
                key points.
              </p>

              <div className="d-flex justify-content-center">
                <div className="d-flex">
                  <Link
                    to="https://drive.google.com/uc?export=download&id=10mn5txIePvwf0u__v9d25y76ZIUf6BB5
"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <Button name="Download CV"></Button>
                  </Link>

                  <button className="btn">
                    <a
                      href="mailto:deepak30102003@gmail.com?subject=Hiring%20Alert%20From%20Deepak's%20Visuals"
                      className=" myButton btn btn-primary fw-bold px-4"
                      style={{
                        background: "#3511E8",
                        textAlign: "justify",
                        display: "block",
                      }}
                    >
                      Hire Me
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
