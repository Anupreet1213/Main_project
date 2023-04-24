import React, { useState } from "react";
import ProductContent1 from "./ProductContent1";
import ProductContent2 from "./ProductContent2";

const Product = () => {
  const [changeBox, setChangeBox] = useState(false);

  return (
    <div id="product" className="productParent">
      <h1>Product Details</h1>
      <div className="product">
        <div className="productBox">
          <div
            className={changeBox ? "pBox1 active" : "pBox1"}
            onClick={() => setChangeBox(false)}
          >
            Hii
          </div>
          <div
            className={changeBox ? "pBox2" : "pBox2 active"}
            onClick={() => setChangeBox(true)}
          >
            Hii
          </div>
          {/* <div className="pBox1">Hii</div> */}
        </div>
        {changeBox ? <ProductContent2 /> : <ProductContent1 />}
      </div>
    </div>
  );
};

export default Product;
