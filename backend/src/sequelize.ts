// backend/src/sequelize.js

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('shamiri', 'shamiri', 'shamiri', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
