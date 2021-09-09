<template>
  <div id="app">
    <div class="header">
        <router-link to="/shopbody/shouye" tag="div" class="logo">
           <a href="javascript:void(0)"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594487274243&di=1fc036e1c48ab231690e832dde6c7efe&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4da821e130256150633fdb40a9c183137d0a20083ee8-8DRN9x_fw658" alt=""></a>
        </router-link>
        <!-- 搜索栏 -->
        <div class="search-box" v-show="this.$store.state.ide">
          <div class="search-btn">
            <div class="user">
              <a href="javascript:void(0)" @click="showSearch">
                <i class="el-icon-search"></i>    
              </a>
            </div>
          </div>
         </div> 
        <div class="head-cart-box" v-show="this.$store.state.ide">
          <router-link to="/shopbody/cart" tag="div" class="head-cart-btn">
              <div class="user">
                <i class="el-icon-shopping-cart-2"></i>
              </div>
              <span class="cart-num" v-text="this.$store.state.cartshops.length"></span>
              <span>购物车</span> 
           </router-link>
        </div>
        <div class="log-reg-box">
          <div class="log-reg-btn" v-if="!this.$store.state.login">
            <div class="user">
               <i class="el-icon-user-solid" @click="logShow(1)"></i>
            </div>
            <a href="javascript:void(0)">
              <span class="log" @click="logShow(1)">登陆</span>
            </a>
            <span>/</span>
            <a href="javascript:void(0)">
              <span class="register"  @click="logShow(2)">注册</span>
            </a>
          </div>
          <div class="login" v-else>
              <div class="logining">
                欢迎您，{{uname}}
                <a href="javascript:void(0)" @click="back">注销</a>
              </div>
              <div class="user">
               <i class="el-icon-user-solid" @click="showUser()"></i>
            </div>  
          </div>
        </div>
    </div>
    <!-- 登陆注册模块 -->
    <transition name="bounce" mode="out-in">
        <logreg v-show="this.$store.state.isShowlogreg" :IsShow="isShow" v-model="Showlogin"></logreg>
    </transition>
    

    <!-- 搜索 -->
    <transition name="bounce" mode="out-in">
      <search v-show="$store.state.showSearch"></search>
    </transition> 
    <transition name="mask">
      <div class="mask" style="top:170px" v-show="this.$store.state.showSearch" @click="$store.commit('setSear')"></div>
    </transition>
    
    <!-- 页面身体部分 -->
    <shopbody></shopbody>
  </div>
</template>
<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import logreg from './views/logreg'
import shopbody from './views/shopbody'
import search from './views/search'
Vue.use(ElementUI)
export default {
  data(){
    return{
      Showlogin:false,
      isShow:true,
      username:'',
      Islogining:false
    }
  },
  computed:{
    uname(){
      this.username = this.$store.state.loginUser.uname;
      return this.username
    }
  },
  methods:{
    logShow(id){
      var that = this;
      that.Showlogin = !that.Showlogin;
      this.$store.commit('setShowlogreg',{
          bool:that.Showlogin
        });
      if(id===1){
        that.isShow = true
      }else{
        that.isShow = false
      }
    },
    showUser(){
      this.$router.push({
        path:'/shopbody/user',
        name:'User',
        params:{
          name:this.username
        }
      });
    },
    back(){
      this.$store.commit('back',{
        login:false,
        });
      this.$store.commit('setide',{
        ide:true
      })
        this.$router.push('/shopbody/shouye')
    },
    showSearch(){
      this.$store.commit('setSear');
    }
  },
  components:{
    logreg:logreg,
    shopbody:shopbody,
    search:search
  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  } 
  a{
    text-decoration: none;
    color: black;
  }
  .mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 380px;
  z-index: 980;
  background-color: rgba(29, 28, 28, 0.8);
  }
  .bounce-enter-active{
        animation: bounce-in 1s;
    }
  .bounce-leave-active{
        animation: bounce-in 1s reverse;
    }
  @keyframes bounce-in{
        0%{
            opacity: 0;
            transform: translateY(100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
  }
  .mask-enter-active{
        animation: bounce-in 1s;
    }
  .mask-leave-active{
        animation: bounce-in 1s reverse;
    }
  @keyframes mask-in{
        0%{
            opacity: 0;
            transform: translateY(0px);
        }
        100%{
            opacity: 1;
            transform: translateY(100px);
        }
  }
  .header{
    height: 80px;
    widows: 100%;
    position: relative;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .logo{
      float: left;
      margin-left: 85px;
      height: 80px;
      width: 150px;
      img{
        height: 100%;
        width: 100%;
        margin-top: -5px;
      }
    }
    span{
        line-height: 80px;
        text-align: center;
        font-size: 14px;
    }
     .user{
        line-height: 40px;
        font-size: 18px;
        position: absolute;
        right: 16px;
        top: 19px;
        background: #A8A8B4;
        border-radius: 50%;
        padding: 0px 10px;
    }
    .user:hover{
        background: #D2D2D7;
    }
    .log-reg-box{ 
        float: right;
        height: 100%;
        width: 400px;
        position: relative;
        .log-reg-btn{
          height: 100%;
          width: 200px; 
          margin-left: 5px;  
          float: right;
          margin-right: 50px;
          .log{
            margin-right: 6px;
            margin-left: 100px;
          }
          .register{
            margin-left: 6px;
          }
        }
        .login{
          width: 100%;
          height: 100%;
          .logining{
            position: absolute;
            line-height: 5;
            right: 85px;
            a{
              padding-left: 10px;
            }
            a:hover{
              color: #a6a9ad;
            }
          }
        }
      }
      .head-cart-box{
        position: relative;
        float: right;
        height: 100%;
        width: 120px;
        .head-cart-btn{
          height: 100%;
          width: 70px;
          margin-left: 10px;
          .icon-cart::before{
            font-size: 28px;
            position: absolute;
            top: 50%;
            margin-top: -18px;
            right: 0;
            margin-right: 6px;
          }
          .cart-num{
           position: absolute;
           border-radius: 50%;
           background: red;
           z-index: 1;
           height: 13px;
           color: white;  
           padding:2px 3px;
           padding-bottom:0;
           line-height: 10px;
           right: 17px;
           top: 23px;
          }
        }
      }
      .search-box{
        position: relative;
        float: right;
        height: 100%;
        width: 80px;
        .search-btn{
          height: 100%;
          width: 35px;
          .user{
            margin-right: 16px;
          }
        }
      }
  }
 
  
</style>