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
import x from '@/assets/icons/labels.svg';

console.log(x);
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>

</style>