function Header(){
    return(
        <>
        <div style={{display: "flex",flexDirection:"row" ,justifyContent:"space-between", position:"absolute" , top:"0", }}>
            <h1 style={{paddingLeft:"100px", }}>Foodieland</h1>
            <div className="menu" style={{paddingLeft:"200px"}}>
                <ul style={{display:"inline",listStyleType:"none",}}>
                    <li style={{display:"inline-block", paddingLeft:"20px", paddingTop:"30px"}}>Home</li>
                    <li style={{display:"inline-block" , paddingLeft:"20px"}}>Recipes</li>
                    <li style={{display:"inline-block", paddingLeft:"20px"}}>Blog</li>
                    <li style={{display:"inline-block", paddingLeft:"20px"}}>Contact</li>
                    <li style={{display:"inline-block" , paddingLeft:"20px"}}>About us</li>
                </ul>
            </div>
            <div className="icon" style={{paddingLeft:"200px" ,paddingTop:"30px"}}>
                <i className="fa fa-facebook-f" style={{paddingRight:"40px"}}></i>
                <i className="fa fa-twitter" ></i>
                <i className="fa fa-instagram" style={{paddingLeft:"40px"}}></i>
            </div>
        </div>
        </>
    )
}
export default Header;