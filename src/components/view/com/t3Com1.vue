<template>
  <div>
    <p>这是儿子com1</p>
    <p> name: {{ $props['name']}}</p>
    <p> age: {{age}}</p>
    <!--<p> gender: {{gender}}</p>-->
    <!--<el-button @click="handleClick">console</el-button>-->
    <hr>
    <t3com2  v-bind="$attrs"></t3com2>
  </div>

</template>

<script>
import t3com2 from './t3Com2'
export default {
  name: 't3com1',
  props: ['name', 'age'],
  components: {
    t3com2
  },
  mounted () {
    // console.log('儿$props: ', this.$props)
    // console.log('儿$attrs: ', this.$attrs)
  },
  methods: {
    handleClick () {
      console.log('儿$props: ', this.$props)
      console.log('儿$attrs: ', this.$attrs)
    }
  }
}
</script>

<style scoped>

</style>
