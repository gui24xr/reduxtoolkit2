import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addFavoritePost } from '../redux/postsSlice';
import './posts.css'

const PostsContainer = () => {

    const postsList = useSelector(state => state.posts.filteredPost)
    const dispatch = useDispatch()

    const handleFav = (post)=>{
        console.log(post)
        dispatch(addFavoritePost({post:post}))
    }

    return (
        <div className="posts-container">
        {postsList?.map(post => (
            <div onClick={()=>handleFav(post)} className="post-card" key={post.id}>
                <img src={post.image} alt={post.title} className="post-image" />
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
        ))}
    </div>
    );
}

export default PostsContainer;
