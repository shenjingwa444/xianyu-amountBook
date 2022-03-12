<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"
    />
    <div class="notes">
      <FormItem field-name="备注"
                :value.sync = 'record.notes'
                placeholder="请在这里输入备注"
      />
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

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
  components: {Tabs, FormItem, NumberPad, Tags},
})
export default class Money extends Vue {
  tags = this.$store.state.tagList;
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;

  }

  record: RecordItem = {
    tags: [], type: '_', notes: '', amount: 0
  };

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.record.notes = '';
    }
  }
}
</script>

<style lang="scss" scoped>

::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
