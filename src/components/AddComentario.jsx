import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewComentarioService } from "../services/comentarios.servicies";



function AddComentarios(props) {
  const [text, setText] = useState(" ");
  

  const navigate = useNavigate(" ");

  const handleTextChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newComentario = {
        text,
      };
      await addNewComentarioService(newComentario);
      props.getAllComentarios();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="areaText">
        <label htmlFor="textForm">Deja tu comentario</label>
        <input
          type="textarea"
          name="textForm"
          onChange={handleTextChange}
          value={text}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default AddComentarios;
