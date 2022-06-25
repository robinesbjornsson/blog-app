import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userSlice'
import { addPost } from './postSlice'

function AddCustomerForm() {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector(selectAllUsers)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (title && content) {
      dispatch(addPost(title, content, userId))
    }
    setTitle('')
    setContent('')
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
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

        <button type='submit' disabled={!canSave}>Add Post</button>
      </form>
    </section>
  )
}

export default AddCustomerForm
