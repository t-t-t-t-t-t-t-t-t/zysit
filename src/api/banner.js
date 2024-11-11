import axios from "axios";
import { apiPrefix } from "./axios.config";
// 得到Banner
export const getBannerListApi = (type = "") => {
    return type ? axios.get(`${apiPrefix}/banner/bannerList/${type}`) : axios.get(`${apiPrefix}/banner/bannerList`)
}
