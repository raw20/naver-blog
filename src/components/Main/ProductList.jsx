import React from "react";
import "./css/style.css";
import ProductItem from "./ProductItem";

function ProductList({ data }) {
  const dataArr = [];
  dataArr.push(data.item);
  console.log("dataArr : ", dataArr[0]);

  return (
    <div className="tab-list">
      <ul className="tab">
        {dataArr[0].map((data, index) => (
          <ProductItem key={index} data={data} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
