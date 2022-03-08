<template>
  <layout>
    <div class="navBar">
      <Icon name="left" class="leftIcon"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon">.</span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" field-name="备注" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button>
        删除标签
      </Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import newTagModel from '@/models/newTagModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  tag?:{id:string,name:string} = undefined
  created() {
    const id = this.$route.params.id;
    newTagModel.fetch();
    const tags = newTagModel.data;
    const tag = tags.filter(tag => tag.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  padding: 12px 16px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .title {

  }

  .leftIcon {
    width: 24px;
    height: 24px;
  }
  .rightIcon{
    width: 24px;
    height: 24px;
  }
}

.form-wrapper {
  background-color: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}

</style>