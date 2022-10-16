import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutPage from "../views/AboutPage.vue";
import BlogsPage from "../views/BlogsPage.vue";
import Blog from "../views/Blog.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title: "ElBlog | Home"
    }
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    meta:{
      title: "ElBlog | About"
    }
  },
  {
    path: "/blogs",
    name: "BlogsPage",
    component: BlogsPage,
    meta:{
      title: "ElBlog | Blogs"
    }
  },
  {
    path: "/blog/:id",
    name: "BlogPage",
    component: Blog,
    meta:{
      title: "ElBlog | Blog"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta:{
      title: "ElBlog | Not Found"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
