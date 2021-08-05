<template>
    <div>
      <p class="props">$props和$attrs测试</p>
      <t3com1 :name="name" :age="age" :gender="gender" type="text"></t3com1>
    </div>
</template>

<script>
import t3com1 from './com/t3Com1'
export default {
  name: 'test3',
  components: {
    t3com1
  },
  data () {
    return {
      name: 'mujian',
      age: '18',
      gender: 'F'
    }
  }
}
</script>

<style scoped lang="scss">
div{
  p.props{
    background-color: #42b983;
  }
}
</style>
