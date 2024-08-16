import React from "react";
import Navbar from "../../components/Navbar";
import HeaderP from "../project/components/HeaderP";
import styles from "./Certificates.module.css";
import C1Img from "./images/c (1).jpg";
import C2Img from "./images/c (2).jpg";
import C3Img from "./images/c (3).jpg";
import C4Img from "./images/c (4).jpg";
import C5Img from "./images/c (5).jpg";
import C6Img from "./images/c (6).jpg";
import C7Img from "./images/c (7).png";
import C8Img from "./images/c (8).jpg";
import C9Img from "./images/c (9).png";
import C10Img from "./images/c(10).png";
import C11Img from "./images/c (11).png";
import C12Img from "./images/c (12).png";
import C13Img from "./images/c (13).jpeg";
import C14Img from "./images/c2 (14).png";
import C15Img from "./images/c (15).png";
import C16Img from "./images/c (16).jpg";
import CertificateCard from "./components/CertificateCard";
import Footer from "../../components/Footer";



const Certificates = () => {
  
  let certificates = [
    {
      image: C1Img,
      title: "Hospital Website",
      path: "./images/c (1).jpg",
    },
    {
      image: C2Img,
      title: "Hospital Website",
      path: "./images/c (2).jpg",
    },
    {
      image: C3Img,
      title: "Hospital Website",
      path: "./images/c (3).jpg",
    },
    {
      image: C4Img,
      title: "Hospital Website",
      path: "./images/c (4).jpg",
    },
    {
      image: C5Img,
      title: "Hospital Website",
      path: "./images/c (5).jpg",
    },
    {
      image: C6Img,
      title: "Hospital Website",
      path: "./images/c (6).jpg",
    },
    {
      image: C7Img,
      title: "Hospital Website",
      path: "./images/c (7).jpg",
    },

    {
      image: C8Img,
      title: "Hospital Website",
      path: "./images/c (8).jpg",
    },
    {
      image: C9Img,
      title: "Hospital Website",
      path: "./images/c (9).png",
    },
    {
      image: C10Img,
      title: "Hospital Website",
      path: "./images/c(10).png",
    },
    {
      image: C11Img,
      title: "Hospital Website",
      path: "./images/c (11).png",
    },
    {
      image: C12Img,
      title: "Hospital Website",
      path: "./images/c (12).png",
    },
    {
      image: C13Img,
      title: "Hospital Website",
      path: "./images/c (13).jpeg",
    },
    {
      image: C14Img,
      title: "Hospital Website",
      path: "./images/c (14).png",
    },
    {
      image: C15Img,
      title: "Hospital Website",
      path: "./images/c (15).png",
    },
    {
      image: C16Img,
      title: "Hospital Website",
      path: "./images/c (16).jpg",
    },
  ];
  // dynamic images importing

  return (
    <>
      <Navbar></Navbar>
      <HeaderP name="My Certificates"></HeaderP>
      <div className={`row ${styles.projectGrid}`}>
        {certificates.map((items, index) => (
          <CertificateCard
            key={index}
            image={items.image}
            title={items.title}
            path={items.path}
          />
        ))}
      </div>

      <Footer></Footer>
    </>
  );
};

export default Certificates;
