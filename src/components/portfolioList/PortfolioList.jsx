import React from "react";
import "./portfolioList.scss";

export default function portfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfoliolist active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
