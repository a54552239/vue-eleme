<template>
    <div>
        <e-head></e-head>
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
