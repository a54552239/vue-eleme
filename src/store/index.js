import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
    state: {
        restaurant_categor_id:0,
        head: {
            toggle: false,
            title: '666',
            style: {'background': 'rgba(43,162,251,0)'}
        },
        isLogin:false,
        name:'vilson'
    },
    getters: {
        restaurant_categor_id:state=>restaurant_categor_id,
        head: state=>state.head,
        isLogin:state=>isLogin
    },
    mutations: {},
    actions: {}
});

export default store
