<template>
  <div>
    <label class="formItem">
      <span class="name">{{fieldName}}</span>
<!--         :value="value"
             @input="onInput"
             @input="value=$event.target.value"-->
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch,} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default:''}) readonly value!:string;
  @Prop({required:true}) fieldName!:string
  @Prop() placeholder?:string
  //@Watch('value')  input 的值一旦被用户变化，就会触发 @update:value 事件，所以没必要加 watch.
  onValueChanged(value: string) {
    this.$emit('update:value',value)
  }
  // onInput(event: KeyboardEvent) {
  //   const input = event.target as HTMLButtonElement;
  //   this.value = input.value;
  // }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    background-color: transparent;
    border: none;
    flex-grow: 1;
    padding-right: 16px;
    height:40px;
  }
}
</style>