import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { addPost } from './postSlice'

function AddCustomerForm() {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const posts = useSelector((state: RootState) => state.post.value)


  return (
    <div>
      <div>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />

        <button
            onClick={() => {
            dispatch(
              addPost({
                id: nanoid(),
                title,
                content,
              })
            )
          }}
        >
          Add
        </button> 
      </div>
    </div>
  )
}

export default AddCustomerForm
