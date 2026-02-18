import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Parcours from './pages/Parcours';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
