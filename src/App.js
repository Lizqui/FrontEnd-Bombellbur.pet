import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InformationCompany from './pages/informationCompany.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Pets from './pages/pets.jsx';
import Register from './pages/register.jsx';
import Requirements from './pages/requirements.jsx';
import Navbar from './layout/Nabvar.jsx';
import Car from './pages/care.jsx'
import Message from './pages/opnion.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

window.addEventListener('error', function (event) {
  if (event.message === 'ResizeObserver loop completed with undelivered notifications.') {
    event.stopImmediatePropagation();
  }
});

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/informationCompany" element={<InformationCompany />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/car" element={<Car/>} />
          <Route path="/opinion" element={<Message/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
