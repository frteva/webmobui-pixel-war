<script setup>
import { ref, watch } from 'vue';
import { addColor, removeColor, actualColor } from '../stores/actualColor';

const zoom = ref(0.5);
const color = ref('#ff0000');

watch (color, (newValue, oldValue) => {
  console.log('new: ', newValue, 'old: ', oldValue);
  addColor({color: newValue});
  removeColor(oldValue);
})

const handleZoomIn = () => {
  if(zoom.value <= 1.9) {
    zoom.value += 0.1;
    console.log(zoom.value);
  }
}

const handleZoomOut = () => {
  if(zoom.value >= 0.3) {
    zoom.value -= 0.1;
    console.log(zoom.value);
  }
}


</script>

<template>

<input type="color" v-model="color"/>
<button @click="handleZoomIn">Zoom in</button>
<button @click="handleZoomOut">Zoom out</button>





</template>

<style scoped>

</style>
