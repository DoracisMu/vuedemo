<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>test1</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="margin-bottom:60px">
      <el-col :span="8">
        <span>name:</span><el-input v-model="searchValue" style="width:180px;margin-left:20px"/>
      </el-col>
      <el-col :span="4">
        <el-button @click="search">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table
    :data="tableData"
    border
    stripe
    :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'test1',
  components: {},
  data () {
    return {
      searchValue: '' ,
      tableData: []
    }
  },
  mounted () {
  console.log('mounted success')
  },
  methods: {
    search: function () {
      this.$axios({
        url: '/mock/getUserDataset',
        method: 'post',
        data: ''
      }).then((response) => {
        this.tableData = response.data.data
      }).catch((error) => {
        console.log(error) // 请求失败返回的数据
      })
    }
  },
  watch: {}
}
</script>

<style scoped>
</style>
