import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Users = sequelize.define("users", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  names: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastnames: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  born_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  identification: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  type_identification: {
    type: DataTypes.ENUM("CC", "CE", "TI", "PP", "RC", "NIT"),
    allowNull: false,
  },
});
