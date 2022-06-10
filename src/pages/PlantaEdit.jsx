import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editPlantaService,
  getPlantaDetailsService
} from "../services/planta.services";
// import {uploadService} from "../services/profile.services"

function PlantaEdit() {
  const [nombre, setNombre] = useState("");
  const [description, setDescription] = useState("");
  const [parteUtilizada, setParteUtilizada] = useState("");
  const [habitatRecoleccion, setHabitatRecoleccion] = useState("");
  const [principiosActivos, setPrincipiosActivos] = useState("");
  const [empleo, setEmpleo] = useState("");
  // const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleParteUtilizadaChange = (e) => setParteUtilizada(e.target.value);
  const handleHabitatRecoleccionChange = (e) => setHabitatRecoleccion(e.target.value);
  const handlePrincipiosActivosChange = (e) => setPrincipiosActivos(e.target.value);
  const handleEmpleoChange = (e) => setEmpleo(e.target.value);

  // const handleImageChange = async(e) => {
  //   console.log(e.target.files[0])
  //   const uploadForm = new FormData()
  //   uploadForm.append("image", e.target.files[0])
  //   try {
  //     const response = await uploadService(uploadForm)
  //     setImage(response.data)
  //   } catch {
  //     navigate("/error")
  //   }
  // }

  useEffect(() => {
    getPlantaDetails();
    // eslint-disable-next-line
  }, []);

  const getPlantaDetails = async () => {
    try {
      const response = await getPlantaDetailsService(id);
      setNombre(response.data.nombre)
      setDescription(response.data.description)
      setParteUtilizada(response.data.parteUtilizada)
      setHabitatRecoleccion(response.data.habitatRecoleccion)
      setPrincipiosActivos(response.data.principiosActivos)
      setEmpleo(response.data.principiosActivos)
      // setImage(response.data.image)
      const {
        nombre,
        description,
        parteUtilizada,
        habitatRecoleccion,
        principiosActivos,
        empleo,
        // image,
      } = response.data;

      setNombre(nombre);
      setDescription(description);
      setParteUtilizada(parteUtilizada);
      setHabitatRecoleccion(habitatRecoleccion);
      setPrincipiosActivos(principiosActivos);
      setEmpleo(empleo);
      // setImage(image);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editPlanta = {
      nombre,
      description,
      parteUtilizada,
      habitatRecoleccion,
      principiosActivos,
      empleo,
      // image
    };

    try{
      await editPlantaService(id, editPlanta);
      navigate(`/plantas/${id}/details`);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="fichaCrerlanta">
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

        <button type="submit">Editar</button>
      </form>
    </div>
  );
}

export default PlantaEdit;
