<template>
    <div class="newBlog">
        <h2 class="text-center">Add Blog</h2>
        <form @submit.prevent="addNewBlog($event)">
            <div class="form-group">
                <input class="form-control" required="required" v-model="title" type="text" placeholder="Blog Title">
            </div>
            <div class="form-group">
                <textarea class="form-control" required="required" v-model="body" id="exampleFormControlTextarea1" rows="3" placeholder="Blog Content"></textarea>
            </div>
            <div class="form-group">
                <input class="form-control" required="required" v-model="author" type="text" placeholder="Blog Author">
            </div>
            <input v-if="checkUpdatedBlog(getUpdatedBlog)" class="btn btn-block" type="submit" value="Add Blog">
            <input v-else class="btn btn-block" type="submit" value="Update Blog">
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
export default {
    name:"AddBlog",
    data(){
        return {
            title: "",
            body: "",
            author: "",
        }
    },
    methods: {
        ...mapActions(["addBlog", "updateBlogFunc", "editAlertType", "resetUpdatedBlog"]),
        addNewBlog(e){
            // console.log(e.submitter.value);
            if(this.title.trim() == "" || this.body.trim() == ""){
                alert ("Please, Fill All Fields in The Form Above !")
            }else {
                if(e.submitter.value === "Add Blog"){
                    let myData = {
                        title: this.title,
                        body: this.body,
                        author: this.author,
                    }
                    this.addBlog(myData)
                    this.editAlertType("add")
                }else {
                    // if((this.title === this.getUpdatedBlog.title) && (this.body === this.getUpdatedBlog.body) && (this.author === this.getUpdatedBlog.author)) {
                    //     this.editAlertType("noThing")
                    //     console.log("No thing Changes");
                    // }
                    let myData = {
                        id: this.getUpdatedBlog.id,
                        title: this.title,
                        body: this.body,
                        author: this.author,
                    }
                    this.updateBlogFunc(myData)
                    this.editAlertType("update")
                    this.resetUpdatedBlog()
                }
            }
            this.clearData()
        },
        clearData(){
            this.title = "";
            this.body = ""; 
            this.author = ""; 
        },
        checkUpdatedBlog(getUpdatedBlog){
            if(Object.keys(getUpdatedBlog).length === 0 && getUpdatedBlog.constructor === Object){
                return true
            }else{
                return false
            }
        }
    },
    computed:{
        ...mapGetters(["UpdatedBlog", "getUpdatedBlog"]),
        ...mapState(['updatedBlog']),
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
    created() {
        this.$store.watch(
        (state, getters) => getters.getUpdatedBlog,
        newValue => {
                let updatedBlog = newValue;
                this.title = updatedBlog.title;
                this.body = updatedBlog.body;
                this.author = updatedBlog.author || "Salem Tarek";
            },
        );
  },
}
</script>

<style lang="scss" scoped>
.newBlog {
    margin:20px 0;
    h2 {
        color:#28ca71;
    }
    input[type='submit']{
        background-color: #253444;
        color: #28ca71;
        transition:0.5s;
        &:hover {
            background-color:rgba(#253444, 0.93);
        }
    }
}
</style>