import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PlantaList from "./pages/PlantaList";
import PlantaDetails from "./pages/PlantaDetails";
import PlantaEdit from "./pages/PlantaEdit";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

function App() {
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<PlantaList />} />
        <Route path="/plantas/:id/details" element={<PlantaDetails />} />
        <Route path="/plantas/:id/edit" element={<PlantaEdit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* error Front End routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
