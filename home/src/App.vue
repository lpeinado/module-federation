<template>
  <Header></Header>
  <div class="container">
    <h6>This is my HOME page :-)</h6>
    <h7>This is my counter:{{ $store.state.count }} </h7>
    <button @click="$store.dispatch('increment')">Add one!</button>
  </div>
  <Footer></Footer>
</template>
<script setup>
  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"
</script>