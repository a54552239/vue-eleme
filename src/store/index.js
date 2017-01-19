import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
    state: {
        head: {
            toggle: false,
            title: '666',
            style: {'background': 'rgba(43,162,251,0)'}
        },
        isLogin:false,
        name:'vilson'
    },
    getters: {
        head: state=>state.head,
        isLogin:state=>isLogin
    },
    mutations: {},
    actions: {}
});

export default store
