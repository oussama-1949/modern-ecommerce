import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors()); // allow requests from frontend
app.use(express.json()); // parse JSON body

// order endpoint
app.post('/order', async (req, res) => {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxktu4pCeJa2xYnY0yBDQug3hrbEPuVGg4gZ8B29sJuVmw0YU2Wsv5ajE0yDdo950w/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Fetch to Google Script failed:', err); // ✅ log fetch errors
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));