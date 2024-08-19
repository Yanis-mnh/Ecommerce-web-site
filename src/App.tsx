import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Shop from "./pages/Shop";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}> Shop</Link>
          </li>
          <li>
            <Link to={"pages"}> Pages</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="pages" element={<Pages />} />
      </Routes>
    </>
  );
}

export default App;
