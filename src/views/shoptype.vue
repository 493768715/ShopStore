<template>
    <div class="shoptype-box">
      <div class="shoptype">
         <router-link to="/shopbody/shouye" tag="div" activeClass="myactive" class="type">
           <a href="javascript:0"> 
               <p>首页</p>
               <i class="el-icon-caret-bottom"></i>
            </a>
        </router-link>
         <router-link to="/shopbody/boy" tag="div"  activeClass="myactive" class="type">
           <a href="javascript:0"> 
               <p>男的</p>
               <i class="el-icon-caret-bottom"></i>
            </a>
        </router-link>
        <router-link to="/shopbody/girl" tag="div"  activeClass="myactive" class="type">
            <a href="javascript:0"> 
                <p>女的</p>
                <i class="el-icon-caret-bottom"></i>
            </a>
        </router-link>
        <router-link to="/shopbody/child" tag="div"  activeClass="myactive" class="type">
            <a href="javascript:0"> 
                <p>儿童</p>
                <i class="el-icon-caret-bottom"></i>
            </a>
        </router-link>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.shoptype-box{
      margin-top: 10px;
      height: 50px;
      width: 100%;
      background: none repeat scroll 0 0 #464646;
      position: relative;
      .myactive{
        background-color: #b3b3b3;
      }
      .shoptype{
        width: 560px;
        height: 100%;
        margin: auto;
        .type{
        float: left;
        width: 140px;
        text-align: center;
        font-size: 19px;
        a{
            color: white;
        }
        }
      .type:hover{
        background-color: #a6a9ad;
        }
      }
    }
</style>