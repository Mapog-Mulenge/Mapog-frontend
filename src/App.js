import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Loading...');

  // ✅ Hardcoded API URL
  const API_BASE_URL = 'https://mapog-msms-api-production.up.railway.app';

  useEffect(() => {
    axios.get(`${API_BASE_URL}/health`)
      .then(response => {
        setMessage(`✅ Backend says: ${response.data}`);
      })
      .catch(error => {
        console.error('API call failed:', error);
        setMessage('❌ Failed to reach API');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🚀 Mapog Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
