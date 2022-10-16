<template>
  <div class="carousel">
        <carousel :autoplay="true" :nav="false" :margin="10" :items="1" :center="true" :dots="false" :autoplayHoverPause="true">
            <img src="../../assets/images/slider/slider1.jpg" alt="About TheBlogs">
            <img src="../../assets/images/slider/slider2.jpg" alt="About TheBlogs">
            <img src="../../assets/images/slider/slider3.jpg" alt="About TheBlogs">
        </carousel>
    </div>
</template>

<script>

import carousel from 'vue-owl-carousel';
export default {
    name: "TheCarousel",
    components:{
        carousel
    }
}
</script>

<style scoped>
.owl-carousel img {
    height: calc(100vh - 90px);
    max-width:100%;
    object-fit: cover;
}
</style>