import { getProductCategoryListApi } from "../api/productCategory"
export function useProductCategoryHooks() {
    const getProductCategoryList = async (_id = "") => {
        try {
            const res = await getProductCategoryListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    return {
        getProductCategoryList,
    }
}