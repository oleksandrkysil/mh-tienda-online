<template>
  <div class="relative mx-auto">
    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px] opacity-80"
      src="images/hero-xmas.jpg"
      alt="Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl">Recién llegado.</h1>
      <h2 class="text-lg font-bold md:mb-4 lg:text-3xl" style="color: #d42027;">La colección de Año Nuevo</h2>
      <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
        <p style="color: white;">Nuestra última colección ya está aquí. Descubre las últimas tendencias y estilos para el nuevo año.</p>
      </div>
      <NuxtLink class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-800" style="background-color: #284083;" to="/products">Compra ahora</NuxtLink>
    </div>
  </div>
</template>
