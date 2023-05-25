import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Matters = sequelize.define("matters", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  credits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  state: {
    type: DataTypes.ENUM("active", "inactive"),
    allowNull: false,
  },
});
