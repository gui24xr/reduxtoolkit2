import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name:"posts",
    initialState:{
        postsList:null,
        selectedPost:null,
        filteredPost:null,
        favoritesPosts:[]
    },

    reducers:{
        setPostsList:(state,action)=>{
            state.postsList = action.payload.postsList
        },
        setSelectedPost:(state,action)=>{
            state.postsList = action.payload.post
        },
        addFavoritePost:(state,action)=>{
            const {post} = action.payload
            if (!state.favoritesPosts.some(item => item.id == post.id))
            state.favoritesPosts.push(post)
        },
        searchPosts:(state,action)=>{
            const {query} = action.payload
            state.filteredPost = state.postsList.filter(posts => posts.title.toLowerCase().includes(query.toLowerCase()))
        }

    }

})

export const {setPostsList,setSelectedPost,addFavoritePost,searchPosts} = postsSlice.actions
export default postsSlice.reducer