import Vue from 'vue';

Vue.config.productionTip = false;

// Vue-Electron
if (!process.env.IS_WEB)
	Vue.use(require('vue-electron'));

// 	BootstrapVue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// Vue-Awesome
import Icon from 'vue-awesome/components/Icon.vue';
Vue.component('icon', Icon);

// 	Setup Vue
import Store from './store';
import App from './App.vue';

console.log(Store);

new Vue({
	Store,
	components: { App },
	template: '<App/>'
}).$mount('#app');