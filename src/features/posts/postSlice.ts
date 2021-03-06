import { RootState } from '../../app/store'
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit'
import axios from 'axios'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

interface Comment {
  postId: number
  id?: number
  name: string
  email?: string
  body: string
}

interface PostType {
  id: string
  title: string
  body: string
  userId?: any
  comments?: Comment[]
}

export interface PostState {
  posts: PostType[]
  comments: Comment[]
  status: string
  error: any
}

interface initialPost {
  id?: any
  title: string
  body: string
  userId: any
}

const initialState: PostState = {
  posts: [],
  comments: [],
  status: 'idle',
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL)
    return response.data
  } catch (error: any) {
    return error.message
  }
})

export const fetchComments = createAsyncThunk(
  'posts/fetchComments',
  async () => {
    try {
      const response = await axios.get(COMMENTS_URL)
      return response.data
    } catch (error: any) {
      return error.message
    }
  }
)

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost: initialPost) => {
    try {
      const response = await axios.post(POSTS_URL, initialPost)
      return response.data
    } catch (error: any) {
      return error.message
    }
  }
)

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (initialPost: initialPost['id']) => {
    const { id } = initialPost
    try {
      const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
      return response.data
    } catch (err) {
      return initialPost
    }
  }
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (initialPost: initialPost['id']) => {
    const { id } = initialPost
    const response = await axios.delete(`${POSTS_URL}/${id}`)
    if (response?.status === 200) return initialPost
    return `${response?.status}: ${response?.statusText}`
  }
)

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<PostType>) {
        state.posts.push(action.payload)
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
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
        const loadedPosts = action.payload
        state.posts = state.posts.concat(loadedPosts)
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const comments = action.payload
        state.comments = state.comments.concat(comments)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.id = state.posts[state.posts.length - 1].id + 1
        action.payload.userId = Number(action.payload.userId)
        console.log(action.payload)
        state.posts.push(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log('UPDATE POST CASE', action.payload)
        if (!action.payload?.id) {
          console.log('Update could not complete')
          return
        }
        const { id } = action.payload
        const posts = state.posts.filter((post) => post.id !== id)
        state.posts = [...posts, action.payload]
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete')
          return
        }
        const { id } = action.payload
        const posts = state.posts.filter((post) => post.id !== id)
        state.posts = posts
      })
  },
})

export const getPosts = (state: RootState) => state.posts.posts
export const getPostsStatus = (state: RootState) => state.posts.status
export const getPostsError = (state: RootState) => state.posts.error
export const getPostById = (state: RootState, postId: any) =>
  state.posts.posts.find((post) => post.id === postId)

export const getComments = (state: RootState) => state.posts.comments
export const getCommentsById = (state: RootState, id: number) =>
  state.posts.comments.filter((comment) => comment.postId === id)

export const { addPost } = postSlice.actions

export default postSlice.reducer
