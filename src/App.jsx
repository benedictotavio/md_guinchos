import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Contact/>} path='/contact'/>
          <Route element={<Services/>} path='/services'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
