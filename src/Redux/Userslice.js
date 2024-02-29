import { createSlice } from "@reduxjs/toolkit";
import {UsersData} from '../Fackuser'
import { useReducer } from "react";

export const userSlice = createSlice({
    name : 'users',
    initialState : {value : UsersData},
    reducers :{
        addUser : (state,action) =>{
            state.value.push(action.payload)
        },
        deleteUser : (state,action) =>{
            state.value = state.value.filter((user) =>user.id !== action.payload.id)
        },
        updateUserName : (state,action) =>{
            state.value.map((user)=>{
                if( user.id === action.payload.id){
                    user.username =action.payload.username ;
                    user.name = action.payload.name;
                }
            })
        }
    },
});
export const {addUser,deleteUser,updateUserName} = userSlice.actions;
export default userSlice.reducer;