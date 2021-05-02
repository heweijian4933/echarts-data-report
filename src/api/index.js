import request from './request.js'
export default {
    //api 接口示例
    getMenuList(params) {
        return request({
            url: "menus/treeList",
            method: "get",
            data: params,
            // mock: true,
        })
    },
}