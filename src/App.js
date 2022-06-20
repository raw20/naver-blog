import "./App.css";
import Header from "./components/Header/Header";
import ProductTab from "./components/Main/ProductTab";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slide from "./components/Main/Slide";
import Login from "./components/Main/Login";
import Card from "./components/Main/Card";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductTab />} />
          <Route path="/slide" element={<Slide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
