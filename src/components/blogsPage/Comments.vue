<template>
  <div class="comments" id="elem">
    <h3 class="text-center" v-if="!AllComments.length">No Comments For This Post</h3>
    <h4 class="text-left">Comments:</h4>  
    <transition-group name="fade-slide" mode="out-in">
      <div v-for="comment in AllComments" :key="comment.id" class="comment">
        <div class="img_sender">
          <div class="img">
            <img src="../../assets/logo.png" :alt="comment.name" width="50" height="50">
          </div>
          <h5 :title="comment.email">{{ formatingemailLenth(comment.email) }}</h5>
        </div>
        <p class="lead">{{ comment.body }}</p>
        <div class="delete_edit">
          <i class="fa fa-pen" title="Edit" @click="getCommentData(comment)"></i>
          <i class="fa fa-trash" title="Delete" @click="deleteComment(comment.id)"></i>  
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import axios from "axios"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Comments",
  data(){
    return {
      comments:[]
    }
  },
  computed: {
    ...mapGetters(['AllComments', 'isNewComment', 'commentWillUpdated', 'getUpdatedComment', 'getIsCommentEdited']),
  },
  methods:{
    ...mapActions(["getComments", "deleteComment", "updateCommentData"]),
    getCommentData(comment){
      this.updateCommentData(comment);
      window.scrollBy({ 
        top: 3000, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
    },
    formatingemailLenth(title){
        if(title.length > 16){
          if(window.innerWidth > 800){
            return title
          }else {
            let formatedmail = title.slice(0, 13);
            return `${formatedmail}...`
          }
        }else {
          return title
        }
      } 
  },
  created(){
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.$route.params.id}`)
      .then(res => this.getComments(res.data))
      .catch(err => console.log(err));
  },
}
</script>

<style lang="scss" scoped>
.fade-slide-enter, .fade-slide-leave-to {
  opacity:0;
  transform: translateX(-2em);
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
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
    position:relative;
    .img_sender {
      display: flex;
      align-items:center;
      gap:10px;
      .img {
        border:1px solid #253444;
        padding:5px 3px;
        img {
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
      margin-top: 10px;
      padding-bottom: 20px;
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
}  
</style>