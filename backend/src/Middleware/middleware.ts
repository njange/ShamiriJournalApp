import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define an interface to extend the Request type
interface AuthenticatedRequest extends Request {
  userId?: string; // Define userId as an optional string property
}

// Middleware function to extract userId from JWT
export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, 'your_secret_key');
      req.userId = (decoded as any).userId; // Assuming userId is stored in JWT payload
      next();
    } catch (error) {
      console.error('Failed to authenticate token:', error);
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
