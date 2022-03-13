<template>
  <div id="app">
    <router-view/>
    <hr/>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
  </div>
</template>
//App 的样式不能加 scope，否则就只能在这一个页面生效。
<style lang="scss">
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/reset.scss';
body{
  background-color: #f5f5f5;
}
#app {
  line-height: 1.5;
  font-size:16px;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  max-width: 500px;
  margin:0 auto;
}
</style>
<script>
export default {

}
</script>