export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log("ENV:", process.env.GOOGLE_SCRIPT_URL);

    console.log('Request body:', req.body);

  const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(req.body),
});


    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Fetch to Google Script failed:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
