// backend/src/config.ts

interface Config {
    database: {
      host: string;
      username: string;
      password: string;
      database: string;
      dialect: 'postgres' | 'mysql' | 'sqlite' | 'mssql'; // Adjust dialect as per your database
    };
    jwtSecret: string;
    port: number;
  }
  
  const config: Config = {
    database: {
      host: 'localhost',
      username: 'your_username',
      password: 'your_password',
      database: 'shamiri', // Adjust database name
      dialect: 'postgres' // Adjust dialect as per your database
    },
    jwtSecret: 'your_jwt_secret_key', // Secret key for JWT token
    port: 5000 // Port your server will run on
  };
  
  export default config;
  