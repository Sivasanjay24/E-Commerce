import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import ImageCarousel from "./components/HeroSection/AdsCarousel";
import CategoryNavbar from "./components/CategoryNav/CategoryNavbar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={[<ImageCarousel />,<CategoryNavbar/>]}/>
        <Route path="/bulk-products" element={<h1>Bulk Products Page</h1>} />
        <Route path="/domestic" element={<h1>Domestic Products Page</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
