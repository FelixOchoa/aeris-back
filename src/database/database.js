import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("aeris-back", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
