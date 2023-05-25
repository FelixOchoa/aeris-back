import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Students } from "./Students.js";
import { Matters } from "./Matters.js";

export const StudentsMatters = sequelize.define("students_matters", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  id_student: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  id_matter: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

StudentsMatters.belongsTo(Students, {
  foreignKey: "id_student",
  sourceKey: "id",
});
Students.hasMany(StudentsMatters, {
  foreignKey: "id_student",
  sourceKey: "id",
});

StudentsMatters.belongsTo(Matters, {
  foreignKey: "id_matter",
  sourceKey: "id",
});
Matters.hasMany(StudentsMatters, {
  foreignKey: "id_matter",
  sourceKey: "id",
});
