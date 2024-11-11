import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getHonerListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/honer/honerList/${_id}`) : axios.get(`${apiPrefix}/honer/honerList`)
}