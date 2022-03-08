<template>
  <div>
    <ul class="types">
      <!--  如果type= '-' 那么 class='selected' -->
      <li :class="value === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts" >
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Types extends Vue{
  //@Prop(Number) xxx: number | undefined;
  //@props(Number) xxx : number = 0  给默认值；
  //因为给的 0 默认为 number ，所以可简写为 @props(Number) xxx = 0;
  //Number 告诉 Vue 运行时检查类型是否为 number;
  //xxx 属性名；
  //右边的 number | number 告诉 TS 编译时检查 xxx 的类型，只写 number 不行，必须给个初始值；
  @Prop() value!:string
  selectType(type:string){
    if(type !== '-' && type !== '+'){
      throw new Error('type is unknown')
    }
    this.$emit('update:value',type)
  }

  // mounted(){
  //   //console.log(this.xxx.yyy())
  //   if(this.xxx === undefined){  //声明时类型可以为 undefined，使用时必须判断是否为 undefined;
  //     console.log('undefined');
  //   }else{
  //     return
  //   }
  // }
}
</script>
<!--<script lang="js">-->
<!--export default {-->
<!--  props: ["xxx"],-->
<!--  name: "Types",-->
<!--  data() {-->
<!--    return {-->
<!--      type: "-"  //'-' 表示支出，'+' 表示收入-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    console.log(this.xxx)-->
<!--  },-->
<!--  methods: {-->
<!--    selectType(type) {-->
<!--      if (type !== "-" && type !== "+") {  //type 只能是'-'或'+'中的一个-->
<!--        throw new Error("type is zzz")-->
<!--      }-->
<!--      this.type = type-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style lang="scss" scoped>
.types {
  background-color: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      background-color: #333;
    }
  }
}
</style>


