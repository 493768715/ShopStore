import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shops:[],
    addressInfo:null,
    login:false,
    loginUser:{},
    isShowlogreg:false,
    ide:true,
    cartshops:[],
    total:0,
    showSearch:false
  },
  mutations: {
    //设置搜索框的显示隐藏
    setSear(state){
      state.showSearch = !state.showSearch;
    },
    // 订单总金额
    setTotal(state,data){
      state.total = data;
    },
    //提交订单后 删除cartshops中选中的商品
    subcart(state){
      for(var i=0;i<state.cartshops.length;i++){
        for(var x=0;x<state.shops.length;x++){
          if(state.cartshops[i].shopId===state.shops[x].shopId){
            state.cartshops.splice(i,1);
          }
        }
      }
    },
    //添加商品到购物车
    addshopToCart(state,data){
      if(state.cartshops.length!=0){
        for(var i=0;i<state.cartshops.length;i++){
          if(data.shop.pid === state.cartshops[i].shop.pid){
            state.cartshops[i].num = state.cartshops[i].num + data.num;
            break;
          }else if(state.cartshops[i].shop.pid!=data.shop.pid&&i+1===state.cartshops.length){
            state.cartshops.push(data);
            break;
          }
        }
      }else{
        state.cartshops.push(data);
      }
    },

    setide(state,data){
      state.ide = data.ide
    },
    setShowlogreg(state,data){
      state.isShowlogreg = data.bool
    },
    // 登陆信息传输
    setlogin(state,data){
      state.login = data.login;
      state.loginUser = data.user;
      state.isShowlogreg = data.bool;
      state.ide = data.ide
    },
    //注销用户
    back(state,data){
      state.login = data.login;
    },
    //选中购物车商品传给提交订单
    getShops(state,data){
      state.shops = data;
    },
    //填写地址信息传给提交订单
    getInfo(state,data){
      state.addressInfo = data
    }
  },
  actions: {
  },
  modules: {
  }
})
