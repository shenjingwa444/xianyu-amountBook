<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  //output = '0';  // 初始值由外部数据 prop() value 给定，不要自己写。
  @Prop(Number) readonly value!:number
  output = this.value.toString()
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;  //强制指定为 Button类型
    const input = button.textContent!;  //强制 input 不能为空，button如果为图片，图片没有textContent。
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return;
    }
    this.output += input;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0'
    }else{
      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = '0'
  }

  ok() {
    const output = parseFloat(this.output)
    this.$emit('update:value',output)
    this.$emit('submit',output)
    this.output = '0'
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.numberPad {
  .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    height:72px;
  }

  .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background-color: transparent;
      border: none;

      &.ok {
        float: right;
        height: 2*64px;
      }

      &.zero {
        width: 2*25%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background-color: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background-color: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background-color: darken($bg, 2*4%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background-color: darken($bg, 3*4%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background-color: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background-color: darken($bg, 5*4%);
      }

      &:nth-child(12) {
        background-color: darken($bg, 6*4%);
      }
    }
  }
}
</style>