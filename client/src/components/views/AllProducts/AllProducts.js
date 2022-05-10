import { useEffect, useState } from "react";

import axios from "axios";
import ProductBox from "../../common/ProductBox/ProductBox";

const AllProducts = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch('api/products')
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((data) => setProducts(data));
  // }, [products]);
  return (
    <div className="col-sm-12 col-md-9 col-lg-8 align-items-start mb-4">
      <div className="row gy-3 gx-3 d-flex align-items-center justify-content-center">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </div>
  );
};

export default AllProducts;
