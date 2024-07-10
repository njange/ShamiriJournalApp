import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './config/database'; // Ensure sequelize is properly configured

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
import JournalRoutes from './routes/JournalRoutes';
app.use('/api/journal', JournalRoutes);

// Start server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error: any) => {
  console.error('Unable to connect to the database:', error);
});
