

function Slid6() {
  const images = [ "/public/Image3/1.jpg", "/public/Image3/2.jpg","/public/Image3/3.jpg",
    "/public/Image3/4.jpg", "/public/Image3/5.jpg", "/public/Image3/6.jpg", "/public/Image3/7.jpg",
    "/public/Image3/8.jpg" ]

  return (
    <>
      <div style={{ width: "1100px", marginTop: "140px", marginLeft: "140px" }}>
        <div style={{ display: "flex", flexDirection: "row",  }}>
          <h2 style={{ fontSize: "35px", width: "400px" , color:'black'}}>
            Try this delicious recipe to make your day
          </h2>
          <p style={{ width: "600px",paddingLeft: "60px",paddingTop: "20px", color:"black" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum at itaque doloremque incidunt dolore labore hic consectetur voluptate ab quaerat.
          </p>
        </div>

        <div
          style={{ paddingTop: "60px", width: "1100px",display: "flex", flexWrap: "wrap", justifyContent: "space-between"}} >
          {images.map((item, index) => (
            <img key={index} src={item}  style={{width: "250px",height: "260px", borderRadius: "20px", paddingBottom: "20px" }}  /> ))}
        </div>
      </div>
    </>
  )
}

export default Slid6;
