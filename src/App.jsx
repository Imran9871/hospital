import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';


// Components
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';



const App = () => {
  return (
      <Router>
        <ScrollToTop /> {/* Place it here! */}
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
        <Footer/>

      </Router>
  );
};

export default App;
