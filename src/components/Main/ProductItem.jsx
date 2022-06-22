import React from "react";
import "./css/style.css";

function ProductItem({ data }) {
  const indexArr = [0, 1, 2];

  return (
    <>
      {indexArr.map((index) => (
        <li key={index}>
          <div className="imgBox">
            <img className="pd-img-box" src={data.images[index]} alt="" />
            <div className="dim">
              <span className="dim-title">{data.contentTitle[index]}</span>
              <img
                className="profile-photo"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
                src={data.userImages[index]}
                alt=""
              />
              <span className="nickname">{data.user[index]}</span>
              <span className="dim-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae distinctio debitis, tempora cumque eum cupiditate
                velit atque beatae odit sit ipsam quam itaque laborum optio
                explicabo dicta molestiae esse eos aperiam, exercitationem
                tenetur similique. Minima illo laborum tenetur quas omnis animi
                soluta ratione vel eos, alias, mollitia deserunt rem illum?
              </span>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default ProductItem;
