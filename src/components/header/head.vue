<template>
    <mt-header fixed v-bind:title="head.title">
        <router-link to="/index" slot="left">
            <mt-button icon="back"  @click="setHead"></mt-button>
        </router-link>
    </mt-header>
</template>
<style>
</style>



<script type="es6">
    import { mapGetters } from 'vuex';
    export default{
        data () {
            return {
                store:this.$store.state
            }
        },
        methods:{
            setHead(){
                this.$store.state.head.toggle = false;
            }

        },
        computed: {
            ...mapGetters([
                'isLogin',
                'head'
            ])
        },
        name:'e-head',
    }
</script>
