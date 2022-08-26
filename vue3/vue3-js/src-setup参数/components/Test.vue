<template>
  <h1>{{Person.name}}</h1>
  <h1>{{Person.age}}</h1>
  <h1>{{msg}}</h1>
  <h1>{{school}}</h1>
  <button @click="test">测试自定义事件</button>
  <slot></slot>
  <slot name="a"></slot>
</template>

<script>
/**
 * setup 执行在 beforeCreate 之前且 this 为 undefined
 */
import { reactive } from 'vue';

export default {
  name: 'Test',
  props: ['msg', 'school'],
  emits: ['hello'],
  // beforeCreate() {
  //   console.log('---beforeCreate---', this);
  // },
  /**
   * setup 接收的参数
   * @param props 外部传入组件内的数据
   * @param context 上下文
   * context:
   *  attrs: 相当于 vue2 中的 $attrs
   *  emit: 触发自定义事件
   *  slots:
   */
  setup (props, context) {
    // console.log('---setup---', this)
    // console.log('---setup---', props)
    // console.log('---setup---', context)
    console.log('---setup---', context.slots);
    const Person = reactive({
      name: '张三',
      age: 18
    });

    const test = () => {
      console.log(123);
      context.emit('hello', props.msg);
    };

    return {
      Person,
      test
    };
  }
};
</script>

<style scoped>

</style>
