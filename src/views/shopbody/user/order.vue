<template>
    <div class="order-box">
        <div class="order-tit">订单</div>
        <div v-if="!isTrue">
           <p> 亲，您还没有购买商品，感觉行动起来吧！！！</p>
           <router-link to="/shopbody/shouye" tag="button" class="goshopping">去首页</router-link>
        </div>
        <div class="order-shop-box" v-else>
            <div class="order-shop">
                <div class="order-id">订单id</div>
                <div class="order-time">提交时间</div>
                <div class="order-total">总金额</div>
                <div class="order-pay">支付状态</div>
            </div>
            <div class="order-shop" v-for="data in order" :key="data.oid">
                <div class="order-id info">{{data.oid}}</div>
                <div class="order-time info">{{data.paytime}}</div>
                <div class="order-total info">${{data.total}}</div>
                <div class="order-pay info">{{data.ispay}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        axios.get('/Finaltest1/OrderServlet?method=selorderbyid&uid='+this.$store.state.loginUser.uid).then(res=>{
            this.order = res.data;
        })
    },
    data(){
        return{
            isTrue:true,
            order:[]
        }
    }
}
</script>
<style lang="scss" scoped>
    .order-box{
        width: 100%;
        height: 100%;
        .goshopping{
            width: 200px;
            background-color: #000;
            color: #FFF;
            line-height: 50px;
            height: 50px;
            text-align: center;
            display: block;
            font-size: 18px;
            cursor: pointer;
        }
        .order-tit{
            height: 71px;
            line-height: 70px;
            font-size: 30px;
            text-align: left;
            border-bottom: 1px solid #b7b7b7;
            width: 100%;
            font-weight: bold;
            font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
            position: relative;
        }
        p{
            line-height: 20px;
            margin: 20px 0;
            font-size: 12px;
        }
        .order-shop-box{
            height: 100%;
            width: 100%;
            margin-top: 20px;
            .order-shop{
                border-bottom: 1px solid #b7b7b7;
                float: left;
                height: 100%;
                width: 100%;
                div{
                    float: left;
                    text-align: center;
                    padding-bottom: 5px;
                }
                .info{
                    font-size: 14px;
                    color: #333;
                    padding: 5px 0;
                }
                .order-id{
                    width: 20%;
                }
                .order-time{
                    width: 40%;
                }
                .order-total{
                    width: 20%;
                }
                .order-pay{
                    width: 20%;
                }
            }
        }
    }
</style>