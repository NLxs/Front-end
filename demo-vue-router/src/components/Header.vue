<template>
  <div class="header">
    <h1>Header</h1>
    <br>
    <!-- 嵌套路由 -->
    <router-link to="/header/title1">title1</router-link> |
    <router-link to="/header/title2">title2</router-link> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  a {
    font-weight: bold;
    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
</style>