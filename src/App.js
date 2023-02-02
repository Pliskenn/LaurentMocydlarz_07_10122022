import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import AnnounceDetail from "./Pages/AnnounceDetail/AnnounceDetail";
import NotFound from "./Pages/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/annonces/:id" element={<AnnounceDetail />} />
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="*" element={ <Navigate to="/NotFound" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
