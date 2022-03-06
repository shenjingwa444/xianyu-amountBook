<template>
  <div>
    <Icon name="money_bag_fill"/>
    <router-link to="/money">记账</router-link>
    |
    <Icon name="labels"/>
    <router-link to="/labels">标签</router-link>
    |
    <Icon name="统计"/>
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Icons.vue';

export default {
  components: {Icon}
};
</script>

<style lang="scss" scoped>

</style>