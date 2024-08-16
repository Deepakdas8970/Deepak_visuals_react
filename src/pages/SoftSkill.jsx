import React from "react";
import { SiOpenai } from "react-icons/si";
import { GiAerodynamicHarpoon } from "react-icons/gi";
import { DiResponsive } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
import SoftSkillCom from "../components/SoftSkillCom";

const SoftSkill = () => {
  let softSkiilsContent = [
    {
      name: "Familar With AI Tools",
      desc: "I can use Some AI Tools For Fast & Rapid Development in Need As well as strong command in programming language.",
      icon: SiOpenai,
    },
    {
      name: "Dynamic Web Apps",
      desc: "Websites don't have to be static, I love making pages come to life.",
      icon: GiAerodynamicHarpoon,
    },
    {
      name: "Responsive Design",
      desc: "Layouts tailored for any device size, ensuring universal compatibility.",
      icon: DiResponsive,
    },
    {
      name: "Modern Website",
      desc: "I have a strong preference for designing UX/UI that is user-friendly and Modern Website.",
      icon: CgWebsite,
    },
  ];
  return (
    <>
      <div className="row" id="softSkills">
        <div className="col-12 wow animate__fadeInDown" data-wow-offset="120">
          <h1 style={{ color: "white", textAlign: "center"}}>
            MY STRENGTHS
          </h1>
        </div>
        <div
          className="container p-sm-5 p-4"
          style={{ color: "white", textAlign: "justify" }}
        >
          <div className="row row-cols-md-2 row-cols-1">
            {softSkiilsContent.map((content, index) => (
              <SoftSkillCom
                key={index}
                name={content.name}
                desc={content.desc}
                icons={content.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftSkill;
