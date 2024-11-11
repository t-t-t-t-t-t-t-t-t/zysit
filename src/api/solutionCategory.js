import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getSolutionCategoryListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/solutionCategory/solutionCategoryList/${_id}`) : axios.get(`${apiPrefix}/solutionCategory/solutionCategoryList`)
}