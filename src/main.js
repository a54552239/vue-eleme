// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    render: h => h(App),
    components: {App}
});
