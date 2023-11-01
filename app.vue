<template>
  <div class="flex flex-col min-h-screen">
    <siteheader />
    <ToggleSwitch />
    <main class="mx-auto max-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <sitefooter />
  </div>
</template>