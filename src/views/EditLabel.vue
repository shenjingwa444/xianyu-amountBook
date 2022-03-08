<template>
  <layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <FormItem field-name="备注" placeholder="请输入标签名"/>
    <Button>
      删除标签
    </Button>
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
  created(){
    const id = this.$route.params.id
    newTagModel.fetch()
    const tags = newTagModel.data
    const tag = tags.filter(tag => tag.id === id)[0]
    if(tag){
      console.log(tag);
    }else{
      this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>