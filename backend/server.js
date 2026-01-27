import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors()); // allow requests from frontend
app.use(express.json()); // parse JSON body

// order endpoint
app.post('/order', async (req, res) => {
  console.log('Received order:', req.body);
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw-IyUB8PQJt3qTmbENLB2NNHjxaU-2TQRUIqPhBlA0pSrE7vNdDu5FKAqEXdiLzQLRnA/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    console.log('Google Script response:', data);
    res.json(data);
  } catch (err) {
    console.error('Fetch to Google Script failed:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));