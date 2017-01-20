<template>
    <div>
        <e-head></e-head>
        <section class="geosearch-header ng-scope">
            <input type="search" placeholder="请输入商家或美食名称" class="geosearch-header-input ng-valid ng-dirty ng-valid-parse ng-touched" v-model="keyword">
            <button class="geosearch-header-button" @click="search">搜索</button>
        </section>
        <h4 ng-if="search.keyword &amp;&amp; search.restaurants.length" class="geosearch-title ng-scope">商家</h4>
        <ul class="geosearch-results ng-scope">
            <li class="geosearch-results-restaurantcontainer ng-scope">
                <img width="42" height="42" link="//fuss10.elemecdn.com/a/4c/47db6a9bc51efda1f945253de54f6jpeg.jpeg" style="opacity: 1; transition: opacity 0.5s;position: absolute;" alt="莞饮莞食茶餐厅" srcset="//fuss10.elemecdn.com/a/4c/47db6a9bc51efda1f945253de54f6jpeg.jpeg?imageMogr/thumbnail/42x42/format/webp/quality/75 1x, //fuss10.elemecdn.com/a/4c/47db6a9bc51efda1f945253de54f6jpeg.jpeg?imageMogr/thumbnail/84x84/format/webp/quality/75 2x">
                <div class="geosearch-restaurantcontainer-content">
                    <div>
                        <span class="ng-binding">莞饮莞食茶餐厅</span>
                        <span class="ng-scope">
                            <span class="icon-pay"></span>
                        </span>
                    </div>
                    <span class="ng-binding ng-scope">(344)</span>
                    <span class="ng-binding ng-scope">月售 3703 单</span>
                    <div>
                        <span class="ng-binding">0 元起送</span>
                        <span class="ng-binding"> / 599</span>
                    </div>
                    <div class="geosearch-restaurantcontainer-activity ng-scope">
                        <div class="ng-scope">
                            <span class="geosearch-icon ng-binding" v-bind:style="{background: '#f07373'}">减</span> <span class="ng-binding">满减优惠</span><span class="activity-offline"> (手机客户端专享)</span>
                        </div>
                        <div class="ng-scope">
                            <span class="geosearch-icon ng-binding" v-bind:style="{background: '#70bc46'}">首</span> <span class="ng-binding">新用户立减(不与其他活动共享)</span><span class="activity-offline"> (手机客户端专享)</span>
                        </div>
                        
                    </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import eHead from '../components/header/head.vue';
    import { Indicator } from 'mint-ui';
    export default{
        data(){
            return {
                keyword:'',
                shoplist:[]
            }
        },
        created(){
            this.$store.state.head.title = '搜索';
        },
        methods: {
            search:function () {
                Indicator.open();
                // 'http://192.168.1.137/MyApi/Public/demo/?service=Eleme.search&keyword='+this.keyword+'&search_type=restaurants'
                this.$http.jsonp('http://192.168.1.137/MyApi/Public/demo/?service=Eleme.getShops&offset=0&limit=10', ).then(function(res){
                    var data = JSON.parse(res.data.data);
                    for(var i=0;i<data.length;i++){
                        this.shoplist.push(data[i]);
                    }
                    Indicator.close();
                });

            }
        },
        components: {
            eHead
        },
    }
</script>
<style>
    @import '../static/reset.css';
    .geosearch-header {
        background: #fff;
        padding: 11px;
        display: flex;

    }
    .geosearch-header .geosearch-header-input {
        flex-grow: 1;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: #f2f2f2;
        outline: 0;
        padding-left: 4px;
        font-size: 1rem;
        font-family: PingFangSC-Regular, Helvetica Neue, Tahoma, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;
    }
    .geosearch-header .geosearch-header-button {
        border: none;
        border-radius: 4px;
        padding: 11px 24px;
        width: 80px;
        color: #fff;
        background: #3199e8;
        margin-left: 10px;
        outline: 0;
        font-size: 1rem;
        font-family: PingFangSC-Regular, Helvetica Neue, Tahoma, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;
    }
    .geosearch-title {
        font-weight: 400;
        margin-top: 15px;
        margin-bottom: 8px;
        padding-left: 15px;
        color: #666;
    }
    .geosearch-results {
        background: #fff;
    }
    .geosearch-results .geosearch-results-restaurantcontainer {
        font-size: 14px;
        padding: 15px;
    }
    .geosearch-results .geosearch-results-restaurantcontainer .geosearch-restaurantcontainer-content {
        flex: 1;
        margin-left: 8px;
    }
    .geosearch-results .geosearch-results-restaurantcontainer .geosearch-restaurantcontainer-content .geosearch-restaurantcontainer-activity {
        font-size: 13px;
        border-top: 1px solid #ddd;
        padding-top: 5px;
        margin-top: 5px;
    }
    .geosearch-results .geosearch-results-restaurantcontainer .geosearch-restaurantcontainer-content .geosearch-restaurantcontainer-activity .geosearch-icon {
        border-radius: 4px;
        color: #fff;
        padding-left: 2px;
        padding-right: 2px;
    }
    .activity-offline {
        color: #FF6000;
        line-height: 1.5em;
    }
     .img {
        border: 0;
        max-width: 100%;
        position: absolute;
    }
    ol, ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
