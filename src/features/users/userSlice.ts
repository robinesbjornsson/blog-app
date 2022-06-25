import { createSlice } from '@reduxjs/toolkit'
import { RootState } from "../../app/store";


interface User {
  id: string
  name: string
}

export interface UserState {
  user: User[]
}

const initialState: UserState = {
  user: [
    {
      id: '1',
      name: 'Zacharias Zacharoff',
    },
    {
      id: '2',
      name: 'Sofia Andersson',
    },
  ],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const selectAllUsers = (state: RootState) => state.users.user

export default userSlice.reducer