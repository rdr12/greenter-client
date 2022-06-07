import { useEffect, useState } from "react";
import { deletePlantaService, getPlantaDetailsService } from "../services/planta.services";
import { useParams, useNavigate, Link } from "react-router-dom";
import AllComentarios from "../components/AllComentarios";

function PlantaDetails() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [ plantaDetails, setPlantaDetails ] = useState(null)

  useEffect(() => {
    getPlantaDetails()
    // eslint-disable-next-line
  }, [])

  const getPlantaDetails = async () => {

    try {
      
      const response = await getPlantaDetailsService(id)
      setPlantaDetails(response.data)

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
    <div>
      <h3>Detalles de la planta</h3>

      <h4>Nombre: {plantaDetails.nombre}</h4>
      <p>Description: {plantaDetails.description}</p>
      <p>Imagen: {plantaDetails.image}</p>
      <p>Parte utilizada: {plantaDetails.parteUtilizada}</p>
      <p>Hábitat de recolección: {plantaDetails.habitatRecoleccion}</p>
      <p>Principios activos: {plantaDetails.principiosActivos}</p>
      <p>Empleo: {plantaDetails.empleo}</p>
      <button onClick={handleDelete}>Borrar</button>
      <Link to = {`/plantas/${id}/edit`}><button>Edit</button></Link>

    {/* <AllComentarios /> */}

    </div>
  );
}

export default PlantaDetails;