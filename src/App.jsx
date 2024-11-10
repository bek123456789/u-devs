import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import PortfolioChild from './pages/Portfolio/Child/PortfolioChild';
import FiksPage from './pages/Fiks/FiksPage';
import BlogInner from './pages/Blog/Child/BlogInner/BlogInner';
import Vacancy from './pages/Vacancy/Vacancy';
import VacancyInner from './pages/Vacancy/VacancyInner/VacancyInner';

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
      <Route path='/blog_inner' element={<BlogInner />} />
      <Route path='/vacancy' element={<Vacancy />} />
      <Route path='/vacancy_inner' element={<VacancyInner />} />
    </Routes>

  );
}

export default App;
