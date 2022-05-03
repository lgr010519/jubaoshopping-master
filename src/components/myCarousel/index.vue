<template>
  <el-carousel :height="height">
    <el-carousel-item v-for="carousel in list" :key="carousel.id">
      <img :src="carousel.imgUrl">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'myCarousel',
  props: ['list', 'height'],
}
</script>

<style>

</style>
