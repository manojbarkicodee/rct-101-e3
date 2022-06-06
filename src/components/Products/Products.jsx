import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { CartContext } from "../../context/CartContext";
import styles from "./pro.module.css"
const Products = () => {
let {products,setproducts}=useContext(CartContext)
let [counter,setcounter]=useState(0)
  useEffect(() => {
    let get=async()=>{
let data=await axios.get("http://localhost:8080/products")
setproducts(data.data)
    }
  get()
    
  }, [])
  // useEffect(() => {
    var addtocart=(el,counter)=>{
   axios.post("http://localhost:8080/cartItems",{productId:el.id,count:counter,id:el.id}).then((res)=>{
     console.log(res)
   })
  }
  // }, [addtocart])
  
  return <div className={styles.grid}>{products.map((el)=>{
return <div>
  <p>{el.name}</p>
  <p>{el.description}</p>
  <button onClick={()=>setcounter(counter+1)}>+</button><span>{counter}</span><button onClick={()=>setcounter(counter-1)}>-</button>
  <button onClick={()=>addtocart(el,counter)}>add to cart</button>
  
  <button>remove</button>
</div>
  })}</div>;
};

export default Products;
