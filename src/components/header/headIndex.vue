<template>
    <mt-header fixed title="东城中路辉煌商务大厦" v-if="head.toggle==false">
        <router-link to="/search" slot="left">
            <mt-button icon="search"></mt-button>
        </router-link>
        <mt-button slot="right" v-if="!store.isLogin">登录</mt-button>
        <mt-button slot="right" v-else>{{ store.name }}</mt-button>
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
        computed: {
            ...mapGetters([
                'isLogin',
                'head'
            ])
        },
        name:'e-head-index',
    }
</script>
