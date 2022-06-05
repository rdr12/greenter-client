import { useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import { Link, useNavigate } from "react-router-dom"
import { getAllPlantasService } from "../services/planta.services";

function PlantaList() {

  // 1. Estado para la data
  const [ allPlantas, setAllPlantas ] = useState(null)

  const navigate = useNavigate()
  // 2. ComponentDidMount
  useEffect(() => {
    getAllPlantas()
  }, [])

  // 3. La funcion que busca la data
  const getAllPlantas = async () => {

    try {
     
      // const response = await axios.get("http://localhost:5005/api/plantas")
      const response = await getAllPlantasService()

      setAllPlantas(response.data)

    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login")
        // esto seria una forma sencilla de enviar el usuario a login cuando no tiene token/token invalido
        // pero hay una mejor => la mejor es con HOC IsPrivate
      } else {
        navigate("/error")
      }
    }
  }

  // if (allPlantas === null) {
  //   return <h3>... Loading</h3>
  // }

  return (
    <div>
      <AddForm getAllPlantas={getAllPlantas}/>
      <hr />
      <h3>Listado de Plantas</h3>

      {/* // 4. el Loading */}
      {allPlantas === null && <h3>... Loading</h3>}

      {allPlantas !== null && allPlantas.map((eachPlanta) => {
          return (
            <div key={eachPlanta._id}>
              
              <Link to={`/plantas/${eachPlanta._id}/details`}>{eachPlanta.name}</Link>
            </div>
          )
        })}

    </div>
  );
}

export default PlantaList;