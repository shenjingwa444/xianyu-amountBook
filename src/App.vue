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

<style lang="scss">
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/reset.scss';
body{
}
#app {
  line-height: 1.5;
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>
<script>
export default {

}
</script>