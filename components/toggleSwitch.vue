<script setup lang="ts">
import {  useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue-demi'
import { Icon } from '@iconify/vue';

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

    <button @click="next()" class="w-52 h-7 bg-neutral-500 rounded-md flex items-center justify-center">
        <span v-if="state === 'dark'"><Icon icon="pixelarticons:moon" class="h-3 w-3 fill-white bg-contain bg-center"/></span>
        <span v-if="state === 'light'"><Icon icon="pixelarticons:sun" class="h-3 w-3 fill-white  bg-contain bg-center"/></span>
        <span v-if="state === 'cafe'"><Icon icon="tabler:coffee" class="h-3 w-3 fill-white  bg-contain bg-center"/></span>
        <span v-if="state === 'contrast'"><Icon icon="icon-park-solid:contrast" class="h-3 w-3 fill-white  bg-contain bg-center"/></span>
        <span v-if="state === 'auto'"><Icon icon="clarity:computer-line" class="h-3 w-3 fill-white  bg-contain bg-center"/></span>

        <span class="text-xs ml-2 capitalize bg-contain bg-center">{{ state }}</span>
    </button>

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