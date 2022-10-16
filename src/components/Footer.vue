<template>
  <footer>
    <p class="lead text-center">
        Copyright &copy; Reserved 2022 By <a href="https://salem-tarek.netlify.app/" target="_blank"><span class="text-danger">SalemTarek</span></a>
    </p>
  </footer>   
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
p {
    background-color:#253444;
    padding:10px 0;
    color:#28ca71;
    margin-bottom:0;
    @media(max-width: 400px){
      font-size: 0.9rem;
    }
    a {
      text-decoration: none;
    }
}
</style>