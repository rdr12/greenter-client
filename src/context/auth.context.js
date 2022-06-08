import { createContext, useEffect, useState } from "react"
import { verifyService } from "../services/auth.services"

const AuthContext = createContext()

function AuthWrapper(props) {

  // todos los estados y funciones
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState(false)

  //CHEQUEAMOS SI EL USUARIO ES VALIDO O NO
  //CHEQUEAMOS SI TIENE O NO TIENE TOKEN
  const authenticateUser = async () => {
    setIsLoading(true)
    try {
      // donde llamaremos a esa ruta verify
      const response = await verifyService()
      console.log("Token valido")
      console.log("el payload es:", response.data)
      setIsLoggedIn(true)
      setUser(response.data)
      setIsLoading(false)
      setAdmin(false)
    
      if (response.data.adminRole === "admin"){
        setAdmin(true)
       
      }
    } catch (error) {
      
      setIsLoggedIn(false)
      setUser(null)
      setIsLoading(false)
      setAdmin(false)
    }
  }
  

  const passedContext = {
    isLoggedIn,
    user,
    authenticateUser,
    admin
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  // Espera mientras verificamos al usuario, antes de renderizar la app
  if (isLoading === true) {
    return <div className="App"><h3>Verificando Usuario</h3></div>
  }

  // esto es TODA nuestra app
  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthWrapper}