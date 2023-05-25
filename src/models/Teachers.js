import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./Users.js";

export const Teachers = sequelize.define("teachers", {
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
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  especiality: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  master_degree: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  grade_director: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});

Teachers.belongsTo(Users, { foreignKey: "id_user", sourceKey: "id" });
Users.hasOne(Teachers, { foreignKey: "id_user", sourceKey: "id" });
