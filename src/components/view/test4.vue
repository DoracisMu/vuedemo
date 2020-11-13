<template>
    <div>
      <el-button @click="save" id="saveBtn">保存response</el-button>
    </div>
</template>

<script>
export default {
  name: 'test4',
  methods: {
    save () {
      this.$axios({
        method: 'post',
        url: '/api/getText',
        data: ''
      }).then((response) => { // 这里使用了ES6的语法
        console.log(response) // 请求成功返回的数据
        let result = response.data.data
        let fileName = '测试1106.txt'
        const url = window.URL.createObjectURL(
          new Blob([result], {type: 'application/pdf'})
        )
        const link = document.createElement('a')

        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', decodeURI(fileName))
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }).catch((error) => {
        console.log(error) // 请求失败返回的数据
      })
    }
  }
}
</script>

<style scoped>

</style>
