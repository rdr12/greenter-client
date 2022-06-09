import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPlantasService } from "../services/planta.services";

function PlantaList() {
  // 1. Estado para la data
  const [allPlantas, setAllPlantas] = useState(null);

  const navigate = useNavigate();
  // 2. ComponentDidMount
  useEffect(() => {
    getAllPlantas();
    // eslint-disable-next-line
  }, []);

  // 3. La funcion que busca la data
  const getAllPlantas = async () => {
    try {
      const response = await getAllPlantasService();

      setAllPlantas(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  if (allPlantas === null) {
    return <h3>... Loading</h3>;
  }

  return (
    <div className = "form">
      <hr />
      <h3>Plantas</h3>

      {/* // 4. el Loading */}
      {allPlantas === null && <h3>... Loading</h3>}

      {allPlantas !== null &&
        allPlantas.map((eachPlanta) => {
          return (
            <div key={eachPlanta._id}>
              <Link to={`/plantas/${eachPlanta._id}/details`}>
                {eachPlanta.nombre}
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default PlantaList;
