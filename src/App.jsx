import { useEffect } from 'react'
import './App.css'
import IndexLayout from './Pages/Layout Pages/IndexLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './Pages/ComponentsSideNav';
import IndexButtons from './Pages/Component Pages/IndexButtons';
import IndexCards from './Pages/Component Pages/IndexCards';
import IndexAccordions from './Pages/Component Pages/IndexAccordions';
import IndexCursor from './Pages/Component Pages/IndexCursor';
import IndexDropdowns from './Pages/Component Pages/IndexDropdowns';
import IndexForms from './Pages/Component Pages/IndexForms';
import IndexNavbars from './Pages/Component Pages/IndexNavbars';
import IndexSwitches from './Pages/Component Pages/IndexSwitches';
import IndexComponents from './Pages/Component Pages/IndexComponents';
import IndexAnimations from './Pages/Animation Pages/IndexAnimations';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Others from './Pages/Others';


const mouseLeavePageEvent = new CustomEvent('onMouseLeavePage');

function App() {
  useEffect(() => {
    window.addEventListener('mouseleave', () => {
      window.dispatchEvent(mouseLeavePageEvent); // Dispatch event when mouse leaves
    });

    return () => window.removeEventListener('mouseleave', () => {}); // Cleanup
  }, []);

  return (
    <>
    <SideNav />
    <Footer />
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Others />} />
    <Route path="/components" element={<IndexComponents />} />
    <Route path="/layouts" element={<IndexLayout />} />
    <Route path="/components/accordions" element={<IndexAccordions />} />
    <Route path="/components/buttons" element={<IndexButtons />} />
    <Route path="/components/cards" element={<IndexCards />} />
    <Route path="/components/cursor" element={<IndexCursor />} />
    <Route path="/components/dropdowns" element={<IndexDropdowns />} />
    <Route path="/components/forms" element={<IndexForms />} />
    <Route path="/components/navbars" element={<IndexNavbars />} />
    <Route path="/components/switches" element={<IndexSwitches />} />
    <Route path="/animations" element={<IndexAnimations />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App