import { addProductApi, putProductApi, deleteProductApi, getProductListApi, getProductSolutionListApi } from "../api/product"
import { ElMessage } from "element-plus";
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
    return {
        getProductList,
        getProductSolutionList
    }
}