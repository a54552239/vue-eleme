<template>
    <div>
        <s-list></s-list>
    </div>
</template>

<script type="es6">
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
            fList, sList
        },
    }
</script>
<style>
    @import '../static/reset.css';
</style>
