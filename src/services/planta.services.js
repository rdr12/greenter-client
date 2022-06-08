import service from "./config.services";

service.interceptors.request.use((config) => {
  const storedToken = localStorage.getItem("authToken");
  if (storedToken) {
    config.headers = { Authorization: `Bearer ${storedToken}` };
  }
  return config;
});

const getAllPlantasService = () => {
  return service.get("/plantas");
};

const addNewPlantaService = (newPlanta) => {
  return service.post("/plantas/plantaAdd", newPlanta);
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
const uploadService = (uploadForm) => {
  return service.post("/uploader", uploadForm)
}


export {
  getAllPlantasService,
  addNewPlantaService,
  getPlantaDetailsService,
  deletePlantaService,
  editPlantaService,
  uploadService
};
