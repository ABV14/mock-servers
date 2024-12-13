import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

// API endpoint to return the JSON data
app.get('/api/mock', (req: Request, res: Response) => {
  // Read the mock JSON file asynchronously
  fs.readFile(path.join(__dirname, '../data/mockData.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }

    // Send the mock data as JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
