import React from "react";
import "./css/style.css";
import ProductItem from "./ProductItem";

function ProductList({ data }) {
  const list = data;
  const dataArr = [];
  dataArr.push(list.item[0]);
  console.log("dataArr : ", dataArr);

  return (
    <div className="tab-list">
      <ul className="tab">
        {dataArr.map(
          (data, index) => (
            console.log("index", index, data),
            (<ProductItem data={data} key={index} />)
          )
        )}
      </ul>
    </div>
  );
}

export default ProductList;
