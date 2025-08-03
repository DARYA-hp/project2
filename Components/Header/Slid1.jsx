import React from "react";

function Slid({ slide }) {
  return (
    <div className="main"style={{ display: "flex", width: "1000px", height: "450px",  marginTop: "180px",  marginLeft: "200px", }}>
      <div className="left" style={{  width: "500px", height: "450px", backgroundColor: "rgba(226, 245, 250, 1)", border: "1px solid none", borderRadius: "20px 0  0 20px", }}>
        <button
          style={{marginLeft: "30px",height: "40px",width: "140px",color: "black",backgroundColor: "white", marginTop: "20px", borderRadius: "25px", }} >
          Hot recipe
        </button>
        <h1 style={{ marginLeft: "30px" , color:"black"}}>{slide.title}</h1>
        <p style={{ width: "300px", marginLeft: "30px" , color:"black"}}>{slide.desc}</p>
        <div>
          <button style={{  marginLeft: "30px", fontSize: "12px", height: "30px", width: "100px",backgroundColor: "rgba(218, 229, 231, 1)", borderRadius: "20px", }} >
            30 minutes
          </button>
          <button
            style={{ marginLeft: "30px",fontSize: "12px",height: "30px", width: "100px", backgroundColor: "rgba(218, 229, 231, 1)", borderRadius: "20px",}}>
             chicken
          </button>
        </div>
        <div
          style={{ display: "flex", marginTop: "30px", marginLeft: "30px" }}>
          <p style={{ fontWeight: "bold", color:"black" }}> <img src="" alt="" /> John Smith</p>
          <button style={{ marginLeft: "180px", height: "40px", width: "130px",fontSize: "12px", color: "white",backgroundColor: "black",borderRadius: "10px",}}>
            View Recipes
          </button>
        </div>
      </div>

      <div className="right">
        <img src={slide.image} alt="" style={{ width: "500px", height: "450px", borderRadius: "0 20px 20px 0" }}/>
      </div>
    </div>
  )
}

export default Slid;
