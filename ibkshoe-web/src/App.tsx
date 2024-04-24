import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ListProduct } from "./pages/ListProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-product" element={<ListProduct />} />
    </Routes>
  );
}

export default App;
