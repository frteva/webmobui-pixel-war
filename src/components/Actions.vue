<script setup>
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';
import { addColor, removeColor, actualColor } from '../stores/actualColor';

const props = defineProps({
    color: {
        type: String,
    },
    zoom: {
        type: Number,
    }
});

const emits = defineEmits(['update-color', 'update-zoom']);

const updateColor = (newColor) => {
  emits('update-color', newColor);
};

const updateZoom = (newZoom) => {
  emits('update-zoom', newZoom);
};

const handleZoomIn = () => {
  console.log(props.zoom);
  if(props.zoom <= 1.9) {
    props.zoom += 0.1;
    updateZoom(props.zoom);   
  }
}

const handleZoomOut = () => {
  console.log(props.zoom);
  if(props.zoom >= 0.3) {
    props.zoom -= 0.1;
    updateZoom(props.zoom);
  }
}


</script>

<template>

<input type="color" :value="props.color" @input="updateColor($event.target.value)" />
<!-- <input type="color" v-model="color"/> -->
<button @click="handleZoomIn">Zoom in</button>
<button @click="handleZoomOut">Zoom out</button>

</template>

<style scoped>

</style>