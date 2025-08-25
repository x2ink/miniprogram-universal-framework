import {
	defineStore
} from 'pinia'
import env from "@/utils/env.js"
const name=`${env}_user`
export const user = defineStore(name, {
	unistorage: true, // 是否持久化
	state: () => {
		return {
			token: '',
			userInfo: {
				Id: '',
				CreatedAt: ''
			}
		}
	},
	getters: {
		loginStatus: (state) => state.token.length > 0,
	},
	actions: {
		setToken(token) {
			this.token = token
		},
		setUserInfo(info) {
			this.userInfo = info
		},
		clearTokenInfo() {
			this.token === ''
			uni.removeStorageSync(name)
		}
	}
})