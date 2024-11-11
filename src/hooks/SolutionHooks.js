import { addSolutionApi, putSolutionApi, deleteSolutionApi, getSolutionListApi, getProductTitleApi, getCasesTitleApi } from "../api/solution"
import { ElMessage } from "element-plus";
export function useSolutionHooks() {
    const getSolutionList = async (_id = "") => {
        try {
            const res = await getSolutionListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const getProductTitle = async () => {
        try {
            const res = await getProductTitleApi();
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const getCasesTitle = async () => {
        try {
            const res = await getCasesTitleApi();
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    return {
        getSolutionList,
        getProductTitle,
        getCasesTitle
    }
}