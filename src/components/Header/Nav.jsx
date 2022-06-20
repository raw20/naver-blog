import React from "react";
import { NavLink } from "react-router-dom";
import "./css/style.css";
const naviList = [
  { content: "핫토픽", href: "" },
  { content: "슬라이드", href: "slide" },
  { content: "로그인", href: "login" },
  { content: "카드", href: "card" },
];
function Nav() {
  return (
    <div id="nav">
      <ul>
        {naviList.map((li, index) => (
          <li key={index}>
            <NavLink
              to={li.href}
              className={({ isActive }) =>
                isActive ? "navList on" : "navList"
              }
            >
              {li.content}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
