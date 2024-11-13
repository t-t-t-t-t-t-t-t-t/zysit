import { getCasesListApi, getCasesListByCategoryApi } from "../api/cases"
export function useCasesHooks() {
    const getCasesList = async (_id = "") => {
        try {
            const res = await getCasesListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const getCasesListByCategory = async (category) => {
        try {
            const res = await getCasesListByCategoryApi(category);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    return {
        getCasesList,
        getCasesListByCategory
    }
}