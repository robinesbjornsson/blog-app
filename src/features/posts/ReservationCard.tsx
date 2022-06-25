import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomer } from './CustomerSlice'
import { RootState } from '../../app/store'

function ReservationCard() {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [food, setFood] = useState('')

  const customers = useSelector((state: RootState) => state.customer.value)


  return (
    <div>
      <div>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />

        <input
          value={food}
          onChange={(e) => {
            setFood(e.target.value)
          }}
        />

        <button
            onClick={() => {
            dispatch(
              addCustomer({
                id: nanoid(),
                name,
                food,
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

export default ReservationCard
