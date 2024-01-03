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
import Authorized from './Components/Authorized';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/Register.js' element={<Register />} />
          <Route exact path='/' element={<Login />} />
          <Route exact
            path='/authorized'
            element={<Authorized />}
          >
            <Route exact path='Loot.js' element={<Loot />} />
            <Route exact path='About.js' element={<About />} />
            <Route exact path='Productpage.js' element={<Productpage />} />
            <Route exact path='Contact.js' element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
