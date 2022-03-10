<template>
  <div>
    <ul class="tabs">
      <li v-for="item in dataSource" :key=item.value
          :class="liClass(item)"  class="tabs-item"
          @click="select(item)">{{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type dataSourceItem = {
  text: string
  value: string
}

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: dataSourceItem[];
  @Prop(String)
  value!: string;
  @Prop(String)
  classPrefix !: string;

  liClass(item: dataSourceItem){
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    };
  }

  select(item: dataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      background-color: #333;
    }
  }
}
</style>