import { getSolutionCategoryListApi } from "../api/solutionCategory"
export function useSolutionCategoryHooks() {
    const getSolutionCategoryList = async (_id = "") => {
        try {
            const res = await getSolutionCategoryListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }


    return {
        getSolutionCategoryList,
    }
}