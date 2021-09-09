<template>
    <div class="selproduct-box">
        <div class="sel">
            <span>请选择要查询的属性:</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.index"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-input v-model="input" placeholder="请输入内容" @blur="selPro()"></el-input>
        </div>
        <div class="sel-table">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                fixed
                prop="pid"
                label="pid"
                >
                </el-table-column>
                <el-table-column
                prop="pname"
                label="鞋名"
                >
                </el-table-column>
                <el-table-column
                prop="pic"
                label="图片"
                >
                <template   slot-scope="scope">            
                    <img :src="scope.row.pic"  min-width="70" height="70" />
                 </template>   
                </el-table-column>
                <el-table-column
                prop="pcolor"
                label="颜色"
                >
                </el-table-column>
                <el-table-column
                prop="psize"
                label="尺码"
                >
                </el-table-column>
                <el-table-column
                prop="ptype"
                label="类型"
                >
                </el-table-column>
                <el-table-column
                prop="ptype2"
                label="类型2"
                >
                </el-table-column>
                <el-table-column
                prop="price"
                label="价格"
                >
                </el-table-column>
                <el-table-column
                prop="ishot"
                label="热门"
                >
                </el-table-column>
                <el-table-column
                prop="isdown"
                label="上架"
                >
                </el-table-column>
                <el-table-column
                prop="pdesc"
                label="介绍"
                width="400px"
                >
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                    <template slot-scope="scope">
                        <el-button @click="editproduct(scope.row,scope.$index)" type="text" size="small">编辑</el-button>
                        <!-- 删除气泡框 -->
                        <el-popconfirm
                            @onConfirm="delpro(scope.row,scope.$index)"
                            title="这是一段内容确定删除吗？"
                        >
                            <el-button slot="reference" type="text" size="small">删除</el-button>
                        </el-popconfirm>   
                    </template>
                </el-table-column>  
            </el-table>

            <!-- 编辑弹窗 -->
                        <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" :modal="false">
                            <el-form >
                                <el-form-item label="鞋名" :label-width="formLabelWidth">
                                    <el-input v-model="edit.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="颜色" :label-width="formLabelWidth">
                                    <el-input v-model="edit.color" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="类型" :label-width="formLabelWidth">
                                    <el-select v-model="edit.type">
                                        <el-option label="篮球" value="篮球"></el-option>
                                        <el-option label="足球" value="足球"></el-option>
                                        <el-option label="跑步" value="跑步"></el-option>
                                        <el-option label="休闲" value="休闲"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="类型2" :label-width="formLabelWidth">
                                    <el-select v-model="edit.type2">
                                        <el-option label="男的" value="男的"></el-option>
                                        <el-option label="女的" value="女的"></el-option>
                                        <el-option label="儿童" value="儿童"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="价格" :label-width="formLabelWidth">
                                    <el-input v-model="edit.price" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="热门" :label-width="formLabelWidth">
                                   <el-radio-group v-model="edit.ishot">
                                        <el-radio label="1">热门</el-radio>
                                        <el-radio label="0">不热门</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="上架" :label-width="formLabelWidth">
                                    <el-radio-group v-model="edit.isdown">
                                        <el-radio label="1">上架</el-radio>
                                        <el-radio label="0">下架</el-radio>
                                    </el-radio-group>
                                </el-form-item> 
                                <el-form-item label="介绍" :label-width="formLabelWidth">
                                    <el-input type="textarea" v-model="edit.desc"></el-input>
                                </el-form-item> 
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="editpro(edit)">确 定</el-button>
                            </div>
                        </el-dialog>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        axios.get("/Finaltest1/ProductServlet?method=selectall").then(res=>{
            this.tableData = res.data;
        })
    },
    data(){
        return{
            edit:{
                id:'',
                name:'',
                color:'',
                type:'',
                type2:'',
                price:0,
                ishot:'',
                isdown:'',
                desc:''
            },
            options:[
                {
                    index:'1',
                    label:'鞋名',
                    value:'pname'
                },
                {
                    index:'2',
                    label:'颜色',
                    value:'pcolor'
                },
                {
                    index:'3',
                    label:'类型',
                    value:'ptype',
                },
                {
                    index:'4',
                    label:'热门',
                    value:'ishot'
                },
                {
                    index:'5',
                    label:'上架',
                    value:'isdown'
                },
                {
                    index:'6',
                    label:'类型2',
                    value:'ptype2'
                }
            ],
            index:0,
            value: '',
            input: '',
            tableData: [],
            dialogFormVisible: false,
            formLabelWidth: '120px'
        }
    },
    methods: {
      editpro(edit) {
        this.dialogFormVisible = false
        axios.get('/Finaltest1/ProductServlet?method=updatepro&name='+edit.name+'&id='+edit.id+'&color='+edit.color+
        '&type='+edit.type+'&type2='+edit.type2+'&price='+edit.price+'&ishot='+edit.ishot+'&isdown='+edit.isdown+
        '&desc='+edit.desc
        ).then(res=>{
            
        })
        this.tableData[this.index].pname = edit.name;
        this.tableData[this.index].pcolor = edit.color;
        this.tableData[this.index].ptype = edit.type;
        this.tableData[this.index].ptype2 = edit.type2;
        this.tableData[this.index].price = edit.price;
        this.tableData[this.index].ishot = edit.ishot;
        this.tableData[this.index].isdown = edit.isdown;
        this.tableData[this.index].pdesc = edit.desc
      },
      delpro(row,index){
         axios.get('/Finaltest1/ProductServlet?method=delproduct&pid='+row.pid).then(res=>{
             this.tableData.splice(index,1);
         });
      },
      editproduct(row,index){
          this.index = index;
          this.edit.id = row.pid;
          this.edit.name = row.pname;
          this.edit.color = row.pcolor;
          this.edit.type = row.ptype;
          this.edit.type2 = row.ptype2;
          this.edit.price = row.price;
          this.edit.ishot = row.ishot;
          this.edit.isdown = row.isdown;
          this.edit.desc = row.pdesc;
          this.dialogFormVisible = true;
      },
      selPro(){
          if(this.input===''){
            axios.get("/Finaltest1/ProductServlet?method=selectall").then(res=>{
                this.tableData = res.data;
            })
          }else{
            axios.get("/Finaltest1/ProductServlet?method=selectproduct&type="+this.value+"&input="+this.input).then(res=>{
                this.tableData = res.data
            })
          }
      }
    
    }
}
</script>
<style lang="scss" scoped>
    .selproduct-box{
        height: 100%;
        width: 100%;

        .sel{
            margin-bottom: 10px;
            span{
            font-size: 14px;
            }
            .el-select{
                width: 100px;
                margin: 0px 20px;
            }
            .el-input{
                width: 200px;
                margin-left: 20px;
            }
        }
    }
</style>
