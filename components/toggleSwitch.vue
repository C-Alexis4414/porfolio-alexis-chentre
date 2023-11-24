<script setup lang="ts">
import { SunIcon } from '@heroicons/vue/24/solid';
import {  useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue-demi'

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: 'dark contrast',
    cafe: 'cafe',
  },
})

const { state, next } = useCycleList(['dark', 'light', 'cafe', 'contrast', 'auto'], { initialValue: mode })

watchEffect(() => mode.value = state.value as any)
</script>

<template>

    <button @click="next()">
      <span v-if="state === 'dark'"><SunIcon class="h-6 w-6 text-blue-500"/></span>
      <i v-if="state === 'light'" i-carbon-sun inline-block align-middle class="align-middle" />
      <i v-if="state === 'cafe'" i-carbon-cafe inline-block align-middle class="align-middle" />
      <i v-if="state === 'contrast'" i-carbon-contrast inline-block align-middle class="align-middle" />
      <i v-if="state === 'auto'" i-carbon-laptop inline-block align-middle class="align-middle" />

      <span class="ml-2 capitalize">{{ state }}</span>
    </button>

  <span class="p-4 opacity-50">← Click to change the color mode</span>
</template>

<style>
html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

html.contrast {
  filter: contrast(1.5);
}

html.dark {
  color-scheme: dark;
}
</style>