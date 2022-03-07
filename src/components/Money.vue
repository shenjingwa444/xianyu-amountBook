<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types :xxx="55"/>
    <Notes/>
    <Tags :data-source.sync="tags"/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';

export default {
  name: 'Money',
  components: {Notes, Types, NumberPad, Tags},
  data(){
    return{
      tags:['衣','食','住','行']
    }
  }
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
