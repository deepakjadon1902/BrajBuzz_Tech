import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Reviews } from './pages/Reviews';
import { ReviewDetail } from './pages/ReviewDetail';
import { News } from './pages/News';
import { Videos } from './pages/Videos';
import { Contact } from './pages/Contact';
import { About } from './pages/About'; // ✅ Import About page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> {/* ✅ Added About Us route */}
          <Route path="/subscribe" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
