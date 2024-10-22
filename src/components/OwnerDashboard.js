// src/components/OwnerDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OwnerDashboard() {
  const [data, setData] = useState({ collections: [], orders: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/data/owner');
        setData(res.data);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Owner Dashboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <h3>Daily Collections</h3>
      <ul>
        {data.collections.length > 0 ? (
          data.collections.map((c) => (
            <li key={c._id}>{c.shopName}: ₹{c.amount}</li>
          ))
        ) : (
          <li>No collections found.</li>
        )}
      </ul>

      <h3>Orders Received</h3>
      <ul>
        {data.orders.length > 0 ? (
          data.orders.map((o) => (
            <li key={o._id}>{o.shopName}: {o.orderDetails}</li>
          ))
        ) : (
          <li>No orders found.</li>
        )}
      </ul>
    </div>
  );
}

export default OwnerDashboard;
