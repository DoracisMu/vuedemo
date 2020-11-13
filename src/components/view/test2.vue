<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>test2</el-breadcrumb-item>
    </el-breadcrumb>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'test2',
  components: {},
  data () {
    return {}
  },
  mounted () {},
  methods: {},
  watch: {}
}
</script>

<style scoped>
</style>
