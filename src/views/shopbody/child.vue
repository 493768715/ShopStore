<template>
    <div class="shop-boy">
        <div class="tit">
            <el-divider content-position="center" class="divider">
            <div class="shop-tit">儿童/{{shops.length}}件商品</div>
            </el-divider>
        </div>
        <div class="shopList">
            <div class="shop-category">
                <div class="shop-type">
                    <div class="category-tit">产品分类</div>
                    <ul>
                        <li><a href="javascript:void(0)" @click="settype('篮球')">篮球</a></li>
                        <li><a href="javascript:void(0)" @click="settype('跑步')">跑步</a></li>
                    </ul>
                </div>
            </div>
            <div class="type">类别:
                <span>{{shoptype}}</span>
            </div>
            <div class="shops">
                <div class="showshop">
                    <div class="shop-info" v-for="item in shops" :key="item.pid" @click="clickshop(item)">
                        <div class="shop-img">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="shop-name">{{item.pname}}</div>
                        <div class="shop-price">${{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        axios.get("/Finaltest1/ProductServlet?method=seltype&type="+this.type+"&tname=type2").then(res=>{
            this.shops = res.data;
        })
    },
    data(){
        return{
            type:'儿童',
            num:0,
            shoptype:'',
            shops:[]
        }
    },
    methods:{
        clickshop(shop){
            this.$router.push({
                path:'/shop',
                name:'Shop',
                params:{
                    shop:shop
                }
            })
        },
        settype(data){
            var that = this;
            that.shoptype = data
            that.shops = [];
            axios.get("/Finaltest1/ProductServlet?method=selbyptype&ptype="+that.shoptype+"&ptype2=儿童").then(res=>{
                that.shops = res.data;
            });
        },
    }
}
</script>
<style lang="scss" scoped>
    .shop-boy{
        height: 100%;
        width: 1000px;
        margin: 0px auto;
        .tit{
            height: 40px;
            width: 100%;
            padding-top: 20px;
            .divider{
                color:#b7b7b7;
                height: 2px;
                .shop-tit{
                font-size: 30px;
                font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
                }
            }
        }
        .type{
            float: left;
            width: 750px;
            margin-top: 50px;
            font-size: 14px;
            span{
                padding-left: 10px;
            }
        }
        .shop-category{
            float: left;
            width: 250px;
            height: 100%;
            margin-top: 50px;
            .shop-type{
                border: 1px solid #b7b7b7;
                box-sizing: border-box;
                padding: 25px 35px;
                text-align: center;
                width: 88%;
                .category-tit{
                font-size: 18px;
                border-bottom: 1px solid #b7b7b7;
                height: 48px;
                line-height: 48px;
                width: 100%;
                }
                li{
                    list-style: none;
                    margin-top: 15px;
                }
            }
        }
        .shops{
            float: left;
            width: 750px;
             .showshop{
        width: 100%;
        height: 100%;
        .shop-info{
           height: 270px;
           width: 240px;
           box-sizing: border-box;
           float: left;
           text-align: center;
           margin: 10px 5px;
           .shop-img{
             height: 160px;
             img{
                 width: 160px;
                 height: 160px;
             }
           }
           .shop-name{
             height: 50px;
             font-size: 18px;
           }
           .shop-price{
              font-weight: bold;
              line-height: 24px;
              color: #b63330;
              font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
              font-size: 14px;
           }
        }
        .shop-info:hover{
          border: 1px solid #333;
        }
      }
        }
        
    }
</style>