import { getNewsListApi } from "../api/news"
export function useNewsHooks() {
    const getNewsList = async (_id = "") => {
        try {
            const res = await getNewsListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    return {
        getNewsList,
    }
}