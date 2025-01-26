import React, { useState } from 'react';

export const LoginComponent = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demo purposes, using simple validation
        if (formData.username === 'admin' && formData.password === 'password') {
            onLogin(formData.username);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-overlay">
            <div className="login-content">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <span className="input-emoji">👤</span>
                        <input
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <span className="input-emoji">🔒</span>
                        <input
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};