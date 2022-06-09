import { NavLink } from 'react-router-dom'
// import ImgHome2 from "../assets/imgHome2.jpg"
// import ImgHome3 from "../assets/imgHome3.jpg"
// import ImgHome4 from "../assets/imgHome4.jpg"
// import ImgHome5 from "../assets/imgHome5.jpg"
import ImgHome1 from "../assets/imgHome1.png"

function Home() {
    return (
      <div className='container-home'>

        <h3>Bienvenidos a Greenter</h3>
      <div>
        <NavLink to="../pages/home/fitoterapia.jsx" >
          {/* <img src={ImgHome1} alt="image" className="img-fluid" /> */}
          {/* <h3 className='text-2xl mt-2'>Fitoterapia</h3> */}
        
        </NavLink>
        </div>  

        <div>
        <NavLink to="../pages/home/metodosObetencións.jsx">
        {/* <img src={ImgHome1} alt="image" className="img-fluid" /> */}
          {/* <h3 className='text-2xl mt-2'>Segunda Sección</h3> */}
          
        </NavLink>
        </div>

        <div>
        <NavLink to="../pages/home/origen y recolección.jsx">
        {/* <img src={ImgHome1} alt="image" className="img-fluid" /> */}
          {/* <h3 className='text-2xl mt-2'>Segunda Sección</h3> */}
          
        </NavLink>
</div>
      </div>
    );
  }
  
  export default Home;
  

  
  
 