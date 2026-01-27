import fetch from 'node-fetch';


const test = async () => {
try {
const res = await fetch('https://script.google.com/macros/s/AKfycbwGdOMd3JtMN8nnD1Z7z9WUY-Z7vptLJpnXARfBXSjY0vD42YPHh_35jWuEVUiDsjjetg/exec');
const text = await res.text();
console.log('Response:', text);
} catch (err) {
console.error('Fetch failed:', err);
}
};


test();