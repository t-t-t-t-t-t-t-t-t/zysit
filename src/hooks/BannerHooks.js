import { getBannerListApi } from "../api/banner"
export function useBannerHooks() {
    const getBannerList = (type = "") => {
        return getBannerListApi(type).then(res => {
            return res.data
        }).catch(err => {
            console.log(err)
        })
    }
    return {
        getBannerList,
    }
}