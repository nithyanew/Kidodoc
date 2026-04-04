import { Router, Request, Response } from 'express';

const router = Router();

// Stub for Request OTP
router.post('/otp/request', async (req: Request, res: Response) => {
  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  // TODO: Implement actual OTP SMS sending
  console.log(`Sending OTP to ${phone}`);
  
  res.status(200).json({ message: 'OTP sent successfully', phone });
});

// Stub for Verify OTP
router.post('/otp/verify', async (req: Request, res: Response) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) {
    return res.status(400).json({ error: 'Phone and OTP are required' });
  }

  // TODO: Verify OTP against cache/db
  console.log(`Verifying OTP ${otp} for ${phone}`);
  
  // Mock response
  if (otp === '123456') { // Mock valid OTP
    const mockToken = 'mock-jwt-token-123';
    return res.status(200).json({ 
      token: mockToken, 
      user: { phone, isNewUser: true } 
    });
  }

  res.status(401).json({ error: 'Invalid OTP' });
});

export default router;
