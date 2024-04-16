import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar lógica para enviar os dados de login para o servidor
        console.log('Email:', email); <FaUser />
        console.log('Password:', password);
    };

    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                <label htmlFor="username">Username:</label>
                <input
                
                    type="username"
                    id="username"
                    name="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <FaUser />
                <br />
                <div className="input-box">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <FaLock />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
