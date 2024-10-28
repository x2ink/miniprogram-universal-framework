import http from '@/utils/request.js'
export default {
	getChartList() {
		return http.get('note/info')
	}
}