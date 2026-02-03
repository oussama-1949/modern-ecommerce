import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Google fetch failed' });
  }
}
