import ContactForm from './views/contactForm';
import { Home } from './views/home.jsx';
import { Pricing } from './views/pricing.jsx';
import { Navbar } from './views/navbar.jsx';
import SectionAi from './views/sectionAi.jsx';
import { Features } from './views/features.jsx';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/AiSearch" element={<SectionAi />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
};
