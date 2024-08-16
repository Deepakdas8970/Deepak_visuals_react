import React from "react";
import ProgressBar from "../components/ProgressBar";

const Skills = () => {
  let skills = [
    { name: "HTML5", rate: "95%" },
    { name: "CSS3", rate: "90%" },
    { name: "JAVASCRIPT", rate: "85%" },
    { name: "Bootstrap", rate: "90%" },
    { name: "React.JS & Redux", rate: "85%" },
    { name: "Responsive Design", rate: "95%" },
    { name: "PHP", rate: "90%" },
    { name: "MySQL", rate: "90%" },
    { name: "Core Java", rate: "85%" },
    { name: "C++", rate: "70%" },
  ];
  return (
    <div className="row" id="skills" data-wow-offset="200">
      <div
        className="col text-center"
        style={{ color: "white", padding: "0% 10% 0% 10%" }}
      >
        <h1>SKILLS</h1>
        <br />
        <p style={{ opacity: 0.5, textAlign: "justify" }}>
          I've always been fascinated by the intersection of technology and
          creativity. The idea that a few lines of code can bring ideas to life
          and make a meaningful impact is what fuels my enthusiasm for software
          development. I believe in the power of well-designed software to
          transform the way we work, connect, and experience the world.
        </p>

        <div className="progress_bar my-4">
          {skills.map((item, index) => (
            <ProgressBar name={item.name} rate={item.rate} key={index}></ProgressBar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
