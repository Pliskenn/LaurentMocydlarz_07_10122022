import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import DetailAnnounce from "./Pages/Announces_Details/Announces_Details";
import NotFound from "./Pages/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/annonces/:id" element={<DetailAnnounce />} />
            <Route path="/" element={<Home />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="*" element={ <Navigate to="/NotFound" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
