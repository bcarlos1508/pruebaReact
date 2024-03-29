import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Index";
import Navbar from "./components/navBar/Index";


function App() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  }

  useEffect(() => {
    getProductos();
  }, []);
  
  
  
  return (
    <div>
      <h1>Tienda de productos</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="home"/>} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/productos"
          element={<ItemListContainer productos={productos} />}
        />
        <Route
          path="/productos/:id"
          element={<ItemDetailContainer productos={productos} />}
        />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </div>
  )
}

export default App;
