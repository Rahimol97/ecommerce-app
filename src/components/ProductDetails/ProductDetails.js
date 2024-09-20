import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductId } from "../../ApiService/api";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);
const handleBuyNow=()=>
{
    window.confirm("The product is out of stock")
}
  return (
    <div className="product-details-container">
      <img
        className="product-image"
        src={productDetails.image}
        alt="alternative"
      />
      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>
        <p className="product-description">{productDetails.description}</p>
        <p className="product-price">${productDetails.price}</p>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
        <Link to="/">
          <button className="go-back-home-button">Go back Home</button>
        </Link>
      </div>
    </div>
  );
}
export default ProductDetails;
