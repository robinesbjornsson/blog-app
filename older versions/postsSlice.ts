import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Post = {
  id: string
  title: string
  content: string
}


export interface PostState {
  value: Post[]
}

const initialState: PostState = {
  value: [

  ],
}

/* 
    {
      id: '1',
      title: 'Post one',
      content: 'im having fun',
    },
    {
      id: '2',
      title: 'Post two',
      content: 'im having fun',
    },

*/

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.value.push(action.payload)
    },
  },
})

export const selectAllposts = (state: PostState) => state.value

export const { addPost } = postSlice.actions

export default postSlice.reducer
