import { useEffect, useState } from "react";
import AddComentario from "../components/AddComentario";
import { Link, useNavigate } from "react-router-dom"
import { getAllComentariosService } from "../services/comentarios.servicies";

function AllComentarios() {

  // 1. Estado para la data
  const [ allComentarios, setAllComentarios ] = useState(null)

  const navigate = useNavigate()
  // 2. ComponentDidMount
  useEffect(() => {
    getAllComentarios()
    // eslint-disable-next-line 
  }, [])
  

  // 3. La funcion que busca la data
  const getAllComentarios = async () => {

    try {
     
      // const response = await axios.get("http://localhost:5005/api/plantas/comentarios")
      const response = await getAllComentariosService()

      setAllComentarios(response.data)

    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login")
        
      } else {
        navigate("/error")
      }
    }
  }

  if (allComentarios === null) {
    return <h3>... Loading</h3>
  }

  return (
    <div>
      <AddComentario getAllComentarios={getAllComentarios}/>
      <hr />
      <h3>Comentarios</h3>

      {/* // 4. el Loading */}
      {allComentarios === null && <h3>... Loading</h3>}

      {allComentarios !== null && allComentarios.map((eachComentario) => {
          return (
            <div key={eachComentario._id}>
              {/* <p>{eachComentario.user}</p> */}
              <Link to={`/plantas/${eachComentario._id}/details`}>{eachComentario.user}</Link>
            </div>
          )
        })}

    </div>
  );
}

export default AllComentarios;