import React from "react";
import { useLocation } from "react-router-dom";
import "./css/about.css";

function About() {
  const { state } = useLocation();
  return (
    <div
      className="about"
      style={{ backgroundColor: `${state.favorite.backgroundColor}` }}
    >
      <h1>{state.name}</h1>
      <div className="about-area">
        <div
          className="aboutImg"
          style={{ background: `url(${state.img}) no-repeat center / cover` }}
        ></div>
        <div className="aboutContent">
          <span className="title">{state.title}</span>
          <span
            className="content"
            style={{ color: state.favorite.backgroundColor }}
          >
            {state.content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
