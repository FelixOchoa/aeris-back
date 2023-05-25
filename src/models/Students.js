import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./Users.js";

export const Students = sequelize.define("students", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  id_user: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});

Students.belongsTo(Users, { foreignKey: "id_user", sourceKey: "id" });
Users.hasOne(Students, { foreignKey: "id_user", sourceKey: "id" });
