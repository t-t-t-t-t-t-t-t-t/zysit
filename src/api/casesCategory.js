import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getCasesCategoryListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/casesCategory/casesCategoryList/${_id}`) : axios.get(`${apiPrefix}/casesCategory/casesCategoryList`)
}