import { Users } from "../models/Users.js";
import { Students } from "../models/Students.js";
import { Admins } from "../models/Admins.js";
import { Secretaries } from "../models/Secretaries.js";
import { Teachers } from "../models/Teachers.js";

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

const createAdmin = async (admin) => {
  const newAdmin = await Admins.create({
    id_user: admin.id,
  });

  return newAdmin;
};

const createSecretary = async (secretary) => {
  const newSecretary = await Secretaries.create({
    id_user: secretary.id,
    address: secretary.address,
  });

  return newSecretary;
};

const createTeacher = async (teacher) => {
  const newTeacher = await Teachers.create({
    id_user: teacher.id,
    address: teacher.address,
    especiality: teacher.especiality,
    master_degree: teacher.master_degree,
    grade_director: teacher.grade_director,
  });

  return newTeacher;
};

export const UserService = {
  createUser,
  createStudent,
  createAdmin,
  createSecretary,
  createTeacher,
  getUsers,
};
