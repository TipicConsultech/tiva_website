import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './pages/Componants/Navbar';
import Footer from './pages/Componants/Footer';
import Home from './pages/Home';
import Contactus from './pages/ContactUs';
import FAQ from './pages/FAQ';
import BoardOfDirector from './pages/BoardOfDirector';
import Scrap from './pages/ScrapYourVehicle';
import MediaCoverage from './pages/MediaCoverage';
import SpareParts from './pages/SpareParts';


function PageRoutes() {
  return (
    <div>
        <HashRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Contact-us" element={<Contactus/>} />
                <Route path="/whoWeAre" element={<BoardOfDirector/>} />
                <Route path="/FAQs" element={<FAQ/>} />
                <Route path="/ScrapVehicle" element={<Scrap/>} />
                <Route path="/SpareParts" element={<SpareParts/>} />
                <Route path="/mediaAndNews" element={<MediaCoverage/>} />
            </Routes>
          <Footer/>
        </HashRouter>
      
    </div>
  )
}

export default PageRoutes
