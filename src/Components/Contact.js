import React, { useState } from 'react';
import './Componentcss/contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);


    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, address, message } = user

        if (name && email && phone && address && message) {
            const res = await fetch("https://ecommercewebsite-69a6c-default-rtdb.firebaseio.com/ecommercewebsite.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    message,
                }),
            });
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    message: "",
                });

                window.alert("Your response was recorded succesfully")
            }
        } else {
            window.alert('Please fill all the fields');
        }
    }


    return (
        <>
            <Navbar />
            <div className='container container-contact'>
                <h3>Contact Form</h3>
                <div className="container">
                    <form method='POST'>
                        <label>Name</label>
                        <input required type="text" id='input-name' name="name" onChange={getUserData} value={user.name} placeholder="Your name.." />

                        <label>Email</label>
                        <input required type="email" name="email" onChange={getUserData} value={user.email} placeholder="Your email.." />

                        <label>Phone</label>
                        <input required type="tel" name="phone" onChange={getUserData} value={user.phone} placeholder="Your Phone.." />

                        <label>Address</label>
                        <input required type="text" id='input-address' name="address" onChange={getUserData} value={user.address} placeholder="Your Address.." />

                        <label>Message</label>
                        <textarea id="subject" onChange={getUserData} value={user.message} name="message" placeholder="Write something.." style={{ height: 200 + 'px' }}></textarea>

                        <input required type="submit" onClick={postData} value="Submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
