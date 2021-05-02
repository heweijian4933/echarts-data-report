/**
 * 环境配置封装
 */

const env = process.env.NODE_ENV || 'production';
const EnvConfig = {
    dev: {
        baseApi: '/api', //开发环境 baseApi
        mockApi: 'http://yapi.smart-xwork.cn/mock/XXXX/api'
    },
    prod: {
        baseApi: '/',//生产环境 baseApi
        mockApi: 'https://www.fastmock.site/mock/XXXXX/api'
    },
    test: {
        baseApi: '/',//测试环境 baseApi
        mockApi: 'https://www.fastmock.site/mock/XXXXX/api'
    },
}

export default {
    env,
    mock: false, //[提示],全局 mock 设置, 优先级低于 @/api/index.js 请求配置内的参数
    nameSpace: "_echarts_name_space",
    ...EnvConfig[env]
}