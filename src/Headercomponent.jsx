import React from "react";
import "./Headercomponent.css";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const Headercomponent = () => {
  return (
    <div className="container">
      <div className="searchdiv">
        <input className=" searchinput" type="text" placeholder="Search..." />
        <i>
          <BsSearch className="searchicon" />
        </i>
      </div>
      <div className="profilediv">
        <i>
          <CgProfile className="profileicon" />
        </i>
        <span className="profiletext">Asha Sunny</span>
      </div>
      <div className="profilediv">
        <p className="logouttext">logout</p>
      </div>
    </div>
  );
};

export default Headercomponent;
