<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">OK</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请在这里输入备注">
      </label>
    </div>
    <div class="tags">
      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss">
.layout-wrapper {
  //border:1px solid red;
}

.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  //flex-direction改变方向，再将html里面的元素前后调换位置，使得空隙在上面
  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background-color: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
    }
  }

  > .new {
    padding-top: 16px;

    button {
      display: block;
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

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

.numberPad {
  .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
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