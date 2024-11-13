import axios from "axios";
import { apiPrefix } from "./axios.config";
export const getSolutionListApi = (_id) => {
    return _id ? axios.get(`${apiPrefix}/solution/solutionList/${_id}`) : axios.get(`${apiPrefix}/solution/solutionList`)
}
export const getSolutionListByCategoryApi = (category) => {
    return axios.get(`${apiPrefix}/solution/solutionListByCategory/${category}`)
}
export const getProductTitleApi = () => axios.get(`${apiPrefix}/solution/solutionProductList`)
export const getCasesTitleApi = () => axios.get(`${apiPrefix}/solution/solutionCasesList`)