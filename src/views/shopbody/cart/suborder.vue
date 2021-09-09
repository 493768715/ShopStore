<template>
    <div class="subCart-box">
        <div class="Cartshop-box">
            <div class="Cartshop-tit">
                <div class="tit">商品信息</div>
                <div class="Allprice">总金额:<span class="money">{{allprice}}</span></div>
            </div>
            <div class="Cartshop-title">
                <ul>
                    <li class="shop-name">产品名称</li>
                    <li class="shop-color">颜色</li>
                    <li class="shop-size">尺码</li>
                    <li class="shop-price">价格</li>
                    <li class="shop-num">数量</li>
                    <li class="shop-total">小计</li>
                </ul>
                <div class="shop-info" v-for="data in shops" :key="data.shop.pid">
                    <div class="info-img">
                        <img :src="data.shop.pic" class="shop-img">
                    </div>
                    <div class="info-name">{{data.shop.pname}}</div>
                    <div class="info-color">{{data.shop.pcolor}}</div>
                    <div class="info-size">{{data.shop.psize}}</div>
                    <div class="info-price">{{data.shop.price}}</div>
                    <div class="info-num">{{data.num}}</div>
                    <div class="info-total">{{data.num*data.shop.price}}</div>  
                </div>
            </div>
        </div>
        <div class="Address-box">
            <div class="address">详细地址:
                <span>{{ainfo.province}}{{ainfo.address}}</span>
                </div>
            <div class="phone">联系方式:
                <span>{{ainfo.phone}}</span>
            </div>
            <div class="user">收货人:
                <span>{{ainfo.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.shops = this.$store.state.shops;
        this.ainfo = this.$store.state.addressInfo;
    },
    computed:{
        allprice:function(){
            var price = 0;
            for(var i=0;i<this.shops.length;i++){
                price += this.shops[i].num*this.shops[i].shop.price
            }
            this.$store.commit('setTotal',price);
            return price;
        }
    },
    data(){
        return{
            shops:[],
            ainfo:' ',
        }
    }
}
</script>
<style lang="scss" scoped>
    .subCart-box{
        height: 100%;
        width: 100%;
        .Cartshop-box{
            height: 100%;
            width: 100%;
            float: left;
            .Cartshop-tit{
                font-size: 24px;
                height: 40px;
                margin-bottom: 10px;
                .tit{
                    width: 80%;
                    float: left;
                }
                .Allprice{
                    float: right;
                    width: 20%; 
                    .money{
                     color:#b63330;
                    }
                }
               
            }
            .Cartshop-title{
                height: 50px;
                border: 1px solid #b7b7b7;
                ul{
                    height: 100%;
                    clear: both;
                    list-style: none;
                    display: block;
                    font-size: 18px;
                    color: #333;
                    .shop-name{
                        width: 200px;
                        padding-left: 80px;
                    }
                }
                li{
                    float: left;
                    height: 100%;
                    width: 160px;
                    text-align: center;
                    line-height: 50px;
                }
                .shop-info{
                    height: 80px;
                    width: 100%;
                    border-bottom: 1px dashed #b6b6b6;  
                    padding: 16px 0 4px;
                    div{
                        float: left;
                        font-size: 14px;
                        line-height: 80px;
                        width: 160px;
                        text-align: center;
                        font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
                    }
                    .info-img{
                        margin-left: 40px;
                        height: 80px;
                        width: 80px;
                        .shop-img{
                            height: 100%;
                            width: 100%;
                        }
                    }
                    
                }
            }
            
        }
        .Address-box{
            width: 100%;
            height: 120px;
            margin-top: 40px;
            float: left;
            div{
                float: left;
                height: 100%;
                font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
            }
            .address{
                width: 40%;
            }
            .phone{
                width: 30%;
            }
            .user{
                width: 30%;
            }
            span{
                margin-left: 10px;
            }
        }
    }
</style>