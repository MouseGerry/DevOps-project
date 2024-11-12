<script setup lang="ts">
import { ref } from 'vue';
import useGetPepega from './hooks/useGetPepega';

const pepegaImage = ref(null);

const loadPepegaImage = async () => {
  // @ts-ignore
  pepegaImage.value = await useGetPepega();
  setTimeout(() => {
    unloadPepegaImage()
  }, 2000);
};

const unloadPepegaImage = () => {
  // @ts-ignore
  pepegaImage.value = null
}
</script>

<template>
  <div>

    <a v-if="pepegaImage" :href="pepegaImage" target="_blank">
      <img :src="pepegaImage" class="logo" alt="Pepega" />
    </a>
    <button v-else @click="loadPepegaImage">Load Image</button>
  </div>
</template>
