<template>
    <div class="showcart-box">
        <div class="showcart-title">您的购物车: {{shopsNum}}件商品
            <div class="btn"><el-button type="info" @click="subShop" plain>保存</el-button></div>
        </div>
        <div class="showshop-title">
            <div class="title-left">
                <input type="checkbox" class="checkAll" @change="CheckAll" v-model="checkAll">
                <span>全选</span>          
                <span>您选中了{{CheckNum}}件商品</span>
            </div>
            <div class="title-right">
                <div class="tit">商品金额:</div>
                <div class="pri">${{AllPrice}}</div>
            </div>
        </div>
        <!-- shop循环 -->
        <div class="shopcart-list" v-for="(shop,index) in this.$store.state.cartshops" :key="index">
            <div class="shops">
                <div class="shop-check">
                    <input type="checkbox" v-model="isChecked[index]" @change="IsChecked(isChecked[index])">
                </div>
                <div class="shop-pic">
                    <img :src="shop.shop.pic" alt="" @click="clickshop(shop.shop)">
                </div>
                <div class="shop-info">
                    <div @click="clickshop(shop.shop)">{{shop.shop.pname}}</div>
                    <p>颜色：{{shop.shop.pcolor}}</p>
                    <p>尺码: {{shop.shop.psize}}</p>
                </div>
                <div class="shop-num">
                    <div class="editshop">
                        <el-button type="text" @click="editcart(shop.shop.pcolor,shop.shop.psize)" class="edit"><i class="el-icon-edit-outline"></i>
                            编辑</el-button>
                        <el-popconfirm
                            @onConfirm="delcart(shop.shop.pid)"
                            title="这是一段内容确定删除吗？"
                        >
                            <el-button slot="reference" type="text" size="midle" class="delete">
                                <i class="el-icon-delete"></i>删除
                            </el-button>
                        </el-popconfirm>
                       

                        <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" :modal="false">
                            <el-form :model="editshop">
                                <el-form-item label="颜色" :label-width="formLabelWidth">
                                    <el-input v-model="editshop.shopColor" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="尺码" :label-width="formLabelWidth">
                                <el-select v-model="editshop.shopSize">
                                    <el-option label="35" value="35"></el-option>
                                    <el-option label="36" value="36"></el-option>
                                    <el-option label="37" value="37"></el-option>
                                    <el-option label="38" value="38"></el-option>
                                    <el-option label="39" value="39"></el-option>
                                    <el-option label="40" value="40"></el-option>
                                    <el-option label="41" value="41"></el-option>
                                    <el-option label="42" value="42"></el-option>
                                    <el-option label="43" value="43"></el-option>
                                </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                        </el-dialog>
                    </div>
                    <div class="shop-price">
                        ${{shop.shop.price}}
                    </div>
                    <div class="shopnum">
                        数量：
                        <el-input-number v-model="shop.num" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        for(var i = 0;i<this.$store.state.cartshops.length;i++){
            this.isChecked.push(false);
        }
    },
    data(){
       return{
            editshop:{
                shopSize:'',
                shopColor:''
            },
            checkAll:false,
            isChecked:[],
            ShopIsCheck:[],
            dialogFormVisible: false,
            formLabelWidth: '120px'
       }
    },
    computed:{
        CheckNum:function(){
            var i = 0;
            for(var j = 0;j<this.isChecked.length;j++){
                if(this.isChecked[j]===true){
                    i++;
                }
            }
            return i;
        },
        shopsNum:function(){
            return this.$store.state.cartshops.length;
        },
        AllPrice:function(){
            var price = 0;
            for(let j = 0;j<this.isChecked.length;j++){
                if(this.isChecked[j]===true){
                    price = price + this.$store.state.cartshops[j].shop.price*this.$store.state.cartshops[j].num
                }
            }
            return price;
        }
    }
    ,
    methods: {
        CheckAll(){
            for(var i=0;i<this.isChecked.length;i++){
                this.$set(this.isChecked,i,this.checkAll)
            }
        },
        IsChecked(index){
            index =! index;
        },
        subShop(){
            for(var i=0;i<this.isChecked.length;i++){
                if(this.isChecked[i]===true){
                    this.ShopIsCheck.push(this.$store.state.cartshops[i])
                }
            }
            this.$store.commit("getShops",this.ShopIsCheck);
        },
        clickshop(shop){
            this.$router.push({
                path:'/shop',
                name:'Shop',
                params:{
                    shop:shop
                }
            })
        },
        editcart(color,size){
            var that = this
            that.dialogFormVisible = true;
            that.editshop.shopColor = color;
            that.editshop.shopSize = size
        },
        delcart(id){
            var that = this;
            for(var i=0;i<that.$store.state.cartshops.length;i++){
                if(id===that.$store.state.cartshops[i].shop.pid){
                    that.$store.state.cartshops.splice(i,1);
                }
            }
            console.log(that.$store.state.cartshops)
        }
    }
}
</script>
<style lang="scss" scoped>
    .showcart-box{
        height: 100%;
        widows: 100%;
        position: relative;
        margin: 0px auto;
        .showcart-title{
            font-size   : 26px;
            color: #333;
            margin-bottom: 15px;
            .btn{
                float: right;
            }
        }
         .showshop-title{
             height: 35px;
             margin-bottom: 10px;
            .checkAll{
                height: 20px;
                width: 20px;
                margin-top: 8px;
            }
            span{
                margin-left: 10px;
                margin-right: 20px;
                color: #333;
            }
            .title-left{
                float: left;

            }
            .title-right{
                float: right;
                width: 200px;
                .tit{
                    float: left;
                    font-size: 24px;
                    width: 120px;
                }
                .pri{
                    float: right;
                    color: #b63330;
                    line-height: 28px;
                    font-size: 24px;
                    padding-top: 4px;
                }
            }
        }
        .shopcart-list{
            clear: both;
            border-top: 1px solid #b7b7b7;
            border-bottom: 1px solid #b7b7b7;
            .shops{
                width: 100%;
                height: 160px;
                margin: 15px 0;
                margin-bottom: 10px;
                border-bottom: 1px dashed #605f5f;
                .shop-check{
                    float: left;
                    width: 10%;
                    input{
                        margin-top: 72px;
                        height: 15px;
                        width: 15px;
                        margin-left: 37px;
                    }
                }
                .shop-pic{
                    float: left;
                    width: 15%;
                    img{
                        height: 160px;
                        width: 160px;
                    }
                }
                .shop-info{
                    float: left;
                    width: 30%;
                    div{
                        font-size: 25px;
                        margin: 25px 0px;
                        color: #333;   
                    }
                    p{
                        font-size: 14px;
                        margin: 10px 0;     
                    }
                }
                .shop-num{
                    float: right;
                    width: 45%;
                    .editshop{
                        height: 50px;
                        i{
                            font-size: 23px;
                        }
                        .edit{
                            float: right;
                            height: 50px;
                            width: 70px;
                        }
                        .delete{
                            float: right;
                            height: 50px;
                            width: 70px;
                            padding-right: 20px;
                        }
                    }
                }
                .shop-price{
                    float: right;
                    font-size: 18px;
                    font-weight: bold;
                    color: #b63330;
                    text-align: right;
                    margin-right: 10px;
                    padding-top: 15px;
                    width: 100%;
                }
                .shopnum{
                    float: right;
                    margin-top: 10px;
                    margin-right: 10px;
                }
            }
        }
     
        
    }
</style>