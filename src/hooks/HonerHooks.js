import { getHonerListApi } from "../api/honer"
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