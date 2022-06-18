import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import SideList from "./SideList";
import "./css/style.css";

function ProductTab() {
  const [num, setNum] = useState(0);
  const [tabData, setTabData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("./db/productData.json");
      const json = await response.json();
      setTabData(json);
    })();
  }, []);
  const code = tabData.filter((data, index) => index === num);
  function handlerbtnClick(e, index) {
    e.preventDefault();
    setNum(index);
  }

  return (
    <div className="product-tab">
      <div className="tab-left">
        <div className="left-header">
          {code.map((data, index) => (
            <h2 className="topic-title">핫토픽 &gt; {data.brand}</h2>
          ))}
          <div className="tab-btn">
            {tabData.map((data, index) => (
              <button
                className={num === index ? "btn_active" : "btn"}
                key={data.id}
                onClick={(e) => handlerbtnClick(e, index)}
              >
                {data.id}
              </button>
            ))}
          </div>
        </div>
        <div className="left-main">
          {code.map((data, index) => (
            <ProductList key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="tab-right">
        <div className="right-header">
          <div className="side-tab-btn">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
        <div className="right-main">
          <SideList />
        </div>
      </div>
    </div>
  );
}

export default ProductTab;
