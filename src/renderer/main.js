import Vue from 'vue';

if (!process.env.IS_WEB)
	Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

// 	BootstrapVue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

// 	Vue-Ripple-Directive\
/*
import Ripple from 'vue-ripple-directive';
Vue.directive('ripple', Ripple)
*/

// 	Setup Vue
import App from './App';

new Vue({
	components: { App },
	template: '<App/>'
}).$mount('#app');