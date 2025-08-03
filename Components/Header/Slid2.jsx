import React from "react";

const IMAGESS = [
  { name: "Breakfast", img: "/public/Image1/breakfast.jpg",Color: "rgba(234, 235, 229, 1)"},
  {name: "Meat",   img: "/public/Image1/meat.jpg",Color: "rgba(253, 245, 220, 1)"},
  {name: "Lunch",  img: "/public/Image1/lunch.jpg",Color: "rgba(238, 253, 220, 1)"},
  {name: "Pasta",  img: "/public/Image1/pasta.jpg",Color: "rgba(253, 247, 220, 1)"},
  {name: "Dessert"  ,img: "/public/Image1/dessert.jpg",Color: "rgba(253, 238, 220, 1)"},
  {name: "Chocolate"  ,img: "/public/Image1/chocolatte.jpg",Color: "rgba(253, 247, 220, 1)"}]

function Slid2() {
  return (
    <div style={{ width:"1000px",display: "flex", flexDirection: "column", marginTop: "100px", marginLeft: "180px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ fontSize: "38px", color: "black" }}>Categories</h2>
        <button
          style={{ width: "140px",color: "black",height: "35px", fontSize: "12px", marginTop: "50px", backgroundColor: "rgba(226, 245, 250, 1)"}}>
          View All Categories
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
        {IMAGESS.map((item, index) => (
          <div key={index} style={{ width: "80px", backgroundColor: item.Color, borderRadius: "15px" }}>
            <a href="">
              <img src={item.img} alt={item.name}
                style={{ width: "60px", height: "60px", borderRadius: "50%", paddingLeft: "10px" }}/>
              <p style={{ textAlign: "center", fontSize: "12px", color: "black" }}>{item.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slid2;
