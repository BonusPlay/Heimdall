import Vue from 'vue';
import LandingPage from '@/components/LandingPage';

describe('LandingPage.vue', () => {
	it('should render correct contents', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: h => h(LandingPage)
		}).$mount();

		assert.include(vm.$el.querySelector('.title').textContent, 'Welcome to your new project!');
	})
});