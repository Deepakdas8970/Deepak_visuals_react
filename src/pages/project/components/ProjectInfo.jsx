import React from "react";

const ProjectInfo = ({projectName,duration,aim,url}) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h2
              className="card-header text-white"
              style={{ background: "#3511E8" }}
            >
              Project information
            </h2>
            <div className="card-body py-5 bg-black text-white">
              <article className="card-title">
                <span className="fs-5 fw-bold">Project Name: </span>
                <span>{projectName}</span>
              </article>
              <article className="card-title">
                <span className="fs-5 fw-bold">Aim: </span>
                <span>{aim}</span>
              </article>
              <article className="card-title">
                <span className="fs-5 fw-bold">Project Duration: </span>
                <span>{duration}</span>
              </article>
              <article className="card-title">
                <span className="fs-5 fw-bold">Project URL: </span>
                <span>
                  <a href="#">{url}</a>
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
