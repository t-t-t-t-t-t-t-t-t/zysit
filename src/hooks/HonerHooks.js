import { getHonerListApi } from "../api/honer"
import { ElMessage } from "element-plus";
export function useHonerHooks() {
    const getHonerList = async (_id = "") => {
        try {
            const res = await getHonerListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
    return {
        getHonerList,
    }
}