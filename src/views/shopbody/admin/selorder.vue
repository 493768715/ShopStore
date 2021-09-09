<template>
    <div class="selorder-box">
        <div class="sel-condition">
            <span>订单号:</span>
             <el-input
                v-model="input1" @blur="seloid">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <span class="uid">用户id:</span>
             <el-input
                v-model="input2" @blur="seluid">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div class="order-table">
            <el-table
            :data="tableData"
            stripe
            style="width: 100%">
                <el-table-column
                prop="oid"
                label="订单号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="uid"
                label="用户id"
                width="180">
                </el-table-column>
                <el-table-column
                prop="paytime"
                label="支付时间">
                </el-table-column>
                <el-table-column
                prop="total"
                label="总金额">
                </el-table-column>
                <el-table-column
                prop="ispay"
                label="支付状态">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
  export default {
    mounted(){
        axios.get('/Finaltest1/OrderServlet?method=selorder').then(res=>{
            this.tableData = res.data;
        })
    },
    data() {
      return {
        tableData: [],
        input1:'',
        input2:'',
      }
    },
    methods:{
        seloid(){
            axios.get('/Finaltest1/OrderServlet?method=selorderbyids&oid='+this.input1+'&uid=0').then(res=>{
                this.tableData = res.data;
                console.log(res)
            })
        },
        seluid(){
            axios.get('/Finaltest1/OrderServlet?method=selorderbyids&oid='+this.input1+'&uid='+this.input2).then(res=>{
                this.tableData = res.data;
            })
        }

    }
  }
</script>
<style lang="scss" scoped>
    .selorder-box{
        width: 100%;
        height: 100%;
        .sel-condition{
            height: 50px;
            font-size: 18px;
            
            span{
                margin-right: 10px;
                margin-left: 20px;
            }
            .el-input{
                width: 80px;
            }
        }
        .order-table{
            margin-top: 20px;
        }
    }
</style>