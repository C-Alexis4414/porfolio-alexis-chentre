<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne()
})
</script>

<template>
    <!-- <p>{{ $route.params.slug }}</p> -->
    <main>
      <ContentDoc class="prose" />
    </main>
  </template>
  