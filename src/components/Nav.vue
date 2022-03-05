<template>
  <div>
    <svg>
      <use xlink:href="#labels"/>
      <router-link to="/money">记账</router-link>
    </svg>
    <router-link to="/labels">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
//将icons里面的svg文件全部引入到body里面
//__WebpackModuleApi 报错：undefined ，解决方法：在 eslintrc.js 加:
// "globals":{
//   "__WebpackModuleApi":"writable"
// },
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));//使用require
} catch (error) {
  console.log(error);
}
export default {
  name: 'Icon'
};
</script>

<style lang="scss" scoped>

</style>