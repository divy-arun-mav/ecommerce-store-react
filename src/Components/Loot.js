import React from 'react'
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import './Componentcss/Loot.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Loot() {
  return (
    <div>
      <Navbar />
      <div className='container-loot'>
        <img id='img' src={img1} />
        <div className='midtext'>
          <h1 className='main-logo'>Looto</h1>
          <Link to='/Productpage.js'><p>Shop Now</p></Link>
        </div>
        <img id='img' src={img2} />
      </div>
      <div className='looto-content'>
      <h1>Autumn '23</h1>
        <h2>New Season</h2>
        <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/AW23/AF/Women_Men_hero/Men._SX414_QL85_FMpng_.png' />
        <Link className='link' to="/Productpage.js"><p>Shop Now</p></Link>
      </div>
      <Footer />
    </div>
  )
}