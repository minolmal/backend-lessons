import React from "react";
import { useEffect } from "react";

const SingleProduct = ({ productId }) => {
  async function showProduct(param) {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${param}`
      );
      // setData();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    showProduct(productId)
  }, []);
  

  return <div>SingleProduct {productId}</div>;
};

export default SingleProduct;
