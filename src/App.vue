<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="app">
        <e-head></e-head>
        <div class="index-top">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import eHead from './components/header/headIndex.vue';
export default {
  name: 'app',
   components: {
    eHead
   }
}
</script>
