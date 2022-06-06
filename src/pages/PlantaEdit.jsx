import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { editPlantaService, getPlantaDetailsService } from "../services/planta.services";

function PlantaEdit() {

  const navigate = useNavigate()
  const { id } = useParams()

  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");
  const [parteUtilizada, setParteUtilizada] = useState("");
  const [habitatRecoleccion, setHabitatRecoleccion] = useState("");
  const [principiosActivos, setPrincipiosActivos] = useState("");
  const [empleo, setEmpleo] = useState("");
  const [image, setImage] = useState("");
  

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleParteUtilizadaChange = (e) => setParteUtilizada(e.target.value);
  const handleHabitatRecoleccionChange = (e) => setHabitatRecoleccion(e.target.value);
  const handlePrincipiosActivosChange = (e) => setPrincipiosActivos(e.target.value);
  const handleEmpleoChange = (e) => setEmpleo(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
      
      const thePlanta = {
        nombre,
        description,
        parteUtilizada,
        habitatRecoleccion,
        principiosActivos,
        empleo,
        image
      }

      await editPlantaService(id, thePlanta)
      navigate(`/plantas/${id}/details`)

    } catch (error) {
      navigate("/error")
    }
  };

  useEffect(() => {
    getPlantaDetails()
  }, [])

  const getPlantaDetails = async () => {

    try {

      const response = await getPlantaDetailsService(id)
      const {  nombre, description, parteUtilizada, habitatRecoleccion, principiosActivos, empleo, image } = response.data  

      setNombre(nombre)
      setDescription(description)
      setParteUtilizada(parteUtilizada)
      setHabitatRecoleccion(habitatRecoleccion)
      setPrincipiosActivos(principiosActivos)
      setEmpleo(empleo)
      setImage(image)


      
    } catch (error) {
      navigate("/error")
    }

  }

  return (
    <div>
      <h3>Editar Planta</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          onChange={handleNombreChange}
          value={nombre}
        />

        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          name="descripción"
          onChange={handleDescriptionChange}
          value={description}
        />

        <label htmlFor="parte-utilizada">Parte utilizada:</label>
        <input
          type="text"
          name="parte-utilizada"
          onChange={handleParteUtilizadaChange}
          value={parteUtilizada}
        />

        <label htmlFor="habitat-recoleccion">Hábitat de recolección:</label>
        <input
          type="text"
          name="habitat-recoleccion"
          onChange={handleHabitatRecoleccionChange}
          value={habitatRecoleccion}
        />  

        
        <label htmlFor="principios-activos">Principios Activos:</label>
        <input
          type="text"
          name="principios-activos"
          onChange={handlePrincipiosActivosChange}
          value={principiosActivos}
        />

        <label htmlFor="empleo">Empleo:</label>
        <input
          type="text"
          name="empleo"
          onChange={handleEmpleoChange}
          value={empleo}
        />

<label htmlFor="image">Empleo:</label>
        <input
          type="text"
          name="image"
          onChange={handleImageChange}
          value={image}
        />

      

        <button type="submit">Editar</button>
      </form>
    </div>
  );
}

export default PlantaEdit;