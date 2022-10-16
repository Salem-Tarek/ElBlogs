<template>
  <div class="blogs">
    <Alert />
    <Loading v-if="!AllBlogs.length"/>
    <paginate
      name="paginatedBlogs"
      :list="AllBlogs"
      :per="10"
      :containerClass="'pagination'"
      tag="div"
    >
      <transition-group name="fade-slide" mode="out-in">
        <div v-for="blog in paginated('paginatedBlogs')" :key="blog.id" class="blog">   
          <div class="title_views">
            <h3>
              <router-link :to="'/blog/' + blog.id" :title="blog.title"><span>#</span>{{ formatingTitleLenth(blog.title) }}</router-link>
            </h3>
            <span class="views" v-if="blog.views == 0">{{ blog.views }} <i class="fa fa-eye"></i></span>  
            <span class="views" v-else>{{ generateRandomNum()}} <i class="fa fa-eye"></i></span>  
          </div>
          <span> <i class="fa fa-clock"></i> {{ getTime_Date.date }} - {{ getTime_Date.time }}</span>
          <div class="content">
            <p class="lead">{{ blog.body }}</p>
            <h5>By: <span>{{ blog.author || 'Salem Tarek' }}</span></h5>
          </div>
          <div class="delete_edit" v-if="is_Signed_or_Admin">
            <i class="fa fa-pen" title="Edit" @click="getBlogData(blog)"></i>
            <i class="fa fa-trash" title="Delete" @click="deleteBlog(blog.id);"></i>  
          </div>
        </div>
      </transition-group>
    </paginate>
    <paginate-links
      for="paginatedBlogs"
      :async="true"
      :show-step-links="true"
      :step-links="{
        next: 'Next',
        prev: 'Prev'
      }"
      :classes="{
        'ul': ['pagination', 'd-flex','justify-content-center'],
        'ul > li': 'page-item',
        'ul > li > a': 'page-link',
      }"
      class="mx-auto"
    >
    </paginate-links>  
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Alert from "../Alert.vue"
import Loading from "./Loading.vue"

export default {
    name: 'TheBlogs',
    data(){
      return {
        paginate: ['paginatedBlogs']
      }
    },
    components:{
      Alert,
      Loading
    },
    computed: {
      ...mapGetters(['AllBlogs', 'isNewblog', 'blogWillUpdated', 'getUpdatedBlog', 'getIsBlogEdited']),
      is_Signed_or_Admin(){
        return true
      },
      getTime_Date(){
            let dateNow = new Date();
            let time = dateNow.toLocaleTimeString('en-Us',{hour: '2-digit', minute: '2-digit'});
            let date = dateNow.toLocaleDateString('en-GB');
            return {
                time,
                date
            }
        },
    },
    methods:{
      ...mapActions(["getBlogs", "deleteBlog", "updateBlogData", "editAlertType"]),
      generateRandomNum(){
        let randNum = Math.floor(Math.random() * 500);
        return randNum
      },
      getBlogData(blog){
        this.updateBlogData(blog);
          window.scrollBy({ 
          top: -5000, // This value for Going up to the image
          left: 0, 
          behavior: 'smooth' 
        });
      },
      formatingTitleLenth(title){
        if(title.length > 12){
          if(window.innerWidth > 800){
            return title
          }else {
            let formatedTitle = title.slice(0, 9);
            return `${formatedTitle}...`
          }
        }else {
          return title
        }
      } 
    },
    created(){
      this.getBlogs();
    }
}
</script>

<style lang="scss">
.fade-slide-enter, .fade-slide-leave-to {
  opacity:0;
  transform: translateX(-2em);
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.blogs {
  & > div:not(.theAlert) > span {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content:center;
    align-items: center;
  }
  .blog {
    padding: 15px;
    background-color: #e5e5e5;
    color:#253444;
    height:100%;
    position: relative;
    .title_views {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        margin-bottom:0;
        a {
          display: flex;
          text-decoration: none;
          color: #28ca71;
          span {
            opacity:0;
            transition:0.5s;
            color:#253444;
          }
        }
        &:hover a span {
          opacity:1
        }
      }
      span.views {
        user-select: none;
        color:#253444;
        i.fa-eye {
          color:#28ca71;
        }
      }
    }
    & > span {
      font-weight: bold;
      color:#777;
      font-size:12px;
      margin-bottom: 15px;
      display: inline-block;
      i.fa {
        color:#28ca71;
      }
    }
    .content {
      h5 {
        span {
          color:#28ca71;
        }
      }
      p {
        font-size: 1rem;
      }
    }
    .delete_edit {
      display: flex;
      justify-content: center;
      align-items:center;
      gap:10px;
      position:absolute;
      right:10px;
      bottom:10px;
      i.fa {
        color:#28ca71;
        cursor:pointer;
        transition:0.5s;
        &:hover {
          color:#253444;
        }
      }
    }
  }
  ul.paginate-links {
    margin-top: 20px;
    li {
      a {
        color:#253444;
        cursor: pointer;
        @media (max-width: 469px) {
          padding: 0.5rem 0.29rem;
        }
        &:hover:not(.active) {
          background-color: #28ca71;
          border:1px solid #28ca71;
        }
      }
      &.active {
        a {
          background-color: #28ca71;
          border:1px solid #28ca71;
          color:#253444;
          transition:0.5s;
        }
      }
    }
  }
}
</style>