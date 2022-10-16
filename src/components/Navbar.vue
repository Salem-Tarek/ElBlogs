<template>
    <div id="nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <h2 class="text-uppercase">ElBlog</h2>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blogs">Blogs</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style lang="scss" scoped>
#nav {
    background-color: #253444;
    nav {
      padding: 0.5rem 0;
      .navbar-brand {
        color:#28ca71
      }
      .navbar-toggler {
        border: 1px solid #28ca71;
        i.fa {
          font-size: 1.5rem;
          color: #28ca71;
        }
      }
    }
    .navbar-nav {
      .nav-item {
          margin:10px 15px;
          letter-spacing: 2px;
          a {
            font-weight: bold;
            color: #28ca71;
            text-decoration: none;
            transition: 0.5s;
            border-bottom: 2px solid transparent; 
            &.router-link-exact-active, &:hover {
                border-bottom: 2px solid #28ca71
            }
        }
      }
    }
}
</style>