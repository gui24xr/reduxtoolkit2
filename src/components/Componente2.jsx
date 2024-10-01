import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userslice';
import { searchPosts } from '../redux/postsSlice';

const Componente2 = () => {

    const dispatch = useDispatch()

    const handleSubmit = (event)=>{
        event.preventDefault()
        const datosForm = new FormData(event.target)
        const {username:inputUserName,name:inputName,email:inputEmail} = Object.fromEntries(datosForm.entries())
        console.log('Datos capturados: ',inputUserName,inputName,inputEmail)


        dispatch(setUserData({
            userName:inputUserName,
            name: inputName,
            email:inputEmail
        }))

    }

    const handleSearchInputChange = (event)=>{
        console.log(event.target.value)
        const query = event.target.value
        dispatch(searchPosts({query:query}))

    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <label>userName</label>
                <input type="text" name="username" required/>
                <label>name</label>
                <input type="text" name="name" required/>
                <label>email</label>
                <input type="email" name="email" required />
                <button type="submit">Aceptar</button>
            </form>
        </div>
        <div>
            <div >
                <label>Buscar</label>
                <input type="text" name="query" onChange={handleSearchInputChange}/>
            </div>
        </div>
        </>
    );
}

export default Componente2;



