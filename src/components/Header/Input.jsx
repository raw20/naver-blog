import React, { useState } from "react";

const Input = () => {
  const [type, setType] = useState("글");
  const [display, setDisplay] = useState(true);
  function handlerSelectType(e) {
    console.log(e.target.innerText);
    setType((typeName) => (typeName = e.target.innerText));
    setDisplay((display) => !display);
  }
  function handlerShowType() {
    setDisplay((display) => !display);
  }
  return (
    <div className="input">
      <p className="blog-type" onClick={handlerShowType}>
        {type}
      </p>
      <ul className={display ? "type-tab" : "type-tab on"}>
        <li onClick={handlerSelectType}>글</li>
        <li onClick={handlerSelectType}>블로그</li>
        <li onClick={handlerSelectType}>별명 아이디</li>
      </ul>
      <input type="text" name="" id="" />
    </div>
  );
};

export default Input;
