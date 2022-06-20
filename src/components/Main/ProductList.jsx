import React from "react";
import "./css/style.css";
import ProductItem from "./ProductItem";

function ProductList({ data }) {
  const list = data;
  const dataArr = [];
  dataArr.push(list.item[0]);
  console.log(dataArr);
  return (
    <div className="tab-list">
      <ul className="tab">
        {list.item.map((data, index) => (
          <ProductItem data={data} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
