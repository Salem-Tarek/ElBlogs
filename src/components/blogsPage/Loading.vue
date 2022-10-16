<template>
  <div class="loading">
    <div class="spinner-border text-dark" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <h3>Loading...</h3>
  </div>
</template>

<script>
export default {
    name: "Loading"
}
</script>

<style scoped>
.loading {
    display: flex;
    place-content:center;
    gap:10px;
    margin-bottom:20px;
}
</style>