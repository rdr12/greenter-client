import { NavLink } from 'react-router-dom'
// import ImgHome2 from "../assets/imgHome2.jpg"
// import ImgHome3 from "../assets/imgHome3.jpg"
// import ImgHome4 from "../assets/imgHome4.jpg"
// import ImgHome5 from "../assets/imgHome5.jpg"
// import ImgHome1 from "../assets/imgHome1.png"

import Sec1 from "assets/home1.png"
import Sec2 from "assets/home2.png"
import Sec3 from "assets/home3.png"


function Home() {
    return (
      <div class="ultrabackground">

        {/* <h3>Bienvenidos a Greenter</h3> */}
        <div class="title">
        
        <NavLink to="/Fitoterapia">
          <img src={Sec1} alt="image" className="img-fluid" width="150px" />
          <h7 className='text-2xl mt-2'>Más info</h7>
       
        
        </NavLink>

        
        </div>  

        <div class="title">
        <NavLink to="/Obtencion">
        <img src={Sec2} alt="image" className="img-fluid" width="150px" />
          <h7 className='text-2xl mt-2'>Más info</h7>
          
        </NavLink>
        </div>



        <div class="title">
        
        <NavLink to="/Recoleccion">
        <img src={Sec3} alt="image" className="img-fluid" width="150px" />
          <h7 className='text-2xl mt-2'>Más info</h7>
          
        </NavLink>
        
</div>


      </div>
      
    );
  }
  
  export default Home;
  

  
  
 