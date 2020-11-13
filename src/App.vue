<template>
  <div id="app">
    <el-row>
      <banner />
    </el-row>
    <el-row >
      <el-col :span="3">
        <navigator style />
      </el-col>
      <el-col :span="21">
        <router-view style="margin: 10px 0 0 10px;width: calc(87.5% - 10px)" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import banner from "./components/layout/banner";
import navigator from "./components/layout/navigator";
export default {
  name: "App",
  components: {
    banner,
    navigator
  }
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
