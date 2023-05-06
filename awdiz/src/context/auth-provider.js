import React from "react"
import { useReducer } from 'react';
import { createContext } from "react";
export const AuthContax = createContext();
export const initialState = { user: null };

function reducer(state, action) {
    switch (action.type) {
        case "login": 
            return {
                user: action.payload
           };
       
        case "logout": 
            return {
                user : null
           };
           default:
            return state;
    }
   
}

 const AuthProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer,initialState)
    const login = (userData) => {

        dispatch ({
            type: "login",
            payload: userData
        })
    }
    const logout = () => {

        dispatch ({
            type: "logout",
            
        })
    }
    
    return(
        <AuthContax.Provider value = {{ state, login, logout}}>
            {children}
        </AuthContax.Provider>
    )



}
export default AuthProvider;