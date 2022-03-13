<template>
  <div>
    <label class="formItem">
      <span class="name">{{ fieldName }}</span>
      <template v-if="type === 'date'">
        <input :type="type || 'text'"
            :value="x(value)"
            @input="onValueChanged($event.target.value)"
            :placeholder="placeholder">
      </template>
      <template v-else>
        <input :type="type || 'text'"
               :value="value"
               @input="onValueChanged($event.target.value)"
               :placeholder="placeholder">
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch,} from 'vue-property-decorator';
import dayjs from 'dayjs';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;
  @Prop(String) type?: string;

  //@Watch('value')  input 的值一旦被用户变化，就会触发 @update:value 事件，所以没必要加 watch.
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

  x(isoString: string) {
    return dayjs(isoString).format('YYYY-MM-DD');
  }
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
    height: 40px;
  }
}
</style>