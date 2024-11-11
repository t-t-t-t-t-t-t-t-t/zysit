import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getProductCategoryListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/productCategory/productCategoryList/${_id}`) : axios.get(`${apiPrefix}/productCategory/productCategoryList`)
}
