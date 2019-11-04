<!--
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/foo">Go Foo</router-link> |
      <router-link to="/bar">Go Bar</router-link> |
      <router-link to="/test/1/name/user1">Go test</router-link> |
      <span @click="goGoods">商品详情</span> |
      <span @click="goGoods">商品详情</span> |
      <router-link :to="{name: 'goods'}">路由命名方式跳转</router-link> | 
      <router-link to="/view">Go View</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
-->

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <router-view name="body1"></router-view>
    <router-view name="body1"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    /*goGoods() {
      // this.$router.push('/goods')

      // 编程式路由携带参数跳转不需要在路由文件中补全路径
      // this.$router.push({
      //   path: '/goods?goodsId=111'
      // })

      this.$router.push({
        path: '/goods',
        query: {
          goodsId: 222
        }
      })
    }*/
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
