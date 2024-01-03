import './App.css';
import { useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Loot from './Components/Loot';
import Productpage from './Components/Productpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";   
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <> 
    <Router>
        <Routes>
          <Route path='/Loot.js' element={<Loot />} />
          <Route path='/About.js' element={<About />} />
          <Route path='/Productpage.js' element={<Productpage  />} />    
          <Route path='/Contact.js' element={<Contact />} /> 
          <Route path='/Register.js' element={<Register />} />   
          <Route path='/' element={<Login />} />   
          <Route path='/Register.js' element={<Register />} />   
        </Routes>
      </Router>
    </>
  );
}

export default App;
