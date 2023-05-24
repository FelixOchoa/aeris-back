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
} from "../utils/Responses.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();

    if (getUsers.error) {
      return ResponseBad(res, users.error);
    }

    return await ResponseGetUsers(res, users);
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
      default:
        break;
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
