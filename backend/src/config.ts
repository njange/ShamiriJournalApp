
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
      username: 'shamiri',
      password: 'shamiri',
      database: 'shamiri', // Adjust database name
      dialect: 'postgres' // Adjust dialect as per your database
    },
    jwtSecret: '1234', // Secret key for JWT token
    port: 3000 // Port your server will run on
  };
  
  export default config;
  