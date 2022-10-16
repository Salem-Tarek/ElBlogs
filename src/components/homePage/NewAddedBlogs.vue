<template>
  <div class="container">
        <div class="blogs">
            <h3 class="text-center">New Added Blogs</h3>
            <div class="blogs-wrapper">
                <div v-for="blog in New2AddedBlogs" :key="blog.id" class="blog">   
                    <div class="title">
                        <h5>
                            <router-link :to="'/blog/' + blog.id"><span>#</span>{{ blog.title }}</router-link>
                        </h5>
                        <span>{{ blog.views || 300}} <i class="fa fa-eye"></i></span>  
                    </div>
                    <span> <i class="fa fa-clock"></i> {{ getTime_Date.date }} - {{ getTime_Date.time }}</span>
                    <div class="content">
                        <p class="lead">{{ blog.body }}</p>
                        <h5>By: <span>{{ blog.author || 'Salem Tarek' }}</span></h5>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "NewAddedBlogs",
      computed:{
    ...mapGetters(["New2AddedBlogs"]),
    getTime_Date(){
      let dateNow = new Date();
      let time = dateNow.toLocaleTimeString('en-Us',{hour: '2-digit', minute: '2-digit'});
      let date = dateNow.toLocaleDateString('en-GB');
      return {
          time,
          date
      }
    }
  },
  methods:{
    ...mapActions(["getNew2AddedBlogs"])
  },
  created(){
    this.getNew2AddedBlogs();
  }
}
</script>

<style lang="scss" scoped>
.blogs {
    padding: 20px 0;
    h3 {
        margin-bottom:10px;
        color:#253444;
    }
    .blogs-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        justify-content:center;
        align-items: center;
        .blog {
            padding: 15px;
            background-color: #e5e5e5;
            color:#253444;
            height:100%;
            position: relative;
            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h5 {
                    margin-bottom:0;
                    a {
                        text-decoration: none;
                        color: #28ca71;
                    span {
                        opacity:0;
                        transition:0.5s;
                        color:#253444
                    }
                    }
                    &:hover a span {
                        opacity:1
                    }
                }
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
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>