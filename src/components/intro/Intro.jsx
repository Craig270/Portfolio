import React from "react";
import "./intro.scss";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { init } from "ityped"; //Auto type text
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      strings: [
        "Web Developer.",
        "Cloud Architect.",
        "Software Developer.",
        "Person.",
      ],
      loop: true,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/betterBigMe.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there I'm </h2>
          <h1>Craig Neff!</h1>
          <h3>
            Striving to be a better <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ArrowDownwardIcon fontSize="large" color="action" />
        </a>
      </div>
    </div>
  );
}
