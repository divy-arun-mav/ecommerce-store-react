import React , { useState } from 'react'
import './Componentcss/navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { database } from '../FireBaseConfig'

export default function Navbar(props) {
    const history = useNavigate()

   

    const handleClick = () => {
        signOut(database).then(val => {
            console.log()
            history('/')
        })
    }

    const showMenu = () => {
        if (document.getElementById('nav-list').style.display === "none") {
            document.getElementById('nav-list').style.display = 'flex';
        }
        else {
            document.getElementById('nav-list').style.display = 'none';
        }
    }



    return (
        <>
            <div className='container-nav'>
                <nav>
                    <h1 className='logo'>Looto</h1>
                    <ul id='nav-list' className='nav-list'>
                        <li><Link to='/Loot.js'>Home</Link></li>
                        <li><Link to='/About.js'>About Us</Link></li>
                        <li><Link to='/Productpage.js'>Our Products</Link></li>
                        <li><Link to='/Contact.js'>Contact Us</Link></li>
                        <li onClick={handleClick} className='logout-btn'>Log Out</li>
                        <li>
                            <div className="cart">
                                <h5> Cart <span id="count">{props.count}</span></h5>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div onClick={showMenu} className='hamburger'>
                    <div className='burger bone'></div>
                    <div className='burger btwo'></div>
                    <div className='burger bthree'></div>
                </div>
            </div>
        </>
    )
}
