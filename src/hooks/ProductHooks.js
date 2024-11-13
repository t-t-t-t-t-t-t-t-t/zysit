import { getProductListApi, getProductSolutionListApi, getProductListByCategoryApi } from "../api/product"
export function useProductHooks() {
    const getProductList = async (_id = "") => {
        try {
            const res = await getProductListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    const getProductSolutionList = async () => {
        try {
            const res = await getProductSolutionListApi();
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    const getProductListByCategory = async (category) => {
        try {
            const res = await getProductListByCategoryApi(category);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    return {
        getProductList,
        getProductSolutionList,
        getProductListByCategory
    }
}