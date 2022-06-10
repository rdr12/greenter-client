import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deletePlantaService, getPlantaDetailsService } from "../services/planta.services";

import {AuthContext} from "../context/auth.context";

import AllComentarios from "components/AllComentarios";



function PlantaDetails() {
  const {admin} = useContext(AuthContext)
  const { id } = useParams()
  const navigate = useNavigate()
console.log("esto es un atraco",id)
  const [ plantaDetails, setPlantaDetails ] = useState(null)
  

  useEffect(() => {
    getPlantaDetails()
   
    // eslint-disable-next-line
  }, [])

  const getPlantaDetails = async () => {

    try {
      
      const response = await getPlantaDetailsService(id)
      setPlantaDetails(response.data)
      console.log(response.data)
    } catch (error) {
      navigate("/error")
    }

  }

  const handleDelete = async () => {

    try {
      
      await deletePlantaService(id)
      navigate("/plantas")

    } catch (error) {
      navigate("/error")
    }

  }

  if (plantaDetails === null) {
    return <h3>... Loading</h3>
  }

  return (
    <div className = "fichaCrerlanta">
      <h3>Detalles de la planta</h3>

     

      <h4>Nombre: {plantaDetails.nombre}</h4>
      <p>Description: {plantaDetails.description}</p>
      <p>Parte utilizada: {plantaDetails.parteUtilizada}</p>
      <p>Hábitat de recolección: {plantaDetails.habitatRecoleccion}</p>
      <p>Principios activos: {plantaDetails.principiosActivos}</p>
      <p>Empleo: {plantaDetails.empleo}</p>
      
      {admin === true && <div> <Link to = {`/plantas/${id}/edit`}><button>Editar</button></Link>

      <button onClick={handleDelete}>Borrar</button>
      </div>
    }


    <AllComentarios />
    

    </div>
  );
}

export default PlantaDetails;