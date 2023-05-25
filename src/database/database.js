import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("aeris", "root", "2882", {
  host: "localhost",
  dialect: "mysql",
  port: "33061",
});
