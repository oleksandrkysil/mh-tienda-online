<template>
  <div class="relative mx-auto before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black before:opacity-10">
    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
      src="https://martinezhermanos.com/wp-content/uploads/2021/12/retail-martinez-hermanos-slider.jpg"
      alt="Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="container absolute inset-0 flex flex-col items-end justify-end bg-gradient-to-l from-gray-200 md:bg-none p-12">
      <h1 style="color: #284083;" class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl text-white p-1 bg-white">Recién llegado.</h1>
      <h2 style="color: #d42027;" class="text-lg font-bold md:mb-4 lg:text-3xl text-white p-1 bg-white">La venta de Año Nuevo</h2>
      <!-- <div class="max-w-sm mb-8 text-xl text-right lg:max-w-md text-balance text-white font-medium p-1">
        <p>Nuestra última colección ya está aquí. Descubre las últimas tendencias y estilos para el nuevo año.</p>
      </div> -->
      <NuxtLink class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl" to="/products">Compra ahora</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  a {
    text-transform: uppercase;
    color: #284083;
    background-color: white;
    border: 2px solid white;
    transition: 0.6s;
  }

  a:hover {
    color: #d42027;
    border: 2px solid #284083;
  }
</style>
