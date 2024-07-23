import './Landing.css';
import React, { useEffect, useState } from "react";
import myImage from '../assets/landing-logo.png';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import axios from 'axios';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/labdash');
        }
    }, [navigate]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password){
            setError("Please enter the password");
            return;
        }

        setError("");

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });

            localStorage.setItem('token', response.data.token);
            navigate('/labdash');
        } catch (error) {
            setError(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <>
            <div className="flex items-center justify center blue-background">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-4xl mb-7" style={{color: "black", fontFamily:"LeagueSpartan-Bold"}}>Login</h4>

                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="input-box"
                            value={email}
                            style={{color:'black'}}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                        <PasswordInput 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                        <button type="submit" className="btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );    
}