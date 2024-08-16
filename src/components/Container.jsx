import React from "react";

const Container = ({ children }) => {
  return <div className="container-fluid" id="#">
    {children}
  </div>;
};

export default Container;
