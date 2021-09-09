<template>
  <div class="log-reg" v-show="this.$store.state.isShowlogreg">
    <div class="login-box" v-if="IsShow">
      <div class="register-login">
        <p>还未注册？</p>
        <el-button type="info" round @click="IsShow=false">
          注册账户
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </div>
      <div class="mid-xian"></div>
      <div class="login-info">
        <p>登陆</p>
        <form action="post" class="login-form">
          <el-input v-model="name" placeholder="请输入内容" class="login-name" @blur="getName(name)"></el-input>
          <span class="warn" v-show="nameWarnIsShow">请输入账户</span>
          <span class="warn" v-show="warnLabel">用户账户或者密码错误</span>
          <el-input placeholder="请输入密码" v-model="passwd" class="login-passwd" @blur="getPasswd(passwd)" show-password>
          </el-input>
          <div class="warn" v-show="passwdWarnIsShow">请输入密码</div>
          <el-button type="info" class="login-button" @click="login()">
            登陆
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </form>
      </div>
    </div>
    <div class="register-box" v-else>
      <form action="post" :model="regForm"></form>
      <div>
        <p>账号:</p>
        <el-input class="input" v-model="regForm.regName" placeholder="请输入内容" @blur="getRegName(regForm.regName)">
        </el-input>
        <label for="nameWarn" v-show="RegNameLabel">请输入账号</label>
      </div>
      <div>
        <p>密码:</p>
        <el-input class="input" placeholder="请输入密码" v-model="regForm.regPasswd" @blur="getRegPasswd(regForm.regPasswd)"
          show-password></el-input>
        <label for="" v-show="RegPasswdLabel">请输入密码</label>
      </div>
      <div>
        <p>确认密码:</p>
        <el-input class="input" placeholder="请再次输入密码" v-model="regForm.regRepasswd"
          @blur="getRegRepasswd(regForm.regRepasswd)" show-password></el-input>
        <label for="" v-show="RegRepasswdLabel">{{repasswdWarn}}</label>
      </div>
      <div>
        <p>手机号码:</p>
        <el-input class="input" v-model.number="regForm.regPhone" placeholder="请输入手机号码"
          @blur="getRegPhone(regForm.regPhone)"></el-input>
        <label for="" v-show="RegPhoneLabel">请输入手机号码</label>
      </div>
      <div>
        <p>邮箱:</p>
        <el-input class="input" v-model="regForm.regEmail" placeholder="请输入邮箱"></el-input>
      </div>
      <div class="submit">
        <el-button type="primary" class="submit-btn" @click="submitForm(regForm)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </div>
    </div>
    <div class="mask" @click="backshow"></div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        name: '',
        passwd: '',
        warnLabel: false,
        nameWarnIsShow: false,
        passwdWarnIsShow: false,
        regForm: {
          regName: '',
          regPasswd: '',
          regRepasswd: '',
          regPhone: '',
          regEmail: ''
        },
        RegNameLabel: false,
        RegPasswdLabel: false,
        RegRepasswdLabel: false,
        RegPhoneLabel: false,
        RegEmailLabel: false,
        repasswdWarn: null

      }
    },
    props: {
      IsShow: Boolean
    },
    methods: {
      login() {
        axios({
          url: '/Finaltest1/UserServlet?method=login&uname=' + this.name + '&upasswd=' + this.passwd
        }).then(res => {
          if (res.data.ide === '1') {
            this.$store.commit('setlogin', {
              login: true,
              user: res.data,
              bool: false,
              ide: false
            });
            this.$router.push('/shopbody/admin')
          } else if (res.data.ide === '0') {
            this.$store.commit('setlogin', {
              login: true,
              user: res.data,
              bool: false,
              ide: true
            });
          } else {
            this.warnLabel = true;
          }
        })
      },
      backshow() {
        this.$store.commit('setShowlogreg', {
          bool: false
        });
      },
      getName(data) {
        var that = this;
        if (data != '') {
          that.nameWarnIsShow = false
        } else {
          that.nameWarnIsShow = true
        }
      },
      getPasswd(data) {
        var that = this;
        if (data != '') {
          that.passwdWarnIsShow = false
        } else {
          that.passwdWarnIsShow = true
        }
      },
      getRegName(data) {
        var that = this;
        if (data != '') {
          that.RegNameLabel = false
        } else {
          that.RegNameLabel = true
        }
      },
      getRegPasswd(data) {
        var that = this;
        if (data != '') {
          that.RegPasswdLabel = false
        } else {
          that.RegPasswdLabel = true
        }
      },
      getRegRepasswd(data) {
        var that = this;
        if (data != '' && data === that.regForm.regPasswd) {
          that.RegRepasswdLabel = false;
        } else if (data === '') {
          that.RegRepasswdLabel = true;
          that.repasswdWarn = '请再次输入密码'
        } else if (data != that.regForm.regPasswd) {
          that.RegRepasswdLabel = true;
          that.repasswdWarn = '两次密码不一致'
        }
      },
      getRegPhone(data) {
        var that = this;
        if (data != '') {
          that.RegPhoneLabel = false
        } else {
          that.RegPhoneLabel = true
        }
      },
      submitForm(data) {
        var that = this;
        this.$store.commit('setShowlogreg', {
          bool: false
        });
        var id = Math.floor(Math.random() * (1 - 101) + 101);
        id.toString();
        axios.get('/Finaltest1/UserServlet?method=register&name=' + data.regName + '&passwd=' + data.regPasswd +
          '&phone=' + data.regPhone + '&email=' + data.regEmail + '&id=' + id).then(res => {})
      },
      resetForm() {
        this.regForm.regName = '',
          this.regForm.regPasswd = '',
          this.regForm.regRepasswd = '',
          this.regForm.regPhone = '',
          this.regForm.regEmail = '',
          this.RegNameLabel = false,
          this.RegPasswdLabel = false,
          this.RegRepasswdLabel = false,
          this.RegPhoneLabel = false
      }
    }
  }

