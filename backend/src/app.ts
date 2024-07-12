import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import sequelize from './sequelize';
import User from './models/User';
import JournalEntry from './models/JournalEntry';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use user routes
app.use('/api/users', userRoutes);

// Default route
app.use((req, res, next) => {
  res.status(404).send('Cannot ' + req.method + ' ' + req.url);
});

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
