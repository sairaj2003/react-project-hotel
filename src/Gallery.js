import React, { useState } from "react";
import Menu from "./Menu.js";
import "./App.css";

const Gallery = () => {
  const [items, setItems] = useState(Menu);

  const filterItem=(categItem)=>{
    const updatedItems=Menu.filter((curElm)=>{
        return curElm.category===categItem;
    });
    setItems(updatedItems);
  }

  const allItem = () => {
    setItems(Menu);
  };
  
  return (
    <>
    <h1 className="heading">Order your Favourite Dish</h1>
      <hr />

      <div className="variety">
        <button className="btn" onClick={()=> filterItem('Breakfast')}>BreakFast</button>
        <button className="btn" onClick={()=> filterItem('meals')}>Meals</button>
        <button className="btn" onClick={()=> filterItem('snacks')}>Snacks</button>
        <button className="btn" onClick={()=> filterItem('deserts')}>Deserts</button>
        <button className="btn" onClick={allItem}>All Menu</button>
      </div>

    <div className="gallery">
      {items.map((elem) => {
        const { id, name, image, price, description } = elem;
        return (
          <div className="container" key={id}>
            <div className="box">
              <div className="img">
                <img src={image} alt={name} />
              </div>
              <div className="content">
                <div className="section">
                  <h3 className="title">{name}</h3>
                  <div className="price">{price} RS</div>
                </div>
                <div className="desc">{description}</div>
                <div className="buy">
                  <button>Order Now</button>
                </div>
                <p>*GST (5%) charges additional</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Gallery;
