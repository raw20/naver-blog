import React from "react";
import { NavLink } from "react-router-dom";
import "./css/style.css";

function Nav() {
  const userId = window.localStorage.getItem("ID");
  return (
    <div id="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "navList on" : "navList")}
          >
            핫토픽
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/slide"
            className={({ isActive }) => (isActive ? "navList on" : "navList")}
          >
            슬라이드
          </NavLink>
        </li>
        <li>
          <NavLink
            to={userId !== null ? "/logout" : "/login"}
            className={({ isActive }) => (isActive ? "navList on" : "navList")}
          >
            {userId !== null ? "로그아웃" : "로그인"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card"
            className={({ isActive }) => (isActive ? "navList on" : "navList")}
          >
            카드
          </NavLink>
        </li>
      </ul>
      <div className="user-name">
        {userId === null ? (
          <h3>로그인을 해주세요.</h3>
        ) : (
          <h3>${userId}님 환영합니다.</h3>
        )}
      </div>
    </div>
  );
}

export default Nav;
