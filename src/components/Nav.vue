<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money_bag_fill" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels" />
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="统计" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name:'Nav'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;

  > .item {
    width: 33.3333%;
    padding: 2px 0;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected{
    color:$color-highlight;
  }
}
</style>