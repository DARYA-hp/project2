function Footer(){
    return(
        <>
        <div style={{display:"flex" , flexDirection:"column"}}>
            <div style={{display:"flex", marginTop:"100px",width:"900", justifyContent:"space-between",marginLeft:"100px"}}>
            <div style={{paddingLeft:"20px"}}>
                <h3 style={{color:"black"}}>Foodieland</h3>
                <p style={{color:"black"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ab.</p>
            </div>
            <div>
                <ul>
                    <li style={{display:"inline-block", paddingRight:"30px",color:"black"}}>Recipes</li>
                    <li style={{display:"inline-block", paddingRight:"30px",color:"black"}}>Blog</li>
                    <li style={{display:"inline-block", paddingRight:"30px",color:"black"}}>Contact us</li>
                    <li style={{display:"inline-block" , paddingRight:"30px", color:"black"}}>About us</li>
                </ul>
            </div>
        </div>

        <div style={{ marginTop:"60px",width:"900", justifyContent:"space-between",marginLeft:"90px"}}>
            <div>
               <p style={{marginTop:"30px",paddingLeft:"450px"}}>©2020 Flowbse Powered by <span style={{color:"red"}}>WebFlow</span></p>
            </div>
            <div style={{marginLeft:"1000px",paddingBottom:"30px" }}>
                <i className="fa fa-facebook-f" style={{paddingRight:"40px"}}></i>
                <i className="fa fa-twitter" ></i>
                <i className="fa fa-instagram" style={{paddingLeft:"40px"}}></i>
            
            </div>
        </div>
        </div>
        </>
    )
}
export default Footer;