<template>
  <layout>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click="goback"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon">.</span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name"
                @update:value="update"
                field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">
        删除标签
      </Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

@Component({
  components: {Button, FormItem},
})
export default class EditLabel extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  }

  created() {
    //从 url 的 id 获得tag, 赋值到 data.tag 然后展示在页面上；
    const id = this.$route.params.id;
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag', id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.tag) {
      this.$store.commit('updateTag', {id: this.tag.id, name});
    }
  }

  remove() {
    if (this.tag) {
      this.$store.commit('removeTag', this.tag.id);
    }
  }

  goback() {
    this.$router.back();
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

  .rightIcon {
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