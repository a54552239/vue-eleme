<template>
    <div>
        <e-head></e-head>
        <section class="geosearch-header">
            <input type="search" placeholder="请输入商家或美食名称"
                   class="geosearch-header-input ng-valid ng-dirty ng-valid-parse ng-touched" v-model="keyword">
            <button class="geosearch-header-button" @click="search">搜索</button>
        </section>
        <h4 v-if="shoplist.length>0" class="geosearch-title">商家</h4>
        <ul class="geosearch-results">
            <li class="geosearch-results-restaurantcontainer" v-for="(shop,index) in shoplist">
                <img width="42" height="42" link="//fuss10.elemecdn.com/a/4c/47db6a9bc51efda1f945253de54f6jpeg.jpeg"
                     style="opacity: 1; transition: opacity 0.5s;position: absolute;" :alt="shop.name"
                     :srcset="showImgpath(shop.image_path)">
                <div class="geosearch-restaurantcontainer-content">
                    <div>
                        <span class="ng-binding"> {{ shop.name }}</span>
                        <span class="ng-scope">
                            <span class="icon-pay"></span>
                        </span>
                    </div>
                    <span class="ng-binding">(344)</span>
                    <span class="ng-binding">月售 {{ shop.recent_order_num }} 单</span>
                    <div>
                        <span class="ng-binding">{{ shop.float_minimum_order_amount }} 元起送</span>
                        <span class="ng-binding"> / {{ shop.distance }}</span>
                    </div>
                    <div class="geosearch-restaurantcontainer-activity">
                        <div class="ng-scope">
                            <span class="geosearch-icon ng-binding" v-bind:style="{background: '#f07373'}">减</span>
                            <span class="ng-binding">满减优惠</span><span class="activity-offline"> (手机客户端专享)</span>
                        </div>
                        <div class="ng-scope">
                            <span class="geosearch-icon ng-binding" v-bind:style="{background: '#70bc46'}">首</span>
                            <span class="ng-binding">新用户立减(不与其他活动共享)</span><span
                                class="activity-offline"> (手机客户端专享)</span>
                        </div>

                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>

<script type="es6">
    import eHead from '../components/header/head.vue';
    import {Indicator} from 'mint-ui';
    export default{
        data(){
            return {
                keyword: '',
                shoplist: []
            }
        },
        created(){
            this.$store.state.head.title = '搜索';
        },
        methods: {
            search: function () {
                if(this.keyword==''){
                    return false;
                }
                Indicator.open();
                // 'http://vilson.online/Public/demo/?service=Eleme.search&keyword='+this.keyword+'&search_type=restaurants'
                this.$http.jsonp('http://vilson.online/Public/demo/?service=Eleme.getShops&offset=0&limit=10',).then(function (res) {
                    var data = JSON.parse(res.data.data);
                    for (var i = 0; i < data.length; i++) {
                        this.shoplist.push(data[i]);
                    }
                    Indicator.close();
                });

            },
            showImgpath:function (imgpath) {
                if(imgpath.indexOf('jpeg')!=-1){
                    var imgpath = "http://fuss10.elemecdn.com/"+imgpath+".jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/";
                }else{
                    var imgpath = "http://fuss10.elemecdn.com/"+imgpath+".png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/";
                }
                return imgpath;

            }
        },
        watch: {
            keyword: function (keyword) {
               if(keyword==''){
                   this.shoplist = [];
               }
            }
        },
        components: {
            eHead
        },
    }
</script>
<style>
    @import '../static/search.css';


</style>
