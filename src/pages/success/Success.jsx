import React from "react";
import Button from "../../components/Button";

const Success = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-5">
          <div
            className="successMessage text-black col-12 alert alert-success alert-dismissible fade show mt-4"
            role="alert"
          >
            <strong>Successful!</strong> Thank you for contacting me. I will
            reply to you soon.
            <br />
            Please check your email to see my response.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <Button name="Previous Page" ></Button>
    </>
  );
};

export default Success;
