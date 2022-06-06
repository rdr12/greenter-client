import service from "./config.services";

const getAllComentariosService = () => {
    return service.get("/comentarios");
  };

const addNewComentarioService = (newComentario) => {
    return service.post("/comentarios/comentarioAdd", newComentario) 
}

const getComentarioDetailsService = (id) => {
    return service.get(`comentarios/${id}`) 
}

const deleteComentarioService = (id) => {
    return service.delete(`comentarios/${id}`) 
}

const editComentarioService = (id, comentario) => {
    return service.delete(`comentarios/${id}`, comentario) 
}

export {
    getAllComentariosService,
    addNewComentarioService,
    getComentarioDetailsService,
    deleteComentarioService,
    editComentarioService
  };