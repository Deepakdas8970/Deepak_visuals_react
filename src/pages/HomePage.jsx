import React from "react";
import Navbar from "../components/Navbar";
import About from "./About"
import AboutMe from "./AboutMe"
import SoftSkill from "./SoftSkill" 
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <About />
      <AboutMe />
      <SoftSkill/>
      <Skills/>
      <Contact/>
      <Footer/>



    </>
  );
};

export default HomePage;
