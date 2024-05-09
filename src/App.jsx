import NavbarHook from "./components/NavbarHook/NavbarHook";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <Router>
      <Navbar>
        <NavbarHook>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/about" element={<About /> } />
              <Route path="/projects" element={<Projects /> } />
              <Route path="/skills" element={<Skills /> } />
              <Route path="/contact" element={<Contact /> } />
            </Routes>
          </main>
        </NavbarHook>
      </Navbar>
    </Router>
  )
}

export default App
