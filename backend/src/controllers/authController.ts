import { Request, Response } from 'express';
import User from '../models/User';
import config from '../config'; // Make sure '../config' resolves correctly

export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  try {
    const newUser = await User.create({ username, password, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password match (example, you should hash passwords in production)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token (example, you should use a proper JWT library and secret)
    const token = 'generated_jwt_token_here';

    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};
