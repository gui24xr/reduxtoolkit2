import React from 'react';
import { useSelector,useDispatch } from 'react-redux'

export default function Componente1  () {
    
  const userData = useSelector(state=> state.user)
  const favPosts = useSelector(state=>state.posts.favoritesPosts.length)
    return (
        <>
        
            <h2>Datos User en Store</h2>
            {userData && (
                <div>
                <p>{userData.userName}</p>
                <p>{userData.name}</p>
                <p>{userData.email}</p>
                </div>
                )
            }
            <div>
                <div className="favorites-container">
                    <span className="heart-icon">❤️</span>
                    <span className="favorites-count">{favPosts} FAVORITOS</span>
                </div>
            </div>

       </>
    );
}


