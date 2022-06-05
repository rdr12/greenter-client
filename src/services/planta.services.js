import service from "./config.services";

const getAllPlantasService = () => {
  return service.get("/plantas");
};

const addNewPlantaService = (newPlanta) => {
  return service.post("/plantas", newPlanta);
};

const getPlantaDetailsService = (id) => {
  return service.get(`/plantas/${id}`);
};

const deletePlantaService = (id) => {
  return service.delete(`/plantas/${id}`);
};

const editPlantaService = (id, planta) => {
  return service.patch(`/plantas/${id}`, planta);
};

export {
  getAllPlantasService,
  addNewPlantaService,
  getPlantaDetailsService,
  deletePlantaService,
  editPlantaService,
};
