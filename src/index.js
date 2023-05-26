import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connected");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  app.listen(process.env.PORT);
  console.log("Server on port 3100");
}

main();
