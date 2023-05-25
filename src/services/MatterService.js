import { Matters } from "../models/Matters.js";
import { Students } from "../models/Students.js";
import { StudentsMatters } from "../models/StudentsMatters.js";

const createMatter = async (matter) => {
  try {
    const newMatter = await Matters.create({
      name: matter.name,
      credits: matter.credits,
      state: matter.state,
    });
    return newMatter;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const findMatterAndStudent = async (data) => {
  try {
    const student = await Students.findByPk(data.id_student);
    const matter = await Matters.findByPk(data.id_matter);

    if (!student || !matter) {
      return {
        error: "Student or matter not found",
      };
    } else {
      const studentMatter = await StudentsMatters.findOne({
        where: {
          id_student: student.id,
          id_matter: matter.id,
        },
      });

      if (studentMatter) {
        return {
          error: "Student already assigned to this matter",
        };
      } else {
        return {
          id_student: student.id,
          id_matter: matter.id,
        };
      }
    }
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

const assignMatter = async (data) => {
  try {
    const newStudentsMatter = await StudentsMatters.create({
      id_student: data.id_student,
      id_matter: data.id_matter,
    });
    return newStudentsMatter;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const MatterService = {
  createMatter,
  assignMatter,
  findMatterAndStudent,
};
