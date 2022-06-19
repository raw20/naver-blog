import React from "react";
import "./css/style.css";

function ProductItem({ data }) {
  console.log("itemData : ", data);
  return (
    <div>
      <li>
        <div className="imgBox">
          <img className="pd-img-box" src={data} alt="" />
          <div className="dim">
            <span className="dim-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, beatae.
            </span>
            <img
              className="profile-photo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              src={"https://dummyimage.com/40x40/5a4be3/fff"}
              alt=""
            />
            <span className="nickname">User</span>
            <span className="dim-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae distinctio debitis, tempora cumque eum cupiditate velit
              atque beatae odit sit ipsam quam itaque laborum optio explicabo
              dicta molestiae esse eos aperiam, exercitationem tenetur
              similique. Minima illo laborum tenetur quas omnis animi soluta
              ratione vel eos, alias, mollitia deserunt rem illum?
            </span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default ProductItem;
