import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const router = new VueRouter({
	routes:[
        {
            path:'/index',component:require('../views/index.vue')
        },{
            path:'/restaurant_category',component:require('../views/restaurant_category.vue')
        }, {
            path:'/search',component:require('../views/search.vue')
        },{
            path:'*',redirect:'/index'
        }
	]
});


export default router;
