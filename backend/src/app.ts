import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes'; // Import your user routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use user routes
app.use('/api/users', userRoutes);

// Default route
app.use((req, res, next) => {
  res.status(404).send('Cannot ' + req.method + ' ' + req.url);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
