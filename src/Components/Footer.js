import React, { useState } from 'react'
import './Componentcss/footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  const[email , setEmail] = useState({
    email: "",
  });

  let name, value;
    const getEmailId = (event) => {
        name = event.target.name;
        value = event.target.value;

        setEmail({ ...email, [name]: value })
    };

    const postData = async (e) => {
      e.preventDefault();

      const { email } = email

      if (email) {
          const res = await fetch("https://ecommercewebsite-69a6c-default-rtdb.firebaseio.com/ecommercewebsite.json", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  email,
              }),
          });
          if (res) {
              setEmail({
                  email: "",
              });

              window.alert("Your are now subscribed to our newsletter")
          }
      } else {
          window.alert('Please fill all the fields');
      }
  }

  return (
    <>
      <div className='footer'>
        <ul className='foot footer-list'>
            <h3>Usefull Links</h3>
            <li><Link to='/Loot.js'>Home</Link></li>
            <li><Link to='/About.js'>About Us</Link></li>
            <li><Link to='/Productpage.js'>Our Products</Link></li>
            <li><Link to='/Contact.js'>Contact Us</Link></li>
        </ul>
        <div className='foot newsletter'>
            <h2>Subscribe To Our NewsLetter</h2>
            <form method='POST'>
                <input className='newsletter-input' name="email" onChange={getEmailId} type='text' />
                <button>Subscribe</button>
            </form>
        </div>
        <div className='foot contactus'>
            <h3>Contact Us</h3>
            <p><Link to='/'>www.looto.com</Link></p>
            <p>Ph.No :- 91+9948934541</p>
            <p>Email :- looto@contact.mail.com</p>
        </div>
      </div>  
    </>
  )
}
