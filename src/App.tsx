import React, { useState } from "react";
import logo from './logo.svg'
import './App.css'
import PostsList from './features/posts/PostList'

import { RootState } from './app/store'
import { useDispatch, useSelector } from 'react-redux'
import AddCustomerForm from "./features/posts/AddPostForm";
import CustomerList from "./features/posts/PostList";
function App() {


  return (
    <div className="App">

            <AddCustomerForm />

            <CustomerList/>
 
       
    
    </div>
  );
}

export default App;