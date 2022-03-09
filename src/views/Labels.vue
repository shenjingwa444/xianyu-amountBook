<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id"
                   :to=" `/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag"
        >新建标签
      </Button>
    </div>
  </Layout>
</template>
<!--  @click.native = "createTag "   Button可直接触发原生 click 事件，不需要 Button.vue 的$emit()-->
<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import newTagModel from '@/models/newTagModel.ts';
import Button from '@/components/Button.vue';

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  tags = window.tagList

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
     const message = newTagModel.create(name);
     if(message === 'duplicated'){
       window.alert('标签名重复了')
     }else if(message === 'success'){
       window.alert('添加成功')
     }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: white;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background-color: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>