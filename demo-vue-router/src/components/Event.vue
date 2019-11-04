<template>
  <div class="event">
    <div @click="goGoods">
      跳转到商品详情页面
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',
  methods: {
    goGoods() {
      // 注意这里是router
      this.$router.push('/goods')
    }
  }
}
</script>

<style scoped>

</style>