<template>
    <div class="Sear">
        <span>“{{input}}”的搜索结果</span>
        <br/>
        <label>{{shops.length}}件产品</label>
        <el-divider content-position="center" class="divider">
            <div class="tit">产品</div>
        </el-divider>
        <div class="shops">
                <div class="showshop">
                    <div class="shop-info" v-for="shop in shops" :key="shop.pid" @click="clickshop(shop)">
                        <div class="shop-img">
                            <img :src="shop.pic" alt="">
                        </div>
                        <div class="shop-name">{{shop.pname}}</div>
                        <div class="shop-price">${{shop.price}}</div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        this.input = this.$route.params.input;
        axios.get('/Finaltest1/ProductServlet?method=selbyname&name='+this.input).then(res=>{
            this.shops = res.data;
        })
    },
    data(){
        return{
            input:'',
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
        }
    }
}
</script>
<style lang="scss" scoped>
    .Sear{
        width: 1000px;
        height: 100%;
        margin: 0px auto;
        padding: 40px 0 0 0; 
        text-align: center;
        font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
        span{
            font-size: 30px;
            
        }
        label{
            font-size: 30px;
            margin: 7px 0 60px 0;
            height: 100%;
        }
        .tit{
        font-size: 30px;
        font-weight: normal;
        }
         .divider{
           background-color: #b7b7b7;
           top: 50px;
           margin-bottom: 40px;
        }
        .shops{
            float: left;
            width: 1000px;
            .showshop{
                width:100%;
                height: 100%;
                margin-top: 50px;
                .shop-info:hover{
                     border: 1px solid #b7b7b7;
                }
                .shop-info{
                    height: 300px;
                    width: 323px;
                    box-sizing: border-box;
                    float: left;
                    text-align: center;
                    margin: 10px 5px;
                    .shop-img{
                        padding-top: 10px;
                        height: 165px;
                        text-align: center;
                        margin-bottom: 8px;
                        img{
                            height: 165px;
                            width: 165px;
                        }
                    }
                     .shop-name{
                        height: 60px;
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

            }
        }
    }
</style>