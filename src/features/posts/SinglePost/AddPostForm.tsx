import './SinglePostPage.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { getUsers } from '../../users/userSlice'
import { addNewPost } from '../postSlice'
function AddCustomerForm() {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useSelector(getUsers)

  const navigate = useNavigate()
  //const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      setAddRequestStatus('pending')
      dispatch(addNewPost({ title, body: content, userId }))
      setTitle('')
      setContent('')
      setUserId('')
      navigate('/')
    } catch (error) {
      console.error('failedto save the post', error)
    } finally {
      setAddRequestStatus('idle')
    }
  }

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section className='add-post-form-container'>
      <form onSubmit={handleSubmit}>
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

        <label htmlFor='postAuthor'> Author: </label>
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

        <button type='submit' className='save-post-button'>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddCustomerForm
