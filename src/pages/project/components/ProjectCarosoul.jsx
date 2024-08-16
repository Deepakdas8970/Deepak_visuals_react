import React, { useEffect, useState } from "react";

const ProjectCarosoul = ({ img1, img2, img3, img4, img5 }) => {
  let [next, setNext] = useState(0);
  let totalSlide = 5;

  const nextImg = () => {
    if (next >= totalSlide - 1) {
      next = 0;
    } else {
      next += 1;
    }
    setNext(next);
  };

  // for autoplaying
   useEffect(()=>{
    let intervalId =setInterval(nextImg, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);


   },[])
  

  const prevImg = () => {
    if (next <= 0) {
      next = totalSlide - 1;
    } else {
      next -= 1;
    }
    setNext(next);
  };

  return (
    <>
      <div className="row bd-info mt-5">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className={next == 0 ? "active carousel-item" : "carousel-item"}
            >
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div
              className={next == 1 ? "active carousel-item" : "carousel-item"}
            >
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div
              className={next == 2 ? "active carousel-item" : "carousel-item"}
            >
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
            <div
              className={next == 3 ? "active carousel-item" : "carousel-item"}
            >
              <img src={img4} className="d-block w-100" alt="..." />
            </div>
            <div
              className={next == 4 ? "active carousel-item" : "carousel-item"}
            >
              <img src={img5} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
            onClick={prevImg}
          >
            <span
              className="carousel-control-prev-icon text-black fw-bold"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
            onClick={nextImg}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCarosoul;
