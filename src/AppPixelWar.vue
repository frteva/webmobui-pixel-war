<script setup>
import { ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import Actions from './components/Actions.vue';
import PixelGrid from './components/PixelGrid.vue';


// fetch la grille de pixels
/* let url = 'https://im.chabloz.eu/data/gridWhite.json'
const { data: pixelList } = useFetchJson(url) */

</script>

<template>
  <theHeader>IM Pixel Wars</theHeader>
  <Actions/>
  <PixelGrid/>

</template>

<style scoped>

</style>
