import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getFriendListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/friend/friendList/${_id}`) : axios.get(`${apiPrefix}/friend/friendList`)
}