<template>
    <div class="edit-box">
        <div class="edit-tit">账户设置</div>
        <div class="edit-body">
            <ul>
                <li>
                    <div class="title">账号</div>
                    <span>:</span>
                    {{data.uname}}
                </li>
                <li>
                    <div class="title">邮箱</div>
                    <span>:</span>
                    {{data.email}}
                </li>
                <li>
                    <div class="title">手机号码</div>
                    <span>:</span>
                    {{data.phone}}
                </li>
                <li>
                    <div class="edit-passwd" v-if="isPasswd">
                        <div class="title">密码</div>
                        <span>:</span>
                        {{data.upasswd}}
                        <div class="edit" >
                            <a href="javascript:void(0)" @click="setShow(0)">
                                <i class="el-icon-edit-outline"></i>
                                编辑
                            </a>
                        </div>
                     </div>
                     <div v-else>
                         <div class="passwd-list">
                             <span class="old">旧密码</span>
                             <input type="password">
                         </div>
                         <div class="passwd-list">
                             <span class="old">新密码</span>
                             <input type="password">
                         </div>
                         <div class="passwd-list">
                             <span class="old">确认密码</span>
                             <input type="password" v-model="newpasswd">
                         </div>
                         <div class="btn">
                             <button @click="setShow(1)">取消</button>
                             <button class="btn1" @click="updatepasswd()">确定</button>
                         </div>
                     </div>
                </li>
                <li>
                    <div class="edit-name" v-if="isName">
                        <div class="title">姓名</div>
                        <span>:</span>
                        {{data.username}}
                        <div class="edit">
                            <a href="javascript:void(0)" @click="isName=false">
                                <i class="el-icon-edit-outline"></i>
                                编辑
                            </a>
                        </div>
                    </div>   
                    <div v-else>
                        <div class="passwd-list">
                             <span class="old">姓名</span>
                             <input type="text" v-model="newname">
                         </div>
                         <div class="btn">
                             <button @click="isName=true">取消</button>
                             <button class="btn1" @click="updatename()">确定</button>
                         </div>
                    </div>
                </li>
                <li>
                    <div class="edit-sex" v-if="isSex">
                        <div class="title">性别</div>
                        <span>:</span>
                        {{data.usex}}
                        <div class="edit">
                            <a href="javascript:void(0)" @click="isSex=false">
                                <i class="el-icon-edit-outline"></i>
                                编辑
                            </a>
                        </div>
                     </div>
                     <div v-else>
                         <div class="passwd-list">
                             <span class="old">性别</span>
                             <el-radio v-model="radio" label="男">男</el-radio>
                             <el-radio v-model="radio" label="女">女</el-radio>
                         </div>
                         <div class="btn">
                             <button @click="isSex=true">取消</button>
                             <button class="btn1" @click="updatesex()">确定</button>
                         </div>
                     </div>
                </li>
                <li> 
                    <div v-if="isBirth">
                        <div class="title">生日</div>
                        <span>:</span>
                        {{data.ubirth}}
                        <div class="edit">
                                <a href="javascript:void(0)" @click="isBirth=false">
                                    <i class="el-icon-edit-outline"></i>
                                    编辑
                                </a>
                        </div>
                    </div>
                    <div v-else>
                        <div class="block">
                            <span class="title bir">生日</span>
                            <el-date-picker
                            v-model="newbirth"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                            </el-date-picker>
                        </div>
                        <div class="btn">
                             <button @click="isBirth=true">取消</button>
                             <button class="btn1" @click="updatebir()">确定</button>
                         </div>
                    </div>
                    
                </li> 
            </ul>
        </div>  
    </div>
</template>
<script>
export default {
    mounted(){
        this.data = this.$store.state.loginUser;
    },
    data(){
        return{
            data:{},
            isPasswd:true,
            isName:true,
            isSex:true,
            isBirth:true,
            newpasswd:'',
            newname:'',
            radio: '男',
            newbirth: ''
        }
    },
    methods:{
        setShow(i){
            var that = this
            if(i===0){
                that.isPasswd = false
            }else if(i===1){
                that.isPasswd = true
            }
        },
        updatepasswd(){
            this.isPasswd = true;
            axios.get('/Finaltest1/UserServlet?method=edituser&edit=passwd&id='+this.data.uid+'&editinfo='+this.newpasswd).then(res=>{

            })
            this.data.upasswd = this.newpasswd;
        },
        updatename(){
            this.isName = true;
            axios.get('/Finaltest1/UserServlet?method=edituser&edit=username&id='+this.data.uid+'&editinfo='+this.newname).then(res=>{

            })
            this.data.username = this.newname
        },
        updatesex(){
          this.data.usex = this.radio
           axios.get('/Finaltest1/UserServlet?method=edituser&edit=sex&id='+this.data.uid+'&editinfo='+this.radio).then(res=>{

            })
          this.isSex = true
        },
        updatebir(){
            this.data.ubirth = this.newbirth;
            axios.get('/Finaltest1/UserServlet?method=edituser&edit=birth&id='+this.data.uid+'&editinfo='+this.newbirth).then(res=>{

            })
            this.isBirth = true
        }
    }
}
</script>
<style lang="scss" scoped>
    .edit-box{
        height: 100%;
        width: 100%;
        .edit-tit{
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
        .edit-body{
            border-bottom: 1px solid #b7b7b7;
            height: 100%;
            width: 100%;
            li{
                list-style: none;
                border-bottom: 1px dotted #b7b7b7;
                padding: 22px 0 19px 0;
                font-size: 14px;
                .title{
                    float: left;
                    height: 100%;
                    width: 11%;
                }
                .block{
                    margin: 0 0 40px 0;
                }
                .bir{
                        margin-top: 10px;
                    }
                .edit{
                    float: right;
                }
                .passwd-list{
                    margin: 0 0 40px 0;
                    .old{
                        width: 11%;
                        float: left;
                        padding-top: 10px;
                    }
                    input{
                        width: 52.5%;
                        height: 38px;
                        line-height: 38px;
                        border: 1px solid #b7b7b7;
                        font-size: 12px;
                        padding: 0 20px;
                        color: #888;
                    }
                    .el-radio{
                        margin-top: 14px;
                    }
                }
                .btn{
                    height: 50px;
                    button{
                        width: 28%;
                        height: 50px;
                        color: #FFF;
                        font-size: 18px;
                        text-align: center;
                        line-height: 50px;
                        float: left;
                        cursor: pointer;
                        background-color: #b7b7b7;
                        margin: 0 17px 0 0;
                 }
                 .btn1{
                     background-color: #333;
                 }
                }
               
            }
        }
    }
</style>