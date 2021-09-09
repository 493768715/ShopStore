<template>
    <div class="add-box">
        <div class="tit">添加商品</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="id" prop="shopid">
                <el-input v-model="ruleForm.shopid"></el-input>
            </el-form-item>
            <el-form-item label="鞋名" prop="shopname">
                <el-input v-model="ruleForm.shopname"></el-input>
            </el-form-item>
            <el-form-item label="颜色" prop="shopcolor">
                <el-input v-model="ruleForm.shopcolor"></el-input>
            </el-form-item>
            <el-form-item label="图片" prop="shoppic">
                <input type="file">
            </el-form-item>
            <el-form-item label="尺码" prop="shopsize">
                <span v-text="ruleForm.shopsize"></span>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="ruleForm.shoptype1" placeholder="请选择类型">
                    <el-option label="篮球" value="篮球"></el-option>
                    <el-option label="足球" value="足球"></el-option>
                    <el-option label="跑步" value="跑步"></el-option>
                    <el-option label="休闲" value="休闲"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="类型2">
                <el-select v-model="ruleForm.shoptype2" placeholder="请选择类型">
                    <el-option label="男的" value="boy"></el-option>
                    <el-option label="女的" value="girl"></el-option>
                    <el-option label="儿童" value="child"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="价格" prop="shopprice">
                <el-input v-model="ruleForm.shopprice"></el-input>
            </el-form-item>
            <el-form-item label="热门" prop="ishot">
                <el-switch v-model="ruleForm.ishot"></el-switch>
            </el-form-item>
            <el-form-item label="上架" prop="isdown">
                <el-switch v-model="ruleForm.isdown"></el-switch>
            </el-form-item>
            <el-form-item label="介绍" prop="shopdesc">
                <el-input type="textarea" v-model="ruleForm.shopdesc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        pic:'',
        ruleForm: {
          shopid:'',
          shopname: '',
          shopcolor: '',
          shopsize: '均码',
          shoptype1: '',
          shoptype2: '',
          shopprice: '',
          ishot: true,
          isdown: true,
          shopdesc:''
        },
        rules: {
          shopid:[
            { required: true, message: '请输入id', trigger: 'blur'}
          ],
          shopname: [
            { required: true, message: '请输入鞋名', trigger: 'blur' }
          ],
          shopcolor:[
              { required: true,message: '请输入鞋的颜色', trigger: 'blur'}
          ],
          shoptype1: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
          shopprice: [
              { required: true, message: '请输入价格', trigger: 'blur'},
          ],

        }
      };
    },
    methods: {
      submitForm(formName) {
        var that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var hot = '';
            var down = ''
            if(that.ruleForm.ishot===true){
              hot = '1';
            }else{
              hot = '0';
            }
            if(that.ruleForm.isdown===true){
              down = '1';
            }else{
              down = '0';
            }
            axios.get('/Finaltest1/ProductServlet?method=addproduct&shopid='+that.ruleForm.shopid+'&shopname='+that.ruleForm.shopname+
                    '&shopcolor='+that.ruleForm.shopcolor+'&shopsize='+that.ruleForm.shopsize+'&shoptype1='+that.ruleForm.shoptype1+
                    '&shoptype2='+that.ruleForm.shoptype2+'&shopprice='+that.ruleForm.shopprice+'&ishot='+hot+'&isdown='+down+
                    '&shopdesc='+that.ruleForm.shopdesc
            ).then(res=>{
              
            },err=>{
              console.log(err);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      listen(){
          console.log(File)
      }
    }
  }
</script>
<style lang="scss" scoped>
    .add-box{
        height: 100%;
        width: 100%;
        .tit{
            font-size: 25px;
            text-align: left;
            padding-left: 30px;
            margin-bottom: 15px;
        }
    }
</style>