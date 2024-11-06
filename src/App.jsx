import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import PortfolioChild from './pages/Portfolio/Child/PortfolioChild';
import FiksPage from './pages/Fiks/FiksPage';

function App() {
  return (

    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
      <Route path='/portfolio_inner' element={<PortfolioChild />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/fiks' element={<FiksPage />} />
    </Routes>

  );
}

export default App;
