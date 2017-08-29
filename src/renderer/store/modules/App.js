import * as types from '../mutation-types';

const state = {
	appList: [],
	app: null
};

// getters
const getters = {
	app: state => state.app
};

// actions
const actions = {
	getApps ({ commit }) {
		return new Promise((resolve, reject) => {
			fetch('https://api.bonusplay.pl/apps')
			.then(function(resp) {
				if (resp.status !== 200)
					throw new Error('Api status is not 200');

				resp.json()
				.then(function(data) {
					commit(types.UPDATE_LIST, data);
					resolve();
				})
				.catch(function(err2) {
					throw new Error('Error parsing response');
				});
			})
			.catch(function(err) {
				console.err(err);
				reject();
			});
		});
	}
};

// mutations
const mutations = {
	[types.SET_APP] (state, id) {
		state.app = id;
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