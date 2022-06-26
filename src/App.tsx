import './App.css'
import { useSelector } from 'react-redux'
import AddPostForm from './features/posts/AddPostForm'
import PostList from './features/posts/PostList'
import { Routes, Route, Navigate } from 'react-router-dom';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './Components/Layout';
import EditPostForm from './features/posts/EditPostForm';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<PostList />} />

      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />} />
        <Route path="edit/:postId" element={<EditPostForm />} />
      </Route>

      <Route path="user">
        {/* <Route index element={<UsersList />} /> */}
        {/* <Route path=":userId" element={<UserPage />} /> */}
      </Route>

      {/* Catch all - replace with 404 component if you want */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Route>
  </Routes>
  )
}

export default App
