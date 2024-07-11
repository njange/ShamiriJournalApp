// src/pages/EditEntry.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditEntry = ({ auth }) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/entries/${id}`, {
          headers: { Authorization: `Bearer ${auth}` }
        });
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error('Fetch entry error:', error);
      }
    };
    fetchEntry();
  }, [id, auth]);

  const handleEditEntry = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/entries/${id}`, { title, content }, {
        headers: { Authorization: `Bearer ${auth}` }
      });
      history.push('/dashboard');
    } catch (error) {
      console.error('Edit entry error:', error);
    }
  };

  return (
    <div>
      <h2>Edit Entry</h2>
      <form onSubmit={handleEditEntry}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEntry;
