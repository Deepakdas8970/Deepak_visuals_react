import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styles from "../Certificates.module.css";
import { IoEyeOutline } from "react-icons/io5";
import Modal from "./Modal";

const CertificateCard = ({ image }) => {
  const [show, setShow] = useState(true);
  const showModal = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={`col ${styles.col}`}>
        <img src={image} alt=". images" width="100%" height="250" />
        <div className={`row mx-0 ${styles.row}`}>
          <div className="col p-2">
            <button
              type="button"
              className={` myButton btn btn-primary ${styles.btn}`} onClick={showModal}
            >
              <span>
                <IoEyeOutline />
              </span>{" "}
              View
            </button>
          </div>
        </div>
      </div>
      <Modal image={image} show={show} showModal={showModal}></Modal>
      

    </>
  );
};

export default CertificateCard;
