<script setup lang="ts">
const { siteName } = useAppConfig();
const runtimeConfig = useRuntimeConfig();
const img = useImage();

const logoUrl = runtimeConfig?.public?.LOGO ? img(runtimeConfig?.public?.LOGO) : null;
const faviconUrl = 'https://martinezhermanos.com/wp-content/uploads/2021/10/martinez-hermanos-logo.png';
</script>

<template>
  <NuxtLink to="/">
    <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="object-contain h-10" />
    <div v-else class="flex items-center gap-2 text-lg font-bold mr-1">
      <img :src="faviconUrl" alt="Logo" width="32" height="32" />
      <span class="text-base whitespace-nowrap">{{ siteName }}</span>
    </div>
  </NuxtLink>
</template>
