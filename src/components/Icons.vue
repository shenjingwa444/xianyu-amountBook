<template>
  <svg class="icon">
    <use v-bind:xlink:href="'#'+name"/>
  </svg>
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
  //props的[] 的值要加引号
  props: ['name'],
  name: 'Icon'
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}
</style>