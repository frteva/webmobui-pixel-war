<script setup>
import { ref, watch } from 'vue';
import TheHeader from './components/TheHeader.vue';
import Actions from './components/Actions.vue';
import PixelGrid from './components/PixelGrid.vue';

// instancier les variables reactives
const color = ref('#ff0000');
const zoom = ref(0.5);

watch (color, (newValue) => {
  console.log('new: ', newValue);
  addColor({color: newValue});
  removeColor(oldValue);
})

watch (zoom, (newValue) => {
  console.log('new: ', newValue);
})


// fetch la grille de pixels
/* let url = 'https://im.chabloz.eu/data/gridWhite.json'
const { data: pixelList } = useFetchJson(url) */

const fetchPixelGrid = async () => {
  const response = await fetch('https://im.chabloz.eu/pixels/grid/');
  if (!response.ok) {
    throw new Error('Failed to fetch pixel grid')
  }
  const resp = await response.json()
  if (resp.status === 'error') {
    throw new Error(resp.msg)
  }
  return resp
};

fetchPixelGrid().then((data) => {
  console.log(data)
});



</script>

<template>
  <theHeader>IM Pixel Wars</theHeader>
  <!-- <Actions /> -->
  <Actions :color="color" :zoom="zoom" @update-color="color = $event" @update-zoom="zoom = $event" />
  <PixelGrid/>

</template>

<style scoped>

</style>
