import { UserService } from "../services/UserService.js";
import {
  IS_STUDENT,
  IS_ADMIN,
  IS_SECRETARY,
  IS_TEACHER,
} from "../utils/Constant.js";
import {
  ResponseBad,
  ResponseCreateStudent,
  ResponseError,
  ResponseGetUsers,
  ResponseCreateAdmin,
  ResponseCreateSecretary,
  ResponseCreateTeacher,
  ResponseLoginUser,
  ResponseLogoutUser,
  ResponseGeneratePassword,
} from "../utils/Responses.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();

    if (users.error) {
      return ResponseBad(res, users.error);
    }

    return ResponseGetUsers(res, users);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await UserService.getStudents();

    if (students.error) {
      return ResponseBad(res, students.error);
    }

    return ResponseGetUsers(res, students);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

export const CreateUser = async (req, res) => {
  try {
    const User = req.body;
    const userCreate = await UserService.createUser(User);

    if (userCreate.error) {
      return ResponseBad(res, userCreate.error);
    }

    switch (userCreate.role) {
      case IS_STUDENT:
        return await CreateStudent(res, User, userCreate);
      case IS_ADMIN:
        return await CreateAdmin(res, User, userCreate);
      case IS_SECRETARY:
        return await CreateSecretary(res, User, userCreate);
      case IS_TEACHER:
        return await CreateTeacher(res, User, userCreate);
      default:
        return ResponseBad(res, "Error al crear el usuario");
    }
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

const CreateStudent = async (res, User, student) => {
  try {
    const newStudent = {
      id: student.id,
      address: User.address,
      grade: User.grade,
    };

    const studentCreate = await UserService.createStudent(newStudent);
    return ResponseCreateStudent(res, studentCreate);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

const CreateAdmin = async (res, User, admin) => {
  try {
    const newAdmin = {
      id: admin.id,
    };

    const adminCreate = await UserService.createAdmin(newAdmin);
    return ResponseCreateAdmin(res, adminCreate);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

const CreateSecretary = async (res, User, secretary) => {
  try {
    const newSecretary = {
      id: secretary.id,
      address: User.address,
    };

    const secretaryCreate = await UserService.createSecretary(newSecretary);
    return ResponseCreateSecretary(res, secretaryCreate);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

const CreateTeacher = async (res, User, teacher) => {
  try {
    const newTeacher = {
      id: teacher.id,
      address: User.address,
      especiality: User.especiality,
      master_degree: User.master_degree,
      grade_director: User.grade_director,
    };

    const teacherCreate = await UserService.createTeacher(newTeacher);

    return ResponseCreateTeacher(res, teacherCreate);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.loginUser(email, password);

    if (user.error) {
      return ResponseBad(res, user.error);
    }

    return ResponseLoginUser(res, user);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

export const logout = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserService.logoutUser(email);

    if (user.error) {
      return ResponseBad(res, user.error);
    }

    return ResponseLogoutUser(res, user);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

export const generatePassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const hash = await UserService.generatePassword(email, newPassword);

    if (hash.error) {
      return ResponseBad(res, hash.error);
    }

    return ResponseGeneratePassword(res, hash);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};
