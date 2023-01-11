<template>
  <Header />
  <div class="container">
    <div>Name: pdp</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
  <Footer />
</template>
<script setup>
  // import Header from "home/Header.vue"
  // import Footer from "home/Footer.vue"
  import { defineAsyncComponent } from "vue"
  const Header = defineAsyncComponent(() => import('home/Header'));
  const Footer   = defineAsyncComponent(() => import('home/Footer'));
</script>