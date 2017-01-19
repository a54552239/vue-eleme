<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="app">
        <e-head></e-head>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <f-list></f-list>
        <s-list></s-list>
    </div>
</template>
<style>
    @import 'static/reset.css';
</style>

<script>
import eHead from './components/header/head.vue';
import fList from './components/index/foodlist.vue';
import sList from './components/index/shoplist.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    startHacking (text) {
      this.$http.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=23.02744&longitude=113.77391&offset=0&limit=10', ).then();
      this.$toast(text);
      this.$store.state.isLogin = true;
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'head'
    ])
  },
   components: {
    eHead,fList,sList
   }
}

</script>

<style>

a {
    outline: none;
    color: #333;
    text-decoration: none;
}

#app {
  font-family: PingFangSC-Regular,Helvetica Neue,Tahoma,Arial,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
