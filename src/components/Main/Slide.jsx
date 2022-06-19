import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "../Main/css/slide.css";

function Slide() {
  const listData = [
    "https://picsum.photos/id/1/1200/500",
    "https://picsum.photos/id/10/1200/500",
    "https://picsum.photos/id/1006/1200/500",
    "https://picsum.photos/id/1011/1200/500",
    "https://picsum.photos/id/1019/1200/500",
  ];
  const [num, setNum] = useState(0);
  const checkRef = useRef("prev");
  listData.unshift(listData[listData.length - 1]);
  const initialStyle = {
    position: "relative",
    left: "-100%",
    marginLeft: `${num * -100}%`,
  };
  const [slideStyle, setSlideStyle] = useState(initialStyle);
  function handlerPrevStyle() {
    setSlideStyle({
      ...initialStyle,
      transition: num !== listData.length - 2 ? "margin 500ms ease" : "none",
      animaion:
        num === listData.length - 2 ? " lastSlide 500ms ease 1 " : "none",
    });
  }
  function handlerNextStyle() {
    setSlideStyle({
      ...initialStyle,
      transition: num !== 0 ? "margin 500ms ease" : "none",
      animaion: num === 0 ? " firstSlide 500ms ease 1 " : "none",
    });
  }
  function handlerPrevSlide() {
    setNum(num <= 0 ? listData.length - 2 : num - 1);
    checkRef.current = "prev";
  }
  function handlerNextSlide() {
    setNum(num >= listData.length - 2 ? 0 : num + 1);
    checkRef.current = "next";
  }
  useEffect(() => {
    checkRef.current === "next" ? handlerNextStyle() : handlerPrevStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    <div className="mainContainer">
      <h2>슬라이드</h2>
      <div className="viewBox">
        <div className="slideBtn">
          <button
            type="button"
            onClick={() => {
              setNum(handlerPrevSlide);
            }}
          >
            이전
          </button>
          <button
            type="button"
            onClick={() => {
              setNum(handlerNextSlide);
            }}
          >
            다음
          </button>
        </div>
      </div>
      <div className="viewContents">
        <ul style={slideStyle}>
          {listData.map((list, index) => (
            <li>
              <img src={list} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slide;
