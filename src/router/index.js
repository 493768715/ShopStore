import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/views/shopbody/shouye'
import Boy from '@/views/shopbody/boy'
import Girl from '@/views/shopbody/girl'
import Child from '@/views/shopbody/child'
import Cart from '@/views/shopbody/cart'
import ShowCart from '@/views/shopbody/cart/showcart'
import ShowOrder from '@/views/shopbody/cart/showorder'
import SubOrder from '@/views/shopbody/cart/suborder'
import Shop from '@/components/shop'
import User from '@/views/shopbody/user'
import Order from '@/views/shopbody/user/order'
import Editinfo from '@/views/shopbody/user/editinfo'
import Admin from '@/views/shopbody/admin'
import Selorder from '@/views/shopbody/admin/selorder'
import Selproduct from '@/views/shopbody/admin/selproduct'
import Addproduct from '@/views/shopbody/admin/addproduct'
import Sear from '@/views/shopbody/Sear'
Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'',
            redirect:'/shopbody/shouye'
        },
        {
            path:'/shopbody/shouye',
            components:{
                body:Shouye
            }
        },
        {
            path:'/shopbody/boy',
            components:{
                body:Boy
            }
        },
        {
            path:'/shopbody/girl',
            components:{
                body:Girl
            }
        },
        {
            path:'/shopbody/child',
            components:{
                body:Child
            }
         },
         {
            path:'/shopbody/user',
            name:'User',
            components:{
                body:User
            },
            children:[
                {
                    path:'order',
                    components:{
                        uinfo:Order
                    }
                },
                {
                    path:'editinfo',
                    components:{
                        uinfo:Editinfo
                    }
                }
            ]
         },
         {
            path:'/shopbody/admin',
            components:{
                body:Admin
            },
            children:[
                {
                    path:'selorder',
                    components:{
                        manage:Selorder
                    }
                },
                {
                    path:'addproduct',
                    components:{
                        manage:Addproduct
                    }
                },
                {
                    path:'selproduct',
                    components:{
                        manage:Selproduct
                    }
                }
            ]
         },
        {
            path:'/shopbody/cart',
            components:{
                body:Cart
            },
            children:[
                {
                    path:'showcart',
                    components:{
                        cart:ShowCart
                    }
                },
                {
                    path:'showorder',
                    components:{
                        cart:ShowOrder
                    }
                },
                {
                    path:'suborder',
                    components:{
                        cart:SubOrder
                    }
                },
                {
                    path:'',
                    redirect:'showcart'
                }
            ]
        },
        {
            path:'/shopbody/Sear',
            name:'Sear',
            components:{
                body:Sear
            }
        },
        {
            path:'/shop',
            name:'Shop',
            components:{
                body:Shop
            }
        }
    ]
})

export default router
