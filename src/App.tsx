import AddPostForm from './features/posts/SinglePost/AddPostForm'
import PostList from './features/posts/PostList/PostList'
import { Routes, Route, Navigate } from 'react-router-dom'
import SinglePostPage from './features/posts/SinglePost/SinglePostPage'
import Layout from './Components/Layout'
import EditPostForm from './features/posts/SinglePost/EditPostForm'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostList />} />

        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>

        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  )
}

export default App
