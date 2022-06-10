import service from "./config.services";

service.interceptors.request.use((config)=>{
    const storedToken = localStorage.getItem("authToken")
    config.headers = storedToken && {Authorization: `Bearer ${storedToken}`}
    return config;
   })

const getAllComentariosService = ({id}) => {
    console.log(id)
    return service.get(`/plantas/${id}/details`, id)
  };

const addNewComentarioService = (id, text) => {
    return service.post(`/plantas/${id}/details`, {text})
}

// const getComentarioDetailsService = (id) => {
//     return service.get(`comentarios/${id}`) 
// }

// const deleteComentarioService = (id) => {
//     return service.delete(`comentarios/${id}`) 
// }

// const editComentarioService = (id, comentario) => {
//     return service.delete(`comentarios/${id}`, comentario) 
// }

export {
    getAllComentariosService,
    addNewComentarioService,
    // getComentarioDetailsService,
    // deleteComentarioService,
    // editComentarioService
  };