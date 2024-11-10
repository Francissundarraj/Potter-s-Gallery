import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"
import four from "../assets/images/4.jpg"
import five from "../assets/images/5.jpg"
import six from "../assets/images/6.jpg"
import seven from "../assets/images/7.jpg"
import eight from "../assets/images/8.jpg"



function Container(){
    return(
      <div className="container">
        <div className="images-card">
              
              <figure class="figcont" ><img src={one} alt=""/><figcaption>Sorcerer's Stone</figcaption></figure>
              <figure class="figcont"> <img src={two} alt=""/><figcaption>Chamber of Secrets</figcaption></figure>
              <figure class="figcont"><img src={three} alt=""/><figcaption>The Prisoner of Azkaban</figcaption></figure>                 
             <figure class="figcont"> <img src={four} alt=""/>  <figcaption>The Goblet of Fire</figcaption></figure>     
             
             <figure class="figcont"> <img src={five} alt=""/> <figcaption>The Order of Phoenix</figcaption></figure>           
              <figure class="figcont" ><img src={six} alt=""/><figcaption>The Half-Blood Prince</figcaption></figure>
              <figure class="figcont"> <img src={seven} alt=""/><figcaption>The Deathly Hallows Part I</figcaption></figure>
              <figure class="figcont"><img src={eight} alt=""/><figcaption>The Deathly Hallows Part II</figcaption></figure>                 
            
      </div>
      </div>
    )
  }

  export default Container