import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    
    // Look for all CV files (cv.pdf, cv-*.pdf)
    const files = fs.readdirSync(publicDir);
    const cvFiles = files.filter(file => 
      file.startsWith('cv') && file.endsWith('.pdf')
    );
    
    if (cvFiles.length === 0) {
      return res.status(404).send('CV not found');
    }
    
    // Sort by filename to get the latest
    const latestCV = cvFiles.sort().reverse()[0];
    const cvPath = path.join(publicDir, latestCV);
    
    // Read the file
    const cvBuffer = fs.readFileSync(cvPath);
    
    // Set headers to serve as PDF with custom filename
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="howardhancv.pdf"');
    res.setHeader('Content-Length', cvBuffer.length);
    
    // Send the file
    res.send(cvBuffer);
  } catch (error) {
    console.error('Error serving CV:', error);
    res.status(500).send('Failed to serve CV');
  }
}

