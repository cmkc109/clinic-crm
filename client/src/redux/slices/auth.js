import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false 
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { 
        signIn: (state, action) => {
            state.isLoggedIn= true
            sessionStorage.setItem("isLoggedIn", true)
        },
        signOut : (state) => {
          state.isLoggedIn = false;
          sessionStorage.removeItem("isLoggedIn")
        }
      
     },
  })

export const { signIn, signOut } = authSlice.actions  
export default authSlice.reducer