import React from "react";
import { FaGithub,FaXTwitter,FaLinkedin ,FaInstagram,FaYoutube,FaPhone
}from "react-icons/fa6";
const Footer = () => {
  return (
    
      <div className="row" style={{
        background: "black",
        color: "white",
        borderTop: "2px solid white",
      }}>
        <div className="col-md-6 col-12 py-3">
          © Deepak's Visuals 2024 All rights reserved. Design & Developed By{" "}
          <span style={{ fontWeight: "bold", color: "#FF004D" }}>
            Deepak Das
          </span>
        </div>
        <div className="col-md-3 col-6 p-3 fs-5">
          <div className="row">
            <div className="col-2">
              <a
                href="https://github.com/Deepakdas8970"
                style={{ color: "white" }}
              >
            
                <FaGithub />
              </a>
            </div>
            <div className="col-2">
              <a
                href="https://x.com/Deepak_das_8839?t=JJb9wOCAc2ISMRCrRRPVlQ&s=09"
                style={{ color: "white" }}
              >
                <FaXTwitter />
              </a>
            </div>
            <div className="col-2">
              <a
                href="https://www.linkedin.com/in/deepak-das-623625265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                style={{ color: "white" }}
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="col-2">
              <a
                href="https://www.instagram.com/mr_das8970?igsh=bHpzMDEydzJmbXRn"
                style={{ color: "white" }}
              >
                <FaInstagram />
              </a>
            </div>
            <div className="col-2 ">
              <a href="https://youtube.com/@deepakdas1863?si=zgHXdftqaitr3gXY">
                <FaYoutube style={{color:"white"}}/>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-6 p-3">
          <a href="tel:+918839216878">
          <FaPhone />
          </a>
          +91 88392 16878
        </div>
      </div>
  );
};

export default Footer;
