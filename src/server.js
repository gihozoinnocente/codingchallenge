import app from "./app.js";
import sequelizeConnection from "./db/config.js";

const PORT = process.env.PORT || 5000;

const connectApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    await sequelizeConnection.authenticate();
    console.log("Database Connected successfully.");
  } catch (error) {
    console.log(error);
  }
};

connectApp();
