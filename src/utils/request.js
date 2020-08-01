import axios from 'axios'
import jsonBig from 'json-bigint'
const request = axios.create({
  baseURL: 'http://localhost:8080/' // 基础路径
})

// 请求拦截
request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 数据超出js安全整数范围处理
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch {
    return {}
  }
}]

export default request
