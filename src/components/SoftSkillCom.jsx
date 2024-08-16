import React from "react";
const SoftSkillCom = ({ name, desc, icons: Icons }) => {
  return (
    <>
      <div
        className="col p-sm-5 p-4 wow animate__fadeInLeft"
        data-wow-delay="1s"
      >
        <h1 className="fs-3 fw-bold" style={{ color: "white" }}>
          <span
            
            className="softSkillsIcons px-1 fs-4" 
          >
            <Icons />
          </span>
          <span style={{ paddingLeft: "20px" }}>{name}</span>
        </h1>
        <p style={{ opacity: 0.5 ,paddingLeft:"61px"}}>{desc}</p>
      </div>
    </>
  );
};

export default SoftSkillCom;
