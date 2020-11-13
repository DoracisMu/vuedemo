<template>
  <div>
    <el-row>
      <el-col :span="4">
        username:
      </el-col>
      <el-col :span="4">
        <el-input v-model="username" class="username-input"></el-input>
      </el-col>
      <el-col :span="4">
        password:
      </el-col>
      <el-col :span="4">
        <el-input v-model="password" type="password" class="password-input" @keyup.enter.native="handleLogin"></el-input>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="4">
        <el-button @click="handleLogin" type="primary">login</el-button>
      </el-col>

    </el-row>
  </div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin () {
      if (this.username == 'admin' && this.password == 'admin') {
        this.$router.push('/test1');
      }
    }
  }
};
</script>

<style scoped>

</style>
