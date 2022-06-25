import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useAppDispatch } from '../../app/hooks'

const AddPostForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onSavePostClicked = () => {
    dispatch(addPost({ id: nanoid(), title: title, content: content }))
  }

  return (
    <section>
      <form action=''>
        <label htmlFor=''> Post Title: </label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <label htmlFor='postContent'> Content: </label>
        <textarea
          name='postContent'
          id='postContent'
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
        <button onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm
