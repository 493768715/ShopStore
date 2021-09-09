<template>
    <div class="content">
        <div class="shop-desc">{{shop.pdesc}}</div>

        <div class="shop-img">
            <img :src="shop.pic" alt="">
        </div>
        <div class="shop-info">
            <div class="shop-name">{{shop.pname}}</div>
            <div class="shop-color">
                颜色: <span>{{shop.pcolor}}</span>
            </div>
            <div class="shop-size">
                尺码:
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>
            </div>
            <div class="shop-num">
                数量:<el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
            <div class="shop-price">
                价格: <span>${{shop.price}}/双</span>
            </div>
            <div class="add-cart">
                 <el-button type="danger" @click="addcart()">加入购物车</el-button>
            </div>
        </div>
        <div class="more-info">
            <div class="info-tit">更多信息</div>
            <div class="info-tit2">温馨提示</div>
            <div class="info">因商品的新旧更新，本商品在同一个货号情形下，新旧款商品会呈现有两种不同的Logo及其他细微差异，新旧款商品仓库会随机安排发货，如您介意，请您在购买商品前完整查看页面显示新旧款商品图片，谨慎购买。感谢您的关注和理解，祝您购物愉快。</div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.shop = this.$route.params.shop;
    },
    data(){
        return{
            num:1,
            price:0,
            options: [35,36,37,38,39,40,41,42,43],
            value:'',
            shop:{},
        }
    },
    methods: {
      addcart(){
          this.shop.psize = this.value
          this.$store.commit('addshopToCart',{
              shop:this.shop,
              num:this.num
              });
      }
    }
}
</script>
<style lang="scss" scoped>
    .content{
        width: 1000px;
        height: 100%;
        margin: 0px auto;
        margin-top: 50px;
        .shop-desc{
            width: 300px;
            float: left;
            font-size: 17px;
            line-height: 1.75;
            color: #333;
            margin-right: 20px;
        }
        .shop-img{
            float: left;
            width: 300px;
            height: 300px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .shop-info{
            float: left;
            margin-left: 30px;
            font-size: 14px;
            font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
            .shop-name{
                height: 50px;
                font-size: 30px;
                margin-bottom: 20px;
            }
            .shop-color{
                height: 30px;
                span{

                    margin-left: 10px;
                }
            }
            .shop-size{
                height: 30px;
                .el-select{
                    width: 92px;
                    margin-left: 10px;
                }
            }
            .shop-num{
                height: 30px;
                margin-top: 10px;
                .el-input-number{
                    width: 110px;
                    margin-left: 14px;
                    margin-top: 5px;
                }
            }
            .shop-price{
                margin-top: 28px;
                span{
                    font-weight: bold;
                    font-size: 20px;
                    margin-left: 10px;
                }
            }
            .add-cart{
                margin-top: 20px;
                margin-left: 15px;
            }

        }
        .more-info{
            clear: both;
            width: 500px;
            margin: 0px auto;
            padding-top: 30px;
            .info-tit{
                font-weight: bold;
                font-size: 24px;
            }
            .info-tit2{
                padding: 10px 0;  
                font-size: 18px;
            }
            .info{
                font-size: 12px;
                color: #333;
                line-height: 1.5;
            }
        }
    }
</style>