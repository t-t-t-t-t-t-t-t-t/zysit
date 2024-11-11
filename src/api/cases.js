import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getCasesListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/cases/casesList/${_id}`) : axios.get(`${apiPrefix}/cases/casesList`)
}