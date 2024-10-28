var baseUrl;
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
	baseUrl = "http://127.0.0.1:8002/"
} else {
	console.log('生产环境');
	baseUrl = "http://127.0.0.1/"
}
const http = {
	baseUrl: baseUrl,
	request(config) {
		config = beforeRequest(config)
		config.url = this.baseUrl + config.url
		return new Promise((resolve, reject) => {
			uni.request(config).then(res => {
				const response = beforeResponse(res)
				resolve(response)
			}).catch(err => {
				errorHandle()
				reject(err)
			})
		})
	},
	get(url, params) {
		return this.request({
			url: url,
			params: params,
			method: 'GET'
		})
	},
	post(url, data) {
		return this.request({
			url: url,
			data: data,
			method: 'POST'
		})
	},
	put(url, data) {
		return this.request({
			url: url,
			data: data,
			method: 'PUT'
		})
	},
	delete(url) {
		return this.request({
			url: url,
			method: 'DELETE'
		})
	}
}
// 请求拦截器
const beforeRequest = (config) => {
	// config.header = {}
	return config
}
//响应拦截器
const beforeResponse = (response) => {
	return response.data
}
//异常处理
const errorHandle = (err) => {
	console.log('网络异常,', err);
}
export default http