<template>
  <div class="home">
    <TheCarousel />
    <NewAddedBlogs />
    <Team />
  </div>
</template>

<script>
import TheCarousel from '../components/homePage/TheCarousel.vue';
import NewAddedBlogs from '../components/homePage/NewAddedBlogs.vue';
import Team from '../components/homePage/Team.vue';
// @ is an alias to /src
export default {
  name: "Home",
  components:{
    TheCarousel,
    NewAddedBlogs,
    Team
  },
};
</script>

<style lang="scss" scoped>

</style>
