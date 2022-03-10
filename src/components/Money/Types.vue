<template>
  <div>
    <ul class="types">
      <!--  如果type= '-' 那么 class='selected' -->
      <li :class="{[classPrefix+'Item']:classPrefix,selected:value==='-'}"
          @click="selectType('-')">支出
      </li>
      <li :class="{[classPrefix+'Item']:classPrefix,selected:value==='+'}"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts" >
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Types extends Vue{
  @Prop(String) value!:string
  @Prop(String) classPrefix !:string
  selectType(type:string){
    if(type !== '-' && type !== '+'){
      throw new Error('type is unknown')
    }
    this.$emit('update:value',type)
  }

}
</script>

<style lang="scss" scoped>
.types {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
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


