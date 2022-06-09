import { useState } from "react";
import { addNewComentarioService } from "../services/comentarios.servicies";
import { useNavigate, useParams } from "react-router-dom";

function AddComentarios(props) {
  const [text, setText] = useState(" ");
  const navigate = useNavigate();
  const { getAllComentarios } = props;
  const { id } = useParams();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  //AÑADIR COMENTARIO FUNCION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNewComentarioService(id, text);
      getAllComentarios();
      setText(" ");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div class="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="textForm">Deja tu comentario</label>
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          onChange={handleTextChange}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default AddComentarios;
