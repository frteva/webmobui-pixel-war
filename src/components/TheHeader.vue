<script setup>

</script>

<template>
  <header>
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  h1 {
    margin: 0;
  }
</style>