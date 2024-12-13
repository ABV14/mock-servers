import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default (req: VercelRequest, res: VercelResponse) => {
  fs.readFile(path.join(__dirname, '../data/sales_data.json.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data' });
    }

    // Send the mock data as a JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  });
};
