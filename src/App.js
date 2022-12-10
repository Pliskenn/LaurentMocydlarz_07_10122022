import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import DetailAnnounce from './Pages/Announces_Details/Announces_Details'
import './App.css';


const App = () => {

  return (
    <HashRouter>
          <div className="App">
            <div className="content">
              <Navbar />
              <Routes>
                <Route path='/annonces/:id' element={<DetailAnnounce />}/>
                <Route path="/" element={<Home/>}/>
              </Routes>
            </div>
            <Footer />
          </div>
    </HashRouter>

  );
}

export default App;


