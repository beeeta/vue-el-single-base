
<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">发布送养信息</el-button>
    <router-view></router-view>
    <el-table
      :data="pets"
      border
      style="width: 100%">
      <el-table-column
        prop="kind"
        label="类别">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市">
      </el-table-column>
      <el-table-column
        prop="postTime"
        label="发布时间">
      </el-table-column>
      <el-table-column
        prop="link"
        label="联系方式">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            详情
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog title="送养信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="宠物类型" :label-width="formLabelWidth">
          <el-select v-model="form.kind" placeholder="请选择宠物类型">
            <el-option label="狗狗" value="dog"></el-option>
            <el-option label="喵喵" value="cat"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在城市" :label-width="formLabelWidth">
          <el-input v-model="form.city" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="发布时间" :label-width="formLabelWidth">
          <el-input v-model="form.postTime" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.link" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
    data(){
      return{
        pets:[
          { kind:'狗',city:'深圳',postTime:'2017-07-21',link:'vx:559'},
          { kind:'猫',city:'成都',postTime:'2016-08-21',link:'qq:55339'},
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          kind: '',
          city: '',
          postTime: '',
          link: '',
        },
        formLabelWidth: '80px'
      }
    },
    methods:{
      deleteRow(index,data){
        alert(data);
      }
    }

}
</script>

<style>


</style>
