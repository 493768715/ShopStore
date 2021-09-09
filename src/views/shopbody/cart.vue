<template>
    <div class="cart-box">
        <div class="cart-step">
            <el-steps :active="active" finish-status="success">
                <el-step title="我的购物车"></el-step>
                <el-step title="填写订单信息"></el-step>
                <el-step title="提交订单"></el-step>
            </el-steps>
            <el-button @click="prev" class="prev">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next" v-if="active!=2">下一步</el-button>
            <el-button style="margin-top: 12px;" @click="submit" v-else>提交订单</el-button>
        </div>
        <div>
          <keep-alive>
            <router-view name="cart"></router-view>
          </keep-alive>
        </div>
    </div>    
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 2;
        if(this.active===1){
            this.$router.push('showorder');
        }else if(this.active===2){
            this.$router.push('suborder');
        }
      },
      prev(){
          this.$router.go(-1)
        if(this.active-- < 0) this.active = 2;
      },
      submit(){
        this.$store.commit('subcart');
        var oid = Math.floor(Math.random()*(1 - 101) + 101);
        oid.toString();  
        axios.get('/Finaltest1/OrderServlet?method=suborder&total='+this.$store.state.total+'&uid='+
        this.$store.state.loginUser.uid+'&aid='+this.$store.state.addressInfo.aid+'&oid='+oid).then(res=>{

        })
        this.$router.push("/shopbody/shouye");
      }
    }
  }
</script>
<style lang="scss" scoped>
    .cart-box{
        margin-top: 50px;
        height: 100%;
        width: 1100px;
        margin: 25px auto;
        .cart-step{
            width: 500px;
            margin: 0px auto;
        }
        .prev{
          margin-left: 140px;
        }
    }   
</style>