
import './App.css'
import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'
import PostsContainer from './components/PostsContainer'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userslice'
import { setPostsList } from './redux/postsSlice'

function App() {

  const dispatch = useDispatch()
  
  function setInicialState(){
    axios.get('https://jsonplaceholder.org/users/1')
    .then(res => {
      console.log(res.data)
      dispatch(setUserData({
        userName:res.data.login.username,
        name: res.data.firstname,
        email:res.data.email
    }))
    })
  }

  function getPostsFromServer(){
    axios.get('https://jsonplaceholder.org/posts')
    .then(res => {
      console.log(res.data)
      dispatch(setPostsList({postsList:res.data}))
    })
  }


  //Useeffect para despues del primer render
  useEffect(()=>{
   setInicialState()
   getPostsFromServer()
  },[])

  return (
    <>
     <h2>Home page</h2>
      <Componente1/>
      <Componente2/>
      <PostsContainer/>
    </>
  )
}

export default App
