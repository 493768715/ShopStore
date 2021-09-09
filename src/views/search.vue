<template>
    <div class="search-box">
        <div class="search-content">
            <div class="search-value">
                <input type="text" v-model="input" placeholder="请输入内容">
            </div>
            <div class="search-icon">
                <a href="javascript:void(0)" @click="toSear()">
                    <i class="el-icon-success search"></i>
                </a>
                <a href="javascript:void(0)" @click="$store.commit('setSear')">
                    <i class="el-icon-error"></i>
                </a>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            input:''
        }
    },
    methods:{
        toSear(){
            this.$store.commit('setSear');
            this.$router.push({
                path:'/shopbody/Sear',
                name:'Sear',
                params:{
                    input:this.input
                }
                });
        }
    }
}
</script>
<style lang="scss" scoped>
    .search-box{
        margin-top: 10px;
        height: 80px;
        width: 100%;
        z-index: 101;
        position: fixed;
        background: #ffffff;
        .search-content{
            height: 40px;
            margin: 0px auto;
            max-width: 1000px;
            position: relative;
            padding: 20px 0;
            .search-value{
                height: 100%;
                width: 90%;
                position: relative;
                input{
                    line-height: 40px;
                    color: #999;
                    font-size: 24px;
                    border: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    font-family: "tradegothic","fzlthjw","微软雅黑","Microsoft YaHei","黑体","SimHei";
                }
            }
            .search-icon{
                position: absolute; 
                top: 24%;
                right: 0;
                font-size: 39px;
                .search{
                    margin-right: 20px;
                }
                a:hover{
                    color: gray;
                }
            }
        }
    }
</style>