import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import NavBar from "./componets/NavBar";
import AboutUs from "./pages/AboutUs";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
