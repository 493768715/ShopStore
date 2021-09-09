<template>
    <div class="address-box">
        <div class="address-tit">填写订单信息</div>
        <div class="address-info" :model="info">
            <div class="address-user">
                <span>收件人:</span>
                <el-input v-model="info.name" placeholder="请输入收货人的名字" class="info"></el-input>
            </div>
            <div class="address-phone">
                <span>联系电话:</span>
                <el-input v-model="info.phone" placeholder="请留下您的联系电话" class="info"></el-input>
            </div>
            <div class="address-province">
                <span>所在省市:</span>
                <el-input v-model="info.province" placeholder="请输入你所在的省市" class="info"></el-input>
            </div>
            <div class="address-detail">
                <span>详细地址:</span>
                <el-input v-model="info.address" placeholder="请输入您的详细地址" class="info"></el-input>
            </div>
            <div class="address-email">
                <span>邮箱:</span>
                <el-input v-model="info.email" placeholder="请输入您的邮箱" class="info"></el-input>
            </div>
            <div>
                <el-button type="info" plain @click="subInfo()">保存</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        axios.get('/Finaltest1/AddressServlet?method=seladdress&uid='+this.$store.state.loginUser.uid).then(res=>{
            console.log(res)
            if(res.data===0){
                this.addressIstrue = false;
            }else{
                this.info.aid = res.data.aid;
                this.info.name = this.$store.state.loginUser.username;
                this.info.phone =  this.$store.state.loginUser.phone;
                this.info.province = res.data.province;
                this.info.address = res.data.detail;
                this.info.email = this.$store.state.loginUser.email;
                this.addressIstrue = true;
            }
        })
    },
    data(){
        return{
            info:{
                aid:'',
                name:'',
                phone:'',
                province:'',
                address:'',
                email:''
            },
            addressIstrue:false
        }
    },
    methods:{
        subInfo(){
           if(this.addressIstrue===true){
               axios.get('/Finaltest1/AddressServlet?method=updateadd&uid='+this.$store.state.loginUser.uid+'&province='+this.info.province+
               '&address='+this.info.address).then(res=>{

               })
           }else{
            var id = Math.floor(Math.random()*(1 - 101) + 101);
            id.toString();  
            this.info.aid = id;
            axios.get('/Finaltest1/AddressServlet?method=addaddress&uid='+this.$store.state.loginUser.uid+'&province='+this.info.province+
               '&address='+this.info.address+'&aid='+id).then(res=>{
            })
           }
            this.$store.commit("getInfo",this.info);
        }
    }
}
</script>
<style lang="scss" scoped>
    .address-box{
        width: 900px;
        height: 100%;
        margin: 0px auto;
        margin-top: 10px;
        position: relative;
        .address-tit{
            padding-bottom: 20px;
            margin-bottom: 0px;
            border-bottom: 2px solid #b7b7b7;
            font-size: 20px;
            line-height: 22px;
            color: #333;
            padding-left: 10px;
        }
        .address-info{
            height: 180px;
            width: 100%;
            margin-top: 20px;
            border-bottom: 2px solid #b7b7b7; 
            .address-user{
                float: left;
                width: 450px;
                height: 40px;
                margin-bottom: 20px;
                .info{
                width: 300px;
                margin-left: 30px;
                }
            }
            .address-phone{
                float: left;
                width: 450px;
                height: 40px;
                margin-bottom: 20px;
                .info{
                width: 300px;
                margin-left: 20px;
                }   
            }
            .address-province{
                float: left;
                width: 450px;
                height: 40px;
                margin-bottom: 20px;
                .info{
                width: 300px;
                margin-left: 14px;
            }
            }
            .address-detail{
                float: left;
                width: 450px;
                height: 40px;
                 margin-bottom: 20px;
                .info{
                width: 300px;
                margin-left: 20px;
            }
            }
            .address-email{
                float: left;
                width: 450px;
                height: 40px;
                .info{
                width: 300px;
                margin-left: 46px;
            }
            }
        }
    }
</style>