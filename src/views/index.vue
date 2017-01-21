<template>
    <div>
        <f-list></f-list>
        <s-list></s-list>
    </div>
</template>

<script type="es6">
    import fList from '../components/index/foodlist';
    import sList from '../components/index/shoplist';
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
