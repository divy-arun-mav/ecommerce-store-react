import React from 'react';
import './Componentcss/login.css';
import { database } from '../FireBaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const history = useNavigate();
    const [error, setError] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const data = await signInWithEmailAndPassword(database, email, password);
            const dataString = JSON.stringify(data);
            localStorage.setItem('user', dataString);
            history('/authorized/Loot.js');
        } catch (err) {
            console.error(err.code);
            setError('Authentication failed. Please check your email and password.');
        }
    };

    return (
        <>
            <div className="container-login">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                        <h2 style={{ textAlign: "center" }}>Login</h2>
                        <div className="col">
                            <input type="email" name="email" placeholder="email" required />
                            <input type="password" name="password" placeholder="Password" required autoComplete='on' />
                            <input type="submit" value="Login" />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </form>
            </div>
            <div className='login-cont-2'>
                <p>Don't have an account <Link to="/Register.js">Register Now!</Link></p>
            </div>
        </>
    );
}