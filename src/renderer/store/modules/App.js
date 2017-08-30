import * as types from '../mutation-types';

const state = {
	appList: [],
	selected: null
};

// getters
const getters = {
	selected: state => state.selected,
	appList: state => state.appList
};

// actions
const actions = {
	getApps ({ commit }) {
		fetch('https://api.bonusplay.pl/apps')
		.then(function(resp) {
			if (resp.status !== 200)
				throw new Error('Api status is not 200');

			resp.json()
			.then(function(data) {
				commit(types.UPDATE_LIST, data);
				commit(types.SET_APP, data[0]);
			})
			.catch(function(err2) {
				console.log(err2);
			});
		})
		.catch(function(err) {
			console.err(err);
		});
	},
	setApp ({commit}, app) {
		commit(types.SET_APP, app);
	}
};

// mutations
const mutations = {
	[types.SET_APP] (state, app) {
		state.selected = app;
	},
	[types.UPDATE_LIST] (state, apps) {
		state.appList = apps;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}