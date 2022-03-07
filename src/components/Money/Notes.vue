<template>
  <div>
    {{value}}
    <label class="notes">
      <span class="name">备注</span>
<!--         :value="value"
             @input="onInput"
             @input="value=$event.target.value"-->
      <input type="text"
             v-model="value"
             placeholder="请在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
  // onInput(event: KeyboardEvent) {
  //   const input = event.target as HTMLButtonElement;
  //   this.value = input.value;
  // }
}
</script>

<style lang="scss" scoped>
.notes {
  background-color: #f5f5f5;
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
    height: 64px;
    flex-grow: 1;
    padding-right: 16px;
  }
}
</style>