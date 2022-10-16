<template>
    <div class="newComment">
        <form id="form" @submit.prevent="addNewComment($event)">
            <div class="form-group">
                <input class="form-control" required="required" v-model="email" type="text" placeholder="Email">
            </div>
            <div class="form-group">
                <textarea class="form-control" required="required" v-model="body" id="exampleFormControlTextarea1" rows="3" placeholder="Comment"></textarea>
            </div>
            <input v-if="checkUpdatedComment(getUpdatedComment)" class="btn btn-block" type="submit" value="Add Comment">
            <input v-else class="btn btn-block" type="submit" value="Update Comment">
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
export default {
    name: "AddComment",
    data(){
        return {
            email: "",
            body:  ""
        }
    },
    methods: {
        ...mapActions(["addComment", "updateCommentFunc", "resetUpdatedComment"]),
        addNewComment(e){
            // console.log(e.submitter.value);
            if(this.email.trim() == "" || this.body.trim() == ""){
                alert ("Please, Fill All Fields in The Form Above !")
            }else {
                if(e.submitter.value === "Add Comment"){
                    let myData = {
                        email: this.email,
                        body: this.body,
                    }
                    this.addComment(myData)
                }else {
                    let myData = {
                        id: this.getUpdatedComment.id,
                        email: this.email,
                        body: this.body,
                    }
                    this.updateCommentFunc(myData);
                    this.resetUpdatedComment();
                }
            }
            this.clearData()
        },
        clearData(){
            this.email = "";
            this.body = ""; 
        },
        checkUpdatedComment(getUpdatedComment){
            if(Object.keys(getUpdatedComment).length === 0 && getUpdatedComment.constructor === Object){
                return true
            }else{
                return false
            }
        }
    },
    computed:{
        ...mapGetters(["UpdatedComment", "getUpdatedComment"]),
        ...mapState(['updatedComment']),
    },
    created() {
        this.$store.watch(
        (state, getters) => getters.getUpdatedComment,
        newValue => {
                let updatedComment = newValue;
                this.email = updatedComment.email;
                this.body = updatedComment.body;
            },
        );
  },
}
</script>

<style lang="scss" scoped>
.newComment {
    input[type='submit']{
        background-color: #28ca71
    }
}
</style>