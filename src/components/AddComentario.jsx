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
    <div classname="container">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-8">
          <div className="form mt-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="textForm">Deja tu comentario</label>
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={text}
                  onChange={handleTextChange}
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-primary mt-1" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddComentarios;
