<template>
  <div class="wrapper">
    <Scene viewId="CesiumViewContainer"/>
  </div>
</template>
<script setup lang="ts">
import Scene from './components/Scene.vue'
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
