import React from "react";
import Navbar from "../../components/Navbar";
import HeaderP from "./components/HeaderP";
import PagetionP from "./components/PagetionP";
import Footer from "../../components/Footer";
import hospitalImg from "../../images/IMG_p1.jpg";
import portfolioImg from "../../images/IMG_20240503_p2.jpg";
import eduImg from "../../images/IMG_20240503_p3.jpg";
import photoImg from "../../images/IMG_20240503_p4.jpg";
import bankImg from "../../images/pdb1.jpg";
import ProjectCard from "./components/ProjectCard";
const Projects = () => {
  let projectCardItems = [
    {
      image: hospitalImg,
      title: "Hospital Website",
      path: "/project/hospital",
    },
    {
      image: portfolioImg,
      title: "Personal Portfolio",
      path: "/project/portfolio",
    },
    {
      image: eduImg,
      title: "Education institution",
      path: "/project/education",
    },
    {
      image: photoImg,
      title: "Photography Website",
      path: "/project/photography",
    },
    {
      image: bankImg,
      title: "Banking System",
      path: "/project/banking-system",
    },
  ];
 
  return (
    <>
      <Navbar />
      <HeaderP name="My Projects"></HeaderP>
      {/* <!-- Project Section --> */}


      <PagetionP />
      <div className="row" id="projectGrid">
        
        {projectCardItems.map((items,index)=>(<ProjectCard key={index} image={items.image} title={items.title} path={items.path} />))}
      </div>

      {/* <!-- End Project Section --> */}

      <Footer></Footer>
    </>
  );
};

export default Projects;
