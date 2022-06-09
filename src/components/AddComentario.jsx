import { useState } from "react";
import { addNewComentarioService } from "../services/comentarios.servicies";
import { useNavigate} from "react-router-dom";


function AddComentarios(props) {
  const [text, setText] = useState(" ");
  const navigate = useNavigate();
  const {getAllComentarios} = props
  // const {id} = useParams()
  

  const handleTextChange = (e) => {setText(e.target.value)};
  
//AÑADIR COMENTARIO FUNCION
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      await addNewComentarioService(text);
      getAllComentarios();
      setText(" ")


    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="textarea">
        <label htmlFor="textForm">Deja tu comentario</label>
        <textarea name="text" value={text} clonChange={handleTextChange}></textarea> 
         
       
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default AddComentarios;
