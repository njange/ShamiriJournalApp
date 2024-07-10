import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import  JournalEntry  from '../models/JournalEntry';

export const getEntries = async (req: Request, res: Response) => {
  const userId = req.userId; // Assuming userId is extracted from JWT middleware

  const journalEntryRepository = getRepository(JournalEntry);

  try {
    const entries = await journalEntryRepository.find({ where: { userId } });
    res.status(200).json(entries);
  } catch (error) {
    console.error('Error fetching journal entries:', error);
    res.status(500).json({ message: 'Failed to fetch journal entries' });
  }
};

// Implement other CRUD operations similarly
