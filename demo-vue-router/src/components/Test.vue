<!--动态路由-->
<template>
  <div class="test">
    <h1>动态路由</h1>
    <!-- 注意这里是route -->
    <p>Id: {{ $route.params.id }}</p>
    <p>Name: {{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>
