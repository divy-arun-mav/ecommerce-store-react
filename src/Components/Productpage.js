import React, { useEffect, useState } from 'react';
import './Componentcss/productpage.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Productpage() {

  const name = "Looto";
  
  const [count, setCount] = useState(0);

  

  let api = "https://fakestoreapi.com/products";

  const [orgData, setOrgData] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setOrgData(data); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApiData(api);
  }, [api]);

  return (
    <>
      <Navbar count={count} />
      <div className="App">
        <div className="container">
          <h1>Our Products</h1>
          <div id='products' className="products">
            {orgData.map((e) => (
              <div className="product" key={e.id}>
                <img src={e.image} className="product-img" alt="" srcSet="" />
                <h2 className="product-title">{e.title.length > 18 ? e.title.substring(0, 18).concat('...') : e.title}</h2>
                <h4 className="product-category">{e.category}</h4>
                <p className="product-description">{e.description.length > 80 ? e.description.substring(0, 80).concat('...more') : e.description}</p>
                <div className="product-price-container">
                  <h3 className="product-price">${e.price}</h3>
                  <button onClick={() => {
                    setCount(count + 1)
                  }} className="add-to-cart">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
