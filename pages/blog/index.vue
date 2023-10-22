<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)</script>

<template>
    <h1 class="text-3xl my-8">Blog Posts</h1>
  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ornare ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at libero eget arcu.
  
    <section class="grid md:grid-cols-3 mt-8 gap-10">
      <Post :posts="posts" />
    </section>
  </template>