import { RootState } from "../../app/store";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

interface User {
  id: string
  name: string
}

export interface UserState {
  user: User[]
}

const initialState: UserState = {
  user: [

  ],
}

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
  try {
    const response = await axios.get(USERS_URL)
    return [...response.data] //can return response.data without spreading into new array
  } catch (error: any) {
    return error.message
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload
      })
  
  },
})

export const selectAllUsers = (state: RootState) => state.users.user

export default userSlice.reducer