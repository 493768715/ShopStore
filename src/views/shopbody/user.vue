<template>
    <div class="user-box">
        <div class="left">
            <dl>
                <dt class="order-tit">查看订单</dt>
                <router-link to="/shopbody/user/order" tag="dd">
                    <a href="javascript:void(0)">
                        <i class="el-icon-arrow-right"></i>
                        订单
                    </a>
                </router-link>
            </dl>
            <dl>
                <dt>账户</dt>
                <router-link to="/shopbody/user/editinfo" tag="dd">
                    <a href="javascript:void(0)">
                        <i class="el-icon-arrow-right"></i>
                        账户设置
                    </a>
                </router-link>
            </dl>
        </div>
        <div class="right">
            <router-view name="uinfo"></router-view>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route.params.name)
    }
}
</script>
<style lang="scss" scoped>
    .user-box{
        width: 1000px;
        height: 100%;
        margin: 0px auto;
        margin-top: 40px;
        a:hover{
            color: #b7b7b7;
        }
        dl{
            margin-bottom: 20px;
            dt{
                height: 70px;
                width: 100%;
                margin-bottom: 20px;
                line-height: 70px;
                border-bottom: 1px solid #b7b7b7;
                font-size: 24px;
                position: relative;
                text-align: left;
            }
            dd{
                line-height: 25px;
                font-size: 14px;
            }
        }
        .left{
            border: 1px solid #b7b7b7;
            float: left;
            padding: 0 2%;
            width: 20%;
            margin-top: 40px;
        }
        .right{
            float: right;
            width: 72%;
            margin-top: 40px;
        }
    }
</style>