import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/login.css";
import ProductTab from "./ProductTab";
function Login() {
  const [userId, setUserId] = useState("");

  function handlerSetUserId() {
    const userObj = {
      id: userId,
    };
    localStorage.setItem("ID", JSON.stringify(userObj));
  }
  function handlerChange(event) {
    setUserId(event.target.value);
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
      </div>
    </div>
  );
}

export default Login;
