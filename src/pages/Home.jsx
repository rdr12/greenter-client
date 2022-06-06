import { NavLink } from 'react-router-dom'

function Home() {
    return (
      <div>

        <h3>Bienvenidos a Greenter</h3>

        <NavLink to="" className="bg-slate-500">
          {/* <img src={imagen} alt="" className='w-full'/> */}
          <h3 className='text-2xl mt-2'>Primera sección</h3>
          <p className='py-4'>Texto</p>
        </NavLink>
        <NavLink to="">
          {/* <img src={imagen} alt="" className='w-full'/> */}
          <h3 className='text-2xl mt-2'>Segunda Sección</h3>
          <p className='py-4'>Texto</p>
        </NavLink>
        <NavLink to="">
          {/* <img src={imagen} alt="" className='w-full'/> */}
          <h3 className='text-2xl mt-2'>Tercera Sección</h3>
          <p className='py-4'>Texto</p>
        </NavLink>

      </div>
    );
  }
  
  export default Home;
  

  
  
 