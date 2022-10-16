import axios from "axios"

const state = {
    comments:[],
    updatedComment:{},
}
const getters = {
    AllComments: state => state.comments,
    commentWillUpdated: state => id => {
        return state.comments.find(comment => comment.id == id)
    },
    getUpdatedComment: state => state.updatedComment,
}
const actions = {
    async getComments ({ commit }, myData) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        if(myData){
            commit('getComments', myData)
        }else{
            commit('getComments', response.data)
        }
    },
    async addComment({commit},{email, body}) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/comments',
        {
            email,
            body
        })
        commit('addComment', response.data)
    },
    async deleteComment(context, id){
        if(context.state.updatedComment.id !== id){
            await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
            context.commit("deleteComment", id)
        }else{
            alert("Can't Delete a Comment that You Update it Now")
        }
    },
    async updateCommentFunc ({commit}, updatedComment){
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/comments/${updatedComment.id}`, updatedComment);
        commit('updateComment', response.data)
    },
    updateCommentData({commit}, comment){
        commit('updateCommentData', comment)
    },
    resetUpdatedComment({commit}){
        commit('resetUpdatedComment')
    }
}
const mutations = {
    getComments: (state, comments) => state.comments = comments,
    addComment: (state, newComment) => state.comments.push(newComment),
    deleteComment: (state, id) => state.comments = state.comments.filter(comment => comment.id !== id),
    updateComment: (state, updatedComment) => {
        let CommentIndex = state.comments.findIndex(comment => comment.id == updatedComment.id);
        if(CommentIndex !== -1){
            state.comments.splice(CommentIndex, 1, updatedComment)
        }
    },
    updateCommentData: (state, updatedComment) => state.updatedComment = updatedComment,
    resetUpdatedComment: (state) => state.updatedComment = {}
}

export default {
    state,
    getters,
    actions,
    mutations
}