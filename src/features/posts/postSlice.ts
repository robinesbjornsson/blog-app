import { RootState } from '../../app/store'
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit'

import axios, { AxiosError } from 'axios'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

interface Comment {
  postId: PostType['id']
  id: number
  name: string
  email: string
  body: string
}

interface PostType {
  id: string
  title: string
  content: string
  userId: any
  comments?: Comment[]
}

export interface PostState {
  posts: PostType[]
  status: string
  error: any
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL)
    return [...response.data] //can return response.data without spreading into new array
  } catch (error: any) {
    return error.message
  }
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<PostType>) {
        state.posts.push(action.payload)
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
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const getPosts = (state: RootState) => state.posts.posts
export const getPostsStatus = (state: RootState) => state.posts.status
export const getPostsError = (state: RootState) => state.posts.error

export const { addPost } = postSlice.actions

export default postSlice.reducer
