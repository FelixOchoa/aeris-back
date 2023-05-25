import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./Users.js";

export const Secretaries = sequelize.define("secretaries", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Secretaries.belongsTo(Users, { foreignKey: "id_user", sourceKey: "id" });
Users.hasOne(Secretaries, { foreignKey: "id_user", sourceKey: "id" });
