import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getProductListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/product/productList/${_id}`) : axios.get(`${apiPrefix}/product/productList`)
}
export const getProductSolutionListApi = () => axios.get(`${apiPrefix}/product/productSolutionList`)