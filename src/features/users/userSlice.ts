import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

interface User {
  id: string
  name: string
}
interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: [],
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(USERS_URL)
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = state.users.concat(action.payload)
    })
  },
})

export const getUsers = (state: RootState) => state.users.users
export const getUserById = (state: RootState, userId: any) =>
  state.users.users.find((user) => user.id === userId)

export default usersSlice.reducer
