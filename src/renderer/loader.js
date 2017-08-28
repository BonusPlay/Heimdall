import Vue from 'vue';

if (!process.env.IS_WEB)
	Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

// Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

// 	Vue-Ripple-Directive\
/*
import Ripple from 'vue-ripple-directive';
Vue.directive('ripple', Ripple)
*/

// 	Setup Vue
import Loader from './Loader.vue';

new Vue({
	components: { Loader },
	template: '<loader/>'
}).$mount('#app');