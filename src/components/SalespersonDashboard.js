// src/components/SalespersonDashboard.js
import React, { useState } from 'react';
import axios from 'axios';

function SalespersonDashboard() {
  const [collection, setCollection] = useState({ billNumber: '', shopName: '', amount: '', remarks: '' });
  const [order, setOrder] = useState({ shopName: '', orderDetails: '' });
  const [loadingCollection, setLoadingCollection] = useState(false);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [error, setError] = useState('');

  const handleCollectionSubmit = async (e) => {
    e.preventDefault();
    setLoadingCollection(true);
    setError('');
    try {
      await axios.post('/api/data/collection', collection);
      alert('Collection Added');
      setCollection({ billNumber: '', shopName: '', amount: '', remarks: '' }); // Reset the form
    } catch (err) {
      setError('Failed to add collection. Please try again.');
    } finally {
      setLoadingCollection(false);
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setLoadingOrder(true);
    setError('');
    try {
      await axios.post('/api/data/order', order);
      alert('Order Added');
      setOrder({ shopName: '', orderDetails: '' }); // Reset the form
    } catch (err) {
      setError('Failed to add order. Please try again.');
    } finally {
      setLoadingOrder(false);
    }
  };

  return (
    <div>
      <h2>Salesperson Dashboard</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleCollectionSubmit}>
        <h3>Add Collection</h3>
        <input
          type="text"
          placeholder="Bill Number"
          value={collection.billNumber}
          onChange={(e) => setCollection({ ...collection, billNumber: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Shop Name"
          value={collection.shopName}
          onChange={(e) => setCollection({ ...collection, shopName: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={collection.amount}
          onChange={(e) => setCollection({ ...collection, amount: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Remarks"
          value={collection.remarks}
          onChange={(e) => setCollection({ ...collection, remarks: e.target.value })}
        />
        <button type="submit" disabled={loadingCollection}>
          {loadingCollection ? 'Adding...' : 'Add Collection'}
        </button>
      </form>

      <form onSubmit={handleOrderSubmit}>
        <h3>Add Order</h3>
        <input
          type="text"
          placeholder="Shop Name"
          value={order.shopName}
          onChange={(e) => setOrder({ ...order, shopName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Order Details"
          value={order.orderDetails}
          onChange={(e) => setOrder({ ...order, orderDetails: e.target.value })}
          required
        />
        <button type="submit" disabled={loadingOrder}>
          {loadingOrder ? 'Adding...' : 'Add Order'}
        </button>
      </form>
    </div>
  );
}

export default SalespersonDashboard;
