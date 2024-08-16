import React from "react";
import deepakImg from "../images/IMG_20240430_231518.jpg";

const About = () => {
  return (
    <>
      <div className="row px-5 mb-4">
        <div
          className="col-md-6 col-12 p-md-4 p-0 wow animate__animated  animate__fadeInLeft"
          style={{ color: "white", position: "relative" }}
        >
          <br />
          <br />
          <h1 className="deepak fs-1">
            <span style={{ fontWeight: "bold", color: "white" }}>I'm</span>{" "}
            Deepak <br /> Das
          </h1>
          <br />
          <p style={{ opacity: 0.5, position: "relative", left: "10%" }}>
            A passionate and innovative software developer with a knack
            for crafting elegant solutions to complex problems
          </p>
          <br />
          <br />
        </div>
        <div
          className="col-md-6 col-12 p-md-4
           py-4 pt-0"
        >
          <br />
          <br />
          <div
            style={{
              width: "200px",
              height: "250px",
              background: "#3511E8",
              margin: "auto",
            }}
          >
            <img
              src={deepakImg}
              alt="images"
              width="200px"
              id="myImage"
              height="250px"
              className="wow animate__rotateIn"
              data-wow-duration="2s"
            />
          </div>
        </div>
      </div>

      {/* <!--profession showcase--> */}
        <div className="row">
           <div className="col-12 fs-2  fw-bold " style={{color: "white",background: "#3511e880"}}>
                <div className="row p-3" style={{background:"#3511E8",transform: "rotate(-2deg)"}}>
                  <marquee behavior="scroll" direction="left">
                        <span>Full Stack Developer</span>
                        <span style={{marginLeft: "10%"}}>Frontend Developer</span>
                         <span style={{marginLeft: "10%"}}>Full Stack  Developer</span>
                   </marquee>
                </div>
        
            </div>
        </div>
        {/* <!-- End of profession showcase--> */}
    </>
  );
};

export default About;
