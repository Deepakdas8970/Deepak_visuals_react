import React from "react";

const ProjectDesc = ({projectName,intro,tech}) => {
  return (
    <>
      <div className="row my-5">
        <div className="col">
          <div className="card">
            <h5
              className="card-header fw-bold text-white"
              style={{ background: "#3511E8" }}
            >
              Description Of Project
            </h5>
            <div id="markdown-content" className="p-3 bg-black text-white">
              <h1 id="banking-system">{projectName}</h1>
              <p>
              {intro}
              </p>
              <h2 id="features">Features</h2>
              <ul>
                <li>
                  <strong>View All Customers</strong>: Users can see a list of
                  all the customers.
                </li>
                <li>
                  <strong>Transfer Money</strong>: Customers can transfer money
                  securely between each other.
                </li>
                <li>
                  <strong>Transfer History</strong>: Users can view the history
                  of all money transfers.
                </li>
              </ul>
              <h2>Technologies Used</h2>
              <ul>
                {tech.map((items,index)=>(<li key={index}>{items}</li>))}
               
              </ul>
              <h2 id="usage">Usage</h2>
              <p>
                To use the application, simply open the provided HTML files in a
                web browser.
              </p>
              <h2 id="contributing">Contributing</h2>
              <p>
                Contributions are welcome! If you'd like to contribute to the
                project, please fork the repository, make your changes, and
                submit a pull request.
              </p>
              <h2 id="license">License</h2>
              <p>
                This project is licensed under the{" "}
                <a href="LICENSE">MIT License</a>.
              </p>
              <hr />
              <p>&copy; 2024 Banking System. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDesc;
