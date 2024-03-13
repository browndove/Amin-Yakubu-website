import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Real from './pages/Real';

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
