<template>
  <h2>当前鼠标的坐标：x:{{Point.x}}，y:{{Point.y}}</h2>
</template>

<script>
import usePoint from '@/hooks/usePoint';
export default {
  name: 'Test',
  setup () {
    const Point = usePoint();

    return {
      Point
    };
  }
};
</script>

<style scoped>

</style>
