<template>
  <div class="about">
    <div class="container">
      <h1 class="text-center text-uppercase">About Us</h1>
      <AboutUs />
    </div>
  </div>
</template>

<script>
import AboutUs from '../components/aboutPage/AboutUs.vue';
export default {
  name: "About",
  components:{
    AboutUs
  } 
}
</script>

<style lang="scss" scoped>
.about {
  margin-top: 10px;
  h1 {
    color:#28ca71
  }
}

</style>
