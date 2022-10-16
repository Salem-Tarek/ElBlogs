<template>
  <div class="blogsPage">
    <div class="container">
      <Alert />
      <AddBlog v-if="is_Signed_or_Admin"/>
      <h1 class="text-center text-uppercase">blogs</h1>
      <TheBlogs />
    </div>
  </div>
</template>

<script>

import TheBlogs from '../components/blogsPage/TheBlogs.vue'
import AddBlog from '../components/blogsPage/AddBlog.vue'
import Alert from '../components/Alert.vue'

export default {
    name: "BlogsPage",
    components: {
        TheBlogs,
        AddBlog,
        Alert
    },
    computed: {
      is_Signed_or_Admin(){
        return true
      }
    },
}
</script>

<style lang="scss" scoped>
.blogsPage {
  padding:20px 0;
  h1 {
    color: #28ca71;
    letter-spacing: 3px;
  }
}

</style>