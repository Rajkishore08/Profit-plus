// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Profit Plus App</h1>
      <button onClick={() => navigate('/salesperson-login')}>Login as Salesperson</button>
      <button onClick={() => navigate('/owner-login')}>Login as Owner</button>
    </div>
  );
};

export default Home;
