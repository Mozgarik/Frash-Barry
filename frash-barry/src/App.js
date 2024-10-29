import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactFormModal from './components/ContactFormModal';
import RecipesPage from './pages//RecipesPage';
import './App.module.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection onContactClick={toggleModal} />
              <AboutSection />
              {/* <PurchaseInstructions /> */}
              {/* <ProducerInfo /> */}
            </>
          } />
          <Route path="/recipes" element={<RecipesPage />} />
        </Routes>
        <Footer />
        {isModalOpen && <ContactFormModal onClose={toggleModal} />}
      </div>
    </Router>
  );
}

export default App;
