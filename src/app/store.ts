import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice'
import userReducer from '../features/users/userSlice'
import sideBarReducer from '../features/users/SidebarSlice'
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    sideBarActive: sideBarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
