<template>
  <div class="shouye-box">
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="(item,index) in swiper" :key="index">
        <img :src="item.pic" alt="" @click="clickswiper('1')">
      </el-carousel-item>
    </el-carousel>
    <!-- 热卖商品 -->
    <div class="shops-box">
        <div class="ishot-box">
          <el-divider content-position="center" class="divider">
            <div class="tit">热卖商品</div>
          </el-divider>
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
        <div class="isnew-box">
          <el-divider content-position="center" class="divider">
            <div class="tit">新品上市</div>
          </el-divider>
          <div class="showshop">
            <div class="shop-info" v-for="item in newshop" :key="item.pid" @click="clickshop(item)">
              <div class="shop-img">
                <img :src="item.pic" alt="">
              </div>
              <div class="shop-name">{{item.pname}}</div>
              <div class="shop-price">${{item.price}}</div>
            </div>
          </div>
        </div>
    </div>
    <div class="footer">
      <span>关于我们</span>
      <span>隐私政策</span>
      <span>帮助和购物指南</span>
      <span>使用规则</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted(){
    axios.get("/Finaltest1/ProductServlet?method=ishot").then(res=>{
      this.shops = res.data;
    })
    axios.get("/Finaltest1/ProductServlet?method=isnew").then(res=>{
      this.newshop = res.data;
    })
  },
  data(){
    return{
      swiper:[{
        pic:'https://static.nike.com/a/images/f_auto/dpr_2.0/w_933,c_limit/175a79e1-03ce-4072-97f3-547299fe7d5e/nike-icons.jpg'
      },{
        pic:'https://static.nike.com/a/images/f_auto/dpr_2.0/w_933,c_limit/7801affc-cebc-47ce-97d2-216b004e3bcd/nike-icons.jpg'
      },
      {
        pic:'https://static.nike.com/a/images/t_prod_ls/w_1920,c_limit,f_auto/2925aa73-0f1b-4359-8480-54b5123d945f/air-jordan-14-gym-red-release-date.jpg'
      }
      ],
      shops:[],
      newshop:[]
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
  .shouye-box{
    height: 100%;
    width: 100%;
    .el-carousel__item img {
      height: 100%;
      width: 100%;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .shops-box{
      height: 100%;
      width: 1000px;
      margin: 0px auto;
      margin-top: 20px;
      .ishot-box{
        float: left;
        width: 100%;
        height: 100%;
        
      }
      .isnew-box{
        float: left;
        width: 100%;
        height: 100%;
        margin: 20px 0px;
        border-bottom: 2px solid #b7b7b7;
      }
      .tit{
        font-size: 30px;
        font-weight: normal;
      }
      .divider{
         background-color: #b7b7b7;
      }
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
             width: 160px;
             height: 160px;
             margin-left: 40px;
             img{
               width: 100%;
               height: 100%;
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
    .footer{
      width: 100%;
      float: left;
      text-align: center;
      span{
        margin-right:10px;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
 
</style>