</script>
<style lang="scss" scoped>
  .log-reg {
    width: 100%;
    height: 300px;
    z-index: 101;
    background: white;
    position: fixed;
    margin-top: 10px;

    .mask {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 380px;
      z-index: 980;
      background-color: rgba(29, 28, 28, 0.8);
    }

    .login-box {
      max-width: 1000px;
      height: 250px;
      margin: 10px auto;

      div {
        float: left;
      }

      .register-login {
        margin-top: 20px;
        margin-right: 100px;
        margin-left: 170px;

        p {
          font-size: 24px;
          margin-bottom: 20px;
          text-align: left;
          width: 100%;
        }
      }

      .mid-xian {
        border-left: 1px solid #999;
        margin-right: 10%;
        height: 100%;
      }

      .login-info {
        float: left;
        height: 100%;
        width: 300px;
        margin-top: 20px;

        p {
          float: left;
          font-size: 24px;
          width: 100%;
          text-align: left;
          margin-bottom: 20px;
        }

        .login-form {
          .warn {
            font-size: 12px;
            color: red;
          }

          .login-passwd {
            margin-top: 15px;
          }

          .el-input__suffix-inner {
            text-align: right;
          }

          .login-button {
            margin-top: 20px;
            width: 100%;
            font-size: 18px;
          }
        }
      }
    }

    .register-box {
      max-width: 1000px;
      height: 100%;
      margin: 10px auto;

      div {
        float: left;
        width: 33.3%;
        margin-bottom: 20px;

        label {
          font-size: 13px;
          padding: 11px;
          color: red;
        }
      }

      .submit {
        margin-top: 33px;

        .submit-btn {
          margin-right: 33px;
        }
      }

      p {
        font-size: 13px;
        line-height: 33px;
      }

      .input {
        width: 200px;

      }
    }
  }

</style>
