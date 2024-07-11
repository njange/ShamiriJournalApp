// src/pages/NewEntry.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewEntry = ({ auth }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleNewEntry = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/entries', { title, content }, {
        headers: { Authorization: `Bearer ${auth}` }
      });
      history.push('/dashboard');
    } catch (error) {
      console.error('New entry error:', error);
    }
  };

  return (
    <div>
      <h2>New Entry</h2>
      <form onSubmit={handleNewEntry}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NewEntry;
