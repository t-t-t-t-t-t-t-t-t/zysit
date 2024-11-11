import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getNewsListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/news/newsList/${_id}`) : axios.get(`${apiPrefix}/news/newsList`)
}