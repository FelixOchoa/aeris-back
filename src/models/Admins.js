import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./Users.js";

export const Admins = sequelize.define("admins", {
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
});

Admins.belongsTo(Users, { foreignKey: "id_user", sourceKey: "id" });
Users.hasOne(Admins, { foreignKey: "id_user", sourceKey: "id" });
