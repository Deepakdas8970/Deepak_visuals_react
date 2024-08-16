import React, { useState } from 'react'
import styles from "./Modal.module.css"

const Modal = ({image ,show,showModal}) => {
 
  return (
    <>
    <div className={show ? `${styles.modalHide}` :`modal ${styles.modal}` } tabIndex="-1">
        <div className={`modal-dialog ${styles.modalDialog} `}>
          <div className= {` modal-content ${styles["modal-content"]}`}>
            <div className="modal-header" style={{padding:"10px"}}>
              
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={showModal}
              ></button>
            </div>
            <div className={`modal-body ${styles["modal-body"]}`}>
              <img src={image} alt="" width="100%" height="100%" style={{height:"95%"}} />
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal