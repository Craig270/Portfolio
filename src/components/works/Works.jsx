import React from "react";
import "./works.scss";
export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, numquam? Commodi distinctio placeat repudiandae quos
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--fBO0Zf3i--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q97aza64off758w3wfdo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
