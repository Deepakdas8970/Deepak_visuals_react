import React from "react";
import { BsEye } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ProjectCard = ({image,path,title}) => {
  
  return (
    <>
      <div className="col">
        <img src={image} alt=". images" width="100%" height="250" />
        <div className="title bg-white py-2">
          <h4>
            {title}
            
            <NavLink to={path}>
              <span className="viewButton">
                <BsEye />
              </span>
            </NavLink>
          </h4>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
