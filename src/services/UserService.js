import { Users } from "../models/Users.js";
import { Students } from "../models/Students.js";

const createUser = async (user) => {
  try {
    const newUser = await Users.create({
      email: user.email,
      password: user.password,
      names: user.names,
      lastnames: user.lastnames,
      born_date: user.born_date,
      phone: user.phone,
      identification: user.identification,
      type_identification: user.type_identification,
    });
    return {
      ...newUser.dataValues,
      password: undefined,
      role: user.role,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const getUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const createStudent = async (student) => {
  const newStudent = await Students.create({
    id_user: student.id,
    address: student.address,
    grade: student.grade,
  });

  return newStudent;
};

export const UserService = {
  createUser,
  createStudent,
  getUsers,
};
