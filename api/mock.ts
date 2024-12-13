import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default (req: VercelRequest, res: VercelResponse) => {
  // Set CORS headers to allow requests from any origin (you can change '*' to a specific domain)
  res.setHeader('Access-Control-Allow-Origin', '*'); // or 'http://yourfrontenddomain.com'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle pre-flight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Read the file asynchronously
  const filePath = path.join(__dirname, '../data/sales_data.json'); // Ensure the file path is correct

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Return an error if the file couldn't be read
      return res.status(500).json({ error: 'Failed to read data' });
    }

    // Return the file contents as JSON
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  });
};
