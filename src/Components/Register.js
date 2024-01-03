import React, { useState } from 'react'
import './Componentcss/register.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { database } from '../FireBaseConfig';

export default function () {

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password_repeat = e.target.repeat.value;

    if (password === password_repeat) {
      createUserWithEmailAndPassword(database, email, password).then(data => {
        console.log(data, "authData");
        history('/')
      }).catch(err => {
        window.alert(err.code)
      })
    } else {
      window.alert('Passwords does not match');
    }
  }

  return (
    <div className="container-register">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="contain">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" id="psw" required />

          <label><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="repeat" id="psw-repeat" required />
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

          <button type="submit" className="registerbtn">Register</button>
        </div>

        <div className="container signin">
          <p>Already have an account? <Link style={{ textDecoration: "underline" }} to="/">Sign in</Link>.</p>
        </div>
      </form>
    </div>
  )
}
