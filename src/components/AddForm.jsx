import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPlantaService } from "../services/planta.services";

function AddForm() {
  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");
  const [parteUtilizada, setParteUtilizada] = useState("");
  const [habitatRecoleccion, setHabitatRecoleccion] = useState("");
  const [principiosActivos, setPrincipiosActivos] = useState("");
  const [empleo, setEmpleo] = useState("");

  const navigate = useNavigate();

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleParteUtilizadaChange = (e) => setParteUtilizada(e.target.value);
  const handleHabitatRecoleccionChange = (e) =>
    setHabitatRecoleccion(e.target.value);
  const handlePrincipiosActivosChange = (e) =>
    setPrincipiosActivos(e.target.value);
  const handleEmpleoChange = (e) => setEmpleo(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPlanta = {
        nombre,
        description,
        parteUtilizada,
        habitatRecoleccion,
        principiosActivos,
        empleo,
      };
      await addNewPlantaService(newPlanta);
      navigate("/plantas");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div classname="container">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-8">
          <div className="form mt-5">
            <h1 className="h1 mb-5">Añadir Planta</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre de la Planta:</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleNombreChange}
                  value={nombre}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descripción:</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleDescriptionChange}
                  value={description}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="parteUtilizada">Parte Utilizada:</label>
                <input
                  type="text"
                  name="parteUtilizada"
                  onChange={handleParteUtilizadaChange}
                  value={parteUtilizada}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="habitatRecoleccion">Hábitat de recolección:</label>
                <input
                  type="text"
                  name="habitatRecoleccion"
                  onChange={handleHabitatRecoleccionChange}
                  value={habitatRecoleccion}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="habitatRecoleccion">Principios activos:</label>
                <input
                  type="text"
                  name="principiosActivos"
                  onChange={handlePrincipiosActivosChange}
                  value={principiosActivos}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="habitatRecoleccion">Empleo:</label>
                <input
                  type="text"
                  name="empleo"
                  onChange={handleEmpleoChange}
                  value={empleo}
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary mt-1" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
