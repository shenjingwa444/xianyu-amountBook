<template>
  <Layout class-prefix="layout">
    {{record }}
    <NumberPad :value.sync="record.amount"/>
    <Types :value.sync="record.type"/>
    <Notes :value='record.notes' @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import {Component} from 'vue-property-decorator';
// ts 声明类型
type Record = {
  //tags?:string[]  加问号之后，表示这个 Key 可以不要，有可能有，有可能没有
  tags:string[]
  type:string
  notes:string
  amount:number
}
@Component({
  components: {Notes, Types, NumberPad, Tags},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record:Record={
    tags:[],type:'-',notes:'',amount:0
  }
  onUpdateTags(value:string[]){
    this.record.tags = value
  }
  onUpdateNotes(value:string){
    this.record.notes = value
  }
  //当使用 .sync 时，value 会自动赋值给 record.type
  // onUpdateType(value:string){
  //   this.record.type = value
  // }
  // onUpdateAmount(value:string){
  //   this.record.amount = parseFloat(value)
  // }
}
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
