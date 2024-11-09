<script setup lang="ts">
const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink to="/" class="menu-item">{{ $t('messages.general.home') }}<span></span></NuxtLink>
    <NuxtLink to="/products" class="menu-item">{{ $t('messages.general.allProducts') }}<span></span></NuxtLink>
    <NuxtLink to="/categories" class="menu-item">{{ $t('messages.shop.category', 2) }}<span></span></NuxtLink>
    <NuxtLink to="/contact" class="menu-item">{{ $t('messages.general.contact') }}<span></span></NuxtLink>
    <NuxtLink class="lg:hidden menu-item" :to="wishlistLink" :prefetch="false" >Lista de deseos<span></span></NuxtLink>
    <NuxtLink class="lg:hidden menu-item" to="/my-account" :prefetch="false">Mi cuenta<span></span></NuxtLink>
  </nav>
</template>

<style scoped>
  .menu-item {
    font-size: 22px;
    font-weight: 500;
    color: #284083;
    width: max-content;
    position: relative;
    overflow: hidden;
    transition: all 0.6s;
  }

  .menu-item span {
    position:absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #d42027;
    transform: translateX(-100%);
    transition: transform 1s;
  }

  .menu-item:hover span {
    transform: translateX(0);
  }


  @media (min-width: 1024px) { 
    .menu-item {
      font-size: 16px;
    }
  }

</style>
