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

// vue-awesome
import Icon from 'vue-awesome/components/Icon.vue';
Vue.component('icon', Icon);

// 	Setup Vue
import App from './App.vue';

new Vue({
	components: { App },
	template: '<App/>'
}).$mount('#app');