import {
	userModule
} from '@/stores/release/user.js';
import {
	test_userModule
} from '@/stores/test/user.js';
export const userStore = () => {
	if (process.env.NODE_ENV=== 'development') {
		return test_userModule()
	} else {
		return userModule()
	}
}