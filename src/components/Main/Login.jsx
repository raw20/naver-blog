import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/login.css";
import ProductTab from "./ProductTab";
function Login(props) {
  const [userId, setUserId] = useState("");
  const [check, setCheck] = useState(false);

  function handlerSetUserId() {
    const userObj = {
      id: userId,
    };
    window.localStorage.setItem("ID", JSON.stringify(userObj));
  }
  function handlerGetUserId() {
    setCheck(true);
  }
  function handlerChange(event) {
    setUserId(event.target.value);
    setCheck(false);
  }
  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <div className="loginForm">
        <input
          id="userIdInput"
          name="userId"
          value={userId}
          onChange={handlerChange}
          placeholder="아이디를 입력하세요."
          autoComplete="off"
        ></input>
        <label htmlFor="userIdInput" className="blind">
          작성자
        </label>
        <button className="loginBtn" onClick={handlerSetUserId}>
          <Link to="/" element={<ProductTab />}>
            로그인
          </Link>
        </button>
        <button onClick={handlerGetUserId}>불러오기</button>
        {check ? <p>{window.localStorage.getItem("ID")}</p> : <></>}
      </div>
    </div>
  );
}

export default Login;
