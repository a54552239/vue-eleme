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
                    <a v-for="(entry,index) in indexEntry" v-if="index>7" @click="res_category(index)">
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
                indexEntry: [{"id":15,"is_in_serving":true,"description":"","title":"美食","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu7f8e%5Cu98df%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C260%5D%2C%22is_show_all_category%22%3Afalse%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%BE%8E%E9%A3%9F&animation_type=1&is_need_mark=0&banner_type=","image_url":"/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg","icon_url":"","title_color":""},{"id":20,"is_in_serving":true,"description":"","title":"甜品饮品","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=","image_url":"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg","icon_url":"","title_color":""},{"id":10,"is_in_serving":true,"description":"","title":"商店超市","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5546%5Cu5e97%5Cu8d85%5Cu5e02%22%2C%22complex_category_ids%22%3A%5B254%2C255%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A252%2C%22name%22%3A%22%5Cu5546%5Cu5e97%5Cu8d85%5Cu5e02%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%95%86%E5%BA%97%E8%B6%85%E5%B8%82&animation_type=1&is_need_mark=0&banner_type=","image_url":"/6/72/6cb628b6c1527316c47c018a00762jpeg.jpeg","icon_url":"","title_color":""},{"id":8,"is_in_serving":true,"description":"","title":"果蔬生鲜","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu679c%5Cu852c%5Cu751f%5Cu9c9c%22%2C%22complex_category_ids%22%3A%5B245%2C246%2C247%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A244%2C%22name%22%3A%22%5Cu679c%5Cu852c%5Cu751f%5Cu9c9c%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%9E%9C%E8%94%AC%E7%94%9F%E9%B2%9C&animation_type=1&is_need_mark=0&banner_type=","image_url":"/4/b3/331cb9a50dd57a7a0bc4313cfdce3jpeg.jpeg","icon_url":"","title_color":""},{"id":314,"is_in_serving":true,"description":"","title":"新店特惠","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu8d85%5Cu503c%5Cu5c1d%5Cu9c9c%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C218%2C234%2C235%2C236%2C237%2C239%2C244%2C245%2C248%2C249%2C250%2C252%2C260%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22support_ids%22%3A%5B5%5D%2C%22activities%22%3A%5B%7B%22id%22%3A5%2C%22name%22%3A%22%5Cu65b0%5Cu5e97%22%2C%22icon_name%22%3A%22%5Cu65b0%22%2C%22icon_color%22%3A%22E8842D%22%2C%22is_need_filling%22%3A0%2C%22is_multi_choice%22%3A1%2C%22filter_value%22%3A5%2C%22filter_key%22%3A%22support_ids%22%2C%22description%22%3A%22%5Cu65b0%5Cu5e97%22%7D%5D%7D&target_name=%E6%96%B0%E5%BA%97%E7%89%B9%E6%83%A0&animation_type=1&is_need_mark=0&banner_type=","image_url":"/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg","icon_url":"","title_color":""},{"id":92,"is_in_serving":true,"description":"","title":"准时达","link":"eleme://restaurants?filter_key=%7B%22support_ids%22%3A%5B9%5D%2C%22activities%22%3A%5B%7B%22id%22%3A9%2C%22name%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%2C%22icon_name%22%3A%22%5Cu51c6%22%2C%22icon_color%22%3A%22E8842D%22%2C%22is_need_filling%22%3A0%2C%22is_multi_choice%22%3A1%2C%22filter_value%22%3A9%2C%22filter_key%22%3A%22support_ids%22%2C%22description%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%7D%5D%7D&target_name=%E5%87%86%E6%97%B6%E8%BE%BE&animation_type=1&is_need_mark=0&banner_type=","image_url":"/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg","icon_url":"","title_color":""},{"id":400723,"is_in_serving":true,"description":"","title":"高铁订餐","link":"eleme://web?url=https%3A%2F%2Fh5.ele.me%2Frailway%2F%23%2F&target_name=%E9%AB%98%E9%93%81%E8%AE%A2%E9%A4%90&animation_type=1&is_need_mark=&banner_type=","image_url":"/0/3d/7125a96aab7d583151fbc376480b5jpeg.jpeg","icon_url":"","title_color":""},{"id":65,"is_in_serving":true,"description":"","title":"土豪推荐","link":"eleme://restaurants?filter_key=%7B%22activities%22%3A%5B%7B%22filter_key%22%3A%22tags%22%2C%22filter_value%22%3A0%7D%5D%7D&target_name=%E5%9C%9F%E8%B1%AA%E6%8E%A8%E8%8D%90&animation_type=1&is_need_mark=0&banner_type=","image_url":"/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg","icon_url":"","title_color":""},{"id":9,"is_in_serving":true,"description":"","title":"鲜花蛋糕","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu9c9c%5Cu82b1%5Cu86cb%5Cu7cd5%22%2C%22complex_category_ids%22%3A%5B249%2C250%2C251%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A248%2C%22name%22%3A%22%5Cu9c9c%5Cu82b1%5Cu86cb%5Cu7cd5%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95&animation_type=1&is_need_mark=0&banner_type=","image_url":"/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg","icon_url":"","title_color":""},{"id":236,"is_in_serving":true,"description":"","title":"汉堡炸鸡","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu6c49%5Cu5821%22%2C%22complex_category_ids%22%3A%5B212%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%B1%89%E5%A0%A1&animation_type=1&is_need_mark=0&banner_type=","image_url":"/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg","icon_url":"","title_color":""},{"id":285,"is_in_serving":true,"description":"","title":"日韩料理","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu65e5%5Cu97e9%5Cu6599%5Cu7406%22%2C%22complex_category_ids%22%3A%5B229%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A260%2C%22name%22%3A%22%5Cu5f02%5Cu56fd%5Cu6599%5Cu7406%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%97%A5%E9%9F%A9%E6%96%99%E7%90%86&animation_type=1&is_need_mark=0&banner_type=","image_url":"/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg","icon_url":"","title_color":""},{"id":286,"is_in_serving":true,"description":"","title":"麻辣烫","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu9ebb%5Cu8fa3%5Cu70eb%22%2C%22complex_category_ids%22%3A%5B214%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E9%BA%BB%E8%BE%A3%E7%83%AB&animation_type=1&is_need_mark=0&banner_type=","image_url":"/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg","icon_url":"","title_color":""},{"id":287,"is_in_serving":true,"description":"","title":"披萨意面","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu62ab%5Cu8428%5Cu610f%5Cu9762%22%2C%22complex_category_ids%22%3A%5B211%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A260%2C%22name%22%3A%22%5Cu5f02%5Cu56fd%5Cu6599%5Cu7406%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%8A%AB%E8%90%A8%E6%84%8F%E9%9D%A2&animation_type=1&is_need_mark=0&banner_type=","image_url":"/7/b6/235761e50d391445f021922b71789jpeg.jpeg","icon_url":"","title_color":""},{"id":288,"is_in_serving":true,"description":"","title":"川湘菜","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5ddd%5Cu6e58%5Cu83dc%22%2C%22complex_category_ids%22%3A%5B221%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A220%2C%22name%22%3A%22%5Cu7279%5Cu8272%5Cu83dc%5Cu7cfb%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%B7%9D%E6%B9%98%E8%8F%9C&animation_type=1&is_need_mark=0&banner_type=","image_url":"/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg","icon_url":"","title_color":""},{"id":289,"is_in_serving":true,"description":"","title":"包子粥店","link":"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu9762%5Cu7c89%5Cu7ca5%22%2C%22complex_category_ids%22%3A%5B215%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%8C%85%E5%AD%90%E7%B2%A5%E5%BA%97&animation_type=1&is_need_mark=0&banner_type=","image_url":"/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg","icon_url":"","title_color":""}],
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
                let category_id = 0;
                if(typeof(filter_key.restaurant_category_id)!='undefined'){
                    category_id = filter_key.restaurant_category_id.id;
                }
                this.$store.state.restaurant_categor_id = category_id;
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
