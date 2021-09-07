import React from "react";
import "./intro.scss";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there I'm </h2>
          <h1>Craig Neff!</h1>
          <h3>
            Web Application and Cloud Development<span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ArrowDownwardIcon fontSize="large" color="action" />
        </a>
      </div>
    </div>
  );
}
