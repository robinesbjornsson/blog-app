import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface Post {
  id: string
  title: string
  content: string
  userId?: any
}

export interface PostState {
  post: Post[]
}

const initialState: PostState = {
  post: [
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
  ],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.post.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        }
      },
    },
  },
})

export const selectAllPosts = (state: RootState) => state.posts.post

export const { addPost } = postSlice.actions

export default postSlice.reducer
