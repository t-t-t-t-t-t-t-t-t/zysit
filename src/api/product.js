import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getProductListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/product/productList/${_id}`) : axios.get(`${apiPrefix}/product/productList`)
}
export const getProductListByCategoryApi = (category) => axios.get(`${apiPrefix}/product/productListByCategory/${category}`)
export const getProductSolutionListApi = () => axios.get(`${apiPrefix}/product/productSolutionList`)
