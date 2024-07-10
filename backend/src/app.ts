import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';


const app: Application = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});
