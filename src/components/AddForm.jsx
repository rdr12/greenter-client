import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewPlantaService } from "../services/planta.services";
import {uploadService} from "../services/profile.services"

function AddForm() {
  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");
  const [parteUtilizada, setParteUtilizada] = useState("");
  const [habitatRecoleccion, setHabitatRecoleccion] = useState("");
  const [principiosActivos, setPrincipiosActivos] = useState("");
  const [empleo, setEmpleo] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleParteUtilizadaChange = (e) => setParteUtilizada(e.target.value);
  const handleHabitatRecoleccionChange = (e) =>
    setHabitatRecoleccion(e.target.value);
  const handlePrincipiosActivosChange = (e) =>
    setPrincipiosActivos(e.target.value);
  const handleEmpleoChange = (e) => setEmpleo(e.target.value);
  // const handleImageChange = (e) => setImage("image", (e.target.files[0]));
  // const uploadForm = new FormData()
  // uploadForm.append("image", (e.target.files[0]))
  
  const handleImageChange = async(e) => {

    console.log(e.target.files[0])

    const uploadForm = new FormData()
    uploadForm.append("image", e.target.files[0])

    try {

      const response = await uploadService(uploadForm)
      setImage(response.data)

    } catch {
      navigate("/error")
    }

  }

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
        image,
      };

      await addNewPlantaService(newPlanta);
     navigate("/plantas")
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div class="form-group">
      <h3>Añadir Planta</h3>

      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="nombre">Nombre de la Planta:</label>
        <input
          type="text"
          name="nombre"
          onChange={handleNombreChange}
          value={nombre}
        />

        <label htmlFor="description">Descripción::</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />

        <label htmlFor="parteUtilizada">Parte Utilizada:</label>
        <input
          type="text"
          name="parteUtilizada"
          onChange={handleParteUtilizadaChange}
          value={parteUtilizada}
        />
        <label htmlFor="habitatRecoleccion">Hábitat de recolección:</label>
        <input
          type="text"
          name="habitatRecoleccion"
          onChange={handleHabitatRecoleccionChange}
          value={habitatRecoleccion}
        />
        <label htmlFor="habitatRecoleccion">Principios activos:</label>
        <input
          type="text"
          name="principiosActivos"
          onChange={handlePrincipiosActivosChange}
          value={principiosActivos}
        />

        <label htmlFor="habitatRecoleccion">Empleo:</label>
        <input
          type="text"
          name="empleo"
          onChange={handleEmpleoChange}
          value={empleo}
        />

        {/* <label htmlFor="image">Añade una imagen:</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          value={image}
        /> */}

        <label htmlFor="image">Imagen</label>
        <input type="file" name="image" onChange={handleImageChange} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default AddForm;
