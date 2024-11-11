import { getFriendListApi } from "../api/friend"
export function useFriendHooks() {
    const getFriendList = async (_id = "") => {
        try {
            const res = await getFriendListApi(_id);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    return {
        getFriendList,
    }
}