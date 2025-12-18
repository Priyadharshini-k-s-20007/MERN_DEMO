import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function BuyNow() {
  const { id } = useParams();
  const[product,setProduct]=useState(null);
       useEffect(()=>{
        fetch("http://localhost:5000/sleeping/sleepingproduct")
        .then(res=>res.json())
        .then(allproducts=>{
          const product=allproducts.find((p)=>p._id===id);
          setProduct(product);
        })
         
       })
  if (!product) return <p>Product not found</p>;
  return (
    <div>
      <h2>Buy Now</h2>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>✅ Order has been placed</p>
    </div>
  );
}
