import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    
    initialState:{
        userName: 'Felipe24',
        name: 'Felipe',
        email: 'felipe@mail.com',
        lastConnection: 'hoy'
    },

    reducers:{
        setUserData:(state,action)=>{
            const {userName,name,email,lastConnection} = action.payload
            state.userName = userName
            state.name = name,
            state.email = email,
            state.lastConnection = lastConnection
        },
        changeEmail:(state,action) =>{
            state.email = action.payload.email
        }

    }
})

export const {setUserData,changeEmail} = userSlice.actions
export default userSlice.reducer


