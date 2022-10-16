<template>
  <div class="notFound text-uppercase text-center">
    <h1>Error <br /><span>404</span></h1>
    <h2 class="h1">Page Not Found</h2>
    <router-link to="/" class="btn">Back To <span>Home Page</span></router-link>
  </div>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style lang="scss" scoped>
.notFound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 20px;
    width: 100vw;
    height: calc(100vh - 114px);
    color:#253444;
    h1, .h1 {
        font-size: 80px;
        span {
            color: #28ca71;
        }
    }
    a{
        background-color: #28ca71;
        color:#253444;
        text-decoration: none;
        transition:0.3s;
        &:hover {
            background-color: #253444;
            color:#28ca71;
        }
    }
}
</style>