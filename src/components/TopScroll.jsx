import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";

const TopScroll = () => {
  return (
    <>
      <Link smooth to="#">
        <div className=" topScrollButton rounded-circle text-center">
          <FaArrowUp />
        </div>
      </Link>
    </>
  );
};

export default TopScroll;
