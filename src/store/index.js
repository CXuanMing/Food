import Vue from "vue";
import Vuex, { Store } from "vuex";
Vue.use(Vuex)

export default new Store({
	state: {
		search: ''
	},
	mutations: {
		changeSearch(state, search) {
			// 将search存储在state中
			state.search = search;
		}
	}
})