import { useState } from "react";
import logo from "../images/White logo - no background.svg";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  const [show,setShow]=useState(false);
  const showMenulist=()=>{
  
   setShow(!show);
  }
  return (
    <>
      <div className="row" id="home">
        <div className="col-md-3 col-3" >
          <div className="row h-100">
            <div className="col-md-12 col-12 animate__bounceIn wow ">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="col-md-9 col-9 ">
          <div className="row" style={{ height: "100%" }}>
            <div className="col-sm-10  col-8">
              <div className=" row main-list" id={show ? "mainlistShow" : "mainlist"}>
                <ul type="none">
                
                  <li className="item">
                    <NavLink
                      to="/"
                      style={{ textDecoration: "none" }}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="item">
                   
                    <Link
                       smooth to="/#aboutMe"
                      style={{ textDecoration: "none"}}
                    >
                         About
                    </Link>
                  </li>
                  <li className="item">
                    
                   
                    <Link
                       smooth to="/#skills"
                      style={{ textDecoration: "none"}}
                    >
                         Skills
                    </Link>
                  </li>
                  <li className="item">
                    
                  <Link
                       smooth to="/#contactUs"
                      style={{ textDecoration: "none"}}
                    >
                         Contact Us
                    </Link>
                  </li>
                  <li className="item">
                    <NavLink
                      to="/project"
                      style={{ textDecoration: "none" }}
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li className="item">
                    <NavLink
                      to="/certificates"
                      style={{ textDecoration: "none" }}
                    >
                      Certificates
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-sm-2 col-2 fs-1 py-2 text-white text-center">
              <FaUserCircle />
            </div>
            <div
              className="col-2 fs-1 py-2"
              id="menuIcon"
              style={{ color: "white" } } onClick={showMenulist}
            >
              <span>
                {show ? <RxCross2  className="menuHide" /> :<RiMenu2Fill />}
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
