<template>
    <div>
        <h3 class="index-title">
            <span><i class="fa fa-shopping-cart" style="font-size:1rem"></i> 附近商家</span>
        </h3>
        <section
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10"
                class="shoplist">
            <section class="item" v-for="(shop,index) in shoplist">
                <div class="left-wrap" @click.native="itemClicks(index)">
                    <img class="logo"
                         :src="showImgpath(shop.image_path)">
                </div>
                <div class="right-wrap">
                    <section class="line">
                        <h3 class="shopname">{{ shop.name }}</h3>
                        <div class="support-wrap">
                            <span class="supports-span" v-for="(support,supportIndex) in shop.supports">{{ support.icon_name }}</span>
                        </div>
                    </section>
                    <section class="line">
                        <div class="rate-wrap">
                            <span class="rate">{{ shop.rating }}</span>
                            <span>月售{{ shop.recent_order_num }}单</span>
                        </div>
                        <div class="shoplist-deliveryWrap">
                            <span class="shoplist-iconDelivery">准时达</span>
                            <span class="shoplist-iconDelivery shoplist-hollo" v-if="shop.delivery_mode">{{ shop.delivery_mode.text }}</span>
                        </div>
                    </section>
                    <section class="line">
                        <div class="moneylimit">
                            <span>¥{{ shop.float_minimum_order_amount }}起送</span>
                            <span>{{ shop.piecewise_agent_fee.tips }}</span>
                        </div>
                        <div class="timedistance-wrap">
                            <span class="distance-wrap">{{ shop.distance }}m</span>
                            <span class="time-wrap">{{ shop.order_lead_time }}分钟
                            </span>
                        </div>
                    </section>
                </div>
            </section>
        </section>
    </div>
</template>
<style>
    @import '../../static/shoplist.css';
    .mint-badge.is-size-small {
        border-radius: 3px !important;
        padding: 1px 4px !important;
        margin-left: 5px !important;
    }
</style>
<script type="es6">
    export default{
        data(){
            return{
                shoplist:'',
                offset:0,
                limit:10
            }
        },
        methods:{
            loadMore:function () {
                setTimeout(()=>{
                    this.offset = this.offset+this.limit;
                    this.$http.jsonp('http://192.168.1.137/PhalApi/Public/demo/?service=User.getShops&offset='+this.offset+'&limit='+this.limit, ).then(function(res){
                        var data = JSON.parse(res.data.data);
                        for(var i=0;i<data.length;i++){
                            this.shoplist.push(data[i]);
                        }
                    });
                },0)
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
        created:function () {
            
            this.$http.jsonp('http://192.168.1.137/PhalApi/Public/demo/?service=User.getShops&offset='+this.offset+'&limit='+this.limit, ).then(function(res){
                this.shoplist = JSON.parse(res.data.data);
            });
        },
        name:'s-list',
        computed:{

        }
    }


</script>
