import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Express from './pages/Express';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Services />} path='/services' />
          <Route element={<Express />} path='/express' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
