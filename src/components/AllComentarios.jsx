import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllComentariosService } from "../services/comentarios.servicies";
// import AddComentario from "comentarios.service"

function AllComentarios(id) {
  const [allComentarios, setAllComentarios] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) getAllComentarios(id);
    // eslint-disable-next-line
  }, [id]);

  const getAllComentarios = async (id) => {
    try {
      const response = await getAllComentariosService(id);
      setAllComentarios(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
    {/* <div><AddComentario getAllComentarios={getAllComentarios} /></div> */}
      <hr />
      <h3>Comentarios</h3>

      {/* // 4. el Loading */}
      {allComentarios === null && <h3>... Loading</h3>}

      {allComentarios !== null &&
        allComentarios.map((comentario, index) => {
          return (
            <div key={`comentario-${index}`}>
              {" "}
              <p>{comentario.tex}</p>
            </div>
          );
        })}
    </div>
  );
}

export default AllComentarios;
