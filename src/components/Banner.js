import eleven from "../assets/images/11.jpg"
import twelve from "../assets/images/12.jpg"
import thirteen from "../assets/images/13.jpg"
import fourteen from "../assets/images/14.jpg"
import fifteen from "../assets/images/15.jpg"
import sixteen from "../assets/images/16.png"
import seventeen from "../assets/images/17.jpg"
import eighteen from "../assets/images/18.jpg"


function Banner() {
    return(
        <div className="banner">
            <img src={eleven} alt="" />
              <img src={thirteen} alt="" />
             <img src={sixteen} alt="" />
            <img src={fifteen} alt="" />
            
            <img src={fourteen} alt="" />
            <img src={twelve} alt="" />
          
            
           
            <img src={seventeen} alt="" />
            <img src={eighteen} alt="" />
            
        </div>
    )
}

export default Banner