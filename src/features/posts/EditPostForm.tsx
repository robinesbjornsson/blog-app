import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deletePost, getPostById, updatePost } from './postSlice'

import { getUsers } from '../users/userSlice'

const EditPostForm = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const post = useAppSelector((state) => getPostById(state, Number(postId)))
  const users = useAppSelector(getUsers)

  const [title, setTitle] = useState(post?.title)
  const [content, setContent] = useState(post?.body)
  const [userId, setUserId] = useState(post?.userId)
  const [requestStatus, setRequestStatus] = useState('idle')

  const dispatch = useAppDispatch()

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  const onSavePostClicked = (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      setRequestStatus('pending')
      console.log('dispatch from editpostform', post.id, userId) //98 8
      dispatch(
        updatePost({ id: post.id, title, body: content, userId })
      ).unwrap()
      setTitle('')
      setContent('')
      setUserId('')
      navigate(`/post/${postId}`)
    } catch (error) {
      console.error('failedto save the post', error)
    } finally {
      setRequestStatus('idle')
    }
  }

  const onDeletePostClicked = () => {
    try {
      setRequestStatus('pending')
      dispatch(deletePost({ id: post.id })).unwrap()
      setTitle('')
      setContent('')
      setUserId('')
      navigate('/')
    } catch (err) {
      console.error('Failed to delete the post', err)
    } finally {
      setRequestStatus('idle')
    }
  }
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor='postTitle'> Post Title: </label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value)
          }}
        >
          <option value=''></option>
          {userOptions}
        </select>

        <label htmlFor='postContent'> Content: </label>
        <textarea
          name='postContent'
          id='postContent'
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />

        <button type='submit'>Save Post</button>
        <button onClick={onDeletePostClicked}>Delete Post</button>
      </form>
    </section>
  )
}

export default EditPostForm
