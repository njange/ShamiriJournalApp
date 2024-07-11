// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = ({ auth }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:3000/entries', {
          headers: { Authorization: `Bearer ${auth}` }
        });
        setEntries(response.data);
      } catch (error) {
        console.error('Fetch entries error:', error);
      }
    };
    fetchEntries();
  }, [auth]);

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/new-entry">New Entry</Link>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <Link to={`/entry/${entry.id}`}>{entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
