<template>
  <div class="about-content">
          <div class="img">
            <img src="../../assets/images/about.jpg" alt="About TheBlogat">
          </div>
          <div class="text">
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit a illum voluptates amet laborum architecto, quisquam commodi animi dolore nam mollitia enim minima quae obcaecati voluptatibus minus veritatis harum.
            </p>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam recusandae reiciendis distinctio impedit magnam voluptatum obcaecati vel necessitatibus, consequuntur repellat!.
            </p>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam recusandae reiciendis distinctio impedit magnam voluptatum obcaecati vel necessitatibus, consequuntur repellat!.
            </p>
          </div>
          
        </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="scss" scoped>
.about-content {
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  gap: 20px;
  min-height:calc(100vh - 188px);
  padding:20px 0;
  .img {
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>>