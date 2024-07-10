import { Router } from 'express';
import { getEntries, addEntry, updateEntry, deleteEntry } from '../controllers/journalController';

const router = Router();

router.get('/entries', getEntries);
router.post('/entries', addEntry);
router.put('/entries/:id', updateEntry);
router.delete('/entries/:id', deleteEntry);

export default router;
