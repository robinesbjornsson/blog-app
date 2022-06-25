import React, { useState } from "react";
import logo from './logo.svg'
import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'

import { RootState } from './app/store'
import { useDispatch, useSelector } from 'react-redux'
import { addReservation } from './features/posts/reservationSlice'
import ReservationCard from "./features/posts/ReservationCard";

function App() {
  const dispatch = useDispatch();


  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector((state: RootState) => state.customer.value);


  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Create a post</h5>
            <ReservationCard />
          </div>
       
        </div>
        <div className="customer-food-container">

          {customers.map((customer) => {
            return (
              <> 
               <div>
                 <h1>THIS IS A POST CARD </h1>
                 <h3>{customer.id}</h3>
                 <h3>{customer.name}</h3>
                 <h3>{customer.food}</h3>
               </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;