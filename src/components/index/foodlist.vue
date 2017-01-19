<template>
    <div class="foodlist">
        <mt-swipe :auto="0">
            <mt-swipe-item>
                <div class="slide">
                    <a v-for="(entry,index) in indexEntry" v-if="index<=7" @click="res_category(index)">
                        <div class="container">
                            <img v-bind:src="getImgUrl(entry.image_url)">
                        </div>
                        <span class="title">{{ entry.title }}</span>
                    </a>
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="slide">
                    <a v-for="(entry,index) in indexEntry" v-if="index>7" @click="itemClicks(index)">
                        <div class="container">
                            <img v-bind:src="getImgUrl(entry.image_url)">
                        </div>
                        <span class="title">{{ entry.title }}</span>
                    </a>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<style>

.foodlist .mint-swipe {
   overflow: hidden;
    height: 11.72rem;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    text-align: center;
    padding-top:10px;
}
.foodlist .mint-swipe .mint-swipe-item {
}
.foodlist .mint-swipe .slide {
    background-color: #0089dc;
}

.foodlist a {
    position: relative;
    float: left;
    margin-top: .293333rem;
    width: 25%;
}
.foodlist .container {
    position: relative;
    display: inline-block;
    width: 3.2rem;
    height: 3.2rem;
}
.foodlist .container img {
    width: 100%;
    height: 100%;
}
.foodlist .title {
    display: block;
    margin-top: .133333rem;
    color: #666;
    font-size: .7em;
}

</style>
<script type="es6">
    export default{
        data(){
            return {
                indexEntry: '',
                offset: 0,
                limit: 20
            }
        },
        created: function () {

            this.$http.jsonp('http://localhost/MyApi/Public/demo/?service=Eleme.getIndexEntry',).then(function (res) {
                this.indexEntry = JSON.parse(res.data.data);
            });
        },
        methods: {
            res_category: function (index) {
                let link = this.indexEntry[index].link;
                link = link.split('&');
                let filter_key = decodeURIComponent(link[0]);
                filter_key = filter_key.split('=');
                filter_key = eval('(' + filter_key[1] + ')');
                this.$store.state.restaurant_categor_id = filter_key.restaurant_category_id.id;
                this.$router.push({path: 'restaurant_category'});

            },
            getImgUrl: function (imgUrl) {
                return "https://fuss10.elemecdn.com" + imgUrl

            }
        },
        name: 'f-list',
        components: {}
    };

</script>
