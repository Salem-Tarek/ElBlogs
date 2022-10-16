<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">  
      <router-view />
    </transition>  
    <Footer />
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  overflow:hidden;
  max-width:100vw;
} 

.fade-enter, .fade-leave-to {
  opacity:0;
  transform: translateY(2em);
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
</style>
