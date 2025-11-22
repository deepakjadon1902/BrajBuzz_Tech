
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import { Home } from './pages/Home';
// import Motivation from './pages/Motivation'; // ✅ FIXED IMPORT
// import { Videos } from './pages/Videos';
// import { Contact } from './pages/Contact';
// import { About } from './pages/About';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
//         <Header />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/motivation" element={<Motivation />} /> {/* ✅ Updated Route */}
//           <Route path="/videos" element={<Videos />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/subscribe" element={<Home />} />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import Motivation from './pages/Motivation';
import { Videos } from './pages/Videos';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { TermsOfService } from './pages/TermsOfService'; // ✅ Added Terms import

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsOfService />} /> 
          <Route path="/subscribe" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;