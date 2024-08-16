import React from "react";

const ProgressBar = ({name,rate}) => {
  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar wow animate__fadeInLeft animate__slow" style={{ width: rate }} data-wow-offset="200">
         {name}
        </div>
        <div className="d-flex p-2 text-primary">{rate}</div>
      </div>
    </>
  );
};

export default ProgressBar;
