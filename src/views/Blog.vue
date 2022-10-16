<template>
  <transition name="fade">
    <div class="container">
      <div class="blogWrapper">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="'/blogs'">Blogs</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ blog.title }}</li>
          </ol>
        </nav>
        <div class="blog">   
          <div class="title_views">
            <h3>{{ blog.title }}</h3>
            <span>325 <i class="fa fa-eye"></i></span>  
          </div>
          <span> <i class="fa fa-clock"></i> 01/07/1997 - 08:20 pm</span>
          <div class="content">
            <p class="lead">
              {{ blog.body }}
            </p>
            <h5>By: <span>{{ blog.author || "Salem Tarek" }}</span></h5>
          </div>
          <hr>
          <Comments />
          <AddComment />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import axios from "axios"
import Comments from '../components/blogsPage/Comments.vue'
import AddComment from "../components/blogsPage/AddComment.vue"
export default {
    name: "Blog",
    data(){
      return {
        blog: {},
      }
    },
    components:{
      Comments,
      AddComment
    },
    created(){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        .then(res => this.blog = res.data)
        .catch(err => console.log(err));
    }
}
</script>

<style lang="scss" scoped>
.blogWrapper{
  .breadcrumb-item a {
    color: #28ca71;
    font-weight:bold;
    &:hover {
      color:#253444;
    }
  }
.blog {
    padding: 15px;
    background-color: #e5e5e5;
    color:#253444;
    margin-bottom:10px;
    min-height:calc(100vh - 120px);
    .title_views {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
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
        font-size: 1.1rem;
        margin-left:15px;
      }
    }
    .comments {
      h4 {
        border-bottom: 2px solid #28ca71;
        width: fit-content;
      }
      .comment {
        border:1px solid #253444;
        padding:5px;
        margin-bottom:10px;
        .img_sender {
          display: flex;
          align-items:center;
          gap:10px;
          .img {
            border:1px solid #253444;
            padding:5px 3px;
            img {
              width:100%;
              overflow: hidden;
            }
          }
          h5 {
            color: #28ca71;
          }
        }
        p {
          font-size: 1rem;
          margin-left:15px;
        }
      }
    }
  }  
}

</style>