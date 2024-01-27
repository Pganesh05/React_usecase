import { Routes, Route } from "react-router-dom";
import "./App.css";
import CarBrands from "./components/carBrands";
import CarDetails from "./components/carDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CarBrands />} />
      <Route path="/car" element={<CarDetails />} />
    </Routes>
  );
}

export default App;
