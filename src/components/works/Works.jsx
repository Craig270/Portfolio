import { useState } from "react";
import "./works.scss";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "pic here",
      title: "title here",
      desc: "Words here that are more words hsdfjahsdfhisdf sdf",
      img: "shorturl.at/xyV35",
    },
    {
      id: "2",
      icon: "pic here",
      title: "#2",
      desc: "Words here that are more words hsdfjahsdfhisdf sdf",
      img: "shorturl.at/xyV35",
    },
    {
      id: "3",
      icon: "pic here",
      title: "title here##3",
      desc: "Words here that are more words hsdfjahsdfhisdf sdf",
      img: "shorturl.at/xyV35",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          //return cont
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="{d.icon}" alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
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
          //end
        ))}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
