import App from './App'
import {
	createSSRApp
} from 'vue'
import Vuex from "vuex";
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}