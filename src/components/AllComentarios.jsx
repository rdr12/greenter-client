import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllComentariosService } from "../services/comentarios.servicies";
import AddComentario from "components/AddComentario";

function AllComentarios() {
  const [allComentarios, setAllComentarios] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAllComentarios();
    // eslint-disable-next-line
  }, []);

  const getAllComentarios = async () => {
    console.log("¨getting comments");
    try {
      const response = await getAllComentariosService(id);
      setAllComentarios(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <section>
      <div classname="container">
        <div class="row d-flex justify-content-center">
          <div class="col-sm-8">
            <div className="form mt-5">
              <h3>Comentarios</h3>

                {/* // 4. el Loading */}
                {allComentarios === null && <h3>... Loading</h3>}
                {allComentarios !== null &&
                  allComentarios.map((comentario, _id) => {
                    return (
                      <div key={`comentario-${_id}`}>
                        {" "}
                        <p>{comentario.text}</p>
                      </div>
                    );
                  })}

            </div>
          </div>
        </div>
      </div>
      <AddComentario getAllComentarios={getAllComentarios} />
    </section>
  );
}

export default AllComentarios;
