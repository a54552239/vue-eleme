<template>
    <div>
        <e-head></e-head>
        <div class="header-nav">
            <mt-navbar v-model="headNav" class="container">
                <mt-tab-item id="head-nav1" @click.native="goRouter(1)">分类 <i class="fa fa-caret-down"></i> </mt-tab-item>
                <mt-tab-item id="head-nav2" @click.native="goRouter(2)">排序 <i class="fa fa-caret-down"></i></mt-tab-item>
                <mt-tab-item id="head-nav3" @click.native="goRouter(3)">筛选 <i class="fa fa-caret-down"></i></mt-tab-item>
            </mt-navbar>
        </div>
        <s-list></s-list>
    </div>
</template>

<script type="es6">
    import eHead from '../components/header/head.vue';
    import fList from '../components/index/foodlist.vue';
    import sList from '../components/index/shoplist.vue';
    export default{
        data(){
            return {
            }
        },
        created(){

        },
        methods: {},
        components: {
            eHead,fList, sList
        },
    }
</script>
<style>
    @import '../static/reset.css';
</style>
