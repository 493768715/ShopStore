<template>
    <div class="admin-box">
        <div class="admin-list">
            <h2>后台管理</h2>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="tree"></el-tree>
        </div>
        <div class="admin-info">
            <router-view name="manage"></router-view>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
        return {
            data: [
                {
                label: '订单管理',
                children: [{
                    label: '查询订单'
                }]
                }, 
                {
                    label: '商品管理',
                    children: [
                        {
                        label: '商品添加'
                        }, 
                        {
                        label: '商品查询'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            labelinfo:''
        };

    },
    methods: {
      handleNodeClick(data) {
        var that = this;
        if(data.label==='查询订单'){
            this.$router.push('/shopbody/admin/selorder')
        }else if(data.label==='商品添加'){
            this.$router.push('/shopbody/admin/addproduct')
        }else if(data.label==='商品查询'){
             this.$router.push('/shopbody/admin/selproduct')
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
    .admin-box{
        height: 100%;
        width: 1200px;
        margin: 0px auto;
        .admin-list{
            width: 20%;
            float: left;
            border: 1px solid #b3b3b3;
            margin-top: 40px;
            h2{
                width: 80%;
                margin: 0px auto;
                border-bottom: 1px solid #b3b3b3;
                padding: 10px 5px;
            }
            .tree{
                padding: 20px 5px;
                font-size: 20px;
            }
        }
        .admin-info{
            width: 77%;
            float: right;
            margin-top: 40px;
        }
    }
</style>