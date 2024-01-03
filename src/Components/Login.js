    import React, { useState } from 'react'
import './Componentcss/login.css'
import { database } from '../FireBaseConfig'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(database,email,password).then(data => {
        console.log(data,"authData");
        history('/Loot.js');
        }).catch(err => {
            window.alert(err.code)
        })
    }

    return (
        <>
            <div className="container-login">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                        <h2 style={{textAlign:"center"}}>Login</h2>
                        <div className="col">
                            <input type="email" name="email" placeholder="email" required />
                            <input type="password" name="password" placeholder="Password" required autoComplete='on' />
                            <input type="submit" value="Login" />
                        </div>

                    </div>
                </form>
            </div>
            <div className='login-cont-2'>
                <p>Don't have an account <Link to="/Register.js">Register Now!</Link></p>
            </div>
        </>
    )
}


// MongoDB Data Directory :- C:\Program Files\MongoDB\Server\7.0\data\
// MongoDB Log Directory :- C:\Program Files\MongoDB\Server\7.0\log\