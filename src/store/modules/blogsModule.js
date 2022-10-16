import axios from "axios"

const state = {
    blogs:[],
    updatedBlog:{},
    alertType: "",
    getNew2AddedBlogs: []
}
const getters = {
    AllBlogs: state => state.blogs,
    blogWillUpdated: state => id => {
        return state.blogs.find(blog => blog.id == id)
    },
    getUpdatedBlog: state => state.updatedBlog,
    getAlertType: state => state.alertType,
    New2AddedBlogs: state => state.getNew2AddedBlogs
}
const actions = {
    async getBlogs ({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('getBlogs', response.data)
    },
    async getNew2AddedBlogs ({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2');
        commit('getNew2AddedBlogs', response.data)
    },
    async addBlog({commit},{title, body, author}) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title,
            body,
            author,
            views: 0
        })
        commit('addBlog', response.data)
    },
    async deleteBlog(context, id){
        if(context.state.updatedBlog.id !== id){
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            context.commit("deleteBlog", id)
        }else{
            alert("Can't Delete a Blog you Update it Now!!")
        }
    },
    async updateBlogFunc ({commit}, updatedBlog){
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${updatedBlog.id}`, updatedBlog);
        commit('updateBlog', response.data)
    },
    updateBlogData({commit}, blog){
        commit('updateBlogData', blog)
    },
    editAlertType({commit}, type){
        commit("editAlertType", type)
    },
    resetUpdatedBlog({commit}){
        commit('resetUpdatedBlog')
    }
}
const mutations = {
    getBlogs: (state, blogs) => state.blogs = blogs,
    getNew2AddedBlogs: (state, getNew2AddedBlogs) => state.getNew2AddedBlogs = getNew2AddedBlogs,
    addBlog: (state, newBlog) => state.blogs.unshift(newBlog),
    deleteBlog: (state, id) => state.blogs = state.blogs.filter(blog => blog.id !== id),
    updateBlog: (state, updatedBlog) => {
        let blogIndex = state.blogs.findIndex(blog => blog.id == updatedBlog.id);
        if(blogIndex !== -1){
            state.blogs.splice(blogIndex, 1, updatedBlog)
        }
    },
    updateBlogData: (state, updatedBlog) => state.updatedBlog = updatedBlog,
    editAlertType: (state, type) => state.alertType = type,
    resetUpdatedBlog: (state) => state.updatedBlog = {}
}

export default {
    state,
    getters,
    actions,
    mutations
}