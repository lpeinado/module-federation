<template>
  <div class="home-header">
    This is the HOME header component and count..
    <span>{{ count }}</span>
  </div>
</template>

<script>
export default {
  computed:{
    count(){
      return this.$store?.state?.count ?? 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  background-color:red;
  height: 200px;
  text-align:center;
  line-height: 200px;
}
</style>