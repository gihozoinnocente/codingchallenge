import sequelize from "sequelize";

const { Sequelize } = sequelize;
const sequelizeConnection = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default sequelizeConnection;
