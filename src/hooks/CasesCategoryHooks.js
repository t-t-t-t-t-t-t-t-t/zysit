import { getCasesCategoryListApi } from "../api/casesCategory"
export function useCasesCategoryHooks() {
    const getCasesCategoryList = async (_id = "") => {
        try {
            const res = await getCasesCategoryListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    return {
        getCasesCategoryList,
    }
}