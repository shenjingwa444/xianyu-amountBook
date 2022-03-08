<template>
  <Layout class-prefix="layout">
    {{recordList}}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
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
import {Component, Watch} from 'vue-property-decorator';

// const version = window.localStorage.getItem('version')
// const recordList:Record[] =JSON.parse(window.localStorage.getItem('recordList') || '[]')
// if(version === '0.0.1'){
//   //数据库升级，数据迁移
//   recordList.forEach(record =>{
//     record.createAt = new Date(2020,1,1)
//   })
//   //保留数据
//   window.localStorage.setItem('recordList',JSON.stringify(recordList))
// }else if(version === '0.0.2'){
//   //迁移数据
// }
// //升级版本
// window.localStorage.setItem('version','0.0.2')


// ts 声明类型
type Record = {
  //tags?:string[]  加问号之后，表示这个 Key 可以不要，有可能有，有可能没有
  tags:string[]
  type:string
  notes:string
  amount:number
  createAt?:Date
}
@Component({
  components: {Notes, Types, NumberPad, Tags},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record:Record={
    tags:[],type:'_',notes:'',amount:0
  }
  recordList:Record[] =JSON.parse(window.localStorage.getItem('recordList') || '[]')
  onUpdateTags(value:string[]){
    this.record.tags = value
  }
  onUpdateNotes(value:string){
    this.record.notes = value
  }
  saveRecord(){
    //record2 深拷贝 record ，record 是对象，传值，不能直接Push
    const record2:Record = JSON.parse(JSON.stringify(this.record))
    record2.createAt = new Date()
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
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
