<template>
  <div class="goods">
    <h1>Goods</h1>
    <br>
    <!-- 注意这里是route -->
    <p>{{ $route.query.goodsId }}</p>
  </div>
</template>

<script>
export default {
  name: 'Goods'
}
</script>

<style scoped>

</style>