import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(MintUI);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
