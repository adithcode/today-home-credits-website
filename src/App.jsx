import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services'; // ✅ Import Services
import Apply from './pages/Apply'; // If already created
import Contact from './pages/Contact'; // If already created
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About'; // If already created

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} /> {/* ✅ Add this line */}
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
