import React from "react";
import Input from "./Input";
import Nav from "./Nav";
import "./css/style.css";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <h2>BLOG</h2>
        <Input />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
