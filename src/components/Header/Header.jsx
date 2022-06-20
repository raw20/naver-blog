import React from "react";
import Input from "./Input";
import Nav from "./Nav";
import "./css/style.css";
const Header = () => {
  const userId = window.localStorage.getItem("ID");
  return (
    <header id="header">
      <div className="inner">
        <h2>BLOG</h2>
        <Input />
        <Nav />
        <div className="user-name">
          <h3>{`${userId}님 어서오세요.`}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
