<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height: calc(100vh - 61px)"
    >
      <el-menu-item v-for="(item, index) in this.$store.menuList" :index="index" @click="jumpTo(item)" :id="item" :key="item">
        test{{ index }}: {{ item }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navigator",
  components: {},
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jumpTo: function(params) {
      this.$router.push(params);
    }
  },
  watch: {}
};
</script>

<style scoped>
.width200 {
  width: 200px;
}
.width80 {
  width: 80px;
}
</style>
