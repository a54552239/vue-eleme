<template>
    <div class="foodlist">
        <mt-swipe :auto="0">
            <mt-swipe-item>
                <div class="slide">
                    <a v-for="(food,index) in foods" v-if="index<=7" @click="itemClicks(index)">
                        <div class="container">
                            <img v-bind:src="food.src">
                        </div>
                        <span class="title">{{ food.title }}</span>
                    </a>
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="slide">
                    <a href="javascript:" v-for="(food,index) in foods" v-if="index>7">
                        <div class="container">
                            <img v-bind:src="food.src">
                        </div>
                        <span class="title">{{ food.title }}</span>
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
                foods: [
                    {
                        'src': '//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/',
                        'title': '美食'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/',
                        'title': '甜品饮品'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/6/72/6cb628b6c1527316c47c018a00762jpeg.jpeg?imageMogr/format/webp/',
                        'title': '商店超市'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/4/b3/331cb9a50dd57a7a0bc4313cfdce3jpeg.jpeg?imageMogr/format/webp/',
                        'title': '果蔬生鲜'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg?imageMogr/format/webp/',
                        'title': '新店特惠'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg?imageMogr/format/webp/',
                        'title': '准时达'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/0/3d/7125a96aab7d583151fbc376480b5jpeg.jpeg?imageMogr/format/webp/',
                        'title': '高铁订餐'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg?imageMogr/format/webp/',
                        'title': '土豪推荐'
                    },
                    {
                        'src': '//fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg?imageMogr/format/webp/',
                        'title': '鲜花蛋糕'
                    }
                    ,
                    {
                        'src': '//fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/',
                        'title': '汉堡炸鸡'
                    }
                    ,
                    {
                        'src': '//fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg?imageMogr/format/webp/',
                        'title': '日韩料理'
                    }
                    ,
                    {
                        'src': '//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/',
                        'title': '麻辣烫'
                    }
                    ,
                    {
                        'src': '//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/',
                        'title': '披萨意面'
                    }
                    ,
                    {
                        'src': '//fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg?imageMogr/format/webp/',
                        'title': '川湘菜'
                    }
                    ,
                    {
                        'src': '//fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg?imageMogr/format/webp/',
                        'title': '包子粥店'
                    }
                ]
            }
        },
        methods: {
            itemClicks: function (index) {
                // alert(index);
            }
        },
        name: 'f-list',
        components: {}
    };

</script>
