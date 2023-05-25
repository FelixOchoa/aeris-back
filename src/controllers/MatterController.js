import { MatterService } from "../services/MatterService.js";
import {
  ResponseBad,
  ResponseCreateMatter,
  ResponseError,
  ResponseAssignMatter,
} from "../utils/Responses.js";

export const createMatter = async (req, res) => {
  try {
    const matter = req.body;
    const matterCreate = await MatterService.createMatter(matter);

    if (matterCreate.error) {
      return ResponseBad(res, matterCreate.error);
    }

    return ResponseCreateMatter(res, matterCreate);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};

export const assignMatter = async (req, res) => {
  try {
    const data = req.body;
    const matter = await MatterService.findMatterAndStudent(data);

    if (matter.error) {
      return ResponseBad(res, matter.error);
    }

    const assign = await MatterService.assignMatter(matter);

    if (assign.error) {
      return ResponseBad(res, assign.error);
    }

    return ResponseAssignMatter(res, assign);
  } catch (error) {
    return ResponseError(res, error.message);
  }
};
