<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注" @update:value="onUpdateNotes"
                placeholder="请在这里输入备注"
      />
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import {Component} from 'vue-property-decorator';
//import oldStore from '@/store/index2';
import store from '@/store/index';
//const recordModel = require('@/views/recordModel.ts').default;
//const {recordModel} = require('@/views/recordModel.js');

// const version = window.localStorage.getItem('version')
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

@Component({
  components: {FormItem, Types, NumberPad, Tags},
  computed: {
    recordList() {
      return store.state.recordList;
    },
  }
})
export default class Money extends Vue {
  //TODO
  //tags = oldStore.tagList;

  record: RecordItem = {
    tags: [], type: '_', notes: '', amount: 0
  };
  beforeCreate(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
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

.notes {
  padding: 12px 0;
}
</style>
