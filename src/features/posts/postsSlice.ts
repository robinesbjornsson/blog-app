import { createSlice } from '@reduxjs/toolkit'

export interface Post {
  id: string
  title: string
  content: string
}

export interface PostState {
  posts: Post[]
}

const initialState: PostState = {
  posts: [
    {
      id: '1',
      title: 'Learning Redux Toolkit',
      content: "I've heard good things.",
    },
    {
      id: '2',
      title: 'Slices...',
      content: 'The more I say slice, the more I want pizza.',
    },
  ],
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})


export const selectAllposts = (state: PostState) => state.posts

export default postSlice.reducer
