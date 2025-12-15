import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Support from "./pages/Support.jsx";
import New from "./pages/New.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/support" element={<Support />} />
        <Route path="/new" element={<New />} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;
