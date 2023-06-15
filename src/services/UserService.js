import { Users } from "../models/Users.js";
import { Students } from "../models/Students.js";
import { Admins } from "../models/Admins.js";
import { Secretaries } from "../models/Secretaries.js";
import { Teachers } from "../models/Teachers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(user.password, salt);

    const newUser = await Users.create({
      email: user.email,
      password: newPassword,
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

const getStudents = async () => {
  const students = await Students.findAll();
  if (!students || students.length === 0) {
    return {
      error: "Students not found",
    };
  }

  const studentsData = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const user = await Users.findOne({
      where: {
        id: student.id_user,
      },
    });

    studentsData.push({
      id: user.id,
      email: user.email,
      names: user.names,
      lastnames: user.lastnames,
      born_date: user.born_date,
      phone: user.phone,
      identification: user.identification,
      type_identification: user.type_identification,
      address: student.address,
      grade: student.grade,
    });
  }

  return studentsData;
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

const loginUser = async (email, password) => {
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return {
      error: "User not found",
    };
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return {
      error: "Invalid password",
    };
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
    expiresIn: "1h",
  });

  const typeUser = await getTypeUser(user.id);

  return {
    id_user: user.id,
    email: user.email,
    token: token,
    type_user: typeUser.type,
  };
};

const getTypeUser = async (id_user) => {
  try {
    let typeUser = await Students.findOne({
      where: {
        id_user: id_user,
      },
    });

    if (typeUser) {
      return {
        type: "student",
      };
    }

    typeUser = await Admins.findOne({
      where: {
        id_user: id_user,
      },
    });

    if (typeUser) {
      return {
        type: "admin",
      };
    }

    typeUser = await Secretaries.findOne({
      where: {
        id_user: id_user,
      },
    });

    if (typeUser) {
      return {
        type: "secretary",
      };
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const logoutUser = async (email) => {
  try {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        error: "User not found",
      };
    }

    return {
      email: user.email,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const generatePassword = async (email, newPassword) => {
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return {
      error: "User not found",
    };
  }
  if (user.password) {
    return {
      error: "User already has a password",
    };
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  const userUpdate = await Users.update(
    { password: hash },
    {
      where: {
        email: email,
      },
    }
  );

  return {
    email: userUpdate.email,
  };
};

export const UserService = {
  createUser,
  createStudent,
  createAdmin,
  createSecretary,
  createTeacher,
  loginUser,
  logoutUser,
  generatePassword,
  getUsers,
  getStudents,
};
