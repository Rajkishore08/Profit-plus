// src/pages/OwnerRegister.js
import React, { useState } from 'react';
import axios from 'axios';

const OwnerRegister = () => {
    const [ownerData, setOwnerData] = useState({
        username: '',
        password: '',
        email: '',
        role: 'owner',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOwnerData({ ...ownerData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', ownerData);
            alert('Registration successful!');
        } catch (error) {
            alert('Registration failed. Please check your details.');
        }
    };

    return (
        <div>
            <h2>Owner Registration</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    name="username"
                    placeholder="Username"
                    value={ownerData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    className="form-input"
                    name="password"
                    placeholder="Password"
                    value={ownerData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    className="form-input"
                    name="email"
                    placeholder="Email"
                    value={ownerData.email}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
    );
};

export default OwnerRegister;
