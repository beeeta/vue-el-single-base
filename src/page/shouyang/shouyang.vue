

<template>
  <div>
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
  </div>
</template>

<script>
export default {
    data(){
      return{
        pets:[
          { kind:'狗',city:'深圳',postTime:'2017-07-21',link:'vx:559'},
          { kind:'猫',city:'成都',postTime:'2016-08-21',link:'qq:55339'},
        ]
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
