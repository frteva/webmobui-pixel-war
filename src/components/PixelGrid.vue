<script setup>
import { ref } from 'vue';
import grillejson from '../stores/grille';

// fetch la grille de pixels
/* let url = 'https://im.chabloz.eu/data/gridWhite.json'

const fetchPixels = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const grille = [];
fetchPixels().then((data) => {
  data.forEach(element => {
    grille.push(element);
  });
});

// instancier les variables reactives
const pixelList = ref(grille);
console.log(pixelList.value); */



const pixelList = ref(grillejson);
console.log(pixelList.value);

const PIXELSIZE = 20;

handleClick = (event) => {
  const color = '#ff0000';
  event.target.style.backgroundColor = color;
}


</script>

<template>
  <div class="pixel-grid">
    <tr v-for="row in pixelList">
      <td @click="handleClick" class="pixel" v-for="pixel in row" :style="{backgroundColor: pixel.color, width: PIXELSIZE + 'px', height: PIXELSIZE + 'px'}"></td>
    </tr>
  </div>
</template>

<style scoped>
 .pixel {
  border: 0.5px solid black;
 }
</style>
