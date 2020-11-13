<template>
  <div>
    <p>这是孙子com2</p>
    <p>name: {{ $attrs['name'] }}</p>
    <p>age: {{ $attrs['age'] }}</p>
    <!--<p>gender: {{ $attrs['gender'] }}</p>-->
    <!--<p>type: {{ $attrs['type'] }}</p>-->
    <el-button @click="handleClick">孙console</el-button>
  </div>

</template>

<script>
export default {
  name: 't3Com2',
  // props: ['name','age'],
  mounted () {
    console.log('孙$props: ', this.$props)
    console.log('孙$attrs: ', this.$attrs)
  },
  methods: {
    handleClick () {
      console.log('孙$props: ', this.$props)
      console.log('孙$attrs: ', this.$attrs)
    }
  }
}
</script>

<style scoped>

</style>
