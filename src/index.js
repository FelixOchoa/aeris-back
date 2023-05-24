import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connected");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  app.listen(3000);
  console.log("Server on port 3000");
}

main();
