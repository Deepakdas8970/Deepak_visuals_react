import React from "react";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center p-5">
        <h1 style={{ color: "white" }}>This Page is not found!</h1>
        <br />
      </div>
      <p className=" text-center fs-4 text-white">Please try again with different URL </p>
      <Button name="Previous Page" ></Button>
    </>
  );
};

export default ErrorPage;
